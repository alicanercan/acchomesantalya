// altintassatilikdaire.com — ACC HOMES Altıntaş: Antalya Aksu Altıntaş'a özel satılık/kiralık daire ve proje sitesi (TR/EN/RU).
// İlanlar acchomesantalya.com/ilan-index.json'dan derlemede çekilir; ilan detayları ACC HOMES'ta (tek kaynak, kopya içerik yok).
// Çalıştır: node altintas/build.mjs  →  altintas/dist
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { enSpan } from '../en-span.mjs';
import { NEWS, GUIDE, PROJELER, FIRMALAR } from './content.mjs';

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
const G = { url: SITE.google.mapsUrl, rating: SITE.google.rating, count: SITE.google.reviews };
const REVIEWS = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/reviews.json'), 'utf8'));
const LANGS = ['tr', 'en', 'ru'];
const BASE = { tr: '', en: '/en', ru: '/ru' };
const SEG = {
  home: { tr: '', en: '', ru: '' },
  sale: { tr: 'satilik-daireler', en: 'apartments-for-sale', ru: 'kvartiry-na-prodazhu' },
  rent: { tr: 'kiralik-daireler', en: 'apartments-for-rent', ru: 'arenda-kvartir' },
  projects: { tr: 'projeler', en: 'projects', ru: 'proekty' },
  guide: { tr: 'bolge-rehberi', en: 'area-guide', ru: 'gid-po-rajonu' },
  news: { tr: 'bolge-haberleri', en: 'area-news', ru: 'novosti-rajona' },
  sell: { tr: 'evinizi-satin', en: 'sell-your-home', ru: 'prodat-kvartiru' },
  contact: { tr: 'iletisim', en: 'contact', ru: 'kontakty' },
};
const url = (lang, k) => (SEG[k][lang] ? `${BASE[lang]}/${SEG[k][lang]}/` : `${BASE[lang]}/`);
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const sitemap = [];

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

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
const AREA = IDX.ilanlar.filter((l) => l.ilce === 'Aksu').sort((a, b) => (b.mahalle === 'Altıntaş') - (a.mahalle === 'Altıntaş') || (b.fiyat > 0) - (a.fiyat > 0));
const SALE = AREA.filter((l) => l.tip === 'Satılık');
const RENT = AREA.filter((l) => l.tip === 'Kiralık');
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
    nav: { sale: 'Satılık', rent: 'Kiralık', projects: 'Projeler', guide: 'Bölge rehberi', news: 'Haberler', sell: 'Evinizi satın', contact: 'İletişim' },
    homeTitle: 'Altıntaş Satılık Daire | Antalya Aksu Altıntaş Emlak · ACC HOMES', homeDesc: 'Antalya Aksu Altıntaş’ta satılık ve kiralık daireler, yetkili projeler ve bölge rehberi. Altıntaş satış ofisimiz ve ACC HOMES güvencesiyle.',
    h1: 'Altıntaş’ta satılık ve kiralık daireler', lead: 'Antalya’nın en hızlı büyüyen konut bölgesi Altıntaş’ta güncel ilanlar, yetkili projeler ve sahadan bilgi. Altıntaş satış ofisimiz ve ACC HOMES ekibiyle alımdan tapuya kadar yanınızdayız.',
    ctaSale: 'Satılık ilanlar', ctaWa: 'WhatsApp ile sor', statSale: 'satılık ilan', statRent: 'kiralık ilan', statProj: 'yetkili proje', statG: 'Google yorumu (ACC HOMES)',
    saleT: 'Altıntaş satılık daire ilanları', saleL: 'Altıntaş ve Aksu’daki satılık daire, villa ve arsa ilanlarımız. İlan detayları ACC HOMES sitesinde açılır.',
    rentT: 'Altıntaş kiralık daire ilanları', rentL: 'Altıntaş ve Aksu’da kiralık daireler; site içi, havuzlu, eşyalı ve eşyasız seçenekler.',
    all: 'Tümü', allOn: 'ACC HOMES’ta tüm Aksu ilanları', none: 'Şu an bu kategoride yayında ilan yok. Talebinizi bırakın, uygun ilan çıktığında ilk size haber verelim.',
    projT: 'Altıntaş’ta yetkili projelerimiz', projL: 'Satış ve pazarlamasını ACC HOMES olarak yürüttüğümüz Altıntaş projeleri.',
    proj: [['Prime Lara', 'Ekiciler Grup · daire, villa ve dükkân', 'prime-lara-altintas', '/img/primelara/hero.webp'], ['Falez Manzara', 'Ünlütürk İnşaat · site içi daireler', 'falez-manzara-altintas', '/img/falez/dis-1.webp']],
    projMore: 'Projeyi incele',
    whyT: 'Neden Altıntaş', why: [['Havalimanına ve Lara’ya yakın', 'Antalya Havalimanı, Lara sahili ve Kundu’ya kısa mesafe; sık seyahat edenler ve yabancı alıcılar için pratik bir konum.'], ['Yeni ve site içi konut', 'Bölgedeki konut stoğunun büyük bölümü havuzlu, güvenlikli, otoparklı yeni sitelerden oluşur.'], ['Kira talebi', '1+1 ve 2+1 dairelerde havalimanı, turizm ve sağlık çalışanlarından gelen sürekli kira talebi.'], ['Gelişen altyapı', 'Yeni yollar, okullar ve ticari alanlarla bölge her yıl biraz daha şehirle bütünleşiyor.']],
    guide: 'Ayrıntılı Altıntaş rehberi', guideUrl: `${MAIN}/altintas-rehberi/`,
    sellT: 'Altıntaş’ta evinizi mi satıyorsunuz?', sellL: 'Altıntaş’ta satılan ve satıştaki emsallerle fiyatlıyor, profesyonel çekim ve yerli-yabancı alıcı ağımızla satıyoruz.', sellBtn: 'Ücretsiz değerleme isteyin',
    sellTitle: 'Altıntaş’ta Evinizi Satın | Ücretsiz Değerleme · ACC HOMES', sellDesc: 'Antalya Aksu Altıntaş’ta dairenizi, villanızı ya da dükkânınızı satmak mı istiyorsunuz? Emsal analizli değerleme, profesyonel tanıtım ve geniş alıcı ağı.',
    sellH: 'Altıntaş’ta evinizi doğru fiyata satalım', sellLead: 'Altıntaş’ta hangi sitenin, hangi cephenin, hangi katın ne ettiğini sahadan biliyoruz. Mülkünüzü yerinde görüp emsallerle değerlendiriyor, profesyonel çekim, ACC HOMES ve portallardaki ilanlar ve 10 dilde alıcı ağımızla satışa çıkarıyoruz.',
    steps: [['Yerinde görüşme', 'Mülkü görüyor, beklentinizi ve takviminizi dinliyoruz.'], ['Emsal analizi', 'Altıntaş’taki satılan ve satıştaki benzer dairelerle yazılı fiyat önerisi.'], ['Tanıtım', 'Profesyonel fotoğraf ve video, TR-EN-RU ilan metinleri, ACC HOMES ve portallar.'], ['Satış ve tapu', 'Gösterimler, pazarlık, sözleşme ve tapu devri birlikte.']],
    saleTitle: 'Altıntaş Satılık Daire İlanları | Antalya Aksu · ACC HOMES', saleDesc: 'Antalya Aksu Altıntaş’ta satılık daire, villa ve arsa ilanları: güncel fiyatlar, site içi havuzlu daireler ve yetkili projeler.',
    rentTitle: 'Altıntaş Kiralık Daire İlanları | Antalya Aksu · ACC HOMES', rentDesc: 'Antalya Aksu Altıntaş’ta kiralık daireler: site içi, havuzlu, eşyalı ve eşyasız güncel ilanlar.',
    projTitle: 'Altıntaş Projeleri | Prime Lara, Falez Manzara · ACC HOMES', projDesc: 'Antalya Altıntaş’ta ACC HOMES’un yetkili olduğu konut projeleri: Prime Lara ve Falez Manzara. Fiyat listesi ve yerinde gösterim için bize ulaşın.',
    contactTitle: 'İletişim | Altıntaş Emlak Ofisi · ACC HOMES', contactDesc: 'ACC HOMES Altıntaş satış ofisi ve ACC Plaza genel merkez: telefon, WhatsApp ve form ile bize ulaşın.',
    contactH: 'Bize ulaşın', contactL: 'Altıntaş’ta ev almak, kiralamak ya da satmak için arayın, WhatsApp’tan yazın ya da formu doldurun; aynı gün dönüş yapıyoruz.',
    offT: 'Ofislerimiz', off: [['Altıntaş satış ofisi', 'Altıntaş, Aksu / Antalya. Ziyaret öncesi randevu almanızı öneririz.'], ['ACC Plaza · genel merkez', 'Yeşilbahçe Mah. Portakal Çiçeği Blv. No:36/B, Muratpaşa / Antalya']],
    faqT: 'Sık sorulanlar', faq: [['Altıntaş hangi ilçede?', 'Altıntaş, Antalya’nın Aksu ilçesine bağlı bir mahalledir; Lara ve Kundu’ya, Antalya Havalimanı’na yakındır.'], ['Altıntaş’ta yabancılar ev alabilir mi?', 'Yabancıların tapu alımı genel olarak mümkündür; oturum izni planlanıyorsa mahallenin ikamet kaydına açık olup olmadığını alım öncesi birlikte kontrol ediyoruz.'], ['Altıntaş’ta daire fiyatları ne kadar?', 'Fiyat; sitenin olanaklarına, bina yaşına, kata ve cepheye göre belirgin şekilde değişir. Güncel ilanlarımıza bakabilir ya da dairenize özel emsal analizi isteyebilirsiniz.'], ['İlan detaylarını nerede görebilirim?', 'Her ilan kartı, fotoğrafları ve tüm özellikleriyle ACC HOMES sitesindeki ilan sayfasına açılır.']],
    form: { name: 'Adınız soyadınız', phone: 'Telefon', email: 'E-posta', topic: 'Konu', topics: ['Satılık daire arıyorum', 'Kiralık daire arıyorum', 'Evimi satmak istiyorum', 'Evimi kiraya vermek istiyorum', 'Proje bilgisi', 'Diğer'], msg: 'Mesajınız', send: 'Gönder', consent: 'Kişisel verilerin işlenmesine ilişkin', kvkk: 'aydınlatma metnini okudum', ok: 'Teşekkürler, talebiniz bize ulaştı. En kısa sürede dönüş yapacağız.' },
    revT: 'Müşterilerimiz ne diyor', revAll: 'Tüm Google yorumları', call: 'Ara', privacy: 'KVKK aydınlatma metni',
    foot: 'altintassatilikdaire.com, ACC HOMES International Real Estate’in Altıntaş bölge sitesidir.', other: 'Diğer sitelerimiz',
  },
  en: {
    locale: 'en_US', newsT: 'Area news', newsL: 'Verified developments on zoning, title deeds, infrastructure and the market in Altıntaş, Ermenek and Kemerağzı, with ACC HOMES commentary.', newsTitle: 'Altıntaş Area News: Zoning, Title Deeds, Infrastructure | ACC HOMES', newsDesc: 'Altıntaş area news: parcellation annulment and title deed annotations, zoning, infrastructure and housing market updates.', read: 'Read', srcT: 'Sources', guideT: 'Know Altıntaş from the ground', guideL: 'Location, projects, rental demand, infrastructure and zoning: our guide to Altıntaş, Ermenek and Kemerağzı.', guideBtn: 'Read the area guide', dirT: 'Projects and developers in Altıntaş', dirL: 'Projects and builders we follow in the area. Our authorised projects are marked; contact us for resale and off-plan units in other projects too.', auth: 'Authorised', firmT: 'Developers active in the area', landT: 'Own land or a shop?', landL: 'We introduce landowners to developers for flat-for-land deals and manage sales and lettings of affordable shops on the main roads.', rentOutT: 'Letting your apartment?', rentOutL: 'Rentals move fast in Altıntaş. Let us price and market your flat and find a reliable tenant.', freeExp: 'Free valuation', brand: 'Altıntaş Apartments', by: 'ACC HOMES Altıntaş',
    nav: { sale: 'For sale', rent: 'For rent', projects: 'Projects', guide: 'Area guide', news: 'News', sell: 'Sell', contact: 'Contact' },
    homeTitle: 'Apartments for Sale in Altıntaş, Antalya | ACC HOMES', homeDesc: 'Apartments for sale and rent in Altıntaş, Aksu, Antalya: current listings, authorised projects and a local area guide from ACC HOMES.',
    h1: 'Apartments for sale and rent in Altıntaş', lead: 'Current listings, authorised projects and on-the-ground insight in Altıntaş, Antalya’s fastest-growing residential area. Our Altıntaş sales office and the ACC HOMES team are with you from viewing to title deed.',
    ctaSale: 'Homes for sale', ctaWa: 'Ask on WhatsApp', statSale: 'for sale', statRent: 'for rent', statProj: 'authorised projects', statG: 'Google reviews (ACC HOMES)',
    saleT: 'Altıntaş apartments for sale', saleL: 'Our apartments, villas and land for sale in Altıntaş and Aksu. Listing details open on the ACC HOMES website.',
    rentT: 'Altıntaş apartments for rent', rentL: 'Apartments for rent in Altıntaş and Aksu: gated, with pools, furnished and unfurnished.',
    all: 'All', allOn: 'All Aksu listings on ACC HOMES', none: 'No listings in this category right now. Leave your request and we will let you know first.',
    projT: 'Our authorised projects in Altıntaş', projL: 'Altıntaş developments whose sales and marketing ACC HOMES runs.',
    proj: [['Prime Lara', 'Ekiciler Grup · apartments, villas and shops', 'prime-lara-altintas', '/img/primelara/hero.webp'], ['Falez Manzara', 'Ünlütürk İnşaat · gated apartments', 'falez-manzara-altintas', '/img/falez/dis-1.webp']],
    projMore: 'View project',
    whyT: 'Why Altıntaş', why: [['Close to the airport and Lara', 'A short drive to Antalya Airport, the Lara coast and Kundu; practical for frequent travellers and foreign buyers.'], ['New, gated housing', 'Most of the area’s stock is new complexes with pools, security and parking.'], ['Rental demand', 'Steady demand for 1+1 and 2+1 flats from airport, tourism and healthcare workers.'], ['Growing infrastructure', 'New roads, schools and retail bring the area closer to the city every year.']],
    guide: 'Full Altıntaş guide', guideUrl: `${MAIN}/en/altintas-guide/`,
    sellT: 'Selling a home in Altıntaş?', sellL: 'We price against Altıntaş comparables and sell with professional photography and our local and international buyer network.', sellBtn: 'Request a free valuation',
    sellTitle: 'Sell Your Home in Altıntaş, Antalya | Free Valuation · ACC HOMES', sellDesc: 'Selling an apartment, villa or shop in Altıntaş, Antalya? Comparable-based valuation, professional marketing and a wide buyer network.',
    sellH: 'Let’s sell your Altıntaş home at the right price', sellLead: 'We know what each complex, aspect and floor is worth in Altıntaş. We see your property, assess it against comparables and market it with professional photography, ACC HOMES and portal listings and our buyer network in 10 languages.',
    steps: [['On-site meeting', 'We see the property and listen to your expectations and timeline.'], ['Comparables analysis', 'A written price recommendation based on similar Altıntaş sales and listings.'], ['Marketing', 'Professional photos and video, TR-EN-RU listing copy, ACC HOMES and portals.'], ['Sale and title deed', 'Viewings, negotiation, contract and title deed transfer together.']],
    saleTitle: 'Altıntaş Apartments for Sale | Aksu, Antalya · ACC HOMES', saleDesc: 'Apartments, villas and land for sale in Altıntaş, Aksu, Antalya: current prices, gated complexes with pools and authorised projects.',
    rentTitle: 'Altıntaş Apartments for Rent | Aksu, Antalya · ACC HOMES', rentDesc: 'Apartments for rent in Altıntaş, Aksu, Antalya: gated, with pools, furnished and unfurnished listings.',
    projTitle: 'Altıntaş Projects | Prime Lara, Falez Manzara · ACC HOMES', projDesc: 'Residential projects in Altıntaş, Antalya where ACC HOMES is the authorised agent: Prime Lara and Falez Manzara.',
    contactTitle: 'Contact | Altıntaş Real Estate Office · ACC HOMES', contactDesc: 'ACC HOMES Altıntaş sales office and ACC Plaza headquarters: phone, WhatsApp and contact form.',
    contactH: 'Contact us', contactL: 'Call, message us on WhatsApp or fill in the form to buy, rent or sell in Altıntaş; we reply the same day.',
    offT: 'Our offices', off: [['Altıntaş sales office', 'Altıntaş, Aksu / Antalya. Please book an appointment before visiting.'], ['ACC Plaza · headquarters', 'Yeşilbahçe Mah. Portakal Çiçeği Blv. No:36/B, Muratpaşa / Antalya']],
    faqT: 'FAQ', faq: [['Where is Altıntaş?', 'Altıntaş is a neighbourhood in the Aksu district of Antalya, close to Lara, Kundu and Antalya Airport.'], ['Can foreigners buy in Altıntaş?', 'Foreigners can generally buy title deeds; if you plan a residence permit, we check before purchase whether the neighbourhood is open for residence registration.'], ['What do apartments cost in Altıntaş?', 'Prices vary widely with complex facilities, building age, floor and aspect. See our current listings or ask for a comparables analysis.'], ['Where can I see listing details?', 'Each card opens the full listing page with photos and features on the ACC HOMES website.']],
    form: { name: 'Full name', phone: 'Phone', email: 'E-mail', topic: 'Topic', topics: ['Looking to buy', 'Looking to rent', 'Selling my home', 'Letting my home', 'Project information', 'Other'], msg: 'Your message', send: 'Send', consent: 'I have read the', kvkk: 'privacy notice', ok: 'Thank you, we have received your request and will get back to you shortly.' },
    revT: 'What our clients say', revAll: 'All Google reviews', call: 'Call', privacy: 'Privacy notice',
    foot: 'altintassatilikdaire.com is the Altıntaş area site of ACC HOMES International Real Estate.', other: 'Our other sites',
  },
  ru: {
    locale: 'ru_RU', newsT: 'Новости района', newsL: 'Проверенные новости о зонировании, тапу, инфраструктуре и рынке в Алтынташе, Эрменеке и Кемерагзы.', newsTitle: 'Новости Алтынташа: зонирование, тапу | ACC HOMES', newsDesc: 'Новости района Алтынташ: отмена парцелляции, отметки в тапу, инфраструктура и рынок жилья.', read: 'Читать', srcT: 'Источники', guideT: 'Алтынташ изнутри', guideL: 'Расположение, проекты, аренда, инфраструктура и зонирование: наш гид по району.', guideBtn: 'Читать гид', dirT: 'Проекты и застройщики Алтынташа', dirL: 'Проекты и застройщики, которых мы знаем. Наши проекты отмечены; по другим проектам тоже обращайтесь.', auth: 'Наш проект', firmT: 'Застройщики района', landT: 'Есть участок или магазин?', landL: 'Помогаем владельцам участков найти застройщика и продаём/сдаём доступные магазины на главных дорогах.', rentOutT: 'Сдаёте квартиру?', rentOutL: 'Квартиры в Алтынташе сдаются очень быстро. Подготовим объявление и найдём надёжного арендатора.', freeExp: 'Бесплатная оценка', brand: 'Квартиры в Алтынташе', by: 'ACC HOMES Altıntaş',
    nav: { sale: 'Продажа', rent: 'Аренда', projects: 'Проекты', guide: 'Гид', news: 'Новости', sell: 'Продать', contact: 'Контакты' },
    homeTitle: 'Квартиры в Алтынташе, Анталия: продажа и аренда | ACC HOMES', homeDesc: 'Квартиры на продажу и в аренду в Алтынташе (Аксу, Анталия): актуальные объекты, проекты и гид по району от ACC HOMES.',
    h1: 'Квартиры в Алтынташе: продажа и аренда', lead: 'Актуальные объекты, проекты и знание района Алтынташ — самого быстрорастущего жилого района Анталии. Наш офис продаж в Алтынташе и команда ACC HOMES сопровождают вас до оформления тапу.',
    ctaSale: 'Объекты на продажу', ctaWa: 'Написать в WhatsApp', statSale: 'на продажу', statRent: 'в аренду', statProj: 'проекта', statG: 'отзывов Google (ACC HOMES)',
    saleT: 'Квартиры на продажу в Алтынташе', saleL: 'Квартиры, виллы и участки на продажу в Алтынташе и Аксу. Подробности объекта открываются на сайте ACC HOMES.',
    rentT: 'Аренда квартир в Алтынташе', rentL: 'Квартиры в аренду в Алтынташе и Аксу: в комплексах, с бассейном, с мебелью и без.',
    all: 'Все', allOn: 'Все объекты Аксу на ACC HOMES', none: 'Сейчас объектов в этой категории нет. Оставьте заявку — сообщим первыми.',
    projT: 'Наши проекты в Алтынташе', projL: 'Проекты в Алтынташе, продажи и маркетинг которых ведёт ACC HOMES.',
    proj: [['Prime Lara', 'Ekiciler Grup · квартиры, виллы, магазины', 'prime-lara-altintas', '/img/primelara/hero.webp'], ['Falez Manzara', 'Ünlütürk İnşaat · квартиры в комплексе', 'falez-manzara-altintas', '/img/falez/dis-1.webp']],
    projMore: 'Смотреть проект',
    whyT: 'Почему Алтынташ', why: [['Рядом аэропорт и Лара', 'Недалеко аэропорт Анталии, побережье Лары и Кунду — удобно для тех, кто часто летает, и иностранцев.'], ['Новое жильё в комплексах', 'Большая часть жилья — новые комплексы с бассейном, охраной и парковкой.'], ['Спрос на аренду', 'Постоянный спрос на 1+1 и 2+1 от работников аэропорта, туризма и медицины.'], ['Развитие района', 'Новые дороги, школы и торговля с каждым годом связывают район с городом.']],
    guide: 'Подробный гид по Алтынташу', guideUrl: `${MAIN}/ru/gid-altyntash/`,
    sellT: 'Продаёте квартиру в Алтынташе?', sellL: 'Оцениваем по аналогам в Алтынташе и продаём с профессиональной съёмкой и сетью покупателей.', sellBtn: 'Бесплатная оценка',
    sellTitle: 'Продать квартиру в Алтынташе | Бесплатная оценка · ACC HOMES', sellDesc: 'Хотите продать квартиру, виллу или магазин в Алтынташе (Анталия)? Оценка по аналогам, маркетинг и сеть покупателей.',
    sellH: 'Продадим вашу квартиру в Алтынташе по правильной цене', sellLead: 'Мы знаем, сколько стоят комплексы, этажи и стороны света в Алтынташе. Осматриваем объект, оцениваем по аналогам и продаём с профессиональной съёмкой, объявлениями на ACC HOMES и порталах и покупателями на 10 языках.',
    steps: [['Встреча на объекте', 'Осматриваем объект и обсуждаем ожидания и сроки.'], ['Анализ аналогов', 'Письменная рекомендация по цене на основе сделок в Алтынташе.'], ['Продвижение', 'Фото и видео, тексты на TR-EN-RU, ACC HOMES и порталы.'], ['Сделка и тапу', 'Показы, переговоры, договор и тапу вместе.']],
    saleTitle: 'Квартиры на продажу в Алтынташе | Аксу, Анталия · ACC HOMES', saleDesc: 'Квартиры, виллы и участки на продажу в Алтынташе (Аксу, Анталия): цены, комплексы с бассейном и проекты.',
    rentTitle: 'Аренда квартир в Алтынташе | Аксу, Анталия · ACC HOMES', rentDesc: 'Квартиры в аренду в Алтынташе (Аксу, Анталия): в комплексах, с бассейном, с мебелью и без.',
    projTitle: 'Проекты в Алтынташе | Prime Lara, Falez Manzara · ACC HOMES', projDesc: 'Жилые проекты в Алтынташе, где ACC HOMES — уполномоченное агентство: Prime Lara и Falez Manzara.',
    contactTitle: 'Контакты | Офис недвижимости в Алтынташе · ACC HOMES', contactDesc: 'Офис продаж ACC HOMES в Алтынташе и штаб-квартира ACC Plaza: телефон, WhatsApp и форма.',
    contactH: 'Свяжитесь с нами', contactL: 'Позвоните, напишите в WhatsApp или заполните форму — купить, арендовать или продать в Алтынташе. Отвечаем в тот же день.',
    offT: 'Наши офисы', off: [['Офис продаж в Алтынташе', 'Алтынташ, Аксу / Анталия. Пожалуйста, договоритесь о встрече заранее.'], ['ACC Plaza · штаб-квартира', 'Yeşilbahçe Mah. Portakal Çiçeği Blv. No:36/B, Muratpaşa / Antalya']],
    faqT: 'Вопросы и ответы', faq: [['Где находится Алтынташ?', 'Алтынташ — район в округе Аксу (Анталия), рядом с Ларой, Кунду и аэропортом Анталии.'], ['Могут ли иностранцы купить жильё в Алтынташе?', 'Иностранцы, как правило, могут оформить тапу; если планируется ВНЖ, до покупки проверяем, открыт ли район для регистрации.'], ['Сколько стоят квартиры в Алтынташе?', 'Цена сильно зависит от комплекса, возраста здания, этажа и стороны. Смотрите наши объекты или закажите анализ аналогов.'], ['Где посмотреть детали объекта?', 'Каждая карточка открывает полную страницу объекта на сайте ACC HOMES.']],
    form: { name: 'Имя и фамилия', phone: 'Телефон', email: 'E-mail', topic: 'Тема', topics: ['Хочу купить', 'Хочу арендовать', 'Хочу продать', 'Хочу сдать', 'О проекте', 'Другое'], msg: 'Сообщение', send: 'Отправить', consent: 'Я прочитал(а)', kvkk: 'уведомление о конфиденциальности', ok: 'Спасибо, ваша заявка получена. Мы скоро свяжемся с вами.' },
    revT: 'Отзывы клиентов', revAll: 'Все отзывы Google', call: 'Позвонить', privacy: 'Конфиденциальность',
    foot: 'altintassatilikdaire.com — сайт района Алтынташ компании ACC HOMES International Real Estate.', other: 'Наши сайты',
  },
};
const KVKK = { tr: `${MAIN}/kvkk-aydinlatma-metni/`, en: `${MAIN}/en/privacy-notice/`, ru: `${MAIN}/ru/privacy-notice/` };
const PROJ_URL = (lang, slug) => (slug === 'antalle-concept-houses' && lang !== 'tr' ? `${MAIN}/${lang}/${lang === 'en' ? 'projects' : 'proekty'}/${slug}/` : `${MAIN}/projeler/${slug}/`);
const KW = {
  tr: 'Altıntaş satılık daire, Altıntaş kiralık daire, Aksu Altıntaş satılık daire, Altıntaş emlakçı, Altıntaş emlak ofisi, Antalya Altıntaş satılık, Altıntaş satılık villa, Prime Lara, Falez Manzara, ACC HOMES',
  en: 'Altintas apartments for sale, Altıntaş Antalya property, apartments for rent Altintas, Altintas real estate agent, Aksu Antalya apartments, Prime Lara, Falez Manzara',
  ru: 'квартиры Алтынташ, Алтынташ Анталия купить квартиру, аренда квартир Алтынташ, недвижимость Аксу Анталия, Prime Lara',
};

// ---------- parçalar ----------
const fmt = (l, lang) => (l.fiyat ? `${Number(l.fiyat).toLocaleString(lang === 'tr' ? 'tr-TR' : lang === 'ru' ? 'ru-RU' : 'en-US')} ${l.para}${l.tip === 'Kiralık' ? (lang === 'tr' ? '/ay' : lang === 'ru' ? '/мес' : '/mo') : ''}` : (lang === 'tr' ? 'Fiyat için arayın' : lang === 'ru' ? 'Цена по запросу' : 'Price on request'));
const card = (l, lang) => `<a class="lc rv" href="${esc(l.url[lang])}" target="_blank" rel="noopener" data-t="${l.tip === 'Satılık' ? 's' : l.tip === 'Kiralık' ? 'k' : 'd'}" data-a="${esc(l.altTip)}"><span class="lci">${l.foto ? `<img src="${esc(l.foto)}" alt="${esc(l.baslik[lang])}" loading="lazy" referrerpolicy="no-referrer" width="640" height="480">` : ''}<b>${fmt(l, lang)}</b><em>${esc(l.tip === 'Satılık' ? T[lang].nav.sale : l.tip === 'Kiralık' ? T[lang].nav.rent : l.tip)}</em></span><span class="lcb"><small>${esc([l.mahalle, l.ilce].filter(Boolean).join(' · '))}${l.proje && l.proje !== 'SİTE' ? ` · ${esc(l.proje)}` : ''}</small><h3>${esc(l.baslik[lang])}</h3><span class="lcm">${[l.oda, l.brut ? `${l.brut} m²` : ''].filter(Boolean).join(' · ')}</span></span></a>`;
const grid = (list, lang, chips = true) => {
  const t = T[lang]; if (!list.length) return `<p class="none">${t.none}</p>`;
  const alts = [...new Set(list.map((l) => l.altTip).filter(Boolean))].slice(0, 6);
  return `${chips && alts.length > 1 ? `<p class="gf"><button class="on" data-f="*">${t.all} <i>${list.length}</i></button>${alts.map((a) => `<button data-f="${esc(a)}">${esc(a)} <i>${list.filter((l) => l.altTip === a).length}</i></button>`).join('')}</p>` : ''}<div class="lg">${list.map((l) => card(l, lang)).join('')}</div>`;
};
const igrid = (list, lang, n) => `<div class="lg">${list.slice(0, n).map((l) => card(l, lang)).join('')}</div>`;
function form(lang, topic = 0) {
  const f = T[lang].form;
  return `<form class="form" method="POST" action="/form.php"><p class="okmsg" hidden>${f.ok}</p><input type="hidden" name="form-name" value="altintas-talep"><input type="hidden" name="_next" value="${url(lang, 'contact')}?ok=1"><input type="hidden" name="dil" value="${lang}"><input type="hidden" name="site" value="altintassatilikdaire.com"><p hidden><input name="bot-field" tabindex="-1" autocomplete="off"></p>
<input name="ad" placeholder="${f.name} *" required autocomplete="name"><input name="telefon" type="tel" placeholder="${f.phone} *" required autocomplete="tel"><input name="eposta" type="email" placeholder="${f.email}" autocomplete="email"><select name="konu" aria-label="${f.topic}">${f.topics.map((x, i) => `<option${i === topic ? ' selected' : ''}>${x}</option>`).join('')}</select><textarea name="mesaj" rows="4" placeholder="${f.msg}"></textarea>
<label class="chk"><input type="checkbox" name="kvkk_onay" value="evet" required> <span>${f.consent} <a href="${KVKK[lang]}" target="_blank" rel="noopener">${f.kvkk}</a> *</span></label><button class="btn" type="submit">${f.send}</button></form>`;
}
const reviews = (lang) => {
  const t = T[lang]; const list = REVIEWS.slice().sort((a, b) => (a.lang === (lang === 'tr' ? 'tr' : 'en') ? -1 : 1)).slice(0, 6);
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
const crumbs = (lang, key) => ({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: T[lang].brand, item: DOMAIN + url(lang, 'home') }, ...(key === 'home' ? [] : [{ '@type': 'ListItem', position: 2, name: T[lang].nav[key], item: DOMAIN + url(lang, key) }])] });
const itemList = (list, lang) => ({ '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: list.slice(0, 30).map((l, i) => ({ '@type': 'ListItem', position: i + 1, url: l.url[lang], name: l.baslik[lang] })) });

function head({ lang, title, desc, canon, alt, ld }) {
  const t = T[lang];
  return `<!DOCTYPE html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><meta name="keywords" content="${esc(KW[lang])}"><link rel="canonical" href="${DOMAIN}${canon}">${LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${DOMAIN}${alt[l]}">`).join('')}<link rel="alternate" hreflang="x-default" href="${DOMAIN}${alt.tr}"><meta name="robots" content="index,follow,max-image-preview:large">
<meta property="og:type" content="website"><meta property="og:site_name" content="${t.brand}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${DOMAIN}${canon}"><meta property="og:image" content="${MAIN}/img/primelara/hero.webp"><meta property="og:locale" content="${t.locale}"><meta name="twitter:card" content="summary_large_image"><meta name="theme-color" content="#E02A3C">
<link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Anton&family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet"><link rel="stylesheet" href="/style.css?v=1">
${ld.map((x) => `<script type="application/ld+json">${JSON.stringify(x).replace(/</g, '\\u003c')}</script>`).join('')}</head>`;
}
const navKeys = ['sale', 'rent', 'projects', 'guide', 'news', 'sell', 'contact'];
function header(lang, alt, cur) {
  const t = T[lang]; const lsw = LANGS.map((l) => `<a href="${alt[l]}"${l === lang ? ' class="on" aria-current="true"' : ''} hreflang="${l}">${l.toUpperCase()}</a>`).join('');
  return `<div class="tbar"><div class="wrap tbi"><a href="tel:${PHONE.raw}">${ICO.ph}${PHONE.text}</a><a href="https://wa.me/${PHONE.wa}" target="_blank" rel="noopener">${ICO.wa}WhatsApp</a><a class="tig" href="${IG}" target="_blank" rel="noopener">${ICO.ig}@acc.altintas.realestate</a></div></div>
<header class="top"><div class="wrap hb"><a class="wm" href="${url(lang, 'home')}"><span class="wm1">${t.brand.toLocaleUpperCase(lang === 'tr' ? 'tr' : 'en')}</span><span class="wm2">${t.by}</span></a>
<nav class="nav" aria-label="Menu">${navKeys.map((k) => `<a href="${url(lang, k)}"${cur === k ? ' aria-current="page"' : ''}>${t.nav[k]}</a>`).join('')}</nav>
<div class="hr"><span class="lsw">${lsw}</span><a class="btn sm" href="https://wa.me/${PHONE.wa}" target="_blank" rel="noopener">${ICO.wa} WhatsApp</a><button class="burger" aria-label="Menu" aria-expanded="false"><i></i><i></i><i></i></button></div></div>
<div class="mpanel">${navKeys.map((k) => `<a href="${url(lang, k)}">${t.nav[k]}</a>`).join('')}<span class="lsw">${lsw}</span></div></header>`;
}
function footer(lang) {
  const t = T[lang];
  return `<footer class="ft"><div class="wrap fg"><div><p class="wm1 big">${t.brand.toLocaleUpperCase(lang === 'tr' ? 'tr' : 'en')}</p><p class="muted">${t.foot}</p></div>
<div><p class="fh">${t.brand}</p>${navKeys.map((k) => `<a href="${url(lang, k)}">${t.nav[k]}</a>`).join('')}</div>
<div><p class="fh">${t.other}</p><a href="${MAIN}${lang === 'tr' ? '/' : `/${lang}/`}" target="_blank" rel="noopener">ACC HOMES</a><a href="${VILLAS}${lang === 'tr' ? '/' : `/${lang}/`}" target="_blank" rel="noopener">ACC VILLAS</a><a href="https://alicanercan.com${lang === 'tr' ? '/' : `/${lang}/`}" target="_blank" rel="noopener">Ali Caner Can</a><a href="${t.guideUrl}" target="_blank" rel="noopener">${t.guide}</a></div>
<div><p class="fh">${t.nav.contact}</p><a href="tel:${PHONE.raw}">${PHONE.text}</a><a href="https://wa.me/${PHONE.wa}" target="_blank" rel="noopener">WhatsApp</a><a href="mailto:${MAIL}">${MAIL}</a><a href="${IG}" target="_blank" rel="noopener">Instagram</a></div></div>
<div class="wrap fb"><span>© ${new Date().getFullYear()} ACC HOMES International Real Estate</span><a href="${KVKK[lang]}" target="_blank" rel="noopener">${t.privacy}</a></div></footer>
<div class="dock"><a class="d-call" href="tel:${PHONE.raw}">${ICO.ph} ${t.call}</a><a class="d-wa" href="https://wa.me/${PHONE.wa}" target="_blank" rel="noopener">${ICO.wa} WhatsApp</a></div>
<script>(()=>{const b=document.querySelector('.burger'),p=document.querySelector('.mpanel');b&&b.addEventListener('click',()=>{const o=p.classList.toggle('open');b.setAttribute('aria-expanded',o)});
document.querySelectorAll('.gf').forEach(g=>{const bs=[...g.querySelectorAll('button')],cs=[...g.nextElementSibling.querySelectorAll('.lc')];bs.forEach(x=>x.onclick=()=>{bs.forEach(y=>y.classList.toggle('on',y===x));cs.forEach(c=>c.hidden=!(x.dataset.f==='*'||c.dataset.a===x.dataset.f))})});
if(/[?&]ok=1/.test(location.search))document.querySelectorAll('.okmsg').forEach(m=>{m.hidden=false;m.scrollIntoView({block:'center'})});
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
  return `<section class="sec"><div class="wrap"><h2>${t.dirT}</h2><p class="lead">${t.dirL}</p><div class="dir">${PROJELER.map(([n, f, a]) => { const c = cnt(n); return `<div class="dp${a ? ' au' : ''}"><b>${esc(n)}</b>${f ? `<small>${esc(f)}</small>` : ''}${a ? `<em>${t.auth}</em>` : ''}${c ? `<i>${c} ${lang === 'tr' ? 'ilan' : lang === 'ru' ? 'объект.' : 'listings'}</i>` : ''}</div>`; }).join('')}</div>
<h3 class="mt">${t.firmT}</h3><p class="firms">${FIRMALAR.map((f) => `<span>${esc(f)}</span>`).join('')}</p></div></section>`; };
const landBand = (lang) => { const t = T[lang]; return `<section class="sec"><div class="wrap two2"><div class="lb2 rv"><h3>${t.landT}</h3><p>${t.landL}</p><a class="btn sm" href="${url(lang, 'contact')}">${t.nav.contact} →</a></div><div class="lb2 rv"><h3>${t.rentOutT}</h3><p>${t.rentOutL}</p><a class="btn sm" href="${url(lang, 'sell')}">${t.freeExp} →</a></div></div></section>`; };
// ---------- sayfalar ----------
for (const lang of LANGS) {
  const t = T[lang];
  page({ lang, key: 'home', title: t.homeTitle, desc: t.homeDesc, ld: [ORG(lang), { '@context': 'https://schema.org', '@type': 'WebSite', name: t.brand, url: DOMAIN + url(lang, 'home'), inLanguage: lang }, itemList(SALE, lang), faqLd(lang)], body: `
<section class="hero2" style="--bg:url('${MAIN}/img/primelara/hero.webp')"><div class="wrap"><p class="eyebrow">${t.by} · Aksu / Antalya</p><h1>${t.h1}</h1><p class="lead">${t.lead}</p><div class="ctas"><a class="btn" href="${url(lang, 'sale')}">${t.ctaSale} →</a><a class="btn ghost light" href="https://wa.me/${PHONE.wa}" target="_blank" rel="noopener">${ICO.wa} ${t.ctaWa}</a></div>
<p class="qk"><a href="${url(lang, 'sale')}">${t.nav.sale} <b>${SALE.length}</b></a><a href="${url(lang, 'rent')}">${t.nav.rent} <b>${RENT.length}</b></a><a href="${url(lang, 'projects')}">${t.nav.projects} <b>${t.proj.length}</b></a><a href="${url(lang, 'sell')}">${t.freeExp} →</a><a href="${url(lang, 'news')}">${t.newsT} →</a></p></div></section>
<section class="stats"><div class="wrap sg"><div class="st"><b>${SALE.length}</b><span>${t.statSale}</span></div><div class="st"><b>${RENT.length}</b><span>${t.statRent}</span></div><div class="st"><b>${t.proj.length}</b><span>${t.statProj}</span></div><div class="st"><b>${lang === 'en' ? G.rating : String(G.rating).replace('.', ',')} ★</b><span>${G.count} ${t.statG}</span></div></div></section>
<section class="sec" id="ilanlar"><div class="wrap"><div class="sh"><div><h2>${t.saleT}</h2><p class="lead">${t.saleL}</p></div><a class="all" href="${url(lang, 'sale')}">${t.all} (${SALE.length}) →</a></div>${igrid(SALE, lang, 9)}</div></section>
${projBlock(lang)}
<section class="sec"><div class="wrap"><div class="sh"><div><h2>${t.rentT}</h2><p class="lead">${t.rentL}</p></div><a class="all" href="${url(lang, 'rent')}">${t.all} (${RENT.length}) →</a></div>${igrid(RENT, lang, 6)}</div></section>
<section class="sec bg2"><div class="wrap"><h2>${t.whyT}</h2><div class="vals">${t.why.map(([h, p]) => `<div class="val rv"><h3>${h}</h3><p>${p}</p></div>`).join('')}</div><p class="center"><a class="btn ghost" href="${t.guideUrl}" target="_blank" rel="noopener">${t.guide} →</a></p></div></section>
${guideBand(lang)}
${sellBand(lang)}
${landBand(lang)}
${faqBlock(lang)}
${reviews(lang)}` });

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
  page({ lang, key: 'sale', title: t.saleTitle, desc: t.saleDesc, ld: [crumbs(lang, 'sale'), itemList(SALE, lang)], body: `${phero(t.by, t.saleT, t.saleL)}<section class="sec tight"><div class="wrap">${grid(SALE, lang)}<p class="center"><a class="btn ghost" href="${MAIN}${lang === 'tr' ? '/ilanlar/' : `/${lang}/${lang === 'en' ? 'listings' : 'obekty'}/`}?ilce=Aksu" target="_blank" rel="noopener">${t.allOn} →</a></p></div></section>${sellBand(lang)}` });
  page({ lang, key: 'rent', title: t.rentTitle, desc: t.rentDesc, ld: [crumbs(lang, 'rent'), itemList(RENT, lang)], body: `${phero(t.by, t.rentT, t.rentL)}<section class="sec tight"><div class="wrap">${grid(RENT, lang)}</div></section><section class="sec bg2"><div class="wrap two"><div><h2>${t.contactH}</h2><p class="lead">${t.contactL}</p></div>${form(lang, 1)}</div></section>` });
  page({ lang, key: 'projects', title: t.projTitle, desc: t.projDesc, ld: [crumbs(lang, 'projects')], body: `${phero(t.by, t.projT, t.projL)}${projBlock(lang, true)}${dirBlock(lang)}<section class="sec bg2"><div class="wrap two"><div><h2>${t.contactH}</h2><p class="lead">${t.contactL}</p></div>${form(lang, 4)}</div></section>` });
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
for (const f of ['favicon.ico', 'favicon.svg', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png']) fs.copyFileSync(path.join(ROOT, 'villas/static', f), path.join(OUT, f));
if (fs.existsSync(path.join(HERE, 'static'))) fs.cpSync(path.join(HERE, 'static'), OUT, { recursive: true });
const php = fs.readFileSync(path.join(ROOT, 'server/form.php'), 'utf8')
  .replace("'bulten'];", "'bulten', 'altintas-talep'];")
  .replace("'From: ACC HOMES Web <'", "'From: ACC HOMES Altintas <'")
  .replace("$sent = @mail(", "$sent = function_exists('mail') && @mail(")
  .replace("$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? '';", "$ip = $_SERVER['REMOTE_ADDR'] ?? '';")
  .replace("$next = (string)($_POST['_next'] ?? '/');", "$next = (string)($_POST['_next'] ?? '/');\n$org = (string)($_SERVER['HTTP_ORIGIN'] ?? $_SERVER['HTTP_REFERER'] ?? '');\nif ($org !== '' && !preg_match('~^https?://([a-z0-9-]+\\.)?(altintassatilikdaire\\.com|acchomesantalya\\.com)(/|$)~i', $org)) { header('Location: /', true, 303); exit; }");
fs.writeFileSync(path.join(OUT, 'form.php'), php);

// 404, sitemap, robots, .htaccess
fs.writeFileSync(path.join(OUT, '404.html'), `${head({ lang: 'tr', title: 'Sayfa bulunamadı | Altıntaş Satılık Daire', desc: '', canon: '/404', alt: { tr: '/', en: '/en/', ru: '/ru/' }, ld: [] }).replace('index,follow,max-image-preview:large', 'noindex')}<body>${header('tr', { tr: '/', en: '/en/', ru: '/ru/' }, '')}<main><section class="phero"><div class="wrap"><h1>Sayfa bulunamadı</h1><p class="lead">Aradığınız sayfa taşınmış olabilir. Altıntaş’taki güncel ilanlara göz atın.</p><div class="ctas"><a class="btn" href="/satilik-daireler/">Satılık daireler →</a><a class="btn ghost" href="/">Ana sayfa</a></div></div></section></main>${footer('tr')}</body></html>`);
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemap.map(([u, a]) => `<url><loc>${DOMAIN}${u}</loc><lastmod>${today}</lastmod>${LANGS.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${DOMAIN}${a[l]}"/>`).join('')}</url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /wp-admin/\nSitemap: ${DOMAIN}/sitemap.xml\n`);
// Eski WordPress adresleri → yeni sayfalar (301). Liste: altintas/eski-adresler.txt ("eski-yol yeni-yol", satır başına bir)
const OLD = fs.existsSync(path.join(HERE, 'eski-adresler.txt')) ? fs.readFileSync(path.join(HERE, 'eski-adresler.txt'), 'utf8').split('\n').map((x) => x.trim().split(/\s+/)).filter((x) => x.length === 2 && !x[0].startsWith('#')) : [];
fs.writeFileSync(path.join(OUT, '.htaccess'), `DirectoryIndex index.html\nRewriteEngine On\nRewriteCond %{HTTPS} off [OR]\nRewriteCond %{HTTP_HOST} ^www\\. [NC]\nRewriteRule ^ https://altintassatilikdaire.com%{REQUEST_URI} [L,R=301]\n${OLD.map(([a, b]) => `RewriteRule ^${a.replace(/^\//, '').replace(/\/$/, '')}/?$ ${b} [L,R=301]`).join('\n')}\nRewriteRule ^(xmlrpc\\.php|wp-login\\.php|wp-json(/.*)?|feed/?|wp-content/uploads/.*\\.php)$ - [F,L]\nRewriteRule ^(ilan|emlak|property|properties|property-type|property-status|property-city)/.*$ /satilik-daireler/ [L,R=301]\nErrorDocument 404 /404.html\nOptions -Indexes\nServerSignature Off\n<FilesMatch "(^\\.|\\.(md|mjs|json|log|csv|bak|sql|sh|ini|env)$)">\nRequire all denied\n</FilesMatch>\n<Files "wp-config.php">\nRequire all denied\n</Files>\n<IfModule mod_headers.c>\nHeader always set X-Content-Type-Options "nosniff"\nHeader always set X-Frame-Options "SAMEORIGIN"\nHeader always set Referrer-Policy "strict-origin-when-cross-origin"\nHeader always set Strict-Transport-Security "max-age=31536000"\nHeader unset X-Powered-By\n</IfModule>\n<IfModule mod_expires.c>\nExpiresActive On\nExpiresByType image/webp "access plus 30 days"\nExpiresByType text/css "access plus 7 days"\n</IfModule>\n`);
console.log(`OK — ${sitemap.length} sayfa`);
