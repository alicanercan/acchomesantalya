// ACC HOMES — altintassatilikdaire.com statik site üreticisi
// Bağımlılık yok: Netlify'da "node build.mjs" ile çalışır, çıktı dist/ klasörüne yazılır.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { PAGES, POSTS, TEAM, LANGS_SPOKEN, PLAZA, TIMELINE } from './content.mjs';
import { PROJECTS } from './projects.mjs';
import { PRIVACY } from './privacy.mjs';
import { PAGES2, P2X, p2Html } from './pages2.mjs';
import { AREA_GUIDES } from './areas.mjs';
import { EVENTS } from './events.mjs';
import { BROKER } from './broker.mjs';
import { GUIDES, FAQ, GUIDE_SEG, GUIDE_TITLE, GUIDE_LEAD, GUIDE_UPDATED } from './guide.mjs';
import { T_EXTRA, S, s, SEGS, LOCALE, RTL, extend, PACKS } from './i18n.mjs';
import { STAFF_PHOTOS, PARTNERS, PHOTO_BASE, LANG_NAMES, PARTNER_ROLE, SWORN_ROLE } from './team.mjs';

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const OUT = path.join(ROOT, 'dist');
const read = (p) => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));

const SITE = read('data/site.json');
const REVIEWS = read('data/reviews.json');
const IG = read('data/instagram.json');
let LISTINGS = read('data/portfoy.json');
const DEMO = LISTINGS.length === 0 && !SITE.live;
if (DEMO) LISTINGS = read('data/demo.json');
LISTINGS = LISTINGS.filter((l) => ['Yayında', 'Opsiyonlu', 'Satıldı'].includes(l.durum));

const VER = crypto.createHash('md5').update(fs.readFileSync(path.join(ROOT, 'assets/style.css')) + fs.readFileSync(path.join(ROOT, 'assets/app.js'))).digest('hex').slice(0, 8);
const LANGS = ['tr', 'en', 'de', 'ru', 'fa', ...PACKS.map((p) => p.code)];
const BASE = { tr: '', en: '/en', ru: '/ru', de: '/de', fa: '/fa', ...Object.fromEntries(PACKS.map((p) => [p.code, p.base])) };
const T = {
  tr: {
    htmlLang: 'tr', locale: 'tr_TR',
    nav: { home: 'Ana Sayfa', list: 'İlanlar', guide: 'Altıntaş Rehberi', contact: 'İletişim' },
    seg: { list: 'ilanlar', listing: 'ilan', guide: 'altintas-rehberi', contact: 'iletisim' },
    heroTitle: 'Antalya’da Satılık ve Kiralık Gayrimenkul',
    heroSub: 'ACC Plaza’dan 50 iş ortağı ve 10 dilde hizmetle; konut, villa, yetkili projeler ve ticari yatırımlarda kurumsal, şeffaf ve veriye dayalı danışmanlık',
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
    fields: { price: 'Fiyat', rooms: 'Oda', gross: 'Brüt alan', net: 'Net alan', age: 'Bina yaşı', floor: 'Bulunduğu kat', floors: 'Kat sayısı', heat: 'Isıtma', inSite: 'Site içinde', credit: 'Krediye uygun', deed: 'Tapu durumu', project: 'Proje / Site', location: 'Konum', type: 'Emlak türü', no: 'İlan no', features: 'Özellikler', desc: 'Açıklama' },
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
    footerAbout: 'Antalya merkezli kurumsal gayrimenkul ofisi. Satış, kiralama, yetkili projeler ve yatırım danışmanlığı.',
    corporate: 'Kurumsal site', rights: 'Tüm hakları saklıdır',
    revTitle: 'Müşterilerimiz ne diyor', revSub: 'Google’daki yorumlarımızdan seçtiklerimiz', revAll: 'Tüm yorumları Google’da oku', revMore: 'Devamı Google’da',
    igTitle: 'Instagram’da ACC HOMES', igFollowBtn: 'Takip et', igPosts: 'gönderi', igFollowers: 'takipçi',
    barCall: 'Hemen Ara', barWa: 'WhatsApp’tan Yaz',
    projects: 'Projeler', projectsLead: 'ACC HOMES’un yetkili satış ofisi olduğu projeler', projectsCta: 'Projeyi incele',
    company: 'Kurumsal', blog: 'Blog', blogLead: 'Antalya ve Altıntaş gayrimenkul piyasası üzerine rehberler ve analizler', readMore: 'Devamını oku', menu: 'Menü',
    gReviews: (n) => `${n} Google yorumu`, readReviews: 'Yorumları oku', igFollow: 'Instagram’da takip edin', mapTitle: 'Ofisimiz haritada', directions: 'Yol tarifi al', trustTitle: 'Müşterilerimiz bizi anlatıyor',
    metaHome: 'ACC HOMES International Real Estate: Antalya’da satılık ve kiralık daire, villa, yetkili projeler ve ticari gayrimenkul. ACC Plaza, 50 iş ortağı, 10 dilde hizmet.',
  },
  en: {
    htmlLang: 'en', locale: 'en_GB',
    nav: { home: 'Home', list: 'Listings', guide: 'Altintas Guide', contact: 'Contact' },
    seg: { list: 'listings', listing: 'listing', guide: 'altintas-guide', contact: 'contact' },
    heroTitle: 'Property for Sale and Rent in Antalya',
    heroSub: 'From ACC Plaza, 50 partners in 10 languages: homes, villas, authorised projects and commercial investments, with corporate, transparent, data-driven advice',
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
    fields: { price: 'Price', rooms: 'Rooms', gross: 'Gross area', net: 'Net area', age: 'Building age', floor: 'Floor', floors: 'Total floors', heat: 'Heating', inSite: 'In a complex', credit: 'Mortgage eligible', deed: 'Title deed', project: 'Project / Complex', location: 'Location', type: 'Property type', no: 'Listing no', features: 'Features', desc: 'Description' },
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
    footerAbout: 'A corporate real estate agency based in Antalya: sales, rentals, authorised projects and investment advice.',
    corporate: 'Corporate site', rights: 'All rights reserved',
    revTitle: 'What our clients say', revSub: 'A selection of our Google reviews, in the words our clients wrote them', revAll: 'Read all reviews on Google', revMore: 'Read more on Google',
    igTitle: 'ACC HOMES on Instagram', igFollowBtn: 'Follow', igPosts: 'posts', igFollowers: 'followers',
    barCall: 'Call now', barWa: 'WhatsApp us',
    projects: 'Projects', projectsLead: 'Developments for which ACC HOMES is the authorised sales office (pages in Turkish)', projectsCta: 'View project',
    company: 'Company', blog: 'Blog', blogLead: 'Guides and insights on the Antalya and Altintas property market', readMore: 'Read more', menu: 'Menu',
    gReviews: (n) => `${n} Google reviews`, readReviews: 'Read reviews', igFollow: 'Follow us on Instagram', mapTitle: 'Find our office', directions: 'Get directions', trustTitle: 'What our clients say',
    metaHome: 'ACC HOMES International Real Estate: apartments, villas, authorised projects and commercial property for sale and rent in Antalya. Service in 10 languages.',
  },
  ru: {
    htmlLang: 'ru', locale: 'ru_RU',
    nav: { home: 'Главная', list: 'Объекты', guide: 'Гид по Алтынташу', contact: 'Контакты' },
    seg: { list: 'obekty', listing: 'obekt', guide: 'gid-altyntash', contact: 'kontakty' },
    heroTitle: 'Недвижимость в Анталии: продажа и аренда',
    heroSub: '50 партнёров и сервис на 10 языках: квартиры, виллы, проекты и коммерческая недвижимость',
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
    fields: { price: 'Цена', rooms: 'Комнаты', gross: 'Общая площадь', net: 'Полезная площадь', age: 'Возраст здания', floor: 'Этаж', floors: 'Этажность', heat: 'Отопление', inSite: 'В комплексе', credit: 'Ипотека', deed: 'Тапу', project: 'Проект / Комплекс', location: 'Расположение', type: 'Тип недвижимости', no: 'Номер объекта', features: 'Особенности', desc: 'Описание' },
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
    footerAbout: 'Корпоративное агентство недвижимости в Анталии: продажа, аренда, проекты и инвестиции.',
    corporate: 'Корпоративный сайт', rights: 'Все права защищены',
    revTitle: 'Отзывы клиентов', revSub: 'Подборка отзывов из Google на языке оригинала', revAll: 'Все отзывы в Google', revMore: 'Читать в Google',
    igTitle: 'ACC HOMES в Instagram', igFollowBtn: 'Подписаться', igPosts: 'публикаций', igFollowers: 'подписчиков',
    barCall: 'Позвонить', barWa: 'Написать в WhatsApp',
    projects: 'Проекты', projectsLead: 'Проекты, официальным офисом продаж которых является ACC HOMES (на турецком)', projectsCta: 'Подробнее',
    company: 'О компании', blog: 'Блог', blogLead: 'Гиды и аналитика по рынку недвижимости Анталии (на английском)', readMore: 'Читать', menu: 'Меню',
    gReviews: (n) => `${n} отзывов в Google`, readReviews: 'Читать отзывы', igFollow: 'Мы в Instagram', mapTitle: 'Наш офис на карте', directions: 'Проложить маршрут', trustTitle: 'Отзывы наших клиентов',
    metaHome: 'Квартиры на продажу и в аренду в Алтынташе, Анталия. Проверенные объекты и экспертные консультации ACC HOMES.',
  },
};

Object.assign(T, T_EXTRA);
extend({ PAGES, PLAZA, TIMELINE, LANGS_SPOKEN, TEAM, GUIDE_SEG, GUIDE_TITLE, GUIDE_LEAD, SITE, T, LANG_NAMES, PARTNER_ROLE, SWORN_ROLE });
PAGES.privacy = PRIVACY; Object.assign(PAGES, PAGES2);
for (const [lng, d] of [...Object.entries(P2X), ...PACKS.filter((p) => p.p2).map((p) => [p.code, p.p2])]) for (const k of ['sell', 'viewing', 'licences']) if (d[k]) PAGES[k][lng] = p2Html(k, d[k]);
const GL = (lang) => (lang === 'tr' || lang === 'en' ? lang : 'en'); // rehber makaleleri dili

// ---------- yardımcılar ----------
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const trMap = { ç: 'c', ğ: 'g', ı: 'i', i: 'i', ö: 'o', ş: 's', ü: 'u', Ç: 'c', Ğ: 'g', İ: 'i', I: 'i', Ö: 'o', Ş: 's', Ü: 'u' };
const slugify = (s) => String(s).split('').map((c) => trMap[c] ?? c).join('').toLowerCase()
  .replace(/\+/g, '-').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const slugOf = (l) => l.slug ? slugify(l.slug.replace(/^\//, '')) : slugify([l.tip, l.ilce, l.mahalle, l.oda, l.tur, l.id].filter(Boolean).join(' '));
const pick = (obj, lang) => (obj && (obj[lang] || obj.tr)) || '';
const fmtPrice = (l, lang) => {
  if (!l.fiyat) return T[lang].priceOnReq;
  const n = new Intl.NumberFormat(LOCALE[lang]).format(l.fiyat);
  const sym = { TL: '₺', USD: '$', EUR: '€' }[l.para] || l.para || '';
  return lang === 'tr' ? `${n} ${sym}` : `${sym}${n}`;
};
const priceAttrs = (l) => (l.fiyat ? ` data-amt="${l.fiyat}" data-ccy="${({ TL: 'TRY', USD: 'USD', EUR: 'EUR', GBP: 'GBP' })[l.para || 'TL'] || 'TRY'}"` : '');
const tipLabel = (l, lang) => (l.tip === 'Kiralık' ? T[lang].rent : T[lang].sale);
const statusBadge = (l, lang) => l.durum === 'Satıldı' ? `<span class="badge sold">${T[lang].sold}</span>` : l.durum === 'Opsiyonlu' ? `<span class="badge opt">${T[lang].option}</span>` : '';
const segOf = (lang, seg) => (PAGES[seg] ? (PAGES[seg].seg[lang] || PAGES[seg].seg.en) : seg === 'blog' ? 'blog' : seg === 'projects' ? SEGS.projects[lang] : seg === 'buyersguide' ? GUIDE_SEG[lang] : seg === 'downloads' ? (SEGS.downloads[lang] || 'free-guides') : seg === 'events' ? (EVENTS.seg[lang] || EVENTS.seg.en) : seg === 'areas' ? (SEGS.areas[lang] || SEGS.areas.en) : seg === 'favorites' ? (SEGS.favorites[lang] || 'favorites') : seg === 'reviews' ? SEGS.reviews[lang] : T[lang].seg[seg]);
const url = (lang, seg, slug) => `${BASE[lang]}/${segOf(lang, seg)}/${slug ? slug + '/' : ''}`;
const home = (lang) => `${BASE[lang]}/`;
const waLink = (text) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
const write = (rel, html) => { const f = path.join(OUT, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, html); };
const placeholder = `<div class="ph"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 30 32 10l24 20v24H40V38H24v16H8z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/></svg></div>`;

const agentSchema = {
  '@context': 'https://schema.org', '@type': 'RealEstateAgent', name: SITE.brand, url: SITE.corporateSite, logo: `${SITE.domain}/img/logo/acc-homes-logo.png`, image: `${SITE.domain}/img/logo/acc-homes-logo.png`,
  telephone: SITE.phone, email: SITE.email, slogan: SITE.slogan.tr,
  address: { '@type': 'PostalAddress', streetAddress: SITE.address.street, addressLocality: SITE.address.district, addressRegion: SITE.address.city, addressCountry: SITE.address.country },
  areaServed: ['Altıntaş', 'Aksu', 'Lara', 'Antalya'],
  sameAs: [SITE.instagram.url, SITE.google.mapsUrl, SITE.corporateSite],
};

// ---------- ayar paneli: dil, para birimi, ölçü birimi ----------
const LANG_ORDER = ['en', 'fr', 'ru', 'ar', 'tr', 'zh', 'de', 'es', 'pl', 'sv', 'nl', 'fa'].filter((l) => LANGS.includes(l));
const ENDONYM = { en: 'English', fr: 'Français', ru: 'Русский', ar: 'العربية', tr: 'Türkçe', zh: '中文', de: 'Deutsch', es: 'Español', pl: 'Polski', sv: 'Svenska', nl: 'Nederlands', fa: 'فارسی' };
const CURRENCIES = ['EUR', 'USD', 'GBP', 'RUB', 'BTC', 'TRY', 'AED', 'CNY', 'PLN', 'SEK', 'SAR', 'CAD'];
const DEF_CUR = { tr: 'TRY', en: 'USD', ru: 'USD', fa: 'USD', de: 'EUR', fr: 'EUR', es: 'EUR', nl: 'EUR', pl: 'PLN', sv: 'SEK', ar: 'AED', zh: 'CNY' };
const settingsBtn = (lang) => `<button type="button" class="setbtn" data-set-open aria-haspopup="dialog" aria-label="${s('settings', lang)}"><span aria-hidden="true">🌐</span><b>${lang.toUpperCase()}</b><span class="sep">·</span><span data-cur-label>${DEF_CUR[lang] || 'USD'}</span><span class="sep">·</span><span data-unit-label>m²</span></button>`;
function settingsPanel(lang, alternates) {
  const href = (l) => (alternates && alternates[l]) || (alternates && alternates.tr && alternates.tr.startsWith('/alici-rehberi') ? url(l, 'buyersguide') : home(l));
  return `<div class="setpanel" data-set-panel hidden role="dialog" aria-label="${s('settings', lang)}" data-def-cur="${DEF_CUR[lang] || 'USD'}"><div class="wrap spgrid">
<button type="button" class="spclose" data-set-close>${s('close', lang)} ✕</button>
<div><h4>${s('language', lang)}</h4><div class="opts">${LANG_ORDER.map((l) => `<a href="${href(l)}" lang="${l}" hreflang="${l}"${l === lang ? ' aria-current="true"' : ''}>${ENDONYM[l]}</a>`).join('')}</div></div>
<div><h4>${s('currency', lang)}</h4><div class="opts">${CURRENCIES.map((c) => `<button type="button" data-cur-set="${c}">${c}</button>`).join('')}</div><small class="spnote">${s('curNote', lang)}</small></div>
<div><h4>${s('unit', lang)}</h4><div class="opts two"><button type="button" data-unit-set="m2">${s('metric', lang)}</button><button type="button" data-unit-set="ft2">${s('imperial', lang)}</button></div></div>
</div></div>`;
}

// "Beni arayın" açılır penceresi (bir oturumda en fazla bir kez; form gönderen kişiye bir daha çıkmaz)
const DIAL = [['TR', '+90'], ['GB', '+44'], ['DE', '+49'], ['PL', '+48'], ['RU', '+7'], ['UA', '+380'], ['IR', '+98'], ['FR', '+33'], ['NL', '+31'], ['ES', '+34'], ['SE', '+46'], ['AE', '+971'], ['SA', '+966'], ['CN', '+86'], ['US/CA', '+1'], ['KZ', '+7']];
const DEF_DIAL = { tr: '+90', en: '+44', de: '+49', pl: '+48', ru: '+7', fa: '+98', fr: '+33', nl: '+31', es: '+34', sv: '+46', ar: '+971', zh: '+86' };
function callPopup(lang) {
  const t = T[lang];
  return `<div class="cpop" data-cpop hidden role="dialog" aria-modal="true" aria-labelledby="cpop-h"><div class="cpbox"><button type="button" class="cpx" data-cpop-close aria-label="${s('close', lang)}">✕</button>
<div class="cptext"><h2 id="cpop-h">${s('callTitle', lang)}</h2><p>${s('callSub', lang)}</p></div>
<form class="cpform" name="beni-ara" method="POST" data-netlify="true" netlify-honeypot="bot" action="${url(lang, 'contact')}?ok=1" data-cpop-form><input type="hidden" name="form-name" value="beni-ara"><input type="hidden" name="dil" value="${lang}"><input type="hidden" name="sayfa" value="" data-cpop-page><input type="hidden" name="ilan" value="" data-cpop-ilan><p hidden><input name="bot"></p>
<input name="ad" placeholder="${t.name} *" required autocomplete="name">
<div class="cptel"><select name="ulke_kodu" aria-label="${s('dialCode', lang)}">${DIAL.map(([c, d]) => `<option value="${d}"${d === (DEF_DIAL[lang] || '+90') && (c !== 'KZ') ? ' selected' : ''}>${c} ${d}</option>`).join('')}</select><input name="telefon" type="tel" placeholder="${t.phone} *" required autocomplete="tel-national"></div>
<label class="chk"><input type="checkbox" name="kvkk_onay" value="evet" required> <span>${s('consent', lang).replace('{{LINK}}', `<a href="${url(lang, 'privacy')}" target="_blank" rel="noopener">${PAGES.privacy.nav[lang] || PAGES.privacy.nav.en}</a>`)} *</span></label>
<button class="btn" type="submit">${s('callMe', lang)}</button></form></div></div>`;
}

// ---------- alt bilgi (açık renk, Property Turkey düzeni) ----------
const AREAS = [['Muratpaşa', '🏙️'], ['Konyaaltı', '🏖️'], ['Döşemealtı', '🌿'], ['Kepez', '🏘️'], ['Aksu', '✈️'], ['Kemer', '⛰️'], ['Serik', '⛳']];
const DISTS = AREAS.map(([a]) => a);
const POPULAR = {
  tr: [['Antalya satılık daire', '?tip=Satılık&tur=Daire'], ['Antalya satılık villa', '?tip=Satılık&tur=Villa'], ['Lara satılık daire', '?tip=Satılık&ilce=Muratpaşa'], ['Konyaaltı satılık daire', '?tip=Satılık&ilce=Konyaaltı'], ['Altıntaş satılık daire', '?tip=Satılık&ilce=Aksu'], ['Döşemealtı satılık villa', '?tip=Satılık&tur=Villa&ilce=Döşemealtı'], ['Antalya kiralık daire', '?tip=Kiralık'], ['Vatandaşlığa uygun evler', '?etiket=vatandaslik']],
  en: [['Apartments for sale in Antalya', '?tip=Satılık&tur=Daire'], ['Villas for sale in Antalya', '?tip=Satılık&tur=Villa'], ['Property in Lara', '?ilce=Muratpaşa'], ['Property in Konyaaltı', '?ilce=Konyaaltı'], ['Property in Altıntaş', '?ilce=Aksu'], ['Villas in Döşemealtı', '?tur=Villa&ilce=Döşemealtı'], ['Antalya rentals', '?tip=Kiralık'], ['Citizenship-eligible homes', '?etiket=vatandaslik']],
  de: [["Wohnungen zum Kauf in Antalya", "?tip=Satılık&tur=Daire"], ["Villen zum Kauf in Antalya", "?tip=Satılık&tur=Villa"], ["Immobilien in Lara", "?ilce=Muratpaşa"], ["Immobilien in Konyaaltı", "?ilce=Konyaaltı"], ["Immobilien in Altıntaş", "?ilce=Aksu"], ["Villen in Döşemealtı", "?tur=Villa&ilce=Döşemealtı"], ["Mietobjekte in Antalya", "?tip=Kiralık"], ["Für die Staatsbürgerschaft geeignet", "?etiket=vatandaslik"]],
  ru: [["Квартиры в Анталии", "?tip=Satılık&tur=Daire"], ["Виллы в Анталии", "?tip=Satılık&tur=Villa"], ["Недвижимость в Ларе", "?ilce=Muratpaşa"], ["Недвижимость в Коньяалты", "?ilce=Konyaaltı"], ["Недвижимость в Алтынташе", "?ilce=Aksu"], ["Виллы в Дёшемеалты", "?tur=Villa&ilce=Döşemealtı"], ["Аренда в Анталии", "?tip=Kiralık"], ["Объекты под гражданство", "?etiket=vatandaslik"]],
  fa: [["آپارتمان برای فروش در آنتالیا", "?tip=Satılık&tur=Daire"], ["ویلا برای فروش در آنتالیا", "?tip=Satılık&tur=Villa"], ["ملک در لارا", "?ilce=Muratpaşa"], ["ملک در کنیاآلتی", "?ilce=Konyaaltı"], ["ملک در آلتین‌تاش", "?ilce=Aksu"], ["ویلا در دوشمه‌آلتی", "?tur=Villa&ilce=Döşemealtı"], ["اجاره در آنتالیا", "?tip=Kiralık"], ["املاک مناسب شهروندی", "?etiket=vatandaslik"]],
  pl: [["Mieszkania na sprzedaż w Antalyi", "?tip=Satılık&tur=Daire"], ["Wille na sprzedaż w Antalyi", "?tip=Satılık&tur=Villa"], ["Nieruchomości w Larze", "?ilce=Muratpaşa"], ["Nieruchomości w Konyaaltı", "?ilce=Konyaaltı"], ["Nieruchomości w Altıntaş", "?ilce=Aksu"], ["Wille w Döşemealtı", "?tur=Villa&ilce=Döşemealtı"], ["Wynajem w Antalyi", "?tip=Kiralık"], ["Nieruchomości pod obywatelstwo", "?etiket=vatandaslik"]],
  fr: [["Appartements à vendre à Antalya", "?tip=Satılık&tur=Daire"], ["Villas à vendre à Antalya", "?tip=Satılık&tur=Villa"], ["Biens à Lara", "?ilce=Muratpaşa"], ["Biens à Konyaaltı", "?ilce=Konyaaltı"], ["Biens à Altıntaş", "?ilce=Aksu"], ["Villas à Döşemealtı", "?tur=Villa&ilce=Döşemealtı"], ["Locations à Antalya", "?tip=Kiralık"], ["Biens éligibles à la citoyenneté", "?etiket=vatandaslik"]],
  es: [["Pisos en venta en Antalya", "?tip=Satılık&tur=Daire"], ["Villas en venta en Antalya", "?tip=Satılık&tur=Villa"], ["Propiedades en Lara", "?ilce=Muratpaşa"], ["Propiedades en Konyaaltı", "?ilce=Konyaaltı"], ["Propiedades en Altıntaş", "?ilce=Aksu"], ["Villas en Döşemealtı", "?tur=Villa&ilce=Döşemealtı"], ["Alquileres en Antalya", "?tip=Kiralık"], ["Propiedades aptas para ciudadanía", "?etiket=vatandaslik"]],
  nl: [["Appartementen te koop in Antalya", "?tip=Satılık&tur=Daire"], ["Villa’s te koop in Antalya", "?tip=Satılık&tur=Villa"], ["Woningen in Lara", "?ilce=Muratpaşa"], ["Woningen in Konyaaltı", "?ilce=Konyaaltı"], ["Woningen in Altıntaş", "?ilce=Aksu"], ["Villa’s in Döşemealtı", "?tur=Villa&ilce=Döşemealtı"], ["Huurwoningen in Antalya", "?tip=Kiralık"], ["Geschikt voor staatsburgerschap", "?etiket=vatandaslik"]],
  sv: [["Lägenheter till salu i Antalya", "?tip=Satılık&tur=Daire"], ["Villor till salu i Antalya", "?tip=Satılık&tur=Villa"], ["Bostäder i Lara", "?ilce=Muratpaşa"], ["Bostäder i Konyaaltı", "?ilce=Konyaaltı"], ["Bostäder i Altıntaş", "?ilce=Aksu"], ["Villor i Döşemealtı", "?tur=Villa&ilce=Döşemealtı"], ["Hyresbostäder i Antalya", "?tip=Kiralık"], ["Bostäder för medborgarskap", "?etiket=vatandaslik"]],
  ar: [["شقق للبيع في أنطاليا", "?tip=Satılık&tur=Daire"], ["فلل للبيع في أنطاليا", "?tip=Satılık&tur=Villa"], ["عقارات في لارا", "?ilce=Muratpaşa"], ["عقارات في كونيالتي", "?ilce=Konyaaltı"], ["عقارات في ألتين طاش", "?ilce=Aksu"], ["فلل في دوشمه ألتي", "?tur=Villa&ilce=Döşemealtı"], ["إيجارات في أنطاليا", "?tip=Kiralık"], ["عقارات مناسبة للجنسية", "?etiket=vatandaslik"]],
  zh: [["安塔利亚公寓出售", "?tip=Satılık&tur=Daire"], ["安塔利亚别墅出售", "?tip=Satılık&tur=Villa"], ["拉拉区房产", "?ilce=Muratpaşa"], ["孔亚尔特房产", "?ilce=Konyaaltı"], ["阿尔滕塔什房产", "?ilce=Aksu"], ["多谢梅阿尔特别墅", "?tur=Villa&ilce=Döşemealtı"], ["安塔利亚租房", "?tip=Kiralık"], ["可申请入籍房产", "?etiket=vatandaslik"]],
};
function footer(lang) {
  const t = T[lang]; const nv = (k) => PAGES[k].nav[lang] || PAGES[k].nav.en;
  const pop = POPULAR[lang] || POPULAR.en;
  const L = GL(lang);
  const col = (h, links) => `<div><h4>${h}</h4><p class="flinks">${links.map(([n, u]) => `<a href="${u}">${esc(n)}</a>`).join('')}</p></div>`;
  return `<footer class="foot"><div class="wrap fcols">
${col(s('popSearches', lang), pop.map(([n, q]) => [n, url(lang, 'list') + q]))}
${col(s('popAreas', lang), [...AREA_GUIDES.map((a) => [a.ilce, aUrl(GL(lang), a)]), [s('areasTitle', lang) + ' →', url(lang, 'areas')]])}
${col(GUIDE_TITLE[lang], GUIDES.map((g) => [gC(g, L).title, gUrl(L, g)]))}
${col(t.company, [[nv('about'), url(lang, 'about')], [nv('broker'), url(lang, 'broker')], [nv('team'), url(lang, 'team')], [t.revTitle, url(lang, 'reviews')], [nv('licences'), url(lang, 'licences')], [EVENTS.nav[lang] || EVENTS.nav.en, url(lang, 'events')], [nv('join'), url(lang, 'join')]])}
${col(s('usefulLinks', lang), [[nv('services'), url(lang, 'services')], [nv('sell'), url(lang, 'sell')], [nv('viewing'), url(lang, 'viewing')], [s('dlPageTitle', lang), url(lang, 'downloads')], [t.projects, url(lang, 'projects')], [t.blog, url(lang, 'blog')], [t.nav.contact, url(lang, 'contact')]])}
</div>
<div class="wrap fmid">
<div class="fbrand"><img src="/img/logo/acc-siyah.svg" alt="ACC HOMES International Real Estate" width="171" height="50" loading="lazy"><p class="slogan">${esc(SITE.slogan[lang])}</p><p>${esc(t.footerAbout)}</p></div>
<div class="fcontact"><p><b>${t.office}</b><br>${esc(SITE.address.street)}<br>${esc(SITE.address.district)} / ${esc(SITE.address.city)}</p><p><a href="tel:${SITE.phoneRaw}"><b dir="ltr">${SITE.phone}</b></a><br><a href="mailto:${SITE.email}">${SITE.email}</a></p></div>
<div class="fcenter"><div class="fpills"><a href="${url(lang, 'join')}">🤝 ${s('partnerPill', lang)}</a><a href="${url(lang, 'viewing')}">📱 ${nv('viewing')}</a></div>
<div class="social"><a href="${SITE.instagram.url}" target="_blank" rel="noopener" aria-label="Instagram">${ICON_IG}</a><a href="${waLink(t.waGeneral)}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICON_WA}</a><a href="${SITE.google.mapsUrl}" target="_blank" rel="noopener" aria-label="Google">${ICON_G}</a></div>
<a class="frating" href="${SITE.google.mapsUrl}" target="_blank" rel="noopener">${ICON_G}<b>${fmtRating(lang)}</b>${stars}<span>${t.gReviews(SITE.google.reviews)}</span></a></div>
</div>
<div class="wrap flangs">${LANGS.map((l) => `<a href="${home(l)}" lang="${l}"${l === lang ? ' aria-current="true"' : ''}>${ENDONYM[l]}</a>`).join('')}</div>
<div class="wrap freg"><b>${s('licence', lang)}</b> · ${SITE.licence.join(' · ')}</div>
<div class="wrap copy">© 2024–${new Date().getFullYear()} ${esc(SITE.brand)} · ${t.rights} · <a href="${url(lang, 'privacy')}">${nv('privacy')}</a></div></footer>`;
}

// ---------- sayfa iskeleti ----------
function layout({ lang, title, desc, canonical, alternates, body, schema = [], ogImage, noindex }) {
  const t = T[lang];
  const alt = alternates ? Object.entries(alternates).map(([l, u]) => `<link rel="alternate" hreflang="${l}" href="${SITE.domain}${u}">`).join('') + `<link rel="alternate" hreflang="x-default" href="${SITE.domain}${alternates.tr}">` : '';
  const langSwitch = alternates ? LANGS.map((l) => `<a href="${alternates[l] || (alternates.tr && alternates.tr.startsWith('/alici-rehberi') ? url(l, 'buyersguide') : home(l))}"${l === lang ? ' aria-current="true"' : ''}>${l.toUpperCase()}</a>`).join('') : '';
  return (RTL.has(lang) ? (h) => h.replaceAll('→', '←') : (h) => h)(`<!doctype html><html lang="${t.htmlLang}"${RTL.has(lang) ? ' dir="rtl"' : ''}><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>${noindex ? '<meta name="robots" content="noindex">' : ''}<meta name="description" content="${esc(desc)}"><link rel="canonical" href="${SITE.domain}${canonical}">${alt}
<meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${SITE.domain}${canonical}"><meta property="og:locale" content="${t.locale}">${ogImage ? `<meta property="og:image" content="${SITE.domain}${ogImage}">` : ''}
<meta name="theme-color" content="#E02A3C"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png">${FONTS_OK ? `<link rel="preload" href="/assets/fonts.css" as="style"><link rel="stylesheet" href="/assets/fonts.css">` : ''}<link rel="stylesheet" href="/assets/style.css?v=${VER}">
${[agentSchema, ...schema].map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('')}
</head><body>
${DEMO ? `<div class="demo">${t.demo}</div>` : ''}
<header class="top"><div class="tbar"><div class="wrap tbin"><span class="tloc">📍 ACC Plaza · Yeşilbahçe, Muratpaşa / Antalya</span><span class="tcon"><a class="tphone" href="tel:${SITE.phoneRaw}" aria-label="${t.call} ${SITE.phone}"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg><b dir="ltr">${SITE.phone}</b></a><a class="twa" href="${waLink(t.waGeneral)}" target="_blank" rel="noopener">WhatsApp</a><a class="tmail" href="mailto:${SITE.email}">${SITE.email}</a><a class="tfav" href="${url(lang, 'favorites')}">♡ <span data-fav-count>0</span></a></span></div></div><div class="wrap nav">
<a class="logo" href="${home(lang)}"><img src="/img/logo/acc-siyah.svg" alt="ACC HOMES International Real Estate" width="154" height="45"></a>
<nav class="menu"><a href="${url(lang, 'list')}">${t.nav.list}</a><a href="${url(lang, 'projects')}">${t.projects}</a><a href="${url(lang, 'buyersguide')}">${GUIDE_TITLE[lang]}</a><a href="${url(lang, 'services')}">${PAGES.services.nav[lang]}</a><div class="dd"><button type="button">${t.company} ▾</button><div class="ddm"><a href="${url(lang, 'about')}">${PAGES.about.nav[lang]}</a><a href="${url(lang, 'broker')}">${PAGES.broker.nav[lang]}</a><a href="${url(lang, 'team')}">${PAGES.team.nav[lang]}</a><a href="${url(lang, 'reviews')}">${t.revTitle}</a><a href="${url(lang, 'licences')}">${PAGES.licences.nav[lang] || PAGES.licences.nav.en}</a><a href="${url(lang, 'events')}">${EVENTS.nav[lang] || EVENTS.nav.en}</a><a href="${url(lang, 'join')}">${PAGES.join.nav[lang]}</a></div></div><a href="${url(lang, 'blog')}">${t.blog}</a><a href="${url(lang, 'contact')}">${t.nav.contact}</a></nav>
<details class="mnav"><summary aria-label="${t.menu}">☰</summary><div class="mpanel"><a href="${url(lang, 'list')}">${t.nav.list}</a><a href="${url(lang, 'projects')}">${t.projects}</a><a href="${url(lang, 'buyersguide')}">${GUIDE_TITLE[lang]}</a><a href="${url(lang, 'services')}">${PAGES.services.nav[lang]}</a><a href="${url(lang, 'about')}">${PAGES.about.nav[lang]}</a><a href="${url(lang, 'broker')}">${PAGES.broker.nav[lang]}</a><a href="${url(lang, 'team')}">${PAGES.team.nav[lang]}</a><a href="${url(lang, 'sell')}">${PAGES.sell.nav[lang] || PAGES.sell.nav.en}</a><a href="${url(lang, 'join')}">${PAGES.join.nav[lang]}</a><a href="${url(lang, 'guide')}">${t.nav.guide}</a><a href="${url(lang, 'blog')}">${t.blog}</a><a href="${url(lang, 'contact')}">${t.nav.contact}</a></div></details>
${settingsBtn(lang)}
<a class="btn sm" href="tel:${SITE.phoneRaw}">${t.call}</a>
</div>${settingsPanel(lang, alternates)}</header>
<main>${body}</main>
${footer(lang)}
${callPopup(lang)}
${stickyBar(lang)}
<script src="/assets/app.js?v=${VER}" defer></script></body></html>`);
}

// ---------- bileşenler ----------
// ---------- proje medyası (Google Drive → derlemede indirilir → Netlify Image CDN ile WebP) ----------
const MEDIA = {};
async function fetchDriveMedia() {
  const ids = new Set();
  for (const p of PROJECTS) { [p.cover, p.media.hero, p.media.location, ...(p.media.gallery || [])].filter(Boolean).forEach((i) => ids.add(i)); }
  const dir = path.join(OUT, 'media'); fs.mkdirSync(dir, { recursive: true });
  await Promise.all([...ids].map(async (id) => {
    try {
      const r = await fetch(`https://drive.google.com/uc?export=download&id=${id}`, { signal: AbortSignal.timeout(60000) });
      const ct = r.headers.get('content-type') || '';
      if (!r.ok || !ct.startsWith('image/')) throw new Error(`${r.status} ${ct}`);
      const ext = ct.includes('png') ? 'png' : ct.includes('webp') ? 'webp' : 'jpg';
      fs.writeFileSync(path.join(dir, `${id}.${ext}`), Buffer.from(await r.arrayBuffer()));
      MEDIA[id] = `/media/${id}.${ext}`;
    } catch (e) { console.warn('Drive görseli indirilemedi:', id, e.message); }
  }));
}
const cdn = (id, w) => (MEDIA[id] ? `/.netlify/images?url=${encodeURIComponent(MEDIA[id])}&w=${w}&fm=webp&q=72` : null);
const pimg = (id, w, alt, cls = '') => { const u = cdn(id, w); return u ? `<img class="${cls}" src="${u}" alt="${esc(alt)}" loading="lazy">` : ''; };

const OFFICE = [['lobi', 'ACC Plaza lobi ve proje maketi'], ['oturma', 'ACC Plaza müşteri bekleme alanı'], ['amfi', 'ACC Plaza amfi ve etkinlik alanı'], ['sunum', 'ACC Plaza sunum ve eğitim salonu'], ['kahve', 'ACC Plaza kahve köşesi'], ['maket', 'ACC Plaza proje maketleri'], ['calisma', 'ACC Plaza ortak çalışma alanı'], ['toplanti', 'ACC Plaza toplantı masaları']];
const officeGallery = (n = 8) => `<div class="ogal">${OFFICE.slice(0, n).map(([f, a]) => `<figure><img src="/img/ofis/${f}.webp" alt="${a}" loading="lazy" width="900" height="1120"></figure>`).join('')}</div>`;

function projectCards(lang) {
  const t = T[lang];
  return `<div class="pcards">${PROJECTS.map((p) => { const c = p.cover && cdn(p.cover, 800); return `<a class="pcard" href="/projeler/${p.slug}/"><div class="pcimg">${c ? `<img src="${c}" alt="${esc(p.name)}" loading="lazy">` : `<div class="ph pname"><span>${esc(p.name)}</span></div>`}</div><div class="pcbody"><small>${esc(p.area)} · ${esc(p.developer)}</small><h3>${esc(p.name)}</h3><p>${esc(p.card)}</p><span class="more">${t.projectsCta} →</span></div></a>`; }).join('')}</div>`;
}
function pageProjects(lang) {
  const t = T[lang];
  const body = `<section class="wrap sec page"><h1>${t.projects}</h1><p class="sub">${t.projectsLead}</p>${projectCards(lang)}</section>`;
  write(path.join(url(lang, 'projects'), 'index.html'), layout({ lang, title: `${t.projects} | ACC HOMES`, desc: t.projectsLead, canonical: url(lang, 'projects'), alternates: alts('projects'), body }));
}
function pageProject(p) {
  const lang = 'tr'; const t = T.tr;
  const wa = (num, name) => `https://wa.me/${num.replace('+', '')}?text=${encodeURIComponent(`Merhaba, ${p.name} hakkında bilgi almak istiyorum.`)}`;
  const heroImg = p.media.hero ? cdn(p.media.hero, 1920) : null;
  const S = [];
  S.push(`<section class="lhero${heroImg ? '' : ' plain'}"${heroImg ? ` style="background-image:linear-gradient(180deg,rgba(0,0,0,.25),rgba(0,0,0,.6)),url('${heroImg}')"` : ''}><div class="wrap"><nav class="crumbs light"><a href="/">${t.nav.home}</a> / <a href="/projeler/">${t.projects}</a></nav>${p.eyebrow ? `<p class="eyebrow">${esc(p.eyebrow)}</p>` : `<p class="eyebrow">${esc(p.area)} · ${esc(p.developer)}</p>`}<h1>${esc(p.title)}</h1><p class="lsub">${esc(p.sub)}</p>
${p.badges ? `<div class="lbadges">${p.badges.map(([i, h, d]) => `<div><span>${i}</span><b>${esc(h)}</b><small>${esc(d)}</small></div>`).join('')}</div>` : ''}
<div class="ctas"><a class="btn" href="#form">Bilgi ve fiyat listesi isteyin</a>${p.phone ? `<a class="btn ghost light" href="tel:${p.phone}">Hemen ara</a>` : ''}</div></div></section>`);
  if (p.badgeNote) S.push(`<p class="wrap lnote">${esc(p.badgeNote)}</p>`);
  if (p.walk) S.push(`<section class="wrap sec"><h2>Eşsiz Lokasyon</h2><div class="dist"><div><h3>🚶 Yürüme mesafesinde</h3><ul>${p.walk.map(([i, n, d]) => `<li><span>${i} ${esc(n)}</span><b>${esc(d)}</b></li>`).join('')}</ul></div><div><h3>🚗 Sürüş mesafesinde</h3><ul>${p.drive.map(([i, n, d]) => `<li><span>${i} ${esc(n)}</span><b>${esc(d)}</b></li>`).join('')}</ul></div></div>${p.media.location ? `<div class="locimg">${pimg(p.media.location, 1400, `${p.name} konum`)}</div>` : ''}</section>`);
  if (p.tabs) S.push(`<section class="wrap sec"><div class="tabs" role="tablist">${p.tabs.map((x, i) => `<button role="tab" data-tab="${x.id}"${i === 0 ? ' aria-selected="true"' : ''}>${esc(x.name)}<small>${esc(x.kicker)}</small></button>`).join('')}</div>${p.tabs.map((x, i) => `<div class="tabp" data-panel="${x.id}"${i ? ' hidden' : ''}><h2>${esc(x.name)}: ${esc(x.kicker)}</h2><p>${esc(x.text)}</p><div class="cards3"><div><h3>Birimler</h3><ul class="ticks">${x.units.map((u) => `<li>${esc(u)}</li>`).join('')}</ul></div><div class="span2"><h3>Öne çıkanlar</h3><ul class="ticks">${x.feats.map((u) => `<li>${esc(u)}</li>`).join('')}</ul></div></div></div>`).join('')}</section>`);
  if (p.features) S.push(`<section class="lfeat"><div class="wrap"><h2>${esc(p.featuresTitle)}</h2><div class="fgrid2">${p.features.map(([i, x]) => `<div><span>${i}</span><p>${esc(x)}</p></div>`).join('')}</div></div></section>`);
  if (p.phases) S.push(`<section class="wrap sec"><h2>${esc(p.phasesTitle)}</h2><div class="phases">${p.phases.map((x) => `<div class="phase${x.hot ? ' hot' : ''}"><span class="ptag">${esc(x.tag)}</span><h3>${esc(x.name)}</h3><p class="pstat">${esc(x.status)}</p><ul class="ticks">${x.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul><div class="pprice">${esc(x.price)}</div><a class="btn ${x.hot ? '' : 'ghost'}" href="#form">Teklif isteyin</a></div>`).join('')}</div></section>`);
  if (p.plans) S.push(`<section class="wrap sec"><h2>Kat Planları</h2><div class="plans">${p.plans.map((x) => `<div class="plan"><h3>${esc(x.name)}</h3><b class="parea">${esc(x.area)}</b><table class="spec">${x.rows.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}</table><p>${esc(x.note)}</p></div>`).join('')}</div></section>`);
  const gal = (p.media.gallery || []).filter((id) => MEDIA[id]);
  if (gal.length) S.push(`<section class="wrap sec"><h2>Galeri</h2><div class="lgal">${gal.map((id) => `<a href="${cdn(id, 1800)}" target="_blank" rel="noopener">${pimg(id, 900, p.name)}</a>`).join('')}</div></section>`);
  if (p.tours && p.tours.length) S.push(`<section class="wrap sec"><h2>Sanal Tur</h2>${p.tours.map(([n, u]) => `<h3>${esc(n)}</h3><div class="tour"><iframe src="${esc(u)}" loading="lazy" allowfullscreen title="${esc(n)}"></iframe></div>`).join('')}</section>`);
  if (p.devTitle) S.push(`<section class="ldev"><div class="wrap"><h2>${esc(p.devTitle)}</h2><p>${esc(p.devText)}</p></div></section>`);
  if (p.mapQuery) S.push(`<section class="wrap sec"><div class="sechead"><h2>${esc(p.locTitle || 'Konum')}</h2></div>${p.locText ? `<p>${esc(p.locText)}</p>` : ''}<div class="map"><iframe src="https://www.google.com/maps?q=${encodeURIComponent(p.mapQuery)}&output=embed" loading="lazy" title="${esc(p.name)} konum"></iframe></div>${p.links ? `<div class="ctas">${p.links.map(([n, u]) => `<a class="btn ghost" href="${u}" target="_blank" rel="noopener">📍 ${esc(n)}</a>`).join('')}</div>` : ''}</section>`);
  const contacts = p.contacts.length ? p.contacts : p.phone ? [['Proje satış ofisi', p.phone, p.phoneText]] : [['ACC HOMES', SITE.phoneRaw, SITE.phone]];
  S.push(`<section class="lcta" id="form"><div class="wrap lctagrid"><div><h2>Bilgi ve Fiyat Listesi</h2><p>${esc(p.cta)}</p><div class="cbtns">${contacts.map(([n, num, txt]) => `<a class="wabtn" href="${wa(num, n)}" target="_blank" rel="noopener"><b>${esc(n)}</b><span>WhatsApp · ${esc(txt)}</span></a>`).join('')}</div>${p.instagram ? `<p><a href="${p.instagram}" target="_blank" rel="noopener">Instagram’da projeyi takip edin →</a></p>` : ''}</div>
<form class="box form" name="proje-talep" method="POST" data-netlify="true" netlify-honeypot="bot" action="/iletisim/?ok=1"><input type="hidden" name="form-name" value="proje-talep"><input type="hidden" name="proje" value="${esc(p.name)}"><p hidden><input name="bot"></p><h3>Beni arayın</h3><input name="ad" placeholder="Ad Soyad" required><input name="telefon" placeholder="Telefon" required><input name="eposta" type="email" placeholder="E-posta"><button class="btn" type="submit">Beni arayın</button><small>Bilgileriniz yalnızca sizinle iletişim için kullanılır.</small></form></div></section>`);
  const schema = [{ '@context': 'https://schema.org', '@type': 'Residence', name: p.name, description: p.desc, address: { '@type': 'PostalAddress', addressLocality: p.area, addressRegion: 'Antalya', addressCountry: 'TR' } }];
  const og = p.media.hero && MEDIA[p.media.hero] ? MEDIA[p.media.hero] : '/img/acc-plaza-og.jpg';
  write(path.join('/projeler', p.slug, 'index.html'), layout({ lang, title: `${p.name} | ${p.area} | ACC HOMES`, desc: p.desc, canonical: `/projeler/${p.slug}/`, alternates: null, body: S.join('\n'), schema, ogImage: og }));
}

const ICON_IG = `<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 2c-3.1 0-3.5 0-4.7.1-1 0-1.6.2-2 .3-.5.2-.8.4-1.1.7-.3.3-.6.7-.7 1.1-.1.4-.3.9-.3 2-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1 .2 1.6.3 2 .2.5.4.8.7 1.1.3.3.7.6 1.1.7.4.1.9.3 2 .3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1 0 1.6-.2 2-.3.5-.2.8-.4 1.1-.7.3-.3.6-.7.7-1.1.1-.4.3-.9.3-2 .1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1-.2-1.6-.3-2-.2-.5-.4-.8-.7-1.1-.3-.3-.7-.6-1.1-.7-.4-.1-.9-.3-2-.3-1.2-.1-1.6-.1-4.7-.1zm0 3.4a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8zm0 2a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8zm5.6-2.2a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>`;
const ICON_WA = `<svg viewBox="0 0 32 32" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M16 3a13 13 0 0 0-11.3 19.4L3 29l6.8-1.8A13 13 0 1 0 16 3zm0 23.6c-2 0-4-.6-5.7-1.6l-.4-.2-4 1 1.1-3.9-.3-.4A10.6 10.6 0 1 1 16 26.6zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.7 8.7 0 0 1-4.3-3.8c-.3-.6.3-.5.9-1.6.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.6 3.6 0 0 0-1.1 2.7 6.3 6.3 0 0 0 1.3 3.3 14.4 14.4 0 0 0 5.5 4.9c2 .9 2.8.9 3.8.8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.7-.4z"/></svg>`;
const ICON_G = `<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.7z"/><path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.3v3.1A12 12 0 0 0 12 24z"/><path fill="#FBBC05" d="M5.3 14.3a7.2 7.2 0 0 1 0-4.6V6.6H1.3a12 12 0 0 0 0 10.8l4-3.1z"/><path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1c.9-2.9 3.6-4.9 6.7-4.9z"/></svg>`;
const stars = '<span class="stars" aria-hidden="true">★★★★★</span>';
const fmtRating = (lang) => new Intl.NumberFormat(LOCALE[lang], { minimumFractionDigits: 1 }).format(SITE.google.rating);
function trustStrip(lang) {
  const t = T[lang];
  return `<section class="trust"><div class="wrap tgrid">
<a class="tcard" href="${SITE.google.mapsUrl}" target="_blank" rel="noopener">${ICON_G}<div><div class="tline"><b>${fmtRating(lang)}</b>${stars}</div><small>${t.gReviews(SITE.google.reviews)} · ${t.readReviews} →</small></div></a>
<a class="tcard" href="${SITE.instagram.url}" target="_blank" rel="noopener"><span class="ig">${ICON_IG}</span><div><div class="tline"><b>@${SITE.instagram.handle}</b></div><small>${t.igFollow} →</small></div></a>
<a class="tcard" href="${SITE.google.mapsUrl}" target="_blank" rel="noopener"><span class="pin">📍</span><div><div class="tline"><b>ACC PLAZA</b></div><small>Yeşilbahçe, Muratpaşa · ${t.directions} →</small></div></a>
</div></section>`;
}

function reviewsBlock(lang) {
  const t = T[lang];
  const list = lang === 'tr' ? REVIEWS : [...REVIEWS.filter((r) => r.lang === 'en'), ...REVIEWS.filter((r) => r.lang !== 'en')];
  return `<section class="reviews"><div class="wrap">
<div class="sechead"><div><h2>${t.revTitle}</h2><p class="sub sm">${t.revSub}</p></div><a class="gbadge" href="${SITE.google.mapsUrl}" target="_blank" rel="noopener">${ICON_G}<b>${fmtRating(lang)}</b>${stars}<span>${t.gReviews(SITE.google.reviews)}</span></a></div>
<div class="rtrack">${list.map((r) => `<figure class="rcard"><div class="rtop">${stars}<span class="rtopic">${esc(r.topic)}</span></div>
<blockquote lang="${r.lang}">“${esc(r.text)}”</blockquote>
<figcaption><span class="avatar">${esc(r.name.charAt(0))}</span><b>${esc(r.name)}</b>${ICON_G}</figcaption>${r.excerpt ? `<a class="rmore" href="${SITE.google.mapsUrl}" target="_blank" rel="noopener">${t.revMore} →</a>` : ''}</figure>`).join('')}</div>
<p class="rall"><a class="btn ghost" href="${SITE.google.mapsUrl}" target="_blank" rel="noopener">${t.revAll} →</a></p></div></section>`;
}
function igBlock(lang) {
  const t = T[lang]; const nf = new Intl.NumberFormat(LOCALE[lang]);
  const ok = IG.media.filter((m) => m.local);
  const pool = ok.length >= 3 ? ok : IG.media;
  const items = pool.slice(0, Math.min(9, pool.length - (pool.length % 3) || pool.length));
  return `<section class="wrap sec igsec"><div class="ighead">
<div class="igavatar"><span><img src="/img/logo/mark-beyaz.svg" alt="ACC HOMES" width="60" height="43"></span></div>
<div class="igmeta"><div class="igname"><a href="${SITE.instagram.url}" target="_blank" rel="noopener"><b>@${esc(IG.username)}</b></a><a class="btn sm" href="${SITE.instagram.url}" target="_blank" rel="noopener">${ICON_IG} ${t.igFollowBtn}</a></div>
<div class="igstats"><span><b>${nf.format(IG.posts)}</b> ${t.igPosts}</span><span><b>${nf.format(IG.followers)}</b> ${t.igFollowers}</span></div>
<p class="igbio"><b>${esc(IG.name)}</b><br>${esc(IG.biography).replace(/\n/g, '<br>')}</p></div></div>
<div class="iggrid">${items.map((m) => `<a class="igitem" href="${esc(m.permalink)}" target="_blank" rel="noopener" title="${esc(m.caption)}"><img src="${esc(m.local || m.image)}" alt="${esc(m.caption)}" loading="lazy">${m.type === 'VIDEO' ? '<span class="play" aria-hidden="true">▶</span>' : ''}<span class="igcap">${esc(m.caption)}</span></a>`).join('')}</div></section>`;
}
function stickyBar(lang) {
  const t = T[lang];
  return `<div class="cbar" role="navigation" aria-label="${t.nav.contact}"><a class="cbtn call" href="tel:${SITE.phoneRaw}"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>${t.barCall}</a><a class="cbtn wa" href="${waLink(t.waGeneral)}" target="_blank" rel="noopener"><svg viewBox="0 0 32 32" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M16 3a13 13 0 0 0-11.3 19.4L3 29l6.8-1.8A13 13 0 1 0 16 3zm0 23.6c-2 0-4-.6-5.7-1.6l-.4-.2-4 1 1.1-3.9-.3-.4A10.6 10.6 0 1 1 16 26.6zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.7 8.7 0 0 1-4.3-3.8c-.3-.6.3-.5.9-1.6.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.6 3.6 0 0 0-1.1 2.7 6.3 6.3 0 0 0 1.3 3.3 14.4 14.4 0 0 0 5.5 4.9c2 .9 2.8.9 3.8.8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.7-.4z"/></svg>${t.barWa}</a></div>`;
}

function fill(html, lang) {
  const t = T[lang];
  const nf = new Intl.NumberFormat(LOCALE[lang]);
  const stats = `<div class="stats"><div><b>1.000 m²</b><span>ACC Plaza</span></div><div><b>~50</b><span>${s('partners', lang)}</span></div><div><b>10</b><span>${s('langsSvc', lang)}</span></div><div><b>${fmtRating(lang)} ★</b><span>${t.gReviews(nf.format(SITE.google.reviews))}</span></div></div>`;
  const ph = (f, w) => (TEAM_LOCAL[f] ? `/.netlify/images?url=${encodeURIComponent(TEAM_LOCAL[f])}&w=${w}&fm=webp&q=75` : null);
  const team = `<div class="team">${TEAM.map((p) => { const u = ph(STAFF_PHOTOS[p.name], 320); return `<div class="member">${u ? `<img src="${u}" alt="${esc(p.name)}, ${esc(p.role.tr)} – ACC HOMES" loading="lazy" width="160" height="160">` : `<span class="mav">${esc(p.initials)}</span>`}<b>${p.link ? `<a href="${url(lang, p.link)}">${esc(p.name)}</a>` : esc(p.name)}</b><small>${esc(p.role[lang] || p.role.en)}</small></div>`; }).join('')}</div>`;
  const partners = `<div class="team partners">${PARTNERS.map((p) => { const u = ph(p.photo, 320); const ini = p.name.split(' ').map((x) => x[0]).slice(0, 2).join(''); return `<div class="member">${u ? `<img src="${u}" alt="${esc(p.name)}, ${PARTNER_ROLE.tr} – ACC HOMES" loading="lazy" width="160" height="160">` : `<span class="mav">${esc(ini)}</span>`}<b>${esc(p.name)}</b><small>${esc((p.sworn ? SWORN_ROLE : PARTNER_ROLE)[lang])}</small>${p.langs.length ? `<small class="mlang">${p.langs.map((c) => LANG_NAMES[lang][c]).join(' · ')}</small>` : ''}</div>`; }).join('')}</div>`;
  const langs = `<ul class="chips">${LANGS_SPOKEN[lang].map((l) => `<li>${l}</li>`).join('')}</ul>`;
  const waJoin = waLink(s('waJoin', lang));
  return html.replace(/\{\{URL:(\w+)\}\}/g, (_, k) => (k === 'list' || k === 'contact' || k === 'guide' ? url(lang, k) : url(lang, k)))
    .replaceAll('{{TIMELINE}}', `<ol class="timeline">${TIMELINE[lang].map(([y, x]) => `<li><b>${y}</b><p>${x}</p></li>`).join('')}</ol>`).replaceAll('{{STATS}}', stats).replaceAll('{{OFFICE}}', officeGallery(8)).replaceAll('{{TEAMPHOTOS}}', `<figure class="tmain"><img src="/img/ekip/ekip-acc-plaza-2026.webp" alt="ACC HOMES ekibi ACC Plaza önünde, Kasım 2026" width="1080" height="680"><figcaption>${s('teamCap', lang)}</figcaption></figure>` + '<div class="tphotos"><img src="/img/ekip/ekip-acc.webp" alt="ACC HOMES ekibi" loading="lazy" width="1600" height="533"><img src="/img/ekip/ekip-antalle.webp" alt="ACC HOMES ekibi Antalle Concept Houses açılışında" loading="lazy" width="1600" height="533"></div>').replaceAll('{{TEAM}}', team).replaceAll('{{PARTNERS}}', partners).replaceAll('{{LANGS}}', langs)
    .replaceAll('{{WA_JOIN}}', waJoin).replaceAll('{{WA}}', waLink(t.waGeneral)).replaceAll('{{TEL}}', `tel:${SITE.phoneRaw}`)
    .replaceAll('{{MAPS}}', SITE.google.mapsUrl).replaceAll('{{IG}}', SITE.instagram.url).replaceAll('{{IG_CANER}}', 'https://www.instagram.com/alicanercan.therealtor/')
    .replaceAll('{{RATING}}', `${fmtRating(lang)} ★ · ${t.gReviews(nf.format(SITE.google.reviews))}`).replaceAll('{{SELLFORM}}', sellForm(lang)).replaceAll('{{REVIEWS}}', nf.format(SITE.google.reviews))
    .replaceAll('{{BROKER_PHOTO}}', SITE.brokerPhoto ? `<img src="${SITE.brokerPhoto}" alt="Ali Caner Can, Broker & Owner – ACC HOMES" width="600" height="655">` : '<span class="mav big">AC</span>')
    .replaceAll('{{BROKER_STATS}}', brokerStats(lang)).replaceAll('{{BROKER_GALLERY}}', brokerGallery(lang)).replaceAll('{{BROKER_LINKS}}', brokerLinks(lang));
}
// Broker Ali Caner Can (broker.mjs): portre ve görseller derlemede indirilir
const BROKER_LOCAL = {};
async function fetchBrokerImages() {
  const dir = path.join(OUT, 'img', 'broker'); fs.mkdirSync(dir, { recursive: true });
  for (const [u, name] of [BROKER.portrait, ...BROKER.remote]) {
    for (let i = 0; i < 3 && !BROKER_LOCAL[name]; i++) {
      try { const r = await fetch(u, { signal: AbortSignal.timeout(30000), headers: { 'User-Agent': 'Mozilla/5.0 (ACC HOMES site build)' } }); if (!r.ok) throw new Error(r.status); fs.writeFileSync(path.join(dir, name), Buffer.from(await r.arrayBuffer())); BROKER_LOCAL[name] = `/img/broker/${name}`; } catch (e) { if (i === 2) console.warn('Broker görseli indirilemedi:', name, e.message); }
    }
  }
  const p = BROKER_LOCAL[BROKER.portrait[1]];
  if (p && !SITE.brokerPhoto) SITE.brokerPhoto = `/.netlify/images?url=${encodeURIComponent(p)}&w=600&fm=webp&q=78`;
}
const bT = (o, lang) => o[lang] || o.en;
const brokerStats = (lang) => `<div class="stats">${BROKER.stats.map(([n, l]) => `<div><b>${n}</b><span>${esc(bT(l, lang))}</span></div>`).join('')}</div>`;
function brokerGallery(lang) {
  const L = GL(lang);
  const items = BROKER.gallery.map(([src, cap]) => {
    const real = src.startsWith('remote:') ? BROKER_LOCAL[src.slice(7)] && `/.netlify/images?url=${encodeURIComponent(BROKER_LOCAL[src.slice(7)])}&w=800&fm=webp&q=74` : src;
    return real ? `<figure><img src="${real}" alt="${esc(cap[L] || cap.en)} – Ali Caner Can" loading="lazy" width="800" height="533"><figcaption>${esc(cap[L] || cap.en)}</figcaption></figure>` : '';
  }).join('');
  return `<h2>${bT(BROKER.ui.gallery, lang)}</h2><div class="sgal">${items}</div>`;
}
const brokerLinks = (lang) => `<h3>${bT(BROKER.ui.links, lang)}</h3><ul class="chips blinks">${BROKER.links.map(([n, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${n} ↗</a></li>`).join('')}</ul>`;
function brokerBlock(lang) {
  const h = BROKER.home;
  const img = SITE.brokerPhoto ? `<img src="${SITE.brokerPhoto}" alt="Ali Caner Can, Broker & Owner – ACC HOMES" loading="lazy" width="600" height="655">` : '<span class="mav big">AC</span>';
  return `<section class="hbroker"><div class="wrap"><div class="hbimg">${img}</div><div class="hbtext"><p class="eyebrow">${bT(h.eyebrow, lang)}</p><h2>${bT(h.title, lang)}</h2><p>${esc(bT(h.text, lang))}</p>${brokerStats(lang)}<div class="ctas"><a class="btn" href="${url(lang, 'broker')}">${bT(h.cta, lang)}</a><a class="btn ghost" href="${waLink(T[lang].waGeneral)}" target="_blank" rel="noopener">${bT(h.wa, lang)}</a></div></div></div></section>`;
}
function plazaBlock(lang) {
  const p = PLAZA[lang];
  return `<section class="plaza"><div class="wrap">
<div class="pimg"><img src="/img/acc-plaza-1200.webp" alt="ACC PLAZA — ACC HOMES International Real Estate, Yeşilbahçe, Muratpaşa, Antalya" loading="lazy" width="1200" height="470"></div>
<div class="ptext"><p class="eyebrow">${p.eyebrow}</p><h2>${p.title}</h2><p class="psub">${p.sub}</p>${p.body.map((x) => `<p>${x}</p>`).join('')}</div>
<div class="pbadges">${p.badges.map(([i, h, d]) => `<div><span class="pi">${i}</span><b>${h}</b><small>${d}</small></div>`).join('')}</div>
${officeGallery(4)}
<div class="ctas"><a class="btn" href="${url(lang, 'team')}">${p.cta1}</a><a class="btn ghost" href="${SITE.google.mapsUrl}" target="_blank" rel="noopener">${p.cta2}</a></div>
</div></section>`;
}
function pageCorporate(key, lang) {
  const P = PAGES[key]; const c = P[lang] || P.en;
  const hero = key === 'about' ? `<div class="phero"><img src="/img/acc-plaza-1200.webp" alt="ACC PLAZA" width="1200" height="470"></div>` : '';
  const body = `<section class="wrap sec narrow page">${hero}<nav class="crumbs"><a href="${home(lang)}">${T[lang].nav.home}</a> / <span>${esc(P.nav[lang] || P.nav.en)}</span></nav>
<h1>${esc(c.title)}</h1><p class="sub">${esc(c.lead)}</p>${fill(key === 'broker' && !c.html.includes('{{BROKER_STATS}}') ? c.html.replace('</div></div>', '</div></div>\n{{BROKER_STATS}}').replace('<div class="ctas">', '{{BROKER_GALLERY}}\n{{BROKER_LINKS}}\n<div class="ctas">') : c.html, lang)}</section>${key === 'about' ? reviewsBlock(lang) : ''}`;
  const schema = key === 'broker' ? [{ '@context': 'https://schema.org', '@type': 'Person', name: 'Ali Caner Can', jobTitle: 'Broker & Owner', description: c.desc, url: SITE.domain + url(lang, key), image: SITE.brokerPhoto ? SITE.domain + SITE.brokerPhoto : undefined, birthPlace: 'Antalya', worksFor: { '@type': 'RealEstateAgent', name: SITE.brand, url: SITE.domain }, alumniOf: [{ '@type': 'CollegeOrUniversity', name: 'Yıldız Teknik Üniversitesi' }, { '@type': 'HighSchool', name: 'Kuleli Askeri Lisesi' }], knowsLanguage: ['tr', 'en', 'ru', 'ar', 'fa', 'de'], memberOf: [{ '@type': 'Organization', name: 'ANTİAD' }], sameAs: BROKER.links.map(([, u]) => u) }] : [];
  write(path.join(url(lang, key), 'index.html'), layout({ lang, title: `${c.title} | ACC HOMES`, desc: c.desc, canonical: url(lang, key), alternates: alts(key), body, schema, ogImage: key === 'broker' && SITE.brokerPhoto ? SITE.brokerPhoto : '/img/acc-plaza-og.jpg' }));
}
const postFor = (p, lang) => p[lang] || p.en || p.tr;
function pageBlog(lang) {
  const t = T[lang];
  const body = `<section class="wrap sec narrow page"><h1>${t.blog}</h1><p class="sub">${t.blogLead}</p>
<div class="posts">${POSTS.map((p) => { const c = postFor(p, lang); return `<article class="post"><time>${p.date}</time><h2><a href="${url(lang, 'blog', p.slug)}">${esc(c.title)}</a></h2><p>${esc(c.desc)}</p><a class="more" href="${url(lang, 'blog', p.slug)}">${t.readMore} →</a></article>`; }).join('')}</div></section>`;
  write(path.join(url(lang, 'blog'), 'index.html'), layout({ lang, title: `${t.blog} | ACC HOMES`, desc: t.blogLead, canonical: url(lang, 'blog'), alternates: alts('blog'), body }));
  for (const p of POSTS) {
    const c = postFor(p, lang);
    const pb = `<article class="wrap sec narrow page"><nav class="crumbs"><a href="${home(lang)}">${t.nav.home}</a> / <a href="${url(lang, 'blog')}">${t.blog}</a></nav><time>${p.date}</time><h1>${esc(c.title)}</h1><div class="prose">${fill(c.html, lang)}</div></article>`;
    const schema = [{ '@context': 'https://schema.org', '@type': 'BlogPosting', headline: c.title, description: c.desc, datePublished: p.date, author: { '@type': 'Person', name: 'Ali Caner Can' }, publisher: { '@type': 'Organization', name: SITE.brand } }];
    write(path.join(url(lang, 'blog', p.slug), 'index.html'), layout({ lang, title: `${c.title} | ACC HOMES`, desc: c.desc, canonical: url(lang, 'blog', p.slug), alternates: alts('blog', () => p.slug), body: pb, schema }));
  }
}

// ---------- alıcı rehberi ----------
const gUrl = (lang, g) => (lang === 'tr' ? `/${GUIDE_SEG.tr}/${g.slug}/` : `/en/${GUIDE_SEG.en}/${g.en}/`);
const gC = (g, lang) => (lang === 'tr' ? g.tr : g.enc);
// ---------- bölge rehberleri ----------
const aUrl = (lang, a) => (lang === 'tr' ? `/${SEGS.areas.tr}/${a.slug}/` : `/en/${SEGS.areas.en}/${a.slugEn}/`);
function areaCards(lang) {
  const L = GL(lang);
  return `<div class="gcards">${AREA_GUIDES.map((a) => `<a class="gcard" href="${aUrl(L, a)}"><span>${a.icon}</span><h3>${esc(a[L].title)}</h3><p>${esc(a[L].short)}</p></a>`).join('')}</div>`;
}
function pageAreaHub(lang) {
  const body = `<section class="wrap sec page"><nav class="crumbs"><a href="${home(lang)}">${T[lang].nav.home}</a> / <span>${s('areasTitle', lang)}</span></nav><h1>${s('areasTitle', lang)}</h1><p class="sub">${s('areasLead', lang)}</p>${['tr', 'en'].includes(lang) ? '' : `<p class="note">${s('guideEnNote', lang)}</p>`}${areaCards(lang)}</section>`;
  write(path.join(url(lang, 'areas'), 'index.html'), layout({ lang, title: `${s('areasTitle', lang)} | ACC HOMES`, desc: s('areasLead', lang), canonical: url(lang, 'areas'), alternates: alts('areas'), body }));
}
function pageAreaItem(a, lang) {
  const c = a[lang]; const t = T[lang];
  const others = AREA_GUIDES.filter((x) => x !== a).map((x) => `<a href="${aUrl(lang, x)}">${x.icon} ${esc(x[lang].title)}</a>`).join('');
  const body = `<section class="wrap sec page"><nav class="crumbs"><a href="${home(lang)}">${t.nav.home}</a> / <a href="${url(lang, 'areas')}">${s('areasTitle', lang)}</a></nav><div class="glayout"><article class="prose"><h1>${a.icon} ${esc(c.title)}</h1><p class="sub">${esc(c.short)}</p>${c.html}
<div class="ctas"><a class="btn" href="${url(lang, 'list')}?ilce=${encodeURIComponent(a.ilce)}">${s('areaListings', lang).replace('{{A}}', a.ilce)}</a><a class="btn ghost" href="${waLink(t.waGeneral)}" target="_blank" rel="noopener">${s('askConsultant', lang)}</a></div>
<p class="note">${s('areaNote', lang)}</p></article><aside class="gside"><b>${s('areasTitle', lang)}</b>${others}</aside></div></section>`;
  const schema = [{ '@context': 'https://schema.org', '@type': 'Article', headline: c.title, description: c.short, inLanguage: lang, publisher: { '@type': 'Organization', name: SITE.brand }, about: { '@type': 'Place', name: `${a.ilce}, Antalya` } }];
  write(aUrl(lang, a) + 'index.html', layout({ lang, title: `${c.title} | ACC HOMES`, desc: c.short, canonical: aUrl(lang, a), alternates: { tr: aUrl('tr', a), en: aUrl('en', a) }, body, schema }));
}
function calcBlock(lang) {
  const tr = lang === 'tr';
  return `<div class="calc box" data-calc><h3>${s('calcTitle', lang)}</h3>
<label>${s('calcPrice', lang)}<input type="number" min="0" step="10000" inputmode="numeric" data-price placeholder="${s('calcPh', lang)}"></label>
<label class="chk"><input type="checkbox" data-foreign> ${s('calcForeign', lang)}</label>
<table class="spec"><tr><th>${s('calcDeed', lang)}</th><td data-out="deed">—</td></tr>
<tr><th>${s('calcAgency', lang)}</th><td data-out="agency">—</td></tr>
<tr><th>${s('calcMisc', lang)}</th><td>${s('calcMiscV', lang)}</td></tr>
<tr class="fx" hidden><th>${s('calcFx', lang)}</th><td>${s('calcFxV', lang)}</td></tr>
<tr class="tot"><th>${s('calcTotal', lang)}</th><td data-out="total">—</td></tr></table>
<p class="note">${s('calcNote', lang)}</p></div>`;
}
function faqHtml(lang) {
  const list = FAQ[lang] || FAQ.en;
  return `<div class="faq">${list.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>`;
}
function guideSide(lang, cur) {
  const L = GL(lang);
  return `<aside class="gside"><b>${GUIDE_TITLE[lang]}</b>${GUIDES.map((g) => `<a href="${gUrl(L, g)}"${g === cur ? ' aria-current="true"' : ''}>${g.icon} ${esc(gC(g, L).title)}</a>`).join('')}<a href="${url(lang, 'buyersguide')}#sss">❓ ${s('faqShort', lang)}</a></aside>`;
}
function pageGuideHub(lang) {
  const L = GL(lang);
  const tr = lang === 'tr';
  const body = `<section class="wrap sec page"><nav class="crumbs"><a href="${home(lang)}">${T[lang].nav.home}</a> / <span>${GUIDE_TITLE[lang]}</span></nav><h1>${GUIDE_TITLE[lang]}</h1><p class="sub">${GUIDE_LEAD[lang]}</p>
<div class="gcards">${GUIDES.map((g) => `<a class="gcard" href="${gUrl(L, g)}"><span>${g.icon}</span><h3>${esc(gC(g, L).title)}</h3><p>${esc(gC(g, L).short)}</p></a>`).join('')}</div>
<h2>${s('areasTitle', lang)}</h2>${areaCards(lang)}
<h2 id="sss">${s('faq', lang)}</h2>${faqHtml(L)}
<div class="ctas"><a class="btn" href="${waLink(T[lang].waGeneral)}" target="_blank" rel="noopener">${s('askWa', lang)}</a><a class="btn ghost" href="${url(lang, 'contact')}">${T[lang].nav.contact}</a></div>
<p class="note">${s('updated', lang)}: ${GUIDE_UPDATED}</p></section>`;
  const schema = [{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: (FAQ[L]).map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }];
  write(path.join(url(lang, 'buyersguide'), 'index.html'), layout({ lang, title: `${GUIDE_TITLE[lang]} | ACC HOMES`, desc: GUIDE_LEAD[lang], canonical: url(lang, 'buyersguide'), alternates: alts('buyersguide'), body, schema }));
}
function pageGuideItem(g, lang) {
  const c = gC(g, lang);
  const html = c.html.replaceAll('{{CALC}}', calcBlock(lang));
  const body = `<section class="wrap sec page"><nav class="crumbs"><a href="${home(lang)}">${T[lang].nav.home}</a> / <a href="${url(lang, 'buyersguide')}">${GUIDE_TITLE[lang]}</a></nav><div class="glayout"><article class="prose"><h1>${g.icon} ${esc(c.title)}</h1><p class="sub">${esc(c.short)}</p>${html}
<div class="ctas"><a class="btn" href="${waLink(T[lang].waGeneral)}" target="_blank" rel="noopener">${s('askConsultant', lang)}</a></div></article>${guideSide(lang, g)}</div></section>`;
  const alt = { tr: gUrl('tr', g), en: gUrl('en', g) };
  write(gUrl(lang, g) + 'index.html', layout({ lang, title: `${c.title} | ${GUIDE_TITLE[lang]} | ACC HOMES`, desc: c.short, canonical: gUrl(lang, g), alternates: alt, body }));
}
function pageReviews(lang) {
  const t = T[lang];
  const body = `<section class="wrap sec page"><nav class="crumbs"><a href="${home(lang)}">${t.nav.home}</a> / <span>${t.revTitle}</span></nav><h1>${t.revTitle}</h1><p class="sub">${t.revSub}</p></section>${reviewsBlock(lang)}`;
  write(path.join(url(lang, 'reviews'), 'index.html'), layout({ lang, title: `${t.revTitle} | ACC HOMES`, desc: t.revSub, canonical: url(lang, 'reviews'), alternates: alts('reviews'), body }));
}
// ---------- ana sayfa banner + arama ----------
function heroSlider(lang) {
  const t = T[lang]; const nv = (k) => PAGES[k].nav[lang] || PAGES[k].nav.en;
  const slides = [
    { img: '/img/acc-plaza-1200.webp', eyebrow: SITE.slogan[lang], title: t.heroTitle, sub: t.heroSub, href: url(lang, 'list'), cta: t.heroCta, h1: true },
    ...PROJECTS.filter((p) => p.media.hero && MEDIA[p.media.hero]).map((p) => ({ img: cdn(p.media.hero, 1600), eyebrow: `${p.area} · ${p.developer}`, title: p.title, sub: p.sub, href: `/projeler/${p.slug}/`, cta: t.projectsCta })),
    { img: '/img/ofis/sunum.webp', eyebrow: s('dlPageTitle', lang), title: s('dlCostTitle', lang), sub: s('dlCostSub', lang), href: url(lang, 'downloads'), cta: s('dlCta', lang), red: true },
    { img: '/img/ofis/toplanti.webp', eyebrow: s('dlPageTitle', lang), title: s('dlCitTitle', lang), sub: s('dlCitSub', lang), href: url(lang, 'downloads'), cta: s('dlCta', lang), red: true },
    { img: '/img/ofis/oturma.webp', eyebrow: nv('sell'), title: PAGES.sell[lang] ? PAGES.sell[lang].title : PAGES.sell.en.title, sub: '', href: url(lang, 'sell'), cta: s('sellCta', lang), red: true },
  ];
  const ov = (r) => (r ? 'linear-gradient(90deg,rgba(150,18,32,.92),rgba(224,42,60,.55))' : 'linear-gradient(90deg,rgba(20,4,6,.78),rgba(20,4,6,.2))');
  return `<section class="slider hero2" aria-roledescription="carousel"><div class="slides">${slides.map((x) => `<div class="slide" style="background-image:${ov(x.red)},url('${x.img}')"><div class="wrap"><p class="eyebrow">${esc(x.eyebrow)}</p>${x.h1 ? `<h1>${esc(x.title)}</h1>` : `<h2>${esc(x.title)}</h2>`}${x.sub ? `<p class="ssub">${esc(x.sub)}</p>` : ''}<a class="btn" href="${x.href}">${esc(x.cta)} →</a></div></div>`).join('')}</div><button class="sarrow prev" type="button" data-sprev aria-label="‹">‹</button><button class="sarrow next" type="button" data-snext aria-label="›">›</button><div class="dots">${slides.map((_, i) => `<button aria-label="${i + 1}"${i ? '' : ' aria-current="true"'}></button>`).join('')}</div></section>`;
}
function areaTabs(lang, mode) {
  const used = AREAS.filter(([a]) => mode !== 'filter' || LISTINGS.some((l) => l.ilce === a));
  const tab = (a, ic, lab) => mode === 'filter' ? `<button type="button" data-area="${esc(a)}"${a ? '' : ' aria-pressed="true"'}>${ic} ${esc(lab)}</button>` : `<a href="${url(lang, 'list')}${a ? `?ilce=${encodeURIComponent(a)}` : ''}">${ic} ${esc(lab)}</a>`;
  return `<div class="atabs${mode === 'filter' ? ' small' : ''}"${mode === 'filter' ? ' data-areatabs' : ''}>${tab('', '🔎', s('allAreas', lang))}${used.map(([a, ic]) => tab(a, ic, a)).join('')}</div>`;
}
function consultBar(lang) {
  const t = T[lang];
  return `<section class="consult"><form class="wrap cbform" name="danismanlik" method="POST" data-netlify="true" netlify-honeypot="bot" action="${url(lang, 'contact')}?ok=1"><input type="hidden" name="form-name" value="danismanlik"><input type="hidden" name="dil" value="${lang}"><p hidden><input name="bot"></p>
<b class="cbt">💬 ${s('consultTitle', lang)}</b><input name="ad" placeholder="${t.name} *" required autocomplete="name"><div class="cptel"><select name="ulke_kodu" aria-label="${s('dialCode', lang)}">${DIAL.map(([c, d]) => `<option value="${d}"${d === (DEF_DIAL[lang] || '+90') && c !== 'KZ' ? ' selected' : ''}>${c} ${d}</option>`).join('')}</select><input name="telefon" type="tel" placeholder="${t.phone} *" required></div><input name="eposta" type="email" placeholder="${s('email', lang)}"><label class="chk mini"><input type="checkbox" name="kvkk_onay" value="evet" required> <a href="${url(lang, 'privacy')}" target="_blank" rel="noopener">KVKK</a> ✓</label><button class="btn" type="submit">${s('consultBtn', lang)} →</button></form></section>`;
}
function citizenshipBand(lang) {
  const L = GL(lang); const g = GUIDES.find((x) => /vatandas|citizen/.test(x.slug + (x.en && x.en.slug)));
  return `<section class="citband"><div class="wrap cbgrid"><div class="cbimg"><img src="/img/ofis/maket.webp" alt="ACC Plaza" loading="lazy" width="900" height="1120"></div><div class="cbtext"><p class="eyebrow">ACC HOMES</p><h2>${s('citTitle', lang)}</h2><p>${s('citText', lang)}</p><div class="ctas"><a class="btn" href="${g ? gUrl(L, g) : url(lang, 'buyersguide')}">${s('citCta', lang)} →</a><a class="btn ghost" href="${url(lang, 'list')}?etiket=vatandaslik">${s('tag_vatandaslik', lang)}</a></div></div></div></section>`;
}
function whyBlock(lang) {
  const t = T[lang]; const ic = ['📊', '🌍', '🧾', '🎬'];
  return `<section class="wrap sec"><div class="sechead"><h2>${t.why}</h2></div><div class="whyg">${t.whyItems.map(([h, p], i) => `<div><span>${ic[i]}</span><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join('')}</div></section>`;
}
function talkBlock(lang) {
  const t = T[lang];
  return `<section class="talk"><div class="wrap talkgrid"><form class="box form" name="danisman-gorusme" method="POST" data-netlify="true" netlify-honeypot="bot" action="${url(lang, 'contact')}?ok=1"><input type="hidden" name="form-name" value="danisman-gorusme"><input type="hidden" name="dil" value="${lang}"><p hidden><input name="bot"></p>
<h2>${s('talkTitle', lang)}</h2><p class="sub sm">${s('talkSub', lang)}</p>
<input name="ad" placeholder="${t.name} *" required><div class="cptel"><select name="ulke_kodu">${DIAL.map(([c, d]) => `<option value="${d}"${d === (DEF_DIAL[lang] || '+90') && c !== 'KZ' ? ' selected' : ''}>${c} ${d}</option>`).join('')}</select><input name="telefon" type="tel" placeholder="${t.phone} *" required></div><input name="eposta" type="email" placeholder="${s('email', lang)}"><input name="butce" placeholder="${s('budget', lang)}"><textarea name="mesaj" rows="3" placeholder="${t.msg}"></textarea>
<label class="chk"><input type="checkbox" name="kvkk_onay" value="evet" required> <span>${s('consent', lang).replace('{{LINK}}', `<a href="${url(lang, 'privacy')}" target="_blank" rel="noopener">${PAGES.privacy.nav[lang] || PAGES.privacy.nav.en}</a>`)} *</span></label><button class="btn" type="submit">${t.send}</button></form>
<div class="talkimg">${officeGallery(4)}</div></div></section>`;
}
const DL = [
  { key: 'cost', title: 'dlCostTitle', sub: 'dlCostSub', file: { tr: '/rehber/acc-homes-2026-antalya-alim-maliyeti.pdf', en: '/rehber/acc-homes-2026-antalya-buying-costs.pdf' } },
  { key: 'cit', title: 'dlCitTitle', sub: 'dlCitSub', file: { tr: '/rehber/acc-homes-yatirimla-vatandaslik-rehberi.pdf', en: '/rehber/acc-homes-citizenship-by-investment-guide.pdf' } },
];
function pageDownloads(lang) {
  const t = T[lang]; const L = GL(lang);
  const cards = DL.map((d) => `<div class="dlcard"><span>📘</span><h3>${s(d.title, lang)}</h3><p>${s(d.sub, lang)}</p></div>`).join('');
  const body = `<section class="wrap sec narrow page"><nav class="crumbs"><a href="${home(lang)}">${t.nav.home}</a> / <span>${s('dlPageTitle', lang)}</span></nav><h1>${s('dlPageTitle', lang)}</h1><p class="sub">${s('dlPageLead', lang)}</p><div class="dlgrid">${cards}</div>
<form class="box form sellform" name="rehber-indir" method="POST" data-netlify="true" netlify-honeypot="bot" action="${url(lang, 'downloads')}hazir/"><input type="hidden" name="form-name" value="rehber-indir"><input type="hidden" name="dil" value="${lang}"><p hidden><input name="bot"></p>
<div class="fgrid3"><label>${t.name} *<input name="ad" required></label><label>${s('email', lang)} *<input name="eposta" type="email" required></label><label>${t.phone}<input name="telefon" type="tel"></label></div>
<label class="chk"><input type="checkbox" name="kvkk_onay" value="evet" required> <span>${s('consent', lang).replace('{{LINK}}', `<a href="${url(lang, 'privacy')}" target="_blank" rel="noopener">${PAGES.privacy.nav[lang] || PAGES.privacy.nav.en}</a>`)} *</span></label>
<button class="btn" type="submit">${s('dlCta', lang)} →</button></form></section>`;
  write(path.join(url(lang, 'downloads'), 'index.html'), layout({ lang, title: `${s('dlPageTitle', lang)} | ACC HOMES`, desc: s('dlPageLead', lang), canonical: url(lang, 'downloads'), alternates: alts('downloads'), body }));
  const ready = `<section class="wrap sec narrow page"><h1>✓ ${s('dlReady', lang)}</h1><div class="dlgrid">${DL.map((d) => `<a class="dlcard" href="${d.file[L]}" download><span>⬇️</span><h3>${s(d.title, lang)}</h3><p>PDF</p></a>`).join('')}</div><div class="ctas"><a class="btn" href="${waLink(t.waGeneral)}" target="_blank" rel="noopener">${s('askWa', lang)}</a><a class="btn ghost" href="${url(lang, 'list')}">${t.seeAll}</a></div></section>`;
  write(path.join(url(lang, 'downloads'), 'hazir', 'index.html'), layout({ lang, title: `${s('dlReady', lang)} | ACC HOMES`, desc: '', canonical: url(lang, 'downloads') + 'hazir/', alternates: null, body: ready, noindex: true }));
}
function searchBox(lang) {
  const tr = lang === 'tr'; const f = T[lang].filters;
  const dists = DISTS;
  return `<form class="hsearch" action="${url(lang, 'list')}" method="get"><label>${f.tip}<select name="tip"><option value="">${f.any}</option><option value="Satılık">${f.sale}</option><option value="Kiralık">${f.rent}</option></select></label>
<label>${s('type', lang)}<select name="tur"><option value="">${f.any}</option><option>Daire</option><option>Villa</option><option>Dubleks</option><option>Ticari</option><option>Arsa</option></select></label>
<label>${s('district', lang)}<select name="ilce"><option value="">${f.any}</option>${dists.map((d) => `<option>${d}</option>`).join('')}</select></label>
<label>${f.rooms}<select name="oda"><option value="">${f.any}</option><option>1+1</option><option>2+1</option><option>3+1</option><option>4+1</option><option>5+1</option></select></label>
<button class="btn" type="submit">${s('search', lang)}</button></form>`;
}
function blogStrip(lang) {
  const t = T[lang];
  return `<section class="wrap sec"><div class="sechead"><h2>${t.blog}</h2><a href="${url(lang, 'blog')}">${t.readMore} →</a></div><div class="bstrip">${POSTS.slice(0, 3).map((p) => { const c = postFor(p, lang); return `<a class="post" href="${url(lang, 'blog', p.slug)}"><time>${p.date}</time><h3>${esc(c.title)}</h3><p>${esc(c.desc)}</p></a>`; }).join('')}<a class="post gpost" href="${url(lang, 'buyersguide')}"><span>🧭</span><h3>${GUIDE_TITLE[lang]}</h3><p>${GUIDE_LEAD[lang]}</p></a></div></section>`;
}
function mapBlock(lang) {
  const t = T[lang];
  return `<section class="wrap sec"><div class="sechead"><h2>${t.mapTitle}</h2><a href="${SITE.google.mapsUrl}" target="_blank" rel="noopener">${t.directions} →</a></div>
<div class="map"><iframe src="${SITE.google.embedUrl}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="${t.mapTitle}" allowfullscreen></iframe></div></section>`;
}

function card(l, lang) {
  const t = T[lang];
  const cover = l.foto && l.foto[0];
  const tags = (l.etiketler || []).filter((k) => TAGS[k]);
  return `<article class="card" data-id="${esc(l.id)}" data-tags="${tags.join(' ')}" data-tip="${esc(l.tip)}" data-tur="${esc(l.tur)}" data-ilce="${esc(l.ilce)}" data-oda="${esc(l.oda)}" data-fiyat="${l.fiyat || 0}" data-tarih="${esc(l.tarih || '')}">
${cardTools(l, lang)}
<a href="${url(lang, 'listing', slugOf(l))}">
<div class="img">${cover ? `<img src="${esc(cover)}" alt="${esc([l.mahalle, l.ilce, l.oda, l.tur].join(' '))}" loading="lazy">` : placeholder}<span class="tag">${tipLabel(l, lang)}</span>${statusBadge(l, lang)}</div>
<div class="body"><div class="price"${priceAttrs(l)}>${fmtPrice(l, lang)}</div><h3>${esc(pick(l.baslik, lang))}</h3>${tags.length ? `<div class="ltags">${tags.slice(0, 3).map((k) => `<span class="lt-${k}">${tagLabel(k, lang)}</span>`).join('')}</div>` : ''}
<div class="meta"><span>${esc(l.oda || '')}</span>${l.net ? `<span data-m2="${+l.net}">${+l.net} m²</span>` : ''}<span>${esc([l.mahalle, l.ilce].filter(Boolean).join(', '))}</span></div></div></a>${enqBtn(l, lang)}</article>`;
}

const TAGS = { vatandaslik: '🛂', oturum: '🪪', deniz: '🌊', ilkSira: '🏖️', esyali: '🛋️', firsat: '🔥', yeni: '✨' };
const tagLabel = (k, lang) => `${TAGS[k]} ${s('tag_' + k, lang)}`;
const cardTools = (l, lang) => `<div class="ctools"><button type="button" class="favbtn" data-fav="${esc(l.id)}" aria-pressed="false" aria-label="${s('favAdd', lang)}" title="${s('favAdd', lang)}"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.2 4.3 2.4.7-1.2 2.2-2.4 4.3-2.4 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z" fill="currentColor"/></svg></button><button type="button" class="cmpbtn" data-cmp="${esc(l.id)}" aria-pressed="false" title="${s('compareAdd', lang)}">⇄ <span>${s('compare', lang)}</span></button></div>`;
const enqBtn = (l, lang) => `<button type="button" class="enqbtn" data-enq="${esc(l.id)}">${s('quickEnq', lang)}</button>`;
const cmpData = (list, lang) => `<script type="application/json" id="cmpdata">${JSON.stringify(list.map((l) => ({ id: l.id, u: url(lang, 'listing', slugOf(l)), t: pick(l.baslik, lang), p: fmtPrice(l, lang), a: l.fiyat || 0, c: ({ TL: 'TRY' })[l.para || 'TL'] || l.para, img: (l.foto || [])[0] || '', r: [[T[lang].fields.type, l.tur], [T[lang].fields.rooms, l.oda], [T[lang].fields.net, l.net ? l.net + ' m²' : ''], [T[lang].fields.gross, l.brut ? l.brut + ' m²' : ''], [T[lang].fields.floor, l.kat], [T[lang].fields.age, l.yas], [T[lang].fields.location, [l.mahalle, l.ilce].filter(Boolean).join(', ')], [s('tags', lang), (l.etiketler || []).filter((k) => TAGS[k]).map((k) => tagLabel(k, lang)).join(', ')]] }))).replace(/</g, '\\u003c')}</script>`;
function tagFilter(lang) {
  const used = Object.keys(TAGS).filter((k) => LISTINGS.some((l) => (l.etiketler || []).includes(k)));
  return used.length ? `<div class="tagfilter" data-tagfilter>${used.map((k) => `<label><input type="checkbox" value="${k}"> ${tagLabel(k, lang)}</label>`).join('')}</div>` : '';
}
function sellForm(lang) {
  const t = T[lang]; const F = t.fields;
  const dists = [...DISTS, 'Alanya', 'Manavgat'];
  return `<form class="box form sellform" name="degerleme-talep" method="POST" data-netlify="true" netlify-honeypot="bot" action="${url(lang, 'contact')}?ok=1"><input type="hidden" name="form-name" value="degerleme-talep"><input type="hidden" name="dil" value="${lang}"><p hidden><input name="bot"></p>
<div class="fgrid3"><label>${s('district', lang)}<select name="ilce" required><option value=""></option>${dists.map((d) => `<option>${d}</option>`).join('')}</select></label>
<label>${s('neighbourhood', lang)}<input name="mahalle"></label>
<label>${F.type}<select name="tur"><option>Daire</option><option>Villa</option><option>Dubleks</option><option>Müstakil</option><option>Arsa</option><option>Ticari</option></select></label>
<label>${F.rooms}<input name="oda" placeholder="2+1"></label>
<label>${F.net}<input name="net_m2" inputmode="numeric" placeholder="m²"></label>
<label>${s('expectedPrice', lang)}<input name="beklenen_fiyat" inputmode="numeric"></label></div>
<div class="fgrid3"><label>${t.name} *<input name="ad" required autocomplete="name"></label><label>${t.phone} *<input name="telefon" type="tel" required autocomplete="tel"></label><label>E-posta<input name="eposta" type="email" autocomplete="email"></label></div>
<label class="chk"><input type="checkbox" name="kvkk_onay" value="evet" required> <span>${s('consent', lang).replace('{{LINK}}', `<a href="${url(lang, 'privacy')}" target="_blank" rel="noopener">${PAGES.privacy.nav[lang] || PAGES.privacy.nav.en}</a>`)} *</span></label>
<button class="btn" type="submit">${s('sellReq', lang)}</button></form>`;
}
// Etkinlikler (events.mjs): merkez sayfa + her etkinliğe ayrı sayfa
const OLD_SOCIAL = { tr: 'sosyal-sorumluluk', en: 'social-responsibility', de: 'soziale-verantwortung', ru: 'sotsialnaya-otvetstvennost', fa: 'masooliat-ejtemai', pl: 'odpowiedzialnosc-spoleczna', fr: 'responsabilite-sociale', es: 'responsabilidad-social', nl: 'maatschappelijke-verantwoordelijkheid', sv: 'samhallsansvar', ar: 'almasuliya-alijtimaiya', zh: 'shehui-zeren' };
const SOCIAL_LOCAL = {};
async function fetchSocialImages() {
  const dir = path.join(OUT, 'img', 'sosyal'); fs.mkdirSync(dir, { recursive: true });
  for (const ev of EVENTS.events) for (const [u, name] of ev.remote || []) {
    try { const r = await fetch(u, { signal: AbortSignal.timeout(30000), headers: { 'User-Agent': 'Mozilla/5.0 (ACC HOMES site build)' } }); if (!r.ok) throw new Error(r.status); fs.writeFileSync(path.join(dir, name), Buffer.from(await r.arrayBuffer())); SOCIAL_LOCAL[name] = `/img/sosyal/${name}`; } catch (e) { console.warn('Etkinlik görseli indirilemedi:', name, e.message); }
  }
}
const evT = (o, lang) => o[lang] || o.en;
const evUrl = (lang, ev) => url(lang, 'events', ev.id);
function evImgs(ev, c, w = 1000) {
  return [
    ...ev.images.map(([src, iw, ih, wide, cap]) => ({ src, w: iw, h: ih, wide, cap })),
    ...(ev.media || []).filter((id) => MEDIA[id]).map((id) => ({ src: cdn(id, w), w, h: Math.round(w * 0.625) })),
    ...(ev.remote || []).filter(([, n]) => SOCIAL_LOCAL[n]).map(([, n]) => ({ src: `/.netlify/images?url=${encodeURIComponent(SOCIAL_LOCAL[n])}&w=${w}&fm=webp&q=72`, w, h: Math.round(w * 0.5625) })),
  ];
}
function evCard(ev, lang) {
  const L = GL(lang); const c = ev[L]; const cat = EVENTS.cats[ev.cat]; const im = evImgs(ev, c, 800)[0];
  return `<a class="pcard" href="${evUrl(lang, ev)}"><div class="pcimg">${im ? `<img src="${im.src}" alt="${esc(c.title)}" loading="lazy">` : `<div class="ph evph"><span>${cat.icon}</span><b>${esc(evT(cat.name, lang))}</b></div>`}</div><div class="pcbody"><small>${esc(ev.date)} · ${esc(evT(cat.name, lang))}</small><h3>${esc(c.title)}</h3><p>${esc(c.card)}</p><span class="more">${evT(EVENTS.ui.read, lang)} →</span></div></a>`;
}
function pageEvents(lang) {
  const t = T[lang]; const L = GL(lang); const nav = evT(EVENTS.nav, lang);
  const cats = Object.keys(EVENTS.cats).filter((k) => EVENTS.events.some((e) => e.cat === k));
  const chips = `<ul class="chips evchips">${cats.map((k) => `<li><a href="#${k}">${EVENTS.cats[k].icon} ${esc(evT(EVENTS.cats[k].name, lang))}</a></li>`).join('')}</ul>`;
  const secs = cats.map((k) => { const cat = EVENTS.cats[k]; return `<section class="evcat" id="${k}"><h2>${cat.icon} ${esc(evT(cat.name, lang))}</h2><p class="sub">${esc(evT(cat.desc, lang))}</p><div class="pcards">${EVENTS.events.filter((e) => e.cat === k).map((e) => evCard(e, lang)).join('')}</div></section>`; }).join('');
  const body = `<section class="wrap sec page"><nav class="crumbs"><a href="${home(lang)}">${t.nav.home}</a> / <span>${esc(nav)}</span></nav><h1>${esc(nav)}</h1><p class="sub">${esc(evT(EVENTS.lead, lang))}</p>${EVENTS.intro[L]}${chips}${secs}</section>`;
  const og = evImgs(EVENTS.events.find((e) => evImgs(e, e[L]).length) || EVENTS.events[0], {})[0];
  write(path.join(url(lang, 'events'), 'index.html'), layout({ lang, title: `${nav} | ACC HOMES`, desc: evT(EVENTS.lead, lang), canonical: url(lang, 'events'), alternates: alts('events'), body, ogImage: og ? og.src : undefined }));
  for (const ev of EVENTS.events) pageEvent(ev, lang);
}
function pageEvent(ev, lang) {
  const t = T[lang]; const L = GL(lang); const c = ev[L]; const cat = EVENTS.cats[ev.cat]; const nav = evT(EVENTS.nav, lang);
  const ims = evImgs(ev, c);
  const gal = ims.length ? `<div class="sgal">${ims.map((i) => { const cap = i.cap && (i.cap[L] || i.cap.en); const img = `<img${i.wide ? ' class="wide"' : ''} src="${i.src}" alt="${esc(cap || c.title)}" loading="lazy" width="${i.w}" height="${i.h}">`; return cap ? `<figure>${img}<figcaption>${esc(cap)}</figcaption></figure>` : img; }).join('')}</div>${(ev.media || []).length && !ev.images.length ? `<p class="gcap">${evT(EVENTS.ui.projPhotos, lang)}</p>` : ''}` : `<p class="gcap">${evT(EVENTS.ui.photosSoon, lang)}</p>`;
  const ig = ev.ig ? `<a class="btn ghost" href="${ev.ig}" target="_blank" rel="noopener">${ICON_IG} ${evT(EVENTS.ui.ig, lang)}</a>` : '';
  const ctaHref = ev.cat === 'launch' && ev.project ? ev.project : waLink(t.waGeneral);
  const others = EVENTS.events.filter((e) => e !== ev);
  const ld = { '@context': 'https://schema.org', '@type': 'Event', name: c.title, location: { '@type': 'Place', name: c.place }, organizer: { '@type': 'Organization', name: 'ACC HOMES International Real Estate', url: SITE.domain }, eventStatus: 'https://schema.org/EventScheduled', eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode', startDate: ev.date.replace(/^(\d+)(?:–\d+)?\.(\d+)\.(\d+)$/, '$3-$2-$1') };
  const body = `<section class="wrap sec page narrow"><nav class="crumbs"><a href="${home(lang)}">${t.nav.home}</a> / <a href="${url(lang, 'events')}">${esc(nav)}</a> / <a href="${url(lang, 'events')}#${ev.cat}">${esc(evT(cat.name, lang))}</a></nav>
<article class="sevent first"><p class="eyebrow">${cat.icon} ${esc(ev.date)} · ${esc(c.place)}</p><h1>${esc(c.title)}</h1><div class="sstats">${ev.stats[L].map(([n, x]) => `<div><b>${esc(n)}</b><span>${esc(x)}</span></div>`).join('')}</div>${gal}<div class="prose">${c.html}</div></article>
<div class="ctas"><a class="btn" href="${ctaHref}"${ctaHref.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${evT(cat.cta, lang)}</a>${ig}</div></section>
${others.length ? `<section class="wrap sec"><h2>${evT(EVENTS.ui.others, lang)}</h2><div class="pcards">${others.map((e) => evCard(e, lang)).join('')}</div></section>` : ''}`;
  write(path.join(evUrl(lang, ev), 'index.html'), layout({ lang, title: `${c.title} | ACC HOMES`, desc: c.card, canonical: evUrl(lang, ev), alternates: alts('events', () => ev.id), body, schema: [ld], ogImage: ims[0] ? ims[0].src : undefined }));
}
function pageFavorites(lang) {
  const t = T[lang];
  const body = `<section class="wrap sec page"><h1>♡ ${s('favTitle', lang)}</h1><p class="sub">${s('favLead', lang)}</p>
<p class="empty" data-fav-empty>${s('favEmpty', lang)} <a href="${url(lang, 'list')}">${t.seeAll} →</a></p>
<div data-favpage>${grid(LISTINGS, lang)}</div>
<h2 id="karsilastir">⇄ ${s('compareTitle', lang)}</h2><p class="sub sm">${s('compareHint', lang)}</p><div class="cmpwrap" data-cmptable></div>${cmpData(LISTINGS, lang)}</section>`;
  write(path.join(url(lang, 'favorites'), 'index.html'), layout({ lang, title: `${s('favTitle', lang)} | ACC HOMES`, desc: s('favLead', lang), canonical: url(lang, 'favorites'), alternates: alts('favorites'), body, noindex: true }));
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
  const body = `${heroSlider(lang)}
<section class="hsearchbar"><div class="wrap">${areaTabs(lang, 'link')}${searchBox(lang)}</div></section>
${consultBar(lang)}
${trustStrip(lang)}
<section class="wrap sec"><div class="sechead"><h2>${t.featured}</h2><a href="${url(lang, 'list')}">${t.seeAll} →</a></div>${areaTabs(lang, 'filter')}${grid(show, lang)}</section>
<section class="wrap sec"><div class="sechead"><h2>${t.projects}</h2><a href="${url(lang, 'projects')}">${t.projectsCta} →</a></div>${projectCards(lang)}</section>
${brokerBlock(lang)}
${citizenshipBand(lang)}
${whyBlock(lang)}
${reviewsBlock(lang)}
${talkBlock(lang)}
${plazaBlock(lang)}
${blogStrip(lang)}
${igBlock(lang)}
${mapBlock(lang)}`;
  write(path.join(BASE[lang], 'index.html'), layout({ lang, title: `${t.heroTitle} | ACC HOMES`, desc: t.metaHome, canonical: home(lang), alternates: alts('home'), body }));
}

function pageList(lang) {
  const t = T[lang]; const f = t.filters;
  const rooms = [...new Set(LISTINGS.map((l) => l.oda).filter(Boolean))].sort();
  const body = `<section class="wrap sec"><h1>${t.all}</h1>
<form class="filters" id="filters"><label>${f.tip}<select name="tip"><option value="">${f.any}</option><option value="Satılık">${f.sale}</option><option value="Kiralık">${f.rent}</option></select></label>
<label>${f.rooms}<select name="oda"><option value="">${f.any}</option>${rooms.map((r) => `<option>${esc(r)}</option>`).join('')}</select></label>
<label>${f.sort}<select name="sort"><option value="new">${f.newest}</option><option value="asc">${f.priceAsc}</option><option value="desc">${f.priceDesc}</option></select></label></form>${tagFilter(lang)}
${grid(LISTINGS, lang)}</section>`;
  write(path.join(url(lang, 'list'), 'index.html'), layout({ lang, title: `${t.all} — ${t.heroTitle} | ACC HOMES`, desc: t.metaHome, canonical: url(lang, 'list'), alternates: alts('list'), body }));
}

function similar(l, lang) {
  const pool = LISTINGS.filter((x) => x !== l && x.tip === l.tip && x.durum !== 'Satıldı');
  const list = [...pool.filter((x) => x.ilce === l.ilce && x.tur === l.tur), ...pool.filter((x) => !(x.ilce === l.ilce && x.tur === l.tur))].slice(0, 3);
  return list.length ? `<section class="wrap sec"><div class="sechead"><h2>${s('similar', lang)}</h2><a href="${url(lang, 'list')}">${T[lang].seeAll} →</a></div>${grid(list, lang)}</section>` : '';
}
function pageListing(l, lang) {
  const t = T[lang]; const F = t.fields; const slug = slugOf(l);
  const title = pick(l.baslik, lang);
  const desc = (lang === 'tr' && l.meta) ? l.meta : pick(l.aciklama, lang).slice(0, 155);
  const rows = [
    [F.no, l.id], [F.type, l.tur], [F.rooms, l.oda], [F.gross, l.brut ? { m2: l.brut } : ''], [F.net, l.net ? { m2: l.net } : ''], [F.age, l.yas], [F.floor, l.kat], [F.floors, l.katSayisi],
    [F.heat, l.isitma], [F.inSite, l.site], [F.credit, l.kredi], [F.deed, l.tapu], [F.project, l.proje], [F.location, [l.mahalle, l.ilce, 'Antalya'].filter(Boolean).join(', ')],
  ].filter(([, v]) => v !== undefined && v !== null && v !== '');
  const photos = (l.foto || []);
  const gallery = photos.length ? `<div class="gallery"><img class="main" src="${esc(photos[0])}" alt="${esc(title)}">${photos.length > 1 ? `<div class="thumbs">${photos.map((p, i) => `<img src="${esc(p)}" alt="${esc(title)} ${i + 1}" loading="lazy">`).join('')}</div>` : ''}</div>` : `<div class="gallery">${placeholder}</div>`;
  const wa = waLink(t.waText(l.id));
  const tr = lang === 'tr';
  const L = (k) => s(k, lang);
  const ag = l.danisman || { ad: 'Ali Caner Can', unvan: L('broker'), tel: SITE.phoneRaw, telText: SITE.phone, foto: SITE.brokerPhoto };
  const agWa = `https://wa.me/${String(ag.tel).replace('+', '')}?text=${encodeURIComponent(t.waText(l.id))}`;
  const reasons = (l.nedenler || []).slice(0, 3);
  const dist = l.mesafeler ? [[L('beach'), l.mesafeler.plaj], [L('airport'), l.mesafeler.havalimani], [L('centre'), l.mesafeler.merkez]].filter(([, v]) => v) : [];
  const pageUrl = SITE.domain + url(lang, 'listing', slug);
  const try_ = l.fiyat && (l.para === 'TL' || !l.para) ? l.fiyat : 0;
  const body = `<section class="wrap sec listing">
<nav class="crumbs"><a href="${home(lang)}">${t.nav.home}</a> / <a href="${url(lang, 'list')}">${t.nav.list}</a> / <span>${esc(l.id)}</span></nav>
<div class="lgrid"><div>${gallery}
<div class="ltools"><span class="ref">${L('ref')}: <b>${esc(l.id)}</b></span><a href="https://wa.me/?text=${encodeURIComponent(title + ' ' + pageUrl)}" target="_blank" rel="noopener">${L('shareWa')}</a><a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}" target="_blank" rel="noopener">Facebook</a><button type="button" data-copy="${pageUrl}">${L('copy')}</button><button type="button" onclick="window.print()">${L('print')}</button><a href="${waLink(L('reportMsg') + l.id)}" target="_blank" rel="noopener">${L('report')}</a></div>
<h1>${esc(title)}</h1><p class="loc">${esc([l.proje, l.mahalle, l.ilce].filter(Boolean).join(' · '))}</p>${(l.etiketler || []).filter((k) => TAGS[k]).length ? `<div class="ltags big">${l.etiketler.filter((k) => TAGS[k]).map((k) => `<span class="lt-${k}">${tagLabel(k, lang)}</span>`).join('')}</div>` : ''}
${reasons.length ? `<div class="reasons">${reasons.map((r) => `<span>✓ ${esc(r)}</span>`).join('')}</div>` : ''}
<h2>${F.desc}</h2><div class="desc">${esc(pick(l.aciklama, lang)).split(/\n+/).map((p) => `<p>${p}</p>`).join('')}</div>
${l.ozellikler && l.ozellikler.length ? `<h2>${F.features}</h2><ul class="chips">${l.ozellikler.map((o) => `<li>${esc(o)}</li>`).join('')}</ul>` : ''}
${dist.length ? `<h2>${L('distances')}</h2><ul class="chips">${dist.map(([k, v]) => `<li>${k}: <b>${esc(v)}</b></li>`).join('')}</ul>` : ''}
${l.video ? `<p><a class="btn ghost" href="${esc(l.video)}" target="_blank" rel="noopener">Video →</a></p>` : ''}
${l.tip !== 'Kiralık' ? `<h2>${L('costs')}</h2>${calcBlock(lang).replace('data-calc>', `data-calc data-price="${try_ || ''}">`)}<p><a href="${lang === 'tr' ? '/alici-rehberi/alim-masraflari/' : '/en/buyers-guide/purchase-costs/'}">${L('costsMore')}</a></p>` : ''}
</div><aside class="side"><div class="box"><span class="tag static">${tipLabel(l, lang)}</span>${statusBadge(l, lang)}<div class="price big"${priceAttrs(l)}>${fmtPrice(l, lang)}</div>${l.fiyatKontrol ? `<p class="pcheck">✓ ${s('priceChecked', lang)}<small>${s('lastCheck', lang)}: ${esc(l.fiyatKontrol)}</small></p>` : ''}<details class="whydiff"><summary>${s('whyDiff', lang)}</summary><p>${s('whyDiffText', lang)}</p></details><div class="ltools2" data-id="${esc(l.id)}">${cardTools(l, lang)}</div>
<table class="spec">${rows.map(([k, v]) => `<tr><th>${k}</th><td>${v && v.m2 ? `<span data-m2="${+v.m2}">${+v.m2} m²</span>` : esc(v)}</td></tr>`).join('')}</table>
<div class="actions"><a class="btn" href="${wa}" target="_blank" rel="noopener">${t.wa}</a><a class="btn ghost" href="tel:${SITE.phoneRaw}">${t.call}</a></div>
<a class="gline" href="${SITE.google.mapsUrl}" target="_blank" rel="noopener">${ICON_G}<b>${fmtRating(lang)}</b>${stars}<span>${t.gReviews(SITE.google.reviews)}</span></a></div>
<div class="box agent">${ag.foto ? `<img src="${ag.foto}" alt="${esc(ag.ad)}">` : `<span class="mav">${esc(ag.ad.split(' ').map((x) => x[0]).slice(0, 2).join(''))}</span>`}<div><b>${esc(ag.ad)}</b><small>${esc(ag.unvan || '')}</small><a href="tel:${ag.tel}">${esc(ag.telText || ag.tel)}</a></div><a class="wabtn sm" href="${agWa}" target="_blank" rel="noopener">WhatsApp</a></div>
<form class="box form" name="gosterim-talep" method="POST" data-netlify="true" netlify-honeypot="bot" action="${url(lang, 'contact')}?ok=1"><h3>${L('viewing')}</h3>
<input type="hidden" name="form-name" value="gosterim-talep"><input type="hidden" name="ilan" value="${esc(l.id)}"><p hidden><input name="bot"></p>
<div class="seg"><label><input type="radio" name="tur" value="yerinde" checked> ${L('inPerson')}</label><label><input type="radio" name="tur" value="online"> ${L('online')}</label></div>
<div class="days" data-days data-lang="${lang}"></div><input type="hidden" name="gun" data-day>
<select name="saat"><option>10:00</option><option>11:00</option><option>12:00</option><option>14:00</option><option>15:00</option><option>16:00</option><option>17:00</option></select>
<input name="ad" placeholder="${t.name}" required><input name="telefon" placeholder="${t.phone}" required><button class="btn" type="submit">${L('reqViewing')}</button></form>
<form class="box form" name="ilan-talep" method="POST" data-netlify="true" netlify-honeypot="bot" action="${url(lang, 'contact')}?ok=1"><h3>${t.askTitle}</h3>
<input type="hidden" name="form-name" value="ilan-talep"><input type="hidden" name="ilan" value="${esc(l.id)}"><p hidden><input name="bot"></p>
<input name="ad" placeholder="${t.name}" required><input name="telefon" placeholder="${t.phone}" required><textarea name="mesaj" rows="3" placeholder="${t.msg}"></textarea><button class="btn" type="submit">${t.send}</button></form>
</aside></div></section>${similar(l, lang)}`;
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
<div class="cgrid"><div class="box"><h3>${t.office}</h3><p>${esc(SITE.address.street)}<br>${esc(SITE.address.district)} / ${esc(SITE.address.city)}</p>
<p><a href="tel:${SITE.phoneRaw}">${SITE.phone}</a><br><a href="mailto:${SITE.email}">${SITE.email}</a></p>
<h4>${s('directionsTitle', lang)}</h4><p>${s('directionsText', lang)}</p><p class="lic">${s('licence', lang)}: ${SITE.licence.join(' · ')}</p>
<div class="actions"><a class="btn" href="${waLink(t.waGeneral)}" target="_blank" rel="noopener">${t.wa}</a><a class="btn ghost" href="tel:${SITE.phoneRaw}">${t.call}</a></div></div>
<form class="box form" name="iletisim" method="POST" data-netlify="true" netlify-honeypot="bot" action="${url(lang, 'contact')}?ok=1"><input type="hidden" name="form-name" value="iletisim"><p hidden><input name="bot"></p>
<input name="ad" placeholder="${t.name}" required><input name="telefon" placeholder="${t.phone}" required><textarea name="mesaj" rows="4" placeholder="${t.msg}"></textarea><button class="btn" type="submit">${t.send}</button></form></div></section>${trustStrip(lang)}${reviewsBlock(lang)}${mapBlock(lang)}`;
  write(path.join(url(lang, 'contact'), 'index.html'), layout({ lang, title: `${t.contactTitle} | ACC HOMES`, desc: t.contactSub, canonical: url(lang, 'contact'), alternates: alts('contact'), body }));
}


// Instagram görsellerini derleme sırasında indir (CDN linkleri süreli olduğu için)
async function fetchIgImages() {
  const dir = path.join(OUT, 'ig'); fs.mkdirSync(dir, { recursive: true });
  await Promise.all(IG.media.slice(0, 12).map(async (m) => {
    const code = (m.permalink.match(/\/(?:p|reel)\/([^/]+)/) || [])[1] || String(Math.random()).slice(2);
    try {
      const r = await fetch(m.image, { signal: AbortSignal.timeout(15000) });
      if (!r.ok) throw new Error(r.status);
      fs.writeFileSync(path.join(dir, `${code}.jpg`), Buffer.from(await r.arrayBuffer()));
      m.local = `/ig/${code}.jpg`;
    } catch (e) { console.warn('IG görsel indirilemedi:', code, e.message); }
  }));
}

// Ekip fotoğrafları: eski siteden derlemede indirilir (dist/ekip/)
const TEAM_LOCAL = {};
async function fetchTeamPhotos() {
  const dir = path.join(OUT, 'ekip'); fs.mkdirSync(dir, { recursive: true });
  const files = [...Object.values(STAFF_PHOTOS), ...PARTNERS.map((p) => p.photo)].filter(Boolean);
  for (const f of files) {
    const name = path.basename(f).replace('-780x780', '');
    const local = path.join(ROOT, 'static/img/ekip/kisi', name);
    if (fs.existsSync(local)) { TEAM_LOCAL[f] = `/img/ekip/kisi/${name}`; continue; }
    for (let i = 0; i < 3 && !TEAM_LOCAL[f]; i++) {
      try {
        const r = await fetch(PHOTO_BASE + f, { signal: AbortSignal.timeout(30000), headers: { 'User-Agent': 'Mozilla/5.0 (ACC HOMES site build)' } });
        if (!r.ok || !(r.headers.get('content-type') || '').startsWith('image/')) throw new Error(r.status);
        fs.writeFileSync(path.join(dir, name), Buffer.from(await r.arrayBuffer()));
        TEAM_LOCAL[f] = `/ekip/${name}`;
      } catch (e) { if (i === 2) console.warn('Ekip fotoğrafı indirilemedi:', name, e.message); else await new Promise((r) => setTimeout(r, 1500)); }
    }
  }
}

// Yazı tipleri: Montserrat (logo ile uyumlu başlıklar) + Vazirmatn (Farsça). Derlemede Google Fonts'tan indirilip siteden sunulur.
let FONTS_OK = false;
async function fetchFonts() {
  try {
    const css = await (await fetch('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Vazirmatn:wght@400;700&display=swap', { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36' }, signal: AbortSignal.timeout(20000) })).text();
    const urls = [...new Set([...css.matchAll(/url\((https:[^)]+\.woff2)\)/g)].map((m) => m[1]))];
    if (!urls.length) throw new Error('woff2 yok');
    const dir = path.join(OUT, 'fonts'); fs.mkdirSync(dir, { recursive: true });
    let out = css;
    for (const u of urls) {
      const name = crypto.createHash('md5').update(u).digest('hex').slice(0, 10) + '.woff2';
      const r = await fetch(u, { signal: AbortSignal.timeout(20000) }); if (!r.ok) throw new Error(r.status);
      fs.writeFileSync(path.join(dir, name), Buffer.from(await r.arrayBuffer()));
      out = out.split(u).join(`/fonts/${name}`);
    }
    fs.writeFileSync(path.join(OUT, 'assets', 'fonts.css'), out); FONTS_OK = true;
  } catch (e) { console.warn('Yazı tipleri indirilemedi, sistem fontu kullanılacak:', e.message); }
}

// ---------- üretim ----------
fs.rmSync(OUT, { recursive: true, force: true });
fs.cpSync(path.join(ROOT, 'static'), OUT, { recursive: true });
fs.cpSync(path.join(ROOT, 'assets'), path.join(OUT, 'assets'), { recursive: true });
await fetchIgImages();
await fetchDriveMedia();
await fetchTeamPhotos();
await fetchFonts();
await fetchSocialImages();
await fetchBrokerImages();
const urls = [];
for (const lang of LANGS) {
  pageHome(lang); pageList(lang); pageGuide(lang); pageContact(lang); pageBlog(lang); pageProjects(lang); pageGuideHub(lang); pageReviews(lang); pageFavorites(lang); pageEvents(lang); urls.push(url(lang, 'events'), ...EVENTS.events.map((e) => evUrl(lang, e))); pageDownloads(lang); urls.push(url(lang, 'projects'), url(lang, 'buyersguide'), url(lang, 'reviews'));
  if (lang === 'tr' || lang === 'en') { for (const g of GUIDES) { pageGuideItem(g, lang); urls.push(gUrl(lang, g)); } for (const a of AREA_GUIDES) { pageAreaItem(a, lang); urls.push(aUrl(lang, a)); } }
  pageAreaHub(lang); urls.push(url(lang, 'areas'));
  for (const k of Object.keys(PAGES)) { pageCorporate(k, lang); urls.push(url(lang, k)); }
  urls.push(home(lang), url(lang, 'list'), url(lang, 'guide'), url(lang, 'contact'), url(lang, 'blog'), ...POSTS.map((p) => url(lang, 'blog', p.slug)));
  for (const l of LISTINGS) { pageListing(l, lang); urls.push(url(lang, 'listing', slugOf(l))); }
}
for (const p of PROJECTS) { pageProject(p); urls.push(`/projeler/${p.slug}/`); }
write('_redirects', LANGS.flatMap((l) => { const to = evUrl(l, EVENTS.events.find((e) => e.id === 'acc-day-2025')); const from = `${BASE[l]}/${OLD_SOCIAL[l] || OLD_SOCIAL.en}`; return [`${from} ${to} 301`, `${from}/* ${to} 301`]; }).join('\n') + '\n');
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((u) => `<url><loc>${SITE.domain}${u}</loc></url>`).join('')}</urlset>`);
write('robots.txt', DEMO ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\nSitemap: ${SITE.domain}/sitemap.xml\n`);
write('404.html', layout({ lang: 'tr', title: 'Sayfa bulunamadı | ACC HOMES', desc: '', canonical: '/404', body: `<section class="wrap sec narrow"><h1>Sayfa bulunamadı</h1><p><a class="btn" href="/">Ana sayfa</a></p></section>` }));
console.log(`OK — ${LISTINGS.length} ilan, ${urls.length} sayfa${DEMO ? ' (önizleme verisi)' : ''}`);
