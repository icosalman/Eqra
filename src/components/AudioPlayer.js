// ============================================
// EQRA — Sticky Bottom Audio Player
// Stream per-Ayah / Surah audio from Islamic Network CDN
// ============================================

class AudioPlayerManager {
  constructor() {
    this.audio = new Audio();
    this.currentTrack = null;
    this.playlist = [];
    this.currentIndex = 0;
    this.isPlaying = false;
    this.container = null;

    this.initAudioListeners();
  }

  initAudioListeners() {
    this.audio.addEventListener('timeupdate', () => this.updateProgress());
    this.audio.addEventListener('ended', () => this.handleTrackEnd());
    this.audio.addEventListener('play', () => {
      this.isPlaying = true;
      this.updatePlayState();
    });
    this.audio.addEventListener('pause', () => {
      this.isPlaying = false;
      this.updatePlayState();
    });
    this.audio.addEventListener('error', (e) => {
      console.warn('Audio playback error:', e);
      this.isPlaying = false;
      this.updatePlayState();
    });
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
            <div class="audio-info-title" id="player-title">তিলাওয়াত নির্বাচন করুন</div>
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

  playTrack(track) {
    if (!track || !track.audio) return;
    this.currentTrack = track;
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
    if (this.playlist.length > 0 && this.currentIndex > 0) {
      this.currentIndex--;
      this.playTrack(this.playlist[this.currentIndex]);
    } else if (this.audio.currentTime > 3) {
      this.audio.currentTime = 0;
    }
  }

  nextTrack() {
    if (this.playlist.length > 0 && this.currentIndex < this.playlist.length - 1) {
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
    const bar = document.getElementById('global-audio-bar');
    if (bar) bar.classList.remove('active');
  }
}

export const audioPlayer = new AudioPlayerManager();
