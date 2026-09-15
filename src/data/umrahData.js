// ============================================
// EQRA — Evidence-Based Umrah Data Repository
// Grounded strictly in Primary Islamic Sources & Official Saudi Portals
// Level 1: Quran & Sahih Hadith | Level 2: Saudi Ministry of Hajj & Umrah / Nusuk
// Level 3: Recognized Classical & Contemporary Fiqh
// ============================================

export const UMRAH_PORTAL_METADATA = {
  version: "1.0.0",
  lastVerified: "September 2026",
  reviewStatus: "SOURCE_VERIFIED",
  officialPortals: [
    {
      nameBn: "সৌদি হজ ও উমরাহ মন্ত্রণালয়",
      nameEn: "Saudi Ministry of Hajj and Umrah",
      url: "https://www.haj.gov.sa/",
      authority: "Government of Saudi Arabia"
    },
    {
      nameBn: "নুসূক (Nusuk) অফিশিয়াল প্ল্যাটফর্ম",
      nameEn: "Nusuk Official Platform",
      url: "https://www.nusuk.sa/",
      authority: "Official Pilgrimage Management System"
    },
    {
      nameBn: "সৌদি স্বাস্থ্য মন্ত্রণালয় (MoH)",
      nameEn: "Saudi Ministry of Health",
      url: "https://www.moh.gov.sa/",
      authority: "Health & Vaccine Regulations"
    }
  ]
};

// 8 Chronological Steps of Umrah Journey
export const UMRAH_JOURNEY_STEPS = [
  {
    id: 1,
    stepKey: "preparation",
    titleBn: "১. নিয়ত ও প্রস্তুতি",
    titleEn: "1. Niyyah & Preparation",
    descBn: "মানসিক, শারীরিক ও আর্থিক প্রস্তুতি গ্রহণ, ঋণ পরিশোধ এবং খাঁটি তাওবাহ।",
    descEn: "Mental, physical, and financial readiness, settling debts, and sincere repentance.",
    slug: "preparation",
    badge: "পূর্বপ্রস্তুতি / Pre-departure",
    icon: "preparation",
    estimatedTimeBn: "যাত্রার পূর্বে",
    estimatedTimeEn: "Before Departure"
  },
  {
    id: 2,
    stepKey: "ihram",
    titleBn: "২. ইহরাম ও মীক্বাত",
    titleEn: "2. Ihram & Miqat",
    descBn: "মীক্বাত অতিক্রমের পূর্বে ইহরামের পোশাক পরিধান ও উমরাহর নিয়ত উচ্চারণ।",
    descEn: "Wearing Ihram garments and making vocal intention before crossing the Miqat.",
    slug: "ihram",
    badge: "ফরজ / Fard (Rukn)",
    icon: "ihram",
    estimatedTimeBn: "মীক্বাত স্থানে",
    estimatedTimeEn: "At Miqat Location"
  },
  {
    id: 3,
    stepKey: "talbiyah",
    titleBn: "৩. তালবিয়াহ পাঠ ও মক্কা যাত্রা",
    titleEn: "3. Reciting Talbiyah & Journey to Makkah",
    descBn: "‘লাব্বাইকা আল্লাহুম্মা লাব্বাইক’ ধ্বনিতে মক্কার পথে গমন।",
    descEn: "Reciting 'Labbayk Allahumma Labbayk' continuously en route to Makkah.",
    slug: "duas",
    badge: "সুন্নত / Sunnah",
    icon: "talbiyah",
    estimatedTimeBn: "তাওয়াফ শুরুর পূর্ব পর্যন্ত",
    estimatedTimeEn: "Until starting Tawaf"
  },
  {
    id: 4,
    stepKey: "entering-haram",
    titleBn: "৪. মসজিদে হারামে প্রবেশ",
    titleEn: "4. Entering Masjid al-Haram",
    descBn: "ডান পা দিয়ে মসজিদে হারামে প্রবেশ ও বিনম্রচিত্তে কাবা দর্শন।",
    descEn: "Entering with the right foot, reciting entering supplication, and beholding the Kaaba with reverence.",
    slug: "guide",
    badge: "মুস্তাহাব / Mustahabb",
    icon: "haram",
    estimatedTimeBn: "হারাম শরীফে আগমন",
    estimatedTimeEn: "Arrival at Haram"
  },
  {
    id: 5,
    stepKey: "tawaf",
    titleBn: "৫. তাওয়াফ (৭ চক্কর)",
    titleEn: "5. Tawaf (7 Circuits)",
    descBn: "হাজরে আসওয়াদ থেকে শুরু করে ঘড়ির কাঁটার বিপরীতে কাবা শরীফকে ৭ বার প্রদক্ষিণ।",
    descEn: "Circumambulating the Holy Kaaba 7 times counter-clockwise, starting from Hajar al-Aswad.",
    slug: "tawaf",
    badge: "ফরজ / Fard (Rukn)",
    icon: "tawaf",
    estimatedTimeBn: "৪০-৭০ মিনিট",
    estimatedTimeEn: "40-70 minutes"
  },
  {
    id: 6,
    stepKey: "maqam-zamzam",
    titleBn: "৬. মাক্বামে ইবরাহীমে সালাত ও যমযম পান",
    titleEn: "6. Prayer at Maqam Ibrahim & Zamzam",
    descBn: "তাওয়াফ শেষে মাক্বামে ইবরাহীমের পেছনে ২ রাকাত সালাত আদায় এবং তৃপ্তি সহকারে যমযমের পানি পান।",
    descEn: "Praying 2 Rak'ahs behind Maqam Ibrahim followed by drinking Zamzam water.",
    slug: "tawaf",
    badge: "ওয়াজিব ও মুস্তাহাব",
    icon: "zamzam",
    estimatedTimeBn: "১০-১৫ মিনিট",
    estimatedTimeEn: "10-15 minutes"
  },
  {
    id: 7,
    stepKey: "sai",
    titleBn: "৭. সাফা ও মারওয়ায় সা’ঈ (৭ চক্কর)",
    titleEn: "7. Sa'i between Safa & Marwah (7 Trips)",
    descBn: "সাফা পাহাড় থেকে শুরু করে মারওয়া পাহাড়ে গিয়ে শেষ — মোট ৭ বার প্রদক্ষিণ।",
    descEn: "Walking 7 times between Safa and Marwah, starting at Safa and ending at Marwah.",
    slug: "sai",
    badge: "ওয়াজিব / Wajib",
    icon: "sai",
    estimatedTimeBn: "৪৫-৭৫ মিনিট",
    estimatedTimeEn: "45-75 minutes"
  },
  {
    id: 8,
    stepKey: "halq-taqsir",
    titleBn: "৮. হলক্ব বা ক্বসর (ইহরাম সমাপ্তি)",
    titleEn: "8. Halq or Taqsir (Completion of Umrah)",
    descBn: "পুরুষদের জন্য মাথা মুণ্ডন বা চুল ছোট করা; নারীদের জন্য আঙুলের এক কর পরিমাণ চুল কাটা। এর মাধ্যমে উমরাহ সমাপ্ত।",
    descEn: "Shaving (Halq) or trimming (Taqsir) hair for men; cutting a fingertip length for women. Concludes Umrah.",
    slug: "halq-taqsir",
    badge: "ওয়াজিব / Wajib",
    icon: "halq",
    estimatedTimeBn: "১০-২০ মিনিট",
    estimatedTimeEn: "10-20 minutes"
  }
];

// Interactive Checklist Data with localStorage persistence
export const UMRAH_CHECKLIST_DATA = [
  {
    categoryKey: "documents",
    titleBn: "১. নথিপত্র ও সরকারি অনুমোদন",
    titleEn: "1. Documents & Official Permits",
    icon: "passport",
    items: [
      {
        id: "doc_1",
        labelBn: "ন্যূনতম ৬ মাসের মেয়াদযুক্ত মূল পাসপোর্ট",
        labelEn: "Original passport with at least 6 months validity",
        mandatory: true
      },
      {
        id: "doc_2",
        labelBn: "সৌদি অনুমোদিত উমরাহ ভিসা অথবা ট্যুরিস্ট ই-ভিসা কপি",
        labelEn: "Approved Saudi Umrah Visa or Tourist eVisa printout",
        mandatory: true
      },
      {
        id: "doc_3",
        labelBn: "নুসূক (Nusuk) অ্যাপ ইনস্টল ও উমরাহ পারমিট স্লট বুকিং",
        labelEn: "Nusuk app installed with confirmed Umrah permit slot",
        mandatory: true
      },
      {
        id: "doc_4",
        labelBn: "মদিনার রওজা শরীফ (রওজাতুল জান্নাহ) জিয়ারতের পারমিট",
        labelEn: "Nusuk permit for Rawdah Sharif visit in Madinah",
        mandatory: false
      },
      {
        id: "doc_5",
        labelBn: "উভয়মুখী নিশ্চিত বিমান টিকিট (Return Flight Tickets)",
        labelEn: "Confirmed return flight tickets",
        mandatory: true
      },
      {
        id: "doc_6",
        labelBn: "মক্কা ও মদিনার হোটেল বুকিং ভাউচার",
        labelEn: "Hotel accommodation booking vouchers in Makkah & Madinah",
        mandatory: true
      },
      {
        id: "doc_7",
        labelBn: "জরুরি চিকিৎসা প্রেসক্রিপশন ও চিকিৎসকের প্রত্যয়নপত্র",
        labelEn: "Doctor's prescription & medical certificate for chronic medications",
        mandatory: false
      }
    ]
  },
  {
    categoryKey: "ihram_luggage",
    titleBn: "২. ইহরাম ও প্রয়োজনীয় সরঞ্জাম",
    titleEn: "2. Ihram & Travel Gear",
    icon: "luggage",
    items: [
      {
        id: "gear_1",
        labelBn: "পুরুষদের জন্য ২ সেট সেলাইবিহীন সুতি ইহরামের কাপড় (৪ টুকরা)",
        labelEn: "2 sets of unstitched white Ihram garments for men (4 sheets)",
        mandatory: true
      },
      {
        id: "gear_2",
        labelBn: "ইহরামের বেল্ট / মানিব্যাগ (টাকা, পাসপোর্ট ও কার্ড বহনের জন্য)",
        labelEn: "Secure Ihram belt or waist pouch for money and documents",
        mandatory: true
      },
      {
        id: "gear_3",
        labelBn: "সুগন্ধিমুক্ত (Unscented) সাবান, শ্যাম্পু ও পেট্রোলিয়াম জেলি",
        labelEn: "Unscented soap, fragrance-free shampoo, and petroleum jelly (for chafing)",
        mandatory: true
      },
      {
        id: "gear_4",
        labelBn: "পুরুষদের জন্য গোড়ালি ও পাতার ওপরের অংশ উন্মুক্ত থাকে এমন জুতো/স্যান্ডেল",
        labelEn: "Comfortable sandals that leave the ankles and upper foot bone exposed",
        mandatory: true
      },
      {
        id: "gear_5",
        labelBn: "হালকা জুতার ব্যাগ (মসজিদে হারামে জুতো নিজের সাথে বহন করার জন্য)",
        labelEn: "Shoe bag / drawstring pouch for carrying footwear inside the Haram",
        mandatory: true
      },
      {
        id: "gear_6",
        labelBn: "ছোট ভাঁজযোগ্য ছাতা ও সানগ্লাস (তীব্র রোদে চলাচলের জন্য)",
        labelEn: "Compact sun umbrella & sunglasses for midday heat protection",
        mandatory: false
      },
      {
        id: "gear_7",
        labelBn: "হালকা ভ্রমণ জায়নামাজ ও ছোট তাসবীহ বা ডিজিটাল কাউন্টার",
        labelEn: "Lightweight travel prayer mat & small tasbih / tally counter",
        mandatory: false
      }
    ]
  },
  {
    categoryKey: "spiritual",
    titleBn: "৩. ধর্মীয় ও আত্মিক প্রস্তুতি",
    titleEn: "3. Religious & Spiritual Readiness",
    icon: "quran",
    items: [
      {
        id: "spi_1",
        labelBn: "তালবিয়াহ সহীহভাবে মুখস্থ করা ও অর্থ হৃদয়ঙ্গম করা",
        labelEn: "Memorizing the Talbiyah with correct pronunciation and meaning",
        mandatory: true
      },
      {
        id: "spi_2",
        labelBn: "তাওয়াফ ও সাঈর সহীহ সুন্নাহ পদ্ধতি ও নিয়মাবলি আয়ত্ত করা",
        labelEn: "Learning the authentic Sunnah method of Tawaf and Sa'i",
        mandatory: true
      },
      {
        id: "spi_3",
        labelBn: "ইহরামের নিষিদ্ধ কাজ ও নিষেধাজ্ঞা ভঙ্গের বিধান জানা",
        labelEn: "Understanding Ihram prohibitions and penalty (Fidyah) rules",
        mandatory: true
      },
      {
        id: "spi_4",
        labelBn: "হাজরে আসওয়াদ, রুকনে ইয়ামানী ও সাফা-মারওয়ার সুন্নাহ দোয়াগুলো মুখস্থ করা",
        labelEn: "Memorizing authentic Sunnah supplications for Tawaf and Sa'i",
        mandatory: true
      },
      {
        id: "spi_5",
        labelBn: "মানুষের পাওনা ও ঋণ পরিশোধ করা বা উত্তরাধিকারীদের অবহিত করা",
        labelEn: "Settling personal debts, returning trusts, and reconciling with people",
        mandatory: true
      },
      {
        id: "spi_6",
        labelBn: "খাঁটি নিয়ত (ইখলাস) ও ইস্তিগফারের মাধ্যমে আত্মা পরিশুদ্ধ করা",
        labelEn: "Purifying intention exclusively for Allah (Ikhlas) with sincere Tawbah",
        mandatory: true
      }
    ]
  },
  {
    categoryKey: "health",
    titleBn: "৪. স্বাস্থ্য, টিকা ও নিরাপত্তা",
    titleEn: "4. Health, Vaccinations & Safety",
    icon: "health",
    items: [
      {
        id: "hea_1",
        labelBn: "সৌদি স্বাস্থ্য মন্ত্রণালয় নির্দেশিত মেনিনজাইটিস (Meningococcal ACWY) টিকা গ্রহণ",
        labelEn: "Meningococcal ACWY vaccination (taken at least 10 days before travel)",
        mandatory: true
      },
      {
        id: "hea_2",
        labelBn: "মৌসুমি ইনফ্লুয়েঞ্জা ও করোনা ভ্যাকসিন সার্টিফিকেট (প্রযোজ্য ক্ষেত্রে)",
        labelEn: "Seasonal influenza & updated COVID-19 vaccine records where advised",
        mandatory: false
      },
      {
        id: "hea_3",
        labelBn: "নিয়মিত সেবনের প্রয়োজনীয় ওষুধের পর্যাপ্ত স্টক ও প্রেসক্রিপশন",
        labelEn: "Adequate supply of personal prescription medicines for the entire stay",
        mandatory: true
      },
      {
        id: "hea_4",
        labelBn: "প্রাথমিক চিকিৎসা কিট (প্যারাসিটামল, ওরাল স্যালাইন, ব্যান্ডেজ, অ্যান্টিসেপ্টিক)",
        labelEn: "Basic first-aid kit (pain relief, ORS rehydration salts, bandages)",
        mandatory: false
      },
      {
        id: "hea_5",
        labelBn: "সৌদি ইমার্জেন্সি নম্বরসমূহ ফোনে সেভ রাখা (পুলিশ ৯১১, অ্যাম্বুলেন্স ৯৯৭, স্বাস্থ্য ৯৩৭)",
        labelEn: "Saving Saudi emergency hotlines in phone (Police 911, Ambulance 997, Health 937)",
        mandatory: true
      }
    ]
  }
];

// Authenticated Umrah Supplications (Only Sahih/Hasan with exact citations)
export const UMRAH_DUAS_DATA = {
  authenticated: [
    {
      id: "dua_talbiyah",
      titleBn: "তালবিয়াহ (উমরাহ ও হজের মূল স্লোগান)",
      titleEn: "The Talbiyah",
      timingBn: "ইহরাম বাঁধার পর থেকে তাওয়াফ শুরুর পূর্ব পর্যন্ত নিয়মিত পাঠ করতে হয়।",
      timingEn: "Recited continuously after entering Ihram until commencing the Tawaf.",
      arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ",
      transliteration: "Labbayk Allahumma labbayk, labbayka laa shareeka laka labbayk. Innal-hamda wan-ni'mata laka wal-mulk, laa shareeka lak.",
      meaningBn: "আমি হাজির হে আল্লাহ! আমি হাজির! আপনার কোনো শরিক নেই, আমি হাজির! নিশ্চয়ই সমস্ত প্রশংসা, নিয়ামত এবং রাজত্ব আপনারই; আপনার কোনো শরিক নেই।",
      meaningEn: "Here I am at Your service, O Allah, here I am. Here I am at Your service, You have no partner, here I am. Truly all praise, blessing, and dominion belong to You; You have no partner.",
      source: "সহীহ বুখারী: ১৫৪৯, সহীহ মুসলিম: ১১৮৪",
      sourceEn: "Sahih al-Bukhari: 1549, Sahih Muslim: 1184",
      audio: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3"
    },
    {
      id: "dua_ihram_intention",
      titleBn: "উমরাহর নিয়ত উচ্চারণ",
      titleEn: "Vocal Intention for Umrah",
      timingBn: "মীক্বাত বা মীক্বাতের সমান্তরালে পৌঁছার পর ইহরামের নিয়তের সময়।",
      timingEn: "Said at the Miqat when assuming the state of Ihram.",
      arabic: "لَبَّيْكَ عُمْرَةً  |  اللَّهُمَّ لَبَّيْكَ عُمْرَةً",
      transliteration: "Labbayk 'Umrah  /  Allahumma labbayk 'Umrah",
      meaningBn: "হে আল্লাহ! আমি উমরাহর উদ্দেশ্যে আপনার দরবারে হাজির।",
      meaningEn: "Here I am O Allah, intending to perform Umrah.",
      source: "সহীহ মুসলিম: ১২৫১, সুনান আন-নাসায়ী: ২৯৫৮",
      sourceEn: "Sahih Muslim: 1251, Sunan an-Nasa'i: 2958"
    },
    {
      id: "dua_entering_masjid",
      titleBn: "মসজিদে হারামে প্রবেশের দোয়া",
      titleEn: "Dua for Entering Masjid al-Haram",
      timingBn: "হারাম শরীফে ডান পা দিয়ে প্রবেশের সময়।",
      timingEn: "Recited when stepping through the mosque gates with the right foot.",
      arabic: "بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
      transliteration: "Bismillahi was-salatu was-salamu 'ala Rasulillah, Allahummaftah li abwaba rahmatik.",
      meaningBn: "আল্লাহর নামে শুরু করছি, এবং আল্লাহর রাসুলের ওপর দরূদ ও সালাম বর্ষিত হোক। হে আল্লাহ! আমার জন্য আপনার রহমতের দরজাসমূহ উন্মুক্ত করে দিন।",
      meaningEn: "In the name of Allah, and blessings and peace be upon the Messenger of Allah. O Allah, open for me the doors of Your mercy.",
      source: "সহীহ মুসলিম: ৭১৩, সুনান আবু দাউদ: ৪৬৫",
      sourceEn: "Sahih Muslim: 713, Sunan Abi Dawud: 465"
    },
    {
      id: "dua_hajar_aswad",
      titleBn: "হাজরে আসওয়াদ স্পর্শ বা ইশারা করার তাকবীর",
      titleEn: "Takbir at Hajar al-Aswad",
      timingBn: "তাওয়াফের প্রতিটি চক্কর শুরুর সময় হাজরে আসওয়াদের মুখোমুখি হয়ে।",
      timingEn: "Recited at the start of each of the 7 Tawaf circuits when parallel to the Black Stone.",
      arabic: "بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ  |  اللَّهُ أَكْبَرُ",
      transliteration: "Bismillahi wallahu Akbar  /  Allahu Akbar",
      meaningBn: "আল্লাহর নামে শুরু করছি, আল্লাহ সর্বশ্রেষ্ঠ।",
      meaningEn: "In the name of Allah, and Allah is the Greatest.",
      source: "সহীহ বুখারী: ১৬১৩, সহীহ মুসলিম: ১২৭৭",
      sourceEn: "Sahih al-Bukhari: 1613, Sahih Muslim: 1277"
    },
    {
      id: "dua_yamani_to_hajar",
      titleBn: "রুকনে ইয়ামানী ও হাজরে আসওয়াদের মধ্যবর্তী দোয়া",
      titleEn: "Dua between Rukn al-Yamani & Hajar al-Aswad",
      timingBn: "তাওয়াফের প্রতিটি চক্করে রুকনে ইয়ামানী অতিক্রম করার পর থেকে হাজরে আসওয়াদ পর্যন্ত।",
      timingEn: "Recited during every Tawaf circuit between the Yemeni Corner and the Black Stone.",
      arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
      transliteration: "Rabbana aatina fid-dunya hasanatan wa fil-aakhirati hasanatan wa qina 'adhaban-nar.",
      meaningBn: "হে আমাদের প্রতিপালক! আমাদের দুনিয়াতে কল্যাণ দিন এবং আখেরাতেও কল্যাণ দিন, আর আমাদের জাহান্নামের আগুন থেকে রক্ষা করুন।",
      meaningEn: "Our Lord, give us in this world that which is good and in the Hereafter that which is good and protect us from the punishment of the Fire.",
      source: "সূরা আল-বাকারা ২:২০১, সুনান আবু দাউদ: ১৮৯২ (হাসান সূত্রে বর্ণিত)",
      sourceEn: "Surah Al-Baqarah 2:201, Sunan Abi Dawud: 1892 (Hasan)"
    },
    {
      id: "dua_maqam_ibrahim",
      titleBn: "মাক্বামে ইবরাহীমের কাছে তিলাওয়াত",
      titleEn: "Recitation at Maqam Ibrahim",
      timingBn: "তাওয়াফের ৭ চক্কর শেষ করে মাক্বামে ইবরাহীমের দিকে অগ্রসর হওয়ার সময়।",
      timingEn: "Recited when approaching Maqam Ibrahim after completing the 7 circuits.",
      arabic: "وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلًّى",
      transliteration: "Wattakhidhu min Maqami Ibrahima musalla.",
      meaningBn: "এবং তোমরা মাক্বামে ইবরাহীমকে সালাতের স্থান হিসেবে গ্রহণ করো।",
      meaningEn: "And take you the Station of Ibrahim as a place of prayer.",
      source: "সূরা আল-বাকারা ২:১২৫, সহীহ মুসলিম: ১২১৮",
      sourceEn: "Surah Al-Baqarah 2:125, Sahih Muslim: 1218"
    },
    {
      id: "dua_safa_approach",
      titleBn: "সাফা পাহাড়ে ওঠার সময় কুরআনের আয়াত তিলাওয়াত",
      titleEn: "Recitation when Approaching Safa for Sa'i",
      timingBn: "সা’ঈ শুরু করার পূর্বে সাফা পাহাড়ের নিকটবর্তী হওয়ার সময় (শুধু প্রথমবার)।",
      timingEn: "Recited only once when first approaching Mount Safa before starting Sa'i.",
      arabic: "إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ ۖ أَبْدَأُ بِمَا بَدَأَ اللَّهُ بِهِ",
      transliteration: "Innas-Safa wal-Marwata min sha'a'irillah. Nabda'u bima bada'allahu bih.",
      meaningBn: "নিশ্চয়ই সাফা ও মারওয়া আল্লাহর নিদর্শনসমূহের অন্তর্ভুক্ত। আল্লাহ যা দিয়ে শুরু করেছেন, আমরাও তা দিয়েই শুরু করছি।",
      meaningEn: "Indeed, as-Safa and al-Marwah are among the symbols of Allah. We begin with that with which Allah began.",
      source: "সূরা আল-বাকারা ২:১৫৮, সহীহ মুসলিম: ১২১৮",
      sourceEn: "Surah Al-Baqarah 2:158, Sahih Muslim: 1218"
    },
    {
      id: "dua_safa_marwah_dhikr",
      titleBn: "সাফা ও মারওয়ায় দাঁড়িয়ে কাবার দিকে ফিরে যিকির ও দোয়া",
      titleEn: "Supplication upon Safa & Marwah facing the Kaaba",
      timingBn: "সাফা ও মারওয়া পাহাড়ে উঠে কাবার দিকে হাত তুলে তিনবার এই যিকির ও মাঝে নিজের মতো দোয়া করা।",
      timingEn: "Recited upon Mount Safa and Mount Marwah facing the Kaaba (3 times with personal duas in between).",
      arabic: "اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الأَحْزَابَ وَحْدَهُ",
      transliteration: "Allahu Akbar, Allahu Akbar, Allahu Akbar. Laa ilaha illallahu wahdahu la shareeka lah, lahul-mulku wa lahul-hamd, wa Huwa 'ala kulli shay'in Qadeer. Laa ilaha illallahu wahdah, anjaza wa'dah, wa nasara 'abdah, wa hazamal-ahzaba wahdah.",
      meaningBn: "আল্লাহ সর্বশ্রেষ্ঠ, আল্লাহ সর্বশ্রেষ্ঠ, আল্লাহ সর্বশ্রেষ্ঠ। আল্লাহ ব্যতীত কোনো সত্য ইলাহ নেই, তিনি এক, তাঁর কোনো শরিক নেই। রাজত্ব একমাত্র তাঁরই, সমস্ত প্রশংসাও তাঁরই এবং তিনি সবকিছুর ওপর ক্ষমতাবান। কোনো ইলাহ নেই আল্লাহ ছাড়া, তিনি এক। তিনি তাঁর প্রতিশ্রুতি পূর্ণ করেছেন, তাঁর বান্দাকে সাহায্য করেছেন এবং শত্রু জোটকে একাই পরাভূত করেছেন।",
      meaningEn: "Allah is the Greatest, Allah is the Greatest, Allah is the Greatest. There is no deity except Allah alone, with no partner. His is the dominion and His is the praise, and He is over all things omnipotent. There is no deity except Allah alone. He fulfilled His promise, granted victory to His servant, and defeated the allied factions alone.",
      source: "সহীহ মুসলিম: ১২১৮ (জাবির ইবনে আব্দুল্লাহ রা. বর্ণিত দীর্ঘ হজ হাদিস)",
      sourceEn: "Sahih Muslim: 1218 (Narrated by Jabir ibn Abdullah RA)"
    },
    {
      id: "dua_zamzam",
      titleBn: "যমযম পানি পান করার সময়ের দোয়া",
      titleEn: "Supplication when Drinking Zamzam Water",
      timingBn: "যমযমের পানি পান করার শুরুতে বিসমিল্লাহ ও পান শেষে আলহামদুলিল্লাহ পাঠের সাথে।",
      timingEn: "Supplicated with sincere intention when drinking Zamzam water.",
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا وَاسِعًا، وَشِفَاءً مِنْ كُلِّ دَاءٍ",
      transliteration: "Allahumma inni as'aluka 'ilman nafi'an, wa rizqan wasi'an, wa shifa'an min kulli da'in.",
      meaningBn: "হে আল্লাহ! আমি আপনার নিকট উপকারী জ্ঞান, প্রশস্ত রিজিক এবং সমস্ত রোগ থেকে আরোগ্য ও শেফা প্রার্থনা করছি।",
      meaningEn: "O Allah, I ask You for beneficial knowledge, abundant sustenance, and a cure from every illness.",
      source: "মুস্তাদরাক আল-হাকিম: ১৭৩৯, সুনান দারা কুতনী: ২৭৩৮ (ইবনে আব্বাস রা.-এর আমল)",
      sourceEn: "Mustadrak al-Hakim: 1739, Sunan al-Daraqutni: 2738 (Practice of Ibn Abbas RA)"
    }
  ],
  generalDuaAdviceBn: "তাওয়াফের সময় বা সাঈর সময় রুকনে ইয়ামানী ও হাজরে আসওয়াদের মধ্যবর্তী নির্ধারিত দোয়া ব্যতীত বাকি পুরো সময়ে যেকোনো কুরআন-হাদিসের দোয়া, ইস্তিগফার, দরূদ এবং নিজের বা পরিবারের জন্য বাংলা বা যেকোনো ভাষায় নিজের মনের আকুতি নিয়ে দোয়া করা সম্পূর্ণ বৈধ ও প্রশংসনীয়।",
  generalDuaAdviceEn: "Except for the specific Sunnah supplication between the Yemeni Corner and the Black Stone, during the rest of Tawaf and Sa'i you may make any supplication from the Quran and Sunnah, seek forgiveness (Istighfar), send blessings on the Prophet ﷺ, and pray for yourself and loved ones in your own native language.",
  warningUnverifiedBn: "সতর্কতা: বাজারে প্রচলিত কিছু পুস্তিকায় তাওয়াফের ১ম চক্করের নির্দিষ্ট দোয়া, ২য় চক্করের নির্দিষ্ট দোয়া ইত্যাদি নামে যে বাঁধাধরা দোয়ার তালিকা পাওয়া যায়, তার কোনো ভিত্তি সহীহ সুন্নাহ বা সাহাবিদের আমলে নেই। একে সুন্নাহ মনে করা ভুল।",
  warningUnverifiedEn: "Warning: Booklets assigning specific fabricated supplications to each separate circuit of Tawaf (e.g. '1st round dua', '2nd round dua') have NO basis in the authentic Sunnah or practice of the Companions. Prescribing them as religious rites is unsupported."
};

// 19 Complete Detailed Umrah Subpages
export const UMRAH_PAGES_DATA = {
  "guide": {
    slug: "guide",
    titleBn: "উমরাহর পূর্ণাঙ্গ ধাপে ধাপে গাইড",
    titleEn: "Complete Step-by-Step Umrah Guide",
    readingTime: "১২ মিনিট",
    readingTimeEn: "12 min read",
    categoryBn: "মূল গাইডলাইন",
    categoryEn: "Core Guide",
    summaryBn: "মীক্বাত থেকে শুরু করে ইহরাম, তাওয়াফ, সাঈ এবং মাথা মুণ্ডন পর্যন্ত সহীহ সুন্নাহ মোতাবেক উমরাহ সম্পাদনের প্রামাণ্য সচিত্র ও বাস্তবসম্মত পথনির্দেশিকা।",
    summaryEn: "A step-by-step evidence-based guide to performing Umrah in accordance with authentic Sunnah, from Miqat and Ihram to Tawaf, Sa'i, and Tahallul.",
    quranReferences: [
      {
        surah: 2,
        ayah: 196,
        name: "সূরা আল-বাকারা",
        nameEn: "Surah Al-Baqarah",
        arabic: "وَأَتِمُّوا۟ ٱلْحَجَّ وَٱلْعُمْرَةَ لِلَّهِ",
        translationBn: "আর তোমরা আল্লাহর সন্তুষ্টির উদ্দেশ্যে হজ ও উমরাহ পূর্ণ করো।",
        translationEn: "And complete the Hajj and 'Umrah for Allah.",
        link: "#/bn/quran/2"
      }
    ],
    hadithReferences: [
      {
        collection: "সহীহ বুখারী",
        collectionEn: "Sahih al-Bukhari",
        number: "১৭৭৩",
        arabic: "العُمْرَةُ إِلَى العُمْرَةِ كَفَّارَةٌ لِمَا بَيْنَهُمَا، وَالحَجُّ المَبْرُورُ لَيْسَ لَهُ جَزَاءٌ إِلَّا الجَنَّةُ",
        translationBn: "এক উমরাহ থেকে পরবর্তী উমরাহ—উভয়ের মধ্যবর্তী সময়ের সমস্ত গুনাহর কাফফারা (মোচনকারী); আর মাবরুর (কবুল) হজের প্রতিদান জান্নাত ছাড়া আর কিছুই নয়।",
        translationEn: "One 'Umrah to the next is an expiation for whatever sins occur between them, and an accepted Hajj has no reward other than Paradise."
      }
    ],
    sections: [
      {
        headingBn: "উমরাহর মূল রুকন ও ওয়াজিবসমূহ",
        headingEn: "Pillars (Arkan) and Obligations (Wajibat) of Umrah",
        contentBn: `উমরাহ সম্পাদনের জন্য শরীয়তে নির্ধারিত রুকন ও ওয়াজিব রয়েছে:
1. **রুকন (যা বাদ পড়লে উমরাহ বাতিল হয়):**
   - **ইহরাম:** অন্তরের নিয়ত করা (তালবিয়াহ পাঠ সহ)।
   - **তাওয়াফ:** কাবা ঘরের চারদিকে ৭ চক্কর প্রদক্ষিণ।
   - **সা’ঈ:** সাফা ও মারওয়ার মাঝে ৭ চক্কর সম্পন্ন করা (জমহুর উলামার মতে রুকন, হানাফি মাযহাবে ওয়াজিব)।
2. **ওয়াজিব (যা ছুটে গেলে দম বা কাফফারা দিতে হয়):**
   - নির্ধারিত মীক্বাত অতিক্রম করার পূর্বেই ইহরাম ধারণ করা।
   - চুল ছাঁটা বা মুণ্ডন করা (হলক্ব বা ক্বসর)।`
      },
      {
        headingBn: "বাস্তব পদক্ষেপ: মীক্বাত থেকে বিদায় পর্যন্ত",
        headingEn: "Practical Steps: From Miqat to Completion",
        contentBn: `**ধাপ ১: মীক্বাতে ইহরাম:** নখ কাটা, অবাঞ্ছিত লোম পরিষ্কার, গোসল করা এবং সুগন্ধি শরীরে লাগানো (ইহরামের কাপড়ে নয়)। পুরুষেরা ২টি চাদর পরিধান করবেন এবং নিয়ত উচ্চারণ করবেন: "লাব্বাইকা উমরাহ"।
**ধাপ ২: মক্কার পথে তালবিয়াহ:** যানবাহনে চলতে চলতে উচ্চকণ্ঠে পুরুষেরা এবং অনুচ্চ কণ্ঠে নারীরা তালবিয়াহ পাঠ করতে থাকবেন।
**ধাপ ৩: তাওয়াফ শুরু:** মসজিদে হারামে প্রবেশ করে তাওয়াফের নিয়তে হাজরে আসওয়াদের সোজাসুজি এসে তালবিয়াহ বন্ধ করবেন এবং হাজরে আসওয়াদে ইশারা করে 'বিসমিল্লাহি আল্লাহু আকবার' বলে তাওয়াফ শুরু করবেন।
**ধাপ ৪: সালাত ও যমযম:** ৭ চক্কর শেষে মাক্বামে ইবরাহীমের পেছনে বা হারামের যেকোনো স্থানে ২ রাকাত সালাত আদায় করে মনভরে যমযম পান করবেন।
**ধাপ ৫: সা’ঈ:** সাফা পাহাড় থেকে শুরু করে মারওয়া পাহাড়ে গিয়ে ৭ চক্কর শেষ করবেন।
**ধাপ ৬: হলক্ব বা ক্বসর:** পুরুষেরা মাথা মুণ্ডন করবেন বা পুরো মাথার চুল সমানভাবে ছোট করবেন; নারীরা সমস্ত চুলের আগা থেকে আঙুলের এক কর পরিমাণ কাটবেন। এর মাধ্যমে উমরাহ পূর্ণ হবে এবং ইহরামের যাবতীয় নিষেধাজ্ঞা উঠে যাবে।`
      }
    ],
    officialSources: [
      {
        title: "Saudi Ministry of Hajj and Umrah Guide",
        url: "https://www.haj.gov.sa/",
        verified: "September 2026"
      }
    ]
  },

  "preparation": {
    slug: "preparation",
    titleBn: "উমরাহর পূর্বপ্রস্তুতি: আত্মিক, শারীরিক ও ব্যবহারিক",
    titleEn: "Pre-Umrah Preparation: Spiritual, Physical & Practical",
    readingTime: "৮ মিনিট",
    readingTimeEn: "8 min read",
    categoryBn: "প্রস্তুতি",
    categoryEn: "Preparation",
    summaryBn: "উমরাহ যাত্রার পূর্বে নিয়ত বিশুদ্ধকরণ, ঋণ ও অধিকার নিষ্পত্তি, শারীরিক ফিটনেস অর্জন এবং প্রয়োজনীয় জিনিসপত্রের গোছগাছ নির্দেশিকা।",
    summaryEn: "Comprehensive pre-departure preparation covering purification of intention, financial integrity, physical conditioning, and packing essentials.",
    sections: [
      {
        headingBn: "১. আত্মিক প্রস্তুতি ও তাওবাহ",
        headingEn: "1. Spiritual Readiness & Sincere Tawbah",
        contentBn: `উমরাহ কেবল একটি সফর নয়, এটি আল্লাহর ঘর বায়তুল্লাহর পবিত্র মেহমান হওয়া।
- **ইখলাস বা নিষ্ঠা:** একমাত্র আল্লাহর সন্তুষ্টির নিয়ত করা। সামাজিক সম্মান বা উমরাহ হাজী খেতাব অর্জনের মানসিকতা থেকে অন্তরকে মুক্ত রাখা।
- **হক্বুল ইবাদ বা মানুষের অধিকার:** কারো আর্থিক পাওনা বা ঋণ থাকলে তা পরিশোধ করা, কারো মনে কষ্ট দিয়ে থাকলে ক্ষমা চেয়ে মিটমাট করা।
- **ওসিয়তনামা:** নিজের যেকোনো ঋণ বা আমানতের ব্যাপারে পরিবারকে স্পষ্ট জানিয়ে যাওয়া।`
      },
      {
        headingBn: "২. শারীরিক প্রস্তুতি ও হাঁটার অভ্যাস",
        headingEn: "2. Physical Conditioning & Walking Habit",
        contentBn: `উমরাহ একটি শারীরিক পরিশ্রমসাধ্য ইবাদত। একটি পূর্ণ উমরাহ সম্পন্ন করতে তাওয়াফ ও সাঈ মিলিয়ে গড়ে ৫ থেকে ৮ কিলোমিটার হাঁটতে হয়।
- যাত্রার অন্তত ৩-৪ সপ্তাহ পূর্ব থেকে প্রতিদিন ৩০ থেকে ৪৫ মিনিট হাঁটার অভ্যাস গড়ে তুলুন।
- যাদের ডায়াবেটিস বা উচ্চ রক্তচাপ আছে, তারা চিকিৎসকের পরামর্শ নিয়ে ওষুধের সঠিক ডোজ ও ট্রাভেল প্ল্যান তৈরি করুন।`
      },
      {
        headingBn: "৩. লাগেজ প্যাকিং চেকলিস্ট",
        headingEn: "3. Luggage Packing Checklist",
        contentBn: `অপ্রয়োজনীয় ভারি লাগেজ পরিহার করুন।
- ২ সেট সুতি ইহরাম (পুরুষদের জন্য) এবং নিরাপদ বেল্ট।
- সুগন্ধিমুক্ত সাবান ও ভ্যাসলিন (উরুর ঘর্ষণজনিত ঘা এড়াতে)।
- সহজে খোলা ও পরা যায় এমন জুতো এবং এক জোড়া আরামদায়ক মোজা (মার্বেল পাথরে হাঁটার জন্য)।
- ছোট ঝুলন্ত জুতার থলি এবং পিঠের হালকা ব্যাকপ্যাক।`
      }
    ],
    officialSources: [
      {
        title: "Saudi MoH Travel Health Guidelines",
        url: "https://www.moh.gov.sa/",
        verified: "September 2026"
      }
    ]
  },

  "checklist": {
    slug: "checklist",
    titleBn: "উমরাহ সম্পূর্ণ ইন্টারঅ্যাক্টিভ চেকলিস্ট",
    titleEn: "Interactive Umrah Preparation Checklist",
    readingTime: "৫ মিনিট",
    readingTimeEn: "5 min read",
    categoryBn: "টুলস ও চেকলিস্ট",
    categoryEn: "Tools & Checklist",
    summaryBn: "উমরাহ যাত্রার সকল প্রস্তুতি সম্পন্ন করতে একটি স্বয়ংক্রিয় অফলাইন-সংরক্ষণযোগ্য ইন্টারঅ্যাক্টিভ চেকলিস্ট।",
    summaryEn: "A complete offline-saved interactive checklist to track your documents, luggage, religious learning, and health tasks.",
    sections: [
      {
        headingBn: "চেকলিস্ট ব্যবহারের নিয়ম",
        headingEn: "How to use this checklist",
        contentBn: "আপনার সম্পন্ন হওয়া বিষয়গুলোতে টিকচিহ্ন দিন। ব্রাউজার রিলোড বা বন্ধ করলেও আপনার প্রগ্রেস স্বয়ংক্রিয়ভাবে সংরক্ষিত থাকবে।"
      }
    ],
    officialSources: [
      {
        title: "Nusuk Official Readiness Checklist",
        url: "https://www.nusuk.sa/",
        verified: "September 2026"
      }
    ]
  },

  "visa": {
    slug: "visa",
    titleBn: "সৌদি ভিসা ক্যাটাগরি ও অফিশিয়াল নীতিমালা",
    titleEn: "Saudi Visa Categories & Official Regulations",
    readingTime: "৭ মিনিট",
    readingTimeEn: "7 min read",
    categoryBn: "সরকারি নীতিমালা",
    categoryEn: "Official Regulations",
    summaryBn: "উমরাহ ভিসা, ট্যুরিস্ট ই-ভিসা, ট্রানজিট ভিসা এবং জিসিসি রেসিডেন্ট ভিসার সরকারি নিয়মাবলী, যোগ্যতা ও সতর্কতা।",
    summaryEn: "Official breakdown of Umrah Visa, Tourist eVisa, Stopover/Transit Visa, and GCC resident rules directly from Saudi Ministry portals.",
    sections: [
      {
        headingBn: "ভিসা প্রকারভেদ (সর্বশেষ সরকারি নীতিমালা অনুযায়ী)",
        headingEn: "Saudi Visa Types for Umrah",
        contentBn: `সৌদি হজ ও উমরাহ মন্ত্রণালয়ের বর্তমান নিয়ম অনুযায়ী একাধিক ধরনের বৈধ ভিসায় উমরাহ পালন করা যায়:
1. **উমরাহ ভিসা (Dedicated Umrah Visa):** অনুমোদিত এজেন্সির মাধ্যমে বা নুসূক প্ল্যাটফর্মে ইস্যুকৃত। মেয়াদ সাধারণত ৯০ দিন। মক্কা, মদিনা সহ সৌদি আরবের যেকোনো শহরে চলাচলের অনুমতি থাকে।
2. **ট্যুরিস্ট ই-ভিসা (Tourist eVisa):** নির্দিষ্ট যোগ্য দেশের নাগরিক, ইউএস/ইউকে/শেনজেন ভিসা হোল্ডার এবং জিসিসি রেসিডেন্টদের জন্য তাৎক্ষণিক ইস্যুযোগ্য। এতে হজের মৌসুম ব্যতীত বছরের যেকোনো সময় উমরাহ করা যায়।
3. **স্টপওভার / ট্রানজিট ভিসা (Transit Visa):** সাউদিয়া (Saudia) বা ফ্লাইনাস (Flynas) এয়ারলাইন্সে ট্রানজিট ভ্রমণের সময় বিনামূল্যে বা নামমাত্র ফিতে ৯৬ ঘণ্টার জন্য উমরাহ পালনের সুযোগ।`
      },
      {
        headingBn: "গুরুত্বপূর্ণ আইনি সতর্কতা",
        headingEn: "Important Legal Precautions",
        contentBn: `সৌদি আরবে ভিসার মেয়াদ শেষ হওয়ার পর অতিরিক্ত অবস্থান (Overstay) করা একটি দণ্ডনীয় অপরাধ, যার ফলে ভারী জরিমানা, জেল এবং পরবর্তী সৌদি প্রবেশে নিষেধাজ্ঞা (Deportation/Ban) আরোপিত হতে পারে। সর্বদা আপনার ভিসার অনুমোদিত মেয়াদ খেয়াল রাখুন।`
      }
    ],
    officialSources: [
      {
        title: "Saudi Ministry of Foreign Affairs (MOFA) Visa Portal",
        url: "https://visa.mofa.gov.sa/",
        verified: "September 2026"
      },
      {
        title: "Nusuk Visa Information",
        url: "https://www.nusuk.sa/plan-your-journey/visa",
        verified: "September 2026"
      }
    ]
  },

  "permit": {
    slug: "permit",
    titleBn: "উমরাহ ও রওজা শরিফ পারমিট নির্দেশিকা",
    titleEn: "Umrah & Rawdah Permit Guidelines",
    readingTime: "৬ মিনিট",
    readingTimeEn: "6 min read",
    categoryBn: "সরকারি নীতিমালা",
    categoryEn: "Official Regulations",
    summaryBn: "নুসূক অ্যাপের মাধ্যমে উমরাহ ও মদিনার রওজাতুল জান্নাহ জিয়ারতের সরকারি স্লট বুকিং ও যাচাই সংক্রান্ত দিকনির্দেশনা।",
    summaryEn: "Official requirements and guidelines for booking Umrah and Rawdah Sharif permits through the Nusuk app.",
    sections: [
      {
        headingBn: "পারমিটের প্রয়োজনীয়তা ও উদ্দেশ্য",
        headingEn: "Requirement and Purpose of Permits",
        contentBn: `মসজিদে হারামে ভিড় নিয়ন্ত্রণ ও হাজীদের নিরাপত্তা নিশ্চিত করতে সৌদি সরকার নুসূক অ্যাপের মাধ্যমে স্লটভিত্তিক পারমিট ব্যবস্থা চালু রেখেছে:
- **উমরাহ পারমিট:** উমরাহর নির্দিষ্ট দিন ও সময় স্লট বুকিং করতে হয়।
- **রওজা শরীফ পারমিট (মদিনা):** মসজিদে নববীতে রওজাতুল জান্নাহে সালাত আদায়ের জন্য নারী ও পুরুষদের আলাদা স্লট বরাদ্দ থাকে। বছরে সাধারণত একবারের বেশি রওজা পারমিট ইস্যু করা হয় না, তাই নির্ধারিত সময়ে উপস্থিত হওয়া জরুরি।`
      }
    ],
    officialSources: [
      {
        title: "Nusuk Permit Regulations",
        url: "https://www.nusuk.sa/",
        verified: "September 2026"
      }
    ]
  },

  "nusuk": {
    slug: "nusuk",
    titleBn: "নুসূক (Nusuk) অ্যাপ ব্যবহার নির্দেশিকা",
    titleEn: "Step-by-Step Nusuk App Guide",
    readingTime: "৭ মিনিট",
    readingTimeEn: "7 min read",
    categoryBn: "ডিজিটাল সেবা",
    categoryEn: "Digital Services",
    summaryBn: "অ্যাকাউন্ট খোলা থেকে শুরু করে উমরাহ ও রওজা স্লট নিশ্চিত করার পূর্ণাঙ্গ ব্যবহারিক টিউটোরিয়াল।",
    summaryEn: "Complete walkthrough on creating an account, selecting visitor type, and reserving Umrah & Rawdah slots on Nusuk.",
    sections: [
      {
        headingBn: "নুসূক অ্যাপে অ্যাকাউন্ট খোলার ধাপসমূহ",
        headingEn: "Steps to Register on Nusuk",
        contentBn: `১. গুগল প্লে স্টোর বা অ্যাপল অ্যাপ স্টোর থেকে অফিশিয়াল **Nusuk** অ্যাপ ইনস্টল করুন।
২. 'New User' নির্বাচন করে 'Visitor' (আন্তর্জাতিক ভ্রমণকারী) অপশনে যান।
৩. আপনার ভিসা নম্বর, পাসপোর্ট নম্বর, জাতীয়তা, জন্মতারিখ ও সক্রিয় ইমেইল প্রদান করুন।
৪. ইমেইলে আসা ৪ সংখ্যার ওটিপি (OTP) দিয়ে অ্যাকাউন্ট ভেরিফাই করুন।
৫. লগইন করে 'Umrah' বা 'Praying in the Noble Rawdah' অপশনে গিয়ে পছন্দসই তারিখ ও সময় স্লট নির্বাচন করে পারমিট ডাউনলোড করে রাখুন।`
      }
    ],
    officialSources: [
      {
        title: "Nusuk Official App Download & Portal",
        url: "https://www.nusuk.sa/",
        verified: "September 2026"
      }
    ]
  },

  "ihram": {
    slug: "ihram",
    titleBn: "ইহরামের বিধান, পোশাক ও নিষেধাজ্ঞা সমগ্র",
    titleEn: "Ihram: Rulings, Clothing & Prohibitions",
    readingTime: "১০ মিনিট",
    readingTimeEn: "10 min read",
    categoryBn: "ফিক্বহ ও আমল",
    categoryEn: "Fiqh & Practice",
    summaryBn: "ইহরামের অর্থ, পুরুষ ও নারীর পোশাকের পার্থক্য, নিষিদ্ধ কাজসমূহ এবং ভুলবশত নিষেধাজ্ঞা ভাঙলে ফিদইয়ার শরঈ সমাধান।",
    summaryEn: "Detailed fiqh guide on Ihram definition, dress code differences, prohibitions, and expiation (Fidyah) rules for inadvertent violations.",
    sections: [
      {
        headingBn: "ইহরাম কী এবং কখন শুরু হয়?",
        headingEn: "What is Ihram and When Does it Begin?",
        contentBn: `ইহরাম মানে কেবল দুটি সাদা চাদর পরা নয়; বরং ইহরাম হলো **উমরাহ বা হজের নিয়ত করে নির্দিষ্ট কিছু হালাল বিষয়কে নিজের জন্য সাময়িকভাবে নিষিদ্ধ করে নেওয়া**।
- ইহরামের পোশাক পরিধান করার পরই একজন মানুষ মুহরিম (ইহরামধারী) হন না; বরং পোশাক পরিধানের পর যখন অন্তরে উমরাহর নিয়ত করে মুখে তালবিয়াহ ("লাব্বাইকা উমরাহ") উচ্চারণ করা হয়, তখনই ইহরাম শুরু হয়।`
      },
      {
        headingBn: "পুরুষ ও নারীর ইহরামের পোশাক",
        headingEn: "Ihram Clothing for Men and Women",
        contentBn: `**পুরুষদের জন্য:**
- দুটি সেলাইবিহীন সাদা চাদর: একটি নিম্নাঙ্গে বাঁধার জন্য (ইযার) এবং অপরটি গায়ে জড়ানোর জন্য (রিদা)।
- কোনো সেলাইকৃত কাপড় (যেমন শার্ট, পায়জামা, অন্তর্বাস) পরা যাবে না।
- মাথা বা মুখ ঢাকা যাবে না।
- জুতো এমন হতে হবে যাতে গোড়ালি ও পায়ের পাতার ওপরের হাড় অনাবৃত থাকে।

**নারীদের জন্য:**
- নারীদের জন্য কোনো নির্দিষ্ট রঙের পোশাক নির্ধারিত নেই। যেকোনো শালীন, ঢিলেঢালা ও অনাকর্ষক সাধারণ পোশাকে ইহরাম হবে।
- ইহরাম অবস্থায় মুখমণ্ডল নেকাব দিয়ে আবৃত করা যাবে না এবং হাতে দস্তানা (গ্লাভস) পরা যাবে না। তবে পরপুরুষের সামনে কাপড় ঝুলিয়ে মুখ আড়াল করা জায়েজ।`
      },
      {
        headingBn: "ইহরামের ৯টি প্রধান নিষেধাজ্ঞা (Mahzurāt al-Iḥrām)",
        headingEn: "The 9 Major Prohibitions of Ihram",
        contentBn: `ইহরাম বাঁধার পর নিচের কাজগুলো কঠোরভাবে নিষিদ্ধ:
১. শরীরের যেকোনো অংশের চুল কাটা বা তুলে ফেলা।
২. হাতের বা পায়ের নখ কাটা।
৩. শরীর বা কাপড়ে সুবাস ও আতর ব্যবহার করা।
৪. পুরুষদের জন্য মাথা বা মুখমণ্ডল কাপড় বা টুপি দিয়ে ঢেকে রাখা।
৫. পুরুষদের জন্য সেলাইকৃত পোশাক পরা।
৬. নারীদের জন্য নেকাব ও গ্লাভস পরিধান করা।
৭. স্থলভাগের শিকারযোগ্য প্রাণী শিকার করা বা শিকারে সহায়তা করা।
৮. বিয়ের প্রস্তাব দেওয়া বা বিবাহ বন্ধনে আবদ্ধ হওয়া।
৯. স্ত্রী সহবাস বা যেকোনো ধরনের যৌন উদ্দীপনামূলক আচরণ করা (এটি করলে উমরাহ বাতিল হয়ে যায়)।`
      },
      {
        headingBn: "ভুলবশত নিষেধাজ্ঞা ভাঙলে করণীয় (ফিদইয়া)",
        headingEn: "What to do if a Mistake Occurs (Fidyah)",
        contentBn: `ভুলবশত বা বাধ্য হয়ে নিষিদ্ধ কোনো কাজ করে ফেললে (যেমন চুল কেটে ফেলা, সুগন্ধি ব্যবহার):
কুরআনের সূরা বাকারার ১৯৬ নম্বর আয়াত অনুযায়ী তিনটি বিকল্পের যেকোনো একটি বেছে নিতে হয়:
১. তিন দিন রোজা রাখা, অথবা
২. ছয়জন মিসকিনকে খাবার খাওয়ানো (প্রতিজনকে আধা সা' বা প্রায় ১.৫ কেজি খাদ্যশস্য), অথবা
৩. একটি বকরি বা দুম্বা কোরবানি করা (হারামের মিসকিনদের মাঝে বিতরণের জন্য)।`
      }
    ],
    officialSources: [
      {
        title: "Saudi Ministry of Hajj & Umrah - Ihram Fiqh Regulations",
        url: "https://www.haj.gov.sa/",
        verified: "September 2026"
      }
    ]
  },

  "miqat": {
    slug: "miqat",
    titleBn: "মীক্বাত পরিচিতি ও বিমানযাত্রীদের ইহরামের নিয়ম",
    titleEn: "The 5 Miqats & Air Travel Ihram Rules",
    readingTime: "৮ মিনিট",
    readingTimeEn: "8 min read",
    categoryBn: "ফিক্বহ ও ভূগোল",
    categoryEn: "Fiqh & Geography",
    summaryBn: "রাসূলুল্লাহ ﷺ নির্ধারিত ৫টি ঐতিহাসিক মীক্বাতের ভৌগোলিক সীমানা এবং বাংলাদেশ বা দূরদেশ থেকে বিমানে ভ্রমণের সময় ইহরাম বাঁধার নিখুঁত নিয়ম।",
    summaryEn: "Geographical boundaries of the 5 Miqats established by the Prophet ﷺ and exact guidance for airborne pilgrims on flights to Jeddah/Madinah.",
    hadithReferences: [
      {
        collection: "সহীহ বুখারী",
        collectionEn: "Sahih al-Bukhari",
        number: "১৫২৪",
        arabic: "وَقَّتَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ لِأَهْلِ الْمَدِينَةِ ذَا الْحُلَيْفَةِ، وَلِأَهْلِ الشَّأْمِ الْجُحْفَةَ، وَلِأَهْلِ نَجْدٍ قَرْنَ الْمَنَازِلِ، وَلِأَهْلِ الْيَمَنِ يَلَمْلَمَ، هُنَّ لَهُنَّ وَلِمَنْ أَتَى عَلَيْهِنَّ مِنْ غَيْرِهِنَّ مِمَّنْ أَرَادَ الْحَجَّ وَالْعُمْرَةَ",
        translationBn: "রাসূলুল্লাহ ﷺ মদিনাবাসীদের জন্য যুল-হুলাইফা, সিরিয়াবাসীদের জন্য আল-জুহফা, নজদবাসীদের জন্য কারনুল মানাযিল এবং ইয়ামেনবাসীদের জন্য ইয়ালামলামকে মীক্বাত নির্ধারণ করেছেন। এগুলো সংশ্লিষ্ট অঞ্চলের মানুষের জন্য এবং যারা অন্য অঞ্চল থেকে হজ ও উমরাহর নিয়তে এ পথ দিয়ে আসে তাদের সবার জন্যও মীক্বাত।",
        translationEn: "The Messenger of Allah ﷺ specified Dhul-Hulaifah for the people of Madinah, Al-Juhfah for the people of Sham, Qarn al-Manazil for the people of Najd, and Yalamlam for the people of Yemen; these are for them and for anyone passing through them from elsewhere intending Hajj or 'Umrah."
      }
    ],
    sections: [
      {
        headingBn: "৫টি ঐতিহাসিক মীক্বাতের বিবরণ",
        headingEn: "The 5 Miqat Boundaries Defined in Sunnah",
        contentBn: `১. **যুল হুলাইফা (আবিয়ারে আলী):** মদিনার দিক থেকে আগতদের জন্য (মক্কা থেকে প্রায় ৪৫০ কিমি দূরে সবচেয়ে দূরবর্তী মীক্বাত)।
২. **আল-জুহফা (রাবেগ):** মিশর, সিরিয়া ও উত্তর দিক থেকে আগতদের জন্য।
3. **কারনুল মানাযিল (আস-সায়লুল কাবীর):** নজদ, রিয়াদ ও উপসাগরীয় অঞ্চলের দিক থেকে আগতদের জন্য।
৪. **ইয়ালামলাম (আস-সাদীয়া):** ইয়ামেন ও দক্ষিণ-পূর্ব এশিয়া (বাংলাদেশ, ভারত, পাকিস্তান) থেকে সমুদ্র বা আকাশপথে আগতদের মীক্বাত।
৫. **যাতু ইরক্ব:** ইরাক ও উত্তর-পূর্ব দিক থেকে আগতদের জন্য।`
      },
      {
        headingBn: "বিমানে ভ্রমণকারীদের জন্য বাস্তবসম্মত নিয়ম",
        headingEn: "Practical Guidance for Air Travelers",
        contentBn: `**যদি আপনার প্রথম গন্তব্য মদিনা হয়:**
- বাংলাদেশ থেকে সরাসরি মদিনায় গেলে ফ্লাইটে ইহরাম বাঁধতে হবে না। মদিনায় সাধারণ পোশাকে থাকবেন। এরপর মদিনা থেকে মক্কা আসার সময় মদিনার মীক্বাত ‘যুল হুলাইফা’ (মসজিদে শাজারাহ) থেকে ইহরাম বাঁধবেন।

**যদি আপনার প্রথম গন্তব্য জেদ্দা হয়:**
- বিমানটি জেদ্দা বিমানবন্দরে অবতরণ করার প্রায় ৩০-৪০ মিনিট পূর্বেই মীক্বাত (ইয়ালামলাম আকাশসীমা) অতিক্রম করে। অবতরণের পর জেদ্দায় ইহরাম বাঁধার সুযোগ নেই।
- তাই বিমানে ওঠার আগেই ঢাকা বিমানবন্দর থেকে ইহরামের কাপড় পরে নিন অথবা ফ্লাইটে মীক্বাত ঘোষণার ৩০ মিনিট আগে কাপড় পরে প্রস্তুত হোন। পাইলট মীক্বাতের ঘোষণা দিলে নিয়ত ও তালবিয়াহ পাঠ করুন।`
      }
    ],
    officialSources: [
      {
        title: "Saudi Ministry of Hajj & Umrah - Miqat Maps & Air Travel Guidance",
        url: "https://www.haj.gov.sa/",
        verified: "September 2026"
      }
    ]
  },

  "tawaf": {
    slug: "tawaf",
    titleBn: "তাওয়াফের সহীহ পদ্ধতি, রীতিনীতি ও দোয়ার বিধান",
    titleEn: "Tawaf Guide: Rules, Steps & Authentic Supplications",
    readingTime: "১১ মিনিট",
    readingTimeEn: "11 min read",
    categoryBn: "রুকন ও আমল",
    categoryEn: "Pillars & Practice",
    summaryBn: "হাজরে আসওয়াদ থেকে শুরু করে ৭ চক্করের নিখুঁত নিয়ম, ইজতিবা, রমল, মাক্বামে ইবরাহীমে সালাত ও যমযম পানের সুন্নাহ। চক্করভিত্তিক বানোয়াট দোয়ার খণ্ডন।",
    summaryEn: "Exhaustive guide to performing the 7 circuits of Tawaf according to Sunnah: starting point, Idtiba', Ramal, prayers at Maqam Ibrahim, and Zamzam.",
    sections: [
      {
        headingBn: "তাওয়াফের পূর্বশর্ত ও প্রস্তুতি",
        headingEn: "Prerequisites for Tawaf",
        contentBn: `১. **ওযু করা:** জমহুর উলামার মতে তাওয়াফের জন্য পবিত্রতা (ওযু) থাকা শর্ত। তাওয়াফকালে ওযু ভেঙে গেলে তাৎক্ষণিক ওযু করে এসে যেখান থেকে ছুটেছিল সেখান থেকে সম্পন্ন করতে হবে।
২. **ইজতিবা (পুরুষদের জন্য):** তাওয়াফের চক্কর চলাকালীন পুরুষেরা ডান কাঁধ অনাবৃত রেখে চাদরটি ডান বগলের নিচ দিয়ে এনে বাম কাঁধের ওপর রাখবেন। (সালাতের পূর্বে কাঁধ ঢেকে নিতে হবে)।
৩. **রমল (পুরুষদের জন্য):** উমরাহর তাওয়াফের প্রথম ৩ চক্করে পুরুষদের জন্য বুক ফুলিয়ে বীরদর্পে দ্রুত পদক্ষেপে চলা সুন্নত (ভিড় কম থাকলে)। শেষ ৪ চক্কর স্বাভাবিক পদচারণায় সম্পন্ন করতে হয়।`
      },
      {
        headingBn: "তাওয়াফের ৭ চক্করের ধারাবাহিক পদ্ধতি",
        headingEn: "Step-by-Step Circuit Procedure",
        contentBn: `১. কাবা শরিফের যে কোণায় হাজরে আসওয়াদ রয়েছে, মেঝেতে সে বরাবর সবুজ বাতি নির্দেশিত রেখা রয়েছে। সেখানে দাঁড়িয়ে কাবার দিকে ফিরে ডান হাত দিয়ে ইশারা করে বলুন: "বিসমিল্লাহি আল্লাহু আকবার" এবং নিজের হাতে কোনো চুমু না দিয়ে চক্কর শুরু করুন।
২. কাবার দিকে বুক না ফিরিয়ে কাবাকে নিজের বাম পাশে রেখে ঘড়ির কাঁটার বিপরীত দিকে হাঁটুন।
৩. ৩য় কোণা 'রুকনে ইয়ামানী' পৌঁছালে সম্ভব হলে হাত দিয়ে স্পর্শ করুন (চুমু বা ইশারা নয়), অন্যথায় কোনো ইশারা ছাড়া অতিক্রম করুন।
৪. রুকনে ইয়ামানী থেকে হাজরে আসওয়াদ পর্যন্ত বিখ্যাত কোরআনী দোয়া পড়ুন: *"রাব্বানা আতিনা ফিদ-দুনিয়া হাসানাতাও ওয়া ফিল-আখিরাতি হাসানাতাও ওয়া ক্বিনা আযাবান-নার।"*
৫. হাজরে আসওয়াদ অতিক্রম করলেই ১ চক্কর পূর্ণ হলো। এভাবে মোট ৭ চক্কর সম্পন্ন করুন।`
      },
      {
        headingBn: "চক্করভিত্তিক বানোয়াট দোয়ার ব্যাপারে শরঈ সতর্কতা",
        headingEn: "Clarification on Fabricated Circuit Duas",
        contentBn: `**অত্যন্ত গুরুত্বপূর্ণ:** রাসূলুল্লাহ ﷺ বা তাঁর সাহাবিগণ তাওয়াফের ১ম চক্করে এই দোয়া, ২য় চক্করে অমুক দোয়া—এমন কোনো নির্দিষ্ট দোয়ার ছক তৈরি করেননি।
তাওয়াফে আপনি আল্লাহর দরবারে কুরআন তিলাওয়াত করতে পারেন, নিজের ভাষায় ক্ষমা চাইতে পারেন এবং পিতামাতা ও পরিবারের জন্য যেকোনো বৈধ প্রার্থনা করতে পারেন। চক্করভিত্তিক বই মুখস্থ করে পড়া বাধ্যতামূলক মনে করা বিদ'আত ও সুন্নাহর পরিপন্থী।`
      }
    ],
    officialSources: [
      {
        title: "General Authority for the Care of the Two Holy Mosques - Tawaf Guidelines",
        url: "https://gph.gov.sa/",
        verified: "September 2026"
      }
    ]
  },

  "sai": {
    slug: "sai",
    titleBn: "সা’ঈর সহীহ সুন্নাহ পদ্ধতি (সাফা ও মারওয়া)",
    titleEn: "Sa'i Guide: Safa & Marwah Sunnah Method",
    readingTime: "৯ মিনিট",
    readingTimeEn: "9 min read",
    categoryBn: "রুকন ও আমল",
    categoryEn: "Pillars & Practice",
    summaryBn: "হাজেরা (আ.)-এর স্মৃতিবিজড়িত সাফা ও মারওয়া পাহাড়ের মাঝে ৭ চক্কর সম্পন্ন করার সুন্নাহ পদ্ধতি, সবুজ বাতি অঞ্চলের নিয়ম ও দোয়া।",
    summaryEn: "Detailed walkthrough of Sa'i between Safa and Marwah commemorating Hajar (AS): 7 trips, green light zone for men, and authentic Sunnah supplications.",
    quranReferences: [
      {
        surah: 2,
        ayah: 158,
        name: "সূরা আল-বাকারা",
        nameEn: "Surah Al-Baqarah",
        arabic: "إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَآئِرِ ٱللَّهِ ۖ فَمَنْ حَجَّ ٱلْبَيْتَ أَوِ ٱعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَن يَطَّوَّفَ بِهِمَا",
        translationBn: "নিশ্চয়ই সাফা ও মারওয়া আল্লাহর নিদর্শনসমূহের অন্তর্ভুক্ত। সুতরাং যে কেউ কাবা ঘরে হজ বা উমরাহ পালন করবে, উভয়ের মাঝে সা’ঈ করাতে তার কোনো দোষ নেই।",
        translationEn: "Indeed, as-Safa and al-Marwah are among the symbols of Allah. So whoever makes Hajj to the House or performs 'Umrah - there is no blame upon him for walking between them.",
        link: "#/bn/quran/2"
      }
    ],
    sections: [
      {
        headingBn: "সা’ঈর নিয়ম ও গণনা পদ্ধতি",
        headingEn: "How Sa'i is Counted",
        contentBn: `সা’ঈর মোট ৭টি চক্কর বা ফেয়ার (Trips) হয়:
- সাফা থেকে মারওয়া = ১ম চক্কর
- মারওয়া থেকে সাফা = ২য় চক্কর
- সাফা থেকে মারওয়া = ৩য় চক্কর
- মারওয়া থেকে সাফা = ৪র্থ চক্কর
- সাফা থেকে মারওয়া = ৫ম চক্কর
- মারওয়া থেকে সাফা = ৬ষ্ঠ চক্কর
- সাফা থেকে মারওয়া = ৭ম চক্কর (এখানে সা’ঈ সমাপ্ত হয়)।
*অনেকে সাফা থেকে মারওয়া গিয়ে আবার সাফায় ফিরে আসাকে ১ চক্কর মনে করেন, এটি মারাত্মক ভুল।*`
      },
      {
        headingBn: "সবুজ বাতি নির্দেশিত অঞ্চল (Milayn al-Akhdarayn)",
        headingEn: "The Green Light Zone for Men",
        contentBn: `সাফা ও মারওয়ার মাঝে সিলিংয়ে সবুজ বাতি দেওয়া একটি অঞ্চল রয়েছে।
রাসূলুল্লাহ ﷺ ও মা হাজেরার অনুসরণে পুরুষেরা এই অঞ্চলে কিছুটা দ্রুতগতিতে দৌড়াবেন (ভিড় ও নিরাপত্তা বজায় রেখে)। নারীরা স্বাভাবিক গতিতে হেঁটে চলবেন, নারীদের জন্য দৌড়ানো শরীয়তে নিষেধ।`
      }
    ],
    officialSources: [
      {
        title: "General Authority for the Care of the Two Holy Mosques - Sa'i Track Guide",
        url: "https://gph.gov.sa/",
        verified: "September 2026"
      }
    ]
  },

  "halq-taqsir": {
    slug: "halq-taqsir",
    titleBn: "হলক্ব ও ক্বসর: মাথা মুণ্ডন বনাম চুল ছাঁটার শরঈ বিধান",
    titleEn: "Halq vs Taqsir: Shaving vs Trimming Hair Rules",
    readingTime: "৬ মিনিট",
    readingTimeEn: "6 min read",
    categoryBn: "ওয়াজিব ও আমল",
    categoryEn: "Obligations & Completion",
    summaryBn: "পুরুষ ও নারীদের জন্য উমরাহর শেষ ওয়াজিব আমল চুল কাটার সঠিক নিয়ম, তাহাল্লুল (ইহরাম সমাপ্তি) এবং সাধারণ ভুলের সংশোধন।",
    summaryEn: "Comprehensive guide on shaving (Halq) and trimming (Taqsir) to exit Ihram (Tahallul) for both men and women according to Sunnah.",
    hadithReferences: [
      {
        collection: "সহীহ বুখারী",
        collectionEn: "Sahih al-Bukhari",
        number: "১৭২৮",
        arabic: "رَحِمَ اللَّهُ الْمُحَلِّقِينَ. قَالُوا: وَالْمُقَصِّرِينَ يَا رَسُولَ اللَّهِ؟ قَالَ: رَحِمَ اللَّهُ الْمُحَلِّقِينَ. قَالُوا: وَالْمُقَصِّرِينَ يَا رَسُولَ اللَّهِ؟ قَالَ: وَالْمُقَصِّرِينَ",
        translationBn: "রাসূলুল্লাহ ﷺ দোয়া করলেন: 'হে আল্লাহ! মাথা মুণ্ডনকারীদের (মুহাল্লিক্বীন) ক্ষমা করুন।' সাহাবিরা বললেন: 'হে আল্লাহর রাসূল! আর চুল ছাঁটাকারীদের (মুক্বাক্বচ্ছিরীন)?' তিনি আবার বললেন: 'হে আল্লাহ! মাথা মুণ্ডনকারীদের ক্ষমা করুন।' সাহাবিরা পুনরায় বললেন: 'আর চুল ছাঁটাকারীদের?' তৃতীয়বারে তিনি বললেন: 'এবং চুল ছাঁটাকারীদেরও।'",
        translationEn: "The Messenger of Allah ﷺ supplicated: 'O Allah, forgive those who shave their heads.' They said: 'And those who shorten their hair, O Messenger of Allah?' He said: 'O Allah, forgive those who shave their heads.' They repeated: 'And those who shorten their hair?' On the third or fourth time, he said: 'And those who shorten their hair.'"
      }
    ],
    sections: [
      {
        headingBn: "পুরুষদের জন্য বিধান: মুণ্ডন বনাম ছাঁটা",
        headingEn: "Rules for Men: Halq vs Taqsir",
        contentBn: `উমরাহ শেষে পুরুষদের জন্য দুটি পথ রয়েছে:
১. **হলক্ব (সম্পূর্ণ মাথা মুণ্ডন করা):** এটি সর্বোত্তম ও সর্বাধিক সাওয়াবের কাজ। রাসূলুল্লাহ ﷺ এদের জন্য তিনবার রহমতের দোয়া করেছেন।
২. **ক্বসর (চুল ছোট করা):** মাথার সমস্ত অংশের চুল থেকে সমানভাবে কিছুটা অংশ কেটে ছোট করা।
*সতর্কতা: মাথার একপাশ বা কেবল সামনের সামান্য কয়েকটি চুল কেটে ফেলা জায়েজ নয়; পুরো মাথার চুল সমানভাবে কাটতে হবে।*`
      },
      {
        headingBn: "নারীদের জন্য বিধান",
        headingEn: "Rules for Women",
        contentBn: `নারীদের জন্য মাথা মুণ্ডন করা সম্পূর্ণ হারাম ও নিষিদ্ধ।
নারীরা তাদের সমস্ত চুল একত্র করে বেণি বা ঝুঁটি বাঁধবেন এবং সেখান থেকে আঙুলের এক কর পরিমাণ (প্রায় এক ইঞ্চি বা ২.৫ সেন্টিমিটার) কেটে নেবেন। কোনো মাহরাম পুরুষ বা অন্য কোনো নারী এই চুল কেটে দিতে পারেন।`
      }
    ],
    officialSources: [
      {
        title: "Saudi Ministry of Hajj and Umrah - Tahallul Regulations",
        url: "https://www.haj.gov.sa/",
        verified: "September 2026"
      }
    ]
  },

  "duas": {
    slug: "duas",
    titleBn: "উমরাহর সহীহ দোয়া সমগ্র ও দোয়ার আদব",
    titleEn: "Authentic Umrah Supplications & Etiquette",
    readingTime: "১০ মিনিট",
    readingTimeEn: "10 min read",
    categoryBn: "দোয়া ও যিকির",
    categoryEn: "Duas & Dhikr",
    summaryBn: "তালবিয়াহ, হাজরে আসওয়াদ, রুকনে ইয়ামানী, সাফা-মারওয়া ও যমযমের বিশুদ্ধ সুন্নাহ সমর্থিত দোয়াসমূহ এবং সাধারণ দোয়ার নিয়মাবলী।",
    summaryEn: "Only verified Sunnah supplications for Umrah with exact Hadith citations, alongside general guidelines for personal prayer in your native language.",
    sections: [
      {
        headingBn: "দোয়া কবুলের বিশেষ মুহূর্তসমূহ",
        headingEn: "Blessed Moments of Acceptance in Umrah",
        contentBn: `উমরাহ সফরে বেশ কিছু স্থানে দোয়া কবুলের বিশেষ প্রতিশ্রুতি রয়েছে:
- কাবার দিকে প্রথম দৃষ্টি পড়ার সময়।
- তাওয়াফের পুরো সময়, বিশেষ করে রুকনে ইয়ামানী ও হাজরে আসওয়াদের মাঝে।
- মাক্বামে ইবরাহীমের পেছনে সালাতের পর।
- যমযমের পানি পান করার সময়।
- সাফা ও মারওয়া পাহাড়ে দাঁড়িয়ে কাবার দিকে হাত তুলে দোয়ার সময়।
- মুলতাযামে (হাজরে আসওয়াদ ও কাবার দরজার মধ্যবর্তী প্রাচীর) দোয়ার সময়।`
      }
    ],
    officialSources: [
      {
        title: "King Fahd Quran Complex - Authentic Supplications in Hajj & Umrah",
        url: "https://qurancomplex.gov.sa/",
        verified: "September 2026"
      }
    ]
  },

  "women": {
    slug: "women",
    titleBn: "নারীদের উমরাহ নির্দেশিকা ও ফিক্বহী সমাধান",
    titleEn: "Women's Umrah Guide & Fiqh Rulings",
    readingTime: "১০ মিনিট",
    readingTimeEn: "10 min read",
    categoryBn: "বিশেষ গাইড",
    categoryEn: "Specialized Guide",
    summaryBn: "নারীদের ইহরামের পোশাক, মাহরাম সংক্রান্ত সাম্প্রতিক সরকারি ও শরঈ বিধান, ঋতুস্রাব (হায়েজ) চলাকালীন আমল ও সমাধান।",
    summaryEn: "Comprehensive women's guide covering Ihram dress, modern Saudi mahram regulations vs classical fiqh, menstruation rulings, and hair cutting.",
    sections: [
      {
        headingBn: "মাহরাম ছাড়া নারীদের সফর সংক্রান্ত বিধান",
        headingEn: "Traveling without a Mahram: Saudi Rules & Fiqh Opinions",
        contentBn: `১. **সৌদি সরকারি বর্তমান নিয়ম (Level 2):** সৌদি হজ ও উমরাহ মন্ত্রণালয়ের বর্তমান সার্কুলার অনুযায়ী নারীরা যেকোনো বয়সে এককভাবে বা নারী দলের সাথে নিরাপদ পরিবেশে উমরাহ ভিসায় সফর করতে পারেন।
২. **শরঈ দৃষ্টিকোণ (Level 3):**
   - হানাফি ও হাম্বলি মাযহাবের মূল মতে নারীদের দীর্ঘ সফরে মাহরাম পুরুষ থাকা আবশ্যক।
   - শাফেয়ী ও মালেকী মাযহাবের বিজ্ঞ উলামাগণের মতে সফর যদি সম্পূর্ণ নিরাপদ ও বিশ্বস্ত নারী দল বা নির্ভরযোগ্য ট্রাভেলের অধীনে হয়, তবে ফরজ বা সুন্নাহ উমরাহ পালন জায়েজ।`
      },
      {
        headingBn: "উমরাহ চলাকালীন ঋতুস্রাব (হায়েজ) শুরু হলে করণীয়",
        headingEn: "What to do if Menstruation (Haidh) Begins",
        contentBn: `যদি কোনো নারী মীক্বাতে বা মক্কায় পৌঁছার পর ঋতুস্রাবগ্রস্ত হন:
- তিনি মীক্বাত অতিক্রম করার সময় সাধারণ গোসল করে উমরাহর নিয়ত ও তালবিয়াহ পাঠ করে পূর্ণাঙ্গ ইহরামে প্রবেশ করবেন।
- ইহরাম অবস্থায় তিনি সব যিকির, দোয়া, কুরআন অধ্যয়ন (স্পর্শ না করে) করতে পারবেন।
- তবে তিনি মসজিদে হারামে প্রবেশ করবেন না এবং তাওয়াফ করবেন না।
- পবিত্র হওয়া পর্যন্ত অপেক্ষা করবেন; পবিত্র হয়ে গোসল করার পর তাওয়াফ ও সাঈ সম্পন্ন করবেন।
- *যদি ফ্লাইট চলে যাওয়ার সময় ঘনিয়ে আসে এবং অপেক্ষা করা অসম্ভব হয়, তবে সমকালীন ফতোয়া অনুযায়ী স্যানিটারি ন্যাপকিন দিয়ে রক্ত বন্ধের ব্যবস্থা করে একান্ত নিরুপায় অবস্থায় তাওয়াফ করে নেবেন।*`
      }
    ],
    officialSources: [
      {
        title: "Saudi Ministry of Hajj & Umrah - Guidelines for Female Pilgrims",
        url: "https://www.haj.gov.sa/",
        verified: "September 2026"
      }
    ]
  },

  "elderly": {
    slug: "elderly",
    titleBn: "প্রবীণ ও বিশেষ চাহিদাসম্পন্ন হাজীদের সহায়িকা",
    titleEn: "Elderly, Mobility & Accessibility Guide",
    readingTime: "৭ মিনিট",
    readingTimeEn: "7 min read",
    categoryBn: "বিশেষ গাইড",
    categoryEn: "Specialized Guide",
    summaryBn: "হুইলচেয়ার সার্ভিস, মেজানাইন ফ্লোরের ইলেকট্রিক কার্ট, হারামের এস্কেলেটর এবং অসুস্থ তীর্থযাত্রীদের জন্য বিশেষ সুবিধা।",
    summaryEn: "Guide to wheelchairs, official electric carts on mezzanine floors, Haramain mobility services, and practical health tips for seniors.",
    sections: [
      {
        headingBn: "মসজিদে হারামের অ্যাক্সেসিবিলিটি সেবাসমূহ",
        headingEn: "Haramain Mobility & Accessibility Infrastructure",
        contentBn: `১. **হুইলচেয়ার সেবা (ম্যানুয়াল ও ড্রাইভার):** মসজিদে হারামের প্রধান প্রবেশদ্বারগুলোতে নির্ধারিত পয়েন্ট থেকে অনুমোদিত ড্রাইভসহ বা নিজস্ব ব্যবহারের হুইলচেয়ার সংগ্রহ করা যায়।
২. **ইলেকট্রিক কার্ট (Electric Golf Carts):** তাওয়াফ ও সাঈর জন্য মেজানাইন ফ্লোরে (Upper Mezzanine Track) ইলেকট্রিক কার্ট রাইডের ব্যবস্থা রয়েছে যা বয়স্ক ও হাঁটায় অক্ষমদের জন্য অত্যন্ত আরামদায়ক। নুসূক বা হারামের টিকিট বুথ থেকে নির্ধারিত ফিতে টিকিট পাওয়া যায়।
৩. **অ্যাক্সেসিবল র্যাম্প ও লিফট:** হারামের প্রায় প্রতিটি প্রধান প্রবেশপথে প্রতিবন্ধী ও প্রবীণদের জন্য হুইলচেয়ার র্যাম্প এবং সুপরিসর লিফট রয়েছে।`
      }
    ],
    officialSources: [
      {
        title: "General Authority for the Care of the Two Holy Mosques - Accessibility Services",
        url: "https://gph.gov.sa/",
        verified: "September 2026"
      }
    ]
  },

  "health": {
    slug: "health",
    titleBn: "স্বাস্থ্য, সুরক্ষা ও জরুরি চিকিৎসা তথ্য",
    titleEn: "Health, Safety & Medical Guidelines",
    readingTime: "৭ মিনিট",
    readingTimeEn: "7 min read",
    categoryBn: "স্বাস্থ্য ও সুরক্ষা",
    categoryEn: "Health & Safety",
    summaryBn: "সৌদি স্বাস্থ্য মন্ত্রণালয়ের বাধ্যতামূলক ভ্যাকসিন, তীব্র গরমে সানস্ট্রোক ও ডিহাইড্রেশন প্রতিরোধ এবং সৌদি জরুরি নম্বরসমূহ।",
    summaryEn: "Mandatory Saudi MoH vaccinations, heat illness prevention, foot and blister care, and emergency healthcare hotlines in Saudi Arabia.",
    sections: [
      {
        headingBn: "বাধ্যতামূলক ভ্যাকসিনসমূহ (সৌদি স্বাস্থ্য মন্ত্রণালয়)",
        headingEn: "Mandatory Vaccinations (Saudi MoH Requirements)",
        contentBn: `সৌদি স্বাস্থ্য মন্ত্রণালয়ের সাম্প্রতিক প্রজ্ঞাপন অনুযায়ী:
- **মেনিনজাইটিস টিকা (Meningococcal ACWY):** সৌদি আরবে প্রবেশের অন্তত ১০ দিন পূর্বে এবং সর্বোচ্চ ৩ বা ৫ বছরের মধ্যে নেওয়া থাকতে হবে।
- **মৌসুমি ইনফ্লুয়েঞ্জা (Influenza):** তীব্র ভিড়ে ফ্লু ও শ্বাসকষ্টের সংক্রমণ কমাতে বয়স্ক ও শিশুদের জন্য বিশেষভাবে পরামর্শ দেওয়া হয়।`
      },
      {
        headingBn: "তীব্র গরমে পানিশূন্যতা ও সানস্ট্রোক প্রতিরোধ",
        headingEn: "Heat Exhaustion & Dehydration Prevention",
        contentBn: `মক্কার তাপমাত্রা বছরের অধিকাংশ সময় অনেক বেশি থাকে।
- প্রতিদিন পর্যাপ্ত পরিমাণে যমযম বা সাধারণ পানি পান করুন (প্রতি ঘণ্টায় অন্তত ১ গ্লাস)।
- দুপুরের তীব্র রোদে বাইরে হাঁটা পরিহার করুন বা ছাতা ব্যবহার করুন।
- সরাসরি এসি ও প্রখর রোদের তাপমাত্রার দ্রুত পরিবর্তনে অনেকের গলাব্যথা ও সর্দি হয়, তাই লবণ-কুসুম গরম পানির কুলকুচি উপকারী।`
      },
      {
        headingBn: "সৌদি জরুরি টেলিফোন নম্বরসমূহ",
        headingEn: "Saudi Emergency Hotlines",
        contentBn: `যে কোনো স্বাস্থ্য ও নিরাপত্তা সহায়তায়:
- **৯১১** — জাতীয় জরুরি সেবা ও পুলিশ (মক্কা ও মদিনা অঞ্চল)।
- **৯৯৭** — রেড ক্রিসেন্ট অ্যাম্বুলেন্স সার্ভিস।
- **৯৩৭** — স্বাস্থ্য মন্ত্রণালয়ের ২৪/৭ মেডিকেল সহায়তা ও টেলি-পরামর্শ কেন্দ্র।`
      }
    ],
    officialSources: [
      {
        title: "Saudi Ministry of Health - Pilgrims Health Requirements",
        url: "https://www.moh.gov.sa/",
        verified: "September 2026"
      }
    ]
  },

  "mistakes": {
    slug: "mistakes",
    titleBn: "উমরাহতে সাধারণ ভুলত্রুটি ও সহীহ সমাধান",
    titleEn: "Common Umrah Mistakes & Authentic Corrections",
    readingTime: "৮ মিনিট",
    readingTimeEn: "8 min read",
    categoryBn: "সতর্কতা ও সংশোধন",
    categoryEn: "Mistakes & Corrections",
    summaryBn: "ইহরাম, মীক্বাত, তাওয়াফ ও সাঈতে হাজীদের সচরাচর ঘটে যাওয়া ভুলসমূহ এবং দলিলের আলোকে তার সহজ সমাধান।",
    summaryEn: "Evidence-based corrections for widespread misconceptions during Ihram, Miqat, Tawaf, Sa'i, and Supplications.",
    sections: [
      {
        headingBn: "ইহরাম ও মীক্বাতের ভুলসমূহ",
        headingEn: "Mistakes in Ihram and Miqat",
        contentBn: `১. **মীক্বাত অতিক্রম করার পর ইহরাম বাঁধা:** অনেকে জেদ্দা বিমানবন্দরে নেমে ইহরাম বাঁধেন। বিমানে ভ্রমণের সময় মীক্বাতের আকাশসীমা পার হওয়ার আগেই ইহরাম বাঁধা ওয়াজিব।
২. **ইহরাম অবস্থায় মুখ বা মাথা ঢাকা:** পুরুষদের জন্য তোয়ালে বা কাপড় দিয়ে মাথা বা মুখ ঢেকে ঘুমানো নিষেধ।
৩. **সুগন্ধি সাবান ব্যবহার:** ইহরাম বাঁধার পর সাবান, লোশন বা টিস্যু সুগন্ধিমুক্ত হওয়া বাধ্যতামূলক।`
      },
      {
        headingBn: "তাওয়াফ ও সাঈর ভুলসমূহ",
        headingEn: "Mistakes in Tawaf and Sa'i",
        contentBn: `১. **হাজরে আসওয়াদকে দূর থেকে দুই হাত তুলে সালাম দেওয়া:** সুন্নাহ হলো কেবল ডান হাত দিয়ে কাবার দিকে ইশারা করে 'আল্লাহু আকবার' বলা। দুই হাত তোলার কোনো ভিত্তি নেই।
২. **তাওয়াফে দলবদ্ধ চিৎকার করে দোয়া পড়া:** উচ্চৈঃস্বরে সম্মিলিতভাবে দল নেতার পেছনে চিৎকার করে দোয়া করা হারামের শান্ত পরিবেশ বিনষ্ট করে এবং অন্য তাওয়াফকারীদের মনোযোগ নষ্ট করে।
৩. **রুকনে ইয়ামানীর দিকে ইশারা করা:** রুকনে ইয়ামানী কেবল কাছে গেলে হাত দিয়ে স্পর্শ করা সুন্নাহ; দূর থেকে কোনো ইশারা বা তাকবীর দেওয়ার বিধান নেই।`
      }
    ],
    officialSources: [
      {
        title: "Scholarly Research Council - Common Errors in Hajj & Umrah",
        url: "https://www.alifta.gov.sa/",
        verified: "September 2026"
      }
    ]
  },

  "faq": {
    slug: "faq",
    titleBn: "উমরাহ প্রশ্নোত্তর সমগ্র (FAQ)",
    titleEn: "Frequently Asked Questions (FAQ)",
    readingTime: "১০ মিনিট",
    readingTimeEn: "10 min read",
    categoryBn: "প্রশ্নোত্তর",
    categoryEn: "Q&A",
    summaryBn: "উমরাহর যাবতীয় জটিলতা, ভিসা, ফিক্বহী মাসয়ালা এবং ট্রাভেল সংক্রান্ত সর্বাধিক জিজ্ঞাসিত প্রশ্নের প্রামাণ্য উত্তর।",
    summaryEn: "Categorized, evidence-based answers to the most common questions on fiqh rulings, travel logistics, and women's matters.",
    sections: [
      {
        headingBn: "সাধারণ ও বহুল জিজ্ঞাসিত প্রশ্ন",
        headingEn: "Frequently Asked Questions",
        contentBn: "নিচে উমরাহ সংক্রান্ত বহুল জিজ্ঞাসিত প্রশ্ন ও সহীহ সুন্নাহ ও সরকারি নীতিমালার আলোকে তার সমাধান তুলে ধরা হলো:"
      }
    ],
    officialSources: [
      {
        title: "Saudi Ministry of Hajj and Umrah Awareness Portal",
        url: "https://www.haj.gov.sa/",
        verified: "September 2026"
      }
    ]
  },

  "umrah-from-bangladesh": {
    slug: "umrah-from-bangladesh",
    titleBn: "বাংলাদেশ থেকে উমরাহ: পূর্ণাঙ্গ নির্দেশিকা",
    titleEn: "Umrah from Bangladesh: Complete Guide",
    readingTime: "৯ মিনিট",
    readingTimeEn: "9 min read",
    categoryBn: "বাংলাদেশি হাজীদের গাইড",
    categoryEn: "Bangladesh Pilgrims",
    summaryBn: "বাংলাদেশ থেকে সরাসরি উমরাহ প্রস্তুতি, ত্যাশহীর (Tasheer) বায়োমেট্রিক, বিমান ফ্লাইট রুট, রিয়াল ও টাকার বাজেট এবং ডিআইওয়াই (DIY) বনাম ট্রাভেল এজেন্সি গাইড।",
    summaryEn: "Specific practical guidance for pilgrims traveling from Bangladesh: visa processing, Tasheer biometrics, flights, currency, and agency vs DIY.",
    sections: [
      {
        headingBn: "বাংলাদেশ থেকে উমরাহর মূল ধাপসমূহ",
        headingEn: "Key Stages from Bangladesh",
        contentBn: `১. **পাসপোর্ট ও বায়োমেট্রিক:** পাসপোর্টে ন্যূনতম ৬ মাসের মেয়াদ থাকতে হবে। অনুমোদিত ভিসা প্রসেসিং সেন্টারে (Tasheer / VFS) বায়োমেট্রিক ও ছবি জমা দিতে হয়।
২. **ফ্লাইট নির্বাচন:** ঢাকা বা চট্টগ্রাম থেকে বিমান বাংলাদেশ এয়ারলাইন্স বা সাউদিয়া (Saudia)-তে সরাসরি জেদ্দা বা মদিনা যাওয়া যায়। এছাড়া বিভিন্ন ট্রানজিট এয়ারলাইন্স (যেমন এমিরেটস, কাতার এয়ারওয়েজ, এয়ার অ্যারাবিয়া, জাজিরা, সালাম এয়ার ইত্যাদি) সাশ্রয়ী মূল্যে ফ্লাইট প্রদান করে।
৩. **কারেন্সি ও ব্যাংক কার্ড:** ভ্রমণকালে সৌদি রিয়াল (SAR) নগদ বহনের পাশাপাশি আন্তর্জাতিক ডুয়েল কারেন্সি ভিসা বা মাস্টারকার্ড এনডোর্স করে নেওয়া অত্যন্ত সুবিধাজনক। সৌদি আরবের প্রায় সর্বত্র কার্ডে পেমেন্ট করা যায়।`
      },
      {
        headingBn: "ট্রাভেল এজেন্সি বনাম নিজস্ব ব্যবস্থাপনায় (DIY) উমরাহ",
        headingEn: "Package Agency vs DIY Independent Umrah",
        contentBn: `বর্তমানে নুসুক অ্যাপ ও অনলাইন ই-ভিসার কারণে অনেকেই স্বাবলম্বীভাবে নিজস্ব ব্যবস্থাপনায় (DIY) হোটেল ও ফ্লাইট বুক করে উমরাহ করছেন।
- **এজেন্সির সুবিধা:** প্রথমবার যাত্রীদের জন্য ভাষা, গাড়ি ও গাইডের স্বস্তি থাকে।
- **স্বতন্ত্র (DIY) উমরাহর সুবিধা:** খরচ অনেকটাই সাশ্রয়ী হয়, নিজের পছন্দমতো দিনে হোটেলে থাকা যায় এবং ইচ্ছানুযায়ী হারাম শরিফে বেশি সময় কাটানো যায়।`
      }
    ],
    officialSources: [
      {
        title: "Saudi Embassy in Dhaka & Tasheer Center Guidelines",
        url: "https://vc.tasheer.com/",
        verified: "September 2026"
      }
    ]
  },

  "hajj-in-quran": {
    slug: "hajj-in-quran",
    titleBn: "পবিত্র কুরআনে হজ ও উমরাহর বিধান",
    titleEn: "Hajj & Umrah in the Holy Quran",
    readingTime: "৮ মিনিট",
    readingTimeEn: "8 min read",
    categoryBn: "কুরআনিক দর্শন",
    categoryEn: "Quranic Foundation",
    summaryBn: "আল-কুরআনের যে আয়াতসমূহে হজ ও উমরাহর বিধান, পবিত্র কাবার ইতিহাস, ইবরাহীম (আ.)-এর কুরবানি ও সাফা-মারওয়ার মহিমা বর্ণিত হয়েছে।",
    summaryEn: "Quranic foundations and verses commanding Hajj and Umrah, establishing the Sanctity of the Kaaba, and detailing the rites.",
    quranReferences: [
      {
        surah: 2,
        ayah: 196,
        name: "সূরা আল-বাকারা",
        nameEn: "Surah Al-Baqarah",
        arabic: "وَأَتِمُّوا۟ ٱلْحَجَّ وَٱلْعُمْرَةَ لِلَّهِ",
        translationBn: "আর তোমরা আল্লাহর সন্তুষ্টির উদ্দেশ্যে হজ ও উমরাহ পূর্ণ করো।",
        translationEn: "And complete the Hajj and 'Umrah for Allah.",
        link: "#/bn/quran/2"
      },
      {
        surah: 2,
        ayah: 158,
        name: "সূরা আল-বাকারা",
        nameEn: "Surah Al-Baqarah",
        arabic: "إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَآئِرِ ٱللَّهِ ۖ فَمَنْ حَجَّ ٱلْبَيْتَ أَوِ ٱعْتَمَرَ فَلَا جُنَاحَ عَلَيْهِ أَن يَطَّوَّفَ بِهِمَا",
        translationBn: "নিশ্চয়ই সাফা ও মারওয়া আল্লাহর নিদর্শনসমূহের অন্তর্ভুক্ত।",
        translationEn: "Indeed, as-Safa and al-Marwah are among the symbols of Allah.",
        link: "#/bn/quran/2"
      },
      {
        surah: 3,
        ayah: 96,
        name: "সূরা আলে ইমরান",
        nameEn: "Surah Ali 'Imran",
        arabic: "إِنَّ أَوَّلَ بَيْتٍۢ وُضِعَ لِلنَّاسِ لَلَّذِى بِبَكَّةَ مُبَارَكًۭا وَهُدًۭى لِّلْعَـٰلَمِينَ",
        translationBn: "নিশ্চয়ই মানবজাতির জন্য সর্বপ্রথম যে ঘরটি নির্মিত হয়েছিল, তা হলো বাক্কায় (মক্কায়) অবস্থিত বরকতময় গৃহ, যা বিশ্বজগতের জন্য হেদায়েতের উৎস।",
        translationEn: "Indeed, the first House [of worship] established for mankind was that at Bakkah [Makkah] - blessed and a guidance for the worlds.",
        link: "#/bn/quran/3"
      },
      {
        surah: 22,
        ayah: 27,
        name: "সূরা আল-হাজ্জ",
        nameEn: "Surah Al-Hajj",
        arabic: "وَأَذِّن فِى ٱلنَّاسِ بِٱلْحَجِّ يَأْتُوكَ رِجَالًۭا وَعَلَىٰ كُلِّ ضَامِرٍۢ يَأْتِينَ مِن كُلِّ فَجٍّ عَمِيقٍۢ",
        translationBn: "আর মানুষের মাঝে হজের ঘোষণা দাও; তারা তোমার কাছে আসবে পায়ে হেঁটে এবং দূর-দূরান্তের গভীর গিরিপথ বেয়ে দুর্বল ও ক্লান্ত উটের পিঠে চড়ে।",
        translationEn: "And proclaim to the people the Hajj [pilgrimage]; they will come to you on foot and on every lean camel; they will come from every distant pass.",
        link: "#/bn/quran/22"
      }
    ],
    sections: [
      {
        headingBn: "আল্লাহর ঘরের ঐতিহাসিক মর্যাদা ও পবিত্রতা",
        headingEn: "Sanctity and History of the Kaaba in Quran",
        contentBn: `পবিত্র কুরআনে আল্লাহ তায়ালা কাবা ঘরের সৃষ্টি, ইবরাহীম (আ.) ও ইসমাঈল (আ.) কর্তৃক কাবার প্রাচীর উত্তোলন এবং মানুষের জন্য একে নিরাপদ কেন্দ্র ঘোষণার ইতিহাস অত্যন্ত হৃদয়গ্রাহী ভাষায় বর্ণনা করেছেন।
উমরাহ পালনকারী যখন এই আয়াতগুলো হৃদয় দিয়ে অনুভব করেন, তখন প্রতিটি তাওয়াফ ও সাঈর আধ্যাত্মিক গভীরতা বহুগুণ বৃদ্ধি পায়।`
      }
    ],
    officialSources: [
      {
        title: "Tanzil.net Verified Quranic Corpus",
        url: "https://tanzil.net/",
        verified: "September 2026"
      }
    ]
  }
};

// Categorized Umrah FAQ with verified evidence
export const UMRAH_FAQ_DATA = [
  {
    category: "ihram",
    categoryBn: "ইহরাম ও মীক্বাত",
    categoryEn: "Ihram & Miqat",
    questionBn: "বিমানে ভ্রমণের সময় আমি ঠিক কখন ইহরাম বাঁধব?",
    questionEn: "When exactly should I enter Ihram during a flight?",
    answerBn: "যদি আপনার ফ্লাইট সরাসরি জেদ্দায় অবতরণ করে, তবে বিমান মীক্বাতের আকাশসীমা অতিক্রম করার প্রায় আধা ঘণ্টা আগেই আপনার ইহরামের কাপড় পরে প্রস্তুত হওয়া উচিত। পাইলট যখন মীক্বাতের ঘোষণা দেবেন, তখন আপনি উমরাহর নিয়ত করে তালবিয়াহ পাঠ করবেন। জেদ্দা বিমানবন্দরে নেমে ইহরাম বাঁধার সুযোগ নেই।",
    answerEn: "If your flight lands directly in Jeddah, you should put on your Ihram garments before the plane reaches the Miqat boundary in the air. When the pilot announces the Miqat, make your vocal intention and begin reciting Talbiyah. Entering Ihram after landing at Jeddah airport is invalid without penalty.",
    source: "সহীহ বুখারী: ১৫২৪, ফতোয়া লাজনা দায়িমা"
  },
  {
    category: "tawaf",
    categoryBn: "তাওয়াফ ও সালাত",
    categoryEn: "Tawaf & Prayer",
    questionBn: "তাওয়াফের মাঝে ওযু ভেঙে গেলে কী করব?",
    questionEn: "What should I do if my Wudu breaks during Tawaf?",
    answerBn: "তাওয়াফের মধ্যে ওযু ভেঙে গেলে সাথে সাথে তাওয়াফ থামিয়ে ওযু করার জন্য বের হবেন। ওযু শেষে ফিরে এসে যে চক্করে ওযু ভেঙেছিল, সেই চক্করটির শুরু থেকে সম্পন্ন করে বাকি চক্করগুলো শেষ করবেন।",
    answerEn: "If your Wudu breaks, exit immediately to perform ablution. Upon returning, resume from the beginning of the incomplete circuit and continue the remaining circuits.",
    source: "জমহুর ফুক্বাহা ও সহীহ হাদিসের অনুশাসন"
  },
  {
    category: "women",
    categoryBn: "নারীদের বিধান",
    categoryEn: "Women's Rulings",
    questionBn: "মহিলাদের কি উমরাহতে মাথা মুণ্ডন করতে হয়?",
    questionEn: "Do women need to shave their heads in Umrah?",
    answerBn: "না, নারীদের জন্য মাথা মুণ্ডন করা সম্পূর্ণ নিষিদ্ধ। নারীরা তাঁদের চুলের সমস্ত অংশ একত্র করে এক আঙুলের এক কর পরিমাণ (প্রায় ১ ইঞ্চি) কেটে নেবেন।",
    answerEn: "No, shaving the head is strictly prohibited for women. A woman trims only a fingertip length (approx. 1 inch) from the end of her hair gathered together.",
    source: "সুনান আবু দাউদ: ১৯৮৪ (ইবনে আব্বাস রা. সূত্রে মারফূ')"
  },
  {
    category: "nusuk",
    categoryBn: "নুসূক ও পারমিট",
    categoryEn: "Nusuk & Permits",
    questionBn: "এক সফরে কি একাধিকবার উমরাহ করা যায়?",
    questionEn: "Can I perform multiple Umrahs in a single trip?",
    answerBn: "এক সফরে একবার সুন্দর ও একনিষ্ঠভাবে উমরাহ করাই রাসূলুল্লাহ ﷺ-এর আদর্শ। তবে কেউ যদি দ্বিতীয়বার উমরাহ করতে চান, তবে মক্কার হারামের সীমানার বাইরে তান'ঈম (মসজিদে আয়েশা) গিয়ে নতুন করে ইহরাম বেঁধে উমরাহ পালন করতে পারেন। এর জন্য নুসূক অ্যাপে নতুন পারমিট স্লট প্রাপ্তিসাপেক্ষ।",
    answerEn: "Performing one sincere and focused Umrah per trip was the primary practice of the Prophet ﷺ. However, if one wishes to perform another, they must exit the Haram boundary to Tan'eem (Masjid Aisha), assume Ihram, and obtain an available permit on Nusuk.",
    source: "সহীহ মুসলিম: ১২১১, সৌদি হজ ও উমরাহ নীতিমালা"
  }
];

// Common Umrah Misconceptions & Corrections Matrix
export const UMRAH_MISTAKES_DATA = [
  {
    topicBn: "হাজরে আসওয়াদে চুম্বন ও ভিড় ঠেলে যাওয়া",
    topicEn: "Kissing Hajar al-Aswad by Forceful Crowding",
    mistakeBn: "হাজরে আসওয়াদে চুমু খাওয়ার জন্য অন্য মানুষকে ধাক্কা দেওয়া বা নারীদের আঘাত করে সামনে এগোনো।",
    mistakeEn: "Pushing and shoving others aggressively to reach and kiss the Black Stone.",
    correctionBn: "হাজরে আসওয়াদে চুমু খাওয়া একটি মুস্তাহাব সুন্নত, কিন্তু কাউকে কষ্ট দেওয়া বা আঘাত করা সম্পূর্ণ হারাম। ভিড় থাকলে দূর থেকে ডান হাত দিয়ে ইশারা করে 'আল্লাহু আকবার' বলাই রাসূলুল্লাহ ﷺ-এর সুন্নাহ।",
    correctionEn: "Kissing the Stone is recommended (Mustahabb), but harming others is explicitly prohibited (Haram). Pointing towards it from afar with the right hand and saying 'Allahu Akbar' fully fulfills the Sunnah.",
    source: "সহীহ বুখারী: ১৬১৩"
  },
  {
    topicBn: "তাওয়াফের চক্করভিত্তিক নির্দিষ্ট বানোয়াট দোয়া",
    topicEn: "Fabricated Round-by-Round Tawaf Duas",
    mistakeBn: "পুস্তিকা দেখে ১ম চক্করে নির্দিষ্ট দোয়া, ২য় চক্করে নির্দিষ্ট দোয়া মুখস্থ করে পাঠ করা।",
    mistakeEn: "Believing that each circuit of Tawaf has an obligatory pre-assigned prayer from a booklet.",
    correctionBn: "রাসূলুল্লাহ ﷺ কোনো চক্করের জন্য আলাদা দোয়া নির্ধারণ করেননি (রুকনে ইয়ামানী ও হাজরে আসওয়াদের মধ্যবর্তী স্থান ছাড়া)। তাওয়াফে যেকোনো কুরআনিক দোয়া, যিকির ও নিজের ভাষায় মন খুলে দোয়া করা সুন্নত।",
    correctionEn: "The Prophet ﷺ did not assign specific prayers to individual circuits except between the Yemeni corner and the Black Stone. Reciting any Quranic duas or personal supplications in your native tongue is authentic.",
    source: "মাজমু ফতোয়া ইবনে তাইমিয়াহ (২৬/১২২)"
  },
  {
    topicBn: "সাঈর গণনা পদ্ধতিতে ভুল",
    topicEn: "Counting Sa'i Trips Incorrectly",
    mistakeBn: "সাফা থেকে মারওয়া গিয়ে আবার সাফায় ফিরে আসাকে ১ চক্কর মনে করে মোট ১৪ বার হাঁটা।",
    mistakeEn: "Counting a round-trip between Safa and Marwah as a single trip (resulting in 14 legs).",
    correctionBn: "সাফা থেকে মারওয়া = ১ চক্কর, মারওয়া থেকে সাফা = ২য় চক্কর। এভাবে ৭ম চক্করটি মারওয়া পাহাড়ে গিয়ে শেষ হয়।",
    correctionEn: "Safa to Marwah is counted as 1 trip, and Marwah to Safa is the 2nd trip. The 7th trip concludes on Mount Marwah.",
    source: "সহীহ মুসলিম: ১২১৮"
  },
  {
    topicBn: "পুরুষদের সর্বদা এক কাঁধ খুলে রাখা",
    topicEn: "Keeping the Right Shoulder Uncovered at All Times",
    mistakeBn: "ইহরাম বাঁধার পর থেকে বাড়ি ফিরে আসা পর্যন্ত সারাক্ষণ ডান কাঁধ অনাবৃত রাখা।",
    mistakeEn: "Keeping the right shoulder uncovered (Idtiba') throughout the entire stay and in prayers.",
    correctionBn: "ডান কাঁধ খোলা রাখা (ইজতিবা) কেবল উমরাহর তাওয়াফের ৭ চক্করের সময়েই প্রযোজ্য। তাওয়াফ শেষ হওয়ামাত্র সালাত আদায়ের আগেই কাঁধ ঢেকে নেওয়া ওয়াজিব। সাঈতে বা অন্য সময় কাঁধ খোলা রাখার কোনো বিধান নেই।",
    correctionEn: "Idtiba' is prescribed only during the 7 circuits of Tawaf al-Umrah. Both shoulders must be covered for the subsequent prayer and during Sa'i.",
    source: "সুনান আবু দাউদ: ১৮৮৩, ফিক্বহুস সুন্নাহ"
  }
];
