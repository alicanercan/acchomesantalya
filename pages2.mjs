// Ek kurumsal sayfalar: evinizi satın, online gösterim ve tanışma turu, lisanslar ve belgeler.
// TR + EN; diğer dillerde İngilizcesi gösterilir (çeviri sırada).
export const PAGES2 = {
  sell: {
    seg: { tr: 'evinizi-satin', en: 'sell-your-property', de: 'immobilie-verkaufen', ru: 'prodat-nedvizhimost', fa: 'foroosh-melk', pl: 'sprzedaj-nieruchomosc' },
    nav: { tr: 'Evinizi Satın', en: 'Sell Your Property', de: 'Immobilie verkaufen', ru: 'Продать недвижимость', fa: 'فروش ملک شما', pl: 'Sprzedaj nieruchomość' },
    tr: {
      title: 'Evinizi Doğru Fiyata, Doğru Alıcıya Satalım', desc: 'Antalya’da evinizi satmak mı istiyorsunuz? Ücretsiz değerleme, veriye dayalı fiyat, profesyonel tanıtım ve 10 dilde yerli ve yabancı alıcıya ulaşım.',
      lead: 'Ücretsiz değerleme ile başlayın: emsal verilerle gerçekçi bir fiyat, profesyonel tanıtım ve tapuya kadar şeffaf süreç.',
      html: `
<div class="cards3">
<div><h3>1. Ücretsiz değerleme</h3><p>Bölgedeki güncel satış ve ilan verileriyle evinizin gerçekçi değerini çıkarır, yazılı olarak paylaşırız.</p></div>
<div><h3>2. Profesyonel tanıtım</h3><p>Profesyonel fotoğraf, video ve dron çekimi; ilan portalları, Instagram ve Meta reklamları; 10 dilde yerli ve yabancı alıcı ağı.</p></div>
<div><h3>3. Tapuya kadar yanınızdayız</h3><p>Gösterimler, pazarlık, kapora, banka ve tapu işlemleri; her adımda yazılı bilgi.</p></div>
</div>
<h2>Ücretsiz değerleme talebi</h2>
{{SELLFORM}}
<p class="note">Değerleme ücretsizdir ve sizi satışa zorunlu kılmaz.</p>`,
    },
    en: {
      title: 'Sell Your Property at the Right Price, to the Right Buyer', desc: 'Selling a home in Antalya? Free valuation, data-driven pricing, professional marketing and access to local and international buyers in 10 languages.',
      lead: 'Start with a free valuation: a realistic price based on comparables, professional marketing and a transparent process all the way to the title deed.',
      html: `
<div class="cards3">
<div><h3>1. Free valuation</h3><p>We assess your home’s realistic value using current local sales and listing data and share it with you in writing.</p></div>
<div><h3>2. Professional marketing</h3><p>Professional photos, video and drone; property portals, Instagram and Meta ads; a network of local and international buyers in 10 languages.</p></div>
<div><h3>3. With you until the title deed</h3><p>Viewings, negotiation, deposit, bank and title deed transfer, with written updates at every step.</p></div>
</div>
<h2>Request a free valuation</h2>
{{SELLFORM}}
<p class="note">The valuation is free and does not oblige you to sell.</p>`,
    },
  },
  viewing: {
    seg: { tr: 'online-gosterim-ve-tanisma-turu', en: 'online-viewing-and-inspection-trip', de: 'online-besichtigung', ru: 'onlayn-prosmotr', fa: 'bazdid-online', pl: 'ogladanie-online' },
    nav: { tr: 'Online Gösterim ve Tanışma Turu', en: 'Online Viewing & Inspection Trip', de: 'Online-Besichtigung & Besichtigungsreise', ru: 'Онлайн-просмотр и ознакомительный тур', fa: 'بازدید آنلاین و تور آشنایی', pl: 'Oglądanie online i wizyta' },
    tr: {
      title: 'Online Gösterim ve Tanışma Turu', desc: 'Antalya’ya gelmeden evleri görüntülü görüşmeyle gezin; geldiğinizde bölgeleri ve seçtiğiniz evleri tek günde görün.',
      lead: 'Yurt dışından ya da başka şehirden ev arayanlar için iki adımlı süreç.',
      html: `
<div class="cards3">
<div><span>📱</span><h3>Online görüntülü gösterim</h3><p>Danışmanımız evi WhatsApp veya Zoom üzerinden canlı gezdirir; manzarayı, cepheyi, siteyi ve çevreyi gösterir, sorularınızı anında yanıtlar.</p></div>
<div><span>🚗</span><h3>Tanışma turu</h3><p>Antalya’ya geldiğinizde bölgeleri ve kısa listeye aldığınız evleri tek bir planda gezdiririz; ACC Plaza’da süreci ve masrafları yüz yüze anlatırız.</p></div>
<div><span>📝</span><h3>Uzaktan alım</h3><p>Karar verdiğinizde vekâletname ile Türkiye’ye gelmeden de tapu işlemi yapılabilir. Detaylar Alıcı Rehberi’nde.</p></div>
</div>
<div class="ctas"><a class="btn" href="{{WA}}" target="_blank" rel="noopener">Görüntülü gösterim planlayın</a><a class="btn ghost" href="{{URL:buyersguide}}">Alıcı Rehberi</a></div>`,
    },
    en: {
      title: 'Online Viewing & Inspection Trip', desc: 'Tour homes by live video before coming to Antalya, then see the areas and your shortlist in a single day when you arrive.',
      lead: 'A two-step process for buyers searching from abroad or another city.',
      html: `
<div class="cards3">
<div><span>📱</span><h3>Live video viewing</h3><p>Our consultant walks you through the home on WhatsApp or Zoom, showing the view, orientation, complex and surroundings, and answers your questions on the spot.</p></div>
<div><span>🚗</span><h3>Inspection trip</h3><p>When you arrive in Antalya we plan a tour of the areas and your shortlisted homes, and explain the process and costs face to face at ACC Plaza.</p></div>
<div><span>📝</span><h3>Buying remotely</h3><p>Once you decide, the title deed transfer can be completed by power of attorney without travelling to Türkiye. See our Buyer’s Guide.</p></div>
</div>
<div class="ctas"><a class="btn" href="{{WA}}" target="_blank" rel="noopener">Book a video viewing</a><a class="btn ghost" href="{{URL:buyersguide}}">Buyer’s Guide</a></div>`,
    },
  },
  licences: {
    seg: { tr: 'lisanslar-ve-belgeler', en: 'licences-and-credentials', de: 'lizenzen', ru: 'litsenzii', fa: 'mojavezha', pl: 'licencje' },
    nav: { tr: 'Lisanslar ve Belgeler', en: 'Licences & Credentials', de: 'Lizenzen & Nachweise', ru: 'Лицензии и документы', fa: 'مجوزها و مدارک', pl: 'Licencje i dokumenty' },
    tr: {
      title: 'Lisanslar ve Belgeler', desc: 'ACC HOMES International Real Estate Taşınmaz Ticareti Yetki Belgesi numaraları, ofis bilgileri ve müşteri değerlendirmeleri.',
      lead: 'Yasal yetkiyle, kayıtlı bir ofisten, şeffaf şekilde çalışıyoruz.',
      html: `
<table class="spec">
<tr><th>Ticari unvan</th><td>ACC HOMES International Real Estate Gayrimenkul</td></tr>
<tr><th>Taşınmaz Ticareti Yetki Belgesi I</th><td>0703112</td></tr>
<tr><th>Taşınmaz Ticareti Yetki Belgesi II</th><td>0705041</td></tr>
<tr><th>Merkez ofis</th><td>ACC Plaza, Yeşilbahçe Mah. Portakal Çiçeği Bulvarı Cd. No:36/B, Muratpaşa / Antalya</td></tr>
<tr><th>Google değerlendirmesi</th><td>{{RATING}}</td></tr>
</table>
<p class="note">Yetki belgesi numaraları Ticaret Bakanlığı Emlak İletişim ve Denetim Sistemi (EİDS) üzerinden doğrulanabilir.</p>
<h2>Başarılar</h2>
<ul class="ticks"><li>2023: Kurucumuz Ali Caner Can, Realty World MES Real Estate’in yılın şampiyon danışmanı</li><li>2026: Prime Lara ve Antalle Concept Houses projelerinin yetkili satış ofisi</li></ul>
<div class="ctas"><a class="btn" href="{{URL:about}}">Biz Kimiz</a><a class="btn ghost" href="{{URL:reviews}}">Müşteri yorumları</a></div>`,
    },
    en: {
      title: 'Licences & Credentials', desc: 'ACC HOMES International Real Estate real estate trade licence numbers, office details and client reviews.',
      lead: 'We work under official licence, from a registered office, with full transparency.',
      html: `
<table class="spec">
<tr><th>Company name</th><td>ACC HOMES International Real Estate Gayrimenkul</td></tr>
<tr><th>Real estate trade licence I (Türkiye)</th><td>0703112</td></tr>
<tr><th>Real estate trade licence II (Türkiye)</th><td>0705041</td></tr>
<tr><th>Head office</th><td>ACC Plaza, Yeşilbahçe Mah. Portakal Çiçeği Bulvarı Cd. No:36/B, Muratpaşa / Antalya</td></tr>
<tr><th>Google rating</th><td>{{RATING}}</td></tr>
</table>
<p class="note">Licence numbers can be verified on the Turkish Ministry of Trade’s real estate licensing system (EİDS).</p>
<h2>Recognition</h2>
<ul class="ticks"><li>2023: Our founder Ali Caner Can named champion consultant of the year at Realty World MES Real Estate</li><li>2026: Authorised sales office for Prime Lara and Antalle Concept Houses</li></ul>
<div class="ctas"><a class="btn" href="{{URL:about}}">About us</a><a class="btn ghost" href="{{URL:reviews}}">Client reviews</a></div>`,
    },
  },
};

// Diğer diller için kısa veri → aynı HTML yapısı
export function p2Html(kind, d) {
  if (kind === 'sell') return {
    title: d.title, desc: d.desc, lead: d.lead,
    html: `\n<div class="cards3">${d.cards.map(([h, p], i) => `<div><h3>${i + 1}. ${h}</h3><p>${p}</p></div>`).join('')}</div>\n<h2>${d.formTitle}</h2>\n{{SELLFORM}}\n<p class="note">${d.note}</p>`,
  };
  if (kind === 'viewing') return {
    title: d.title, desc: d.desc, lead: d.lead,
    html: `\n<div class="cards3">${d.cards.map(([ic, h, p]) => `<div><span>${ic}</span><h3>${h}</h3><p>${p}</p></div>`).join('')}</div>\n<div class="ctas"><a class="btn" href="{{WA}}" target="_blank" rel="noopener">${d.cta1}</a><a class="btn ghost" href="{{URL:buyersguide}}">${d.cta2}</a></div>`,
  };
  return {
    title: d.title, desc: d.desc, lead: d.lead,
    html: `\n<table class="spec"><tr><th>${d.l[0]}</th><td>ACC HOMES International Real Estate Gayrimenkul</td></tr><tr><th>${d.l[1]} I</th><td>0703112</td></tr><tr><th>${d.l[1]} II</th><td>0705041</td></tr><tr><th>${d.l[2]}</th><td>ACC Plaza, Yeşilbahçe Mah. Portakal Çiçeği Bulvarı Cd. No:36/B, Muratpaşa / Antalya</td></tr><tr><th>${d.l[3]}</th><td>{{RATING}}</td></tr></table>\n<p class="note">${d.note}</p>\n<h2>${d.recTitle}</h2>\n<ul class="ticks">${d.rec.map((x) => `<li>${x}</li>`).join('')}</ul>\n<div class="ctas"><a class="btn" href="{{URL:about}}">${d.cta1}</a><a class="btn ghost" href="{{URL:reviews}}">${d.cta2}</a></div>`,
  };
}

export const P2X = {
  de: {
    sell: { title: 'Ihre Immobilie zum richtigen Preis an den richtigen Käufer', desc: 'Sie möchten in Antalya verkaufen? Kostenlose Bewertung, datenbasierter Preis, professionelles Marketing und Käufer aus dem In- und Ausland in 10 Sprachen.', lead: 'Starten Sie mit einer kostenlosen Bewertung: realistischer Preis auf Basis von Vergleichsdaten, professionelles Marketing und ein transparenter Ablauf bis zum Grundbuch.', cards: [['Kostenlose Bewertung', 'Wir ermitteln den realistischen Wert Ihrer Immobilie anhand aktueller Verkaufs- und Angebotsdaten und teilen ihn schriftlich mit.'], ['Professionelles Marketing', 'Profifotos, Video und Drohne; Immobilienportale, Instagram und Meta-Werbung; Käufernetzwerk in 10 Sprachen.'], ['Bis zum Grundbuch an Ihrer Seite', 'Besichtigungen, Verhandlung, Anzahlung, Bank und Grundbuch – mit schriftlichen Updates bei jedem Schritt.']], formTitle: 'Kostenlose Bewertung anfordern', note: 'Die Bewertung ist kostenlos und verpflichtet Sie nicht zum Verkauf.' },
    viewing: { title: 'Online-Besichtigung & Besichtigungsreise', desc: 'Besichtigen Sie Immobilien per Live-Video, bevor Sie nach Antalya kommen, und sehen Sie vor Ort Regionen und Ihre Auswahl an einem Tag.', lead: 'Ein Ablauf in zwei Schritten für Käufer aus dem Ausland oder einer anderen Stadt.', cards: [['📱', 'Live-Video-Besichtigung', 'Unser Berater führt Sie per WhatsApp oder Zoom durch die Immobilie, zeigt Ausblick, Lage, Anlage und Umgebung und beantwortet Ihre Fragen sofort.'], ['🚗', 'Besichtigungsreise', 'Wenn Sie in Antalya sind, planen wir eine Tour durch die Regionen und Ihre Favoriten und erklären Ablauf und Kosten persönlich in ACC Plaza.'], ['📝', 'Kauf aus der Ferne', 'Nach Ihrer Entscheidung kann die Grundbuchübertragung per Vollmacht erfolgen, ohne dass Sie anreisen. Mehr im Käuferratgeber.']], cta1: 'Video-Besichtigung planen', cta2: 'Käuferratgeber' },
    licences: { title: 'Lizenzen & Nachweise', desc: 'Lizenznummern, Büroangaben und Kundenbewertungen von ACC HOMES International Real Estate.', lead: 'Wir arbeiten mit offizieller Lizenz, aus einem eingetragenen Büro und mit voller Transparenz.', l: ['Firmenname', 'Immobilienhandelslizenz (Türkei)', 'Hauptsitz', 'Google-Bewertung'], note: 'Die Lizenznummern sind im Lizenzsystem (EİDS) des türkischen Handelsministeriums überprüfbar.', recTitle: 'Auszeichnungen', rec: ['2023: Unser Gründer Ali Caner Can wurde bester Berater des Jahres bei Realty World MES Real Estate', '2026: Autorisiertes Verkaufsbüro für Prime Lara und Antalle Concept Houses'], cta1: 'Über uns', cta2: 'Kundenbewertungen' },
  },
  ru: {
    sell: { title: 'Продадим вашу недвижимость по верной цене нужному покупателю', desc: 'Хотите продать недвижимость в Анталии? Бесплатная оценка, цена на основе данных, профессиональный маркетинг и покупатели из Турции и других стран на 10 языках.', lead: 'Начните с бесплатной оценки: реалистичная цена по сопоставимым сделкам, профессиональная презентация и прозрачный процесс до тапу.', cards: [['Бесплатная оценка', 'Мы определим реальную стоимость объекта по актуальным данным продаж и предложений и предоставим её письменно.'], ['Профессиональный маркетинг', 'Фото, видео и дрон; порталы, Instagram и реклама Meta; сеть покупателей на 10 языках.'], ['С вами до тапу', 'Показы, переговоры, задаток, банк и оформление тапу — с письменной информацией на каждом шаге.']], formTitle: 'Запросить бесплатную оценку', note: 'Оценка бесплатна и не обязывает вас продавать.' },
    viewing: { title: 'Онлайн-просмотр и ознакомительный тур', desc: 'Смотрите объекты по видеосвязи до приезда в Анталию, а на месте — районы и выбранные объекты за один день.', lead: 'Процесс в два шага для покупателей из-за рубежа или другого города.', cards: [['📱', 'Видеопросмотр', 'Консультант показывает объект в WhatsApp или Zoom: вид, ориентацию, комплекс и окрестности, и сразу отвечает на вопросы.'], ['🚗', 'Ознакомительный тур', 'Когда вы приедете в Анталию, мы покажем районы и отобранные объекты и лично расскажем о процессе и расходах в ACC Plaza.'], ['📝', 'Покупка удалённо', 'После решения оформление тапу возможно по доверенности, без приезда в Турцию. Подробнее в гиде покупателя.']], cta1: 'Запланировать видеопросмотр', cta2: 'Гид покупателя' },
    licences: { title: 'Лицензии и документы', desc: 'Номера лицензий, данные офиса и отзывы клиентов ACC HOMES International Real Estate.', lead: 'Мы работаем по официальной лицензии, из зарегистрированного офиса и полностью прозрачно.', l: ['Название компании', 'Лицензия на торговлю недвижимостью', 'Главный офис', 'Рейтинг в Google'], note: 'Номера лицензий можно проверить в системе EİDS Министерства торговли Турции.', recTitle: 'Достижения', rec: ['2023: основатель Али Джанер Джан — лучший консультант года в Realty World MES Real Estate', '2026: официальный офис продаж Prime Lara и Antalle Concept Houses'], cta1: 'О нас', cta2: 'Отзывы клиентов' },
  },
  fa: {
    sell: { title: 'ملک شما را با قیمت درست به خریدار درست می‌فروشیم', desc: 'قصد فروش ملک در آنتالیا دارید؟ ارزیابی رایگان، قیمت‌گذاری مبتنی بر داده، بازاریابی حرفه‌ای و دسترسی به خریداران داخلی و خارجی به ۱۰ زبان.', lead: 'با ارزیابی رایگان شروع کنید: قیمتی واقع‌بینانه بر پایه معاملات مشابه، معرفی حرفه‌ای و روندی شفاف تا انتقال سند.', cards: [['ارزیابی رایگان', 'ارزش واقعی ملک شما را با داده‌های روز فروش و آگهی‌ها برآورد کرده و کتبی اعلام می‌کنیم.'], ['بازاریابی حرفه‌ای', 'عکاسی، ویدیو و پهپاد؛ سایت‌های آگهی، اینستاگرام و تبلیغات متا؛ شبکه خریداران به ۱۰ زبان.'], ['تا انتقال سند همراه شما', 'بازدیدها، مذاکره، بیعانه، بانک و انتقال سند؛ با اطلاع‌رسانی کتبی در هر مرحله.']], formTitle: 'درخواست ارزیابی رایگان', note: 'ارزیابی رایگان است و شما را ملزم به فروش نمی‌کند.' },
    viewing: { title: 'بازدید آنلاین و تور آشنایی', desc: 'پیش از آمدن به آنتالیا، املاک را با تماس تصویری ببینید و پس از رسیدن، مناطق و گزینه‌های منتخب را در یک روز بازدید کنید.', lead: 'روندی دومرحله‌ای برای خریدارانی که از خارج یا شهر دیگری جستجو می‌کنند.', cards: [['📱', 'بازدید تصویری زنده', 'مشاور ما ملک را از طریق واتس‌اپ یا زوم نشان می‌دهد؛ چشم‌انداز، جهت، مجتمع و اطراف را می‌بینید و همان لحظه پاسخ می‌گیرید.'], ['🚗', 'تور آشنایی', 'وقتی به آنتالیا آمدید، بازدید از مناطق و املاک منتخب را برنامه‌ریزی می‌کنیم و روند و هزینه‌ها را حضوری در ACC Plaza توضیح می‌دهیم.'], ['📝', 'خرید از راه دور', 'پس از تصمیم، انتقال سند با وکالت‌نامه و بدون سفر به ترکیه ممکن است. جزئیات در راهنمای خریدار.']], cta1: 'رزرو بازدید تصویری', cta2: 'راهنمای خریدار' },
    licences: { title: 'مجوزها و مدارک', desc: 'شماره مجوزها، اطلاعات دفتر و نظرات مشتریان ACC HOMES International Real Estate.', lead: 'ما با مجوز رسمی، از دفتری ثبت‌شده و با شفافیت کامل کار می‌کنیم.', l: ['نام شرکت', 'مجوز تجارت املاک (ترکیه)', 'دفتر مرکزی', 'امتیاز گوگل'], note: 'شماره مجوزها در سامانه EİDS وزارت بازرگانی ترکیه قابل استعلام است.', recTitle: 'افتخارات', rec: ['۲۰۲۳: بنیان‌گذار ما علی جانر جان، بهترین مشاور سال در Realty World MES Real Estate', '۲۰۲۶: دفتر فروش رسمی Prime Lara و Antalle Concept Houses'], cta1: 'درباره ما', cta2: 'نظرات مشتریان' },
  },
};

// Yeni diller için sayfa adları ve adresleri
const NAV_X = {
  sell: { fr: ['vendre-mon-bien', 'Vendre mon bien'], es: ['vender-mi-propiedad', 'Vender mi propiedad'], nl: ['woning-verkopen', 'Woning verkopen'], sv: ['salja-bostad', 'Sälj din bostad'], ar: ['bia-aqarak', 'بيع عقارك'], zh: ['chushou-fangchan', '出售房产'] },
  viewing: { fr: ['visite-en-ligne', 'Visite en ligne et voyage de découverte'], es: ['visita-online', 'Visita online y viaje de inspección'], nl: ['online-bezichtiging', 'Online bezichtiging en oriëntatiereis'], sv: ['onlinevisning', 'Onlinevisning och visningsresa'], ar: ['muayana-online', 'المعاينة عبر الإنترنت ورحلة التعرّف'], zh: ['zaixian-kanfang', '在线看房与考察之旅'] },
  licences: { fr: ['licences', 'Licences et références'], es: ['licencias', 'Licencias y acreditaciones'], nl: ['vergunningen', 'Vergunningen en referenties'], sv: ['licenser', 'Licenser och meriter'], ar: ['tarakhis', 'التراخيص والاعتمادات'], zh: ['zizhi', '资质与证书'] },
};
for (const [k, m] of Object.entries(NAV_X)) for (const [l, [seg, nav]] of Object.entries(m)) { PAGES2[k].seg[l] = seg; PAGES2[k].nav[l] = nav; }
