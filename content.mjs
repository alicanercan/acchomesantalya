// ACC HOMES — kurumsal sayfa içerikleri (TR / EN / RU)
// {{WA_JOIN}}, {{WA}}, {{TEL}}, {{MAPS}}, {{IG}}, {{IG_CANER}}, {{URL:sayfa}}, {{RATING}}, {{REVIEWS}} derleme sırasında doldurulur.

export const TEAM = [
  { name: 'Ali Caner Can', initials: 'AC', role: { tr: 'Broker ve Kurucu', en: 'Broker & Founder', ru: 'Брокер и основатель' }, link: 'broker' },
  { name: 'Esma Özdal', initials: 'EÖ', role: { tr: 'Genel Koordinatör', en: 'General Coordinator', ru: 'Генеральный координатор' } },
  { name: 'Okan Akgün', initials: 'OA', role: { tr: 'Ofis Yöneticisi', en: 'Office Manager', ru: 'Офис-менеджер' } },
  { name: 'Melissa Enriquez Sedita', initials: 'ME', role: { tr: 'Uluslararası Satış Yöneticisi', en: 'International Sales Manager', ru: 'Руководитель международных продаж' } },
  { name: 'Naz Bensu Taşbaş', initials: 'BT', role: { tr: 'Sosyal Medya Uzmanı', en: 'Social Media Specialist', ru: 'Специалист по соцсетям' } },
  { name: 'Derya Plyatner', initials: 'DP', role: { tr: 'Grafik Tasarım Uzmanı', en: 'Graphic Design Specialist', ru: 'Графический дизайнер' } },
  { name: 'Zeynep Çarıkçı', initials: 'ZÇ', role: { tr: 'Ofis Servis Yetkilisi', en: 'Office Services', ru: 'Офисный сервис' } },
  { name: 'Kamil Bey', initials: 'KB', role: { tr: 'Ofis Kedimiz', en: 'Office Cat', ru: 'Офисный кот' } },
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
<h2>Kurucumuz</h2>
{{FOUNDER}}
<h2>İnsan odaklı, kaliteli bir ekip</h2>
<p>ACC HOMES büyürken sayıya değil insana yatırım yaptı. 60 m²’lik bir ofis katından bugün yaklaşık 50 iş ortağına ulaştık; her biri markamızı ve müşterimizi gönül rahatlığıyla emanet edebileceğimiz, referansları gerçek profesyoneller.</p>
<p>Biz danışman değil, <b>iş ortağı</b> arıyoruz. Ekibimiz mühendislik, havacılık, askeriye, finans, satış, pazarlama, reklam, hukuk, eğitim, turizm, inşaat, yazılım, kurumsal yönetim ve insan kaynakları gibi çok farklı geçmişlerden geliyor. Bu çeşitlilik, her müşteriye kendi diliyle ve kendi ihtiyacına göre hizmet vermemizi sağlıyor.</p>
<ul class="ticks cols2"><li>Etik, şeffaf ve güvenilir bir çalışma ortamı</li><li>Ofis içi mentorluk ve saha eğitimi</li><li>Koşulsuz bilgi ve portföy paylaşımı</li><li>Her iş ortağına profesyonel fotoğraf, drone, video ve kişisel marka desteği</li></ul>
<h2>ACC Plaza’dan kareler</h2>
{{OFFICE}}
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
<h2>Yolculuğumuz</h2>
{{TIMELINE}}
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
<h2>Our founder</h2>
{{FOUNDER}}
<h2>A people-first, quality team</h2>
<p>As ACC HOMES has grown, we have invested in people rather than headcount. From a single 60 m² office floor we have grown to around 50 partners, each of them a genuine professional with real references, to whom we can entrust our brand and our clients with confidence.</p>
<p>We are not looking for agents; we look for <b>partners</b>. Our team comes from engineering, aviation, the military, finance, sales, marketing, advertising, law, education, tourism, construction, software, corporate management and HR. That diversity lets us serve every client in their own language and on their own terms.</p>
<ul class="ticks cols2"><li>An ethical, transparent and trustworthy workplace</li><li>In-office mentoring and field training</li><li>Unconditional sharing of knowledge and listings</li><li>Professional photo, drone, video and personal-branding support for every partner</li></ul>
<h2>Inside ACC Plaza</h2>
{{OFFICE}}
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
<h2>Our journey</h2>
{{TIMELINE}}
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
<h2>ACC Plaza</h2>
{{OFFICE}}
<h2>Как мы работаем</h2>
<div class="cards3">
<div><h3>Цена на основе данных</h3><p>Каждый объект оценивается по сопоставимым продажам и данным рынка.</p></div>
<div><h3>Маркетинг 360°</h3><p>Профессиональные фото, дрон и видео, порталы, реклама в Meta и международный маркетинг.</p></div>
<div><h3>Прозрачно до тапу</h3><p>Договор, показы, переговоры, банк и оформление тапу — всё документировано.</p></div>
</div>
<h2>Наш путь</h2>
{{TIMELINE}}
<h2>Проекты</h2>
<p>ACC HOMES — официальный офис продаж проекта <b>Prime Lara</b> (Ekiciler Grup, Алтынташ) и <b>Antalle Concept Houses</b> (Дёшемеалты, Алтынкале).</p>
<div class="ctas"><a class="btn" href="{{URL:team}}">Наша команда</a><a class="btn ghost" href="{{URL:services}}">Услуги</a></div>`,
    },
  },

  broker: {
    seg: { tr: 'ali-caner-can', en: 'ali-caner-can', ru: 'ali-caner-can' },
    nav: { tr: 'Ali Caner Can', en: 'Ali Caner Can', ru: 'Али Джанер Джан' },
    tr: {
      title: 'Ali Caner Can — Broker ve Kurucu', desc: 'ACC HOMES Broker’ı ve kurucusu Ali Caner Can: Antalya doğumlu makine mühendisi, Kraft Heinz, Nestlé, Hasbro, Reckitt Benckiser ve Bosch’ta kurumsal satış, Antalya’da 290’ı aşkın işlem ve yaklaşık 50 kişilik ekip.',
      lead: 'Mühendis disiplini, çok uluslu şirketlerden gelen kurumsal satış tecrübesi ve Antalya piyasasına hakimiyet.',
      html: `
<div class="bio">
<div class="biophoto">{{BROKER_PHOTO}}</div>
<div>
<p class="eyebrow">Broker & Owner · ACC HOMES International Real Estate</p>
<p>Ali Caner Can, 1990’da Antalya’da doğdu. Antalya Başöğretmen Atatürk İlköğretim Okulu ve Kuleli Askeri Lisesi’nin ardından Yıldız Teknik Üniversitesi Makine Mühendisliği bölümünü onur derecesiyle bitirdi. Daha öğrenciyken global şirketlerde uzun dönem stajlar yaptı ve mezun olmadan iş hayatına başladı.</p>
<p>Kariyerinin ilk on yılını Bosch, Reckitt Benckiser, Hasbro, Nestlé ve The Kraft Heinz Company gibi çok uluslu şirketlerde satış, pazarlama ve trade marketing alanında geçirdi; giriş seviyesinden kanal müdürlüğüne kadar yükseldi. 2022’de memleketi Antalya’ya dönerek gayrimenkule geçti, 2024’te ACC HOMES International Real Estate’i kurdu.</p>
<p>Bugün 1.000 m²’lik ACC Plaza’da yaklaşık 50 iş ortağından oluşan ekibin Broker’ıdır ve kendi portföyünde 290’ı aşkın satış ve kiralama işlemi bulunur. İş dışında profesyonel bir tenisçidir; kortta da sahadaki gibi disiplinli ve rekabetçidir.</p>
</div></div>
{{BROKER_STATS}}
<h2>Kariyer yolculuğu</h2>
<ol class="timeline">
<li><b>Antalya</b><p>Antalya Başöğretmen Atatürk İlköğretim Okulu. İlk ve ortaokul yılları memleketi Antalya’da geçti.</p></li>
<li><b>2004–2008</b><p>Kuleli Askeri Lisesi. Disiplin ve sorumluluk duygusunun temeli; bugün hâlâ geniş bir Kuleli mezunları ağıyla bağlantıda.</p></li>
<li><b>2009–2013</b><p>Yıldız Teknik Üniversitesi, Makine Mühendisliği (onur derecesi). Öğrenciyken global şirketlerde uzun dönem stajlar.</p></li>
<li><b>2013–2021</b><p>Bosch, Reckitt Benckiser, Hasbro, Nestlé ve The Kraft Heinz Company’de satış, pazarlama ve trade marketing; ulusal zincir hesaplar ve e-ticaret kanalı yönetimi, Körfez ülkelerinden sorumlu trade marketing görevleri; giriş seviyesinden kanal müdürlüğüne.</p></li>
<li><b>2022</b><p>Antalya’ya dönüş ve Realty World’de gayrimenkul danışmanlığı. Sektörde hiçbir bağlantısı olmadan, her işi büyük küçük ayırmadan alarak başladı.</p></li>
<li><b>2023</b><p>Realty World MES Real Estate’in yıl boyunca en çok işlem yapan, şampiyon danışmanı.</p></li>
<li><b>Mayıs 2024</b><p>ACC HOMES International Real Estate’i 60 m²’lik bir ofis katında kurdu.</p></li>
<li><b>2025</b><p>Capital İnşaat’ın 216 daireli Altıntaş projesinde satış, pazarlama ve ekip yönetimi. Aralık’ta Antalle Concept Houses Open House’u ve ACC HOMES sponsorluğunda, Danube Properties iş birliğiyle Akra Hotel’de 100’ü aşkın yatırımcının katıldığı Dubai buluşmasını düzenledi. ACC Day ile 800 öğrenciye ulaştı.</p></li>
<li><b>2026</b><p>1.000 m²’lik ACC Plaza açıldı; ekip yaklaşık 50 iş ortağına ulaştı. ACC HOMES, Prime Lara ve Antalle Concept Houses’un yetkili satış ofisi oldu.</p></li>
</ol>
<h2>Kurumsal dünyadan gelen tecrübe</h2>
<p>Gayrimenkule geçmeden önce Türkiye’nin en büyük perakende ve e-ticaret kanallarıyla doğrudan çalıştı: Migros, Carrefour, BİM, ŞOK, A101, Hepsiburada, Yemeksepeti, Getir, Boyner ve Trendyol bunlardan bazıları. Birleşik Arap Emirlikleri, Katar, Bahreyn, Kuveyt, Suudi Arabistan ve Lübnan pazarlarından sorumlu trade marketing görevleri üstlendi; ajans ve müşteri yöneticiliği yaptı.</p>
<p>Bu geçmiş, ACC HOMES’un çalışma biçimine doğrudan yansır: ölçülebilir hedefler, süreç takibi, CRM, profesyonel pazarlama ve müşteriyle şeffaf iletişim.</p>
<h2>Uzmanlık alanları</h2>
<div class="cards3">
<div><h3>Konut ve lüks gayrimenkul</h3><p>Satılık ve kiralık konut, villa, rezidans ve ticari gayrimenkulde alım, satım ve yatırım danışmanlığı. Başka ofislerde satılamayan mülkler sıklıkla ona gelir; doğru fiyat, fotoğraf, video ve reklamla el değiştirir.</p></div>
<div><h3>Proje pazarlaması</h3><p>Müteahhit ve inşaat firmalarına satış ve pazarlama stratejisi, ekip kurulumu, CRM, fiyatlama ve pazara giriş danışmanlığı. Capital İnşaat, Antalle Concept Houses ve Prime Lara bu çalışmaların örnekleridir.</p></div>
<div><h3>Uluslararası yatırım</h3><p>Yabancı yatırımcılara kendi dilinde, kurumsal standartta hizmet. Rus, Ukraynalı ve Avrupalı alıcılara satışlar; Danube Properties ile Dubai yatırım fırsatları.</p></div>
<div><h3>Veriye dayalı fiyatlama</h3><p>Her fiyat önerisi emsal, bölge ve piyasa verisine dayanır. Mülk sahibine gerçekçi ve savunulabilir bir fiyat sunulur.</p></div>
<div><h3>Kat karşılığı ve kentsel dönüşüm</h3><p>Arsa sahibi ile müteahhidi doğru şartlarla buluşturur, süreci baştan sona takip eder.</p></div>
<div><h3>Ekip ve mentorluk</h3><p>Mühendislik, havacılık, finans, hukuk ve kurumsal yönetim gibi farklı geçmişlerden gelen iş ortaklarıyla omuz omuza çalışır; ofis içi mentorluk ve saha eğitimi verir.</p></div>
</div>
<h2>Değerleri</h2>
<p>Şeffaflık, dürüstlük ve etik, mesleğinin merkezindedir. 2022’den bu yana her bayramda ve özel günde müşterilerinin her birine tek tek mesaj atar; ekibinden de aynısını bekler. ACC HOMES’ta her yıl bir gün ticari işler durur ve tüm ekip yalnızca topluma faydaya odaklanır: <a href="{{URL:events}}">ACC Day</a>.</p>
<h2>Diller ve topluluk</h2>
<ul class="chips"><li>Türkçe (anadil)</li><li>İngilizce (ileri)</li></ul>
<p>Yabancı yatırımcılara, ekibinin konuştuğu 10 dilde hizmet verilir.</p>
<p>Antalya İş İnsanları Derneği (ANTİAD) üyesi ve Beşiktaş JK Kongre Üyesi.</p>
{{BROKER_GALLERY}}
{{BROKER_LINKS}}
<div class="ctas"><a class="btn" href="{{WA}}" target="_blank" rel="noopener">WhatsApp’tan yazın</a><a class="btn ghost" href="{{TEL}}">Hemen arayın</a></div>`,
    },
    en: {
      title: 'Ali Caner Can — Broker & Founder', desc: 'Ali Caner Can, broker and founder of ACC HOMES: Antalya-born mechanical engineer, corporate sales at Kraft Heinz, Nestlé, Hasbro, Reckitt Benckiser and Bosch, 290+ transactions and a team of around 50 in Antalya.',
      lead: 'An engineer’s discipline, corporate sales experience from multinationals and deep knowledge of the Antalya market.',
      html: `
<div class="bio">
<div class="biophoto">{{BROKER_PHOTO}}</div>
<div>
<p class="eyebrow">Broker & Owner · ACC HOMES International Real Estate</p>
<p>Ali Caner Can was born in Antalya in 1990. After Antalya Başöğretmen Atatürk Primary School and Kuleli Military High School he graduated with honours in Mechanical Engineering from Yıldız Technical University. While still a student he completed long internships at global companies and started his professional career before graduating.</p>
<p>He spent the first decade of his career in sales, marketing and trade marketing at multinationals including Bosch, Reckitt Benckiser, Hasbro, Nestlé and The Kraft Heinz Company, rising from entry level to channel manager. In 2022 he returned to his home city of Antalya and moved into real estate, and in 2024 he founded ACC HOMES International Real Estate.</p>
<p>Today he is the broker of a team of around 50 partners at the 1,000 m² ACC Plaza, and has completed more than 290 sales and rentals himself. Outside work he is a professional tennis player, bringing the same discipline and competitive drive to the court.</p>
</div></div>
{{BROKER_STATS}}
<h2>Career journey</h2>
<ol class="timeline">
<li><b>Antalya</b><p>Antalya Başöğretmen Atatürk Primary School; he spent his school years in his home city of Antalya.</p></li>
<li><b>2004–2008</b><p>Kuleli Military High School, the foundation of his discipline; he is still connected to a wide network of Kuleli alumni.</p></li>
<li><b>2009–2013</b><p>Yıldız Technical University, Mechanical Engineering (honours), with long internships at global companies.</p></li>
<li><b>2013–2021</b><p>Sales, marketing and trade marketing at Bosch, Reckitt Benckiser, Hasbro, Nestlé and The Kraft Heinz Company: national chain accounts, the e-commerce channel and Gulf-region trade marketing, rising from entry level to channel manager.</p></li>
<li><b>2022</b><p>Returned to Antalya and became a real estate consultant at Realty World, starting with no industry network and taking on every job, big or small.</p></li>
<li><b>2023</b><p>Champion consultant of the year at Realty World MES Real Estate, with the most transactions in the office.</p></li>
<li><b>May 2024</b><p>Founded ACC HOMES International Real Estate on a single 60 m² office floor.</p></li>
<li><b>2025</b><p>Sales, marketing and team management for Capital İnşaat’s 216-apartment project in Altıntaş. In December he hosted the Antalle Concept Houses Open House and, sponsored by ACC HOMES with Danube Properties, a Dubai investor meeting at Akra Hotel attended by more than 100 investors. ACC Day reached 800 students.</p></li>
<li><b>2026</b><p>The 1,000 m² ACC Plaza opened and the team grew to around 50 partners. ACC HOMES became the authorised sales office for Prime Lara and Antalle Concept Houses.</p></li>
</ol>
<h2>Experience from the corporate world</h2>
<p>Before real estate he worked directly with Türkiye’s largest retail and e-commerce channels, including Migros, Carrefour, BİM, ŞOK, A101, Hepsiburada, Yemeksepeti, Getir, Boyner and Trendyol. He held trade marketing roles covering the UAE, Qatar, Bahrain, Kuwait, Saudi Arabia and Lebanon, and worked as an agency and key account manager.</p>
<p>That background shapes how ACC HOMES works: measurable goals, process follow-up, CRM, professional marketing and transparent communication with clients.</p>
<h2>Areas of expertise</h2>
<div class="cards3">
<div><h3>Residential and luxury property</h3><p>Sales, rentals and investment advice on apartments, villas, residences and commercial property. Properties other agencies could not sell often come to him and change hands with the right price, photos, video and advertising.</p></div>
<div><h3>Project marketing</h3><p>Sales and marketing strategy, team building, CRM, pricing and market-entry advice for developers. Capital İnşaat, Antalle Concept Houses and Prime Lara are examples.</p></div>
<div><h3>International investment</h3><p>Service for foreign investors in their own language, to corporate standards: sales to Russian, Ukrainian and European buyers, and Dubai opportunities with Danube Properties.</p></div>
<div><h3>Data-driven pricing</h3><p>Every price recommendation is backed by comparables and local market data, so owners get a realistic, defensible price.</p></div>
<div><h3>Land-for-flats and urban renewal</h3><p>Brings landowners and developers together on fair terms and follows the process from start to finish.</p></div>
<div><h3>Team and mentoring</h3><p>Works shoulder to shoulder with partners from engineering, aviation, finance, law and corporate backgrounds, with in-office mentoring and field training.</p></div>
</div>
<h2>Values</h2>
<p>Transparency, honesty and ethics are at the centre of his work. Since 2022 he has personally messaged every client on every holiday and special day, and asks his team to do the same. Once a year ACC HOMES stops all business for a day and the whole team focuses on giving back: <a href="{{URL:events}}">ACC Day</a>.</p>
<h2>Languages and community</h2>
<ul class="chips"><li>Turkish (native)</li><li>English (advanced)</li></ul>
<p>Foreign investors are served in the 10 languages spoken across his team.</p>
<p>Member of ANTİAD (Antalya Business People’s Association) and of the Beşiktaş JK Congress.</p>
{{BROKER_GALLERY}}
{{BROKER_LINKS}}
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
{{TEAMPHOTOS}}
<h2>Yönetim ve destek ekibi</h2>
{{TEAM}}
<h2>İş ortaklarımız</h2>
<p>ACC HOMES’ta danışmanlarımıza <b>iş ortağı</b> diyoruz. Her biri kendi bölgesinde ve uzmanlık alanında çalışan yaklaşık 50 profesyonel; konut, villa, yeni proje, ticari mülk ve arsa portföylerimizi yönetiyor. İş ortaklarımızın arkasında fotoğraf ve video ekibimiz, sosyal medya ve tasarım ekibimiz, CRM altyapımız ve düzenli ACC Akademi eğitimleri var.</p>
{{PARTNERS}}
<h3>Hizmet verdiğimiz diller</h3>
{{LANGS}}
<div class="ctas"><a class="btn" href="{{URL:join}}">İş ortağımız olun</a><a class="btn ghost" href="{{URL:contact}}">Bize ulaşın</a></div>`,
    },
    en: {
      title: 'Our Team', desc: 'The ACC HOMES team: broker, operations and support staff, and around 50 partners serving clients in 10 languages.',
      lead: 'Around 50 partners, 10 languages and one goal: a corporate, trustworthy experience for every client.',
      html: `
{{TEAMPHOTOS}}
<h2>Management and support</h2>
{{TEAM}}
<h2>Our partners</h2>
<p>At ACC HOMES we call our consultants <b>partners</b>. Around 50 professionals, each focused on their own area and specialism, manage our residential, villa, new-development, commercial and land portfolios, backed by our photo and video team, social media and design team, CRM and regular ACC Academy training.</p>
{{PARTNERS}}
<h3>Languages we speak</h3>
{{LANGS}}
<div class="ctas"><a class="btn" href="{{URL:join}}">Join us</a><a class="btn ghost" href="{{URL:contact}}">Contact us</a></div>`,
    },
    ru: {
      title: 'Наша команда', desc: 'Команда ACC HOMES: брокер, операционный отдел и около 50 партнёров, работающих на 10 языках.',
      lead: 'Около 50 партнёров, 10 языков и одна цель — надёжный корпоративный сервис для каждого клиента.',
      html: `
{{TEAMPHOTOS}}
<h2>Руководство и поддержка</h2>
{{TEAM}}
<h2>Наши партнёры</h2>
<p>Наших консультантов мы называем <b>партнёрами</b>. Около 50 специалистов работают с жилой и коммерческой недвижимостью, виллами, новыми проектами и землёй при поддержке фото- и видеокоманды, отдела соцсетей и дизайна, CRM и регулярного обучения в ACC Academy.</p>
{{PARTNERS}}
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
<h2>Satış öncesi</h2>
<ul class="ticks cols2">
<li>Yerinde veya canlı görüntülü gösterim turları</li>
<li>Satın alma sürecinin ve masrafların yazılı olarak anlatılması</li>
<li>Amacınıza uygun yatırımın seçimi ve veriye dayalı fiyat analizi</li>
<li>Konut kredisi için ön değerlendirme</li>
<li>Tapu kaydı, iskan, imar ve aidat kontrolleri</li>
<li>Satış sözleşmesinin hazırlanması, avukat, noter ve tercüman randevuları</li>
</ul>
<h2>Satış sonrası</h2>
<div class="svc">
<div><span>🔌</span><h3>Abonelikler</h3><p>Elektrik, su, doğalgaz ve internet aboneliklerinin adınıza açılması.</p></div>
<div><span>🛡️</span><h3>DASK ve konut sigortası</h3><p>Zorunlu deprem sigortası ve isteğe bağlı konut sigortası için yönlendirme.</p></div>
<div><span>🧾</span><h3>Vergi numarası ve banka hesabı</h3><p>Yabancı alıcılar için vergi numarası alma ve banka hesabı açma desteği.</p></div>
<div><span>🛋️</span><h3>Eşyalandırma ve mobilya turu</h3><p>Evinizi döşemek için güvenilir mağazalara birlikte gezi ve öneriler.</p></div>
<div><span>🔑</span><h3>Kiralama ve mülk yönetimi</h3><p>Kiracı bulma, sözleşme, kira takibi ve yıl boyu mülk yönetimi.</p></div>
<div><span>🪪</span><h3>Oturum izni ve vatandaşlık desteği</h3><p>Başvuru dosyası için gayrimenkul tarafındaki tüm belgeler; hukuki süreç için anlaşmalı avukatlar.</p></div>
<div><span>⚖️</span><h3>Hukuki destek ve vekaletname</h3><p>Avukat, noter ve online vekaletname işlemlerinde yönlendirme.</p></div>
<div><span>🏢</span><h3>Şirket kuruluşu</h3><p>Yabancı sermayeli şirket kuruluşu süreçlerinde iş ortaklarımızla destek.</p></div>
</div>
<p><a href="/alici-rehberi/">Alıcı Rehberi’ni inceleyin →</a></p>
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
<h2>Before the sale</h2>
<ul class="ticks cols2">
<li>In-person or live video viewing tours</li>
<li>The buying process and costs explained in writing</li>
<li>Choosing the right investment, with data-driven pricing</li>
<li>Mortgage pre-assessment</li>
<li>Deed, occupancy permit, zoning and service-charge checks</li>
<li>Sales agreement, lawyer, notary and translator appointments</li>
</ul>
<h2>After the sale</h2>
<div class="svc">
<div><span>🔌</span><h3>Utilities</h3><p>Electricity, water, gas and internet set up in your name.</p></div>
<div><span>🛡️</span><h3>DASK and home insurance</h3><p>Compulsory earthquake insurance and optional home insurance.</p></div>
<div><span>🧾</span><h3>Tax number and bank account</h3><p>Help obtaining a tax number and opening a bank account.</p></div>
<div><span>🛋️</span><h3>Furnishing tour</h3><p>A tour of trusted furniture stores and practical advice.</p></div>
<div><span>🔑</span><h3>Rentals and property management</h3><p>Tenants, contracts, rent collection and year-round management.</p></div>
<div><span>🪪</span><h3>Residence and citizenship support</h3><p>All property-side documents for your application; partner lawyers for the legal process.</p></div>
<div><span>⚖️</span><h3>Legal support and power of attorney</h3><p>Lawyer, notary and power-of-attorney arrangements.</p></div>
<div><span>🏢</span><h3>Company formation</h3><p>Support with setting up a foreign-owned company through our partners.</p></div>
</div>
<p><a href="/en/buyers-guide/">Read our Buyer’s Guide →</a></p>
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
<h2>После покупки</h2>
<ul class="ticks cols2"><li>Подключение электричества, воды, газа и интернета</li><li>DASK и страхование жилья</li><li>Налоговый номер и банковский счёт</li><li>Меблировка и тур по магазинам</li><li>Аренда и управление недвижимостью</li><li>Документы для ВНЖ и гражданства</li></ul>
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

export const TIMELINE = {
  tr: [['2023', 'Ali Caner Can, Realty World MES Real Estate’in yılın şampiyon danışmanı oldu.'], ['2024', 'ACC HOMES International Real Estate Antalya’da kuruldu.'], ['2025', '“Emlakta Mükemmelliğin Adresi” marka sözümüzle ekibimiz ve portföyümüz büyüdü.'], ['2026', '1.000 m²’lik genel merkezimiz ACC Plaza açıldı; Prime Lara ve Antalle Concept Houses’un yetkili satış ofisi olduk; ekibimiz yaklaşık 50 iş ortağına ulaştı.']],
  en: [['2023', 'Ali Caner Can was named champion consultant of the year at Realty World MES Real Estate.'], ['2024', 'ACC HOMES International Real Estate was founded in Antalya.'], ['2025', 'Under our promise “Excellence in Real Estate”, the team and portfolio grew.'], ['2026', 'Our 1,000 m² headquarters ACC Plaza opened; we became the authorised sales office for Prime Lara and Antalle Concept Houses; the team reached around 50 partners.']],
  ru: [['2023', 'Али Джанер Джан — лучший консультант года в Realty World MES.'], ['2024', 'Основана компания ACC HOMES International Real Estate.'], ['2025', 'Рост команды и портфеля под девизом «Excellence in Real Estate».'], ['2026', 'Открыт главный офис ACC Plaza (1 000 м²); официальный офис продаж Prime Lara и Antalle; около 50 партнёров.']],
};
