// ACC HOMES — altintassatilikdaire.com statik site üreticisi
// Bağımlılık yok: Netlify'da "node build.mjs" ile çalışır, çıktı dist/ klasörüne yazılır.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const OUT = path.join(ROOT, 'dist');
const read = (p) => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));

const SITE = read('data/site.json');
let LISTINGS = read('data/portfoy.json');
const DEMO = LISTINGS.length === 0 && !SITE.live;
if (DEMO) LISTINGS = read('data/demo.json');
LISTINGS = LISTINGS.filter((l) => ['Yayında', 'Opsiyonlu', 'Satıldı'].includes(l.durum));

const LANGS = ['tr', 'en', 'ru'];
const BASE = { tr: '', en: '/en', ru: '/ru' };
const T = {
  tr: {
    htmlLang: 'tr', locale: 'tr_TR',
    nav: { home: 'Ana Sayfa', list: 'İlanlar', guide: 'Altıntaş Rehberi', contact: 'İletişim' },
    seg: { list: 'ilanlar', listing: 'ilan', guide: 'altintas-rehberi', contact: 'iletisim' },
    heroTitle: 'Altıntaş Satılık ve Kiralık Daireler',
    heroSub: "Antalya Altıntaş'ta doğrulanmış portföy, şeffaf fiyat ve veriye dayalı danışmanlık",
    heroCta: 'İlanları İncele', heroCta2: 'WhatsApp ile Sor',
    featured: 'Öne Çıkan İlanlar', all: 'Tüm İlanlar', seeAll: 'Tüm ilanları gör',
    why: "Neden ACC HOMES",
    whyItems: [
      ['Veriye dayalı fiyatlama', 'Her portföy emsal ve bölge verisiyle değerlendirilir'],
      ['Çok dilli ekip', 'Türkçe, İngilizce, Rusça ve daha fazla dilde hizmet'],
      ['Şeffaf süreç', 'İlk görüşmeden tapuya kadar her adım yazılı ve net'],
      ['Profesyonel tanıtım', 'Fotoğraf, video ve dijital pazarlama ekibimizle'],
    ],
    filters: { tip: 'İlan tipi', any: 'Tümü', sale: 'Satılık', rent: 'Kiralık', rooms: 'Oda', sort: 'Sırala', newest: 'En yeni', priceAsc: 'Fiyat artan', priceDesc: 'Fiyat azalan' },
    fields: { price: 'Fiyat', rooms: 'Oda', gross: 'Brüt m²', net: 'Net m²', age: 'Bina yaşı', floor: 'Bulunduğu kat', floors: 'Kat sayısı', heat: 'Isıtma', inSite: 'Site içinde', credit: 'Krediye uygun', deed: 'Tapu durumu', project: 'Proje / Site', location: 'Konum', type: 'Emlak türü', no: 'İlan no', features: 'Özellikler', desc: 'Açıklama' },
    priceOnReq: 'Fiyat için arayın', sold: 'Satıldı', option: 'Opsiyonlu',
    sale: 'Satılık', rent: 'Kiralık',
    askTitle: 'Bu ilan hakkında bilgi alın', name: 'Adınız', phone: 'Telefon', msg: 'Mesajınız', send: 'Gönder',
    call: 'Ara', wa: 'WhatsApp',
    waText: (l) => `Merhaba, ${l} numaralı ilan hakkında bilgi almak istiyorum.`,
    waGeneral: 'Merhaba, Altıntaş ilanlarınız hakkında bilgi almak istiyorum.',
    empty: 'Yeni portföyler hazırlanıyor. Size uygun daireyi bulmamız için bize yazın.',
    demo: 'Tasarım önizlemesi — gösterilen ilanlar örnektir, gerçek ilanlar yakında',
    contactTitle: 'İletişim', contactSub: 'Altıntaş’ta ev arıyor veya evinizi satmak istiyorsanız bize ulaşın',
    office: 'Ofis', thanks: 'Teşekkürler, en kısa sürede dönüş yapacağız',
    guideTitle: 'Altıntaş Rehberi',
    guideSub: "Antalya'nın gelişen bölgesi Altıntaş hakkında bilmeniz gerekenler",
    guideBody: [
      ['Altıntaş nerede', "Altıntaş, Antalya'nın Aksu ilçesinde, Lara ve havalimanı aksına yakın, yeni konut projeleriyle hızla gelişen bir mahalledir."],
      ['Kimler için uygun', 'Yeni yapı, site içi yaşam ve havuz gibi sosyal alanlar arayan aileler, yatırımcılar ve yabancı alıcılar için öne çıkan bir bölgedir.'],
      ['Ulaşım', 'Prime Lara projesinden Lara plajlarına yaklaşık 3 km, Antalya Havalimanı’na yaklaşık 5 km mesafe bulunur.'],
      ['Yatırım', 'Bölgedeki fiyat ve kira verilerini sizin için güncel emsallerle analiz ediyoruz. Ücretsiz değerleme için bize yazın.'],
    ],
    footerAbout: "Antalya merkezli ACC HOMES International Real Estate'in Altıntaş portföy sitesi.",
    corporate: 'Kurumsal site', rights: 'Tüm hakları saklıdır',
    gReviews: (n) => `${n} Google yorumu`, readReviews: 'Yorumları oku', igFollow: 'Instagram’da takip edin', mapTitle: 'Ofisimiz haritada', directions: 'Yol tarifi al', trustTitle: 'Müşterilerimiz bizi anlatıyor',
    metaHome: "Altıntaş satılık ve kiralık daire ilanları. ACC HOMES ile Antalya Altıntaş'ta doğrulanmış portföy, şeffaf fiyat ve uzman danışmanlık.",
  },
  en: {
    htmlLang: 'en', locale: 'en_GB',
    nav: { home: 'Home', list: 'Listings', guide: 'Altintas Guide', contact: 'Contact' },
    seg: { list: 'listings', listing: 'listing', guide: 'altintas-guide', contact: 'contact' },
    heroTitle: 'Apartments for Sale and Rent in Altintas, Antalya',
    heroSub: 'Verified listings, transparent pricing and data-driven advice in Antalya’s Altintas district',
    heroCta: 'View Listings', heroCta2: 'Ask on WhatsApp',
    featured: 'Featured Listings', all: 'All Listings', seeAll: 'See all listings',
    why: 'Why ACC HOMES',
    whyItems: [
      ['Data-driven pricing', 'Every property is assessed against comparables and local market data'],
      ['Multilingual team', 'Service in English, Turkish, Russian and more'],
      ['Transparent process', 'Every step from first viewing to title deed, clear and in writing'],
      ['Professional marketing', 'In-house photo, video and digital marketing team'],
    ],
    filters: { tip: 'Type', any: 'All', sale: 'For sale', rent: 'For rent', rooms: 'Rooms', sort: 'Sort', newest: 'Newest', priceAsc: 'Price low to high', priceDesc: 'Price high to low' },
    fields: { price: 'Price', rooms: 'Rooms', gross: 'Gross m²', net: 'Net m²', age: 'Building age', floor: 'Floor', floors: 'Total floors', heat: 'Heating', inSite: 'In a complex', credit: 'Mortgage eligible', deed: 'Title deed', project: 'Project / Complex', location: 'Location', type: 'Property type', no: 'Listing no', features: 'Features', desc: 'Description' },
    priceOnReq: 'Price on request', sold: 'Sold', option: 'Under offer',
    sale: 'For sale', rent: 'For rent',
    askTitle: 'Ask about this property', name: 'Your name', phone: 'Phone', msg: 'Message', send: 'Send',
    call: 'Call', wa: 'WhatsApp',
    waText: (l) => `Hello, I would like information about listing ${l}.`,
    waGeneral: 'Hello, I would like information about your Altintas listings.',
    empty: 'New listings are being prepared. Message us and we will find the right home for you.',
    demo: 'Design preview — listings shown are samples, real listings coming soon',
    contactTitle: 'Contact', contactSub: 'Looking for a home in Altintas or planning to sell? Get in touch',
    office: 'Office', thanks: 'Thank you, we will get back to you shortly',
    guideTitle: 'Altintas Guide',
    guideSub: 'What to know about Altintas, one of Antalya’s fastest-developing districts',
    guideBody: [
      ['Where is Altintas', 'Altintas is in Antalya’s Aksu district, close to the Lara and airport corridor, and is developing quickly with new residential projects.'],
      ['Who it suits', 'A popular choice for families, investors and international buyers looking for new-build homes in complexes with pools and shared facilities.'],
      ['Getting around', 'From the Prime Lara project, Lara beaches are about 3 km and Antalya Airport about 5 km away.'],
      ['Investment', 'We analyse current sale and rental comparables in the area for you. Contact us for a free valuation.'],
    ],
    footerAbout: 'The Altintas listings site of Antalya-based ACC HOMES International Real Estate.',
    corporate: 'Corporate site', rights: 'All rights reserved',
    gReviews: (n) => `${n} Google reviews`, readReviews: 'Read reviews', igFollow: 'Follow us on Instagram', mapTitle: 'Find our office', directions: 'Get directions', trustTitle: 'What our clients say',
    metaHome: 'Apartments for sale and rent in Altintas, Antalya. Verified listings, transparent pricing and expert advice from ACC HOMES.',
  },
  ru: {
    htmlLang: 'ru', locale: 'ru_RU',
    nav: { home: 'Главная', list: 'Объекты', guide: 'Гид по Алтынташу', contact: 'Контакты' },
    seg: { list: 'obekty', listing: 'obekt', guide: 'gid-altyntash', contact: 'kontakty' },
    heroTitle: 'Квартиры на продажу и в аренду в Алтынташе, Анталия',
    heroSub: 'Проверенные объекты, прозрачные цены и консультации на основе данных',
    heroCta: 'Смотреть объекты', heroCta2: 'Написать в WhatsApp',
    featured: 'Избранные объекты', all: 'Все объекты', seeAll: 'Все объекты',
    why: 'Почему ACC HOMES',
    whyItems: [
      ['Цены на основе данных', 'Каждый объект оценивается по сопоставимым продажам и данным рынка'],
      ['Многоязычная команда', 'Обслуживание на русском, английском, турецком и других языках'],
      ['Прозрачный процесс', 'Каждый шаг от показа до оформления тапу — понятно и письменно'],
      ['Профессиональный маркетинг', 'Собственная команда фото, видео и digital-маркетинга'],
    ],
    filters: { tip: 'Тип', any: 'Все', sale: 'Продажа', rent: 'Аренда', rooms: 'Комнаты', sort: 'Сортировка', newest: 'Новые', priceAsc: 'Цена по возрастанию', priceDesc: 'Цена по убыванию' },
    fields: { price: 'Цена', rooms: 'Комнаты', gross: 'Общая м²', net: 'Полезная м²', age: 'Возраст здания', floor: 'Этаж', floors: 'Этажность', heat: 'Отопление', inSite: 'В комплексе', credit: 'Ипотека', deed: 'Тапу', project: 'Проект / Комплекс', location: 'Расположение', type: 'Тип недвижимости', no: 'Номер объекта', features: 'Особенности', desc: 'Описание' },
    priceOnReq: 'Цена по запросу', sold: 'Продано', option: 'Забронировано',
    sale: 'Продажа', rent: 'Аренда',
    askTitle: 'Узнать об этом объекте', name: 'Ваше имя', phone: 'Телефон', msg: 'Сообщение', send: 'Отправить',
    call: 'Позвонить', wa: 'WhatsApp',
    waText: (l) => `Здравствуйте, хочу узнать об объекте ${l}.`,
    waGeneral: 'Здравствуйте, хочу узнать о ваших объектах в Алтынташе.',
    empty: 'Новые объекты готовятся. Напишите нам, и мы подберём подходящий вариант.',
    demo: 'Предпросмотр дизайна — показаны примеры, реальные объекты скоро',
    contactTitle: 'Контакты', contactSub: 'Ищете жильё в Алтынташе или хотите продать? Свяжитесь с нами',
    office: 'Офис', thanks: 'Спасибо, мы скоро свяжемся с вами',
    guideTitle: 'Гид по Алтынташу',
    guideSub: 'Что нужно знать об Алтынташе — одном из быстро развивающихся районов Анталии',
    guideBody: [
      ['Где находится Алтынташ', 'Алтынташ расположен в районе Аксу, рядом с направлением Лара и аэропорт, и быстро застраивается новыми жилыми комплексами.'],
      ['Кому подходит', 'Популярный выбор для семей, инвесторов и иностранных покупателей, ищущих новое жильё в комплексах с бассейном.'],
      ['Транспорт', 'От проекта Prime Lara до пляжей Лары около 3 км, до аэропорта Анталии около 5 км.'],
      ['Инвестиции', 'Мы анализируем актуальные цены продажи и аренды в районе. Свяжитесь с нами для бесплатной оценки.'],
    ],
    footerAbout: 'Сайт объектов в Алтынташе компании ACC HOMES International Real Estate, Анталия.',
    corporate: 'Корпоративный сайт', rights: 'Все права защищены',
    gReviews: (n) => `${n} отзывов в Google`, readReviews: 'Читать отзывы', igFollow: 'Мы в Instagram', mapTitle: 'Наш офис на карте', directions: 'Проложить маршрут', trustTitle: 'Отзывы наших клиентов',
    metaHome: 'Квартиры на продажу и в аренду в Алтынташе, Анталия. Проверенные объекты и экспертные консультации ACC HOMES.',
  },
};

// ---------- yardımcılar ----------
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const trMap = { ç: 'c', ğ: 'g', ı: 'i', i: 'i', ö: 'o', ş: 's', ü: 'u', Ç: 'c', Ğ: 'g', İ: 'i', I: 'i', Ö: 'o', Ş: 's', Ü: 'u' };
const slugify = (s) => String(s).split('').map((c) => trMap[c] ?? c).join('').toLowerCase()
  .replace(/\+/g, '-').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const slugOf = (l) => l.slug ? slugify(l.slug.replace(/^\//, '')) : slugify([l.tip, l.ilce, l.mahalle, l.oda, l.tur, l.id].filter(Boolean).join(' '));
const pick = (obj, lang) => (obj && (obj[lang] || obj.tr)) || '';
const fmtPrice = (l, lang) => {
  if (!l.fiyat) return T[lang].priceOnReq;
  const n = new Intl.NumberFormat(lang === 'tr' ? 'tr-TR' : lang === 'ru' ? 'ru-RU' : 'en-GB').format(l.fiyat);
  const sym = { TL: '₺', USD: '$', EUR: '€' }[l.para] || l.para || '';
  return lang === 'tr' ? `${n} ${sym}` : `${sym}${n}`;
};
const tipLabel = (l, lang) => (l.tip === 'Kiralık' ? T[lang].rent : T[lang].sale);
const statusBadge = (l, lang) => l.durum === 'Satıldı' ? `<span class="badge sold">${T[lang].sold}</span>` : l.durum === 'Opsiyonlu' ? `<span class="badge opt">${T[lang].option}</span>` : '';
const url = (lang, seg, slug) => `${BASE[lang]}/${T[lang].seg[seg]}/${slug ? slug + '/' : ''}`;
const home = (lang) => `${BASE[lang]}/`;
const waLink = (text) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
const write = (rel, html) => { const f = path.join(OUT, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, html); };
const placeholder = `<div class="ph"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 30 32 10l24 20v24H40V38H24v16H8z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/></svg></div>`;

const agentSchema = {
  '@context': 'https://schema.org', '@type': 'RealEstateAgent', name: SITE.brand, url: SITE.corporateSite,
  telephone: SITE.phone, email: SITE.email, slogan: SITE.slogan.tr,
  address: { '@type': 'PostalAddress', streetAddress: SITE.address.street, addressLocality: SITE.address.district, addressRegion: SITE.address.city, addressCountry: SITE.address.country },
  areaServed: ['Altıntaş', 'Aksu', 'Lara', 'Antalya'],
  sameAs: [SITE.instagram.url, SITE.google.mapsUrl, SITE.corporateSite],
};

// ---------- sayfa iskeleti ----------
function layout({ lang, title, desc, canonical, alternates, body, schema = [], ogImage }) {
  const t = T[lang];
  const alt = alternates ? Object.entries(alternates).map(([l, u]) => `<link rel="alternate" hreflang="${l}" href="${SITE.domain}${u}">`).join('') + `<link rel="alternate" hreflang="x-default" href="${SITE.domain}${alternates.tr}">` : '';
  const langSwitch = alternates ? LANGS.map((l) => `<a href="${alternates[l]}"${l === lang ? ' aria-current="true"' : ''}>${l.toUpperCase()}</a>`).join('') : '';
  return `<!doctype html><html lang="${t.htmlLang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><link rel="canonical" href="${SITE.domain}${canonical}">${alt}
<meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${SITE.domain}${canonical}"><meta property="og:locale" content="${t.locale}">${ogImage ? `<meta property="og:image" content="${SITE.domain}${ogImage}">` : ''}
<meta name="theme-color" content="#8f1d22"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/assets/style.css">
${[agentSchema, ...schema].map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('')}
</head><body>
${DEMO ? `<div class="demo">${t.demo}</div>` : ''}
<header class="top"><div class="wrap nav">
<a class="logo" href="${home(lang)}"><span class="mark">ACC</span><span class="lt"><b>ACC HOMES</b><small>International Real Estate</small></span></a>
<nav class="menu"><a href="${url(lang, 'list')}">${t.nav.list}</a><a href="${url(lang, 'guide')}">${t.nav.guide}</a><a href="${url(lang, 'contact')}">${t.nav.contact}</a></nav>
<div class="langs">${langSwitch}</div>
<a class="btn sm" href="tel:${SITE.phoneRaw}">${t.call}</a>
</div></header>
<main>${body}</main>
<footer class="foot"><div class="wrap fgrid">
<div><div class="logo"><span class="mark">ACC</span><span class="lt"><b>ACC HOMES</b><small>${esc(SITE.slogan[lang])}</small></span></div><p>${esc(t.footerAbout)}</p></div>
<div><h4>${t.office}</h4><p>${esc(SITE.address.street)}<br>${esc(SITE.address.area)}, ${esc(SITE.address.district)} / ${esc(SITE.address.city)}</p></div>
<div><h4>${t.nav.contact}</h4><p><a href="tel:${SITE.phoneRaw}">${SITE.phone}</a><br><a href="mailto:${SITE.email}">${SITE.email}</a><br><a href="${SITE.corporateSite}">${t.corporate}</a></p><div class="social"><a href="${SITE.instagram.url}" target="_blank" rel="noopener" aria-label="Instagram">${ICON_IG}</a><a href="${SITE.google.mapsUrl}" target="_blank" rel="noopener" aria-label="Google">${ICON_G}</a></div></div>
</div><div class="wrap copy">© ${new Date().getFullYear()} ${esc(SITE.brand)} · ${t.rights}</div></footer>
<a class="wa-float" href="${waLink(t.waGeneral)}" aria-label="WhatsApp" target="_blank" rel="noopener"><svg viewBox="0 0 32 32" width="28" height="28"><path fill="#fff" d="M16 3a13 13 0 0 0-11.3 19.4L3 29l6.8-1.8A13 13 0 1 0 16 3zm0 23.6c-2 0-4-.6-5.7-1.6l-.4-.2-4 1 1.1-3.9-.3-.4A10.6 10.6 0 1 1 16 26.6zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.7 8.7 0 0 1-4.3-3.8c-.3-.6.3-.5.9-1.6.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.6 3.6 0 0 0-1.1 2.7 6.3 6.3 0 0 0 1.3 3.3 14.4 14.4 0 0 0 5.5 4.9c2 .9 2.8.9 3.8.8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.7-.4z"/></svg></a>
<script src="/assets/app.js" defer></script></body></html>`;
}

// ---------- bileşenler ----------
const ICON_IG = `<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 2c-3.1 0-3.5 0-4.7.1-1 0-1.6.2-2 .3-.5.2-.8.4-1.1.7-.3.3-.6.7-.7 1.1-.1.4-.3.9-.3 2-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1 .2 1.6.3 2 .2.5.4.8.7 1.1.3.3.7.6 1.1.7.4.1.9.3 2 .3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1 0 1.6-.2 2-.3.5-.2.8-.4 1.1-.7.3-.3.6-.7.7-1.1.1-.4.3-.9.3-2 .1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1-.2-1.6-.3-2-.2-.5-.4-.8-.7-1.1-.3-.3-.7-.6-1.1-.7-.4-.1-.9-.3-2-.3-1.2-.1-1.6-.1-4.7-.1zm0 3.4a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8zm0 2a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8zm5.6-2.2a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>`;
const ICON_G = `<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.7z"/><path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24z"/><path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6H1.3a12 12 0 0 0 0 10.8l4-3.1z"/><path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1c.9-2.9 3.6-4.9 6.7-4.9z"/></svg>`;
const stars = '<span class="stars" aria-hidden="true">★★★★★</span>';
const fmtRating = (lang) => new Intl.NumberFormat(lang === 'tr' ? 'tr-TR' : lang === 'ru' ? 'ru-RU' : 'en-GB', { minimumFractionDigits: 1 }).format(SITE.google.rating);
function trustStrip(lang) {
  const t = T[lang];
  return `<section class="trust"><div class="wrap tgrid">
<a class="tcard" href="${SITE.google.mapsUrl}" target="_blank" rel="noopener">${ICON_G}<div><div class="tline"><b>${fmtRating(lang)}</b>${stars}</div><small>${t.gReviews(SITE.google.reviews)} · ${t.readReviews} →</small></div></a>
<a class="tcard" href="${SITE.instagram.url}" target="_blank" rel="noopener"><span class="ig">${ICON_IG}</span><div><div class="tline"><b>@${SITE.instagram.handle}</b></div><small>${t.igFollow} →</small></div></a>
<a class="tcard" href="${SITE.google.mapsUrl}" target="_blank" rel="noopener"><span class="pin">📍</span><div><div class="tline"><b>ACC PLAZA</b></div><small>Yeşilbahçe, Lara · ${t.directions} →</small></div></a>
</div></section>`;
}
function mapBlock(lang) {
  const t = T[lang];
  return `<section class="wrap sec"><div class="sechead"><h2>${t.mapTitle}</h2><a href="${SITE.google.mapsUrl}" target="_blank" rel="noopener">${t.directions} →</a></div>
<div class="map"><iframe src="${SITE.google.embedUrl}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="${t.mapTitle}" allowfullscreen></iframe></div></section>`;
}

function card(l, lang) {
  const t = T[lang];
  const cover = l.foto && l.foto[0];
  return `<article class="card" data-tip="${esc(l.tip)}" data-oda="${esc(l.oda)}" data-fiyat="${l.fiyat || 0}" data-tarih="${esc(l.tarih || '')}">
<a href="${url(lang, 'listing', slugOf(l))}">
<div class="img">${cover ? `<img src="${esc(cover)}" alt="${esc([l.mahalle, l.ilce, l.oda, l.tur].join(' '))}" loading="lazy">` : placeholder}<span class="tag">${tipLabel(l, lang)}</span>${statusBadge(l, lang)}</div>
<div class="body"><div class="price">${fmtPrice(l, lang)}</div><h3>${esc(pick(l.baslik, lang))}</h3>
<div class="meta"><span>${esc(l.oda || '')}</span>${l.net ? `<span>${l.net} m²</span>` : ''}<span>${esc([l.mahalle, l.ilce].filter(Boolean).join(', '))}</span></div></div></a></article>`;
}

function grid(list, lang) {
  return list.length ? `<div class="grid">${list.map((l) => card(l, lang)).join('')}</div>` : `<p class="empty">${T[lang].empty}</p>`;
}

const alts = (seg, slugByLang) => Object.fromEntries(LANGS.map((l) => [l, seg === 'home' ? home(l) : url(l, seg, slugByLang ? slugByLang(l) : '')]));

// ---------- sayfalar ----------
function pageHome(lang) {
  const t = T[lang];
  const feat = LISTINGS.filter((l) => l.oneCikan === 'Evet' && l.durum !== 'Satıldı').slice(0, 6);
  const show = feat.length ? feat : LISTINGS.slice(0, 6);
  const body = `<section class="hero"><div class="wrap"><p class="eyebrow">${esc(SITE.slogan[lang])}</p><h1>${t.heroTitle}</h1><p class="sub">${t.heroSub}</p>
<div class="ctas"><a class="btn" href="${url(lang, 'list')}">${t.heroCta}</a><a class="btn ghost" href="${waLink(t.waGeneral)}" target="_blank" rel="noopener">${t.heroCta2}</a></div></div></section>
${trustStrip(lang)}
<section class="wrap sec"><div class="sechead"><h2>${t.featured}</h2><a href="${url(lang, 'list')}">${t.seeAll} →</a></div>${grid(show, lang)}</section>
<section class="why"><div class="wrap"><h2>${t.why}</h2><div class="whygrid">${t.whyItems.map(([h, p]) => `<div><h3>${h}</h3><p>${p}</p></div>`).join('')}</div></div></section>
${mapBlock(lang)}
<section class="wrap sec guidebox"><div><h2>${t.guideTitle}</h2><p>${t.guideSub}</p></div><a class="btn ghost" href="${url(lang, 'guide')}">${t.nav.guide} →</a></section>`;
  write(path.join(BASE[lang], 'index.html'), layout({ lang, title: `${t.heroTitle} | ACC HOMES`, desc: t.metaHome, canonical: home(lang), alternates: alts('home'), body }));
}

function pageList(lang) {
  const t = T[lang]; const f = t.filters;
  const rooms = [...new Set(LISTINGS.map((l) => l.oda).filter(Boolean))].sort();
  const body = `<section class="wrap sec"><h1>${t.all}</h1>
<form class="filters" id="filters"><label>${f.tip}<select name="tip"><option value="">${f.any}</option><option value="Satılık">${f.sale}</option><option value="Kiralık">${f.rent}</option></select></label>
<label>${f.rooms}<select name="oda"><option value="">${f.any}</option>${rooms.map((r) => `<option>${esc(r)}</option>`).join('')}</select></label>
<label>${f.sort}<select name="sort"><option value="new">${f.newest}</option><option value="asc">${f.priceAsc}</option><option value="desc">${f.priceDesc}</option></select></label></form>
${grid(LISTINGS, lang)}</section>`;
  write(path.join(url(lang, 'list'), 'index.html'), layout({ lang, title: `${t.all} — ${t.heroTitle} | ACC HOMES`, desc: t.metaHome, canonical: url(lang, 'list'), alternates: alts('list'), body }));
}

function pageListing(l, lang) {
  const t = T[lang]; const F = t.fields; const slug = slugOf(l);
  const title = pick(l.baslik, lang);
  const desc = (lang === 'tr' && l.meta) ? l.meta : pick(l.aciklama, lang).slice(0, 155);
  const rows = [
    [F.no, l.id], [F.type, l.tur], [F.rooms, l.oda], [F.gross, l.brut || ''], [F.net, l.net || ''], [F.age, l.yas], [F.floor, l.kat], [F.floors, l.katSayisi],
    [F.heat, l.isitma], [F.inSite, l.site], [F.credit, l.kredi], [F.deed, l.tapu], [F.project, l.proje], [F.location, [l.mahalle, l.ilce, 'Antalya'].filter(Boolean).join(', ')],
  ].filter(([, v]) => v !== undefined && v !== null && v !== '');
  const photos = (l.foto || []);
  const gallery = photos.length ? `<div class="gallery"><img class="main" src="${esc(photos[0])}" alt="${esc(title)}">${photos.length > 1 ? `<div class="thumbs">${photos.map((p, i) => `<img src="${esc(p)}" alt="${esc(title)} ${i + 1}" loading="lazy">`).join('')}</div>` : ''}</div>` : `<div class="gallery">${placeholder}</div>`;
  const wa = waLink(t.waText(l.id));
  const body = `<section class="wrap sec listing">
<nav class="crumbs"><a href="${home(lang)}">${t.nav.home}</a> / <a href="${url(lang, 'list')}">${t.nav.list}</a> / <span>${esc(l.id)}</span></nav>
<div class="lgrid"><div>${gallery}
<h1>${esc(title)}</h1><p class="loc">${esc([l.proje, l.mahalle, l.ilce].filter(Boolean).join(' · '))}</p>
<h2>${F.desc}</h2><div class="desc">${esc(pick(l.aciklama, lang)).split(/\n+/).map((p) => `<p>${p}</p>`).join('')}</div>
${l.ozellikler && l.ozellikler.length ? `<h2>${F.features}</h2><ul class="chips">${l.ozellikler.map((o) => `<li>${esc(o)}</li>`).join('')}</ul>` : ''}
${l.video ? `<p><a class="btn ghost" href="${esc(l.video)}" target="_blank" rel="noopener">Video →</a></p>` : ''}
</div><aside class="side"><div class="box"><span class="tag static">${tipLabel(l, lang)}</span>${statusBadge(l, lang)}<div class="price big">${fmtPrice(l, lang)}</div>
<table class="spec">${rows.map(([k, v]) => `<tr><th>${k}</th><td>${esc(v)}</td></tr>`).join('')}</table>
<div class="actions"><a class="btn" href="${wa}" target="_blank" rel="noopener">${t.wa}</a><a class="btn ghost" href="tel:${SITE.phoneRaw}">${t.call}</a></div>
<a class="gline" href="${SITE.google.mapsUrl}" target="_blank" rel="noopener">${ICON_G}<b>${fmtRating(lang)}</b>${stars}<span>${t.gReviews(SITE.google.reviews)}</span></a></div>
<form class="box form" name="ilan-talep" method="POST" data-netlify="true" netlify-honeypot="bot" action="${url(lang, 'contact')}?ok=1"><h3>${t.askTitle}</h3>
<input type="hidden" name="form-name" value="ilan-talep"><input type="hidden" name="ilan" value="${esc(l.id)}"><p hidden><input name="bot"></p>
<input name="ad" placeholder="${t.name}" required><input name="telefon" placeholder="${t.phone}" required><textarea name="mesaj" rows="3" placeholder="${t.msg}"></textarea><button class="btn" type="submit">${t.send}</button></form>
</aside></div></section>`;
  const offer = l.fiyat ? { '@type': 'Offer', price: l.fiyat, priceCurrency: l.para === 'TL' ? 'TRY' : l.para, availability: l.durum === 'Satıldı' ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock' } : undefined;
  const schema = [
    { '@context': 'https://schema.org', '@type': 'RealEstateListing', name: title, description: pick(l.aciklama, lang), url: SITE.domain + url(lang, 'listing', slug), datePosted: l.tarih || undefined, image: photos.length ? photos.map((p) => SITE.domain + p) : undefined, offers: offer,
      about: { '@type': l.tur === 'Villa' ? 'House' : 'Apartment', numberOfRooms: l.oda, floorSize: l.net ? { '@type': 'QuantitativeValue', value: l.net, unitCode: 'MTK' } : undefined, address: { '@type': 'PostalAddress', addressLocality: l.mahalle, addressRegion: 'Antalya', addressCountry: 'TR' } } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [[t.nav.home, home(lang)], [t.nav.list, url(lang, 'list')], [title, url(lang, 'listing', slug)]].map(([n, u], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: SITE.domain + u })) },
  ];
  write(path.join(url(lang, 'listing', slug), 'index.html'), layout({ lang, title: `${title} | ACC HOMES`, desc, canonical: url(lang, 'listing', slug), alternates: alts('listing', () => slug), body, schema, ogImage: photos[0] }));
}

function pageGuide(lang) {
  const t = T[lang];
  const body = `<section class="wrap sec narrow"><h1>${t.guideTitle}</h1><p class="sub">${t.guideSub}</p>
${t.guideBody.map(([h, p]) => `<h2>${h}</h2><p>${p}</p>`).join('')}
<div class="ctas"><a class="btn" href="${url(lang, 'list')}">${t.heroCta}</a><a class="btn ghost" href="${waLink(t.waGeneral)}" target="_blank" rel="noopener">${t.heroCta2}</a></div></section>`;
  write(path.join(url(lang, 'guide'), 'index.html'), layout({ lang, title: `${t.guideTitle} | ACC HOMES`, desc: t.guideSub, canonical: url(lang, 'guide'), alternates: alts('guide'), body }));
}

function pageContact(lang) {
  const t = T[lang];
  const body = `<section class="wrap sec narrow"><h1>${t.contactTitle}</h1><p class="sub">${t.contactSub}</p>
<p class="ok" hidden id="ok">${t.thanks}</p>
<div class="cgrid"><div class="box"><h3>${t.office}</h3><p>${esc(SITE.address.street)}<br>${esc(SITE.address.area)}, ${esc(SITE.address.district)} / ${esc(SITE.address.city)}</p>
<p><a href="tel:${SITE.phoneRaw}">${SITE.phone}</a><br><a href="mailto:${SITE.email}">${SITE.email}</a></p>
<div class="actions"><a class="btn" href="${waLink(t.waGeneral)}" target="_blank" rel="noopener">${t.wa}</a><a class="btn ghost" href="tel:${SITE.phoneRaw}">${t.call}</a></div></div>
<form class="box form" name="iletisim" method="POST" data-netlify="true" netlify-honeypot="bot" action="${url(lang, 'contact')}?ok=1"><input type="hidden" name="form-name" value="iletisim"><p hidden><input name="bot"></p>
<input name="ad" placeholder="${t.name}" required><input name="telefon" placeholder="${t.phone}" required><textarea name="mesaj" rows="4" placeholder="${t.msg}"></textarea><button class="btn" type="submit">${t.send}</button></form></div></section>${trustStrip(lang)}${mapBlock(lang)}`;
  write(path.join(url(lang, 'contact'), 'index.html'), layout({ lang, title: `${t.contactTitle} | ACC HOMES`, desc: t.contactSub, canonical: url(lang, 'contact'), alternates: alts('contact'), body }));
}

// ---------- üretim ----------
fs.rmSync(OUT, { recursive: true, force: true });
fs.cpSync(path.join(ROOT, 'static'), OUT, { recursive: true });
fs.cpSync(path.join(ROOT, 'assets'), path.join(OUT, 'assets'), { recursive: true });
const urls = [];
for (const lang of LANGS) {
  pageHome(lang); pageList(lang); pageGuide(lang); pageContact(lang);
  urls.push(home(lang), url(lang, 'list'), url(lang, 'guide'), url(lang, 'contact'));
  for (const l of LISTINGS) { pageListing(l, lang); urls.push(url(lang, 'listing', slugOf(l))); }
}
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((u) => `<url><loc>${SITE.domain}${u}</loc></url>`).join('')}</urlset>`);
write('robots.txt', DEMO ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\nSitemap: ${SITE.domain}/sitemap.xml\n`);
write('404.html', layout({ lang: 'tr', title: 'Sayfa bulunamadı | ACC HOMES', desc: '', canonical: '/404', body: `<section class="wrap sec narrow"><h1>Sayfa bulunamadı</h1><p><a class="btn" href="/">Ana sayfa</a></p></section>` }));
console.log(`OK — ${LISTINGS.length} ilan, ${urls.length} sayfa${DEMO ? ' (önizleme verisi)' : ''}`);
