// Ekip ve iş ortakları — kaynak: Ekip Bakiye Takip (Kasım 2026) + Caner'in notları.
// Fotoğraflar eski WordPress sitesinden derleme sırasında indirilir (dist/ekip/), sonra repoya alınacak.
// Kaynak: Caner'in 16.11.2026 tam ekip listesi (47 kişi + Kamil).
// [EKSİK] fotoğraf: Burak Özel, Evren Oral. (local/… fotoğraflar static/img/ekip/kisi/ klasöründe)
export const PHOTO_BASE = 'https://acchomesantalya.com/wp-content/uploads/';

// Yönetim ve destek ekibi fotoğrafları (content.mjs TEAM sırasıyla eşleşir, isimle)
export const STAFF_PHOTOS = {
  'Ali Caner Can': '2026/09/ali-caner-can-gayrimenkul-danismani-acc-homes-780x780.webp',
  'Esma Özdal': '2026/09/esma-ozdal-can-gayrimenkul-danismani-acc-homes-780x780.webp',
  'Okan Akgün': '2026/10/acc-homes-ofis-yoneticisi-okan-akgun-780x780.webp',
  // Şimdilik gizli: 'Melissa Enriquez Sedita': '2026/09/melissa-enriquez-sedita-gayrimenkul-danismani-acc-homes-780x780.webp',
  'Naz Bensu Taşbaş': '2026/09/bensu-tasbas-sosyal-medya-uzmani-acc-homes-780x780.webp',
  'Derya Plyatner': '2026/09/derya-plyatner-grafik-tasarim-uzmani-acc-homes-780x780.webp',
  'Zeynep Çarıkçı': 'local/zeynep-carikci-ofis-servis-acc-homes-780x780.webp',
  'Kamil Bey': '2026/01/kamil-office-boy-acc-homes-780x780.webp',
};

// İş ortakları (alfabetik). langs: konuştuğu diller (eski profilinden; boşsa gösterilmez)
export const PARTNERS = [
  { name: 'Adnan Konuk', photo: '2026/09/adnan-konuk-gayrimenkul-danismani-acc-homes-780x780.webp', langs: [] },
  { name: 'Alev Aydın', photo: '2026/09/alev-aydin-gayrimenkul-danismani-acc-homes-780x780.webp', langs: ['tr', 'en'] },
  { name: 'Alp Akıdan', photo: '2026/09/alp-akidan-gayrimenkul-danismani-acc-homes-780x780.webp', langs: ['en', 'tr'] },
  { name: 'Arya Balcı', photo: '2026/09/arya-balci-gayrimenkul-danismani-acc-homes-780x780.webp', langs: ['tr', 'en'] },
  { name: 'Ayşegül Ekmekçi', photo: '2026/09/aysegul-ekmekci-gayrimenkul-danismani-acc-homes-780x780.webp', langs: [] },
  { name: 'Azize Bayındır', photo: '2026/09/azize-bayindir-gayrimenkul-danismani-acc-homes-780x780.webp', langs: [] },
  { name: 'Emre Çakmak', photo: '2026/09/emre-cakmak-gayrimenkul-danismani-acc-homes-780x780.webp', langs: ['en', 'tr'] },
  { name: 'Evren Çolpa', photo: '2026/09/evren-colpa-gayrimenkul-danismani-acc-homes-780x780.webp', langs: ['en', 'tr'] },
  { name: 'Fatoş Yazır', photo: '2026/09/fatma-yazir-gayrimenkul-danismani-acc-homes-780x780.webp', langs: [] },
  { name: 'Hazal Bacı', photo: '2026/09/hazal-baci-gayrimenkul-danismani-acc-homes-780x780.webp', langs: [] },
  { name: 'Hedla Defne Turan', photo: '2026/09/hedla-turan-gayrimenkul-danismani-acc-homes-780x780.webp', langs: ['en', 'ru', 'tr'] },
  { name: 'İbrahim Serteser', photo: '2026/09/idrahim-serteser-gayrimenkul-danismani-acc-homes-780x780.webp', langs: ['en', 'tr'] },
  { name: 'İdil Başkavak', photo: '2026/09/idil-baskavak-gayrimenkul-danismani-acc-homes-780x780.webp', langs: [] },
  { name: 'İlyas Canbazoğlu', photo: '2026/09/ilyas-canbazoglu-gayrimenkul-danismani-acc-homes-780x780.webp', langs: [] },
  { name: 'Leyli Rezaıy', photo: '2026/09/leyli-rezaiy-gayrimenkul-danismani-acc-homes-1-780x780.webp', langs: ['fa', 'tr'], sworn: true },
  { name: 'Mustafa Özbinici', photo: '2026/09/mustafa-ozbinici-gayrimenkul-danismani-acc-homes-780x780.webp', langs: ['en', 'tr', 'fr'] },
  { name: 'Nazlı Yemenici', photo: '2026/09/nazli-yemenici-gayrimenkul-danismani-acc-homes-780x780.webp', langs: [] },
  { name: 'Nimet Özçoban', photo: '2026/09/nimet-ozcoban-gayrimenkul-danismani-acc-homes-780x780.webp', langs: [] },
  { name: 'Nuran Morgül', photo: '2026/09/nuran-morgul-gayrimenkul-danismani-acc-homes-780x780.webp', langs: [] },
  { name: 'Nur Yıldız', photo: '2026/09/nur-yildiz-gayrimenkul-danismani-acc-homes-780x780.webp', langs: [] },
  { name: 'Orhan Çağlak', photo: '2026/09/orhan-caglak-gayrimenkul-danismani-acc-homes-780x780.webp', langs: [] },
  { name: 'Özkan Ölmez', photo: 'local/ozkan-olmez-gayrimenkul-danismani-acc-homes-780x780.webp', langs: ['en', 'tr'] },
  { name: 'Salih Gürkan', photo: '2026/09/salih-gurkan-gayrimenkul-danismani-acc-homes-780x780.webp', langs: ['en', 'tr'] },
  { name: 'Serdar Özgür Aktuna', photo: '2026/09/serdar-ozgur-aktuna-gayrimenkul-danismani-acc-homes-780x780.webp', langs: ['en', 'tr'] },
  { name: 'Sevil İkiler', photo: '2026/09/sevil-ikiler-gayrimenkul-danismani-acc-homes-780x780.webp', langs: [] },
  { name: 'Timuçin Önal', photo: '2026/09/timucin-onal-gayrimenkul-danismani-acc-homes-780x780.webp', langs: [] },
  { name: 'Ümmiye Durmaz', photo: '2026/09/ummiye-durmaz-gayrimenkul-danismani-acc-homes-780x780.webp', langs: ['en', 'de', 'tr'] },
  { name: 'Zeynep Salay', photo: 'local/zeynep-salay-gayrimenkul-danismani-acc-homes-780x780.webp', langs: [] },
  { name: 'Burak Özel', photo: null, langs: [] },
  { name: 'Cüneyt Tartıcı', photo: '2026/09/cuneyt-tartici-gayrimenkul-danismani-acc-homes-780x780.webp', langs: ['tr', 'en'] },
  { name: 'Esra Zerdali', photo: '2026/09/esra-zerdali-gayrimenkul-danismani-acc-homes-780x780.webp', langs: [] },
  { name: 'Evren Oral', photo: null, langs: [] },
  { name: 'Gonca Altıntaş', photo: 'local/gonca-altintas-gayrimenkul-danismani-acc-homes-780x780.webp', langs: [] },
  { name: 'Hülya Kızışar', photo: 'local/hulya-kizisar-gayrimenkul-danismani-acc-homes-780x780.webp', langs: [] },
  { name: 'Koray Solmaz', photo: 'local/koray-solmaz-gayrimenkul-danismani-acc-homes-780x780.webp', langs: [] },
  { name: 'Mohammad Homayon Eivazi', photo: '2026/09/mohammad-eivazi-gayrimenkul-danismani-acc-homes-780x780.webp', langs: ['fa', 'tr'] },
  { name: 'Priskilla İğne', photo: 'local/priskilla-igne-gayrimenkul-danismani-acc-homes-780x780.webp', langs: [] },
  { name: 'Safiye Tezcan', photo: '2026/09/safiye-tezcan-gayrimenkul-danismani-acc-homes-780x780.webp', langs: [] },
];
PARTNERS.sort((a, b) => a.name.localeCompare(b.name, 'tr'));

export const LANG_NAMES = {
  tr: { tr: 'Türkçe', en: 'İngilizce', ru: 'Rusça', de: 'Almanca', fr: 'Fransızca', es: 'İspanyolca', nl: 'Felemenkçe', fa: 'Farsça' },
  en: { tr: 'Turkish', en: 'English', ru: 'Russian', de: 'German', fr: 'French', es: 'Spanish', nl: 'Dutch', fa: 'Persian' },
  ru: { tr: 'Турецкий', en: 'Английский', ru: 'Русский', de: 'Немецкий', fr: 'Французский', es: 'Испанский', nl: 'Нидерландский', fa: 'Персидский' },
  de: { tr: 'Türkisch', en: 'Englisch', ru: 'Russisch', de: 'Deutsch', fr: 'Französisch', es: 'Spanisch', nl: 'Niederländisch', fa: 'Persisch' },
  fa: { tr: 'ترکی', en: 'انگلیسی', ru: 'روسی', de: 'آلمانی', fr: 'فرانسوی', es: 'اسپانیایی', nl: 'هلندی', fa: 'فارسی' },
};

export const PARTNER_ROLE = {
  tr: 'Gayrimenkul Danışmanı', en: 'Real Estate Consultant', ru: 'Консультант по недвижимости', de: 'Immobilienberater/in', fa: 'مشاور املاک',
};
export const SWORN_ROLE = {
  tr: 'Gayrimenkul Danışmanı ve Yeminli Tercüman', en: 'Real Estate Consultant & Sworn Translator', ru: 'Консультант и присяжный переводчик', de: 'Immobilienberaterin & vereidigte Übersetzerin', fa: 'مشاور املاک و مترجم رسمی',
};
