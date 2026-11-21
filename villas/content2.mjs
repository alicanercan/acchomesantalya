// ACC VILLAS 2. aşama içerikleri: banner, yorumlar, Open House, Antalle, Kurucu, KVKK, teklif, döviz.
export const MAIN = 'https://acchomesantalya.com';
const AI = (f) => `${MAIN}/img/antalle/${f}.webp`;
export const GOOGLE = { url: 'https://www.google.com/maps/place/ACC+HOMES+International+Real+Estate/@36.8734979,30.7269696,17z/data=!4m8!3m7!1s0x14c39b1d1d43dc8b:0xeaeb38a9ba6ce9ca!8m2!3d36.8734979!4d30.7269696!9m1!1b1!16s%2Fg%2F11t5_zrbgj', rating: '4.9', count: '475' };
export const IG = { handle: '@accvillas', url: 'https://www.instagram.com/accvillas/' };

export const SEG2 = {
  tr: { openhouse: 'open-house', antalle: 'antalle-concept-houses', founder: 'kurucu-ali-caner-can', privacy: 'kvkk-aydinlatma-metni' },
  en: { openhouse: 'open-house', antalle: 'antalle-concept-houses', founder: 'founder-ali-caner-can', privacy: 'privacy-notice' },
  ru: { openhouse: 'den-otkrytyh-dverej', antalle: 'antalle-concept-houses', founder: 'osnovatel-ali-dzhaner-dzhan', privacy: 'politika-konfidencialnosti' },
};

// Google yorumları (ACC HOMES işletme profili, "villa" geçenler). Ekip adı geçen cümle çıkarıldı.
const R = [
  { n: 'Yiğit K.', when: { tr: '2026', en: '2026', ru: '2026' },
    tr: 'Antalya Döşemealtı Altınkale mahallesindeki lüks villa satış sürecimizi, ACC HOMES International Real Estate’in sergilediği şeffaf ve profesyonel süreç yönetimi sayesinde başarıyla tamamladık. Özellikle lüks portföy satışı konusundaki hassasiyetleri ve her aşamada sağladıkları güven bizler için çok kıymetliydi.',
    en: 'We successfully completed the sale of our luxury villa in Altınkale, Döşemealtı, thanks to the transparent and professional process management of ACC HOMES International Real Estate. Their care in selling luxury properties and the trust they provided at every stage were invaluable to us.',
    ru: 'Благодаря прозрачной и профессиональной работе ACC HOMES International Real Estate мы успешно продали нашу виллу класса люкс в районе Алтынкале, Дёшемеалты. Их внимательность в продаже элитной недвижимости и доверие на каждом этапе были для нас очень ценны.' },
  { n: 'Ziya G.', when: { tr: '2025', en: '2025', ru: '2025' },
    tr: 'Kendilerini villa ararken tanıdım; hem satış öncesi hem satış sonrası desteklerini hiç esirgemediler. Onlar sayesinde çok güzel bir villa sahibi oldum. Gözünüz kapalı tamamen güvenebileceğiniz bir emlak ofisi.',
    en: 'I met them while looking for a villa, and they never held back their support, before or after the sale. Thanks to them I became the owner of a beautiful villa. An agency you can trust completely, with your eyes closed.',
    ru: 'Я познакомился с ними, когда искал виллу. Они поддерживали меня и до, и после сделки. Благодаря им я стал владельцем прекрасной виллы. Агентство, которому можно доверять полностью.' },
  { n: 'Tuğçe B.', when: { tr: '2024', en: '2024', ru: '2024' },
    tr: 'Ali Caner Can, yeni villamızı satın alma süreci boyunca eşsiz bir profesyonellik ve güvenilirlik sergiledi. İlk mülk değerlemesinden nihai kapanışa kadar uzman rehberliği ve desteği sağladı. Yeni evimizle daha mutlu olamazdık.',
    en: 'Ali Caner Can demonstrated unmatched professionalism and trustworthiness throughout the entire process of buying our new villa. From the initial property valuation to the final closing, he provided expert guidance and support. We couldn’t be happier with our new home.',
    ru: 'Али Джанер Джан проявил исключительный профессионализм и надёжность на всём пути покупки нашей новой виллы — от первой оценки до заключения сделки. Мы очень довольны нашим новым домом.' },
  { n: 'Mehmet Y.', when: { tr: '2024', en: '2024', ru: '2024' },
    tr: 'Kendisi aracılığı ile villa satın aldık. Süreci sorunsuz halletti. Memnun kaldık, teşekkür ederiz.',
    en: 'We bought our villa through him. He handled the process smoothly. We were very satisfied, thank you.',
    ru: 'Мы купили виллу при его посредничестве. Всё прошло гладко. Мы очень довольны, спасибо.' },
];
export const REV_PROJECT = { n: 'FTH K.', tr: 'Döşemealtı bölgesinde gerçekleştirdiğimiz villa projelerinin tanıtımı ve sonrasında takibi açısından gayet profesyonel çalışmalar oldu. Başta Caner Bey ve tüm ACC Homes ekibine teşekkür ederim.', en: 'The promotion and follow-up of our villa projects in Döşemealtı were handled very professionally. Thank you to Caner Bey and the whole ACC Homes team.', ru: 'Продвижение и сопровождение наших проектов вилл в Дёшемеалты были выполнены очень профессионально. Спасибо Джанеру-бею и всей команде ACC Homes.' };
export const REVIEWS = R;

export const X = {
  tr: {
    cur: 'Para birimi', approx: 'güncel kurla yaklaşık',
    slides: [
      { img: `${MAIN}/img/banner/villa-d-1920.webp`, imgM: `${MAIN}/img/banner/villa-m-1080.webp`, eyebrow: 'ACC VILLAS · Yalnızca villa', h: 'Antalya’nın seçkin villaları', p: 'Satın alırken, satarken, yaşarken. Siz yalnızca karar verin; gerisini biz halledelim.', btn: ['Villaları keşfedin', 'list'] },
      { img: AI('gece-havadan-villa-havuz'), eyebrow: 'Özel proje', h: 'Antalle Concept Houses', p: 'Altınkale’de, 40 dönüm üzerinde, havuzlu bahçe dubleksi ve teras daireden oluşan bir villa yaşamı.', btn: ['Projeyi inceleyin', 'antalle'] },
      { img: AI('galeri-bosluklu-salon'), eyebrow: 'Villa Yaşamı', h: 'Anahtar teslimiyle bitmeyen bir hizmet', p: 'Mobilya ve tasarımda ENNE Antalya ile; iç mimariden peyzaja villanızı hayatınıza göre hazırlıyoruz.', btn: ['Villa Yaşamı', 'living'] },
      { img: AI('dubleks-cephe-havuz'), eyebrow: 'Villanızı satın', h: 'Doğru fiyat, doğru alıcı, tam gizlilik', p: 'Ücretsiz değerleme, özenli tanıtım ve isterseniz ilan vermeden, yalnızca doğrulanmış alıcılara satış.', btn: ['Ücretsiz değerleme', 'value'] },
    ],
    whyT: 'Neden yalnızca villa?', whyP: 'Daire satan bir ofis villa da satabilir; ama villa almak ve satmak başka bir uzmanlıktır. Arsa ve imar, havuz ve peyzaj, iskân ve tapu, bakım ve işletme… ACC VILLAS, Antalya’da yalnızca villa ile çalışan uzman ekiptir. Her villayı yerinde görür, her müşterimizle bizzat ilgileniriz.',
    revT: 'Villa sahiplerimiz anlatıyor', revBadge: 'Google’da 4,9 ★ · 475 yorum', revNote: 'ACC HOMES International Real Estate Google işletme profilindeki yorumlardan',
    popT: 'Popüler aramalar', popCols: ['Bölgeler', 'Villa türleri', 'Projeler', 'Hizmetler'],
    igT: 'Villa yaşamından kareler', igP: 'Yeni villalar, özel davetler ve Antalya’da villa hayatı. Bizi Instagram’da takip edin.', igBtn: 'Instagram’da takip et',
    offer: { btn: 'Teklif Ver', title: 'Bu villa için teklif verin', note: 'Teklifiniz yalnızca bizimle ve mal sahibiyle paylaşılır, sitede görünmez. Ciddi değerlendirme için tüm alanlar zorunludur.', amount: 'Teklif tutarı', pay: 'Ödeme şekli', payO: ['Peşin', 'Kredi', 'Takas', 'Peşin + kredi'], when: 'Ne zaman alabilirsiniz?', whenO: ['Hemen', '1–3 ay içinde', '3–6 ay içinde', '6 aydan sonra'], send: 'Teklifi gönder', close: 'Kapat' },
    call: 'Ara',
    oh: { nav: 'Open House', title: 'Open House ve Özel Gösterim Günleri | ACC VILLAS', desc: 'ACC VILLAS’ın Antalya’daki villa projelerinde düzenlediği Open House ve özel davetler. Villayı yerinde görün, sorularınızı doğrudan sorun.',
      h1: 'Open House ve özel davetler', lead: 'Bir villayı anlatmanın en iyi yolu, onu yerinde göstermektir. Open House günlerimizde malzemeyi, işçiliği ve çevreyi kendi gözünüzle görür; sorularınızı doğrudan bize sorarsınız. Kalabalık değil, özenle ağırlanan misafirler.',
      how: [['Davet', 'Kayıtlı alıcılarımıza ve yatırımcılara kişisel davet gönderilir.'], ['Karşılama', 'Villada veya satış ofisinde ikramlarla karşılanırsınız.'], ['Yerinde gezi', 'Villaları, bahçeyi ve çevreyi birlikte gezeriz.'], ['Birebir görüşme', 'Fiyat, ödeme ve süreç sorularınızı birebir yanıtlarız.']],
      nextT: 'Yaklaşan', next: 'Antalle Özel Davet · 28–29 Kasım 2026 · Altınkale, Döşemealtı', pastT: 'Geçmiş etkinlik', past: 'Antalle Concept Houses Open House · 13–14 Aralık 2025', pastP: 'Yetkili satış ofisi olduğumuz Antalle’de iskânlı, taşınmaya hazır villaları misafirlerimizle yerinde gezdik.',
      ownT: 'Villanız için özel gösterim günü', ownP: 'Villanızı satıyorsanız, doğru alıcıları tek bir günde villanızda ağırlayalım. Davet, karşılama ve takip bizden.', formT: 'Etkinliklerimizden haberdar olun' },
    an: { title: 'Antalle Concept Houses · Altınkale Villa Projesi | ACC VILLAS', desc: 'Antalle Concept Houses: Döşemealtı Altınkale’de 40 dönüm üzerinde, havuzlu bahçe dubleksi ve teras daireden oluşan villa projesi. Oturmak ya da yatırım için.',
      h1: 'Antalle Concept Houses', lead: 'Döşemealtı Altınkale’de, Toros Dağları’na bakan 40 dönüm üzerinde planlanan bir villa yaşamı. Adını Antalya ve ağaçlı yol anlamındaki “alle”den alır.',
      facts: [['40 dönüm', 'proje alanı, 5 etap olarak planlandı'], ['240 m²', '4+1 bahçe dubleksi, müstakil havuz'], ['120 m²', '2+1 teras daire'], ['1. etap', 'tamamlandı, iskânlı ve taşınmaya hazır']],
      bodyT: 'Bir binada iki ayrı yaşam', body: 'Her yapıda zemin ve birinci katta müstakil havuzlu, bahçeli 4+1 dubleks; üstte ise dağ manzaralı terasıyla 2+1 bir daire yer alır. Galeri boşluklu salon, havuza açılan yaşam alanları, ada mutfak ve özenle seçilmiş malzemeler. Oturmak ya da yatırım için.',
      teamT: 'Projenin arkasındaki isimler', team: [['Lejant Proje', 'Proje sahibi ve mimari'], ['ENNE Antalya', 'Mobilya ve tasarım çözüm ortağı; örnek villa ENNE ile döşendi'], ['ACC HOMES', 'Satış ve pazarlama çözüm ortağı']],
      galT: 'Projeden kareler', formT: 'Özel gösterim ve bilgi için', villasT: 'Antalle’deki villalar' },
    fd: { nav: 'Kurucu', title: 'Ali Caner Can · Antalya Villa Broker’ı, ACC VILLAS Kurucusu', desc: 'Ali Caner Can: ACC VILLAS ve ACC HOMES International Real Estate kurucusu. Antalya’da villa ve büyük müstakil ev satışları, villa projesi pazarlama ve yönetimi.',
      h1: 'Ali Caner Can', role: 'Kurucu & CEO · Villa ve proje broker’ı',
      intro: 'Villa almak ve satmak, bir mülkten çok bir hayat tarzının el değiştirmesidir. Ali Caner Can, ACC VILLAS’ı bu anlayışla kurdu: Antalya’da yalnızca villa ve büyük müstakil evlere, villa projelerinin pazarlamasına ve yönetimine odaklanan bir ekip.',
      secs: [
        ['Mühendislikten gayrimenkule', 'Kuleli Askeri Lisesi’nin ardından Yıldız Teknik Üniversitesi Makine Mühendisliği’nden mezun oldu. Kraft Heinz, Nestlé, Hasbro, Reckitt Benckiser ve Bosch gibi çok uluslu şirketlerde yönetici olarak satış, pazarlama ve strateji alanlarında çalıştı. Bu disiplin bugün her villa satışında ölçülebilir bir süreç olarak karşılığını buluyor.'],
        ['Antalya’da gayrimenkul', '2022’de Antalya’da gayrimenkule adım attı; 2023’te Realty World MES’in şampiyon danışmanı oldu. 2024’te tek bir ofis katında ACC HOMES International Real Estate’i kurdu; bugün ACC Plaza’da büyüyen bir şirket.'],
        ['Villa ve proje yönetimi', 'Döşemealtı’ndan Lara’ya villa ve büyük müstakil ev satışlarını bizzat yürütüyor. Antalle Concept Houses gibi villa projelerinde satış, pazarlama, Open House ve özel davetlerin planlanmasından yatırımcı ilişkilerine kadar süreci yönetiyor.'],
        ['Yaklaşımı', 'Her villayı yerinde görmek, fiyatı veriye dayandırmak, alıcıya ve satıcıya her adımı şeffaf anlatmak. Türkçe ve İngilizce hizmet veriyor; ANTİAD (Antalya İş İnsanları Derneği) üyesi. Profesyonel seviyede tenis oynuyor.'],
      ],
      linksT: 'Bağlantılar', meet: 'Görüşme planlayın' },
    kv: { title: 'KVKK Aydınlatma Metni | ACC VILLAS', h1: 'KVKK Aydınlatma Metni' },
  },
  en: {
    cur: 'Currency', approx: 'approx. at today’s rate',
    slides: [
      { img: `${MAIN}/img/banner/villa-d-1920.webp`, imgM: `${MAIN}/img/banner/villa-m-1080.webp`, eyebrow: 'ACC VILLAS · Villas only', h: 'Antalya’s finest villas', p: 'Buying, selling, living. You make the decision; we take care of everything else.', btn: ['Explore villas', 'list'] },
      { img: AI('gece-havadan-villa-havuz'), eyebrow: 'Featured project', h: 'Antalle Concept Houses', p: 'Villa living in Altınkale on 40 dönüm (about 4 hectares): garden duplexes with private pools and terrace apartments.', btn: ['View the project', 'antalle'] },
      { img: AI('galeri-bosluklu-salon'), eyebrow: 'Villa Living', h: 'Service that does not end at handover', p: 'Furniture and design with ENNE Antalya; from interiors to landscaping, we prepare your villa around your life.', btn: ['Villa Living', 'living'] },
      { img: AI('dubleks-cephe-havuz'), eyebrow: 'Sell your villa', h: 'The right price, the right buyer, full discretion', p: 'Free valuation, careful presentation and, if you prefer, an off-market sale to verified buyers only.', btn: ['Free valuation', 'value'] },
    ],
    whyT: 'Why villas only?', whyP: 'An agency that sells apartments can sell a villa too; but buying and selling villas is a different expertise. Land and zoning, pools and landscaping, occupancy permits and title deeds, upkeep and management… ACC VILLAS is Antalya’s villa-only team of specialists. We see every villa in person and look after every client ourselves.',
    revT: 'In our villa owners’ words', revBadge: '4.9 ★ on Google · 475 reviews', revNote: 'From reviews on the ACC HOMES International Real Estate Google Business Profile (translated from Turkish where needed)',
    popT: 'Popular searches', popCols: ['Areas', 'Villa types', 'Projects', 'Services'],
    igT: 'Moments of villa life', igP: 'New villas, private events and villa living in Antalya. Follow us on Instagram.', igBtn: 'Follow on Instagram',
    offer: { btn: 'Make an offer', title: 'Make an offer on this villa', note: 'Your offer is shared only with us and the owner and never shown on the site. All fields are required so we can treat it seriously.', amount: 'Offer amount', pay: 'Payment', payO: ['Cash', 'Mortgage', 'Exchange', 'Cash + mortgage'], when: 'When could you buy?', whenO: ['Now', 'Within 1–3 months', 'Within 3–6 months', 'After 6 months'], send: 'Send offer', close: 'Close' },
    call: 'Call',
    oh: { nav: 'Open House', title: 'Open House and Private Viewing Days | ACC VILLAS', desc: 'Open House days and private events held by ACC VILLAS at villa developments in Antalya. See the villa in person and ask your questions directly.',
      h1: 'Open House and private events', lead: 'The best way to present a villa is to show it in person. On our Open House days you see the materials, workmanship and surroundings for yourself and ask us your questions directly. Not a crowd, but carefully hosted guests.',
      how: [['Invitation', 'Registered buyers and investors receive a personal invitation.'], ['Welcome', 'You are welcomed with refreshments at the villa or sales office.'], ['On-site tour', 'We tour the villas, gardens and surroundings together.'], ['One-to-one', 'We answer your questions on price, payment and process one-to-one.']],
      nextT: 'Upcoming', next: 'Antalle Private Invitation · 28–29 November 2026 · Altınkale, Döşemealtı', pastT: 'Past event', past: 'Antalle Concept Houses Open House · 13–14 December 2025', pastP: 'At Antalle, where we are the authorised sales office, we toured the move-in-ready villas with our guests.',
      ownT: 'A private viewing day for your villa', ownP: 'If you are selling, let us host the right buyers at your villa on a single day. Invitations, hosting and follow-up are on us.', formT: 'Hear about our events' },
    an: { title: 'Antalle Concept Houses · Villa Project in Altınkale | ACC VILLAS', desc: 'Antalle Concept Houses: a villa project on 40 dönüm in Altınkale, Döşemealtı, with garden duplexes and private pools plus terrace apartments. To live in or invest.',
      h1: 'Antalle Concept Houses', lead: 'Villa living planned on 40 dönüm (about 4 hectares) in Altınkale, Döşemealtı, facing the Taurus Mountains. The name combines Antalya and “alle”, a tree-lined avenue.',
      facts: [['40 dönüm', 'site area, planned in 5 phases'], ['240 m²', '4+1 garden duplex with private pool'], ['120 m²', '2+1 terrace apartment'], ['Phase 1', 'completed, with occupancy permit, ready to move in']],
      bodyT: 'Two separate homes in one building', body: 'Each building has a 4+1 garden duplex with its own pool on the ground and first floors, and a 2+1 apartment above with a mountain-view terrace. Double-height living rooms, living spaces opening onto the pool, island kitchens and carefully chosen materials. To live in or invest.',
      teamT: 'The names behind the project', team: [['Lejant Proje', 'Developer and architecture'], ['ENNE Antalya', 'Furniture and design partner; the show villa is furnished by ENNE'], ['ACC HOMES', 'Sales and marketing partner']],
      galT: 'From the project', formT: 'For a private viewing and information', villasT: 'Villas at Antalle' },
    fd: { nav: 'Founder', title: 'Ali Caner Can · Antalya Villa Broker, Founder of ACC VILLAS', desc: 'Ali Caner Can, founder of ACC VILLAS and ACC HOMES International Real Estate: villa and large detached home sales, villa project marketing and management in Antalya.',
      h1: 'Ali Caner Can', role: 'Founder & CEO · Villa and project broker',
      intro: 'Buying or selling a villa is less a property transaction than the handover of a way of life. Ali Caner Can founded ACC VILLAS with that in mind: a team focused solely on villas and large detached homes in Antalya, and on the marketing and management of villa developments.',
      secs: [
        ['From engineering to real estate', 'After Kuleli Military High School he graduated in Mechanical Engineering from Yıldız Technical University, then held management roles in sales, marketing and strategy at multinational companies including Kraft Heinz, Nestlé, Hasbro, Reckitt Benckiser and Bosch. That discipline now shows up as a measurable process in every villa sale.'],
        ['Real estate in Antalya', 'He entered real estate in Antalya in 2022 and was Realty World MES’s champion consultant in 2023. In 2024 he founded ACC HOMES International Real Estate on a single office floor; today it is a growing company at ACC Plaza.'],
        ['Villas and developments', 'He personally handles villa and large detached home sales from Döşemealtı to Lara, and manages villa developments such as Antalle Concept Houses, from sales, marketing, Open House days and private events to investor relations.'],
        ['His approach', 'See every villa in person, base the price on data, and explain every step openly to buyer and seller alike. He works in Turkish and English, is a member of ANTİAD (Antalya Business People’s Association) and plays tennis at a professional level.'],
      ],
      linksT: 'Links', meet: 'Book a call' },
    kv: { title: 'Privacy Notice | ACC VILLAS', h1: 'Privacy Notice' },
  },
  ru: {
    cur: 'Валюта', approx: 'примерно по текущему курсу',
    slides: [
      { img: `${MAIN}/img/banner/villa-d-1920.webp`, imgM: `${MAIN}/img/banner/villa-m-1080.webp`, eyebrow: 'ACC VILLAS · Только виллы', h: 'Лучшие виллы Анталии', p: 'Покупка, продажа, жизнь. Вы принимаете решение — всё остальное мы берём на себя.', btn: ['Смотреть виллы', 'list'] },
      { img: AI('gece-havadan-villa-havuz'), eyebrow: 'Избранный проект', h: 'Antalle Concept Houses', p: 'Жизнь в вилле в Алтынкале на 40 дёнюмах (около 4 га): садовые дуплексы с собственным бассейном и квартиры с террасой.', btn: ['О проекте', 'antalle'] },
      { img: AI('galeri-bosluklu-salon'), eyebrow: 'Жизнь в вилле', h: 'Сервис, который не заканчивается передачей ключей', p: 'Мебель и дизайн с ENNE Antalya; от интерьера до ландшафта мы готовим виллу под вашу жизнь.', btn: ['Жизнь в вилле', 'living'] },
      { img: AI('dubleks-cephe-havuz'), eyebrow: 'Продать виллу', h: 'Правильная цена, правильный покупатель, полная конфиденциальность', p: 'Бесплатная оценка, бережная подача и по желанию закрытая продажа только проверенным покупателям.', btn: ['Бесплатная оценка', 'value'] },
    ],
    whyT: 'Почему только виллы?', whyP: 'Агентство, продающее квартиры, может продать и виллу; но покупка и продажа вилл — отдельная экспертиза. Участок и зонирование, бассейн и ландшафт, разрешение на заселение и тапу, содержание и управление… ACC VILLAS — команда экспертов в Анталии, работающая только с виллами. Мы лично осматриваем каждую виллу и сами ведём каждого клиента.',
    revT: 'Говорят владельцы вилл', revBadge: '4,9 ★ в Google · 475 отзывов', revNote: 'Из отзывов в профиле ACC HOMES International Real Estate в Google (перевод с турецкого)',
    popT: 'Популярные запросы', popCols: ['Районы', 'Типы вилл', 'Проекты', 'Услуги'],
    igT: 'Моменты жизни в вилле', igP: 'Новые виллы, закрытые мероприятия и жизнь в вилле в Анталии. Подписывайтесь на нас в Instagram.', igBtn: 'Подписаться в Instagram',
    offer: { btn: 'Сделать предложение', title: 'Предложение по этой вилле', note: 'Ваше предложение видим только мы и владелец, на сайте оно не публикуется. Все поля обязательны.', amount: 'Сумма предложения', pay: 'Оплата', payO: ['Наличные', 'Ипотека', 'Обмен', 'Наличные + ипотека'], when: 'Когда готовы купить?', whenO: ['Сейчас', 'В течение 1–3 месяцев', 'В течение 3–6 месяцев', 'Позже 6 месяцев'], send: 'Отправить', close: 'Закрыть' },
    call: 'Позвонить',
    oh: { nav: 'Open House', title: 'Дни открытых дверей и частные показы | ACC VILLAS', desc: 'Дни открытых дверей и закрытые мероприятия ACC VILLAS в проектах вилл в Анталии. Посмотрите виллу вживую и задайте вопросы напрямую.',
      h1: 'Дни открытых дверей и закрытые мероприятия', lead: 'Лучший способ представить виллу — показать её вживую. В дни открытых дверей вы видите материалы, качество работ и окружение своими глазами и задаёте вопросы напрямую нам. Не толпа, а внимательно принятые гости.',
      how: [['Приглашение', 'Зарегистрированные покупатели и инвесторы получают личное приглашение.'], ['Встреча', 'Мы встречаем вас с угощением на вилле или в офисе продаж.'], ['Осмотр', 'Вместе осматриваем виллы, сад и окрестности.'], ['Личная беседа', 'Отвечаем на вопросы о цене, оплате и процессе лично.']],
      nextT: 'Ближайшее', next: 'Частное приглашение Antalle · 28–29 ноября 2026 · Алтынкале, Дёшемеалты', pastT: 'Прошедшее мероприятие', past: 'День открытых дверей Antalle Concept Houses · 13–14 декабря 2025', pastP: 'В Antalle, где мы являемся официальным офисом продаж, мы показали гостям готовые к заселению виллы.',
      ownT: 'Частный показ вашей виллы', ownP: 'Если вы продаёте виллу, мы примем подходящих покупателей у вас за один день. Приглашения, приём и сопровождение — наша забота.', formT: 'Узнавайте о наших мероприятиях' },
    an: { title: 'Antalle Concept Houses · Проект вилл в Алтынкале | ACC VILLAS', desc: 'Antalle Concept Houses: проект вилл на 40 дёнюмах в Алтынкале, Дёшемеалты — садовые дуплексы с бассейном и квартиры с террасой. Для жизни или инвестиций.',
      h1: 'Antalle Concept Houses', lead: 'Жизнь в вилле на 40 дёнюмах (около 4 га) в Алтынкале, Дёшемеалты, с видом на горы Тавр. Название соединяет Анталию и «alle» — аллею.',
      facts: [['40 дёнюмов', 'площадь, 5 очередей'], ['240 м²', 'садовый дуплекс 4+1 с собственным бассейном'], ['120 м²', 'квартира 2+1 с террасой'], ['1-я очередь', 'завершена, есть разрешение на заселение']],
      bodyT: 'Два отдельных дома в одном здании', body: 'В каждом здании — садовый дуплекс 4+1 с собственным бассейном на первом и втором этажах и квартира 2+1 с террасой и видом на горы сверху. Гостиные со вторым светом, выход к бассейну, кухни-острова и тщательно подобранные материалы. Для жизни или инвестиций.',
      teamT: 'Кто стоит за проектом', team: [['Lejant Proje', 'Девелопер и архитектура'], ['ENNE Antalya', 'Партнёр по мебели и дизайну; шоу-вилла обставлена ENNE'], ['ACC HOMES', 'Партнёр по продажам и маркетингу']],
      galT: 'Фото проекта', formT: 'Частный показ и информация', villasT: 'Виллы в Antalle' },
    fd: { nav: 'Основатель', title: 'Али Джанер Джан · Брокер вилл в Анталии, основатель ACC VILLAS', desc: 'Али Джанер Джан — основатель ACC VILLAS и ACC HOMES International Real Estate: продажа вилл и больших частных домов, маркетинг и управление проектами вилл в Анталии.',
      h1: 'Али Джанер Джан', role: 'Основатель и CEO · брокер вилл и проектов',
      intro: 'Покупка или продажа виллы — это не столько сделка с недвижимостью, сколько передача образа жизни. С этой мыслью Али Джанер Джан основал ACC VILLAS: команду, работающую только с виллами и большими частными домами в Анталии, а также с маркетингом и управлением проектами вилл.',
      secs: [
        ['От инженерии к недвижимости', 'После военного лицея Кулели он окончил факультет машиностроения Технического университета Йылдыз и работал на руководящих позициях в продажах, маркетинге и стратегии в международных компаниях, включая Kraft Heinz, Nestlé, Hasbro, Reckitt Benckiser и Bosch.'],
        ['Недвижимость в Анталии', 'В 2022 году пришёл в недвижимость Анталии, в 2023-м стал лучшим консультантом Realty World MES. В 2024 году основал ACC HOMES International Real Estate; сегодня это растущая компания в ACC Plaza.'],
        ['Виллы и проекты', 'Лично ведёт продажи вилл и больших частных домов от Дёшемеалты до Лары и управляет проектами вилл, такими как Antalle Concept Houses: продажи, маркетинг, дни открытых дверей и работа с инвесторами.'],
        ['Подход', 'Лично осматривать каждую виллу, обосновывать цену данными и открыто объяснять каждый шаг. Работает на турецком и английском языках, член ANTİAD (Ассоциации деловых людей Анталии), играет в теннис на профессиональном уровне.'],
      ],
      linksT: 'Ссылки', meet: 'Назначить звонок' },
    kv: { title: 'Политика конфиденциальности | ACC VILLAS', h1: 'Политика конфиденциальности' },
  },
};

export const ANTALLE_GAL = ['gece-havadan-1-etap', 'on-cephe-dag-manzarasi', 'dubleks-cephe-havuz', 'sonsuzluk-havuzu', 'tas-setli-bahce', 'ic-avlu-yuruyus-yolu', 'galeri-bosluklu-salon', 'havuza-acilan-salon', 'ada-mutfak', 'teras-dag-manzarasi', 'teras-daire-salon', 'havadan-dag-manzarasi'].map(AI);
export const OH_GAL = ['satis-ofisi', 'karsilama', 'lounge', 'ikram'].map((f) => `${MAIN}/img/sosyal/antalle-open-house-2025-${f}.webp`);
export const FOUNDER_LINKS = [['acchomesantalya.com · Ali Caner Can', `${MAIN}/ali-caner-can/`], ['Instagram', 'https://www.instagram.com/alicanercan.therealtor/'], ['LinkedIn', 'https://www.linkedin.com/in/alicanercantherealtor/'], ['YouTube', 'https://www.youtube.com/@alicanercan.therealtor']];

// KVKK (TR tam metin; EN/RU özet). Veri sorumlusu: ACC HOMES şahıs şirketi (Ali Caner Can).
export const KVKK_HTML = {
  tr: `<p class="lead">6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında bilgilendirme · Son güncelleme: 21.11.2026</p>
<h2>1. Veri sorumlusu</h2><p>Bu web sitesi ACC VILLAS by ACC HOMES International Real Estate tarafından işletilmektedir. Veri sorumlusu: Ali Caner Can (ACC HOMES International Real Estate), ACC Plaza, Yeşilbahçe Mah. Portakal Çiçeği Bulvarı No:36/B, Muratpaşa / Antalya. E-posta: info@acchomesantalya.com · Telefon: +90 549 804 38 43.</p>
<h2>2. İşlediğimiz kişisel veriler</h2><ul><li><b>Kimlik ve iletişim:</b> ad soyad, telefon numarası ve ülke kodu, e-posta adresi.</li><li><b>Talep bilgileri:</b> ilgilendiğiniz villa veya proje, teklif tutarı, ödeme şekli ve zamanlaması, satmak ya da değerletmek istediğiniz villanın konumu ve büyüklüğü, mesajınız, tercih ettiğiniz dil.</li><li><b>İşlem güvenliği:</b> formu gönderdiğiniz sayfa, tarih ve saat; sunucu kayıtlarındaki IP adresi.</li></ul><p>Özel nitelikli kişisel veri talep etmeyiz; lütfen formlarda paylaşmayın.</p>
<h2>3. Amaçlar</h2><ul><li>Talebinize ve teklifinize dönüş yapmak, size uygun villaları önermek, gösterim planlamak</li><li>Villa alım, satım, kiralama ve değerleme hizmetini sunmak; teklifinizi mal sahibine iletmek</li><li>Yasal yükümlülüklerimizi yerine getirmek</li><li>Açık rızanız varsa yeni villa, proje ve etkinliklerden haberdar etmek</li><li>Sitenin güvenliğini sağlamak</li></ul>
<h2>4. Hukuki sebepler</h2><p>KVKK m.5/2-c (sözleşmenin kurulması veya ifası), m.5/2-ç (hukuki yükümlülük) ve m.5/2-f (meşru menfaat). Ticari elektronik ileti yalnızca açık rızanızla gönderilir; izninizi her zaman geri alabilirsiniz.</p>
<h2>5. Aktarım</h2><p>Verileriniz yalnızca gerektiği ölçüde ACC HOMES ekibiyle, sizin bilginiz dahilinde işlem taraflarıyla (mal sahibi, banka, değerleme kuruluşu, tercüman, noter), kanunen zorunlu hâllerde yetkili kurumlarla ve teknik hizmet sağlayıcılarımızla (web barındırma: Turhost, Türkiye; form kayıtlarının tutulduğu müşteri paneli altyapısı: Supabase) paylaşılır. Yurt dışında bulunabilen sağlayıcılara aktarım KVKK m.9’a uygun yapılır. Verilerinizi satmayız.</p>
<h2>6. Saklama süresi</h2><p>Talep ve iletişim bilgileri talebiniz sonuçlandıktan sonra en fazla 2 yıl, sözleşme ve muhasebe kayıtları mevzuatın öngördüğü süre boyunca saklanır; süre dolunca silinir veya anonimleştirilir.</p>
<h2>7. Çerezler</h2><p>Bu sitede reklam veya istatistik çerezi kullanılmaz. Seçtiğiniz para birimi yalnızca tarayıcınızda saklanır, bize gönderilmez.</p>
<h2>8. Haklarınız ve başvuru</h2><p>KVKK m.11 kapsamındaki haklarınızı (bilgi talep etme, düzeltme, silme, itiraz ve zararın giderilmesini isteme) kimliğinizi doğrulayan bilgilerle info@acchomesantalya.com adresine veya ofis adresimize yazılı olarak iletebilirsiniz. Başvurunuz en geç 30 gün içinde ücretsiz yanıtlanır.</p>`,
  en: `<p class="lead">Information under Turkish Personal Data Protection Law No. 6698 (KVKK) · Last updated: 21.11.2026</p>
<h2>Data controller</h2><p>This website is operated by ACC VILLAS by ACC HOMES International Real Estate. Data controller: Ali Caner Can (ACC HOMES International Real Estate), ACC Plaza, Yeşilbahçe Mah. Portakal Çiçeği Bulvarı No:36/B, Muratpaşa / Antalya, Türkiye. Email: info@acchomesantalya.com · Phone: +90 549 804 38 43.</p>
<h2>What we process and why</h2><p>Your name, phone number, email and the details of your request or offer, used only to respond to you, recommend villas, arrange viewings, pass your offer to the owner, provide our services and meet our legal obligations. Marketing messages are sent only with your consent.</p>
<h2>Sharing and retention</h2><p>We share data only as needed with the ACC HOMES team, parties to a transaction with your knowledge, authorities where required by law, and our technical providers (hosting: Turhost, Türkiye; client panel: Supabase). We never sell your data. Request data is kept for up to 2 years after your request is closed.</p>
<h2>Cookies</h2><p>This site uses no advertising or analytics cookies. Your chosen currency is stored only in your browser.</p>
<h2>Your rights</h2><p>You may exercise your rights under Article 11 of KVKK by writing to info@acchomesantalya.com or to our office address. We respond free of charge within 30 days.</p>`,
};
KVKK_HTML.ru = KVKK_HTML.en;
