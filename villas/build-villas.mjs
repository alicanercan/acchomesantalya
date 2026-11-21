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
    homeTitle: 'Antalya Satılık Villa | ACC VILLAS · Antalya’nın Villa Uzmanı',
    homeDesc: 'Antalya’da satılık ve kiralık villalar, villa projeleri ve ücretsiz değerleme. Konyaaltı, Döşemealtı, Lara, Belek, Kaş ve Alanya’da seçkin villalar; alımdan tapuya VIP hizmet.',
    h1: 'Antalya’nın seçkin villaları', sub: 'Satılık ve kiralık villalar, villa projeleri ve alımdan tapuya kadar uçtan uca VIP hizmet. Siz karar verin, gerisini biz halledelim.',
    s: { region: 'Bölge', any: 'Tüm bölgeler', type: 'İşlem', sale: 'Satılık', rent: 'Kiralık', go: 'Villaları göster' },
    featured: 'Öne çıkan villalar', all: 'Tüm villalar', regionsT: 'Bölgelere göre villalar', regionsP: 'Antalya’nın her bölgesinin kendine has bir hayatı var. Size uygun olanı birlikte bulalım.',
    colT: 'Koleksiyonlar', offT: 'Gizli satış (off-market)', offP: 'Bazı villalar ilan olarak yayınlanmaz. Sahibinin isteğiyle yalnızca doğrulanmış alıcılara gösterilir. Aradığınızı söyleyin, size özel portföyümüzü açalım.', offBtn: 'Özel portföyü sor',
    svcT: 'A’dan Z’ye hizmet', svc: [['Online gösterim', 'Görüntülü görüşmeyle villayı bulunduğunuz yerden gezin.'], ['Hukuki ön kontrol', 'Tapu, iskân, imar ve borç durumu satıştan önce kontrol edilir.'], ['Vekâletle alım', 'Türkiye’ye gelmeden, vekâletle tüm süreç tamamlanır.'], ['Tapu ve resmi işlemler', 'Vergi numarası, banka hesabı, tercüman ve tapu günü organizasyonu.'], ['Teslim sonrası', 'Abonelikler, sigorta, eşyalama, bakım ve kiraya verme yönetimi.'], ['Vatandaşlık ve ikamet', 'Yatırım yoluyla vatandaşlık ve ikamet süreçlerinde rehberlik.']],
    ceoT: 'Kurucudan', ceoQ: 'Villa almak ya da satmak, hayatın en önemli kararlarından biridir. ACC VILLAS’ta her villayı yerinde görür, her müşterimizle bizzat ilgileniriz. Siz yalnızca karar verin; gerisini biz halledelim.',
    meet: 'Görüşme planla', sellT: 'Villanızı satmak mı istiyorsunuz?', sellP: 'Doğru fiyat, doğru alıcı, tam gizlilik. Ücretsiz değerlemeyle başlayın.', valueT: 'Ücretsiz değerleme',
    valueP: 'Bölgedeki gerçek satışlar ve güncel ilanlarla karşılaştırarak villanız için gerçekçi bir fiyat aralığı çıkarıyoruz. Ücretsiz ve bağlayıcı değil.',
    projT: 'Villa projeleri', projP: 'ACC HOMES’un portföyündeki ve yetkili olduğu villa projeleri.',
    price: 'Fiyat', call: 'Fiyat için arayın', rooms: 'Oda', gross: 'Brüt', land: 'Arsa', site: 'Site içi', villas: 'villa',
    details: 'Villa bilgileri', features: 'Özellikler', ask: 'Bu villa hakkında bilgi alın', wa: 'WhatsApp', callBtn: 'Ara',
    form: { name: 'Ad Soyad', phone: 'Telefon', email: 'E-posta', msg: 'Mesajınız', send: 'Gönder', cc: 'Ülke kodu', addr: 'Villanın konumu (ilçe / mahalle)', size: 'Brüt m² / arsa m²', consent: 'Kişisel verilerimin iletişim amacıyla işlenmesini kabul ediyorum.', kvkk: 'Aydınlatma metni' },
    ok: 'Teşekkürler, talebiniz bize ulaştı. En kısa sürede dönüş yapacağız.',
    listT: 'Antalya Satılık Villalar', listD: 'Antalya’daki satılık villalarımız: Konyaaltı, Döşemealtı, Lara, Altıntaş, Belek ve diğer bölgeler. Güncel fiyatlar ve detaylı bilgiler.',
    rentT: 'Antalya Kiralık Villalar', rentD: 'Antalya’da uzun dönem ve sezonluk kiralık villalar.',
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
    homeTitle: 'Luxury Villas for Sale in Antalya | ACC VILLAS',
    homeDesc: 'Villas for sale and rent in Antalya, villa developments and free valuation. Konyaaltı, Döşemealtı, Lara, Belek, Kaş and Alanya, with VIP service from viewing to title deed.',
    h1: 'Antalya’s finest villas', sub: 'Villas for sale and rent, new villa developments and end-to-end VIP service through to the title deed. You decide; we take care of everything else.',
    s: { region: 'Area', any: 'All areas', type: 'Looking to', sale: 'Buy', rent: 'Rent', go: 'Show villas' },
    featured: 'Featured villas', all: 'All villas', regionsT: 'Villas by area', regionsP: 'Every part of Antalya has its own way of life. Let us help you find yours.',
    colT: 'Collections', offT: 'Off-market villas', offP: 'Some villas are never listed publicly. At the owner’s request, they are shown only to verified buyers. Tell us what you are looking for and we will open our private portfolio to you.', offBtn: 'Ask about private listings',
    svcT: 'Service from A to Z', svc: [['Online viewings', 'Tour the villa by video call, wherever you are.'], ['Legal due diligence', 'Title deed, occupancy permit, zoning and debts checked before you buy.'], ['Buy by power of attorney', 'Complete the whole purchase without travelling to Türkiye.'], ['Title deed and paperwork', 'Tax number, bank account, sworn translator and title deed day arranged.'], ['After handover', 'Utilities, insurance, furnishing, maintenance and rental management.'], ['Citizenship and residence', 'Guidance on citizenship by investment and residence permits.']],
    ceoT: 'From the founder', ceoQ: 'Buying or selling a villa is one of life’s biggest decisions. At ACC VILLAS we see every villa in person and look after every client ourselves. You make the decision; we take care of the rest.',
    meet: 'Book a call', sellT: 'Thinking of selling your villa?', sellP: 'The right price, the right buyer, full discretion. Start with a free valuation.', valueT: 'Free valuation',
    valueP: 'We compare real sales and current listings in your area to give a realistic price range for your villa. Free and non-binding.',
    projT: 'Villa developments', projP: 'Villa developments in ACC HOMES’ portfolio, including projects we are authorised to sell.',
    price: 'Price', call: 'Price on request', rooms: 'Rooms', gross: 'Gross', land: 'Plot', site: 'Gated complex', villas: 'villas',
    details: 'Villa details', features: 'Features', ask: 'Ask about this villa', wa: 'WhatsApp', callBtn: 'Call',
    form: { name: 'Full name', phone: 'Phone', email: 'Email', msg: 'Your message', send: 'Send', cc: 'Country code', addr: 'Villa location (district / neighbourhood)', size: 'Gross m² / plot m²', consent: 'I agree to my personal data being processed to contact me.', kvkk: 'Privacy notice' },
    ok: 'Thank you, we have received your request and will get back to you shortly.',
    listT: 'Villas for Sale in Antalya', listD: 'Our villas for sale in Antalya: Konyaaltı, Döşemealtı, Lara, Altıntaş, Belek and more. Current prices and full details.',
    rentT: 'Villas for Rent in Antalya', rentD: 'Long-term and seasonal villa rentals in Antalya.',
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
    homeTitle: 'Виллы в Анталии на продажу | ACC VILLAS',
    homeDesc: 'Виллы на продажу и в аренду в Анталии, проекты вилл и бесплатная оценка. Коньяалты, Дёшемеалты, Лара, Белек, Каш и Аланья — VIP-сопровождение до получения тапу.',
    h1: 'Лучшие виллы Анталии', sub: 'Виллы на продажу и в аренду, новые проекты и VIP-сопровождение до получения тапу. Вы принимаете решение — всё остальное мы берём на себя.',
    s: { region: 'Район', any: 'Все районы', type: 'Цель', sale: 'Купить', rent: 'Арендовать', go: 'Показать виллы' },
    featured: 'Избранные виллы', all: 'Все виллы', regionsT: 'Виллы по районам', regionsP: 'У каждого района Анталии свой образ жизни. Поможем найти ваш.',
    colT: 'Подборки', offT: 'Закрытые продажи (off-market)', offP: 'Некоторые виллы не публикуются. По желанию владельца их показывают только проверенным покупателям. Расскажите, что вы ищете, и мы откроем для вас закрытый портфель.', offBtn: 'Узнать о закрытых объектах',
    svcT: 'Сопровождение от А до Я', svc: [['Онлайн-показ', 'Осмотр виллы по видеосвязи, где бы вы ни были.'], ['Юридическая проверка', 'Тапу, разрешение на заселение, зонирование и долги проверяются до покупки.'], ['Покупка по доверенности', 'Вся сделка без поездки в Турцию.'], ['Тапу и документы', 'Налоговый номер, банковский счёт, переводчик и день оформления тапу.'], ['После передачи', 'Коммунальные услуги, страхование, меблировка, обслуживание и управление арендой.'], ['Гражданство и ВНЖ', 'Сопровождение по гражданству за инвестиции и виду на жительство.']],
    ceoT: 'Слово основателя', ceoQ: 'Покупка или продажа виллы — одно из самых важных решений в жизни. В ACC VILLAS мы лично осматриваем каждую виллу и сами ведём каждого клиента. Вы принимаете решение — остальное мы берём на себя.',
    meet: 'Назначить звонок', sellT: 'Хотите продать виллу?', sellP: 'Правильная цена, правильный покупатель, полная конфиденциальность. Начните с бесплатной оценки.', valueT: 'Бесплатная оценка',
    valueP: 'Сравниваем реальные сделки и актуальные объявления в вашем районе и даём реалистичный ценовой диапазон. Бесплатно и ни к чему не обязывает.',
    projT: 'Проекты вилл', projP: 'Проекты вилл в портфеле ACC HOMES.',
    price: 'Цена', call: 'Цена по запросу', rooms: 'Комнаты', gross: 'Общая', land: 'Участок', site: 'В комплексе', villas: 'вилл',
    details: 'Характеристики', features: 'Особенности', ask: 'Узнать об этой вилле', wa: 'WhatsApp', callBtn: 'Позвонить',
    form: { name: 'Имя и фамилия', phone: 'Телефон', email: 'E-mail', msg: 'Сообщение', send: 'Отправить', cc: 'Код страны', addr: 'Расположение виллы (район)', size: 'Общая м² / участок м²', consent: 'Я согласен на обработку персональных данных для связи со мной.', kvkk: 'Политика конфиденциальности' },
    ok: 'Спасибо, ваша заявка получена. Мы скоро свяжемся с вами.',
    listT: 'Виллы на продажу в Анталии', listD: 'Наши виллы на продажу в Анталии: Коньяалты, Дёшемеалты, Лара, Алтынташ, Белек и другие районы. Актуальные цены и подробности.',
    rentT: 'Аренда вилл в Анталии', rentD: 'Долгосрочная и сезонная аренда вилл в Анталии.',
    empty: 'Сейчас по этому выбору нет опубликованных вилл. Напишите, что вы ищете, и мы пришлём подходящие виллы из закрытого портфеля.',
    regionH: (n) => `Виллы на продажу и в аренду: ${n}`, regionD: (n) => `Наши виллы в районе ${n}, информация о районе и персональный подбор виллы.`,
    filterAll: 'Все', sold: 'Продано', rentB: 'Аренда', by: 'ACC VILLAS — дочерняя компания ACC HOMES International Real Estate по виллам.', office: 'ACC Plaza, бульвар Портакал Чичеги 36/B, Ешильбахче, Муратпаша / Анталия', back: 'Все виллы',
    sellPage: { title: 'Продать виллу в Анталии | ACC VILLAS', desc: 'Продайте виллу в Анталии по правильной цене: бесплатная оценка, профессиональная съёмка, маркетинг в Турции и за рубежом, по желанию — закрытая продажа.', h1: 'Продадим вашу виллу по правильной цене правильному покупателю', steps: [['Бесплатная оценка', 'Реалистичный диапазон цены на основе сопоставимых сделок.'], ['Профессиональная подача', 'Фото, видео и съёмка с дрона, качественное описание.'], ['Правильный покупатель', 'Сеть турецких и иностранных покупателей, международные порталы, реклама.'], ['Закрытая продажа по желанию', 'Вилла не публикуется и показывается только проверенным покупателям.'], ['До получения тапу', 'Переговоры, договор, банк и кадастр.']] },
    valuePage: { title: 'Бесплатная оценка виллы в Анталии | ACC VILLAS', desc: 'Узнайте стоимость вашей виллы в Анталии бесплатно. Анализ цены на основе сопоставимых данных.', h1: 'Узнайте стоимость вашей виллы бесплатно' },
    projPage: { title: 'Проекты вилл в Анталии | ACC VILLAS', desc: 'Проекты вилл в Анталии: доступные виллы, цены и показ на месте.' },
    regPage: { title: 'Районы вилл Анталии | ACC VILLAS', desc: 'Жизнь в вилле и виллы на продажу: Коньяалты, Дёшемеалты, Лара–Кунду, Алтынташ, Кепез–Дуаджи, Белек, Кемер, Каш–Калкан и Аланья.' },
  },
};
const KVKK = { tr: `${MAIN}/kvkk-aydinlatma-metni/`, en: `${MAIN}/en/privacy-notice/`, ru: `${MAIN}/en/privacy-notice/` };

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
// Sahibinden fotoğrafları (filigranlı) kullanılmaz
for (const v of rows) v.foto = (v.foto || []).filter((f) => !/shbdn\.com|sahibinden/i.test(f));
const stripTeam = (txt, name) => {
  const pats = ['iş ortağ', 'danışman', 'partner', 'партн', 'консультант', ...(name ? [name, name.split(' ').slice(-1)[0]] : [])].map((x) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const re = new RegExp(`[^.!?\\n]*(${pats.join('|')})[^.!?\\n]*[.!?]?[ \\t]*`, 'giu');
  return txt.replace(re, '').replace(/\n{3,}/g, '\n\n').trim();
};
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
      // ekip adı geçen cümleler çıkarılır (sitede yalnızca Caner görünür)
      text: (lang) => stripTeam(pick(s.aciklama, lang) || pick(v.aciklama, lang) || '', v.danisman),
      // sitede ekip gösterilmez: tüm villalarda iletişim Ali Caner Can (Broker)
      agent: { ad: 'Ali Caner Can · Broker', tel: PHONE.raw },
    };
  })
  .sort((a, b) => (a.satildi - b.satildi) || (b.created_at || '').localeCompare(a.created_at || ''));
console.log(`ACC VILLAS: ${rows.length} panel ilanından ${VILLAS.length} villa`);

// ---------- yardımcılar ----------
for (const v of VILLAS) { v.reg = regionOf(v); v.cols = COL.filter((c) => c.m(v)).map((c) => c.k); }
const url = (lang, key, id) => `${BASE[lang]}/${key ? SEG[lang][key] + '/' : ''}${id ? id + '/' : ''}`;
const price = (v, lang) => (v.fiyatGizli ? T[lang].call : `${nf.format(Number(v.fiyat))} ${v.para === 'TL' ? '₺' : v.para}${v.kiralik ? (lang === 'tr' ? ' / ay' : lang === 'ru' ? ' / мес.' : ' / month') : ''}`);
const regName = (k, lang) => REG.find((r) => r.k === k)?.n[lang] || '';
const area = (v, lang) => { const r = v.reg ? regName(v.reg, lang) : v.ilce; return v.mahalle && !r.includes(v.mahalle) ? `${v.mahalle}, ${r}` : r; };
const telIn = (lang, req = true) => `<div class="tel"><select name="ulke_kodu" aria-label="${T[lang].form.cc}">${DIAL.map(([c, d]) => `<option value="${d}"${d === DEF_DIAL[lang] && c !== 'KZ' ? ' selected' : ''}>${c} ${d}</option>`).join('')}</select><input name="telefon" type="tel" placeholder="${T[lang].form.phone}${req ? ' *' : ''}"${req ? ' required' : ''} autocomplete="tel-national"></div>`;
const consent = (lang) => `<label class="chk"><input type="checkbox" name="kvkk_onay" value="evet" required> <span>${T[lang].form.consent} <a href="${KVKK[lang]}" target="_blank" rel="noopener">${T[lang].form.kvkk}</a> *</span></label>`;
function form(lang, name, next, extra = '', btn) {
  const f = T[lang].form;
  return `<form class="form" method="POST" action="/form.php"><input type="hidden" name="form-name" value="${name}"><input type="hidden" name="_next" value="${next}"><input type="hidden" name="dil" value="${lang}"><input type="hidden" name="site" value="accvillas.com"><p class="hp"><input name="bot" tabindex="-1" autocomplete="off"></p>
<input name="ad" placeholder="${f.name} *" required autocomplete="name">${telIn(lang)}<input name="eposta" type="email" placeholder="${f.email}" autocomplete="email">${extra}<textarea name="mesaj" rows="3" placeholder="${f.msg}"></textarea>${consent(lang)}<button class="btn" type="submit">${btn || f.send}</button></form>`;
}
const card = (v, lang) => `<a class="card" href="${url(lang, 'villa', v.slug)}" data-r="${v.reg}" data-c="${v.cols.join(' ')}"><div class="ph"><img src="${esc(v.foto[0])}" alt="${esc(v.title(lang))}" loading="lazy" width="640" height="427">${v.satildi ? `<span class="badge">${T[lang].sold}</span>` : v.kiralik ? `<span class="badge g">${T[lang].rentB}</span>` : ''}</div><div class="cb"><p class="loc">${esc(area(v, lang))}</p><h3>${esc(v.title(lang))}</h3><p class="specs">${[v.oda, v.brut && v.brut + ' m²', v.arsa && `${T[lang].land} ${v.arsa} m²`].filter(Boolean).join(' · ')}</p><p class="pr">${esc(price(v, lang))}</p></div></a>`;
const CEO_IMG = fs.existsSync(path.join(HERE, 'static/ceo.webp')) ? '/ceo.webp' : '';
const ceoPic = (cls = '') => (CEO_IMG ? `<img class="ceopic ${cls}" src="${CEO_IMG}" alt="${CEO.name}" width="160" height="160">` : `<span class="ceopic mono ${cls}" aria-hidden="true">AC</span>`);
const broker = (lang, ctx = '') => { const t = T[lang]; const wa = `https://wa.me/${PHONE.wa}${ctx ? '?text=' + encodeURIComponent(ctx) : ''}`;
  return `<div class="broker">${ceoPic()}<div><p class="bn">${CEO.name}</p><p class="br">${CEO.role[lang]} · ACC VILLAS</p></div></div><p class="acts"><a class="btn" href="${wa}">${t.wa}</a><a class="btn ghost dark" href="tel:${PHONE.raw}">${t.callBtn}</a></p>`; };
const emptyBox = (lang, next) => `<div class="empty"><p>${T[lang].empty}</p>${form(lang, 'villa-talep', next)}</div>`;

const ORG = { '@context': 'https://schema.org', '@type': 'RealEstateAgent', name: 'ACC VILLAS', url: DOMAIN, telephone: PHONE.raw, founder: { '@type': 'Person', name: CEO.name, jobTitle: 'Founder & CEO' }, parentOrganization: { '@type': 'RealEstateAgent', name: 'ACC HOMES International Real Estate', url: MAIN }, address: { '@type': 'PostalAddress', streetAddress: 'Portakal Çiçeği Bulvarı No:36/B, Yeşilbahçe', addressLocality: 'Muratpaşa', addressRegion: 'Antalya', addressCountry: 'TR' }, areaServed: 'Antalya' };

const NAVK = ['list', 'rent', 'projects', 'regions', 'living', 'sell'];
function layout({ lang, title, desc, canon, alts, body, ld = [], image }) {
  const t = T[lang];
  const altLinks = alts ? LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${DOMAIN}${alts[l]}">`).join('') + `<link rel="alternate" hreflang="x-default" href="${DOMAIN}${alts.en}">` : '';
  const langSw = alts ? LANGS.map((l) => `<a href="${alts[l]}"${l === lang ? ' class="on"' : ''}>${l.toUpperCase()}</a>`).join('') : '';
  return `<!DOCTYPE html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><link rel="canonical" href="${DOMAIN}${canon}">${altLinks}
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${DOMAIN}${canon}"><meta property="og:type" content="website">${image ? `<meta property="og:image" content="${esc(image)}">` : ''}
<link rel="icon" href="${MAIN}/favicon.ico"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"><link rel="stylesheet" href="/style.css?v=${VER}">
${[ORG, ...ld].map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('')}</head><body>
<header class="top"><div class="wrap hb"><a class="logo" href="${url(lang)}"><span><b>ACC</b> VILLAS</span><small>${t.tag}</small></a><nav>${NAVK.map((k) => `<a href="${url(lang, k)}">${k === 'living' ? t.nav2 : t.nav[k]}</a>`).join('')}</nav><div class="lsw">${langSw}</div></div></header>
<p class="okmsg" hidden>${t.ok}</p>
<main>${body}</main>
<footer><div class="wrap fg"><div><p class="logo"><span><b>ACC</b> VILLAS</span></p><p>${t.by}</p><p><a href="${MAIN}${BASE[lang] || ''}/">acchomesantalya.com</a></p></div><div><p class="fh">${t.nav.regions}</p><p class="flinks">${REG.map((r) => `<a href="${url(lang, 'regions', r.k)}">${r.n[lang]}</a>`).join('')}</p></div><div><p>${t.office}</p><p><a href="tel:${PHONE.raw}">${PHONE.text}</a> · <a href="https://wa.me/${PHONE.wa}">WhatsApp</a></p></div></div><p class="wrap cp">© ${new Date().getFullYear()} ACC HOMES International Real Estate</p></footer>
<a class="wafab" href="https://wa.me/${PHONE.wa}" aria-label="WhatsApp">WhatsApp</a>
<script>
if(/[?&]ok=1/.test(location.search))document.querySelector('.okmsg').hidden=false;
(function(){var g=document.querySelector('.grid[data-filter]');if(!g)return;var q=new URLSearchParams(location.search),st={r:q.get('r')||'',c:q.get('c')||''};
function ap(){var n=0;g.querySelectorAll('.card').forEach(function(c){var ok=(!st.r||c.dataset.r===st.r)&&(!st.c||(' '+c.dataset.c+' ').indexOf(' '+st.c+' ')>-1);c.hidden=!ok;if(ok)n++;});document.querySelectorAll('[data-fr]').forEach(function(b){b.classList.toggle('on',b.dataset.fr===st.r);});document.querySelectorAll('[data-fc]').forEach(function(b){b.classList.toggle('on',b.dataset.fc===st.c);});var e=document.querySelector('.empty');if(e)e.hidden=n>0;}
document.querySelectorAll('[data-fr]').forEach(function(b){b.onclick=function(){st.r=b.dataset.fr;ap();};});document.querySelectorAll('[data-fc]').forEach(function(b){b.onclick=function(){st.c=st.c===b.dataset.fc?'':b.dataset.fc;ap();};});ap();})();
var sf=document.querySelector('.search');if(sf)sf.onsubmit=function(e){e.preventDefault();var r=sf.r.value,t=sf.t.value;location.href=sf.dataset[t]+(r?'?r='+r:'');};
</script>
</body></html>`;
}
const VER = Date.now().toString(36);
// acchomesantalya.com görselleri hotlink korumalı: referrer göndermeden yükle
function write(p, html) { const f = path.join(OUT, p, 'index.html'); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, html.replace(/<img (?!referrerpolicy)/g, '<img referrerpolicy="no-referrer" ')); }
const allAlts = (key, id) => Object.fromEntries(LANGS.map((l) => [l, url(l, key, id)]));
const filters = (lang, list) => { const t = T[lang]; const regs = REG.filter((r) => list.some((v) => v.reg === r.k));
  return `<div class="filters"><button data-fr="">${t.filterAll}</button>${regs.map((r) => `<button data-fr="${r.k}">${r.n[lang]}</button>`).join('')}<span class="sep"></span>${COL.filter((c) => list.some((v) => v.cols.includes(c.k))).map((c) => `<button data-fc="${c.k}">${c.n[lang]}</button>`).join('')}</div>`; };

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
<section class="hero"><picture><source media="(max-width:700px)" srcset="${HERO_M}"><img src="${HERO}" alt="" fetchpriority="high"></picture><div class="wrap hc"><p class="eyebrow">ACC VILLAS · ${t.tag}</p><h1>${t.h1}</h1><p>${t.sub}</p>
<form class="search" data-sale="${url(lang, 'list')}" data-rent="${url(lang, 'rent')}"><label><span>${t.s.region}</span><select name="r"><option value="">${t.s.any}</option>${REG.map((r) => `<option value="${r.k}">${r.n[lang]}</option>`).join('')}</select></label><label><span>${t.s.type}</span><select name="t"><option value="sale">${t.s.sale}</option><option value="rent">${t.s.rent}</option></select></label><button class="btn" type="submit">${t.s.go}</button></form></div></section>
<section class="wrap sec"><div class="sh"><h2>${t.featured}</h2><a href="${url(lang, 'list')}">${t.all} →</a></div><div class="grid">${active.slice(0, 6).map((v) => card(v, lang)).join('')}</div></section>
<section class="wrap sec"><div class="sh"><h2>${t.regionsT}</h2><a href="${url(lang, 'regions')}">${t.nav.regions} →</a></div><p class="lead">${t.regionsP}</p><div class="regs">${REG.map((r) => { const c = regCover(r); const n = regCount(r); return `<a class="reg${c ? '' : ' noimg'}" href="${url(lang, 'regions', r.k)}">${c ? `<img src="${esc(c)}" alt="${r.n[lang]}" loading="lazy">` : ''}<span><b>${r.n[lang]}</b>${n ? `<small>${n} ${t.villas}</small>` : ''}</span></a>`; }).join('')}</div></section>
<section class="band"><div class="wrap"><h2>${t.colT}</h2><div class="cols">${COL.map((c) => `<a href="${url(lang, 'list')}?c=${c.k}">${c.n[lang]}</a>`).join('')}<a href="${url(lang, 'projects')}">${t.projT}</a><a href="${url(lang, 'rent')}">${t.nav.rent}</a></div></div></section>
<section class="wrap sec"><div class="sh"><h2>${t.livT}</h2><a href="${url(lang, 'living')}">${t.livT} →</a></div><div class="two liv"><p class="lead">${t.livP}</p><a class="partner" href="${url(lang, 'living')}"><img src="/enne-antalya.webp" alt="ENNE Antalya" width="300" height="104"><span>${t.enneT}</span></a></div></section>
<section class="wrap sec"><h2>${t.svcT}</h2><div class="svc">${t.svc.map(([a, b]) => `<div><b>${a}</b><span>${b}</span></div>`).join('')}</div></section>
<section class="band"><div class="wrap two"><div class="off"><p class="eyebrow dark">Private</p><h2>${t.offT}</h2><p>${t.offP}</p><a class="btn" href="https://wa.me/${PHONE.wa}?text=${encodeURIComponent(t.offT)}">${t.offBtn}</a></div><div class="ceo">${ceoPic('big')}<blockquote>“${t.ceoQ}”</blockquote><p class="bn">${CEO.name}</p><p class="br">${CEO.role[lang]}, ACC VILLAS</p><p class="acts"><a class="btn ghost dark" href="https://wa.me/${PHONE.wa}">${t.meet}</a></p></div></div></section>
<section class="wrap sec two"><div><h2>${t.sellT}</h2><p class="lead">${t.sellP}</p><p class="acts"><a class="btn" href="${url(lang, 'value')}">${t.valueT}</a><a class="btn ghost dark" href="${url(lang, 'sell')}">${t.nav.sell}</a></p></div></section>` }));
  sitemap.push(url(lang));

  // satılık / kiralık listeleri
  for (const [key, list, T1, D1] of [['list', sale, t.listT, t.listD], ['rent', rent, t.rentT, t.rentD]]) {
    write(BASE[lang] + '/' + SEG[lang][key], layout({ lang, title: `${T1} | ACC VILLAS`, desc: D1, canon: url(lang, key), alts: allAlts(key), body: `
<section class="wrap sec"><h1>${T1}</h1><p class="lead">${D1}</p>${list.length ? filters(lang, list) : ''}<div class="grid" data-filter>${list.map((v) => card(v, lang)).join('')}</div>${emptyBox(lang, url(lang, key))}</section>` }));
    sitemap.push(url(lang, key));
  }

  // bölgeler
  write(BASE[lang] + '/' + SEG[lang].regions, layout({ lang, title: t.regPage.title, desc: t.regPage.desc, canon: url(lang, 'regions'), alts: allAlts('regions'), body: `
<section class="wrap sec"><h1>${t.regionsT}</h1><p class="lead">${t.regionsP}</p><div class="reglist">${REG.map((r) => { const c = regCover(r); return `<a href="${url(lang, 'regions', r.k)}">${c ? `<img src="${esc(c)}" alt="${r.n[lang]}" loading="lazy">` : '<span class="ph0"></span>'}<div><h2>${r.n[lang]}</h2><p>${r.d[lang]}</p></div></a>`; }).join('')}</div></section>` }));
  sitemap.push(url(lang, 'regions'));
  for (const r of REG) {
    const list = VILLAS.filter((v) => v.reg === r.k);
    write(BASE[lang] + '/' + SEG[lang].regions + '/' + r.k, layout({ lang, title: `${t.regionH(r.n[lang])} | ACC VILLAS`, desc: `${r.d[lang]} ${t.regionD(r.n[lang])}`.slice(0, 158), canon: url(lang, 'regions', r.k), alts: allAlts('regions', r.k), image: list[0]?.foto[0], body: `
<section class="wrap sec"><p class="crumb"><a href="${url(lang, 'regions')}">← ${t.nav.regions}</a></p><h1>${t.regionH(r.n[lang])}</h1><p class="lead">${r.d[lang]}</p><div class="grid" data-filter>${list.map((v) => card(v, lang)).join('')}</div>${emptyBox(lang, url(lang, 'regions', r.k))}</section>` }));
    sitemap.push(url(lang, 'regions', r.k));
  }

  // villa detay
  for (const v of VILLAS) {
    const title = v.title(lang); const text = v.text(lang);
    const specs = [[t.price, price(v, lang)], [t.rooms, v.oda], [t.gross, v.brut && v.brut + ' m²'], [t.land, v.arsa && v.arsa + ' m²'], [lang === 'tr' ? 'Konum' : lang === 'ru' ? 'Расположение' : 'Location', area(v, lang)], [lang === 'tr' ? 'Isıtma' : lang === 'ru' ? 'Отопление' : 'Heating', lang === 'tr' && v.isitma], [lang === 'tr' ? 'Tapu' : lang === 'ru' ? 'Тапу' : 'Title deed', lang === 'tr' && v.tapu], [lang === 'tr' ? 'Kredi' : lang === 'ru' ? 'Ипотека' : 'Mortgage', v.kredi === 'Evet' && (lang === 'tr' ? 'Krediye uygun' : lang === 'ru' ? 'Подходит' : 'Eligible')], ['', v.site === 'Evet' ? t.site : '']].filter(([, x]) => x);
    const ld = { '@context': 'https://schema.org', '@type': 'RealEstateListing', name: title, url: DOMAIN + url(lang, 'villa', v.slug), image: v.foto.slice(0, 6), description: v.meta(lang) || text.slice(0, 300), ...(v.fiyatGizli ? {} : { offers: { '@type': 'Offer', price: Number(v.fiyat), priceCurrency: v.para === 'TL' ? 'TRY' : v.para, availability: v.satildi ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock' } }) };
    const similar = VILLAS.filter((x) => x !== v && !x.satildi && (x.reg === v.reg)).slice(0, 3);
    write(BASE[lang] + '/villa/' + v.slug, layout({ lang, title: `${title} | ACC VILLAS`, desc: (v.meta(lang) || text).slice(0, 158), canon: url(lang, 'villa', v.slug), alts: allAlts('villa', v.slug), image: v.foto[0], ld: [ld], body: `
<section class="wrap sec vd"><p class="crumb"><a href="${url(lang, v.kiralik ? 'rent' : 'list')}">← ${t.back}</a>${v.reg ? ` · <a href="${url(lang, 'regions', v.reg)}">${regName(v.reg, lang)}</a>` : ''}</p><h1>${esc(title)}</h1><p class="loc">${esc(area(v, lang))} · ${v.id}</p>
<div class="gal">${v.foto.slice(0, 12).map((f, i) => `<a href="${esc(f)}" target="_blank" rel="noopener"><img src="${esc(f)}" alt="${esc(title)} ${i + 1}" ${i ? 'loading="lazy"' : 'fetchpriority="high"'} width="800" height="533"></a>`).join('')}</div>
<div class="vcols"><div><h2>${t.details}</h2><dl class="spec">${specs.map(([a, b]) => `<dt>${a}</dt><dd>${esc(b)}</dd>`).join('')}</dl>${text ? `<div class="txt">${text.split(/\n+/).map((p) => `<p>${esc(p)}</p>`).join('')}</div>` : ''}${lang === 'tr' && (v.ozellikler || []).length ? `<h2>${t.features}</h2><ul class="feat">${v.ozellikler.slice(0, 40).map((o) => `<li>${esc(o)}</li>`).join('')}</ul>` : ''}</div>
<aside class="box"><p class="pr big">${esc(price(v, lang))}</p>${broker(lang, `${v.id} — ${title}`)}<h3>${t.ask}</h3>${form(lang, 'villa-talep', url(lang, 'villa', v.slug), `<input type="hidden" name="ilan" value="${v.id}">`)}</aside></div></section>
${similar.length ? `<section class="wrap sec"><h2>${regName(v.reg, lang)}</h2><div class="grid">${similar.map((x) => card(x, lang)).join('')}</div></section>` : ''}` }));
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

  // villa yaşamı
  write(BASE[lang] + '/' + SEG[lang].living, layout({ lang, title: t.livTitle, desc: t.livDesc, canon: url(lang, 'living'), alts: allAlts('living'), body: `
<section class="wrap sec"><h1>${t.livT}</h1><p class="lead">${t.livP}</p>
<div class="enne"><img src="/enne-antalya.webp" alt="ENNE Antalya" width="420" height="145"><div><p class="eyebrow dark">${t.enneT}</p><h2>ENNE Antalya</h2><p>${t.enneP}</p></div></div>
<div class="svc">${t.livCats.map((c, i) => `<div><b>${c}</b>${i === 0 ? '<span>ENNE Antalya</span>' : ''}</div>`).join('')}</div></section>
<section class="wrap sec two"><div>${broker(lang)}</div><aside class="box"><h2>${t.livAsk}</h2>${form(lang, 'villa-talep', url(lang, 'living'), `<input type="hidden" name="konu" value="villa-yasami">`)}</aside></section>` }));
  sitemap.push(url(lang, 'living'));

  // projeler
  const pp = t.projPage;
  write(BASE[lang] + '/' + SEG[lang].projects, layout({ lang, title: pp.title, desc: pp.desc, canon: url(lang, 'projects'), alts: allAlts('projects'), body: `
<section class="wrap sec"><h1>${t.projT}</h1><p class="lead">${t.projP}</p>${projects.map((p) => `<h2 id="${esc(encodeURIComponent(p))}">${esc(p)}</h2><div class="grid">${VILLAS.filter((v) => v.proje === p).map((v) => card(v, lang)).join('')}</div>`).join('')}</section>` }));
  sitemap.push(url(lang, 'projects'));
}

// statik dosyalar
fs.copyFileSync(path.join(HERE, 'style.css'), path.join(OUT, 'style.css'));
for (const f of fs.existsSync(path.join(HERE, 'static')) ? fs.readdirSync(path.join(HERE, 'static')) : []) fs.copyFileSync(path.join(HERE, 'static', f), path.join(OUT, f));
const php = fs.readFileSync(path.join(ROOT, 'server/form.php'), 'utf8')
  .replace("'rehber-indir'];", "'rehber-indir', 'villa-talep', 'villa-sat', 'villa-degerleme'];")
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
