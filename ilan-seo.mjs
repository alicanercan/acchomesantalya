// İlan SEO katmanı (18.11.2026)
// Panelden (Sahibinden aktarımı ya da iş ortağının kendi girişi) gelen her ilan, sitenin kendi ilanlarıyla aynı standarda getirilir:
//  1) data/ilan-seo.json'da elle yazılmış (özgün) TR/EN/RU başlık, meta, açıklama ve "neden bu ev" maddeleri varsa onlar kullanılır.
//  2) Yoksa ilanın kendi alanlarından TR/EN/RU başlık, meta açıklama, özet metin ve öne çıkanlar otomatik kurulur;
//     TR'de panel metni telefon/e-posta/link ayıklanıp büyük harf satırları düzeltilerek özetin altında "İlan notları" olarak kalır.
//  3) Site/proje adı adrese (slug) eklenir; değişen adresler için eski adresten 301 yönlendirme üretilir.
// Fiyat, m² gibi bilgiler yalnızca ilanın kendi alanlarından gelir; uydurma yok.
import fs from 'node:fs';

const CUR = JSON.parse(fs.readFileSync(new URL('./data/ilan-seo.json', import.meta.url), 'utf8'));

const trLower = (s) => s.toLocaleLowerCase('tr-TR');
const trUpper1 = (s) => s.charAt(0).toLocaleUpperCase('tr-TR') + s.slice(1);
const nf = (n) => Number(n).toLocaleString('tr-TR');
const nfe = (n) => Number(n).toLocaleString('en-US');
const nfr = (n) => Number(n).toLocaleString('ru-RU');

// Türkçe bulunma eki: Altıntaş’ta, Fener’de, Lara’da, Kepez’de
export function loc(w) {
  const s = String(w || '').trim(); if (!s) return s;
  const low = trLower(s); const v = [...low].reverse().find((c) => 'aeıioöuü'.includes(c)) || 'a';
  const back = 'aıou'.includes(v); const hard = 'fstkçşhp'.includes(low.slice(-1));
  return `${s}’${hard ? 't' : 'd'}${back ? 'a' : 'e'}`;
}
// Site/proje adı için bulunma eki: "Olive Garden Konutları’nda", "Güneş Sitesi’nde", "Falez Manzara’da"
export function locAd(w) {
  const s = String(w || '').trim(); if (!s) return s;
  const son = trLower(s.split(/\s+/).pop());
  if (!/(si|sı|su|sü|ları|leri)$/.test(son)) return loc(s);
  const v = [...son].reverse().find((c) => 'aeıioöuü'.includes(c)) || 'a';
  return `${s}’nd${'aıou'.includes(v) ? 'a' : 'e'}`;
}

const ALT = {
  'Daire': ['daire', 'Apartment', 'квартира'], 'Villa': ['villa', 'Villa', 'вилла'], 'Müstakil Ev': ['müstakil ev', 'Detached House', 'частный дом'],
  'Dükkan & Mağaza': ['dükkan', 'Shop', 'магазин'], 'Konut İmarlı': ['konut imarlı arsa', 'Residential Plot', 'участок под жилую застройку'],
  'Tarla': ['tarla', 'Agricultural Land', 'сельхозучасток'], 'İş Yeri': ['iş yeri', 'Commercial Unit', 'коммерческое помещение'],
  'Komple Bina': ['komple bina', 'Entire Building', 'здание целиком'], 'Çiftlik Evi': ['çiftlik evi', 'Farmhouse', 'фермерский дом'],
  'Ticari İmarlı': ['ticari imarlı arsa', 'Commercial Plot', 'участок под коммерческую застройку'], 'Spor Tesisi': ['spor tesisi', 'Sports Facility', 'спортивный объект'],
  'Residence': ['residence daire', 'Residence Apartment', 'апартаменты в резиденции'], 'Yazlık': ['yazlık', 'Holiday Home', 'летний дом'],
  'Bina': ['bina', 'Building', 'здание'], 'Ofis': ['ofis', 'Office', 'офис'], 'Depo': ['depo', 'Warehouse', 'склад'], 'Depo & Antrepo': ['depo', 'Warehouse', 'склад'], 'Arsa': ['arsa', 'Plot', 'участок'],
};
const altOf = (l) => ALT[l.altTip] || ALT[l.tur] || (l.emlakTipi === 'arsa' ? ALT.Arsa : l.emlakTipi === 'is-yeri' ? ALT['İş Yeri'] : ['gayrimenkul', 'Property', 'объект']);
const TIP = { 'Satılık': ['satılık', 'for Sale', 'Продажа'], 'Kiralık': ['kiralık', 'for Rent', 'Аренда'], 'Devren': ['devren kiralık', 'for Transfer', 'Передача бизнеса'] };
const tipOf = (l) => TIP[l.tip] || TIP['Satılık'];

const V = {
  isitma: { 'Klima': ['klima', 'air conditioning', 'кондиционеры'], 'Kombi (Doğalgaz)': ['doğalgaz kombi', 'gas combi boiler', 'газовый котёл'], 'Doğalgaz (Kombi)': ['doğalgaz kombi', 'gas combi boiler', 'газовый котёл'], 'Yerden Isıtma': ['yerden ısıtma', 'underfloor heating', 'тёплые полы'], 'Merkezi': ['merkezi ısıtma', 'central heating', 'центральное отопление'], 'Isı Pompası': ['ısı pompası', 'heat pump', 'тепловой насос'], 'Şömine': ['şömine', 'fireplace', 'камин'], 'Soba': ['soba', 'stove heating', 'печное отопление'], 'Güneş Enerjisi': ['güneş enerjisi', 'solar energy', 'солнечная энергия'], 'VRV': ['VRV klima', 'VRV air conditioning', 'система VRV'] },
  otopark: { 'Açık Otopark': ['açık otopark', 'open parking', 'открытая парковка'], 'Kapalı Otopark': ['kapalı otopark', 'covered parking', 'крытый паркинг'], 'Açık & Kapalı Otopark': ['açık ve kapalı otopark', 'open and covered parking', 'открытая и крытая парковка'] },
  esya: { 'Eşyalı': ['eşyalı', 'furnished', 'с мебелью'], 'Eşyasız': ['eşyasız', 'unfurnished', 'без мебели'] },
  kullanim: { 'Boş': ['boş', 'vacant', 'свободна'], 'Mülk Sahibi': ['mülk sahibi oturuyor', 'owner-occupied', 'проживает собственник'], 'Kiracılı': ['kiracılı', 'tenanted', 'сдана в аренду'] },
  tapu: { 'Kat İrtifaklı': ['kat irtifaklı', 'construction-servitude title (kat irtifakı)', 'тапу с кат иртифакы'], 'Kat Mülkiyetli': ['kat mülkiyetli', 'full condominium title (kat mülkiyeti)', 'полный тапу (кат мюлькийети)'], 'Müstakil Tapulu': ['müstakil tapulu', 'independent title deed', 'отдельный тапу'], 'Hisseli Tapu': ['hisseli tapulu', 'shared title deed', 'долевой тапу'], 'Arsa Tapulu': ['arsa tapulu', 'land title deed', 'тапу на землю'] },
};
const v3 = (f, x, i) => (V[f][x] || [])[i];

// Sık görülen Sahibinden özellik adlarının EN/RU karşılıkları (karşılığı olmayan özellik EN/RU sayfada gösterilmez)
const F = {
  'Çelik Kapı': ['Steel door', 'Стальная дверь'], 'Duşakabin': ['Shower cabin', 'Душевая кабина'], 'Market': ['Supermarket nearby', 'Рядом супермаркет'], 'İlkokul-Ortaokul': ['Schools nearby', 'Рядом школы'], 'Eczane': ['Pharmacy nearby', 'Рядом аптека'], 'Otobüs Durağı': ['Bus stop nearby', 'Рядом автобусная остановка'], 'Park': ['Park nearby', 'Рядом парк'], 'Sağlık Ocağı': ['Health centre nearby', 'Рядом поликлиника'], 'Cadde': ['On a main street', 'На центральной улице'], 'Semt Pazarı': ['Local market nearby', 'Рядом рынок'], 'Cami': ['Mosque nearby', 'Рядом мечеть'], 'Şehir Merkezi': ['Close to the city centre', 'Близко к центру города'], 'Hastane': ['Hospital nearby', 'Рядом больница'], 'Alışveriş Merkezi': ['Shopping mall nearby', 'Рядом торговый центр'], 'Laminat Zemin': ['Laminate flooring', 'Ламинат'], 'Anayol': ['Close to main road', 'Рядом главная дорога'], 'Amerikan Kapı': ['Interior doors', 'Межкомнатные двери'], 'Isıcam': ['Double glazing', 'Стеклопакеты'], 'Lise': ['High school nearby', 'Рядом лицей'], 'Ankastre Fırın': ['Built-in oven', 'Встроенная духовка'], 'PVC Doğrama': ['PVC window frames', 'ПВХ окна'], 'Uydu': ['Satellite TV', 'Спутниковое ТВ'], 'Kablo TV': ['Cable TV', 'Кабельное ТВ'], 'Seramik Zemin': ['Ceramic flooring', 'Керамическая плитка'], 'ADSL': ['Internet connection', 'Интернет'], 'Vestiyer': ['Entrance wardrobe', 'Гардероб в прихожей'], 'Klima': ['Air conditioning', 'Кондиционер'], 'Spot Aydınlatma': ['Spot lighting', 'Точечное освещение'], 'Spor Salonu': ['Gym', 'Спортзал'], 'Mutfak (Ankastre)': ['Built-in kitchen', 'Встроенная кухня'], 'Yüzme Havuzu (Açık)': ['Outdoor swimming pool', 'Открытый бассейн'], 'Görüntülü Diyafon': ['Video intercom', 'Видеодомофон'], 'Havaalanı': ['Airport access', 'Удобный доступ к аэропорту'], 'Kamera Sistemi': ['CCTV', 'Видеонаблюдение'], 'Polis Merkezi': ['Police station nearby', 'Рядом полиция'], 'Panjur/Jaluzi': ['Shutters', 'Жалюзи'], 'Park & Yeşil Alan': ['Green areas', 'Зелёная зона'], 'Isı Yalıtımı': ['Thermal insulation', 'Теплоизоляция'], 'Parke Zemin': ['Parquet flooring', 'Паркет'], 'Fiber İnternet': ['Fibre internet', 'Оптоволоконный интернет'], 'Set Üstü Ocak': ['Hob', 'Варочная панель'], 'Apartman Görevlisi': ['Building caretaker', 'Консьерж'], 'Hilton Banyo': ['Modern bathroom', 'Современная ванная'], 'Üniversite': ['University nearby', 'Рядом университет'], 'Ahşap Doğrama': ['Wooden window frames', 'Деревянные окна'], 'Ses Yalıtımı': ['Sound insulation', 'Звукоизоляция'], 'Intercom Sistemi': ['Intercom', 'Домофон'], 'Plaj': ['Beach nearby', 'Рядом пляж'], 'Jeneratör': ['Generator', 'Генератор'], 'Çocuk Oyun Parkı': ['Children’s playground', 'Детская площадка'], 'Hidrofor': ['Water pressure system', 'Гидрофор'], 'Havuz': ['Swimming pool', 'Бассейн'], 'Alüminyum Doğrama': ['Aluminium window frames', 'Алюминиевые окна'], 'Buzdolabı': ['Fridge', 'Холодильник'], 'Mobilya': ['Furniture', 'Мебель'], '24 Saat Güvenlik': ['24-hour security', 'Круглосуточная охрана'], 'Tramvay': ['Tram nearby', 'Рядом трамвай'], 'Ebeveyn Banyosu': ['En-suite bathroom', 'Ванная при спальне'], 'Sahil': ['Close to the coast', 'Близко к побережью'], 'Bulaşık Makinesi': ['Dishwasher', 'Посудомоечная машина'], 'Beyaz Eşya': ['White goods', 'Бытовая техника'], 'Çamaşır Makinesi': ['Washing machine', 'Стиральная машина'], 'Kapalı / Cam Balkon': ['Glazed balcony', 'Остеклённый балкон'], 'Mutfak Doğalgazı': ['Gas in the kitchen', 'Газ на кухне'], 'Kiler': ['Pantry', 'Кладовая'], 'Yangın Merdiveni': ['Fire escape', 'Пожарная лестница'], 'Gömme Dolap': ['Built-in wardrobes', 'Встроенные шкафы'], 'Spor Alanı': ['Sports area', 'Спортивная площадка'], 'Teras': ['Terrace', 'Терраса'], 'Dubleks': ['Duplex', 'Дуплекс'], 'Sauna': ['Sauna', 'Сауна'], 'Akıllı Ev': ['Smart home', 'Умный дом'], 'Alarm (Yangın)': ['Fire alarm', 'Пожарная сигнализация'], 'Giyinme Odası': ['Walk-in wardrobe', 'Гардеробная'], 'En Üst Kat': ['Top floor', 'Верхний этаж'], 'Çatı Dubleksi': ['Roof duplex', 'Пентхаус-дуплекс'], 'Asansör': ['Lift', 'Лифт'], 'Araç Park Yeri': ['Parking space', 'Парковочное место'], 'Çamaşır Odası': ['Laundry room', 'Прачечная'], 'Su Deposu': ['Water tank', 'Резервуар для воды'], 'Engelliye Uygun Asansör': ['Accessible lift', 'Лифт для людей с ОВЗ'], 'Hamam': ['Turkish bath', 'Хаммам'], 'Şömine': ['Fireplace', 'Камин'], 'Yüzme Havuzu (Kapalı)': ['Indoor swimming pool', 'Крытый бассейн'], 'Buhar Odası': ['Steam room', 'Паровая комната'], 'Araç Şarj İstasyonu': ['EV charging point', 'Зарядка для электромобилей'], 'Alarm (Hırsız)': ['Burglar alarm', 'Охранная сигнализация'], 'Güvenlik Kamerası': ['Security cameras', 'Камеры видеонаблюдения'], 'Intercom': ['Intercom', 'Домофон'], 'Deniz': ['Sea view', 'Вид на море'], 'Doğa': ['Nature view', 'Вид на природу'], 'Şehir': ['City view', 'Вид на город'], 'Dağ': ['Mountain view', 'Вид на горы'], 'Güney': ['South-facing', 'Южная сторона'], 'Kuzey': ['North-facing', 'Северная сторона'], 'Doğu': ['East-facing', 'Восточная сторона'], 'Batı': ['West-facing', 'Западная сторона'], 'Termosifon': ['Electric water heater', 'Бойлер'], 'Şofben': ['Gas water heater', 'Газовая колонка'], 'WC': ['Guest WC', 'Гостевой санузел'], 'Kartonpiyer': ['Decorative cornices', 'Декоративный карниз'], 'Duvar Kağıdı': ['Wallpaper', 'Обои'], 'Fırın': ['Oven', 'Духовка'], 'Boyalı': ['Freshly painted', 'Свежий ремонт (покраска)'], 'Giriş / Rampa': ['Step-free entrance', 'Вход без ступеней'], 'Minibüs': ['Minibus line nearby', 'Рядом маршрутка'], 'Dolmuş': ['Dolmuş line nearby', 'Рядом маршрутное такси'], 'Mutfak (Laminat)': ['Fitted kitchen', 'Кухонный гарнитур'],
};

const PHONE = /(\+?90[\s.-]?)?\(?0?\s?5\d{2}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}/g;
const EMAIL = /[\w.+-]+@[\w-]+\.[\w.]+/g;
const LINK = /(https?:\/\/|www\.)\S+/gi;
// Panel (Sahibinden) metnini sitede yayına uygun hale getirir
export function temizle(t) {
  if (!t) return '';
  return String(t).replace(/\r/g, '').replace(PHONE, '').replace(EMAIL, '').replace(LINK, '')
    .split('\n').map((s) => s.trim()).map((s) => {
      const letters = s.replace(/[^A-Za-zÇĞİÖŞÜçğıöşü]/g, ''); const up = letters.replace(/[^A-ZÇĞİÖŞÜ]/g, '').length;
      return letters.length > 10 && up / letters.length > 0.7 ? yerAdlari(trUpper1(trLower(s))) : s;
    }).filter((s) => !/^(tel|telefon|gsm|whatsapp|iletişim|irtibat)\s*[:：]?\s*$/i.test(s))
    .join('\n').replace(/\n{2,}/g, '\n').trim();
}

// Büyük harf satırları küçültülünce yer ve site adlarının baş harfi geri büyütülür
const YER = ['Antalya', 'Muratpaşa', 'Konyaaltı', 'Kepez', 'Aksu', 'Döşemealtı', 'Serik', 'Alanya', 'Manavgat', 'Kemer', 'Kaş', 'Belek', 'Lara', 'Kundu', 'Altıntaş', 'Fener', 'Şirinyalı', 'Güzeloba', 'Yeşilbahçe', 'Bahçelievler', 'Çağlayan', 'Hurma', 'Liman', 'Sarısu', 'Uncalı', 'Gürsu', 'Arapsuyu', 'Altınkum', 'Varsak', 'Altınova', 'Ermenek', 'Meltem', 'Konuksever', 'Kızıltoprak', 'Kışla', 'Elmalı', 'Haşimişcan', 'Topçular', 'Gebiz', 'Yeşilbayır', 'Altınkale', 'Kaleiçi', 'Akdeniz', 'Toros', 'Düden', 'Perge', 'Aspendos', 'Expo'];
const YER_RE = new RegExp(`(^|[^\\p{L}])(${YER.map((y) => y.toLocaleLowerCase('tr-TR')).join('|')})(?=[^\\p{L}]|’|'|$)`, 'gu');
const yerAdlari = (s) => s.replace(YER_RE, (m, a, w) => a + trUpper1(w));
const kisa = (s, n) => (s.length <= n ? s : s.slice(0, n - 1).replace(/[\s,;:–-]+\S*$/, '') + '…');
const fiyatTR = (l) => (l.fiyat ? `${nf(l.fiyat)} ${l.para === 'TL' || !l.para ? 'TL' : l.para}${l.tip === 'Kiralık' ? '/ay' : ''}` : 'fiyat için teklif alınabilir');
const fiyatEN = (l) => (l.fiyat ? `${l.para === 'TL' || !l.para ? 'TRY' : l.para} ${nfe(l.fiyat)}${l.tip === 'Kiralık' ? ' per month' : ''}` : 'price on request');
const fiyatRU = (l) => (l.fiyat ? `${nfr(l.fiyat)} ${l.para === 'TL' || !l.para ? 'TRY' : l.para}${l.tip === 'Kiralık' ? ' в месяц' : ''}` : 'цена по запросу');
const yer = (l) => [l.mahalle, l.ilce].filter(Boolean).join(', ');
const siteAdi = (l) => (l.proje && !/^\d/.test(l.proje) ? l.proje : '');
const konut = (l) => l.emlakTipi === 'konut' || ['Daire', 'Villa', 'Müstakil Ev', 'Residence', 'Yazlık', 'Çiftlik Evi'].includes(l.altTip);
const has = (l, k) => (Array.isArray(l.ozellikler) ? l.ozellikler : []).includes(k);

function basliklar(l) {
  const a = altOf(l); const t = tipOf(l); const sa = siteAdi(l); const m2 = l.brut || l.net || l.arsa;
  const odaTR = l.oda && konut(l) ? `${l.oda} ` : '';
  const yerTR = `${l.ilce} ${loc(l.mahalle || l.ilce)}`.replace(`${l.ilce} ${loc(l.ilce)}`, loc(l.ilce));
  let tr = l.baslik && l.baslik.tr ? String(l.baslik.tr).replace(/\s+/g, ' ').trim() : '';
  if (!tr || tr.length > 70 || tr === trUpper1(tr) && tr === tr.toLocaleUpperCase('tr-TR')) {
    tr = `${yerTR} ${sa ? `${locAd(sa)} ` : l.site === 'Evet' ? 'Site İçinde ' : ''}${trUpper1(t[0])} ${odaTR}${trUpper1(a[0])}${m2 ? `, ${nf(m2)} m²` : ''}`;
    if (tr.length > 70) tr = `${yerTR} ${trUpper1(t[0])} ${odaTR}${trUpper1(a[0])}${m2 ? `, ${nf(m2)} m²` : ''}`;
  }
  const odaEN = l.oda && konut(l) ? `${l.oda} ` : '';
  let en = `${odaEN}${a[1]} ${t[1]} in ${yer(l)}${sa ? `, ${sa}` : ''}${m2 ? ` – ${nfe(m2)} m²` : ''}`;
  if (en.length > 70) en = `${odaEN}${a[1]} ${t[1]} in ${yer(l)}${m2 ? ` – ${nfe(m2)} m²` : ''}`;
  let ru = `${t[2]}: ${a[2]}${l.oda && konut(l) ? ` ${l.oda}` : ''} в районе ${yer(l)}${sa ? `, ${sa}` : ''}${m2 ? ` — ${nfr(m2)} м²` : ''}`;
  if (ru.length > 75) ru = `${t[2]}: ${a[2]}${l.oda && konut(l) ? ` ${l.oda}` : ''} в районе ${yer(l)}${m2 ? ` — ${nfr(m2)} м²` : ''}`;
  return { tr, en, ru };
}

function ozet(l) {
  const a = altOf(l); const t = tipOf(l); const sa = siteAdi(l);
  const T = []; const E = []; const R = [];
  // 1. paragraf: ne, nerede, ne büyüklükte
  const kat = l.kat && l.katSayisi ? `${l.katSayisi} katlı binanın ${/^\d+$/.test(l.kat) ? l.kat + '. katında' : trLower(l.kat) + ' katında'}` : '';
  T.push(`${loc(l.mahalle || l.ilce)}${l.mahalle ? ` (${l.ilce})` : ''} ${t[0]} ${l.oda && konut(l) ? l.oda + ' ' : ''}${a[0]}${sa ? `, ${sa} içinde` : l.site === 'Evet' ? ', site içinde' : ''}. ${[l.brut ? `${nf(l.brut)} m² brüt` : '', l.net ? `${nf(l.net)} m² net` : '', l.arsa ? `${nf(l.arsa)} m² arsa` : ''].filter(Boolean).join(', ')}${kat ? `; ${kat}` : ''}${l.yas === 0 ? ', yeni bina' : l.yas ? `, ${l.yas} yaşında bina` : ''}.`.replace(/\.\s*\./g, '.').replace(' . ', ' '));
  E.push(`${l.oda && konut(l) ? l.oda + ' ' : ''}${a[1].toLowerCase()} ${t[1].toLowerCase()} in ${yer(l)}, Antalya${sa ? `, within ${sa}` : l.site === 'Evet' ? ', within a gated complex' : ''}. ${[l.brut ? `${nfe(l.brut)} m² gross` : '', l.net ? `${nfe(l.net)} m² net` : '', l.arsa ? `${nfe(l.arsa)} m² plot` : ''].filter(Boolean).join(', ')}${l.kat && l.katSayisi ? `; floor ${l.kat} of ${l.katSayisi}` : ''}${l.yas === 0 ? ', new building' : l.yas ? `, building age ${l.yas}` : ''}.`);
  E[0] = E[0].charAt(0).toUpperCase() + E[0].slice(1);
  R.push(`${trUpper1(a[2])}${l.oda && konut(l) ? ' ' + l.oda : ''} (${t[2].toLowerCase()}) в районе ${yer(l)}, Анталья${sa ? `, комплекс ${sa}` : l.site === 'Evet' ? ', закрытый комплекс' : ''}. ${[l.brut ? `${nfr(l.brut)} м² брутто` : '', l.net ? `${nfr(l.net)} м² нетто` : '', l.arsa ? `${nfr(l.arsa)} м² участок` : ''].filter(Boolean).join(', ')}${l.kat && l.katSayisi ? `; ${l.kat}-й этаж из ${l.katSayisi}` : ''}${l.yas === 0 ? ', новый дом' : l.yas ? `, возраст здания ${l.yas} лет` : ''}.`);
  // 2. paragraf: donanım
  const d = (i) => [l.isitma && l.isitma !== 'Yok' && v3('isitma', l.isitma, i), l.otopark && l.otopark !== 'Yok' && v3('otopark', l.otopark, i), l.asansor === 'Var' && ['asansör', 'lift', 'лифт'][i], l.balkon === 'Var' && ['balkon', 'balcony', 'балкон'][i], has(l, 'Havuz') || has(l, 'Yüzme Havuzu (Açık)') ? ['havuz', 'swimming pool', 'бассейн'][i] : '', has(l, '24 Saat Güvenlik') && ['24 saat güvenlik', '24-hour security', 'круглосуточная охрана'][i], l.esya && v3('esya', l.esya, i)].filter(Boolean);
  if (d(0).length) { T.push(`Öne çıkan donanım: ${d(0).join(', ')}.`); E.push(`Key features: ${d(1).join(', ')}.`); R.push(`Основные удобства: ${d(2).join(', ')}.`); }
  // 3. paragraf: fiyat, tapu, kullanım
  const tp = (i) => [l.tapu && v3('tapu', l.tapu, i), l.kullanim && v3('kullanim', l.kullanim, i), l.kredi === 'Evet' && ['krediye uygun', 'eligible for a mortgage', 'подходит под ипотеку'][i], l.aidat ? [`aidat ${nf(l.aidat)} TL`, `service charge TRY ${nfe(l.aidat)}`, `обслуживание ${nfr(l.aidat)} TRY`][i] : ''].filter(Boolean);
  T.push(`Fiyat: ${fiyatTR(l)}.${tp(0).length ? ` Diğer bilgiler: ${tp(0).join(', ')}.` : ''}`);
  E.push(`Price: ${fiyatEN(l)}.${tp(1).length ? ` Details: ${tp(1).join(', ')}.` : ''}`);
  R.push(`Цена: ${fiyatRU(l)}.${tp(2).length ? ` Детали: ${tp(2).join(', ')}.` : ''}`);
  // 4. paragraf: iletişim
  const ad = l.danisman && l.danisman.ad;
  T.push(`Yerinde ya da online gösterim için ${ad ? `ACC HOMES iş ortağımız ${ad} ile` : 'ACC HOMES ile'} iletişime geçebilirsiniz. İlan no: ${l.id}.`);
  E.push(`To arrange an in-person or online viewing, contact ${ad ? `our ACC HOMES partner ${ad}` : 'ACC HOMES'}. We speak English, Russian and more. Listing no: ${l.id}.`);
  R.push(`Чтобы договориться о просмотре на месте или онлайн, свяжитесь с ${ad ? `партнёром ACC HOMES ${ad}` : 'ACC HOMES'}. Мы говорим по-русски. Номер объявления: ${l.id}.`);
  return { T, E, R };
}

function nedenler(l) {
  const out = [];
  const add = (tr, en, ru) => out.push([tr, en, ru]);
  const sa = siteAdi(l);
  if (has(l, 'Deniz')) add('Deniz manzarası', 'Sea view', 'Вид на море');
  if (sa || l.site === 'Evet') add(sa ? `${sa} içinde` : 'Site içinde', sa ? `Within ${sa}` : 'Gated complex', sa ? `Комплекс ${sa}` : 'Закрытый комплекс');
  if (has(l, 'Havuz') || has(l, 'Yüzme Havuzu (Açık)') || has(l, 'Yüzme Havuzu (Kapalı)')) add('Havuz', 'Swimming pool', 'Бассейн');
  if (l.otopark === 'Kapalı Otopark' || l.otopark === 'Açık & Kapalı Otopark') add('Kapalı otopark', 'Covered parking', 'Крытый паркинг');
  if (l.yas === 0) add('Yeni bina', 'New building', 'Новый дом');
  if (l.kredi === 'Evet') add('Krediye uygun', 'Mortgage eligible', 'Подходит под ипотеку');
  if (l.esya === 'Eşyalı') add('Eşyalı', 'Furnished', 'С мебелью');
  if (l.kullanim === 'Boş') add('Hemen taşınılabilir', 'Ready to move in', 'Можно заселиться сразу');
  if (l.isitma === 'Yerden Isıtma') add('Yerden ısıtma', 'Underfloor heating', 'Тёплые полы');
  if (l.tapu === 'Kat Mülkiyetli') add('Kat mülkiyetli tapu', 'Full condominium title', 'Полный тапу');
  const s = out.slice(0, 4);
  return s.length ? { tr: s.map((x) => x[0]), en: s.map((x) => x[1]), ru: s.map((x) => x[2]) } : undefined;
}

function metaOf(l, B) {
  const P = ozet(l);
  return {
    tr: kisa(`${B.tr}. ${[P.T[1] || '', P.T[2] || ''].join(' ')} ACC HOMES ${l.id}.`.replace(/\s+/g, ' '), 155),
    en: kisa(`${B.en}. ${[P.E[1] || '', P.E[2] || ''].join(' ')} ACC HOMES ${l.id}.`.replace(/\s+/g, ' '), 155),
    ru: kisa(`${B.ru}. ${[P.R[1] || '', P.R[2] || ''].join(' ')} ACC HOMES ${l.id}.`.replace(/\s+/g, ' '), 155),
  };
}

// slug: site/proje adı varsa adrese girer (sitenin kendi ilanlarındaki kalıp)
export function seoSlug(l, slugify) {
  const sa = siteAdi(l);
  return slugify([l.tip, l.ilce, l.mahalle, sa, l.oda && konut(l) ? l.oda : '', altOf(l)[0], l.id].filter(Boolean).join(' '));
}

// Panelden gelen ilanı site standardına getirir; değişen adres için yönlendirme bilgisini döndürür.
export function enrich(l, slugify) {
  const eskiSlug = slugify([l.tip, l.ilce, l.mahalle, l.oda, l.tur, l.id].filter(Boolean).join(' '));
  const c = CUR[l.id];
  const B = basliklar(l);
  const P = ozet(l);
  const notlar = temizle(l.aciklama && l.aciklama.tr);
  l._kaynakTR = notlar;
  if (c && c.aciklama) {
    // Fiyat panelde değiştiyse özgün metindeki eski fiyat yenisiyle değiştirilir (TR/EN/RU yazımları)
    if (c.fiyat && l.fiyat && c.fiyat !== l.fiyat) {
      const eski = [nf(c.fiyat), nfe(c.fiyat), String(c.fiyat).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')]; const yeni = [nf(l.fiyat), nfe(l.fiyat), String(l.fiyat).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')];
      const fix = (o) => o && Object.fromEntries(Object.entries(o).map(([k, t]) => [k, eski.reduce((x, e, i) => x.split(e).join(yeni[i]), t)]));
      Object.assign(c, { aciklama: fix(c.aciklama), meta: fix(c.meta), baslik: fix(c.baslik) });
    }
    l.baslik = { ...B, ...(c.baslik || {}) };
    l.aciklama = c.aciklama;
    l.meta = (c.meta && c.meta.tr) || metaOf(l, l.baslik).tr;
    l.metaI18n = { ...metaOf(l, l.baslik), ...(c.meta || {}) };
    l.nedenler = c.nedenler || nedenler(l);
    l._seo = 'ozgun';
  } else {
    l.baslik = B;
    l.aciklama = {
      tr: [...P.T, ...(notlar ? ['İlan notları:', notlar] : [])].join('\n'),
      en: P.E.join('\n'),
      ru: P.R.join('\n'),
    };
    const M = metaOf(l, B); l.meta = M.tr; l.metaI18n = M;
    l.nedenler = l.nedenler || nedenler(l);
    l._seo = 'otomatik';
  }
  if (Array.isArray(l.ozellikler)) {
    const o = l.ozellikler;
    l.ozellikler = { tr: o, en: o.map((x) => F[x] && F[x][0]).filter(Boolean), ru: o.map((x) => F[x] && F[x][1]).filter(Boolean) };
  }
  l.slug = (c && c.slug) || seoSlug(l, slugify);
  return eskiSlug !== l.slug ? eskiSlug : null;
}

export const SEO_DURUM = () => CUR;
