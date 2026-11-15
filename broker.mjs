// Broker & Owner Ali Caner Can: ana sayfa bölümü, broker sayfası istatistikleri, galeri ve bağlantılar.
// Portre ve bazı görseller derlemede alicanercan.com'dan indirilir (dist/img/broker/), Netlify Image CDN ile WebP sunulur.
const L12 = (tr, en, de, ru, fa, pl, fr, es, nl, sv, ar, zh) => ({ tr, en, de, ru, fa, pl, fr, es, nl, sv, ar, zh });

export const BROKER = {
  portrait: ['https://alicanercan.com/wp-content/uploads/2026/07/Caner-Bey-Fotograf.webp', 'ali-caner-can-portre.webp'],
  remote: [
    ['https://alicanercan.com/wp-content/uploads/2026/07/Ali-Caner-Site-gorseli-11.webp', 'ali-caner-can-antiad.webp'],
  ],
  // [yerel/uzak dosya, altyazı {tr,en}]
  gallery: [
    ['/img/sosyal/akra-dubai-2025-hosgeldiniz.webp', { tr: 'Akra Hotel’de yatırımcı buluşması açılışı, Aralık 2025', en: 'Opening the investor meeting at Akra Hotel, December 2025' }],
    ['remote:ali-caner-can-antiad.webp', { tr: 'ANTİAD, Antalya İş İnsanları Derneği', en: 'ANTİAD, Antalya Business People’s Association' }],
    ['/img/sosyal/akra-dubai-2025-ekip-sahne.webp', { tr: 'ACC HOMES ekibiyle Akra Hotel sahnesinde', en: 'With the ACC HOMES team on stage at Akra Hotel' }],
    ['/img/sosyal/antalle-open-house-2025-ekip.webp', { tr: 'Antalle Concept Houses Open House, Aralık 2025', en: 'Antalle Concept Houses Open House, December 2025' }],
    ['/img/sosyal/akra-dubai-2025-dubai-projeleri.webp', { tr: 'Danube Properties ile Dubai projeleri sunumu', en: 'Presenting Dubai projects with Danube Properties' }],
    ['/img/ekip/ekip-acc-plaza-2026.webp', { tr: 'ACC Plaza önünde ACC ailesiyle, Kasım 2026', en: 'With the ACC family in front of ACC Plaza, November 2026' }],
  ],
  links: [
    ['alicanercan.com', 'https://alicanercan.com/'],
    ['Instagram', 'https://www.instagram.com/alicanercan.therealtor/'],
    ['LinkedIn', 'https://www.linkedin.com/in/alicanercantherealtor/'],
    ['YouTube', 'https://www.youtube.com/@alicanercan.therealtor'],
  ],
  creds: [
    ['🎖️', L12('Kuleli Askeri Lisesi', 'Kuleli Military High School', 'Militärgymnasium Kuleli', 'Военный лицей Кулели', 'دبیرستان نظامی کولِلی', 'Liceum Wojskowe Kuleli', 'Lycée militaire de Kuleli', 'Liceo Militar Kuleli', 'Militaire middelbare school Kuleli', 'Kuleli militärgymnasium', 'ثانوية كوليلي العسكرية', '库莱利军事高中')],
    ['🎓', L12('Yıldız Teknik Üniversitesi, Makine Mühendisliği', 'Yıldız Technical University, Mechanical Engineering', 'Technische Universität Yıldız, Maschinenbau', 'Технический университет Йылдыз, машиностроение', 'دانشگاه فنی ییلدیز، مهندسی مکانیک', 'Politechnika Yıldız, inżynieria mechaniczna', 'Université technique Yıldız, génie mécanique', 'Universidad Técnica Yıldız, ingeniería mecánica', 'Technische Universiteit Yıldız, werktuigbouwkunde', 'Yıldız tekniska universitet, maskinteknik', 'جامعة يلدز التقنية، الهندسة الميكانيكية', '耶尔德兹技术大学 机械工程')],
    ['💼', L12('Kraft Heinz · Nestlé · Hasbro · Reckitt · Bosch', 'Kraft Heinz · Nestlé · Hasbro · Reckitt · Bosch', 'Kraft Heinz · Nestlé · Hasbro · Reckitt · Bosch', 'Kraft Heinz · Nestlé · Hasbro · Reckitt · Bosch', 'Kraft Heinz · Nestlé · Hasbro · Reckitt · Bosch', 'Kraft Heinz · Nestlé · Hasbro · Reckitt · Bosch', 'Kraft Heinz · Nestlé · Hasbro · Reckitt · Bosch', 'Kraft Heinz · Nestlé · Hasbro · Reckitt · Bosch', 'Kraft Heinz · Nestlé · Hasbro · Reckitt · Bosch', 'Kraft Heinz · Nestlé · Hasbro · Reckitt · Bosch', 'Kraft Heinz · Nestlé · Hasbro · Reckitt · Bosch', 'Kraft Heinz · Nestlé · Hasbro · Reckitt · Bosch')],
    ['🎾', L12('Profesyonel düzeyde tenis', 'Plays tennis at a professional level', 'Tennis auf professionellem Niveau', 'Теннис на профессиональном уровне', 'تنیس در سطح حرفه‌ای', 'Tenis na poziomie zawodowym', 'Tennis à niveau professionnel', 'Tenis a nivel profesional', 'Tennis op professioneel niveau', 'Tennis på professionell nivå', 'تنس على مستوى احترافي', '职业水平网球')],
  ],
  stats: [
    ['290+', L12('satış ve kiralama işlemi', 'sales and rental transactions', 'Verkäufe und Vermietungen', 'сделок продажи и аренды', 'معامله فروش و اجاره', 'transakcji sprzedaży i najmu', 'ventes et locations', 'ventas y alquileres', 'verkopen en verhuringen', 'försäljningar och uthyrningar', 'صفقة بيع وإيجار', '笔买卖与租赁交易')],
    ['~50', L12('iş ortağından oluşan ekip', 'partners in his team', 'Partner im Team', 'партнёров в команде', 'همکار در تیم', 'partnerów w zespole', 'partenaires dans l’équipe', 'socios en el equipo', 'partners in het team', 'partner i teamet', 'شريكًا في الفريق', '位团队合作伙伴')],
    ['5', L12('çok uluslu şirkette yöneticilik', 'multinationals in his corporate career', 'internationale Konzerne', 'международных корпораций', 'شرکت چندملیتی', 'międzynarodowych korporacji', 'multinationales', 'multinacionales', 'multinationals', 'multinationella företag', 'شركات متعددة الجنسيات', '家跨国公司任职')],
    ['1.000 m²', L12('ACC Plaza genel merkezi', 'ACC Plaza headquarters', 'Zentrale ACC Plaza', 'штаб-квартира ACC Plaza', 'دفتر مرکزی ACC Plaza', 'siedziba ACC Plaza', 'siège ACC Plaza', 'sede ACC Plaza', 'hoofdkantoor ACC Plaza', 'huvudkontoret ACC Plaza', 'المقر الرئيسي ACC Plaza', 'ACC Plaza总部')],
  ],
  home: {
    eyebrow: L12('Broker & Kurucu', 'Broker & Founder', 'Broker & Gründer', 'Брокер и основатель', 'بروکر و بنیان‌گذار', 'Broker i założyciel', 'Broker et fondateur', 'Broker y fundador', 'Broker en oprichter', 'Mäklare och grundare', 'الوسيط والمؤسس', '经纪人兼创始人'),
    title: L12('Ali Caner Can ile tanışın', 'Meet Ali Caner Can', 'Lernen Sie Ali Caner Can kennen', 'Знакомьтесь: Али Джанер Джан', 'با علی جانر جان آشنا شوید', 'Poznaj Ali Caner Cana', 'Rencontrez Ali Caner Can', 'Conozca a Ali Caner Can', 'Maak kennis met Ali Caner Can', 'Möt Ali Caner Can', 'تعرّف على علي جانر جان', '认识 Ali Caner Can'),
    text: L12(
      'Antalya doğumlu makine mühendisi. Kraft Heinz, Nestlé, Hasbro, Reckitt Benckiser ve Bosch’ta geçen kurumsal satış kariyerinin ardından 2021’de gayrimenkule geçti, 2024’te ACC HOMES’u kurdu. Bugün ACC Plaza’da yaklaşık 50 iş ortağına liderlik ediyor ve 290’ı aşkın işlemi kendisi gerçekleştirdi.',
      'An Antalya-born mechanical engineer. After a corporate sales career at Kraft Heinz, Nestlé, Hasbro, Reckitt Benckiser and Bosch, he moved into real estate in 2021 and founded ACC HOMES in 2024. Today he leads around 50 partners at ACC Plaza and has closed more than 290 transactions himself.',
      'In Antalya geborener Maschinenbauingenieur. Nach einer Vertriebskarriere bei Kraft Heinz, Nestlé, Hasbro, Reckitt Benckiser und Bosch wechselte er 2021 in die Immobilienbranche und gründete 2024 ACC HOMES. Heute leitet er rund 50 Partner in ACC Plaza und hat selbst über 290 Transaktionen abgeschlossen.',
      'Инженер-механик, уроженец Анталии. После карьеры в корпоративных продажах Kraft Heinz, Nestlé, Hasbro, Reckitt Benckiser и Bosch в 2021 году пришёл в недвижимость, а в 2024 году основал ACC HOMES. Сегодня руководит командой около 50 партнёров в ACC Plaza и лично провёл более 290 сделок.',
      'مهندس مکانیک متولد آنتالیا. پس از دوران فروش سازمانی در Kraft Heinz، Nestlé، Hasbro، Reckitt Benckiser و Bosch، در سال ۲۰۲۱ وارد حوزه املاک شد و در ۲۰۲۴ شرکت ACC HOMES را بنیان گذاشت. امروز حدود ۵۰ همکار را در ACC Plaza رهبری می‌کند و خود بیش از ۲۹۰ معامله انجام داده است.',
      'Inżynier mechanik urodzony w Antalyi. Po karierze w sprzedaży korporacyjnej w Kraft Heinz, Nestlé, Hasbro, Reckitt Benckiser i Bosch w 2021 roku przeszedł do nieruchomości, a w 2024 założył ACC HOMES. Dziś kieruje zespołem około 50 partnerów w ACC Plaza i sam przeprowadził ponad 290 transakcji.',
      'Ingénieur en mécanique né à Antalya. Après une carrière dans la vente chez Kraft Heinz, Nestlé, Hasbro, Reckitt Benckiser et Bosch, il rejoint l’immobilier en 2021 et fonde ACC HOMES en 2024. Il dirige aujourd’hui une cinquantaine de partenaires à ACC Plaza et a conclu lui-même plus de 290 transactions.',
      'Ingeniero mecánico nacido en Antalya. Tras una carrera en ventas en Kraft Heinz, Nestlé, Hasbro, Reckitt Benckiser y Bosch, entró en el sector inmobiliario en 2021 y fundó ACC HOMES en 2024. Hoy dirige a unos 50 socios en ACC Plaza y ha cerrado personalmente más de 290 operaciones.',
      'Werktuigbouwkundig ingenieur, geboren in Antalya. Na een salescarrière bij Kraft Heinz, Nestlé, Hasbro, Reckitt Benckiser en Bosch stapte hij in 2021 over naar vastgoed en richtte hij in 2024 ACC HOMES op. Vandaag leidt hij zo’n 50 partners in ACC Plaza en sloot hij zelf meer dan 290 transacties.',
      'Maskiningenjör född i Antalya. Efter en försäljningskarriär på Kraft Heinz, Nestlé, Hasbro, Reckitt Benckiser och Bosch gick han över till fastigheter 2021 och grundade ACC HOMES 2024. I dag leder han runt 50 partner på ACC Plaza och har själv genomfört över 290 affärer.',
      'مهندس ميكانيكي من مواليد أنطاليا. بعد مسيرة في المبيعات لدى Kraft Heinz وNestlé وHasbro وReckitt Benckiser وBosch، دخل قطاع العقارات عام 2021 وأسس ACC HOMES عام 2024. يقود اليوم نحو 50 شريكًا في ACC Plaza وأتمّ بنفسه أكثر من 290 صفقة.',
      '出生于安塔利亚的机械工程师。曾在卡夫亨氏、雀巢、孩之宝、利洁时和博世从事企业销售，2021年进入房地产行业，2024年创立ACC HOMES。如今他在ACC Plaza带领约50位合作伙伴，个人已完成290多笔交易。'),
    cta: L12('Hikâyesini okuyun', 'Read his story', 'Seine Geschichte lesen', 'Читать его историю', 'داستان او را بخوانید', 'Poznaj jego historię', 'Lire son parcours', 'Leer su historia', 'Lees zijn verhaal', 'Läs hans historia', 'اقرأ قصته', '了解他的故事'),
    wa: L12('Ali Caner Can’a yazın', 'Message Ali Caner Can', 'Ali Caner Can schreiben', 'Написать Али Джанеру', 'پیام به علی جانر جان', 'Napisz do Ali Caner Cana', 'Écrire à Ali Caner Can', 'Escribir a Ali Caner Can', 'Stuur Ali Caner Can een bericht', 'Skriv till Ali Caner Can', 'راسل علي جانر جان', '联系 Ali Caner Can'),
  },
  ui: {
    links: L12('Ali Caner Can’ı takip edin', 'Follow Ali Caner Can', 'Ali Caner Can folgen', 'Подписывайтесь на Али Джанера', 'علی جانر جان را دنبال کنید', 'Obserwuj Ali Caner Cana', 'Suivre Ali Caner Can', 'Siga a Ali Caner Can', 'Volg Ali Caner Can', 'Följ Ali Caner Can', 'تابع علي جانر جان', '关注 Ali Caner Can'),
    gallery: L12('Sahada', 'In the field', 'Vor Ort', 'В работе', 'در میدان', 'W działaniu', 'Sur le terrain', 'En acción', 'In actie', 'I fält', 'في الميدان', '工作现场'),
  },
};
