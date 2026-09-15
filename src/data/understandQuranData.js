// ============================================
// EQRA — Understand Quran Vocabulary Data
// Grounded in 'How to Understand 50% & 65% of the Quran'
// by Drs. Islam Fekry (Arabic 101 Publications)
// Strict Bilingual Separation: Pure Bengali in 'bn' and Authentic Original English in 'en'
// ============================================

export const UNDERSTAND_QURAN_METADATA = {
  methodology: {
    totalWordsInQuran: 77800,
    uniqueWords: 18994,
    book1WordsCount: 77,
    book1Percentage: "50%",
    book2WordsCount: 195,
    book2CumulativePercentage: "65%",
    sevenSteps: [
      { step: 1, nameEn: "Literacy", nameBn: "আরবি হরফ জ্ঞান", descEn: "Arabic alphabet system", descBn: "আরবি বর্ণমালা পরিচিতি" },
      { step: 2, nameEn: "L & S Vowels", nameBn: "হ্রস্ব ও দীর্ঘ স্বরচিহ্ন", descEn: "Short & long vowels", descBn: "যবর, যের, পেশ ও মাদ্দ" },
      { step: 3, nameEn: "Pronunciation", nameBn: "সঠিক মাখরাজ", descEn: "Special Arabic sounds", descBn: "বিশুদ্ধ আরবি উচ্চারণ" },
      { step: 4, nameEn: "Tajweed Rules", nameBn: "তাজবীদ রুলস", descEn: "Rules of recitation", descBn: "কুরআন তিলাওয়াতের নিয়ম" },
      { step: 5, nameEn: "Qur'an Vocab", nameBn: "কুরআনিক শব্দভাণ্ডার", descEn: "High-frequency words (50%-85%)", descBn: "সর্বাধিক পুনরাবৃত্ত শব্দভাণ্ডার" },
      { step: 6, nameEn: "Basic Grammar", nameBn: "মৌলিক ব্যাকরণ", descEn: "Quranic grammar essentials", descBn: "কুরআনের নাহু-সরফের মূল নিয়ম" },
      { step: 7, nameEn: "Understand Quran", nameBn: "কুরআন হৃদয়ঙ্গম", descEn: "Direct comprehension & reflection", descBn: "কুরআনের তাদাব্বুর ও সরাসরি অনুধাবন" }
    ],
    pieChart: [
      { labelEn: "Pronouns, Prepositions & Particles", labelBn: "সর্বনাম, অব্যয় ও প্রশ্নবোধক শব্দ", percent: 50, color: "#0284C7" },
      { labelEn: "Frequently Used Nouns & Adjectives", labelBn: "সর্বাধিক ব্যবহৃত বিশেষ্য ও বিশেষণ", percent: 15, color: "#F59E0B" },
      { labelEn: "Core Verbs", labelBn: "কুরআনিক ক্রিয়াপদ (ফে'ল)", percent: 25, color: "#10B981" },
      { labelEn: "Unique & Rare Words", labelBn: "অনন্য ও বিশেষ শব্দ", percent: 10, color: "#64748B" }
    ]
  },
  books: {
    "book-1": {
      id: "book-1",
      number: 1,
      targetPercent: "50%",
      titleEn: "How to Understand 50% of the Quran",
      titleBn: "কুরআনের ৫০% ভাষা বোঝার উপায়",
      subtitleEn: "A Complete Guide for Non-Arabs to Read & Understand the Quran in Arabic",
      subtitleBn: "অনাবরদের জন্য আরবিতে কুরআন পড়া ও বোঝার পূর্ণাঙ্গ নির্দেশিকা",
      author: "Drs. Islam Fekry",
      authorBn: "ড. ইসলাম ফিকরি",
      publisher: "Arabic 101 Publications",
      edition: "Second Edition (2021 / 1442 AH)",
      totalPages: 76,
      totalLists: 7,
      hasAddendum: true,
      pdfUrl: "/books/understand-quran-50.pdf",
      coverColor: "#0284C7",
      coverGradient: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #0284C7 100%)",
      youtubePlaylist: "https://www.youtube.com/playlist?list=PL6TlMIZ5ylgrYBl5c2LGoc1iwTPyYMMYH",
      summaryEn: "Roughly 50% of the entire Holy Quran is made up using only 77 high-frequency words. This book covers demonstrative pronouns, negations, question words, prepositions, connectors, and common particles with authentic Uthmani script and real Quranic verses.",
      summaryBn: "পবিত্র কুরআনের মোট শব্দের প্রায় ৫০% গঠিত হয়েছে মাত্র ৭৭টি সর্বাধিক ব্যবহৃত শব্দের মাধ্যমে। এই বইটিতে আসমাউল ইশারা, না-বোধক শব্দ, প্রশ্নবোধক অব্যয়, প্রিপজিশন এবং সংযোজক শব্দসমূহ কুরআনের বাস্তব আয়াতের মাধ্যমে বিস্তারিত তুলে ধরা হয়েছে।"
    },
    "book-2": {
      id: "book-2",
      number: 2,
      targetPercent: "65%",
      titleEn: "How to Understand 65% of the Quran (Book II)",
      titleBn: "কুরআনের ৬৫% ভাষা বোঝার উপায় (দ্বিতীয় খণ্ড)",
      subtitleEn: "Learn from 50% to 65% of the Noble Quran Vocabulary",
      subtitleBn: "কুরআনের ৫০% থেকে ৬৫% শব্দভাণ্ডার অর্জনের স্বয়ংসম্পূর্ণ গাইড",
      author: "Drs. Islam Fekry",
      authorBn: "ড. ইসলাম ফিকরি",
      publisher: "Arabic 101 Publications",
      edition: "First Edition (2022 / 1443 AH)",
      totalPages: 116,
      totalLists: 11,
      hasAddendum: true,
      pdfUrl: "/books/understand-quran-65.pdf",
      coverColor: "#059669",
      coverGradient: "linear-gradient(135deg, #064E3B 0%, #047857 50%, #10B981 100%)",
      youtubePlaylist: "https://www.youtube.com/playlist?list=PL6TlMIZ5ylgrYBl5c2LGoc1iwTPyYMMYH",
      summaryEn: "Builds upon Book 1 by introducing 195 of the most frequently occurring nouns and adjectives (Names of Allah, attributes, prophets, cosmic signs, faith, deeds, the Hereafter, and family relations), taking your comprehension to 65%.",
      summaryBn: "প্রথম খণ্ডের ভিত্তির ওপর দাঁড়িয়ে কুরআনে শত ও হাজার বার আসা ১৯৫টি বহুল ব্যবহৃত বিশেষ্য ও বিশেষণ (আল্লাহর গুণবাচক নাম, নবীগণের নাম, বিশ্বজগতের নিদর্শন, ঈমান, আমল, আখেরাত ও পরিবার) শিখিয়ে কুরআন বোঝার ক্ষমতা ৬৫%-এ উন্নীত করে।"
    }
  }
};

// ============================================
// BOOK 1 DATA: 7 Lists + Addendum (Maa)
// ============================================
export const BOOK_1_LISTS = [
  {
    id: "list-1",
    listNumber: 1,
    titleEn: "List ONE: Demonstrative Pronouns",
    titleBn: "১ম অধ্যায়: ইশারা সূচক সর্বনাম (আসমাউল ইশারা)",
    descriptionEn: "Words such as 'this' and 'that' used to point to nouns, both near and distant, masculine, feminine, singular, and plural.",
    descriptionBn: "কাছের বা দূরের কোনো বস্তু বা ব্যক্তিকে নির্দেশ করতে ব্যবহৃত শব্দসমূহ (হাযা, যালিকা, হাযিহী, তিলকা ইত্যাদি)।",
    videoUrl: "https://www.youtube.com/watch?v=mChh2WwT4Tk",
    words: [
      {
        arabic: "هَٰذَا",
        transliteration: "hādhā",
        genderEn: "Male / Singular / Near",
        genderBn: "পুংলিঙ্গ / একবচন / নিকটবর্তী",
        meaningEn: "This",
        meaningBn: "ইহা / এই",
        frequency: "400+",
        example: {
          arabic: "قَالُوا۟ هَٰذَا ٱلَّذِى رُزِقْنَا مِن قَبْلُ",
          translationEn: "They will say, 'This is what we were provided with before.'",
          translationBn: "তারা বলবে, 'এ তো সেটাই যা পূর্বে আমাদের রিযিক হিসেবে দেওয়া হয়েছিল।'",
          surah: 2,
          ayah: 25,
          surahNameEn: "Al-Baqarah",
          surahNameBn: "সূরা আল-বাকারা"
        }
      },
      {
        arabic: "ذَٰلِكَ",
        transliteration: "dhālika",
        genderEn: "Male / Singular / Distant",
        genderBn: "পুংলিঙ্গ / একবচন / দূরবর্তী (বা মর্যাদা সূচক)",
        meaningEn: "That (can mean 'this' when referring to high value/position)",
        meaningBn: "ঐটি / সেইটি (মর্যাদার উচ্চতা বুঝাতে কখনো 'ইহা' অর্থেও আসে)",
        frequency: "500+",
        example: {
          arabic: "ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ ۛ فِيهِ",
          translationEn: "This is the Book about which there is no doubt.",
          translationBn: "সেই কিতাব, যাতে কোনো সন্দেহ নেই।",
          surah: 2,
          ayah: 2,
          surahNameEn: "Al-Baqarah",
          surahNameBn: "সূরা আল-বাকারা"
        }
      },
      {
        arabic: "هَٰذِهِۦ",
        transliteration: "hādhihī",
        genderEn: "Female / Singular / Near",
        genderBn: "স্ত্রীলিঙ্গ / একবচন / নিকটবর্তী",
        meaningEn: "This",
        meaningBn: "ইহা / এই",
        frequency: "50+",
        example: {
          arabic: "وَلَا تَقْرَبَا هَٰذِهِ ٱلشَّجَرَةَ",
          translationEn: "And do not approach this tree.",
          translationBn: "আর তোমরা এই গাছটির নিকটবর্তী হয়ো না।",
          surah: 2,
          ayah: 35,
          surahNameEn: "Al-Baqarah",
          surahNameBn: "সূরা আল-বাকারা"
        }
      },
      {
        arabic: "تِلْكَ",
        transliteration: "tilka",
        genderEn: "Female / Singular & Broken Plural / Distant",
        genderBn: "স্ত্রীলিঙ্গ / একবচন ও অচেতন বহুবচন / দূরবর্তী",
        meaningEn: "That / Those",
        meaningBn: "ঐটি / সেইগুলো",
        frequency: "40+",
        example: {
          arabic: "تِلْكَ أُمَّةٌۭ قَدْ خَلَتْ",
          translationEn: "That was a nation that has passed on.",
          translationBn: "সে ছিল এক সম্প্রদায়, যারা অতীত হয়ে গেছে।",
          surah: 2,
          ayah: 134,
          surahNameEn: "Al-Baqarah",
          surahNameBn: "সূরা আল-বাকারা"
        }
      },
      {
        arabic: "هَٰٓؤُلَآءِ",
        transliteration: "hā'ulā'i",
        genderEn: "Plural / Near (All Genders)",
        genderBn: "বহুবচন / নিকটবর্তী (উভয় লিঙ্গ)",
        meaningEn: "These",
        meaningBn: "এরা / এরা সবাই / এইসব",
        frequency: "45+",
        example: {
          arabic: "وَجِئْنَا بِكَ عَلَىٰ هَٰٓؤُلَآءِ شَهِيدًۭا",
          translationEn: "And We bring you as a witness against these.",
          translationBn: "আর এদের বিরুদ্ধে আপনাকে আমি সাক্ষীরূপে উপস্থিত করব।",
          surah: 4,
          ayah: 41,
          surahNameEn: "An-Nisa",
          surahNameBn: "সূরা আন-নিসা"
        }
      },
      {
        arabic: "أُو۟لَٰٓئِكَ",
        transliteration: "ulā'ika",
        genderEn: "Plural / Distant (All Genders)",
        genderBn: "বহুবচন / দূরবর্তী (উভয় লিঙ্গ)",
        meaningEn: "Those",
        meaningBn: "তারা / তারা সবাই / ঐসব লোক",
        frequency: "200+",
        example: {
          arabic: "أُو۟لَٰٓئِكَ عَلَىٰ هُدًۭى مِّن رَّبِّهِمْ ۖ وَأُو۟لَٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ",
          translationEn: "Those are upon guidance from their Lord, and it is those who are the successful.",
          translationBn: "তারাই তাদের প্রতিপালকের নির্দেশিত পথে রয়েছে এবং তারাই সফলকাম।",
          surah: 2,
          ayah: 5,
          surahNameEn: "Al-Baqarah",
          surahNameBn: "সূরা আল-বাকারা"
        }
      },
      {
        arabic: "ٱلَّذِى",
        transliteration: "alladhī",
        genderEn: "Male / Singular / Relative Pronoun",
        genderBn: "পুংলিঙ্গ / একবচন / সম্বন্ধসূচক সর্বনাম",
        meaningEn: "He who / The one who / Which / That which",
        meaningBn: "যিনি / যেটি / যিনি কিনা",
        frequency: "300+",
        example: {
          arabic: "مَثَلُهُمْ كَمَثَلِ ٱلَّذِى ٱسْتَوْقَدَ نَارًۭا",
          translationEn: "Their likeness is that of a person who kindled a fire.",
          translationBn: "তাদের উপমা ঐ ব্যক্তির ন্যায়, যে আগুন জ্বালালো।",
          surah: 2,
          ayah: 17,
          surahNameEn: "Al-Baqarah",
          surahNameBn: "সূরা আল-বাকারা"
        }
      },
      {
        arabic: "ٱلَّتِى",
        transliteration: "allatī",
        genderEn: "Female / Singular / Relative Pronoun",
        genderBn: "স্ত্রীলিঙ্গ / একবচন / সম্বন্ধসূচক সর্বনাম",
        meaningEn: "She who / That which / Which",
        meaningBn: "যিনি / যেটি (স্ত্রীলিঙ্গ)",
        frequency: "50+",
        example: {
          arabic: "وَٱتَّقُوا۟ ٱلنَّارَ ٱلَّتِىٓ أُعِدَّتْ لِلْكَٰفِرِينَ",
          translationEn: "And guard yourselves against the Fire that is prepared for the disbelievers.",
          translationBn: "আর তোমরা সেই আগুন থেকে আত্মরক্ষা করো, যা কাফেরদের জন্য প্রস্তুত রাখা হয়েছে।",
          surah: 3,
          ayah: 131,
          surahNameEn: "Ali 'Imran",
          surahNameBn: "সূরা আলে ইমরান"
        }
      },
      {
        arabic: "ٱلَّذِينَ",
        transliteration: "alladhīna",
        genderEn: "Plural / Relative Pronoun (Masculine)",
        genderBn: "বহুবচন / সম্বন্ধসূচক সর্বনাম (পুংলিঙ্গ/সাধারণ)",
        meaningEn: "Those who / Whom",
        meaningBn: "যাঁরা / যাঁরা সবাই / যারা",
        frequency: "1000+",
        example: {
          arabic: "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ",
          translationEn: "The path of those whom You have blessed.",
          translationBn: "তাদের পথ, যাদেরকে আপনি অনুগ্রহ দান করেছেন।",
          surah: 1,
          ayah: 7,
          surahNameEn: "Al-Fatihah",
          surahNameBn: "সূরা আল-ফাতিহা"
        }
      }
    ]
  },
  {
    id: "list-2",
    listNumber: 2,
    titleEn: "List TWO: Negations & Exceptions",
    titleBn: "২য় অধ্যায়: না-বোধক ও ব্যতিক্রমী শব্দ (নফী ও ইসতিসনা)",
    descriptionEn: "Essential negative particles and exception markers that change the meaning of sentences throughout the Quran.",
    descriptionBn: "কুরআনের অর্থ বোঝার প্রধান চাবিকাঠি—হ্যাঁ, না, ছাড়া, ব্যতীত ইত্যাদি না-বোধক ও ব্যতিক্রমী শব্দ।",
    videoUrl: "https://www.youtube.com/watch?v=mChh2WwT4Tk",
    words: [
      {
        arabic: "نَعَمْ",
        transliteration: "na'am",
        meaningEn: "Yes",
        meaningBn: "হ্যাঁ",
        frequency: "4",
        example: {
          arabic: "قَالُوا۟ نَعَمْ وَإِنَّكُمْ لَمِنَ ٱلْمُقَرَّبِينَ",
          translationEn: "He said, 'Yes, and you will be among my favorites.'",
          translationBn: "সে বলল, 'হ্যাঁ, এবং অবশ্যই তোমরা আমার নৈকট্যপ্রাপ্তদের অন্তর্ভুক্ত হবে।'",
          surah: 7,
          ayah: 114,
          surahNameEn: "Al-A'raf",
          surahNameBn: "সূরা আল-আ'রাফ"
        }
      },
      {
        arabic: "بَلَىٰ",
        transliteration: "balā",
        meaningEn: "Yes, indeed / Nay, on the contrary",
        meaningBn: "হ্যাঁ, অবশ্যই / বরং নিশ্চয়ই",
        frequency: "22",
        example: {
          arabic: "بَلَىٰ مَنْ أَسْلَمَ وَجْهَهُۥ لِلَّهِ وَهُوَ مُحْسِنٌۭ",
          translationEn: "Indeed, whoever submits his face in Islam to Allah while being a doer of good.",
          translationBn: "হ্যাঁ, যে কেউ সৎকর্মশীল হয়ে আল্লাহর নিকট আত্মসমর্পণ করে।",
          surah: 2,
          ayah: 112,
          surahNameEn: "Al-Baqarah",
          surahNameBn: "সূরা আল-বাকারা"
        }
      },
      {
        arabic: "كَلَّا",
        transliteration: "kallā",
        meaningEn: "Certainly not! / No indeed!",
        meaningBn: "কখনোই না! / কক্ষনো নয়!",
        frequency: "33",
        example: {
          arabic: "كَلَّآ ۚ إِنَّهَا كَلِمَةٌ هُوَ قَآئِلُهَا",
          translationEn: "Certainly not! It is just a word he is saying.",
          translationBn: "কখনোই নয়! এটি তো কেবল কথার কথা, যা সে বলছে।",
          surah: 23,
          ayah: 100,
          surahNameEn: "Al-Mu'minun",
          surahNameBn: "সূরা আল-মু'মিনূন"
        }
      },
      {
        arabic: "إِلَّا",
        transliteration: "illā",
        meaningEn: "Except / But / Unless",
        meaningBn: "ছাড়া / ব্যতীত / তবে",
        frequency: "660+",
        example: {
          arabic: "ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ",
          translationEn: "Allah - there is no deity except Him, the Ever-Living, the Sustainer.",
          translationBn: "আল্লাহ, তিনি ব্যতীত কোনো সত্য উপাস্য নেই, তিনি চিরঞ্জীব, সর্বসত্তার ধারক।",
          surah: 2,
          ayah: 255,
          surahNameEn: "Al-Baqarah",
          surahNameBn: "সূরা আল-বাকারা"
        }
      },
      {
        arabic: "إِنْ .. إِلَّا",
        transliteration: "in .. illā",
        meaningEn: "Nothing but / Only",
        meaningBn: "ছাড়া আর কিছুই নয় / কেবল",
        frequency: "100+",
        example: {
          arabic: "إِنْ هَٰذَآ إِلَّا سِحْرٌۭ مُّبِينٌ",
          translationEn: "This is nothing but plain magic.",
          translationBn: "এ তো স্পষ্ট জাদু ছাড়া আর কিছুই নয়।",
          surah: 5,
          ayah: 110,
          surahNameEn: "Al-Ma'idah",
          surahNameBn: "সূরা আল-মায়েদাহ"
        }
      },
      {
        arabic: "مَا .. إِلَّا",
        transliteration: "mā .. illā",
        meaningEn: "Nothing but / Only",
        meaningBn: "ছাড়া অন্য কিছু নয় / কেবল",
        frequency: "250+",
        example: {
          arabic: "مَا قُلْتُ لَهُمْ إِلَّا مَآ أَمَرْتَنِى بِهِۦ",
          translationEn: "I said not to them except what You commanded me.",
          translationBn: "আপনি আমাকে যা আদেশ করেছিলেন, তা ছাড়া আমি তাদের অন্য কিছুই বলিনি।",
          surah: 5,
          ayah: 117,
          surahNameEn: "Al-Ma'idah",
          surahNameBn: "সূরা আল-মায়েদাহ"
        }
      },
      {
        arabic: "أَلَّا",
        transliteration: "allā (an + lā)",
        meaningEn: "That .. not / So as not to",
        meaningBn: "যেন না / যাতে না",
        frequency: "130+",
        example: {
          arabic: "أَمَرَ أَلَّا تَعْبُدُوٓا۟ إِلَّآ إِيَّاهُ",
          translationEn: "He has commanded that you worship none but Him.",
          translationBn: "তিনি আদেশ দিয়েছেন যেন তোমরা কেবল তাঁরই ইবাদত করো।",
          surah: 12,
          ayah: 40,
          surahNameEn: "Yusuf",
          surahNameBn: "সূরা ইউসুফ"
        }
      },
      {
        arabic: "لَا",
        transliteration: "lā",
        meaningEn: "No / Do(es) not (Present tense negation / Prohibition)",
        meaningBn: "না / কোনো .. নেই / করো না",
        frequency: "800+",
        example: {
          arabic: "لَا يُسْمِنُ وَلَا يُغْنِى مِن جُوعٍۢ",
          translationEn: "That neither nourishes, nor satisfies hunger.",
          translationBn: "যা তাদের পুষ্টিও জোগাবে না এবং ক্ষুধাও নিবারণ করবে না।",
          surah: 88,
          ayah: 7,
          surahNameEn: "Al-Ghashiyah",
          surahNameBn: "সূরা আল-গাশিয়াহ"
        }
      },
      {
        arabic: "مَا",
        transliteration: "mā",
        meaningEn: "Not (used for both past and present verbs)",
        meaningBn: "না (অতীত ও বর্তমান কাল উভয়ে ব্যবহৃত হয়)",
        frequency: "500+",
        example: {
          arabic: "وَمَا ظَلَمُونَا وَلَٰكِن كَانُوٓا۟ أَنفُسَهُمْ يَظْلِمُونَ",
          translationEn: "They did not wrong Us, but they were wronging themselves.",
          translationBn: "তারা আমার কোনো ক্ষতি করতে পারেনি, বরং তারা নিজেদেরই ক্ষতিসাধন করছিল।",
          surah: 2,
          ayah: 57,
          surahNameEn: "Al-Baqarah",
          surahNameBn: "সূরা আল-বাকারা"
        }
      },
      {
        arabic: "لَن",
        transliteration: "lan",
        meaningEn: "Will not / Never will (Future negation)",
        meaningBn: "কখনোই না / কখনোই করবে না (ভবিষ্যতকাল)",
        frequency: "100+",
        example: {
          arabic: "قَالَ لَنْ أُرْسِلَهُۥ مَعَكُمْ حَتَّىٰ تُؤْتُونِ مَوْثِقًۭا",
          translationEn: "He said, 'I will not send him with you, unless you give me a pledge.'",
          translationBn: "তিনি বললেন, 'আমি তাকে কিছুতেই তোমাদের সাথে পাঠাব না, যতক্ষণ না তোমরা প্রতিশ্রুতি দাও।'",
          surah: 12,
          ayah: 66,
          surahNameEn: "Yusuf",
          surahNameBn: "সূরা ইউসুফ"
        }
      },
      {
        arabic: "لَمْ",
        transliteration: "lam",
        meaningEn: "Did not / Has not (Past negation with present verb)",
        meaningBn: "করেনি / হয়নি (অতীতের না-বোধক)",
        frequency: "350+",
        example: {
          arabic: "وَيُعَلِّمُكُم مَّا لَمْ تَكُونُوا۟ تَعْلَمُونَ",
          translationEn: "And teaching you that which you did not know.",
          translationBn: "এবং তোমাদের এমন বিষয় শিক্ষা দেন যা তোমরা জানতে না।",
          surah: 2,
          ayah: 151,
          surahNameEn: "Al-Baqarah",
          surahNameBn: "সূরা আল-বাকারা"
        }
      },
      {
        arabic: "لَيْسَ / لَيْسَتْ",
        transliteration: "laysa / laysat",
        meaningEn: "There is no / Is not",
        meaningBn: "নয় / নেই",
        frequency: "89",
        example: {
          arabic: "لَّيْسَ لَهُمْ طَعَامٌ إِلَّا مِن ضَرِيعٍۢ",
          translationEn: "For them, there will be no food except from a poisonous thorny plant.",
          translationBn: "কাঁটাযুক্ত তিক্ত ঘাস ছাড়া তাদের জন্য কোনো খাদ্য থাকবে না।",
          surah: 88,
          ayah: 6,
          surahNameEn: "Al-Ghashiyah",
          surahNameBn: "সূরা আল-গাশিয়াহ"
        }
      },
      {
        arabic: "غَيْر",
        transliteration: "ghayr",
        meaningEn: "Other than / Not / Without",
        meaningBn: "ছাড়া / ব্যতীত / নয় এমন",
        frequency: "140+",
        example: {
          arabic: "غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
          translationEn: "Not of those who have evoked Your anger or of those who are astray.",
          translationBn: "যাদের ওপর আপনার ক্রোধ বর্ষিত হয়নি এবং যারা পথভ্রষ্ট নয়।",
          surah: 1,
          ayah: 7,
          surahNameEn: "Al-Fatihah",
          surahNameBn: "সূরা আল-ফাতিহা"
        }
      },
      {
        arabic: "مِن دُونِ",
        transliteration: "min dūni",
        meaningEn: "Apart from / Besides / Instead of",
        meaningBn: "ছাড়া / বাদ দিয়ে / পরিবর্তে",
        frequency: "140+",
        example: {
          arabic: "وَمَا لَكُم مِّن دُونِ ٱللَّهِ مِن وَلِىٍّۢ وَلَا نَصِيرٍ",
          translationEn: "And apart from Allah you have no protector or helper.",
          translationBn: "আল্লাহ ছাড়া তোমাদের কোনো অভিভাবক নেই এবং সাহায্যকারীও নেই।",
          surah: 2,
          ayah: 107,
          surahNameEn: "Al-Baqarah",
          surahNameBn: "সূরা আল-বাকারা"
        }
      }
    ]
  },
  {
    id: "list-3",
    listNumber: 3,
    titleEn: "List THREE: Question Words",
    titleBn: "৩য় অধ্যায়: প্রশ্নবোধক শব্দ (হুরুফুল ইসতিফহাম)",
    descriptionEn: "Interrogative particles and words used for asking questions across the Quran.",
    descriptionBn: "কুরআনে জিজ্ঞাসা ও প্রশ্ন করার জন্য ব্যবহৃত শব্দসমূহ (কী, কে, কখন, কোথায়, কেন ইত্যাদি)।",
    videoUrl: "https://www.youtube.com/watch?v=mChh2WwT4Tk",
    words: [
      { arabic: "أَ / هَلْ", transliteration: "a / hal", meaningEn: "Yes/No Question Prefix (Is/Do/Will?)", meaningBn: "কি? (হ্যাঁ/না উত্তরের প্রশ্ন)", frequency: "600+", example: { arabic: "فَهَلْ أَنتُم مُّنتَهُونَ", translationEn: "Will you not desist?", translationBn: "তবে কি তোমরা বিরত হবে না?", surah: 5, ayah: 91, surahNameEn: "Al-Ma'idah", surahNameBn: "সূরা আল-মায়েদাহ" } },
      { arabic: "مَا / مَاذَا", transliteration: "mā / mādhā", meaningEn: "What?", meaningBn: "কী?", frequency: "800+", example: { arabic: "فَمَاذَا تَأْمُرُونَ", translationEn: "So what do you recommend?", translationBn: "অতএব তোমরা কী পরামর্শ দাও?", surah: 7, ayah: 110, surahNameEn: "Al-A'raf", surahNameBn: "সূরা আল-আ'রাফ" } },
      { arabic: "لِمَ", transliteration: "lima", meaningEn: "Why? / For what?", meaningBn: "কেন? / কীসের জন্য?", frequency: "20+", example: { arabic: "قَالَ يَٰقَوْمِ لِمَ تَسْتَعْجِلُونَ بِٱلسَّيِّئَةِ", translationEn: "He said, 'O my people, why are you quick to do evil?'", translationBn: "তিনি বললেন, 'হে আমার কওম! তোমরা কেন কল্যাণের আগে অকল্যাণ ডেকে আনছ?'", surah: 27, ayah: 46, surahNameEn: "An-Naml", surahNameBn: "সূরা আন-নামল" } },
      { arabic: "مَن", transliteration: "man", meaningEn: "Who? / Whoever", meaningBn: "কে? / যে কেউ", frequency: "800+", example: { arabic: "وَمَنْ أَحْسَنُ قَوْلًۭا مِّمَّن دَعَآ إِلَى ٱللَّهِ", translationEn: "And who is better in speech than someone who calls to Allah?", translationBn: "আর তার চেয়ে কার কথা অধিক উত্তম, যে আল্লাহর দিকে ডাকে?", surah: 41, ayah: 33, surahNameEn: "Fussilat", surahNameBn: "সূরা ফুসসিলাত" } },
      { arabic: "مَتَىٰ", transliteration: "matā", meaningEn: "When?", meaningBn: "কখন?", frequency: "9", example: { arabic: "وَيَقُولُونَ مَتَىٰ هَٰذَا ٱلْوَعْدُ إِن كُنتُمْ صَٰدِقِينَ", translationEn: "And they say, 'When will this promise be fulfilled?'", translationBn: "আর তারা বলে, 'এই প্রতিশ্রুতি কবে পূর্ণ হবে, যদি তোমরা সত্যবাদী হও?'", surah: 10, ayah: 48, surahNameEn: "Yunus", surahNameBn: "সূরা ইউনুস" } },
      { arabic: "أَيْنَ", transliteration: "ayna", meaningEn: "Where?", meaningBn: "কোথায়?", frequency: "10+", example: { arabic: "وَيَوْمَ يُنَادِيهِمْ فَيَقُولُ أَيْنَ شُرَكَآءِىَ", translationEn: "And say, 'Where are My associates whom you used to claim?'", translationBn: "এবং তিনি বলবেন, 'কোথায় আমার সেই শরিকরা যাদের তোমরা ধারণা করতে?'", surah: 28, ayah: 62, surahNameEn: "Al-Qasas", surahNameBn: "সূরা আল-ক্বাসাস" } },
      { arabic: "كَيْفَ", transliteration: "kayfa", meaningEn: "How?", meaningBn: "কীভাবে? / কেমন করে?", frequency: "80+", example: { arabic: "أَوَلَمْ يَرَوْا۟ كَيْفَ يُبْدِئُ ٱللَّهُ ٱلْخَلْقَ ثُمَّ يُعِيدُهُۥٓ", translationEn: "Have they not seen how Allah begins creation and then repeats it?", translationBn: "তারা কি লক্ষ্য করে না কীভাবে আল্লাহ সৃষ্টিকে অস্তিত্ব দান করেন, অতঃপর তা পুনরাবৃত্তি করেন?", surah: 29, ayah: 19, surahNameEn: "Al-'Ankabut", surahNameBn: "সূরা আল-আনকাবুত" } },
      { arabic: "كَمْ", transliteration: "kam", meaningEn: "How many? / How much?", meaningBn: "কত? / কতগুলো?", frequency: "20+", example: { arabic: "أَلَمْ يَرَوْا۟ كَمْ أَهْلَكْنَا مِن قَبْلِهِم مِّن قَرْنٍۢ", translationEn: "Have they not considered how many generations We destroyed before them?", translationBn: "তারা কি দেখেনি তাদের পূর্বে আমি কত মানববসতি ধ্বংস করে দিয়েছি?", surah: 6, ayah: 6, surahNameEn: "Al-An'am", surahNameBn: "সূরা আল-আন'আম" } },
      { arabic: "أَىُّ", transliteration: "ayyu", meaningEn: "Which? / What?", meaningBn: "কোনটি? / কী?", frequency: "30+", example: { arabic: "قُلْ أَىُّ شَىْءٍ أَكْبَرُ شَهَٰدَةًۭ", translationEn: "Say, 'What thing is greatest in testimony?'", translationBn: "বলুন, 'সাক্ষ্য হিসেবে কোন্ জিনিস সর্বশ্রেষ্ঠ?'", surah: 6, ayah: 19, surahNameEn: "Al-An'am", surahNameBn: "সূরা আল-আন'আম" } },
      { arabic: "أَنَّىٰ", transliteration: "annā", meaningEn: "How? / From where? (Often rhetorical)", meaningBn: "কীভাবে? / কোথা থেকে? (বিস্ময়সূচক)", frequency: "28", example: { arabic: "ذَٰلِكُمُ ٱللَّهُ ۖ فَأَنَّىٰ تُؤْفَكُونَ", translationEn: "That is Allah. So how could you deviate?", translationBn: "তিনিই আল্লাহ, তবে তোমাদেরকে কোথায় ফিরিয়ে নেওয়া হচ্ছে?", surah: 6, ayah: 95, surahNameEn: "Al-An'am", surahNameBn: "সূরা আল-আন'আম" } }
    ]
  },
  {
    id: "list-4",
    listNumber: 4,
    titleEn: "List FOUR: Prepositions (Part I)",
    titleBn: "৪র্থ অধ্যায়: দিক ও স্থান নির্দেশক প্রিপজিশন (১ম পর্ব)",
    descriptionEn: "Directional, spatial, and locational prepositions indicating positions like above, under, between, before, behind, and around.",
    descriptionBn: "স্থান ও অবস্থান নির্দেশক অব্যয়সমূহ (উপরে, নিচে, ডানে, বামে, মাঝে, সামনে, পেছনে ইত্যাদি)।",
    videoUrl: "https://www.youtube.com/watch?v=mChh2WwT4Tk",
    words: [
      { arabic: "فَوْقَ", transliteration: "fawqa", meaningEn: "Above / Over / On", meaningBn: "উপরে", frequency: "40+", example: { arabic: "إِنِّىٓ أَرَىٰنِىٓ أَحْمِلُ فَوْقَ رَأْسِى خُبْزًۭا", translationEn: "I saw myself carrying on my head some bread.", translationBn: "আমি দেখলাম আমি আমার মাথার ওপর রুটি বহন করছি।", surah: 12, ayah: 36, surahNameEn: "Yusuf", surahNameBn: "সূরা ইউসুফ" } },
      { arabic: "تَحْتَ", transliteration: "taḥta", meaningEn: "Under / Beneath / Below", meaningBn: "নিচে / তলে", frequency: "50+", example: { arabic: "جَنَّٰتٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَٰرُ", translationEn: "Gardens beneath which rivers flow.", translationBn: "জান্নাত, যার তলদেশ দিয়ে নদীসমূহ প্রবাহিত।", surah: 2, ayah: 25, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "يَمِين", transliteration: "yamīn", meaningEn: "Right (hand/side)", meaningBn: "ডান / ডান হাত", frequency: "35", example: { arabic: "وَمَا تِلْكَ بِيَمِينِكَ يَٰمُوسَىٰ", translationEn: "And what is that in your right hand, O Moses?", translationBn: "হে মুসা! তোমার ডান হাতে ওটা কী?", surah: 20, ayah: 17, surahNameEn: "Ta-Ha", surahNameBn: "সূরা ত্বা-হা" } },
      { arabic: "شِمَال", transliteration: "shimāl", meaningEn: "Left (hand/side)", meaningBn: "বাম / বাম হাত", frequency: "15", example: { arabic: "وَأَصْحَٰبُ ٱلشِّمَالِ مَآ أَصْحَٰبُ ٱلشِّمَالِ", translationEn: "And the companions of the left - what are the companions of the left?", translationBn: "আর বামদিকের দল, কতই না হতভাগ্য বামদিকের দল!", surah: 56, ayah: 41, surahNameEn: "Al-Waqi'ah", surahNameBn: "সূরা আল-ওয়াক্বিয়া" } },
      { arabic: "بَيْنَ", transliteration: "bayna", meaningEn: "Between / Among", meaningBn: "মাঝে / মধ্যবর্তী", frequency: "200+", example: { arabic: "كَىْ لَا يَكُونَ دُولَةًۢ بَيْنَ ٱلْأَغْنِيَآءِ مِنكُمْ", translationEn: "So that it may not circulate solely between the wealthy among you.", translationBn: "যাতে ধনসম্পদ কেবল তোমাদের ধনীদের মধ্যেই আবর্তিত না থাকে।", surah: 59, ayah: 7, surahNameEn: "Al-Hashr", surahNameBn: "সূরা আল-হাশর" } },
      { arabic: "بَيْنَ أَيْدِي / بَيْنَ يَدَيْ", transliteration: "bayna aydī / bayna yaday", meaningEn: "Before (in front of / time or place)", meaningBn: "সামনে / পূর্বে", frequency: "80+", example: { arabic: "يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ", translationEn: "He knows what is before them and what will be after them.", translationBn: "তাদের সামনে ও পেছনে যা কিছু আছে তিনি সব জানেন।", surah: 2, ayah: 255, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "خَلْفَ", transliteration: "khalfa", meaningEn: "Behind / Successor", meaningBn: "পেছনে / পরবর্তীদের", frequency: "25+", example: { arabic: "فَٱلْيَوْمَ نُنَجِّيكَ بِبَدَنِكَ لِتَكُونَ لِمَنْ خَلْفَكَ ءَايَةًۭ", translationEn: "Today We will preserve your body, so that you become a sign for those after you.", translationBn: "সুতরাং আজ আমি তোমার দেহ রক্ষা করব, যাতে তুমি পরবর্তীদের জন্য নিদর্শন হও।", surah: 10, ayah: 92, surahNameEn: "Yunus", surahNameBn: "সূরা ইউনুস" } },
      { arabic: "وَرَآءَ", transliteration: "warā'a", meaningEn: "Behind / Beyond / After", meaningBn: "পেছনে / আড়ালে / ছাড়া", frequency: "25+", example: { arabic: "فَمَنِ ٱبْتَغَىٰ وَرَآءَ ذَٰلِكَ فَأُو۟لَٰٓئِكَ هُمُ ٱلْعَادُونَ", translationEn: "But whoever seeks anything beyond that - these are the transgressors.", translationBn: "অতএব যারা এর বাইরে কিছু কামনা করবে, তারাই সীমালঙ্ঘনকারী।", surah: 23, ayah: 7, surahNameEn: "Al-Mu'minun", surahNameBn: "সূরা আল-মু'মিনূন" } },
      { arabic: "حَوْلَ", transliteration: "ḥawla", meaningEn: "Around / (also means Year)", meaningBn: "চারপাশে / চতুর্দিকে (কখনো 'বৎসর')", frequency: "25+", example: { arabic: "وَتَرَى ٱلْمَلَٰٓئِكَةَ حَآفِّينَ مِنْ حَوْلِ ٱلْعَرْشِ", translationEn: "And you will see the angels hovering around the Throne.", translationBn: "এবং আপনি ফেরেশতাদের দেখতে পাবেন আরশের চারপাশ ঘিরে প্রকম্পিত করছে।", surah: 39, ayah: 75, surahNameEn: "Az-Zumar", surahNameBn: "সূরা আজ-জুমার" } },
      { arabic: "حَيْثُ", transliteration: "ḥaythu", meaningEn: "Wherever / Where", meaningBn: "যেখানেই / যে স্থান থেকে", frequency: "30+", example: { arabic: "وَحَيْثُ مَا كُنتُمْ فَوَلُّوا۟ وُجُوهَكُمْ شَطْرَهُۥ", translationEn: "And wherever you may be, turn your faces towards it.", translationBn: "তোমরা যেখানেই থাকো না কেন, সেদিকে মুখ ফেরাও।", surah: 2, ayah: 144, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "أَيْنَمَا", transliteration: "aynamā", meaningEn: "Wherever", meaningBn: "যেখানেই", frequency: "12", example: { arabic: "أَيْنَمَا تَكُونُوا۟ يُدْرِككُّمُ ٱلْمَوْتُ", translationEn: "Wherever you may be, death will catch up with you.", translationBn: "তোমরা যেখানেই থাকো না কেন, মৃত্যু তোমাদের স্পর্শ করবেই।", surah: 4, ayah: 78, surahNameEn: "An-Nisa", surahNameBn: "সূরা আন-নিসা" } }
    ]
  },
  {
    id: "list-5",
    listNumber: 5,
    titleEn: "List FIVE: Prepositions (Part II)",
    titleBn: "৫ম অধ্যায়: মৌলিক হুরুফুল জার / প্রিপজিশন (২য় পর্ব)",
    descriptionEn: "Single-letter and standalone grammatical prepositions that link verbs, nouns, and clauses across thousands of ayahs.",
    descriptionBn: "কুরআনে সবচেয়ে বেশি আসা হুরুফুল জারসমূহ (বি, ফী, মিন, ইলা, 'আলা, মা'আ ইত্যাদি)।",
    videoUrl: "https://www.youtube.com/watch?v=mChh2WwT4Tk",
    words: [
      { arabic: "بِـ", transliteration: "bi-", meaningEn: "In / With / By / Through", meaningBn: "দ্বারা / দিয়ে / সাথে / প্রতি", frequency: "2000+", example: { arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", translationEn: "In the name of Allah, the Entirely Merciful, the Especially Merciful.", translationBn: "পরম করুণাময় অসীম দয়ালু আল্লাহর নামে শুরু করছি।", surah: 1, ayah: 1, surahNameEn: "Al-Fatihah", surahNameBn: "সূরা আল-ফাতিহা" } },
      { arabic: "عَنْ", transliteration: "'an", meaningEn: "From / About / Away from", meaningBn: "হতে / থেকে / সম্পর্কে", frequency: "450+", example: { arabic: "فَمَا لَهُمْ عَنِ ٱلتَّذْكِرَةِ مُعْرِضِينَ", translationEn: "Then what is with them that they are turning away from the reminder?", translationBn: "তাদের কী হলো যে তারা এই উপদেশ থেকে মুখ ফিরিয়ে নিচ্ছে?", surah: 74, ayah: 49, surahNameEn: "Al-Muddaththir", surahNameBn: "সূরা আল-মুদ্দাসসির" } },
      { arabic: "فِى", transliteration: "fī", meaningEn: "In / Inside / During", meaningBn: "মধ্যে / ভেতরে / সময়ে", frequency: "1700+", example: { arabic: "وَقَٰتِلُوا۟ فِى سَبِيلِ ٱللَّهِ ٱلَّذِينَ يُقَٰتِلُونَكُمْ", translationEn: "And fight in the way of Allah those who fight you.", translationBn: "আর তোমরা আল্লাহর পথে তাদের বিরুদ্ধে যুদ্ধ করো যারা তোমাদের বিরুদ্ধে যুদ্ধ করে।", surah: 2, ayah: 190, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "كَـ", transliteration: "ka-", meaningEn: "As / Like", meaningBn: "মতো / যেমন", frequency: "350+", example: { arabic: "كَذَٰلِكَ جَزَآءُ ٱلْكَٰفِرِينَ", translationEn: "Such is the retribution of the disbelievers.", translationBn: "কাফেরদের প্রতিফল এভাবেই হয়ে থাকে।", surah: 2, ayah: 191, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "لِـ", transliteration: "li-", meaningEn: "For / Belongs to / In order to", meaningBn: "জন্য / মালিকানায় / উদ্দেশ্যে", frequency: "2500+", example: { arabic: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ", translationEn: "All praise is due to Allah, Lord of the worlds.", translationBn: "যাবতীয় প্রশংসা একমাত্র আল্লাহর জন্য, যিনি সকল সৃষ্টির প্রতিপালক।", surah: 1, ayah: 2, surahNameEn: "Al-Fatihah", surahNameBn: "সূরা আল-ফাতিহা" } },
      { arabic: "مِنْ", transliteration: "min", meaningEn: "From / Out of / Among", meaningBn: "হতে / থেকে / মধ্য থেকে", frequency: "3000+", example: { arabic: "وَإِذْ نَجَّيْنَٰكُم مِّنْ ءَالِ فِرْعَوْنَ", translationEn: "And recall when We delivered you from the people of Pharaoh.", translationBn: "আর স্মরণ করো, যখন আমি তোমাদের ফেরাউনের লোকদের হাত থেকে মুক্ত করেছিলাম।", surah: 2, ayah: 49, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaningEn: "To / Towards / Until", meaningBn: "দিকে / অভিমুখে / পর্যন্ত", frequency: "700+", example: { arabic: "يَهْدِى مَن يَشَآءُ إِلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍۢ", translationEn: "He guides whom He wills to a straight path.", translationBn: "তিনি যাকে ইচ্ছা সরল সঠিক পথের দিশা দেন।", surah: 2, ayah: 142, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "حَتَّىٰ", transliteration: "ḥattā", meaningEn: "Until / Up to", meaningBn: "পর্যন্ত / যে পর্যন্ত না", frequency: "140+", example: { arabic: "لَن تَنَالُوا۟ ٱلْبِرَّ حَتَّىٰ تُنفِقُوا۟ مِمَّا تُحِبُّونَ", translationEn: "Never will you attain the reward until you spend from what you love.", translationBn: "তোমরা কখনো পুণ্য লাভ করতে পারবে না, যতক্ষণ না তোমরা প্রিয় বস্তু ব্যয় করো।", surah: 3, ayah: 92, surahNameEn: "Ali 'Imran", surahNameBn: "সূরা আলে ইমরান" } },
      { arabic: "عَلَىٰ", transliteration: "'alā", meaningEn: "On / Upon / Over / Against", meaningBn: "উপর / প্রতি / বিরুদ্ধে", frequency: "1400+", example: { arabic: "وَٱللَّهُ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ", translationEn: "And Allah is over all things competent.", translationBn: "এবং আল্লাহ সবকিছুর ওপর সর্বশক্তিমান।", surah: 2, ayah: 284, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "مَعَ", transliteration: "ma'a", meaningEn: "With / Alongside", meaningBn: "সাথে / সঙ্গে", frequency: "160+", example: { arabic: "إِنَّ ٱللَّهَ مَعَ ٱلصَّٰبِرِينَ", translationEn: "Indeed, Allah is with the patient.", translationBn: "নিশ্চয়ই আল্লাহ ধৈর্যশীলদের সাথে আছেন।", surah: 2, ayah: 153, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "وَ", transliteration: "wa", meaningEn: "And / Also means 'By' (Oath)", meaningBn: "এবং / আর (কখনো কসম বা শপথ অর্থে)", frequency: "9000+", example: { arabic: "وَٱلتِّينِ وَٱلزَّيْتُونِ", translationEn: "By the fig and the olive.", translationBn: "শপথ আঞ্জির (ডুমুর) ও জয়তুনের।", surah: 95, ayah: 1, surahNameEn: "At-Tin", surahNameBn: "সূরা আত-তীন" } }
    ]
  },
  {
    id: "list-6",
    listNumber: 6,
    titleEn: "List SIX: Connectors",
    titleBn: "৬ষ্ঠ অধ্যায়: সংযোগকারী অব্যয় (হুরুফুল 'আতফ ও শর্ত)",
    descriptionEn: "Conjunctions, conditional particles, and emphatic connectors that establish flow and logic in the Quran.",
    descriptionBn: "বাক্যের অর্থ ও ধারাবাহিকতা সংযোগকারী শব্দসমূহ (নিশ্চয়, যদি, কিন্তু, তখন, তারপর ইত্যাদি)।",
    videoUrl: "https://www.youtube.com/watch?v=mChh2WwT4Tk",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaningEn: "Verily / Truly / Indeed", meaningBn: "নিশ্চয়ই / নিঃসন্দেহে", frequency: "1500+", example: { arabic: "إِنَّ ٱللَّهَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ", translationEn: "Verily, Allah is Able to do all things.", translationBn: "নিশ্চয়ই আল্লাহ সবকিছুর ওপর পূর্ণ ক্ষমতাবান।", surah: 2, ayah: 20, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "أَنَّ", transliteration: "anna", meaningEn: "That (+ nouns/pronouns)", meaningBn: "যে (নামপদ বা বিশেষ্যের পূর্বে)", frequency: "650+", example: { arabic: "أَلَمْ تَعْلَمْ أَنَّ ٱللَّهَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ", translationEn: "Do you not know that Allah is capable of all things?", translationBn: "তুমি কি জানো না যে আল্লাহ সর্ববিষয়ে ক্ষমতাবান?", surah: 2, ayah: 106, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "إِنْ (لَّئِن)", transliteration: "in (la-in)", meaningEn: "If / If indeed", meaningBn: "যদি / যদি সত্যি", frequency: "600+", example: { arabic: "فَإِنْ ءَامَنُوا۟ بِمِثْلِ مَآ ءَامَنتُم بِهِۦ فَقَدِ ٱهْتَدَوا۟", translationEn: "So if they believe in the same as you believe in, then they are rightly guided.", translationBn: "অতএব তোমরা যেভাবে ঈমান এনেছ তারাও যদি সেভাবে ঈমান আনে, তবে তারা সঠিক পথ পাবে।", surah: 2, ayah: 137, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "أَنْ", transliteration: "an", meaningEn: "To / That (+ verbs)", meaningBn: "যে / যাতে (ক্রিয়াপদের পূর্বে)", frequency: "570+", example: { arabic: "قَالَ سُبْحَٰنَكَ مَا يَكُونُ لِىٓ أَنْ أَقُولَ مَا لَيْسَ لِى بِحَقٍّ", translationEn: "He will say, 'Glory be to You! It is not for me to say what I have no right to.'", translationBn: "তিনি বলবেন, 'আপনি মহাপবিত্র! যার কোনো অধিকার আমার নেই তা বলা আমার সাজে না।'", surah: 5, ayah: 116, surahNameEn: "Al-Ma'idah", surahNameBn: "সূরা আল-মায়েদাহ" } },
      { arabic: "كَأَنَّ", transliteration: "ka-anna", meaningEn: "As if / As though", meaningBn: "যেন / মনে হয় যেন", frequency: "35", example: { arabic: "كَأَن لَّمْ يَسْمَعْهَا كَأَنَّ فِىٓ أُذُنَيْهِ وَقْرًۭا", translationEn: "As though he did not hear them, as though there is deafness in his ears.", translationBn: "যেন সে তা শুনতেই পায়নি, যেন তার উভয় কানে বধিরতা রয়েছে।", surah: 31, ayah: 7, surahNameEn: "Luqman", surahNameBn: "সূরা লুকমান" } },
      { arabic: "لَٰكِنَّ / لَٰكِن", transliteration: "lākinna / lākin", meaningEn: "But / However", meaningBn: "কিন্তু / বরং", frequency: "130+", example: { arabic: "أَلَآ إِنَّهُمْ هُمُ ٱلْمُفْسِدُونَ وَلَٰكِن لَّا يَشْعُرُونَ", translationEn: "In fact, it is they who are the corrupters, but they are not aware.", translationBn: "সাবধান! নিশ্চয় তারাই ফাসাদ সৃষ্টিকারী, কিন্তু তারা তা উপলব্ধি করে না।", surah: 2, ayah: 12, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "لَمَّا", transliteration: "lammā", meaningEn: "When / After that", meaningBn: "যখনই / যখন", frequency: "160+", example: { arabic: "فَلَمَّا تَبَيَّنَ لَهُۥ قَالَ أَعْلَمُ أَنَّ ٱللَّهَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ", translationEn: "So when it became clear to him, he said, 'I know that Allah has power over all things.'", translationBn: "অতঃপর যখন তা তার কাছে সুস্পষ্ট হলো, সে বলল, 'আমি জানি যে আল্লাহ সর্ববিষয়ে ক্ষমতাবান।'", surah: 2, ayah: 259, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "لَوْ", transliteration: "law", meaningEn: "If / Had (Hypothetical condition)", meaningBn: "যদি / যদি এমন হতো", frequency: "190+", example: { arabic: "وَلَوْ شَآءَ ٱللَّهُ لَذَهَبَ بِسَمْعِهِمْ وَأَبْصَٰرِهِمْ", translationEn: "And if Allah had willed, He could have taken away their hearing and their sight.", translationBn: "আর আল্লাহ যদি ইচ্ছা করতেন তবে তাদের শ্রবণ ও দৃষ্টিশক্তি হরণ করতে পারতেন।", surah: 2, ayah: 20, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "لَوْلَا", transliteration: "lawlā", meaningEn: "Were it not for / Why not?", meaningBn: "যদি না হতো / কেন নয়?", frequency: "85", example: { arabic: "فَلَوْلَا فَضْلُ ٱللَّهِ عَلَيْكُمْ وَرَحْمَتُهُۥ لَكُنتُم مِّنَ ٱلْخَٰسِرِينَ", translationEn: "And were it not for Allah's grace upon you and His mercy, you would have been of the losers.", translationBn: "সুতরাং তোমাদের ওপর যদি আল্লাহর অনুগ্রহ ও দয়া না থাকত, তবে তোমরা ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হতে।", surah: 2, ayah: 64, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "قَبْلُ (مِن قَبْلُ)", transliteration: "qablu (min qablu)", meaningEn: "Before", meaningBn: "পূর্বে / আগে", frequency: "290+", example: { arabic: "وَسَبِّحْ بِحَمْدِ رَبِّكَ قَبْلَ طُلُوعِ ٱلشَّمْسِ وَقَبْلَ غُرُوبِهَا", translationEn: "And exalt with praise of your Lord before the rising of the sun and before its setting.", translationBn: "এবং আপনার প্রতিপালকের সপ্রশংস পবিত্রতা ঘোষণা করুন সূর্যোদয়ের পূর্বে ও সূর্যাস্তের পূর্বে।", surah: 20, ayah: 130, surahNameEn: "Ta-Ha", surahNameBn: "সূরা ত্বা-হা" } },
      { arabic: "بَعْدُ (مِن بَعْدُ)", transliteration: "ba'du (min ba'du)", meaningEn: "After", meaningBn: "পরে / এরপর", frequency: "220+", example: { arabic: "ثُمَّ ٱتَّخَذْتُمُ ٱلْعِجْلَ مِنۢ بَعْدِهِۦ", translationEn: "Then you took the calf for worship after him.", translationBn: "অতঃপর তার প্রস্থানের পর তোমরা গোবৎসকে উপাস্য বানিয়ে নিয়েছিলে।", surah: 2, ayah: 51, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "إِذْ", transliteration: "idh", meaningEn: "When / And recall when (Used for past)", meaningBn: "যখন (অতীতের ঘটনা স্মরণ করাতে)", frequency: "160+", example: { arabic: "وَإِذْ وَٰعَدْنَا مُوسَىٰٓ أَرْبَعِينَ لَيْلَةًۭ", translationEn: "And recall when We appointed for Moses forty nights.", translationBn: "আর স্মরণ করো, যখন আমি মুসাকে চল্লিশ রাতের প্রতিশ্রুতি দিয়েছিলাম।", surah: 2, ayah: 51, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "إِذَا", transliteration: "idhā", meaningEn: "When / Whenever (Present/Future)", meaningBn: "যখন (ভবিষ্যত বা চলমান বিষয়ে)", frequency: "400+", example: { arabic: "إِذَا جَآءَ نَصْرُ ٱللَّهِ وَٱلْفَتْحُ", translationEn: "When the victory of Allah has come and the conquest.", translationBn: "যখন আল্লাহর সাহায্য ও বিজয় আসবে।", surah: 110, ayah: 1, surahNameEn: "An-Nasr", surahNameBn: "সূরা আন-নাসর" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaningEn: "Then / Thereafter", meaningBn: "অতঃপর / তারপর", frequency: "330+", example: { arabic: "ثُمَّ ٱسْتَوَىٰٓ إِلَى ٱلسَّمَآءِ", translationEn: "Then He directed Himself to the heaven.", translationBn: "অতঃপর তিনি আকাশের দিকে মনোনিবেশ করলেন।", surah: 2, ayah: 29, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "فَـ", transliteration: "fa-", meaningEn: "So / Then / Directly after", meaningBn: "সুতরাং / অতঃপর / অতএব", frequency: "3000+", example: { arabic: "فَأَمَاتَهُ ٱللَّهُ مِا۟ئَةَ عَامٍۢ ثُمَّ بَعَثَهُۥ", translationEn: "So Allah caused him to die for a hundred years; then He revived him.", translationBn: "অতঃপর আল্লাহ তাকে একশত বছর মৃত রাখলেন, তারপর তাকে পুনরুজ্জীবিত করলেন।", surah: 2, ayah: 259, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } }
    ]
  },
  {
    id: "list-7",
    listNumber: 7,
    titleEn: "List SEVEN: Miscellaneous Essential Particles",
    titleBn: "৭ম অধ্যায়: বিবিধ গুরুত্বপূর্ণ শব্দ (মালিকানা, ব্যক্তি ও গুণ)",
    descriptionEn: "Frequent nouns, modifiers, and particles relating to possession, people, degree, and uncertainty.",
    descriptionBn: "মালিকানা, পরিবার, গোষ্ঠী, তুলনা ও সম্ভাবনা সূচক অপরিহার্য শব্দসমূহ।",
    videoUrl: "https://www.youtube.com/watch?v=mChh2WwT4Tk",
    words: [
      { arabic: "ذُو / ذَا / ذِى / ذَات", transliteration: "dhū / dhā / dhī / dhāt", meaningEn: "Possessor of / Belonging to / With", meaningBn: "অধিকারী / ওয়ালা / বিশিষ্ট", frequency: "110+", example: { arabic: "وَٱللَّهُ ذُو ٱلْفَضْلِ ٱلْعَظِيمِ", translationEn: "And Allah is Possessor of Sublime Grace.", translationBn: "আর আল্লাহ মহান অনুগ্রহের অধিকারী।", surah: 2, ayah: 105, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "أُو۟لُوا۟ / أُو۟لِى", transliteration: "ūlū / ūlī", meaningEn: "People of / Ones endowed with", meaningBn: "অধিকারীগণ / বিশিষ্ট ব্যক্তিবর্গ", frequency: "40+", example: { arabic: "إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍۢ لِّأُو۟لِى ٱلْأَلْبَٰبِ", translationEn: "Indeed in that are signs for those of understanding.", translationBn: "নিশ্চয়ই এতে জ্ঞানবানদের জন্য বহু নিদর্শন রয়েছে।", surah: 20, ayah: 54, surahNameEn: "Ta-Ha", surahNameBn: "সূরা ত্বা-হা" } },
      { arabic: "أَهْل", transliteration: "ahl", meaningEn: "People of / Family of / Followers", meaningBn: "লোকজন / পরিবার / অনুসারী", frequency: "125", example: { arabic: "مَّا يَوَدُّ ٱلَّذِينَ كَفَرُوا۟ مِنْ أَهْلِ ٱلْكِتَٰبِ", translationEn: "It is never the wish of the disbelievers from among the People of the Book.", translationBn: "আহলে কিতাবদের মধ্যে যারা কুফরি করেছে তারা চায় না।", surah: 2, ayah: 105, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "ءَال", transliteration: "āl", meaningEn: "Family of / Clan of / People of", meaningBn: "পরিবার / বংশ / অনুসারী সম্প্রদায়", frequency: "25", example: { arabic: "وَإِذْ نَجَّيْنَٰكُم مِّنْ ءَالِ فِرْعَوْنَ", translationEn: "And recall when We delivered you from the people of Pharaoh.", translationBn: "আর যখন আমি তোমাদের ফেরাউনের লোকদের হাত থেকে নিষ্কৃতি দিয়েছিলাম।", surah: 2, ayah: 49, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "أَلَا", transliteration: "alā", meaningEn: "Lo! / Beware! / Unquestionably!", meaningBn: "সাবধান! / জেনে রাখো! / তবে কি নয়?", frequency: "135", example: { arabic: "أَلَا بِذِكْرِ ٱللَّهِ تَطْمَئِنُّ ٱلْقُلُوبُ", translationEn: "Lo! in the remembrance of Allah hearts do find rest.", translationBn: "জেনে রাখো, আল্লাহর স্মরণেই অন্তরসমূহ শান্তি লাভ করে।", surah: 13, ayah: 28, surahNameEn: "Ar-Ra'd", surahNameBn: "সূরা আর-রাদ" } },
      { arabic: "نِعْمَ", transliteration: "ni'ma", meaningEn: "What an excellent ...! / How good!", meaningBn: "কতই না উত্তম!", frequency: "16", example: { arabic: "إِنَّا وَجَدْنَٰهُ صَابِرًۭا ۚ نِّعْمَ ٱلْعَبْدُ", translationEn: "We found him patient. What an excellent servant!", translationBn: "আমি তাকে ধৈর্যশীল পেয়েছিলাম। কতই না চমৎকার বান্দা সে!", surah: 38, ayah: 44, surahNameEn: "Sad", surahNameBn: "সূরা ছোয়াদ" } },
      { arabic: "بِئْسَ", transliteration: "bi'sa", meaningEn: "What a foul/wretched ...! / How bad!", meaningBn: "কতই না নিকৃষ্ট / মন্দ!", frequency: "40", example: { arabic: "فَحَسْبُهُۥ جَهَنَّمُ ۚ وَلَبِئْسَ ٱلْمِهَادُ", translationEn: "Sufficient for him is Hellfire, and how wretched is the resting place.", translationBn: "তার জন্য জাহান্নামই যথেষ্ট, আর কতই না নিকৃষ্ট সে বিশ্রামস্থল!", surah: 2, ayah: 206, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "مِثْل", transliteration: "mithl", meaningEn: "Like / Similar to / Same as", meaningBn: "মতো / ন্যায় / অনুরূপ", frequency: "160+", example: { arabic: "فَأْتُوا۟ بِسُورَةٍۢ مِّن مِّثْلِهِۦ", translationEn: "Then produce a surah like thereof.", translationBn: "তবে তোমরা এর অনুরূপ একটি সূরা রচনা করে নিয়ে এসো।", surah: 2, ayah: 23, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "أَوْ", transliteration: "aw", meaningEn: "Or", meaningBn: "অথবা / কিংবা", frequency: "280+", example: { arabic: "أَوْ كَصَيِّبٍۢ مِّنَ ٱلسَّمَآءِ فِيهِ ظُلُمَٰتٌۭ", translationEn: "Or like a rainstorm from the sky, in which is darkness.", translationBn: "কিংবা আকাশের বর্ষণমুখর মেঘের ন্যায়, যাতে রয়েছে ঘন অন্ধকার।", surah: 2, ayah: 19, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "أَمْ", transliteration: "am", meaningEn: "Or? (In questions)", meaningBn: "নাকি? / অথবা? (প্রশ্নে)", frequency: "130+", example: { arabic: "أَمْ تُرِيدُونَ أَن تَسْـَٔلُوا۟ رَسُولَكُمْ", translationEn: "Or do you want to question your Messenger?", translationBn: "নাকি তোমরা তোমাদের রাসুলকে প্রশ্ন করতে চাও?", surah: 2, ayah: 108, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "بَعْض", transliteration: "ba'ḍ", meaningEn: "Some / Part of", meaningBn: "কিছু / একাংশ / পরস্পরে", frequency: "155+", example: { arabic: "فَقُلْنَا ٱضْرِبُوهُ بِبَعْضِهَا", translationEn: "We said, 'Strike him with part of it.'", translationBn: "আমি বললাম, 'তোমরা এর এক খণ্ড দিয়ে তাকে আঘাত করো।'", surah: 2, ayah: 73, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "كُلّ", transliteration: "kull", meaningEn: "Every / All / Each", meaningBn: "প্রত্যেক / সকল / সমস্ত", frequency: "350+", example: { arabic: "قَالَ أَعْلَمُ أَنَّ ٱللَّهَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ", translationEn: "He said, 'I know that Allah has power over all things.'", translationBn: "সে বলল, 'আমি জানি যে আল্লাহ সর্ববিষয়ে ক্ষমতাবান।'", surah: 2, ayah: 259, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "لَعَلَّ", transliteration: "la'alla", meaningEn: "Perhaps / May / So that", meaningBn: "যাতে করে / সম্ভবত / আশা করা যায়", frequency: "125+", example: { arabic: "يَٰٓأَيُّهَا ٱلنَّاسُ ٱعْبُدُوا۟ رَبَّكُمُ ... لَعَلَّكُمْ تَتَّقُونَ", translationEn: "O mankind, worship your Lord ... that you may become righteous.", translationBn: "হে মানবজাতি! তোমরা তোমাদের প্রতিপালকের ইবাদত করো, যাতে তোমরা মুত্তাকী হতে পারো।", surah: 2, ayah: 21, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "عَسَىٰ", transliteration: "'asā", meaningEn: "Possibly / Perhaps / It may be that", meaningBn: "হতে পারে যে / হয়তো", frequency: "30+", example: { arabic: "وَعَسَىٰٓ أَن تَكْرَهُوا۟ شَيْـًۭٔا وَهُوَ خَيْرٌۭ لَّكُمْ", translationEn: "But it may be that you dislike something while it is good for you.", translationBn: "অথচ হতে পারে কোনো বিষয় তোমাদের অপছন্দ, অথচ তা তোমাদের জন্য কল্যাণকর।", surah: 2, ayah: 216, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "يَٰٓ / أَيُّهَا", transliteration: "yā / ayyuhā", meaningEn: "O! / Calling particle", meaningBn: "হে! / ওহে!", frequency: "500+", example: { arabic: "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟", translationEn: "O you who have believed!", translationBn: "হে মুমিনগণ!", surah: 2, ayah: 153, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "عِندَ / لَدَىٰ / لَدُنْ", transliteration: "'inda / ladā / ladun", meaningEn: "At / With / Near / From Presence of", meaningBn: "কাছে / নিকট / সমীপে / পক্ষ হতে", frequency: "220+", example: { arabic: "هُمْ دَرَجَٰتٌ عِندَ ٱللَّهِ", translationEn: "They have different ranks with Allah.", translationBn: "আল্লাহর কাছে তাদের জন্য রয়েছে বিভিন্ন মর্যাদা।", surah: 3, ayah: 163, surahNameEn: "Ali 'Imran", surahNameBn: "সূরা আলে ইমরান" } }
    ]
  },
  {
    id: "addendum-1",
    listNumber: 8,
    titleEn: "Addendum: Dealing with مَا (Maa) in the Quran",
    titleBn: "বিশেষ পরিশিষ্ট: পবিত্র কুরআনে 'মা' (مَا)-এর বহুমুখী ব্যবহার",
    descriptionEn: "A dedicated guide to mastering the single most versatile word in the Quran, covering its separated forms (Negation, Question, Relative) and attached combinations.",
    descriptionBn: "কুরআনের সর্বাধিক বহুমুখী শব্দ 'মা'-এর পূর্ণাঙ্গ ডায়াগ্রাম: পৃথক রূপ (না-বোধক, প্রশ্ন ও সম্বন্ধ) এবং অন্যান্য শব্দের সাথে যুক্ত রূপসমূহ।",
    videoUrl: "https://www.youtube.com/watch?v=mChh2WwT4Tk",
    combinations: [
      { arabic: "بِمَا", transliteration: "bimā", formula: "بِـ + مَا", meaningEn: "With which / In what", meaningBn: "যার সাথে / যা দ্বারা", exampleArabic: "إِنَّهُۥ خَبِيرٌۢ بِمَا تَفْعَلُونَ", exampleTranslationEn: "He is fully Informed of what you do.", exampleTranslationBn: "তোমরা যা করো সে সম্পর্কে তিনি সম্যক অবগত।" },
      { arabic: "بِمَ", transliteration: "bima", formula: "بِـ + مَ (Short vowel)", meaningEn: "With what? / For what?", meaningBn: "কী নিয়ে? / কী কারণে?", exampleArabic: "فَبِمَ تُبَشِّرُونَ", exampleTranslationEn: "With what good news do you bring?", exampleTranslationBn: "তোমরা আমাকে কী সুসংবাদ দিচ্ছ?" },
      { arabic: "عَمَّا", transliteration: "'ammā", formula: "عَنْ + مَا", meaningEn: "About which / Concerning that which", meaningBn: "যে বিষয়ে / যা সম্পর্কে", exampleArabic: "وَمَا رَبُّكَ بِغَٰفِلٍ عَمَّا يَعْمَلُونَ", exampleTranslationEn: "And your Lord is not unaware of what they do.", exampleTranslationBn: "এবং তারা যা করে সে বিষয়ে আপনার প্রতিপালক গাফেল নন।" },
      { arabic: "عَمَّ", transliteration: "'amma", formula: "عَنْ + مَ (Short vowel)", meaningEn: "About what? (Interrogative)", meaningBn: "কী বিষয়ে? (প্রশ্নবোধক)", exampleArabic: "عَمَّ يَتَسَآءَلُونَ", exampleTranslationEn: "About what are they asking one another?", exampleTranslationBn: "তারা পরস্পর কী বিষয়ে জিজ্ঞাসাবাদ করছে?" },
      { arabic: "فِيمَا", transliteration: "fīmā", formula: "فِى + مَا", meaningEn: "In which / Regarding that which", meaningBn: "যার মধ্যে / যে বিষয়ে", exampleArabic: "لِيَحْكُمَ بَيْنَ ٱلنَّاسِ فِيمَا ٱخْتَلَفُوا۟ فِيهِ", exampleTranslationEn: "To judge between people regarding their differences.", exampleTranslationBn: "মানুষের মাঝে মীমাংসা করার জন্য যে বিষয়ে তারা মতভেদ করেছিল।" },
      { arabic: "فِيمَ", transliteration: "fīma", formula: "فِى + مَ (Short vowel)", meaningEn: "In what? / Why?", meaningBn: "কীসের মধ্যে? / কেন?", exampleArabic: "قَالُوا۟ فِيمَ كُنتُمْ", exampleTranslationEn: "They will say, 'What was the matter with you?'", exampleTranslationBn: "তারা বলবে, 'তোমরা কোন্ অবস্থায় ছিলে?'" },
      { arabic: "مِمَّا", transliteration: "mimmā", formula: "مِنْ + مَا", meaningEn: "From which / Out of that which", meaningBn: "যা থেকে / যা হতে", exampleArabic: "وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ", exampleTranslationEn: "And give from what We have provided for them.", exampleTranslationBn: "এবং আমি তাদের যা রিযিক দিয়েছি তা থেকে তারা ব্যয় করে।" },
      { arabic: "مِمَّ", transliteration: "mimma", formula: "مِنْ + مَ (Short vowel)", meaningEn: "From what? (Interrogative)", meaningBn: "কী থেকে? (সৃষ্টির উপাদান প্রশ্ন)", exampleArabic: "فَلْيَنظُرِ ٱلْإِنسَٰنُ مِمَّ خُلِقَ", exampleTranslationEn: "So let man observe from what he was created.", exampleTranslationBn: "অতএব মানুষের দেখা উচিত তাকে কী থেকে সৃষ্টি করা হয়েছে।" },
      { arabic: "لِمَا", transliteration: "limā", formula: "لِـ + مَا", meaningEn: "To which / For that which", meaningBn: "তার জন্য যা / যার উদ্দেশ্যে", exampleArabic: "مُصَدِّقًۭا لِّمَا مَعَكُمْ", exampleTranslationEn: "Verifying what you have with you.", exampleTranslationBn: "তোমাদের কাছে যা রয়েছে তার সত্যায়নকারী রূপে।" },
      { arabic: "لِمَ", transliteration: "lima", formula: "لِـ + مَ (Short vowel)", meaningEn: "Why? / For what purpose?", meaningBn: "কেন? / কী কারণে?", exampleArabic: "قُلْ فَلِمَ تَقْتُلُونَ أَنۢبِيَآءَ ٱللَّهِ", exampleTranslationEn: "Say, 'Why did you kill Allah's prophets?'", exampleTranslationBn: "বলুন, 'তবে কেন তোমরা ইতিপূর্বে আল্লাহর নবীদের হত্যা করেছিলে?'" },
      { arabic: "كَمَا", transliteration: "kamā", formula: "كَـ + مَا", meaningEn: "Just as / Like that which", meaningBn: "যেমন / ঠিক যেভাবে", exampleArabic: "كَمَا خَلَقْنَٰكُمْ أَوَّلَ مَرَّةٍۭ", exampleTranslationEn: "Just as We created you the first time.", exampleTranslationBn: "ঠিক যেভাবে আমি তোমাদের প্রথমবার সৃষ্টি করেছিলাম।" },
      { arabic: "إِنَّمَا", transliteration: "innamā", formula: "إِنَّ + مَا", meaningEn: "Only / Verily is", meaningBn: "নিশ্চয়ই কেবল / শুধুমাত্র", exampleArabic: "قُلْ إِنَّمَا ٱلْءَايَٰتُ عِندَ ٱللَّهِ", exampleTranslationEn: "Say, 'Verily miracles are only with Allah.'", exampleTranslationBn: "বলুন, 'নিদর্শনসমূহ তো কেবল আল্লাহরই নিকট রয়েছে।'" },
      { arabic: "أَنَّمَا", transliteration: "annamā", formula: "أَنَّ + مَا", meaningEn: "That (restrictive)", meaningBn: "যে কেবল", exampleArabic: "وَٱعْلَمُوٓا۟ أَنَّمَآ أَمْوَٰلُكُمْ وَأَوْلَٰدُكُمْ فِتْنَةٌۭ", exampleTranslationEn: "And know that your possessions and your children are a test.", exampleTranslationBn: "আর জেনে রাখো, তোমাদের ধনসম্পদ ও সন্তান-সন্ততি এক পরীক্ষা মাত্র।" },
      { arabic: "كَأَنَّمَا", transliteration: "ka-annamā", formula: "كَأَنَّ + مَا", meaningEn: "As if / As though", meaningBn: "যেন / ঠিক যেন", exampleArabic: "كَأَنَّمَا يَصَّعَّدُ فِى ٱلسَّمَآءِ", exampleTranslationEn: "As though he were climbing up into the sky.", exampleTranslationBn: "যেন সে অতি কষ্টে আকাশে আরোহণ করছে।" },
      { arabic: "كُلَّمَا", transliteration: "kullamā", formula: "كُلّ + مَا", meaningEn: "Every time / Whenever", meaningBn: "যখনই / যতবারই", exampleArabic: "كُلَّمَا دَخَلَتْ أُمَّةٌۭ لَّعَنَتْ أُخْتَهَا", exampleTranslationEn: "Every time a nation enters, it will curse its sister.", translationBn: "যখনই কোনো দল প্রবেশ করবে, সে তার পূর্ববর্তী দলকে অভিশাপ দেবে।" }
    ]
  }
];

// ============================================
// BOOK 2 DATA: 11 Lists + Addendum
// ============================================
export const BOOK_2_LISTS = [
  {
    id: "b2-list-1",
    listNumber: 1,
    titleEn: "List ONE: Allah's Names & Attributes",
    titleBn: "১ম অধ্যায়: আল্লাহর পবিত্র নাম ও গুণাবলী (আসমাউল হুসনা)",
    descriptionEn: "19 essential Divine names and attributes frequently repeated across the Holy Quran.",
    descriptionBn: "পবিত্র কুরআনে সর্বাধিকবার আসা আল্লাহর ১৯টি মহান গুণবাচক নাম ও সিফাত।",
    words: [
      { arabic: "رَبّ", transliteration: "rabb", meaningEn: "Lord / Sustainer / Cherisher", meaningBn: "রব / প্রতিপালক", frequency: "900+", example: { arabic: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ", translationEn: "All praise is due to Allah, Lord of the worlds.", translationBn: "যাবতীয় প্রশংসা একমাত্র আল্লাহর জন্য, যিনি সকল সৃষ্টির প্রতিপালক।", surah: 1, ayah: 2, surahNameEn: "Al-Fatihah", surahNameBn: "সূরা আল-ফাতিহা" } },
      { arabic: "ٱلرَّحْمَٰن", transliteration: "ar-raḥmān", meaningEn: "The Entirely Merciful", meaningBn: "পরম করুণাময়", frequency: "170", example: { arabic: "ٱلرَّحْمَٰنُ عَلَى ٱلْعَرْشِ ٱسْتَوَىٰ", translationEn: "The Most Merciful rose over the Throne.", translationBn: "পরম দয়াময় আরশের ওপর সমুন্নত হয়েছেন।", surah: 20, ayah: 5, surahNameEn: "Ta-Ha", surahNameBn: "সূরা ত্বা-হা" } },
      { arabic: "ٱلرَّحِيم", transliteration: "ar-raḥīm", meaningEn: "The Especially Merciful", meaningBn: "অসীম দয়ালু", frequency: "227", example: { arabic: "وَكَانَ بِٱلْمُؤْمِنِينَ رَحِيمًۭا", translationEn: "And He is ever, to the believers, Merciful.", translationBn: "আর তিনি মুমিনদের প্রতি পরম দয়ালু।", surah: 33, ayah: 43, surahNameEn: "Al-Ahzab", surahNameBn: "সূরা আল-আহযাব" } },
      { arabic: "عَزِيز", transliteration: "'azīz", meaningEn: "All-Mighty / Exalted in Might", meaningBn: "মহাপরাক্রমশালী / পরাক্রমশালী", frequency: "99", example: { arabic: "وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ عَزِيزٌ حَكِيمٌ", translationEn: "And know that Allah is Exalted in Might and Wise.", translationBn: "এবং জেনে রাখো যে আল্লাহ পরাক্রমশালী, প্রজ্ঞাময়।", surah: 2, ayah: 209, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "حَكِيم", transliteration: "ḥakīm", meaningEn: "All-Wise", meaningBn: "মহাপ্রজ্ঞাময় / তত্ত্বজ্ঞানী", frequency: "97", example: { arabic: "إِنَّ ٱللَّهَ كَانَ عَلِيمًا حَكِيمًۭا", translationEn: "Indeed, Allah is ever All-Knowing and Wise.", translationBn: "নিশ্চয়ই আল্লাহ সর্বজ্ঞ, প্রজ্ঞাবান।", surah: 4, ayah: 11, surahNameEn: "An-Nisa", surahNameBn: "সূরা আন-নিসা" } },
      { arabic: "غَفُور", transliteration: "ghafūr", meaningEn: "Most Forgiving / Oft-Forgiving", meaningBn: "পরম ক্ষমাশীল", frequency: "91", example: { arabic: "وَٱللَّهُ غَفُورٌ حَلِيمٌ", translationEn: "And Allah is Forgiving and Forbearing.", translationBn: "আর আল্লাহ বড়ই ক্ষমাশীল, পরম সহনশীল।", surah: 2, ayah: 225, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "حَلِيم", transliteration: "ḥalīm", meaningEn: "Forbearing / Clement", meaningBn: "পরম সহনশীল / ধৈর্যশীল", frequency: "15", example: { arabic: "وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ غَفُورٌ حَلِيمٌ", translationEn: "And know that Allah is Oft-Forgiving and Forbearing.", translationBn: "আর জেনে রাখো যে আল্লাহ বড় ক্ষমাশীল ও ধৈর্যশীল।", surah: 2, ayah: 235, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "ٱلْعَظِيم", transliteration: "al-'aẓīm", meaningEn: "The Magnificent / The Supreme", meaningBn: "মহান / শ্রেষ্ঠ", frequency: "107", example: { arabic: "وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ", translationEn: "And He is the Most High, the Most Great.", translationBn: "আর তিনিই সর্বোচ্চ, সর্বশ্রেষ্ঠ।", surah: 2, ayah: 255, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "ٱلْعَلِىّ", transliteration: "al-'aliyy", meaningEn: "The Most High / Exalted", meaningBn: "সুউচ্চ / শ্রেষ্ঠ", frequency: "11", example: { arabic: "وَأَنَّ ٱللَّهَ هُوَ ٱلْعَلِىُّ ٱلْكَبِيرُ", translationEn: "And that Allah is the Most High, the Grand.", translationBn: "এবং নিশ্চয়ই আল্লাহ সমুন্নত, সুমহান।", surah: 22, ayah: 62, surahNameEn: "Al-Hajj", surahNameBn: "সূরা আল-হাজ্জ" } },
      { arabic: "عَلِيم", transliteration: "'alīm", meaningEn: "All-Knowing / Omniscient", meaningBn: "সর্বজ্ঞ / সর্বজ্ঞাতা", frequency: "150+", example: { arabic: "إِنَّ ٱللَّهَ كَانَ عَلِيمًا خَبِيرًا", translationEn: "Indeed, Allah is All-Knowing, Acquainted.", translationBn: "নিশ্চয়ই আল্লাহ সর্বজ্ঞ, সম্যক অবহিত।", surah: 4, ayah: 35, surahNameEn: "An-Nisa", surahNameBn: "সূরা আন-নিসা" } },
      { arabic: "خَبِير", transliteration: "khabīr", meaningEn: "Acquainted / All-Aware", meaningBn: "সর্ববিষয়ে সম্যক অবহিত", frequency: "45", example: { arabic: "وَهُوَ ٱلْحَكِيمُ ٱلْخَبِيرُ", translationEn: "And He is the Wise, the Acquainted.", translationBn: "আর তিনিই প্রজ্ঞাময়, সম্যক অবহিত।", surah: 6, ayah: 18, surahNameEn: "Al-An'am", surahNameBn: "সূরা আল-আন'আম" } },
      { arabic: "سَمِيع", transliteration: "samī'", meaningEn: "All-Hearing", meaningBn: "সর্বশ্রোতা", frequency: "50+", example: { arabic: "إِنَّ ٱللَّهَ كَانَ سَمِيعًۢا بَصِيرًا", translationEn: "Indeed, Allah is All-Hearing, All-Seeing.", translationBn: "নিশ্চয়ই আল্লাহ সর্বশ্রোতা, সর্বদ্রষ্টা।", surah: 4, ayah: 58, surahNameEn: "An-Nisa", surahNameBn: "সূরা আন-নিসা" } },
      { arabic: "بَصِير", transliteration: "baṣīr", meaningEn: "All-Seeing", meaningBn: "সর্বদ্রষ্টা", frequency: "50+", example: { arabic: "وَٱللَّهُ بَصِيرٌۢ بِمَا تَعْمَلُونَ", translationEn: "And Allah is Seeing of what you do.", translationBn: "আর তোমরা যা করো আল্লাহ তা প্রত্যক্ষ করেন।", surah: 2, ayah: 265, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "شَكُور", transliteration: "shakūr", meaningEn: "Appreciative / Grateful", meaningBn: "গুণগ্রাহী / মূল্যায়নকারী", frequency: "10", example: { arabic: "إِنَّهُۥ غَفُورٌۭ شَكُورٌۭ", translationEn: "Indeed, He is Forgiving and Appreciative.", translationBn: "নিশ্চয়ই তিনি ক্ষমাশীল, গুণগ্রাহী।", surah: 35, ayah: 30, surahNameEn: "Fatir", surahNameBn: "সূরা ফাতির" } },
      { arabic: "قَدِير", transliteration: "qadīr", meaningEn: "Competent / Omnipotent / Capable", meaningBn: "সর্বশক্তিমান / পূর্ণ ক্ষমতাবান", frequency: "45", example: { arabic: "إِنَّ ٱللَّهَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ", translationEn: "Indeed, Allah is over all things Competent.", translationBn: "নিশ্চয়ই আল্লাহ সবকিছুর ওপর সর্বশক্তিমান।", surah: 2, ayah: 106, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "وَكِيل", transliteration: "wakīl", meaningEn: "Disposer of affairs / Trustee", meaningBn: "কর্মবিধায়ক / অভিভাবক", frequency: "24", example: { arabic: "حَسْبُنَا ٱللَّهُ وَنِعْمَ ٱلْوَكِيلُ", translationEn: "Sufficient for us is Allah, and He is the best Disposer of affairs.", translationBn: "আমাদের জন্য আল্লাহই যথেষ্ট এবং তিনি কতই না উত্তম কর্মবিধায়ক!", surah: 3, ayah: 173, surahNameEn: "Ali 'Imran", surahNameBn: "সূরা আলে ইমরান" } },
      { arabic: "نَصِير", transliteration: "naṣīr", meaningEn: "Helper / Protector", meaningBn: "সাহায্যকারী", frequency: "24", example: { arabic: "وَمَا لَكُم مِّن دُونِ ٱللَّهِ مِن وَلِىٍّۢ وَلَا نَصِيرٍ", translationEn: "And you have no protector or helper besides Allah.", translationBn: "এবং আল্লাহ ছাড়া তোমাদের কোনো অভিভাবক ও সাহায্যকারী নেই।", surah: 2, ayah: 107, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "حَمِيد", transliteration: "ḥamīd", meaningEn: "Praiseworthy", meaningBn: "প্রশংসিত", frequency: "17", example: { arabic: "وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ غَنِىٌّ حَمِيدٌ", translationEn: "And know that Allah is Free of need and Praiseworthy.", translationBn: "আর জেনে রাখো যে আল্লাহ অভাবমুক্ত, পরম প্রশংসিত।", surah: 2, ayah: 267, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "تَوَّاب", transliteration: "tawwāb", meaningEn: "Acceptor of repentance", meaningBn: "তওবা কবুলকারী", frequency: "11", example: { arabic: "إِنَّهُۥ هُوَ ٱلتَّوَّابُ ٱلرَّحِيمُ", translationEn: "Indeed, He is the Accepting of repentance, the Merciful.", translationBn: "নিশ্চয়ই তিনি তওবা কবুলকারী, পরম দয়ালু।", surah: 2, ayah: 37, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } }
    ]
  },
  {
    id: "b2-list-2",
    listNumber: 2,
    titleEn: "List TWO: Attributes & Adjectives",
    titleBn: "২য় অধ্যায়: সাধারণ গুণবাচক বিশেষণ (সিফাত)",
    descriptionEn: "Frequently used descriptive adjectives in the Quran, including comparatives and superlatives.",
    descriptionBn: "কুরআনে বহুল ব্যবহৃত বিশেষণ ও তুলনামূলক গুণবাচক শব্দসমূহ (প্রথম, শেষ, নিকট, দূর, বড়, ছোট ইত্যাদি)।",
    words: [
      { arabic: "أَوَّل", transliteration: "awwal", meaningEn: "First", meaningBn: "প্রথম", frequency: "60+", example: { arabic: "إِنَّ أَوَّلَ بَيْتٍۢ وُضِعَ لِلنَّاسِ", translationEn: "Indeed, the first House established for mankind.", translationBn: "নিশ্চয়ই মানবজাতির জন্য সর্বপ্রথম যে ঘরটি নির্মিত হয়েছিল।", surah: 3, ayah: 96, surahNameEn: "Ali 'Imran", surahNameBn: "সূরা আলে ইমরান" } },
      { arabic: "ءَاخِر", transliteration: "ākhir", meaningEn: "Last", meaningBn: "শেষ / অন্তিম", frequency: "40+", example: { arabic: "وَءَاخِرُ دَعْوَىٰهُمْ أَنِ ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ", translationEn: "And the last of their call will be, 'Praise be to Allah, Lord of the worlds!'", translationBn: "এবং তাদের শেষ প্রার্থনা হবে: 'যাবতীয় প্রশংসা আল্লাহর জন্য যিনি জগতসমূহের প্রতিপালক!'", surah: 10, ayah: 10, surahNameEn: "Yunus", surahNameBn: "সূরা ইউনুস" } },
      { arabic: "قَرِيب ⟵ أَقْرَب", transliteration: "qarīb ⟵ aqrab", meaningEn: "Near ⟵ Nearer", meaningBn: "কাছে ⟵ অধিকতর নিকটবর্তী", frequency: "35", example: { arabic: "وَإِذَا سَأَلَكَ عِبَادِى عَنِّى فَإِنِّى قَرِيبٌ", translationEn: "And when My servants ask you concerning Me - indeed I am near.", translationBn: "আর আমার বান্দারা যখন আমার সম্পর্কে আপনাকে জিজ্ঞাসা করে, আমি তো কাছেই আছি।", surah: 2, ayah: 186, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "بَعِيد", transliteration: "ba'īd", meaningEn: "Far / Remote", meaningBn: "দূরবর্তী / সুদূর", frequency: "25+", example: { arabic: "وَيُرِيدُ ٱلشَّيْطَٰنُ أَن يُضِلَّهُمْ ضَلَٰلًۢا بَعِيدًۭا", translationEn: "And Satan wishes to lead them far astray.", translationBn: "আর শয়তান তাদের চরম পথভ্রষ্টতায় নিমজ্জিত করতে চায়।", surah: 4, ayah: 60, surahNameEn: "An-Nisa", surahNameBn: "সূরা আন-নিসা" } },
      { arabic: "شَدِيد ⟵ أَشَدّ", transliteration: "shadīd ⟵ ashadd", meaningEn: "Severe/Strong ⟵ Severer/Stronger", meaningBn: "কঠোর/শক্তিশালী ⟵ অধিকতর কঠোর", frequency: "60+", example: { arabic: "إِنَّ ٱللَّهَ شَدِيدُ ٱلْعِقَابِ", translationEn: "Indeed, Allah is severe in penalty.", translationBn: "নিশ্চয়ই আল্লাহ কঠোর শাস্তিদাতা।", surah: 5, ayah: 2, surahNameEn: "Al-Ma'idah", surahNameBn: "সূরা আল-মায়েদাহ" } },
      { arabic: "كَبِير ⟵ أَكْبَر", transliteration: "kabīr ⟵ akbar", meaningEn: "Great/Large ⟵ Greater/Larger", meaningBn: "বড় / মহান ⟵ অধিকতর বড়", frequency: "100+", example: { arabic: "قُلْ فِيهِمَآ إِثْمٌۭ كَبِيرٌۭ", translationEn: "Say, 'In them is great sin.'", translationBn: "বলুন, 'উভয়ের মধ্যে রয়েছে মহাপাপ।'", surah: 2, ayah: 219, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "كَثِير ⟵ أَكْثَر", transliteration: "kathīr ⟵ akthar", meaningEn: "Many/Much ⟵ Most/More", meaningBn: "অনেক / প্রচুর ⟵ অধিকাংশ / আরও বেশি", frequency: "150+", example: { arabic: "يُضِلُّ بِهِۦ كَثِيرًۭا وَيَهْدِى بِهِۦ كَثِيرًۭا", translationEn: "He misleads many thereby and guides many thereby.", translationBn: "তিনি এর দ্বারা অনেককে বিভ্রান্ত করেন এবং অনেককে সঠিক পথ প্রদর্শন করেন।", surah: 2, ayah: 26, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "سَرِيع ⟵ أَسْرَع", transliteration: "sarī' ⟵ asra'", meaningEn: "Swift ⟵ Swiftest", meaningBn: "দ্রুতগামী ⟵ সর্বাধিক দ্রুত হিসাবকারী", frequency: "35", example: { arabic: "إِنَّ ٱللَّهَ سَرِيعُ ٱلْحِسَابِ", translationEn: "Indeed, Allah is swift in account.", translationBn: "নিশ্চয়ই আল্লাহ দ্রুত হিসাব গ্রহণকারী।", surah: 3, ayah: 19, surahNameEn: "Ali 'Imran", surahNameBn: "সূরা আলে ইমরান" } },
      { arabic: "قَلِيل", transliteration: "qalīl", meaningEn: "Little / Few / Small", meaningBn: "অল্প / সামান্য", frequency: "70+", example: { arabic: "وَقَلِيلٌۭ مِّنْ عِبَادِىَ ٱلشَّكُورُ", translationEn: "And few of My servants are grateful.", translationBn: "আর আমার বান্দাদের মধ্যে কৃতজ্ঞ বান্দা খুবই অল্প।", surah: 34, ayah: 13, surahNameEn: "Saba", surahNameBn: "সূরা সাবা" } },
      { arabic: "كَرِيم", transliteration: "karīm", meaningEn: "Noble / Generous / Honorable", meaningBn: "সম্মানিত / মহিমান্বিত", frequency: "27", example: { arabic: "إِنَّ هَٰذَآ إِلَّا مَلَكٌۭ كَرِيمٌ", translationEn: "This is none but a noble angel.", translationBn: "এ তো সম্মানিত ফেরেশতা ছাড়া আর কেউ নয়।", surah: 12, ayah: 31, surahNameEn: "Yusuf", surahNameBn: "সূরা ইউসুফ" } },
      { arabic: "حَفِيظ", transliteration: "ḥafīẓ", meaningEn: "Guardian / Protector / Watchful", meaningBn: "সংরক্ষণকারী / প্রহরী", frequency: "14", example: { arabic: "قَالَ ٱجْعَلْنِى عَلَىٰ خَزَآئِنِ ٱلْأَرْضِ ۖ إِنِّى حَفِيظٌ عَلِيمٌ", translationEn: "He said, 'Appoint me over the storehouses; indeed, I will be a knowledgeable guardian.'", translationBn: "তিনি বললেন, 'আমাকে দেশের কোষাগারের দায়িত্বে নিয়োজিত করুন; নিশ্চয়ই আমি এক বিশ্বস্ত ও অভিজ্ঞ সংরক্ষক।'", surah: 12, ayah: 55, surahNameEn: "Yusuf", surahNameBn: "সূরা ইউসুফ" } },
      { arabic: "أَحْسَن", transliteration: "aḥsan", meaningEn: "Better / Best / Excellent", meaningBn: "সর্বোত্তম / অধিকতর সুন্দর", frequency: "36", example: { arabic: "فَحَيُّوا۟ بِأَحْسَنَ مِنْهَآ أَوْ رُدُّوهَآ", translationEn: "Greet with one better than it or return it in like manner.", translationBn: "তোমরা তার চেয়ে উত্তম অভিবাদন জানাও অথবা তারই অনুরূপ ফিরিয়ে দাও।", surah: 4, ayah: 86, surahNameEn: "An-Nisa", surahNameBn: "সূরা আন-নিসা" } },
      { arabic: "أَظْلَم", transliteration: "aẓlam", meaningEn: "More unjust / Greatest wrongdoer", meaningBn: "অধিকতর অত্যাচারী / সবচেয়ে বড় যালেম", frequency: "30", example: { arabic: "وَمَنْ أَظْلَمُ مِمَّنِ ٱفْتَرَىٰ عَلَى ٱللَّهِ كَذِبًا", translationEn: "And who is more unjust than one who invents a lie about Allah?", translationBn: "আর তার চেয়ে বড় যালেম আর কে যে আল্লাহর ওপর মিথ্যা অপবাদ রচনা করে?", surah: 6, ayah: 21, surahNameEn: "Al-An'am", surahNameBn: "সূরা আল-আন'আম" } },
      { arabic: "أَحَقّ", transliteration: "aḥaqq", meaningEn: "More worthy / Has greater right", meaningBn: "অধিকতর হকদার / বেশি উপযোগী", frequency: "10", example: { arabic: "وَنَحْنُ أَحَقُّ بِٱلْمُلْكِ مِنْهُ", translationEn: "While we are more worthy of kingship than him.", translationBn: "অথচ তার চেয়ে রাজত্বের অধিকতর হকদার তো আমরা।", surah: 2, ayah: 247, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "أَدْنَىٰ", transliteration: "adnā", meaningEn: "Nearer / Lower / More likely", meaningBn: "অধিকতর নিকটবর্তী / নিম্নতর", frequency: "12", example: { arabic: "ذَٰلِكُمْ أَقْسَطُ عِندَ ٱللَّهِ وَأَقْوَمُ لِلشَّهَٰدَةِ وَأَدْنَىٰٓ أَلَّا تَرْتَابُوٓا۟", translationEn: "That is more just in the sight of Allah, stronger as evidence, and more likely to prevent doubt.", translationBn: "এটা আল্লাহর কাছে অধিকতর ন্যায়সঙ্গত, সাক্ষ্যের জন্য দৃঢ়তর এবং তোমাদের সন্দেহে না পড়ার জন্য নিকটতর।", surah: 2, ayah: 282, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } }
    ]
  },
  {
    id: "b2-list-3",
    listNumber: 3,
    titleEn: "List THREE: Prophets & Messengers",
    titleBn: "৩য় অধ্যায়: আম্বিয়ায়ে কেরাম ও রাসূলগণের নাম",
    descriptionEn: "Names of the Prophets and Messengers mentioned in the Holy Quran, along with titles and roles.",
    descriptionBn: "পবিত্র কুরআনে বর্ণিত আম্বিয়ায়ে কেরামের নাম ও তাঁদের মর্যাদাসূচক পরিভাষাসমূহ।",
    words: [
      { arabic: "رَسُول (رُسُل)", transliteration: "rasūl (rusul)", meaningEn: "Messenger(s)", meaningBn: "রাসূল (রাসূলগণ)", frequency: "500+", example: { arabic: "مَّا ٱلْمَسِيحُ ٱبْنُ مَرْيَمَ إِلَّا رَسُولٌۭ", translationEn: "The Messiah, son of Mary, was not but a messenger.", translationBn: "মরিয়ম-তনয় মসীহ একজন রাসূল ছাড়া আর কিছুই নন।", surah: 5, ayah: 75, surahNameEn: "Al-Ma'idah", surahNameBn: "সূরা আল-মায়েদাহ" } },
      { arabic: "نَبِىّ (أَنۢبِيَآء / نَّبِيُّونَ)", transliteration: "nabiyy (ambiyā' / nabiyyūn)", meaningEn: "Prophet(s)", meaningBn: "নবী (নবীগণ)", frequency: "160+", example: { arabic: "يَحْكُمُ بِهَا ٱلنَّبِيُّونَ ٱلَّذِينَ أَسْلَمُوا۟", translationEn: "The prophets who submitted judged by it.", translationBn: "আত্মসমর্পণকারী নবীগণ এর মাধ্যমে বিচার করতেন।", surah: 5, ayah: 44, surahNameEn: "Al-Ma'idah", surahNameBn: "সূরা আল-মায়েদাহ" } },
      { arabic: "أَمِين", transliteration: "amīn", meaningEn: "Trustworthy / Honest", meaningBn: "বিশ্বস্ত", frequency: "14", example: { arabic: "إِنِّى لَكُمْ رَسُولٌ أَمِينٌۭ", translationEn: "Indeed, I am to you a trustworthy messenger.", translationBn: "নিশ্চয়ই আমি তোমাদের জন্য এক বিশ্বস্ত রাসূল।", surah: 26, ayah: 107, surahNameEn: "Ash-Shu'ara", surahNameBn: "সূরা আশ-শু'আরা" } },
      { arabic: "نَذِير", transliteration: "nadhīr", meaningEn: "Warner", meaningBn: "সতর্ককারী", frequency: "50+", example: { arabic: "إِنَّآ أَرْسَلْنَٰكَ بِٱلْحَقِّ بَشِيرًۭا وَنَذِيرًۭا", translationEn: "Indeed, We sent you with truth as a bringer of good tidings and a warner.", translationBn: "নিশ্চয়ই আমি আপনাকে সত্যসহ সুসংবাদদাতা ও সতর্ককারীরূপে প্রেরণ করেছি।", surah: 2, ayah: 119, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "مُوسَىٰ / هَٰرُون", transliteration: "mūsā / hārūn", meaningEn: "Moses / Aaron", meaningBn: "মুসা (আ.) ও হারুন (আ.)", frequency: "150+", example: { arabic: "ثُمَّ بَعَثْنَا مِنۢ بَعْدِهِم مُّوسَىٰ وَهَٰرُونَ", translationEn: "Then We sent after them Moses and Aaron.", translationBn: "অতঃপর তাদের পর আমি মুসা ও হারুনকে প্রেরণ করলাম।", surah: 10, ayah: 75, surahNameEn: "Yunus", surahNameBn: "সূরা ইউনুস" } },
      { arabic: "إِبْرَٰهِيم / إِسْمَٰعِيل", transliteration: "ibrāhīm / ismā'īl", meaningEn: "Abraham / Ishmael", meaningBn: "ইবরাহীম (আ.) ও ইসমাঈল (আ.)", frequency: "80+", example: { arabic: "وَإِذِ ٱبْتَلَىٰٓ إِبْرَٰهِـۧمَ رَبُّهُۥ بِكَلِمَٰتٍۢ فَأَتَمَّهُنَّ", translationEn: "And recall when Abraham was tried by his Lord with commands and he fulfilled them.", translationBn: "আর স্মরণ করো, যখন ইবরাহীমকে তার প্রতিপালক কয়েকটি আদেশ দ্বারা পরীক্ষা করলেন এবং তিনি তা পূর্ণ করলেন।", surah: 2, ayah: 124, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "نُوح", transliteration: "nūḥ", meaningEn: "Noah", meaningBn: "নূহ (আ.)", frequency: "43", example: { arabic: "إِنَّ ٱللَّهَ ٱصْطَفَىٰٓ ءَادَمَ وَنُوحًۭا", translationEn: "Indeed, Allah chose Adam and Noah.", translationBn: "নিশ্চয়ই আল্লাহ আদম ও নূহকে মনোনীত করেছেন।", surah: 3, ayah: 33, surahNameEn: "Ali 'Imran", surahNameBn: "সূরা আলে ইমরান" } },
      { arabic: "يُوسُف", transliteration: "yūsuf", meaningEn: "Joseph", meaningBn: "ইউসুফ (আ.)", frequency: "27", example: { arabic: "إِذْ قَالَ يُوسُفُ لِأَبِيهِ يَٰٓأَبَتِ", translationEn: "When Joseph said to his father, 'O my father!'", translationBn: "স্মরণ করো, যখন ইউসুফ তার পিতাকে বলল, 'হে আমার পিতা!'", surah: 12, ayah: 4, surahNameEn: "Yusuf", surahNameBn: "সূরা ইউসুফ" } },
      { arabic: "لُوط", transliteration: "lūṭ", meaningEn: "Lot", meaningBn: "লুত (আ.)", frequency: "27", example: { arabic: "فَلَمَّا جَآءَ ءَالَ لُوطٍ ٱلْمُرْسَلُونَ", translationEn: "And when the messengers came to the family of Lot.", translationBn: "অতঃপর যখন প্রেরিত ফেরেশতাগণ লুতের পরিবারের কাছে এলো।", surah: 15, ayah: 61, surahNameEn: "Al-Hijr", surahNameBn: "সূরা আল-হিজর" } },
      { arabic: "عِيسَى ٱبْن مَرْيَم", transliteration: "'īsā ibn maryam", meaningEn: "Jesus, son of Mary", meaningBn: "ঈসা ইবনে মারিয়াম (আ.)", frequency: "30+", example: { arabic: "وَءَاتَيْنَا عِيسَى ٱبْنَ مَرْيَمَ ٱلْبَيِّنَٰتِ", translationEn: "And We gave Jesus, the son of Mary, clear proofs.", translationBn: "এবং আমি মারিয়াম-পুত্র ঈসাকে সুস্পষ্ট নিদর্শনসমূহ দান করেছি।", surah: 2, ayah: 87, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "ءَادَم", transliteration: "ādam", meaningEn: "Adam", meaningBn: "আদম (আ.)", frequency: "25", example: { arabic: "وَعَلَّمَ ءَادَمَ ٱلْأَسْمَآءَ كُلَّهَا", translationEn: "And He taught Adam the names - all of them.", translationBn: "এবং তিনি আদমকে সমস্ত বস্তুর নাম শিক্ষা দিলেন।", surah: 2, ayah: 31, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "سُلَيْمَٰن / دَاوُۥد", transliteration: "sulaymān / dāwūd", meaningEn: "Solomon / David", meaningBn: "সুলায়মান (আ.) ও দাউদ (আ.)", frequency: "35+", example: { arabic: "وَوَرِثَ سُلَيْمَٰنُ دَاوُۥدَ", translationEn: "And Solomon inherited David.", translationBn: "এবং সুলায়মান দাউদের উত্তরাধিকারী হয়েছিলেন।", surah: 27, ayah: 16, surahNameEn: "An-Naml", surahNameBn: "সূরা আন-নামল" } }
    ]
  },
  {
    id: "b2-list-4",
    listNumber: 4,
    titleEn: "List FOUR: Allah's Signs & Blessings",
    titleBn: "৪র্থ অধ্যায়: মহাজাগতিক নিদর্শন ও প্রাকৃতিক নেয়ামত",
    descriptionEn: "Cosmic creations and Divine favors mentioned repeatedly in the Quran (heavens, earth, sun, moon, rain, mountains).",
    descriptionBn: "কুরআনে বর্ণিত মহাবিশ্ব, প্রকৃতি ও সৃষ্টির নিদর্শনসমূহ (আকাশ, পৃথিবী, সূর্য, চন্দ্র, নদী, পর্বত ইত্যাদি)।",
    words: [
      { arabic: "ءَايَة (ءَايَٰت)", transliteration: "āyah (āyāt)", meaningEn: "Sign / Verse (Signs/Verses)", meaningBn: "নিদর্শন / আয়াত", frequency: "380+", example: { arabic: "إِنَّ فِى ذَٰلِكَ لَءَايَةًۭ لِّلْمُؤْمِنِينَ", translationEn: "Indeed in that is a sign for the believers.", translationBn: "নিশ্চয়ই এতে মুমিনদের জন্য বড় নিদর্শন রয়েছে।", surah: 15, ayah: 77, surahNameEn: "Al-Hijr", surahNameBn: "সূরা আল-হিজর" } },
      { arabic: "ٱلْقُرْءَان", transliteration: "al-qur'ān", meaningEn: "The Holy Quran", meaningBn: "কুরআনুল কারীম", frequency: "70", example: { arabic: "شَهْرُ رَمَضَانَ ٱلَّذِىٓ أُنزِلَ فِيهِ ٱلْقُرْءَانُ", translationEn: "The month of Ramadhan in which was revealed the Quran.", translationBn: "রমজান মাস, যাতে কুরআন নাজিল করা হয়েছে।", surah: 2, ayah: 185, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "ٱلْإِنجِيل / ٱلتَّوْرَىٰة", transliteration: "al-injīl / at-tawrāh", meaningEn: "The Gospel / The Torah", meaningBn: "ইঞ্জিল ও তাওরাত কিতাব", frequency: "30+", example: { arabic: "نَزَّلَ عَلَيْكَ ٱلْكِتَٰبَ بِٱلْحَقِّ مُصَدِّقًۭا لِّمَا بَيْنَ يَدَيْهِ وَأَنزَلَ ٱلتَّوْرَىٰةَ وَٱلْإِنجِيلَ", translationEn: "He has sent down upon you the Book in truth, confirming what was before it, and He revealed the Torah and the Gospel.", translationBn: "তিনি আপনার ওপর সত্যসহ কিতাব অবতীর্ণ করেছেন, যা পূর্ববর্তী কিতাবসমূহের সত্যায়নকারী; আর তিনি নাজিল করেছিলেন তাওরাত ও ইঞ্জিল।", surah: 3, ayah: 3, surahNameEn: "Ali 'Imran", surahNameBn: "সূরা আলে ইমরান" } },
      { arabic: "أَنْعَٰم", transliteration: "an'ām", meaningEn: "Livestock / Cattle", meaningBn: "গৃহপালিত পশু", frequency: "32", example: { arabic: "وَٱلْأَنْعَٰمَ خَلَقَهَا ۗ لَكُمْ فِيهَا دِفْءٌۭ وَمَنَٰفِعُ", translationEn: "And the grazing livestock He has created for you; in them is warmth and benefits.", translationBn: "আর চতুষ্পদ জন্তু, তিনি তা সৃষ্টি করেছেন তোমাদের জন্য; তাতে রয়েছে শীতনিবারক উষ্ণতা ও বহুবিধ উপকার।", surah: 16, ayah: 5, surahNameEn: "An-Nahl", surahNameBn: "সূরা আন-নাহল" } },
      { arabic: "جَبَل (جِبَال)", transliteration: "jabal (jibāl)", meaningEn: "Mountain(s)", meaningBn: "পাহাড় / পর্বতমালা", frequency: "39", example: { arabic: "وَتَرَى ٱلْجِبَالَ تَحْسَبُهَا جَامِدَةًۭ", translationEn: "And you see the mountains, thinking them rigid.", translationBn: "আর আপনি পর্বতমালা দেখে মনে করেন তা অচল।", surah: 27, ayah: 88, surahNameEn: "An-Naml", surahNameBn: "সূরা আন-নামল" } },
      { arabic: "بَحْر / نَهَر (أَنْهَٰر)", transliteration: "baḥr / nahar (anhār)", meaningEn: "Sea / River(s)", meaningBn: "সাগর ও নদীসমূহ", frequency: "90+", example: { arabic: "وَسَخَّرَ لَكُمُ ٱلْأَنْهَٰرَ", translationEn: "And He subjected for you the rivers.", translationBn: "এবং তিনি তোমাদের সেবায় নদীগুলোকে নিয়োজিত করেছেন।", surah: 14, ayah: 32, surahNameEn: "Ibrahim", surahNameBn: "সূরা ইবরাহীম" } },
      { arabic: "شَمْس / قَمَر", transliteration: "shams / qamar", meaningEn: "Sun / Moon", meaningBn: "সূর্য ও চাঁদ", frequency: "60+", example: { arabic: "وَسَخَّرَ ٱلشَّمْسَ وَٱلْقَمَرَ ۖ كُلٌّۭ يَجْرِى لِأَجَلٍۢ مُّسَمًّۭى", translationEn: "And subjected the sun and the moon, each running for a specified term.", translationBn: "এবং সূর্য ও চাঁদকে নিয়োজিত করেছেন, প্রত্যেকে এক নির্দিষ্ট মেয়াদ পর্যন্ত চলছে।", surah: 13, ayah: 2, surahNameEn: "Ar-Ra'd", surahNameBn: "সূরা আর-রাদ" } },
      { arabic: "لَيْل / نَهَار", transliteration: "layl / nahār", meaningEn: "Night / Daytime", meaningBn: "রাত ও দিন", frequency: "140+", example: { arabic: "إِنَّ فِى ٱخْتِلَٰفِ ٱلَّيْلِ وَٱلنَّهَارِ لَءَايَٰتٍۢ", translationEn: "Indeed, in the alternation of the night and the day are signs.", translationBn: "নিশ্চয়ই রাত ও দিনের পরিবর্তনের মধ্যে রয়েছে বহু নিদর্শন।", surah: 10, ayah: 6, surahNameEn: "Yunus", surahNameBn: "সূরা ইউনুস" } },
      { arabic: "أَرْض / سَمَآء (سَمَٰوَٰت)", transliteration: "arḍ / samā' (samāwāt)", meaningEn: "Earth / Sky (Heavens)", meaningBn: "পৃথিবী ও আসমানসমূহ", frequency: "700+", example: { arabic: "خَلَقَ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ بِٱلْحَقِّ", translationEn: "He created the heavens and the earth in truth.", translationBn: "তিনি যথাযথ উদ্দেশ্যে আকাশমন্ডলী ও পৃথিবী সৃষ্টি করেছেন।", surah: 16, ayah: 3, surahNameEn: "An-Nahl", surahNameBn: "সূরা আন-নাহল" } },
      { arabic: "نِعْمَة / فَضْل", transliteration: "ni'mah / faḍl", meaningEn: "Blessing/Favor / Grace/Bounty", meaningBn: "নেয়ামত ও অনুগ্রহ", frequency: "200+", example: { arabic: "وَإِن تَعُدُّوا۟ نِعْمَةَ ٱللَّهِ لَا تُحْصُوهَآ", translationEn: "And if you should count the favors of Allah, you could not enumerate them.", translationBn: "আর তোমরা যদি আল্লাহর অনুগ্রহ গণনা করতে চাও, তবে তা গুনে শেষ করতে পারবে না।", surah: 16, ayah: 18, surahNameEn: "An-Nahl", surahNameBn: "সূরা আন-নাহল" } },
      { arabic: "مَآء", transliteration: "mā'", meaningEn: "Water / Rain", meaningBn: "পানি / বৃষ্টি", frequency: "60+", example: { arabic: "وَجَعَلْنَا مِنَ ٱلْمَآءِ كُلَّ شَىْءٍ حَىٍّ", translationEn: "And We made from water every living thing.", translationBn: "এবং আমি পানি হতে প্রতিটি সজীব বস্তুকে সৃষ্টি করেছি।", surah: 21, ayah: 30, surahNameEn: "Al-Anbiya", surahNameBn: "সূরা আল-আম্বিয়া" } }
    ]
  },
  {
    id: "b2-list-5",
    listNumber: 5,
    titleEn: "List FIVE: Deen & Worship",
    titleBn: "৫ম অধ্যায়: দ্বীন ও ইবাদত সংক্রান্ত পরিভাষা",
    descriptionEn: "Key religious and spiritual vocabulary including faith, prayers, zakah, truth, and piety.",
    descriptionBn: "দ্বীন, সালাত, যাকাত, সত্য-মিথ্যা, তাকওয়া ও ইবাদত সংক্রান্ত মৌলিক শব্দাবলী।",
    words: [
      { arabic: "دِين", transliteration: "dīn", meaningEn: "Religion / Way of Life / Judgment", meaningBn: "দ্বীন / ধর্ম / প্রতিদান দিবস", frequency: "90+", example: { arabic: "إِنَّ ٱلدِّينَ عِندَ ٱللَّهِ ٱلْإِسْلَٰمُ", translationEn: "Indeed, the religion in the sight of Allah is Islam.", translationBn: "নিশ্চয়ই আল্লাহর নিকট একমাত্র মনোনীত দ্বীন হলো ইসলাম।", surah: 3, ayah: 19, surahNameEn: "Ali 'Imran", surahNameBn: "সূরা আলে ইমরান" } },
      { arabic: "أَمْر (أُمُور)", transliteration: "amr (umūr)", meaningEn: "Command / Affair / Matter", meaningBn: "আদেশ / বিষয় / কার্য", frequency: "250+", example: { arabic: "وَإِلَى ٱللَّهِ تُرْجَعُ ٱلْأُمُورُ", translationEn: "And to Allah all matters return.", translationBn: "আর সমস্ত বিষয় আল্লাহর কাছেই প্রত্যাবর্তিত হয়।", surah: 2, ayah: 210, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "صَلَوٰة / صَلَاة", transliteration: "ṣalāh", meaningEn: "Prayer / Supplication", meaningBn: "সালাত / নামায", frequency: "80+", example: { arabic: "وَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَءَاتُوا۟ ٱلزَّكَوٰةَ", translationEn: "And establish prayer and give zakah.", translationBn: "আর তোমরা সালাত কায়েম করো এবং যাকাত প্রদান করো।", surah: 2, ayah: 43, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "زَكَوٰة", transliteration: "zakāh", meaningEn: "Purifying Charity / Zakah", meaningBn: "যাকাত", frequency: "32", example: { arabic: "وَٱلَّذِينَ هُمْ لِلزَّكَوٰةِ فَٰعِلُونَ", translationEn: "And who are observant of zakah.", translationBn: "এবং যারা যাকাত আদায়ে সদা সক্রিয়।", surah: 23, ayah: 4, surahNameEn: "Al-Mu'minun", surahNameBn: "সূরা আল-মু'মিনূন" } },
      { arabic: "حَقّ / بَٰطِل", transliteration: "ḥaqq / bāṭil", meaningEn: "Truth / Falsehood", meaningBn: "সত্য ও মিথ্যা", frequency: "280+", example: { arabic: "وَقُلْ جَآءَ ٱلْحَقُّ وَزَهَقَ ٱلْبَٰطِلُ ۚ إِنَّ ٱلْبَٰطِلَ كَانَ زَهُوقًۭا", translationEn: "And say, 'Truth has come, and falsehood has departed.'", translationBn: "আর বলুন, 'সত্য এসেছে এবং মিথ্যা বিলুপ্ত হয়েছে; নিশ্চয়ই মিথ্যা তো বিলুপ্ত হওয়ারই যোগ্য।'", surah: 17, ayah: 81, surahNameEn: "Al-Isra", surahNameBn: "সূরা বনী ইসরাঈল" } },
      { arabic: "حَمْد", transliteration: "ḥamd", meaningEn: "Praise / Gratitude", meaningBn: "প্রশংসা ও কৃতজ্ঞতা", frequency: "43", example: { arabic: "فَسَبِّحْ بِحَمْدِ رَبِّكَ", translationEn: "So exalt with praise of your Lord.", translationBn: "অতএব আপনার প্রতিপালকের সপ্রশংস পবিত্রতা ঘোষণা করুন।", surah: 110, ayah: 3, surahNameEn: "An-Nasr", surahNameBn: "সূরা আন-নাসর" } },
      { arabic: "حِكْمَة", transliteration: "ḥikmah", meaningEn: "Wisdom", meaningBn: "প্রজ্ঞা / গভীর তত্ত্বজ্ঞান", frequency: "20", example: { arabic: "يُؤْتِى ٱلْحِكْمَةَ مَن يَشَآءُ", translationEn: "He gives wisdom to whom He wills.", translationBn: "তিনি যাকে ইচ্ছা প্রজ্ঞা দান করেন।", surah: 2, ayah: 269, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "تَقْوَىٰ", transliteration: "taqwā", meaningEn: "Piety / God-consciousness", meaningBn: "তাকওয়া / খোদাভীতি ও সতর্কতা", frequency: "17", example: { arabic: "وَتَزَوَّدُوا۟ فَإِنَّ خَيْرَ ٱلزَّادِ ٱلتَّقْوَىٰ", translationEn: "And take provisions, but indeed, the best provision is piety.", translationBn: "এবং তোমরা পাথেয় গ্রহণ করো; আর নিশ্চয়ই সর্বোত্তম পাথেয় হলো তাকওয়া।", surah: 2, ayah: 197, surahNameEn: "Al-Baqarah", surahNameBn: "সূরা আল-বাকারা" } },
      { arabic: "نُور", transliteration: "nūr", meaningEn: "Light", meaningBn: "নূর / আলোকবর্তিকা", frequency: "40+", example: { arabic: "ٱللَّهُ نُورُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ", translationEn: "Allah is the Light of the heavens and the earth.", translationBn: "আল্লাহ আকাশমন্ডলী ও পৃথিবীর জ্যোতি।", surah: 24, ayah: 35, surahNameEn: "An-Nur", surahNameBn: "সূরা আন-নূর" } },
      { arabic: "سَلَٰم", transliteration: "salām", meaningEn: "Peace", meaningBn: "শান্তি ও নিরাপত্তা", frequency: "40+", example: { arabic: "سَلَٰمٌ قَوْلًۭا مِّن رَّبٍّۢ رَّحِيمٍۢ", translationEn: "Peace, a word from a Merciful Lord.", translationBn: "পরম দয়ালু প্রতিপালকের পক্ষ হতে তাদের বলা হবে: 'সালাম' (শান্তি)।", surah: 36, ayah: 58, surahNameEn: "Ya-Sin", surahNameBn: "সূরা ইয়াসীন" } }
    ]
  }
];

// Interactive Quiz Questions for Self-Testing
export const UNDERSTAND_QURAN_QUIZZES = {
  "book-1": [
    {
      questionEn: "What does the word 'هَٰذَا' (hādhā) mean in the Holy Quran?",
      questionBn: "পবিত্র কুরআনে 'هَٰذَا' (হাযা) শব্দের অর্থ কী?",
      optionsEn: ["That", "This (Masculine)", "These", "Those"],
      optionsBn: ["ঐটি", "এই / ইহা (পুংলিঙ্গ)", "এরা সবাই", "তারা"],
      correctIndex: 1
    },
    {
      questionEn: "What is the difference between 'لَمْ' (lam) and 'لَنْ' (lan)?",
      questionBn: "'لَمْ' (লাম) এবং 'لَنْ' (লান)-এর মধ্যে মূল পার্থক্য কী?",
      optionsEn: ["Lam negates past; Lan negates future", "Lam means 'Yes'; Lan means 'No'", "Both mean exactly the same", "Lan negates past; Lam negates future"],
      optionsBn: ["লাম অতীতের না-বোধক; লান ভবিষ্যতের না-বোধক", "লাম অর্থ হ্যাঁ; লান অর্থ না", "উভয়ের অর্থ হুবহু একই", "লান অতীতের না-বোধক; লাম ভবিষ্যতের"],
      correctIndex: 0
    },
    {
      questionEn: "Roughly what percentage of the Quran vocabulary consists of the 77 words in Book 1?",
      questionBn: "প্রথম খণ্ডের ৭৭টি শব্দ কুরআনের মোট শব্দভাণ্ডারের প্রায় শতকরা কত ভাগ?",
      optionsEn: ["10%", "25%", "50%", "85%"],
      optionsBn: ["১০%", "২৫%", "৫০%", "৮৫%"],
      correctIndex: 2
    },
    {
      questionEn: "What does 'عَمَّا' ('ammā) stand for when combined?",
      questionBn: "'عَمَّا' (আম্মা) শব্দটি মূলত কোন্ দুটি শব্দের সন্ধি?",
      optionsEn: ["'An + Mā (About what / Concerning which)", "'Alā + Mā", "Min + Mā", "Fī + Mā"],
      optionsBn: ["'আন + মা (যা সম্পর্কে / যে বিষয়ে)", "'আলা + মা", "মিন + মা", "ফী + মা"],
      correctIndex: 0
    }
  ],
  "book-2": [
    {
      questionEn: "What does 'ٱلرَّحْمَٰن' specifically signify compared to 'ٱلرَّحِيم'?",
      questionBn: "'ٱلرَّحْمَٰن' এবং 'ٱلرَّحِيم'-এর মধ্যে অর্থগত সূক্ষ্মতা কী?",
      optionsEn: ["The Entirely Merciful (All creation) vs Especially Merciful (Believers)", "King vs Creator", "First vs Last", "Knowing vs Seeing"],
      optionsBn: ["পরম করুণাময় (সমগ্র সৃষ্টি) বনাম বিশেষ দয়ালু (মুমিনদের প্রতি)", "বাদশাহ বনাম স্রষ্টা", "প্রথম বনাম শেষ", "সর্বজ্ঞাতা বনাম সর্বদ্রষ্টা"],
      correctIndex: 0
    },
    {
      questionEn: "How many nouns and adjectives are taught in Book 2 to take comprehension to 65%?",
      questionBn: "কুরআন বোঝার ক্ষমতা ৬৫%-এ নিতে দ্বিতীয় খণ্ডে মোট কতটি বিশেষ্য ও বিশেষণ শেখানো হয়েছে?",
      optionsEn: ["50 words", "100 words", "195 words", "500 words"],
      optionsBn: ["৫০টি শব্দ", "১০০টি শব্দ", "১৯৫টি শব্দ", "৫০০টি শব্দ"],
      correctIndex: 2
    }
  ]
};
