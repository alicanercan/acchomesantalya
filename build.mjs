import { enSpan } from './en-span.mjs';
// ACC HOMES — altintassatilikdaire.com statik site üreticisi
// Bağımlılık yok: Netlify'da "node build.mjs" ile çalışır, çıktı dist/ klasörüne yazılır.
import { enrich as ilanSeo, temizle as ilanTemizle } from './ilan-seo.mjs';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { PAGES, POSTS, TEAM, LANGS_SPOKEN, PLAZA, TIMELINE } from './content.mjs';
import { PROJECTS } from './projects.mjs';
import { ANTALLE, ANTALLE_SHARED } from './antalle-content.mjs';
import { ANTALLE_SEO } from './antalle-seo.mjs';
import { DAVET_AKTIF, davetSection, davetTx } from './antalle-davet.mjs';
import { PRIVACY } from './privacy.mjs';
import { PAGES2, P2X, p2Html } from './pages2.mjs';
import { AREA_GUIDES } from './areas.mjs';
import { MAHALLELER } from './mahalleler.mjs';
import { EMLAK_TIPLERI, KATEGORILER, ALT_EN, TUR_TO_TIP, ILCELER, ODALAR, BINA_YASI, SECMELI, TX, KONUT_TIPI } from './taxonomy.mjs';
import { EVENTS } from './events.mjs';
import { BROKER } from './broker.mjs';
import { ROADMAP, TRUST, FOUNDER } from './story.mjs';
import { BLOG, BLOG_POSTS } from './blog.mjs';
import { NEWS, NEWS_UI } from './news.mjs';
import { GUIDES, FAQ, GUIDE_SEG, GUIDE_TITLE, GUIDE_LEAD, GUIDE_UPDATED } from './guide.mjs';
import { REGRET_LOC } from './guide-regret-i18n.mjs';
GUIDES.find((g) => g.slug === 'ev-aldiktan-sonra-pisman-olmamak').loc = REGRET_LOC;
import { SEO_META } from './seo-meta.mjs';
import { T_EXTRA, S, s, SEGS, LOCALE, RTL, extend, PACKS } from './i18n.mjs';
import { STAFF_PHOTOS, PARTNERS, PHOTO_BASE, LANG_NAMES, PARTNER_ROLE, SWORN_ROLE } from './team.mjs';

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const OUT = path.join(ROOT, 'dist');
const read = (p) => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));

const SITE = read('data/site.json');
const REVIEWS = read('data/reviews.json');
const IG = read('data/instagram.json');
let LISTINGS = read('data/portfoy.json');
// ---- Panel senkronu: ACC HOMES Panel'de broker onaylı ve "sitede yayınla" denmiş ilanlar (Supabase site_ilanlari).
// Panel ulaşılamazsa yalnız data/portfoy.json kullanılır; site hiçbir zaman boş kalmaz.
const PANEL = { url: 'https://vqsocwdfmvpgdpxkcubz.supabase.co', key: 'sb_publishable_Fv0kalSrYIRLNjCoER1y2Q_31N9fJ_z' };
const telYaz = (t) => { const d = String(t || '').replace(/\D/g, '').replace(/^90/, ''); return d.length === 10 ? `0${d.slice(0, 3)} ${d.slice(3, 6)} ${d.slice(6, 8)} ${d.slice(8)}` : String(t || ''); };
const panelFoto = (u) => (!u ? '' : u.startsWith('/site-ekip/') ? u.replace('/site-ekip/', '/ekip/') : u.startsWith('/site-img/') ? u.replace('/site-img/', '/img/') : u);
const ilanFoto = (u) => (/^https?:\/\//.test(u) && (process.env.SITE_HOST || 'netlify') !== 'turhost' ? `/.netlify/images?url=${encodeURIComponent(u)}&w=1600&fm=webp&q=78` : u);
const trTarih = (d) => { const t = new Date(d); return isNaN(t) ? '' : `${String(t.getDate()).padStart(2, '0')}.${String(t.getMonth() + 1).padStart(2, '0')}.${t.getFullYear()}`; };
function panelDanisman(v) {
  if (!v.danisman) return null;
  const tel = String(v.danisman_tel || '').replace(/[^\d+]/g, '');
  return { ad: v.danisman, unvan: v.danisman_unvan || 'Gayrimenkul Profesyoneli', tel: tel ? (tel.startsWith('+') ? tel : '+90' + tel.replace(/^0/, '')) : SITE.phoneRaw, telText: tel ? telYaz(tel) : SITE.phone, foto: panelFoto(v.danisman_foto) };
}
function panelIlan(v) {
  const e = v.ekstra || {}; const ac = v.aciklama || {}; const bas = v.baslik || {};
  const ilkCumle = String(ac.tr || '').replace(/\s+/g, ' ').trim().slice(0, 150);
  return { ...Object.fromEntries(Object.entries(e).filter(([k]) => !/^sahibinden_|^magaza$|^konum$|^ozellik_gruplari$|^ilan_tarihi$|^il$/.test(k))),
    id: v.id, durum: v.satis_durumu === 'Kaporalı' ? 'Opsiyonlu' : 'Yayında', tip: v.tip, tur: v.altTip || '', emlakTipi: v.emlakTipi, altTip: v.altTip || '',
    ilce: v.ilce, mahalle: v.mahalle, proje: v.proje || undefined, fiyat: Number(v.fiyat) || 0, para: v.para || 'TL', oda: v.oda || undefined,
    brut: v.brut ?? undefined, net: v.net ?? undefined, arsa: v.arsa ?? undefined, yas: v.yas ?? undefined, kat: v.kat || undefined, katSayisi: v.katSayisi ?? undefined,
    isitma: v.isitma || undefined, banyo: v.banyo || undefined, balkon: v.balkon || undefined, asansor: v.asansor || undefined, otopark: v.otopark || undefined,
    esya: v.esya || undefined, kullanim: v.kullanim || undefined, site: v.site || undefined, aidat: v.aidat ?? undefined, kredi: v.kredi || undefined, tapu: v.tapu || undefined,
    takas: v.takas || undefined, imar: v.imar || undefined, etiketler: (v.etiketler || []).filter((k) => k !== 'antalya-disi'), ozellikler: v.ozellikler || [],
    foto: (v.foto || []).map(ilanFoto), thumbs: false, baslik: bas, aciklama: ac, meta: e.meta || (bas.tr ? `${bas.tr}. ${ilkCumle}`.slice(0, 155) : undefined),
    teklifAl: !!e.fiyat_gizli || undefined, harita: v.yaklasik_konum || undefined, konutTipi: (v.konut_tipi || []).length ? v.konut_tipi : undefined, tarih: trTarih(v.created_at), tekYetki: !!v.yetkili, eids: v.eids || undefined, sahibinden: v.sahibinden || undefined, danisman: panelDanisman(v), _panel: true };
}
try {
  const r = await fetch(`${PANEL.url}/rest/v1/site_ilanlari?select=*`, { headers: { apikey: PANEL.key }, signal: AbortSignal.timeout(20000) });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  const rows = (await r.json()).filter((v) => v.tip !== 'Kat karşılığı'); const byId = new Map(rows.map((v) => [v.id, v]));
  for (const l of LISTINGS) { const v = byId.get(l.id); if (v) { const d = panelDanisman(v); if (d) l.danisman = d; byId.delete(l.id); } }
  const yeni = [...byId.values()].map(panelIlan).filter((l) => l.ilce && l.foto.length);
  LISTINGS.push(...yeni);
  console.log(`Panel senkronu: ${rows.length} ilan okundu, ${yeni.length} yeni ilan eklendi`);
  // İlan SEO görevleri için anlık görüntü (repo herkese açık: telefon, e-posta ve konum çıkarılır)
  try { fs.writeFileSync(path.join(ROOT, 'panel-snapshot.json'), JSON.stringify(rows.map(({ danisman_tel, yaklasik_konum, danisman_foto, ...v }) => ({ ...v, aciklama: Object.fromEntries(Object.entries(v.aciklama || {}).map(([k, t]) => [k, ilanTemizle(t)])) })))); } catch {}
} catch (e) {
  // Ağ yoksa (yerel/zamanlanmış oturum) son anlık görüntü kullanılabilir: PANEL_SNAPSHOT=/yol/panel.json
  if (process.env.PANEL_SNAPSHOT && fs.existsSync(process.env.PANEL_SNAPSHOT)) {
    const rows = JSON.parse(fs.readFileSync(process.env.PANEL_SNAPSHOT, 'utf8')); const byId = new Map(rows.map((v) => [v.id, v]));
    for (const l of LISTINGS) byId.delete(l.id);
    const yeni = [...byId.values()].map(panelIlan).filter((l) => l.ilce && l.foto.length); LISTINGS.push(...yeni);
    console.warn(`Panel senkronu: ağ yok, anlık görüntüden ${yeni.length} ilan (${e.message})`);
  } else console.warn('Panel senkronu atlandı, portfoy.json kullanılıyor:', e.message);
}
const DEMO = LISTINGS.length === 0 && !SITE.live;
if (DEMO) LISTINGS = read('data/demo.json');
const KAT_OF = { 'Satılık': 'satilik', 'Kiralık': 'kiralik', 'Devren': 'devren' };
for (const l of LISTINGS) {
  l.emlakTipi = l.emlakTipi || TUR_TO_TIP[l.tur] || 'konut';
  l.kategori = l.kategori || KAT_OF[l.tip] || 'satilik';
  const et = EMLAK_TIPLERI.find((e) => e.k === l.emlakTipi);
  l.altTip = l.altTip || (et && et.alt.includes(l.tur) ? l.tur : (l.emlakTipi === 'konut' ? 'Daire' : ''));
}
const PREVIEW = LISTINGS.filter((l) => l.durum === 'Onay Bekliyor').map((l) => ({ ...l, _preview: true })); // onay için gizli önizleme: listelerde ve site haritasında yok, noindex
LISTINGS = LISTINGS.filter((l) => ['Yayında', 'Opsiyonlu', 'Satıldı'].includes(l.durum));
const AGENT_ILAN = new Map(); for (const l of LISTINGS) { const a = l.danisman?.ad || 'Ali Caner Can'; if (!AGENT_ILAN.has(a)) AGENT_ILAN.set(a, []); AGENT_ILAN.get(a).push(l); }

const VER = crypto.createHash('md5').update(fs.readFileSync(path.join(ROOT, 'assets/style.css')) + fs.readFileSync(path.join(ROOT, 'assets/app.js'))).digest('hex').slice(0, 8);
const LANGS = ['tr', 'en', 'de', 'ru', 'fa', ...PACKS.map((p) => p.code)];
const BASE = { tr: '', en: '/en', ru: '/ru', de: '/de', fa: '/fa', ...Object.fromEntries(PACKS.map((p) => [p.code, p.base])) };
const T = {
  tr: {
    htmlLang: 'tr', locale: 'tr_TR',
    nav: { home: 'Ana Sayfa', list: 'İlanlar', guide: 'Altıntaş Rehberi', contact: 'İletişim' },
    seg: { list: 'ilanlar', listing: 'ilan', guide: 'altintas-rehberi', contact: 'iletisim' },
    heroTitle: 'Antalya’da Satılık ve Kiralık Gayrimenkul',
    heroSub: 'ACC Plaza’dan 50 iş ortağı ve 12 dilde hizmetle; konut, villa, yetkili projeler ve ticari yatırımlarda kurumsal, şeffaf ve veriye dayalı danışmanlık',
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
    waGeneral: 'Merhaba, Antalya’da gayrimenkul hakkında bilgi almak istiyorum.',
    empty: 'Yeni portföyler hazırlanıyor. Size uygun daireyi bulmamız için bize yazın.',
    demo: 'Tasarım önizlemesi — gösterilen ilanlar örnektir, gerçek ilanlar yakında',
    contactTitle: 'İletişim', contactSub: 'Antalya’da ev, yatırım veya ticari gayrimenkul arıyor ya da mülkünüzü satmak veya kiralamak istiyorsanız ACC Plaza’da sizi bekliyoruz',
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
    company: 'Kurumsal', blog: 'Blog', blogLead: 'Antalya gayrimenkul piyasası, bölgeler ve yatırım üzerine rehberler ve analizler', readMore: 'Devamını oku', menu: 'Menü',
    gReviews: (n) => `${n} Google yorumu`, readReviews: 'Yorumları oku', igFollow: 'Instagram’da takip edin', mapTitle: 'Ofisimiz haritada', directions: 'Yol tarifi al', trustTitle: 'Müşterilerimiz bizi anlatıyor',
    homeTitle: 'Antalya Emlak Ofisi: Satılık ve Kiralık Daire, Villa | ACC HOMES',
    metaHome: 'Antalya emlak ofisi ACC HOMES: ACC Plaza’da 50 iş ortağı, 12 dilde hizmet. Satılık ve kiralık daire, villa ve yetkili projeler; ücretsiz değerleme.',
  },
  en: {
    htmlLang: 'en', locale: 'en_GB',
    nav: { home: 'Home', list: 'Listings', guide: 'Altintas Guide', contact: 'Contact' },
    seg: { list: 'listings', listing: 'listing', guide: 'altintas-guide', contact: 'contact' },
    heroTitle: 'Property for Sale and Rent in Antalya',
    heroSub: 'From ACC Plaza, 50 partners in 12 languages: homes, villas, authorised projects and commercial investments, with corporate, transparent, data-driven advice',
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
    waGeneral: 'Hello, I would like information about property in Antalya.',
    empty: 'New listings are being prepared. Message us and we will find the right home for you.',
    demo: 'Design preview — listings shown are samples, real listings coming soon',
    contactTitle: 'Contact', contactSub: 'Looking for a home, an investment or commercial property in Antalya, or planning to sell or let? Visit us at ACC Plaza or get in touch',
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
    company: 'Company', blog: 'Blog', blogLead: 'Guides and insights on the Antalya property market, its districts and investment', readMore: 'Read more', menu: 'Menu',
    gReviews: (n) => `${n} Google reviews`, readReviews: 'Read reviews', igFollow: 'Follow us on Instagram', mapTitle: 'Find our office', directions: 'Get directions', trustTitle: 'What our clients say',
    homeTitle: 'Antalya Real Estate Agency: Homes & Villas for Sale | ACC HOMES',
    metaHome: 'Antalya real estate agents at ACC Plaza: 50 partners, 12 languages. Apartments, villas and new projects for sale and rent, with free online viewings.',
  },
  ru: {
    htmlLang: 'ru', locale: 'ru_RU',
    nav: { home: 'Главная', list: 'Объекты', guide: 'Гид по Алтынташу', contact: 'Контакты' },
    seg: { list: 'obekty', listing: 'obekt', guide: 'gid-altyntash', contact: 'kontakty' },
    heroTitle: 'Недвижимость в Анталии: продажа и аренда',
    heroSub: '50 партнёров и сервис на 12 языках: квартиры, виллы, проекты и коммерческая недвижимость',
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
    waGeneral: 'Здравствуйте, хочу узнать о недвижимости в Анталии.',
    empty: 'Новые объекты готовятся. Напишите нам, и мы подберём подходящий вариант.',
    demo: 'Предпросмотр дизайна — показаны примеры, реальные объекты скоро',
    contactTitle: 'Контакты', contactSub: 'Ищете жильё или инвестицию в Анталии или хотите продать? Свяжитесь с нами',
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
    homeTitle: 'Агентство недвижимости в Анталии: квартиры и виллы | ACC HOMES',
    metaHome: 'ACC HOMES — агентство недвижимости в Анталии: квартиры, виллы и новостройки на продажу и в аренду. 50 партнёров, 12 языков, онлайн-показ.',
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
const loc = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) ? (v[lang] || v[GL(lang)] || v.en || v.tr || '') : (v || ''));
const locList = (v, lang) => (Array.isArray(v) ? v : (v && (v[lang] || v[GL(lang)] || v.en || v.tr)) || []);
const RU_V = { 'Evet': 'Да', 'Hayır': 'Нет', 'Yerden Isıtma': 'Тёплый пол', 'Kapalı Otopark': 'Крытая парковка', 'Açık Otopark': 'Открытая парковка', 'Eşyalı': 'С мебелью', 'Eşyasız': 'Без мебели', 'Boş': 'Свободна', 'Kiracılı': 'С арендатором', 'Kat Mülkiyetli': 'Kat mülkiyeti (полная собственность)', 'Kat İrtifaklı': 'Kat irtifakı (до оформления кат мюлькиети)', 'Kombi (Doğalgaz)': 'Газовый котёл', 'Klima': 'Кондиционер' };
const optV = (f, v, lang) => { if (!v || lang === 'tr') return v; if (lang === 'ru' && RU_V[v]) return RU_V[v]; const o = (SECMELI.find((x) => x.f === f) || { ops: [] }).ops.find((p) => p[0] === v); return o ? o[1] : v; };
const slugOf = (l) => l.slug ? slugify(l.slug.replace(/^\//, '')) : slugify([l.tip, l.ilce, l.mahalle, l.oda, l.tur, l.id].filter(Boolean).join(' '));
// İlan SEO katmanı: panel ilanlarını site standardına getirir (ilan-seo.mjs)
const SEO_REDIR = [];
for (const l of LISTINGS) if (l._panel) { const eski = ilanSeo(l, slugify); if (eski) SEO_REDIR.push([eski, l]); }
console.log(`İlan SEO: ${LISTINGS.filter((l) => l._seo === 'ozgun').length} özgün, ${LISTINGS.filter((l) => l._seo === 'otomatik').length} otomatik`);
const pick = (obj, lang) => (obj && (obj[lang] || (lang !== 'tr' && obj.en) || obj.tr)) || '';
const fmtPrice = (l, lang) => {
  if (!l.fiyat && l.teklifAl) return ({ tr: 'Teklif alınız', en: 'Price on request', ru: 'Цена по запросу', de: 'Preis auf Anfrage' })[lang] || T[lang].priceOnReq;
  if (!l.fiyat) return l.teklif ? ({ tr: 'Teklif verin', en: 'Make an offer', ru: 'Предложите цену' })[lang] || 'Make an offer' : T[lang].priceOnReq;
  const n = new Intl.NumberFormat(LOCALE[lang]).format(l.fiyat);
  const sym = { TL: '₺', USD: '$', EUR: '€' }[l.para] || l.para || '';
  const per = l.tip === 'Kiralık' ? ({ tr: ' / ay', en: ' / month', ru: ' / мес.' })[lang] || ' / month' : '';
  return (lang === 'tr' ? `${n} ${sym}` : `${sym}${n}`) + per;
};
const priceAttrs = (l) => (l.fiyat ? ` data-amt="${l.fiyat}" data-ccy="${({ TL: 'TRY', USD: 'USD', EUR: 'EUR', GBP: 'GBP' })[l.para || 'TL'] || 'TRY'}"` : '');
const tipLabel = (l, lang) => (l.tip === 'Kiralık' ? T[lang].rent : T[lang].sale);
const statusBadge = (l, lang) => l.durum === 'Satıldı' ? `<span class="badge sold">${T[lang].sold}</span>` : l.durum === 'Opsiyonlu' ? `<span class="badge opt">${T[lang].option}</span>` : '';
const segOf = (lang, seg) => (PAGES[seg] ? (PAGES[seg].seg[lang] || PAGES[seg].seg.en) : seg === 'blog' ? 'blog' : seg === 'projects' ? SEGS.projects[lang] : seg === 'buyersguide' ? GUIDE_SEG[lang] : seg === 'downloads' ? (SEGS.downloads[lang] || 'free-guides') : seg === 'events' ? (EVENTS.seg[lang] || EVENTS.seg.en) : seg === 'areas' ? (SEGS.areas[lang] || SEGS.areas.en) : seg === 'favorites' ? (SEGS.favorites[lang] || 'favorites') : seg === 'reviews' ? SEGS.reviews[lang] : T[lang].seg[seg]);
const url = (lang, seg, slug) => `${BASE[lang]}/${segOf(lang, seg)}/${slug ? slug + '/' : ''}`;
const home = (lang) => `${BASE[lang]}/`;
const waLink = (text) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
const NLB = {"tr": ["ACC NEWS bültenine abone olun", "Antalya gayrimenkul gündemi, piyasa analizleri ve yeni projeler; haftada bir e-posta.", "Abone ol", "Teşekkürler, bültene kaydoldunuz.", "E-posta adresiniz"], "en": ["Subscribe to the ACC NEWS bulletin", "The Antalya property agenda, market analysis and new projects; one e-mail a week.", "Subscribe", "Thank you, you are subscribed.", "Your e-mail"], "de": ["ACC NEWS abonnieren", "Immobilienmarkt Antalya, Analysen und neue Projekte; eine E-Mail pro Woche.", "Abonnieren", "Danke, Sie sind angemeldet.", "Ihre E-Mail"], "ru": ["Подпишитесь на ACC NEWS", "Рынок недвижимости Анталии, аналитика и новые проекты; одно письмо в неделю.", "Подписаться", "Спасибо, вы подписаны.", "Ваш e-mail"], "fa": ["عضویت در خبرنامه ACC NEWS", "اخبار املاک آنتالیا، تحلیل بازار و پروژه‌های جدید؛ هفته‌ای یک ایمیل.", "عضویت", "سپاس، عضویت شما ثبت شد.", "ایمیل شما"], "pl": ["Zapisz się do biuletynu ACC NEWS", "Rynek nieruchomości w Antalyi, analizy i nowe projekty; jeden e-mail tygodniowo.", "Zapisz się", "Dziękujemy, zapisano.", "Twój e-mail"], "fr": ["Abonnez-vous au bulletin ACC NEWS", "L’immobilier à Antalya, analyses de marché et nouveaux projets ; un e-mail par semaine.", "S’abonner", "Merci, vous êtes inscrit.", "Votre e-mail"], "es": ["Suscríbase al boletín ACC NEWS", "El mercado inmobiliario de Antalya, análisis y nuevos proyectos; un correo por semana.", "Suscribirse", "Gracias, ya está suscrito.", "Su e-mail"], "nl": ["Abonneer op de ACC NEWS-nieuwsbrief", "Vastgoed in Antalya, marktanalyses en nieuwe projecten; één e-mail per week.", "Abonneren", "Bedankt, u bent ingeschreven.", "Uw e-mail"], "sv": ["Prenumerera på ACC NEWS", "Fastighetsmarknaden i Antalya, analyser och nya projekt; ett mejl i veckan.", "Prenumerera", "Tack, du är anmäld.", "Din e-post"], "ar": ["اشترك في نشرة ACC NEWS", "سوق العقارات في أنطاليا والتحليلات والمشاريع الجديدة؛ رسالة واحدة أسبوعيًا.", "اشترك", "شكرًا، تم اشتراكك.", "بريدك الإلكتروني"], "zh": ["订阅 ACC NEWS 简报", "安塔利亚房地产动态、市场分析与新项目；每周一封邮件。", "订阅", "谢谢，您已成功订阅。", "您的邮箱"]};
const nlBand = (lang) => { const n = NLB[lang] || NLB.en; return `<section class="nlb"><div class="wrap nlbi"><div><h2>${n[0]}</h2><p>${n[1]}</p></div><form name="bulten" method="POST" data-netlify="true" netlify-honeypot="bot" action="${home(lang)}?bulten=1"><input type="hidden" name="form-name" value="bulten"><input type="hidden" name="dil" value="${lang}"><input type="hidden" name="site" value="acchomesantalya.com"><p class="hp" hidden><input name="bot" tabindex="-1" autocomplete="off"></p><div class="nlrow"><input name="eposta" type="email" required placeholder="${n[4]} *" autocomplete="email" aria-label="${n[4]}"><button class="btn" type="submit">${n[2]}</button></div>${kvkkIn(lang)}<p class="nlok" hidden>${n[3]}</p></form></div></section><script>/[?&]bulten=1/.test(location.search)&&(function(){var e=document.querySelector('.nlok');e.hidden=false;e.scrollIntoView({block:'center'})})()</script>`; };
const turhostForms = (html) => html.replace(/<form([^>]*?)data-netlify="true"([^>]*?)action="([^"]*)"([^>]*)>/g, (m, a, b, act, c) => `<form${a}${b}action="/form.php"${c}><input type="hidden" name="_next" value="${act}">`);
const INLINE_CSS = (() => { try { return fs.readFileSync(path.join(path.dirname(new URL(import.meta.url).pathname), 'assets/style.css'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s*\n\s*/g, '').replace(/<\/style/gi, '<\\/style'); } catch { return ''; } })();
let FIRSTBN = '';
function heroOpt(html) {
  const i = html.indexOf('<div class="slides">'); if (i < 0) return html;
  let n = 0, first = '';
  const tail = html.slice(i).replace(/<div class="slide" style="background-image:([^"]*)"(?: data-bn="([^"]*)")?/g, (m, v, bn) => {
    n++; if (n === 1 && bn) { first = `${bn}-d-1920.webp`; FIRSTBN = bn; const grad = v.replace(/,?\s*url\('[^']+'\)/, ''); return `<div class="slide s1"><picture><source media="(max-width:700px)" srcset="${bn}-m-720.webp 720w, ${bn}-m-1080.webp 1080w" sizes="100vw"><img class="sbg" src="${bn}-d-1920.webp" srcset="${bn}-d-1280.webp 1280w, ${bn}-d-1920.webp 1920w" sizes="100vw" alt="" fetchpriority="high" decoding="async" width="1920" height="825"></picture><span class="sov" style="background-image:${grad}"></span`; }
    if (bn) return `<div class="slide" data-bgs="${v}" data-bgsm="${v.replace(/-d-1920\.webp/, '-m-1080.webp')}"`;
    if (n === 1) { const u = v.match(/url\('([^']+)'\)/); if (!u) return m; first = u[1]; const grad = v.replace(/,?\s*url\('[^']+'\)/, ''); const ss = /^\/img\//.test(first) ? ` srcset="${rimg(first, 640)} 640w, ${rimg(first, 960)} 960w, ${first} 1200w" sizes="100vw"` : ''; return `<div class="slide s1"><img class="sbg" src="${first}"${ss} alt="" fetchpriority="high" decoding="async" width="1200" height="600"><span class="sov" style="background-image:${grad}"></span`; }
    return `<div class="slide" data-bgs="${v}"`;
  });
  html = html.slice(0, i) + tail;
  // banner'lı sayfalarda (ana sayfalar) stil dosyası sayfaya gömülür: telefon ayrı CSS dosyasını beklemeden banner'ı çizer
  if (first && INLINE_CSS) html = html.replace(/<link rel="stylesheet" href="\/assets\/style\.css\?v=[^"]*">/, `<style>${INLINE_CSS}</style>`);
  if (first && FIRSTBN) { const bn = FIRSTBN; FIRSTBN = ''; html = html.replace('</head>', `<link rel="preload" as="image" media="(max-width:700px)" imagesrcset="${bn}-m-720.webp 720w, ${bn}-m-1080.webp 1080w" imagesizes="100vw" fetchpriority="high"><link rel="preload" as="image" media="(min-width:701px)" imagesrcset="${bn}-d-1280.webp 1280w, ${bn}-d-1920.webp 1920w" imagesizes="100vw" fetchpriority="high"></head>`); return html; }
  if (first) html = html.replace('</head>', `<link rel="preload" as="image" href="${first}"${/^\/img\//.test(first) ? ` imagesrcset="${rimg(first, 640)} 640w, ${rimg(first, 960)} 960w, ${first} 1200w" imagesizes="100vw"` : ''} fetchpriority="high"></head>`);
  return html;
}
const write = (rel, html) => { if (typeof html === 'string' && rel.endsWith('.html')) html = enSpan(heroOpt(html.replace(/<iframe([^>]*?) src="/g, '<iframe$1 data-csrc="'))); if (HOST === 'turhost' && typeof html === 'string' && rel.endsWith('.html')) html = turhostForms(html); const f = path.join(OUT, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, html); };
const placeholder = `<div class="ph"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 30 32 10l24 20v24H40V38H24v16H8z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/></svg></div>`;

const AREAS_SERVED = ['Muratpaşa', 'Konyaaltı', 'Kepez', 'Aksu', 'Döşemealtı', 'Serik', 'Kemer'];
const agentSchema = {
  '@context': 'https://schema.org', '@type': 'RealEstateAgent', '@id': `${SITE.domain}/#org`, name: SITE.brand, alternateName: SITE.shortBrand, url: `${SITE.domain}/`, logo: `${SITE.domain}/img/logo/acc-homes-logo.png`, image: `${SITE.domain}/img/acc-plaza-og.jpg`,
  telephone: SITE.phone, email: SITE.email, slogan: SITE.slogan.tr, foundingDate: '2024', knowsLanguage: ['tr', 'en'], priceRange: '₺₺₺',
  address: { '@type': 'PostalAddress', streetAddress: SITE.address.street, addressLocality: SITE.address.district, addressRegion: SITE.address.city, addressCountry: SITE.address.country },
  areaServed: [...AREAS_SERVED.map((n) => ({ '@type': 'AdministrativeArea', name: `${n}, Antalya` })), { '@type': 'City', name: 'Antalya' }],
  founder: { '@type': 'Person', name: 'Ali Caner Can' },
  hasMap: SITE.google.mapsUrl,
  sameAs: [SITE.instagram.url, SITE.google.mapsUrl, SITE.social.facebook, SITE.social.facebook2, SITE.social.linkedin, 'https://www.linkedin.com/in/alicanercantherealtor/'],
};
const websiteSchema = { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${SITE.domain}/#website`, url: `${SITE.domain}/`, name: SITE.shortBrand, publisher: { '@id': `${SITE.domain}/#org` }, inLanguage: ['tr', 'en'] };

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
const telIn = (lang, ph) => `<div class="cptel"><select name="ulke_kodu" aria-label="${s('dialCode', lang)}">${DIAL.map(([c, d]) => `<option value="${d}"${d === (DEF_DIAL[lang] || '+90') && c !== 'KZ' ? ' selected' : ''}>${c} ${d}</option>`).join('')}</select><input name="telefon" type="tel" placeholder="${ph} *" required autocomplete="tel-national"></div>`;
const kvkkIn = (lang) => `<label class="chk"><input type="checkbox" name="kvkk_onay" value="evet" required> <span>${s('consent', lang).replace('{{LINK}}', `<a href="${url(lang, 'privacy')}" target="_blank" rel="noopener">${PAGES.privacy.nav[lang] || PAGES.privacy.nav.en}</a>`)} *</span></label>`;
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
  return `${nlBand(lang)}<footer class="foot"><div class="wrap fcols">
${col(s('popSearches', lang), pop.map(([n, q]) => [n, url(lang, 'list') + q]))}
${col(s('popAreas', lang), [...AREA_GUIDES.map((a) => [a.ilce, aUrl(GL(lang), a)]), [s('areasTitle', lang) + ' →', url(lang, 'areas')]])}
${col(GUIDE_TITLE[lang], GUIDES.map((g) => [gC(g, L).title, gUrl(L, g)]))}
${col(t.company, [[nv('about'), url(lang, 'about')], [nv('broker'), url(lang, 'broker')], [nv('team'), url(lang, 'team')], [t.revTitle, url(lang, 'reviews')], [nv('licences'), url(lang, 'licences')], [EVENTS.nav[lang] || EVENTS.nav.en, url(lang, 'events')], [nv('join'), url(lang, 'join')]])}
${col(s('usefulLinks', lang), [...(NEWS_LANGS.includes(lang) && NEWS.length ? [['ACC NEWS', newsUrl(lang)]] : []), [nv('services'), url(lang, 'services')], [nv('sell'), url(lang, 'sell')], [nv('viewing'), url(lang, 'viewing')], [s('dlPageTitle', lang), url(lang, 'downloads')], [t.projects, url(lang, 'projects')], [t.blog, url(lang, 'blog')], [t.nav.contact, url(lang, 'contact')]])}
</div>
<div class="wrap fmid">
<div class="fbrand"><img src="/img/logo/acc-siyah.svg" alt="ACC HOMES International Real Estate" width="171" height="50" loading="lazy"><p class="slogan">${esc(SITE.slogan[lang])}</p><p>${esc(t.footerAbout)}</p></div>
<div class="fcontact"><p><b>${t.office}</b><br>${esc(SITE.address.street)}<br>${esc(SITE.address.district)} / ${esc(SITE.address.city)}</p><p><a href="tel:${SITE.phoneRaw}"><b dir="ltr">${SITE.phone}</b></a><br><a href="mailto:${SITE.email}">${SITE.email}</a></p></div>
<div class="fcenter"><div class="fpills"><a href="${url(lang, 'join')}">🤝 ${s('partnerPill', lang)}</a><a href="${url(lang, 'viewing')}">📱 ${nv('viewing')}</a></div>
<div class="social"><a href="${SITE.instagram.url}" target="_blank" rel="noopener" aria-label="Instagram">${ICON_IG}</a><a href="${SITE.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.5 1.6-1.5h1.7V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.6V14h2.8v8h3.1z"/></svg></a><a href="${SITE.social.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5c0-1.2 0-2.75-1.67-2.75-1.68 0-1.94 1.3-1.94 2.65V21h-4z"/></svg></a><a href="${waLink(t.waGeneral)}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICON_WA}</a><a href="${SITE.google.mapsUrl}" target="_blank" rel="noopener" aria-label="Google">${ICON_G}</a></div>
<a class="frating" href="${SITE.google.mapsUrl}" target="_blank" rel="noopener">${ICON_G}<b>${fmtRating(lang)}</b>${stars}<span>${t.gReviews(SITE.google.reviews)}</span></a></div>
</div>
<div class="wrap flangs">${LANGS.map((l) => `<a href="${home(l)}" lang="${l}"${l === lang ? ' aria-current="true"' : ''}>${ENDONYM[l]}</a>`).join('')}</div>
<div class="wrap freg"><b>${s('licence', lang)}</b> · ${SITE.licence.join(' · ')}</div>
<div class="wrap copy">© 2024–${new Date().getFullYear()} ${esc(SITE.brand)} · ${t.rights} · <a href="${url(lang, 'privacy')}">${nv('privacy')}</a> · <button type="button" class="cbn-re">${CB[GL(lang)].reopen}</button></div></footer>`;
}

// ---------- sayfa iskeleti ----------
function LLMS() {
  const D = SITE.domain; const a = (u) => D + u;
  return `# ACC HOMES International Real Estate

> Antalya merkezli kurumsal gayrimenkul ofisi. 2024'te kuruldu; Broker & Owner Ali Caner Can. Genel merkez ACC Plaza (Yeşilbahçe, Muratpaşa, Antalya), yaklaşık 50 iş ortağı. Yerli ve yabancı alıcılara satılık/kiralık konut, villa, ticari gayrimenkul ve yeni projelerde danışmanlık; müteahhitlere proje satış ve pazarlama yönetimi. Hizmet dilleri Türkçe ve İngilizce.

> Antalya-based real estate agency founded in 2024 by broker Ali Caner Can, headquartered at ACC Plaza (Yeşilbahçe, Muratpaşa, Antalya) with around 50 partner consultants. Helps local and international buyers buy, sell and rent apartments, villas and commercial property in Antalya, including citizenship- and residency-eligible homes, and runs project sales for developers.

## Temel bilgiler / Key facts
- Ad / Name: ACC HOMES International Real Estate
- Adres / Address: ${SITE.address.street}, ${SITE.address.district}, ${SITE.address.city}, Türkiye
- Telefon / WhatsApp: ${SITE.phone}
- E-posta / Email: ${SITE.email}
- Google puanı / Google rating: ${String(SITE.google.rating).replace('.', ',')} / 5 (${SITE.google.reviews}+ yorum, ${SITE.google.asOf})
- Sosyal / Social: Instagram ${SITE.instagram.url} · Facebook ${SITE.social.facebook} · LinkedIn ${SITE.social.linkedin}
- Lisanslar / Licences: Taşınmaz Ticareti Yetki Belgesi ${SITE.licence.join(', ')}
- Hizmet bölgeleri / Areas: Muratpaşa (Lara, Fener, Şirinyalı), Konyaaltı, Aksu (Altıntaş, Kundu), Döşemealtı, Kepez, Serik (Belek, Kadriye), Kemer
- Yetkili satış ofisi olduğu projeler / Authorised sales office: Prime Lara (Altıntaş), Antalle Concept Houses (Döşemealtı)

## Kurumsal / Company
- [Hakkımızda](${a(url('tr', 'about'))}) · [About](${a(url('en', 'about'))})
- [Ali Caner Can, Broker & Kurucu](${a(url('tr', 'broker'))}) · [Ali Caner Can, Broker & Founder](${a(url('en', 'broker'))})
- [Hizmetlerimiz](${a(url('tr', 'services'))}) · [Services](${a(url('en', 'services'))})
- [Müşteri yorumları](${a(url('tr', 'reviews'))}) · [Lisanslar](${a(url('tr', 'licences'))}) · [İletişim](${a(url('tr', 'contact'))})

## ACC NEWS (haftalık emlak bülteni / weekly real estate brief)
${NEWS.map((n) => `- [${n.tr.h1} · ${n.date}](${a(newsUrl('tr', n.date))}) · [EN](${a(newsUrl('en', n.date))}) · [RU](${a(newsUrl('ru', n.date))})`).join('\n')}

## Alıcı rehberi / Buyer's guide
${GUIDES.map((g) => `- [${g.tr.title}](${a(gUrl('tr', g))}) · [${g.enc.title}](${a(gUrl('en', g))})`).join('\n')}

## Bölge ve mahalle rehberleri / Area guides
${AREA_GUIDES.map((x) => `- [${x.tr.title}](${a(aUrl('tr', x))}) · [${x.en.title}](${a(aUrl('en', x))})`).join('\n')}
${MAHALLELER.map((m) => `- [${m.tr.title}](${a(mUrl('tr', m))}) · [${m.en.title}](${a(mUrl('en', m))})`).join('\n')}
- [Altıntaş Rehberi](${a(url('tr', 'guide'))}) · [Altıntaş Guide](${a(url('en', 'guide'))})

## Veri ve analiz / Data and insights
${ALLPOSTS.map((p) => `- [${postFor(p, 'tr').title}](${a(url('tr', 'blog', p.slug))})`).join('\n')}

## İlanlar / Listings
- [Tüm ilanlar](${a(url('tr', 'list'))}) · [All listings](${a(url('en', 'list'))})
- [Projeler](${a(url('tr', 'projects'))}) · [Projects](${a(url('en', 'projects'))})
`;
}
const AN = SITE.analytics || {};
const ANALYTICS_HEAD = `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});gtag('set','url_passthrough',true);gtag('set','ads_data_redaction',true);(function(){try{var c=JSON.parse(localStorage.getItem('acc_consent')||'null');if(c){gtag('consent','update',{analytics_storage:c.a?'granted':'denied',ad_storage:c.m?'granted':'denied',ad_user_data:c.m?'granted':'denied',ad_personalization:c.m?'granted':'denied'});}}catch(e){}})();window.ACC_PIXEL=${JSON.stringify(AN.metaPixel || '')};window.ACC_CLARITY=${JSON.stringify(AN.clarity || '')};</script>${AN.ga4 ? `<script>gtag('js',new Date());gtag('config','${AN.ga4}');addEventListener('load',function(){setTimeout(function(){var s=document.createElement('script');s.async=1;s.src='https://www.googletagmanager.com/gtag/js?id=${AN.ga4}';document.head.appendChild(s);},1200);});</script>` : ''}`;
const CB = { tr: { t: 'Çerez tercihleriniz', p: 'Sitemizi iyileştirmek için ziyaret istatistikleri (Google Analytics, Microsoft Clarity) ve reklamlarımızın etkisini ölçmek için pazarlama çerezleri (Meta) kullanmak istiyoruz. Onayınız olmadan bu çerezler çalışmaz. Ayrıntılar için', l: 'KVKK ve Gizlilik Politikası', acc: 'Kabul et', rej: 'Reddet', set: 'Ayarlar', save: 'Seçimi kaydet', a: 'İstatistik (Google Analytics, Microsoft Clarity)', m: 'Pazarlama (Meta Pikseli, reklam ölçümü)', n: 'Zorunlu (dil, para birimi, favoriler)', reopen: 'Çerez ayarları', map: 'Haritayı göster', mapN: 'Harita Google tarafından sunulur ve çerez kullanabilir.' }, en: { t: 'Your cookie choices', p: 'We would like to use visit statistics (Google Analytics, Microsoft Clarity) to improve our site and marketing cookies (Meta) to measure our ads. These cookies only run with your consent. See our', l: 'Privacy Policy', acc: 'Accept', rej: 'Reject', set: 'Settings', save: 'Save choice', a: 'Statistics (Google Analytics, Microsoft Clarity)', m: 'Marketing (Meta Pixel, ad measurement)', n: 'Necessary (language, currency, favourites)', reopen: 'Cookie settings', map: 'Show map', mapN: 'The map is provided by Google and may use cookies.' } };
function consentBanner(lang) {
  const c = CB[GL(lang)];
  return `<div class="cbn" id="cbn" hidden role="dialog" aria-live="polite" aria-label="${c.t}" data-mapl="${esc(c.map)}" data-mapn="${esc(c.mapN)}"><div class="cbn-in"><b>${c.t}</b><p>${c.p} <a href="${url(lang, 'privacy')}">${c.l}</a>.</p>
<div class="cbn-set" hidden><label><input type="checkbox" checked disabled> ${c.n}</label><label><input type="checkbox" data-c="a"> ${c.a}</label><label><input type="checkbox" data-c="m"> ${c.m}</label></div>
<div class="cbn-b"><button type="button" class="btn ghost sm" data-cb="set">${c.set}</button><button type="button" class="btn ghost sm" data-cb="rej">${c.rej}</button><button type="button" class="btn ghost sm" data-cb="save" hidden>${c.save}</button><button type="button" class="btn sm" data-cb="acc">${c.acc}</button></div></div></div>`;
}
function crumbSchema(body, title, canonical) {
  const m = body.match(/<nav class="crumbs[^"]*">([\s\S]*?)<\/nav>/); if (!m) return [];
  const items = [...m[1].matchAll(/<a href="([^"]+)">([\s\S]*?)<\/a>/g)].map(([, u, n]) => [n.replace(/<[^>]+>/g, '').trim(), u]);
  const cur = title.replace(/\s*\|\s*ACC HOMES\s*$/, '').trim();
  if (!items.length || items.at(-1)[1] !== canonical) items.push([cur, canonical]);
  const clean = (x) => x.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"');
  return [{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map(([n, u], i) => ({ '@type': 'ListItem', position: i + 1, name: clean(n), item: SITE.domain + u })) }];
}
function layout({ lang, title, desc, canonical, alternates, body, schema = [], ogImage, noindex, ogType, published }) {
  if (SEO_META[canonical]) [title, desc] = SEO_META[canonical];
  const t = T[lang];
  const alt = alternates ? Object.entries(alternates).map(([l, u]) => `<link rel="alternate" hreflang="${l}" href="${SITE.domain}${u}">`).join('') + `<link rel="alternate" hreflang="x-default" href="${SITE.domain}${alternates.tr}">` : '';
  const langSwitch = alternates ? LANGS.map((l) => `<a href="${alternates[l] || (alternates.tr && alternates.tr.startsWith('/alici-rehberi') ? url(l, 'buyersguide') : home(l))}"${l === lang ? ' aria-current="true"' : ''}>${l.toUpperCase()}</a>`).join('') : '';
  return (RTL.has(lang) ? (h) => h.replaceAll('→', '←') : (h) => h)(`<!doctype html><html lang="${t.htmlLang}"${RTL.has(lang) ? ' dir="rtl"' : ''}><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>${noindex ? '<meta name="robots" content="noindex">' : ''}<meta name="description" content="${esc(desc)}"><link rel="canonical" href="${SITE.domain}${canonical}">${alt}
<meta property="og:type" content="${ogType || 'website'}">${published ? `<meta property="article:published_time" content="${published}T09:00:00+03:00"><meta property="article:author" content="Ali Caner Can">` : ''}<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${SITE.domain}${canonical}"><meta property="og:locale" content="${t.locale}"><meta property="og:site_name" content="ACC HOMES International Real Estate"><meta property="og:image" content="${SITE.domain}${ogImage || '/img/acc-plaza-og.jpg'}">${ogImage ? '' : '<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">'}<meta property="og:image:alt" content="${esc(title)}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(desc)}"><meta name="twitter:image" content="${SITE.domain}${ogImage || '/img/acc-plaza-og.jpg'}">
${ANALYTICS_HEAD}<meta name="theme-color" content="#E02A3C"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png">${FONTS_OK ? FONTS_PRELOAD + `<style>${FONTS_CSS}</style>` : ''}<link rel="stylesheet" href="/assets/style.css?v=${VER}">
${[agentSchema, ...(canonical === home(lang) ? [websiteSchema] : []), ...(schema.some((x) => x && x['@type'] === 'BreadcrumbList') ? [] : crumbSchema(body, title, canonical)), ...schema].filter(Boolean).map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('')}
</head><body>
${DEMO ? `<div class="demo">${t.demo}</div>` : ''}
<header class="top"><div class="tbar"><div class="wrap tbin"><span class="tloc">📍 ACC Plaza · Yeşilbahçe, Muratpaşa / Antalya</span><span class="tcon"><a class="tphone" href="tel:${SITE.phoneRaw}" aria-label="${t.call} ${SITE.phone}"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg><b dir="ltr">${SITE.phone}</b></a><a class="twa" href="${waLink(t.waGeneral)}" target="_blank" rel="noopener">WhatsApp</a><a class="tmail" href="mailto:${SITE.email}">${SITE.email}</a><a class="tcrm" href="${SITE.crmUrl}" target="_blank" rel="noopener">👤 ${GL(lang) === 'tr' ? 'İş Ortağı Girişi' : 'Partner Login'}</a><a class="tfav" href="${url(lang, 'favorites')}">♡ <span data-fav-count>0</span></a></span></div></div><div class="wrap nav">
<a class="logo" href="${home(lang)}"><img src="/img/logo/acc-siyah.svg" alt="ACC HOMES International Real Estate" width="154" height="45"></a>
<nav class="menu"><a href="${url(lang, 'list')}">${t.nav.list}</a><a href="${url(lang, 'projects')}">${t.projects}</a><a href="${url(lang, 'buyersguide')}">${GUIDE_TITLE[lang]}</a><a href="${url(lang, 'services')}">${PAGES.services.nav[lang]}</a><div class="dd"><button type="button">${t.company} ▾</button><div class="ddm"><a href="${url(lang, 'about')}">${PAGES.about.nav[lang]}</a><a href="${url(lang, 'broker')}">${PAGES.broker.nav[lang]}</a><a href="${url(lang, 'team')}">${PAGES.team.nav[lang]}</a><a href="${url(lang, 'reviews')}">${t.revTitle}</a><a href="${url(lang, 'licences')}">${PAGES.licences.nav[lang] || PAGES.licences.nav.en}</a><a href="${url(lang, 'events')}">${EVENTS.nav[lang] || EVENTS.nav.en}</a><a href="${url(lang, 'join')}">${PAGES.join.nav[lang]}</a></div></div><a href="${url(lang, 'blog')}">${t.blog}</a><a href="${url(lang, 'contact')}">${t.nav.contact}</a></nav>
<details class="mnav"><summary aria-label="${t.menu}">☰</summary><div class="mpanel"><a href="${url(lang, 'list')}">${t.nav.list}</a><a href="${url(lang, 'projects')}">${t.projects}</a><a href="${url(lang, 'buyersguide')}">${GUIDE_TITLE[lang]}</a><a href="${url(lang, 'services')}">${PAGES.services.nav[lang]}</a><a href="${url(lang, 'about')}">${PAGES.about.nav[lang]}</a><a href="${url(lang, 'broker')}">${PAGES.broker.nav[lang]}</a><a href="${url(lang, 'team')}">${PAGES.team.nav[lang]}</a><a href="${url(lang, 'sell')}">${PAGES.sell.nav[lang] || PAGES.sell.nav.en}</a><a href="${url(lang, 'join')}">${PAGES.join.nav[lang]}</a><a href="${url(lang, 'guide')}">${t.nav.guide}</a><a href="${url(lang, 'blog')}">${t.blog}</a><a href="${url(lang, 'contact')}">${t.nav.contact}</a><a class="mcrm" href="${SITE.crmUrl}" target="_blank" rel="noopener">👤 ${GL(lang) === 'tr' ? 'İş Ortağı Girişi' : 'Partner Login'}</a></div></details>
${settingsBtn(lang)}
<a class="btn sm" href="tel:${SITE.phoneRaw}">${t.call}</a>
</div>${settingsPanel(lang, alternates)}</header>
<main>${body}</main>
${footer(lang)}
${callPopup(lang)}
${stickyBar(lang)}
<script src="/assets/app.js?v=${VER}" defer></script>${consentBanner(lang)}<nav class="mbar" aria-label="Mobil">${[[home(lang), '🏠', GL(lang) === 'tr' ? 'Keşfet' : 'Explore'], [url(lang, 'list'), '🔍', GL(lang) === 'tr' ? 'İlanlar' : 'Listings'], [`tel:${SITE.phoneRaw}`, '📞', GL(lang) === 'tr' ? 'Ara' : 'Call'], [waLink(t.waGeneral), '💬', 'WhatsApp'], [url(lang, 'team'), '👥', GL(lang) === 'tr' ? 'Ekibimiz' : 'Our team']].map(([u, i, n]) => `<a href="${u}"${u.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}><span>${i}</span>${n}</a>`).join('')}</nav>
</body></html>`);
}

// ---------- bileşenler ----------
// ---------- proje medyası (Google Drive → derlemede indirilir → Netlify Image CDN ile WebP) ----------
const HOST = process.env.SITE_HOST || 'netlify'; // 'netlify' (önizleme/yedek) | 'turhost' (canlı)
const RJOBS = new Map();
function rimg(src, w, q = 74) {
  if (HOST !== 'turhost') return `/.netlify/images?url=${encodeURIComponent(src)}&w=${w}&fm=webp&q=${q}`;
  const out = `/r/${src.replace(/^\//, '').replace(/\.(webp|jpe?g|png)$/i, '').replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-${w}.webp`;
  RJOBS.set(out, { src, w, q }); return out;
}
const MEDIA = {};
async function fetchDriveMedia() {
  const ids = new Set();
  for (const p of PROJECTS) { [p.cover, p.media.hero, p.media.location, ...(p.media.gallery || [])].filter(Boolean).forEach((i) => (String(i).startsWith('/') ? (MEDIA[i] = i) : ids.add(i))); }
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
const cdn = (id, w) => (MEDIA[id] ? rimg(MEDIA[id], w, 72) : null);
const pimg = (id, w, alt, cls = '') => { const u = cdn(id, w); return u ? `<img class="${cls}" src="${u}" alt="${esc(alt)}" loading="lazy">` : ''; };

const OFFICE = [['lobi', 'ACC Plaza lobi ve proje maketi'], ['oturma', 'ACC Plaza müşteri bekleme alanı'], ['amfi', 'ACC Plaza amfi ve etkinlik alanı'], ['sunum', 'ACC Plaza sunum ve eğitim salonu'], ['kahve', 'ACC Plaza kahve köşesi'], ['maket', 'ACC Plaza proje maketleri'], ['calisma', 'ACC Plaza ortak çalışma alanı'], ['toplanti', 'ACC Plaza toplantı masaları']];
const officeGallery = (n = 8) => `<div class="ogal">${OFFICE.slice(0, n).map(([f, a]) => `<figure><img src="/img/ofis/${f}.webp" alt="${a}" loading="lazy" width="900" height="1120"></figure>`).join('')}</div>`;

function projectCards(lang) {
  const t = T[lang];
  return `<div class="pcards">${PROJECTS.map((p) => { const I = p.i18n && ANTALLE[lang]; const c = p.i18n ? rimg(ANTALLE_SHARED.hero, 800) : p.cover && cdn(p.cover, 800); return `<a class="pcard" href="${p.i18n ? url(lang, 'projects', p.slug) : `/projeler/${p.slug}/`}"><div class="pcimg">${c ? `<img src="${c}" alt="${esc(p.name)}" width="800" height="500" loading="lazy">` : `<div class="ph pname"><span>${esc(p.name)}</span></div>`}</div><div class="pcbody"><small>${esc(p.area)} · ${esc(p.developer)}</small><h3>${esc(p.name)}</h3><p>${esc(I ? I.card : p.card)}</p><span class="more">${t.projectsCta} →</span></div></a>`; }).join('')}</div>`;
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
  if (p.walk || p.drive) S.push(`<section class="wrap sec"><h2>Eşsiz Lokasyon</h2><div class="dist">${p.walk ? `<div><h3>🚶 Yürüme mesafesinde</h3><ul>${p.walk.map(([i, n, d]) => `<li><span>${i} ${esc(n)}</span><b>${esc(d)}</b></li>`).join('')}</ul></div>` : ''}<div><h3>🚗 Araçla</h3><ul>${(p.drive || []).map(([i, n, d]) => `<li><span>${i} ${esc(n)}</span><b>${esc(d)}</b></li>`).join('')}</ul></div></div>${p.media.location ? `<div class="locimg">${pimg(p.media.location, 1400, `${p.name} konum`)}</div>` : ''}</section>`);
  if (p.tabs) S.push(`<section class="wrap sec"><div class="tabs" role="tablist">${p.tabs.map((x, i) => `<button role="tab" data-tab="${x.id}"${i === 0 ? ' aria-selected="true"' : ''}>${esc(x.name)}<small>${esc(x.kicker)}</small></button>`).join('')}</div>${p.tabs.map((x, i) => `<div class="tabp" data-panel="${x.id}"${i ? ' hidden' : ''}><h2>${esc(x.name)}: ${esc(x.kicker)}</h2><p>${esc(x.text)}</p><div class="cards3"><div><h3>Birimler</h3><ul class="ticks">${x.units.map((u) => `<li>${esc(u)}</li>`).join('')}</ul></div><div class="span2"><h3>Öne çıkanlar</h3><ul class="ticks">${x.feats.map((u) => `<li>${esc(u)}</li>`).join('')}</ul></div></div></div>`).join('')}</section>`);
  if (p.features) S.push(`<section class="lfeat"><div class="wrap"><h2>${esc(p.featuresTitle)}</h2><div class="fgrid2">${p.features.map(([i, x]) => `<div><span>${i}</span><p>${esc(x)}</p></div>`).join('')}</div></div></section>`);
  if (p.progress) S.push(`<section class="wrap sec"><h2>${esc(p.progress.title)}</h2><p>${esc(p.progress.text)}</p><div class="lgal">${p.progress.imgs.map((f) => `<a href="${rimg(f, 1800)}" target="_blank" rel="noopener"><img src="${rimg(f, 900)}" alt="${esc(p.name)} güncel inşaat durumu" loading="lazy"></a>`).join('')}</div></section>`);
  if (p.pay) S.push(`<section class="wrap sec"><h2>${esc(p.payTitle || 'Ödeme Seçenekleri')}</h2><div class="phases">${p.pay.map((x) => `<div class="phase"><span class="ptag">${esc(x.tag)}</span><h3>${esc(x.name)}</h3><ul class="ticks">${x.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join('')}</div>${p.payNote ? `<p class="lnote">${esc(p.payNote)}</p>` : ''}</section>`);
  if (p.phases) S.push(`<section class="wrap sec"><h2>${esc(p.phasesTitle)}</h2><div class="phases">${p.phases.map((x) => `<div class="phase${x.hot ? ' hot' : ''}"><span class="ptag">${esc(x.tag)}</span><h3>${esc(x.name)}</h3><p class="pstat">${esc(x.status)}</p><ul class="ticks">${x.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul><div class="pprice">${esc(x.price)}</div><a class="btn ${x.hot ? '' : 'ghost'}" href="#form">Teklif isteyin</a></div>`).join('')}</div></section>`);
  if (p.plans) S.push(`<section class="wrap sec"><h2>Kat Planları</h2><div class="plans">${p.plans.map((x) => `<div class="plan"><h3>${esc(x.name)}</h3><b class="parea">${esc(x.area)}</b><table class="spec">${x.rows.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}</table><p>${esc(x.note)}</p></div>`).join('')}</div></section>`);
  const gal = (p.media.gallery || []).filter((id) => MEDIA[id]);
  if (gal.length) S.push(`<section class="wrap sec"><h2>Galeri</h2><div class="lgal">${gal.map((id) => `<a href="${cdn(id, 1800)}" target="_blank" rel="noopener">${pimg(id, 900, p.name)}</a>`).join('')}</div></section>`);
  if (p.tours && p.tours.length) S.push(`<section class="wrap sec"><h2>Sanal Tur</h2>${p.tours.map(([n, u]) => `<h3>${esc(n)}</h3><div class="tour"><iframe src="${esc(u)}" loading="lazy" allowfullscreen title="${esc(n)}"></iframe></div>`).join('')}</section>`);
  if (p.devTitle) S.push(`<section class="ldev"><div class="wrap"><h2>${esc(p.devTitle)}</h2><p>${esc(p.devText)}</p></div></section>`);
  if (p.mapQuery) S.push(`<section class="wrap sec"><div class="sechead"><h2>${esc(p.locTitle || 'Konum')}</h2></div>${p.locText ? `<p>${esc(p.locText)}</p>` : ''}<div class="map"><iframe src="https://www.google.com/maps?q=${encodeURIComponent(p.mapQuery)}&output=embed" loading="lazy" title="${esc(p.name)} konum"></iframe></div>${p.links ? `<div class="ctas">${p.links.map(([n, u]) => `<a class="btn ghost" href="${u}" target="_blank" rel="noopener">📍 ${esc(n)}</a>`).join('')}</div>` : ''}</section>`);
  const contacts = p.contacts.length ? p.contacts : p.phone ? [['Proje satış ofisi', p.phone, p.phoneText]] : [['ACC HOMES', SITE.phoneRaw, SITE.phone]];
  S.push(`<section class="lcta" id="form"><div class="wrap lctagrid"><div><h2>Bilgi ve Fiyat Listesi</h2><p>${esc(p.cta)}</p><div class="cbtns">${contacts.map(([n, num, txt]) => `<a class="wabtn" href="${wa(num, n)}" target="_blank" rel="noopener"><b>${esc(n)}</b><span>WhatsApp · ${esc(txt)}</span></a>`).join('')}</div>${p.instagram ? `<p><a href="${p.instagram}" target="_blank" rel="noopener">Instagram’da projeyi takip edin →</a></p>` : ''}</div>
<form class="box form" name="proje-talep" method="POST" data-netlify="true" netlify-honeypot="bot" action="/iletisim/?ok=1"><input type="hidden" name="form-name" value="proje-talep"><input type="hidden" name="proje" value="${esc(p.name)}"><p hidden><input name="bot"></p><input type="hidden" name="dil" value="tr"><h3>Beni arayın</h3><input name="ad" placeholder="Ad Soyad *" required autocomplete="name">${telIn('tr', 'Telefon')}<input name="eposta" type="email" placeholder="E-posta"><small>Bilgileriniz yalnızca sizinle iletişim için kullanılır.</small>${kvkkIn('tr')}<button class="btn" type="submit">Beni arayın</button></form></div></section>`);
  const schema = [{ '@context': 'https://schema.org', '@type': 'Residence', name: p.name, description: p.desc, address: { '@type': 'PostalAddress', addressLocality: p.area, addressRegion: 'Antalya', addressCountry: 'TR' } }];
  const og = p.media.hero && MEDIA[p.media.hero] ? MEDIA[p.media.hero] : '/img/acc-plaza-og.jpg';
  write(path.join('/projeler', p.slug, 'index.html'), layout({ lang, title: `${p.name} | ${p.area} | ACC HOMES`, desc: p.desc, canonical: `/projeler/${p.slug}/`, alternates: null, body: S.join('\n'), schema, ogImage: og }));
}

// Antalle sayfasında fiyat gösterilmez (Kasım 2026 kararı): USD/TL tutar içeren satırlar atlanır
const FIYAT_RE = /USD|\$|₺|\bTL\b/;
function pageProjectI18n(p, lang) {
  const t = T[lang]; const C = ANTALLE[lang]; const u = C.ui; const SH = ANTALLE_SHARED;
  const here = url(lang, 'projects', p.slug);
  const wa = (num) => `https://wa.me/${num.replace('+', '')}?text=${encodeURIComponent(u.wa)}`;
  const contacts = SH.contacts.map(([k, num, txt]) => [u[k], num, txt]);
  const pic = (f, w, alt, lazy = true) => `<img src="${rimg(`/img/antalle/${f}.webp`, w)}" alt="${esc(alt)}"${lazy ? ' loading="lazy" decoding="async"' : ''}>`;
  const cap = (x) => (GL(lang) === 'tr' ? x[1] : x[2]);
  const S = [];
  S.push(`<section class="lhero" style="background-image:linear-gradient(180deg,rgba(0,0,0,.25),rgba(0,0,0,.62)),url('${rimg(SH.hero, 1920)}')"><div class="wrap"><nav class="crumbs light"><a href="${home(lang)}">${t.nav.home}</a> / <a href="${url(lang, 'projects')}">${t.projects}</a></nav><p class="eyebrow">${esc(p.area)} · ${esc(p.developer)}</p><h1>${esc(C.title)}</h1><p class="lsub">${esc(C.sub)}</p>
<div class="lbadges">${C.badges.map(([i, h, d]) => `<div><span>${i}</span><b>${esc(h)}</b><small>${esc(d)}</small></div>`).join('')}</div>
<div class="ctas">${DAVET_AKTIF ? `<a class="btn" href="#davet" style="background:#1E6339;border-color:#1E6339;color:#fff">🥂 ${esc(davetTx(lang).cta)} · ${esc(davetTx(lang).when.split(' · ')[0])}</a>` : ''}<a class="btn${DAVET_AKTIF ? ' ghost light' : ''}" href="#form">${esc(u.req)}</a><a class="btn ghost light" href="tel:${contacts[0][1]}">${esc(u.call)}</a><a class="btn ghost light" href="${SH.telegram}" target="_blank" rel="noopener">✈️ ${esc(u.tg)}</a></div></div></section>`);
  if (DAVET_AKTIF) S.push(davetSection(lang, { esc, telIn, privacyUrl: url(lang, 'privacy'), mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.mapQuery)}`, waNum: contacts[0][1].replace('+', '') }));
  S.push(`<p class="wrap lnote" id="citizenship">${esc(C.badgeNote)}</p>`);
  S.push(`<section class="wrap sec" id="why"><h2>${esc(C.whyTitle)}</h2><div class="cards3 awhy">${C.why.map(([i, h, d]) => `<div><h3><span>${i}</span> ${esc(h)}</h3><p>${esc(d)}</p></div>`).join('')}</div></section>`);
  S.push(`<section class="wrap sec" id="units"><h2>${esc(C.unitsTitle)}</h2><div class="plans units">${C.units.map(([n, a, d]) => `<div class="plan"><h3>${esc(n)}</h3><b class="parea">${esc(a)}</b><p>${esc(d)}</p></div>`).join('')}</div></section>`);
  S.push(`<section class="larch"><div class="wrap larchg"><div><p class="eyebrow">Antalle</p><h2>${esc(C.archTitle)}</h2><p>${esc(C.archText)}</p></div><div class="larchimg">${pic('aksam-ic-avlu', 1200, cap(SH.photos[1]))}</div></div></section>`);
  S.push(`<section class="lfeat"><div class="wrap"><h2>${esc(C.featuresTitle)}</h2><div class="fgrid2">${C.features.map(([i, x]) => `<div><span>${i}</span><p>${esc(x)}</p></div>`).join('')}</div></div></section>`);
  S.push(`<section class="wrap sec" id="plan"><h2>${esc(C.planTitle)}</h2><p>${esc(C.planText)}</p><ol class="mplan">${C.plan.map(([n, st, d], i) => `<li${i === 0 ? ' class="done"' : ''}><b>${esc(n)}</b><span class="mst">${esc(st)}</span><p>${esc(d)}</p></li>`).join('')}</ol></section>`);
  S.push(`<section class="wrap sec" id="prices"><h2>${esc(C.phasesTitle)}</h2><div class="phases">${C.phases.map((x) => `<div class="phase${x.hot ? ' hot' : ''}"><span class="ptag">${esc(x.tag)}</span><h3>${esc(x.name)}</h3><p class="pstat">${esc(x.status)}</p><ul class="ticks">${x.items.filter((i) => !FIYAT_RE.test(i)).map((i) => `<li>${esc(i)}</li>`).join('')}</ul>${FIYAT_RE.test(x.price) ? '' : `<div class="pprice">${esc(x.price)}</div>`}<a class="btn ${x.hot ? '' : 'ghost'}" href="#form">${esc(u.offer)}</a></div>`).join('')}</div></section>`);
  S.push(`<section class="wrap sec" id="gallery"><h2>${esc(u.gallery)}</h2><div class="lgal">${SH.photos.map((x) => `<a href="${rimg(`/img/antalle/${x[0]}.webp`, 1800)}" target="_blank" rel="noopener">${pic(x[0], 900, `${p.name} – ${cap(x)}`)}</a>`).join('')}</div></section>`);
  S.push(`<section class="ldev"><div class="wrap"><h2>${esc(C.devTitle)}</h2><p>${esc(C.devText)}</p></div></section>`);
  const SEO = ANTALLE_SEO[lang] || {};
  if (SEO.h) S.push(`<section class="wrap sec" id="about"><h2>${esc(SEO.h)}</h2><p>${esc(SEO.p)}</p>${SEO.faq ? `<div class="faq">${SEO.faq.map(([q, x]) => `<details><summary>${esc(q)}</summary><p>${esc(x)}</p></details>`).join('')}</div>` : ''}</section>`);
  S.push(`<section class="wrap sec" id="location"><h2>${esc(C.locTitle)}</h2><p>${esc(C.locText)}</p><div class="dist"><div><h3>🚗 ${esc(u.drive)}</h3><ul>${C.drive.map(([i, n, d]) => `<li><span>${i} ${esc(n)}</span><b>${esc(d)}</b></li>`).join('')}</ul></div><div><h3>🎓 ${esc(C.schoolsTitle)}</h3><ul>${C.schools.map((n) => `<li><span>${esc(n)}</span></li>`).join('')}</ul></div></div><div class="map"><iframe src="https://www.google.com/maps?q=${encodeURIComponent(p.mapQuery)}&output=embed" loading="lazy" title="${esc(p.name)} ${esc(u.mapT)}"></iframe></div></section>`);
  S.push(`<section class="lcta" id="form"><div class="wrap lctagrid"><div><h2>${esc(u.infoTitle)}</h2><p>${esc(C.cta)}</p><div class="cbtns">${contacts.map(([n, num, txt]) => `<a class="wabtn" href="${wa(num)}" target="_blank" rel="noopener"><b>${esc(n)}</b><span>WhatsApp · ${esc(txt)}</span></a>`).join('')}<a class="wabtn tgbtn" href="${SH.telegram}" target="_blank" rel="noopener"><b>${esc(u.caner)}</b><span>Telegram · @alicanertherealtor</span></a></div>${p.instagram ? `<p><a href="${p.instagram}" target="_blank" rel="noopener">${esc(u.ig)} →</a></p>` : ''}</div>
<form class="box form" name="proje-talep" method="POST" data-netlify="true" netlify-honeypot="bot" action="${url(lang, 'contact')}?ok=1"><input type="hidden" name="form-name" value="proje-talep"><input type="hidden" name="proje" value="${esc(p.name)} (${lang.toUpperCase()})"><p hidden><input name="bot"></p><input type="hidden" name="dil" value="${lang}"><h3>${esc(u.form)}</h3><input name="ad" placeholder="${esc(u.name)} *" required autocomplete="name">${telIn(lang, esc(u.phone))}<input name="eposta" type="email" placeholder="${esc(u.email)}"><small>${esc(u.privacy)}</small>${kvkkIn(lang)}<button class="btn" type="submit">${esc(u.send)}</button></form></div></section>`);
  const schema = [{ '@context': 'https://schema.org', '@type': 'Residence', name: p.name, description: SEO.desc || C.desc, image: SITE.domain + SH.hero, address: { '@type': 'PostalAddress', addressLocality: 'Döşemealtı', addressRegion: 'Antalya', addressCountry: 'TR' } }];
  const alternates = Object.fromEntries(LANGS.filter((l) => ANTALLE[l]).map((l) => [l, url(l, 'projects', p.slug)]));
  if (SEO.faq) schema.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: SEO.faq.map(([q, x]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: x } })) });
  write(path.join(here, 'index.html'), layout({ lang, title: SEO.title || `${p.name} | ${p.area} | ACC HOMES`, desc: SEO.desc || C.desc, canonical: here, alternates, body: S.join('\n'), schema, ogImage: SH.hero }));
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

function trustBand(lang) {
  const shot = fs.existsSync(path.join(ROOT, 'static/img/google-isletme.webp'));
  return `<div class="aiband"><div class="aitext"><div class="ailogos"><span>ChatGPT</span><span>Gemini</span><span>Claude</span><span>Copilot</span></div><h3>🤖 ${sT(TRUST.aiTitle, lang)}</h3><p>${esc(sT(TRUST.aiText, lang))}</p><p class="aireal">✓ ${esc(sT(TRUST.real, lang))}</p></div>${shot ? `<a class="aishot" href="${SITE.google.mapsUrl}" target="_blank" rel="noopener"><img src="/img/google-isletme.webp" alt="ACC HOMES Google İşletme Profili" loading="lazy"></a>` : ''}</div>`;
}
function reviewsBlock(lang) {
  const t = T[lang];
  const list = lang === 'tr' ? REVIEWS : [...REVIEWS.filter((r) => r.lang === 'en'), ...REVIEWS.filter((r) => r.lang !== 'en')];
  return `<section class="reviews"><div class="wrap">
<div class="sechead"><div><h2>${t.revTitle}</h2><p class="sub sm">${t.revSub}</p></div><a class="gbadge" href="${SITE.google.mapsUrl}" target="_blank" rel="noopener">${ICON_G}<b>${fmtRating(lang)}</b>${stars}<span>${t.gReviews(SITE.google.reviews)}</span></a></div>
${trustBand(lang)}<div class="rtrack">${list.map((r) => `<figure class="rcard"><div class="rtop">${stars}<span class="rtopic">${esc(r.topic)}</span></div>
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
<div class="iggrid">${items.map((m) => `<a class="igitem" href="${esc(m.permalink)}" target="_blank" rel="noopener"><img src="${esc(m.local ? rimg(m.local, 400) : m.image)}" alt="${esc(m.caption)}" width="400" height="400" loading="lazy">${m.type === 'VIDEO' ? '<span class="play" aria-hidden="true">▶</span>' : ''}<span class="igcap">${esc(m.caption)}</span></a>`).join('')}</div></section>`;
}
function stickyBar(lang) {
  const t = T[lang];
  return `<div class="cbar" role="navigation" aria-label="${t.nav.contact}"><a class="cbtn call" href="tel:${SITE.phoneRaw}"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>${t.barCall}</a><a class="cbtn wa" href="${waLink(t.waGeneral)}" target="_blank" rel="noopener"><svg viewBox="0 0 32 32" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M16 3a13 13 0 0 0-11.3 19.4L3 29l6.8-1.8A13 13 0 1 0 16 3zm0 23.6c-2 0-4-.6-5.7-1.6l-.4-.2-4 1 1.1-3.9-.3-.4A10.6 10.6 0 1 1 16 26.6zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.7 8.7 0 0 1-4.3-3.8c-.3-.6.3-.5.9-1.6.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.6 3.6 0 0 0-1.1 2.7 6.3 6.3 0 0 0 1.3 3.3 14.4 14.4 0 0 0 5.5 4.9c2 .9 2.8.9 3.8.8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.7-.4z"/></svg>${t.barWa}</a></div>`;
}

function fill(html, lang) {
  const t = T[lang];
  const nf = new Intl.NumberFormat(LOCALE[lang]);
  const stats = `<div class="stats"><div><b>1.000 m²</b><span>ACC Plaza</span></div><div><b>~50</b><span>${s('partners', lang)}</span></div><div><b>10</b><span>${s('langsSvc', lang)}</span></div><div><b>${fmtRating(lang)} ★</b><span>${t.gReviews(nf.format(SITE.google.reviews))}</span></div></div>`;
  const ph = (f, w) => (TEAM_LOCAL[f] ? rimg(TEAM_LOCAL[f], w, 75) : null);
  const ilanLink = (ad) => { const n = (AGENT_ILAN.get(ad) || []).length; return n ? `<a class="milan" href="${url(lang, 'team', slugify(ad))}">${n} ${GL(lang) === 'tr' ? 'ilan' : 'listings'} →</a>` : ''; };
  const team = `<div class="team">${TEAM.map((p) => { const u = ph(STAFF_PHOTOS[p.name], 320); return `<div class="member">${u ? `<img src="${u}" alt="${esc(p.name)}, ${esc(p.role.tr)} – ACC HOMES" loading="lazy" width="160" height="160">` : `<span class="mav">${esc(p.initials)}</span>`}<b>${p.link ? `<a href="${url(lang, p.link)}">${esc(p.name)}</a>` : esc(p.name)}</b><small>${esc(p.role[lang] || p.role.en)}</small>${ilanLink(p.name)}</div>`; }).join('')}</div>`;
  const partners = `<div class="team partners">${PARTNERS.map((p) => { const u = ph(p.photo, 320); const ini = p.name.split(' ').map((x) => x[0]).slice(0, 2).join(''); return `<div class="member">${u ? `<img src="${u}" alt="${esc(p.name)}, ${PARTNER_ROLE.tr} – ACC HOMES" loading="lazy" width="160" height="160">` : `<span class="mav">${esc(ini)}</span>`}<b>${esc(p.name)}</b><small>${esc((p.sworn ? SWORN_ROLE : PARTNER_ROLE)[lang])}</small>${ilanLink(p.name)}</div>`; }).join('')}</div>`;
  const langs = `<ul class="chips">${LANGS_SPOKEN[lang].map((l) => `<li>${l}</li>`).join('')}</ul>`;
  const waJoin = waLink(s('waJoin', lang));
  return html.replace(/\{\{URL:(\w+)\}\}/g, (_, k) => (k === 'list' || k === 'contact' || k === 'guide' ? url(lang, k) : url(lang, k)))
    .replaceAll('{{TIMELINE}}', roadmap(lang)).replaceAll('{{FOUNDER}}', founderBlock(lang)).replaceAll('{{STATS}}', stats).replaceAll('{{OFFICE}}', officeGallery(8)).replaceAll('{{TEAMPHOTOS}}', `<figure class="tmain"><img src="/img/ekip/ekip-acc-plaza-2026.webp" alt="ACC HOMES ekibi ACC Plaza önünde, Kasım 2026" width="1080" height="680"><figcaption>${s('teamCap', lang)}</figcaption></figure>` + '<div class="tpair"><img src="/img/ekip/ekip-eylul-2026.webp" alt="ACC HOMES ekibi, Eylül 2026: Tek Takım. Tek Vizyon. Tek Rekor." loading="lazy" width="800" height="1000"><img src="/img/ekip/ekip-maket-2026.webp" alt="ACC HOMES ekibi ACC Plaza’da proje maketi önünde" loading="lazy" decoding="async" width="1200" height="675"></div><div class="tphotos"><img src="/img/ekip/ekip-acc.webp" alt="ACC HOMES ekibi" loading="lazy" width="1600" height="533"><img src="/img/ekip/ekip-antalle.webp" alt="ACC HOMES ekibi Antalle Concept Houses açılışında" loading="lazy" width="1600" height="533"></div>').replaceAll('{{TEAM}}', team).replaceAll('{{PARTNERS}}', partners).replaceAll('{{LANGS}}', langs)
    .replaceAll('{{WA_JOIN}}', waJoin).replaceAll('{{WA}}', waLink(t.waGeneral)).replaceAll('{{TEL}}', `tel:${SITE.phoneRaw}`)
    .replaceAll('{{MAPS}}', SITE.google.mapsUrl).replaceAll('{{IG}}', SITE.instagram.url).replaceAll('{{IG_CANER}}', 'https://www.instagram.com/alicanercan.therealtor/')
    .replaceAll('{{RATING}}', `${fmtRating(lang)} ★ · ${t.gReviews(nf.format(SITE.google.reviews))}`).replaceAll('{{SELLFORM}}', sellForm(lang)).replaceAll('{{REVIEWS}}', nf.format(SITE.google.reviews))
    .replaceAll('{{BROKER_PHOTO}}', SITE.brokerPhoto ? `<img src="${SITE.brokerPhoto}" alt="Ali Caner Can, Broker & Owner – ACC HOMES" width="600" height="655">` : '<span class="mav big">AC</span>')
    .replaceAll('{{BROKER_STATS}}', brokerCreds(lang) + brokerStats(lang)).replaceAll('{{BROKER_GALLERY}}', brokerGallery(lang)).replaceAll('{{BROKER_LINKS}}', brokerLinks(lang));
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
  if (p && !SITE.brokerPhoto) SITE.brokerPhoto = rimg(p, 600, 78);
}
const bT = (o, lang) => o[lang] || o.en;
const brokerCreds = (lang) => `<ul class="chips bcreds">${BROKER.creds.map(([i, l]) => `<li>${i} ${esc(bT(l, lang))}</li>`).join('')}</ul>`;
const brokerStats = (lang) => `<div class="stats">${BROKER.stats.map(([n, l]) => `<div><b>${n}</b><span>${esc(bT(l, lang))}</span></div>`).join('')}</div>`;
function brokerGallery(lang) {
  const L = GL(lang);
  const items = BROKER.gallery.map(([src, cap]) => {
    const real = src.startsWith('remote:') ? BROKER_LOCAL[src.slice(7)] && rimg(BROKER_LOCAL[src.slice(7)], 800, 74) : src;
    return real ? `<figure><img src="${real}" alt="${esc(cap[L] || cap.en)} – Ali Caner Can" loading="lazy" width="800" height="533"><figcaption>${esc(cap[L] || cap.en)}</figcaption></figure>` : '';
  }).join('');
  return `<h2>${bT(BROKER.ui.gallery, lang)}</h2><div class="sgal">${items}</div>`;
}
const brokerLinks = (lang) => `<h3>${bT(BROKER.ui.links, lang)}</h3><ul class="chips blinks">${BROKER.links.map(([n, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${n} ↗</a></li>`).join('')}</ul>`;
function brokerBlock(lang) {
  const h = BROKER.home;
  const img = SITE.brokerPhoto ? `<img src="${SITE.brokerPhoto}" alt="Ali Caner Can, Broker & Owner – ACC HOMES" loading="lazy" width="600" height="655">` : '<span class="mav big">AC</span>';
  return `<section class="hbroker"><div class="wrap"><div class="hbimg">${img}</div><div class="hbtext"><p class="eyebrow">${bT(h.eyebrow, lang)}</p><h2>${bT(h.title, lang)}</h2>${brokerCreds(lang)}<p>${esc(bT(h.text, lang))}</p>${brokerStats(lang)}<div class="ctas"><a class="btn" href="${url(lang, 'broker')}">${bT(h.cta, lang)}</a><a class="btn ghost" href="${waLink(T[lang].waGeneral)}" target="_blank" rel="noopener">${bT(h.wa, lang)}</a></div></div></div></section>`;
}
// Yol haritası ve kurucu bloğu (story.mjs)
const sT = (o, lang) => (typeof o === 'string' ? o : o[lang] || o.en);
function roadmap(lang) {
  return `<ol class="roadmap">${ROADMAP.map((r, i) => `<li class="${r.next ? 'next' : ''}${r.hl ? ' hl' : ''}"><span class="rmi">${r.icon}</span><div class="rmc"><span class="rmy">${esc(sT(r.year, lang))}</span>${r.hl ? `<span class="rmh">${r.hl}</span>` : ''}<h3>${esc(sT(r.t, lang))}</h3><p>${esc(sT(r.d, lang))}</p></div></li>`).join('')}</ol>`;
}
function founderBlock(lang) {
  const img = SITE.brokerPhoto ? `<img src="${SITE.brokerPhoto}" alt="Ali Caner Can, Broker & Owner – ACC HOMES" loading="lazy" width="600" height="655">` : '<span class="mav big">AC</span>';
  const pct = lang === 'tr' ? '%99' : '99%';
  return `<div class="founder"><div class="fimg">${img}</div><div><p class="eyebrow">${sT(BROKER.home.eyebrow, lang)}</p><h3><a href="${url(lang, 'broker')}">Ali Caner Can</a></h3><p>${esc(sT(BROKER.home.text, lang))}</p>
<div class="stats"><div><b>290+</b><span>${esc(sT(BROKER.stats[0][1], lang))}</span></div><div><b>${pct}</b><span>${esc(sT(FOUNDER.sat, lang))}</span></div><div><b>🌍</b><span>${esc(sT(FOUNDER.foreign, lang))}</span></div></div>
<a class="more" href="${url(lang, 'broker')}">${sT(BROKER.home.cta, lang)} →</a></div></div>`;
}
function plazaBlock(lang) {
  const p = PLAZA[lang];
  return `<section class="plaza"><div class="wrap">
<div class="pimgs"><div class="pimg"><img src="/img/acc-plaza-1200.webp" alt="ACC PLAZA — ACC HOMES International Real Estate, Yeşilbahçe, Muratpaşa, Antalya" loading="lazy" width="1200" height="470"></div><div class="pimg"><img src="/img/ekip/ekip-maket-2026.webp" alt="ACC HOMES ekibi ACC Plaza’da proje maketi önünde" loading="lazy" decoding="async" width="1200" height="675"></div></div>
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
<h1>${esc(c.title)}</h1><p class="sub">${esc(c.lead)}</p>${fill(key === 'about' && !c.html.includes('{{FOUNDER}}') ? c.html.replace('{{STATS}}', '{{STATS}}\n{{FOUNDER}}') : key === 'broker' && !c.html.includes('{{BROKER_STATS}}') ? c.html.replace('</div></div>', '</div></div>\n{{BROKER_STATS}}').replace('<div class="ctas">', '{{BROKER_GALLERY}}\n{{BROKER_LINKS}}\n<div class="ctas">') : c.html, lang)}</section>${key === 'about' ? reviewsBlock(lang) : ''}`;
  const schema = key === 'broker' ? [{ '@context': 'https://schema.org', '@type': 'Person', name: 'Ali Caner Can', jobTitle: 'Broker & Owner', description: c.desc, url: SITE.domain + url(lang, key), image: SITE.brokerPhoto ? SITE.domain + SITE.brokerPhoto : undefined, birthPlace: 'Antalya', worksFor: { '@type': 'RealEstateAgent', name: SITE.brand, url: SITE.domain }, alumniOf: [{ '@type': 'CollegeOrUniversity', name: 'Yıldız Teknik Üniversitesi' }, { '@type': 'HighSchool', name: 'Kuleli Askeri Lisesi' }, { '@type': 'EducationalOrganization', name: 'Antalya Başöğretmen Atatürk İlköğretim Okulu' }], knowsLanguage: ['tr', 'en'], memberOf: [{ '@type': 'Organization', name: 'Antalya İş İnsanları Derneği (ANTİAD)' }], sameAs: BROKER.links.map(([, u]) => u) }] : [];
  write(path.join(url(lang, key), 'index.html'), layout({ lang, title: `${c.title} | ACC HOMES`, desc: c.desc, canonical: url(lang, key), alternates: alts(key), body, schema, ogImage: key === 'broker' && SITE.brokerPhoto ? SITE.brokerPhoto : '/img/acc-plaza-og.jpg' }));
}
const postFor = (p, lang) => p[lang] || p.en || p.tr;
// Blog kapakları (Derya, 19.11.2026; ACC filigranlı, static/img/blog: 1200 ve -600)
const BLOG_COVERS = {
  'antalya-kentsel-donusum-rehberi-muratpasa-konyaalti': 'antalya-kentsel-donusum-rehberi',
  'cop31-antalya-iklim-zirvesi-gayrimenkul-etkisi': 'cop31-antalya-iklim-zirvesi',
  'topraktan-ve-lansman-fiyatiyla-daire-almak': 'topraktan-daire-almak',
  'antalyada-gayrimenkul-yatirimi-bolgeler-ve-stratejiler': 'antalya-gayrimenkul-yatirimi-bolgeler',
  'evimi-satarken-dogru-fiyat-nasil-belirlenir': 'evimi-satarken-dogru-fiyat',
  'altintas-ev-alirken-dikkat-edilmesi-gerekenler': 'altintas-ev-alirken',
  'antalyada-nereden-ev-alinir-konyaalti-lara-altintas': 'antalyada-nereden-ev-alinir',
  'antalya-konut-satis-istatistikleri': 'antalya-konut-satis-istatistikleri',
  'kira-artis-orani': 'kira-artis-orani',
  'antalya-avm-rehberi': 'antalya-avm-rehberi',
  'antalya-tarihi-antik-kentler': 'antalya-tarihi-antik-kentler',
  'belek-golf-spor-etkinlik-turizmi': 'belek-golf-spor-etkinlik-turizmi',
  'antalya-hastaneler-rehberi': 'antalya-hastaneler-rehberi',
};
const withCover = (p) => (p.cover || !BLOG_COVERS[p.slug] ? p : { ...p, cover: `/img/blog/${BLOG_COVERS[p.slug]}-600.webp`, coverL: `/img/blog/${BLOG_COVERS[p.slug]}.webp`, coverH: p.slug === 'kira-artis-orani' ? 640 : 675 });
const ALLPOSTS = [...BLOG_POSTS, ...POSTS.map((p) => ({ ...p, cat: BLOG.catOf[p.slug] || 'rehber' }))].map(withCover)
  .sort((x, y) => (y.live ? 1 : 0) - (x.live ? 1 : 0) || (y.updated || y.date).localeCompare(x.updated || x.date));
const dmy = (d) => d.split('-').reverse().join('.');
function postCard(p, lang, big) {
  const c = postFor(p, lang); const cat = BLOG.cats[p.cat];
  return `<a class="bcard${big ? ' big' : ''}" href="${url(lang, 'blog', p.slug)}" data-cat="${p.cat}"><div class="bcov bc-${p.cat}">${p.cover ? `<img src="${p.cover}" alt="${esc(c.title)}" width="800" height="450" loading="lazy">` : (p.stat ? `<div class="bstat"><b>${p.stat[GL(lang)]}</b><small>${esc(p.stat.lab[GL(lang)])}</small></div>` : `<span>${p.icon || cat.icon}</span>`)}${p.live ? `<em>● ${bT(BLOG.ui.live, lang)}</em>` : ''}</div><div class="bcb"><small>${cat.icon} ${esc(bT(cat.name, lang))} · ${dmy(p.updated || p.date)}</small><h3>${esc(c.title)}</h3><p>${esc(c.desc)}</p></div></a>`;
}
function pageBlog(lang) {
  const t = T[lang];
  const used = Object.keys(BLOG.cats).filter((k) => ALLPOSTS.some((p) => p.cat === k));
  const chips = `<div class="bchips" data-bfilter><button type="button" class="on" data-c="">${bT(BLOG.ui.all, lang)}</button>${used.map((k) => `<button type="button" data-c="${k}">${BLOG.cats[k].icon} ${esc(bT(BLOG.cats[k].name, lang))}</button>`).join('')}</div>`;
  const [first, ...rest] = ALLPOSTS;
  const js = `<script>(function(){var f=document.querySelector('[data-bfilter]');if(!f)return;f.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;[].forEach.call(f.children,function(x){x.classList.toggle('on',x===b)});var c=b.dataset.c;document.querySelectorAll('.bgrid .bcard').forEach(function(a){a.hidden=c&&a.dataset.cat!==c;});});})();</script>`;
  const body = `<section class="wrap sec page"><nav class="crumbs"><a href="${home(lang)}">${t.nav.home}</a> / <span>${t.blog}</span></nav><h1>${t.blog}</h1><p class="sub">${esc(bT(BLOG.lead, lang))}</p>${NEWS_LANGS.includes(lang) && NEWS.length ? `<a class="nbanner" href="${newsUrl(lang, NEWS[0].date)}"><b>ACC NEWS</b><span>${esc(NEWS[0][lang].h1)} · ${NEWS_DATE[lang](NEWS[0].date)}</span><em>${NEWS_UI[lang].read} →</em></a>` : ''}${chips}<div class="bgrid">${postCard(first, lang)}${rest.map((p) => postCard(p, lang)).join('')}</div>${js}</section>`;
  write(path.join(url(lang, 'blog'), 'index.html'), layout({ lang, title: `${t.blog} | ACC HOMES`, desc: bT(BLOG.lead, lang), canonical: url(lang, 'blog'), alternates: alts('blog'), body }));
  for (const p of ALLPOSTS) {
    const c = postFor(p, lang); const cat = BLOG.cats[p.cat];
    const meta = `<p class="pmeta">${cat.icon} ${esc(bT(cat.name, lang))} · ${dmy(p.date)}${p.updated ? ` · ${bT(BLOG.ui.updated, lang)}: ${dmy(p.updated)}` : ''}${p.live ? ` · <b class="live">● ${bT(BLOG.ui.live, lang)}</b>` : ''}</p>`;
    const author = `<div class="pauthor">${SITE.brokerPhoto ? `<img src="${SITE.brokerPhoto}" alt="Ali Caner Can" width="56" height="56" loading="lazy">` : ''}<div><b><a href="${url(lang, 'broker')}">Ali Caner Can</a></b><small>Broker & Owner · ACC HOMES International Real Estate</small></div></div>`;
    const rel = ALLPOSTS.filter((x) => x !== p && x.cat === p.cat).concat(ALLPOSTS.filter((x) => x !== p && x.cat !== p.cat)).slice(0, 3);
    const pb = `<article class="wrap sec narrow page"><nav class="crumbs"><a href="${home(lang)}">${t.nav.home}</a> / <a href="${url(lang, 'blog')}">${t.blog}</a> / <span>${esc(bT(cat.name, lang))}</span></nav><h1>${esc(c.title)}</h1>${meta}${author}${p.coverL ? `<figure class="bfig"><img src="${p.coverL}" srcset="${p.cover} 600w, ${p.coverL} 1200w" sizes="(max-width:760px) 92vw, 760px" alt="${esc(c.title)}" width="1200" height="${p.coverH || 675}" fetchpriority="high"></figure>` : ''}<div class="prose">${fill(c.html, lang)}</div>${c.faq ? `<h2 id="sss">${s('faq', lang)}</h2><div class="faq">${c.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>` : ''}<div class="ctas"><a class="btn" href="${waLink(t.waGeneral)}" target="_blank" rel="noopener">${s('quickEnq', lang)}</a><a class="btn ghost" href="${url(lang, 'blog')}">${t.blog} →</a></div></article>
<section class="wrap sec"><div class="bgrid">${rel.map((x) => postCard(x, lang)).join('')}</div></section>`;
    const schema = [{ '@context': 'https://schema.org', '@type': 'BlogPosting', headline: c.title, description: c.desc, datePublished: p.date, dateModified: p.updated || p.date, author: { '@type': 'Person', name: 'Ali Caner Can', url: SITE.domain + url(lang, 'broker') }, publisher: { '@type': 'Organization', name: SITE.brand, logo: { '@type': 'ImageObject', url: `${SITE.domain}/img/logo/acc-homes-logo.png` } }, mainEntityOfPage: SITE.domain + url(lang, 'blog', p.slug) }];
    if (c.faq) schema.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
    if (p.cover) schema[0].image = SITE.domain + (p.coverL || p.cover);
    write(path.join(url(lang, 'blog', p.slug), 'index.html'), layout({ lang, title: `${c.seo || c.title} | ACC HOMES`, desc: c.desc, canonical: url(lang, 'blog', p.slug), alternates: alts('blog', () => p.slug), body: pb, schema, ogImage: p.coverL }));
  }
}

// ---------- ACC NEWS (haftalık emlak bülteni; TR / EN / RU) ----------
const NEWS_LANGS = ['tr', 'en', 'ru'];
const newsUrl = (lang, date) => `${lang === 'tr' ? '' : '/' + lang}/acc-news/${date ? date + '/' : ''}`;
const newsAlts = (date) => Object.fromEntries(NEWS_LANGS.map((l) => [l, newsUrl(l, date)]));
const NEWS_DATE = { tr: (d) => new Date(d).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }), en: (d) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }), ru: (d) => new Date(d).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }) };
function newsCard(n, lang) {
  const c = n[lang]; const top = c.sections[0] ? c.sections[0].items.filter((i) => i.h).map((i) => i.h) : [];
  return `<a class="ncard" href="${newsUrl(lang, n.date)}"><span class="ndate">${NEWS_DATE[lang](n.date)}</span><h3>${esc(c.h1)}</h3><ul>${top.map((h) => `<li>${esc(h)}</li>`).join('')}</ul><span class="nmore">${NEWS_UI[lang].read} →</span></a>`;
}
function pageNews(lang) {
  if (!NEWS_LANGS.includes(lang) || !NEWS.length) return;
  const U = NEWS_UI[lang]; const t = T[lang];
  const idx = `<section class="wrap sec page"><nav class="crumbs"><a href="${home(lang)}">${t.nav.home}</a> / <span>${U.name}</span></nav><h1>${esc(U.title)}</h1><p class="sub">${esc(U.lead)}</p>
<div class="ngrid">${NEWS.map((n) => newsCard(n, lang)).join('')}</div><p class="nrss"><a href="${newsUrl(lang)}feed.xml">${U.rss}</a></p></section>`;
  const idxSchema = [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: U.title, description: U.lead, url: SITE.domain + newsUrl(lang), inLanguage: lang, isPartOf: { '@id': SITE.domain + '/#website' }, publisher: { '@id': SITE.domain + '/#org' }, mainEntity: { '@type': 'ItemList', itemListElement: NEWS.map((n, i) => ({ '@type': 'ListItem', position: i + 1, url: SITE.domain + newsUrl(lang, n.date), name: n[lang].h1 })) } }];
  write(path.join(newsUrl(lang), 'index.html'), layout({ lang, title: U.metaTitle, desc: U.lead, canonical: newsUrl(lang), alternates: newsAlts(), body: idx, schema: idxSchema }));
  urls.push(newsUrl(lang));
  // RSS
  const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${esc(U.title)}</title><link>${SITE.domain}${newsUrl(lang)}</link><description>${esc(U.lead)}</description><language>${lang}</language><atom:link href="${SITE.domain}${newsUrl(lang)}feed.xml" rel="self" type="application/rss+xml"/>${NEWS.map((n) => `<item><title>${esc(n[lang].h1)} · ${NEWS_DATE[lang](n.date)}</title><link>${SITE.domain}${newsUrl(lang, n.date)}</link><guid>${SITE.domain}${newsUrl(lang, n.date)}</guid><pubDate>${new Date(n.date + 'T09:00:00+03:00').toUTCString()}</pubDate><description>${esc(n[lang].desc)}</description></item>`).join('')}</channel></rss>`;
  write(path.join(newsUrl(lang), 'feed.xml'), rss);
  NEWS.forEach((n, i) => {
    const c = n[lang]; const prev = NEWS[i + 1], next = NEWS[i - 1];
    const secs = c.sections.map((sec, si) => `<h2>${esc(sec.title)}</h2>${sec.items.map((it, ii) => `<div class="ncardb">${it.h ? `<h3>${si === 0 ? `${ii + 1}. ` : ''}${esc(it.h)}</h3>` : ''}<p>${esc(it.p)}</p>${it.src ? `<p class="nsrc">→ <a href="${esc(it.src[1])}" target="_blank" rel="noopener nofollow">${esc(it.src[0])}</a></p>` : ''}</div>`).join('')}`).join('');
    const cal = `<h2>${esc(c.calTitle)}</h2><ul class="ncal">${c.cal.map(([d, e]) => `<li><b>${esc(d)}</b><span>${esc(e)}</span></li>`).join('')}</ul>`;
    const view = `<h2>${esc(c.viewTitle)}</h2><div class="nview">${esc(c.view)}</div>`;
    const author = `<div class="pauthor">${SITE.brokerPhoto ? `<img src="${SITE.brokerPhoto}" alt="Ali Caner Can" width="56" height="56" loading="lazy">` : ''}<div><b><a href="${url(lang, 'broker')}">Ali Caner Can</a></b><small>Broker & Owner · ACC HOMES International Real Estate</small></div></div>`;
    const srcs = `<h2>${esc(c.srcTitle)}</h2><ol class="nsources">${c.sources.map(([nm, u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener nofollow">${esc(nm)}</a></li>`).join('')}</ol>`;
    const pn = `<nav class="npn">${prev ? `<a href="${newsUrl(lang, prev.date)}">← ${NEWS_DATE[lang](prev.date)}</a>` : '<span></span>'}<a href="${newsUrl(lang)}">${NEWS_UI[lang].all}</a>${next ? `<a href="${newsUrl(lang, next.date)}">${NEWS_DATE[lang](next.date)} →</a>` : '<span></span>'}</nav>`;
    const body = `<article class="wrap sec narrow page news"><nav class="crumbs"><a href="${home(lang)}">${t.nav.home}</a> / <a href="${newsUrl(lang)}">${U.name}</a> / <span>${NEWS_DATE[lang](n.date)}</span></nav>
<p class="eyebrow">ACC NEWS</p><h1>${esc(c.h1)}</h1><p class="pmeta"><time datetime="${n.date}">${NEWS_DATE[lang](n.date)}</time></p>${author}<p class="nintro">${esc(c.intro)}</p>${secs}${cal}${view}
<p class="ctas"><a class="btn" href="${url(lang, 'join')}">${U.cta} →</a><a class="btn ghost" href="${waLink(T[lang].waGeneral)}" target="_blank" rel="noopener">WhatsApp</a></p>${srcs}<p class="nnote">${esc(c.note)}</p>${pn}</article>`;
    const schema = [{ '@context': 'https://schema.org', '@type': 'NewsArticle', headline: c.h1, alternativeHeadline: c.metaTitle, description: c.desc, inLanguage: lang, datePublished: n.date + 'T09:00:00+03:00', dateModified: (n.updated || n.date) + 'T09:00:00+03:00', image: [SITE.domain + '/img/acc-plaza-og.jpg'], author: { '@type': 'Person', name: 'Ali Caner Can', jobTitle: 'Broker', url: SITE.domain + url(lang, 'broker') }, publisher: { '@id': SITE.domain + '/#org' }, mainEntityOfPage: SITE.domain + newsUrl(lang, n.date), isPartOf: { '@type': 'CollectionPage', url: SITE.domain + newsUrl(lang), name: U.title }, about: [{ '@type': 'Place', name: 'Antalya' }, { '@type': 'Country', name: 'Türkiye' }], citation: c.sources.map(([, u]) => u), articleSection: 'ACC NEWS' }];
    write(path.join(newsUrl(lang, n.date), 'index.html'), layout({ lang, title: c.metaTitle, desc: c.desc, canonical: newsUrl(lang, n.date), alternates: newsAlts(n.date), body, schema, ogType: 'article', published: n.date }));
    urls.push(newsUrl(lang, n.date));
  });
}

// ---------- alıcı rehberi ----------
const gUrl = (lang, g) => (lang === 'tr' ? `/${GUIDE_SEG.tr}/${g.slug}/` : `/en/${GUIDE_SEG.en}/${g.en}/`);
const gC = (g, lang) => (lang === 'tr' ? g.tr : g.enc);
// rehberin kendi dil çevirisi varsa (g.loc) o dilde sayfa, yoksa EN
const gUrlL = (lang, g) => (g.loc && g.loc[lang] ? url(lang, 'buyersguide') + g.loc[lang].slug + '/' : gUrl(GL(lang), g));
const gCL = (g, lang) => (g.loc && g.loc[lang]) || gC(g, GL(lang));
const gAlts = (g) => ({ tr: gUrl('tr', g), en: gUrl('en', g), ...Object.fromEntries(Object.keys(g.loc || {}).map((l) => [l, gUrlL(l, g)])) });
// ---------- bölge rehberleri ----------
const aUrl = (lang, a) => (lang === 'tr' ? `/${SEGS.areas.tr}/${a.slug}/` : `/en/${SEGS.areas.en}/${a.slugEn}/`);
function areaCards(lang) {
  const L = GL(lang);
  return `<div class="gcards">${AREA_GUIDES.map((a) => `<a class="gcard" href="${aUrl(L, a)}"><span>${a.icon}</span><h3>${esc(a[L].title)}</h3><p>${esc(a[L].short)}</p></a>`).join('')}</div>`;
}
const MH_UI = { tr: { hub: 'Mahalle rehberleri', hubLead: 'Sahada en çok çalıştığımız mahalleler: yaşam, konut yapısı, kimlere uygun olduğu ve alırken dikkat edilecekler.', in: 'Bu ilçedeki mahalle rehberleri', faq: 'Sık sorulan sorular', parent: 'İlçe rehberi', titleT: (n) => `${n.replace(/ ve /g, ' ')} Emlakçı: Satılık Ev ve Mahalle Rehberi`, alt: 'Altıntaş', altShort: 'Havalimanı ve Lara’ya yakın yeni projeler; ayrıntılı rehber.' }, en: { hub: 'Neighbourhood guides', hubLead: 'The neighbourhoods we work in most: lifestyle, housing, who they suit and what to check before buying.', in: 'Neighbourhood guides in this district', faq: 'Frequently asked questions', parent: 'District guide', titleT: (n) => `${n.replace(/ & /g, ' ')} Real Estate Agent & Neighbourhood Guide`, alt: 'Altıntaş', altShort: 'New projects near the airport and Lara; full guide.' } };
const mUrl = (lang, m) => aUrl(lang, { slug: m.slug, slugEn: m.slug });
function mahalleCards(lang, list = MAHALLELER) {
  const L = GL(lang); const u = MH_UI[L];
  const alt = list === MAHALLELER || list.some((m) => m.parent === 'aksu-altintas') ? `<a class="gcard" href="${url(L, 'guide')}"><span>✈️</span><h3>${u.alt}</h3><p>${esc(u.altShort)}</p></a>` : '';
  return `<div class="gcards">${list.map((m) => `<a class="gcard" href="${mUrl(L, m)}"><span>${m.icon}</span><h3>${esc(m[L].name)}</h3><p>${esc(m[L].short)}</p></a>`).join('')}${alt}</div>`;
}
function pageMahalle(m, lang) {
  const c = m[lang]; const t = T[lang]; const u = MH_UI[lang]; const par = AREA_GUIDES.find((a) => a.slug === m.parent);
  const sib = MAHALLELER.filter((x) => x !== m).map((x) => `<a href="${mUrl(lang, x)}">${x.icon} ${esc(x[lang].name)}</a>`).join('');
  const faq = `<h2>${u.faq}</h2><div class="faq">${c.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div>`;
  const names = m.tr.name.split(/\s+ve\s+/).map((x) => x.trim());
  const here = LISTINGS.filter((l) => names.includes(l.mahalle) && l.durum !== 'Satıldı').slice(0, 6);
  const lst = here.length ? `<h2>${lang === 'tr' ? `${c.name}’daki ilanlarımız` : `Our listings in ${c.name}`}</h2><div class="grid">${here.map((l) => card(l, lang)).join('')}</div>` : '';
  const sellCta = `<div class="callout"><b>${lang === 'tr' ? `${c.name}’da evinizi mi satıyorsunuz?` : `Selling a home in ${c.name}?`}</b> ${lang === 'tr' ? 'Mülkünüzü yerinde görüp emsallerle değerlendirelim.' : 'Let us see your property and assess it against comparables.'} <a href="${url(lang, 'sell')}">${lang === 'tr' ? 'Evinizi satın' : 'Sell your property'} →</a></div>`;
  const body = `<section class="wrap sec page"><nav class="crumbs"><a href="${home(lang)}">${t.nav.home}</a> / <a href="${url(lang, 'areas')}">${s('areasTitle', lang)}</a> / <a href="${aUrl(lang, par)}">${esc(par[lang].title)}</a> / <span>${esc(c.name)}</span></nav><div class="glayout"><article class="prose"><h1>${m.icon} ${esc(c.title)}</h1><p class="sub">${esc(c.short)}</p>${fill(c.html, lang)}${lst}${sellCta}${faq}
<div class="ctas"><a class="btn" href="${waLink(t.waGeneral)}" target="_blank" rel="noopener">${s('askConsultant', lang)}</a><a class="btn ghost" href="${aUrl(lang, par)}">${u.parent}: ${esc(par.ilce)} →</a></div>
<p class="note">${s('areaNote', lang)}</p></article><aside class="gside"><b>${u.hub}</b>${sib}<b>${u.parent}</b><a href="${aUrl(lang, par)}">${par.icon} ${esc(par[lang].title)}</a></aside></div></section>`;
  const canon = mUrl(lang, m);
  const schema = [{ '@context': 'https://schema.org', '@type': 'Article', headline: c.title, description: c.short, inLanguage: lang, author: { '@type': 'Person', name: 'Ali Caner Can' }, publisher: { '@id': `${SITE.domain}/#org` }, about: { '@type': 'Place', name: `${c.name}, ${m.ilce}, Antalya`, containedInPlace: { '@type': 'AdministrativeArea', name: `${m.ilce}, Antalya` } }, mainEntityOfPage: SITE.domain + canon },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }];
  write(canon + 'index.html', layout({ lang, title: `${u.titleT(c.name)} | ACC HOMES`, desc: `${c.short} ${lang === 'tr' ? 'Yaşam, konut yapısı ve alırken dikkat edilecekler.' : 'Lifestyle, housing and what to check before buying.'}`.slice(0, 158), canonical: canon, alternates: { tr: mUrl('tr', m), en: mUrl('en', m) }, body, schema }));
}
function pageAreaHub(lang) {
  const body = `<section class="wrap sec page"><nav class="crumbs"><a href="${home(lang)}">${T[lang].nav.home}</a> / <span>${s('areasTitle', lang)}</span></nav><h1>${s('areasTitle', lang)}</h1><p class="sub">${s('areasLead', lang)}</p>${['tr', 'en'].includes(lang) ? '' : `<p class="note">${s('guideEnNote', lang)}</p>`}${areaCards(lang)}<h2 class="mt">${MH_UI[GL(lang)].hub}</h2><p class="sub">${MH_UI[GL(lang)].hubLead}</p>${mahalleCards(lang)}</section>`;
  write(path.join(url(lang, 'areas'), 'index.html'), layout({ lang, title: `${s('areasTitle', lang)} | ACC HOMES`, desc: s('areasLead', lang), canonical: url(lang, 'areas'), alternates: alts('areas'), body }));
}
function pageAreaItem(a, lang) {
  const c = a[lang]; const t = T[lang];
  const others = AREA_GUIDES.filter((x) => x !== a).map((x) => `<a href="${aUrl(lang, x)}">${x.icon} ${esc(x[lang].title)}</a>`).join('');
  const body = `<section class="wrap sec page"><nav class="crumbs"><a href="${home(lang)}">${t.nav.home}</a> / <a href="${url(lang, 'areas')}">${s('areasTitle', lang)}</a></nav><div class="glayout"><article class="prose"><h1>${a.icon} ${esc(c.title)}</h1><p class="sub">${esc(c.short)}</p>${c.html}
<div class="ctas"><a class="btn" href="${url(lang, 'list')}?ilce=${encodeURIComponent(a.ilce)}">${s('areaListings', lang).replace('{{A}}', a.ilce)}</a><a class="btn ghost" href="${waLink(t.waGeneral)}" target="_blank" rel="noopener">${s('askConsultant', lang)}</a></div>
${MAHALLELER.some((m) => m.parent === a.slug) || a.slug === 'aksu-altintas' ? `<h2>${MH_UI[lang].in}</h2>${mahalleCards(lang, MAHALLELER.filter((m) => m.parent === a.slug))}` : ''}<p class="note">${s('areaNote', lang)}</p></article><aside class="gside"><b>${s('areasTitle', lang)}</b>${others}</aside></div></section>`;
  const schema = [{ '@context': 'https://schema.org', '@type': 'Article', headline: c.title, description: c.short, inLanguage: lang, publisher: { '@type': 'Organization', name: SITE.brand }, about: { '@type': 'Place', name: `${a.ilce}, Antalya` } }];
  write(aUrl(lang, a) + 'index.html', layout({ lang, title: lang === 'tr' ? `${c.title.replace(' Bölge Rehberi', '').replace(/ ve /g, ' ')} Emlakçı: Satılık Ev ve Bölge Rehberi | ACC HOMES` : `${c.title.replace(' Area Guide', '').replace(/ & /g, ' ')} Real Estate Agent & Area Guide | ACC HOMES`, desc: c.short, canonical: aUrl(lang, a), alternates: { tr: aUrl('tr', a), en: aUrl('en', a) }, body, schema }));
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
<div class="gcards">${GUIDES.map((g) => `<a class="gcard" href="${gUrlL(lang, g)}"><span>${g.icon}</span><h3>${esc(gCL(g, lang).title)}</h3><p>${esc(gCL(g, lang).short)}</p></a>`).join('')}</div>
<h2>${s('areasTitle', lang)}</h2>${areaCards(lang)}
<h2 id="sss">${s('faq', lang)}</h2>${faqHtml(L)}
<div class="ctas"><a class="btn" href="${waLink(T[lang].waGeneral)}" target="_blank" rel="noopener">${s('askWa', lang)}</a><a class="btn ghost" href="${url(lang, 'contact')}">${T[lang].nav.contact}</a></div>
<p class="note">${s('updated', lang)}: ${GUIDE_UPDATED}</p></section>`;
  const schema = [{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: (FAQ[L]).map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }];
  write(path.join(url(lang, 'buyersguide'), 'index.html'), layout({ lang, title: `${GUIDE_TITLE[lang]} | ACC HOMES`, desc: GUIDE_LEAD[lang], canonical: url(lang, 'buyersguide'), alternates: alts('buyersguide'), body, schema }));
}
function pageGuideItem(g, lang) {
  const c = gCL(g, lang);
  const html = c.html.replaceAll('{{CALC}}', calcBlock(lang));
  const body = `<section class="wrap sec page"><nav class="crumbs"><a href="${home(lang)}">${T[lang].nav.home}</a> / <a href="${url(lang, 'buyersguide')}">${GUIDE_TITLE[lang]}</a></nav><div class="glayout"><article class="prose"><h1>${g.icon} ${esc(c.title)}</h1><p class="sub">${esc(c.short)}</p>${html}
<div class="ctas"><a class="btn" href="${waLink(T[lang].waGeneral)}" target="_blank" rel="noopener">${s('askConsultant', lang)}</a></div></article>${guideSide(lang, g)}</div></section>`;
  const alt = gAlts(g);
  write(gUrlL(lang, g) + 'index.html', layout({ lang, title: `${c.title} | ${GUIDE_TITLE[lang] || GUIDE_TITLE.en} | ACC HOMES`, desc: c.desc || c.short, canonical: gUrlL(lang, g), alternates: alt, body }));
}
function pageReviews(lang) {
  const t = T[lang];
  const body = `<section class="wrap sec page"><nav class="crumbs"><a href="${home(lang)}">${t.nav.home}</a> / <span>${t.revTitle}</span></nav><h1>${t.revTitle}</h1><p class="sub">${t.revSub}</p></section>${reviewsBlock(lang)}`;
  write(path.join(url(lang, 'reviews'), 'index.html'), layout({ lang, title: `${t.revTitle} | ACC HOMES`, desc: t.revSub, canonical: url(lang, 'reviews'), alternates: alts('reviews'), body }));
}
// ---------- ana sayfa banner + arama ----------
function heroSlider(lang) {
  const t = T[lang]; const nv = (k) => PAGES[k].nav[lang] || PAGES[k].nav.en;
  const DV = davetTx(lang);
  const slides = [
    ...(DAVET_AKTIF ? [{ img: rimg('/img/antalle/dubleks-cephe-havuz.webp', 1600), eyebrow: `${DV.when} · Altınkale, Döşemealtı`, title: DV.title, sub: DV.lead, href: url(lang, 'projects', 'antalle-concept-houses') + '#davet', cta: `🥂 ${DV.cta}`, green: true }] : []),
    { img: '/img/banner/kaleici', bn: 1, eyebrow: SITE.slogan[lang], title: t.heroTitle, sub: t.heroSub, href: url(lang, 'list'), cta: t.heroCta, h1: true },
    ...PROJECTS.filter((p) => p.i18n || (p.media.hero && MEDIA[p.media.hero])).map((p) => (p.i18n ? { img: rimg(ANTALLE_SHARED.hero, 1600), eyebrow: `${p.area} · ${p.developer}`, title: (ANTALLE[lang] || ANTALLE.en).title, sub: (ANTALLE[lang] || ANTALLE.en).sub, href: url(lang, 'projects', p.slug), cta: t.projectsCta } : { img: cdn(p.media.hero, 1600), eyebrow: `${p.area} · ${p.developer}`, title: p.title, sub: p.sub, href: `/projeler/${p.slug}/`, cta: t.projectsCta })),
    { img: '/img/banner/liman', bn: 1, eyebrow: s('dlPageTitle', lang), title: s('dlCostTitle', lang), sub: s('dlCostSub', lang), href: url(lang, 'downloads'), cta: s('dlCta', lang) },
    { img: '/img/ofis/toplanti.webp', eyebrow: s('dlPageTitle', lang), title: s('dlCitTitle', lang), sub: s('dlCitSub', lang), href: url(lang, 'downloads'), cta: s('dlCta', lang), red: true },
    { img: '/img/banner/villa', bn: 1, eyebrow: nv('sell'), title: PAGES.sell[lang] ? PAGES.sell[lang].title : PAGES.sell.en.title, sub: '', href: url(lang, 'sell'), cta: s('sellCta', lang) },
  ];
  // Öne çıkan proje: ilk banner değil, hemen ikinci sırada (Tap Vita Ruby, 20.11.2026)
  { const i = slides.findIndex((x) => String(x.href).includes('tap-vita-ruby')); if (i > 1) slides.splice(1, 0, ...slides.splice(i, 1)); }
  const ov = (r, g) => (g ? 'linear-gradient(90deg,rgba(14,52,29,.9),rgba(30,99,57,.35))' : r ? 'linear-gradient(90deg,rgba(150,18,32,.92),rgba(224,42,60,.55))' : 'linear-gradient(90deg,rgba(20,4,6,.78),rgba(20,4,6,.2))');
  return `<section class="slider hero2" aria-roledescription="carousel"><div class="slides">${slides.map((x) => `<div class="slide" style="background-image:${ov(x.red, x.green)},url('${x.bn ? `${x.img}-d-1920.webp` : /^\/img\/ofis\//.test(x.img) ? rimg(x.img, 1200) : x.img}')"${x.bn ? ` data-bn="${x.img}"` : ''}><div class="wrap"><p class="eyebrow">${esc(x.eyebrow)}</p>${x.h1 ? `<h1>${esc(x.title)}</h1>` : `<h2>${esc(x.title)}</h2>`}${x.sub ? `<p class="ssub">${esc(x.sub)}</p>` : ''}<a class="btn"${x.green ? ' style="background:#1E6339;border-color:#fff;color:#fff"' : ''} href="${x.href}">${esc(x.cta)} →</a></div></div>`).join('')}</div><button class="sarrow prev" type="button" data-sprev aria-label="‹">‹</button><button class="sarrow next" type="button" data-snext aria-label="›">›</button><div class="dots">${slides.map((_, i) => `<button aria-label="${i + 1}"${i ? '' : ' aria-current="true"'}></button>`).join('')}</div></section>`;
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
  return `<section class="citband"><div class="wrap cbgrid"><div class="cbimg">${fs.existsSync(path.join(ROOT, 'static/img/vatandaslik-antalya.webp')) ? `<img src="/img/vatandaslik-antalya.webp" srcset="/img/vatandaslik-antalya-600.webp 600w, /img/vatandaslik-antalya.webp 1000w" sizes="(max-width:1000px) 92vw, 45vw" alt="${esc(s('citTitle', lang))} – Antalya" loading="lazy" decoding="async" width="1000" height="500" class="cbwide">` : '<img src="/img/ofis/maket.webp" alt="ACC Plaza" loading="lazy" width="900" height="1120">'}</div><div class="cbtext"><p class="eyebrow">ACC HOMES</p><h2>${s('citTitle', lang)}</h2><p>${s('citText', lang)}</p><div class="ctas"><a class="btn" href="${g ? gUrl(L, g) : url(lang, 'buyersguide')}">${s('citCta', lang)} →</a><a class="btn ghost" href="${url(lang, 'list')}?etiket=vatandaslik">${s('tag_vatandaslik', lang)}</a></div></div></div></section>`;
}
function whyBlock(lang) {
  const t = T[lang]; const ic = ['📊', '🌍', '🧾', '🎬'];
  return `<section class="wrap sec"><div class="sechead"><h2>${t.why}</h2></div><div class="whyg">${t.whyItems.map(([h, p], i) => `<div><span>${ic[i]}</span><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join('')}</div></section>`;
}
function talkBlock(lang) {
  const t = T[lang];
  return `<section class="talk"><div class="wrap talkgrid"><form class="box form" name="danisman-gorusme" method="POST" data-netlify="true" netlify-honeypot="bot" action="${url(lang, 'contact')}?ok=1"><input type="hidden" name="form-name" value="danisman-gorusme"><input type="hidden" name="dil" value="${lang}"><p hidden><input name="bot"></p>
<h2>${s('talkTitle', lang)}</h2><p class="sub sm">${s('talkSub', lang)}</p>
<input name="ad" placeholder="${t.name} *" required><div class="cptel"><select name="ulke_kodu" aria-label="${s('dialCode', lang)}">${DIAL.map(([c, d]) => `<option value="${d}"${d === (DEF_DIAL[lang] || '+90') && c !== 'KZ' ? ' selected' : ''}>${c} ${d}</option>`).join('')}</select><input name="telefon" type="tel" placeholder="${t.phone} *" required></div><input name="eposta" type="email" placeholder="${s('email', lang)}"><input name="butce" placeholder="${s('budget', lang)}"><textarea name="mesaj" rows="3" placeholder="${t.msg}"></textarea>
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
<div class="fgrid3"><label>${t.name} *<input name="ad" required></label><label>${s('email', lang)} *<input name="eposta" type="email" required></label><label>${t.phone}${telIn(lang, t.phone).replace(' *" required', '"')}</label></div>
<label class="chk"><input type="checkbox" name="kvkk_onay" value="evet" required> <span>${s('consent', lang).replace('{{LINK}}', `<a href="${url(lang, 'privacy')}" target="_blank" rel="noopener">${PAGES.privacy.nav[lang] || PAGES.privacy.nav.en}</a>`)} *</span></label>
<button class="btn" type="submit">${s('dlCta', lang)} →</button></form></section>`;
  write(path.join(url(lang, 'downloads'), 'index.html'), layout({ lang, title: `${s('dlPageTitle', lang)} | ACC HOMES`, desc: s('dlPageLead', lang), canonical: url(lang, 'downloads'), alternates: alts('downloads'), body }));
  const ready = `<section class="wrap sec narrow page"><h1>✓ ${s('dlReady', lang)}</h1><div class="dlgrid">${DL.map((d) => `<a class="dlcard" href="${d.file[L]}" download><span>⬇️</span><h3>${s(d.title, lang)}</h3><p>PDF</p></a>`).join('')}</div><div class="ctas"><a class="btn" href="${waLink(t.waGeneral)}" target="_blank" rel="noopener">${s('askWa', lang)}</a><a class="btn ghost" href="${url(lang, 'list')}">${t.seeAll}</a></div></section>`;
  write(path.join(url(lang, 'downloads'), 'hazir', 'index.html'), layout({ lang, title: `${s('dlReady', lang)} | ACC HOMES`, desc: '', canonical: url(lang, 'downloads') + 'hazir/', alternates: null, body: ready, noindex: true }));
}
function searchBox(lang) {
  const x = TXL(lang); const f = T[lang].filters;
  return `<form class="hsearch" action="${url(lang, 'list')}" method="get"><label>${x.kat}<select name="kat"><option value="">${x.any}</option>${Object.entries(KATEGORILER).map(([k, v]) => `<option value="${k}">${lab(v, lang)}</option>`).join('')}</select></label>
<label>${x.tip}<select name="emlak"><option value="">${x.any}</option>${EMLAK_TIPLERI.map((e) => `<option value="${e.k}">${lab(e, lang)}</option>`).join('')}</select></label>
<label>${x.ilce}<select name="ilce"><option value="">${x.any}</option>${ILCELER.map((d) => `<option>${d}</option>`).join('')}</select></label>
<label>${x.rooms}<select name="oda"><option value="">${x.any}</option>${ODALAR.slice(0, 15).map((o) => `<option>${o}</option>`).join('')}</select></label>
<button class="btn" type="submit">${s('search', lang)}</button></form>`;
}
function blogStrip(lang) {
  const t = T[lang];
  return `<section class="wrap sec"><div class="sechead"><div><h2>${t.blog}</h2><p class="sub sm">${esc(bT(BLOG.lead, lang))}</p></div><a href="${url(lang, 'blog')}">${t.readMore} →</a></div><div class="bgrid three">${ALLPOSTS.slice(0, 3).map((p) => postCard(p, lang)).join('')}</div></section>`;
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
  const fx = SECMELI.map((x) => (l[x.f] !== undefined && l[x.f] !== '' ? ` data-f-${x.f}="${esc(String(l[x.f]))}"` : '')).join('') + (l.konutTipi ? ` data-kt="${esc(l.konutTipi.join('|'))}"` : '');
  const q = [l.id, l.mahalle, l.ilce, l.proje, pick(l.baslik, 'tr'), pick(l.baslik, 'en')].filter(Boolean).join(' ').toLocaleLowerCase('tr');
  return `<article class="card" data-id="${esc(l.id)}" data-tags="${tags.join(' ')}" data-tip="${esc(l.tip)}" data-tur="${esc(l.tur)}" data-et="${esc(l.emlakTipi)}" data-kat="${esc(l.kategori)}" data-alt="${esc(l.altTip || '')}" data-ilce="${esc(l.ilce)}" data-mah="${esc(l.mahalle || '')}" data-oda="${esc(l.oda)}" data-fiyat="${l.fiyat || 0}" data-para="${esc(({ TL: 'TRY' })[l.para || 'TL'] || l.para)}" data-brut="${+l.brut || 0}" data-net="${+l.net || 0}" data-yas="${l.yas === undefined || l.yas === '' ? '' : +String(l.yas).replace(/[^0-9]/g, '') || 0}" data-tarih="${esc(l.tarih || '')}" data-q="${esc(q)}"${fx}>
${cardTools(l, lang)}
<a href="${url(lang, 'listing', slugOf(l))}">
<div class="img">${cover ? `<img src="${esc(/^\/img\//.test(cover) ? rimg(cover, 640) : cover)}"${/^\/img\//.test(cover) ? ` srcset="${rimg(cover, 400)} 400w, ${rimg(cover, 640)} 640w" sizes="(max-width:640px) 92vw, 320px"` : ''} alt="${esc([l.mahalle, l.ilce, l.oda, l.tur].join(' '))}" width="800" height="600" loading="lazy">` : placeholder}<span class="tag">${tipLabel(l, lang)}</span>${statusBadge(l, lang)}</div>
<div class="body"><div class="price"${priceAttrs(l)}>${fmtPrice(l, lang)}</div><h3>${esc(pick(l.baslik, lang))}</h3>${tags.length ? `<div class="ltags">${tags.slice(0, 3).map((k) => `<span class="lt-${k}">${tagLabel(k, lang)}</span>`).join('')}</div>` : ''}
<div class="meta"><span>${esc(l.oda || '')}</span>${l.net ? `<span data-m2="${+l.net}">${+l.net} m²</span>` : ''}<span>${esc([l.mahalle, l.ilce].filter(Boolean).join(', '))}</span></div></div></a>${enqBtn(l, lang)}</article>`;
}

const TAGS = { vatandaslik: '🛂', oturum: '🪪', deniz: '🌊', ilkSira: '🏖️', esyali: '🛋️', firsat: '🔥', yeni: '✨' };
const tagLabel = (k, lang) => `${TAGS[k]} ${s('tag_' + k, lang)}`;
const cardTools = (l, lang) => `<div class="ctools"><button type="button" class="favbtn" data-fav="${esc(l.id)}" aria-pressed="false" aria-label="${s('favAdd', lang)}" title="${s('favAdd', lang)}"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.2 4.3 2.4.7-1.2 2.2-2.4 4.3-2.4 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21z" fill="currentColor"/></svg></button><button type="button" class="cmpbtn" data-cmp="${esc(l.id)}" aria-pressed="false" title="${s('compareAdd', lang)}">⇄ <span>${s('compare', lang)}</span></button></div>`;
const enqBtn = (l, lang) => `<button type="button" class="enqbtn" data-enq="${esc(l.id)}">${s('quickEnq', lang)}</button>`;
// Yaklaşık konum: panel görünümü koordinatı ~1 km'ye yuvarlıyor; işaret yok, bölge çemberi var
// Konut tipi (Sahibinden "Konut Tipi"): Ara Kat, En Üst Kat, Dubleks, Tripleks
const ktLab = (lang) => ({ tr: 'Konut tipi', ru: 'Тип жилья' })[lang] || 'Layout';
const ktDeger = (v, lang) => { const k = KONUT_TIPI.find((x) => x[0] === v); return !k || lang === 'tr' ? v : lang === 'ru' ? k[2] : k[1]; };
function haritaBlok(l, lang) {
  const h = l.harita; if (!h || !Number(h.lat) || !Number(h.lon)) return '';
  const lat = Number(h.lat), lon = Number(h.lon), d = 0.012;
  const bbox = [lon - d * 1.25, lat - d, lon + d * 1.25, lat + d].map((x) => x.toFixed(4)).join('%2C');
  return `<h2>${s('mapTitle', lang)}</h2><div class="lmap"><iframe title="${esc(s('mapTitle', lang))}" loading="lazy" referrerpolicy="no-referrer" src="https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&amp;layer=mapnik"></iframe><span class="lmap-area" aria-hidden="true"></span></div>
<p class="lmap-note">${s('mapNote', lang)} <a href="https://www.google.com/maps/@${lat},${lon},14z" target="_blank" rel="noopener">${s('openMap', lang)} →</a></p>`;
}
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
<div class="fgrid3"><label>${t.name} *<input name="ad" required autocomplete="name"></label><label>${t.phone} *${telIn(lang, t.phone)}</label><label>${s('email', lang)}<input name="eposta" type="email" autocomplete="email"></label></div>
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
    ...(ev.remote || []).filter(([, n]) => SOCIAL_LOCAL[n]).map(([, n]) => ({ src: rimg(SOCIAL_LOCAL[n], w, 72), w, h: Math.round(w * 0.5625) })),
  ];
}
function evCard(ev, lang) {
  const L = GL(lang); const c = ev[L]; const cat = EVENTS.cats[ev.cat]; const im = evImgs(ev, c, 800)[0];
  return `<a class="pcard" href="${evUrl(lang, ev)}"><div class="pcimg">${im ? `<img src="${im.src}" alt="${esc(c.title)}" width="800" height="500" loading="lazy">` : `<div class="ph evph"><span>${cat.icon}</span><b>${esc(evT(cat.name, lang))}</b></div>`}</div><div class="pcbody"><small>${esc(ev.date)} · ${esc(evT(cat.name, lang))}</small><h3>${esc(c.title)}</h3><p>${esc(c.card)}</p><span class="more">${evT(EVENTS.ui.read, lang)} →</span></div></a>`;
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

const SOON = { tr: ['Portföyümüz yenileniyor', 'Yeni sitemize ilanlarımızı aktarıyoruz. Bu süreçte Antalya’daki güncel satılık ve kiralık seçenekler için bize doğrudan yazın; bütçenize ve hedefinize uygun portföyü sizinle paylaşalım.', 'WhatsApp’tan yazın', 'Projelerimizi inceleyin'], en: ['Our portfolio is being updated', 'We are moving our listings to our new website. In the meantime, message us directly for current properties for sale and rent in Antalya and we will share options that fit your budget and goals.', 'Message us on WhatsApp', 'See our projects'] };
function grid(list, lang) {
  if (!list.length && !LISTINGS.length) { const c = SOON[GL(lang)]; return `<div class="soon"><h3>${c[0]}</h3><p>${c[1]}</p><p><a class="btn" href="${waLink(T[lang].waGeneral)}" target="_blank" rel="noopener">${c[2]}</a> <a class="more" href="${url(lang, 'projects')}">${c[3]} →</a></p></div>`; }
  return list.length ? `<div class="grid">${list.map((l) => card(l, lang)).join('')}</div>` : `<p class="empty">${T[lang].empty}</p>`;
}

const alts = (seg, slugByLang) => Object.fromEntries(LANGS.map((l) => [l, seg === 'home' ? home(l) : url(l, seg, slugByLang ? slugByLang(l) : '')]));


// ---------- Ana sayfa: ilan kategorileri ve öne çıkan lokasyonlar (Neo tarzı) ----------
const HC = {
  tr: { cats: 'İlan kategorileri', locs: 'Öne çıkan lokasyonlar', n: (k) => `${k} ilan`, see: 'İlanları gör', guide: 'Bölge rehberi', all: 'Antalya geneli', mah: 'Popüler mahalleler', sale: 'Satılık', rent: 'Kiralık' },
  en: { cats: 'Listing categories', locs: 'Popular locations', n: (k) => `${k} listings`, see: 'View listings', guide: 'Area guide', all: 'All of Antalya', mah: 'Popular neighbourhoods', sale: 'For sale', rent: 'For rent' },
  ru: { cats: 'Категории объектов', locs: 'Популярные районы', n: (k) => `${k} объектов`, see: 'Смотреть объекты', guide: 'Гид по району', all: 'Вся Анталия', mah: 'Популярные кварталы', sale: 'Продажа', rent: 'Аренда' },
};
const HCX = (lang) => HC[lang] || HC.en;
function homeCats(lang) {
  const x = HCX(lang); const base = url(lang, 'list'); const n = (f) => LISTINGS.filter(f).length;
  const et = (k) => EMLAK_TIPLERI.find((e) => e.k === k);
  const items = [
    ['🔑', x.sale, base + '?tip=Satılık', n((l) => l.tip === 'Satılık')],
    ['🗝️', x.rent, base + '?tip=Kiralık', n((l) => l.tip === 'Kiralık')],
    ...['konut', 'is-yeri', 'arsa', 'turistik-tesis'].map((k) => { const e = et(k); return [e.icon, lab(e, lang), catUrl(lang, e), n((l) => l.emlakTipi === k)]; }),
  ];
  return `<section class="wrap sec"><div class="sechead"><h2>${x.cats}</h2></div><div class="hcats">${items.map(([i, t, u, c]) => `<a href="${u}"><span>${i}</span><b>${esc(t)}</b><small>${c ? x.n(c) : x.see}</small></a>`).join('')}</div></section>`;
}
function homeLocs(lang) {
  const x = HCX(lang); const L = GL(lang); const base = url(lang, 'list');
  const cards = [[ '🌅', x.all, base, LISTINGS.length, '' ], ...AREA_GUIDES.map((a) => { const c = LISTINGS.filter((l) => l.ilce === a.ilce).length; return [a.icon, a[L].title.replace(/ Bölge Rehberi| Area Guide/, ''), c ? `${base}?ilce=${encodeURIComponent(a.ilce)}` : aUrl(L, a), c, c ? '' : x.guide]; })];
  const mah = MAHALLELER.map((m) => `<a href="${mUrl(L, m)}">${m.icon} ${esc(m[L].name)}</a>`).join('');
  return `<section class="wrap sec"><div class="sechead"><h2>${x.locs}</h2><a href="${L === 'tr' ? `/${SEGS.areas.tr}/` : `/en/${SEGS.areas.en}/`}">${x.guide} →</a></div><div class="hlocs">${cards.map(([i, t, u, c, g]) => `<a href="${u}"><span>${i}</span><b>${esc(t)}</b><small>${c ? x.n(c) : g || x.see}</small></a>`).join('')}</div><p class="hmah"><b>${x.mah}:</b> ${mah}</p></section>`;
}
// ---------- sayfalar ----------
function pageHome(lang) {
  const t = T[lang];
  const avail = LISTINGS.filter((l) => l.durum !== 'Satıldı');
  const show = [...avail.filter((l) => l.oneCikan === 'Evet'), ...avail.filter((l) => l.oneCikan !== 'Evet')].slice(0, 12);
  const body = `${heroSlider(lang)}
<section class="hsearchbar"><div class="wrap">${areaTabs(lang, 'link')}${searchBox(lang)}</div></section>
${show.length ? `<section class="wrap sec"><div class="sechead"><h2>${t.featured}</h2><a href="${url(lang, 'list')}">${t.seeAll} →</a></div>${areaTabs(lang, 'filter')}${grid(show, lang).replace('<div class="grid">', '<div class="grid g4">')}</section>` : ''}
${homeCats(lang)}
${homeLocs(lang)}
<section class="wrap sec"><div class="sechead"><h2>${t.projects}</h2><a href="${url(lang, 'projects')}">${t.projectsCta} →</a></div>${projectCards(lang)}</section>
${consultBar(lang)}
${trustStrip(lang)}
${brokerBlock(lang)}
${citizenshipBand(lang)}
${whyBlock(lang)}
${reviewsBlock(lang)}
${talkBlock(lang)}
${plazaBlock(lang)}
<section class="wrap sec">${joinBlock(lang)}</section>
${blogStrip(lang)}
${igBlock(lang)}`;
  write(path.join(BASE[lang], 'index.html'), layout({ lang, title: t.homeTitle || `${t.heroTitle} | ACC HOMES`, desc: t.metaHome, canonical: home(lang), alternates: alts('home'), body }));
}

// ---------- İlan arama: Sahibinden uyumlu kategori sayfaları ve detaylı filtre ----------
const RU_LAB = { banyo: 'Санузлы', otopark: 'Парковка', esya: 'Мебель', kullanim: 'Статус', takas: 'Обмен', asansor: 'Лифт', balkon: 'Балкон', isitma: 'Отопление', kredi: 'Ипотека', tapu: 'Тапу', imar: 'Зонирование', Konut: 'Жилая', 'Satılık': 'Продажа', 'Kiralık': 'Аренда', Villa: 'Вилла', Daire: 'Квартира', Dubleks: 'Дуплекс', 'Müstakil Ev': 'Дом' };
const TXL = (lang) => (lang === 'ru' ? { ...TX.en, listedIn: 'Дата публикации', emlakTipi: 'Тип недвижимости' } : TX[GL(lang)]);
const lab = (o, lang) => (lang === 'ru' && o && RU_LAB[o.f || o.tr] ? RU_LAB[o.f || o.tr] : GL(lang) === 'tr' ? o.tr : o.en);
const altLab = (a, lang) => (GL(lang) === 'tr' ? a : (lang === 'ru' && RU_LAB[a]) || ALT_EN[a] || a);
const etSlug = (e, lang) => (lang === 'tr' ? e.k : e.enSlug);
const katSlug = (k, lang) => (lang === 'tr' ? k : KATEGORILER[k].enSlug);
const altSlug = (a, lang) => slugify(lang === 'tr' ? a : ALT_EN[a] || a);
const CAT_LANGS = ['tr', 'en'];
function catUrl(lang, et, kat, alt) {
  const base = url(lang, 'list');
  if (!et || !CAT_LANGS.includes(lang)) { const qs = [et && `emlak=${et.k}`, kat && `kat=${kat}`, alt && `alt=${encodeURIComponent(alt)}`].filter(Boolean).join('&'); return base + (qs ? '?' + qs : ''); }
  return base + [etSlug(et, lang), kat && katSlug(kat, lang), alt && altSlug(alt, lang)].filter(Boolean).join('/') + '/';
}
function filterPanel(lang, ctx) {
  const x = TXL(lang); const L = GL(lang); const { et, kat, alt } = ctx;
  const tipOpts = EMLAK_TIPLERI.map((e) => `<option value="${e.k}" data-href="${catUrl(lang, e)}"${et === e ? ' selected' : ''}>${e.icon} ${lab(e, lang)}</option>`).join('');
  const kats = (et ? et.kategoriler : Object.keys(KATEGORILER));
  const katOpts = kats.map((k) => `<option value="${k}" data-href="${et ? catUrl(lang, et, k) : ''}"${kat === k ? ' selected' : ''}>${lab(KATEGORILER[k], lang)}</option>`).join('');
  const alts = et ? et.alt : [];
  const mahs = [...new Set(LISTINGS.map((l) => `${l.ilce}|${l.mahalle || ''}`).filter((v) => !v.endsWith('|')))].sort((a, b) => a.localeCompare(b, 'tr'));
  const sec = SECMELI.filter((f) => !et || f.tipler.includes(et.k));
  const rng = (name, lbl) => `<fieldset class="fs"><legend>${lbl}</legend><div class="rng"><input type="number" inputmode="numeric" min="0" name="${name}Min" placeholder="${x.min}"><input type="number" inputmode="numeric" min="0" name="${name}Max" placeholder="${x.max}"></div></fieldset>`;
  const chk = (name, list) => `<div class="chks">${list.map(([v, t]) => `<label><input type="checkbox" name="${name}" value="${esc(v)}"> ${esc(t)}</label>`).join('')}</div>`;
  const showRooms = !et || ['konut', 'konut-projeleri', 'devre-mulk'].includes(et.k);
  return `<aside class="fpanel" id="fpanel"><form id="xf" class="xf" onsubmit="return false">
<div class="fphead"><b>${x.filters}</b><button type="button" class="fclose" data-fclose aria-label="×">×</button></div>
<label class="fs">${x.search}<input type="search" name="q" placeholder="${x.searchPh}"></label>
<label class="fs">${x.tip}<select name="emlak" data-nav>${`<option value="" data-href="${url(lang, 'list')}">${x.any}</option>`}${tipOpts}</select></label>
<label class="fs">${x.kat}<select name="kat" data-nav><option value="" data-href="${et ? catUrl(lang, et) : ''}">${x.any}</option>${katOpts}</select></label>
${alts.length ? `<fieldset class="fs"><legend>${x.alt}</legend>${chk('alt', alts.map((a) => [a, altLab(a, lang)]))}</fieldset>` : ''}
<label class="fs">${x.ilce}<select name="ilce"><option value="">${x.any}</option>${ILCELER.map((d) => `<option>${d}</option>`).join('')}</select></label>
<label class="fs">${x.mahalle}<select name="mah"><option value="">${x.any}</option>${mahs.map((m) => { const [i, mh] = m.split('|'); return `<option value="${esc(mh)}" data-ilce="${esc(i)}">${esc(mh)}</option>`; }).join('')}</select></label>
${rng('fiyat', x.price + ' (₺)')}${rng('brut', x.m2b)}${rng('net', x.m2n)}
${showRooms ? `<fieldset class="fs"><legend>${x.rooms}</legend>${chk('oda', ODALAR.map((o) => [o, o]))}</fieldset>` : ''}
${showRooms ? `<fieldset class="fs"><legend>${ktLab(lang)}</legend>${chk('kt', KONUT_TIPI.map((k) => [k[0], ktDeger(k[0], lang)]))}</fieldset>` : ''}
${et && et.k === 'arsa' ? '' : `<fieldset class="fs"><legend>${x.age}</legend>${chk('yas', BINA_YASI.map(([v, t]) => [v, t[L] || t.en]))}</fieldset>`}
<details class="fs more"><summary>${x.more}</summary>${sec.map((f) => `<fieldset class="fs"><legend>${lab(f, lang)}</legend>${chk('f-' + f.f, f.ops.filter(([v]) => f.f !== 'kat' || !/^\d+$/.test(v)).map(([v, e]) => [v, L === 'tr' ? v : e]))}</fieldset>`).join('')}</details>
${Object.keys(TAGS).length ? `<fieldset class="fs"><legend>${x.tags}</legend>${chk('tag', Object.keys(TAGS).map((k) => [k, tagLabel(k, lang)]))}</fieldset>` : ''}
<div class="fbtns"><button type="button" class="btn" data-fapply>${x.apply}</button><button type="reset" class="btn ghost">${x.clear}</button></div>
</form></aside>`;
}
function catNav(lang, ctx) {
  const { et, kat } = ctx; const x = TXL(lang);
  if (!et) return `<nav class="catnav" aria-label="${x.cats}">${EMLAK_TIPLERI.map((e) => { const n = LISTINGS.filter((l) => l.emlakTipi === e.k).length; return `<a href="${catUrl(lang, e)}">${e.icon} ${lab(e, lang)}${n ? ` <small>${n}</small>` : ''}</a>`; }).join('')}</nav>`;
  const subs = kat ? et.alt.map((a) => [altLab(a, lang), catUrl(lang, et, kat, a), LISTINGS.filter((l) => l.emlakTipi === et.k && l.kategori === kat && l.altTip === a).length]) : et.kategoriler.map((k) => [lab(KATEGORILER[k], lang), catUrl(lang, et, k), LISTINGS.filter((l) => l.emlakTipi === et.k && l.kategori === k).length]);
  return subs.length ? `<nav class="catnav" aria-label="${x.cats}">${subs.map(([n, u, c]) => `<a href="${u}">${esc(n)}${c ? ` <small>${c}</small>` : ''}</a>`).join('')}</nav>` : '';
}
// İş ortağı sayfası: ekibimiz/<ad>/ — o iş ortağının yayındaki tüm portföyleri ve iletişim bilgisi
function pageAgent(ad, list, lang) {
  const t = T[lang]; const tr = GL(lang) === 'tr'; const d = list.find((l) => l.danisman)?.danisman || { ad, unvan: s('broker', lang), tel: SITE.phoneRaw, telText: SITE.phone, foto: SITE.brokerPhoto };
  const title = tr ? `${ad} – Antalya Satılık ve Kiralık Portföyleri` : `${ad} – Property Listings in Antalya`;
  const desc = tr ? `${ad}, ACC HOMES International Real Estate iş ortağı. ${list.length} güncel satılık ve kiralık portföy; fiyat, konum ve fotoğraflarıyla. Hemen iletişime geçin.` : `${ad}, partner at ACC HOMES International Real Estate. ${list.length} current listings in Antalya with photos and prices.`;
  const wa = `https://wa.me/${String(d.tel).replace('+', '')}`;
  const body = `<section class="wrap sec"><nav class="crumbs"><a href="${home(lang)}">${t.nav.home}</a> / <a href="${url(lang, 'team')}">${PAGES.team.nav[lang] || PAGES.team.nav.en}</a> / <span>${esc(ad)}</span></nav>
<div class="box agent agentpage">${d.foto ? `<img src="${d.foto}" alt="${esc(ad)}">` : `<span class="mav">${esc(ad.split(' ').map((x) => x[0]).slice(0, 2).join(''))}</span>`}<div><h1>${esc(ad)}</h1><small>${esc(d.unvan || '')} · ACC HOMES International Real Estate</small><a href="tel:${d.tel}">${esc(d.telText || d.tel)}</a></div><a class="wabtn sm" href="${wa}" target="_blank" rel="noopener">WhatsApp</a></div>
<h2>${tr ? `${list.length} portföy` : `${list.length} listings`}</h2><div class="grid">${list.map((l) => card(l, lang)).join('')}</div></section>`;
  write(path.join(url(lang, 'team', slugify(ad)), 'index.html'), layout({ lang, title: `${title} | ACC HOMES`, desc, canonical: url(lang, 'team', slugify(ad)), alternates: null, body,
    schema: [{ '@context': 'https://schema.org', '@type': 'RealEstateAgent', name: ad, worksFor: { '@type': 'RealEstateAgent', name: 'ACC HOMES International Real Estate' }, telephone: d.tel, url: SITE.domain + url(lang, 'team', slugify(ad)) }] }));
}
function listPage(lang, ctx) {
  const t = T[lang]; const x = TXL(lang); const { et, kat, alt } = ctx;
  const list = LISTINGS.filter((l) => (!et || l.emlakTipi === et.k) && (!kat || l.kategori === kat) && (!alt || l.altTip === alt));
  const loc = GL(lang) === 'tr' ? 'Antalya' : 'Antalya';
  const h1 = !et ? (GL(lang) === 'tr' ? `${loc} Satılık ve Kiralık Emlak İlanları` : `Property for Sale and Rent in ${loc}`)
    : GL(lang) === 'tr' ? `${loc} ${[kat && KATEGORILER[kat].tr, alt || et.tr].filter(Boolean).join(' ')} İlanları`
    : `${alt ? altLab(alt, lang) : et.en}${kat ? ' ' + KATEGORILER[kat].en.toLowerCase() : ''} in ${loc}`;
  const canon = et ? catUrl(lang, et, kat, alt) : url(lang, 'list');
  const crumbs = [`<a href="${home(lang)}">${t.nav.home}</a>`, et ? `<a href="${url(lang, 'list')}">${t.nav.list}</a>` : `<span>${t.nav.list}</span>`];
  if (et) crumbs.push(kat ? `<a href="${catUrl(lang, et)}">${lab(et, lang)}</a>` : `<span>${lab(et, lang)}</span>`);
  if (et && kat) crumbs.push(alt ? `<a href="${catUrl(lang, et, kat)}">${lab(KATEGORILER[kat], lang)}</a>` : `<span>${lab(KATEGORILER[kat], lang)}</span>`);
  if (alt) crumbs.push(`<span>${esc(altLab(alt, lang))}</span>`);
  const body = `<section class="wrap sec lpage" data-ctx-et="${et ? et.k : ''}" data-ctx-kat="${kat || ''}" data-ctx-alt="${esc(alt || '')}"><nav class="crumbs">${crumbs.join(' / ')}</nav>
<div class="lhead"><h1>${esc(h1)}</h1><span class="rcount" data-rcount>${x.results(list.length)}</span></div>${catNav(lang, ctx)}
<div class="ltoolbar"><button type="button" class="btn ghost fopen" data-fopen>☰ ${x.filters}</button><label>${x.sort}<select name="sort" form="xf" data-sort><option value="new">${x.newest}</option><option value="asc">${x.priceAsc}</option><option value="desc">${x.priceDesc}</option><option value="m2">${x.m2Asc}</option></select></label></div>
<div class="lsplit">${filterPanel(lang, ctx)}<div class="lres">${grid(list, lang)}<p class="none" data-none hidden>${x.none} <a href="${waLink(t.waGeneral)}" target="_blank" rel="noopener">WhatsApp →</a></p></div></div>${joinBlock(lang)}</section>`;
  const desc = GL(lang) === 'tr' ? `${h1}: ACC HOMES portföyünde fotoğraflı ve detaylı filtreli ilanlar. Fiyat, m², oda, bina yaşı ve konuma göre arayın; profesyonelimize hemen ulaşın.` : `${h1}: listings from ACC HOMES with photos and detailed filters by price, m², rooms, building age and location. Contact our consultants directly.`;
  const alternates = et ? { tr: catUrl('tr', et, kat, alt), en: catUrl('en', et, kat, alt) } : alts('list');
  write(path.join(canon.split('?')[0], 'index.html'), layout({ lang, title: `${h1} | ACC HOMES`, desc: desc.slice(0, 158), canonical: canon, alternates, body, noindex: !list.length }));
  return { url: canon, n: list.length };
}
function pageList(lang) {
  const out = [listPage(lang, {})];
  if (CAT_LANGS.includes(lang)) for (const et of EMLAK_TIPLERI) {
    out.push(listPage(lang, { et }));
    for (const k of et.kategoriler) {
      out.push(listPage(lang, { et, kat: k }));
      for (const a of et.alt) if (LISTINGS.some((l) => l.emlakTipi === et.k && l.kategori === k && l.altTip === a) || (et.k === 'konut' && ['Daire', 'Villa', 'Müstakil Ev', 'Rezidans'].includes(a)) || (et.k === 'is-yeri' && ['Dükkan & Mağaza', 'Ofis'].includes(a))) out.push(listPage(lang, { et, kat: k, alt: a }));
    }
  }
  for (const o of out) if (o.n) LIST_URLS.push(o.url);
}
const LIST_URLS = [];
function joinBlock(lang) {
  const L = GL(lang);
  const c = L === 'tr' ? ['İş ortağımız olmak ister misiniz?', 'ACC Plaza’da yaklaşık 50 iş ortağıyla çalışıyoruz. Kurumsal portföy erişimi, eğitim, pazarlama ve baştan sona operasyon desteğiyle kariyerinizi büyütün.', 'İş ortağımız olun', 'İş ortağı girişi'] : ['Want to become our partner?', 'Around 50 partners work with us at ACC Plaza. Grow your career with access to our portfolio, training, marketing and end-to-end operational support.', 'Join us', 'Partner login'];
  return `<div class="joinblk"><div><h2>${c[0]}</h2><p>${c[1]}</p></div><div class="jbtns"><a class="btn" href="${url(lang, 'join')}">${c[2]} →</a><a class="btn ghost" href="${SITE.crmUrl}" target="_blank" rel="noopener">${c[3]}</a></div></div>`;
}

function similar(l, lang) {
  const pool = LISTINGS.filter((x) => x !== l && x.tip === l.tip && x.durum !== 'Satıldı');
  const list = [...pool.filter((x) => x.ilce === l.ilce && x.tur === l.tur), ...pool.filter((x) => !(x.ilce === l.ilce && x.tur === l.tur))].slice(0, 3);
  return list.length ? `<section class="wrap sec"><div class="sechead"><h2>${s('similar', lang)}</h2><a href="${url(lang, 'list')}">${T[lang].seeAll} →</a></div>${grid(list, lang)}</section>` : '';
}
function pageListing(l, lang) {
  const t = T[lang]; const F = t.fields; const slug = slugOf(l);
  const title = pick(l.baslik, lang);
  const desc = (l.metaI18n && (l.metaI18n[lang] || (lang !== 'tr' && l.metaI18n.en))) || ((lang === 'tr' && l.meta) ? l.meta : pick(l.aciklama, lang).slice(0, 155));
  const rows = [
    [F.no, l.id], [TXL(lang).listedIn, l.tarih], [TXL(lang).emlakTipi, [lab(EMLAK_TIPLERI.find((e) => e.k === l.emlakTipi) || { tr: '', en: '' }, lang), lab(KATEGORILER[l.kategori] || { tr: '', en: '' }, lang), altLab(l.altTip || '', lang)].filter(Boolean).join(' · ')], [F.rooms, l.oda], [F.gross, l.brut ? { m2: l.brut } : ''], [F.net, l.net ? { m2: l.net } : ''], [F.age, l.yas], [F.floor, l.kat], [F.floors, l.katSayisi],
    [ktLab(lang), (l.konutTipi || []).map((k) => ktDeger(k, lang)).join(', ')],
    [F.heat, optV('isitma', l.isitma, lang)], [lab(SECMELI.find((x) => x.f === 'banyo'), lang), l.banyo], [lab(SECMELI.find((x) => x.f === 'balkon'), lang), optV('balkon', l.balkon, lang)], [lab(SECMELI.find((x) => x.f === 'asansor'), lang), optV('asansor', l.asansor, lang)], [lab(SECMELI.find((x) => x.f === 'otopark'), lang), optV('otopark', l.otopark, lang)], [lab(SECMELI.find((x) => x.f === 'esya'), lang), optV('esya', l.esya, lang)], [lab(SECMELI.find((x) => x.f === 'kullanim'), lang), optV('kullanim', l.kullanim, lang)], [F.inSite, optV('kredi', l.site, lang)], [GL(lang) === 'tr' ? 'Aidat' : 'Service charge', l.aidat ? `${l.aidat} TL` : ''], [({ tr: 'Depozito', ru: 'Депозит' })[lang] || 'Deposit', l.depozito ? `${l.depozito} TL` : ''], [lab(SECMELI.find((x) => x.f === 'imar'), lang), optV('imar', l.imar, lang)], [lab(SECMELI.find((x) => x.f === 'takas'), lang), optV('takas', l.takas, lang)], [F.credit, l.kredi === 'Evet' ? optV('kredi', l.kredi, lang) : ''], [F.deed, optV('tapu', l.tapu, lang)], [s('iskanOk', lang), l.iskan ? s('iskanVar', lang) : ''], [s('plotArea', lang), l.arsa ? { m2: l.arsa } : ''], [s('gardenArea', lang), l.bahce ? { m2: l.bahce } : ''], [s('buildArea', lang), l.insaat ? { m2: l.insaat } : ''], [s('facing', lang), loc(l.cephe, lang)], [F.project, l.proje], [F.location, [l.mahalle, l.ilce, 'Antalya'].filter(Boolean).join(', ')],
  ].filter(([, v]) => v !== undefined && v !== null && v !== '');
  const photos = (l.foto || []);
  const th = (p) => (l.thumbs ? p.replace(/\.webp$/, '-t.webp') : p);
  const gallery = photos.length ? `<div class="gallery" data-gal><div class="gmain"><img class="main" src="${esc(photos[0])}" alt="${esc(title)}" width="1600" height="1067" fetchpriority="high">${photos.length > 1 ? `<button type="button" class="gnav prev" aria-label="‹">‹</button><button type="button" class="gnav next" aria-label="›">›</button>` : ''}<span class="gcount"><b>1</b> / ${photos.length}</span><button type="button" class="gfull" aria-label="⤢">⤢</button></div>${photos.length > 1 ? `<div class="thumbs">${photos.map((p, i) => `<img src="${esc(th(p))}" data-full="${esc(p)}" alt="${esc(title)} ${i + 1}" loading="lazy" width="480" height="320"${i === 0 ? ' class="on"' : ''}>`).join('')}</div>` : ''}</div>` : `<div class="gallery">${placeholder}</div>`;
  const wa = waLink(t.waText(l.id));
  const tr = lang === 'tr';
  const L = (k) => s(k, lang);
  const ag = l.danisman || { ad: 'Ali Caner Can', unvan: L('broker'), tel: SITE.phoneRaw, telText: SITE.phone, foto: SITE.brokerPhoto };
  const agWa = `https://wa.me/${String(ag.tel).replace('+', '')}?text=${encodeURIComponent(t.waText(l.id))}`;
  const reasons = locList(l.nedenler, lang).slice(0, 4);
  const feats = locList(l.ozellikler, lang);
  const plan = l.plan ? (l.plan[lang] || l.plan[GL(lang)] || l.plan.en || l.plan.tr) : null;
  const dist = l.mesafeler ? [[L('beach'), l.mesafeler.plaj], [L('airport'), l.mesafeler.havalimani], [L('centre'), l.mesafeler.merkez]].filter(([, v]) => v) : [];
  const pageUrl = SITE.domain + url(lang, 'listing', slug);
  const try_ = l.fiyat && (l.para === 'TL' || !l.para) ? l.fiyat : 0;
  const body = `<section class="wrap sec listing">
<nav class="crumbs"><a href="${home(lang)}">${t.nav.home}</a> / <a href="${url(lang, 'list')}">${t.nav.list}</a> / <span>${esc(l.id)}</span></nav>
<div class="lgrid"><div>${gallery}
<div class="mprice"><div class="mp-top"><span class="tag static">${tipLabel(l, lang)}</span>${statusBadge(l, lang)}<span class="mp-ref">${esc(l.id)}</span></div><div class="price big"${priceAttrs(l)}>${fmtPrice(l, lang)}</div><div class="mp-spec">${[l.oda ? esc(l.oda) : '', l.brut ? `<span data-m2="${+l.brut}">${+l.brut} m²</span>` : '', l.net ? `<span>${esc(F.net)} <span data-m2="${+l.net}">${+l.net} m²</span></span>` : ''].filter(Boolean).join('<i>·</i>')}</div><div class="mp-act"><a class="btn" href="${agWa}" target="_blank" rel="noopener">${t.wa}</a><a class="btn ghost" href="tel:${ag.tel}">${t.call}</a></div></div>
<div class="ltools"><span class="ref">${L('ref')}: <b>${esc(l.id)}</b></span><a href="https://wa.me/?text=${encodeURIComponent(title + ' ' + pageUrl)}" target="_blank" rel="noopener">${L('shareWa')}</a><a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}" target="_blank" rel="noopener">Facebook</a><button type="button" data-copy="${pageUrl}">${L('copy')}</button><button type="button" onclick="window.print()">${L('print')}</button><a href="${waLink(L('reportMsg') + l.id)}" target="_blank" rel="noopener">${L('report')}</a></div>
<h1>${esc(title)}</h1><p class="loc">${esc([l.proje, l.mahalle, l.ilce].filter(Boolean).join(' · '))}</p>${(l.etiketler || []).filter((k) => TAGS[k]).length ? `<div class="ltags big">${l.etiketler.filter((k) => TAGS[k]).map((k) => `<span class="lt-${k}">${tagLabel(k, lang)}</span>`).join('')}</div>` : ''}
${reasons.length ? `<div class="reasons">${reasons.map((r) => `<span>✓ ${esc(r)}</span>`).join('')}</div>` : ''}
<h2>${F.desc}</h2><div class="desc">${esc(pick(l.aciklama, lang)).split(/\n+/).map((p) => `<p>${p}</p>`).join('')}</div>
${plan ? `<h2>${L('floorPlan')}</h2><div class="fplan">${plan.map(([h, items]) => `<div><h3>${esc(h)}</h3><ul>${items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}</div>` : ''}
${feats.length ? `<h2>${l.plan ? L('highlights') : F.features}</h2><ul class="chips">${feats.map((o) => `<li>${esc(o)}</li>`).join('')}</ul>` : ''}
${dist.length ? `<h2>${L('distances')}</h2><ul class="chips">${dist.map(([k, v]) => `<li>${k}: <b>${esc(v)}</b></li>`).join('')}</ul>` : ''}
${haritaBlok(l, lang)}
${l.video ? `<p><a class="btn ghost" href="${esc(l.video)}" target="_blank" rel="noopener">Video →</a></p>` : ''}
${l.tip !== 'Kiralık' ? `<h2>${L('costs')}</h2>${calcBlock(lang).replace('data-calc>', `data-calc data-price="${try_ || ''}">`)}<p><a href="${lang === 'tr' ? '/alici-rehberi/alim-masraflari/' : '/en/buyers-guide/purchase-costs/'}">${L('costsMore')}</a></p>` : ''}
</div><aside class="side"><div class="box"><span class="tag static">${tipLabel(l, lang)}</span>${statusBadge(l, lang)}<div class="price big"${priceAttrs(l)}>${fmtPrice(l, lang)}</div>${l.fiyatKontrol ? `<p class="pcheck">✓ ${s('priceChecked', lang)}<small>${s('lastCheck', lang)}: ${esc(l.fiyatKontrol)}</small></p>` : ''}${l.eids ? `<p class="eids">✓ ${s('eidsOk', lang)}<small>${esc(l.eids)}</small></p>` : ''}${l.tekYetki ? `<p class="sole">★ ${s('soleAgency', lang)}</p>` : ''}<details class="whydiff"><summary>${s('whyDiff', lang)}</summary><p>${s('whyDiffText', lang)}</p></details><div class="ltools2" data-id="${esc(l.id)}">${cardTools(l, lang)}</div>
<table class="spec">${rows.map(([k, v]) => `<tr><th>${k}</th><td>${v && v.m2 ? `<span data-m2="${+v.m2}">${+v.m2} m²</span>` : esc(v)}</td></tr>`).join('')}</table>
<div class="actions"><a class="btn" href="${wa}" target="_blank" rel="noopener">${t.wa}</a><a class="btn ghost" href="tel:${SITE.phoneRaw}">${t.call}</a></div>
<a class="gline" href="${SITE.google.mapsUrl}" target="_blank" rel="noopener">${ICON_G}<b>${fmtRating(lang)}</b>${stars}<span>${t.gReviews(SITE.google.reviews)}</span></a></div>
<div class="box agent">${ag.foto ? `<img src="${ag.foto}" alt="${esc(ag.ad)}">` : `<span class="mav">${esc(ag.ad.split(' ').map((x) => x[0]).slice(0, 2).join(''))}</span>`}<div><b>${esc(ag.ad)}</b><small>${esc(ag.unvan || '')}</small><a href="tel:${ag.tel}">${esc(ag.telText || ag.tel)}</a></div><a class="wabtn sm" href="${agWa}" target="_blank" rel="noopener">WhatsApp</a></div>
<form class="box form" name="gosterim-talep" method="POST" data-netlify="true" netlify-honeypot="bot" action="${url(lang, 'contact')}?ok=1"><h3>${L('viewing')}</h3>
<input type="hidden" name="form-name" value="gosterim-talep"><input type="hidden" name="ilan" value="${esc(l.id)}"><p hidden><input name="bot"></p>
<div class="seg"><label><input type="radio" name="tur" value="yerinde" checked> ${L('inPerson')}</label><label><input type="radio" name="tur" value="online"> ${L('online')}</label></div>
<div class="days" data-days data-lang="${lang}"></div><input type="hidden" name="gun" data-day>
<select name="saat"><option>10:00</option><option>11:00</option><option>12:00</option><option>14:00</option><option>15:00</option><option>16:00</option><option>17:00</option></select>
<input type="hidden" name="dil" value="${lang}"><input name="ad" placeholder="${t.name} *" required autocomplete="name">${telIn(lang, t.phone)}${kvkkIn(lang)}<button class="btn" type="submit">${L('reqViewing')}</button></form>
<form class="box form" name="ilan-talep" method="POST" data-netlify="true" netlify-honeypot="bot" action="${url(lang, 'contact')}?ok=1"><h3>${t.askTitle}</h3>
<input type="hidden" name="form-name" value="ilan-talep"><input type="hidden" name="ilan" value="${esc(l.id)}"><p hidden><input name="bot"></p>
<input type="hidden" name="dil" value="${lang}"><input name="ad" placeholder="${t.name} *" required autocomplete="name">${telIn(lang, t.phone)}<textarea name="mesaj" rows="3" placeholder="${t.msg}"></textarea>${kvkkIn(lang)}<button class="btn" type="submit">${t.send}</button></form>
</aside></div></section>${similar(l, lang)}<section class="wrap sec">${joinBlock(lang)}</section>`;
  const offer = l.fiyat ? { '@type': 'Offer', price: l.fiyat, priceCurrency: l.para === 'TL' ? 'TRY' : l.para, availability: l.durum === 'Satıldı' ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock' } : undefined;
  const schema = [
    { '@context': 'https://schema.org', '@type': 'RealEstateListing', name: title, description: pick(l.aciklama, lang), url: SITE.domain + url(lang, 'listing', slug), datePosted: l.tarih || undefined, image: photos.length ? photos.map((p) => SITE.domain + p) : undefined, offers: offer,
      about: { '@type': l.tur === 'Villa' ? 'House' : 'Apartment', numberOfRooms: l.oda, floorSize: l.net ? { '@type': 'QuantitativeValue', value: l.net, unitCode: 'MTK' } : undefined, address: { '@type': 'PostalAddress', addressLocality: l.mahalle, addressRegion: 'Antalya', addressCountry: 'TR' } } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [[t.nav.home, home(lang)], [t.nav.list, url(lang, 'list')], [title, url(lang, 'listing', slug)]].map(([n, u], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: SITE.domain + u })) },
  ];
  write(path.join(url(lang, 'listing', slug), 'index.html'), layout({ lang, title: `${title} | ACC HOMES`, desc, canonical: url(lang, 'listing', slug), alternates: alts('listing', () => slug), body: l._preview ? `<div class="demo">ÖNİZLEME — bu ilan henüz yayında değil (onay bekliyor)</div>${body}` : body, schema, ogImage: photos[0], noindex: !!l._preview }));
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
<input type="hidden" name="dil" value="${lang}"><input name="ad" placeholder="${t.name} *" required autocomplete="name">${telIn(lang, t.phone)}<textarea name="mesaj" rows="4" placeholder="${t.msg}"></textarea>${kvkkIn(lang)}<button class="btn" type="submit">${t.send}</button></form></div></section>${mapBlock(lang)}${trustStrip(lang)}${reviewsBlock(lang)}`;
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
let FONTS_CSS = '', FONTS_PRELOAD = '';
function setFonts(out) {
  fs.writeFileSync(path.join(OUT, 'assets', 'fonts.css'), out); FONTS_OK = true;
  FONTS_CSS = out.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s*\n\s*/g, '').replace(/\s*([{};:,])\s*/g, '$1');
  const pre = [...new Set([...out.matchAll(/url\((\/fonts\/[^)]*montserrat-latin-(?:700|800)-normal[^)]*\.woff2)\)/g)].map((m) => m[1]))].slice(0, 2);
  FONTS_PRELOAD = pre.map((u) => `<link rel="preload" href="${u}" as="font" type="font/woff2" crossorigin>`).join('');
}
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
    setFonts(out);
  } catch (e) {
    // Yedek: npm @fontsource paketleri (GitHub/Turhost derlemesi)
    try {
      const nm = path.join(ROOT, 'node_modules/@fontsource');
      const sets = [['montserrat', ['latin', 'latin-ext'], [600, 700, 800]], ['vazirmatn', ['arabic', 'latin'], [400, 700]]];
      const dir = path.join(OUT, 'fonts'); fs.mkdirSync(dir, { recursive: true }); let out = '';
      for (const [fam, subs, ws] of sets) for (const sub of subs) for (const w of ws) {
        const cssF = path.join(nm, fam, `${sub}-${w}.css`); if (!fs.existsSync(cssF)) continue;
        let css = fs.readFileSync(cssF, 'utf8').replace(/url\([^)]*?\.woff\)\s*format\('woff'\),?/g, '').replace(/,\s*;/g, ';');
        css = css.replace(/url\(\.\/files\/([^)]+\.woff2)\)/g, (m, f) => { fs.copyFileSync(path.join(nm, fam, 'files', f), path.join(dir, f)); return `url(/fonts/${f})`; });
        css = css.replace(/font-family:\s*'[^']+'/g, `font-family: '${fam === 'montserrat' ? 'Montserrat' : 'Vazirmatn'}'`).replace(/font-display:\s*\w+/g, 'font-display: swap');
        out += css + '\n';
      }
      if (!out) throw new Error('fontsource yok');
      setFonts(out); console.log('Yazı tipleri @fontsource paketinden alındı');
    } catch (e2) { console.warn('Yazı tipleri indirilemedi, sistem fontu kullanılacak:', e.message, e2.message); }
  }
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
  pageHome(lang); pageList(lang); pageGuide(lang); pageContact(lang); pageBlog(lang); pageProjects(lang); pageGuideHub(lang); pageReviews(lang); pageFavorites(lang); pageEvents(lang); pageNews(lang); urls.push(url(lang, 'events'), ...EVENTS.events.map((e) => evUrl(lang, e))); pageDownloads(lang); urls.push(url(lang, 'projects'), url(lang, 'buyersguide'), url(lang, 'reviews'));
  if (lang !== 'tr' && lang !== 'en') for (const g of GUIDES) if (g.loc && g.loc[lang]) { pageGuideItem(g, lang); urls.push(gUrlL(lang, g)); }
  if (lang === 'tr' || lang === 'en') { for (const g of GUIDES) { pageGuideItem(g, lang); urls.push(gUrl(lang, g)); } for (const a of AREA_GUIDES) { pageAreaItem(a, lang); urls.push(aUrl(lang, a)); } for (const m of MAHALLELER) { pageMahalle(m, lang); urls.push(mUrl(lang, m)); } }
  pageAreaHub(lang); urls.push(url(lang, 'areas'));
  for (const k of Object.keys(PAGES)) { pageCorporate(k, lang); urls.push(url(lang, k)); }
  urls.push(home(lang), url(lang, 'list'), url(lang, 'guide'), url(lang, 'contact'), url(lang, 'blog'), ...ALLPOSTS.map((p) => url(lang, 'blog', p.slug)));
  for (const l of LISTINGS) { pageListing(l, lang); urls.push(url(lang, 'listing', slugOf(l))); }
  for (const l of PREVIEW) pageListing(l, lang);
  for (const [ad, list] of AGENT_ILAN) { pageAgent(ad, list, lang); urls.push(url(lang, 'team', slugify(ad))); }
}
// Antalle Özel Davet kısa linki: /antalle-davet/?d=<iş ortağı kodu> → proje sayfasındaki davet bölümü (WhatsApp önizlemesi için OG etiketli)
if (DAVET_AKTIF) {
  const hedef = url('tr', 'projects', 'antalle-concept-houses');
  write('/antalle-davet/index.html', `<!doctype html><html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex">
<title>Antalle Özel Davet · 28–29 Kasım · Yerinizi ayırın</title><meta name="description" content="ENNE Mobilya ile döşenmiş örnek villa ve daire, özel kokteyl ve canlı akustik trio. 28–29 Kasım, Altınkale / Döşemealtı.">
<meta property="og:type" content="website"><meta property="og:title" content="Antalle Özel Davet · 28–29 Kasım"><meta property="og:description" content="Yerinizi ayırın · Gün boyu 10:00–18:00 · Özel kokteyl 14:00–17:00 · Altınkale, Döşemealtı"><meta property="og:image" content="${SITE.domain}/img/antalle/antalle-davetlisiniz.jpg"><meta property="og:image:width" content="1080"><meta property="og:image:height" content="1350"><meta property="og:url" content="${SITE.domain}/antalle-davet/">
<link rel="canonical" href="${SITE.domain}${hedef}"><meta http-equiv="refresh" content="0;url=${hedef}#davet"></head><body><script>location.replace(${JSON.stringify(hedef)}+location.search+'#davet')</script><p><a href="${hedef}#davet">Antalle Özel Davet</a></p></body></html>`);
}
for (const p of PROJECTS) { if (p.i18n) { for (const lang of LANGS.filter((l) => ANTALLE[l])) { pageProjectI18n(p, lang); urls.push(url(lang, 'projects', p.slug)); } } else { pageProject(p); urls.push(`/projeler/${p.slug}/`); } }
const OLD_BLOG_TO = { kira: url('tr', 'blog', 'kira-artis-orani'), tuik: url('tr', 'blog', 'antalya-konut-satis-istatistikleri'), about: url('tr', 'about'), accday: url('tr', 'events', 'acc-day-2025'), blog: url('tr', 'blog') };
const oldBlog = fs.readFileSync(path.join(ROOT, 'data/old-blog-urls.txt'), 'utf8').trim().split('\n').map((l) => l.trim().split(/\s+/)).filter(([u, k]) => OLD_BLOG_TO[k] || k.startsWith('/')).map(([u, k]) => `${u.replace(/\/$/, '')} ${OLD_BLOG_TO[k] || k} 301\n${u} ${OLD_BLOG_TO[k] || k} 301`);
write('_redirects', oldBlog.join('\n') + '\n' + LANGS.flatMap((l) => { const to = evUrl(l, EVENTS.events.find((e) => e.id === 'acc-day-2025')); const from = `${BASE[l]}/${OLD_SOCIAL[l] || OLD_SOCIAL.en}`; return [`${from} ${to} 301`, `${from}/* ${to} 301`]; }).join('\n') + '\n');
// ---- Çeviri kalite kontrolü: TR/EN dışındaki dillerde içeriği İngilizce kalan sayfalar indekslenmez ----
const OLD_SITE = fs.readFileSync(path.join(ROOT, 'data/old-site-redirects.txt'), 'utf8').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#')).flatMap((l) => { const [u, t] = l.split(/\s+/); const forms = new Set([u, encodeURI(u)]); if (u.endsWith('/') && u.length > 1) { forms.add(u.slice(0, -1)); forms.add(encodeURI(u.slice(0, -1))); } return [...forms].map((f) => `${f} ${t} 301`); });
fs.appendFileSync(path.join(OUT, '_redirects'), OLD_SITE.join('\n') + '\n');
fs.appendFileSync(path.join(OUT, '_redirects'), SEO_REDIR.flatMap(([eski, l]) => LANGS.map((lg) => `${url(lg, 'listing', eski)} ${url(lg, 'listing', slugOf(l))} 301`)).join('\n') + '\n');

// ---- Turhost (Apache/LiteSpeed) için .htaccess ve görsel küçültme ----
if (HOST === 'turhost') {
  const reEsc = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const lines = fs.readFileSync(path.join(OUT, '_redirects'), 'utf8').split('\n').map((l) => l.trim().split(/\s+/)).filter((x) => x.length >= 2 && x[0].startsWith('/'));
  const seen = new Set(); const rules = [];
  for (const [from0, to] of lines) {
    let from; try { from = decodeURI(from0); } catch { from = from0; }
    const key = from.replace(/\/$/, ''); if (seen.has(key)) continue; seen.add(key);
    if (from.endsWith('/*')) rules.push(`RewriteRule ^${reEsc(from.slice(1, -2))}(/.*)?$ ${to} [R=301,L,NE]`);
    else rules.push(`RewriteRule ^${reEsc(from.slice(1).replace(/\/$/, ''))}/?$ ${to} [R=301,L,NE]`);
  }
  const host = SITE.domain.replace(/^https?:\/\//, '');
  fs.writeFileSync(path.join(OUT, '.htaccess'), `# ACC HOMES — yeni site (otomatik üretilir, elle değiştirmeyin)
Options -Indexes
DirectoryIndex index.html index.php
ErrorDocument 404 /404.html
AddDefaultCharset utf-8
AddType application/manifest+json .webmanifest
AddType text/plain .txt
<IfModule mod_rewrite.c>
RewriteEngine On
# HTTPS (alan adı yönlendirmesi sunucu tarafında yapılıyor; burada ayrıca yapılmaz)
RewriteCond %{SERVER_PORT} ^80$
RewriteCond %{HTTP:X-Forwarded-Proto} !https
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L,NE]
# Eski WordPress yönetim ve dosya adresleri
RewriteRule ^wp-admin(/.*)?$ / [R=301,L]
RewriteRule ^wp-login\\.php$ / [R=301,L]
RewriteRule ^(xmlrpc|wp-cron|wp-config)\\.php$ - [F,L]
# Güvenlik: form.php dışında hiçbir PHP dosyası çalıştırılamaz (eski WordPress eklenti açıklarına karşı)
RewriteCond %{REQUEST_URI} !^/form\\.php$
RewriteRule \\.(php[0-9]?|phtml|phar)$ - [F,L,NC]
# Eski WordPress eklenti/tema klasörleri ve sürüm bilgisi veren dosyalar kapalı (wp-content/uploads açık kalır)
RewriteRule ^wp-content/(plugins|themes|upgrade|cache|mu-plugins)/ - [F,L,NC]
RewriteRule ^wp-includes/ - [F,L,NC]
RewriteRule ^(readme\\.html|license\\.txt|wp-config-sample\\.php)$ - [F,L,NC]
# Gizli dosyalar (.git, .env vb.)
RewriteRule (^|/)\\.(?!well-known/) - [F,L]
# Başka sitelerin görsellerimizi doğrudan kendi sayfasında göstermesini engelle (arama motorları ve sosyal medya serbest)
RewriteCond %{HTTP_REFERER} !^$
RewriteCond %{HTTP_REFERER} !^https?://([a-z0-9-]+\\.)*(acchomesantalya\\.com|altintassatilikdaire\\.com|alicanercan\\.com|accvillas\\.com|netlify\\.app|claude\\.ai|claudeusercontent\\.com)(/|$) [NC]
RewriteCond %{HTTP_REFERER} !(google|bing|yandex|yahoo|duckduckgo|baidu|naver|translate\\.goog|facebook|fb\\.com|instagram|whatsapp|linkedin|twitter|x\\.com|t\\.co|pinterest|telegram|vk\\.com|ok\\.ru|openai|chatgpt|perplexity|microsoft|copilot) [NC]
RewriteRule \\.(jpe?g|png|webp|gif|avif)$ - [F,NC,L]
# Var olan dosya ve klasörler yönlendirilmez
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
# Eski site adresleri (301)
${rules.join('\n')}
</IfModule>
<IfModule mod_headers.c>
<FilesMatch "\\.(webp|jpg|jpeg|png|svg|woff2|css|js)$">
Header set Cache-Control "public, max-age=2592000"
</FilesMatch>
<FilesMatch "\\.(html)$">
Header set Cache-Control "public, max-age=300"
</FilesMatch>
Header always set X-Content-Type-Options "nosniff"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Strict-Transport-Security "max-age=31536000"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()"
Header always unset X-Powered-By
</IfModule>
<IfModule mod_deflate.c>
AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml text/plain application/xml
</IfModule>
`);
  // form işleyici
  fs.copyFileSync(path.join(ROOT, 'server/form.php'), path.join(OUT, 'form.php'));
  // görselleri küçült (sharp varsa)
  let sharp = null; try { sharp = (await import('sharp')).default; } catch { console.warn('sharp yok: görseller küçültülmeden kopyalanacak'); }
  let ok = 0;
  for (const [out, { src, w, q }] of RJOBS) {
    const inF = path.join(OUT, decodeURIComponent(src)); const outF = path.join(OUT, out);
    if (!fs.existsSync(inF)) { console.warn('Görsel bulunamadı:', src); continue; }
    fs.mkdirSync(path.dirname(outF), { recursive: true });
    try { if (sharp) { await sharp(inF).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: q }).toFile(outF); ok++; } else fs.copyFileSync(inF, outF); } catch (e) { console.warn('Görsel işlenemedi, orijinali kullanılacak:', src, e.message); try { fs.copyFileSync(inF, outF); } catch {} }
  }
  console.log(`Turhost: .htaccess (${rules.length} yönlendirme), ${ok}/${RJOBS.size} görsel küçültüldü`);
}
const FALLBACK = new Set();
{
  const words = (h) => { const m = h.match(/<main[\s\S]*?<\/main>/); const t = (m ? m[0] : h).replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' '); return new Set(t.match(/[\p{L}\p{N}]{5,}/gu) || []); };
  const fileOf = (u) => path.join(OUT, u, 'index.html');
  const enCache = new Map();
  for (const lang of LANGS.filter((l) => l !== 'tr' && l !== 'en')) {
    for (const u of urls.filter((x) => x.startsWith(`/${lang}/`))) {
      const f = fileOf(u); if (!fs.existsSync(f)) continue;
      const h = fs.readFileSync(f, 'utf8'); const m = h.match(/hreflang="en" href="[^"]*?(\/en\/[^"]*)"/); if (!m) continue;
      const ef = fileOf(m[1]); if (!fs.existsSync(ef)) continue;
      if (!enCache.has(ef)) enCache.set(ef, words(fs.readFileSync(ef, 'utf8')));
      const a = words(h); const b = enCache.get(ef); let same = 0; for (const w of a) if (b.has(w)) same++;
      if (a.size && same / a.size > 0.72) FALLBACK.add(u);
    }
  }
  // EN sayfası henüz çevrilmemişse (TR metne düşmüşse) o da noindex ve site haritası dışı
  for (const u of urls.filter((x) => x.startsWith('/en/'))) {
    const f = fileOf(u); if (!fs.existsSync(f)) continue;
    const h = fs.readFileSync(f, 'utf8'); const m = h.match(/hreflang="tr" href="[^"]*?acchomesantalya\.com(\/[^"]*)"/); if (!m || m[1].startsWith('/en/')) continue;
    const tf = fileOf(m[1]); if (!fs.existsSync(tf)) continue;
    const a = words(h); const b = words(fs.readFileSync(tf, 'utf8')); let same = 0; for (const w of a) if (b.has(w)) same++;
    if (a.size && same / a.size > 0.72) FALLBACK.add(u);
  }
  const esc2 = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith('.html') ? [path.join(d, e.name)] : []));
  const altRe = FALLBACK.size ? new RegExp(`<link rel="alternate" hreflang="[a-z-]+" href="${esc2(SITE.domain)}(?:${[...FALLBACK].map(esc2).join('|')})">`, 'g') : null;
  for (const f of walk(OUT)) {
    let h = fs.readFileSync(f, 'utf8'); const u = '/' + path.relative(OUT, path.dirname(f)).split(path.sep).join('/') + '/';
    let h2 = altRe ? h.replace(altRe, '') : h;
    if (FALLBACK.has(u) && !h2.includes('name="robots"')) h2 = h2.replace('<meta name="description"', '<meta name="robots" content="noindex, follow"><meta name="description"');
    if (h2 !== h) fs.writeFileSync(f, h2);
  }
}
const NOINDEX_PATHS = (u) => (!LISTINGS.length && LANGS.some((l) => u === url(l, 'list'))) || /\/(favorilerim|favourites|favoriten|izbrannoe|hazir)\//.test(u) || u.includes('/favor');
urls.push(...LIST_URLS);
const SITEMAP_URLS = [...new Set(urls)].filter((u) => !FALLBACK.has(u) && !NOINDEX_PATHS(u));
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${SITEMAP_URLS.map((u) => `<url><loc>${SITE.domain}${u}</loc></url>`).join('')}</urlset>`);
// Diğer sitelerimiz (altintassatilikdaire.com vb.) için herkese açık ilan dizini: yalnız yayındaki ilanlar, kişisel veri yok
write('ilan-index.json', JSON.stringify({ updated: new Date().toISOString().slice(0, 10), ilanlar: LISTINGS.filter((l) => l.durum !== 'Satıldı').map((l) => ({
  id: l.id, tip: l.tip, kategori: l.kategori, emlakTipi: l.emlakTipi, altTip: l.altTip || '', ilce: l.ilce, mahalle: l.mahalle, proje: l.proje || '',
  fiyat: l.teklifAl ? 0 : l.fiyat, para: l.para, oda: l.oda || '', brut: l.brut || '', net: l.net || '', etiketler: l.etiketler || [],
  baslik: Object.fromEntries(['tr', 'en', 'ru'].map((g) => [g, pick(l.baslik, g)])),
  url: Object.fromEntries(['tr', 'en', 'ru'].map((g) => [g, SITE.domain + url(g, 'listing', slugOf(l))])),
  foto: (l.foto || [])[0] ? (/^https?:/.test(l.foto[0]) ? l.foto[0] : SITE.domain + l.foto[0]) : '',
})) }));
write('robots.txt', DEMO ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\nDisallow: /favorilerim/\n\n# Yapay zekâ arama ve asistan botları: açıkça izinli\n${['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot', 'YandexBot'].map((b) => `User-agent: ${b}\nAllow: /\n`).join('\n')}\nSitemap: ${SITE.domain}/sitemap.xml\n`);
write('llms.txt', LLMS());
write('404.html', layout({ lang: 'tr', title: 'Sayfa bulunamadı | ACC HOMES', desc: '', canonical: '/404', body: `<section class="wrap sec narrow"><h1>Sayfa bulunamadı</h1><p><a class="btn" href="/">Ana sayfa</a></p></section>` }));
console.log(`OK — ${LISTINGS.length} ilan, ${urls.length} sayfa, sitemap ${SITEMAP_URLS.length}, çevrilmemiş (noindex) ${FALLBACK.size}${DEMO ? ' (önizleme verisi)' : ''}`);
