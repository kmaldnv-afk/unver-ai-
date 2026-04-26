
const ADMIN_BOT_TOKEN = "PASTE_YOUR_BOT_TOKEN_HERE";
const ADMIN_CHAT_ID = "PASTE_YOUR_CHAT_ID_HERE";
const ENABLE_TELEGRAM_REPORT = true;

const subjects = [
  {
    "id": "math",
    "icon": "🧮",
    "name": {
      "uz": "Matematika",
      "en": "Mathematics",
      "ru": "Математика",
      "de": "Mathematik",
      "zh": "数学"
    },
    "material": {
      "uz": "Funksiyalar, tenglamalar, kombinatorika",
      "en": "Funksiyalar, tenglamalar, kombinatorika",
      "ru": "Funksiyalar, tenglamalar, kombinatorika",
      "de": "Funksiyalar, tenglamalar, kombinatorika",
      "zh": "Funksiyalar, tenglamalar, kombinatorika"
    }
  },
  {
    "id": "mother",
    "icon": "📚",
    "name": {
      "uz": "Ona tili",
      "en": "Native Language",
      "ru": "Родной язык",
      "de": "Muttersprache",
      "zh": "母语"
    },
    "material": {
      "uz": "Gap bo'laklari, uslub, imlo",
      "en": "Gap bo'laklari, uslub, imlo",
      "ru": "Gap bo'laklari, uslub, imlo",
      "de": "Gap bo'laklari, uslub, imlo",
      "zh": "Gap bo'laklari, uslub, imlo"
    }
  },
  {
    "id": "literature",
    "icon": "✒️",
    "name": {
      "uz": "Adabiyot",
      "en": "Literature",
      "ru": "Литература",
      "de": "Literatur",
      "zh": "文学"
    },
    "material": {
      "uz": "Asarlar, obrazlar, g'oyalar",
      "en": "Asarlar, obrazlar, g'oyalar",
      "ru": "Asarlar, obrazlar, g'oyalar",
      "de": "Asarlar, obrazlar, g'oyalar",
      "zh": "Asarlar, obrazlar, g'oyalar"
    }
  },
  {
    "id": "chemistry",
    "icon": "⚗️",
    "name": {
      "uz": "Kimyo",
      "en": "Chemistry",
      "ru": "Химия",
      "de": "Chemie",
      "zh": "化学"
    },
    "material": {
      "uz": "Reaksiya tenglamalari va hisob",
      "en": "Reaksiya tenglamalari va hisob",
      "ru": "Reaksiya tenglamalari va hisob",
      "de": "Reaksiya tenglamalari va hisob",
      "zh": "Reaksiya tenglamalari va hisob"
    }
  },
  {
    "id": "physics",
    "icon": "🔭",
    "name": {
      "uz": "Fizika",
      "en": "Physics",
      "ru": "Физика",
      "de": "Physik",
      "zh": "物理"
    },
    "material": {
      "uz": "Mexanika, elektr, optika",
      "en": "Mexanika, elektr, optika",
      "ru": "Mexanika, elektr, optika",
      "de": "Mexanika, elektr, optika",
      "zh": "Mexanika, elektr, optika"
    }
  },
  {
    "id": "geography",
    "icon": "🌍",
    "name": {
      "uz": "Geografiya",
      "en": "Geography",
      "ru": "География",
      "de": "Geografie",
      "zh": "地理"
    },
    "material": {
      "uz": "Iqlim, resurslar, demografiya",
      "en": "Iqlim, resurslar, demografiya",
      "ru": "Iqlim, resurslar, demografiya",
      "de": "Iqlim, resurslar, demografiya",
      "zh": "Iqlim, resurslar, demografiya"
    }
  },
  {
    "id": "history",
    "icon": "🏛️",
    "name": {
      "uz": "O'zbekiston va jahon tarixi",
      "en": "History",
      "ru": "История",
      "de": "Geschichte",
      "zh": "历史"
    },
    "material": {
      "uz": "Davrlar, islohotlar, urushlar",
      "en": "Davrlar, islohotlar, urushlar",
      "ru": "Davrlar, islohotlar, urushlar",
      "de": "Davrlar, islohotlar, urushlar",
      "zh": "Davrlar, islohotlar, urushlar"
    }
  },
  {
    "id": "it",
    "icon": "💻",
    "name": {
      "uz": "Kompyuter / IT",
      "en": "Computer / IT",
      "ru": "Компьютер / IT",
      "de": "Computer / IT",
      "zh": "计算机 / IT"
    },
    "material": {
      "uz": "Algoritm, tarmoq, xavfsizlik",
      "en": "Algoritm, tarmoq, xavfsizlik",
      "ru": "Algoritm, tarmoq, xavfsizlik",
      "de": "Algoritm, tarmoq, xavfsizlik",
      "zh": "Algoritm, tarmoq, xavfsizlik"
    }
  },
  {
    "id": "biology",
    "icon": "🧬",
    "name": {
      "uz": "Biologiya",
      "en": "Biology",
      "ru": "Биология",
      "de": "Biologie",
      "zh": "生物"
    },
    "material": {
      "uz": "Genetika, anatomiya, ekologiya",
      "en": "Genetika, anatomiya, ekologiya",
      "ru": "Genetika, anatomiya, ekologiya",
      "de": "Genetika, anatomiya, ekologiya",
      "zh": "Genetika, anatomiya, ekologiya"
    }
  },
  {
    "id": "economics",
    "icon": "📈",
    "name": {
      "uz": "Iqtisodiy bilimlar",
      "en": "Economics",
      "ru": "Экономика",
      "de": "Wirtschaft",
      "zh": "经济学"
    },
    "material": {
      "uz": "Bozor, inflyatsiya, fiskal siyosat",
      "en": "Bozor, inflyatsiya, fiskal siyosat",
      "ru": "Bozor, inflyatsiya, fiskal siyosat",
      "de": "Bozor, inflyatsiya, fiskal siyosat",
      "zh": "Bozor, inflyatsiya, fiskal siyosat"
    }
  },
  {
    "id": "law",
    "icon": "⚖️",
    "name": {
      "uz": "Huquq",
      "en": "Law",
      "ru": "Право",
      "de": "Recht",
      "zh": "法律"
    },
    "material": {
      "uz": "Konstitutsiya, javobgarlik, huquqlar",
      "en": "Konstitutsiya, javobgarlik, huquqlar",
      "ru": "Konstitutsiya, javobgarlik, huquqlar",
      "de": "Konstitutsiya, javobgarlik, huquqlar",
      "zh": "Konstitutsiya, javobgarlik, huquqlar"
    }
  },
  {
    "id": "english",
    "icon": "🇬🇧",
    "name": {
      "uz": "Ingliz tili",
      "en": "English",
      "ru": "Английский язык",
      "de": "Englisch",
      "zh": "英语"
    },
    "material": {
      "uz": "Grammar, vocabulary, reading",
      "en": "Grammar, vocabulary, reading",
      "ru": "Grammar, vocabulary, reading",
      "de": "Grammar, vocabulary, reading",
      "zh": "Grammar, vocabulary, reading"
    }
  },
  {
    "id": "foreign",
    "icon": "🌐",
    "name": {
      "uz": "Nemis / Xitoy / Rus tillari",
      "en": "German / Chinese / Russian",
      "ru": "Немецкий / Китайский / Русский",
      "de": "Deutsch / Chinesisch / Russisch",
      "zh": "德语 / 汉语 / 俄语"
    },
    "material": {
      "uz": "Leksika va umumiy qoidalar",
      "en": "Leksika va umumiy qoidalar",
      "ru": "Leksika va umumiy qoidalar",
      "de": "Leksika va umumiy qoidalar",
      "zh": "Leksika va umumiy qoidalar"
    }
  },
  {
    "id": "russian",
    "icon": "🇷🇺",
    "name": {
      "uz": "Rus tili",
      "en": "Russian",
      "ru": "Русский язык",
      "de": "Russisch",
      "zh": "俄语",
      "tr": "Rusça"
    },
    "material": {
      "uz": "Grammatika, lug‘at, matn",
      "en": "Grammar, vocabulary, reading",
      "ru": "Грамматика, словарь, чтение",
      "de": "Grammatik, Wortschatz, Lesen",
      "zh": "语法、词汇、阅读",
      "tr": "Dilbilgisi, kelime, okuma"
    }
  },
  {
    "id": "german",
    "icon": "🇩🇪",
    "name": {
      "uz": "Nemis tili",
      "en": "German",
      "ru": "Немецкий язык",
      "de": "Deutsch",
      "zh": "德语",
      "tr": "Almanca"
    },
    "material": {
      "uz": "Grammatika, lug‘at, matn",
      "en": "Grammar, vocabulary, reading",
      "ru": "Грамматика, словарь, чтение",
      "de": "Grammatik, Wortschatz, Lesen",
      "zh": "语法、词汇、阅读",
      "tr": "Dilbilgisi, kelime, okuma"
    }
  },
  {
    "id": "chinese",
    "icon": "🇨🇳",
    "name": {
      "uz": "Xitoy tili",
      "en": "Chinese",
      "ru": "Китайский язык",
      "de": "Chinesisch",
      "zh": "中文",
      "tr": "Çince"
    },
    "material": {
      "uz": "Pinyin, lug‘at, matn",
      "en": "Pinyin, vocabulary, reading",
      "ru": "Пиньинь, словарь, чтение",
      "de": "Pinyin, Wortschatz, Lesen",
      "zh": "拼音、词汇、阅读",
      "tr": "Pinyin, kelime, okuma"
    }
  },
  {
    "id": "turkish",
    "icon": "🇹🇷",
    "name": {
      "uz": "Turk tili",
      "en": "Turkish",
      "ru": "Турецкий язык",
      "de": "Türkisch",
      "zh": "土耳其语",
      "tr": "Türkçe"
    },
    "material": {
      "uz": "Grammatika, lug‘at, matn",
      "en": "Grammar, vocabulary, reading",
      "ru": "Грамматика, словарь, чтение",
      "de": "Grammatik, Wortschatz, Lesen",
      "zh": "语法、词汇、阅读",
      "tr": "Dilbilgisi, kelime, okuma"
    }
  },
  {
    "id": "iq",
    "icon": "🧠",
    "name": {
      "uz": "IQ test",
      "en": "IQ Test",
      "ru": "IQ тест",
      "de": "IQ-Test",
      "zh": "智力测试"
    },
    "material": {
      "uz": "Mantiq, ketma-ketlik, naqsh",
      "en": "Mantiq, ketma-ketlik, naqsh",
      "ru": "Mantiq, ketma-ketlik, naqsh",
      "de": "Mantiq, ketma-ketlik, naqsh",
      "zh": "Mantiq, ketma-ketlik, naqsh"
    }
  }
];

const subjectLocalization = {
  math:{uz:"Matematika",en:"Mathematics",ru:"Математика",de:"Mathematik",zh:"数学",tr:"Matematik"},
  mother:{uz:"Ona tili",en:"Native Language",ru:"Родной язык",de:"Muttersprache",zh:"母语",tr:"Ana dili"},
  literature:{uz:"Adabiyot",en:"Literature",ru:"Литература",de:"Literatur",zh:"文学",tr:"Edebiyat"},
  chemistry:{uz:"Kimyo",en:"Chemistry",ru:"Химия",de:"Chemie",zh:"化学",tr:"Kimya"},
  physics:{uz:"Fizika",en:"Physics",ru:"Физика",de:"Physik",zh:"物理",tr:"Fizik"},
  geography:{uz:"Geografiya",en:"Geography",ru:"География",de:"Geografie",zh:"地理",tr:"Coğrafya"},
  history:{uz:"O'zbekiston va jahon tarixi",en:"History",ru:"История",de:"Geschichte",zh:"历史",tr:"Tarih"},
  it:{uz:"Kompyuter / IT",en:"Computer / IT",ru:"Компьютер / IT",de:"Computer / IT",zh:"计算机 / IT",tr:"Bilgisayar / IT"},
  biology:{uz:"Biologiya",en:"Biology",ru:"Биология",de:"Biologie",zh:"生物",tr:"Biyoloji"},
  economics:{uz:"Iqtisodiy bilimlar",en:"Economics",ru:"Экономика",de:"Wirtschaft",zh:"经济学",tr:"Ekonomi"},
  law:{uz:"Huquq",en:"Law",ru:"Право",de:"Recht",zh:"法律",tr:"Hukuk"},
  english:{uz:"Ingliz tili",en:"English",ru:"Английский язык",de:"Englisch",zh:"英语",tr:"İngilizce"},
  foreign:{uz:"Nemis / Xitoy / Rus tillari",en:"German / Chinese / Russian",ru:"Немецкий / Китайский / Русский",de:"Deutsch / Chinesisch / Russisch",zh:"德语 / 汉语 / 俄语",tr:"Almanca / Çince / Rusça"},
  russian:{uz:"Rus tili",en:"Russian",ru:"Русский язык",de:"Russisch",zh:"俄语",tr:"Rusça"},
  german:{uz:"Nemis tili",en:"German",ru:"Немецкий язык",de:"Deutsch",zh:"德语",tr:"Almanca"},
  chinese:{uz:"Xitoy tili",en:"Chinese",ru:"Китайский язык",de:"Chinesisch",zh:"中文",tr:"Çince"},
  turkish:{uz:"Turk tili",en:"Turkish",ru:"Турецкий язык",de:"Türkisch",zh:"土耳其语",tr:"Türkçe"},
  iq:{uz:"IQ test",en:"IQ Test",ru:"IQ тест",de:"IQ-Test",zh:"智力测试",tr:"IQ Testi"}
};

const materialLocalization = {
  math:{uz:"Funksiyalar, tenglamalar, kombinatorika",en:"Functions, equations, combinatorics",ru:"Функции, уравнения, комбинаторика",de:"Funktionen, Gleichungen, Kombinatorik",zh:"函数、方程、组合学",tr:"Fonksiyonlar, denklemler, kombinatorik"},
  mother:{uz:"Gap bo'laklari, uslub, imlo",en:"Sentence parts, style, spelling",ru:"Части предложения, стиль, орфография",de:"Satzglieder, Stil, Rechtschreibung",zh:"句子成分、文体、拼写",tr:"Cümle ögeleri, üslup, yazım"},
  literature:{uz:"Asarlar, obrazlar, g'oyalar",en:"Works, characters, ideas",ru:"Произведения, образы, идеи",de:"Werke, Figuren, Ideen",zh:"作品、人物、思想",tr:"Eserler, karakterler, fikirler"},
  chemistry:{uz:"Reaksiya tenglamalari va hisob",en:"Reaction equations and calculations",ru:"Уравнения реакций и расчёты",de:"Reaktionsgleichungen und Berechnungen",zh:"反应方程式与计算",tr:"Tepkime denklemleri ve hesaplama"},
  physics:{uz:"Mexanika, elektr, optika",en:"Mechanics, electricity, optics",ru:"Механика, электричество, оптика",de:"Mechanik, Elektrizität, Optik",zh:"力学、电学、光学",tr:"Mekanik, elektrik, optik"},
  geography:{uz:"Iqlim, resurslar, demografiya",en:"Climate, resources, demography",ru:"Климат, ресурсы, демография",de:"Klima, Ressourcen, Demografie",zh:"气候、资源、人口",tr:"İklim, kaynaklar, demografi"},
  history:{uz:"Davrlar, islohotlar, urushlar",en:"Periods, reforms, wars",ru:"Периоды, реформы, войны",de:"Epochen, Reformen, Kriege",zh:"时代、改革、战争",tr:"Dönemler, reformlar, savaşlar"},
  it:{uz:"Algoritm, tarmoq, xavfsizlik",en:"Algorithms, networks, security",ru:"Алгоритмы, сети, безопасность",de:"Algorithmen, Netzwerke, Sicherheit",zh:"算法、网络、安全",tr:"Algoritmalar, ağlar, güvenlik"},
  biology:{uz:"Genetika, anatomiya, ekologiya",en:"Genetics, anatomy, ecology",ru:"Генетика, анатомия, экология",de:"Genetik, Anatomie, Ökologie",zh:"遗传学、解剖学、生态学",tr:"Genetik, anatomi, ekoloji"},
  economics:{uz:"Bozor, inflyatsiya, fiskal siyosat",en:"Markets, inflation, fiscal policy",ru:"Рынок, инфляция, фискальная политика",de:"Markt, Inflation, Fiskalpolitik",zh:"市场、通胀、财政政策",tr:"Piyasa, enflasyon, mali politika"},
  law:{uz:"Konstitutsiya, javobgarlik, huquqlar",en:"Constitution, liability, rights",ru:"Конституция, ответственность, права",de:"Verfassung, Verantwortung, Rechte",zh:"宪法、责任、权利",tr:"Anayasa, sorumluluk, haklar"},
  english:{uz:"Grammar, vocabulary, reading",en:"Grammar, vocabulary, reading",ru:"Грамматика, словарь, чтение",de:"Grammatik, Wortschatz, Lesen",zh:"语法、词汇、阅读",tr:"Dilbilgisi, kelime, okuma"},
  foreign:{uz:"Leksika va umumiy qoidalar",en:"Vocabulary and general rules",ru:"Лексика и общие правила",de:"Wortschatz und allgemeine Regeln",zh:"词汇与通用规则",tr:"Kelime bilgisi ve genel kurallar"},
  russian:{uz:"Grammatika, lug‘at, matn",en:"Grammar, vocabulary, reading",ru:"Грамматика, словарь, чтение",de:"Grammatik, Wortschatz, Lesen",zh:"语法、词汇、阅读",tr:"Dilbilgisi, kelime, okuma"},
  german:{uz:"Grammatika, lug‘at, matn",en:"Grammar, vocabulary, reading",ru:"Грамматика, словарь, чтение",de:"Grammatik, Wortschatz, Lesen",zh:"语法、词汇、阅读",tr:"Dilbilgisi, kelime, okuma"},
  chinese:{uz:"Pinyin, lug‘at, matn",en:"Pinyin, vocabulary, reading",ru:"Пиньинь, словарь, чтение",de:"Pinyin, Wortschatz, Lesen",zh:"拼音、词汇、阅读",tr:"Pinyin, kelime, okuma"},
  turkish:{uz:"Grammatika, lug‘at, matn",en:"Grammar, vocabulary, reading",ru:"Грамматика, словарь, чтение",de:"Grammatik, Wortschatz, Lesen",zh:"语法、词汇、阅读",tr:"Dilbilgisi, kelime, okuma"},
  iq:{uz:"Mantiq, ketma-ketlik, naqsh",en:"Logic, sequence, pattern",ru:"Логика, последовательность, шаблон",de:"Logik, Reihenfolge, Muster",zh:"逻辑、序列、模式",tr:"Mantık, sıra, desen"}
};

const questionBank = {
  "math": [
    {
      "question": "Agar x^2-5x+6=0 bo'lsa, x^3-9x^2+26x ning qiymatlari ko'paytmasi nechaga teng?",
      "options": [
        "0",
        "8",
        "16",
        "32"
      ],
      "answer": 2
    },
    {
      "question": "f(x)=2x^2-3x+1 funksiyaning minimum qiymati?",
      "options": [
        "-1/8",
        "-1/4",
        "0",
        "1/8"
      ],
      "answer": 0
    },
    {
      "question": "C(8,3)+C(8,5) yig'indisi nechaga teng?",
      "options": [
        "56",
        "84",
        "112",
        "168"
      ],
      "answer": 2
    },
    {
      "question": "log2(x-1)+log2(x-3)=3 tenglamaning yechimi?",
      "options": [
        "4",
        "5",
        "1+√17",
        "(4+√20)/2"
      ],
      "answer": 1
    },
    {
      "question": "Geometrik progressiyada b1=3, q=2 bo'lsa, dastlabki 5 had yig'indisi?",
      "options": [
        "63",
        "93",
        "96",
        "48"
      ],
      "answer": 1
    },
    {
      "question": "sin x = 3/5 va x o'tkir bo'lsa, cos2x=?",
      "options": [
        "7/25",
        "-7/25",
        "16/25",
        "-16/25"
      ],
      "answer": 1
    },
    {
      "question": "x+y=7, xy=10 bo'lsa, x^2+y^2 nechaga teng?",
      "options": [
        "29",
        "39",
        "49",
        "59"
      ],
      "answer": 0
    },
    {
      "question": "2^x * 4^(x-1)=32 tenglamani yeching.",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "answer": 0
    },
    {
      "question": "Radiusi 6 bo'lgan aylananing uzunligi?",
      "options": [
        "12π",
        "24π",
        "36π",
        "72π"
      ],
      "answer": 1
    },
    {
      "question": "Arifmetik progressiyada a1=5, d=4. a10 nechaga teng?",
      "options": [
        "37",
        "39",
        "41",
        "45"
      ],
      "answer": 2
    }
  ],
  "mother": [
    {
      "question": "Qaysi qatorda faqat yasama so'zlar berilgan?",
      "options": [
        "bilimdon, paxtazor, serhosil",
        "kitob, qalam, daftar",
        "tez, sekin, oz",
        "uy, yo'l, tog'"
      ],
      "answer": 0
    },
    {
      "question": "Qaysi gapda undalma qo'llangan?",
      "options": [
        "Bugun havo juda issiq.",
        "Aziz do'stim, mehnat qil.",
        "Men kitob o'qidim.",
        "U kecha kelgan edi."
      ],
      "answer": 1
    },
    {
      "question": "Qaysi variantda imlo xatosi YO'Q?",
      "options": [
        "xaqiqat",
        "ta'lim",
        "mashg'ulotlarimz",
        "insonparvarlikk"
      ],
      "answer": 1
    },
    {
      "question": "Bog'lovchisiz qo'shma gapni aniqlang.",
      "options": [
        "Yomg'ir yog'di va havo sovidi.",
        "Quyosh botdi, osmon qoraydi.",
        "U keldi, chunki chaqirishdi.",
        "Goh kuladi, goh yig'laydi."
      ],
      "answer": 1
    },
    {
      "question": "Qaysi gapda ravish holi qatnashgan?",
      "options": [
        "U kitobni oldi.",
        "Talaba diqqat bilan tingladi.",
        "Bahor fasli keldi.",
        "Men ukamni ko'rdim."
      ],
      "answer": 1
    },
    {
      "question": "Ko'chirma gap to'g'ri berilgan qatorni toping.",
      "options": [
        "U dedi men kelaman.",
        "U: 'Men kelaman', dedi.",
        "U dedi: 'Men kelaman'.",
        "U 'men kelaman' dedi:"
      ],
      "answer": 2
    },
    {
      "question": "Qaysi qatorda sifat darajalari to'g'ri ketma-ketlikda berilgan?",
      "options": [
        "oddiy, orttirma, qiyosiy",
        "qiyosiy, oddiy, orttirma",
        "orttirma, oddiy, qiyosiy",
        "oddiy, qiyosiy, orttirma"
      ],
      "answer": 3
    },
    {
      "question": "Fe'lning orttirma nisbat shakli berilgan qatorni toping.",
      "options": [
        "yozildi",
        "yozdirdi",
        "yozishdi",
        "yozar edi"
      ],
      "answer": 1
    },
    {
      "question": "Qaysi uslubga xos birlik: 'mazkur qaror ijrosi nazoratga olinsin'?",
      "options": [
        "badiiy",
        "rasmiy-idoraviy",
        "publitsistik",
        "so'zlashuv"
      ],
      "answer": 1
    },
    {
      "question": "So'z birikmasi berilgan qatorni toping.",
      "options": [
        "oq qush",
        "aka-uka",
        "ota-onalar",
        "borib keldi"
      ],
      "answer": 0
    }
  ],
  "literature": [
    {
      "question": "Abdulla Qodiriyning 'O'tkan kunlar' romanidagi bosh qahramon juftligini toping.",
      "options": [
        "Otabek va Kumush",
        "Anvar va Ra'no",
        "Farhod va Shirin",
        "Kuntug'mish va Xolbeka"
      ],
      "answer": 0
    },
    {
      "question": "'Kecha va kunduz' romani muallifi kim?",
      "options": [
        "Cho'lpon",
        "Oybek",
        "G'afur G'ulom",
        "Hamid Olimjon"
      ],
      "answer": 0
    },
    {
      "question": "Alisher Navoiyning 'Xamsa'siga kirmaydigan asar qaysi?",
      "options": [
        "Hayrat ul-abror",
        "Sab'ai sayyor",
        "Saddi Iskandariy",
        "Mahbub ul-qulub"
      ],
      "answer": 3
    },
    {
      "question": "Qaysi asarda jadidchilik ruhiyati yaqqol aks etgan?",
      "options": [
        "O'tkan kunlar",
        "Mehrobdan chayon",
        "Kecha va kunduz",
        "Shum bola"
      ],
      "answer": 2
    },
    {
      "question": "'Shum bola' asari qaysi janrga mansub?",
      "options": [
        "roman",
        "qissa",
        "doston",
        "drama"
      ],
      "answer": 1
    },
    {
      "question": "Hamid Olimjon qalamiga mansub asarni toping.",
      "options": [
        "Semurg'",
        "Muqanna",
        "Qutlug' qon",
        "Sarob"
      ],
      "answer": 1
    },
    {
      "question": "'Qutlug' qon' asari muallifi kim?",
      "options": [
        "Oybek",
        "Cho'lpon",
        "Abdulla Qahhor",
        "Said Ahmad"
      ],
      "answer": 0
    },
    {
      "question": "Aruz vaznida yozilgan klassik she'riyat namunalarining asosiy belgisi?",
      "options": [
        "bo'g'inlar soni qat'iyligi",
        "hijolarning sifatiga tayanish",
        "erkin qofiya",
        "faqat xalqona ohang"
      ],
      "answer": 1
    },
    {
      "question": "Boburning mashhur asari qaysi?",
      "options": [
        "Boburnoma",
        "Shajarayi turk",
        "Muhokamat ul-lug'atayn",
        "Devoni hikmat"
      ],
      "answer": 0
    },
    {
      "question": "Tragik qahramon tushunchasiga mos javobni toping.",
      "options": [
        "faqat kulgili holatdagi obraz",
        "ichki ziddiyat va fojeali qismat sohibi",
        "yordamchi obraz",
        "manzara tasviri"
      ],
      "answer": 1
    }
  ],
  "chemistry": [
    {
      "question": "2 mol Na metall suv bilan to'liq reaksiyaga kirishsa, necha mol H2 ajraladi?",
      "options": [
        "0.5",
        "1",
        "2",
        "4"
      ],
      "answer": 1
    },
    {
      "question": "Molyar massasi 98 g/mol bo'lgan modda qaysi?",
      "options": [
        "H2SO4",
        "HNO3",
        "CaCO3",
        "Na2SO4"
      ],
      "answer": 0
    },
    {
      "question": "pH<7 bo'lsa eritma qanday muhitga ega?",
      "options": [
        "ishqoriy",
        "neytral",
        "kislotali",
        "amfoter"
      ],
      "answer": 2
    },
    {
      "question": "Qaysi moddada ion bog'lanish ustun?",
      "options": [
        "H2O",
        "NaCl",
        "CO2",
        "Cl2"
      ],
      "answer": 1
    },
    {
      "question": "Avogadro soniga teng zarrachalar nechta molni bildiradi?",
      "options": [
        "0.5 mol",
        "1 mol",
        "2 mol",
        "10 mol"
      ],
      "answer": 1
    },
    {
      "question": "Oksidlanish darajasi H2SO4 da oltingugurtniki nechiga teng?",
      "options": [
        "+4",
        "+5",
        "+6",
        "+2"
      ],
      "answer": 2
    },
    {
      "question": "Qaysi modda indikator fenolftaleinni malina rangga kiritadi?",
      "options": [
        "HCl",
        "NaOH",
        "NaCl",
        "H2SO4"
      ],
      "answer": 1
    },
    {
      "question": "Normal sharoitda 22.4 L gaz necha molga teng?",
      "options": [
        "0.5",
        "1",
        "2",
        "22.4"
      ],
      "answer": 1
    },
    {
      "question": "CaCO3 qizdirilganda qanday mahsulotlar hosil bo'ladi?",
      "options": [
        "Ca va CO3",
        "CaO va CO2",
        "Ca(OH)2 va CO2",
        "CaO va O2"
      ],
      "answer": 1
    },
    {
      "question": "Katalizator reaksiyada qanday rol o'ynaydi?",
      "options": [
        "mahsulot massasini oshiradi",
        "reaksiya tezligini o'zgartiradi",
        "har doim o'zi sarflanadi",
        "muvozanatni butunlay yo'q qiladi"
      ],
      "answer": 1
    }
  ],
  "physics": [
    {
      "question": "Massasi 2 kg jism 3 m/s^2 tezlanish bilan harakat qilsa, kuch?",
      "options": [
        "1.5 N",
        "5 N",
        "6 N",
        "9 N"
      ],
      "answer": 2
    },
    {
      "question": "Tezlik 20 m/s dan 0 ga 4 s da kamaydi. Tezlanish?",
      "options": [
        "5 m/s^2",
        "-5 m/s^2",
        "80 m/s^2",
        "-80 m/s^2"
      ],
      "answer": 1
    },
    {
      "question": "Elektr zaryad birligi nima?",
      "options": [
        "Volt",
        "Vatt",
        "Kulon",
        "Om"
      ],
      "answer": 2
    },
    {
      "question": "Ohm qonuni formulasi qaysi?",
      "options": [
        "P=UI",
        "I=U/R",
        "A=Fs",
        "F=ma"
      ],
      "answer": 1
    },
    {
      "question": "Jismning potensial energiyasi formulasi?",
      "options": [
        "mv",
        "mgh",
        "ma",
        "ρgh"
      ],
      "answer": 1
    },
    {
      "question": "Yorug'lik vakuumdagi tezligi?",
      "options": [
        "3·10^6",
        "3·10^8",
        "3·10^5",
        "3·10^7"
      ],
      "answer": 1
    },
    {
      "question": "Chastota 50 Hz bo'lsa, davr T nechaga teng?",
      "options": [
        "0.2 s",
        "0.02 s",
        "2 s",
        "20 s"
      ],
      "answer": 1
    },
    {
      "question": "Ko'zgu formulasi qaysi?",
      "options": [
        "1/F=1/d+1/f",
        "F=ma",
        "U=IR",
        "pV=nRT"
      ],
      "answer": 0
    },
    {
      "question": "Bosimning SI birligi?",
      "options": [
        "Joul",
        "Pascal",
        "Nyuton",
        "Vatt"
      ],
      "answer": 1
    },
    {
      "question": "Impuls formulasi?",
      "options": [
        "p=mv",
        "p=m/g",
        "p=F/S",
        "p=qU"
      ],
      "answer": 0
    }
  ],
  "geography": [
    {
      "question": "Eng katta okean qaysi?",
      "options": [
        "Atlantika",
        "Hind",
        "Tinch",
        "Shimoliy Muz"
      ],
      "answer": 2
    },
    {
      "question": "Musson shamollari asosan nimaga bog'liq?",
      "options": [
        "Yer aylanishiga",
        "quruqlik va suvning turlicha qizishiga",
        "vulqonlarga",
        "faqat tog'larga"
      ],
      "answer": 1
    },
    {
      "question": "Aholi zichligi eng yuqori tushuncha qaysi formula bilan topiladi?",
      "options": [
        "aholi/masofa",
        "aholi/maydon",
        "maydon/aholi",
        "tug'ilish-o'lim"
      ],
      "answer": 1
    },
    {
      "question": "O'zbekistonning iqlimi asosan qaysi turga kiradi?",
      "options": [
        "ekvatorial",
        "subtropik dengiz",
        "keskin kontinental",
        "musson"
      ],
      "answer": 2
    },
    {
      "question": "Qaysi materikda daryo yo'q deyarli?",
      "options": [
        "Osiyo",
        "Afrika",
        "Antarktida",
        "Yevropa"
      ],
      "answer": 2
    },
    {
      "question": "Geografik kenglik nimani bildiradi?",
      "options": [
        "Greenwichdan sharq-g'arb masofa",
        "ekvatordan shimol-janub burchak masofasi",
        "balandlik",
        "chuqurlik"
      ],
      "answer": 1
    },
    {
      "question": "Neft eksport qiluvchi davlatlar uyushmasi qaysi?",
      "options": [
        "NATO",
        "OPEC",
        "UNESCO",
        "ASEAN"
      ],
      "answer": 1
    },
    {
      "question": "Eng ko'p aholi yashovchi davlatlar juftligi qaysi?",
      "options": [
        "AQSH va Braziliya",
        "Xitoy va Hindiston",
        "Rossiya va Kanada",
        "Yaponiya va Germaniya"
      ],
      "answer": 1
    },
    {
      "question": "Tropik cho'llarning shakllanish sababi ko'proq nimaga bog'liq?",
      "options": [
        "nam shamollar",
        "yuqori bosim va quruq havo massalari",
        "muzliklar",
        "daryo ko'pligi"
      ],
      "answer": 1
    },
    {
      "question": "Kartadagi 1:100000 masshtab nimani anglatadi?",
      "options": [
        "1 sm da 1 km",
        "1 sm da 100 km",
        "1 sm da 100 m",
        "1 sm da 10 km"
      ],
      "answer": 0
    }
  ],
  "history": [
    {
      "question": "Temuriylar davrida Samarqandni ilm markaziga aylantirgan hukmdor kim?",
      "options": [
        "Amir Temur",
        "Ulug'bek",
        "Husayn Boyqaro",
        "Bobur"
      ],
      "answer": 1
    },
    {
      "question": "Jadidchilik harakatining asosiy maqsadlaridan biri nima edi?",
      "options": [
        "eski tuzumni kuchaytirish",
        "ta'lim va jamiyatni isloh qilish",
        "faqat harbiy islohot",
        "sanoatni to'xtatish"
      ],
      "answer": 1
    },
    {
      "question": "Buxoro amirligi Rossiya protektoratiga qachon aylangan?",
      "options": [
        "1865",
        "1868",
        "1873",
        "1885"
      ],
      "answer": 1
    },
    {
      "question": "Ikkinchi jahon urushi qaysi yillarda bo'lgan?",
      "options": [
        "1914-1918",
        "1939-1945",
        "1941-1947",
        "1929-1936"
      ],
      "answer": 1
    },
    {
      "question": "Turkiston Muxtoriyati qayerda e'lon qilingan?",
      "options": [
        "Toshkentda",
        "Qo'qonda",
        "Samarqandda",
        "Buxoroda"
      ],
      "answer": 1
    },
    {
      "question": "Buyuk ipak yo'lining ahamiyati nimada edi?",
      "options": [
        "faqat harbiy yurishlar",
        "sivilizatsiyalararo savdo va madaniy aloqalar",
        "faqat diniy ziyorat",
        "faqat oltin tashish"
      ],
      "answer": 1
    },
    {
      "question": "AQSH mustaqillik deklaratsiyasi qachon qabul qilingan?",
      "options": [
        "1776",
        "1789",
        "1812",
        "1756"
      ],
      "answer": 0
    },
    {
      "question": "Fransuz inqilobining ramziy boshlanishi bo'lgan voqea?",
      "options": [
        "Versal shartnomasi",
        "Bastiliya qamal qilinishi",
        "Napoleon toj kiyishi",
        "Vena kongressi"
      ],
      "answer": 1
    },
    {
      "question": "Qadimgi Misrda yozuv turi qanday atalgan?",
      "options": [
        "klinopis",
        "ieroglif",
        "lotin",
        "runik"
      ],
      "answer": 1
    },
    {
      "question": "Mustaqil O'zbekiston Konstitutsiyasi qachon qabul qilingan?",
      "options": [
        "1991-yil 1-sentabr",
        "1992-yil 8-dekabr",
        "1993-yil 1-yanvar",
        "1995-yil 9-may"
      ],
      "answer": 1
    }
  ],
  "it": [
    {
      "question": "IP manzilning IPv4 formati necha bitdan iborat?",
      "options": [
        "16",
        "32",
        "64",
        "128"
      ],
      "answer": 1
    },
    {
      "question": "Qaysi biri ma'lumotlar bazasida so'rov tili?",
      "options": [
        "HTML",
        "SQL",
        "CSS",
        "HTTP"
      ],
      "answer": 1
    },
    {
      "question": "Algoritmning vaqt murakkabligi O(log n) bo'lsa, odatda qaysi usulga xos?",
      "options": [
        "chiziqli qidiruv",
        "ikkilik qidiruv",
        "bubble sort",
        "to'liq ko'rib chiqish"
      ],
      "answer": 1
    },
    {
      "question": "HTTPS nimani qo'shimcha ta'minlaydi?",
      "options": [
        "faqat tezlik",
        "shifrlash va xavfsizlik",
        "faqat dizayn",
        "hosting"
      ],
      "answer": 1
    },
    {
      "question": "RAM xotira qanday xususiyatga ega?",
      "options": [
        "doimiy saqlaydi",
        "uchuvchi xotira",
        "faqat o'qish uchun",
        "tarmoq qurilmasi"
      ],
      "answer": 1
    },
    {
      "question": "Git'dagi 'commit' nimani bildiradi?",
      "options": [
        "faylni o'chirish",
        "o'zgarishlarni tarixga yozish",
        "internetga ulanish",
        "kodni kompilyatsiya qilish"
      ],
      "answer": 1
    },
    {
      "question": "Qaysi ma'lumotlar tuzilmasi FIFO tamoyili bilan ishlaydi?",
      "options": [
        "stack",
        "queue",
        "tree",
        "graph"
      ],
      "answer": 1
    },
    {
      "question": "Python'da ro'yxat turi qaysi?",
      "options": [
        "tuple",
        "list",
        "set",
        "dict"
      ],
      "answer": 1
    },
    {
      "question": "OSI modelining transport qatlami bilan bog'liq protokol qaysi?",
      "options": [
        "TCP",
        "IP",
        "DNS",
        "ARP"
      ],
      "answer": 0
    },
    {
      "question": "Phishing nima?",
      "options": [
        "tarmoq kabeli turi",
        "foydalanuvchi ma'lumotini aldab olish usuli",
        "virusni o'chirish",
        "grafik karta xatosi"
      ],
      "answer": 1
    }
  ],
  "biology": [
    {
      "question": "DNK ning asosiy monomeri nima?",
      "options": [
        "aminokislota",
        "nukleotid",
        "glukoza",
        "yog' kislota"
      ],
      "answer": 1
    },
    {
      "question": "Mitoz natijasida nechta hujayra hosil bo'ladi?",
      "options": [
        "1",
        "2",
        "4",
        "8"
      ],
      "answer": 1
    },
    {
      "question": "Fotosintez asosan qaysi organoidda kechadi?",
      "options": [
        "ribosoma",
        "mitoxondriya",
        "xloroplast",
        "lizosoma"
      ],
      "answer": 2
    },
    {
      "question": "Odamda qonning kislorod tashuvchi qismi nima?",
      "options": [
        "leykotsit",
        "gemoglobin",
        "plazma",
        "trombotsit"
      ],
      "answer": 1
    },
    {
      "question": "Genotip Aa x Aa chatishtirilsa, retsessiv fenotip ehtimoli?",
      "options": [
        "1/4",
        "1/2",
        "3/4",
        "1"
      ],
      "answer": 0
    },
    {
      "question": "Ekologik tizimda produsentlar kimlar?",
      "options": [
        "yirtqichlar",
        "o'simliklar",
        "zamburug'lar",
        "parazitlar"
      ],
      "answer": 1
    },
    {
      "question": "Nerv hujayrasi qanday ataladi?",
      "options": [
        "nefron",
        "neyron",
        "osteon",
        "alveola"
      ],
      "answer": 1
    },
    {
      "question": "Fermentlarning asosiy vazifasi nima?",
      "options": [
        "DNK saqlash",
        "reaksiyalarni tezlatish",
        "kislorod tashish",
        "energiya zaxiralash"
      ],
      "answer": 1
    },
    {
      "question": "Buyrakning funksional birligi?",
      "options": [
        "alveola",
        "akson",
        "nefron",
        "villus"
      ],
      "answer": 2
    },
    {
      "question": "Qaysi vitamin yetishmasa raxit kuzatiladi?",
      "options": [
        "A",
        "C",
        "D",
        "K"
      ],
      "answer": 2
    }
  ],
  "economics": [
    {
      "question": "Inflyatsiya nimani anglatadi?",
      "options": [
        "ishsizlik kamayishi",
        "narxlar umumiy darajasining oshishi",
        "eksport kamayishi",
        "soliqning bekor bo'lishi"
      ],
      "answer": 1
    },
    {
      "question": "Talab qonuniga ko'ra, boshqa omillar o'zgarmasa narx oshsa...",
      "options": [
        "talab oshadi",
        "talab kamayadi",
        "taklif kamayadi",
        "daromad oshadi"
      ],
      "answer": 1
    },
    {
      "question": "YIM nimani bildiradi?",
      "options": [
        "yillik import miqdori",
        "yalpi ichki mahsulot",
        "yuridik idoralar markazi",
        "yagona iqtisodiy mexanizm"
      ],
      "answer": 1
    },
    {
      "question": "Markaziy bankning asosiy vazifalaridan biri?",
      "options": [
        "kiyim ishlab chiqarish",
        "pul-kredit siyosatini yuritish",
        "sud ishlarini ko'rish",
        "yo'l qurish"
      ],
      "answer": 1
    },
    {
      "question": "Bozor muvozanati qachon yuz beradi?",
      "options": [
        "talab > taklif",
        "taklif > talab",
        "talab = taklif",
        "narx = xarajat"
      ],
      "answer": 2
    },
    {
      "question": "Soliq stavkasi oshsa, boshqa sharoit teng bo'lsa iste'molchi xarajati odatda...",
      "options": [
        "oshadi",
        "kamayadi",
        "o'zgarmaydi",
        "nol bo'ladi"
      ],
      "answer": 1
    },
    {
      "question": "Monopoliya nima?",
      "options": [
        "ko'p sotuvchi bozori",
        "bitta ustun sotuvchi hukmronligi",
        "faqat qishloq xo'jaligi",
        "faqat davlat budjeti"
      ],
      "answer": 1
    },
    {
      "question": "Nominal va real ish haqi farqi nimada?",
      "options": [
        "nominal – inflyatsiya hisobga olinmagan",
        "real – faqat dollarda",
        "nominal – soliqsiz",
        "real – doim kattaroq"
      ],
      "answer": 0
    },
    {
      "question": "Fiskal siyosat asosan kim tomonidan amalga oshiriladi?",
      "options": [
        "sud",
        "hukumat",
        "xususiy firma",
        "bank mijozi"
      ],
      "answer": 1
    },
    {
      "question": "Diversifikatsiya nimaga xizmat qiladi?",
      "options": [
        "xatarni kamaytirishga",
        "inflyatsiyani oshirishga",
        "soliqni yo'qotishga",
        "monopoliyani kuchaytirishga"
      ],
      "answer": 0
    }
  ],
  "law": [
    {
      "question": "Konstitutsiya qanday huquqiy kuchga ega?",
      "options": [
        "oddiy qonundan past",
        "eng oliy yuridik kuchga ega",
        "faqat tavsiya",
        "faqat sudlarga tegishli"
      ],
      "answer": 1
    },
    {
      "question": "Voyaga yetmagan shaxs yoshi O'zbekistonda odatda necha yoshgacha?",
      "options": [
        "14",
        "16",
        "18",
        "21"
      ],
      "answer": 2
    },
    {
      "question": "Jinoyat va ma'muriy huquqbuzarlikning asosiy farqi nima?",
      "options": [
        "nomida",
        "ijtimoiy xavflilik darajasida",
        "faqat jarimada",
        "farqi yo'q"
      ],
      "answer": 1
    },
    {
      "question": "Prezumpsiya tushunchasi qaysi javobda to'g'ri?",
      "options": [
        "avval aybdor deb hisoblash",
        "sud qarorigacha aybsiz deb hisoblash",
        "faqat guvohning fikri",
        "faqat advokat huquqi"
      ],
      "answer": 1
    },
    {
      "question": "Mehnat shartnomasi nimani belgilaydi?",
      "options": [
        "faqat dam olish kunini",
        "ish beruvchi va xodim huquq-majburiyatlarini",
        "faqat ish haqini",
        "faqat ta'tilni"
      ],
      "answer": 1
    },
    {
      "question": "Huquqiy davlatning belgisi?",
      "options": [
        "qonundan ustun mansabdor",
        "qonun ustuvorligi",
        "faqat kuch ishlatish",
        "saylovsiz boshqaruv"
      ],
      "answer": 1
    },
    {
      "question": "Fuqarolik huquqida mulk huquqi nimalarni o'z ichiga oladi?",
      "options": [
        "egalik, foydalanish, tasarruf",
        "faqat sotish",
        "faqat foydalanish",
        "faqat meros"
      ],
      "answer": 0
    },
    {
      "question": "Sud hokimiyatining vazifasi nima?",
      "options": [
        "qonun yozish",
        "qonun ijrosini tashkil etish",
        "nizolarni adolatli ko'rib chiqish",
        "soliq yig'ish"
      ],
      "answer": 2
    },
    {
      "question": "Referendum nima?",
      "options": [
        "sud majlisi",
        "xalqning bevosita ovoz berishi",
        "parlament komissiyasi",
        "prokuror qarori"
      ],
      "answer": 1
    },
    {
      "question": "Shaxsiy ma'lumotlarni himoya qilish qaysi huquqqa yaqin?",
      "options": [
        "mulk huquqi",
        "shaxsiy daxlsizlik",
        "harbiy majburiyat",
        "transport huquqi"
      ],
      "answer": 1
    }
  ],
  "english": [
    {
      "question": "Choose the correct option: If he ___ earlier, he would have caught the train.",
      "options": [
        "came",
        "had come",
        "comes",
        "was coming"
      ],
      "answer": 1
    },
    {
      "question": "Find the synonym of 'crucial'.",
      "options": [
        "minor",
        "essential",
        "ordinary",
        "hidden"
      ],
      "answer": 1
    },
    {
      "question": "Choose the correct passive form: People speak English all over the world.",
      "options": [
        "English is spoken all over the world.",
        "English was spoken all over the world.",
        "English speaks all over the world.",
        "English has spoken all over the world."
      ],
      "answer": 0
    },
    {
      "question": "Which sentence is grammatically correct?",
      "options": [
        "She suggested to go home.",
        "She suggested going home.",
        "She suggested go home.",
        "She suggested that go home."
      ],
      "answer": 1
    },
    {
      "question": "Choose the correct article: He is ___ honest man.",
      "options": [
        "a",
        "an",
        "the",
        "no article"
      ],
      "answer": 1
    },
    {
      "question": "Select the correctly reported speech: Tom said, 'I am tired.'",
      "options": [
        "Tom said that I am tired.",
        "Tom said that he was tired.",
        "Tom said he is tired.",
        "Tom told that he tired."
      ],
      "answer": 1
    },
    {
      "question": "Find the antonym of 'scarce'.",
      "options": [
        "rare",
        "limited",
        "abundant",
        "insufficient"
      ],
      "answer": 2
    },
    {
      "question": "Choose the correct conditional: If water reaches 100°C, it ___.",
      "options": [
        "boiled",
        "boils",
        "will boil",
        "would boil"
      ],
      "answer": 1
    },
    {
      "question": "Which word is closest in meaning to 'maintain'?",
      "options": [
        "neglect",
        "preserve",
        "ignore",
        "separate"
      ],
      "answer": 1
    },
    {
      "question": "Choose the correct sentence.",
      "options": [
        "Neither of the answers are correct.",
        "Neither of the answers is correct.",
        "Neither of the answer are correct.",
        "Neither answer are correct."
      ],
      "answer": 1
    }
  ],
  "foreign": [
    {
      "question": "Nemis tilida 'Ich ... Student.' gapini to'ldiring.",
      "options": [
        "bist",
        "bin",
        "ist",
        "seid"
      ],
      "answer": 1
    },
    {
      "question": "Rus tilida to'g'ri variantni tanlang: 'Я ... в университет каждый день.'",
      "options": [
        "ходить",
        "хожу",
        "ходишь",
        "ходят"
      ],
      "answer": 1
    },
    {
      "question": "Xitoy tilida '你好' nimani anglatadi?",
      "options": [
        "xayr",
        "rahmat",
        "salom",
        "kechirasiz"
      ],
      "answer": 2
    },
    {
      "question": "Nemis tilida ko'plik artikli odatda qaysi?",
      "options": [
        "der",
        "die",
        "das",
        "ein"
      ],
      "answer": 1
    },
    {
      "question": "Rus tilida o'tgan zamon fe'li ko'pincha nimaga moslashadi?",
      "options": [
        "faqat shaxsga",
        "rod va songa",
        "faqat kelishikka",
        "faqat zamonga"
      ],
      "answer": 1
    },
    {
      "question": "Xitoy tilida pinyin nima uchun kerak?",
      "options": [
        "faqat tarjima uchun",
        "talaffuzni ko'rsatish uchun",
        "faqat yozuv bezagi uchun",
        "faqat grammatik jadval uchun"
      ],
      "answer": 1
    },
    {
      "question": "Nemis tilida 'haben' fe'lining 'wir' shakli?",
      "options": [
        "habt",
        "haben",
        "hat",
        "hast"
      ],
      "answer": 1
    },
    {
      "question": "Rus tilida 'книга' so'zining ko'pligi?",
      "options": [
        "книгу",
        "книги",
        "книгой",
        "книгах"
      ],
      "answer": 1
    },
    {
      "question": "Qaysi javob chet til o'rganishda faol lug'atni oshirishga eng foydali?",
      "options": [
        "faqat qoidani yodlash",
        "so'zlarni kontekstda qo'llash",
        "faqat tarjimani o'qish",
        "faqat test yechish"
      ],
      "answer": 1
    },
    {
      "question": "Nemis tilida 'nicht' odatda nimani inkor qiladi?",
      "options": [
        "faqat otni",
        "gap yoki bo'lakni",
        "faqat fe'lni emas",
        "faqat ravishni"
      ],
      "answer": 1
    }
  ],
  "russian": [
    {"question":"Rus tilida to‘g‘ri variantni tanlang: ‘Я ___ в университет каждый день.’","options":["ходить","хожу","ходишь","ходят"],"answer":1},
    {"question":"‘Мы ___ студенты.’ gapini to‘ldiring.","options":["есть","—","будет","был"],"answer":1},
    {"question":"‘книга’ so‘zining ko‘plik shakli qaysi?","options":["книгу","книги","книгой","книгах"],"answer":1},
    {"question":"Rus tilida sifat odatda nimaga moslashadi?","options":["faqat zamonga","rod, son va kelishikka","faqat shaxsga","faqat fe‘lga"],"answer":1},
    {"question":"‘Я говорю ___-русски.’ gapidagi bo‘sh joyga nima tushadi?","options":["na","po","v","s"],"answer":1},
    {"question":"‘У меня ___ брат.’ to‘g‘ri variantni tanlang.","options":["есть","естью","быть","суть"],"answer":0},
    {"question":"Qaysi juftlik antonim hisoblanadi?","options":["большой — огромный","быстрый — скорый","высокий — низкий","умный — мудрый"],"answer":2},
    {"question":"Rus tilida o‘tgan zamon fe’li ko‘pincha nimaga moslashadi?","options":["rod va songa","faqat kelishikka","faqat shaxsga","faqat ravishga"],"answer":0},
    {"question":"‘завтра’ so‘zining ma’nosi qaysi?","options":["kecha","bugun","ertaga","doimo"],"answer":2},
    {"question":"‘Мы живём ___ Ташкенте.’ bo‘sh joyga nima tushadi?","options":["на","в","к","о"],"answer":1}
  ],
  "german": [
    {"question":"Nemis tilida ‘Ich ___ Student.’ gapini to‘ldiring.","options":["bist","bin","ist","seid"],"answer":1},
    {"question":"‘Wir ___ in Berlin.’ to‘g‘ri variantni tanlang.","options":["wohne","wohnst","wohnen","wohnt"],"answer":2},
    {"question":"Nemis tilida ko‘plik artikli odatda qaysi?","options":["der","die","das","ein"],"answer":1},
    {"question":"‘haben’ fe’lining ‘er/sie’ shakli qaysi?","options":["hast","habt","haben","hat"],"answer":3},
    {"question":"‘Das Buch ist ___ Tisch.’ gapida to‘g‘ri predlog qaysi?","options":["auf dem","in die","an den","zu der"],"answer":0},
    {"question":"Qaysi so‘z ‘katta’ ma’nosini beradi?","options":["klein","groß","kurz","langsam"],"answer":1},
    {"question":"Nemis tilida fe‘l ikkinchi o‘rinda kelishi asosan qaysi gapda?","options":["darak gapda","faqat savolda","buyruqda","hech qachon"],"answer":0},
    {"question":"‘nicht’ odatda nimani inkor qiladi?","options":["faqat otni","gap yoki bo‘lakni","faqat artiklni","faqat ko‘plikni"],"answer":1},
    {"question":"‘Ich komme ___ Türkei.’ bo‘sh joyga nima tushadi?","options":["aus der","in die","zu dem","an der"],"answer":0},
    {"question":"‘Montag’ qaysi ma’noni bildiradi?","options":["yakshanba","dushanba","seshanba","juma"],"answer":1}
  ],
  "chinese": [
    {"question":"Xitoy tilida ‘你好’ nimani anglatadi?","options":["xayr","rahmat","salom","kechirasiz"],"answer":2},
    {"question":"Pinyin nima uchun kerak?","options":["faqat bezak uchun","talaffuzni ko‘rsatish uchun","faqat tarjima uchun","faqat test uchun"],"answer":1},
    {"question":"‘谢谢’ so‘zining ma’nosi qaysi?","options":["iltimos","rahmat","salom","xayr"],"answer":1},
    {"question":"‘我’ ieroglifi qaysi ma’noni beradi?","options":["sen","u","biz","men"],"answer":3},
    {"question":"Mandarin tilida nechta asosiy ton bor?","options":["2","3","4","5"],"answer":2},
    {"question":"‘中国’ nimani bildiradi?","options":["xitoy","yaponiya","koreya","hindiston"],"answer":0},
    {"question":"‘你叫什么名字？’ savoli nimani anglatadi?","options":["Qayerdansan?","Necha yoshdasan?","Isming nima?","Nima qilyapsan?"],"answer":2},
    {"question":"Xitoy tilida sanash so‘zlari ko‘pincha nimada ishlatiladi?","options":["fe‘ldan oldin","son bilan ot orasida","faqat zamonda","faqat inkorda"],"answer":1},
    {"question":"‘老师’ so‘zining ma’nosi qaysi?","options":["o‘quvchi","doktor","o‘qituvchi","do‘st"],"answer":2},
    {"question":"‘再见’ nimani anglatadi?","options":["hayr","yaxshi","rahmat","kechirasiz"],"answer":0}
  ],
  "turkish": [
    {"question":"Turk tilida ‘Ben ___ öğrenciyim.’ gapini to‘ldiring.","options":["bir","birim","biri","ol"],"answer":0},
    {"question":"‘Merhaba’ so‘zining ma’nosi qaysi?","options":["rahmat","salom","xayr","iltimos"],"answer":1},
    {"question":"Turk tilida ko‘plik qo‘shimchasi ko‘pincha qaysi?","options":["-lar/-ler","-im/-ım","-da/-de","-yor"],"answer":0},
    {"question":"‘Biz ___ gidiyoruz.’ to‘g‘ri variantni tanlang.","options":["okula","okulda","okuldan","okulun"],"answer":0},
    {"question":"‘Kitap’ so‘zining ma’nosi qaysi?","options":["daftar","kitob","qalam","uy"],"answer":1},
    {"question":"Turk tilida hozirgi davom zamon qo‘shimchasi qaysi?","options":["-di","-miş","-yor","-acak"],"answer":2},
    {"question":"‘Teşekkür ederim’ nimani anglatadi?","options":["xush kelibsiz","rahmat","kechirasiz","yaxshi kech"],"answer":1},
    {"question":"‘Güzel’ so‘zi qaysi ma’noni beradi?","options":["katta","tez","chiroyli","sovuq"],"answer":2},
    {"question":"Turk tilida savol yuklamasi odatda qaysi shaklda keladi?","options":["mi/mı/mu/mü","ki/ku","da/de","lar/ler"],"answer":0},
    {"question":"‘Yarın’ so‘zining ma’nosi qaysi?","options":["kecha","bugun","ertaga","avval"],"answer":2}
  ],
  "iq": [
    {
      "question": "2, 6, 12, 20, 30, ? ketma-ketlikdagi keyingi sonni toping.",
      "options": [
        "36",
        "40",
        "42",
        "44"
      ],
      "answer": 2
    },
    {
      "question": "Barcha qizil shakllar aylana. Ba'zi aylana kattadir. Demak:",
      "options": [
        "Barcha katta shakllar qizil",
        "Ba'zi katta shakllar qizil bo'lishi mumkin",
        "Hech bir aylana qizil emas",
        "Barcha aylana katta"
      ],
      "answer": 1
    },
    {
      "question": "Soat 3:15 da soat strelkalari orasidagi kichik burchak necha gradus?",
      "options": [
        "0°",
        "7.5°",
        "15°",
        "22.5°"
      ],
      "answer": 1
    },
    {
      "question": "Agar KITOB → 21443 va BOT → 435 bo'lsa, TOK nima bo'lishi mumkin?",
      "options": [
        "542",
        "534",
        "354",
        "345"
      ],
      "answer": 0
    },
    {
      "question": "Bir qator: ▲ ■ ▲ ■ ▲ ? keyingi belgi qaysi?",
      "options": [
        "▲",
        "■",
        "●",
        "◆"
      ],
      "answer": 1
    },
    {
      "question": "5 ishchi ishni 12 kunda bitirsa, shu unum bilan 10 ishchi necha kunda bitiradi?",
      "options": [
        "24",
        "12",
        "6",
        "5"
      ],
      "answer": 2
    },
    {
      "question": "Bir oilada 2 ota, 2 o'g'il, 1 nabira bor, ammo jami 3 kishi. Qanday?",
      "options": [
        "xato berilgan",
        "bobo, ota, o'g'il",
        "ikki aka-uka va ota",
        "faqat egizaklar"
      ],
      "answer": 1
    },
    {
      "question": "Qaysi biri ortiqcha: kvadrat, uchburchak, doira, metr?",
      "options": [
        "kvadrat",
        "uchburchak",
        "doira",
        "metr"
      ],
      "answer": 3
    },
    {
      "question": "Agar barcha Z lar Y bo'lsa va barcha Y lar X bo'lsa, unda:",
      "options": [
        "ba'zi X lar Z emas",
        "barcha Z lar X",
        "barcha X lar Z",
        "hech bir Y X emas"
      ],
      "answer": 1
    },
    {
      "question": "3 ta kalitdan faqat bittasi eshikni ochadi. Eng ko'pi bilan nechta urinish kerak?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": 2
    }
  ]
};

questionBank.math.push(
  {question:"Agar |2x-3|+|x+1|=8 bo'lsa, x ning barcha mumkin bo'lgan qiymatlari yig'indisini toping.",options:["2","3","4","5"],answer:1},
  {question:"f(x)=x^2-4x+7 bo'lsa, f(x)+f(x+2) ifodaning eng kichik qiymati nechaga teng?",options:["8","9","10","11"],answer:2}
);
questionBank.mother.push(
  {question:"Qaysi gapda ajratilgan bo'lak qo'llangan?",options:["Men, albatta, boraman.","Kitobni esa ukam oldi.","Bahor keldi va gullar ochildi.","U juda tez yugurdi."],answer:1},
  {question:"Qaysi qatorda paronimlar berilgan?",options:["abadiy — abad","amal — omil","dars — daftar","sinf — xona"],answer:1}
);
questionBank.literature.push(
  {question:"Mumtoz adabiyotda 'talmeh' san'ati nimani anglatadi?",options:["Biror tarixiy yoki diniy voqeaga ishora qilish","So'zni aynan takrorlash","Faqat qofiyani kuchaytirish","Tabiat manzarasini berish"],answer:0},
  {question:"Qaysi asar qahramoni ichki ruhiy kolliziya orqali ochib beriladi?",options:["faqat hajviy obraz","psixologik roman qahramoni","ertak qahramoni","epizodik obraz"],answer:1}
);
questionBank.chemistry.push(
  {question:"0.5 mol Al to'liq HCl bilan reaksiyaga kirishganda normal sharoitda necha litr H2 ajraladi?",options:["8.4","16.8","22.4","33.6"],answer:1},
  {question:"25 g CaCO3 parchalanganda nazariy jihatdan necha gramm CO2 hosil bo'ladi? (Ar: Ca=40, C=12, O=16)",options:["5.5","8.8","11","13.2"],answer:2}
);
questionBank.physics.push(
  {question:"Massasi 0.5 kg jism 20 m balandlikdan tashlandi. Yerga urilish oldidan potensial energiyaning kamayishi nechaga teng? (g=10)",options:["50 J","75 J","100 J","125 J"],answer:2},
  {question:"Qarshiliklari 6 Ω va 3 Ω bo'lgan ikkita rezistor parallel ulanganda umumiy qarshilik nechaga teng?",options:["1 Ω","2 Ω","3 Ω","9 Ω"],answer:1}
);
questionBank.geography.push(
  {question:"Qaysi omil iqlimning kontinental bo'lishiga eng kuchli ta'sir ko'rsatadi?",options:["Okeanga yaqinlik","Materik ichkarisida joylashish","Ekvatorga yaqinlik","O'rmonlarning ko'pligi"],answer:1},
  {question:"Demografik o'tish modelida tug'ilish va o'lim yuqori, tabiiy o'sish past bo'lgan bosqich qaysi?",options:["1-bosqich","2-bosqich","3-bosqich","4-bosqich"],answer:0}
);

const translations = {
  uz: {
    brandSub: "Universitetga tayyorlov test platformasi",
    pillText: "Telegram admin monitoring bilan test tizimi",
    loginTitle: "Qiyin testlar bilan o'zingizni sinab ko'ring",
    loginDesc: "Har bir fan bo'yicha test, 5–11 sinf mavzulari, til tanlash va natijalarni ko'rish imkoniyati.",
    stat1: "fanlar",
    stat2: "savol har bir fan uchun",
    stat3: "har bir fan uchun vaqt",
    formTitle: "Kirish",
    formSub: "Salom, botimizga xush kelibsiz. Faqat ism va familya kiriting.",
    labelFirstName: "Ism",
    labelLastName: "Familya",
    enterBtn: "Davom etish",
    loginHint: "Tilni yuqoridagi tanlash tugmasidan almashtiring.",
    selectPill: "2-bosqich",
    subjectTitle: "Fanlarni tanlang",
    subjectDesc: "Barcha fanlar saqlanadi. Til fanlari ham alohida 10 tadan test bilan qo‘shildi.",
    welcomeText: "Foydalanuvchi:",
    materialsTitle: "Qisqa yo'nalishlar",
    testRuleTitle: "Qoidalar",
    topicsTitle: "5–11 sinf asosiy mavzular",
    topicsDesc: "Tanlangan fan uchun sinf bo‘yicha asosiy mavzular ko‘rinadi.",
    startTestBtn: "Testni boshlash",
    testPill: "3-bosqich",
    subjectCounterLabel: "Fanlar",
    timerLabel: "Vaqt",
    nextBtn: "Keyingi savol",
    finishBtn: "Yakunlash",
    leaveTestBtn: "Chiqish",
    resultPill: "Natija",
    resultTitle: "Test yakunlandi",
    resultDesc: "Natija quyida ko‘rsatilgan. Xohlasangiz qayta boshlang yoki chiqing.",
    restartBtn: "Qaytadan boshlash",
    exitBtn: "Chiqish",
    alertLogin: "Iltimos, ism va familyani kiriting.",
    alertSubject: "Kamida bitta fan tanlang.",
    chooseAnswer: "Avval javobni tanlang.",
    questionWord: "Savol",
    materialHint: "Tayyorlov mavzusi",
    gradeLabel: "Sinf",
    rules: [
      "Savollar aralash va qiyin tartibda chiqadi.",
      "Har tanlangan fan uchun 1 daqiqa beriladi.",
      "Variantlar har urinishda almashadi.",
      "Oxirida qayta boshlash va chiqish bor."
    ],
    userLabel: "Foydalanuvchi",
    subjectsLabel: "Tanlangan fanlar",
    scoreLabel: "To'g'ri javoblar",
    percentLabel: "Foiz",
    timeSpentLabel: "Sarflangan vaqt",
    attemptLabel: "Urinish ID",
    difficultyEasy: "Oson",
    difficultyMedium: "O‘rta",
    difficultyHard: "Qiyin",
    difficultyVeryHard: "Juda qiyin"
  },
  en: {
    brandSub: "University preparation test platform",
    pillText: "Test system with Telegram admin monitoring",
    loginTitle: "Challenge yourself with difficult tests",
    loginDesc: "Tests for every subject, grades 5–11 topic outlines, language selection, and result tracking.",
    stat1: "subjects",
    stat2: "questions per subject",
    stat3: "time per subject",
    formTitle: "Login",
    formSub: "Enter your first and last name. Results can also be sent to Telegram.",
    labelFirstName: "First name",
    labelLastName: "Last name",
    enterBtn: "Continue",
    loginHint: "Change the language using the selector above.",
    selectPill: "Step 2",
    subjectTitle: "Choose subjects",
    subjectDesc: "Choose subjects. The button appears only after selection. Tests are harder and mixed.",
    welcomeText: "User:",
    materialsTitle: "Quick focus",
    testRuleTitle: "Rules",
    topicsTitle: "Core topics for grades 5–11",
    topicsDesc: "Main school topics appear by grade for the selected subject.",
    startTestBtn: "Start test",
    testPill: "Step 3",
    subjectCounterLabel: "Subjects",
    timerLabel: "Time",
    nextBtn: "Next question",
    finishBtn: "Finish",
    leaveTestBtn: "Exit",
    resultPill: "Result",
    resultTitle: "Test completed",
    resultDesc: "Your summary is shown below. Restart or exit whenever you want.",
    restartBtn: "Start again",
    exitBtn: "Exit",
    alertLogin: "Please enter first and last name.",
    alertSubject: "Select at least one subject.",
    chooseAnswer: "Please choose an answer first.",
    questionWord: "Question",
    materialHint: "Prep topic",
    gradeLabel: "Grade",
    rules: [
      "Questions are mixed and harder.",
      "You get 1 minute for each selected subject.",
      "Options change order on every attempt.",
      "At the end you can restart or exit."
    ],
    userLabel: "User",
    subjectsLabel: "Selected subjects",
    scoreLabel: "Correct answers",
    percentLabel: "Percent",
    timeSpentLabel: "Time spent",
    attemptLabel: "Attempt ID",
    difficultyEasy: "Easy",
    difficultyMedium: "Medium",
    difficultyHard: "Hard",
    difficultyVeryHard: "Very hard"
  },
  ru: {
    brandSub: "Платформа подготовки к университетским тестам",
    pillText: "Система тестов с Telegram-мониторингом администратора",
    loginTitle: "Проверьте себя на сложных тестах",
    loginDesc: "Тесты по каждому предмету, темы 5–11 классов, выбор языка и просмотр результатов.",
    stat1: "предметов",
    stat2: "вопросов на предмет",
    stat3: "времени на предмет",
    formTitle: "Вход",
    formSub: "Введите имя и фамилию. Результаты можно отправлять в Telegram.",
    labelFirstName: "Имя",
    labelLastName: "Фамилия",
    enterBtn: "Продолжить",
    loginHint: "Смените язык через выпадающий список сверху.",
    selectPill: "Шаг 2",
    subjectTitle: "Выберите предметы",
    subjectDesc: "Выберите один или несколько предметов. Для каждого предмета будет сложный тест.",
    welcomeText: "Пользователь:",
    materialsTitle: "Краткий фокус",
    testRuleTitle: "Правила",
    topicsTitle: "Основные темы 5–11 классов",
    topicsDesc: "Для выбранного предмета показываются основные темы по классам.",
    startTestBtn: "Начать тест",
    testPill: "Шаг 3",
    subjectCounterLabel: "Предметы",
    timerLabel: "Время",
    nextBtn: "Следующий вопрос",
    finishBtn: "Завершить",
    leaveTestBtn: "Выход",
    resultPill: "Результат",
    resultTitle: "Тест завершён",
    resultDesc: "Итог показан ниже. Можно начать заново или выйти.",
    restartBtn: "Начать снова",
    exitBtn: "Выход",
    alertLogin: "Пожалуйста, введите имя и фамилию.",
    alertSubject: "Выберите хотя бы один предмет.",
    chooseAnswer: "Сначала выберите ответ.",
    questionWord: "Вопрос",
    materialHint: "Тема подготовки",
    gradeLabel: "Класс",
    rules: [
      "Вопросы по каждому предмету перемешиваются.",
      "На каждый выбранный предмет даётся 1 минута.",
      "Вопросы и варианты ответов каждый раз меняют порядок.",
      "В конце можно начать заново или выйти."
    ],
    userLabel: "Пользователь",
    subjectsLabel: "Выбранные предметы",
    scoreLabel: "Правильные ответы",
    percentLabel: "Процент",
    timeSpentLabel: "Потраченное время",
    attemptLabel: "ID попытки",
    difficultyEasy: "Лёгкий",
    difficultyMedium: "Средний",
    difficultyHard: "Сложный",
    difficultyVeryHard: "Очень сложный"
  },
  de: {
    brandSub: "Testplattform zur Universitätsvorbereitung",
    pillText: "Testsystem mit Telegram-Adminüberwachung",
    loginTitle: "Teste dich mit schwierigen Prüfungen",
    loginDesc: "Tests für jedes Fach, Themen der Klassen 5–11, Sprachauswahl und Ergebnisübersicht.",
    stat1: "Fächer",
    stat2: "Fragen pro Fach",
    stat3: "Zeit pro Fach",
    formTitle: "Anmeldung",
    formSub: "Gib nur Vorname und Nachname ein. Ergebnisse können an Telegram gesendet werden.",
    labelFirstName: "Vorname",
    labelLastName: "Nachname",
    enterBtn: "Weiter",
    loginHint: "Sprache oben im Dropdown auswählen.",
    selectPill: "Schritt 2",
    subjectTitle: "Fächer auswählen",
    subjectDesc: "Wähle ein oder mehrere Fächer. Für jedes Fach gibt es einen schwierigen Test.",
    welcomeText: "Benutzer:",
    materialsTitle: "Kurzfokus",
    testRuleTitle: "Regeln",
    topicsTitle: "Kernthemen der Klassen 5–11",
    topicsDesc: "Für das gewählte Fach werden Hauptthemen nach Klassen angezeigt.",
    startTestBtn: "Test starten",
    testPill: "Schritt 3",
    subjectCounterLabel: "Fächer",
    timerLabel: "Zeit",
    nextBtn: "Nächste Frage",
    finishBtn: "Beenden",
    leaveTestBtn: "Verlassen",
    resultPill: "Ergebnis",
    resultTitle: "Test beendet",
    resultDesc: "Die Zusammenfassung steht unten. Du kannst neu starten oder verlassen.",
    restartBtn: "Neu starten",
    exitBtn: "Verlassen",
    alertLogin: "Bitte Vorname und Nachname eingeben.",
    alertSubject: "Bitte mindestens ein Fach auswählen.",
    chooseAnswer: "Bitte zuerst eine Antwort wählen.",
    questionWord: "Frage",
    materialHint: "Vorbereitungsthema",
    gradeLabel: "Klasse",
    rules: [
      "Fragen werden für jedes Fach gemischt.",
      "Für jedes gewählte Fach gibt es 1 Minute.",
      "Fragen und Antwortoptionen erscheinen jedes Mal in neuer Reihenfolge.",
      "Am Ende kannst du neu starten oder verlassen."
    ],
    userLabel: "Benutzer",
    subjectsLabel: "Gewählte Fächer",
    scoreLabel: "Richtige Antworten",
    percentLabel: "Prozent",
    timeSpentLabel: "Benötigte Zeit",
    attemptLabel: "Versuchs-ID",
    difficultyEasy: "Leicht",
    difficultyMedium: "Mittel",
    difficultyHard: "Schwer",
    difficultyVeryHard: "Sehr schwer"
  },
  zh: {
    brandSub: "大学备考测试平台",
    pillText: "带 Telegram 管理监控的测试系统",
    loginTitle: "用高难度测试挑战自己",
    loginDesc: "每个学科都有测试，包含5到11年级主题、语言切换和结果查看。",
    stat1: "科目",
    stat2: "每科题目",
    stat3: "每科时间",
    formTitle: "登录",
    formSub: "请输入名字和姓氏。结果也可以发送到 Telegram。",
    labelFirstName: "名字",
    labelLastName: "姓氏",
    enterBtn: "继续",
    loginHint: "请使用上方下拉菜单切换语言。",
    selectPill: "第2步",
    subjectTitle: "选择科目",
    subjectDesc: "选择一个或多个科目。每个科目都有较难测试。",
    welcomeText: "用户：",
    materialsTitle: "简要方向",
    testRuleTitle: "规则",
    topicsTitle: "5至11年级核心主题",
    topicsDesc: "所选科目的主要学校主题将按年级显示。",
    startTestBtn: "开始测试",
    testPill: "第3步",
    subjectCounterLabel: "科目",
    timerLabel: "时间",
    nextBtn: "下一题",
    finishBtn: "完成",
    leaveTestBtn: "退出",
    resultPill: "结果",
    resultTitle: "测试结束",
    resultDesc: "结果显示在下方。你可以重新开始或退出。",
    restartBtn: "重新开始",
    exitBtn: "退出",
    alertLogin: "请输入名字和姓氏。",
    alertSubject: "请至少选择一个科目。",
    chooseAnswer: "请先选择一个答案。",
    questionWord: "题目",
    materialHint: "备考主题",
    gradeLabel: "年级",
    rules: [
      "每个科目的题目都会被打乱。",
      "每选择一个科目增加1分钟。",
      "题目和选项每次都会以新的顺序出现。",
      "结束后可以重新开始或退出。"
    ],
    userLabel: "用户",
    subjectsLabel: "已选科目",
    scoreLabel: "答对题数",
    percentLabel: "百分比",
    timeSpentLabel: "用时",
    attemptLabel: "尝试编号",
    difficultyEasy: "简单",
    difficultyMedium: "中等",
    difficultyHard: "困难",
    difficultyVeryHard: "非常困难"
  },
  tr: {
    brandSub: "Üniversite hazırlık test platformu",
    pillText: "Telegram yönetici takibi olan test sistemi",
    loginTitle: "Zor testlerle kendini dene",
    loginDesc: "Her ders için testler, 5–11 sınıf konuları, dil seçimi ve sonuç takibi.",
    stat1: "ders",
    stat2: "her ders için soru",
    stat3: "her ders için süre",
    formTitle: "Giriş",
    formSub: "Ad ve soyad girin. Sonuçlar istenirse Telegram'a gönderilir.",
    labelFirstName: "Ad",
    labelLastName: "Soyad",
    enterBtn: "Devam et",
    loginHint: "Dili yukarıdaki açılır menüden değiştirin.",
    selectPill: "Adım 2",
    subjectTitle: "Dersleri seçin",
    subjectDesc: "Bir veya birkaç ders seçin. Her ders için zor test verilir.",
    welcomeText: "Kullanıcı:",
    materialsTitle: "Kısa odak",
    testRuleTitle: "Kurallar",
    topicsTitle: "5–11. sınıf temel konuları",
    topicsDesc: "Seçilen ders için sınıfa göre temel konular gösterilir.",
    startTestBtn: "Testi başlat",
    testPill: "Adım 3",
    subjectCounterLabel: "Dersler",
    timerLabel: "Süre",
    nextBtn: "Sonraki soru",
    finishBtn: "Bitir",
    leaveTestBtn: "Çıkış",
    resultPill: "Sonuç",
    resultTitle: "Test tamamlandı",
    resultDesc: "Özet aşağıda gösterildi. İstersen yeniden başlat veya çık.",
    restartBtn: "Yeniden başlat",
    exitBtn: "Çıkış",
    alertLogin: "Lütfen ad ve soyad girin.",
    alertSubject: "En az bir ders seçin.",
    chooseAnswer: "Önce bir cevap seçin.",
    questionWord: "Soru",
    materialHint: "Hazırlık konusu",
    gradeLabel: "Sınıf",
    rules: [
      "Sorular her ders için karıştırılır.",
      "Seçilen her ders için 1 dakika eklenir.",
      "Sorular ve seçenekler her seferinde farklı sırada gelir.",
      "Test sonunda yeniden başlatabilir veya çıkabilirsiniz."
    ],
    userLabel: "Kullanıcı",
    subjectsLabel: "Seçilen dersler",
    scoreLabel: "Doğru cevaplar",
    percentLabel: "Yüzde",
    timeSpentLabel: "Harcanan süre",
    attemptLabel: "Deneme Kimliği",
    difficultyEasy: "Kolay",
    difficultyMedium: "Orta",
    difficultyHard: "Zor",
    difficultyVeryHard: "Çok zor"
  }
};

const languageNames = {
  uz: "O‘zbekcha",
  en: "English",
  ru: "Русский",
  de: "Deutsch",
  zh: "中文",
  tr: "Türkçe"
};

const gradeTopics = {
  math: {
    5:["Natural sonlar va amallar","Kasrlar va ulushlar","Perimetr va yuza"],
    6:["Oddiy va o‘nli kasrlar","Nisbat va proporsiya","Koordinata tekisligi"],
    7:["Algebraik ifodalar","Chiziqli tenglamalar","Uchburchak va burchaklar"],
    8:["Kvadrat ildizlar","Funksiya boshlanishi","Parallel to‘g‘ri chiziqlar"],
    9:["Kvadrat tenglamalar","Progressiyalar","Aylana elementlari"],
    10:["Trigonometrik ifodalar","Hosila kirish","Logarifmlar"],
    11:["Integrallash asoslari","Kombinatorika","Ehtimollar nazariyasi"]
  },
  mother: {
    5:["So‘z turkumlari","Gap bo‘laklari","Imlo qoidalari"],
    6:["Qo‘shimchalar","Sodda gap","Tinish belgilari"],
    7:["Qo‘shma gap","Uslubiyat kirish","Matn tahlili"],
    8:["Ko‘chirma gap","Ravish va sifatdosh","Nutq uslublari"],
    9:["Sintaksis","Morfologiya takrori","Insho yozish"],
    10:["Til me’yorlari","Rasmiy uslub","Badiiy vositalar"],
    11:["Murakkab sintaktik qurilmalar","Publitsistik uslub","Test tahlili"]
  },
  literature: {
    5:["Ertak va hikoyalar","Qahramon tahlili","She’r tuzilishi"],
    6:["Maqol va matallar","Masal janri","Muallif va obraz"],
    7:["Dostonlar","Lirik asarlar","Asar g‘oyasi"],
    8:["Jadid adabiyoti kirish","Qissa tahlili","Badiiy tasvir vositalari"],
    9:["Roman janri","Mumtoz adabiyot","Navoiy asarlari"],
    10:["XX asr adabiyoti","Qahramon psixologiyasi","Adabiy oqimlar"],
    11:["Asarlarni qiyoslash","Tanqidiy tahlil","Imtihon savollari"]
  },
  chemistry: {
    5:["Moddalar va jismlar","Aralashmalar","Xavfsizlik"],
    6:["Atom va molekula","Element belgilari","Oddiy tajribalar"],
    7:["Valentlik","Kimyoviy formulalar","Reaksiya belgilari"],
    8:["Tenglamalarni tenglash","Kislota va asoslar","Tuzlar"],
    9:["Molyar massa","Gaz qonunlari kirish","Elektrolitlar"],
    10:["Organik kimyo","Oksidlanish-qaytarilish","pH"],
    11:["Hisoblash masalalari","Termokimyo","Kompleks takrorlash"]
  },
  physics: {
    5:["Harakat tushunchasi","Kuch va og‘irlik","Issiqlik"],
    6:["Bosim","Oddiy mexanizmlar","Yorug‘lik"],
    7:["Tezlik va masofa","Zichlik","Ish va quvvat"],
    8:["Elektr toki","Magnit hodisalar","Optika"],
    9:["Nyuton qonunlari","Impuls","Issiqlik mashinalari"],
    10:["Tebranish va to‘lqin","Molekulyar fizika","Elektrostatika"],
    11:["Atom yadrosi","Kvant g‘oyalar","Murakkab masalalar"]
  },
  geography: {
    5:["Yer shakli","Materiklar","Xarita bilan ishlash"],
    6:["Atmosfera","Gidrosfera","Litosfera"],
    7:["Iqlim mintaqalari","Aholi joylashuvi","Tabiiy resurslar"],
    8:["O‘zbekiston geografiyasi","Sanoat hududlari","Qishloq xo‘jaligi"],
    9:["Jahon mamlakatlari","Demografiya","Global muammolar"],
    10:["Iqtisodiy geografiya","Transport tarmoqlari","Energetika"],
    11:["Geosiyosat kirish","Regional tahlil","Test mavzulari"]
  },
  history: {
    5:["Qadimgi dunyo","Davlatlar paydo bo‘lishi","Tarixiy manbalar"],
    6:["O‘rta asrlar","Sulolalar","Madaniyat"],
    7:["Amir Temur davri","Buyuk ipak yo‘li","Xonliklar"],
    8:["Jadidchilik","Mustamlaka davri","Islohotlar"],
    9:["Jahon urushlari","Mustaqillik sari","Tarixiy sanalar"],
    10:["Mustaqil O‘zbekiston","Konstitutsiyaviy jarayon","Tashqi siyosat"],
    11:["Tarixiy taqqoslash","Sabab va oqibat","Murakkab test tahlili"]
  },
  it: {
    5:["Kompyuter qismlari","Fayllar va papkalar","Matn bilan ishlash"],
    6:["Algoritm tushunchasi","Scratch asoslari","Xavfsizlik"],
    7:["Kodlash","Jadval bilan ishlash","Internet qidiruv"],
    8:["HTML boshlanishi","Tarmoqlar","Grafik muharrirlar"],
    9:["Python kirish","Ma’lumot turlari","Prezentatsiya dizayni"],
    10:["Dasturlash mantiqi","Ma’lumotlar bazasi asoslari","Kiberxavfsizlik"],
    11:["Web texnologiyalar","Algoritmik masalalar","Loyiha ishlari"]
  },
  biology: {
    5:["Tirik organizmlar","O‘simlik qismlari","Hayvonlar guruhi"],
    6:["Hujayra","Fotosintez","Ekologiya kirish"],
    7:["Inson anatomiyasi","Qon aylanish","Nafas olish"],
    8:["Genetika asoslari","Ko‘payish","Evolyutsiya kirish"],
    9:["Gormonlar","Nerv tizimi","Populyatsiya"],
    10:["Molekulyar biologiya","Seleksiya","Biotexnologiya"],
    11:["Murakkab biologik tizimlar","Ekotizim tahlili","Test mavzulari"]
  },
  economics: {
    5:["Pul tushunchasi","Oila byudjeti","Tejash"],
    6:["Talab va taklif","Narxlar","Savdo"],
    7:["Bozor turlari","Raqobat","Tadbirkorlik"],
    8:["Inflyatsiya","Banklar","Soliqlar"],
    9:["Makroiqtisodiy ko‘rsatkichlar","Investitsiya","Mehnat bozori"],
    10:["Monetar siyosat","Fiskal siyosat","Xalqaro savdo"],
    11:["Biznes-reja","Iqtisodiy tahlil","Murakkab masalalar"]
  },
  law: {
    5:["Huquq tushunchasi","Qoidalar va majburiyat","Maktab intizomi"],
    6:["Bola huquqlari","Javobgarlik","Jamiyat"],
    7:["Konstitutsiya kirish","Davlat ramzlari","Fuqarolik"],
    8:["Huquqbuzarlik","Sud tizimi","Ma’muriy javobgarlik"],
    9:["Mehnat huquqi","Oila huquqi","Shartnoma"],
    10:["Konstitutsion tuzum","Saylov huquqi","Fuqarolik jamiyati"],
    11:["Jinoyat va jazo","Huquqiy tahlil","Test mavzulari"]
  },
  english: {
    5:["Alphabet and phonics","Basic vocabulary","Simple present"],
    6:["Past tense","Daily routines","Question forms"],
    7:["Modal verbs","Reading skills","Listening basics"],
    8:["Conditionals","Passive voice","Essay basics"],
    9:["Reported speech","Complex grammar","Vocabulary expansion"],
    10:["Academic reading","Advanced writing","Exam practice"],
    11:["Critical reading","Essay structure","Mock test drills"]
  },
  foreign: {
    5:["Alifbo va talaffuz","Oddiy so‘zlar","Salomlashuv"],
    6:["Fe’l asoslari","Matn o‘qish","Lug‘at boyitish"],
    7:["Gap qurilishi","Savol tuzish","Muloqot"],
    8:["Murakkab gaplar","Tarjima ko‘nikmasi","Tinglab tushunish"],
    9:["Imtihon lug‘ati","Matn tahlili","Grammatika"],
    10:["Akademik til","Yozma nutq","Murakkab mashqlar"],
    11:["Test strategiyalari","Qiyin matnlar","Aralash topshiriqlar"]
  },
  russian: {
    5:["Alifbo va talaffuz","Oddiy so‘zlar","Salomlashuv"],
    6:["Fe’l asoslari","Matn o‘qish","Lug‘at boyitish"],
    7:["Gap qurilishi","Kelishiklar","Muloqot"],
    8:["Zamonlar","Tarjima ko‘nikmasi","Dialog"],
    9:["Imtihon lug‘ati","Matn tahlili","Grammatika"],
    10:["Akademik matn","Yozma nutq","Murakkab mashqlar"],
    11:["Test strategiyalari","Qiyin matnlar","Aralash topshiriqlar"]
  },
  german: {
    5:["Alifbo va talaffuz","Oddiy so‘zlar","Salomlashuv"],
    6:["Fe’l asoslari","Artikllar","Lug‘at boyitish"],
    7:["Gap tartibi","Savol tuzish","Muloqot"],
    8:["Murakkab gaplar","Tarjima ko‘nikmasi","Tinglab tushunish"],
    9:["Imtihon lug‘ati","Matn tahlili","Grammatika"],
    10:["Akademik til","Yozma nutq","Murakkab mashqlar"],
    11:["Test strategiyalari","Qiyin matnlar","Aralash topshiriqlar"]
  },
  chinese: {
    5:["Pinyin va talaffuz","Oddiy so‘zlar","Salomlashuv"],
    6:["Tonlar","Belgilar kirish","Lug‘at boyitish"],
    7:["Gap qurilishi","Savol tuzish","Muloqot"],
    8:["Murakkab gaplar","Tarjima ko‘nikmasi","Tinglab tushunish"],
    9:["Imtihon lug‘ati","Matn tahlili","Grammatika"],
    10:["Akademik til","Yozma nutq","Murakkab mashqlar"],
    11:["Test strategiyalari","Qiyin matnlar","Aralash topshiriqlar"]
  },
  turkish: {
    5:["Alifbo va talaffuz","Oddiy so‘zlar","Salomlashuv"],
    6:["Fe’l asoslari","Matn o‘qish","Lug‘at boyitish"],
    7:["Gap qurilishi","Savol tuzish","Muloqot"],
    8:["Murakkab gaplar","Tarjima ko‘nikmasi","Tinglab tushunish"],
    9:["Imtihon lug‘ati","Matn tahlili","Grammatika"],
    10:["Akademik til","Yozma nutq","Murakkab mashqlar"],
    11:["Test strategiyalari","Qiyin matnlar","Aralash topshiriqlar"]
  },
  iq: {
    5:["Mantiqiy juftliklar","Shakllar","Oddiy ketma-ketlik"],
    6:["Sonli naqshlar","Taqqoslash","Kodlash"],
    7:["Analitik fikrlash","Jadval mantiqi","Diqqat mashqlari"],
    8:["Murakkab ketma-ketlik","Fazoviy fikrlash","Analogiyalar"],
    9:["Tezkor tahlil","Mantiqiy bloklar","Matritsalar"],
    10:["Ko‘p bosqichli mantiq","Qiyin naqshlar","Kognitiv tezlik"],
    11:["Olimpiada usuli masalalar","Murakkab matritsalar","Yuqori daraja"]
  }
};

let currentLang = 'uz';
let currentUser = { firstName:'', lastName:'', fullName:'' };
let selectedSubjects = [];
let testQueue = [];
let currentQuestionIndex = 0;
let answers = [];
let timeLeft = 60;
let timerId = null;
let startedAt = null;
let attemptId = "";
let currentGrade = '5';

const ids = ['loginScreen','subjectScreen','testScreen','resultScreen','subjectGrid','materialsList','topicsList','gradeSelect'];
const [loginScreen, subjectScreen, testScreen, resultScreen, subjectGrid, materialsList, topicsList, gradeSelect] = ids.map(id => document.getElementById(id));
const $ = (id) => document.getElementById(id);

function shuffle(arr) {
  const a = [...arr];
  for (let i=a.length-1; i>0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function showScreen(screen) {
  [loginScreen, subjectScreen, testScreen, resultScreen].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
  updateStartButtonState();
}
function activeLangLabel() {
  return languageNames[currentLang] || 'O‘zbekcha';
}
function getDifficultyLabel(index, total) {
  const t = translations[currentLang] || translations.uz;
  const ratio = total ? (index + 1) / total : 0;
  if (ratio <= 0.25) return t.difficultyEasy;
  if (ratio <= 0.55) return t.difficultyMedium;
  if (ratio <= 0.8) return t.difficultyHard;
  return t.difficultyVeryHard;
}
function buildLocalizedSubjectName(subject) {
  const map = subjectLocalization[subject.id];
  return (map && (map[currentLang] || map.uz)) || (subject.name && (subject.name[currentLang] || subject.name.uz)) || subject.id;
}
function buildLocalizedMaterial(subject) {
  const map = materialLocalization[subject.id];
  return (map && (map[currentLang] || map.uz)) || (subject.material && (subject.material[currentLang] || subject.material.uz)) || '';
}
function updateStartButtonState() {
  const btn = $('startTestBtn');
  if (!btn) return;
  const show = subjectScreen.classList.contains('active') && selectedSubjects.length > 0;
  btn.classList.toggle('floating-visible', show);
  btn.classList.toggle('floating-hidden', !show);
}
function applyTranslations() {
  const t = translations[currentLang] || translations.uz;
  const mapping = {
    brandSub:'brandSub', pillText:'pillText', loginTitle:'loginTitle', loginDesc:'loginDesc', stat1:'stat1', stat2:'stat2',
    stat3:'stat3', formTitle:'formTitle', formSub:'formSub', labelFirstName:'labelFirstName', labelLastName:'labelLastName',
    enterBtn:'enterBtn', loginHint:'loginHint', selectPill:'selectPill', subjectTitle:'subjectTitle', subjectDesc:'subjectDesc',
    welcomeText:'welcomeText', materialsTitle:'materialsTitle', testRuleTitle:'testRuleTitle', topicsTitle:'topicsTitle',
    topicsDesc:'topicsDesc', startTestBtn:'startTestBtn', testPill:'testPill', subjectCounterLabel:'subjectCounterLabel',
    timerLabel:'timerLabel', nextBtn:'nextBtn', finishBtn:'finishBtn', leaveTestBtn:'leaveTestBtn', resultPill:'resultPill',
    resultTitle:'resultTitle', resultDesc:'resultDesc', restartBtn:'restartBtn', exitBtn:'exitBtn'
  };
  Object.entries(mapping).forEach(([id,key]) => { const el = $(id); if (el) el.textContent = t[key]; });
  document.documentElement.lang = currentLang;
  $('currentLangLabel').textContent = activeLangLabel();
  $('firstName').placeholder = currentLang === 'uz' ? 'Masalan: Ali' : currentLang === 'en' ? 'Example: Ali' : currentLang === 'ru' ? 'Например: Али' : currentLang === 'de' ? 'Zum Beispiel: Ali' : currentLang === 'zh' ? '例如：Ali' : 'Örnek: Ali';
  $('lastName').placeholder = currentLang === 'uz' ? 'Masalan: Karimov' : currentLang === 'en' ? 'Example: Karimov' : currentLang === 'ru' ? 'Например: Каримов' : currentLang === 'de' ? 'Zum Beispiel: Karimov' : currentLang === 'zh' ? '例如：Karimov' : 'Örnek: Karimov';
  renderRules();
  renderGradeOptions();
  renderSubjects();
  updateMaterials();
  renderTopics();
  if (testQueue.length) renderQuestion();
  updateStartButtonState();
}

function renderRules() {
  const t = translations[currentLang] || translations.uz;
  const list = $('rulesList'); list.innerHTML = '';
  t.rules.forEach(rule => { const li = document.createElement('li'); li.textContent = rule; list.appendChild(li); });
}
function renderGradeOptions() {
  if (!gradeSelect) return;
  const t = translations[currentLang] || translations.uz;
  gradeSelect.innerHTML = '';
  for (let grade = 5; grade <= 11; grade++) {
    const option = document.createElement('option');
    option.value = String(grade);
    option.textContent = `${t.gradeLabel} ${grade}`;
    if (String(grade) === String(currentGrade)) option.selected = true;
    gradeSelect.appendChild(option);
  }
}
function renderSubjects() {
  subjectGrid.innerHTML = '';
  subjects.forEach(subject => {
    const card = document.createElement('div');
    card.className = `subject-card ${selectedSubjects.includes(subject.id) ? 'selected' : ''}`;
    card.innerHTML = `<div class="subject-icon">${subject.icon}</div><h3>${buildLocalizedSubjectName(subject)}</h3><p>${buildLocalizedMaterial(subject)}</p>`;
    card.addEventListener('click', () => {
      if (selectedSubjects.includes(subject.id)) selectedSubjects = selectedSubjects.filter(x => x !== subject.id);
      else selectedSubjects.push(subject.id);
      renderSubjects(); updateMaterials(); renderTopics(); updateStartButtonState();
    });
    subjectGrid.appendChild(card);
  });
}
function updateMaterials() {
  const t = translations[currentLang] || translations.uz;
  const visible = selectedSubjects.length ? subjects.filter(s => selectedSubjects.includes(s.id)) : subjects.slice(0,6);
  materialsList.innerHTML = '';
  visible.forEach(item => {
    const div = document.createElement('div');
    div.className = 'material-item';
    div.innerHTML = `<strong>${buildLocalizedSubjectName(item)}</strong><span>${buildLocalizedMaterial(item)}</span>`;
    materialsList.appendChild(div);
  });
}
function renderTopics() {
  if (!topicsList) return;
  const t = translations[currentLang] || translations.uz;
  const targetSubjects = selectedSubjects.length ? subjects.filter(s => selectedSubjects.includes(s.id)) : subjects.slice(0,4);
  topicsList.innerHTML = '';
  targetSubjects.forEach(subject => {
    const box = document.createElement('div');
    box.className = 'topic-item compact-topic';
    box.innerHTML = `<strong>${buildLocalizedSubjectName(subject)} · ${t.gradeLabel} ${currentGrade}</strong><span>${buildLocalizedMaterial(subject)}</span>`;
    topicsList.appendChild(box);
  });
}
function hardenQuestionOrder(queue) {
  const thirds = Math.max(1, Math.floor(queue.length / 3));
  return queue.map((item, idx) => ({ ...item, difficultyStage: idx < thirds ? 'easy' : idx < thirds * 2 ? 'medium' : idx < queue.length - 2 ? 'hard' : 'veryhard' }));
}
function randomizeQuestionItem(q, subjectId) {
  const optionObjects = q.options.map((text, index) => ({ text, originalIndex:index }));
  const mixed = shuffle(optionObjects);
  return {
    ...q,
    subjectId,
    options: mixed.map(x => x.text),
    answer: mixed.findIndex(x => x.originalIndex === q.answer)
  };
}
function buildTestQueue() {
  let queue = [];
  selectedSubjects.forEach(id => {
    const pool = shuffle((questionBank[id] || []).map(q => randomizeQuestionItem(q, id)));
    queue = queue.concat(pool);
  });
  testQueue = hardenQuestionOrder(shuffle(queue));
  currentQuestionIndex = 0;
  answers = new Array(testQueue.length).fill(null);
  timeLeft = Math.max(60, selectedSubjects.length * 60);
  startedAt = new Date();
  attemptId = `ATT-${Date.now().toString(36).toUpperCase()}`;
}
function renderQuestion() {
  const t = translations[currentLang] || translations.uz;
  const current = testQueue[currentQuestionIndex];
  if (!current) return;
  const subject = subjects.find(s => s.id === current.subjectId);
  $('testSubjectTitle').textContent = buildLocalizedSubjectName(subject);
  $('questionSubjectBadge').textContent = buildLocalizedSubjectName(subject);
  $('testProgressText').textContent = `${t.questionWord} ${currentQuestionIndex + 1} / ${testQueue.length}`;
  $('subjectCounter').textContent = selectedSubjects.length;
  $('questionText').textContent = current.question;
  $('progressBar').style.width = `${((currentQuestionIndex + 1) / testQueue.length) * 100}%`;
  const diff = current.difficultyStage === 'easy' ? t.difficultyEasy : current.difficultyStage === 'medium' ? t.difficultyMedium : current.difficultyStage === 'hard' ? t.difficultyHard : t.difficultyVeryHard;
  document.querySelector('.difficulty-badge').textContent = diff;
  const box = $('answersBox'); box.innerHTML = '';
  current.options.forEach((option, index) => {
    const row = document.createElement('div');
    row.className = `answer-option ${answers[currentQuestionIndex] === index ? 'selected' : ''}`;
    row.innerHTML = `<div class="answer-letter">${String.fromCharCode(65 + index)}</div><div>${option}</div>`;
    row.addEventListener('click', () => { answers[currentQuestionIndex] = index; renderQuestion(); });
    box.appendChild(row);
  });
}
function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2,'0');
  const s = String(seconds % 60).padStart(2,'0');
  return `${m}:${s}`;
}
function startTimer() {
  clearInterval(timerId);
  $('timer').textContent = formatTime(timeLeft);
  timerId = setInterval(() => {
    timeLeft--;
    $('timer').textContent = formatTime(Math.max(0, timeLeft));
    if (timeLeft <= 0) {
      clearInterval(timerId);
      finishTest();
    }
  }, 1000);
}
function calculateResults() {
  let score = 0;
  const bySubject = {};
  testQueue.forEach((item, idx) => {
    bySubject[item.subjectId] ||= { total:0, correct:0 };
    bySubject[item.subjectId].total += 1;
    if (answers[idx] === item.answer) {
      score++;
      bySubject[item.subjectId].correct += 1;
    }
  });
  const total = testQueue.length;
  const percent = total ? Math.round((score / total) * 100) : 0;
  const elapsedSeconds = startedAt ? Math.round((Date.now() - startedAt.getTime()) / 1000) : 0;
  return { score, total, percent, bySubject, elapsedSeconds };
}
function renderResult(result) {
  const t = translations[currentLang] || translations.uz;
  const summary = $('resultSummary'); summary.innerHTML = '';
  [
    [t.userLabel, currentUser.fullName],
    [t.subjectsLabel, selectedSubjects.map(id => buildLocalizedSubjectName(subjects.find(s => s.id === id))).join(', ')],
    [t.scoreLabel, `${result.score} / ${result.total}`],
    [t.percentLabel, `${result.percent}%`],
    [t.timeSpentLabel, formatTime(result.elapsedSeconds)],
    [t.attemptLabel, attemptId]
  ].forEach(([label, value]) => {
    const box = document.createElement('div');
    box.className = 'result-box';
    box.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    summary.appendChild(box);
  });
}
function escapeHtml(str) {
  return String(str).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
}
function getDeviceInfo() {
  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform || 'Unknown',
    language: navigator.language || currentLang,
    screen: `${window.screen.width}x${window.screen.height}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown'
  };
}
async function sendToTelegram(result) {
  if (!ENABLE_TELEGRAM_REPORT) return { ok:false, skipped:true };
  if (!ADMIN_BOT_TOKEN || !ADMIN_CHAT_ID || ADMIN_BOT_TOKEN.includes('PASTE_')) return { ok:false, configMissing:true };
  const device = getDeviceInfo();
  const selectedNames = selectedSubjects.map(id => subjects.find(s => s.id === id)?.name.uz || id).join(', ');
  const subjectLines = Object.entries(result.bySubject).map(([id,row]) => {
    const name = subjects.find(s => s.id === id)?.name.uz || id;
    const pct = row.total ? Math.round((row.correct / row.total) * 100) : 0;
    return `• <b>${name}</b>: ${row.correct}/${row.total} (${pct}%)`;
  }).join('\n');
  const text = `<b>🎓 UniPrep yangi urinish</b>\n\n<b>${translations.uz.attemptLabel}:</b> <code>${attemptId}</code>\n<b>${translations.uz.userLabel}:</b> ${escapeHtml(currentUser.fullName)}\n<b>${translations.uz.subjectsLabel}:</b> ${escapeHtml(selectedNames)}\n\n<b>${translations.uz.scoreLabel}:</b> ${result.score} / ${result.total}\n<b>${translations.uz.percentLabel}:</b> ${result.percent}%\n<b>${translations.uz.timeSpentLabel}:</b> ${formatTime(result.elapsedSeconds)}\n\n<b>📊 Fanlar kesimida:</b>\n${subjectLines}\n\n<b>🖥 Qurilma:</b>\n• Platforma: ${escapeHtml(device.platform)}\n• Til: ${escapeHtml(device.language)}\n• Ekran: ${escapeHtml(device.screen)}\n• Timezone: ${escapeHtml(device.timezone)}\n\n<b>🌐 Browser:</b>\n<code>${escapeHtml(device.userAgent).slice(0, 3500)}</code>`;
  try {
    const res = await fetch(`https://api.telegram.org/bot${ADMIN_BOT_TOKEN}/sendMessage`, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ chat_id: ADMIN_CHAT_ID, text, parse_mode:'HTML' })
    });
    return await res.json();
  } catch (err) {
    return { ok:false, error:String(err) };
  }
}
async function finishTest() {
  clearInterval(timerId);
  const result = calculateResults();
  renderResult(result);
  showScreen(resultScreen);
  const tg = await sendToTelegram(result);
  console.log('Telegram status:', tg);
}
function exitToHome() {
  clearInterval(timerId);
  currentQuestionIndex = 0;
  testQueue = [];
  answers = [];
  showScreen(subjectScreen);
}
$('langToggleBtn').addEventListener('click', () => $('langDropdown').classList.toggle('hidden'));
document.querySelectorAll('.lang-option').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.lang-option').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentLang = btn.dataset.lang;
  $('langDropdown').classList.add('hidden');
  applyTranslations();
}));
document.addEventListener('click', (e) => {
  const wrap = document.querySelector('.dropdown-switcher');
  if (wrap && !wrap.contains(e.target)) $('langDropdown').classList.add('hidden');
});
gradeSelect.addEventListener('change', (e) => { currentGrade = e.target.value; renderTopics(); });
$('enterBtn').addEventListener('click', () => {
  const firstName = $('firstName').value.trim();
  const lastName = $('lastName').value.trim();
  const t = translations[currentLang] || translations.uz;
  if (!firstName || !lastName) return alert(t.alertLogin);
  currentUser = { firstName, lastName, fullName: `${firstName} ${lastName}` };
  $('userNameDisplay').textContent = currentUser.fullName;
  showScreen(subjectScreen);
});
$('startTestBtn').addEventListener('click', () => {
  const t = translations[currentLang] || translations.uz;
  if (!selectedSubjects.length) return alert(t.alertSubject);
  buildTestQueue();
  showScreen(testScreen);
  renderQuestion();
  startTimer();
});
$('nextBtn').addEventListener('click', () => {
  const t = translations[currentLang] || translations.uz;
  if (answers[currentQuestionIndex] === null) return alert(t.chooseAnswer);
  if (currentQuestionIndex < testQueue.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    finishTest();
  }
});
$('finishBtn').addEventListener('click', finishTest);
$('leaveTestBtn').addEventListener('click', exitToHome);
$('restartBtn').addEventListener('click', () => window.location.reload());
$('exitBtn').addEventListener('click', () => window.location.reload());
applyTranslations();
