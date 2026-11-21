// ACC VILLAS (accvillas.com) — ACC HOMES'un Antalya villa sitesi.
// Veri: ACC HOMES Panel (site_ilanlari) → yalnız Villa / Müstakil Ev ilanları. Metinler: data/ilan-seo.json (varsa).
// Çıktı: villas/dist  →  Turhost (accvillas.com) FTP ile yüklenir (.github/workflows/villas.yml).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(HERE, '..');
const OUT = path.join(HERE, 'dist');
const DOMAIN = 'https://accvillas.com';
const MAIN = 'https://acchomesantalya.com';
const PANEL = { url: 'https://vqsocwdfmvpgdpxkcubz.supabase.co', key: 'sb_publishable_Fv0kalSrYIRLNjCoER1y2Q_31N9fJ_z' };
const PHONE = { raw: '+905498043843', text: '+90 549 804 38 43', wa: '905498043843' };
const LANGS = ['tr', 'en', 'ru'];
const BASE = { tr: '', en: '/en', ru: '/ru' };
const DIAL = [['TR', '+90'], ['GB', '+44'], ['DE', '+49'], ['RU', '+7'], ['UA', '+380'], ['PL', '+48'], ['NL', '+31'], ['FR', '+33'], ['SE', '+46'], ['IR', '+98'], ['AE', '+971'], ['US/CA', '+1'], ['KZ', '+7']];
const DEF_DIAL = { tr: '+90', en: '+44', ru: '+7' };
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const nf = new Intl.NumberFormat('tr-TR');

// ---------- metinler ----------
const SEG = {
  tr: { list: 'villalar', villa: 'villa', sell: 'villami-sat', value: 'villa-degerleme', projects: 'villa-projeleri' },
  en: { list: 'villas', villa: 'villa', sell: 'sell-your-villa', value: 'villa-valuation', projects: 'villa-projects' },
  ru: { list: 'villy', villa: 'villa', sell: 'prodat-villu', value: 'otsenka-villy', projects: 'proekty-vill' },
};
const T = {
  tr: {
    tag: 'Antalya’nın Villa Uzmanı', nav: ['Villalar', 'Villamı Satmak İstiyorum', 'Ücretsiz Değerleme', 'Villa Projeleri'],
    homeTitle: 'Antalya Satılık Villa | ACC VILLAS · Antalya’nın Villa Uzmanı',
    homeDesc: 'Antalya’da satılık villalar, villa projeleri ve ücretsiz villa değerlemesi. ACC HOMES güvencesiyle Döşemealtı, Konyaaltı, Lara ve Belek’te seçkin villalar.',
    h1: 'Antalya’da villa almak ve satmak için tek adres', sub: 'ACC HOMES güvencesiyle seçkin satılık villalar, villa projeleri, ücretsiz değerleme. Türkçe, İngilizce, Rusça ve 10 dilde hizmet.',
    ctaList: 'Villaları incele', ctaSell: 'Villamı satmak istiyorum', featured: 'Öne çıkan villalar', all: 'Tüm villalar',
    whyT: 'Neden ACC VILLAS', why: [['Sadece villa', 'Portföyümüzü özenle seçiyoruz; her villayı yerinde görüyor, fotoğraflıyor ve doğru fiyatlıyoruz.'], ['ACC HOMES güvencesi', 'ACC Plaza’da yaklaşık 50 iş ortağı, 10 dilde hizmet, alımdan tapuya kadar uçtan uca süreç.'], ['Yabancı alıcıya hazır', 'Online görüntülü gösterim, vekâletle işlem, vatandaşlık ve oturum süreçlerinde rehberlik.'], ['Satıcıya güçlü pazarlama', 'Profesyonel çekim, drone, yurt içi ve yurt dışı portallar, hedefli reklam.']],
    sellT: 'Villanızı satmak mı istiyorsunuz?', sellP: 'Villanızı doğru fiyatla, doğru alıcıya ulaştıralım. Ücretsiz değerleme ile başlayın.',
    valueT: 'Ücretsiz villa değerlemesi', valueP: 'Bölgedeki gerçek satışlar ve güncel ilanlarla karşılaştırarak villanız için gerçekçi bir fiyat aralığı çıkarıyoruz. Ücretsiz ve bağlayıcı değil.',
    projT: 'Villa projeleri', projP: 'ACC HOMES’un yetkili olduğu ve portföyünde bulunan villa projeleri.',
    areas: 'Bölgeler', price: 'Fiyat', call: 'Fiyat için arayın', rooms: 'Oda', gross: 'Brüt', land: 'Arsa', site: 'Site içi', standalone: 'Müstakil',
    details: 'Villa bilgileri', features: 'Özellikler', ask: 'Bu villa hakkında bilgi alın', wa: 'WhatsApp’tan yaz', callBtn: 'Ara',
    form: { name: 'Ad Soyad', phone: 'Telefon', email: 'E-posta', msg: 'Mesajınız', send: 'Gönder', cc: 'Ülke kodu', addr: 'Villanın konumu (ilçe / mahalle)', size: 'Brüt m² / arsa m²', consent: 'Kişisel verilerimin iletişim amacıyla işlenmesini kabul ediyorum.', kvkk: 'Aydınlatma metni' },
    ok: 'Teşekkürler, talebiniz bize ulaştı. En kısa sürede dönüş yapacağız.', listT: 'Antalya Satılık Villalar', listD: 'Antalya’daki satılık villalarımız: Döşemealtı, Konyaaltı, Lara, Aksu ve Belek. Güncel fiyatlar ve detaylı bilgiler.',
    filterAll: 'Tümü', sold: 'Satıldı', rent: 'Kiralık', by: 'ACC HOMES International Real Estate’in villa birimidir.', office: 'ACC Plaza, Portakal Çiçeği Bulvarı No:36/B, Yeşilbahçe, Muratpaşa / Antalya', back: 'Tüm villalar',
    sellPage: { title: 'Villamı Satmak İstiyorum | ACC VILLAS Antalya', desc: 'Antalya’da villanızı doğru fiyata ve hızlı satın: ücretsiz değerleme, profesyonel çekim, yurt içi ve yurt dışı pazarlama.', h1: 'Villanızı doğru fiyata ve hızlıca satalım', steps: [['Ücretsiz değerleme', 'Emsal satış ve ilan verileriyle gerçekçi fiyat aralığı.'], ['Profesyonel tanıtım', 'Fotoğraf, video ve drone çekimi; özenli ilan metni.'], ['Doğru alıcıya ulaşım', 'Türk ve yabancı alıcı ağı, portallar, hedefli reklam.'], ['Tapuya kadar yanınızda', 'Pazarlık, sözleşme, banka ve tapu süreçleri.']] },
    valuePage: { title: 'Ücretsiz Villa Değerlemesi Antalya | ACC VILLAS', desc: 'Antalya’daki villanızın değerini ücretsiz öğrenin. Emsal verilere dayalı, bağlayıcı olmayan fiyat analizi.', h1: 'Villanızın değerini ücretsiz öğrenin' },
    projPage: { title: 'Antalya Villa Projeleri | ACC VILLAS', desc: 'Antalya’daki villa projeleri: Antalle Concept Houses ve diğer projeler. Güncel daireler, fiyatlar ve yerinde sunum.' },
  },
  en: {
    tag: 'Antalya’s Villa Specialists', nav: ['Villas', 'Sell Your Villa', 'Free Valuation', 'Villa Projects'],
    homeTitle: 'Villas for Sale in Antalya | ACC VILLAS · Antalya’s Villa Specialists',
    homeDesc: 'Hand-picked villas for sale in Antalya, villa projects and free villa valuation. Backed by ACC HOMES: Döşemealtı, Konyaaltı, Lara and Belek.',
    h1: 'Buy or sell a villa in Antalya with specialists', sub: 'Hand-picked villas for sale, villa projects and free valuation, backed by ACC HOMES. Service in English, Russian and 10 languages.',
    ctaList: 'Browse villas', ctaSell: 'Sell your villa', featured: 'Featured villas', all: 'All villas',
    whyT: 'Why ACC VILLAS', why: [['Villas only', 'A carefully selected portfolio: every villa visited, photographed and priced correctly.'], ['Backed by ACC HOMES', 'Around 50 partners at ACC Plaza, 10 languages, end-to-end support to the title deed.'], ['Ready for international buyers', 'Online video viewings, purchase by power of attorney, guidance on citizenship and residence.'], ['Strong marketing for sellers', 'Professional photo, video and drone, local and international portals, targeted ads.']],
    sellT: 'Thinking of selling your villa?', sellP: 'We bring your villa to the right buyer at the right price. Start with a free valuation.',
    valueT: 'Free villa valuation', valueP: 'We compare real sales and current listings in your area to give a realistic price range for your villa. Free and non-binding.',
    projT: 'Villa projects', projP: 'Villa developments in ACC HOMES’ portfolio, including authorised projects.',
    areas: 'Areas', price: 'Price', call: 'Price on request', rooms: 'Rooms', gross: 'Gross', land: 'Plot', site: 'In a complex', standalone: 'Detached',
    details: 'Villa details', features: 'Features', ask: 'Ask about this villa', wa: 'Message on WhatsApp', callBtn: 'Call',
    form: { name: 'Full name', phone: 'Phone', email: 'Email', msg: 'Your message', send: 'Send', cc: 'Country code', addr: 'Villa location (district / neighbourhood)', size: 'Gross m² / plot m²', consent: 'I agree to my personal data being processed to contact me.', kvkk: 'Privacy notice' },
    ok: 'Thank you, we have received your request and will get back to you shortly.', listT: 'Villas for Sale in Antalya', listD: 'Our villas for sale in Antalya: Döşemealtı, Konyaaltı, Lara, Aksu and Belek. Current prices and full details.',
    filterAll: 'All', sold: 'Sold', rent: 'For rent', by: 'ACC VILLAS is the villa division of ACC HOMES International Real Estate.', office: 'ACC Plaza, Portakal Çiçeği Blv. No:36/B, Yeşilbahçe, Muratpaşa / Antalya', back: 'All villas',
    sellPage: { title: 'Sell Your Villa in Antalya | ACC VILLAS', desc: 'Sell your villa in Antalya at the right price: free valuation, professional photography, local and international marketing.', h1: 'Sell your villa at the right price, without the wait', steps: [['Free valuation', 'A realistic price range based on comparable sales.'], ['Professional presentation', 'Photo, video and drone shoots with a carefully written listing.'], ['Reaching the right buyer', 'Turkish and international buyer network, portals, targeted ads.'], ['With you to the title deed', 'Negotiation, contract, bank and land registry.']] },
    valuePage: { title: 'Free Villa Valuation in Antalya | ACC VILLAS', desc: 'Find out what your villa in Antalya is worth, free. A non-binding price analysis based on comparable data.', h1: 'Find out what your villa is worth, free' },
    projPage: { title: 'Villa Projects in Antalya | ACC VILLAS', desc: 'Villa developments in Antalya, including Antalle Concept Houses. Available units, prices and on-site presentations.' },
  },
  ru: {
    tag: 'Эксперты по виллам в Анталии', nav: ['Виллы', 'Продать виллу', 'Бесплатная оценка', 'Проекты вилл'],
    homeTitle: 'Виллы в Анталии на продажу | ACC VILLAS',
    homeDesc: 'Отобранные виллы на продажу в Анталии, проекты вилл и бесплатная оценка. С гарантией ACC HOMES: Дёшемеалты, Коньяалты, Лара, Белек.',
    h1: 'Купить или продать виллу в Анталии — с экспертами', sub: 'Отобранные виллы на продажу, проекты вилл и бесплатная оценка с гарантией ACC HOMES. Обслуживание на русском и ещё 9 языках.',
    ctaList: 'Смотреть виллы', ctaSell: 'Продать виллу', featured: 'Избранные виллы', all: 'Все виллы',
    whyT: 'Почему ACC VILLAS', why: [['Только виллы', 'Тщательно отобранный портфель: каждую виллу мы осматриваем, фотографируем и правильно оцениваем.'], ['Гарантия ACC HOMES', 'Около 50 партнёров в ACC Plaza, 10 языков, сопровождение до получения тапу.'], ['Для иностранных покупателей', 'Онлайн-показ по видео, сделка по доверенности, помощь с гражданством и ВНЖ.'], ['Сильный маркетинг для продавцов', 'Профессиональная съёмка, дрон, турецкие и зарубежные порталы, таргетированная реклама.']],
    sellT: 'Хотите продать виллу?', sellP: 'Мы найдём правильного покупателя по правильной цене. Начните с бесплатной оценки.',
    valueT: 'Бесплатная оценка виллы', valueP: 'Сравниваем реальные сделки и актуальные объявления в вашем районе и даём реалистичный ценовой диапазон. Бесплатно и ни к чему не обязывает.',
    projT: 'Проекты вилл', projP: 'Проекты вилл в портфеле ACC HOMES.',
    areas: 'Районы', price: 'Цена', call: 'Цена по запросу', rooms: 'Комнаты', gross: 'Общая', land: 'Участок', site: 'В комплексе', standalone: 'Отдельностоящая',
    details: 'Характеристики', features: 'Особенности', ask: 'Узнать об этой вилле', wa: 'Написать в WhatsApp', callBtn: 'Позвонить',
    form: { name: 'Имя и фамилия', phone: 'Телефон', email: 'E-mail', msg: 'Сообщение', send: 'Отправить', cc: 'Код страны', addr: 'Расположение виллы (район)', size: 'Общая м² / участок м²', consent: 'Я согласен на обработку персональных данных для связи со мной.', kvkk: 'Политика конфиденциальности' },
    ok: 'Спасибо, ваша заявка получена. Мы скоро свяжемся с вами.', listT: 'Виллы на продажу в Анталии', listD: 'Наши виллы на продажу в Анталии: Дёшемеалты, Коньяалты, Лара, Аксу и Белек. Актуальные цены и подробная информация.',
    filterAll: 'Все', sold: 'Продано', rent: 'Аренда', by: 'ACC VILLAS — подразделение ACC HOMES International Real Estate по виллам.', office: 'ACC Plaza, бульвар Портакал Чичеги 36/B, Ешильбахче, Муратпаша / Анталия', back: 'Все виллы',
    sellPage: { title: 'Продать виллу в Анталии | ACC VILLAS', desc: 'Продайте виллу в Анталии по правильной цене: бесплатная оценка, профессиональная съёмка, маркетинг в Турции и за рубежом.', h1: 'Продадим вашу виллу по правильной цене и без долгого ожидания', steps: [['Бесплатная оценка', 'Реалистичный диапазон цены на основе сопоставимых сделок.'], ['Профессиональная подача', 'Фото, видео и съёмка с дрона, качественное описание.'], ['Правильный покупатель', 'Сеть турецких и иностранных покупателей, порталы, реклама.'], ['До получения тапу', 'Переговоры, договор, банк и кадастр.']] },
    valuePage: { title: 'Бесплатная оценка виллы в Анталии | ACC VILLAS', desc: 'Узнайте стоимость вашей виллы в Анталии бесплатно. Анализ цены на основе сопоставимых данных.', h1: 'Узнайте стоимость вашей виллы бесплатно' },
    projPage: { title: 'Проекты вилл в Анталии | ACC VILLAS', desc: 'Проекты вилл в Анталии, включая Antalle Concept Houses. Доступные виллы, цены и показ на месте.' },
  },
};
const KVKK = { tr: `${MAIN}/kvkk-aydinlatma-metni/`, en: `${MAIN}/en/privacy-notice/`, ru: `${MAIN}/en/privacy-notice/` };
const ILCE = { 'Döşemealtı': { en: 'Döşemealtı', ru: 'Дёшемеалты' }, 'Konyaaltı': { en: 'Konyaaltı', ru: 'Коньяалты' }, 'Muratpaşa': { en: 'Muratpaşa (Lara)', ru: 'Муратпаша (Лара)' }, 'Aksu': { en: 'Aksu (Lara)', ru: 'Аксу (Лара)' }, 'Serik': { en: 'Serik (Belek)', ru: 'Серик (Белек)' }, 'Kepez': { en: 'Kepez', ru: 'Кепез' }, 'Kemer': { en: 'Kemer', ru: 'Кемер' } };
const ilceAd = (i, lang) => (lang === 'tr' ? i : ILCE[i]?.[lang] || i);

// ---------- veri ----------
const SEO = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/ilan-seo.json'), 'utf8'));
let rows;
try {
  const r = await fetch(`${PANEL.url}/rest/v1/site_ilanlari?select=*`, { headers: { apikey: PANEL.key }, signal: AbortSignal.timeout(20000) });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  rows = await r.json();
} catch (e) {
  const snap = process.env.PANEL_SNAPSHOT;
  if (!snap || !fs.existsSync(snap)) throw new Error('Panel verisi alınamadı: ' + e.message);
  rows = JSON.parse(fs.readFileSync(snap, 'utf8'));
  console.warn('Panel: ağ yok, anlık görüntü kullanıldı');
}
const isVilla = (v) => ['Villa', 'Müstakil Ev'].includes(v.altTip) || v.ekstra?.tur === 'Villa';
const VILLAS = rows.filter((v) => isVilla(v) && (v.foto || []).length && v.satis_durumu !== 'Pasif')
  .map((v) => {
    const s = SEO[v.id] || {};
    const pick = (o, lang) => (o && (o[lang] || (lang !== 'tr' && o.en) || o.tr)) || '';
    const tel = String(v.danisman_tel || '').replace(/[^\d+]/g, '');
    return {
      ...v, slug: v.id.toLowerCase(), kiralik: v.tip === 'Kiralık', satildi: v.satis_durumu === 'Satıldı', fiyatGizli: !!v.ekstra?.fiyat_gizli || !v.fiyat,
      title: (lang) => pick(s.baslik, lang) || pick(v.baslik, lang) || `${v.ilce} ${v.mahalle} ${v.oda || ''} Villa`,
      meta: (lang) => pick(s.meta, lang) || pick(v.ekstra?.meta && { tr: v.ekstra.meta }, lang) || '',
      text: (lang) => pick(s.aciklama, lang) || pick(v.aciklama, lang) || '',
      agent: { ad: v.danisman || 'Ali Caner Can', tel: tel ? (tel.startsWith('+') ? tel : '+90' + tel.replace(/^0/, '')) : PHONE.raw },
    };
  })
  .sort((a, b) => (a.satildi - b.satildi) || (b.created_at || '').localeCompare(a.created_at || ''));
console.log(`ACC VILLAS: ${rows.length} panel ilanından ${VILLAS.length} villa`);

// ---------- yardımcılar ----------
const url = (lang, key, id) => `${BASE[lang]}/${key ? SEG[lang][key] + '/' : ''}${id ? id + '/' : ''}`;
const price = (v, lang) => (v.fiyatGizli ? T[lang].call : `${nf.format(Number(v.fiyat))} ${v.para === 'TL' ? '₺' : v.para}${v.kiralik ? (lang === 'tr' ? ' / ay' : lang === 'ru' ? ' / мес.' : ' / month') : ''}`);
const area = (v, lang) => `${ilceAd(v.ilce, lang)}${v.mahalle ? ', ' + v.mahalle : ''}`;
const telIn = (lang, req = true) => `<div class="tel"><select name="ulke_kodu" aria-label="${T[lang].form.cc}">${DIAL.map(([c, d]) => `<option value="${d}"${d === DEF_DIAL[lang] && c !== 'KZ' ? ' selected' : ''}>${c} ${d}</option>`).join('')}</select><input name="telefon" type="tel" placeholder="${T[lang].form.phone}${req ? ' *' : ''}"${req ? ' required' : ''} autocomplete="tel-national"></div>`;
const consent = (lang) => `<label class="chk"><input type="checkbox" name="kvkk_onay" value="evet" required> <span>${T[lang].form.consent} <a href="${KVKK[lang]}" target="_blank" rel="noopener">${T[lang].form.kvkk}</a> *</span></label>`;
function form(lang, name, next, extra = '', btn) {
  const f = T[lang].form;
  return `<form class="form" method="POST" action="/form.php"><input type="hidden" name="form-name" value="${name}"><input type="hidden" name="_next" value="${next}"><input type="hidden" name="dil" value="${lang}"><input type="hidden" name="site" value="accvillas.com"><p class="hp"><input name="bot" tabindex="-1" autocomplete="off"></p>
<input name="ad" placeholder="${f.name} *" required autocomplete="name">${telIn(lang)}<input name="eposta" type="email" placeholder="${f.email}" autocomplete="email">${extra}<textarea name="mesaj" rows="3" placeholder="${f.msg}"></textarea>${consent(lang)}<button class="btn" type="submit">${btn || f.send}</button></form>`;
}
const card = (v, lang) => `<a class="card" href="${url(lang, 'villa', v.slug)}"><div class="ph"><img src="${esc(v.foto[0])}" alt="${esc(v.title(lang))}" loading="lazy" width="640" height="427">${v.satildi ? `<span class="badge">${T[lang].sold}</span>` : v.kiralik ? `<span class="badge g">${T[lang].rent}</span>` : ''}</div><div class="cb"><p class="loc">${esc(area(v, lang))}</p><h3>${esc(v.title(lang))}</h3><p class="specs">${v.oda ? `${v.oda} · ` : ''}${v.brut ? `${v.brut} m²` : ''}${v.site === 'Evet' ? ` · ${T[lang].site}` : ''}</p><p class="pr">${esc(price(v, lang))}</p></div></a>`;

const ORG = { '@context': 'https://schema.org', '@type': 'RealEstateAgent', name: 'ACC VILLAS by ACC HOMES', url: DOMAIN, telephone: PHONE.raw, parentOrganization: { '@type': 'RealEstateAgent', name: 'ACC HOMES International Real Estate', url: MAIN }, address: { '@type': 'PostalAddress', streetAddress: 'Portakal Çiçeği Bulvarı No:36/B, Yeşilbahçe', addressLocality: 'Muratpaşa', addressRegion: 'Antalya', addressCountry: 'TR' }, areaServed: 'Antalya' };

function layout({ lang, title, desc, canon, alts, body, ld = [], image }) {
  const t = T[lang];
  const altLinks = alts ? LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${DOMAIN}${alts[l]}">`).join('') + `<link rel="alternate" hreflang="x-default" href="${DOMAIN}${alts.en}">` : '';
  const langSw = alts ? LANGS.map((l) => `<a href="${alts[l]}"${l === lang ? ' class="on"' : ''}>${l.toUpperCase()}</a>`).join('') : '';
  return `<!DOCTYPE html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><link rel="canonical" href="${DOMAIN}${canon}">${altLinks}
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${DOMAIN}${canon}"><meta property="og:type" content="website">${image ? `<meta property="og:image" content="${esc(image)}">` : ''}
<link rel="icon" href="${MAIN}/favicon.ico"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="/style.css?v=${VER}">
${[ORG, ...ld].map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('')}</head><body>
<header class="top"><div class="wrap hb"><a class="logo" href="${url(lang)}"><span><b>ACC</b> VILLAS</span><small>${t.tag}</small></a><nav>${['list', 'sell', 'value', 'projects'].map((k, i) => `<a href="${url(lang, k)}">${t.nav[i]}</a>`).join('')}</nav><div class="lsw">${langSw}</div></div></header>
<p class="okmsg" hidden>${t.ok}</p>
<main>${body}</main>
<footer><div class="wrap fg"><div><p class="logo"><b>ACC</b> VILLAS</p><p>${t.by}</p><p><a href="${MAIN}${BASE[lang] || ''}/">acchomesantalya.com</a></p></div><div><p>${t.office}</p><p><a href="tel:${PHONE.raw}">${PHONE.text}</a> · <a href="https://wa.me/${PHONE.wa}">WhatsApp</a></p></div></div><p class="wrap cp">© ${new Date().getFullYear()} ACC HOMES International Real Estate</p></footer>
<a class="wafab" href="https://wa.me/${PHONE.wa}" aria-label="WhatsApp">WhatsApp</a>
<script>if(/[?&]ok=1/.test(location.search)){document.querySelector('.okmsg').hidden=false;}document.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{const v=b.dataset.f;document.querySelectorAll('[data-f]').forEach(x=>x.classList.toggle('on',x===b));document.querySelectorAll('.grid .card').forEach(c=>c.hidden=v&&c.dataset.i!==v);});</script>
</body></html>`;
}
const VER = Date.now().toString(36);
function write(p, html) { const f = path.join(OUT, p, 'index.html'); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, html); }
const allAlts = (key, id) => Object.fromEntries(LANGS.map((l) => [l, url(l, key, id)]));

// ---------- sayfalar ----------
fs.rmSync(OUT, { recursive: true, force: true }); fs.mkdirSync(OUT, { recursive: true });
const HERO = `${MAIN}/img/banner/villa-d-1920.webp`; const HERO_M = `${MAIN}/img/banner/villa-m-1080.webp`;
const sitemap = [];
const projects = [...new Set(VILLAS.map((v) => v.proje).filter(Boolean))];
const ilceler = [...new Set(VILLAS.map((v) => v.ilce))];

for (const lang of LANGS) {
  const t = T[lang];
  const active = VILLAS.filter((v) => !v.satildi);
  // ana sayfa
  write(BASE[lang], layout({ lang, title: t.homeTitle, desc: t.homeDesc, canon: url(lang), alts: allAlts(), image: HERO, body: `
<section class="hero"><picture><source media="(max-width:700px)" srcset="${HERO_M}"><img src="${HERO}" alt="" fetchpriority="high"></picture><div class="wrap hc"><p class="eyebrow">ACC VILLAS · ${t.tag}</p><h1>${t.h1}</h1><p>${t.sub}</p><div class="ctas"><a class="btn" href="${url(lang, 'list')}">${t.ctaList}</a><a class="btn ghost" href="${url(lang, 'sell')}">${t.ctaSell}</a></div></div></section>
<section class="wrap sec"><div class="sh"><h2>${t.featured}</h2><a href="${url(lang, 'list')}">${t.all} →</a></div><div class="grid">${active.slice(0, 6).map((v) => card(v, lang)).join('')}</div></section>
<section class="band"><div class="wrap two"><div><h2>${t.sellT}</h2><p>${t.sellP}</p><a class="btn" href="${url(lang, 'value')}">${t.valueT}</a> <a class="btn ghost dark" href="${url(lang, 'sell')}">${t.ctaSell}</a></div><div><h2>${t.whyT}</h2><ul class="why">${t.why.map(([a, b]) => `<li><b>${a}</b><span>${b}</span></li>`).join('')}</ul></div></div></section>
${projects.length ? `<section class="wrap sec"><div class="sh"><h2>${t.projT}</h2><a href="${url(lang, 'projects')}">→</a></div><div class="chips">${projects.map((p) => `<a href="${url(lang, 'projects')}#${encodeURIComponent(p)}">${esc(p)}</a>`).join('')}</div></section>` : ''}` }));
  sitemap.push(url(lang));

  // villa listesi
  write(BASE[lang] + '/' + SEG[lang].list, layout({ lang, title: `${t.listT} | ACC VILLAS`, desc: t.listD, canon: url(lang, 'list'), alts: allAlts('list'), body: `
<section class="wrap sec"><h1>${t.listT}</h1><p class="lead">${t.listD}</p><div class="filters"><button data-f="" class="on">${t.filterAll}</button>${ilceler.map((i) => `<button data-f="${esc(i)}">${esc(ilceAd(i, lang))}</button>`).join('')}</div><div class="grid">${VILLAS.map((v) => card(v, lang).replace('<a class="card"', `<a class="card" data-i="${esc(v.ilce)}"`)).join('')}</div></section>` }));
  sitemap.push(url(lang, 'list'));

  // villa detay
  for (const v of VILLAS) {
    const title = v.title(lang); const text = v.text(lang);
    const specs = [[t.price, price(v, lang)], [t.rooms, v.oda], [t.gross, v.brut && v.brut + ' m²'], [t.land, v.arsa && v.arsa + ' m²'], [lang === 'tr' ? 'Konum' : lang === 'ru' ? 'Расположение' : 'Location', area(v, lang)], [lang === 'tr' ? 'Isıtma' : lang === 'ru' ? 'Отопление' : 'Heating', lang === 'tr' && v.isitma], [lang === 'tr' ? 'Tapu' : lang === 'ru' ? 'Тапу' : 'Title deed', lang === 'tr' && v.tapu], [lang === 'tr' ? 'Kredi' : lang === 'ru' ? 'Ипотека' : 'Mortgage', v.kredi === 'Evet' && (lang === 'tr' ? 'Krediye uygun' : lang === 'ru' ? 'Подходит' : 'Eligible')], ['', v.site === 'Evet' ? t.site : '']].filter(([, x]) => x);
    const ld = { '@context': 'https://schema.org', '@type': 'RealEstateListing', name: title, url: DOMAIN + url(lang, 'villa', v.slug), image: v.foto.slice(0, 6), description: v.meta(lang) || text.slice(0, 300), ...(v.fiyatGizli ? {} : { offers: { '@type': 'Offer', price: Number(v.fiyat), priceCurrency: v.para === 'TL' ? 'TRY' : v.para, availability: v.satildi ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock' } }) };
    write(BASE[lang] + '/villa/' + v.slug, layout({ lang, title: `${title} | ACC VILLAS`, desc: (v.meta(lang) || text).slice(0, 158), canon: url(lang, 'villa', v.slug), alts: allAlts('villa', v.slug), image: v.foto[0], ld: [ld], body: `
<section class="wrap sec vd"><p class="crumb"><a href="${url(lang, 'list')}">← ${t.back}</a></p><h1>${esc(title)}</h1><p class="loc">${esc(area(v, lang))} · ${v.id}</p>
<div class="gal">${v.foto.slice(0, 12).map((f, i) => `<a href="${esc(f)}" target="_blank" rel="noopener"><img src="${esc(f)}" alt="${esc(title)} ${i + 1}" ${i ? 'loading="lazy"' : 'fetchpriority="high"'} width="800" height="533"></a>`).join('')}</div>
<div class="vcols"><div><h2>${t.details}</h2><dl class="spec">${specs.map(([a, b]) => `<dt>${a}</dt><dd>${esc(b)}</dd>`).join('')}</dl>${text ? `<div class="txt">${text.split(/\n+/).map((p) => `<p>${esc(p)}</p>`).join('')}</div>` : ''}${lang === 'tr' && (v.ozellikler || []).length ? `<h2>${t.features}</h2><ul class="feat">${v.ozellikler.slice(0, 40).map((o) => `<li>${esc(o)}</li>`).join('')}</ul>` : ''}</div>
<aside class="box"><p class="pr big">${esc(price(v, lang))}</p><p class="agent">${esc(v.agent.ad)}</p><p class="acts"><a class="btn" href="https://wa.me/${v.agent.tel.replace(/\D/g, '')}?text=${encodeURIComponent(`${v.id} — ${title}`)}">${t.wa}</a> <a class="btn ghost dark" href="tel:${v.agent.tel}">${t.callBtn}</a></p><h3>${t.ask}</h3>${form(lang, 'villa-talep', url(lang, 'villa', v.slug), `<input type="hidden" name="ilan" value="${v.id}">`)}</aside></div></section>` }));
    sitemap.push(url(lang, 'villa', v.slug));
  }

  // villamı sat
  const sp = t.sellPage;
  write(BASE[lang] + '/' + SEG[lang].sell, layout({ lang, title: sp.title, desc: sp.desc, canon: url(lang, 'sell'), alts: allAlts('sell'), body: `
<section class="wrap sec two"><div><h1>${sp.h1}</h1><p class="lead">${sp.desc}</p><ol class="steps">${sp.steps.map(([a, b]) => `<li><b>${a}</b><span>${b}</span></li>`).join('')}</ol></div><aside class="box"><h2>${t.sellT}</h2>${form(lang, 'villa-sat', url(lang, 'sell'), `<input name="konum" placeholder="${t.form.addr}"><input name="metrekare" placeholder="${t.form.size}">`)}</aside></section>` }));
  sitemap.push(url(lang, 'sell'));

  // değerleme
  const vp = t.valuePage;
  write(BASE[lang] + '/' + SEG[lang].value, layout({ lang, title: vp.title, desc: vp.desc, canon: url(lang, 'value'), alts: allAlts('value'), body: `
<section class="wrap sec two"><div><h1>${vp.h1}</h1><p class="lead">${t.valueP}</p><ul class="why">${t.why.slice(1, 4).map(([a, b]) => `<li><b>${a}</b><span>${b}</span></li>`).join('')}</ul></div><aside class="box"><h2>${t.valueT}</h2>${form(lang, 'villa-degerleme', url(lang, 'value'), `<input name="konum" placeholder="${t.form.addr} *" required><input name="metrekare" placeholder="${t.form.size}">`)}</aside></section>` }));
  sitemap.push(url(lang, 'value'));

  // projeler
  const pp = t.projPage;
  write(BASE[lang] + '/' + SEG[lang].projects, layout({ lang, title: pp.title, desc: pp.desc, canon: url(lang, 'projects'), alts: allAlts('projects'), body: `
<section class="wrap sec"><h1>${t.projT}</h1><p class="lead">${t.projP}</p>${projects.map((p) => `<h2 id="${esc(encodeURIComponent(p))}">${esc(p)}</h2><div class="grid">${VILLAS.filter((v) => v.proje === p).map((v) => card(v, lang)).join('')}</div>`).join('')}</section>` }));
  sitemap.push(url(lang, 'projects'));
}

// statik dosyalar
fs.copyFileSync(path.join(HERE, 'style.css'), path.join(OUT, 'style.css'));
const php = fs.readFileSync(path.join(ROOT, 'server/form.php'), 'utf8')
  .replace("'rehber-indir'];", "'rehber-indir', 'villa-talep', 'villa-sat', 'villa-degerleme'];")
  .replace("'From: ACC HOMES Web <'", "'From: ACC VILLAS Web <'");
fs.writeFileSync(path.join(OUT, 'form.php'), php);
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${DOMAIN}/sitemap.xml\n`);
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemap.map((u) => `<url><loc>${DOMAIN}${u}</loc></url>`).join('')}</urlset>\n`);
// SSL sertifikası çıkana kadar https zorlaması kapalı (FORCE_HTTPS=1 ile açılır)
const HTTPS_ON = process.env.FORCE_HTTPS === '1';
fs.writeFileSync(path.join(OUT, '.htaccess'), `RewriteEngine On\n${HTTPS_ON ? 'RewriteCond %{HTTPS} off [OR]\n' : ''}RewriteCond %{HTTP_HOST} ^www\\. [NC]\nRewriteRule ^ ${HTTPS_ON ? 'https' : 'http'}://accvillas.com%{REQUEST_URI} [L,R=301]\nErrorDocument 404 /\n<IfModule mod_expires.c>\nExpiresActive On\nExpiresByType text/css "access plus 30 days"\n</IfModule>\n`);
console.log(`OK — ${sitemap.length} sayfa`);
