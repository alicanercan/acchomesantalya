// Sahibinden.com ile uyumlu ilan sınıflandırması ve filtreleri.
// Emlak tipi > Kategori (Satılık/Kiralık/Devren) > Alt tip. Etiketler TR + EN; diğer diller EN kullanır.

export const EMLAK_TIPLERI = [
  { k: 'konut', tr: 'Konut', en: 'Residential', enSlug: 'residential', icon: '🏠', kategoriler: ['satilik', 'kiralik'],
    alt: ['Daire', 'Dubleks', 'Rezidans', 'Müstakil Ev', 'Villa', 'Çiftlik Evi', 'Köşk & Konak', 'Yalı', 'Yalı Dairesi', 'Yazlık', 'Kooperatif'] },
  { k: 'is-yeri', tr: 'İş Yeri', en: 'Commercial', enSlug: 'commercial', icon: '🏢', kategoriler: ['satilik', 'kiralik', 'devren'],
    alt: ['Dükkan & Mağaza', 'Ofis', 'Büro', 'Plaza Katı', 'Depo & Antrepo', 'Atölye', 'İmalathane', 'Fabrika & Üretim Tesisi', 'Kafe & Bar', 'Restoran & Lokanta', 'Sağlık Merkezi', 'Eğitim Kurumu', 'Spor Tesisi', 'Akaryakıt İstasyonu', 'Otopark & Garaj', 'Komple Bina'] },
  { k: 'arsa', tr: 'Arsa', en: 'Land', enSlug: 'land', icon: '🌳', kategoriler: ['satilik', 'kiralik'],
    alt: ['Konut İmarlı', 'Ticari İmarlı', 'Ticari + Konut İmarlı', 'Turizm İmarlı', 'Sanayi İmarlı', 'Villa İmarlı', 'Tarla', 'Bağ & Bahçe', 'Zeytinlik', 'Kat Karşılığı'] },
  { k: 'konut-projeleri', tr: 'Konut Projeleri', en: 'New Projects', enSlug: 'new-projects', icon: '🏗️', kategoriler: ['satilik'],
    alt: ['Daire', 'Dubleks', 'Rezidans', 'Villa', 'Müstakil Ev'] },
  { k: 'bina', tr: 'Bina', en: 'Whole Building', enSlug: 'building', icon: '🏬', kategoriler: ['satilik', 'kiralik'], alt: [] },
  { k: 'turistik-tesis', tr: 'Turistik Tesis', en: 'Hospitality', enSlug: 'hospitality', icon: '🏨', kategoriler: ['satilik', 'kiralik', 'devren'],
    alt: ['Otel', 'Butik Otel', 'Apart Otel', 'Pansiyon', 'Tatil Köyü', 'Kamp Yeri'] },
  { k: 'devre-mulk', tr: 'Devre Mülk', en: 'Timeshare', enSlug: 'timeshare', icon: '🗓️', kategoriler: ['satilik', 'kiralik'], alt: [] },
];

export const KATEGORILER = {
  satilik: { tr: 'Satılık', en: 'For Sale', enSlug: 'for-sale', tip: 'Satılık' },
  kiralik: { tr: 'Kiralık', en: 'For Rent', enSlug: 'for-rent', tip: 'Kiralık' },
  devren: { tr: 'Devren', en: 'Business Transfer', enSlug: 'business-transfer', tip: 'Devren' },
};

// Alt tip İngilizce karşılıkları (ilan verisindeki TR değer → EN)
export const ALT_EN = {
  'Daire': 'Apartment', 'Dubleks': 'Duplex', 'Rezidans': 'Residence', 'Müstakil Ev': 'Detached House', 'Villa': 'Villa', 'Çiftlik Evi': 'Farmhouse', 'Köşk & Konak': 'Mansion', 'Yalı': 'Waterfront Mansion', 'Yalı Dairesi': 'Waterfront Apartment', 'Yazlık': 'Holiday Home', 'Kooperatif': 'Cooperative',
  'Dükkan & Mağaza': 'Shop & Store', 'Ofis': 'Office', 'Büro': 'Bureau', 'Plaza Katı': 'Office Floor', 'Depo & Antrepo': 'Warehouse', 'Atölye': 'Workshop', 'İmalathane': 'Small Factory', 'Fabrika & Üretim Tesisi': 'Factory', 'Kafe & Bar': 'Café & Bar', 'Restoran & Lokanta': 'Restaurant', 'Sağlık Merkezi': 'Health Centre', 'Eğitim Kurumu': 'Education Facility', 'Spor Tesisi': 'Sports Facility', 'Akaryakıt İstasyonu': 'Petrol Station', 'Otopark & Garaj': 'Car Park & Garage', 'Komple Bina': 'Whole Building',
  'Konut İmarlı': 'Residential Zoning', 'Ticari İmarlı': 'Commercial Zoning', 'Ticari + Konut İmarlı': 'Mixed-Use Zoning', 'Turizm İmarlı': 'Tourism Zoning', 'Sanayi İmarlı': 'Industrial Zoning', 'Villa İmarlı': 'Villa Zoning', 'Tarla': 'Field', 'Bağ & Bahçe': 'Orchard', 'Zeytinlik': 'Olive Grove', 'Kat Karşılığı': 'Land for Flats',
  'Otel': 'Hotel', 'Butik Otel': 'Boutique Hotel', 'Apart Otel': 'Apart Hotel', 'Pansiyon': 'Guesthouse', 'Tatil Köyü': 'Holiday Village', 'Kamp Yeri': 'Campsite',
};

// Eski/kısa tür adlarından emlak tipine eşleme (Portföy Havuzu'nda emlakTipi boşsa)
export const TUR_TO_TIP = {
  'Daire': 'konut', 'Rezidans': 'konut', 'Müstakil Ev': 'konut', 'Villa': 'konut', 'Dubleks': 'konut', 'Tripleks': 'konut', 'Çiftlik Evi': 'konut', 'Köşk & Konak': 'konut', 'Yalı': 'konut', 'Yalı Dairesi': 'konut', 'Yazlık': 'konut', 'Kooperatif': 'konut', 'Bahçe Katı': 'konut', 'Çatı Dubleksi': 'konut',
  'Ticari': 'is-yeri', 'Dükkan': 'is-yeri', 'Dükkan & Mağaza': 'is-yeri', 'Ofis': 'is-yeri', 'Büro': 'is-yeri', 'Plaza Katı': 'is-yeri', 'Depo & Antrepo': 'is-yeri', 'Depo': 'is-yeri', 'Atölye': 'is-yeri', 'İmalathane': 'is-yeri', 'Fabrika & Üretim Tesisi': 'is-yeri', 'Kafe & Bar': 'is-yeri', 'Restoran & Lokanta': 'is-yeri', 'Sağlık Merkezi': 'is-yeri', 'Eğitim Kurumu': 'is-yeri', 'Spor Tesisi': 'is-yeri', 'Akaryakıt İstasyonu': 'is-yeri', 'Otopark & Garaj': 'is-yeri',
  'Arsa': 'arsa', 'Tarla': 'arsa', 'Bağ & Bahçe': 'arsa', 'Zeytinlik': 'arsa',
  'Bina': 'bina', 'Komple Bina': 'bina', 'Otel': 'turistik-tesis', 'Butik Otel': 'turistik-tesis', 'Apart Otel': 'turistik-tesis', 'Pansiyon': 'turistik-tesis', 'Tatil Köyü': 'turistik-tesis', 'Kamp Yeri': 'turistik-tesis', 'Devre Mülk': 'devre-mulk',
};

// Antalya ilçeleri (merkez ilçeler önce)
export const ILCELER = ['Muratpaşa', 'Konyaaltı', 'Kepez', 'Aksu', 'Döşemealtı', 'Serik', 'Kemer', 'Alanya', 'Manavgat', 'Kaş', 'Kumluca', 'Finike', 'Demre', 'Gazipaşa', 'Elmalı', 'Korkuteli', 'Akseki', 'Gündoğmuş', 'İbradı'];

export const ODALAR = ['Stüdyo (1+0)', '1+1', '1.5+1', '2+0', '2+1', '2.5+1', '2+2', '3+1', '3.5+1', '3+2', '4+1', '4.5+1', '4+2', '5+1', '5+2', '6+1', '6+2', '7+1 ve üzeri'];
export const BINA_YASI = [['0', { tr: '0 (Yeni)', en: '0 (New)' }, 0, 0], ['1-5', { tr: '1–5', en: '1–5' }, 1, 5], ['6-10', { tr: '6–10', en: '6–10' }, 6, 10], ['11-15', { tr: '11–15', en: '11–15' }, 11, 15], ['16-20', { tr: '16–20', en: '16–20' }, 16, 20], ['21-30', { tr: '21–30', en: '21–30' }, 21, 30], ['31+', { tr: '31 ve üzeri', en: '31+' }, 31, 999]];

// Seçmeli (çoklu) filtreler: alan adı, etiket, seçenekler [TR değer, EN etiket], hangi emlak tiplerinde
export const SECMELI = [
  { f: 'kat', tr: 'Bulunduğu kat', en: 'Floor', tipler: ['konut', 'konut-projeleri', 'is-yeri'], ops: [['Bodrum Kat', 'Basement'], ['Bahçe Katı', 'Garden floor'], ['Giriş Katı', 'Ground floor'], ['Yüksek Giriş', 'Raised ground'], ['Ara Kat', 'Middle floor'], ['En Üst Kat', 'Top floor'], ['Çatı Katı', 'Penthouse / roof'], ['Villa Tipi', 'Villa type']] },
  { f: 'isitma', tr: 'Isıtma', en: 'Heating', tipler: ['konut', 'konut-projeleri', 'is-yeri', 'bina'], ops: [['Kombi (Doğalgaz)', 'Combi boiler (gas)'], ['Klima', 'Air conditioning'], ['Yerden Isıtma', 'Underfloor heating'], ['Merkezi', 'Central'], ['Merkezi (Pay Ölçer)', 'Central (metered)'], ['Isı Pompası', 'Heat pump'], ['VRV', 'VRV'], ['Güneş Enerjisi', 'Solar'], ['Soba', 'Stove'], ['Yok', 'None']] },
  { f: 'banyo', tr: 'Banyo sayısı', en: 'Bathrooms', tipler: ['konut', 'konut-projeleri'], ops: [['1', '1'], ['2', '2'], ['3', '3'], ['4+', '4+']] },
  { f: 'esya', tr: 'Eşya durumu', en: 'Furnishing', tipler: ['konut', 'konut-projeleri'], ops: [['Eşyalı', 'Furnished'], ['Eşyasız', 'Unfurnished']] },
  { f: 'kullanim', tr: 'Kullanım durumu', en: 'Occupancy', tipler: ['konut', 'is-yeri', 'bina'], ops: [['Boş', 'Vacant'], ['Kiracılı', 'Tenanted'], ['Mülk Sahibi', 'Owner-occupied']] },
  { f: 'site', tr: 'Site içerisinde', en: 'In a complex', tipler: ['konut', 'konut-projeleri'], ops: [['Evet', 'Yes'], ['Hayır', 'No']] },
  { f: 'asansor', tr: 'Asansör', en: 'Lift', tipler: ['konut', 'konut-projeleri', 'is-yeri'], ops: [['Var', 'Yes'], ['Yok', 'No']] },
  { f: 'otopark', tr: 'Otopark', en: 'Parking', tipler: ['konut', 'konut-projeleri', 'is-yeri'], ops: [['Kapalı Otopark', 'Indoor'], ['Açık Otopark', 'Outdoor'], ['Açık & Kapalı Otopark', 'Indoor & outdoor'], ['Yok', 'None']] },
  { f: 'balkon', tr: 'Balkon', en: 'Balcony', tipler: ['konut', 'konut-projeleri'], ops: [['Var', 'Yes'], ['Yok', 'No']] },
  { f: 'kredi', tr: 'Krediye uygun', en: 'Mortgage eligible', tipler: ['konut', 'konut-projeleri', 'is-yeri', 'arsa', 'bina'], ops: [['Evet', 'Yes'], ['Hayır', 'No']] },
  { f: 'tapu', tr: 'Tapu durumu', en: 'Title deed', tipler: ['konut', 'konut-projeleri', 'is-yeri', 'arsa', 'bina', 'turistik-tesis'], ops: [['Kat Mülkiyetli', 'Condominium'], ['Kat İrtifaklı', 'Kat irtifakı (construction servitude)'], ['Hisseli Tapu', 'Shared title'], ['Müstakil Tapulu', 'Detached title'], ['Arsa Tapulu', 'Land title'], ['Kooperatif Hisseli Tapu', 'Cooperative share']] },
  { f: 'takas', tr: 'Takas', en: 'Swap', tipler: ['konut', 'is-yeri', 'arsa', 'bina'], ops: [['Evet', 'Yes'], ['Hayır', 'No']] },
  { f: 'imar', tr: 'İmar durumu', en: 'Zoning', tipler: ['arsa'], ops: [['Konut', 'Residential'], ['Ticari', 'Commercial'], ['Ticari + Konut', 'Mixed use'], ['Turizm', 'Tourism'], ['Sanayi', 'Industrial'], ['Tarla', 'Field'], ['Villa', 'Villa'], ['Muhtelif', 'Other']] },
];

// Arama sayfası metinleri
export const TX = {
  tr: { search: 'İlan ara', searchPh: 'İlan no, mahalle veya proje', tip: 'Emlak tipi', kat: 'Kategori', alt: 'Alt tip', ilce: 'İlçe', mahalle: 'Mahalle', price: 'Fiyat', m2b: 'm² (Brüt)', m2n: 'm² (Net)', rooms: 'Oda sayısı', age: 'Bina yaşı', min: 'Min', max: 'Max', any: 'Tümü', apply: 'Sonuçları göster', clear: 'Temizle', filters: 'Filtrele', more: 'Diğer özellikler', tags: 'Öne çıkanlar', results: (n) => `${n} ilan`, all: 'Tüm İlanlar', sort: 'Sıralama', newest: 'En yeni', priceAsc: 'Fiyat (artan)', priceDesc: 'Fiyat (azalan)', m2Asc: 'm² (artan)', none: 'Aradığınız kriterlerde ilan bulunamadı. Talebinizi bize iletin, portföyümüzden ve iş ortaklarımızdan size uygun seçenekleri bulalım.', cats: 'Kategoriler', inArea: (a) => `${a} İlanları`, listedIn: 'İlan tarihi', emlakTipi: 'Emlak tipi' },
  en: { search: 'Search listings', searchPh: 'Listing no, neighbourhood or project', tip: 'Property type', kat: 'Category', alt: 'Sub-type', ilce: 'District', mahalle: 'Neighbourhood', price: 'Price', m2b: 'm² (Gross)', m2n: 'm² (Net)', rooms: 'Rooms', age: 'Building age', min: 'Min', max: 'Max', any: 'Any', apply: 'Show results', clear: 'Clear', filters: 'Filters', more: 'More features', tags: 'Highlights', results: (n) => `${n} listings`, all: 'All Listings', sort: 'Sort', newest: 'Newest', priceAsc: 'Price (low to high)', priceDesc: 'Price (high to low)', m2Asc: 'm² (small to large)', none: 'No listings match these criteria. Send us your request and we will find suitable options from our portfolio and partners.', cats: 'Categories', inArea: (a) => `${a} Listings`, listedIn: 'Listed on', emlakTipi: 'Property type' },
};
