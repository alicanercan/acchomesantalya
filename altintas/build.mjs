// altintassatilikdaire.com — ACC HOMES Altıntaş: Antalya Aksu Altıntaş'a özel satılık/kiralık daire ve proje sitesi (TR/EN/RU).
// İlanlar acchomesantalya.com/ilan-index.json'dan derlemede çekilir; ilan detayları ACC HOMES'ta (tek kaynak, kopya içerik yok).
// Çalıştır: node altintas/build.mjs  →  altintas/dist
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { enSpan } from '../en-span.mjs';
import { NEWS, GUIDE, PROJELER, FIRMALAR } from './content.mjs';
import { LAND, HOMESEO, POP, SEOFAQ_T, dataFaq } from './seo-pages.mjs';
import { callPop, newsBand } from '../callpop.mjs';
import { featL, valL, missingFeat } from './feat-i18n.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(HERE, '..');
const OUT = path.join(HERE, 'dist');
const DOMAIN = 'https://altintassatilikdaire.com';
const MAIN = 'https://acchomesantalya.com';
const VILLAS = 'https://accvillas.com';
const PHONE = { raw: '+905498043843', wa: '905498043843', text: '+90 549 804 38 43' };
const MAIL = 'info@acchomesantalya.com';
const IG = 'https://www.instagram.com/acc.altintas.realestate/';
const SITE = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/site.json'), 'utf8'));
const G = { url: 'https://maps.google.com/maps?cid=15609211507457388653', review: 'https://search.google.com/local/writereview?placeid=ChIJn7nvobuDwxQRbfDvNSoPn9g', rating: 4.9, count: 59 };
const INTENT = { tr: [['sale', 'Altıntaş’ta daire almak istiyorum'], ['sell', 'Dairemi satmak istiyorum'], ['sell', 'Ücretsiz ekspertiz istiyorum']], en: [['sale', 'I want to buy in Altıntaş'], ['sell', 'I want to sell my apartment'], ['sell', 'I want a free valuation']], ru: [['sale', 'Хочу купить квартиру в Алтынташе'], ['sell', 'Хочу продать квартиру'], ['sell', 'Бесплатная оценка']] };
const INTENT_ICO = ['<svg viewBox="0 0 24 24"><path d="M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>', '<svg viewBox="0 0 24 24"><circle cx="8" cy="15" r="4"/><path d="m11 12 9-9m-3 3 3 3m-6 0 2 2"/></svg>', '<svg viewBox="0 0 24 24"><path d="M4 20V10m6 10V4m6 16v-7m4 7H2"/></svg>'];
const REVIEWS = JSON.parse(fs.readFileSync(path.join(HERE, 'reviews.json'), 'utf8')); // ACC HOMES Altıntaş Google profilinden (ekip adı geçen ve yakınlardan gelen yorumlar hariç)
const LANGS = ['tr', 'en', 'ru'];
const CSSV = (await import('node:crypto')).createHash('md5').update(fs.readFileSync(path.join(HERE, 'style.css'))).digest('hex').slice(0, 8);
const BASE = { tr: '', en: '/en', ru: '/ru' };
const SEG = {
  home: { tr: '', en: '', ru: '' },
  sale: { tr: 'satilik-daireler', en: 'apartments-for-sale', ru: 'kvartiry-na-prodazhu' },
  rent: { tr: 'kiralik-daireler', en: 'apartments-for-rent', ru: 'arenda-kvartir' },
  projects: { tr: 'projeler', en: 'projects', ru: 'proekty' },
  guide: { tr: 'bolge-rehberi', en: 'area-guide', ru: 'gid-po-rajonu' },
  ermenek: { tr: 'ermenek-satilik-daire', en: 'ermenek-apartments', ru: 'kvartiry-ermenek' },
  kemeragzi: { tr: 'kemeragzi-satilik-daire', en: 'kemeragzi-apartments', ru: 'kvartiry-kemeragzy' },
  news: { tr: 'bolge-haberleri', en: 'area-news', ru: 'novosti-rajona' },
  sell: { tr: 'evinizi-satin', en: 'sell-your-home', ru: 'prodat-kvartiru' },
  contact: { tr: 'iletisim', en: 'contact', ru: 'kontakty' },
};
for (const L of LAND) SEG[L.k] = L.seg;
const url = (lang, k) => (SEG[k][lang] ? `${BASE[lang]}/${SEG[k][lang]}/` : `${BASE[lang]}/`);
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const sitemap = [];

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

// ---------- ilan başlık/metin üretimi (bu siteye özgü; ana sitedeki metinle çakışmaz) ----------
const ALT3 = { Daire: ['Daire', 'Apartment', 'Квартира'], Villa: ['Villa', 'Villa', 'Вилла'], 'Müstakil Ev': ['Müstakil Ev', 'Detached House', 'Частный дом'], Rezidans: ['Rezidans', 'Residence', 'Резиденция'], Dükkan: ['Dükkân', 'Shop', 'Магазин'], 'Dükkan & Mağaza': ['Dükkân', 'Shop', 'Магазин'], Arsa: ['Arsa', 'Land Plot', 'Земельный участок'], 'Çatı Dubleksi': ['Çatı Dubleksi', 'Penthouse Duplex', 'Пентхаус-дуплекс'], 'Bahçe Dubleksi': ['Bahçe Dubleksi', 'Garden Duplex', 'Дуплекс с садом'], Dubleks: ['Dubleks', 'Duplex', 'Дуплекс'], Ofis: ['Ofis', 'Office', 'Офис'], 'Konut İmarlı': ['Konut İmarlı Arsa', 'Residential Land Plot', 'Участок под жилую застройку'], 'Villa İmarlı': ['Villa İmarlı Arsa', 'Villa Land Plot', 'Участок под виллу'], 'Depo & Antrepo': ['Depo', 'Warehouse', 'Склад'], 'Restoran & Lokanta': ['Restoran', 'Restaurant', 'Ресторан'] };
const altOf = (l, lang) => (ALT3[l.altTip] || [l.altTip || 'Daire', l.altTip || 'Property', l.altTip || 'Объект'])[['tr', 'en', 'ru'].indexOf(lang)];
const MAHN = { Altıntaş: ['Altıntaş', 'Altıntaş', 'Алтынташ'], Kemerağzı: ['Kemerağzı', 'Kemerağzı', 'Кемерагзы'], Ermenek: ['Ermenek', 'Ermenek', 'Эрменек'] };
const mahOf = (l, lang) => (MAHN[l.mahalle] || [l.mahalle, l.mahalle, l.mahalle])[['tr', 'en', 'ru'].indexOf(lang)] || '';
const featOf = (l) => { const o = (l.row?.ozellikler || []).join(' ').toLocaleLowerCase('tr'); return { pool: /havuz/.test(o), site: l.row?.site === 'Evet', esya: /eşyalı/i.test(l.row?.esya || '') && !/eşyasız/i.test(l.row?.esya || ''), park: /otopark/i.test(l.row?.otopark || ''), sifir: Number(l.row?.yas) === 0, sec: /güvenlik/.test(o) }; };
const tipWord = (l, lang) => ({ Satılık: ['Satılık', 'for Sale', 'на продажу'], Kiralık: ['Kiralık', 'for Rent', 'в аренду'], Devren: ['Devren', 'for Transfer', 'передача бизнеса'] }[l.tip] || [l.tip, '', ''])[['tr', 'en', 'ru'].indexOf(lang)];
const genTitle = (l, lang) => {
  const f = featOf(l); const m2 = l.brut ? ` · ${l.brut} m²` : ''; const m = mahOf(l, lang);
  if (lang === 'tr') return `${m} ${tipWord(l, 'tr')} ${l.oda || ''} ${altOf(l, 'tr')}${f.site ? (f.pool ? ' · Havuzlu Site' : ' · Site İçinde') : ''}${f.sifir ? ' · Sıfır' : ''}${m2}`.replace(/\s+/g, ' ').trim();
  if (lang === 'en') return `${f.sifir ? 'New ' : ''}${l.oda || ''} ${altOf(l, 'en')} ${tipWord(l, 'en')} in ${m}, Antalya${f.pool ? ' · Pool' : ''}${m2}`.replace(/\s+/g, ' ').trim();
  return `${altOf(l, 'ru')} ${l.oda || ''} ${tipWord(l, 'ru')}, ${m}, Анталия${f.pool ? ' · бассейн' : ''}${m2}`.replace(/\s+/g, ' ').trim();
};
const AREA_P = {
  Altıntaş: ['Altıntaş, Antalya Havalimanı’na ve Lara plajlarına kısa mesafede, Aksu’nun yeni imarlı ve hızla yapılaşan mahallesidir; site tipi yeni projeler ağırlıktadır.', 'Altıntaş is a newly zoned, fast-growing neighbourhood of Aksu, a short drive from Antalya Airport and the Lara beaches; most housing here is in new gated complexes.', 'Алтынташ — новый быстро застраиваемый район Аксу рядом с аэропортом Анталии и пляжами Лары; здесь преобладают новые жилые комплексы.'],
  Kemerağzı: ['Kemerağzı, Lara–Kundu sahil hattına yakın, Aksu’nun denize en yakın mahallelerindendir.', 'Kemerağzı is one of the Aksu neighbourhoods closest to the sea, near the Lara–Kundu coastline.', 'Кемерагзы — один из ближайших к морю районов Аксу, рядом с побережьем Лара–Кунду.'],
};
const genText = (l, lang) => {
  const v = l.row || {}; const f = featOf(l); const i = ['tr', 'en', 'ru'].indexOf(lang); const m = mahOf(l, lang); const P = [];
  if (lang === 'tr') {
    P.push(`Aksu ${m}’ta ${l.tip.toLocaleLowerCase('tr')} ${l.oda || ''} ${altOf(l, 'tr').toLocaleLowerCase('tr')}${l.brut ? `; ${l.brut} m² brüt${l.net ? `, ${l.net} m² net` : ''} kullanım alanı` : ''}.${v.kat ? ` ${v.katSayisi ? `${v.katSayisi} katlı binanın ` : ''}${v.kat}. katında.` : ''}`.replace(/\s+/g, ' '));
    const h = [f.site && 'site içinde', f.pool && 'yüzme havuzu', f.sec && '7/24 güvenlik', f.park && (v.otopark || 'otopark').toLocaleLowerCase('tr'), v.asansor === 'Var' && 'asansör', f.esya && 'eşyalı', f.sifir && 'sıfır bina'].filter(Boolean);
    if (h.length) P.push(`Öne çıkanlar: ${h.join(', ')}.`);
  } else if (lang === 'en') {
    P.push(`${l.oda || ''} ${altOf(l, 'en').toLowerCase()} ${tipWord(l, 'en')} in ${m}, Aksu${l.brut ? `, with ${l.brut} m² gross${l.net ? ` / ${l.net} m² net` : ''} living space` : ''}.${v.kat ? ` On floor ${v.kat}${v.katSayisi ? ` of a ${v.katSayisi}-storey building` : ''}.` : ''}`.replace(/\s+/g, ' ').trim());
    const h = [f.site && 'gated complex', f.pool && 'swimming pool', f.sec && '24/7 security', f.park && 'parking', v.asansor === 'Var' && 'lift', f.esya && 'furnished', f.sifir && 'brand-new building'].filter(Boolean);
    if (h.length) P.push(`Highlights: ${h.join(', ')}.`);
  } else {
    P.push(`${altOf(l, 'ru')} ${l.oda || ''} ${tipWord(l, 'ru')} в районе ${m}, Аксу${l.brut ? `: ${l.brut} м² общая${l.net ? `, ${l.net} м² полезная` : ''} площадь` : ''}.${v.kat ? ` ${v.kat}-й этаж${v.katSayisi ? ` ${v.katSayisi}-этажного дома` : ''}.` : ''}`.replace(/\s+/g, ' ').trim());
    const h = [f.site && 'охраняемый комплекс', f.pool && 'бассейн', f.sec && 'охрана 24/7', f.park && 'парковка', v.asansor === 'Var' && 'лифт', f.esya && 'с мебелью', f.sifir && 'новый дом'].filter(Boolean);
    if (h.length) P.push(`Особенности: ${h.join(', ')}.`);
  }
  if (AREA_P[l.mahalle]) P.push(AREA_P[l.mahalle][i]);
  P.push([l.tip === 'Kiralık' ? 'ACC HOMES Altıntaş olarak daireyi yerinde gösteriyor, kira sözleşmesi ve teslim sürecinde yanınızda oluyoruz.' : 'ACC HOMES Altıntaş olarak mülkü yerinde ya da görüntülü gösterimle tanıtıyor; tapu ve imar ön kontrolü, emsal karşılaştırması ve tapu devrinde yanınızda oluyoruz.',
    l.tip === 'Kiralık' ? 'ACC HOMES Altıntaş arranges viewings on site and supports you through the lease and handover.' : 'ACC HOMES Altıntaş shows the property on site or by video call and supports you with title-deed and zoning checks, comparable prices and the title transfer.',
    l.tip === 'Kiralık' ? 'ACC HOMES Altıntaş организует показ и сопровождает заключение договора аренды и передачу ключей.' : 'ACC HOMES Altıntaş проводит показ на месте или по видео, проверяет тапу и градостроительный статус, даёт сравнение цен и сопровождает сделку до переоформления тапу.'][i]);
  return P;
};

// ---------- ilanlar ----------
let IDX;
try {
  const r = await fetch(`${MAIN}/ilan-index.json`, { signal: AbortSignal.timeout(20000) });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  IDX = await r.json();
  fs.writeFileSync(path.join(HERE, 'ilan-index-cache.json'), JSON.stringify(IDX));
} catch (e) {
  const local = [process.env.ILAN_INDEX, path.join(ROOT, 'dist/ilan-index.json'), path.join(HERE, 'ilan-index-cache.json')].find((f) => f && fs.existsSync(f));
  if (!local) throw new Error('İlan dizini alınamadı: ' + e.message);
  IDX = JSON.parse(fs.readFileSync(local, 'utf8'));
  console.warn('İlan dizini yerelden:', local, e.message);
}
// Panelde "Altıntaş sitesine de gönder" işaretli ilanlar (altintas_ilanlari): bu sitede kendi sayfalarıyla yayınlanır.
// Görünüm okunamazsa ana sitenin ilan dizinine düşülür (kartlar acchomesantalya.com'a gider).
const PANEL = { url: 'https://vqsocwdfmvpgdpxkcubz.supabase.co', key: 'sb_publishable_Fv0kalSrYIRLNjCoER1y2Q_31N9fJ_z' };
const tr2a = (x) => String(x || '').toLocaleLowerCase('tr').replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ü/g, 'u').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const LSEG = { tr: 'ilan', en: 'listing', ru: 'obekt' };
let OWN = null;
try {
  const r = await fetch(`${PANEL.url}/rest/v1/altintas_ilanlari?select=*`, { headers: { apikey: PANEL.key }, signal: AbortSignal.timeout(20000) });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  OWN = (await r.json()).filter((x) => x.tip !== 'Kat karşılığı');
  fs.writeFileSync(path.join(HERE, 'altintas-ilanlari-cache.json'), JSON.stringify(OWN));
} catch (e) {
  const c = path.join(HERE, 'altintas-ilanlari-cache.json');
  if (fs.existsSync(c)) { OWN = JSON.parse(fs.readFileSync(c, 'utf8')); console.warn('Altıntaş ilanları önbellekten:', e.message); }
  else console.warn('Altıntaş ilanları okunamadı, ana site dizini kullanılıyor:', e.message);
}
const IDXBY = Object.fromEntries(IDX.ilanlar.map((l) => [l.id, l]));
const ownRow = (v) => {
  const f = (v.foto || []).filter(Boolean); const mine = f.filter((x) => !/shbdn\.com|sahibinden/i.test(x)); const fotos = mine.length ? mine : f;
  const slug = tr2a([v.tip, v.mahalle, v.oda, v.altTip, v.id].filter(Boolean).join(' '));
  const ix = IDXBY[v.id];
  return { id: v.id, tip: v.tip, emlakTipi: v.emlakTipi, altTip: v.altTip, ilce: v.ilce, mahalle: v.mahalle, proje: v.proje || '', fiyat: v.fiyat, para: v.para, oda: v.oda, brut: v.brut, net: v.net, etiketler: v.etiketler || [],
    own: true, row: v, slug, fotos, foto: fotos[0] || '', kapora: v.satis_durumu === 'Kaporalı',
    url: Object.fromEntries(LANGS.map((l) => [l, `${BASE[l]}/${LSEG[l]}/${slug}/`])), main: ix ? ix.url : null };
};
const SRC = OWN && OWN.length ? OWN.filter((v) => (v.foto || []).length && v.satis_durumu !== 'Pasif').map(ownRow) : IDX.ilanlar.filter((l) => l.ilce === 'Aksu');
for (const l of SRC) if (l.own) l.baslik = Object.fromEntries(LANGS.map((lg) => [lg, genTitle(l, lg)]));
const AREA = SRC.sort((a, b) => (b.mahalle === 'Altıntaş') - (a.mahalle === 'Altıntaş') || (b.fiyat > 0) - (a.fiyat > 0) || String(b.row?.created_at || '').localeCompare(String(a.row?.created_at || '')));
const SALE = AREA.filter((l) => l.tip === 'Satılık');
const RENT = AREA.filter((l) => l.tip === 'Kiralık');
for (const L of LAND) L.list = AREA.filter(L.f);
const LIVE = LAND.filter((L) => L.list.length || L.k === 'l_yab');
let RATES = { USD: 0, EUR: 0 };
try { const xml = await (await fetch('https://www.tcmb.gov.tr/kurlar/today.xml', { signal: AbortSignal.timeout(15000) })).text(); const g = (c) => Number((xml.match(new RegExp(`CurrencyCode="${c}"[\\s\\S]*?<ForexSelling>([\\d.]+)<`)) || [])[1] || 0); RATES = { USD: g('USD'), EUR: g('EUR') }; } catch (e) { console.warn('TCMB kuru alınamadı:', e.message); }
const DEF_CUR = { tr: 'TRY', en: 'USD', ru: 'USD' };
const fmtTL = (n) => `${Math.round(n).toLocaleString('tr-TR')} TL`;
const TODAY = (lang) => new Date().toLocaleDateString(lang === 'tr' ? 'tr-TR' : lang === 'ru' ? 'ru-RU' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
console.log(`Altıntaş/Aksu: ${AREA.length} ilan (${SALE.length} satılık, ${RENT.length} kiralık)`);

const ICO = {
  ph: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>',
  wa: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.8 14.1c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1a17 17 0 0 1-1.7-.6 13.4 13.4 0 0 1-5.2-4.6c-.4-.5-1-1.5-1-2.8 0-1.4.7-2 1-2.3.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.8-.1 1.5z"/></svg>',
  ig: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>',
  g: '<svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.5 12.3c0-.8-.1-1.5-.2-2.3H12v4.3h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2-1.9 3.2-4.7 3.2-8z"/><path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1.1-3.7 1.1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.8A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.8 14.2a6.6 6.6 0 0 1 0-4.3V7.1H2.1a11 11 0 0 0 0 9.9z"/><path fill="#EA4335" d="M12 5.4c1.6 0 3 .6 4.2 1.6l3.1-3.1A11 11 0 0 0 2.1 7.1l3.7 2.8C6.7 7.3 9.1 5.4 12 5.4z"/></svg>',
};

// ---------- metinler ----------
const T = {
  tr: {
    locale: 'tr_TR', newsT: 'Bölge haberleri', newsL: 'Altıntaş, Ermenek ve Kemerağzı’nda imar, tapu, altyapı ve piyasaya dair doğrulanmış gelişmeler ve ACC HOMES yorumu.', newsTitle: 'Altıntaş Bölge Haberleri: İmar, Tapu, Altyapı | ACC HOMES', newsDesc: 'Aksu Altıntaş bölge haberleri: parselasyon iptali ve tapu şerhleri, imar, altyapı ve konut piyasası gelişmeleri.', read: 'Haberi oku', srcT: 'Kaynaklar', guideT: 'Altıntaş’ı sahadan tanıyın', guideL: 'Konum, projeler, kira talebi, altyapı ve imar: Altıntaş, Ermenek ve Kemerağzı rehberimiz.', guideBtn: 'Bölge rehberini oku', dirT: 'Altıntaş’taki projeler ve müteahhitler', dirL: 'Bölgede gidip geldiğimiz, takip ettiğimiz projeler ve inşaat firmaları. Yetkili olduğumuz projeler işaretlidir; diğer projelerde de ikinci el ve projeden satış için bize ulaşabilirsiniz.', auth: 'Yetkili ofis', firmT: 'Bölgede çalışan inşaat firmaları', landT: 'Arsanız ya da dükkânınız mı var?', landL: 'Altıntaş’ta arsanızı kat karşılığı değerlendirmek için müteahhit ağımızla buluşturuyor; ana yol üzerindeki bütçe dostu dükkânların satış ve kiralamasını yönetiyoruz.', rentOutT: 'Dairenizi kiraya mı vereceksiniz?', rentOutL: 'Altıntaş’ta kiralık daireler çok hızlı kiralanıyor. Doğru fiyat ve güvenilir kiracı için ilanınızı biz hazırlayalım.', freeExp: 'Ücretsiz ekspertiz', brand: 'Altıntaş Satılık Daire', by: 'ACC HOMES Altıntaş',
    nav: { ermenek: 'Ermenek', kemeragzi: 'Kemerağzı', sale: 'Satılık', rent: 'Kiralık', projects: 'Projeler', guide: 'Bölge rehberi', news: 'Haberler', sell: 'Evinizi satın', contact: 'İletişim' },
    homeTitle: 'Altıntaş Satılık Daire | Antalya Aksu Altıntaş Emlak · ACC HOMES', homeDesc: 'Antalya Aksu Altıntaş’ta satılık ve kiralık daireler, yetkili projeler ve bölge rehberi. Altıntaş satış ofisimiz ve ACC HOMES güvencesiyle.',
    h1: 'Altıntaş’ta satılık ve kiralık daireler', lead: 'Antalya’nın en hızlı büyüyen konut bölgesi Altıntaş’ta güncel ilanlar, yetkili projeler ve sahadan bilgi. Altıntaş satış ofisimiz ve ACC HOMES ekibiyle alımdan tapuya kadar yanınızdayız.',
    ctaSale: 'Satılık ilanlar', ctaWa: 'WhatsApp ile sor', statSale: 'satılık ilan', statRent: 'kiralık ilan', statProj: 'yetkili proje', statG: 'Google yorumu (ACC HOMES Altıntaş)',
    saleT: 'Altıntaş satılık daire ilanları', saleL: 'Altıntaş ve Aksu’daki satılık daire, villa ve arsa ilanlarımız. Mahalle, oda, fiyat ve özelliğe göre soldan filtreleyin.',
    rentT: 'Altıntaş kiralık daire ilanları', rentL: 'Altıntaş ve Aksu’da kiralık daireler; site içi, havuzlu, eşyalı ve eşyasız seçenekler.',
    all: 'Tümü', allOn: 'ACC HOMES’ta tüm Aksu ilanları', none: 'Şu an bu kategoride yayında ilan yok. Talebinizi bırakın, uygun ilan çıktığında ilk size haber verelim.',
    projT: 'Altıntaş’ta yetkili projelerimiz', projL: 'Satış ve pazarlamasını ACC HOMES olarak yürüttüğümüz Altıntaş projeleri.',
    proj: [['Prime Lara', 'Ekiciler Grup · daire, villa ve dükkân', 'prime-lara-altintas', '/img/primelara/hero.webp'], ['Falez Manzara', 'Ünlütürk İnşaat · site içi daireler', 'falez-manzara-altintas', '/img/falez/dis-1.webp']],
    projMore: 'Projeyi incele',
    whyT: 'Neden Altıntaş', why: [['Havalimanına ve Lara’ya yakın', 'Antalya Havalimanı, Lara sahili ve Kundu’ya kısa mesafe; sık seyahat edenler ve yabancı alıcılar için pratik bir konum.'], ['Yeni ve site içi konut', 'Bölgedeki konut stoğunun büyük bölümü havuzlu, güvenlikli, otoparklı yeni sitelerden oluşur.'], ['Kira talebi', '1+1 ve 2+1 dairelerde havalimanı, turizm ve sağlık çalışanlarından gelen sürekli kira talebi.'], ['Gelişen altyapı', 'Yeni yollar, okullar ve ticari alanlarla bölge her yıl biraz daha şehirle bütünleşiyor.']],
    guide: 'Ayrıntılı Altıntaş rehberi', guideUrl: `${MAIN}/altintas-rehberi/`,
    sellT: 'Altıntaş’ta evinizi mi satıyorsunuz?', sellL: 'Altıntaş’ta satılan ve satıştaki emsallerle fiyatlıyor, profesyonel çekim ve yerli-yabancı alıcı ağımızla satıyoruz.', sellBtn: 'Ücretsiz değerleme isteyin',
    sellTitle: 'Altıntaş’ta Evinizi Satın | Ücretsiz Değerleme · ACC HOMES', sellDesc: 'Antalya Aksu Altıntaş’ta dairenizi, villanızı ya da dükkânınızı satmak mı istiyorsunuz? Emsal analizli değerleme, profesyonel tanıtım ve geniş alıcı ağı.',
    sellH: 'Altıntaş’ta evinizi doğru fiyata satalım', sellLead: 'Altıntaş’ta hangi sitenin, hangi cephenin, hangi katın ne ettiğini sahadan biliyoruz. Mülkünüzü yerinde görüp emsallerle değerlendiriyor, profesyonel çekim, ACC HOMES ve portallardaki ilanlar ve 12 dilde alıcı ağımızla satışa çıkarıyoruz.',
    steps: [['Yerinde görüşme', 'Mülkü görüyor, beklentinizi ve takviminizi dinliyoruz.'], ['Emsal analizi', 'Altıntaş’taki satılan ve satıştaki benzer dairelerle yazılı fiyat önerisi.'], ['Tanıtım', 'Profesyonel fotoğraf ve video, TR-EN-RU ilan metinleri, ACC HOMES ve portallar.'], ['Satış ve tapu', 'Gösterimler, pazarlık, sözleşme ve tapu devri birlikte.']],
    saleTitle: 'Altıntaş Satılık Daire İlanları | Antalya Aksu · ACC HOMES', saleDesc: 'Antalya Aksu Altıntaş’ta satılık daire, villa ve arsa ilanları: güncel fiyatlar, site içi havuzlu daireler ve yetkili projeler.',
    rentTitle: 'Altıntaş Kiralık Daire İlanları | Antalya Aksu · ACC HOMES', rentDesc: 'Antalya Aksu Altıntaş’ta kiralık daireler: site içi, havuzlu, eşyalı ve eşyasız güncel ilanlar.',
    projTitle: 'Altıntaş Projeleri ve Müteahhitleri 2026 | ACC HOMES', projDesc: 'Antalya Aksu Altıntaş projeleri ve inşaat firmaları: Prime Lara, Falez Manzara, Park Yaşam Antalya, Desire Antalya, Metro Nirvana, Sirius ve daha fazlası. Projeden ve ikinci el satış.',
    contactTitle: 'İletişim | Altıntaş Emlak Ofisi · ACC HOMES', contactDesc: 'ACC HOMES Altıntaş satış ofisi ve ACC Plaza genel merkez: telefon, WhatsApp ve form ile bize ulaşın.',
    contactH: 'Bize ulaşın', contactL: 'Altıntaş’ta ev almak, kiralamak ya da satmak için arayın, WhatsApp’tan yazın ya da formu doldurun; aynı gün dönüş yapıyoruz.',
    offT: 'Ofislerimiz', off: [['Altıntaş satış ofisi', 'Altıntaş, Aksu / Antalya. Ziyaret öncesi randevu almanızı öneririz.'], ['ACC Plaza · genel merkez', 'Yeşilbahçe Mah. Portakal Çiçeği Blv. No:36/B, Muratpaşa / Antalya']],
    faqT: 'Sık sorulanlar', faq: [['Altıntaş hangi ilçede?', 'Altıntaş, Antalya’nın Aksu ilçesine bağlı bir mahalledir; Lara ve Kundu’ya, Antalya Havalimanı’na yakındır.'], ['Altıntaş’ta yabancılar ev alabilir mi?', 'Yabancıların tapu alımı genel olarak mümkündür; oturum izni planlanıyorsa mahallenin ikamet kaydına açık olup olmadığını alım öncesi birlikte kontrol ediyoruz.'], ['Altıntaş’ta daire fiyatları ne kadar?', 'Fiyat; sitenin olanaklarına, bina yaşına, kata ve cepheye göre belirgin şekilde değişir. Güncel ilanlarımıza bakabilir ya da dairenize özel emsal analizi isteyebilirsiniz.'], ['Altıntaş’ta tapulara neden şerh konuldu?', 'Çalkaya bölgesindeki 2018 parselasyonu 24 Eylül 2026’da yargı kararıyla iptal edildi; bölgedeki tapulara bu kararı gösteren şerhler işleniyor. İmar planları iptal edilmedi. Ayrıntılar bölge haberleri sayfamızda.'], ['Altıntaş’ta 1+1 mi, 2+1 mi almalı?', 'Kâğıt üzerinde 45 m² görünen birçok 1+1’in net alanı 32-33 m²’de kalıyor; bu yüzden talep 2+1 ve daha büyük dairelere kaydı. Brüt değil net metrekareye bakmanızı öneririz.'], ['Ermenek ve Kemerağzı da bu bölgeye dahil mi?', 'Evet. Altıntaş’a komşu Ermenek ve Kemerağzı mahallelerinde de satılık ve kiralık ilanlarla çalışıyoruz.'], ['İlan detaylarını nerede görebilirim?', 'Her ilan kartı, fotoğrafları ve tüm özellikleriyle ACC HOMES sitesindeki ilan sayfasına açılır.']],
    form: { name: 'Adınız soyadınız', phone: 'Telefon', email: 'E-posta', topic: 'Konu', topics: ['Satılık daire arıyorum', 'Kiralık daire arıyorum', 'Evimi satmak istiyorum', 'Evimi kiraya vermek istiyorum', 'Proje bilgisi', 'Diğer'], msg: 'Mesajınız', send: 'Gönder', consent: 'Kişisel verilerin işlenmesine ilişkin', kvkk: 'aydınlatma metnini okudum', ok: 'Teşekkürler, talebiniz bize ulaştı. En kısa sürede dönüş yapacağız.' },
    revT: 'Müşterilerimiz ne diyor', revAll: 'Tüm Google yorumları', call: 'Ara', privacy: 'KVKK aydınlatma metni',
    foot: 'altintassatilikdaire.com, ACC HOMES International Real Estate’in Altıntaş bölge sitesidir.', other: 'Diğer sitelerimiz',
  },
  en: {
    locale: 'en_US', newsT: 'Area news', newsL: 'Verified developments on zoning, title deeds, infrastructure and the market in Altıntaş, Ermenek and Kemerağzı, with ACC HOMES commentary.', newsTitle: 'Altıntaş Area News: Zoning, Title Deeds, Infrastructure | ACC HOMES', newsDesc: 'Altıntaş area news: parcellation annulment and title deed annotations, zoning, infrastructure and housing market updates.', read: 'Read', srcT: 'Sources', guideT: 'Know Altıntaş from the ground', guideL: 'Location, projects, rental demand, infrastructure and zoning: our guide to Altıntaş, Ermenek and Kemerağzı.', guideBtn: 'Read the area guide', dirT: 'Projects and developers in Altıntaş', dirL: 'Projects and builders we follow in the area. Our authorised projects are marked; contact us for resale and off-plan units in other projects too.', auth: 'Authorised', firmT: 'Developers active in the area', landT: 'Own land or a shop?', landL: 'We introduce landowners to developers for flat-for-land deals and manage sales and lettings of affordable shops on the main roads.', rentOutT: 'Letting your apartment?', rentOutL: 'Rentals move fast in Altıntaş. Let us price and market your flat and find a reliable tenant.', freeExp: 'Free valuation', brand: 'Altıntaş Apartments', by: 'ACC HOMES Altıntaş',
    nav: { ermenek: 'Ermenek', kemeragzi: 'Kemerağzı', sale: 'For sale', rent: 'For rent', projects: 'Projects', guide: 'Area guide', news: 'News', sell: 'Sell', contact: 'Contact' },
    homeTitle: 'Apartments for Sale in Altıntaş, Antalya | ACC HOMES', homeDesc: 'Apartments for sale and rent in Altıntaş, Aksu, Antalya: current listings, authorised projects and a local area guide from ACC HOMES.',
    h1: 'Apartments for sale and rent in Altıntaş', lead: 'Current listings, authorised projects and on-the-ground insight in Altıntaş, Antalya’s fastest-growing residential area. Our Altıntaş sales office and the ACC HOMES team are with you from viewing to title deed.',
    ctaSale: 'Homes for sale', ctaWa: 'Ask on WhatsApp', statSale: 'for sale', statRent: 'for rent', statProj: 'authorised projects', statG: 'Google reviews (ACC HOMES Altıntaş)',
    saleT: 'Altıntaş apartments for sale', saleL: 'Our apartments, villas and land for sale in Altıntaş and Aksu. Filter by neighbourhood, rooms, price and features.',
    rentT: 'Altıntaş apartments for rent', rentL: 'Apartments for rent in Altıntaş and Aksu: gated, with pools, furnished and unfurnished.',
    all: 'All', allOn: 'All Aksu listings on ACC HOMES', none: 'No listings in this category right now. Leave your request and we will let you know first.',
    projT: 'Our authorised projects in Altıntaş', projL: 'Altıntaş developments whose sales and marketing ACC HOMES runs.',
    proj: [['Prime Lara', 'Ekiciler Grup · apartments, villas and shops', 'prime-lara-altintas', '/img/primelara/hero.webp'], ['Falez Manzara', 'Ünlütürk İnşaat · gated apartments', 'falez-manzara-altintas', '/img/falez/dis-1.webp']],
    projMore: 'View project',
    whyT: 'Why Altıntaş', why: [['Close to the airport and Lara', 'A short drive to Antalya Airport, the Lara coast and Kundu; practical for frequent travellers and foreign buyers.'], ['New, gated housing', 'Most of the area’s stock is new complexes with pools, security and parking.'], ['Rental demand', 'Steady demand for 1+1 and 2+1 flats from airport, tourism and healthcare workers.'], ['Growing infrastructure', 'New roads, schools and retail bring the area closer to the city every year.']],
    guide: 'Full Altıntaş guide', guideUrl: `${MAIN}/en/altintas-guide/`,
    sellT: 'Selling a home in Altıntaş?', sellL: 'We price against Altıntaş comparables and sell with professional photography and our local and international buyer network.', sellBtn: 'Request a free valuation',
    sellTitle: 'Sell Your Home in Altıntaş, Antalya | Free Valuation · ACC HOMES', sellDesc: 'Selling an apartment, villa or shop in Altıntaş, Antalya? Comparable-based valuation, professional marketing and a wide buyer network.',
    sellH: 'Let’s sell your Altıntaş home at the right price', sellLead: 'We know what each complex, aspect and floor is worth in Altıntaş. We see your property, assess it against comparables and market it with professional photography, ACC HOMES and portal listings and our buyer network in 12 languages.',
    steps: [['On-site meeting', 'We see the property and listen to your expectations and timeline.'], ['Comparables analysis', 'A written price recommendation based on similar Altıntaş sales and listings.'], ['Marketing', 'Professional photos and video, TR-EN-RU listing copy, ACC HOMES and portals.'], ['Sale and title deed', 'Viewings, negotiation, contract and title deed transfer together.']],
    saleTitle: 'Altıntaş Apartments for Sale | Aksu, Antalya · ACC HOMES', saleDesc: 'Apartments, villas and land for sale in Altıntaş, Aksu, Antalya: current prices, gated complexes with pools and authorised projects.',
    rentTitle: 'Altıntaş Apartments for Rent | Aksu, Antalya · ACC HOMES', rentDesc: 'Apartments for rent in Altıntaş, Aksu, Antalya: gated, with pools, furnished and unfurnished listings.',
    projTitle: 'Altıntaş Projects and Developers 2026 | ACC HOMES', projDesc: 'New-build projects and developers in Altıntaş, Antalya: Prime Lara, Falez Manzara, Park Yaşam Antalya, Desire Antalya, Metro Nirvana and more. Off-plan and resale.',
    contactTitle: 'Contact | Altıntaş Real Estate Office · ACC HOMES', contactDesc: 'ACC HOMES Altıntaş sales office and ACC Plaza headquarters: phone, WhatsApp and contact form.',
    contactH: 'Contact us', contactL: 'Call, message us on WhatsApp or fill in the form to buy, rent or sell in Altıntaş; we reply the same day.',
    offT: 'Our offices', off: [['Altıntaş sales office', 'Altıntaş, Aksu / Antalya. Please book an appointment before visiting.'], ['ACC Plaza · headquarters', 'Yeşilbahçe Mah. Portakal Çiçeği Blv. No:36/B, Muratpaşa / Antalya']],
    faqT: 'FAQ', faq: [['Where is Altıntaş?', 'Altıntaş is a neighbourhood in the Aksu district of Antalya, close to Lara, Kundu and Antalya Airport.'], ['Can foreigners buy in Altıntaş?', 'Foreigners can generally buy title deeds; if you plan a residence permit, we check before purchase whether the neighbourhood is open for residence registration.'], ['What do apartments cost in Altıntaş?', 'Prices vary widely with complex facilities, building age, floor and aspect. See our current listings or ask for a comparables analysis.'], ['Why are title deeds in Altıntaş annotated?', 'The 2018 Çalkaya parcellation was annulled by a court on 24 September 2026, and annotations are being added to title deeds. Zoning plans were not annulled. See our area news.'], ['1+1 or 2+1 in Altıntaş?', 'Many 1+1s listed at 45 m² have only 32-33 m² net, so demand has shifted to 2+1 and larger. Compare net area.'], ['Do you cover Ermenek and Kemerağzı?', 'Yes, we also work with listings in neighbouring Ermenek and Kemerağzı.'], ['Where can I see listing details?', 'Each card opens the full listing page with photos and features on the ACC HOMES website.']],
    form: { name: 'Full name', phone: 'Phone', email: 'E-mail', topic: 'Topic', topics: ['Looking to buy', 'Looking to rent', 'Selling my home', 'Letting my home', 'Project information', 'Other'], msg: 'Your message', send: 'Send', consent: 'I have read the', kvkk: 'privacy notice', ok: 'Thank you, we have received your request and will get back to you shortly.' },
    revT: 'What our clients say', revAll: 'All Google reviews', call: 'Call', privacy: 'Privacy notice',
    foot: 'altintassatilikdaire.com is the Altıntaş area site of ACC HOMES International Real Estate.', other: 'Our other sites',
  },
  ru: {
    locale: 'ru_RU', newsT: 'Новости района', newsL: 'Проверенные новости о зонировании, тапу, инфраструктуре и рынке в Алтынташе, Эрменеке и Кемерагзы.', newsTitle: 'Новости Алтынташа: зонирование, тапу | ACC HOMES', newsDesc: 'Новости района Алтынташ: отмена парцелляции, отметки в тапу, инфраструктура и рынок жилья.', read: 'Читать', srcT: 'Источники', guideT: 'Алтынташ изнутри', guideL: 'Расположение, проекты, аренда, инфраструктура и зонирование: наш гид по району.', guideBtn: 'Читать гид', dirT: 'Проекты и застройщики Алтынташа', dirL: 'Проекты и застройщики, которых мы знаем. Наши проекты отмечены; по другим проектам тоже обращайтесь.', auth: 'Наш проект', firmT: 'Застройщики района', landT: 'Есть участок или магазин?', landL: 'Помогаем владельцам участков найти застройщика и продаём/сдаём доступные магазины на главных дорогах.', rentOutT: 'Сдаёте квартиру?', rentOutL: 'Квартиры в Алтынташе сдаются очень быстро. Подготовим объявление и найдём надёжного арендатора.', freeExp: 'Бесплатная оценка', brand: 'Квартиры в Алтынташе', by: 'ACC HOMES Altıntaş',
    nav: { ermenek: 'Эрменек', kemeragzi: 'Кемерагзы', sale: 'Продажа', rent: 'Аренда', projects: 'Проекты', guide: 'Гид', news: 'Новости', sell: 'Продать', contact: 'Контакты' },
    homeTitle: 'Квартиры в Алтынташе, Анталия: продажа и аренда | ACC HOMES', homeDesc: 'Квартиры на продажу и в аренду в Алтынташе (Аксу, Анталия): актуальные объекты, проекты и гид по району от ACC HOMES.',
    h1: 'Квартиры в Алтынташе: продажа и аренда', lead: 'Актуальные объекты, проекты и знание района Алтынташ — самого быстрорастущего жилого района Анталии. Наш офис продаж в Алтынташе и команда ACC HOMES сопровождают вас до оформления тапу.',
    ctaSale: 'Объекты на продажу', ctaWa: 'Написать в WhatsApp', statSale: 'на продажу', statRent: 'в аренду', statProj: 'проекта', statG: 'отзывов Google (ACC HOMES Altıntaş)',
    saleT: 'Квартиры на продажу в Алтынташе', saleL: 'Квартиры, виллы и участки на продажу в Алтынташе и Аксу. Фильтруйте по району, комнатам, цене и особенностям.',
    rentT: 'Аренда квартир в Алтынташе', rentL: 'Квартиры в аренду в Алтынташе и Аксу: в комплексах, с бассейном, с мебелью и без.',
    all: 'Все', allOn: 'Все объекты Аксу на ACC HOMES', none: 'Сейчас объектов в этой категории нет. Оставьте заявку — сообщим первыми.',
    projT: 'Наши проекты в Алтынташе', projL: 'Проекты в Алтынташе, продажи и маркетинг которых ведёт ACC HOMES.',
    proj: [['Prime Lara', 'Ekiciler Grup · квартиры, виллы, магазины', 'prime-lara-altintas', '/img/primelara/hero.webp'], ['Falez Manzara', 'Ünlütürk İnşaat · квартиры в комплексе', 'falez-manzara-altintas', '/img/falez/dis-1.webp']],
    projMore: 'Смотреть проект',
    whyT: 'Почему Алтынташ', why: [['Рядом аэропорт и Лара', 'Недалеко аэропорт Анталии, побережье Лары и Кунду — удобно для тех, кто часто летает, и иностранцев.'], ['Новое жильё в комплексах', 'Большая часть жилья — новые комплексы с бассейном, охраной и парковкой.'], ['Спрос на аренду', 'Постоянный спрос на 1+1 и 2+1 от работников аэропорта, туризма и медицины.'], ['Развитие района', 'Новые дороги, школы и торговля с каждым годом связывают район с городом.']],
    guide: 'Подробный гид по Алтынташу', guideUrl: `${MAIN}/ru/gid-altyntash/`,
    sellT: 'Продаёте квартиру в Алтынташе?', sellL: 'Оцениваем по аналогам в Алтынташе и продаём с профессиональной съёмкой и сетью покупателей.', sellBtn: 'Бесплатная оценка',
    sellTitle: 'Продать квартиру в Алтынташе | Бесплатная оценка · ACC HOMES', sellDesc: 'Хотите продать квартиру, виллу или магазин в Алтынташе (Анталия)? Оценка по аналогам, маркетинг и сеть покупателей.',
    sellH: 'Продадим вашу квартиру в Алтынташе по правильной цене', sellLead: 'Мы знаем, сколько стоят комплексы, этажи и стороны света в Алтынташе. Осматриваем объект, оцениваем по аналогам и продаём с профессиональной съёмкой, объявлениями на ACC HOMES и порталах и покупателями на 12 языках.',
    steps: [['Встреча на объекте', 'Осматриваем объект и обсуждаем ожидания и сроки.'], ['Анализ аналогов', 'Письменная рекомендация по цене на основе сделок в Алтынташе.'], ['Продвижение', 'Фото и видео, тексты на TR-EN-RU, ACC HOMES и порталы.'], ['Сделка и тапу', 'Показы, переговоры, договор и тапу вместе.']],
    saleTitle: 'Квартиры на продажу в Алтынташе | Аксу, Анталия · ACC HOMES', saleDesc: 'Квартиры, виллы и участки на продажу в Алтынташе (Аксу, Анталия): цены, комплексы с бассейном и проекты.',
    rentTitle: 'Аренда квартир в Алтынташе | Аксу, Анталия · ACC HOMES', rentDesc: 'Квартиры в аренду в Алтынташе (Аксу, Анталия): в комплексах, с бассейном, с мебелью и без.',
    projTitle: 'Проекты в Алтынташе | Prime Lara, Falez Manzara · ACC HOMES', projDesc: 'Жилые проекты в Алтынташе, где ACC HOMES — уполномоченное агентство: Prime Lara и Falez Manzara.',
    contactTitle: 'Контакты | Офис недвижимости в Алтынташе · ACC HOMES', contactDesc: 'Офис продаж ACC HOMES в Алтынташе и штаб-квартира ACC Plaza: телефон, WhatsApp и форма.',
    contactH: 'Свяжитесь с нами', contactL: 'Позвоните, напишите в WhatsApp или заполните форму — купить, арендовать или продать в Алтынташе. Отвечаем в тот же день.',
    offT: 'Наши офисы', off: [['Офис продаж в Алтынташе', 'Алтынташ, Аксу / Анталия. Пожалуйста, договоритесь о встрече заранее.'], ['ACC Plaza · штаб-квартира', 'Yeşilbahçe Mah. Portakal Çiçeği Blv. No:36/B, Muratpaşa / Antalya']],
    faqT: 'Вопросы и ответы', faq: [['Где находится Алтынташ?', 'Алтынташ — район в округе Аксу (Анталия), рядом с Ларой, Кунду и аэропортом Анталии.'], ['Могут ли иностранцы купить жильё в Алтынташе?', 'Иностранцы, как правило, могут оформить тапу; если планируется ВНЖ, до покупки проверяем, открыт ли район для регистрации.'], ['Сколько стоят квартиры в Алтынташе?', 'Цена сильно зависит от комплекса, возраста здания, этажа и стороны. Смотрите наши объекты или закажите анализ аналогов.'], ['Почему в тапу Алтынташа появились отметки?', 'Парцелляция 2018 года в районе Чалкая отменена судом 24 сентября 2026 года; в тапу вносятся отметки. Планы зонирования не отменены.'], ['1+1 или 2+1 в Алтынташе?', 'Многие 1+1 площадью 45 м² имеют лишь 32-33 м² чистой площади, поэтому спрос сместился на 2+1.'], ['Где посмотреть детали объекта?', 'Каждая карточка открывает полную страницу объекта на сайте ACC HOMES.']],
    form: { name: 'Имя и фамилия', phone: 'Телефон', email: 'E-mail', topic: 'Тема', topics: ['Хочу купить', 'Хочу арендовать', 'Хочу продать', 'Хочу сдать', 'О проекте', 'Другое'], msg: 'Сообщение', send: 'Отправить', consent: 'Я прочитал(а)', kvkk: 'уведомление о конфиденциальности', ok: 'Спасибо, ваша заявка получена. Мы скоро свяжемся с вами.' },
    revT: 'Отзывы клиентов', revAll: 'Все отзывы Google', call: 'Позвонить', privacy: 'Конфиденциальность',
    foot: 'altintassatilikdaire.com — сайт района Алтынташ компании ACC HOMES International Real Estate.', other: 'Наши сайты',
  },
};
const KVKK = { tr: `${MAIN}/kvkk-aydinlatma-metni/`, en: `${MAIN}/en/privacy-notice/`, ru: `${MAIN}/ru/privacy-notice/` };
const PROJ_URL = (lang, slug) => (slug === 'antalle-concept-houses' && lang !== 'tr' ? `${MAIN}/${lang}/${lang === 'en' ? 'projects' : 'proekty'}/${slug}/` : `${MAIN}/projeler/${slug}/`);
const KW = {
  tr: 'Altıntaş satılık daire, Altıntaş kiralık daire, Aksu Altıntaş satılık daire, Altıntaş emlakçı, Altıntaş emlak ofisi, Ermenek satılık daire, Kemerağzı satılık daire, Antalya Altıntaş satılık, Altıntaş 2+1 satılık, Altıntaş 1+1 kiralık, Altıntaş projeleri, Altıntaş müteahhit, Altıntaş parselasyon iptali, Altıntaş tapu şerhi, 402’lik yol, Kardeş Kentler Caddesi, havalimanına yakın satılık daire, Altıntaş satılık dükkan, Altıntaş arsa kat karşılığı, Prime Lara, Falez Manzara, Park Yaşam Antalya, Desire Antalya, Metro Nirvana, ACC HOMES',
  en: 'Altintas apartments for sale, Altıntaş Antalya property, Ermenek Antalya apartments, Kemeragzi apartments, apartments near Antalya airport, Altintas new projects, Altintas off-plan, apartments for rent Altintas, Altintas real estate agent, Aksu Antalya apartments, Prime Lara, Falez Manzara',
  ru: 'квартиры Алтынташ, квартиры возле аэропорта Анталии, Эрменек Анталия, Кемерагзы, новостройки Алтынташ, Алтынташ Анталия купить квартиру, аренда квартир Алтынташ, недвижимость Аксу Анталия, Prime Lara',
};

// ---------- parçalar ----------
const CUR = { TL: 'TRY', TRY: 'TRY', USD: 'USD', EUR: 'EUR', '$': 'USD', '€': 'EUR' };
const fmt = (l, lang) => { const per = l.tip === 'Kiralık' ? (lang === 'tr' ? '/ay' : lang === 'ru' ? '/мес' : '/mo') : '';
  if (!l.fiyat) return lang === 'tr' ? 'Fiyat için arayın' : lang === 'ru' ? 'Цена по запросу' : 'Price on request';
  return `<span class="pz" data-p="${l.fiyat}" data-c="${CUR[l.para] || 'TRY'}">${Number(l.fiyat).toLocaleString(lang === 'tr' ? 'tr-TR' : lang === 'ru' ? 'ru-RU' : 'en-US')} ${l.para}</span>${per}`; };
const card = (l, lang) => `<a class="lc rv" href="${esc(l.url[lang])}"${l.own ? '' : ' target="_blank" rel="noopener"'} data-t="${l.tip === 'Satılık' ? 's' : l.tip === 'Kiralık' ? 'k' : 'd'}" data-a="${esc(l.altTip)}" data-m="${esc(l.mahalle)}" data-o="${parseInt(l.oda) || 0}" data-p="${Math.round((l.fiyat || 0) * (l.para === 'TL' || !l.para ? 1 : (RATES[CUR[l.para]] || 0)))}" data-b="${l.brut || 0}" data-f="${l.own ? Object.entries(featOf(l)).filter(([, x]) => x).map(([k]) => k).join(' ') : ''}"><span class="lci">${l.foto ? `<img src="${esc(l.foto)}" alt="${esc(l.baslik[lang])}" loading="lazy" referrerpolicy="no-referrer" width="640" height="480">` : ''}<b>${fmt(l, lang)}</b>${l.kapora ? `<i class="kp">${lang === 'tr' ? 'Kaporalı' : lang === 'ru' ? 'Задаток внесён' : 'Under offer'}</i>` : ''}<em>${esc(l.tip === 'Satılık' ? T[lang].nav.sale : l.tip === 'Kiralık' ? T[lang].nav.rent : l.tip)}</em></span><span class="lcb"><small>${esc([l.mahalle, l.ilce].filter(Boolean).join(' · '))}${l.proje && l.proje !== 'SİTE' ? ` · ${esc(l.proje)}` : ''}</small><h3>${esc(l.baslik[lang])}</h3><span class="lcm">${[l.oda, l.brut ? `${l.brut} m²` : ''].filter(Boolean).join(' · ')}</span></span></a>`;
const grid = (list, lang, chips = true) => {
  const t = T[lang]; if (!list.length) return `<p class="none">${t.none}</p>`;
  const alts = [...new Set(list.map((l) => l.altTip).filter(Boolean))].slice(0, 6);
  return `${chips && alts.length > 1 ? `<p class="gf"><button class="on" data-f="*">${t.all} <i>${list.length}</i></button>${alts.map((a) => `<button data-f="${esc(a)}">${esc(a)} <i>${list.filter((l) => l.altTip === a).length}</i></button>`).join('')}</p>` : ''}<div class="lg">${list.map((l) => card(l, lang)).join('')}</div>`;
};
const BEHOLD = 'https://feeds.behold.so/jcCQi8BN21VNmW9MKU9A';
const IGT = { tr: { e: 'Instagram', t: 'Altıntaş’tan güncel paylaşımlar', f: 'takipçi', b: 'Takip et' }, en: { e: 'Instagram', t: 'Latest from Altıntaş', f: 'followers', b: 'Follow' }, ru: { e: 'Instagram', t: 'Свежие публикации из Алтынташа', f: 'подписчиков', b: 'Подписаться' } };
const igLive = (lang) => { const g = IGT[lang]; return `<section class="sec igs" id="instagram"><div class="wrap"><div class="igh"><a class="iga" href="${IG}" target="_blank" rel="noopener"><img data-ig="pic" src="/favicon.svg" alt="@acc.altintas.realestate" width="72" height="72" loading="lazy" referrerpolicy="no-referrer"></a><div class="igm"><p class="eyebrow">${g.e}</p><h2>${g.t}</h2><p class="igst"><a href="${IG}" target="_blank" rel="noopener"><b>@acc.altintas.realestate</b></a><span data-ig="fol" hidden></span></p></div><a class="btn ig" href="${IG}" target="_blank" rel="noopener">${ICO.ig} ${g.b}</a></div><div class="igg" data-ig="grid"></div></div></section>
<script>(()=>{const s=document.getElementById('instagram'),g=s.querySelector('[data-ig=grid]'),e=t=>String(t||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));fetch('${BEHOLD}').then(r=>r.ok?r.json():Promise.reject()).then(d=>{const ps=(d.posts||[]).slice(0,6);if(!ps.length)throw 0;if(d.profilePictureUrl)s.querySelector('[data-ig=pic]').src=d.profilePictureUrl;if(d.followersCount){const f=s.querySelector('[data-ig=fol]');f.textContent=new Intl.NumberFormat('${lang === 'tr' ? 'tr-TR' : lang === 'ru' ? 'ru-RU' : 'en-US'}').format(d.followersCount)+' ${g.f}';f.hidden=false}g.innerHTML=ps.map(p=>{const z=p.sizes||{},src=(z.medium&&z.medium.mediaUrl)||(z.small&&z.small.mediaUrl)||p.thumbnailUrl||p.mediaUrl,c=e(p.prunedCaption||p.caption);return '<a class="igi" href="'+e(p.permalink)+'" target="_blank" rel="noopener"><img src="'+e(src)+'" alt="'+c.slice(0,120)+'" width="400" height="500" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentNode.remove()">'+(p.mediaType==='VIDEO'||p.isReel?'<span class="igp" aria-hidden="true">▶</span>':'')+'<span class="igc">'+c+'</span></a>'}).join('')}).catch(()=>{g.remove()})})();</script>`; };
const FL = { tr: { t: 'Filtrele', mah: 'Mahalle', typ: 'Emlak tipi', price: 'Fiyat', min: 'En az', max: 'En çok', rooms: 'Oda sayısı', any: 'Farketmez', feat: 'Özellikler', m2: 'En az brüt m²', sort: 'Sırala', s: ['Önerilen', 'Fiyat: düşükten yükseğe', 'Fiyat: yüksekten düşüğe', 'En geniş'], clear: 'Temizle', show: 'ilan', open: 'Filtrele', apply: 'Sonuçları göster', none: 'Bu filtrelere uyan ilan yok. Filtreleri azaltın ya da WhatsApp’tan yazın, aradığınızı birlikte bulalım.', fk: { pool: 'Havuzlu', site: 'Site içinde', esya: 'Eşyalı', sifir: 'Sıfır bina', park: 'Otoparklı', sec: '7/24 güvenlik' } },
  en: { t: 'Filter', mah: 'Neighbourhood', typ: 'Property type', price: 'Price', min: 'Min', max: 'Max', rooms: 'Rooms', any: 'Any', feat: 'Features', m2: 'Min. gross m²', sort: 'Sort', s: ['Recommended', 'Price: low to high', 'Price: high to low', 'Largest'], clear: 'Clear', show: 'listings', open: 'Filters', apply: 'Show results', none: 'No listings match these filters. Remove some filters or message us on WhatsApp and we will find it together.', fk: { pool: 'Pool', site: 'Gated complex', esya: 'Furnished', sifir: 'New building', park: 'Parking', sec: '24/7 security' } },
  ru: { t: 'Фильтр', mah: 'Район', typ: 'Тип', price: 'Цена', min: 'От', max: 'До', rooms: 'Комнаты', any: 'Любое', feat: 'Особенности', m2: 'Мин. площадь, м²', sort: 'Сортировка', s: ['Рекомендуемые', 'Цена: по возрастанию', 'Цена: по убыванию', 'Самые большие'], clear: 'Сбросить', show: 'объектов', open: 'Фильтры', apply: 'Показать', none: 'Нет объектов по этим фильтрам. Уберите часть фильтров или напишите нам в WhatsApp.', fk: { pool: 'Бассейн', site: 'Комплекс', esya: 'С мебелью', sifir: 'Новый дом', park: 'Парковка', sec: 'Охрана 24/7' } } };
const filters = (lang, list) => { const F = FL[lang]; const mahs = [...new Set(list.map((l) => l.mahalle).filter(Boolean))]; const typs = [...new Set(list.map((l) => l.altTip).filter(Boolean))];
  const fks = Object.keys(F.fk).filter((k) => list.some((l) => l.own && featOf(l)[k])); const rent = list.every((l) => l.tip === 'Kiralık');
  const pq = rent ? [[0, 20000], [20000, 30000], [30000, 45000], [45000, 0]] : [[0, 4e6], [4e6, 6e6], [6e6, 10e6], [10e6, 0]];
  const pl = (n) => n >= 1e6 ? (n / 1e6) + 'M' : (n / 1000) + 'B';
  return `<aside class="fside" id="fside"><div class="fsh"><b>${F.t}</b><button type="button" class="fclear">${F.clear}</button><button type="button" class="fx" aria-label="close">×</button></div>
${mahs.length > 1 ? `<fieldset><legend>${F.mah}</legend>${mahs.map((m) => `<label class="ck"><input type="checkbox" name="m" value="${esc(m)}"><span>${esc(mahOf({ mahalle: m }, lang))}</span><small>${list.filter((l) => l.mahalle === m).length}</small></label>`).join('')}</fieldset>` : ''}
${typs.length > 1 ? `<fieldset><legend>${F.typ}</legend>${typs.map((a) => `<label class="ck"><input type="checkbox" name="a" value="${esc(a)}"><span>${esc(altOf({ altTip: a }, lang))}</span><small>${list.filter((l) => l.altTip === a).length}</small></label>`).join('')}</fieldset>` : ''}
<fieldset><legend>${F.rooms}</legend><div class="pills">${['', 1, 2, 3, 4].map((b) => `<button type="button" data-fo="${b}"${b ? '' : ' class="on"'}>${b ? `${b}+1${b === 4 ? ' +' : ''}` : F.any}</button>`).join('')}</div></fieldset>
<fieldset><legend>${F.price} <span class="fcur">₺</span></legend><div class="prr"><input type="number" inputmode="numeric" name="pmin" placeholder="${F.min}" min="0" step="1000"><span>–</span><input type="number" inputmode="numeric" name="pmax" placeholder="${F.max}" min="0" step="1000"></div><div class="pq">${pq.map(([a, b]) => `<button type="button" data-pq="${a}-${b}">${a && b ? `${pl(a)}–${pl(b)}` : b ? `≤ ${pl(b)}` : `${pl(a)}+`} ₺</button>`).join('')}</div></fieldset>
${fks.length ? `<fieldset><legend>${F.feat}</legend>${fks.map((k) => `<label class="ck"><input type="checkbox" name="f" value="${k}"><span>${F.fk[k]}</span></label>`).join('')}</fieldset>` : ''}
<fieldset><legend>${F.m2}</legend><div class="pills">${['', 50, 75, 100, 150].map((m) => `<button type="button" data-fm="${m}"${m ? '' : ' class="on"'}>${m ? m + '+ m²' : F.any}</button>`).join('')}</div></fieldset>
<button type="button" class="btn fapply">${F.apply}</button></aside>`; };
const listLay = (lang, list) => { const F = FL[lang]; if (!list.length) return `<p class="none">${T[lang].none}</p>`;
  return `<div class="lay">${filters(lang, list)}<div class="lmain"><div class="ltop"><button type="button" class="fopen"><svg viewBox="0 0 24 24"><path d="M4 6h16M7 12h10M10 18h4"/></svg>${F.open}</button><p class="lcount"><b>${list.length}</b> ${F.show}</p><label class="lsort">${F.sort}<select name="sort">${F.s.map((x, i) => `<option value="${i}">${x}</option>`).join('')}</select></label></div><div class="lg lg2" data-filter>${list.map((l, i) => card(l, lang).replace('<a class="lc rv"', `<a data-i="${i}" class="lc rv"`)).join('')}</div><p class="empty" hidden>${F.none}</p></div></div>
<script>(()=>{const g=document.querySelector('[data-filter]'),fs=document.getElementById('fside');if(!g||!fs)return;const RR=${JSON.stringify({ TRY: 1, USD: RATES.USD, EUR: RATES.EUR })};const cur=()=>{let c='${DEF_CUR[lang]}';try{c=localStorage.getItem('cur')||c}catch(e){}return RR[c]?c:'TRY'};const C=[...g.children],q=new URLSearchParams(location.search);let st={m:q.get('m')?[q.get('m')]:[],a:[],f:[],o:+q.get('o')||0,b:0,pmin:0,pmax:0,sort:0};
const sync=()=>{fs.querySelectorAll('input[type=checkbox]').forEach(i=>i.checked=st[i.name].includes(i.value));fs.querySelectorAll('[data-fo]').forEach(b=>b.classList.toggle('on',(+b.dataset.fo||0)===st.o));fs.querySelectorAll('[data-fm]').forEach(b=>b.classList.toggle('on',(+b.dataset.fm||0)===st.b))};
const ap=()=>{let n=0;const k=RR[cur()]||1;fs.querySelectorAll('.fcur').forEach(e=>e.textContent={TRY:'₺',USD:'$',EUR:'€'}[cur()]);fs.querySelectorAll('[data-pq]').forEach(b=>b.hidden=cur()!=='TRY');C.forEach(c=>{const d=c.dataset,p=+d.p||0,o=+d.o||0,ok=(!st.m.length||st.m.includes(d.m))&&(!st.a.length||st.a.includes(d.a))&&(!st.f.length||st.f.every(x=>(' '+d.f+' ').includes(' '+x+' ')))&&(!st.o||(st.o===4?o>=4:o===st.o))&&(!st.b||(+d.b)>=st.b)&&(!st.pmin||(p&&p>=st.pmin*k))&&(!st.pmax||(p&&p<=st.pmax*k));c.hidden=!ok;c.classList.add('in');if(ok)n++});
const o=C.slice();if(st.sort==1)o.sort((a,b)=>(+a.dataset.p||9e15)-(+b.dataset.p||9e15));else if(st.sort==2)o.sort((a,b)=>(+b.dataset.p||0)-(+a.dataset.p||0));else if(st.sort==3)o.sort((a,b)=>(+b.dataset.b)-(+a.dataset.b));else o.sort((a,b)=>a.dataset.i-b.dataset.i);o.forEach(c=>g.appendChild(c));
document.querySelectorAll('.lcount b').forEach(e=>e.textContent=n);document.querySelector('.empty').hidden=n>0;sync()};
fs.addEventListener('change',e=>{const t=e.target;if(t.type==='checkbox'){st[t.name]=[...fs.querySelectorAll('input[name='+t.name+']:checked')].map(i=>i.value);ap()}});
fs.addEventListener('input',e=>{const t=e.target;if(t.name==='pmin'||t.name==='pmax'){st[t.name]=+t.value||0;ap()}});
fs.querySelectorAll('[data-fo]').forEach(b=>b.onclick=()=>{st.o=+b.dataset.fo||0;ap()});fs.querySelectorAll('[data-fm]').forEach(b=>b.onclick=()=>{st.b=+b.dataset.fm||0;ap()});
fs.querySelectorAll('[data-pq]').forEach(b=>b.onclick=()=>{const a=b.dataset.pq.split('-');st.pmin=+a[0];st.pmax=+a[1];fs.querySelector('[name=pmin]').value=st.pmin||'';fs.querySelector('[name=pmax]').value=st.pmax||'';ap()});
fs.querySelector('.fclear').onclick=()=>{st={m:[],a:[],f:[],o:0,b:0,pmin:0,pmax:0,sort:st.sort};fs.querySelectorAll('input[type=number]').forEach(i=>i.value='');ap()};
const cl=()=>document.body.classList.remove('fopen-on');fs.querySelector('.fx').onclick=cl;fs.querySelector('.fapply').onclick=cl;document.querySelectorAll('.fopen').forEach(b=>b.onclick=()=>document.body.classList.add('fopen-on'));
document.querySelectorAll('[name=sort]').forEach(s=>s.onchange=()=>{st.sort=+s.value;ap()});const cs=document.querySelector('.cur');cs&&cs.addEventListener('change',()=>setTimeout(ap,0));ap()})();</script>`; };
const HS = { tr: ['Satılık', 'Kiralık', 'Projeler', 'Oda sayısı', 'Daireleri göster', 'Oda sayısı', '4+1 ve üzeri'], en: ['For sale', 'For rent', 'Projects', 'Number of rooms', 'Show homes', 'Rooms', '4+1 and more'], ru: ['Продажа', 'Аренда', 'Проекты', 'Количество комнат', 'Показать', 'Комнаты', '4+1 и больше'] };
const hsearch = (lang) => { const h = HS[lang]; const mahs = [...new Set(AREA.map((l) => l.mahalle).filter(Boolean))];
  return `<div class="hsearch2"><form class="search" data-sale="${url(lang, 'sale')}" data-rent="${url(lang, 'rent')}" data-proj="${url(lang, 'projects')}"><div class="tabrow"><button type="button" class="on" data-t="sale">${h[0]}</button><button type="button" data-t="rent">${h[1]}</button><button type="button" data-t="proj">${h[2]}</button></div><div class="sbar"><select name="o" aria-label="${h[5]}"><option value="">${h[3]}</option>${[1, 2, 3].map((n) => `<option value="${n}">${n}+1</option>`).join('')}<option value="4">${h[6]}</option></select><button class="sgo" type="submit"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg><span>${h[4]}</span></button></div></form></div>
<script>(()=>{const f=document.querySelector('.hsearch2 form');let t='sale';f.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{t=b.dataset.t;f.querySelectorAll('[data-t]').forEach(x=>x.classList.toggle('on',x===b));f.querySelector('select').disabled=t==='proj'});f.onsubmit=e=>{e.preventDefault();const m=f.querySelector('select').value;location.href=f.dataset[t]+(m&&t!=='proj'?'?o='+m:'')}})();</script>`; };
const faqHtml = (title, items) => items.length ? `<section class="sec"><div class="wrap narrow"><h2>${title}</h2>${items.map(([q, a]) => `<details class="faq"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div></section>` : '';
const faqLdOf = (items) => ({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
const homeSeo = (lang) => { const H = HOMESEO[lang]; return `<section class="sec seoblk"><div class="wrap narrow"><h2>${H.h}</h2>${H.secs.map(([h, x]) => `<h3>${h}</h3><p>${x}</p>`).join('')}</div></section>`; };
const popBand = (lang) => { const t = T[lang]; const links = [[url(lang, 'sale'), t.saleT, SALE.length], [url(lang, 'rent'), t.rentT, RENT.length], ...LIVE.map((L) => [url(lang, L.k), L.h[lang], L.k === 'l_yab' ? 0 : L.list.length]), [url(lang, 'ermenek'), t.nav.ermenek, 0], [url(lang, 'kemeragzi'), t.nav.kemeragzi, 0], [url(lang, 'projects'), t.nav.projects, 0], [url(lang, 'guide'), t.nav.guide, 0], [url(lang, 'news'), t.newsT, 0], [url(lang, 'sell'), t.freeExp, 0]];
  return `<section class="popb"><div class="wrap"><p class="fh">${POP[lang]}</p><p class="popl">${links.map(([u, x, n]) => `<a href="${u}">${esc(x)}${n ? ` <i>${n}</i>` : ''}</a>`).join('')}</p></div></section>`; };
const igrid = (list, lang, n) => `<div class="lg">${list.slice(0, n).map((l) => card(l, lang)).join('')}</div>`;
function form(lang, topic = 0) {
  const f = T[lang].form;
  return `<form id="form" class="form" method="POST" action="/form.php"><p class="okmsg" hidden>${f.ok}</p><input type="hidden" name="form-name" value="altintas-talep"><input type="hidden" name="_next" value="${url(lang, 'contact')}?ok=1"><input type="hidden" name="dil" value="${lang}"><input type="hidden" name="site" value="altintassatilikdaire.com"><p hidden><input name="bot-field" tabindex="-1" autocomplete="off"></p>
<input name="ad" placeholder="${f.name} *" required autocomplete="name"><input name="telefon" type="tel" placeholder="${f.phone} *" required autocomplete="tel"><input name="eposta" type="email" placeholder="${f.email}" autocomplete="email"><select name="konu" aria-label="${f.topic}">${f.topics.map((x, i) => `<option${i === topic ? ' selected' : ''}>${x}</option>`).join('')}</select><textarea name="mesaj" rows="4" placeholder="${f.msg}"></textarea>
<label class="chk"><input type="checkbox" name="kvkk_onay" value="evet" required> <span>${f.consent} <a href="${KVKK[lang]}" target="_blank" rel="noopener">${f.kvkk}</a> *</span></label><button class="btn" type="submit">${f.send}</button></form>`;
}
const reviews = (lang) => {
  const t = T[lang]; const list = REVIEWS.slice(0, 6);
  return `<section class="sec bg2"><div class="wrap"><div class="sh"><div><h2>${t.revT}</h2></div><a class="gb" href="${G.url}" target="_blank" rel="noopener">${ICO.g}<b>${lang === 'en' ? G.rating : String(G.rating).replace('.', ',')}</b> ★ · ${G.count}</a></div>
<div class="revs">${list.map((r) => `<figure class="rev rv"><blockquote lang="${r.lang}">“${esc(r.text.replace(/^…\s*/, ''))}”</blockquote><figcaption><b>${esc(r.name)}</b> · Google</figcaption></figure>`).join('')}</div>
<p class="center"><a class="btn ghost" href="${G.url}" target="_blank" rel="noopener">${t.revAll} →</a></p></div></section>`;
};
const sellBand = (lang) => { const t = T[lang]; return `<section class="sec"><div class="wrap"><div class="sellb rv"><div><h2>${t.sellT}</h2><p class="lead">${t.sellL}</p><div class="ctas"><a class="btn" href="${url(lang, 'sell')}">${t.sellBtn} →</a></div></div><ul>${t.steps.map(([h]) => `<li>${h}</li>`).join('')}</ul></div></div></section>`; };
const projBlock = (lang, full) => { const t = T[lang]; return `<section class="sec${full ? '' : ' bg2'}"><div class="wrap"><div class="sh"><div><h2>${t.projT}</h2><p class="lead">${t.projL}</p></div>${full ? '' : `<a class="all" href="${url(lang, 'projects')}">${t.nav.projects} →</a>`}</div>
<div class="pj2">${t.proj.map(([n, d, slug, im]) => { const c = AREA.filter((l) => l.proje === n).length; return `<a class="pjb rv" href="${PROJ_URL(lang, slug)}" target="_blank" rel="noopener"><img src="${MAIN}${im}" alt="${esc(n)} Altıntaş" loading="lazy" width="800" height="500"><span><b>${n}</b><small>${d}</small>${c ? `<em>${c} ${lang === 'tr' ? 'ilan' : lang === 'ru' ? 'объект.' : 'listings'}</em>` : ''}<i>${t.projMore} →</i></span></a>`; }).join('')}</div>${full ? AREA.filter((l) => t.proj.some(([n]) => n === l.proje)).length ? `<h3 class="mt">${lang === 'tr' ? 'Projelerdeki ilanlar' : lang === 'ru' ? 'Объекты в проектах' : 'Listings in these projects'}</h3>${igrid(AREA.filter((l) => t.proj.some(([n]) => n === l.proje)), lang, 12)}` : '' : ''}</div></section>`; };
const faqBlock = (lang) => `<section class="sec"><div class="wrap narrow"><h2>${T[lang].faqT}</h2>${T[lang].faq.map(([q, a]) => `<details class="faq"><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></section>`;
const faqLd = (lang) => ({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: T[lang].faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
const ORG = (lang) => ({ '@context': 'https://schema.org', '@type': 'RealEstateAgent', '@id': `${DOMAIN}/#org`, name: 'ACC HOMES Altıntaş', alternateName: 'ACC HOMES International Real Estate', url: DOMAIN + url(lang, 'home'), logo: `${MAIN}/img/logo/acc-homes-logo.png`, image: `${MAIN}/img/primelara/hero.webp`, telephone: PHONE.raw, areaServed: [{ '@type': 'Place', name: 'Altıntaş, Aksu, Antalya' }, { '@type': 'City', name: 'Antalya' }], parentOrganization: { '@type': 'Organization', name: 'ACC HOMES International Real Estate', url: MAIN }, sameAs: [IG, MAIN, G.url], aggregateRating: { '@type': 'AggregateRating', ratingValue: G.rating, reviewCount: G.count } });
const crumbs = (lang, key) => ({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: T[lang].brand, item: DOMAIN + url(lang, 'home') }, ...(key === 'home' ? [] : [{ '@type': 'ListItem', position: 2, name: T[lang].nav[key] || LAND.find((L) => L.k === key)?.h[lang] || key, item: DOMAIN + url(lang, key) }])] });
const itemList = (list, lang) => ({ '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: list.slice(0, 30).map((l, i) => ({ '@type': 'ListItem', position: i + 1, url: (l.url[lang].startsWith('/') ? DOMAIN : '') + l.url[lang], name: l.baslik[lang] })) });

function head({ lang, title, desc, canon, alt, ld, img }) {
  const t = T[lang];
  return `<!DOCTYPE html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><meta name="keywords" content="${esc(KW[lang])}"><link rel="canonical" href="${DOMAIN}${canon}">${LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${DOMAIN}${alt[l]}">`).join('')}<link rel="alternate" hreflang="x-default" href="${DOMAIN}${alt.tr}"><meta name="robots" content="index,follow,max-image-preview:large">
<meta property="og:type" content="website"><meta property="og:site_name" content="${t.brand}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${DOMAIN}${canon}"><meta property="og:image" content="${esc(img || `${MAIN}/img/primelara/hero.webp`)}"><meta property="og:locale" content="${t.locale}"><meta name="twitter:card" content="summary_large_image"><meta name="theme-color" content="#E02A3C">
<link rel="icon" href="/favicon.ico?v=acc2" sizes="any"><link rel="icon" href="/favicon-32.png?v=acc2" type="image/png" sizes="32x32"><link rel="icon" href="/favicon.svg?v=acc2" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png?v=acc2"><link rel="shortcut icon" href="/favicon.ico?v=acc2"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Anton&family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet"><link rel="stylesheet" href="/style.css?v=${CSSV}">
${ld.map((x) => `<script type="application/ld+json">${JSON.stringify(x).replace(/</g, '\\u003c')}</script>`).join('')}</head>`;
}
const navKeys = ['sale', 'rent', 'projects', 'guide', 'news', 'sell', 'contact'];
function header(lang, alt, cur) {
  const t = T[lang]; const lsw = LANGS.map((l) => `<a href="${alt[l]}"${l === lang ? ' class="on" aria-current="true"' : ''} hreflang="${l}">${l.toUpperCase()}</a>`).join('');
  return `<div class="tbar"><div class="wrap tbi"><a class="tad" href="${G.url}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.6"/></svg>ACC HOMES Altıntaş · Kardeş Kentler Cd. No:51, Aksu</a><span class="tr8"><a class="tph" href="tel:${PHONE.raw}">${ICO.ph}${PHONE.text}</a><a class="twa" href="https://wa.me/${PHONE.wa}" target="_blank" rel="noopener">${ICO.wa}WhatsApp</a><a class="tml" href="mailto:${MAIL}">${MAIL}</a><select class="cur" aria-label="Currency"><option value="TRY">₺ TRY</option><option value="USD">$ USD</option><option value="EUR">€ EUR</option></select><span class="lsw">${lsw}</span><a class="tig" href="${IG}" target="_blank" rel="noopener">${ICO.ig}@acc.altintas.realestate</a></span></div></div>
<header class="top"><div class="wrap hb"><a class="wm acclogo" href="${url(lang, 'home')}" aria-label="ACC ALTINTAŞ"><img src="/acc-kirmizi.svg" alt="ACC" width="57" height="40"><span class="lg-v">ALTINTAŞ</span></a>
<nav class="nav" aria-label="Menu">${navKeys.map((k) => `<a href="${url(lang, k)}"${cur === k ? ' aria-current="page"' : ''}>${t.nav[k]}</a>`).join('')}</nav>
<div class="hr"><a class="btn hcta" href="${url(lang, 'sell')}#form">${t.freeExp}</a><button class="burger" aria-label="Menu" aria-expanded="false"><i></i><i></i><i></i></button></div></div>
<div class="mpanel">${navKeys.map((k) => `<a href="${url(lang, k)}">${t.nav[k]}</a>`).join('')}<span class="lsw">${lsw}</span></div></header>`;
}
function footer(lang) {
  const t = T[lang];
  return `${newsBand({ lang, site: 'altintassatilikdaire.com', kvkk: KVKK[lang], next: url(lang, 'home') + '?bulten=1' })}${popBand(lang)}<footer class="ft"><div class="wrap fg"><div><a class="acclogo flogo" href="${url(lang, 'home')}" aria-label="ACC ALTINTAŞ"><img src="/acc-kirmizi.svg" alt="ACC" width="62" height="44"><span class="lg-v">ALTINTAŞ</span></a><p class="muted">${t.foot}</p></div>
<div><p class="fh">${t.brand}</p>${navKeys.map((k) => `<a href="${url(lang, k)}">${t.nav[k]}</a>`).join('')}<a href="${url(lang, 'ermenek')}">${t.nav.ermenek}</a><a href="${url(lang, 'kemeragzi')}">${t.nav.kemeragzi}</a></div>
<div><p class="fh">${t.other}</p><a href="${MAIN}${lang === 'tr' ? '/' : `/${lang}/`}" target="_blank" rel="noopener">ACC HOMES</a><a href="${VILLAS}${lang === 'tr' ? '/' : `/${lang}/`}" target="_blank" rel="noopener">ACC VILLAS</a><a href="https://alicanercan.com${lang === 'tr' ? '/' : `/${lang}/`}" target="_blank" rel="noopener">Ali Caner Can</a><a href="${t.guideUrl}" target="_blank" rel="noopener">${t.guide}</a></div>
<div><p class="fh">${t.nav.contact}</p><a href="tel:${PHONE.raw}">${PHONE.text}</a><a href="https://wa.me/${PHONE.wa}" target="_blank" rel="noopener">WhatsApp</a><a href="mailto:${MAIL}">${MAIL}</a><a href="${IG}" target="_blank" rel="noopener">Instagram</a></div></div>
<div class="wrap fb"><span>© ${new Date().getFullYear()} ACC HOMES International Real Estate</span><a href="${KVKK[lang]}" target="_blank" rel="noopener">${t.privacy}</a></div></footer>
${callPop({ lang, site: 'altintassatilikdaire.com', kvkk: KVKK[lang], next: url(lang, 'contact') + '?ok=1' })}<div class="dock"><a class="d-call" href="tel:${PHONE.raw}">${ICO.ph} ${t.call}</a><a class="d-wa" href="https://wa.me/${PHONE.wa}" target="_blank" rel="noopener">${ICO.wa} WhatsApp</a></div>
<script>(()=>{const b=document.querySelector('.burger'),p=document.querySelector('.mpanel');b&&b.addEventListener('click',()=>{const o=p.classList.toggle('open');b.setAttribute('aria-expanded',o)});
document.querySelectorAll('.gf').forEach(g=>{const bs=[...g.querySelectorAll('button')],cs=[...g.nextElementSibling.querySelectorAll('.lc')];bs.forEach(x=>x.onclick=()=>{bs.forEach(y=>y.classList.toggle('on',y===x));cs.forEach(c=>c.hidden=!(x.dataset.f==='*'||c.dataset.a===x.dataset.f))})});
if(/[?&]ok=1/.test(location.search))document.querySelectorAll('.okmsg').forEach(m=>{m.hidden=false;m.scrollIntoView({block:'center'})});
(()=>{const R=${JSON.stringify({ TRY: 1, USD: RATES.USD, EUR: RATES.EUR })},S={TRY:'₺',USD:'$',EUR:'€'},sel=document.querySelector('.cur');if(!sel)return;if(!R.USD){sel.style.display='none';return}let cur='${DEF_CUR[lang]}';try{cur=localStorage.getItem('cur')||cur}catch(e){}sel.value=cur;const nf=new Intl.NumberFormat('${lang === 'tr' ? 'tr-TR' : lang === 'ru' ? 'ru-RU' : 'en-US'}',{maximumFractionDigits:0});
const go=()=>document.querySelectorAll('.pz').forEach(e=>{if(!e.dataset.o)e.dataset.o=e.textContent;const p=+e.dataset.p,c=e.dataset.c;if(!R[c]||c===cur){e.textContent=e.dataset.o;e.title='';return}let v=p*R[c]/R[cur];v=v>1e5?Math.round(v/1000)*1000:Math.round(v);e.textContent='≈ '+S[cur]+' '+nf.format(v);e.title='${lang === 'tr' ? 'TCMB kuruyla yaklaşık' : lang === 'ru' ? 'Приблизительно по курсу ЦБ Турции' : 'Approximate, CBRT rate'}'});
sel.onchange=()=>{cur=sel.value;try{localStorage.setItem('cur',cur)}catch(e){}go()};go()})();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -40px'});document.querySelectorAll('.rv').forEach(x=>io.observe(x))})();</script>`;
}
function write(rel, html) { const f = path.join(OUT, rel, 'index.html'); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, html.replace(/<img (?!referrerpolicy)/g, '<img referrerpolicy="no-referrer" ')); }
function page({ lang, key, title, desc, ld = [], body }) {
  const canon = url(lang, key); const alt = Object.fromEntries(LANGS.map((l) => [l, url(l, key)]));
  write(canon.slice(1), enSpan(`${head({ lang, title, desc, canon, alt, ld })}<body>${header(lang, alt, key)}<main>${body}</main>${footer(lang)}</body></html>`));
  sitemap.push([canon, alt]);
}
const phero = (e, h, l) => `<section class="phero"><div class="wrap"><p class="eyebrow">${e}</p><h1>${h}</h1><p class="lead">${l}</p></div></section>`;


// ---------- rehber, haberler, proje rehberi ----------
const newsUrl = (lang, n) => `${url(lang, 'news')}${n.slug}/`;
const fdate = (d, lang) => new Date(d + 'T12:00:00').toLocaleDateString(lang === 'tr' ? 'tr-TR' : lang === 'ru' ? 'ru-RU' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
const newsCards = (lang, n = 6) => `<div class="nws">${NEWS.slice(0, n).map((x) => `<a class="nw rv" href="${newsUrl(lang, x)}"><small>${fdate(x.date, lang)}</small><h3>${esc(x[lang].t)}</h3><p>${esc(x[lang].s)}</p><span class="more">${T[lang].read} →</span></a>`).join('')}</div>`;
const guideBand = (lang) => { const t = T[lang]; return `<section class="sec bg2"><div class="wrap"><div class="sh"><div><h2>${t.guideT}</h2><p class="lead">${t.guideL}</p></div><a class="all" href="${url(lang, 'news')}">${t.newsT} →</a></div><div class="gb2"><a class="gcard rv" href="${url(lang, 'guide')}"><b>${GUIDE[lang].h}</b><span>${GUIDE[lang].secs.map(([h]) => h).slice(0, 5).join(' · ')}</span><em>${t.guideBtn} →</em></a>${newsCards(lang, 2)}</div></div></section>`; };
const dirBlock = (lang) => { const t = T[lang]; const cnt = (n) => AREA.filter((l) => l.proje && n.toLocaleLowerCase('tr').includes(l.proje.toLocaleLowerCase('tr'))).length;
  return `<section class="sec"><div class="wrap"><h2>${t.dirT}</h2><p class="lead">${t.dirL}</p><div class="dir">${PROJELER.map(([n, f, a]) => { const c = cnt(n); return `<div class="dp${a ? ' au' : ''}"><h3>${esc(n)}</h3>${f ? `<small>${esc(f)}</small>` : ''}${a ? `<em>${t.auth}</em>` : ''}${c ? `<i>${c} ${lang === 'tr' ? 'ilan' : lang === 'ru' ? 'объект.' : 'listings'}</i>` : ''}</div>`; }).join('')}</div>
<h3 class="mt">${t.firmT}</h3><p class="firms">${FIRMALAR.map((f) => `<span>${esc(f)}</span>`).join('')}</p></div></section>`; };
const landBand = (lang) => { const t = T[lang]; return `<section class="sec"><div class="wrap two2"><div class="lb2 rv"><h3>${t.landT}</h3><p>${t.landL}</p><a class="btn sm" href="${url(lang, 'contact')}">${t.nav.contact} →</a></div><div class="lb2 rv"><h3>${t.rentOutT}</h3><p>${t.rentOutL}</p><a class="btn sm" href="${url(lang, 'sell')}">${t.freeExp} →</a></div></div></section>`; };

const MAH = {
  ermenek: { n: 'Ermenek', tr: ['Ermenek Satılık ve Kiralık Daire | Aksu Antalya · ACC HOMES', 'Aksu Ermenek’te satılık ve kiralık daireler: Altıntaş’a komşu, havalimanına yakın yeni siteler ve projeler. Güncel ilanlar ve ücretsiz ekspertiz.', 'Ermenek’te satılık ve kiralık daireler', 'Ermenek, Altıntaş’a komşu Aksu mahallesidir; havalimanına, Lara’ya ve EXPO alanına yakınlığı, yeni ve site içi konutlarıyla Altıntaş pazarının doğal bir parçasıdır. Ermenek’teki güncel ilanlarımız ve bölge bilgisi aşağıda.'], en: ['Ermenek Apartments for Sale and Rent | Aksu, Antalya · ACC HOMES', 'Apartments for sale and rent in Ermenek, Aksu: next to Altıntaş, close to the airport, with new gated complexes and projects.', 'Apartments in Ermenek', 'Ermenek is the Aksu neighbourhood next to Altıntaş; close to the airport, Lara and EXPO, with new gated complexes, it is a natural part of the Altıntaş market.'], ru: ['Квартиры в Эрменеке, Аксу, Анталия | ACC HOMES', 'Квартиры на продажу и в аренду в Эрменеке (Аксу): рядом Алтынташ и аэропорт, новые комплексы.', 'Квартиры в Эрменеке', 'Эрменек — район Аксу рядом с Алтынташем, близко к аэропорту, Ларе и EXPO, с новыми комплексами.'] },
  kemeragzi: { n: 'Kemerağzı', tr: ['Kemerağzı Satılık ve Kiralık Daire | Aksu Antalya · ACC HOMES', 'Aksu Kemerağzı’nda satılık ve kiralık daireler: Kundu ve Lara sahiline yakın, havalimanı yanında yeni konutlar. Güncel ilanlar ve ücretsiz ekspertiz.', 'Kemerağzı’nda satılık ve kiralık daireler', 'Kemerağzı, Altıntaş’ın güneyinde, Kundu ve Lara sahil hattına yakın Aksu mahallesidir; havalimanı yanı başında, denize yakın yaşam ve yatırım arayanların bölgesidir. Kemerağzı’ndaki güncel ilanlarımız aşağıda.'], en: ['Kemerağzı Apartments for Sale and Rent | Aksu, Antalya · ACC HOMES', 'Apartments in Kemerağzı, Aksu: close to Kundu and the Lara coast, next to the airport.', 'Apartments in Kemerağzı', 'Kemerağzı lies south of Altıntaş near Kundu and the Lara coast, right next to the airport.'], ru: ['Квартиры в Кемерагзы, Аксу, Анталия | ACC HOMES', 'Квартиры в Кемерагзы (Аксу): рядом Кунду, побережье Лары и аэропорт.', 'Квартиры в Кемерагзы', 'Кемерагзы — район южнее Алтынташа, рядом Кунду, побережье Лары и аэропорт.'] },
};
// ---------- sayfalar ----------
for (const lang of LANGS) {
  const t = T[lang];
  page({ lang, key: 'home', title: t.homeTitle, desc: t.homeDesc, ld: [ORG(lang), { '@context': 'https://schema.org', '@type': 'WebSite', name: t.brand, url: DOMAIN + url(lang, 'home'), inLanguage: lang }, itemList(SALE, lang), faqLdOf([...T[lang].faq, ...dataFaq(SALE, lang, TODAY(lang), fmtTL)])], body: `
<section class="hero3"><img src="${MAIN}/img/primelara/hero.webp" alt="${esc(t.h1)}" fetchpriority="high"><div class="wrap hc3"><p class="eyebrow">${t.by} · Aksu / Antalya</p><h1>${t.h1}</h1><p class="hl3">${t.lead}</p></div>${hsearch(lang)}</section>
<section class="wrap intentsec"><div class="intents">${INTENT[lang].map(([k, l], n) => `<a class="intent" href="${url(lang, k)}${n === 2 ? '#form' : ''}"><i>${INTENT_ICO[n]}</i><span>${l}</span></a>`).join('')}</div></section>
<section class="stats2"><div class="wrap sg2"><div class="st"><b>${SALE.length}</b><span>${t.statSale}</span></div><div class="st"><b>${RENT.length}</b><span>${t.statRent}</span></div><div class="st"><b>${t.proj.length}</b><span>${t.statProj}</span></div><a class="st gst" href="${G.url}" target="_blank" rel="noopener"><b>${ICO.g}${lang === 'en' ? G.rating : String(G.rating).replace('.', ',')} ★</b><span>${G.count} ${t.statG}</span></a></div></section>
<section class="sec" id="ilanlar"><div class="wrap"><div class="sh"><div><h2>${t.saleT}</h2><p class="lead">${t.saleL}</p></div><a class="all" href="${url(lang, 'sale')}">${t.all} (${SALE.length}) →</a></div>${igrid(SALE, lang, 9)}</div></section>
${projBlock(lang)}
<section class="sec"><div class="wrap"><div class="sh"><div><h2>${t.rentT}</h2><p class="lead">${t.rentL}</p></div><a class="all" href="${url(lang, 'rent')}">${t.all} (${RENT.length}) →</a></div>${igrid(RENT, lang, 6)}</div></section>
<section class="sec bg2"><div class="wrap"><h2>${t.whyT}</h2><div class="vals">${t.why.map(([h, p]) => `<div class="val rv"><h3>${h}</h3><p>${p}</p></div>`).join('')}</div><p class="center"><a class="btn ghost" href="${t.guideUrl}" target="_blank" rel="noopener">${t.guide} →</a></p></div></section>
${igLive(lang)}
${guideBand(lang)}
${sellBand(lang)}
${landBand(lang)}
${homeSeo(lang)}
${faqHtml(T[lang].faqT, [...T[lang].faq, ...dataFaq(SALE, lang, TODAY(lang), fmtTL)])}
${reviews(lang)}` });
  for (const L of LIVE) {
    const list = L.list.length ? L.list : SALE; const items = dataFaq(list.filter((l) => l.tip === 'Satılık').length >= 3 ? list.filter((l) => l.tip === 'Satılık') : list, lang, TODAY(lang), fmtTL);
    const title = `${L.h[lang]}${lang === 'tr' && L.k !== 'l_yab' ? ' İlanları' : ''} | ACC HOMES Altıntaş`;
    page({ lang, key: L.k, title, desc: L.p[lang].slice(0, 155), ld: [crumbs(lang, L.k), itemList(list, lang), ...(items.length ? [faqLdOf(items)] : [])], body: `${phero(t.by, L.h[lang], L.p[lang])}<section class="sec tight"><div class="wrap">${listLay(lang, list)}</div></section>${faqHtml(SEOFAQ_T[lang], items)}${sellBand(lang)}` });
  }

  const G2 = GUIDE[lang];
  page({ lang, key: 'guide', title: G2.title, desc: G2.desc, ld: [crumbs(lang, 'guide'), { '@context': 'https://schema.org', '@type': 'Article', headline: G2.h, description: G2.desc, inLanguage: lang, author: { '@type': 'Person', name: 'Ali Caner Can', url: 'https://alicanercan.com/' }, publisher: { '@id': `${DOMAIN}/#org` }, about: { '@type': 'Place', name: 'Altıntaş, Aksu, Antalya' }, dateModified: new Date().toISOString().slice(0, 10) }], body: `${phero(t.nav.guide, G2.h, G2.lead)}
<section class="sec tight"><div class="wrap glay"><article class="prose">${G2.secs.map(([h, x]) => `<h2>${h}</h2>${x.replace(/\{\{NEWS\}\}/g, url(lang, 'news'))}`).join('')}<p class="sig">${lang === 'tr' ? 'Ali Caner Can ve ACC HOMES Altıntaş ekibinin saha deneyimleriyle hazırlanmıştır.' : lang === 'ru' ? 'Подготовлено Али Джанер Джаном и командой ACC HOMES Altıntaş.' : 'Written by Ali Caner Can and the ACC HOMES Altıntaş team from first-hand experience.'}</p></article>
<aside class="gside"><b>${t.nav.sale}</b><a href="${url(lang, 'sale')}">${t.saleT} (${SALE.length})</a><a href="${url(lang, 'rent')}">${t.rentT} (${RENT.length})</a><b>${t.newsT}</b>${NEWS.slice(0, 3).map((x) => `<a href="${newsUrl(lang, x)}">${esc(x[lang].t)}</a>`).join('')}<b>${t.nav.sell}</b><a href="${url(lang, 'sell')}">${t.freeExp}</a></aside></div></section>${landBand(lang)}` });
  page({ lang, key: 'news', title: t.newsTitle, desc: t.newsDesc, ld: [crumbs(lang, 'news')], body: `${phero(t.by, t.newsT, t.newsL)}<section class="sec tight"><div class="wrap">${newsCards(lang, 50)}</div></section>` });
  for (const n of NEWS) {
    const c = n[lang]; const canon = newsUrl(lang, n); const alt = Object.fromEntries(LANGS.map((l) => [l, newsUrl(l, n)])); const src = n.tr.src || [];
    const ld = [{ '@context': 'https://schema.org', '@type': 'NewsArticle', headline: c.t, description: c.s, datePublished: n.date, dateModified: n.date, inLanguage: lang, author: { '@type': 'Person', name: 'Ali Caner Can', url: 'https://alicanercan.com/' }, publisher: { '@id': `${DOMAIN}/#org`, '@type': 'Organization', name: 'ACC HOMES Altıntaş' }, mainEntityOfPage: DOMAIN + canon, image: `${MAIN}/img/primelara/hero.webp` }, { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: t.brand, item: DOMAIN + url(lang, 'home') }, { '@type': 'ListItem', position: 2, name: t.newsT, item: DOMAIN + url(lang, 'news') }, { '@type': 'ListItem', position: 3, name: c.t, item: DOMAIN + canon }] }];
    write(canon.slice(1), enSpan(`${head({ lang, title: `${c.t} | ACC HOMES Altıntaş`.slice(0, 110), desc: c.s, canon, alt, ld })}<body>${header(lang, alt, 'news')}<main><section class="phero"><div class="wrap narrow"><p class="eyebrow">${t.newsT} · ${fdate(n.date, lang)}</p><h1>${esc(c.t)}</h1><p class="lead">${esc(c.s)}</p></div></section><section class="sec tight"><div class="wrap narrow prose">${c.html}${src.length ? `<h2>${t.srcT}</h2><ul class="srcs">${src.map(([a, u]) => `<li><a href="${u}" target="_blank" rel="noopener nofollow">${esc(a)}</a></li>`).join('')}</ul>` : ''}<div class="ctas"><a class="btn" href="${url(lang, 'contact')}">${t.nav.contact} →</a><a class="btn ghost" href="${url(lang, 'guide')}">${t.nav.guide}</a></div></div></section></main>${footer(lang)}</body></html>`));
    sitemap.push([canon, alt]);
  }

  for (const k of ['ermenek', 'kemeragzi']) {
    const m = MAH[k]; const [ti, de, h, l] = m[lang]; const list = AREA.filter((x) => x.mahalle === m.n);
    page({ lang, key: k, title: ti, desc: de, ld: [crumbs(lang, k), itemList(list.length ? list : SALE, lang)], body: `${phero(t.by, h, l)}<section class="sec tight"><div class="wrap">${list.length ? grid(list, lang) : `<p class="none">${t.none}</p>`}<h2 class="mt">${lang === 'tr' ? 'Altıntaş’taki ilanlarımız' : lang === 'ru' ? 'Объекты в Алтынташе' : 'Our listings in Altıntaş'}</h2>${igrid(SALE.filter((x) => x.mahalle === 'Altıntaş'), lang, 6)}<p class="center"><a class="btn ghost" href="${url(lang, 'guide')}">${t.guideBtn} →</a></p></div></section>${sellBand(lang)}${landBand(lang)}` });
  }
  page({ lang, key: 'sale', title: t.saleTitle, desc: t.saleDesc, ld: [crumbs(lang, 'sale'), itemList(SALE, lang)], body: `${phero(t.by, t.saleT, t.saleL)}<section class="sec tight"><div class="wrap">${listLay(lang, SALE)}<p class="center"><a class="btn ghost" href="${MAIN}${lang === 'tr' ? '/ilanlar/' : `/${lang}/${lang === 'en' ? 'listings' : 'obekty'}/`}?ilce=Aksu" target="_blank" rel="noopener">${t.allOn} →</a></p></div></section>${sellBand(lang)}` });
  page({ lang, key: 'rent', title: t.rentTitle, desc: t.rentDesc, ld: [crumbs(lang, 'rent'), itemList(RENT, lang)], body: `${phero(t.by, t.rentT, t.rentL)}<section class="sec tight"><div class="wrap">${listLay(lang, RENT)}</div></section><section class="sec bg2"><div class="wrap two"><div><h2>${t.contactH}</h2><p class="lead">${t.contactL}</p></div>${form(lang, 1)}</div></section>` });
  page({ lang, key: 'projects', title: t.projTitle, desc: t.projDesc, ld: [crumbs(lang, 'projects'), { '@context': 'https://schema.org', '@type': 'ItemList', name: t.dirT, itemListElement: PROJELER.map(([n, f], i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'Residence', name: n, ...(f ? { brand: { '@type': 'Organization', name: f } } : {}), address: { '@type': 'PostalAddress', addressLocality: 'Altıntaş, Aksu', addressRegion: 'Antalya', addressCountry: 'TR' } } })) }], body: `${phero(t.by, t.projT, t.projL)}${projBlock(lang, true)}${dirBlock(lang)}<section class="sec bg2"><div class="wrap two"><div><h2>${t.contactH}</h2><p class="lead">${t.contactL}</p></div>${form(lang, 4)}</div></section>` });
  page({ lang, key: 'sell', title: t.sellTitle, desc: t.sellDesc, ld: [crumbs(lang, 'sell'), { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Real estate sales', name: t.sellTitle, provider: { '@id': `${DOMAIN}/#org` }, areaServed: { '@type': 'Place', name: 'Altıntaş, Aksu, Antalya' } }], body: `${phero(t.nav.sell, t.sellH, t.sellLead)}
<section class="sec tight"><div class="wrap narrow"><ol class="tl">${t.steps.map(([h, p], i) => `<li class="rv"><span class="ty">0${i + 1}</span><div><h3>${h}</h3><p>${p}</p></div></li>`).join('')}</ol></div></section>
<section class="sec bg2"><div class="wrap two"><div><h2>${t.sellBtn}</h2><p class="lead">${t.sellL}</p></div>${form(lang, 2)}</div></section>${landBand(lang)}${reviews(lang)}` });
  page({ lang, key: 'contact', title: t.contactTitle, desc: t.contactDesc, ld: [crumbs(lang, 'contact'), ORG(lang)], body: `${phero(t.nav.contact, t.contactH, t.contactL)}
<section class="sec tight"><div class="wrap two"><div><div class="cinfo"><a class="ci" href="https://wa.me/${PHONE.wa}" target="_blank" rel="noopener">${ICO.wa}<span><b>WhatsApp</b>${PHONE.text}</span></a><a class="ci" href="tel:${PHONE.raw}">${ICO.ph}<span><b>${t.form.phone}</b>${PHONE.text}</span></a><a class="ci" href="${IG}" target="_blank" rel="noopener">${ICO.ig}<span><b>Instagram</b>@acc.altintas.realestate</span></a></div>
<h3 class="mt">${t.offT}</h3>${t.off.map(([h, p]) => `<p><b>${h}</b><br>${p}</p>`).join('')}</div>${form(lang)}</div></section>
<section class="sec bg2"><div class="wrap"><iframe class="map" src="${SITE.google.embedUrl}" title="ACC Plaza" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div></section>` });
}

// ---------- statik dosyalar ----------
fs.copyFileSync(path.join(HERE, 'style.css'), path.join(OUT, 'style.css'));
for (const f of ['favicon.ico', 'favicon-32.png', 'favicon.svg', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png']) fs.copyFileSync(path.join(ROOT, 'villas/static', f), path.join(OUT, f));
if (fs.existsSync(path.join(HERE, 'static'))) fs.cpSync(path.join(HERE, 'static'), OUT, { recursive: true });
const php = fs.readFileSync(path.join(ROOT, 'server/form.php'), 'utf8')
  .replace("'bulten'];", "'bulten', 'altintas-talep'];")
  .replace("'From: ACC HOMES Web <'", "'From: ACC HOMES Altintas <'")
  .replace("$sent = @mail(", "$sent = function_exists('mail') && @mail(")
  .replace("$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '';", "$ip = $_SERVER['REMOTE_ADDR'] ?? '';")
  .replace("$next = (string)($_POST['_next'] ?? '/');", "$next = (string)($_POST['_next'] ?? '/');\n$org = (string)($_SERVER['HTTP_ORIGIN'] ?? $_SERVER['HTTP_REFERER'] ?? '');\nif ($org !== '' && !preg_match('~^https?://([a-z0-9-]+\\.)?(altintassatilikdaire\\.com|acchomesantalya\\.com)(/|$)~i', $org)) { header('Location: /', true, 303); exit; }");
fs.writeFileSync(path.join(OUT, 'form.php'), php);

// ---------- ilan detay sayfaları (yalnızca panelden "Altıntaş sitesine de gönder" ile gelenler) ----------
const DL = {
  tr: { facts: 'İlan bilgileri', feat: 'Özellikler', desc: 'Açıklama', id: 'İlan no', oda: 'Oda', brut: 'Brüt', net: 'Net', kat: 'Bulunduğu kat', katS: 'Kat sayısı', yas: 'Bina yaşı', yas0: 'Sıfır', isitma: 'Isıtma', banyo: 'Banyo', site: 'Site içinde', esya: 'Eşya', otopark: 'Otopark', asansor: 'Asansör', aidat: 'Aidat', tapu: 'Tapu durumu', yes: 'Evet', ask: 'Bu ilanı sor', waMsg: (id, t) => `Merhaba, ${id} numaralı ilan hakkında bilgi almak istiyorum: ${t}`, call: 'Ara', sim: 'Benzer ilanlar', back: 'Tüm ilanlar', formT: 'Bu ilan için bilgi isteyin', alsoMain: 'Bu ilan ACC HOMES ana sitesinde de yayında', photo: 'fotoğraf' },
  en: { facts: 'Key facts', feat: 'Features', desc: 'Description', id: 'Listing no', oda: 'Rooms', brut: 'Gross', net: 'Net', kat: 'Floor', katS: 'Floors in building', yas: 'Building age', yas0: 'New', isitma: 'Heating', banyo: 'Bathrooms', site: 'In a complex', esya: 'Furniture', otopark: 'Parking', asansor: 'Lift', aidat: 'Service charge', tapu: 'Title deed', yes: 'Yes', ask: 'Ask about this listing', waMsg: (id, t) => `Hello, I would like information about listing ${id}: ${t}`, call: 'Call', sim: 'Similar listings', back: 'All listings', formT: 'Request information on this listing', alsoMain: 'Also listed on the ACC HOMES main website', photo: 'photos' },
  ru: { facts: 'Основные данные', feat: 'Особенности', desc: 'Описание', id: 'Номер объекта', oda: 'Комнаты', brut: 'Общая', net: 'Полезная', kat: 'Этаж', katS: 'Этажность', yas: 'Возраст дома', yas0: 'Новый', isitma: 'Отопление', banyo: 'Санузлы', site: 'В комплексе', esya: 'Мебель', otopark: 'Парковка', asansor: 'Лифт', aidat: 'Обслуживание', tapu: 'Тапу', yes: 'Да', ask: 'Спросить об объекте', waMsg: (id, t) => `Здравствуйте, меня интересует объект ${id}: ${t}`, call: 'Позвонить', sim: 'Похожие объекты', back: 'Все объекты', formT: 'Запросить информацию об объекте', alsoMain: 'Объект также опубликован на основном сайте ACC HOMES', photo: 'фото' },
};
for (const l of AREA.filter((x) => x.own)) {
  const v = l.row;
  for (const lang of LANGS) {
    const t = T[lang], d = DL[lang], title = l.baslik[lang], P = genText(l, lang), canon = l.url[lang];
    const fx = [[d.id, l.id], [d.oda, l.oda], [d.brut, l.brut && `${l.brut} m²`], [d.net, l.net && `${l.net} m²`], [d.kat, v.kat], [d.katS, v.katSayisi], [d.yas, v.yas === 0 || v.yas === '0' ? d.yas0 : v.yas], [d.banyo, v.banyo],
      [d.isitma, v.isitma !== 'Yok' && valL(v.isitma, lang)], [d.esya, valL(v.esya, lang)], [d.otopark, valL(v.otopark, lang)], [d.asansor, valL(v.asansor, lang)], [d.tapu, valL(v.tapu, lang)], [d.site, v.site === 'Evet' && d.yes], [d.aidat, v.aidat && `${Number(v.aidat).toLocaleString('tr-TR')} TL`]].filter(([, x]) => x !== null && x !== undefined && x !== false && x !== '');
    const feats = [...new Set((v.ozellikler || []).filter((x) => !/^(Kuzey|Güney|Doğu|Batı)$/.test(x)).map((x) => featL(x, lang)).filter(Boolean))];
    const wa = `https://wa.me/${PHONE.wa}?text=${encodeURIComponent(d.waMsg(l.id, DOMAIN + canon))}`;
    const sim = AREA.filter((x) => x !== l && x.tip === l.tip).sort((a, b) => Math.abs((a.fiyat || 0) - (l.fiyat || 0)) - Math.abs((b.fiyat || 0) - (l.fiyat || 0))).slice(0, 3);
    const listKey = l.tip === 'Kiralık' ? 'rent' : 'sale';
    const ld = [{ '@context': 'https://schema.org', '@type': 'RealEstateListing', name: title, description: P.join(' '), url: DOMAIN + canon, image: l.fotos.slice(0, 6), datePosted: String(v.created_at || '').slice(0, 10) || undefined, inLanguage: lang,
      offers: { '@type': 'Offer', price: l.fiyat || undefined, priceCurrency: l.para === 'TL' ? 'TRY' : l.para, availability: 'https://schema.org/InStock', businessFunction: l.tip === 'Kiralık' ? 'http://purl.org/goodrelations/v1#LeaseOut' : 'http://purl.org/goodrelations/v1#Sell', seller: { '@id': `${DOMAIN}/#org` } },
      about: { '@type': 'Accommodation', numberOfRooms: l.oda || undefined, floorSize: l.brut ? { '@type': 'QuantitativeValue', value: l.brut, unitCode: 'MTK' } : undefined, address: { '@type': 'PostalAddress', addressLocality: `${l.mahalle}, Aksu`, addressRegion: 'Antalya', addressCountry: 'TR' } } },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: t.brand, item: DOMAIN + url(lang, 'home') }, { '@type': 'ListItem', position: 2, name: listKey === 'rent' ? t.rentT : t.saleT, item: DOMAIN + url(lang, listKey) }, { '@type': 'ListItem', position: 3, name: title, item: DOMAIN + canon }] }];
    const body = `<section class="ilh"><div class="wrap"><p class="eyebrow"><a href="${url(lang, listKey)}">← ${d.back}</a> · ${esc(mahOf(l, lang))}, Aksu</p><h1>${esc(title)}</h1><p class="ilp"><b>${fmt(l, lang)}</b>${l.kapora ? `<i class="kp">${lang === 'tr' ? 'Kaporalı' : lang === 'ru' ? 'Задаток внесён' : 'Under offer'}</i>` : ''}<span>${[l.oda, l.brut ? `${l.brut} m²` : ''].filter(Boolean).join(' · ')}</span></p></div></section>
<section class="sec tight"><div class="wrap ilg"><div><div class="igal" data-gal><div class="gm"><img src="${esc(l.fotos[0])}" alt="${esc(title)}" width="1200" height="900" fetchpriority="high"><span class="gn">1 / ${l.fotos.length}</span>${l.fotos.length > 1 ? '<button class="gp" aria-label="‹">‹</button><button class="gx" aria-label="›">›</button>' : ''}</div>${l.fotos.length > 1 ? `<div class="gt">${l.fotos.map((f, i) => `<button${i ? '' : ' class="on"'} data-i="${i}"><img src="${esc(f)}" alt="${esc(title)} ${i + 1}" width="120" height="90" loading="lazy"></button>`).join('')}</div>` : ''}</div>
<h2>${d.desc}</h2><div class="prose">${P.map((x) => `<p>${esc(x)}</p>`).join('')}</div>${feats.length ? `<h2>${d.feat}</h2><ul class="fts">${feats.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}</div>
<aside class="ils"><div class="ilbox"><h2>${d.facts}</h2><dl>${fx.map(([k, x]) => `<dt>${k}</dt><dd>${esc(x)}</dd>`).join('')}</dl><a class="btn wa" href="${wa}" target="_blank" rel="noopener">${ICO.wa} ${d.ask}</a><a class="btn ghost" href="tel:${PHONE.raw}">${ICO.ph} ${d.call} ${PHONE.text}</a></div></aside></div></section>
${sim.length ? `<section class="sec bg2"><div class="wrap"><h2>${d.sim}</h2><div class="lg">${sim.map((x) => card(x, lang)).join('')}</div></div></section>` : ''}
<section class="sec"><div class="wrap two"><div><h2>${d.formT}</h2><p class="lead">${esc(title)} · ${l.id}</p></div>${form(lang, l.tip === 'Kiralık' ? 1 : 0).replace('<input type="hidden" name="dil"', `<input type="hidden" name="ilan" value="${l.id}"><input type="hidden" name="dil"`).replace('</textarea>', `${esc(d.waMsg(l.id, DOMAIN + canon))}</textarea>`)}</div></section>
<script>(()=>{const g=document.querySelector('[data-gal]');if(!g)return;const m=g.querySelector('.gm img'),n=g.querySelector('.gn'),b=[...g.querySelectorAll('.gt button')],s=b.map(x=>x.querySelector('img').src);let i=0;const go=k=>{if(!s.length)return;i=(k+s.length)%s.length;m.src=s[i];n.textContent=(i+1)+' / '+s.length;b.forEach((x,j)=>x.classList.toggle('on',j===i));b[i].scrollIntoView({block:'nearest',inline:'center'})};b.forEach((x,j)=>x.onclick=()=>go(j));const p=g.querySelector('.gp'),x=g.querySelector('.gx');p&&(p.onclick=()=>go(i-1));x&&(x.onclick=()=>go(i+1));let t0=null;m.addEventListener('touchstart',e=>t0=e.touches[0].clientX,{passive:true});m.addEventListener('touchend',e=>{if(t0===null)return;const dx=e.changedTouches[0].clientX-t0;if(Math.abs(dx)>40)go(i+(dx<0?1:-1));t0=null})})();</script>`;
    const alt = l.url;
    const desc = `${P[0]} ${P[1] || ''}`.replace(/\s+/g, ' ').slice(0, 155);
    write(canon.slice(1), enSpan(`${head({ lang, title: `${title} | ${l.id} | ACC HOMES Altıntaş`.slice(0, 110), desc, canon, alt, ld, img: l.fotos[0] })}<body>${header(lang, alt, listKey)}<main>${body}</main>${footer(lang)}</body></html>`));
    sitemap.push([canon, alt]);
  }
}
{ const miss = missingFeat(AREA.filter((x) => x.own).flatMap((x) => x.row.ozellikler || [])); if (miss.length) console.warn('EN/RU çevirisi olmayan özellikler:', miss.join(', ')); }
console.log(`İlan sayfaları: ${AREA.filter((x) => x.own).length} ilan × 3 dil`);

// 404, sitemap, robots, .htaccess
fs.writeFileSync(path.join(OUT, '404.html'), `${head({ lang: 'tr', title: 'Sayfa bulunamadı | Altıntaş Satılık Daire', desc: '', canon: '/404', alt: { tr: '/', en: '/en/', ru: '/ru/' }, ld: [] }).replace('index,follow,max-image-preview:large', 'noindex')}<body>${header('tr', { tr: '/', en: '/en/', ru: '/ru/' }, '')}<main><section class="phero"><div class="wrap"><h1>Sayfa bulunamadı</h1><p class="lead">Aradığınız sayfa taşınmış olabilir. Altıntaş’taki güncel ilanlara göz atın.</p><div class="ctas"><a class="btn" href="/satilik-daireler/">Satılık daireler →</a><a class="btn ghost" href="/">Ana sayfa</a></div></div></section></main>${footer('tr')}</body></html>`);
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemap.map(([u, a]) => `<url><loc>${DOMAIN}${u}</loc><lastmod>${today}</lastmod>${LANGS.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${DOMAIN}${a[l]}"/>`).join('')}</url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /wp-admin/\nSitemap: ${DOMAIN}/sitemap.xml\n`);
// Eski WordPress adresleri → yeni sayfalar (301). Liste: altintas/eski-adresler.txt ("eski-yol yeni-yol", satır başına bir)
const OLD = fs.existsSync(path.join(HERE, 'eski-adresler.txt')) ? fs.readFileSync(path.join(HERE, 'eski-adresler.txt'), 'utf8').split('\n').map((x) => x.trim().split(/\s+/)).filter((x) => x.length === 2 && !x[0].startsWith('#')) : [];
fs.writeFileSync(path.join(OUT, '.htaccess'), `DirectoryIndex index.html\nRewriteEngine On\nRewriteCond %{HTTPS} off [OR]\nRewriteCond %{HTTP_HOST} ^www\\. [NC]\nRewriteRule ^ https://altintassatilikdaire.com%{REQUEST_URI} [L,R=301]\n${OLD.map(([a, b]) => `RewriteRule ^${a.replace(/^\//, '').replace(/\/$/, '')}/?$ ${b} [L,R=301]`).join('\n')}\nRewriteRule ^(xmlrpc\\.php|wp-login\\.php|wp-json(/.*)?|feed/?|wp-content/uploads/.*\\.php)$ - [F,L]\nRewriteRule ^(ilan|emlak|property|properties|property-type|property-status|property-city)/.*$ /satilik-daireler/ [L,R=301]\nErrorDocument 404 /404.html\nOptions -Indexes\nServerSignature Off\n<FilesMatch "(^\\.|\\.(md|mjs|json|log|csv|bak|sql|sh|ini|env)$)">\nRequire all denied\n</FilesMatch>\n<Files "wp-config.php">\nRequire all denied\n</Files>\n<IfModule mod_headers.c>\nHeader always set X-Content-Type-Options "nosniff"\nHeader always set X-Frame-Options "SAMEORIGIN"\nHeader always set Referrer-Policy "strict-origin-when-cross-origin"\nHeader always set Strict-Transport-Security "max-age=31536000"\nHeader unset X-Powered-By\n</IfModule>\n<IfModule mod_expires.c>\nExpiresActive On\nExpiresByType image/webp "access plus 30 days"\nExpiresByType text/css "access plus 7 days"\nExpiresByType text/html "access plus 0 seconds"\n</IfModule>\n<IfModule mod_headers.c>\n<FilesMatch "\\.html$">\nHeader set Cache-Control "no-cache"\n</FilesMatch>\n</IfModule>\n`);
console.log(`OK — ${sitemap.length} sayfa`);
