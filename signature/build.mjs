// alicanercan.com — Ali Caner Can kişisel "signature" sitesi (TR / EN / RU)
// ACC HOMES ve ACC VILLAS ile aynı altyapı: statik HTML, Turhost'a FTP ile yüklenir.
// Çalıştır: node signature/build.mjs  →  signature/dist
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(HERE, '..');
const OUT = path.join(HERE, 'dist');
const DOMAIN = 'https://alicanercan.com';
const MAIN = 'https://acchomesantalya.com';
const VILLAS = 'https://accvillas.com';
const LANGS = ['tr', 'en', 'ru'];
const PHONE = { raw: '+905498043843', text: '+90 549 804 38 43', wa: '905498043843' };
const MAIL = 'alicaner.can@acchomesantalya.com';
const SITE = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/site.json'), 'utf8'));
const G = { url: SITE.google.mapsUrl, rating: SITE.google.rating, count: SITE.google.reviews };
const REVIEWS = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/reviews.json'), 'utf8'));
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
const write = (rel, html) => { const f = path.join(OUT, rel.endsWith('.html') || rel.endsWith('.xml') || rel.endsWith('.txt') ? rel : path.join(rel, 'index.html')); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, html); };

// ---------- URL yapısı ----------
const SEG = {
  home: { tr: '', en: '', ru: '' },
  about: { tr: 'hakkimda', en: 'about', ru: 'obo-mne' },
  insights: { tr: 'yazilar', en: 'insights', ru: 'statyi' },
  stage: { tr: 'sahne-ve-medya', en: 'speaking-and-media', ru: 'vystupleniya-i-media' },
  gallery: { tr: 'galeri', en: 'gallery', ru: 'galereya' },
  advisory: { tr: 'danismanlik', en: 'advisory', ru: 'konsultacii' },
  contact: { tr: 'iletisim', en: 'contact', ru: 'kontakty' },
};
const BASE = { tr: '', en: '/en', ru: '/ru' };
const url = (lang, k) => (SEG[k][lang] ? `${BASE[lang]}/${SEG[k][lang]}/` : `${BASE[lang]}/`);
const alts = (k) => Object.fromEntries(LANGS.map((l) => [l, url(l, k)]));
const sitemap = [];

// ---------- ACC sitelerine bağlantılar ----------
const ACC = {
  home: { tr: `${MAIN}/`, en: `${MAIN}/en/`, ru: `${MAIN}/ru/` },
  services: { tr: `${MAIN}/hizmetlerimiz/`, en: `${MAIN}/en/services/`, ru: `${MAIN}/ru/uslugi/` },
  sell: { tr: `${MAIN}/evinizi-satin/`, en: `${MAIN}/en/sell-your-property/`, ru: `${MAIN}/ru/prodat-nedvizhimost/` },
  projects: { tr: `${MAIN}/projeler/`, en: `${MAIN}/en/projects/`, ru: `${MAIN}/ru/proekty/` },
  guide: { tr: `${MAIN}/alici-rehberi/`, en: `${MAIN}/en/buyers-guide/`, ru: `${MAIN}/ru/buyers-guide/` },
  news: { tr: `${MAIN}/acc-news/`, en: `${MAIN}/en/acc-news/`, ru: `${MAIN}/ru/acc-news/` },
  villas: { tr: `${VILLAS}/`, en: `${VILLAS}/en/`, ru: `${VILLAS}/ru/` },
  antalle: { tr: `${MAIN}/projeler/antalle-concept-houses/`, en: `${MAIN}/en/projects/antalle-concept-houses/`, ru: `${MAIN}/ru/proekty/antalle-concept-houses/` },
  kvkk: { tr: `${MAIN}/kvkk-aydinlatma-metni/`, en: `${MAIN}/en/privacy-notice/`, ru: `${MAIN}/ru/privacy-notice/` },
};
const SOCIAL = [
  ['ig', 'Instagram', '@alicanercan.therealtor', 'https://www.instagram.com/alicanercan.therealtor/'],
  ['in', 'LinkedIn', 'Ali Caner Can', 'https://www.linkedin.com/in/alicanercantherealtor/'],
  ['yt', 'YouTube', '@alicanercan.therealtor', 'https://www.youtube.com/@alicanercan.therealtor'],
  ['tg', 'Telegram', '@alicanertherealtor', 'https://t.me/alicanertherealtor'],
];
const FOLLOW = [
  ['ig', 'Instagram', '@alicanercan.therealtor', 'https://www.instagram.com/alicanercan.therealtor/', { tr: 'Kişisel hesabım: saha, piyasa ve günlük notlar', en: 'My personal account: field, market and daily notes', ru: 'Личный аккаунт: объекты, рынок, заметки' }],
  ['yt', 'YouTube', '@alicanercan.therealtor', 'https://www.youtube.com/@alicanercan.therealtor', { tr: 'Mülk turları, piyasa yorumları ve röportajlar', en: 'Property tours, market commentary and interviews', ru: 'Обзоры объектов, комментарии рынка, интервью' }],
  ['in', 'LinkedIn', '2.230+', 'https://www.linkedin.com/in/alicanercantherealtor/', { tr: 'Piyasa analizlerim ve kariyer yazılarım', en: 'My market analysis and career posts', ru: 'Аналитика рынка и деловые публикации' }],
  ['ig', 'Instagram', '@acchomesantalya', 'https://www.instagram.com/acchomesantalya/', { tr: 'ACC HOMES: portföy, projeler ve ekip', en: 'ACC HOMES: listings, projects and team', ru: 'ACC HOMES: объекты, проекты, команда' }],
  ['ig', 'Instagram', '@acc.villas', 'https://www.instagram.com/acc.villas/', { tr: 'ACC VILLAS: Antalya’nın villaları', en: 'ACC VILLAS: Antalya’s villas', ru: 'ACC VILLAS: виллы Анталии' }],
  ['tg', 'Telegram', '@alicanertherealtor', 'https://t.me/alicanertherealtor', { tr: 'Doğrudan mesaj', en: 'Direct message', ru: 'Прямое сообщение' }],
];
const MQ = [['img', 'logo-nestle', 'Nestlé'], ['img', 'logo-kraft-heinz', 'Kraft Heinz'], ['img', 'logo-reckitt', 'Reckitt'], ['img', 'logo-hasbro', 'Hasbro'], ['txt', 'BOSCH'], ['txt', 'REALTY WORLD'], ['txt', 'TEUS GROUP'], ['img', 'logo-acc-homes', 'ACC HOMES'], ['txt', 'ACC VILLAS'], ['img', 'logo-antalle', 'Antalle Concept Houses'], ['img', 'logo-lejant', 'Lejant Proje'], ['img', 'logo-capital', 'Capital İnşaat'], ['txt', 'DANUBE PROPERTIES'], ['txt', 'ANTİAD'], ['img', 'logo-endeksa', 'Endeksa']];
const ICO = {
  ig: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.3" fill="currentColor"/></svg>',
  in: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z"/></svg>',
  yt: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.5-3.2.5-4.8s-.1-3.2-.5-4.8zM9.7 15.1V8.9L15.2 12z"/></svg>',
  tg: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M21.9 4.3 18.6 20c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L6 13.5l-4.9-1.5c-1.1-.3-1.1-1 .2-1.5L20.5 3c.9-.3 1.7.2 1.4 1.3z"/></svg>',
  wa: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-3.2-.8-2.7-1.1-4.4-3.9-4.5-4.1-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.6-.1 1.2z"/></svg>',
  ph: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>',
  g: '<svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.6 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h6a5.1 5.1 0 0 1-2.2 3.4v2.8h3.6c2.1-1.9 3.2-4.8 3.2-8.2z"/><path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.8c-1 .7-2.2 1.1-3.7 1.1-2.9 0-5.3-1.9-6.2-4.5H2.2v2.9A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.8 14.1a6.6 6.6 0 0 1 0-4.2V7H2.2a11 11 0 0 0 0 10z"/><path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.2-3.2A11 11 0 0 0 2.2 7l3.6 2.9C6.7 7.3 9.1 5.4 12 5.4z"/></svg>',
};

// ---------- metinler ----------
const T = {
  tr: {
    locale: 'tr_TR', nav: { about: 'Hakkımda', insights: 'Yazılar', stage: 'Sahne ve medya', gallery: 'Galeri', advisory: 'Danışmanlık', contact: 'İletişim' },
    role: 'Broker & Kurucu, ACC HOMES', call: 'Ara', mqL: 'Çalıştığım ve birlikte ürettiğim markalar', nlT: 'ACC NEWS bültenine abone olun', nlL: 'Antalya gayrimenkul gündemi, piyasa analizlerim ve yeni projeler; haftada bir e-posta.', nlBtn: 'Abone ol', nlOk: 'Teşekkürler, bültene kaydoldunuz.', mapT: 'ACC Plaza’da görüşelim', addr: 'Yeşilbahçe Mah. Portakal Çiçeği Blv. No:36/B, Muratpaşa / Antalya', dirBtn: 'Yol tarifi al', cta: 'Görüşme planla', ctaRead: 'Yazılarımı okuyun', wa: 'WhatsApp’tan yazın',
    homeTitle: 'Ali Caner Can | Antalya Gayrimenkul Brokerı, ACC HOMES Kurucusu',
    homeDesc: 'Ali Caner Can: makine mühendisi, eski çok uluslu satış yöneticisi, ACC HOMES ve ACC VILLAS kurucusu. Antalya’da veriye dayalı, şeffaf emlak danışmanlığı.',
    eyebrow: 'Broker & Kurucu · ACC HOMES International Real Estate',
    h1: 'Ali Caner Can',
    lead: 'Makine mühendisi, Nestlé ve Kraft Heinz gibi şirketlerde yetişmiş bir satış yöneticisi. 2024’ten bu yana ACC HOMES ile Antalya’da gayrimenkulü veriyle, şeffaflıkla ve sahada anlatıyorum.',
    stats: [['290+', 'kendi yaptığım satış ve kiralama işlemi'], ['50', 'iş ortağı, 10 dilde hizmet'], [`${String(G.rating).replace('.', ',')} ★`, `${G.count} Google yorumu (ACC HOMES)`], ['1.000 m²', 'ACC Plaza genel merkezi']],
    nowT: 'Bugün ne yapıyorum', nowL: 'Kurduğum ve yönettiğim yapılar. Her biri kendi alanında, aynı ilkelerle çalışır.',
    now: [
      ['ACC HOMES International Real Estate', 'Antalya’da satış, kiralama, proje pazarlama ve yabancı yatırımcı danışmanlığı. ACC Plaza’da 50 iş ortağı.', 'home', 'acchomesantalya.com'],
      ['ACC VILLAS', 'Yalnızca villa ve büyük müstakil evlere odaklanan iştirakimiz: alım, satım, değerleme ve villa siteleri rehberi.', 'villas', 'accvillas.com'],
      ['Antalle Concept Houses', 'Döşemealtı Altınkale’de konsept villa projesi; satış ve pazarlamasını ACC HOMES yürütüyor.', 'antalle', 'Proje sayfası'],
      ['ACC NEWS', 'Her hafta Antalya ve Türkiye gayrimenkul gündemini, ekonomi ve mevzuat başlıklarıyla özetlediğimiz bülten.', 'news', 'Bültenleri okuyun'],
    ],
    insT: 'Görüşler ve rehberler', insL: 'Alıcıya, satıcıya ve yatırımcıya; sahada en çok sorulan sorulara yazdığım cevaplar.',
    careerT: 'Kurumsal disiplinden geliyorum', careerL: 'Gayrimenkule geçmeden önce çok uluslu şirketlerde satış ve trade marketing yönettim. Bugün ACC’de aynı ölçme, planlama ve ekip kurma disiplinini uyguluyorum.',
    stageT: 'Sahada ve sahnede', stageL: 'Ödüller, yatırımcı buluşmaları, dernek çalışmaları ve sosyal sorumluluk projeleri.',
    keysT: 'Anahtar teslim anları', keysL: 'Tapu günü, işin en güzel anı. Bu fotoğraflar müşterilerimizin izniyle paylaşılmıştır.',
    revT: 'Müşterilerim ne diyor', revL: 'ACC HOMES’un Google profilindeki gerçek yorumlardan.', revAll: 'Tüm Google yorumları',
    ctaT: 'Antalya’da gayrimenkul kararı mı veriyorsunuz?', ctaL: 'Ofiste, online ya da bir kahve veya iş yemeğinde; önce konuşalım, veriyi birlikte okuyalım.',
    follow: 'Takip edin', followE: 'Sosyal medya', followT: 'Beni takip edin', followL: 'Piyasayı, sahayı ve yeni projeleri ilk elden paylaştığım hesaplar.', followBtn: 'Takip et', top: 'Instagram’da takip edin', footNote: 'Ali Caner Can, ACC HOMES International Real Estate’in kurucusu ve brokerıdır.',
    aboutTitle: 'Ali Caner Can Kimdir? Mühendislikten Gayrimenkule', aboutDesc: 'Antalya doğumlu makine mühendisi Ali Caner Can’ın hikâyesi: Kuleli, YTÜ, çok uluslu şirketlerde satış yöneticiliği ve 2024’te kurduğu ACC HOMES.',
    aboutH: 'Mühendislikten gayrimenkule', aboutLead: 'Antalya’da doğdum. Disiplini Kuleli’de, analitik düşünmeyi Yıldız Teknik’te, satışı ve ekip yönetmeyi dünyanın en talepkâr şirketlerinde öğrendim. 2022’de gayrimenkule geçtim; 2024’te ACC HOMES’u kurdum.',
    tlT: 'Yolculuk',
    tl: [
      ['2004–2008', 'Kuleli Askeri Lisesi', 'Disiplin, planlama ve sorumluluk duygusunun temeli.'],
      ['2009–2013', 'Yıldız Teknik Üniversitesi, Makine Mühendisliği', 'Analitik düşünme ve veriyle karar verme alışkanlığı.'],
      ['2011–2013', 'Robert Bosch · Reckitt Benckiser', 'Bosch’ta pazarlama, Reckitt’te trade marketing stajı (Finish kategorisi).'],
      ['2013–2016', 'Hasbro', 'Müşteri satış temsilcisi, ardından oyuncak uzmanı ve e-ticaret kanalı kilit müşteri yöneticisi: Toyzz Shop, Boyner, Hepsiburada, Trendyol.'],
      ['2016–2018', 'Nestlé', 'Ulusal kilit müşteriler yönetici yardımcısı.'],
      ['2018–2022', 'Kraft Heinz', 'Ulusal ve indirim marketleri kilit müşteri yöneticisi (Migros, Carrefour, BİM, ŞOK, A101), Orta Doğu ve Afrika bölge trade marketing yöneticisi (6 Körfez ülkesi), e-ticaret ve B2C kanal yöneticisi.'],
      ['2022–2024', 'Realty World · broker', 'Antalya, Mersin ve İstanbul’da alım, satım, kiralama; kat karşılığı, otel, fabrika ve plaza gibi ticari işler. 10 kişilik ekip, 80’i aşkın portföy, 2022 yılı ciro ödülü.'],
      ['2023–2024', 'TEUS Group · Satış Direktörü', 'Türkiye projelerinde satış ekibinin kurulması ve yönetimi, fiyatlama ve pazara giriş stratejisi, B2B ve B2C satış.'],
      ['2024', 'ACC HOMES International Real Estate', 'Kendi markamı kurdum: kurumsal disiplin, dijital pazarlama, video ve CRM’i gayrimenkulle birleştirdim.'],
      ['2025', 'ACC Plaza · ANTİAD', '1.000 m² genel merkez; Antalya İş İnsanları Derneği üyeliği; Danube Properties ile yatırımcı buluşması.'],
      ['2026', 'ACC VILLAS', 'Bugün 10 dilde hizmet veren 50 iş ortağı ve villalara odaklanan iştirak.'],
    ],
    valT: 'Nasıl çalışırım',
    vals: [['Veri', 'Fiyatı his değil emsal, bölge verisi ve piyasa raporu belirler.'], ['Şeffaflık', 'Masrafı, riski ve süreci baştan, yazılı olarak konuşurum.'], ['Saha', 'Her mülkü yerinde görür, her müşteriyle bizzat ilgilenirim.'], ['Ekip', 'Eğitimli iş ortakları ve tek merkezden yönetilen süreç.']],
    alsoT: 'Bunlar da ben', also: ['Antalya İş İnsanları Derneği (ANTİAD) üyesi', 'Profesyonel tenisçi', 'Telegram ve WhatsApp’tan TR / EN iletişim'],
    insTitle: 'Yazılar ve Rehberler | Ali Caner Can', insDesc: 'Ali Caner Can’ın Antalya gayrimenkulü üzerine yazıları: tapu süreci, alım masrafları, villa ve ev alırken dikkat edilecekler, haftalık ACC NEWS.',
    stageTitle: 'Sahne ve Medya | Ali Caner Can', stageDesc: 'Ödüller, yatırımcı buluşmaları, ANTİAD, kentsel dönüşüm zirvesi ve ACC Day: Ali Caner Can’ın sahadan ve sahneden kareleri.',
    speakT: 'Konuşmacı olarak davet edin', speakL: 'Antalya gayrimenkul piyasası, yabancı yatırımcı, satış ve ekip liderliği konularında etkinliklere katılıyorum.',
    advTitle: 'Antalya Gayrimenkul Danışmanlığı | Ali Caner Can', advDesc: 'Yatırımcılar, yabancı alıcılar, müteahhitler ve mülk sahipleri için Ali Caner Can ve ACC HOMES ile Antalya gayrimenkul danışmanlığı.',
    advH: 'Kiminle, nasıl çalışıyorum', advLead: 'Danışmanlık hizmetlerini ACC HOMES çatısı altında, ekibimle birlikte veriyorum. Her iş için sorumluluk bende.',
    adv: [
      ['Yatırımcılar ve yabancı alıcılar', 'Bölge seçimi, emsal analizi, tapu ve resmi süreçler, yabancı alıcı için anadilde baştan sona destek.', 'guide', 'Alıcı rehberi'],
      ['Müteahhitler ve proje sahipleri', 'Proje konumlandırma, fiyatlama, lansman, dijital pazarlama ve satış ekibi yönetimi.', 'projects', 'Yetkili projelerimiz'],
      ['Mülk sahipleri', 'Ücretsiz değerleme, profesyonel çekim ve video, hedefli reklam ve tapuya kadar süreç yönetimi.', 'sell', 'Mülkünüzü satın'],
      ['Villa alım ve satımı', 'Villa ve büyük müstakil evler için ACC VILLAS’ın özel süreci.', 'villas', 'accvillas.com'],
    ],
    contactTitle: 'Ali Caner Can ile Görüşme ve Randevu | İletişim', contactDesc: 'Ali Caner Can ile görüşme planlayın: WhatsApp, telefon, e-posta ve ACC Plaza, Yeşilbahçe, Muratpaşa / Antalya.',
    contactH: 'Görüşme planlayalım', meetH: "Nasıl görüşelim?", meetL: "Size en uygun yolu seçin; formda tarih ve saat önerebilirsiniz.", meet: [["Ofiste görüşme", "ACC Plaza, Yeşilbahçe. Kahvemiz hazır."], ["Online görüşme", "Zoom, Google Meet ya da WhatsApp görüntülü arama."], ["Kahve ya da iş yemeği", "Antalya’da size yakın bir yerde, daha uzun bir sohbet için."]], meetBtn: "Bu seçenekle randevu iste", meetType: "Görüşme türü", meetDate: "Tercih ettiğiniz tarih", meetTime: "Saat", contactLead: 'Formu doldurun ya da doğrudan WhatsApp’tan yazın; en kısa sürede dönüş yaparım.',
    form: { name: 'Adınız soyadınız', phone: 'Telefon', email: 'E-posta', topic: 'Konu', topics: ['Alım', 'Satış', 'Yatırım', 'Proje pazarlama', 'Konuşmacı daveti', 'Diğer'], msg: 'Mesajınız', send: 'Gönder', consent: 'Kişisel verilerimin işlenmesine ilişkin', kvkk: 'aydınlatma metnini okudum', ok: 'Teşekkürler, mesajınız ulaştı. En kısa sürede dönüş yapacağım.' },
    office: 'ACC Plaza · Yeşilbahçe, Muratpaşa / Antalya', directions: 'Yol tarifi', read: 'Oku', all: 'Tümü',
    n404: 'Aradığınız sayfa bulunamadı', home: 'Ana sayfa', privacy: 'KVKK aydınlatma metni',
  },
  en: {
    locale: 'en_US', nav: { about: 'About', insights: 'Insights', stage: 'Speaking & media', gallery: 'Gallery', advisory: 'Advisory', contact: 'Contact' },
    role: 'Broker & Founder, ACC HOMES', call: 'Call', mqL: 'Brands I have worked with and built with', nlT: 'Subscribe to the ACC NEWS bulletin', nlL: 'The Antalya property agenda, my market analysis and new projects; one e-mail a week.', nlBtn: 'Subscribe', nlOk: 'Thank you, you are subscribed.', mapT: 'Meet me at ACC Plaza', addr: 'Yeşilbahçe, Portakal Çiçeği Blv. No:36/B, Muratpaşa, Antalya', dirBtn: 'Get directions', cta: 'Book a meeting', ctaRead: 'Read my insights', wa: 'Message on WhatsApp',
    homeTitle: 'Ali Caner Can | Antalya Real Estate Broker, Founder of ACC HOMES',
    homeDesc: 'Ali Caner Can: mechanical engineer, ex-multinational sales manager, founder of ACC HOMES and ACC VILLAS. Data-driven, transparent property advice in Antalya.',
    eyebrow: 'Broker & Founder · ACC HOMES International Real Estate',
    h1: 'Ali Caner Can',
    lead: 'A mechanical engineer and sales manager trained at companies like Nestlé and Kraft Heinz. Since 2024, through ACC HOMES, I explain Antalya real estate with data, transparency and time in the field.',
    stats: [['290+', 'sales and rentals I closed personally'], ['50', 'partners serving in 10 languages'], [`${G.rating} ★`, `${G.count} Google reviews (ACC HOMES)`], ['1,000 m²', 'ACC Plaza headquarters']],
    nowT: 'What I do today', nowL: 'The businesses I founded and lead. Each has its own focus, all share the same principles.',
    now: [
      ['ACC HOMES International Real Estate', 'Sales, rentals, project marketing and foreign investor advisory in Antalya. 50 partners at ACC Plaza.', 'home', 'acchomesantalya.com'],
      ['ACC VILLAS', 'Our division for villas and large detached homes: buying, selling, valuation and a guide to villa complexes.', 'villas', 'accvillas.com'],
      ['Antalle Concept Houses', 'A concept villa development in Altınkale, Döşemealtı; sales and marketing run by ACC HOMES.', 'antalle', 'Project page'],
      ['ACC NEWS', 'A weekly bulletin on Antalya and Türkiye property, with economy and regulation updates.', 'news', 'Read the bulletins'],
    ],
    insT: 'Insights and guides', insL: 'My answers to the questions buyers, sellers and investors ask most in the field.',
    careerT: 'Built on corporate discipline', careerL: 'Before real estate I led sales and trade marketing at multinationals. At ACC I apply the same measurement, planning and team-building discipline.',
    stageT: 'In the field and on stage', stageL: 'Awards, investor meetings, business association work and community projects.',
    keysT: 'Handover moments', keysL: 'Title deed day is the best part of the job. These photos are shared with our clients’ permission.',
    revT: 'What clients say', revL: 'From real reviews on the ACC HOMES Google profile.', revAll: 'All Google reviews',
    ctaT: 'Making a property decision in Antalya?', ctaL: 'At the office, online or over coffee or lunch: let’s talk first and read the data together.',
    follow: 'Follow', followE: 'Social media', followT: 'Follow me', followL: 'Where I share the market, the field and new projects first-hand.', followBtn: 'Follow', top: 'Follow on Instagram', footNote: 'Ali Caner Can is the founder and broker of ACC HOMES International Real Estate.',
    aboutTitle: 'About Ali Caner Can | Engineer Turned Antalya Broker', aboutDesc: 'The story of Ali Caner Can, an Antalya-born mechanical engineer: Kuleli, YTÜ, sales leadership at multinationals and founding ACC HOMES in 2024.',
    aboutH: 'From engineering to real estate', aboutLead: 'I was born in Antalya. I learned discipline at Kuleli, analytical thinking at Yıldız Technical University, and sales and team leadership at some of the world’s most demanding companies. I moved into real estate in 2022 and founded ACC HOMES in 2024.',
    tlT: 'The journey',
    tl: [
      ['2004–2008', 'Kuleli Military High School', 'The foundation of discipline, planning and responsibility.'],
      ['2009–2013', 'Yıldız Technical University, Mechanical Engineering', 'Analytical thinking and data-based decisions.'],
      ['2011–2013', 'Robert Bosch · Reckitt Benckiser', 'Marketing intern at Bosch, trade marketing intern at Reckitt (Finish category).'],
      ['2013–2016', 'Hasbro', 'Customer sales representative, then key account executive for toy specialists and e-commerce: Toyzz Shop, Boyner, Hepsiburada, Trendyol.'],
      ['2016–2018', 'Nestlé', 'Assistant national key accounts manager.'],
      ['2018–2022', 'Kraft Heinz', 'National and discounter key accounts manager (Migros, Carrefour, BİM, ŞOK, A101), regional trade marketing manager for the Middle East and Africa (6 GCC countries), e-commerce and B2C channel manager.'],
      ['2022–2024', 'Realty World · broker', 'Buying, selling and renting in Antalya, Mersin and Istanbul; land-for-flats deals, hotels, factories and plazas. A team of 10, over 80 listings, the 2022 revenue award.'],
      ['2023–2024', 'TEUS Group · Sales Director', 'Built and led the sales team for Türkiye projects; pricing and go-to-market strategy, B2B and B2C sales.'],
      ['2024', 'ACC HOMES International Real Estate', 'Founded my own brand, bringing corporate discipline, digital marketing, video and CRM into real estate.'],
      ['2025', 'ACC Plaza · ANTİAD', 'A 1,000 m² headquarters; membership of the Antalya Business People’s Association; investor meeting with Danube Properties.'],
      ['2026', 'ACC VILLAS', 'Today 50 partners serving in 10 languages, and a division focused on villas.'],
    ],
    valT: 'How I work',
    vals: [['Data', 'Comparables, area data and market reports set the price, not gut feeling.'], ['Transparency', 'Costs, risks and process are discussed up front, in writing.'], ['Field', 'I see every property in person and work with every client directly.'], ['Team', 'Trained partners and one centrally managed process.']],
    alsoT: 'Also me', also: ['Member of ANTİAD, Antalya Business People’s Association', 'Professional tennis player', 'Reachable in Turkish and English on Telegram and WhatsApp'],
    insTitle: 'Insights and Guides | Ali Caner Can', insDesc: 'Ali Caner Can on Antalya real estate: the title deed process, purchase costs, what to check before buying a villa or home, and the weekly ACC NEWS.',
    stageTitle: 'Speaking and Media | Ali Caner Can', stageDesc: 'Awards, investor meetings, ANTİAD, the urban renewal summit and ACC Day: Ali Caner Can in the field and on stage.',
    speakT: 'Invite me to speak', speakL: 'I take part in events on the Antalya property market, foreign investment, sales and team leadership.',
    advTitle: 'Real Estate Advisory in Antalya | Ali Caner Can', advDesc: 'Antalya real estate advisory with Ali Caner Can and ACC HOMES for investors, foreign buyers, developers and property owners.',
    advH: 'Who I work with, and how', advLead: 'I provide advisory services under ACC HOMES, together with my team. I take responsibility for every engagement.',
    adv: [
      ['Investors and foreign buyers', 'Area selection, comparable analysis, title deed and official steps, start-to-finish support in your language.', 'guide', 'Buyer’s guide'],
      ['Developers and project owners', 'Positioning, pricing, launch, digital marketing and sales team management.', 'projects', 'Our authorised projects'],
      ['Property owners', 'Free valuation, professional photo and video, targeted ads and process management through to the title deed.', 'sell', 'Sell your property'],
      ['Villa buying and selling', 'ACC VILLAS’ dedicated process for villas and large detached homes.', 'villas', 'accvillas.com'],
    ],
    contactTitle: 'Book a Meeting with Ali Caner Can | Contact', contactDesc: 'Book a meeting with Ali Caner Can at ACC Plaza, online or over coffee or lunch. WhatsApp, phone and e-mail; Yeşilbahçe, Muratpaşa, Antalya.',
    contactH: 'Let’s set up a meeting', meetH: "How shall we meet?", meetL: "Pick what suits you; suggest a date and time in the form.", meet: [["Meeting at the office", "ACC Plaza, Yeşilbahçe. The coffee is on us."], ["Online meeting", "Zoom, Google Meet or a WhatsApp video call."], ["Coffee or a business lunch", "Somewhere near you in Antalya, for a longer conversation."]], meetBtn: "Request this meeting", meetType: "Meeting type", meetDate: "Preferred date", meetTime: "Time", contactLead: 'Fill in the form or message me directly on WhatsApp; I will get back to you shortly.',
    form: { name: 'Full name', phone: 'Phone', email: 'E-mail', topic: 'Topic', topics: ['Buying', 'Selling', 'Investment', 'Project marketing', 'Speaking invitation', 'Other'], msg: 'Your message', send: 'Send', consent: 'I have read the', kvkk: 'privacy notice', ok: 'Thank you, your message has arrived. I will get back to you shortly.' },
    office: 'ACC Plaza · Yeşilbahçe, Muratpaşa, Antalya', directions: 'Directions', read: 'Read', all: 'All',
    n404: 'Page not found', home: 'Home', privacy: 'Privacy notice',
  },
  ru: {
    locale: 'ru_RU', nav: { about: 'Обо мне', insights: 'Статьи', stage: 'Выступления', gallery: 'Галерея', advisory: 'Консультации', contact: 'Контакты' },
    role: 'Брокер и основатель ACC HOMES', call: 'Позвонить', mqL: 'Бренды, с которыми я работал и работаю', nlT: 'Подпишитесь на бюллетень ACC NEWS', nlL: 'Повестка рынка Анталии, моя аналитика и новые проекты; одно письмо в неделю.', nlBtn: 'Подписаться', nlOk: 'Спасибо, вы подписаны.', mapT: 'Встретимся в ACC Plaza', addr: 'Ешильбахче, бульвар Портакал Чичеги, 36/B, Муратпаша, Анталия', dirBtn: 'Проложить маршрут', cta: 'Назначить встречу', ctaRead: 'Читать статьи', wa: 'Написать в WhatsApp',
    homeTitle: 'Али Джанер Джан | Брокер недвижимости в Анталии, ACC HOMES',
    homeDesc: 'Али Джанер Джан: инженер-механик, экс-руководитель продаж в международных компаниях, основатель ACC HOMES и ACC VILLAS. Консультации по недвижимости Анталии.',
    eyebrow: 'Брокер и основатель · ACC HOMES International Real Estate',
    h1: 'Али Джанер Джан',
    lead: 'Инженер-механик и руководитель продаж с опытом в Nestlé и Kraft Heinz. С 2024 года вместе с ACC HOMES рассказываю о недвижимости Анталии на основе данных, открыто и по опыту работы на объектах.',
    stats: [['290+', 'сделок продажи и аренды, проведённых лично'], ['50', 'партнёров, 10 языков'], [`${String(G.rating).replace('.', ',')} ★`, `${G.count} отзывов Google (ACC HOMES)`], ['1 000 м²', 'штаб-квартира ACC Plaza']],
    nowT: 'Чем я занимаюсь сегодня', nowL: 'Компании, которые я основал и которыми руковожу. У каждой своя специализация и общие принципы.',
    now: [
      ['ACC HOMES International Real Estate', 'Продажа, аренда, маркетинг проектов и консультации иностранных инвесторов в Анталии. 50 партнёров в ACC Plaza.', 'home', 'acchomesantalya.com'],
      ['ACC VILLAS', 'Направление по виллам и большим частным домам: покупка, продажа, оценка и гид по комплексам вилл.', 'villas', 'accvillas.com'],
      ['Antalle Concept Houses', 'Концептуальный проект вилл в Алтынкале, Дёшемеалты; продажами и маркетингом занимается ACC HOMES.', 'antalle', 'Страница проекта'],
      ['ACC NEWS', 'Еженедельный бюллетень о рынке недвижимости Анталии и Турции, экономике и законодательстве.', 'news', 'Читать выпуски'],
    ],
    insT: 'Статьи и гиды', insL: 'Мои ответы на вопросы, которые покупатели, продавцы и инвесторы задают чаще всего.',
    careerT: 'Корпоративная школа', careerL: 'До недвижимости я руководил продажами и trade marketing в международных компаниях. В ACC применяю ту же дисциплину измерений, планирования и построения команды.',
    stageT: 'На объектах и на сцене', stageL: 'Награды, встречи с инвесторами, работа в деловой ассоциации и социальные проекты.',
    keysT: 'Моменты передачи ключей', keysL: 'День оформления тапу — лучший момент в работе. Фото опубликованы с согласия наших клиентов.',
    revT: 'Что говорят клиенты', revL: 'Из реальных отзывов в профиле ACC HOMES в Google.', revAll: 'Все отзывы Google',
    ctaT: 'Принимаете решение о недвижимости в Анталии?', ctaL: 'В офисе, онлайн или за кофе и деловым обедом: давайте сначала поговорим и вместе посмотрим на данные.',
    follow: 'Подписывайтесь', followE: 'Соцсети', followT: 'Подписывайтесь', followL: 'Здесь я первым делюсь новостями рынка, объектами и проектами.', followBtn: 'Подписаться', top: 'Instagram', footNote: 'Али Джанер Джан — основатель и брокер ACC HOMES International Real Estate.',
    aboutTitle: 'Али Джанер Джан: путь брокера в Анталии | Обо мне', aboutDesc: 'История Али Джанера Джана, инженера-механика из Анталии: Кулели, YTÜ, руководство продажами в международных компаниях и основание ACC HOMES в 2024 году.',
    aboutH: 'От инженерии к недвижимости', aboutLead: 'Я родился в Анталии. Дисциплине учился в Кулели, аналитическому мышлению — в Техническом университете Йылдыз, продажам и управлению командой — в одних из самых требовательных компаний мира. В 2022 году пришёл в недвижимость, в 2024 году основал ACC HOMES.',
    tlT: 'Путь',
    tl: [
      ['2004–2008', 'Военный лицей Кулели', 'Основа дисциплины, планирования и ответственности.'],
      ['2009–2013', 'Технический университет Йылдыз, машиностроение', 'Аналитическое мышление и решения на основе данных.'],
      ['2011–2013', 'Robert Bosch · Reckitt Benckiser', 'Стажировка в маркетинге Bosch и в trade marketing Reckitt (категория Finish).'],
      ['2013–2016', 'Hasbro', 'Торговый представитель, затем менеджер ключевых клиентов в канале игрушек и e-commerce: Toyzz Shop, Boyner, Hepsiburada, Trendyol.'],
      ['2016–2018', 'Nestlé', 'Помощник менеджера по национальным ключевым клиентам.'],
      ['2018–2022', 'Kraft Heinz', 'Менеджер национальных сетей и дискаунтеров (Migros, Carrefour, BİM, ŞOK, A101), региональный менеджер trade marketing по Ближнему Востоку и Африке (6 стран Залива), руководитель e-commerce и B2C.'],
      ['2022–2024', 'Realty World · брокер', 'Покупка, продажа и аренда в Анталии, Мерсине и Стамбуле; сделки «земля за квартиры», отели, заводы, плазы. Команда из 10 человек, более 80 объектов, награда по обороту за 2022 год.'],
      ['2023–2024', 'TEUS Group · директор по продажам', 'Создание и руководство командой продаж проектов в Турции; ценообразование и стратегия выхода на рынок, B2B и B2C.'],
      ['2024', 'ACC HOMES International Real Estate', 'Основал собственный бренд, объединив корпоративную дисциплину, цифровой маркетинг, видео и CRM.'],
      ['2025', 'ACC Plaza · ANTİAD', 'Штаб-квартира 1 000 м²; членство в Ассоциации деловых людей Анталии; встреча инвесторов с Danube Properties.'],
      ['2026', 'ACC VILLAS', 'Сегодня 50 партнёров, работающих на 10 языках, и направление по виллам.'],
    ],
    valT: 'Как я работаю',
    vals: [['Данные', 'Цену определяют аналоги, данные по району и отчёты рынка, а не интуиция.'], ['Прозрачность', 'Расходы, риски и процесс обсуждаем заранее и письменно.'], ['Объекты', 'Лично смотрю каждый объект и работаю с каждым клиентом.'], ['Команда', 'Обученные партнёры и процесс, управляемый из одного центра.']],
    alsoT: 'Ещё обо мне', also: ['Член ANTİAD, Ассоциации деловых людей Анталии', 'Профессиональный теннисист', 'Общение на турецком и английском в Telegram и WhatsApp'],
    insTitle: 'Статьи и гиды | Али Джанер Джан', insDesc: 'Али Джанер Джан о недвижимости Анталии: оформление тапу, расходы на покупку, что проверить перед покупкой виллы или дома, еженедельный ACC NEWS.',
    stageTitle: 'Выступления и медиа | Али Джанер Джан', stageDesc: 'Награды, встречи с инвесторами, ANTİAD, саммит по реновации и ACC Day: Али Джанер Джан на объектах и на сцене.',
    speakT: 'Пригласите меня выступить', speakL: 'Участвую в мероприятиях о рынке недвижимости Анталии, иностранных инвестициях, продажах и лидерстве.',
    advTitle: 'Консультации | Али Джанер Джан', advDesc: 'Консультации по недвижимости Анталии с Али Джанером Джаном и ACC HOMES для инвесторов, иностранных покупателей, застройщиков и владельцев.',
    advH: 'С кем и как я работаю', advLead: 'Консультации я провожу в рамках ACC HOMES вместе с командой. За каждый проект отвечаю лично.',
    adv: [
      ['Инвесторы и иностранные покупатели', 'Выбор района, анализ аналогов, тапу и официальные процедуры, сопровождение от начала до конца на вашем языке.', 'guide', 'Гид покупателя'],
      ['Застройщики и владельцы проектов', 'Позиционирование, ценообразование, запуск, цифровой маркетинг и управление командой продаж.', 'projects', 'Наши проекты'],
      ['Владельцы недвижимости', 'Бесплатная оценка, профессиональные фото и видео, таргетированная реклама и сопровождение до тапу.', 'sell', 'Продать недвижимость'],
      ['Покупка и продажа вилл', 'Отдельный процесс ACC VILLAS для вилл и больших частных домов.', 'villas', 'accvillas.com'],
    ],
    contactTitle: 'Встреча с Али Джанером Джаном | Контакты', contactDesc: 'Назначьте встречу с Али Джанером Джаном: WhatsApp, телефон, e-mail и ACC Plaza, Ешильбахче, Муратпаша, Анталия.',
    contactH: 'Давайте встретимся', meetH: "Как встретимся?", meetL: "Выберите удобный формат и предложите дату и время в форме.", meet: [["Встреча в офисе", "ACC Plaza, Ешильбахче. Кофе за нами."], ["Онлайн-встреча", "Zoom, Google Meet или видеозвонок в WhatsApp."], ["Кофе или деловой обед", "В удобном для вас месте в Анталии, для долгого разговора."]], meetBtn: "Выбрать этот формат", meetType: "Формат встречи", meetDate: "Желаемая дата", meetTime: "Время", contactLead: 'Заполните форму или напишите мне в WhatsApp; я отвечу в ближайшее время.',
    form: { name: 'Имя и фамилия', phone: 'Телефон', email: 'E-mail', topic: 'Тема', topics: ['Покупка', 'Продажа', 'Инвестиции', 'Маркетинг проекта', 'Приглашение выступить', 'Другое'], msg: 'Сообщение', send: 'Отправить', consent: 'Я прочитал(а)', kvkk: 'уведомление о конфиденциальности', ok: 'Спасибо, сообщение получено. Я отвечу в ближайшее время.' },
    office: 'ACC Plaza · Ешильбахче, Муратпаша, Анталия', directions: 'Маршрут', read: 'Читать', all: 'Все',
    n404: 'Страница не найдена', home: 'Главная', privacy: 'Политика конфиденциальности',
  },
};

// Yazılar: yayımlanmış, Caner imzalı içerik (ACC HOMES / ACC VILLAS)
const LI = 'https://www.linkedin.com/in/alicanercantherealtor/recent-activity/all/';
const POSTS = [
  { tag: { tr: 'Piyasa analizi · LinkedIn', en: 'Market analysis · LinkedIn', ru: 'Аналитика · LinkedIn' }, t: { tr: 'BDDK’nın 19 Kasım kararı: ikinci konutta kredi kısıtı gevşedi', en: 'BDDK’s 19 November decision: the second-home loan limit eases', ru: 'Решение BDDK от 19 ноября: смягчение ипотеки на второе жильё' }, d: { tr: 'Tek evi olan alıcı için azami kredi 1,125 milyon TL’den 4,5 milyon TL’ye çıkıyor. Kimler yeniden alıcı oluyor, talep nerede güçlenir?', en: 'For a buyer with one home, the maximum loan on a TRY 5m home rises from TRY 1.125m to TRY 4.5m. Who returns to the market and where demand strengthens.', ru: 'Для владельца одного жилья максимум кредита на жильё за 5 млн TL растёт с 1,125 до 4,5 млн TL. Кто возвращается на рынок и где вырастет спрос.' }, u: { tr: LI, en: LI, ru: LI }, img: 'acc-plaza-ofis' },
  { tag: { tr: 'Alıcı rehberi', en: 'Buyer’s guide', ru: 'Гид покупателя' }, t: { tr: 'Ev alırken pişman olmamak için dikkat edilecekler', en: 'Buying a home without regrets', ru: 'Как не пожалеть о покупке жилья' }, d: { tr: 'Daireden villaya ya da büyük siteye geçerken bakım bütçesi, aidat, vergi ve yaşam değişimi.', en: 'Upkeep, service charges, tax and lifestyle change when moving to a villa or large complex.', ru: 'Содержание, взносы, налог и образ жизни при переезде в виллу или большой комплекс.' }, u: { tr: `${MAIN}/alici-rehberi/ev-aldiktan-sonra-pisman-olmamak/`, en: `${MAIN}/en/buyers-guide/buying-a-home-without-regrets/`, ru: `${MAIN}/ru/buyers-guide/kak-ne-pozhalet-o-pokupke/` }, img: 'antalle-concept-houses-villalar' },
  { tag: { tr: 'ACC VILLAS', en: 'ACC VILLAS', ru: 'ACC VILLAS' }, t: { tr: 'Villa alırken pişman olmamak için dikkat edilecekler', en: 'Buying a villa without regrets: what to check first', ru: 'Как не пожалеть о покупке виллы' }, d: { tr: 'Havuz, bahçe, yalıtım, ısınma, güvenlik ve villa sitesi yönetimi; yıllık bakım bütçesiyle.', en: 'Pool, garden, insulation, heating, security and complex management, with a yearly upkeep budget.', ru: 'Бассейн, сад, утепление, отопление, безопасность и управление комплексом, с годовым бюджетом.' }, u: { tr: `${VILLAS}/blog/villa-aldiktan-sonra-pisman-olmamak/`, en: `${VILLAS}/en/blog/avoid-regret-after-buying-a-villa/`, ru: `${VILLAS}/ru/blog/kak-ne-pozhalet-o-pokupke-villy/` }, img: 'antalle-concept-houses' },
  { tag: { tr: 'Alıcı rehberi', en: 'Buyer’s guide', ru: 'Гид покупателя' }, t: { tr: 'Tapu süreci ve gerekli belgeler 2026', en: 'Title deed process and documents 2026', ru: 'Тапу и документы 2026' }, d: { tr: 'Yeni DASK kuralı, Web Tapu, gerçek bedel beyanı ve yabancı alıcılar için süreç.', en: 'The new DASK rule, Web Tapu, real price declaration and the process for foreign buyers.', ru: 'Новое правило DASK, Web Tapu, декларация реальной цены и процесс для иностранцев.' }, u: { tr: `${MAIN}/alici-rehberi/tapu-sureci-gerekli-belgeler/`, en: `${MAIN}/en/buyers-guide/title-deed-process-documents/`, ru: `${MAIN}/en/buyers-guide/title-deed-process-documents/` }, img: 'tapu-teslim-2' },
  { tag: { tr: 'ACC VILLAS', en: 'ACC VILLAS', ru: 'ACC VILLAS' }, t: { tr: 'Villa alım-satım rehberi: belgeler ve tapu', en: 'Villa buying and selling guide', ru: 'Гид по покупке и продаже виллы' }, d: { tr: 'Hazır ve projeden villada belgeler, Web Tapu güvenliği, yabancı satıcı ve alıcı süreci.', en: 'Documents for resale and off-plan villas, Web Tapu security, the process for foreign sellers and buyers.', ru: 'Документы для готовых вилл и строящихся, безопасность Web Tapu, процесс для иностранцев.' }, u: { tr: `${VILLAS}/villa-alim-satim-rehberi/`, en: `${VILLAS}/en/villa-buying-selling-guide/`, ru: `${VILLAS}/ru/gid-pokupka-prodazha-villy/` }, img: 'capital-insaat-altintas-havuz' },
  { tag: { tr: 'Alıcı rehberi', en: 'Buyer’s guide', ru: 'Гид покупателя' }, t: { tr: 'Alım masrafları ve hesaplayıcı', en: 'Purchase costs and calculator', ru: 'Расходы на покупку и калькулятор' }, d: { tr: 'Tapu harcı, döner sermaye, hizmet bedeli, DASK ve diğer kalemler tek sayfada.', en: 'Title deed fee, land registry fee, agency fee, DASK and more on one page.', ru: 'Пошлина тапу, сбор, вознаграждение, DASK и другое на одной странице.' }, u: { tr: `${MAIN}/alici-rehberi/alim-masraflari/`, en: `${MAIN}/en/buyers-guide/purchase-costs/`, ru: `${MAIN}/en/buyers-guide/purchase-costs/` }, img: 'acc-plaza-ofis' },
  { tag: { tr: 'Haftalık bülten', en: 'Weekly bulletin', ru: 'Еженедельный бюллетень' }, t: { tr: 'ACC NEWS: Antalya gayrimenkul gündemi', en: 'ACC NEWS: the Antalya property agenda', ru: 'ACC NEWS: повестка рынка Анталии' }, d: { tr: 'Her hafta piyasa, ekonomi ve mevzuat başlıklarının kısa özeti.', en: 'A short weekly summary of market, economy and regulation headlines.', ru: 'Краткая еженедельная сводка рынка, экономики и законодательства.' }, u: ACC.news, img: 'danube-global-ortaklik-sahne' },
];

// Sahne ve medya galerisi
const GAL = [
  ['realty-world-mes-2022-ciro-odulu', { tr: 'Realty World MES, 2022 yılı ciro ödülü', en: 'Realty World MES, 2022 revenue award', ru: 'Realty World MES, награда по обороту за 2022 год' }],
  ['realty-world-2022-odul-toreni', { tr: 'Realty World 2022 Ödül Töreni, 30 Nisan 2023', en: 'Realty World 2022 Awards, 30 April 2023', ru: 'Церемония наград Realty World 2022, 30 апреля 2023' }],
  ['danube-global-ortaklik-sahne', { tr: 'Danube Properties ile global ortaklık sunumu, Akra Hotel', en: 'Global partnership presentation with Danube Properties, Akra Hotel', ru: 'Презентация партнёрства с Danube Properties, Akra Hotel' }],
  ['sosyal/akra-dubai-2025-vizyon-sunumu', { tr: 'Yatırımcı buluşmasında vizyon sunumu, Aralık 2025', en: 'Vision presentation at the investor meeting, December 2025', ru: 'Презентация на встрече инвесторов, декабрь 2025' }],
  ['antiad-antalya-is-insanlari-dernegi', { tr: 'ANTİAD, Antalya İş İnsanları Derneği', en: 'ANTİAD, Antalya Business People’s Association', ru: 'ANTİAD, Ассоциация деловых людей Анталии' }],
  ['deprem-kentsel-donusum-zirvesi', { tr: 'Antalya’da Deprem Bilinirliği ve Kentsel Dönüşüm Zirvesi', en: 'Earthquake Awareness and Urban Renewal Summit, Antalya', ru: 'Саммит по сейсмической безопасности и реновации, Анталия' }],
  ['sosyal/akra-dubai-2025-ekip-sahne', { tr: 'ACC HOMES ekibiyle Akra Hotel sahnesinde', en: 'With the ACC HOMES team on stage at Akra Hotel', ru: 'С командой ACC HOMES на сцене Akra Hotel' }],
  ['antalle-open-house-ekip', { tr: 'Antalle Concept Houses open house', en: 'Antalle Concept Houses open house', ru: 'Open house Antalle Concept Houses' }],
  ['sosyal/acc-day-2025-okul', { tr: 'ACC Day 2025: okul ziyareti, sosyal sorumluluk', en: 'ACC Day 2025: school visit, community work', ru: 'ACC Day 2025: визит в школу, социальный проект' }],
  ['yatirimci-sunumu', { tr: 'Proje ve yatırım sunumu', en: 'Project and investment presentation', ru: 'Презентация проекта и инвестиций' }],
  ['video-cekimi-studyo', { tr: 'Stüdyoda video çekimi', en: 'Filming in the studio', ru: 'Съёмка видео в студии' }],
  ['sosyal/ekip-acc-plaza-2026', { tr: 'ACC Plaza önünde ACC ailesiyle, Kasım 2026', en: 'With the ACC family in front of ACC Plaza, November 2026', ru: 'С семьёй ACC у ACC Plaza, ноябрь 2026' }],
];
const KEYS = [1, 2, 3, 4, 5, 6].map((i) => `tapu-teslim-${i}`);
const img = (n, w) => `/img/${n}${w === 800 && !n.startsWith('sosyal/') ? '-800' : ''}.webp`;


// ---------- galeri ----------
const GALERI = JSON.parse(fs.readFileSync(path.join(HERE, 'galeri.json'), 'utf8'));
const GCAT = { saha: ['Sahada', 'On site', 'На объектах'], teslim: ['Tapu ve anahtar teslimleri', 'Handovers', 'Передача ключей'], sahne: ['Sahne ve etkinlikler', 'Stage & events', 'Сцена и события'], ekip: ['ACC HOMES ekibi', 'ACC HOMES team', 'Команда ACC HOMES'], portre: ['Portreler', 'Portraits', 'Портреты'] };
const GLI = { tr: 0, en: 1, ru: 2 };
const GT = {
  tr: { title: 'Galeri | Ali Caner Can, Antalya Emlak Danışmanı ve Broker', desc: 'Ali Caner Can ve ACC HOMES ekibinden kareler: Antalya’da sahada portföy çekimleri, tapu ve anahtar teslimleri, sahne ve etkinlikler, ACC Plaza.', h1: 'Sahada, tapuda, sahnede', lead: 'Antalya’da her portföyü yerinde görüyor, her müşterimi tapuya kadar götürüyorum. Bu galeri; sahadaki çekimlerden mutlu teslimlere, sahnelerden ACC Plaza’daki ekibimize kadar işimin fotoğraf albümü. Yeni kareler eklendikçe büyüyor.', all: 'Tümü', ctaT: 'Bir sonraki teslim sizinki olsun', ctaL: 'Antalya’da ev, villa ya da yatırım için görüşme planlayın; satıştan tapuya kadar süreci birlikte yönetelim.', cta: 'Görüşme planla', more: 'Galeriye git', n: 'kare' },
  en: { title: 'Gallery | Ali Caner Can, Antalya Real Estate Broker', desc: 'Moments with Ali Caner Can and the ACC HOMES team: on-site listing shoots in Antalya, title deed and key handovers, stage and events, ACC Plaza.', h1: 'On site, at the title deed office, on stage', lead: 'In Antalya I see every listing in person and walk every client through to the title deed. This gallery is the photo album of that work, from on-site shoots and happy handovers to stages and our team at ACC Plaza. It grows as new moments are added.', all: 'All', ctaT: 'Let the next handover be yours', ctaL: 'Book a meeting about a home, villa or investment in Antalya; we manage everything from offer to title deed together.', cta: 'Book a meeting', more: 'Open the gallery', n: 'photos' },
  ru: { title: 'Галерея | Али Джанер Джан, брокер по недвижимости в Анталии', desc: 'Кадры Али Джанер Джана и команды ACC HOMES: съёмки объектов в Анталии, передача ключей и тапу, сцена и мероприятия, ACC Plaza.', h1: 'На объекте, в тапу, на сцене', lead: 'В Анталии я лично смотрю каждый объект и сопровождаю каждого клиента до оформления тапу. Эта галерея — фотоальбом моей работы: от съёмок на объектах и счастливых сделок до сцены и команды в ACC Plaza. Она пополняется новыми кадрами.', all: 'Все', ctaT: 'Пусть следующая сделка будет вашей', ctaL: 'Запишитесь на встречу о квартире, вилле или инвестиции в Анталии — проведём весь процесс до тапу вместе.', cta: 'Записаться на встречу', more: 'Открыть галерею', n: 'фото' },
};
const galAlt = (g, lang) => `${g.cap[lang]} | ${['Ali Caner Can, Antalya emlak danışmanı', 'Ali Caner Can, Antalya real estate broker', 'Али Джанер Джан, риелтор в Анталии'][GLI[lang]]}`;
const galleryBody = (lang) => { const g = GT[lang], cats = Object.keys(GCAT).filter((c) => GALERI.some((x) => x.cat === c));
  return `<section class="phero sm"><div class="wrap"><p class="eyebrow">${T[lang].nav.gallery} · ${GALERI.length} ${g.n}</p><h1>${g.h1}</h1><p class="lead">${g.lead}</p></div></section>
<section class="sec gpage"><div class="wrap"><div class="gf" role="tablist"><button class="on" data-c="*">${g.all} <i>${GALERI.length}</i></button>${cats.map((c) => `<button data-c="${c}" id="${c}">${GCAT[c][GLI[lang]]} <i>${GALERI.filter((x) => x.cat === c).length}</i></button>`).join('')}</div>
<div class="mas">${GALERI.map((x, i) => `<figure class="mi rv" data-c="${x.cat}"><a href="${x.b}" data-i="${i}"><img src="${x.s}" alt="${esc(galAlt(x, lang))}" width="${x.w}" height="${x.h}" loading="${i < 6 ? 'eager' : 'lazy'}" decoding="async"></a><figcaption>${esc(x.cap[lang])}</figcaption></figure>`).join('')}</div>
<div class="cb gcta"><div><h2>${g.ctaT}</h2><p>${g.ctaL}</p></div><a class="btn" href="${url(lang, 'contact')}#randevu">${g.cta}</a></div></div></section>
<dialog class="lb" aria-label="${T[lang].nav.gallery}"><button class="lbx" aria-label="×">×</button><button class="lbp" aria-label="‹">‹</button><figure><img alt=""><figcaption></figcaption></figure><button class="lbn" aria-label="›">›</button></dialog>
<script>(()=>{const B=[...document.querySelectorAll('.gf button')],F=[...document.querySelectorAll('.mi')],D=document.querySelector('.lb'),I=D.querySelector('img'),C=D.querySelector('figcaption');let cur=0;const vis=()=>F.filter(f=>!f.hidden);
const set=c=>{B.forEach(b=>b.classList.toggle('on',b.dataset.c===c));F.forEach(f=>f.hidden=!(c==='*'||f.dataset.c===c))};B.forEach(b=>b.onclick=()=>{set(b.dataset.c);history.replaceState(null,'',b.dataset.c==='*'?location.pathname:'#'+b.dataset.c)});
const h=location.hash.slice(1);if(h&&B.some(b=>b.dataset.c===h))set(h);
const show=k=>{const v=vis();cur=(k+v.length)%v.length;const a=v[cur].querySelector('a'),im=a.querySelector('img');I.src=a.href;I.alt=im.alt;C.textContent=v[cur].querySelector('figcaption').textContent};
F.forEach(f=>f.querySelector('a').onclick=e=>{e.preventDefault();show(vis().indexOf(f));D.showModal()});
D.querySelector('.lbx').onclick=()=>D.close();D.querySelector('.lbp').onclick=()=>show(cur-1);D.querySelector('.lbn').onclick=()=>show(cur+1);D.onclick=e=>{if(e.target===D)D.close()};
document.addEventListener('keydown',e=>{if(!D.open)return;if(e.key==='ArrowRight')show(cur+1);if(e.key==='ArrowLeft')show(cur-1)});
let x0=0;D.addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true});D.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>40)show(cur+(d<0?1:-1))})})();</script>`; };
const galleryLd = (lang) => ({ '@context': 'https://schema.org', '@type': 'ImageGallery', name: GT[lang].title, description: GT[lang].desc, url: DOMAIN + url(lang, 'gallery'), inLanguage: lang, author: { '@id': `${DOMAIN}/#person` }, associatedMedia: GALERI.map((x) => ({ '@type': 'ImageObject', contentUrl: DOMAIN + x.b, thumbnailUrl: DOMAIN + x.s, caption: x.cap[lang], width: x.w, height: x.h, creditText: 'Ali Caner Can', copyrightHolder: { '@id': `${DOMAIN}/#person` } })) });

// ---------- anahtar kelimeler ----------
const KW = {
  tr: 'Ali Caner Can, Antalya emlak danışmanı, Antalya gayrimenkul brokerı, ACC HOMES, ACC VILLAS, Antalya satılık daire, Antalya satılık villa, Antalya gayrimenkul yatırımı',
  en: 'Ali Caner Can, Antalya real estate broker, Antalya realtor, ACC HOMES, ACC VILLAS, property in Antalya, villas for sale Antalya, Antalya real estate investment',
  ru: 'Али Джанер Джан, Ali Caner Can, риелтор Анталия, брокер недвижимости Анталия, ACC HOMES, ACC VILLAS, недвижимость в Анталии, купить виллу в Анталии',
};
const PKW = {
  gallery: { tr: 'Antalya emlak danışmanı fotoğrafları, tapu teslimi Antalya, anahtar teslimi, Antalya emlakçı, Antalya satılık daire, Antalya satılık villa, gayrimenkul brokerı', en: 'Antalya realtor photos, property handover Antalya, title deed handover Turkey, Antalya real estate agent, homes for sale Antalya', ru: 'риелтор Анталия фото, передача ключей Анталия, тапу, агент по недвижимости Анталия, недвижимость в Анталии' },
  home: { tr: 'en iyi emlakçı Antalya, Antalya emlak ofisi', en: 'best realtor Antalya, Antalya property advisor', ru: 'лучший риелтор Анталии, агентство недвижимости Анталия' },
  about: { tr: 'Ali Caner Can kimdir, makine mühendisi emlak, Kraft Heinz Nestlé satış yöneticisi', en: 'who is Ali Caner Can, engineer turned realtor, Kraft Heinz Nestlé sales manager', ru: 'кто такой Али Джанер Джан, биография брокера' },
  insights: { tr: 'Antalya gayrimenkul piyasası, tapu süreci, konut kredisi, villa alırken dikkat', en: 'Antalya property market, title deed process, buying a villa in Turkey', ru: 'рынок недвижимости Анталии, оформление тапу, покупка виллы в Турции' },
  stage: { tr: 'gayrimenkul konuşmacı Antalya, emlak ödülü, ANTİAD, yatırımcı buluşması', en: 'real estate speaker Antalya, investor events Turkey, ANTİAD', ru: 'спикер по недвижимости Анталия, встречи инвесторов' },
  advisory: { tr: 'gayrimenkul danışmanlığı Antalya, proje pazarlama, yabancıya konut satışı, mülk değerleme', en: 'real estate advisory Antalya, project marketing Turkey, foreign buyers Turkey, property valuation', ru: 'консультации по недвижимости Анталия, маркетинг проектов, покупка недвижимости иностранцами' },
  contact: { tr: 'Ali Caner Can iletişim, emlak randevu Antalya, ACC Plaza', en: 'contact Ali Caner Can, book a meeting with a realtor Antalya, ACC Plaza', ru: 'контакты Али Джанер Джан, встреча с риелтором Анталия' },
};

// ---------- şablon ----------
const RTLX = (s) => s;
function head({ lang, title, desc, canon, alt, ld = [], image, type = 'website', kw }) {
  const t = T[lang];
  const og = image || `${DOMAIN}/og-alicanercan.jpg`;
  const altLinks = alt ? LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${DOMAIN}${alt[l]}">`).join('') + `<link rel="alternate" hreflang="x-default" href="${DOMAIN}${alt.tr}">` : '';
  return `<!DOCTYPE html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><link rel="canonical" href="${DOMAIN}${canon}">${altLinks}
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1"><meta name="author" content="Ali Caner Can"><meta name="keywords" content="${esc(kw || KW[lang])}">
<meta property="og:type" content="${type}"><meta property="og:site_name" content="Ali Caner Can"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${DOMAIN}${canon}"><meta property="og:image" content="${og}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Ali Caner Can, ${esc(T[lang].role)}"><meta property="og:locale" content="${t.locale}">${LANGS.filter((l) => l !== lang).map((l) => `<meta property="og:locale:alternate" content="${T[l].locale}">`).join('')}
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(desc)}"><meta name="twitter:image" content="${og}">
<link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><meta name="theme-color" content="#1d1d1f">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Anton&display=swap"><link rel="stylesheet" href="/style.css?v=9">
${ld.map((x) => `<script type="application/ld+json">${JSON.stringify(x)}</script>`).join('')}
</head>`;
}
const navKeys = ['about', 'insights', 'stage', 'gallery', 'advisory', 'contact'];
function header(lang, alt, cur) {
  const t = T[lang];
  const lsw = LANGS.map((l) => `<a href="${(alt && alt[l]) || url(l, 'home')}"${l === lang ? ' class="on" aria-current="true"' : ''} hreflang="${l}">${l.toUpperCase()}</a>`).join('');
  return `<div class="tbar"><div class="wrap tbi"><span class="tl1"><a href="tel:${PHONE.raw}">${ICO.ph}${PHONE.text}</a><a href="https://wa.me/${PHONE.wa}" target="_blank" rel="noopener">${ICO.wa}WhatsApp</a><a class="tml" href="mailto:${MAIL}">${MAIL}</a></span><span class="tl2"><a class="tig" href="${SOCIAL[0][3]}" target="_blank" rel="noopener">${ICO.ig}${SOCIAL[0][2]}</a><a class="tyt" href="${SOCIAL[2][3]}" target="_blank" rel="noopener" aria-label="YouTube">${ICO.yt}</a><a class="tin" href="${SOCIAL[1][3]}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICO.in}</a></span></div></div>
<header class="top"><div class="wrap hb"><a class="wm" href="${url(lang, 'home')}" aria-label="Ali Caner Can"><span class="wm1">ALİ CANER CAN</span><span class="wm2">${t.role}</span></a>
<nav class="nav" aria-label="Menu">${navKeys.map((k) => `<a href="${url(lang, k)}"${cur === k ? ' aria-current="page"' : ''}>${t.nav[k]}</a>`).join('')}</nav>
<div class="hr"><span class="lsw">${lsw}</span><a class="btn sm" href="${url(lang, 'contact')}">${t.cta}</a><button class="burger" type="button" aria-label="Menu"><i></i><i></i><i></i></button></div></div>
<div class="mpanel">${navKeys.map((k) => `<a href="${url(lang, k)}">${t.nav[k]}</a>`).join('')}<span class="lsw">${lsw}</span></div></header>`;
}
function footer(lang) {
  const t = T[lang];
  return `<section class="ctaband"><div class="wrap cb"><div><h2>${t.ctaT}</h2><p>${t.ctaL}</p></div><div class="cbb"><a class="btn" href="${url(lang, 'contact')}#randevu">${t.cta}</a><a class="btn ghost" href="https://wa.me/${PHONE.wa}" target="_blank" rel="noopener">${ICO.wa}${t.wa}</a></div></div></section>
<section class="nl"><div class="wrap nlg"><div><h2>${t.nlT}</h2><p>${t.nlL}</p></div><form class="nlf" method="POST" action="/form.php"><input type="hidden" name="form-name" value="bulten"><input type="hidden" name="_next" value="${url(lang, 'home')}?bulten=1"><input type="hidden" name="dil" value="${lang}"><input type="hidden" name="site" value="alicanercan.com"><p class="hpf"><input name="bot" tabindex="-1" autocomplete="off"></p><div class="nlrow"><input name="eposta" type="email" required placeholder="${t.form.email} *" autocomplete="email" aria-label="${t.form.email}"><button class="btn" type="submit">${t.nlBtn}</button></div><label class="chk"><input type="checkbox" name="kvkk_onay" value="evet" required> <span>${t.form.consent} <a href="${ACC.kvkk[lang]}" target="_blank" rel="noopener">${t.form.kvkk}</a> *</span></label><p class="okmsg nlok" hidden>${t.nlOk}</p></form></div></section>
<footer class="ft"><div class="wrap fg"><div><img class="flogo" src="/img/logo-acc-ali-caner-can.webp" alt="ACC · Ali Caner Can" width="520" height="46" loading="lazy"><p class="muted">${t.footNote}</p><p class="soc">${SOCIAL.map(([k, n, , u]) => `<a href="${u}" target="_blank" rel="noopener" aria-label="${n}">${ICO[k]}</a>`).join('')}</p></div>
<div><p class="fh">ALİ CANER CAN</p>${navKeys.map((k) => `<a href="${url(lang, k)}">${t.nav[k]}</a>`).join('')}</div>
<div><p class="fh">ACC</p><a href="${ACC.home[lang]}" target="_blank" rel="noopener">ACC HOMES</a><a href="${ACC.villas[lang]}" target="_blank" rel="noopener">ACC VILLAS</a><a href="${ACC.antalle[lang]}" target="_blank" rel="noopener">Antalle Concept Houses</a><a href="${ACC.news[lang]}" target="_blank" rel="noopener">ACC NEWS</a><a href="https://www.instagram.com/acchomesantalya/" target="_blank" rel="noopener">Instagram @acchomesantalya</a><a href="https://www.instagram.com/acc.villas/" target="_blank" rel="noopener">Instagram @acc.villas</a></div>
<div><p class="fh">${t.nav.contact}</p><a href="tel:${PHONE.raw}">${PHONE.text}</a><a href="https://wa.me/${PHONE.wa}" target="_blank" rel="noopener">WhatsApp</a><a href="mailto:${MAIL}">${MAIL}</a><a href="${G.url}" target="_blank" rel="noopener">${t.office}</a></div></div>
<div class="wrap fb"><span>© ${new Date().getFullYear()} Ali Caner Can</span><span><a href="${ACC.kvkk[lang]}" target="_blank" rel="noopener">${t.privacy}</a></span></div></footer>
<div class="dock"><a class="d-call" href="tel:${PHONE.raw}">${ICO.ph}${t.call}</a><a class="d-wa" href="https://wa.me/${PHONE.wa}" target="_blank" rel="noopener">${ICO.wa}WhatsApp</a></div>
<script>(function(){var b=document.querySelector('.burger'),h=document.querySelector('.top');b&&(b.onclick=function(){h.classList.toggle('open')});var io='IntersectionObserver'in window?new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -8% 0px'}):null;document.querySelectorAll('.rv').forEach(function(el){io?io.observe(el):el.classList.add('in')});document.querySelectorAll('[data-meet]').forEach(function(a){a.onclick=function(){var s=document.querySelector('select[name=gorusme_turu]');if(s)s.selectedIndex=+a.dataset.meet}});if(/[?&]bulten=1/.test(location.search)){var n=document.querySelector('.nlok');if(n){n.hidden=false;n.scrollIntoView({block:'center'})}}else if(/[?&]ok=1/.test(location.search)){var m=document.querySelector('.okmsg');m&&(m.hidden=false)}})();</script>`;
}
function page({ lang, key, title, desc, ld = [], body, image, type }) {
  const alt = alts(key); const canon = url(lang, key);
  write(canon.slice(1), `${head({ lang, title, desc, canon, alt, ld, image, type, kw: `${PKW[key][lang]}, ${KW[lang]}` })}<body>${header(lang, alt, key)}<main>${body}</main>${footer(lang)}</body></html>`);
  sitemap.push([canon, alt]);
}
const crumbs = (lang, key) => ({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Ali Caner Can', item: DOMAIN + url(lang, 'home') }, ...(key === 'home' ? [] : [{ '@type': 'ListItem', position: 2, name: T[lang].nav[key], item: DOMAIN + url(lang, key) }])] });
const PERSON = (lang) => ({
  '@context': 'https://schema.org', '@type': 'Person', '@id': `${DOMAIN}/#person`, name: 'Ali Caner Can', alternateName: lang === 'ru' ? 'Али Джанер Джан' : undefined,
  url: DOMAIN + url(lang, 'home'), image: `${DOMAIN}/img/ali-caner-can-portre.webp`, jobTitle: lang === 'tr' ? 'Broker ve Kurucu' : lang === 'ru' ? 'Брокер и основатель' : 'Broker & Founder',
  description: T[lang].homeDesc, birthPlace: 'Antalya', nationality: 'TR', telephone: PHONE.raw, email: MAIL,
  worksFor: { '@type': 'RealEstateAgent', name: 'ACC HOMES International Real Estate', url: ACC.home[lang], address: { '@type': 'PostalAddress', streetAddress: 'Portakal Çiçeği Blv. No:36/B', addressLocality: 'Muratpaşa', addressRegion: 'Antalya', addressCountry: 'TR' } },
  alumniOf: [{ '@type': 'CollegeOrUniversity', name: 'Yıldız Teknik Üniversitesi' }, { '@type': 'HighSchool', name: 'Kuleli Askeri Lisesi' }],
  memberOf: { '@type': 'Organization', name: 'ANTİAD, Antalya İş İnsanları Derneği' },
  award: ['Realty World MES 2022 ciro ödülü'],
  knowsLanguage: ['tr', 'en'], knowsAbout: ['Antalya real estate', 'Real estate investment', 'Property marketing', 'Sales leadership'],
  sameAs: [...SOCIAL.map((s) => s[3]), `${MAIN}/ali-caner-can/`, `${VILLAS}/kurucu-ali-caner-can/`],
});

// ---------- bileşenler ----------
const postCard = (p, lang) => `<a class="pc rv" href="${p.u[lang]}" target="_blank" rel="noopener"><div class="pci"><img src="${img(p.img, 800)}" alt="${esc(p.t[lang])}" loading="lazy" width="800" height="450"></div><div class="pcb"><p class="tag">${esc(p.tag[lang])}</p><h3>${esc(p.t[lang])}</h3><p>${esc(p.d[lang])}</p><span class="more">${T[lang].read} →</span></div></a>`;
const galCard = ([n, c], lang) => `<figure class="gi rv"><img src="${img(n, 800)}" alt="${esc(c[lang])}" loading="lazy"><figcaption>${esc(c[lang])}</figcaption></figure>`;
const reviews = (lang) => {
  const list = REVIEWS.filter((r) => /Ali|Caner/.test(r.text)).sort((a, b) => (lang === 'tr' ? (a.lang === 'tr' ? -1 : 1) : (a.lang === 'en' ? -1 : 1)));
  return `<section class="sec bg2"><div class="wrap"><div class="sh"><div><h2>${T[lang].revT}</h2><p class="lead">${T[lang].revL}</p></div><a class="gb" href="${G.url}" target="_blank" rel="noopener">${ICO.g}<b>${lang === 'en' ? G.rating : String(G.rating).replace('.', ',')}</b><span>★★★★★</span><small>${G.count}</small></a></div>
<div class="revs">${list.map((r) => `<figure class="rev rv"><blockquote lang="${r.lang}">“${esc(r.text.replace(/^…\s*/, ''))}”</blockquote><figcaption><b>${esc(r.name)}</b> · ${esc(r.topic)} · Google</figcaption></figure>`).join('')}</div>
<p class="center"><a class="btn ghost" href="${G.url}" target="_blank" rel="noopener">${T[lang].revAll} →</a></p></div></section>`;
};
const FEAT = JSON.parse(fs.readFileSync(path.join(HERE, 'featured.json'), 'utf8'));
const LSEG = { tr: '/ilan/', en: '/en/listing/', ru: '/ru/obekt/' };
const PF = {
  tr: { e: 'Portföy', t: 'Seçtiğim portföyler', l: 'ACC HOMES portföyünden öne çıkan, bizzat takip ettiğim ilanlar. Tüm arama ve filtreler ACC HOMES ile ACC VILLAS sitelerinde.', q: [['Satılık daireler', 'listings'], ['Satılık villalar', 'villasSale'], ['Projeler', 'projects']], all: 'Tüm portföy', prT: 'Yetkili olduğumuz projeler', prL: 'Satış ve pazarlamasını ACC HOMES olarak yürüttüğümüz projeler.', go: 'İlanı incele' },
  en: { e: 'Portfolio', t: 'Selected listings', l: 'Featured listings from the ACC HOMES portfolio that I follow personally. Full search and filters live on ACC HOMES and ACC VILLAS.', q: [['Apartments for sale', 'listings'], ['Villas for sale', 'villasSale'], ['Projects', 'projects']], all: 'Full portfolio', prT: 'Projects we represent', prL: 'Developments whose sales and marketing ACC HOMES runs as authorized agent.', go: 'View listing' },
  ru: { e: 'Портфель', t: 'Избранные объекты', l: 'Избранные объекты портфеля ACC HOMES, которые я веду лично. Полный поиск и фильтры — на сайтах ACC HOMES и ACC VILLAS.', q: [['Квартиры на продажу', 'listings'], ['Виллы на продажу', 'villasSale'], ['Проекты', 'projects']], all: 'Весь портфель', prT: 'Проекты, которые мы представляем', prL: 'Проекты, продажи и маркетинг которых ведёт ACC HOMES как уполномоченное агентство.', go: 'Смотреть объект' },
};
const QURL = { listings: { tr: `${MAIN}/ilanlar/`, en: `${MAIN}/en/listings/`, ru: `${MAIN}/ru/obekty/` }, villasSale: { tr: `${VILLAS}/satilik-villalar/`, en: `${VILLAS}/en/villas-for-sale/`, ru: `${VILLAS}/ru/villy-na-prodazhu/` } };
// Capital İnşaat yalnızca referans (marquee/logo); aktif portföyü çalışılmıyor — buraya eklenmez.
const PROJ = [
  ['Antalle Concept Houses', 'Döşemealtı · Altınkale', 'antalle-concept-houses', '/img/antalle/gece-havadan-villa-havuz.webp', true],
  ['Prime Lara', 'Altıntaş · Aksu', 'prime-lara-altintas', '/img/primelara/hero.webp'],
  ['Falez Manzara', 'Altıntaş · Aksu', 'falez-manzara-altintas', '/img/falez/dis-1.webp'],
  ['Tap Vita Ruby', 'Beşkonaklılar · Kepez', 'tap-vita-ruby-kepez', '/img/tapvita/cephe-havuz.webp'],
  ['Math UNO & DOS', 'Altınova · Kepez', 'math-uno-dos', ''],
  ['Nox Apt', 'Yeniköy · Döşemealtı', 'nox-apt-dosemealti', ''],
];
const projUrl = (lang, slug, loc) => (loc && lang !== 'tr' ? `${MAIN}/${lang}/${lang === 'en' ? 'projects' : 'proekty'}/${slug}/` : `${MAIN}/projeler/${slug}/`);
const money = (n, c, lang) => `${n.toLocaleString(lang === 'tr' ? 'tr-TR' : lang === 'ru' ? 'ru-RU' : 'en-US')} ${c}`;
const FIELD = [
  ['satilik-tescilli-ev-uc-kapilar-ali-caner-can', { tr: 'Üç Kapılar · Haşim İşcan · Tescilli ev', en: 'Üç Kapılar, Haşim İşcan · Listed historic house', ru: 'Уч Капылар, Хашим Ишджан · Исторический дом' }],
  ['satilik-daire-konyaalti-liman-ali-caner-can', { tr: 'Konyaaltı Liman · Daire', en: 'Konyaaltı, Liman · Apartment', ru: 'Коньяалты, Лиман · Квартира' }],
  ['ali-caner-can-ilk-portfoy-realty-world', { tr: 'İlk portföylerimden biri · Realty World MES dönemi', en: 'One of my first listings · Realty World MES years', ru: 'Один из моих первых объектов · период Realty World MES' }],
];
const AB = {"tr": ["İlk portföy, ilk tabela", "Realty World MES döneminde, Master Team adıyla kendi tabelamı astığım ilk portföylerimden biri. Bugün ACC HOMES’ta aynı sahada olma alışkanlığını ekibimle sürdürüyorum."], "en": ["First listing, first sign", "One of my first listings from my Realty World MES years, under my own Master Team sign. Today at ACC HOMES my team and I keep the same habit of being on site."], "ru": ["Первый объект, первая вывеска", "Один из моих первых объектов периода Realty World MES, под собственной вывеской Master Team. Сегодня в ACC HOMES мы с командой сохраняем ту же привычку — быть на объекте."]};
const FT = { tr: ['Sahadan', 'Her portföyü yerinde görüyor, kamerayı kendim tutuyorum.'], en: ['From the field', 'I see every listing in person and film it myself.'], ru: ['С объектов', 'Каждый объект я смотрю лично и снимаю сам.'] };
const fieldStrip = (lang) => `<div class="sh prh"><div><h3>${FT[lang][0]}</h3><p>${FT[lang][1]}</p></div><a class="all" href="${url(lang, 'gallery')}">${GT[lang].more} →</a></div><div class="fld">${FIELD.map(([n, c]) => `<figure class="rv"><img src="/img/${n}-600.webp" srcset="/img/${n}-600.webp 600w, /img/${n}-1200.webp 1200w" sizes="(max-width:600px) 90vw, 33vw" alt="${esc(c[lang])} – Ali Caner Can" loading="lazy" width="600" height="${n.includes('ilk-portfoy') ? 750 : 1067}"><figcaption>${c[lang]}</figcaption></figure>`).join('')}</div>`;
const portfolio = (lang) => { const p = PF[lang], q = (k) => (k === 'projects' ? ACC.projects[lang] : QURL[k][lang]); return `<section class="sec bg2"><div class="wrap"><div class="sh"><div><p class="eyebrow">${p.e}</p><h2>${p.t}</h2><p class="lead">${p.l}</p></div><a class="all" href="${QURL.listings[lang]}" target="_blank" rel="noopener">${p.all} →</a></div>
<p class="qk">${p.q.map(([n, k]) => `<a href="${q(k)}" target="_blank" rel="noopener">${n} →</a>`).join('')}</p>
<div class="pf">${FEAT.map((l) => `<a class="pfc rv" href="${MAIN}${LSEG[lang]}${l.slug}/" target="_blank" rel="noopener"><span class="pfi"><img src="${MAIN}${l.foto}" alt="${esc(l.t[lang] || l.t.tr)}" loading="lazy" width="800" height="600"><b>${money(l.fiyat, l.para, lang)}</b></span><span class="pfb"><small>${l.ilce} · ${l.mahalle}</small><h3>${esc(l.t[lang] || l.t.tr)}</h3><span class="pfm">${l.oda}${l.brut ? ` · ${l.brut} m²` : ''}</span><span class="more">${p.go} →</span></span></a>`).join('')}</div>
<div class="sh prh"><div><h3>${p.prT}</h3><p>${p.prL}</p></div></div>
<div class="prj">${PROJ.map(([n, loc, slug, im, l10n]) => `<a class="pjc${im ? '' : ' noimg'}" href="${projUrl(lang, slug, l10n)}" target="_blank" rel="noopener">${im ? `<img src="${MAIN}${im}" alt="${esc(n)}" loading="lazy" width="600" height="400">` : ''}<span><b>${esc(n)}</b><small>${loc}</small></span></a>`).join('')}</div>${fieldStrip(lang)}</div></section>`; };
const followBlock = (lang) => `<section class="sec"><div class="wrap"><div class="sh"><div><p class="eyebrow">${T[lang].followE}</p><h2>${T[lang].followT}</h2><p class="lead">${T[lang].followL}</p></div></div>
<div class="fol">${FOLLOW.map(([k, n, h, u, d]) => `<a class="fo f-${k} rv" href="${u}" target="_blank" rel="noopener"><i>${ICO[k]}</i><span><b>${n}</b><em>${h}</em><small>${d[lang]}</small></span><span class="fgo">${T[lang].followBtn} →</span></a>`).join('')}</div></div></section>`;
const careerLogos = `<div class="logos">${['nestle', 'kraft-heinz', 'reckitt', 'hasbro'].map((n) => `<img src="/img/logo-${n}.webp" alt="${n.replace('-', ' ')}" loading="lazy">`).join('')}<span class="lt">BOSCH</span><a class="lt li" href="https://www.linkedin.com/in/alicanercantherealtor/" target="_blank" rel="noopener">LinkedIn →</a></div>`;

// ---------- sayfalar ----------
for (const lang of LANGS) {
  const t = T[lang];
  // Ana sayfa
  page({ lang, key: 'home', title: t.homeTitle, desc: t.homeDesc, ld: [PERSON(lang), { '@context': 'https://schema.org', '@type': 'ProfilePage', mainEntity: { '@id': `${DOMAIN}/#person` }, url: DOMAIN + url(lang, 'home'), inLanguage: lang }, { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Ali Caner Can', url: DOMAIN + '/', inLanguage: ['tr', 'en', 'ru'] }], type: 'profile', body: `
<section class="hero"><div class="wrap hg"><div class="ht"><p class="eyebrow">${t.eyebrow}</p><h1>${t.h1}</h1><p class="lead">${t.lead}</p><div class="ctas"><a class="btn" href="${url(lang, 'contact')}">${t.cta}</a><a class="btn ghost" href="${url(lang, 'insights')}">${t.ctaRead}</a></div>
<p class="soc">${SOCIAL.map(([k, n, h, u]) => `<a href="${u}" target="_blank" rel="noopener" aria-label="${n} ${h}">${ICO[k]}</a>`).join('')}</p></div>
<div class="hp"><img src="/img/ali-caner-can-portre-cut.webp" alt="Ali Caner Can" width="852" height="930" fetchpriority="high"><span class="badge"><b>ACC</b> HOMES</span></div></div></section>
<section class="mq" aria-label="${t.mqL}"><p class="mqt">${t.mqL}</p><div class="mqv"><div class="mqr">${[0, 1].map((r) => MQ.map((m) => (m[0] === 'img' ? `<img src="/img/${m[1]}.webp" alt="${m[2]}" loading="lazy"${r ? ' aria-hidden="true"' : ''}>` : `<span${r ? ' aria-hidden="true"' : ''}>${m[1]}</span>`)).join('')).join('')}</div></div></section>
<section class="stats"><div class="wrap sg">${t.stats.map(([n, l]) => `<div class="st"><b>${n}</b><span>${l}</span></div>`).join('')}</div></section>
<section class="sec"><div class="wrap"><div class="sh"><div><p class="eyebrow">01</p><h2>${t.nowT}</h2><p class="lead">${t.nowL}</p></div></div>
<div class="now">${t.now.map(([h, p, k, l], i) => `<a class="nc rv" href="${ACC[k][lang]}" target="_blank" rel="noopener"><span class="nn">0${i + 1}</span><h3>${h}</h3><p>${p}</p><span class="more">${l} →</span></a>`).join('')}</div></div></section>
<section class="sec bg2"><div class="wrap"><div class="sh"><div><p class="eyebrow">02</p><h2>${t.insT}</h2><p class="lead">${t.insL}</p></div><a class="all" href="${url(lang, 'insights')}">${t.all} →</a></div>
<div class="posts">${POSTS.slice(0, 3).map((p) => postCard(p, lang)).join('')}</div></div></section>
${portfolio(lang)}
<section class="sec"><div class="wrap career"><div><p class="eyebrow">03</p><h2>${t.careerT}</h2><p class="lead">${t.careerL}</p><a class="all" href="${url(lang, 'about')}">${t.nav.about} →</a></div>${careerLogos}</div></section>
<section class="sec dark"><div class="wrap"><div class="sh"><div><p class="eyebrow">04</p><h2>${t.stageT}</h2><p class="lead">${t.stageL}</p></div><a class="all" href="${url(lang, 'stage')}">${t.all} →</a></div>
<div class="gal">${GAL.slice(0, 6).map((g) => galCard(g, lang)).join('')}</div></div></section>
<section class="sec"><div class="wrap"><div class="sh"><div><p class="eyebrow">05</p><h2>${t.keysT}</h2><p class="lead">${t.keysL}</p></div><a class="all" href="${url(lang, 'gallery')}#teslim">${GT[lang].more} →</a></div><div class="keys">${KEYS.map((k) => `<img class="rv" src="${img(k, 800)}" alt="${esc(t.keysT)}" loading="lazy" width="800" height="1000">`).join('')}</div></div></section>
${followBlock(lang)}
${reviews(lang)}` });

  // Hakkımda
  page({ lang, key: 'about', title: t.aboutTitle, desc: t.aboutDesc, ld: [PERSON(lang), crumbs(lang, 'about')], type: 'profile', body: `
<section class="phero"><div class="wrap ag"><div><p class="eyebrow">${t.nav.about}</p><h1>${t.aboutH}</h1><p class="lead">${t.aboutLead}</p></div><img src="/img/ali-caner-can-acc-homes-portre-1200.webp" alt="Ali Caner Can – ACC HOMES Broker" width="1200" height="1697" fetchpriority="high"></div></section>
<section class="sec"><div class="wrap narrow"><h2>${t.tlT}</h2><ol class="tl">${t.tl.map(([y, h, p]) => `<li class="rv"><span class="ty">${y}</span><div><h3>${h}</h3><p>${p}</p></div></li>`).join('')}</ol></div></section>
<section class="sec"><div class="wrap first"><img class="rv" src="/img/ali-caner-can-ilk-portfoy-realty-world-1200.webp" alt="${esc(AB[lang][0])} – Ali Caner Can" loading="lazy" width="1200" height="1500"><div><p class="eyebrow">Realty World MES</p><h2>${AB[lang][0]}</h2><p class="lead">${AB[lang][1]}</p></div></div></section>
<section class="sec bg2"><div class="wrap"><h2>${t.valT}</h2><div class="vals">${t.vals.map(([h, p]) => `<div class="val rv"><h3>${h}</h3><p>${p}</p></div>`).join('')}</div></div></section>
<section class="sec"><div class="wrap career"><div><h2>${t.careerT}</h2><p class="lead">${t.careerL}</p><h3>${t.alsoT}</h3><ul class="ticks">${t.also.map((x) => `<li>${x}</li>`).join('')}</ul></div>${careerLogos}</div></section>
<section class="sec bg2"><div class="wrap"><div class="gal g3">${['realty-world-mes-2022-ciro-odulu', 'antiad-antalya-is-insanlari-dernegi', 'danube-global-ortaklik-sunum'].map((n) => galCard(GAL.find((g) => g[0] === n) || [n, { tr: 'Ali Caner Can', en: 'Ali Caner Can', ru: 'Али Джанер Джан' }], lang)).join('')}</div></div></section>` });

  // Yazılar
  page({ lang, key: 'insights', title: t.insTitle, desc: t.insDesc, ld: [crumbs(lang, 'insights'), { '@context': 'https://schema.org', '@type': 'CollectionPage', name: t.insT, url: DOMAIN + url(lang, 'insights'), author: { '@id': `${DOMAIN}/#person` }, hasPart: POSTS.map((p) => ({ '@type': 'Article', headline: p.t[lang], url: p.u[lang] })) }], body: `
<section class="phero sm"><div class="wrap"><p class="eyebrow">${t.nav.insights}</p><h1>${t.insT}</h1><p class="lead">${t.insL}</p></div></section>
<section class="sec"><div class="wrap"><div class="posts">${POSTS.map((p) => postCard(p, lang)).join('')}</div></div></section>` });

  // Galeri
  page({ lang, key: 'gallery', title: GT[lang].title, desc: GT[lang].desc, ld: [crumbs(lang, 'gallery'), galleryLd(lang)], body: galleryBody(lang) });

  // Sahne ve medya
  page({ lang, key: 'stage', title: t.stageTitle, desc: t.stageDesc, ld: [crumbs(lang, 'stage')], body: `
<section class="phero sm"><div class="wrap"><p class="eyebrow">${t.nav.stage}</p><h1>${t.stageT}</h1><p class="lead">${t.stageL}</p></div></section>
<section class="sec"><div class="wrap"><div class="gal">${GAL.map((g) => galCard(g, lang)).join('')}</div></div></section>
<section class="sec bg2"><div class="wrap two"><div><h2>${t.speakT}</h2><p class="lead">${t.speakL}</p></div>${form(lang, 'konusmaci-davet', url(lang, 'stage'), 4)}</div></section>` });

  // Danışmanlık
  page({ lang, key: 'advisory', title: t.advTitle, desc: t.advDesc, ld: [crumbs(lang, 'advisory'), { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Real estate advisory', provider: { '@id': `${DOMAIN}/#person` }, areaServed: 'Antalya', url: DOMAIN + url(lang, 'advisory') }], body: `
<section class="phero sm"><div class="wrap"><p class="eyebrow">${t.nav.advisory}</p><h1>${t.advH}</h1><p class="lead">${t.advLead}</p></div></section>
<section class="sec"><div class="wrap"><div class="now">${t.adv.map(([h, p, k, l], i) => `<a class="nc rv" href="${ACC[k][lang]}" target="_blank" rel="noopener"><span class="nn">0${i + 1}</span><h3>${h}</h3><p>${p}</p><span class="more">${l} →</span></a>`).join('')}</div></div></section>
<section class="sec bg2"><div class="wrap"><h2>${t.valT}</h2><div class="vals">${t.vals.map(([h, p]) => `<div class="val rv"><h3>${h}</h3><p>${p}</p></div>`).join('')}</div></div></section>` });

  // İletişim
  page({ lang, key: 'contact', title: t.contactTitle, desc: t.contactDesc, ld: [PERSON(lang), crumbs(lang, 'contact'), { '@context': 'https://schema.org', '@type': 'ContactPage', url: DOMAIN + url(lang, 'contact'), about: { '@id': `${DOMAIN}/#person` } }], body: `
<section class="phero sm"><div class="wrap"><p class="eyebrow">${t.nav.contact}</p><h1>${t.contactH}</h1><p class="lead">${t.contactLead}</p></div></section>
<section class="sec"><div class="wrap two"><div class="cinfo"><a class="ci" href="https://wa.me/${PHONE.wa}" target="_blank" rel="noopener">${ICO.wa}<span><b>WhatsApp</b>${PHONE.text}</span></a><a class="ci" href="tel:${PHONE.raw}">${ICO.ph}<span><b>${t.form.phone}</b>${PHONE.text}</span></a><a class="ci" href="mailto:${MAIL}"><svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M3 6h18v12H3zM3 7l9 6 9-6"/></svg><span><b>${t.form.email}</b>${MAIL}</span></a><a class="ci" href="${G.url}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" stroke-width="2"/></svg><span><b>${t.directions}</b>${t.office}</span></a>
<p class="soc">${SOCIAL.map(([k, n, h, u]) => `<a href="${u}" target="_blank" rel="noopener" aria-label="${n} ${h}">${ICO[k]}</a>`).join('')}</p><img class="kv" src="/img/ali-caner-can-broker-kartvizit-600.webp" alt="Ali Caner Can – Şirket Sahibi ve Broker, ACC HOMES" loading="lazy" width="600" height="1067"></div><div id="randevu">${form(lang, 'gorusme-talebi', url(lang, 'contact'), undefined, true)}</div></div></section>
<section class="sec"><div class="wrap off"><div class="offi"><p class="eyebrow">ACC PLAZA</p><h2>${t.mapT}</h2><p class="lead">${t.addr}</p><img src="/img/acc-plaza-ofis-800.webp" alt="ACC Plaza, ACC HOMES International Real Estate" loading="lazy"><div class="ctas"><a class="btn" href="${G.url}" target="_blank" rel="noopener">${t.dirBtn} →</a><a class="btn ghost" href="tel:${PHONE.raw}">${ICO.ph}${PHONE.text}</a></div></div><iframe class="map" src="${SITE.google.embedUrl}" title="ACC Plaza" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div></section>
<section class="sec bg2"><div class="wrap"><h2>${t.meetH}</h2><p class="lead">${t.meetL}</p><div class="meet">${t.meet.map(([h, p], i) => `<a class="mt rv" href="#randevu" data-meet="${i}"><span class="mi">${['☕', '💻', '🍽️'][i]}</span><h3>${h}</h3><p>${p}</p><span class="more">${t.meetBtn} →</span></a>`).join('')}</div></div></section>
${followBlock(lang)}` });
}

function form(lang, name, next, topic, meet) {
  const f = T[lang].form; const t = T[lang];
  const sel = `<select name="konu" aria-label="${f.topic}">${f.topics.map((x, i) => `<option${i === (topic ?? 0) ? ' selected' : ''}>${x}</option>`).join('')}</select>`;
  return `<form class="form" method="POST" action="/form.php"><p class="okmsg" hidden>${f.ok}</p><input type="hidden" name="form-name" value="${name}"><input type="hidden" name="_next" value="${next}"><input type="hidden" name="dil" value="${lang}"><input type="hidden" name="site" value="alicanercan.com"><p class="hpf"><input name="bot" tabindex="-1" autocomplete="off"></p>
<input name="ad" placeholder="${f.name} *" required autocomplete="name"><input name="telefon" type="tel" placeholder="${f.phone} *" required autocomplete="tel"><input name="eposta" type="email" placeholder="${f.email}" autocomplete="email">${sel}${meet ? `<select name="gorusme_turu" aria-label="${t.meetType}">${t.meet.map(([h]) => `<option>${h}</option>`).join('')}</select><div class="dtt"><label>${t.meetDate}<input name="tarih" type="date"></label><label>${t.meetTime}<input name="saat" type="time" step="900"></label></div>` : ''}<textarea name="mesaj" rows="4" placeholder="${f.msg}"></textarea>
<label class="chk"><input type="checkbox" name="kvkk_onay" value="evet" required> <span>${f.consent} <a href="${ACC.kvkk[lang]}" target="_blank" rel="noopener">${f.kvkk}</a> *</span></label><button class="btn" type="submit">${f.send}</button></form>`;
}

// ---------- statik dosyalar ----------
fs.cpSync(path.join(HERE, 'static'), OUT, { recursive: true });
fs.copyFileSync(path.join(HERE, 'style.css'), path.join(OUT, 'style.css'));
for (const f of ['favicon.ico', 'favicon.svg', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png']) fs.copyFileSync(path.join(ROOT, 'villas/static', f), path.join(OUT, f));

// form.php: ACC HOMES ile aynı, panele düşer
const php = fs.readFileSync(path.join(ROOT, 'server/form.php'), 'utf8')
  .replace("'bulten'];", "'bulten', 'gorusme-talebi', 'konusmaci-davet'];")
  .replace("'From: ACC HOMES Web <'", "'From: Ali Caner Can Web <'")
  .replace("$sent = @mail(", "$sent = function_exists('mail') && @mail(")
  .replace("$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '';", "$ip = $_SERVER['REMOTE_ADDR'] ?? '';")
  .replace("$next = (string)($_POST['_next'] ?? '/');", "$next = (string)($_POST['_next'] ?? '/');\n$org = (string)($_SERVER['HTTP_ORIGIN'] ?? $_SERVER['HTTP_REFERER'] ?? '');\nif ($org !== '' && !preg_match('~^https?://([a-z0-9-]+\\.)?(alicanercan\\.com|acchomesantalya\\.com)(/|$)~i', $org)) { header('Location: /', true, 303); exit; }\nif (count($_POST) > 40) back($next);")
  .replace("fputcsv($fh, [", "fputcsv($fh, array_map(fn($c) => preg_match('/^[=+\\-@\\t\\r]/', (string)$c) ? \"'\" . $c : $c, [")
  .replace("$page]); fclose($fh);", "$page])); fclose($fh);");
if (!php.includes("'gorusme-talebi'") || !php.includes('HTTP_ORIGIN') || !php.includes('array_map(fn')) throw new Error('form.php yaması tutmadı');
fs.writeFileSync(path.join(OUT, 'form.php'), php);

// 404
fs.writeFileSync(path.join(OUT, '404.html'), `${head({ lang: 'tr', title: 'Sayfa bulunamadı | Ali Caner Can', desc: 'Aradığınız sayfa taşınmış olabilir.', canon: '/404.html' }).replace('index,follow,max-image-preview:large,max-snippet:-1', 'noindex')}<body>${header('tr', null)}<main><section class="phero sm"><div class="wrap"><p class="eyebrow">404</p><h1>${T.tr.n404}</h1><p class="lead">Page not found · Страница не найдена</p><div class="ctas"><a class="btn" href="/">Ana sayfa</a><a class="btn ghost" href="/en/">Home</a><a class="btn ghost" href="/ru/">Главная</a></div></div></section></main>${footer('tr')}</body></html>`);

// sitemap, robots, .htaccess
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemap.map(([u, a]) => `<url><loc>${DOMAIN}${u}</loc><lastmod>${today}</lastmod>${LANGS.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${DOMAIN}${a[l]}"/>`).join('')}</url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /wp-admin/\nSitemap: ${DOMAIN}/sitemap.xml\n`);
const HTTPS_ON = process.env.FORCE_HTTPS === '1';
// eski WordPress adresleri → yeni sayfalar (eski site İngilizceydi)
const OLD = [['about', '/en/about/'], ['services(/.*)?', '/en/advisory/'], ['projects', '/en/'], ['blog', '/en/insights/'], ['post', '/en/insights/'], ['contact', '/en/contact/'], ['the-making-of-antalyas-best-real-estate-advisor-how-ali-caner-can-is-redefining-property-investment', '/en/about/']];
fs.writeFileSync(path.join(OUT, '.htaccess'), `DirectoryIndex index.html\nRewriteEngine On\n${HTTPS_ON ? 'RewriteCond %{HTTPS} off [OR]\n' : ''}RewriteCond %{HTTP_HOST} ^www\\. [NC]\nRewriteRule ^ ${HTTPS_ON ? 'https' : 'http'}://alicanercan.com%{REQUEST_URI} [L,R=301]\n${OLD.map(([a, b]) => `RewriteRule ^${a}/?$ ${b} [L,R=301]`).join('\n')}\nRewriteRule ^(xmlrpc\\.php|wp-login\\.php|wp-json(/.*)?|feed/?|wp-content/uploads/.*\\.php)$ - [F,L]\nErrorDocument 404 /404.html\nOptions -Indexes\nServerSignature Off\n<FilesMatch "(^\\.|\\.(md|mjs|json|log|csv|bak|sql|sh|ini|env)$)">\nRequire all denied\n</FilesMatch>\n<Files "wp-config.php">\nRequire all denied\n</Files>\n<IfModule mod_headers.c>\nHeader always set X-Content-Type-Options "nosniff"\nHeader always set X-Frame-Options "SAMEORIGIN"\nHeader always set Referrer-Policy "strict-origin-when-cross-origin"\nHeader always set Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=(), usb=()"\nHeader always set Content-Security-Policy "frame-ancestors 'self'; base-uri 'self'; form-action 'self' https://wa.me; object-src 'none'; upgrade-insecure-requests"\n${HTTPS_ON ? 'Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"\n' : ''}Header unset X-Powered-By\n</IfModule>\n<IfModule mod_expires.c>\nExpiresActive On\nExpiresByType image/webp "access plus 30 days"\nExpiresByType text/css "access plus 7 days"\n</IfModule>\n`);
console.log(`OK — ${sitemap.length} sayfa`);
