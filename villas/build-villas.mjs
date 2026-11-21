// ACC VILLAS (accvillas.com) — ACC HOMES'un Antalya villa sitesi.
// Veri: ACC HOMES Panel (site_ilanlari) → yalnız Villa / Müstakil Ev ilanları. Metinler: data/ilan-seo.json (varsa).
// Çıktı: villas/dist  →  Turhost (accvillas.com) FTP ile yüklenir (.github/workflows/villas.yml).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { SEG2, X, REVIEWS, REV_PROJECT, GOOGLE, IG, ANTALLE_GAL, OH_GAL, FOUNDER_LINKS, KVKK_HTML } from './content2.mjs';
import { ANTALLE, ANTALLE_SHARED } from '../antalle-content.mjs';
import { ANTALLE_SEO } from '../antalle-seo.mjs';
import { DAVET_AKTIF, davetTx } from '../antalle-davet.mjs';
import { SEG4, PHILO, PLAZA, MKT, LIV, FD2, INTL } from './content4.mjs';
import { SEG3, NAV3, STATS, REG_EXTRA, MANAVGAT, REG_FAQ, SVC, POSTS, JOURNAL } from './content3.mjs';
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
// CEO portresi: dosya villas/static/ceo.webp olarak eklenince otomatik kullanılır; yoksa monogram görünür.
const CEO = { name: 'Ali Caner Can', role: { tr: 'Kurucu & CEO', en: 'Founder & CEO', ru: 'Основатель и CEO' } };
const SEG = {
  tr: { list: 'satilik-villalar', rent: 'kiralik-villalar', villa: 'villa', sell: 'villami-sat', value: 'villa-degerleme', projects: 'villa-projeleri', regions: 'bolgeler', living: 'villa-yasami' },
  en: { list: 'villas-for-sale', rent: 'villas-for-rent', villa: 'villa', sell: 'sell-your-villa', value: 'villa-valuation', projects: 'villa-projects', regions: 'areas', living: 'villa-living' },
  ru: { list: 'villy-na-prodazhu', rent: 'arenda-vill', villa: 'villa', sell: 'prodat-villu', value: 'otsenka-villy', projects: 'proekty-vill', regions: 'rajony', living: 'zhizn-v-ville' },
};
// Bölgeler: ilçe + mahalle eşleşmesi
const LARA = /Lara|Kundu|Güzeloba|Çalkaya|Kemerağzı/i;
const REG = [
  { k: 'konyaalti', n: { tr: 'Konyaaltı', en: 'Konyaaltı', ru: 'Коньяалты' }, m: (v) => v.ilce === 'Konyaaltı',
    d: { tr: 'Batı Antalya’nın sahil ilçesi: uzun plajı, Toros manzarası ve yerleşik villa mahalleleri. Şehir merkezine, hastanelere ve üniversiteye yakın.', en: 'West Antalya’s seaside district: a long beach, Taurus mountain views and established villa neighbourhoods, close to the city centre, hospitals and the university.', ru: 'Приморский район на западе Анталии: длинный пляж, вид на горы Тавр и сложившиеся районы вилл, рядом центр города, больницы и университет.' } },
  { k: 'dosemealti', n: { tr: 'Döşemealtı', en: 'Döşemealtı', ru: 'Дёшемеалты' }, m: (v) => v.ilce === 'Döşemealtı',
    d: { tr: 'Antalya’nın kuzeyindeki yayla ilçesi: geniş bahçeler, doğa içinde havuzlu müstakil villalar ve daha serin yaz akşamları. Şehre yakın, kalabalıktan uzak.', en: 'The highland district north of Antalya: large gardens, detached villas with pools in nature and cooler summer evenings. Close to the city, away from the crowds.', ru: 'Район на плато к северу от Анталии: большие сады, отдельные виллы с бассейном среди природы и более прохладные летние вечера. Близко к городу, вдали от суеты.' } },
  { k: 'lara-kundu', n: { tr: 'Lara – Kundu', en: 'Lara – Kundu', ru: 'Лара – Кунду' }, m: (v) => ['Muratpaşa', 'Aksu'].includes(v.ilce) && LARA.test(v.mahalle || ''),
    d: { tr: 'Antalya’nın doğu sahili: kumsal plajlar, lüks oteller ve havalimanına yakınlık. Denize yakın villalar ve yeni projeler.', en: 'Antalya’s eastern coast: sandy beaches, luxury hotels and quick airport access. Villas close to the sea and new developments.', ru: 'Восточное побережье Анталии: песчаные пляжи, роскошные отели и близость аэропорта. Виллы недалеко от моря и новые проекты.' } },
  { k: 'muratpasa', n: { tr: 'Muratpaşa', en: 'Muratpaşa', ru: 'Муратпаша' }, m: (v) => v.ilce === 'Muratpaşa' && !LARA.test(v.mahalle || ''),
    d: { tr: 'Şehrin merkez ilçesi: alışveriş, okullar ve hastaneler kısa mesafede. Merkezde müstakil yaşam arayanlar için.', en: 'The city’s central district, with shopping, schools and hospitals close by. For those who want a detached home in the centre.', ru: 'Центральный район города: магазины, школы и больницы рядом. Для тех, кто ищет отдельный дом в центре.' } },
  { k: 'altintas-aksu', n: { tr: 'Altıntaş – Aksu', en: 'Altıntaş – Aksu', ru: 'Алтынташ – Аксу' }, m: (v) => v.ilce === 'Aksu' && !LARA.test(v.mahalle || ''),
    d: { tr: 'Havalimanına yakın, hızla gelişen bölge: yeni villa projeleri ve geniş yaşam alanları. Lara sahillerine kısa mesafe.', en: 'A fast-growing area near the airport: new villa developments and generous living space, a short drive from Lara’s beaches.', ru: 'Быстро развивающийся район рядом с аэропортом: новые проекты вилл и просторные дома, недалеко от пляжей Лары.' } },
  { k: 'kepez-duaci', n: { tr: 'Kepez – Duacı', en: 'Kepez – Duacı', ru: 'Кепез – Дуаджи' }, m: (v) => v.ilce === 'Kepez',
    d: { tr: 'Kepez’in yeşil villa bölgesi Duacı: şehre yakın, doğa içinde, daha erişilebilir fiyatlı müstakil yaşam.', en: 'Duacı, Kepez’s green villa area: close to the city, surrounded by nature, detached living at more accessible prices.', ru: 'Дуаджи — зелёный район вилл в Кепезе: близко к городу, среди природы, частный дом по более доступной цене.' } },
  { k: 'serik-belek', n: { tr: 'Serik – Belek', en: 'Serik – Belek', ru: 'Серик – Белек' }, m: (v) => v.ilce === 'Serik',
    d: { tr: 'Golf sahaları ve beş yıldızlı otelleriyle tanınan Belek: golf villaları, sahile yakın yazlık ve yatırım villaları.', en: 'Belek, known for its golf courses and five-star resorts: golf villas, holiday homes near the beach and investment villas.', ru: 'Белек, известный гольф-полями и пятизвёздочными отелями: виллы у гольфа, дома для отдыха у моря и инвестиционные виллы.' } },
  { k: 'kemer', n: { tr: 'Kemer', en: 'Kemer', ru: 'Кемер' }, m: (v) => v.ilce === 'Kemer',
    d: { tr: 'Toros Dağları ile denizin buluştuğu Kemer: çam ormanları, koylar ve doğa içinde villalar.', en: 'Where the Taurus Mountains meet the sea: pine forests, bays and villas surrounded by nature.', ru: 'Там, где горы Тавр встречаются с морем: сосновые леса, бухты и виллы среди природы.' } },
  { k: 'kas-kalkan', n: { tr: 'Kaş – Kalkan', en: 'Kaş – Kalkan', ru: 'Каш – Калкан' }, m: (v) => v.ilce === 'Kaş',
    d: { tr: 'Akdeniz’in en butik kıyıları: deniz manzaralı, havuzlu tatil villaları ve güçlü sezonluk kiralama talebi.', en: 'The Mediterranean’s most boutique coastline: sea-view holiday villas with pools and strong seasonal rental demand.', ru: 'Самое бутиковое побережье Средиземноморья: виллы с бассейном и видом на море, высокий сезонный спрос на аренду.' } },
  { ...MANAVGAT, m: (v) => v.ilce === 'Manavgat' },
  { k: 'alanya', n: { tr: 'Alanya', en: 'Alanya', ru: 'Аланья' }, m: (v) => v.ilce === 'Alanya',
    d: { tr: 'Kalesi, plajları ve uluslararası topluluğuyla Alanya: deniz manzaralı villalar ve yabancı alıcı ilgisi.', en: 'Alanya, with its castle, beaches and international community: sea-view villas with strong interest from foreign buyers.', ru: 'Аланья с крепостью, пляжами и международным сообществом: виллы с видом на море, высокий интерес иностранных покупателей.' } },
];
const regionOf = (v) => REG.find((r) => r.m(v))?.k || '';
const COL = [
  { k: 'pool', n: { tr: 'Havuzlu villalar', en: 'Villas with a pool', ru: 'Виллы с бассейном' }, m: (v) => (v.ozellikler || []).some((o) => /havuz/i.test(o)) },
  { k: 'site', n: { tr: 'Site içi villalar', en: 'Villas in a gated complex', ru: 'Виллы в охраняемом комплексе' }, m: (v) => v.site === 'Evet' },
  { k: 'det', n: { tr: 'Müstakil villalar', en: 'Detached villas', ru: 'Отдельностоящие виллы' }, m: (v) => v.site !== 'Evet' },
];
const T = {
  tr: {
    tag: 'Antalya’nın Villa Uzmanı',
    nav2: 'Villa Yaşamı', livT: 'Villa Yaşamı', livP: 'Bir villa, anahtar teslimiyle tamamlanmaz. Mobilyadan iç mimariye, akıllı ev sistemlerinden peyzaja kadar villanızı sizin hayatınıza göre hazırlayan seçkin çözüm ortaklarımızla çalışıyoruz. Tek muhatabınız biziz.',
    livCats: ['Mobilya ve tasarım', 'Mimarlık ve iç mimari', 'Akıllı ev ve elektronik', 'Peyzaj ve havuz', 'Güvenlik', 'Sanat ve dekor'], livAsk: 'Villanız için teklif isteyin',
    enneT: 'Mobilya ve tasarım çözüm ortağımız', enneP: 'ENNE, 1999’dan bu yana çağdaş tasarım üzerine çalışan, iF Design ödüllü ve Salone del Mobile Milano’da yer alan bir Türk mobilya markasıdır. Özellikle özel villa projelerinde öne çıkan ENNE’nin Antalya’daki temsilcisi ENNE Antalya, ACC VILLAS’ın mobilya ve tasarım çözüm ortağıdır.',
    livTitle: 'Villa Yaşamı: Mobilya, İç Mimari ve VIP Hizmetler | ACC VILLAS', livDesc: 'Antalya’da villanız için mobilya, iç mimari, akıllı ev, peyzaj ve güvenlik çözümleri. Mobilya ve tasarım çözüm ortağımız ENNE Antalya.', nav: { list: 'Satılık', rent: 'Kiralık', projects: 'Projeler', regions: 'Bölgeler', sell: 'Villanızı Satın' },
    homeTitle: 'Antalya Satılık Villa | Yalnızca Villa · ACC VILLAS',
    homeDesc: 'Antalya’da yalnızca villa ile çalışan uzman ekip: satılık ve kiralık villalar, villa projeleri ve ücretsiz değerleme. Konyaaltı, Döşemealtı, Lara, Belek, Kaş ve Alanya’da seçkin villalar; alımdan tapuya VIP hizmet.',
    h1: 'Antalya’nın seçkin villaları', sub: 'Satılık ve kiralık villalar, villa projeleri ve alımdan tapuya kadar uçtan uca VIP hizmet. Siz karar verin, gerisini biz halledelim.',
    s: { region: 'Bölge', any: 'Tüm bölgeler', type: 'İşlem', sale: 'Satılık', rent: 'Kiralık', go: 'Villaları göster' },
    featured: 'Öne çıkan villalar', all: 'Tüm villalar', regionsT: 'Bölgelere göre villalar', regionsP: 'Antalya’nın her bölgesinin kendine has bir hayatı var. Size uygun olanı birlikte bulalım.',
    colT: 'Koleksiyonlar', offT: 'Gizli satış (off-market)', offP: 'Bazı villalar ilan olarak yayınlanmaz. Sahibinin isteğiyle yalnızca doğrulanmış alıcılara gösterilir. Aradığınızı söyleyin, size özel portföyümüzü açalım.', offBtn: 'Özel portföyü sor',
    svcT: 'A’dan Z’ye hizmet', svc: [['Online gösterim', 'Görüntülü görüşmeyle villayı bulunduğunuz yerden gezin.'], ['Hukuki ön kontrol', 'Tapu, iskân, imar ve borç durumu satıştan önce kontrol edilir.'], ['Vekâletle alım', 'Türkiye’ye gelmeden, vekâletle tüm süreç tamamlanır.'], ['Tapu ve resmi işlemler', 'Vergi numarası, banka hesabı, tercüman ve tapu günü organizasyonu.'], ['Teslim sonrası', 'Abonelikler, sigorta, eşyalama, bakım ve kiraya verme yönetimi.'], ['Vatandaşlık ve ikamet', 'Yatırım yoluyla vatandaşlık ve ikamet süreçlerinde rehberlik.'], ['Open House ve özel davetler', 'Villayı kalabalık olmadan, özenle ağırlandığınız özel gösterim günlerinde yerinde görün.'], ['Villa Yaşamı', 'Mobilya, iç mimari, akıllı ev ve peyzajda seçkin çözüm ortaklarımızla tek muhatap.']],
    ceoT: 'Kurucudan', ceoQ: 'Villa almak ya da satmak, hayatın en önemli kararlarından biridir. ACC VILLAS’ta her villayı yerinde görür, her müşterimizle bizzat ilgileniriz. Siz yalnızca karar verin; gerisini biz halledelim.',
    meet: 'Görüşme planla', sellT: 'Villanızı satmak mı istiyorsunuz?', sellP: 'Doğru fiyat, doğru alıcı, tam gizlilik. Ücretsiz değerlemeyle başlayın.', valueT: 'Ücretsiz değerleme',
    valueP: 'Bölgedeki gerçek satışlar ve güncel ilanlarla karşılaştırarak villanız için gerçekçi bir fiyat aralığı çıkarıyoruz. Ücretsiz ve bağlayıcı değil.',
    projT: 'Villa projeleri', projP: 'ACC HOMES’un portföyündeki ve yetkili olduğu villa projeleri.',
    price: 'Fiyat', call: 'Fiyat için arayın', rooms: 'Oda', gross: 'Brüt', land: 'Arsa', site: 'Site içi', villas: 'villa',
    details: 'Villa bilgileri', features: 'Özellikler', ask: 'Bu villa hakkında bilgi alın', wa: 'WhatsApp', callBtn: 'Ara',
    form: { name: 'Ad Soyad', phone: 'Telefon', email: 'E-posta', msg: 'Mesajınız', send: 'Gönder', cc: 'Ülke kodu', addr: 'Villanın konumu (ilçe / mahalle)', size: 'Brüt m² / arsa m²', consent: 'Kişisel verilerimin iletişim amacıyla işlenmesini kabul ediyorum.', kvkk: 'Aydınlatma metni' },
    ok: 'Teşekkürler, talebiniz bize ulaştı. En kısa sürede dönüş yapacağız.',
    listT: 'Antalya Satılık Villalar', listD: 'Antalya’daki satılık villalarımız: Konyaaltı, Döşemealtı, Lara, Altıntaş, Belek ve diğer bölgeler. Güncel fiyatlar ve detaylı bilgiler.',
    rentT: 'Antalya Kiralık Villalar', rentD: 'Antalya’da uzun dönem ve sezonluk kiralık villalar: havuzlu, bahçeli, eşyalı seçenekler. Kiracı ve ev sahibi için güvenli sözleşme.',
    empty: 'Bu seçimde şu an yayında villa yok. Ne aradığınızı yazın; yayında olmayan özel portföyümüzden size uygun villaları gönderelim.',
    regionH: (n) => `${n} satılık ve kiralık villalar`, regionD: (n) => `${n} bölgesindeki villalarımız, bölge hakkında bilgiler ve size özel villa arama hizmeti.`,
    filterAll: 'Tümü', sold: 'Satıldı', rentB: 'Kiralık', by: 'ACC HOMES International Real Estate’in villa iştirakidir.', office: 'ACC Plaza, Portakal Çiçeği Bulvarı No:36/B, Yeşilbahçe, Muratpaşa / Antalya', back: 'Tüm villalar',
    sellPage: { title: 'Villamı Satmak İstiyorum | ACC VILLAS Antalya', desc: 'Antalya’da villanızı doğru fiyata satın: ücretsiz değerleme, profesyonel çekim, yurt içi ve yurt dışı pazarlama, istenirse gizli satış.', h1: 'Villanızı doğru fiyata, doğru alıcıya satalım', steps: [['Ücretsiz değerleme', 'Emsal satış ve ilan verileriyle gerçekçi fiyat aralığı.'], ['Profesyonel tanıtım', 'Fotoğraf, video ve drone çekimi; özenli ilan metni.'], ['Doğru alıcıya ulaşım', 'Türk ve yabancı alıcı ağı, uluslararası portallar, hedefli reklam.'], ['İsterseniz gizli satış', 'Villanız ilan olarak yayınlanmaz, yalnızca doğrulanmış alıcılara gösterilir.'], ['Tapuya kadar yanınızda', 'Pazarlık, sözleşme, banka ve tapu süreçleri.']] },
    valuePage: { title: 'Ücretsiz Villa Değerlemesi Antalya | ACC VILLAS', desc: 'Antalya’daki villanızın değerini ücretsiz öğrenin. Emsal verilere dayalı, bağlayıcı olmayan fiyat analizi.', h1: 'Villanızın değerini ücretsiz öğrenin' },
    projPage: { title: 'Antalya Villa Projeleri | ACC VILLAS', desc: 'Antalya’daki villa projeleri: güncel villalar, fiyatlar ve yerinde sunum.' },
    regPage: { title: 'Antalya Villa Bölgeleri | ACC VILLAS', desc: 'Konyaaltı, Döşemealtı, Lara–Kundu, Altıntaş, Kepez–Duacı, Belek, Kemer, Kaş–Kalkan ve Alanya’da villa yaşamı ve satılık villalar.' },
  },
  en: {
    tag: 'Antalya’s Villa Specialists',
    nav2: 'Villa Living', livT: 'Villa Living', livP: 'A villa is not finished when the keys are handed over. From furniture and interior architecture to smart-home systems and landscaping, we work with carefully chosen partners who prepare your villa around your life. We remain your single point of contact.',
    livCats: ['Furniture and design', 'Architecture and interiors', 'Smart home and electronics', 'Landscaping and pools', 'Security', 'Art and décor'], livAsk: 'Request a proposal for your villa',
    enneT: 'Our furniture and design partner', enneP: 'ENNE is a Turkish furniture brand working in contemporary design since 1999, with iF Design awards and a presence at Salone del Mobile Milano, and is known in particular for private villa projects. ENNE Antalya, the brand’s representative in Antalya, is the furniture and design partner of ACC VILLAS.',
    livTitle: 'Villa Living: Furniture, Interiors and VIP Services | ACC VILLAS', livDesc: 'Furniture, interior design, smart home, landscaping and security for your villa in Antalya. Our furniture and design partner: ENNE Antalya.', nav: { list: 'For sale', rent: 'For rent', projects: 'Projects', regions: 'Areas', sell: 'Sell your villa' },
    homeTitle: 'Villas for Sale in Antalya | Villa-Only Specialists · ACC VILLAS',
    homeDesc: 'Antalya’s villa-only real estate specialists: villas for sale and rent, villa developments and free valuation. Konyaaltı, Döşemealtı, Lara, Belek, Kaş and Alanya, with VIP service from viewing to title deed.',
    h1: 'Antalya’s finest villas', sub: 'Villas for sale and rent, new villa developments and end-to-end VIP service through to the title deed. You decide; we take care of everything else.',
    s: { region: 'Area', any: 'All areas', type: 'Looking to', sale: 'Buy', rent: 'Rent', go: 'Show villas' },
    featured: 'Featured villas', all: 'All villas', regionsT: 'Villas by area', regionsP: 'Every part of Antalya has its own way of life. Let us help you find yours.',
    colT: 'Collections', offT: 'Off-market villas', offP: 'Some villas are never listed publicly. At the owner’s request, they are shown only to verified buyers. Tell us what you are looking for and we will open our private portfolio to you.', offBtn: 'Ask about private listings',
    svcT: 'Service from A to Z', svc: [['Online viewings', 'Tour the villa by video call, wherever you are.'], ['Legal due diligence', 'Title deed, occupancy permit, zoning and debts checked before you buy.'], ['Buy by power of attorney', 'Complete the whole purchase without travelling to Türkiye.'], ['Title deed and paperwork', 'Tax number, bank account, sworn translator and title deed day arranged.'], ['After handover', 'Utilities, insurance, furnishing, maintenance and rental management.'], ['Citizenship and residence', 'Guidance on citizenship by investment and residence permits.'], ['Open House and private events', 'See the villa in person on carefully hosted private viewing days.'], ['Villa Living', 'Furniture, interiors, smart home and landscaping with chosen partners, one point of contact.']],
    ceoT: 'From the founder', ceoQ: 'Buying or selling a villa is one of life’s biggest decisions. At ACC VILLAS we see every villa in person and look after every client ourselves. You make the decision; we take care of the rest.',
    meet: 'Book a call', sellT: 'Thinking of selling your villa?', sellP: 'The right price, the right buyer, full discretion. Start with a free valuation.', valueT: 'Free valuation',
    valueP: 'We compare real sales and current listings in your area to give a realistic price range for your villa. Free and non-binding.',
    projT: 'Villa developments', projP: 'Villa developments in ACC HOMES’ portfolio, including projects we are authorised to sell.',
    price: 'Price', call: 'Price on request', rooms: 'Rooms', gross: 'Gross', land: 'Plot', site: 'Gated complex', villas: 'villas',
    details: 'Villa details', features: 'Features', ask: 'Ask about this villa', wa: 'WhatsApp', callBtn: 'Call',
    form: { name: 'Full name', phone: 'Phone', email: 'Email', msg: 'Your message', send: 'Send', cc: 'Country code', addr: 'Villa location (district / neighbourhood)', size: 'Gross m² / plot m²', consent: 'I agree to my personal data being processed to contact me.', kvkk: 'Privacy notice' },
    ok: 'Thank you, we have received your request and will get back to you shortly.',
    listT: 'Villas for Sale in Antalya', listD: 'Our villas for sale in Antalya: Konyaaltı, Döşemealtı, Lara, Altıntaş, Belek and more. Current prices and full details.',
    rentT: 'Villas for Rent in Antalya', rentD: 'Long-term and seasonal villa rentals in Antalya: villas with a private pool, garden and furniture, with a secure rental contract.',
    empty: 'There are no villas listed for this selection right now. Tell us what you are looking for and we will send you matching villas from our private portfolio.',
    regionH: (n) => `Villas for sale and rent in ${n}`, regionD: (n) => `Our villas in ${n}, what the area is like, and a personal villa search service.`,
    filterAll: 'All', sold: 'Sold', rentB: 'For rent', by: 'ACC VILLAS is a villa affiliate of ACC HOMES International Real Estate.', office: 'ACC Plaza, Portakal Çiçeği Blv. No:36/B, Yeşilbahçe, Muratpaşa / Antalya', back: 'All villas',
    sellPage: { title: 'Sell Your Villa in Antalya | ACC VILLAS', desc: 'Sell your villa in Antalya at the right price: free valuation, professional photography, local and international marketing, discreet off-market sale on request.', h1: 'Sell your villa at the right price, to the right buyer', steps: [['Free valuation', 'A realistic price range based on comparable sales.'], ['Professional presentation', 'Photo, video and drone shoots with a carefully written listing.'], ['Reaching the right buyer', 'Turkish and international buyer network, international portals, targeted ads.'], ['Discreet sale if you prefer', 'Your villa is not listed publicly and is shown only to verified buyers.'], ['With you to the title deed', 'Negotiation, contract, bank and land registry.']] },
    valuePage: { title: 'Free Villa Valuation in Antalya | ACC VILLAS', desc: 'Find out what your villa in Antalya is worth, free. A non-binding price analysis based on comparable data.', h1: 'Find out what your villa is worth, free' },
    projPage: { title: 'Villa Developments in Antalya | ACC VILLAS', desc: 'Villa developments in Antalya: available villas, prices and on-site presentations.' },
    regPage: { title: 'Antalya Villa Areas | ACC VILLAS', desc: 'Villa living and villas for sale in Konyaaltı, Döşemealtı, Lara–Kundu, Altıntaş, Kepez–Duacı, Belek, Kemer, Kaş–Kalkan and Alanya.' },
  },
  ru: {
    tag: 'Эксперты по виллам в Анталии',
    nav2: 'Жизнь в вилле', livT: 'Жизнь в вилле', livP: 'Вилла не заканчивается передачей ключей. От мебели и интерьера до систем «умный дом» и ландшафта — мы работаем с тщательно отобранными партнёрами, которые подготовят виллу под вашу жизнь. Вашим единственным контактом остаёмся мы.',
    livCats: ['Мебель и дизайн', 'Архитектура и интерьер', 'Умный дом и электроника', 'Ландшафт и бассейны', 'Безопасность', 'Искусство и декор'], livAsk: 'Запросить предложение для вашей виллы',
    enneT: 'Наш партнёр по мебели и дизайну', enneP: 'ENNE — турецкий мебельный бренд, работающий в современном дизайне с 1999 года, лауреат iF Design и участник Salone del Mobile в Милане, особенно известный проектами частных вилл. ENNE Antalya, представитель бренда в Анталии, — партнёр ACC VILLAS по мебели и дизайну.',
    livTitle: 'Жизнь в вилле: мебель, интерьер и VIP-услуги | ACC VILLAS', livDesc: 'Мебель, дизайн интерьера, умный дом, ландшафт и безопасность для вашей виллы в Анталии. Наш партнёр по мебели и дизайну — ENNE Antalya.', nav: { list: 'Продажа', rent: 'Аренда', projects: 'Проекты', regions: 'Районы', sell: 'Продать виллу' },
    homeTitle: 'Купить виллу в Анталии, Турция | Только виллы · ACC VILLAS',
    homeDesc: 'Агентство в Анталии, работающее только с виллами: виллы на продажу и в аренду, проекты вилл и бесплатная оценка. Коньяалты, Дёшемеалты, Лара, Белек, Каш и Аланья — VIP-сопровождение до получения тапу.',
    h1: 'Лучшие виллы Анталии', sub: 'Виллы на продажу и в аренду, новые проекты и VIP-сопровождение до получения тапу. Вы принимаете решение — всё остальное мы берём на себя.',
    s: { region: 'Район', any: 'Все районы', type: 'Цель', sale: 'Купить', rent: 'Арендовать', go: 'Показать виллы' },
    featured: 'Избранные виллы', all: 'Все виллы', regionsT: 'Виллы по районам', regionsP: 'У каждого района Анталии свой образ жизни. Поможем найти ваш.',
    colT: 'Подборки', offT: 'Закрытые продажи (off-market)', offP: 'Некоторые виллы не публикуются. По желанию владельца их показывают только проверенным покупателям. Расскажите, что вы ищете, и мы откроем для вас закрытый портфель.', offBtn: 'Узнать о закрытых объектах',
    svcT: 'Сопровождение от А до Я', svc: [['Онлайн-показ', 'Осмотр виллы по видеосвязи, где бы вы ни были.'], ['Юридическая проверка', 'Тапу, разрешение на заселение, зонирование и долги проверяются до покупки.'], ['Покупка по доверенности', 'Вся сделка без поездки в Турцию.'], ['Тапу и документы', 'Налоговый номер, банковский счёт, переводчик и день оформления тапу.'], ['После передачи', 'Коммунальные услуги, страхование, меблировка, обслуживание и управление арендой.'], ['Гражданство и ВНЖ', 'Сопровождение по гражданству за инвестиции и виду на жительство.'], ['Дни открытых дверей', 'Осмотр виллы на спокойных частных показах.'], ['Жизнь в вилле', 'Мебель, интерьер, умный дом и ландшафт с отобранными партнёрами, один контакт.']],
    ceoT: 'Слово основателя', ceoQ: 'Покупка или продажа виллы — одно из самых важных решений в жизни. В ACC VILLAS мы лично осматриваем каждую виллу и сами ведём каждого клиента. Вы принимаете решение — остальное мы берём на себя.',
    meet: 'Назначить звонок', sellT: 'Хотите продать виллу?', sellP: 'Правильная цена, правильный покупатель, полная конфиденциальность. Начните с бесплатной оценки.', valueT: 'Бесплатная оценка',
    valueP: 'Сравниваем реальные сделки и актуальные объявления в вашем районе и даём реалистичный ценовой диапазон. Бесплатно и ни к чему не обязывает.',
    projT: 'Проекты вилл', projP: 'Проекты вилл в портфеле ACC HOMES.',
    price: 'Цена', call: 'Цена по запросу', rooms: 'Комнаты', gross: 'Общая', land: 'Участок', site: 'В комплексе', villas: 'вилл',
    details: 'Характеристики', features: 'Особенности', ask: 'Узнать об этой вилле', wa: 'WhatsApp', callBtn: 'Позвонить',
    form: { name: 'Имя и фамилия', phone: 'Телефон', email: 'E-mail', msg: 'Сообщение', send: 'Отправить', cc: 'Код страны', addr: 'Расположение виллы (район)', size: 'Общая м² / участок м²', consent: 'Я согласен на обработку персональных данных для связи со мной.', kvkk: 'Политика конфиденциальности' },
    ok: 'Спасибо, ваша заявка получена. Мы скоро свяжемся с вами.',
    listT: 'Виллы на продажу в Анталии', listD: 'Наши виллы на продажу в Анталии: Коньяалты, Дёшемеалты, Лара, Алтынташ, Белек и другие районы. Актуальные цены и подробности.',
    rentT: 'Аренда вилл в Анталии', rentD: 'Долгосрочная и сезонная аренда вилл в Анталии: с частным бассейном, садом и мебелью, с надёжным договором.',
    empty: 'Сейчас по этому выбору нет опубликованных вилл. Напишите, что вы ищете, и мы пришлём подходящие виллы из закрытого портфеля.',
    regionH: (n) => `Виллы на продажу и в аренду: ${n}`, regionD: (n) => `Наши виллы в районе ${n}, информация о районе и персональный подбор виллы.`,
    filterAll: 'Все', sold: 'Продано', rentB: 'Аренда', by: 'ACC VILLAS — дочерняя компания ACC HOMES International Real Estate по виллам.', office: 'ACC Plaza, бульвар Портакал Чичеги 36/B, Ешильбахче, Муратпаша / Анталия', back: 'Все виллы',
    sellPage: { title: 'Продать виллу в Анталии | ACC VILLAS', desc: 'Продайте виллу в Анталии по правильной цене: бесплатная оценка, профессиональная съёмка, маркетинг в Турции и за рубежом, по желанию — закрытая продажа.', h1: 'Продадим вашу виллу по правильной цене правильному покупателю', steps: [['Бесплатная оценка', 'Реалистичный диапазон цены на основе сопоставимых сделок.'], ['Профессиональная подача', 'Фото, видео и съёмка с дрона, качественное описание.'], ['Правильный покупатель', 'Сеть турецких и иностранных покупателей, международные порталы, реклама.'], ['Закрытая продажа по желанию', 'Вилла не публикуется и показывается только проверенным покупателям.'], ['До получения тапу', 'Переговоры, договор, банк и кадастр.']] },
    valuePage: { title: 'Бесплатная оценка виллы в Анталии | ACC VILLAS', desc: 'Узнайте стоимость вашей виллы в Анталии бесплатно. Анализ цены на основе сопоставимых данных.', h1: 'Узнайте стоимость вашей виллы бесплатно' },
    projPage: { title: 'Проекты вилл в Анталии | ACC VILLAS', desc: 'Проекты вилл в Анталии: доступные виллы, цены и показ на месте.' },
    regPage: { title: 'Районы вилл Анталии | ACC VILLAS', desc: 'Жизнь в вилле и виллы на продажу: Коньяалты, Дёшемеалты, Лара–Кунду, Алтынташ, Кепез–Дуаджи, Белек, Кемер, Каш–Калкан и Аланья.' },
  },
};
for (const l of ['tr', 'en', 'ru']) Object.assign(SEG[l], SEG2[l], SEG3[l], SEG4[l]);
const KVKK = { tr: '/kvkk-aydinlatma-metni/', en: '/en/privacy-notice/', ru: '/ru/politika-konfidencialnosti/' };

// ---------- veri ----------
const SEO = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/ilan-seo.json'), 'utf8'));
let rows;
try {
  // ACC VILLAS'ın kendi yayın listesi (panelde "ACC VILLAS'ta yayınla"); görünüm yoksa eski site listesine düşer
  let r = await fetch(`${PANEL.url}/rest/v1/villa_ilanlari?select=*`, { headers: { apikey: PANEL.key }, signal: AbortSignal.timeout(20000) });
  if (r.ok) { rows = (await r.json()).map((x) => ({ ...x, _villa: true })); } else {
  r = await fetch(`${PANEL.url}/rest/v1/site_ilanlari?select=*`, { headers: { apikey: PANEL.key }, signal: AbortSignal.timeout(20000) });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  rows = await r.json(); }
} catch (e) {
  const snap = process.env.PANEL_SNAPSHOT;
  if (!snap || !fs.existsSync(snap)) throw new Error('Panel verisi alınamadı: ' + e.message);
  rows = JSON.parse(fs.readFileSync(snap, 'utf8'));
  console.warn('Panel: ağ yok, anlık görüntü kullanıldı');
}
// Kendi fotoğrafı olmayan ilanlarda Sahibinden görselleri kullanılır (Caner kararı, 22.11.2026); kendi fotoğraf varsa önce onlar
for (const v of rows) { const f = v.foto || []; const own = f.filter((x) => !/shbdn\.com|sahibinden/i.test(x)); v.foto = own.length ? own : f; }
const stripTeam = (txt, name) => {
  const pats = ['iş ortağ', 'danışman', 'partner', 'партн', 'консультант', ...(name ? [name, name.split(' ').slice(-1)[0]] : [])].map((x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const re = new RegExp(`[^.!?\\n]*(${pats.join('|')})[^.!?\\n]*[.!?]?[ \\t]*`, 'giu');
  return txt.replace(re, '').replace(/\n{3,}/g, '\n\n').trim();
};
// accvillas.com'a özgü başlık ve metin (acchomesantalya ilan metniyle çakışmasın diye veriden üretilir)
const hasPool = (v) => (v.ozellikler || []).some((o) => /havuz/i.test(o)) || /havuz/i.test(JSON.stringify(v.ekstra?.ozellik_gruplari || {}));
const kindOf = (v, lang) => (v.altTip === 'Müstakil Ev' ? { tr: 'Müstakil Ev', en: 'Detached House', ru: 'Частный дом' } : { tr: 'Villa', en: 'Villa', ru: 'Вилла' })[lang];
const loc = (v) => [v.mahalle, v.ilce].filter(Boolean).join(', ');
const genTitle = (v, lang) => {
  const p = hasPool(v); const k = kindOf(v, lang); const m2 = v.brut ? ` · ${v.brut} m²` : '';
  if (lang === 'tr') return `${loc(v)} ${v.kiralik ? 'Kiralık' : 'Satılık'} ${v.oda || ''} ${p ? 'Havuzlu ' : ''}${k}${m2}`.replace(/\s+/g, ' ');
  if (lang === 'en') return `${v.oda || ''} ${p ? (k === 'Villa' ? 'Villa with Private Pool' : k + ' with Pool') : k} for ${v.kiralik ? 'Rent' : 'Sale'} in ${loc(v)}${m2}`.replace(/\s+/g, ' ').trim();
  return `${k} ${v.oda || ''}${p ? ' с бассейном' : ''} ${v.kiralik ? 'в аренду' : 'на продажу'}: ${loc(v)}${m2}`.replace(/\s+/g, ' ');
};
const VIEW = { 'Deniz': ['deniz', 'sea', 'море'], 'Doğa': ['doğa', 'nature', 'природу'], 'Dağ': ['dağ', 'mountain', 'горы'], 'Şehir': ['şehir', 'city', 'город'], 'Park & Yeşil Alan': ['yeşil alan', 'greenery', 'зелень'], 'Göl': ['göl', 'lake', 'озеро'] };
const genText = (v, lang) => {
  const og = v.ekstra?.ozellik_gruplari || {}; const li = ['tr', 'en', 'ru'].indexOf(lang);
  const views = (og.Manzara || []).map((x) => VIEW[x]?.[li]).filter(Boolean);
  const pool = hasPool(v); const k = kindOf(v, lang).toLowerCase(); const ex = REG_EXTRA[v.reg]?.[lang] || '';
  const P = [];
  if (lang === 'tr') {
    P.push(`${loc(v)} bölgesinde, ${v.arsa ? `${v.arsa} m² arsa üzerinde ` : ''}${v.brut ? `${v.brut} m² brüt kullanım alanına sahip ` : ''}${v.oda || ''} ${k}.${v.site === 'Evet' ? ' Site içinde, güvenlikli bir yaşam sunuyor.' : ' Müstakil yapısıyla mahremiyet ve sakin bir yaşam sunuyor.'}`);
    const h = [pool && 'özel havuz', v.banyo && `${v.banyo} banyo`, v.katSayisi && `${v.katSayisi} katlı plan`, views.length && `${views.join(' ve ')} manzarası`, v.esya === 'Evet' && 'eşyalı teslim'].filter(Boolean);
    if (h.length) P.push(`Öne çıkanlar: ${h.join(', ')}.`);
    if (ex) P.push(ex);
    P.push('ACC VILLAS olarak bu mülkü yerinde ya da online gösterimle tanıtıyor; hukuki ön kontrol, emsal analizi ve tapu sürecinde yanınızda oluyoruz.');
  } else if (lang === 'en') {
    P.push(`A ${v.oda || ''} ${k} in ${loc(v)}${v.brut ? ` with ${v.brut} m² of gross living space` : ''}${v.arsa ? ` on a ${v.arsa} m² plot` : ''}.${v.site === 'Evet' ? ' Set in a secure gated complex.' : ' Fully detached, offering privacy and a quiet way of life.'}`.replace(/\s+/g, ' '));
    const h = [pool && 'private pool', v.banyo && `${v.banyo} bathrooms`, v.katSayisi && `${v.katSayisi} floors`, views.length && `${views.join(' and ')} views`, v.esya === 'Evet' && 'furnished'].filter(Boolean);
    if (h.length) P.push(`Highlights: ${h.join(', ')}.`);
    if (ex) P.push(ex);
    P.push('ACC VILLAS presents this villa in person or by online viewing, and supports you with legal checks, comparable-sales analysis and the title deed process.');
  } else {
    P.push(`${kindOf(v, 'ru')} ${v.oda || ''} в районе ${loc(v)}${v.brut ? `, общая площадь ${v.brut} м²` : ''}${v.arsa ? `, участок ${v.arsa} м²` : ''}.${v.site === 'Evet' ? ' Расположена в охраняемом комплексе.' : ' Отдельностоящий дом: приватность и спокойная жизнь.'}`);
    const h = [pool && 'частный бассейн', v.banyo && `санузлов: ${v.banyo}`, v.katSayisi && `этажей: ${v.katSayisi}`, views.length && `вид на ${views.join(' и ')}`, v.esya === 'Evet' && 'с мебелью'].filter(Boolean);
    if (h.length) P.push(`Особенности: ${h.join(', ')}.`);
    if (ex) P.push(ex);
    P.push('ACC VILLAS проводит личные и онлайн-показы, юридическую проверку, анализ цен и сопровождает сделку до получения тапу.');
  }
  return P.join('\n');
};
const isVilla = (v) => ['Villa', 'Müstakil Ev'].includes(v.altTip) || v.ekstra?.tur === 'Villa';
const VILLAS = rows.filter((v) => (v._villa || isVilla(v)) && (v.foto || []).length && v.satis_durumu !== 'Pasif')
  .map((v) => {
    const s = SEO[v.id] || {};
    const pick = (o, lang) => (o && (o[lang] || (lang !== 'tr' && o.en) || o.tr)) || '';
    const tel = String(v.danisman_tel || '').replace(/[^\d+]/g, '');
    return {
      ...v, slug: v.id.toLowerCase(), kiralik: v.tip === 'Kiralık', satildi: v.satis_durumu === 'Satıldı', fiyatGizli: !!v.ekstra?.fiyat_gizli || !v.fiyat,
      title: (lang) => genTitle(v, lang),
      meta: (lang) => genText(v, lang).replace(/\n/g, ' ').slice(0, 155),
      // ekip adı geçen cümleler çıkarılır (sitede yalnızca Caner görünür)
      text: (lang) => genText(v, lang),
      // sitede ekip gösterilmez: tüm villalarda iletişim Ali Caner Can (Broker)
      agent: { ad: 'Ali Caner Can · Broker', tel: PHONE.raw },
    };
  })
  .sort((a, b) => (a.satildi - b.satildi) || (b.created_at || '').localeCompare(a.created_at || ''));
console.log(`ACC VILLAS: ${rows.length} panel ilanından ${VILLAS.length} villa`);

// ---------- döviz (TCMB, her derlemede) ----------
let RATES = { USD: 0, EUR: 0, date: '' };
try {
  const xml = await (await fetch('https://www.tcmb.gov.tr/kurlar/today.xml', { signal: AbortSignal.timeout(15000) })).text();
  const g = (c) => Number((xml.match(new RegExp(`CurrencyCode="${c}"[\\s\\S]*?<ForexSelling>([\\d.]+)<`)) || [])[1] || 0);
  RATES = { USD: g('USD'), EUR: g('EUR'), date: (xml.match(/Tarih="([^"]+)"/) || [])[1] || '' };
} catch (e) { console.warn('TCMB kuru alınamadı:', e.message); }
const DEF_CUR = { tr: 'TRY', en: 'USD', ru: 'USD' };
const beds = (v) => Number(String(v.oda || '').split('+')[0]) || 0;

// ---------- yardımcılar ----------
for (const v of VILLAS) { v.reg = regionOf(v); v.cols = COL.filter((c) => c.m(v)).map((c) => c.k); }
for (const v of VILLAS) { v.title = (l) => genTitle(v, l); v.text = (l) => genText(v, l); v.meta = (l) => genText(v, l).replace(/\n/g, ' ').slice(0, 155); }
const url = (lang, key, id) => `${BASE[lang]}/${key ? SEG[lang][key] + '/' : ''}${id ? id + '/' : ''}`;
const price = (v, lang) => (v.fiyatGizli ? T[lang].call : `${nf.format(Number(v.fiyat))} ${v.para === 'TL' ? '₺' : v.para}${v.kiralik ? (lang === 'tr' ? ' / ay' : lang === 'ru' ? ' / мес.' : ' / month') : ''}`);
const priceH = (v, lang) => (v.fiyatGizli ? esc(T[lang].call) : `<span class="pz" data-p="${Number(v.fiyat)}" data-c="${v.para === 'TL' ? 'TRY' : v.para}">${esc(price(v, lang))}</span>`);
const regName = (k, lang) => REG.find((r) => r.k === k)?.n[lang] || '';
const area = (v, lang) => { const r = v.reg ? regName(v.reg, lang) : v.ilce; return v.mahalle && !r.includes(v.mahalle) ? `${v.mahalle}, ${r}` : r; };
const telIn = (lang, req = true) => `<div class="tel"><select name="ulke_kodu" aria-label="${T[lang].form.cc}">${DIAL.map(([c, d]) => `<option value="${d}"${d === DEF_DIAL[lang] && c !== 'KZ' ? ' selected' : ''}>${c} ${d}</option>`).join('')}</select><input name="telefon" type="tel" placeholder="${T[lang].form.phone}${req ? ' *' : ''}"${req ? ' required' : ''} autocomplete="tel-national"></div>`;
const consent = (lang) => `<label class="chk"><input type="checkbox" name="kvkk_onay" value="evet" required> <span>${T[lang].form.consent} <a href="${KVKK[lang]}" target="_blank" rel="noopener">${T[lang].form.kvkk}</a> *</span></label>`;
function form(lang, name, next, extra = '', btn) {
  const f = T[lang].form;
  return `<form class="form" method="POST" action="/form.php"><input type="hidden" name="form-name" value="${name}"><input type="hidden" name="_next" value="${next}"><input type="hidden" name="dil" value="${lang}"><input type="hidden" name="site" value="accvillas.com"><p class="hp"><input name="bot" tabindex="-1" autocomplete="off"></p>
<input name="ad" placeholder="${f.name} *" required autocomplete="name">${telIn(lang)}<input name="eposta" type="email" placeholder="${f.email}" autocomplete="email">${extra}<textarea name="mesaj" rows="3" placeholder="${f.msg}"></textarea>${consent(lang)}<button class="btn" type="submit">${btn || f.send}</button></form>`;
}
const card = (v, lang) => `<a class="card" href="${url(lang, 'villa', v.slug)}" data-r="${v.reg}" data-c="${v.cols.join(' ')}" data-b="${beds(v)}"><div class="ph"><img src="${esc(v.foto[0])}" alt="${esc(v.title(lang))}" loading="lazy" width="640" height="427">${v.satildi ? `<span class="badge">${T[lang].sold}</span>` : v.kiralik ? `<span class="badge g">${T[lang].rentB}</span>` : ''}</div><div class="cb"><p class="loc">${esc(area(v, lang))}</p><h3>${esc(v.title(lang))}</h3><p class="specs">${[v.oda, v.brut && v.brut + ' m²', v.arsa && `${T[lang].land} ${v.arsa} m²`].filter(Boolean).join(' · ')}</p><p class="pr">${priceH(v, lang)}</p></div></a>`;
const CEO_IMG = fs.existsSync(path.join(HERE, 'static/ceo.webp')) ? '/ceo.webp' : '';
const ceoPic = (cls = '') => (CEO_IMG ? `<img class="ceopic ${cls}" src="${CEO_IMG}" alt="${CEO.name}" width="160" height="160">` : `<span class="ceopic mono ${cls}" aria-hidden="true">AC</span>`);
const broker = (lang, ctx = '') => { const t = T[lang]; const wa = `https://wa.me/${PHONE.wa}${ctx ? '?text=' + encodeURIComponent(ctx) : ''}`;
  return `<div class="broker">${ceoPic()}<div><p class="bn"><a href="${url(lang, 'founder')}">${CEO.name}</a></p><p class="br">${CEO.role[lang]} · ACC VILLAS</p></div></div><p class="acts"><a class="btn" href="${wa}">${t.wa}</a><a class="btn ghost dark" href="tel:${PHONE.raw}">${t.callBtn}</a></p>`; };
const offerDlg = (lang, v, title) => { const o = X[lang].offer; const f = T[lang].form;
  return `<dialog class="offer"><form method="POST" action="/form.php" class="form"><button type="button" class="x" data-close aria-label="${o.close}">×</button><h2>${o.title}</h2><p class="small">${esc(title)} · ${v.id}</p><p class="small">${o.note}</p><input type="hidden" name="form-name" value="villa-teklif"><input type="hidden" name="_next" value="${url(lang, 'villa', v.slug)}"><input type="hidden" name="dil" value="${lang}"><input type="hidden" name="site" value="accvillas.com"><input type="hidden" name="ilan" value="${v.id}"><p class="hp"><input name="bot" tabindex="-1" autocomplete="off"></p>
<div class="tel"><select name="teklif_para">${['TRY', 'USD', 'EUR'].map((c) => `<option${c === DEF_CUR[lang] ? ' selected' : ''}>${c}</option>`).join('')}</select><input name="teklif_tutari" type="number" min="1" step="1" placeholder="${o.amount} *" required></div>
<select name="odeme_sekli" required><option value="">${o.pay} *</option>${o.payO.map((x) => `<option>${x}</option>`).join('')}</select><select name="zamanlama" required><option value="">${o.when} *</option>${o.whenO.map((x) => `<option>${x}</option>`).join('')}</select>
<input name="ad" placeholder="${f.name} *" required autocomplete="name">${telIn(lang)}<input name="eposta" type="email" placeholder="${f.email} *" required autocomplete="email">${consent(lang)}<button class="btn" type="submit">${o.send}</button></form></dialog>`; };
const emptyBox = (lang, next) => `<div class="empty"><p>${T[lang].empty}</p>${form(lang, 'villa-talep', next)}</div>`;

const ORG = { '@context': 'https://schema.org', '@type': 'RealEstateAgent', name: 'ACC VILLAS', url: DOMAIN, telephone: PHONE.raw, founder: { '@type': 'Person', name: CEO.name, jobTitle: 'Founder & CEO' }, parentOrganization: { '@type': 'RealEstateAgent', name: 'ACC HOMES International Real Estate', url: MAIN }, address: { '@type': 'PostalAddress', streetAddress: 'Portakal Çiçeği Bulvarı No:36/B, Yeşilbahçe', addressLocality: 'Muratpaşa', addressRegion: 'Antalya', addressCountry: 'TR' }, areaServed: 'Antalya', description: 'Villa-only real estate specialists in Antalya: villas and large detached homes for sale and rent, villa developments, valuation.', sameAs: [IG.url] };

const NAVK = ['list', 'rent', 'antalle', 'regions', 'living', 'services'];
const NAVM0 = ['projects'];
const NAVM = ['marketing', 'projects', 'founder', 'openhouse', 'journal', 'sell', 'value'];
const navL = (lang, k) => ({ living: T[lang].nav2, openhouse: X[lang].oh.nav, services: NAV3[lang].services, journal: NAV3[lang].journal, founder: NAV3[lang].founder, value: T[lang].valueT, antalle: 'Antalle Concept Houses', marketing: MKT[lang].nav }[k] || T[lang].nav[k]);
function layout({ lang, title, desc, canon, alts, body, ld = [], image, offer = false }) {
  const t = T[lang]; const x = X[lang];
  const altLinks = alts ? LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${DOMAIN}${alts[l]}">`).join('') + `<link rel="alternate" hreflang="x-default" href="${DOMAIN}${alts.en}">` : '';
  const langSw = alts ? LANGS.map((l) => `<a href="${alts[l]}"${l === lang ? ' class="on"' : ''}>${l.toUpperCase()}</a>`).join('') : '';
  return `<!DOCTYPE html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><link rel="canonical" href="${DOMAIN}${canon}">${altLinks}
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${DOMAIN}${canon}"><meta property="og:type" content="website">${image ? `<meta property="og:image" content="${esc(image)}">` : ''}
<link rel="icon" href="${MAIN}/favicon.ico"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Great+Vibes&display=swap" rel="stylesheet"><link rel="stylesheet" href="/style.css?v=${VER}">
${[ORG, ...ld].map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('')}</head><body>
<header class="top"><div class="wrap hb"><a class="logo" href="${url(lang)}" aria-label="ACC VILLAS"><img src="/acc-kirmizi.svg" alt="ACC" width="64" height="45"><span class="lg-s">Villas</span><small>by ACC HOMES International Real Estate</small></a><button class="burger" type="button" aria-label="Menu"><i></i><i></i><i></i></button><nav>${NAVK.map((k) => `<a href="${url(lang, k)}">${navL(lang, k)}</a>`).join('')}<div class="dd"><button type="button">${NAV3[lang].more} ▾</button><div class="ddm">${NAVM.map((k) => `<a href="${url(lang, k)}">${navL(lang, k)}</a>`).join('')}</div></div></nav><div class="tools"><select class="cur" aria-label="${x.cur}"><option value="TRY">₺ TRY</option><option value="USD">$ USD</option><option value="EUR">€ EUR</option></select><a class="igl" href="${IG.url}" target="_blank" rel="noopener" aria-label="Instagram">IG</a><div class="lsw">${langSw}</div></div></div></header>
<p class="okmsg" hidden>${t.ok}</p>
<main>${body}</main>
<footer><div class="wrap fg"><div><p class="logo flogo"><img src="/acc-beyaz.svg" alt="ACC" width="80" height="56"><span class="lg-s">Villas</span><small>by ACC HOMES International Real Estate</small></p><p>${t.by}</p><p class="flinks"><a href="${url(lang, 'founder')}">${CEO.name} · ${CEO.role[lang]}</a><a href="${url(lang, 'services')}">${NAV3[lang].services}</a><a href="${url(lang, 'marketing')}">${MKT[lang].nav}</a><a href="${url(lang, 'journal')}">${NAV3[lang].journal}</a><a href="${url(lang, 'value')}">${t.valueT}</a><a href="${url(lang, 'sell')}">${t.nav.sell}</a><a href="${url(lang, 'openhouse')}">${x.oh.nav}</a><a href="${IG.url}" target="_blank" rel="noopener">Instagram ${IG.handle}</a><a href="${MAIN}${BASE[lang] || ''}/">acchomesantalya.com</a></p></div><div><p class="fh">${t.nav.regions}</p><p class="flinks">${REG.map((r) => `<a href="${url(lang, 'regions', r.k)}">${r.n[lang]}</a>`).join('')}</p></div><div><p>${t.office}</p><p><a href="tel:${PHONE.raw}">${PHONE.text}</a> · <a href="https://wa.me/${PHONE.wa}">WhatsApp</a></p><p><a href="${KVKK[lang]}">${t.form.kvkk}</a></p></div></div><p class="wrap cp">© ${new Date().getFullYear()} ACC VILLAS by ACC HOMES International Real Estate</p></footer>
<div class="dock"><a class="d-call" href="tel:${PHONE.raw}">${x.call}</a><a class="d-wa" href="https://wa.me/${PHONE.wa}">WhatsApp</a>${offer ? `<button class="d-off" type="button" data-offer>${x.offer.btn}</button>` : ''}</div>
<script>
if(/[?&]ok=1/.test(location.search))document.querySelector('.okmsg').hidden=false;
(function(){var g=document.querySelector('.grid[data-filter]');if(!g)return;var q=new URLSearchParams(location.search),st={r:q.get('r')||'',c:q.get('c')||'',b:0};
function ap(){var n=0;g.querySelectorAll('.card').forEach(function(c){var ok=(!st.r||c.dataset.r===st.r)&&(!st.c||(' '+c.dataset.c+' ').indexOf(' '+st.c+' ')>-1)&&(!st.b||(+c.dataset.b)>=st.b);c.hidden=!ok;if(ok)n++;});document.querySelectorAll('[data-fr]').forEach(function(b){b.classList.toggle('on',b.dataset.fr===st.r);});document.querySelectorAll('[data-fc]').forEach(function(b){b.classList.toggle('on',b.dataset.fc===st.c);});document.querySelectorAll('[data-fb]').forEach(function(b){b.classList.toggle('on',+b.dataset.fb===st.b);});var e=document.querySelector('.empty');if(e)e.hidden=n>0;}
document.querySelectorAll('[data-fr]').forEach(function(b){b.onclick=function(){st.r=b.dataset.fr;ap();};});document.querySelectorAll('[data-fc]').forEach(function(b){b.onclick=function(){st.c=st.c===b.dataset.fc?'':b.dataset.fc;ap();};});document.querySelectorAll('[data-fb]').forEach(function(b){b.onclick=function(){st.b=st.b===+b.dataset.fb?0:+b.dataset.fb;ap();};});ap();})();
(function(){var R=${JSON.stringify({ TRY: 1, USD: RATES.USD, EUR: RATES.EUR })},S={TRY:'₺',USD:'$',EUR:'€'},sel=document.querySelector('.cur'),cur='${DEF_CUR[lang]}';try{cur=localStorage.getItem('cur')||cur}catch(e){}if(!R.USD)return sel&&(sel.style.display='none');sel.value=cur;function f(n){return new Intl.NumberFormat('${lang === 'tr' ? 'tr-TR' : lang === 'ru' ? 'ru-RU' : 'en-US'}',{maximumFractionDigits:0}).format(n)}
function go(){document.querySelectorAll('.pz').forEach(function(e){if(!e.dataset.o)e.dataset.o=e.textContent;var p=+e.dataset.p,c=e.dataset.c;if(!R[c]||c===cur){e.textContent=e.dataset.o;e.title='';return}var v=p*R[c]/R[cur];v=v>1e5?Math.round(v/1000)*1000:Math.round(v);e.textContent='≈ '+S[cur]+' '+f(v);e.title='${X[lang].approx}';})}
sel.onchange=function(){cur=sel.value;try{localStorage.setItem('cur',cur)}catch(e){}go()};go();})();
(function(){var sl=document.querySelectorAll('.slide');if(sl.length<2)return;var i=0,d=document.querySelectorAll('.dots button');function show(n){sl[i].classList.remove('on');d[i]&&d[i].classList.remove('on');i=(n+sl.length)%sl.length;sl[i].classList.add('on');d[i]&&d[i].classList.add('on');var im=sl[i].querySelector('img[data-src]');if(im){im.src=im.dataset.src;im.removeAttribute('data-src')}}d.forEach(function(b,k){b.onclick=function(){show(k);clearInterval(tm);tm=setInterval(function(){show(i+1)},7000)}});var tm=setInterval(function(){show(i+1)},7000);})();
(function(){var dl=document.querySelector('dialog.offer');if(!dl)return;document.querySelectorAll('[data-offer]').forEach(function(b){b.onclick=function(){dl.showModal()}});dl.querySelector('[data-close]').onclick=function(){dl.close()};})();
(function(){var h=document.querySelector('.top'),bg=document.querySelector('.burger');bg&&(bg.onclick=function(){h.classList.toggle('open')});var dd=document.querySelector('.dd>button');dd&&(dd.onclick=function(){dd.parentNode.classList.toggle('open')});function sc(){h.classList.toggle('sc',scrollY>40)}addEventListener('scroll',sc,{passive:true});sc();
var els=document.querySelectorAll('main .sec>*,main .band .wrap>*,.card,.cat,.reg');if('IntersectionObserver'in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});els.forEach(function(e){e.classList.add('rv');io.observe(e)})}})();
(function(){var g=document.querySelector('.vgal');if(!g)return;var im=g.querySelector('.main img'),th=g.querySelectorAll('.thumbs button'),n=th.length,i=0,ct=g.querySelector('.cnt');function sh(k){i=(k+n)%n;im.src=th[i].dataset.f;th.forEach(function(b,j){b.classList.toggle('on',j===i)});ct.textContent=(i+1)+' / '+n;th[i].scrollIntoView({block:'nearest',inline:'center',behavior:'smooth'})}th.forEach(function(b,j){b.onclick=function(){sh(j)}});g.querySelector('.prev').onclick=function(){sh(i-1)};g.querySelector('.next').onclick=function(){sh(i+1)};g.querySelector('.fs').onclick=function(){g.classList.toggle('full');document.body.classList.toggle('noscroll')};addEventListener('keydown',function(e){if(e.key==='ArrowLeft')sh(i-1);if(e.key==='ArrowRight')sh(i+1);if(e.key==='Escape'&&g.classList.contains('full')){g.classList.remove('full');document.body.classList.remove('noscroll')}});})();
document.querySelectorAll('[data-copy]').forEach(function(b){b.onclick=function(){try{navigator.clipboard.writeText(location.href);b.textContent=b.dataset.copy}catch(e){}}});
var sf=document.querySelector('.search');if(sf){sf.querySelectorAll('[data-t]').forEach(function(b){b.onclick=function(){sf.querySelectorAll('[data-t]').forEach(function(x){x.classList.toggle('on',x===b)});sf.t.value=b.dataset.t;}});sf.onsubmit=function(e){e.preventDefault();var r=sf.r.value,t=sf.t.value;location.href=sf.dataset[t]+(r&&t!=='proj'?'?r='+r:'');};}
</script>
</body></html>`;
}
const VER = Date.now().toString(36);
// acchomesantalya.com görselleri hotlink korumalı: referrer göndermeden yükle
function write(p, html) { const f = path.join(OUT, p, 'index.html'); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, html.replace(/<img (?!referrerpolicy)/g, '<img referrerpolicy="no-referrer" ')); }
const allAlts = (key, id) => Object.fromEntries(LANGS.map((l) => [l, url(l, key, id)]));
const filters = (lang, list) => { const t = T[lang]; const regs = REG.filter((r) => list.some((v) => v.reg === r.k));
  return `<div class="filters"><button data-fr="">${t.filterAll}</button>${regs.map((r) => `<button data-fr="${r.k}">${r.n[lang]}</button>`).join('')}<span class="sep"></span>${COL.filter((c) => list.some((v) => v.cols.includes(c.k))).map((c) => `<button data-fc="${c.k}">${c.n[lang]}</button>`).join('')}<span class="sep"></span>${[3, 4, 5, 6].filter((b) => list.some((v) => beds(v) >= b)).map((b) => `<button data-fb="${b}">${b}+ ${lang === 'tr' ? 'yatak odası' : lang === 'ru' ? 'спален' : 'bedrooms'}</button>`).join('')}</div>`; };

// ---------- sayfalar ----------
fs.rmSync(OUT, { recursive: true, force: true }); fs.mkdirSync(OUT, { recursive: true });
const HERO = `${MAIN}/img/banner/villa-d-1920.webp`; const HERO_M = `${MAIN}/img/banner/villa-m-1080.webp`;
const sitemap = [];
const projects = [...new Set(VILLAS.map((v) => v.proje).filter(Boolean))];

for (const lang of LANGS) {
  const t = T[lang];
  const sale = VILLAS.filter((v) => !v.kiralik); const rent = VILLAS.filter((v) => v.kiralik);
  const active = sale.filter((v) => !v.satildi);
  const regCover = (r) => VILLAS.find((v) => v.reg === r.k)?.foto[0];
  const regCount = (r) => VILLAS.filter((v) => v.reg === r.k && !v.satildi).length;

  // ana sayfa
  write(BASE[lang], layout({ lang, title: t.homeTitle, desc: t.homeDesc, canon: url(lang), alts: allAlts(), image: HERO, body: `
<section class="hero slider">${X[lang].slides.map((sd, i) => `<div class="slide${i ? '' : ' on'}"><picture>${sd.imgM ? `<source media="(max-width:700px)" srcset="${sd.imgM}">` : ''}<img ${i ? `data-src="${sd.img}"` : `src="${sd.img}" fetchpriority="high"`} alt="${esc(sd.h)}"></picture><a class="chip" href="${url(lang, sd.btn[1])}">${sd.h} · ${sd.btn[0]} →</a></div>`).join('')}
<div class="hcenter"><form class="search tabs" data-sale="${url(lang, 'list')}" data-rent="${url(lang, 'rent')}" data-proj="${url(lang, 'projects')}"><div class="tabrow"><button type="button" class="on" data-t="sale">${t.s.sale}</button><button type="button" data-t="rent">${t.s.rent}</button><button type="button" data-t="proj">${t.nav.projects}</button></div><input type="hidden" name="t" value="sale"><div class="sbar"><select name="r" aria-label="${t.s.region}"><option value="">${t.s.any}</option>${REG.filter((r) => regCount(r)).map((r) => `<option value="${r.k}">${r.n[lang]}</option>`).join('')}</select><button class="btn" type="submit">${t.s.go}</button></div></form></div>
<div class="hbottom"><h1>${X[lang].slides[0].h}</h1><div class="dots">${X[lang].slides.map((_, i) => `<button type="button" aria-label="${i + 1}"${i ? '' : ' class="on"'}></button>`).join('')}</div></div><a class="scroll" href="#cats">Scroll</a></section>
<section class="wrap sec cats" id="cats"><h2>${X[lang].catT}</h2><div class="catg">${[['list', '/_c/1'], ['rent', '/_c/2'], ['antalle', '/_c/3'], ['living', '/_c/4'], ['openhouse', '/_c/5']].map(([k], i) => `<a class="cat" href="${url(lang, k)}"><img src="${X[lang].catImg[i]}" alt="" loading="lazy"><span>${X[lang].cats[i]}</span></a>`).join('')}</div></section>
<section class="wrap sec why"><p class="eyebrow dark">ACC VILLAS</p><h2>${X[lang].whyT}</h2><p class="lead">${X[lang].whyP}</p><div class="stats">${STATS[lang].map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join('')}</div></section>
<section class="philo"><div class="wrap"><p class="eyebrow dark">${PHILO[lang].eyebrow}</p><h2>${PHILO[lang].h}</h2><p class="lead">${PHILO[lang].p}</p><div class="pgrid">${PHILO[lang].items.map(([a, b]) => `<div><h3>${a}</h3><p>${b}</p></div>`).join('')}</div><p class="sc pend">${PHILO[lang].end}</p></div></section>
<section class="wrap sec"><div class="sh"><h2>${t.featured}</h2><a href="${url(lang, 'list')}">${t.all} →</a></div><div class="grid">${active.slice(0, 8).map((v) => card(v, lang)).join('')}</div></section>
<section class="wrap sec"><div class="sh"><h2>${t.regionsT}</h2><a href="${url(lang, 'regions')}">${t.nav.regions} →</a></div><p class="lead">${t.regionsP}</p><div class="regs">${REG.filter((r) => regCount(r)).map((r) => { const c = regCover(r); const n = regCount(r); return `<a class="reg${c ? '' : ' noimg'}" href="${url(lang, 'regions', r.k)}">${c ? `<img src="${esc(c)}" alt="${r.n[lang]}" loading="lazy">` : ''}<span><b>${r.n[lang]}</b>${n ? `<small>${n} ${t.villas}</small>` : ''}</span></a>`; }).join('')}</div></section>
<section class="band"><div class="wrap"><h2>${t.colT}</h2><div class="cols">${COL.map((c) => `<a href="${url(lang, 'list')}?c=${c.k}">${c.n[lang]}</a>`).join('')}<a href="${url(lang, 'projects')}">${t.projT}</a><a href="${url(lang, 'rent')}">${t.nav.rent}</a></div></div></section>
<section class="wrap sec"><div class="sh"><h2>${t.livT}</h2><a href="${url(lang, 'living')}">${t.livT} →</a></div><div class="two liv"><p class="lead">${t.livP}</p><a class="partner" href="${url(lang, 'living')}"><img src="/enne-antalya.webp" alt="ENNE Antalya" width="300" height="104"><span>${t.enneT}</span></a></div></section>
<section class="wrap sec"><div class="sh"><h2>${t.svcT}</h2><a href="${url(lang, 'services')}">${NAV3[lang].services} →</a></div><div class="svc">${t.svc.map(([a, b]) => `<div><b>${a}</b><span>${b}</span></div>`).join('')}</div></section>
<section class="band"><div class="wrap two"><div class="off"><p class="eyebrow dark">Private</p><h2>${t.offT}</h2><p>${t.offP}</p><a class="btn" href="https://wa.me/${PHONE.wa}?text=${encodeURIComponent(t.offT)}">${t.offBtn}</a></div><div class="ceo">${ceoPic('big')}<blockquote>“${t.ceoQ}”</blockquote><p class="bn">${CEO.name}</p><p class="br">${CEO.role[lang]}, ACC VILLAS</p><p class="acts"><a class="btn ghost dark" href="https://wa.me/${PHONE.wa}">${t.meet}</a></p></div></div></section>
<section class="wrap sec two"><div><h2>${t.sellT}</h2><p class="lead">${t.sellP}</p><p class="acts"><a class="btn" href="${url(lang, 'value')}">${t.valueT}</a><a class="btn ghost dark" href="${url(lang, 'sell')}">${t.nav.sell}</a></p></div></section>
<section class="wrap sec mhome"><div><p class="eyebrow dark">${MKT[lang].home.eyebrow}</p><h2>${MKT[lang].home.h}</h2><p class="lead">${MKT[lang].home.p}</p><ul class="chips">${MKT[lang].blocks.slice(0, 5).map(([h]) => `<li>${h}</li>`).join('')}</ul><p class="acts"><a class="btn" href="${url(lang, 'marketing')}">${MKT[lang].home.btn}</a></p></div><img src="${MAIN}/img/antalle/galeri-bosluklu-salon.webp" alt="${esc(MKT[lang].blocks[0][0])}" loading="lazy"></section>
<section class="plaza"><div class="wrap"><p class="eyebrow">${PLAZA[lang].eyebrow}</p><h2>${PLAZA[lang].h}</h2><p class="lead">${PLAZA[lang].p}</p><div class="pgrid">${PLAZA[lang].items.map(([a, b]) => `<div><h3>${a}</h3><p>${b}</p></div>`).join('')}</div></div></section>
<section class="wrap sec intl"><p class="eyebrow dark">${INTL[lang].eyebrow}</p><h2>${INTL[lang].h}</h2><p class="lead">${INTL[lang].p}</p><div class="pgrid">${INTL[lang].items.map(([a, b]) => `<div><h3>${a}</h3><p>${b}</p></div>`).join('')}</div><p class="acts"><a class="btn ghost dark" href="${url(lang, 'founder')}">${CEO.name}</a><a class="btn ghost dark" href="${url(lang, 'services')}">${NAV3[lang].services}</a></p></section>
<section class="band"><div class="wrap"><div class="sh"><h2>${X[lang].revT}</h2><a href="${GOOGLE.url}" target="_blank" rel="noopener">${X[lang].revBadge} →</a></div><div class="revs">${REVIEWS.map((r) => `<figure class="rev"><p class="stars">★★★★★</p><blockquote>${esc(r[lang])}</blockquote><figcaption>${r.n} · Google · ${r.when[lang]}</figcaption></figure>`).join('')}</div><p class="small">${X[lang].revNote}</p></div></section>
<section class="wrap sec ig"><div><p class="eyebrow dark">${IG.handle}</p><h2>${X[lang].igT}</h2><p class="lead">${X[lang].igP}</p><a class="btn" href="${IG.url}" target="_blank" rel="noopener">${X[lang].igBtn}</a></div><div class="iggrid">${ANTALLE_GAL.slice(0, 6).map((g) => `<a href="${IG.url}" target="_blank" rel="noopener"><img src="${g}" alt="" loading="lazy"></a>`).join('')}</div></section>
<section class="wrap sec"><div class="sh"><h2>${JOURNAL[lang].h1}</h2><a href="${url(lang, 'journal')}">${JOURNAL[lang].read} →</a></div><div class="posts">${POSTS.map((p) => `<a class="post" href="${url(lang, 'journal', lang === 'tr' ? p.slug : lang === 'en' ? p.slugEn : p.slugRu)}"><h3>${p[lang].t}</h3><p>${p[lang].d}</p><span class="more">${JOURNAL[lang].read} →</span></a>`).join('')}</div></section>
<section class="wrap sec pop"><h2>${X[lang].popT}</h2><div class="popc">
<div><p class="fh">${X[lang].popCols[0]}</p>${REG.filter((r) => regCount(r)).map((r) => `<a href="${url(lang, 'regions', r.k)}">${t.regionH(r.n[lang])}</a>`).join('')}<a href="${url(lang, 'regions')}">${t.nav.regions} →</a></div>
<div><p class="fh">${X[lang].popCols[1]}</p>${COL.map((c) => `<a href="${url(lang, 'list')}?c=${c.k}">${c.n[lang]}</a>`).join('')}<a href="${url(lang, 'rent')}">${t.rentT}</a></div>
<div><p class="fh">${X[lang].popCols[2]}</p><a href="${url(lang, 'antalle')}">Antalle Concept Houses</a>${projects.filter((p) => !/antalle/i.test(p)).slice(0, 6).map((p) => `<a href="${url(lang, 'projects')}#${encodeURIComponent(p)}">${esc(p)}</a>`).join('')}<a href="${url(lang, 'projects')}">${t.projT} →</a></div>
<div><p class="fh">${X[lang].popCols[3]}</p><a href="${url(lang, 'value')}">${t.valueT}</a><a href="${url(lang, 'sell')}">${t.nav.sell}</a><a href="${url(lang, 'openhouse')}">${X[lang].oh.nav}</a><a href="${url(lang, 'living')}">${t.livT}</a><a href="${url(lang, 'founder')}">${CEO.name}</a><a href="${url(lang, 'services')}">${NAV3[lang].services}</a>${POSTS.map((p) => `<a href="${url(lang, 'journal', lang === 'tr' ? p.slug : lang === 'en' ? p.slugEn : p.slugRu)}">${p[lang].t}</a>`).join('')}</div>
</div></section>` }));
  sitemap.push(url(lang));

  // satılık / kiralık listeleri
  for (const [key, list, T1, D1] of [['list', sale, t.listT, t.listD], ['rent', rent, t.rentT, t.rentD]]) {
    write(BASE[lang] + '/' + SEG[lang][key], layout({ lang, title: `${T1} | ACC VILLAS`, desc: D1, canon: url(lang, key), alts: allAlts(key), body: `
<section class="wrap sec"><h1>${T1}</h1><p class="lead">${D1}</p>${list.length ? filters(lang, list) : ''}<div class="grid" data-filter>${list.map((v) => card(v, lang)).join('')}</div>${emptyBox(lang, url(lang, key))}</section>` }));
    sitemap.push(url(lang, key));
  }

  // bölgeler
  write(BASE[lang] + '/' + SEG[lang].regions, layout({ lang, title: t.regPage.title, desc: t.regPage.desc, canon: url(lang, 'regions'), alts: allAlts('regions'), body: `
<section class="wrap sec"><h1>${t.regionsT}</h1><p class="lead">${t.regionsP}</p><div class="reglist">${REG.filter((r) => regCount(r)).map((r) => { const c = regCover(r); return `<a href="${url(lang, 'regions', r.k)}">${c ? `<img src="${esc(c)}" alt="${r.n[lang]}" loading="lazy">` : '<span class="ph0"></span>'}<div><h2>${r.n[lang]}</h2><p>${r.d[lang]}</p></div></a>`; }).join('')}</div></section>` }));
  sitemap.push(url(lang, 'regions'));
  for (const r of REG) {
    const list = VILLAS.filter((v) => v.reg === r.k); const ex = REG_EXTRA[r.k]?.[lang] || ''; const faq = REG_FAQ[lang](r.n[lang]);
    const mh = [...new Set(list.map((v) => v.mahalle).filter(Boolean))];
    const fld = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
    const faqT = lang === 'tr' ? 'Sık sorulan sorular' : lang === 'ru' ? 'Частые вопросы' : 'Frequently asked questions';
    write(BASE[lang] + '/' + SEG[lang].regions + '/' + r.k, layout({ lang, title: `${t.regionH(r.n[lang])} | ACC VILLAS`, desc: `${r.d[lang]} ${t.regionD(r.n[lang])}`.slice(0, 158), canon: url(lang, 'regions', r.k), alts: allAlts('regions', r.k), image: list[0]?.foto[0], ld: [fld], body: `
<section class="wrap sec"><p class="crumb"><a href="${url(lang, 'regions')}">← ${t.nav.regions}</a></p><p class="eyebrow dark">ACC VILLAS · ${r.n[lang]}</p><h1>${t.regionH(r.n[lang])}</h1><p class="lead">${r.d[lang]}</p>${ex ? `<p class="lead">${ex}</p>` : ''}${mh.length ? `<p class="mh">${mh.map((m) => `<span>${esc(m)}</span>`).join('')}</p>` : ''}<div class="grid" data-filter>${list.map((v) => card(v, lang)).join('')}</div>${emptyBox(lang, url(lang, 'regions', r.k))}</section>
<section class="band"><div class="wrap"><h2>${faqT}</h2><div class="faq">${faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div></div></section>` }));
    sitemap.push(url(lang, 'regions', r.k));
  }

  // villa detay
  const DL = { tr: { net: 'Net alan', bath: 'Banyo', age: 'Bina yaşı', floors: 'Kat sayısı', garden: 'Bahçe / açık alan', face: 'Cephe', loc: 'Konum', heat: 'Isıtma', deed: 'Tapu', mort: 'Kredi', mortY: 'Krediye uygun', furn: 'Eşya', furnY: 'Eşyalı', ref: 'İlan no', share: 'Paylaşın', copy: 'Bağlantıyı kopyala', copied: 'Kopyalandı', print: 'Yazdır', map: 'Bölge haritası', mapN: 'Harita yaklaşık bölgeyi gösterir; tam konum gösterimde paylaşılır.', view: 'Gösterim talebi', viewP: 'Villayı yerinde ya da online gösterimle görün. Uygun gün ve saati seçin, sizi arayalım.', type: 'Gösterim türü', types: ['Yerinde gösterim', 'Online (görüntülü) gösterim'], day: 'Tercih edilen gün', time: 'Saat', viewBtn: 'Gösterim talep et', all: 'Tüm fotoğraflar', sim: 'Benzer villalar', rate: 'Google’da 4,9 ★ · 475 yorum', faces: {} },
    en: { net: 'Net area', bath: 'Bathrooms', age: 'Building age', floors: 'Floors', garden: 'Garden / outdoor area', face: 'Orientation', loc: 'Location', heat: 'Heating', deed: 'Title deed', mort: 'Mortgage', mortY: 'Eligible', furn: 'Furniture', furnY: 'Furnished', ref: 'Ref.', share: 'Share', copy: 'Copy link', copied: 'Copied', print: 'Print', map: 'Area map', mapN: 'The map shows the approximate area; the exact location is shared at the viewing.', view: 'Request a viewing', viewP: 'See the villa in person or by online video viewing. Choose a day and time and we will call you.', type: 'Viewing type', types: ['In-person viewing', 'Online (video) viewing'], day: 'Preferred day', time: 'Time', viewBtn: 'Request viewing', all: 'All photos', sim: 'Similar villas', rate: '4.9 ★ on Google · 475 reviews', faces: { Batı: 'West', Doğu: 'East', Güney: 'South', Kuzey: 'North' } },
    ru: { net: 'Полезная площадь', bath: 'Санузлы', age: 'Возраст здания', floors: 'Этажей', garden: 'Сад / участок', face: 'Ориентация', loc: 'Расположение', heat: 'Отопление', deed: 'Тапу', mort: 'Ипотека', mortY: 'Подходит', furn: 'Мебель', furnY: 'С мебелью', ref: 'Номер', share: 'Поделиться', copy: 'Скопировать ссылку', copied: 'Скопировано', print: 'Печать', map: 'Карта района', mapN: 'Карта показывает примерный район; точный адрес сообщается на показе.', view: 'Запросить показ', viewP: 'Посмотрите виллу лично или по видеосвязи. Выберите день и время — мы перезвоним.', type: 'Тип показа', types: ['Личный показ', 'Онлайн-показ (видео)'], day: 'Желаемый день', time: 'Время', viewBtn: 'Запросить показ', all: 'Все фото', sim: 'Похожие виллы', rate: '4,9 ★ в Google · 475 отзывов', faces: { Batı: 'Запад', Doğu: 'Восток', Güney: 'Юг', Kuzey: 'Север' } } }[lang];
  const TIMES = ['10:00–12:00', '12:00–14:00', '14:00–17:00', '17:00–19:00'];
  for (const v of VILLAS) {
    const title = v.title(lang); const text = v.text(lang); const og = v.ekstra?.ozellik_gruplari || {}; const sb = v.ekstra?.sahibinden_bilgi || {};
    const garden = /^\d+$/.test(sb['Açık Alan m²'] || '') ? sb['Açık Alan m²'] : '';
    const face = (og.Cephe || []).map((c) => DL.faces[c] || c).join(', ');
    const age = v.yas !== undefined && v.yas !== null && v.yas !== '' ? String(v.yas) : '';
    const specs = [[t.price, price(v, lang)], [t.rooms, v.oda], [t.gross, v.brut && v.brut + ' m²'], [DL.net, v.net && v.net + ' m²'], [t.land, v.arsa && v.arsa + ' m²'], [DL.garden, !v.arsa && garden && garden + ' m²'], [DL.bath, v.banyo], [DL.age, age], [DL.floors, v.katSayisi], [DL.face, face], [DL.loc, area(v, lang)], [DL.heat, lang === 'tr' && v.isitma], [DL.deed, lang === 'tr' && v.tapu], [DL.mort, v.kredi === 'Evet' && DL.mortY], [DL.furn, v.esya === 'Evet' && DL.furnY], ['', v.site === 'Evet' ? t.site : ''], [DL.ref, v.id]].filter(([, x]) => x);
    const ld = { '@context': 'https://schema.org', '@type': 'RealEstateListing', name: title, url: DOMAIN + url(lang, 'villa', v.slug), image: v.foto.slice(0, 6), description: v.meta(lang) || text.slice(0, 300), ...(v.fiyatGizli ? {} : { offers: { '@type': 'Offer', price: Number(v.fiyat), priceCurrency: v.para === 'TL' ? 'TRY' : v.para, availability: v.satildi ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock' } }) };
    const crumbs = [[t.nav[v.kiralik ? 'rent' : 'list'], url(lang, v.kiralik ? 'rent' : 'list')], ...(v.reg ? [[regName(v.reg, lang), url(lang, 'regions', v.reg)]] : []), [title, url(lang, 'villa', v.slug)]];
    const bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs.map(([n, u], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: DOMAIN + u })) };
    let similar = VILLAS.filter((x) => x !== v && !x.satildi && x.reg === v.reg && x.kiralik === v.kiralik);
    if (similar.length < 4) similar = [...similar, ...VILLAS.filter((x) => x !== v && !x.satildi && !similar.includes(x) && x.kiralik === v.kiralik)].slice(0, 4);
    const pg = DOMAIN + url(lang, 'villa', v.slug); const fotos = v.foto.slice(0, 30);
    const groups = lang === 'tr' ? Object.entries(og).filter(([g, a]) => a.length && g !== 'Konut Tipi') : [];
    const mapQ = encodeURIComponent([v.mahalle, v.ilce, 'Antalya'].filter(Boolean).join(', '));
    const viewX = `<input type="hidden" name="ilan" value="${v.id}"><input type="hidden" name="konu" value="gosterim"><select name="gosterim_turu" aria-label="${DL.type}">${DL.types.map((x) => `<option>${x}</option>`).join('')}</select><div class="tel"><input name="tarih" type="date" aria-label="${DL.day}"><select name="saat" aria-label="${DL.time}"><option value="">${DL.time}</option>${TIMES.map((x) => `<option>${x}</option>`).join('')}</select></div>`;
    const feats = groups.length ? `<h2>${t.features}</h2><div class="fgroups">${groups.map(([g, a]) => `<div><h3>${esc(g)}</h3><ul class="chips">${a.map((o) => `<li>${esc(o)}</li>`).join('')}</ul></div>`).join('')}</div>` : lang === 'tr' && (v.ozellikler || []).length ? `<h2>${t.features}</h2><ul class="chips">${v.ozellikler.slice(0, 40).map((o) => `<li>${esc(o)}</li>`).join('')}</ul>` : '';
    write(BASE[lang] + '/villa/' + v.slug, layout({ lang, title: `${title} | ACC VILLAS`, desc: (v.meta(lang) || text).slice(0, 158), canon: url(lang, 'villa', v.slug), alts: allAlts('villa', v.slug), image: v.foto[0], ld: [ld, bc], offer: !v.satildi, body: `${offerDlg(lang, v, title)}
<section class="wrap sec vd"><p class="crumb"><a href="${url(lang, v.kiralik ? 'rent' : 'list')}">← ${t.back}</a>${v.reg ? ` · <a href="${url(lang, 'regions', v.reg)}">${regName(v.reg, lang)}</a>` : ''}</p>
<div class="vhead"><div><p class="eyebrow dark">${esc(area(v, lang))}</p><h1>${esc(title)}</h1><p class="specs">${[v.oda, v.brut && v.brut + ' m²', v.arsa && `${t.land} ${v.arsa} m²`].filter(Boolean).join(' · ')}</p></div><div class="vprice"><p class="pr big">${priceH(v, lang)}</p>${v.satildi ? `<span class="badge">${t.sold}</span>` : ''}</div></div>
<div class="vgal"><div class="main"><img src="${esc(fotos[0])}" alt="${esc(title)}" fetchpriority="high" width="1200" height="800"><button class="prev" type="button" aria-label="prev">‹</button><button class="next" type="button" aria-label="next">›</button><span class="cnt">1 / ${fotos.length}</span><button class="fs" type="button" aria-label="${DL.all}">⤢</button></div><div class="thumbs">${fotos.map((f, i) => `<button type="button" data-f="${esc(f)}"${i ? '' : ' class="on"'}><img src="${esc(f)}" alt="${esc(title)} ${i + 1}" loading="lazy" width="160" height="107"></button>`).join('')}</div></div>
<div class="vtools"><span>${DL.share}:</span><a href="https://wa.me/?text=${encodeURIComponent(title + ' ' + pg)}" target="_blank" rel="noopener">WhatsApp</a><a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pg)}" target="_blank" rel="noopener">Facebook</a><button type="button" data-copy="${DL.copied}">${DL.copy}</button><button type="button" onclick="print()">${DL.print}</button><a class="grate" href="${GOOGLE.url}" target="_blank" rel="noopener">${DL.rate}</a></div>
<div class="vcols"><div><h2>${t.details}</h2><dl class="spec">${specs.map(([a, b]) => `<dt>${a}</dt><dd>${esc(b)}</dd>`).join('')}</dl>${text ? `<div class="txt">${text.split(/\n+/).map((p) => `<p>${esc(p)}</p>`).join('')}</div>` : ''}${feats}
<h2>${DL.map}</h2><div class="vmap"><iframe src="https://maps.google.com/maps?q=${mapQ}&z=13&output=embed" loading="lazy" title="${DL.map}"></iframe></div><p class="small">${DL.mapN}</p>
<div class="viewbox" id="gosterim"><h2>${DL.view}</h2><p>${DL.viewP}</p>${form(lang, 'villa-talep', url(lang, 'villa', v.slug), viewX, DL.viewBtn)}</div></div>
<aside class="box"><p class="pr big">${priceH(v, lang)}</p>${!v.satildi ? `<p><button class="btn wide" type="button" data-offer>${X[lang].offer.btn}</button></p><p><a class="btn ghost dark wide" href="#gosterim">${DL.view}</a></p>` : ''}${broker(lang, `${v.id} — ${title}`)}<h3>${t.ask}</h3>${form(lang, 'villa-talep', url(lang, 'villa', v.slug), `<input type="hidden" name="ilan" value="${v.id}">`)}</aside></div></section>
${similar.length ? `<section class="wrap sec"><div class="sh"><h2>${DL.sim}</h2><a href="${url(lang, v.kiralik ? 'rent' : 'list')}">${t.all} →</a></div><div class="grid">${similar.map((x) => card(x, lang)).join('')}</div></section>` : ''}` }));
    sitemap.push(url(lang, 'villa', v.slug));
  }

  // villanızı satın
  const sp = t.sellPage;
  write(BASE[lang] + '/' + SEG[lang].sell, layout({ lang, title: sp.title, desc: sp.desc, canon: url(lang, 'sell'), alts: allAlts('sell'), body: `
<section class="wrap sec two"><div><h1>${sp.h1}</h1><p class="lead">${sp.desc}</p><ol class="steps">${sp.steps.map(([a, b]) => `<li><b>${a}</b><span>${b}</span></li>`).join('')}</ol></div><aside class="box">${broker(lang)}<h2>${t.sellT}</h2>${form(lang, 'villa-sat', url(lang, 'sell'), `<input name="konum" placeholder="${t.form.addr}"><input name="metrekare" placeholder="${t.form.size}">`)}</aside></section>` }));
  sitemap.push(url(lang, 'sell'));

  // değerleme
  const vp = t.valuePage;
  write(BASE[lang] + '/' + SEG[lang].value, layout({ lang, title: vp.title, desc: vp.desc, canon: url(lang, 'value'), alts: allAlts('value'), body: `
<section class="wrap sec two"><div><h1>${vp.h1}</h1><p class="lead">${t.valueP}</p><ol class="steps">${sp.steps.slice(1).map(([a, b]) => `<li><b>${a}</b><span>${b}</span></li>`).join('')}</ol></div><aside class="box">${broker(lang)}<h2>${t.valueT}</h2>${form(lang, 'villa-degerleme', url(lang, 'value'), `<input name="konum" placeholder="${t.form.addr} *" required><input name="metrekare" placeholder="${t.form.size}">`)}</aside></section>` }));
  sitemap.push(url(lang, 'value'));

  // villa yaşamı: editoryal
  { const L = LIV[lang]; const img = (i) => ANTALLE_SHARED.photos[i] ? `${MAIN}/img/antalle/${ANTALLE_SHARED.photos[i][0]}.webp` : '';
  const pics = [3, 5, 4, 6, 9, 17, 8, 19, 1, 0];
  write(BASE[lang] + '/' + SEG[lang].living, layout({ lang, title: L.title, desc: L.desc, canon: url(lang, 'living'), alts: allAlts('living'), image: img(3), ld: [{ '@context': 'https://schema.org', '@type': 'Article', headline: L.h1 + ': ' + L.sub, description: L.desc, image: img(3), author: { '@type': 'Person', name: CEO.name }, publisher: { '@type': 'Organization', name: 'ACC VILLAS', url: DOMAIN }, inLanguage: lang }], body: `
<section class="hero slim edhero"><img src="${img(3)}" alt="${esc(L.sub)}" fetchpriority="high"><div class="wrap hc"><p class="eyebrow">${L.eyebrow}</p><h1>${L.h1}</h1><p class="sc edsub">${L.sub}</p></div></section>
<article class="wrap sec editorial"><p class="dropcap">${L.intro}</p>
${L.secs.map(([h, p], i) => `<section class="eds${i % 2 ? ' rev' : ''}"><div><span class="edn">${String(i + 1).padStart(2, '0')}</span><h2>${h}</h2><p>${p}</p></div><img src="${img(pics[i] ?? 0)}" alt="${esc(h)}" loading="lazy"></section>${i === 4 ? `<blockquote class="pull">“${L.quote}”</blockquote>` : ''}`).join('')}
</article>
<section class="band"><div class="wrap"><h2>${L.partnersT}</h2><p class="lead">${L.partnersP}</p>
<div class="enne"><img src="/enne-antalya.webp" alt="ENNE Antalya" width="420" height="145"><div><p class="eyebrow dark">${t.enneT}</p><h3>ENNE Antalya</h3><p>${t.enneP}</p></div></div>
<div class="svc">${L.cats.map(([a, b]) => `<div><b>${a}</b><span>${b}</span></div>`).join('')}</div></div></section>
<section class="wrap sec two"><div>${broker(lang)}</div><aside class="box"><h2>${t.livAsk}</h2>${form(lang, 'villa-talep', url(lang, 'living'), `<input type="hidden" name="konu" value="villa-yasami">`)}</aside></section>` }));
  sitemap.push(url(lang, 'living')); }

  // pazarlama ve tasarım (yapay zekâ, sanal tur, modelleme)
  { const M = MKT[lang]; const P = PLAZA[lang]; const I = INTL[lang];
  const ld = [{ '@context': 'https://schema.org', '@type': 'Service', name: M.h1, serviceType: ['Virtual staging', 'AI video', '360 virtual tour', '3D modelling', 'Real estate marketing'], areaServed: 'Antalya', provider: { '@type': 'RealEstateAgent', name: 'ACC VILLAS', url: DOMAIN } },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: M.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }];
  write(BASE[lang] + '/' + SEG[lang].marketing, layout({ lang, title: M.title, desc: M.desc, canon: url(lang, 'marketing'), alts: allAlts('marketing'), ld, body: `
<section class="wrap sec"><p class="eyebrow dark">${M.home.eyebrow}</p><h1>${M.h1}</h1><p class="lead">${M.lead}</p></section>
<section class="wrap sec mblocks">${M.blocks.map(([h, p], i) => `<div class="mb"><span class="no">0${i + 1}</span><h2>${h}</h2><p>${p}</p></div>`).join('')}</section>
<section class="band"><div class="wrap"><h2>${M.stepsT}</h2><ol class="steps four">${M.steps.map(([a, b]) => `<li><b>${a}</b><span>${b}</span></li>`).join('')}</ol></div></section>
<section class="wrap sec two"><div><p class="eyebrow dark">${P.eyebrow}</p><h2>${P.h}</h2><p class="lead">${P.p}</p></div><div><p class="eyebrow dark">${I.eyebrow}</p><h2>${I.h}</h2><p class="lead">${I.p}</p></div></section>
<section class="band"><div class="wrap"><h2>${M.faqT}</h2><div class="faq">${M.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div></div></section>
<section class="wrap sec two"><div><h2>${M.cta}</h2>${broker(lang)}</div><aside class="box">${form(lang, 'villa-sat', url(lang, 'marketing'), '<input type="hidden" name="konu" value="pazarlama">')}</aside></section>` }));
  sitemap.push(url(lang, 'marketing')); }

  // open house
  { const o = X[lang].oh;
  write(BASE[lang] + '/' + SEG[lang].openhouse, layout({ lang, title: o.title, desc: o.desc, canon: url(lang, 'openhouse'), alts: allAlts('openhouse'), image: OH_GAL[0], body: `
<section class="wrap sec"><h1>${o.h1}</h1><p class="lead">${o.lead}</p><ol class="steps four">${o.how.map(([a, b]) => `<li><b>${a}</b><span>${b}</span></li>`).join('')}</ol></section>
<section class="band"><div class="wrap two"><div><p class="eyebrow dark">${o.nextT}</p><h2>${o.next}</h2><p><a class="btn" href="${url(lang, 'antalle')}">Antalle Concept Houses</a></p><p class="eyebrow dark" style="margin-top:28px">${o.pastT}</p><h3>${o.past}</h3><p>${o.pastP}</p></div><div class="ohg">${OH_GAL.map((g) => `<img src="${g}" alt="Antalle Open House" loading="lazy">`).join('')}</div></div></section>
<section class="wrap sec two"><div><h2>${o.ownT}</h2><p class="lead">${o.ownP}</p>${broker(lang)}</div><aside class="box"><h2>${o.formT}</h2>${form(lang, 'etkinlik-talep', url(lang, 'openhouse'))}</aside></section>` }));
  sitemap.push(url(lang, 'openhouse')); }

  // antalle (acchomesantalya proje sayfasının düzeni; fiyat ve vatandaşlık ifadeleri yok)
  { const a = X[lang].an; const C = ANTALLE[lang]; const SH = ANTALLE_SHARED; const SE = ANTALLE_SEO[lang] || {}; const u = C.ui;
  const av = VILLAS.filter((v) => /antalle/i.test(`${v.proje || ''} ${v.baslik?.tr || ''}`));
  const NOCIT = /vatanda|citizen|гражданств|FIYAT|USD|\$|₺|\bTL\b/i; const ok = (x) => !NOCIT.test(Array.isArray(x) ? x.join(' ') : String(x));
  const AI = (f) => `${MAIN}/img/antalle/${f}.webp`; const cap = (x) => (lang === 'tr' ? x[1] : x[2]);
  const DV = DAVET_AKTIF ? davetTx(lang) : null;
  const faq = (SE.faq || []).filter(ok);
  const ld = [{ '@context': 'https://schema.org', '@type': 'Residence', name: 'Antalle Concept Houses', description: a.desc, image: [AI(SH.photos[0][0]), AI(SH.photos[3][0])], address: { '@type': 'PostalAddress', addressLocality: 'Altınkale, Döşemealtı', addressRegion: 'Antalya', addressCountry: 'TR' } }];
  if (faq.length) ld.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, x]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: x } })) });
  const ohX = DV ? `<input type="hidden" name="konu" value="antalle-ozel-davet"><select name="gun" required><option value="">${DV.gun} *</option>${DV.gunler.map(([k, l]) => `<option value="${k}">${l}</option>`).join('')}</select><input name="kisi" type="number" min="1" max="20" placeholder="${DV.kisi}">` : '';
  write(BASE[lang] + '/' + SEG[lang].antalle, layout({ lang, title: a.title, desc: a.desc, canon: url(lang, 'antalle'), alts: allAlts('antalle'), image: AI(SH.hero.split('/').pop().replace('.webp', '')), ld, body: `
<section class="hero slim ahero"><img src="${MAIN}${SH.hero}" alt="Antalle Concept Houses" fetchpriority="high"><div class="wrap hc"><p class="eyebrow">Altınkale · Döşemealtı · Lejant Proje</p><h1>${esc(C.title)}</h1><p>${esc(C.sub)}</p>
<div class="abadges">${C.badges.filter(ok).map(([i, h, d]) => `<div><b>${esc(h)}</b><small>${esc(d)}</small></div>`).join('')}</div>
<p class="acts">${DV ? `<a class="btn light" href="#davet">${esc(DV.cta)} · ${esc(DV.when.split(' · ')[0])}</a>` : ''}<a class="btn${DV ? ' ghost' : ' light'}" href="#form">${esc(u.req.replace(/ ve fiyat listesi| and price list| и прайс-лист/i, ''))}</a><a class="btn ghost" href="tel:${PHONE.raw}">${esc(u.call)}</a></p></div></section>
${DV ? `<section class="band davet" id="davet"><div class="wrap two"><div><p class="eyebrow dark">${esc(DV.eyebrow)}</p><h2>${esc(DV.title)}</h2><p class="lead">${esc(DV.lead)}</p><p><b>${esc(DV.when)}</b><br>${esc(DV.hours)}<br>${esc(DV.cocktail)}</p><ul class="ticks">${DV.what.map(([, x]) => `<li>${esc(x)}</li>`).join('')}</ul><p class="small">${esc(DV.partner)}</p></div><aside class="box"><h3>${esc(DV.formT)}</h3><p class="small">${esc(DV.formS)}</p>${form(lang, 'etkinlik-talep', url(lang, 'antalle'), ohX, DV.send)}</aside></div></section>` : ''}
<section class="wrap sec"><div class="facts">${a.facts.map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join('')}</div></section>
<section class="wrap sec"><p class="eyebrow dark">Antalle</p><h2>${esc(C.whyTitle)}</h2><div class="awhy">${C.why.filter(ok).map(([, h, d]) => `<div><h3>${esc(h)}</h3><p>${esc(d)}</p></div>`).join('')}</div></section>
<section class="wrap sec"><h2>${esc(C.unitsTitle)}</h2><div class="units">${C.units.map(([n, ar, d], i) => `<div class="unit"><img src="${AI(i ? 'teras-daire-salon' : 'dubleks-cephe-havuz')}" alt="${esc(n)}" loading="lazy"><div><h3>${esc(n)}</h3><b>${esc(ar)}</b><p>${esc(d)}</p></div></div>`).join('')}</div></section>
<section class="band"><div class="wrap two"><div><p class="eyebrow dark">Antalle</p><h2>${esc(C.archTitle)}</h2><p class="lead">${esc(C.archText)}</p></div><img class="rimg" src="${AI('aksam-ic-avlu')}" alt="${esc(cap(SH.photos[1]))}" loading="lazy"></div></section>
<section class="wrap sec"><h2>${esc(C.featuresTitle)}</h2><ul class="chips big">${C.features.map(([, x]) => `<li>${esc(x)}</li>`).join('')}</ul></section>
<section class="wrap sec"><h2>${esc(C.planTitle)}</h2><p class="lead">${esc(C.planText)}</p><ol class="mplan">${C.plan.map(([n, st, d], i) => `<li${i === 0 ? ' class="done"' : ''}><b>${esc(n)}</b><span>${esc(st)}</span><p>${esc(d)}</p></li>`).join('')}</ol></section>
<section class="wrap sec"><h2>${esc(C.phasesTitle)}</h2><div class="phases">${C.phases.map((x) => `<div class="phase${x.hot ? ' hot' : ''}"><span class="ptag">${esc(x.tag)}</span><h3>${esc(x.name)}</h3><p class="small">${esc(x.status)}</p><ul class="ticks">${x.items.filter(ok).map((i) => `<li>${esc(i)}</li>`).join('')}</ul><a class="btn${x.hot ? '' : ' ghost dark'}" href="#form">${esc(u.offer)}</a></div>`).join('')}</div></section>
<section class="wrap sec"><h2>${esc(u.gallery)}</h2><div class="agal">${SH.photos.map((x) => `<img src="${AI(x[0])}" alt="Antalle Concept Houses – ${esc(cap(x))}" loading="lazy">`).join('')}</div></section>
<section class="wrap sec two"><div><h2>${esc(C.devTitle)}</h2><p class="lead">${esc(C.devText)}</p></div><div><h2>${a.teamT}</h2><ul class="team">${a.team.map(([n, r]) => `<li><b>${n}</b><span>${r}</span></li>`).join('')}</ul></div></section>
${av.length ? `<section class="wrap sec"><h2>${a.villasT}</h2><div class="grid">${av.map((v) => card(v, lang)).join('')}</div></section>` : ''}
<section class="wrap sec"><h2>${esc(C.locTitle)}</h2><p class="lead">${esc(C.locText)}</p><div class="dist"><div><h3>${esc(u.drive)}</h3><ul>${C.drive.map(([, n, d]) => `<li><span>${esc(n)}</span><b>${esc(d)}</b></li>`).join('')}</ul></div><div><h3>${esc(C.schoolsTitle)}</h3><ul>${C.schools.map((n) => `<li><span>${esc(n)}</span></li>`).join('')}</ul></div></div><div class="vmap"><iframe src="https://maps.google.com/maps?q=${encodeURIComponent('Antalle Concept Houses, Altınkale, Döşemealtı, Antalya')}&z=14&output=embed" loading="lazy" title="Antalle"></iframe></div></section>
${faq.length ? `<section class="band"><div class="wrap"><h2>${esc(SE.h || 'SSS')}</h2><div class="faq">${faq.map(([q, x]) => `<details><summary>${esc(q)}</summary><p>${esc(x)}</p></details>`).join('')}</div></div></section>` : ''}
<section class="wrap sec two" id="form"><div><h2>${esc(u.infoTitle.replace(/ ve Fiyat Listesi| and Price List| и прайс-лист/i, ''))}</h2><p class="lead">${esc(C.cta.replace(/[^.]*fiyat[^.]*\.|[^.]*price[^.]*\.|[^.]*прайс[^.]*\./gi, '').trim())}</p>${broker(lang, 'Antalle Concept Houses')}<p><a href="https://www.instagram.com/antalleconcepthouses/" target="_blank" rel="noopener">${esc(u.ig)} →</a></p></div><aside class="box"><h2>${esc(u.form)}</h2>${form(lang, 'antalle-talep', url(lang, 'antalle'))}</aside></section>` }));
  sitemap.push(url(lang, 'antalle')); }

  // kurucu: tam içerik
  { const F = FD2[lang];
  write(BASE[lang] + '/' + SEG[lang].founder, layout({ lang, title: F.title, desc: F.desc, canon: url(lang, 'founder'), alts: allAlts('founder'), image: CEO_IMG ? DOMAIN + CEO_IMG : undefined, ld: [{ '@context': 'https://schema.org', '@type': 'Person', name: CEO.name, jobTitle: 'Founder & CEO, ACC VILLAS; Broker, ACC HOMES International Real Estate', worksFor: { '@type': 'RealEstateAgent', name: 'ACC VILLAS', url: DOMAIN }, alumniOf: ['Yıldız Technical University', 'Kuleli Military High School'], knowsLanguage: ['tr', 'en'], memberOf: 'ANTİAD', sameAs: FOUNDER_LINKS.map((l) => l[1]), image: CEO_IMG ? DOMAIN + CEO_IMG : undefined }], body: `
<section class="wrap sec founder"><div class="fhead">${ceoPic('xl')}<div><p class="eyebrow dark">${F.eyebrow}</p><h1>${F.h1}</h1><p class="br">${F.role}</p><p class="lead">${F.intro}</p><p class="acts"><a class="btn" href="https://wa.me/${PHONE.wa}">${F.meet}</a><a class="btn ghost dark" href="tel:${PHONE.raw}">${PHONE.text}</a></p></div></div>
<div class="stats">${F.stats.map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join('')}</div></section>
<section class="wrap sec two"><div><h2>${F.storyT}</h2>${F.story.map((p) => `<p>${p}</p>`).join('')}</div><div><h2>${F.timeT}</h2><ol class="tline">${F.time.map(([y, d]) => `<li><b>${y}</b><span>${d}</span></li>`).join('')}</ol></div></section>
<section class="band"><div class="wrap"><h2>${F.expT}</h2><div class="svc">${F.exp.map(([a, b]) => `<div><b>${a}</b><span>${b}</span></div>`).join('')}</div></div></section>
<section class="wrap sec two"><div><p class="eyebrow dark">${INTL[lang].eyebrow}</p><h2>${INTL[lang].h}</h2><p class="lead">${INTL[lang].p}</p></div><div><h2>${F.valT}</h2><p>${F.val}</p><h2>${F.comT}</h2><ul class="chips">${F.com.map((c) => `<li>${c}</li>`).join('')}</ul></div></section>
<section class="band"><div class="wrap"><h2>${X[lang].revT}</h2><div class="revs">${[REVIEWS[2], { ...REV_PROJECT, when: { tr: '2025', en: '2025', ru: '2025' } }].map((r) => `<figure class="rev"><p class="stars">★★★★★</p><blockquote>${esc(r[lang])}</blockquote><figcaption>${r.n} · Google · ${r.when[lang]}</figcaption></figure>`).join('')}</div></div></section>
<section class="wrap sec"><h2>${F.linksT}</h2><p class="flinks big">${FOUNDER_LINKS.map(([n, h]) => `<a href="${h}" target="_blank" rel="noopener">${n}</a>`).join('')}<a href="${url(lang, 'antalle')}">Antalle Concept Houses</a><a href="${url(lang, 'marketing')}">${MKT[lang].nav}</a></p></section>` }));
  sitemap.push(url(lang, 'founder')); }

  // kvkk
  write(BASE[lang] + '/' + SEG[lang].privacy, layout({ lang, title: X[lang].kv.title, desc: X[lang].kv.title, canon: url(lang, 'privacy'), alts: allAlts('privacy'), body: `<section class="wrap sec legal"><h1>${X[lang].kv.h1}</h1>${KVKK_HTML[lang]}</section>` }));

  // hizmetlerimiz
  { const sv = SVC[lang];
  write(BASE[lang] + '/' + SEG[lang].services, layout({ lang, title: sv.title, desc: sv.desc, canon: url(lang, 'services'), alts: allAlts('services'), ld: [{ '@context': 'https://schema.org', '@type': 'Service', provider: { '@type': 'RealEstateAgent', name: 'ACC VILLAS', url: DOMAIN }, areaServed: 'Antalya', serviceType: sv.groups.map((g) => g[0]) }], body: `
<section class="wrap sec"><p class="eyebrow dark">ACC VILLAS</p><h1>${sv.h1}</h1><p class="lead">${sv.lead}</p></section>
<section class="wrap sec svcp">${sv.groups.map(([h, items], i) => `<div class="sg"><span class="no">0${i + 1}</span><div><h2>${h}</h2><ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul></div></div>`).join('')}</section>
<section class="plaza"><div class="wrap"><p class="eyebrow">${PLAZA[lang].eyebrow}</p><h2>${PLAZA[lang].h}</h2><p class="lead">${PLAZA[lang].p}</p><div class="pgrid">${PLAZA[lang].items.map(([a, b]) => `<div><h3>${a}</h3><p>${b}</p></div>`).join('')}</div><p class="acts"><a class="btn light" href="${url(lang, 'marketing')}">${PLAZA[lang].cta}</a></p></div></section>
<section class="wrap sec intl"><p class="eyebrow dark">${INTL[lang].eyebrow}</p><h2>${INTL[lang].h}</h2><p class="lead">${INTL[lang].p}</p><div class="pgrid">${INTL[lang].items.map(([a, b]) => `<div><h3>${a}</h3><p>${b}</p></div>`).join('')}</div></section>
<section class="band"><div class="wrap two"><div><h2>${sv.cta}</h2>${broker(lang)}<p class="acts"><a class="btn ghost dark" href="${url(lang, 'value')}">${t.valueT}</a><a class="btn ghost dark" href="${url(lang, 'living')}">${t.livT}</a></p></div><aside class="box">${form(lang, 'villa-talep', url(lang, 'services'), '<input type="hidden" name="konu" value="hizmet">')}</aside></div></section>` }));
  sitemap.push(url(lang, 'services')); }

  // journal
  { const j = JOURNAL[lang]; const ps = (p) => (lang === 'tr' ? p.slug : lang === 'en' ? p.slugEn : p.slugRu);
  const pimg = (p) => { for (const v of VILLAS) { const f = v.foto.find((x) => x.includes(p.img)); if (f) return f; } return VILLAS[POSTS.indexOf(p) % VILLAS.length]?.foto[0]; };
  write(BASE[lang] + '/' + SEG[lang].journal, layout({ lang, title: j.title, desc: j.desc, canon: url(lang, 'journal'), alts: allAlts('journal'), body: `
<section class="wrap sec"><p class="eyebrow dark">ACC VILLAS</p><h1>${j.h1}</h1><p class="lead">${j.lead}</p><div class="posts">${POSTS.map((p) => `<a class="post" href="${url(lang, 'journal', ps(p))}"><div class="ph"><img src="${esc(pimg(p))}" alt="" loading="lazy"></div><h2>${p[lang].t}</h2><p>${p[lang].d}</p><span class="more">${j.read} →</span></a>`).join('')}</div></section>` }));
  sitemap.push(url(lang, 'journal'));
  for (const p of POSTS) { const c = p[lang]; const alts = { tr: url('tr', 'journal', p.slug), en: url('en', 'journal', p.slugEn), ru: url('ru', 'journal', p.slugRu) };
    write(alts[lang], layout({ lang, title: `${c.t} | ACC VILLAS`, desc: c.d, canon: alts[lang], alts, image: pimg(p), ld: [{ '@context': 'https://schema.org', '@type': 'Article', headline: c.t, description: c.d, image: pimg(p), author: { '@type': 'Person', name: CEO.name, url: DOMAIN + url(lang, 'founder') }, publisher: { '@type': 'Organization', name: 'ACC VILLAS', url: DOMAIN }, datePublished: '2026-11-22', inLanguage: lang }], body: `
<article class="wrap sec art"><p class="crumb"><a href="${url(lang, 'journal')}">← ${j.h1}</a></p><h1>${c.t}</h1><p class="lead">${c.d}</p><p class="byl">${CEO.name} · ${CEO.role[lang]}</p><img class="cover" src="${esc(pimg(p))}" alt="${esc(c.t)}" fetchpriority="high">
${c.b.map(([h, x], i) => `<h2>${i + 1}. ${h}</h2><p>${x}</p>`).join('')}<div class="endbox"><p>${c.end}</p>${broker(lang, c.t)}</div></article>
<section class="wrap sec"><div class="sh"><h2>${t.featured}</h2><a href="${url(lang, 'list')}">${t.all} →</a></div><div class="grid">${VILLAS.filter((v) => !v.satildi && !v.kiralik).slice(0, 4).map((v) => card(v, lang)).join('')}</div></section>` }));
    sitemap.push(alts[lang]); } }

  // projeler
  const pp = t.projPage;
  write(BASE[lang] + '/' + SEG[lang].projects, layout({ lang, title: pp.title, desc: pp.desc, canon: url(lang, 'projects'), alts: allAlts('projects'), body: `
<section class="wrap sec"><h1>${t.projT}</h1><p class="lead">${t.projP}</p><p><a class="btn" href="${url(lang, 'antalle')}">Antalle Concept Houses →</a></p><figure class="rev solo"><p class="stars">★★★★★</p><blockquote>${esc(REV_PROJECT[lang])}</blockquote><figcaption>${REV_PROJECT.n} · Google</figcaption></figure>${projects.map((p) => `<h2 id="${esc(encodeURIComponent(p))}">${esc(p)}</h2><div class="grid">${VILLAS.filter((v) => v.proje === p).map((v) => card(v, lang)).join('')}</div>`).join('')}</section>` }));
  sitemap.push(url(lang, 'projects'));
}

// statik dosyalar
fs.copyFileSync(path.join(HERE, 'style.css'), path.join(OUT, 'style.css'));
for (const f of fs.existsSync(path.join(HERE, 'static')) ? fs.readdirSync(path.join(HERE, 'static')) : []) fs.copyFileSync(path.join(HERE, 'static', f), path.join(OUT, f));
const php = fs.readFileSync(path.join(ROOT, 'server/form.php'), 'utf8')
  .replace("'rehber-indir'];", "'rehber-indir', 'villa-talep', 'villa-sat', 'villa-degerleme', 'villa-teklif', 'antalle-talep', 'etkinlik-talep'];")
  .replace("'From: ACC HOMES Web <'", "'From: ACC VILLAS Web <'")
  // addon alan adı eski PHP sürümüyle çalışabilir: PHP 8 fonksiyonları için yedek
  // bu hostingde mail() kapalı: yoksa atla, talep yine panele düşer
  .replace("$sent = @mail(", "$sent = function_exists('mail') && @mail(")
  .replace('declare(strict_types=1);', "declare(strict_types=1);\nif (!function_exists('str_starts_with')) { function str_starts_with($h, $n) { return strncmp((string)$h, (string)$n, strlen((string)$n)) === 0; } }\nif (!function_exists('str_contains')) { function str_contains($h, $n) { return $n === '' || strpos((string)$h, (string)$n) !== false; } }");
fs.writeFileSync(path.join(OUT, 'form.php'), php);
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${DOMAIN}/sitemap.xml\n`);
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemap.map((u) => `<url><loc>${DOMAIN}${u}</loc></url>`).join('')}</urlset>\n`);
// SSL sertifikası çıkana kadar https zorlaması kapalı (FORCE_HTTPS=1 ile açılır)
const HTTPS_ON = process.env.FORCE_HTTPS === '1';
fs.writeFileSync(path.join(OUT, '.htaccess'), `RewriteEngine On\n${HTTPS_ON ? 'RewriteCond %{HTTPS} off [OR]\n' : ''}RewriteCond %{HTTP_HOST} ^www\\. [NC]\nRewriteRule ^ ${HTTPS_ON ? 'https' : 'http'}://accvillas.com%{REQUEST_URI} [L,R=301]\nRewriteRule ^villalar/?$ /satilik-villalar/ [L,R=301]\nRewriteRule ^en/villas/?$ /en/villas-for-sale/ [L,R=301]\nRewriteRule ^ru/villy/?$ /ru/villy-na-prodazhu/ [L,R=301]\nErrorDocument 404 /\n<IfModule mod_expires.c>\nExpiresActive On\nExpiresByType text/css "access plus 30 days"\n</IfModule>\n`);
console.log(`OK — ${sitemap.length} sayfa`);
