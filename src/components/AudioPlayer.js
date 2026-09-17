// ============================================
// EQRA — Sticky Bottom Audio Player & Synchronizer
// Sub-second word-by-word highlight & verse auto-advancement
// ============================================

import { saveSurahProgress } from '../utils/storage.js';
import { recordAyahRead } from '../services/quranGoalService.js';

class AudioPlayerManager {
  constructor() {
    this.audio = new Audio();
    this.currentTrack = null;
    this.playlist = [];
    this.currentIndex = 0;
    this.isPlaying = false;
    this.container = null;

    // Recitation & Synchronizer state
    this.currentSurahNumber = null;
    this.currentSurahName = '';
    this.totalAyahs = 0;
    this.recitationTimestamps = null; // Array of { ayahNumber, from, to, duration, segments }
    this.activeAyahNumber = null;
    this.endAyahNumber = null; // Optional boundary stop for passage recitation
    this.activeWordIndex = null;
    this.animFrameId = null;

    this.initAudioListeners();
  }

  initAudioListeners() {
    this.audio.addEventListener('timeupdate', () => {
      this.updateProgress();
      this.syncWordTimestamps();
    });

    this.audio.addEventListener('ended', () => this.handleTrackEnd());

    this.audio.addEventListener('play', () => {
      this.isPlaying = true;
      this.updatePlayState();
      this.startSyncLoop();
      window.dispatchEvent(new CustomEvent('eqra:audio-play', {
        detail: {
          surah: this.currentSurahNumber,
          ayah: this.activeAyahNumber
        }
      }));
    });

    this.audio.addEventListener('pause', () => {
      this.isPlaying = false;
      this.updatePlayState();
      this.stopSyncLoop();
      this.clearActiveWord();
      window.dispatchEvent(new CustomEvent('eqra:audio-stopped'));
    });

    this.audio.addEventListener('error', (e) => {
      console.warn('Audio playback error:', e);
      this.isPlaying = false;
      this.updatePlayState();
      this.stopSyncLoop();
      this.clearActiveWord();
    });
  }

  startSyncLoop() {
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
    const loop = () => {
      if (this.isPlaying) {
        this.syncWordTimestamps();
        this.animFrameId = requestAnimationFrame(loop);
      }
    };
    this.animFrameId = requestAnimationFrame(loop);
  }

  stopSyncLoop() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  mount(containerEl) {
    this.container = containerEl;
    this.render();
  }

  render() {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="audio-player" id="global-audio-bar">
        <div class="audio-player-inner">
          <div class="audio-controls">
            <button class="btn-ghost" id="player-prev-btn" title="Previous Ayah" aria-label="Previous Ayah">
              ⏮
            </button>
            <button class="audio-play-btn" id="player-play-btn" title="Play / Pause" aria-label="Play">
              ▶
            </button>
            <button class="btn-ghost" id="player-next-btn" title="Next Ayah" aria-label="Next Ayah">
              ⏭
            </button>
          </div>

          <div class="audio-info">
            <div class="audio-info-title" id="player-title">আল-কুরআন তিলাওয়াত</div>
            <div class="audio-info-subtitle" id="player-reciter">মিশারি রাশিদ আল-আফাসী (Mishary Rashid Al-Afasy)</div>
          </div>

          <div class="audio-progress" id="player-progress-bar">
            <div class="audio-progress-fill" id="player-progress-fill" style="width: 0%;"></div>
          </div>

          <div class="audio-time" id="player-time">0:00 / 0:00</div>

          <button class="btn-ghost" id="player-close-btn" title="বন্ধ করুন" aria-label="Close Player" style="font-size: 1.25rem;">
            ✕
          </button>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    const playBtn = document.getElementById('player-play-btn');
    const prevBtn = document.getElementById('player-prev-btn');
    const nextBtn = document.getElementById('player-next-btn');
    const closeBtn = document.getElementById('player-close-btn');
    const progressBar = document.getElementById('player-progress-bar');

    if (playBtn) playBtn.addEventListener('click', () => this.togglePlay());
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevTrack());
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextTrack());
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    if (progressBar) {
      progressBar.addEventListener('click', (e) => {
        if (!this.audio.duration) return;
        const rect = progressBar.getBoundingClientRect();
        const clickRatio = (e.clientX - rect.left) / rect.width;
        this.audio.currentTime = clickRatio * this.audio.duration;
      });
    }
  }

  /**
   * Play full Surah or selected Ayah range with sub-second timestamps & word synchronization
   */
  playSurahWithSync({ surahNumber, surahName, audioUrl, timestamps, startAyah = 1, endAyah = null, totalAyahs = 0 }) {
    this.currentSurahNumber = parseInt(surahNumber, 10);
    this.currentSurahName = surahName || `সূরা ${surahNumber}`;
    this.totalAyahs = totalAyahs || (timestamps ? timestamps.length : 0);
    this.recitationTimestamps = timestamps || null;
    this.endAyahNumber = endAyah ? parseInt(endAyah, 10) : null;
    this.playlist = [];
    this.currentIndex = 0;

    const bar = document.getElementById('global-audio-bar');
    if (bar) bar.classList.add('active');

    const titleEl = document.getElementById('player-title');
    if (titleEl) {
      titleEl.textContent = `${this.currentSurahName} (তিলাওয়াত)`;
    }

    const reciterEl = document.getElementById('player-reciter');
    if (reciterEl) {
      reciterEl.textContent = 'মিশারি রাশিদ আল-আফাসী (Mishary Rashid Al-Afasy)';
    }

    if (this.audio.src !== audioUrl) {
      this.audio.src = audioUrl;
    }

    // Determine initial seek time based on startAyah
    let seekSec = 0;
    if (startAyah && this.recitationTimestamps) {
      const target = this.recitationTimestamps.find(t => t.ayahNumber === parseInt(startAyah, 10));
      if (target) {
        seekSec = target.from / 1000;
      }
    }

    const onCanPlay = () => {
      if (seekSec > 0) {
        this.audio.currentTime = seekSec;
      }
      this.audio.play().catch(e => console.warn('Play error:', e));
      this.audio.removeEventListener('canplay', onCanPlay);
    };

    if (this.audio.readyState >= 2) {
      if (seekSec > 0) {
        this.audio.currentTime = seekSec;
      }
      this.audio.play().catch(e => console.warn('Play error:', e));
    } else {
      this.audio.addEventListener('canplay', onCanPlay);
    }
  }

  /**
   * Jump playback to a specific Ayah within the timestamped recitation
   */
  seekToAyah(ayahNumber) {
    if (!this.recitationTimestamps) return;
    const target = this.recitationTimestamps.find(t => t.ayahNumber === parseInt(ayahNumber, 10));
    if (target) {
      this.audio.currentTime = target.from / 1000;
      if (!this.isPlaying) {
        this.audio.play().catch(e => console.warn('Seek play error:', e));
      }
    }
  }

  /**
   * Jump playback to a specific word inside an Ayah
   */
  seekToWord(ayahNumber, wordIdx) {
    if (!this.recitationTimestamps) return;
    const target = this.recitationTimestamps.find(t => t.ayahNumber === parseInt(ayahNumber, 10));
    if (target && target.segments) {
      const seg = target.segments.find(s => s[0] === parseInt(wordIdx, 10));
      if (seg) {
        this.audio.currentTime = seg[1] / 1000;
        if (!this.isPlaying) {
          this.audio.play().catch(e => console.warn('Seek word error:', e));
        }
      }
    }
  }

  /**
   * Real-time synchronizer: matches current audio time against segments
   */
  syncWordTimestamps() {
    if (!this.recitationTimestamps || !this.isPlaying) return;

    const currentMs = Math.round(this.audio.currentTime * 1000);
    const surahNum = this.currentSurahNumber;

    // Check if endAyah was reached (for passage recitations like Daily Ayah 94:5-6)
    if (this.endAyahNumber && this.recitationTimestamps) {
      const endTarget = this.recitationTimestamps.find(t => t.ayahNumber === this.endAyahNumber);
      if (endTarget && currentMs >= endTarget.to) {
        this.audio.pause();
        this.isPlaying = false;
        this.updatePlayState();
        this.stopSyncLoop();
        this.clearActiveWord();
        window.dispatchEvent(new CustomEvent('eqra:audio-stopped'));
        return;
      }
    }

    // Find active verse
    const activeVerse = this.recitationTimestamps.find(t => currentMs >= t.from && currentMs <= t.to);

    if (activeVerse) {
      const ayahNum = activeVerse.ayahNumber;

      // Check if Ayah changed
      if (this.activeAyahNumber !== ayahNum) {
        this.activeAyahNumber = ayahNum;

        // Auto-save reading progress
        if (surahNum && this.totalAyahs) {
          saveSurahProgress(surahNum, ayahNum, this.totalAyahs);
          recordAyahRead(surahNum, ayahNum);
        }

        // Update player title with active verse
        const titleEl = document.getElementById('player-title');
        if (titleEl) {
          titleEl.textContent = `${this.currentSurahName} : আয়াত ${ayahNum}`;
        }

        // Dispatch Ayah change event
        window.dispatchEvent(new CustomEvent('eqra:active-ayah-change', {
          detail: {
            surah: surahNum,
            ayah: ayahNum
          }
        }));
      }

      // Check active word segment within this verse
      let foundWordIdx = null;
      if (activeVerse.segments && activeVerse.segments.length > 0) {
        for (const seg of activeVerse.segments) {
          if (seg.length >= 3) {
            const [wIdx, startMs, endMs] = seg;
            if (currentMs >= startMs && currentMs <= endMs) {
              foundWordIdx = wIdx;
              break;
            }
          }
        }
      }

      if (this.activeWordIndex !== foundWordIdx) {
        this.activeWordIndex = foundWordIdx;
        window.dispatchEvent(new CustomEvent('eqra:active-word-change', {
          detail: {
            surah: surahNum,
            ayah: ayahNum,
            wordIdx: foundWordIdx
          }
        }));
      }
    }
  }

  clearActiveWord() {
    this.activeWordIndex = null;
    window.dispatchEvent(new CustomEvent('eqra:active-word-change', {
      detail: {
        surah: this.currentSurahNumber,
        ayah: this.activeAyahNumber,
        wordIdx: null
      }
    }));
  }

  playTrack(track) {
    if (!track || !track.audio) return;
    this.currentTrack = track;
    this.recitationTimestamps = null; // Single track mode
    this.endAyahNumber = null;
    this.currentSurahNumber = track.surah || null;
    this.activeAyahNumber = track.ayah || null;

    this.audio.src = track.audio;
    this.audio.play().catch(e => console.warn('Autoplay prevented:', e));

    const bar = document.getElementById('global-audio-bar');
    if (bar) bar.classList.add('active');

    const titleEl = document.getElementById('player-title');
    if (titleEl) {
      titleEl.textContent = track.title || 'আল-কুরআন তিলাওয়াত';
    }

    const reciterEl = document.getElementById('player-reciter');
    if (reciterEl && track.subtitle) {
      reciterEl.textContent = track.subtitle;
    }

    if (track.surah && track.ayah) {
      window.dispatchEvent(new CustomEvent('eqra:active-ayah-change', {
        detail: { surah: track.surah, ayah: track.ayah }
      }));
    }
  }

  playPlaylist(list, startIndex = 0) {
    if (!list || list.length === 0) return;
    this.playlist = list;
    this.currentIndex = startIndex;
    this.playTrack(this.playlist[this.currentIndex]);
  }

  togglePlay() {
    if (!this.audio.src) return;
    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play().catch(e => console.warn('Audio play error:', e));
    }
  }

  prevTrack() {
    if (this.recitationTimestamps && this.recitationTimestamps.length > 0) {
      // Find current or previous ayah
      const currentMs = this.audio.currentTime * 1000;
      const idx = this.recitationTimestamps.findIndex(t => currentMs >= t.from && currentMs <= t.to);
      if (idx > 0) {
        this.seekToAyah(this.recitationTimestamps[idx - 1].ayahNumber);
      } else if (idx === 0) {
        this.seekToAyah(this.recitationTimestamps[0].ayahNumber);
      }
    } else if (this.playlist.length > 0 && this.currentIndex > 0) {
      this.currentIndex--;
      this.playTrack(this.playlist[this.currentIndex]);
    } else if (this.audio.currentTime > 3) {
      this.audio.currentTime = 0;
    }
  }

  nextTrack() {
    if (this.recitationTimestamps && this.recitationTimestamps.length > 0) {
      const currentMs = this.audio.currentTime * 1000;
      const idx = this.recitationTimestamps.findIndex(t => currentMs >= t.from && currentMs <= t.to);
      if (idx >= 0 && idx < this.recitationTimestamps.length - 1) {
        this.seekToAyah(this.recitationTimestamps[idx + 1].ayahNumber);
      }
    } else if (this.playlist.length > 0 && this.currentIndex < this.playlist.length - 1) {
      this.currentIndex++;
      this.playTrack(this.playlist[this.currentIndex]);
    }
  }

  handleTrackEnd() {
    if (this.playlist.length > 0 && this.currentIndex < this.playlist.length - 1) {
      this.currentIndex++;
      this.playTrack(this.playlist[this.currentIndex]);
    } else {
      this.isPlaying = false;
      this.updatePlayState();
      this.stopSyncLoop();
      this.clearActiveWord();
      window.dispatchEvent(new CustomEvent('eqra:audio-stopped'));
    }
  }

  updatePlayState() {
    const playBtn = document.getElementById('player-play-btn');
    if (playBtn) {
      playBtn.textContent = this.isPlaying ? '⏸' : '▶';
    }
  }

  updateProgress() {
    const fill = document.getElementById('player-progress-fill');
    const timeEl = document.getElementById('player-time');
    if (!this.audio.duration) return;

    const percent = (this.audio.currentTime / this.audio.duration) * 100;
    if (fill) fill.style.width = `${percent}%`;

    if (timeEl) {
      timeEl.textContent = `${this.formatTime(this.audio.currentTime)} / ${this.formatTime(this.audio.duration)}`;
    }
  }

  formatTime(secs) {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  close() {
    this.audio.pause();
    this.isPlaying = false;
    this.endAyahNumber = null;
    this.stopSyncLoop();
    this.clearActiveWord();
    window.dispatchEvent(new CustomEvent('eqra:audio-stopped'));
    const bar = document.getElementById('global-audio-bar');
    if (bar) bar.classList.remove('active');
  }
}

export const audioPlayer = new AudioPlayerManager();
