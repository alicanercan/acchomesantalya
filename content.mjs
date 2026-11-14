// ACC HOMES — kurumsal sayfa içerikleri (TR / EN / RU)
// {{WA_JOIN}}, {{WA}}, {{TEL}}, {{MAPS}}, {{IG}}, {{IG_CANER}}, {{URL:sayfa}}, {{RATING}}, {{REVIEWS}} derleme sırasında doldurulur.

export const TEAM = [
  { name: 'Ali Caner Can', initials: 'AC', role: { tr: 'Broker ve Kurucu', en: 'Broker & Founder', ru: 'Брокер и основатель' }, link: 'broker' },
  { name: 'Esma Özdal', initials: 'EÖ', role: { tr: 'Genel Koordinatör', en: 'General Coordinator', ru: 'Генеральный координатор' } },
  { name: 'Okan Akgün', initials: 'OA', role: { tr: 'Ofis Yöneticisi', en: 'Office Manager', ru: 'Офис-менеджер' } },
  { name: 'Melissa Enriquez Sedita', initials: 'ME', role: { tr: 'CRM ve Uluslararası Satış Yetkilisi', en: 'CRM & International Sales Manager', ru: 'Менеджер CRM и международных продаж' } },
  { name: 'Adnan Konuk', initials: 'AK', role: { tr: 'Proje Koordinatörü', en: 'Project Coordinator', ru: 'Координатор проектов' } },
  { name: 'Bensu Taşbaş', initials: 'BT', role: { tr: 'Sosyal Medya Uzmanı', en: 'Social Media Specialist', ru: 'Специалист по соцсетям' } },
  { name: 'Derya Plyatner', initials: 'DP', role: { tr: 'Grafik Tasarım Uzmanı', en: 'Graphic Design Specialist', ru: 'Графический дизайнер' } },
  { name: 'Zeynep Çarıkçı', initials: 'ZÇ', role: { tr: 'Ofis Servis Yetkilisi', en: 'Office Services', ru: 'Офисный сервис' } },
];

export const LANGS_SPOKEN = {
  tr: ['Türkçe', 'İngilizce', 'Rusça', 'Ukraynaca', 'Almanca', 'Fransızca', 'Felemenkçe', 'İspanyolca', 'Arapça', 'Farsça'],
  en: ['Turkish', 'English', 'Russian', 'Ukrainian', 'German', 'French', 'Dutch', 'Spanish', 'Arabic', 'Persian'],
  ru: ['Турецкий', 'Английский', 'Русский', 'Украинский', 'Немецкий', 'Французский', 'Нидерландский', 'Испанский', 'Арабский', 'Персидский'],
};

export const PLAZA = {
  tr: {
    eyebrow: 'ACC PLAZA · Genel Merkez',
    title: 'Antalya’nın En Vizyoner ve Kurumsal Gayrimenkul Merkezi: ACC PLAZA',
    sub: 'Yüzlerce Mutlu Referans, Sınırları Aşan Global Hizmet Anlayışı',
    body: [
      'Muratpaşa, Yeşilbahçe’nin kalbinde yer alan 1.000 m²’lik yeni genel merkezimiz ACC Plaza’da, gayrimenkul yatırımına ve lüks yaşama yepyeni bir standart getiriyoruz. Bizler sadece bir emlak ofisi değil; bölgenin en seçkin yetkili projelerini, global yatırım fırsatlarını ve profesyonel mülk yönetimini tek çatı altında buluşturan uluslararası bir yatırım üssüyüz.',
      'Alanında uzman 50 profesyonel iş ortağımız ve 10 farklı dilde sunduğumuz kesintisiz hizmet ağımızla, dünyanın neresinde olursanız olun yatırım süreçlerinizi sıfır hata ve maksimum güvenle yönetiyoruz. Sektördeki gücümüzü yüzlerce başarılı referansımızdan alıyor, Antalya’nın en kurumsal emlak deneyimini yaşamanız için sizleri ACC Plaza’da kahve içmeye davet ediyoruz.',
    ],
    badges: [
      ['🏢', '1.000 m² Genel Merkez', 'Muratpaşa Yeşilbahçe’de modern ve teknolojik çalışma alanı'],
      ['🤝', '50 Profesyonel İş Ortağı', 'Her bölgeye ve projeye hakim uzman kadro'],
      ['🌍', '10 Dilde Global Hizmet', 'Yabancı yatırımcılar için uçtan uca anadilde destek'],
      ['💎', 'Münhasır Projeler', 'Sadece ACC Homes güvencesiyle sunulan yetkili portföyler'],
    ],
    cta1: 'Uzman Ekibimizle Tanışın', cta2: 'ACC Plaza’ya Yol Tarifi Al',
  },
  en: {
    eyebrow: 'ACC PLAZA · Headquarters',
    title: 'ACC PLAZA: Antalya’s Most Visionary Corporate Real Estate Centre',
    sub: 'Hundreds of happy clients, and a global service that goes beyond borders',
    body: [
      'At ACC Plaza, our new 1,000 m² headquarters in the heart of Yeşilbahçe, Muratpaşa, we are setting a new standard for property investment and fine living. We are more than an estate agency: we are an international investment hub that brings the region’s finest authorised projects, global investment opportunities and professional property management under one roof.',
      'With 50 expert partners and uninterrupted service in 10 languages, we manage your investment with care and full transparency, wherever in the world you are. Our strength comes from hundreds of successful references, and we would love to welcome you to ACC Plaza for a coffee and Antalya’s most corporate real estate experience.',
    ],
    badges: [
      ['🏢', '1,000 m² Headquarters', 'A modern, tech-enabled workspace in Yeşilbahçe, Muratpaşa'],
      ['🤝', '50 Professional Partners', 'Specialists who know every district and project'],
      ['🌍', 'Service in 10 Languages', 'End-to-end support in your own language'],
      ['💎', 'Exclusive Projects', 'Authorised portfolios offered only through ACC Homes'],
    ],
    cta1: 'Meet Our Team', cta2: 'Get Directions to ACC Plaza',
  },
  ru: {
    eyebrow: 'ACC PLAZA · Главный офис',
    title: 'ACC PLAZA — самый современный корпоративный центр недвижимости Анталии',
    sub: 'Сотни довольных клиентов и сервис международного уровня',
    body: [
      'В нашем новом главном офисе ACC Plaza площадью 1 000 м² в самом центре района Ешильбахче (Муратпаша) мы задаём новый стандарт инвестиций в недвижимость. Мы больше, чем агентство: это международный инвестиционный центр, где под одной крышей собраны лучшие проекты региона, на продажу которых у нас есть официальные полномочия, глобальные инвестиционные возможности и профессиональное управление недвижимостью.',
      '50 экспертов-партнёров и обслуживание на 10 языках позволяют нам сопровождать вашу сделку надёжно и прозрачно, где бы вы ни находились. Приглашаем вас на чашку кофе в ACC Plaza.',
    ],
    badges: [
      ['🏢', 'Офис 1 000 м²', 'Современное рабочее пространство в Ешильбахче'],
      ['🤝', '50 партнёров-экспертов', 'Знание каждого района и проекта'],
      ['🌍', 'Сервис на 10 языках', 'Поддержка на вашем родном языке'],
      ['💎', 'Эксклюзивные проекты', 'Объекты, доступные только через ACC Homes'],
    ],
    cta1: 'Познакомиться с командой', cta2: 'Маршрут до ACC Plaza',
  },
};

export const PAGES = {
  about: {
    seg: { tr: 'hakkimizda', en: 'about', ru: 'o-nas' },
    nav: { tr: 'Biz Kimiz', en: 'About Us', ru: 'О нас' },
    tr: {
      title: 'Biz Kimiz', desc: 'ACC HOMES International Real Estate: Antalya ACC Plaza’da 50 iş ortağı ve 10 dilde hizmet veren kurumsal gayrimenkul ofisi.',
      lead: 'Antalya merkezli, kurumsal, şeffaf ve veriye dayalı çalışan uluslararası bir gayrimenkul ofisiyiz.',
      html: `
<h2>Hikayemiz</h2>
<p>ACC HOMES International Real Estate, mühendislik ve çok uluslu şirketlerde kurumsal satış geçmişine sahip Broker <a href="{{URL:broker}}">Ali Caner Can</a> tarafından 2024 yılında Antalya’da kuruldu. Çıkış noktamız basitti: Emlak sektörüne kurumsal dünyanın disiplinini, veriye dayalı fiyatlamayı ve gerçek bir müşteri deneyimini getirmek.</p>
<p>Bugün Muratpaşa Yeşilbahçe’deki 1.000 m²’lik genel merkezimiz ACC Plaza’da, yaklaşık 50 iş ortağımız ve 10 dilde hizmet veren ekibimizle konut, villa, yeni proje, ticari mülk ve yatırım danışmanlığında hizmet veriyoruz.</p>
{{STATS}}
<h2>Nasıl çalışırız</h2>
<div class="cards3">
<div><h3>Veriye dayalı fiyat</h3><p>Her mülkü emsal satışlar, bölge verisi ve piyasa analiziyle değerlendiririz. Gerçekçi fiyat, mülkün daha hızlı satılmasını sağlar.</p></div>
<div><h3>360° pazarlama</h3><p>Profesyonel fotoğraf, drone ve video; ilan portalları, Meta reklamları ve uluslararası pazarlama tek ekipten.</p></div>
<div><h3>Yetkiden tapuya şeffaf süreç</h3><p>Yetki belgesi, gösterim, pazarlık, sözleşme, banka ve tapu işlemleri her adımda yazılı ve takipli ilerler.</p></div>
</div>
<h2>Değerlerimiz</h2>
<ul class="ticks">
<li><b>Etik ve şeffaflık:</b> Müşterimize ve iş ortağımıza karşı her zaman açık ve dürüst çalışırız.</li>
<li><b>Koşulsuz paylaşım:</b> Bilgiyi, portföyü ve tecrübeyi ekip içinde paylaşırız.</li>
<li><b>Analitik yaklaşım:</b> Kararlarımızı tahminle değil veriyle veririz.</li>
<li><b>Global vizyon:</b> Antalya’yı dünyaya, dünyayı Antalya’ya tanıtırız.</li>
</ul>
<h2>Yetkili projelerimiz</h2>
<p>ACC HOMES, Ekiciler Grup’un Altıntaş’taki <b>Prime Lara</b> projesinin ve Döşemealtı Altınkale’deki <b>Antalle Concept Houses</b> projesinin yetkili satış ofisidir. Proje sahiplerine satış ofisi yönetimi, satış koordinasyonu ve 360° pazarlama hizmeti veriyoruz.</p>
<div class="ctas"><a class="btn" href="{{URL:team}}">Ekibimizle tanışın</a><a class="btn ghost" href="{{URL:services}}">Hizmetlerimiz</a></div>`,
    },
    en: {
      title: 'About Us', desc: 'ACC HOMES International Real Estate: a corporate real estate agency at ACC Plaza, Antalya, with 50 partners and service in 10 languages.',
      lead: 'An Antalya-based international real estate agency built on corporate standards, transparency and data.',
      html: `
<h2>Our story</h2>
<p>ACC HOMES International Real Estate was founded in Antalya in 2024 by broker <a href="{{URL:broker}}">Ali Caner Can</a>, an engineer with a background in corporate sales at multinational companies. The idea was simple: bring corporate discipline, data-driven pricing and a genuine client experience to real estate.</p>
<p>Today, from ACC Plaza, our 1,000 m² headquarters in Yeşilbahçe, Muratpaşa, around 50 partners serve clients in 10 languages across residential sales and rentals, villas, new developments, commercial property and investment advisory.</p>
{{STATS}}
<h2>How we work</h2>
<div class="cards3">
<div><h3>Data-driven pricing</h3><p>Every property is assessed against comparable sales and local market data. A realistic price sells faster.</p></div>
<div><h3>360° marketing</h3><p>Professional photography, drone and video, listing portals, Meta advertising and international marketing, all from one team.</p></div>
<div><h3>Transparent from listing to title deed</h3><p>Mandate, viewings, negotiation, contract, bank and title-deed steps are documented and tracked.</p></div>
</div>
<h2>Our values</h2>
<ul class="ticks">
<li><b>Ethics and transparency</b> with every client and partner.</li>
<li><b>Open sharing</b> of knowledge, listings and experience within the team.</li>
<li><b>An analytical approach:</b> decisions based on data, not guesswork.</li>
<li><b>A global outlook:</b> presenting Antalya to the world.</li>
</ul>
<h2>Authorised projects</h2>
<p>ACC HOMES is the authorised sales office for Ekiciler Grup’s <b>Prime Lara</b> in Altıntaş and for <b>Antalle Concept Houses</b> in Döşemealtı Altınkale, managing the sales office, sales coordination and 360° marketing.</p>
<div class="ctas"><a class="btn" href="{{URL:team}}">Meet the team</a><a class="btn ghost" href="{{URL:services}}">Our services</a></div>`,
    },
    ru: {
      title: 'О нас', desc: 'ACC HOMES International Real Estate — корпоративное агентство недвижимости в Анталии: 50 партнёров, обслуживание на 10 языках.',
      lead: 'Международное агентство недвижимости в Анталии: корпоративные стандарты, прозрачность и работа на основе данных.',
      html: `
<h2>Наша история</h2>
<p>ACC HOMES International Real Estate основано в Анталии в 2024 году брокером <a href="{{URL:broker}}">Али Джанером Джаном</a> — инженером с опытом корпоративных продаж в международных компаниях. Наша цель — привнести в сферу недвижимости корпоративную дисциплину, ценообразование на основе данных и настоящий клиентский сервис.</p>
<p>Сегодня в главном офисе ACC Plaza (1 000 м², Ешильбахче, Муратпаша) около 50 партнёров обслуживают клиентов на 10 языках: продажа и аренда жилья, виллы, новые проекты, коммерческая недвижимость и инвестиционный консалтинг.</p>
{{STATS}}
<h2>Как мы работаем</h2>
<div class="cards3">
<div><h3>Цена на основе данных</h3><p>Каждый объект оценивается по сопоставимым продажам и данным рынка.</p></div>
<div><h3>Маркетинг 360°</h3><p>Профессиональные фото, дрон и видео, порталы, реклама в Meta и международный маркетинг.</p></div>
<div><h3>Прозрачно до тапу</h3><p>Договор, показы, переговоры, банк и оформление тапу — всё документировано.</p></div>
</div>
<h2>Проекты</h2>
<p>ACC HOMES — официальный офис продаж проекта <b>Prime Lara</b> (Ekiciler Grup, Алтынташ) и <b>Antalle Concept Houses</b> (Дёшемеалты, Алтынкале).</p>
<div class="ctas"><a class="btn" href="{{URL:team}}">Наша команда</a><a class="btn ghost" href="{{URL:services}}">Услуги</a></div>`,
    },
  },

  broker: {
    seg: { tr: 'ali-caner-can', en: 'ali-caner-can', ru: 'ali-caner-can' },
    nav: { tr: 'Ali Caner Can', en: 'Ali Caner Can', ru: 'Али Джанер Джан' },
    tr: {
      title: 'Ali Caner Can — Broker ve Kurucu', desc: 'ACC HOMES Broker’ı ve kurucusu Ali Caner Can: makine mühendisi, çok uluslu şirketlerde kurumsal satış geçmişi, Antalya’da 290’ı aşkın işlem.',
      lead: 'Mühendis disiplini, kurumsal satış tecrübesi ve Antalya piyasasına hakimiyet.',
      html: `
<div class="bio">
<div class="biophoto">{{BROKER_PHOTO}}</div>
<div>
<p>Ali Caner Can, Yıldız Teknik Üniversitesi Makine Mühendisliği mezunudur. Gayrimenkule geçmeden önce Kraft Heinz, Nestlé, Hasbro, Reckitt Benckiser ve Bosch gibi çok uluslu şirketlerde yönetici ve kurumsal satış rollerinde çalıştı.</p>
<p>Antalya’ya kimseyi tanımadan geldi. Realty World MES Real Estate’te danışman olarak yüzlerce satış ve kiralama işlemi gerçekleştirdi ve 2023 yılı boyunca ofisin şampiyon danışmanı oldu. 2024’te ACC HOMES International Real Estate’i kurdu.</p>
<p>Bugün ACC Plaza’da yaklaşık 50 iş ortağından oluşan ekibin Broker’ıdır. Kendi portföyünde 290’ı aşkın satış ve kiralama işlemi bulunur. Rus, Ukraynalı ve Avrupalı alıcılara gerçekleştirdiği satışlarla yabancıya satışta güçlü bir geçmişe sahiptir.</p>
<p><a href="{{IG_CANER}}" target="_blank" rel="noopener">Instagram: @alicanercan.therealtor →</a></p>
</div></div>
<h2>Yaklaşımı</h2>
<div class="cards3">
<div><h3>Zor mülkleri satmak</h3><p>Başka ofislerde satılamayan mülkler sıklıkla ona gelir. Doğru fiyat, doğru fotoğraf ve video, doğru reklam ve iyi bir pazarlıkla bu mülkler el değiştirir.</p></div>
<div><h3>Veriyle konuşmak</h3><p>Fiyat önerisini emsal ve bölge verisine dayandırır. Mülk sahibine gerçekçi ve savunulabilir bir fiyat sunar.</p></div>
<div><h3>Uluslararası bakış</h3><p>Yabancı dil bilgisi ve uluslararası satış tecrübesiyle yabancı yatırımcıya anadilinde ve kurumsal standartta hizmet verir.</p></div>
</div>
<div class="ctas"><a class="btn" href="{{WA}}" target="_blank" rel="noopener">WhatsApp’tan yazın</a><a class="btn ghost" href="{{TEL}}">Hemen arayın</a></div>`,
    },
    en: {
      title: 'Ali Caner Can — Broker & Founder', desc: 'Ali Caner Can, broker and founder of ACC HOMES: mechanical engineer, corporate sales background, 290+ transactions in Antalya.',
      lead: 'An engineer’s discipline, corporate sales experience and deep knowledge of the Antalya market.',
      html: `
<div class="bio">
<div class="biophoto">{{BROKER_PHOTO}}</div>
<div>
<p>Ali Caner Can is a mechanical engineering graduate of Yıldız Technical University. Before real estate he held management and corporate sales roles at multinational companies including Kraft Heinz, Nestlé, Hasbro, Reckitt Benckiser and Bosch.</p>
<p>He came to Antalya without knowing anyone. As a consultant at Realty World MES Real Estate he completed hundreds of sales and rentals and was the office’s champion consultant throughout 2023. In 2024 he founded ACC HOMES International Real Estate.</p>
<p>Today he leads a team of around 50 partners at ACC Plaza and has completed more than 290 transactions himself, with a strong track record of sales to Russian, Ukrainian and European buyers.</p>
<p><a href="{{IG_CANER}}" target="_blank" rel="noopener">Instagram: @alicanercan.therealtor →</a></p>
</div></div>
<h2>His approach</h2>
<div class="cards3">
<div><h3>Selling the hard-to-sell</h3><p>Properties other agencies could not sell often come to him. The right price, photos, video, advertising and negotiation make the difference.</p></div>
<div><h3>Talking data</h3><p>Every price recommendation is backed by comparables and local data.</p></div>
<div><h3>International outlook</h3><p>Foreign investors get service in their own language, to corporate standards.</p></div>
</div>
<div class="ctas"><a class="btn" href="{{WA}}" target="_blank" rel="noopener">Message on WhatsApp</a><a class="btn ghost" href="{{TEL}}">Call now</a></div>`,
    },
    ru: {
      title: 'Али Джанер Джан — брокер и основатель', desc: 'Али Джанер Джан, брокер и основатель ACC HOMES: инженер-механик, опыт корпоративных продаж, более 290 сделок в Анталии.',
      lead: 'Инженерная дисциплина, опыт корпоративных продаж и глубокое знание рынка Анталии.',
      html: `
<div class="bio">
<div class="biophoto">{{BROKER_PHOTO}}</div>
<div>
<p>Али Джанер Джан окончил Технический университет Йылдыз по специальности «машиностроение». До прихода в недвижимость работал на руководящих позициях и в корпоративных продажах в Kraft Heinz, Nestlé, Hasbro, Reckitt Benckiser и Bosch.</p>
<p>Он приехал в Анталию, никого здесь не зная. В Realty World MES Real Estate провёл сотни сделок и стал лучшим консультантом офиса по итогам 2023 года. В 2024 году основал ACC HOMES International Real Estate.</p>
<p>Сегодня он руководит командой из примерно 50 партнёров в ACC Plaza; на его счету более 290 сделок, в том числе продажи покупателям из России, Украины и Европы.</p>
<p><a href="{{IG_CANER}}" target="_blank" rel="noopener">Instagram: @alicanercan.therealtor →</a></p>
</div></div>
<div class="ctas"><a class="btn" href="{{WA}}" target="_blank" rel="noopener">Написать в WhatsApp</a><a class="btn ghost" href="{{TEL}}">Позвонить</a></div>`,
    },
  },

  team: {
    seg: { tr: 'ekibimiz', en: 'our-team', ru: 'komanda' },
    nav: { tr: 'Ekibimiz', en: 'Our Team', ru: 'Команда' },
    tr: {
      title: 'Ekibimiz', desc: 'ACC HOMES ekibi: Broker, operasyon ve destek ekibi ile 10 dilde hizmet veren yaklaşık 50 iş ortağı.',
      lead: 'Yaklaşık 50 iş ortağı, 10 dil ve tek bir hedef: müşterimize kurumsal ve güvenilir bir deneyim yaşatmak.',
      html: `
<h2>Yönetim ve destek ekibi</h2>
{{TEAM}}
<h2>İş ortaklarımız</h2>
<p>ACC HOMES’ta danışmanlarımıza <b>iş ortağı</b> diyoruz. Her biri kendi bölgesinde ve uzmanlık alanında çalışan yaklaşık 50 profesyonel; konut, villa, yeni proje, ticari mülk ve arsa portföylerimizi yönetiyor. İş ortaklarımızın arkasında fotoğraf ve video ekibimiz, sosyal medya ve tasarım ekibimiz, CRM altyapımız ve düzenli ACC Akademi eğitimleri var.</p>
<h3>Hizmet verdiğimiz diller</h3>
{{LANGS}}
<div class="ctas"><a class="btn" href="{{URL:join}}">İş ortağımız olun</a><a class="btn ghost" href="{{URL:contact}}">Bize ulaşın</a></div>`,
    },
    en: {
      title: 'Our Team', desc: 'The ACC HOMES team: broker, operations and support staff, and around 50 partners serving clients in 10 languages.',
      lead: 'Around 50 partners, 10 languages and one goal: a corporate, trustworthy experience for every client.',
      html: `
<h2>Management and support</h2>
{{TEAM}}
<h2>Our partners</h2>
<p>At ACC HOMES we call our consultants <b>partners</b>. Around 50 professionals, each focused on their own area and specialism, manage our residential, villa, new-development, commercial and land portfolios, backed by our photo and video team, social media and design team, CRM and regular ACC Academy training.</p>
<h3>Languages we speak</h3>
{{LANGS}}
<div class="ctas"><a class="btn" href="{{URL:join}}">Join us</a><a class="btn ghost" href="{{URL:contact}}">Contact us</a></div>`,
    },
    ru: {
      title: 'Наша команда', desc: 'Команда ACC HOMES: брокер, операционный отдел и около 50 партнёров, работающих на 10 языках.',
      lead: 'Около 50 партнёров, 10 языков и одна цель — надёжный корпоративный сервис для каждого клиента.',
      html: `
<h2>Руководство и поддержка</h2>
{{TEAM}}
<h2>Наши партнёры</h2>
<p>Наших консультантов мы называем <b>партнёрами</b>. Около 50 специалистов работают с жилой и коммерческой недвижимостью, виллами, новыми проектами и землёй при поддержке фото- и видеокоманды, отдела соцсетей и дизайна, CRM и регулярного обучения в ACC Academy.</p>
<h3>Языки обслуживания</h3>
{{LANGS}}
<div class="ctas"><a class="btn" href="{{URL:contact}}">Связаться с нами</a></div>`,
    },
  },

  services: {
    seg: { tr: 'hizmetlerimiz', en: 'services', ru: 'uslugi' },
    nav: { tr: 'Hizmetlerimiz', en: 'Services', ru: 'Услуги' },
    tr: {
      title: 'Hizmetlerimiz', desc: 'ACC HOMES hizmetleri: konut satış ve kiralama, mülk yönetimi, proje pazarlaması, yabancıya satış, değerleme ve yatırım danışmanlığı.',
      lead: 'Satıştan kiralamaya, proje pazarlamasından yabancı yatırımcıya kadar uçtan uca gayrimenkul hizmeti.',
      html: `
<div class="svc">
<div><span>🏠</span><h3>Satış</h3><p>Konut, rezidans ve villa satışında veriye dayalı fiyatlama, profesyonel tanıtım ve yetkiden tapuya kadar süreç yönetimi.</p></div>
<div><span>🔑</span><h3>Kiralama</h3><p>Doğru kiracı seçimi, kira sözleşmesi ve teslim süreçleri. Mülk sahibine ve kiracıya şeffaf, yazılı süreç.</p></div>
<div><span>🛠️</span><h3>Mülk yönetimi</h3><p>Yıl boyu kira takibi, kiracı iletişimi ve sorun çözümü. Her onarım mülk sahibinin önceden onayıyla yapılır.</p></div>
<div><span>🏗️</span><h3>Proje pazarlaması</h3><p>Müteahhitlere satış ofisi yönetimi, satış koordinasyonu ve 360° pazarlama. Prime Lara ve Antalle projelerinin yetkili satış ofisiyiz.</p></div>
<div><span>🌍</span><h3>Yabancıya satış</h3><p>10 dilde hizmet; yabancı alıcılar için tapu, vekaletname ve resmi süreçlerde baştan sona destek.</p></div>
<div><span>📊</span><h3>Değerleme ve fiyat analizi</h3><p>Emsal satışlar ve bölge verisiyle hazırlanan, savunulabilir fiyat raporu.</p></div>
<div><span>📈</span><h3>Yatırım danışmanlığı</h3><p>Kira getirisi, değer artışı ve proje yatırımları için bölge ve fırsat analizi.</p></div>
<div><span>🏬</span><h3>Ticari mülk ve arsa</h3><p>Dükkan, ofis, otel ve yatırım arsası alım satımı ile kiralamasında uzman danışmanlık.</p></div>
</div>
<h2>Mülk sahiplerine ücretsiz sunduklarımız</h2>
<ul class="ticks">
<li>Profesyonel fotoğraf, drone ve video çekimi</li>
<li>İlan portallarında yayın ve Meta (Instagram, Facebook) reklamları</li>
<li>Gösterim, pazarlık, sözleşme, banka ve tapu takibi</li>
<li>Veriye dayalı fiyat analizi ve 10 dilde hizmet</li>
</ul>
<div class="ctas"><a class="btn" href="{{WA}}" target="_blank" rel="noopener">Ücretsiz değerleme isteyin</a><a class="btn ghost" href="{{URL:contact}}">Bize ulaşın</a></div>`,
    },
    en: {
      title: 'Our Services', desc: 'ACC HOMES services: residential sales and rentals, property management, project marketing, sales to foreign buyers, valuation and investment advice.',
      lead: 'End-to-end real estate services, from sales and rentals to project marketing and international investors.',
      html: `
<div class="svc">
<div><span>🏠</span><h3>Sales</h3><p>Data-driven pricing, professional marketing and full management from mandate to title deed.</p></div>
<div><span>🔑</span><h3>Rentals</h3><p>The right tenant, a clear contract and a documented handover for owners and tenants.</p></div>
<div><span>🛠️</span><h3>Property management</h3><p>Year-round rent tracking, tenant communication and issue resolution. Every repair is pre-approved by the owner.</p></div>
<div><span>🏗️</span><h3>Project marketing</h3><p>Sales-office management, sales coordination and 360° marketing for developers. Authorised sales office for Prime Lara and Antalle.</p></div>
<div><span>🌍</span><h3>Sales to foreign buyers</h3><p>Service in 10 languages and full support with title deed, power of attorney and official procedures.</p></div>
<div><span>📊</span><h3>Valuation</h3><p>A defensible price report built on comparable sales and local data.</p></div>
<div><span>📈</span><h3>Investment advice</h3><p>Area and opportunity analysis for rental yield, capital growth and off-plan investments.</p></div>
<div><span>🏬</span><h3>Commercial and land</h3><p>Shops, offices, hotels and investment land, for sale or rent.</p></div>
</div>
<h2>Free for property owners</h2>
<ul class="ticks">
<li>Professional photography, drone and video</li>
<li>Portal listings and Meta (Instagram, Facebook) advertising</li>
<li>Viewings, negotiation, contract, bank and title-deed follow-up</li>
<li>Data-driven pricing and service in 10 languages</li>
</ul>
<div class="ctas"><a class="btn" href="{{WA}}" target="_blank" rel="noopener">Request a free valuation</a><a class="btn ghost" href="{{URL:contact}}">Contact us</a></div>`,
    },
    ru: {
      title: 'Наши услуги', desc: 'Услуги ACC HOMES: продажа и аренда, управление недвижимостью, маркетинг проектов, продажа иностранцам, оценка и инвестиционный консалтинг.',
      lead: 'Полный цикл услуг в сфере недвижимости — от продажи и аренды до сопровождения иностранных инвесторов.',
      html: `
<div class="svc">
<div><span>🏠</span><h3>Продажа</h3><p>Цена на основе данных, профессиональная презентация и сопровождение до тапу.</p></div>
<div><span>🔑</span><h3>Аренда</h3><p>Подбор арендатора, договор и передача объекта — прозрачно для обеих сторон.</p></div>
<div><span>🛠️</span><h3>Управление</h3><p>Контроль арендных платежей, связь с арендатором и решение вопросов круглый год.</p></div>
<div><span>🏗️</span><h3>Маркетинг проектов</h3><p>Офис продаж, координация и маркетинг 360° для застройщиков.</p></div>
<div><span>🌍</span><h3>Продажа иностранцам</h3><p>Обслуживание на 10 языках, помощь с тапу и доверенностью.</p></div>
<div><span>📊</span><h3>Оценка</h3><p>Отчёт о цене на основе сопоставимых сделок.</p></div>
<div><span>📈</span><h3>Инвестиции</h3><p>Анализ доходности аренды и роста стоимости.</p></div>
<div><span>🏬</span><h3>Коммерция и земля</h3><p>Магазины, офисы, отели и инвестиционные участки.</p></div>
</div>
<div class="ctas"><a class="btn" href="{{WA}}" target="_blank" rel="noopener">Бесплатная оценка</a><a class="btn ghost" href="{{URL:contact}}">Связаться</a></div>`,
    },
  },

  join: {
    seg: { tr: 'is-ortagi-ol', en: 'join-us', ru: 'karera' },
    nav: { tr: 'İş Ortağımız Olun', en: 'Join Us', ru: 'Карьера' },
    tr: {
      title: 'İş Ortağımız Olun', desc: 'ACC HOMES’ta danışman değil iş ortağı arıyoruz: masa ücreti ve aylık aidat yok, %70 iş ortağına, profesyonel fotoğraf-video ve marka desteği.',
      lead: 'Danışman aramıyoruz, iş ortağı arıyoruz.',
      html: `
<p>ACC HOMES’ta “iş ortağı”, ekibimize katılan gayrimenkul danışmanıdır. Şirket ortaklığı değil; kendi işinin lideri olan, ACC markasının ve altyapısının gücüyle çalışan bir profesyonel demektir.</p>
<h2>Şeffaf ve adil model</h2>
<div class="cards3">
<div><h3>Masa ücreti yok</h3><p>Sabit masa gideri, aylık aidat veya royalty ödemezsiniz.</p></div>
<div><h3>%70 sizin</h3><p>İşlem yaptığınızda kazancın %70’i sizin, %30’u ofisin. ACC HOMES yalnızca siz kazandığınızda kazanır.</p></div>
<div><h3>Arkanızda güçlü bir ekip</h3><p>Profesyonel fotoğraf ve video ekibi, bireysel marka ve sosyal medya desteği, CRM ve ACC Akademi eğitimleri.</p></div>
</div>
<h2>Kimi arıyoruz</h2>
<ul class="ticks">
<li>Sektörde aktif, portföyü ve çevresi olan, daha kurumsal bir yapıda büyümek isteyen gayrimenkul profesyonelleri</li>
<li>Kurumsal hayatta veya kendi işinde tecrübe kazanmış, iletişim ve müzakere gücü yüksek girişimciler. Sektör deneyiminiz olmayabilir; gayrimenkulün dinamiklerini ACC Akademi ile birlikte öğreniriz.</li>
</ul>
<h2>Neler kazanırsınız</h2>
<ul class="ticks">
<li>1.000 m²’lik ACC Plaza’da modern çalışma alanı</li>
<li>Prime Lara ve Antalle gibi yetkili proje portföyleri</li>
<li>Ofis içi portföy ve müşteri paylaşımıyla sinerji</li>
<li>Google’da {{RATING}} puan ve {{REVIEWS}} yorumluk güçlü bir marka</li>
</ul>
<div class="ctas"><a class="btn" href="{{WA_JOIN}}" target="_blank" rel="noopener">WhatsApp’tan başvurun</a><a class="btn ghost" href="{{TEL}}">Hemen arayın</a></div>`,
    },
    en: {
      title: 'Join Us', desc: 'At ACC HOMES we are looking for partners, not agents: no desk fee, no monthly fee, 70% to the partner, professional photo, video and branding support.',
      lead: 'We are not looking for agents. We are looking for partners.',
      html: `
<p>At ACC HOMES a “partner” is a real estate consultant who joins our team, not a shareholder: a professional who leads their own business with the strength of the ACC brand and infrastructure behind them.</p>
<h2>A transparent, fair model</h2>
<div class="cards3">
<div><h3>No desk fee</h3><p>No fixed desk cost, monthly fee or royalty.</p></div>
<div><h3>70% is yours</h3><p>When you close, 70% is yours and 30% goes to the office. We only earn when you earn.</p></div>
<div><h3>A strong team behind you</h3><p>Photo and video team, personal branding and social media support, CRM and ACC Academy training.</p></div>
</div>
<div class="ctas"><a class="btn" href="{{WA_JOIN}}" target="_blank" rel="noopener">Apply on WhatsApp</a><a class="btn ghost" href="{{TEL}}">Call now</a></div>`,
    },
    ru: {
      title: 'Карьера в ACC HOMES', desc: 'ACC HOMES ищет партнёров: без платы за рабочее место и ежемесячных взносов, 70% комиссии — партнёру.',
      lead: 'Мы ищем не агентов, а партнёров.',
      html: `
<div class="cards3">
<div><h3>Без платы за место</h3><p>Никаких фиксированных платежей и ежемесячных взносов.</p></div>
<div><h3>70% — ваши</h3><p>С каждой сделки 70% получаете вы, 30% — офис.</p></div>
<div><h3>Команда поддержки</h3><p>Фото и видео, личный бренд, соцсети, CRM и обучение ACC Academy.</p></div>
</div>
<div class="ctas"><a class="btn" href="{{WA_JOIN}}" target="_blank" rel="noopener">Написать в WhatsApp</a></div>`,
    },
  },
};

export const POSTS = [
  {
    slug: 'altintas-ev-alirken-dikkat-edilmesi-gerekenler',
    date: '2026-11-15',
    tr: {
      title: 'Altıntaş’ta Ev Alırken Dikkat Edilmesi Gereken 8 Nokta',
      desc: 'Antalya Aksu Altıntaş’ta daire veya villa alırken tapu, iskan, site aidatı, kredi uygunluğu ve konum açısından kontrol etmeniz gerekenler.',
      html: `
<p>Altıntaş, Antalya’nın Aksu ilçesinde, Lara ve havalimanı aksına yakın, yeni konut projeleriyle hızla gelişen bir bölge. Yeni yapı stoku fazla olduğu için seçenek çok; doğru kararı vermek için şu noktaları kontrol etmenizi öneriyoruz.</p>
<h2>1. Tapu türü: kat irtifakı mı, kat mülkiyeti mi</h2>
<p>Yeni projelerde tapu çoğu zaman önce kat irtifakı olarak verilir, iskan alındıktan sonra kat mülkiyetine geçilir. Satın alacağınız dairenin tapu türünü ve kat mülkiyetine geçiş durumunu mutlaka sorun.</p>
<h2>2. İskan (yapı kullanma izin belgesi)</h2>
<p>İskanı alınmış bir bina; elektrik, su ve doğalgaz aboneliklerinde ve konut kredisinde süreci kolaylaştırır. İskan durumunu belgeyle teyit edin.</p>
<h2>3. Krediye uygunluk</h2>
<p>Kredi kullanacaksanız bankanın ekspertiz değeri ve tapu durumu belirleyicidir. Teklif vermeden önce ön değerleme yaptırmak sürpriz yaşamanızı önler.</p>
<h2>4. Net ve brüt metrekare</h2>
<p>İlanlarda brüt metrekare öne çıkar. Yaşam alanını gösteren net metrekareyi ve daireye düşen ortak alan payını ayrıca sorun.</p>
<h2>5. Site aidatı ve sosyal alanlar</h2>
<p>Havuz, otopark, güvenlik ve fitness gibi alanlar yaşam kalitesini artırır ama aidata yansır. Güncel aidat tutarını ve neleri kapsadığını öğrenin.</p>
<h2>6. Konum ve ulaşım</h2>
<p>Ana yollara, okullara, markete ve plaja mesafe hem yaşam hem de ileride kira ve satış değeri için önemlidir. Örneğin Prime Lara projesinden Lara plajlarına yaklaşık 3 km, Antalya Havalimanı’na yaklaşık 5 km mesafe vardır.</p>
<h2>7. Emsal fiyatlar</h2>
<p>Aynı bölgede, benzer yaş ve metrekaredeki dairelerin gerçekleşen satış fiyatlarına bakın. İlan fiyatı ile satış fiyatı aynı değildir.</p>
<h2>8. Yetkili ve kurumsal bir danışmanla çalışın</h2>
<p>Yetki belgeli, sözleşmeyle ve şeffaf çalışan bir ofis; tapu, banka ve ekspertiz süreçlerinde zaman ve para kaybını önler.</p>
<p><b>Altıntaş’ta size uygun daireyi birlikte bulalım.</b> <a href="{{URL:list}}">Güncel ilanlarımıza göz atın</a> ya da <a href="{{WA}}" target="_blank" rel="noopener">WhatsApp’tan yazın</a>.</p>`,
    },
    en: {
      title: 'Buying in Altintas, Antalya: 8 Things to Check',
      desc: 'What to check when buying an apartment or villa in Altintas, Antalya: title deed type, occupancy permit, fees, mortgage eligibility and location.',
      html: `
<p>Altintas, in Antalya’s Aksu district near the Lara and airport corridor, is growing quickly with new residential projects. With so much choice, these are the points we recommend checking.</p>
<h2>1. Title deed type</h2><p>New-build apartments often start on a “kat irtifakı” deed and move to full “kat mülkiyeti” after the occupancy permit. Ask which one applies.</p>
<h2>2. Occupancy permit (iskan)</h2><p>A building with its iskan makes utility connections and mortgages simpler. Confirm it with documents.</p>
<h2>3. Mortgage eligibility</h2><p>If you need a loan, the bank’s valuation and the deed status matter. A pre-valuation avoids surprises.</p>
<h2>4. Net vs gross m²</h2><p>Listings usually show gross area. Ask for the net living area as well.</p>
<h2>5. Complex fees and facilities</h2><p>Pools, parking, security and gyms add value but also monthly fees. Ask what the fee covers.</p>
<h2>6. Location</h2><p>Distance to main roads, schools, shops and the beach matters for living and resale. From the Prime Lara project, for example, Lara beaches are about 3 km and Antalya Airport about 5 km away.</p>
<h2>7. Comparable prices</h2><p>Look at completed sale prices for similar properties, not just asking prices.</p>
<h2>8. Work with an authorised, corporate agency</h2><p>A documented, transparent process protects your time and money.</p>
<p><b>Let’s find the right home for you in Altintas.</b> <a href="{{URL:list}}">See our listings</a> or <a href="{{WA}}" target="_blank" rel="noopener">message us on WhatsApp</a>.</p>`,
    },
  },
  {
    slug: 'evimi-satarken-dogru-fiyat-nasil-belirlenir',
    date: '2026-11-15',
    tr: {
      title: 'Evinizi Satarken Doğru Fiyat Nasıl Belirlenir',
      desc: 'Evinizi hızlı ve değerinde satmak için fiyatı nasıl belirlemelisiniz? ACC HOMES’un veriye dayalı değerleme yaklaşımı.',
      html: `
<p>Mülk sahiplerinin en sık yaşadığı sorun, evin satılabilir fiyatın üzerinde ilana çıkmasıdır. Yüksek fiyatlı ilan haftalarca bekler, “neden satılmıyor” sorusu alıcıların gözünde mülkün değerini düşürür ve sonunda daha düşük bir fiyata razı olmak zorunda kalınır.</p>
<h2>Fiyatı belirleyen üç veri</h2>
<ul class="ticks">
<li><b>Gerçekleşen emsal satışlar:</b> İlan fiyatları değil, benzer evlerin gerçekten el değiştirdiği fiyatlar.</li>
<li><b>Bölgedeki rekabet:</b> Şu anda satışta olan benzer evler alıcının karşılaştırdığı seçeneklerdir.</li>
<li><b>Evin kendine özgü artıları ve eksileri:</b> Kat, cephe, manzara, bakım durumu, site imkanları, tapu ve iskan durumu.</li>
</ul>
<h2>Doğru fiyat, doğru sunumla değer kazanır</h2>
<p>Profesyonel fotoğraf, drone ve video, doğru yazılmış bir ilan ve hedefli reklam; evin ilk iki haftada doğru alıcıya ulaşmasını sağlar. Bu süre, ilanın en çok ilgi gördüğü dönemdir.</p>
<h2>ACC HOMES ile değerleme</h2>
<p>Evinizi emsal satışlar ve bölge verisiyle değerlendiriyor, size savunulabilir bir fiyat aralığı sunuyoruz. Fotoğraf, video, ilan ve reklam masrafları bizden.</p>
<p><a href="{{WA}}" target="_blank" rel="noopener">Ücretsiz değerleme için WhatsApp’tan yazın →</a></p>`,
    },
    en: {
      title: 'Selling Your Home: How to Set the Right Price',
      desc: 'How to price your home to sell quickly and at its true value: the data-driven valuation approach of ACC HOMES.',
      html: `
<p>The most common problem sellers face is listing above a sellable price. An overpriced home sits for weeks, buyers start to wonder why, and the owner often ends up accepting less.</p>
<h2>Three data points that set the price</h2>
<ul class="ticks">
<li><b>Completed comparable sales,</b> not asking prices.</li>
<li><b>Current competition:</b> similar homes on the market now.</li>
<li><b>The home itself:</b> floor, aspect, view, condition, facilities, deed and permit status.</li>
</ul>
<h2>The right price needs the right presentation</h2>
<p>Professional photos, drone and video, a well-written listing and targeted advertising help your home reach the right buyer in the first two weeks, when interest is highest.</p>
<p><a href="{{WA}}" target="_blank" rel="noopener">Message us on WhatsApp for a free valuation →</a></p>`,
    },
  },
];
