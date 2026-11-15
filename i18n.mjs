// Almanca (de) ve Farsça (fa) sürümleri + tüm dillerde ortak arayüz metinleri.
// Farsça sağdan sola (RTL) yazılır; layout dir="rtl" verir.

import pl from './langs/pl.mjs';
import fr from './langs/fr.mjs';
import es from './langs/es.mjs';
import nl from './langs/nl.mjs';
import sv from './langs/sv.mjs';
import ar from './langs/ar.mjs';
import zh from './langs/zh.mjs';
import { corpPages } from './langs/_corp.mjs';
// Yeni diller: langs/<kod>.mjs paketleri. Sıra = dil seçicideki sıra değil, derleme sırası.
export const PACKS = [pl, fr, es, nl, sv, ar, zh];
export const LOCALE = { tr: 'tr-TR', en: 'en-GB', ru: 'ru-RU', de: 'de-DE', fa: 'fa-IR' };
export const RTL = new Set(['fa']);
for (const p of PACKS) { LOCALE[p.code] = p.locale; if (p.rtl) RTL.add(p.code); }

// Sayfa içi kısa metinler: s(key, lang) — eksik dilde İngilizceye düşer
export const S = {
  partners: { tr: 'iş ortağı', en: 'partners', ru: 'партнёров', de: 'Partner', fa: 'همکار' },
  langsSvc: { tr: 'dilde hizmet', en: 'languages', ru: 'языков', de: 'Sprachen', fa: 'زبان' },
  waJoin: { tr: 'Merhaba, ACC HOMES’ta iş ortağı olmak istiyorum.', en: 'Hello, I would like to join ACC HOMES as a partner.', ru: 'Здравствуйте, хочу стать партнёром ACC HOMES.', de: 'Hallo, ich möchte Partner bei ACC HOMES werden.', fa: 'سلام، می‌خواهم همکار ACC HOMES شوم.' },
  aboutUs: { tr: 'Bizi tanıyın', en: 'About us', ru: 'О нас', de: 'Über uns', fa: 'درباره ما' },
  type: { tr: 'Emlak türü', en: 'Type', ru: 'Тип', de: 'Objektart', fa: 'نوع ملک' },
  district: { tr: 'İlçe', en: 'District', ru: 'Район', de: 'Bezirk', fa: 'منطقه' },
  search: { tr: 'Ara', en: 'Search', ru: 'Найти', de: 'Suchen', fa: 'جستجو' },
  calcTitle: { tr: 'Alım masrafı hesaplayıcı', en: 'Purchase cost calculator', ru: 'Калькулятор расходов', de: 'Kaufnebenkosten-Rechner', fa: 'محاسبه‌گر هزینه‌های خرید' },
  calcPrice: { tr: 'Satış bedeli (TL)', en: 'Sale price (TRY)', ru: 'Цена (TRY)', de: 'Kaufpreis (TRY)', fa: 'قیمت فروش (لیر ترکیه)' },
  calcPh: { tr: 'Örn. 7.500.000', en: 'e.g. 7,500,000', ru: 'напр. 7 500 000', de: 'z. B. 7.500.000', fa: 'مثلاً 7,500,000' },
  calcForeign: { tr: 'Yabancı alıcıyım', en: 'I am a foreign buyer', ru: 'Я иностранный покупатель', de: 'Ich bin ausländischer Käufer', fa: 'خریدار خارجی هستم' },
  calcDeed: { tr: 'Tapu harcı (alıcı payı %2)', en: 'Title deed fee (buyer 2%)', ru: 'Сбор за тапу (покупатель 2%)', de: 'Grundbuchgebühr (Käuferanteil 2 %)', fa: 'هزینه سند (سهم خریدار ۲٪)' },
  calcAgency: { tr: 'Emlak danışmanlığı (%2 + %20 KDV)', en: 'Agency fee (2% + 20% VAT)', ru: 'Комиссия агентства (2% + 20% НДС)', de: 'Maklerprovision (2 % + 20 % MwSt.)', fa: 'کمیسیون مشاور املاک (۲٪ + ۲۰٪ مالیات)' },
  calcMisc: { tr: 'Döner sermaye, DASK', en: 'Land registry fee, DASK', ru: 'Сбор кадастра, DASK', de: 'Katastergebühr, DASK', fa: 'هزینه اداره ثبت، بیمه DASK' },
  calcMiscV: { tr: 'Yöreye ve mülke göre değişir', en: 'Varies by district and property', ru: 'Зависит от района и объекта', de: 'Je nach Lage und Objekt', fa: 'بسته به منطقه و ملک متفاوت است' },
  calcFx: { tr: 'Değerleme raporu ve tercüme', en: 'Valuation report and translation', ru: 'Отчёт об оценке и перевод', de: 'Wertgutachten und Übersetzung', fa: 'گزارش ارزیابی و ترجمه' },
  calcFxV: { tr: 'Kuruluşa göre değişir; teklif alıp paylaşırız', en: 'Varies by provider; we obtain quotes for you', ru: 'Зависит от организации; мы запросим цены', de: 'Je nach Anbieter; wir holen Angebote ein', fa: 'بسته به مؤسسه متفاوت است؛ ما برای شما استعلام می‌گیریم' },
  calcTotal: { tr: 'Tahmini toplam masraf', en: 'Estimated total costs', ru: 'Ориентировочные расходы', de: 'Geschätzte Gesamtkosten', fa: 'برآورد کل هزینه‌ها' },
  calcNote: { tr: 'Tahmini hesaplamadır; kesin tutarı işlem öncesinde yazılı olarak paylaşırız.', en: 'An estimate only; we confirm exact figures in writing before the transaction.', ru: 'Это ориентировочный расчёт; точные суммы мы письменно подтвердим до сделки.', de: 'Nur eine Schätzung; die genauen Beträge bestätigen wir vor der Transaktion schriftlich.', fa: 'این یک برآورد است؛ مبالغ دقیق را پیش از معامله به‌صورت کتبی اعلام می‌کنیم.' },
  faq: { tr: 'Sık Sorulan Sorular', en: 'Frequently Asked Questions', ru: 'Частые вопросы', de: 'Häufige Fragen', fa: 'پرسش‌های متداول' },
  faqShort: { tr: 'Sık sorulan sorular', en: 'FAQ', ru: 'Вопросы', de: 'FAQ', fa: 'پرسش‌ها' },
  askWa: { tr: 'Sorunuzu WhatsApp’tan sorun', en: 'Ask us on WhatsApp', ru: 'Задать вопрос в WhatsApp', de: 'Fragen Sie uns per WhatsApp', fa: 'سؤال خود را در واتس‌اپ بپرسید' },
  updated: { tr: 'Son güncelleme', en: 'Last updated', ru: 'Обновлено', de: 'Zuletzt aktualisiert', fa: 'آخرین به‌روزرسانی' },
  askConsultant: { tr: 'Danışmanımıza sorun', en: 'Ask our consultant', ru: 'Спросить консультанта', de: 'Fragen Sie unseren Berater', fa: 'از مشاور ما بپرسید' },
  guideEnNote: { tr: '', en: '', ru: 'Статьи гида доступны на английском.', de: 'Die Ratgeber-Artikel sind auf Englisch verfügbar.', fa: 'مقالات این راهنما به زبان انگلیسی هستند.' },
  broker: { tr: 'Broker', en: 'Broker', ru: 'Брокер', de: 'Broker', fa: 'بروکر' },
  beach: { tr: 'Plaj', en: 'Beach', ru: 'Пляж', de: 'Strand', fa: 'ساحل' },
  airport: { tr: 'Havalimanı', en: 'Airport', ru: 'Аэропорт', de: 'Flughafen', fa: 'فرودگاه' },
  centre: { tr: 'Şehir merkezi', en: 'City centre', ru: 'Центр', de: 'Stadtzentrum', fa: 'مرکز شهر' },
  ref: { tr: 'Referans', en: 'Ref.', ru: 'Код', de: 'Ref.', fa: 'کد' },
  shareWa: { tr: 'WhatsApp’ta paylaş', en: 'Share on WhatsApp', ru: 'Поделиться', de: 'Per WhatsApp teilen', fa: 'اشتراک در واتس‌اپ' },
  copy: { tr: 'Bağlantıyı kopyala', en: 'Copy link', ru: 'Копировать', de: 'Link kopieren', fa: 'کپی پیوند' },
  print: { tr: 'Yazdır', en: 'Print', ru: 'Печать', de: 'Drucken', fa: 'چاپ' },
  reportMsg: { tr: 'İlan bildirimi: ', en: 'Listing report: ', ru: 'Сообщение об объекте: ', de: 'Meldung zum Inserat: ', fa: 'گزارش آگهی: ' },
  report: { tr: 'İlanı bildir', en: 'Report listing', ru: 'Сообщить', de: 'Inserat melden', fa: 'گزارش آگهی' },
  distances: { tr: 'Mesafeler', en: 'Distances', ru: 'Расстояния', de: 'Entfernungen', fa: 'فاصله‌ها' },
  costs: { tr: 'Tahmini alım masrafları', en: 'Estimated buying costs', ru: 'Расходы на покупку', de: 'Geschätzte Kaufnebenkosten', fa: 'برآورد هزینه‌های خرید' },
  costsMore: { tr: 'Masraflar hakkında detaylı bilgi →', en: 'More about purchase costs →', ru: 'Подробнее о расходах →', de: 'Mehr zu den Kaufnebenkosten →', fa: 'اطلاعات بیشتر درباره هزینه‌ها ←' },
  viewing: { tr: 'Gösterim randevusu', en: 'Book a viewing', ru: 'Записаться на просмотр', de: 'Besichtigung vereinbaren', fa: 'رزرو بازدید' },
  inPerson: { tr: 'Yerinde', en: 'In person', ru: 'Лично', de: 'Vor Ort', fa: 'حضوری' },
  online: { tr: 'Online görüntülü', en: 'Video call', ru: 'Онлайн', de: 'Videoanruf', fa: 'تماس تصویری' },
  reqViewing: { tr: 'Randevu iste', en: 'Request viewing', ru: 'Записаться', de: 'Termin anfragen', fa: 'درخواست بازدید' },
  licence: { tr: 'Taşınmaz Ticareti Yetki Belgesi', en: 'Real estate trade licence (Türkiye)', ru: 'Лицензия на торговлю недвижимостью', de: 'Immobilienhandelslizenz (Türkei)', fa: 'مجوز رسمی تجارت املاک' },
  directionsTitle: { tr: 'Ofisimize nasıl gelinir', en: 'How to find our office', ru: 'Как нас найти', de: 'So finden Sie uns', fa: 'مسیر دفتر ما' },
  directionsText: {
    tr: 'Sampi Kavşağı’ndan Portakal Çiçeği Caddesi’ne döndüğünüzde, Süleyman Erol Yüzme Havuzu’nu geçtikten 200-250 metre sonra sağda.',
    en: 'Turn from the Sampi junction onto Portakal Çiçeği Avenue; we are on the right, 200–250 metres after the Süleyman Erol swimming pool.',
    ru: 'От перекрёстка Sampi поверните на проспект Портакал Чичеги; мы справа, в 200–250 м после бассейна Süleyman Erol.',
    de: 'Biegen Sie an der Sampi-Kreuzung in die Portakal-Çiçeği-Straße ab; wir sind 200–250 m nach dem Schwimmbad Süleyman Erol auf der rechten Seite.',
    fa: 'از تقاطع Sampi وارد خیابان Portakal Çiçeği شوید؛ ۲۰۰ تا ۲۵۰ متر بعد از استخر Süleyman Erol، سمت راست هستیم.',
  },
  settings: { tr: 'Dil, para birimi ve ölçü birimi', en: 'Language, currency and units', ru: 'Язык, валюта и единицы', de: 'Sprache, Währung und Einheiten', fa: 'زبان، واحد پول و واحد اندازه‌گیری' },
  language: { tr: 'Dil', en: 'Language', ru: 'Язык', de: 'Sprache', fa: 'زبان' },
  unit: { tr: 'Ölçü birimi', en: 'Measurement unit', ru: 'Единицы', de: 'Maßeinheit', fa: 'واحد اندازه‌گیری' },
  metric: { tr: 'Metrik (m²)', en: 'Metric (m²)', ru: 'Метрическая (м²)', de: 'Metrisch (m²)', fa: 'متریک (m²)' },
  imperial: { tr: 'Emperyal (ft²)', en: 'Imperial (sq ft)', ru: 'Имперская (фут²)', de: 'Imperial (sq ft)', fa: 'امپریال (فوت مربع)' },
  close: { tr: 'Kapat', en: 'Close', ru: 'Закрыть', de: 'Schließen', fa: 'بستن' },
  curNote: { tr: 'Çevrilen fiyatlar anlık kurla yaklaşıktır, bilgi amaçlıdır. Ödeme ve tapu bedeli ilanın asıl fiyatı üzerinden yapılır. BTC karşılığı yalnızca bilgi amaçlıdır; Türkiye’de gayrimenkul bedeli kripto parayla ödenemez.', en: 'Converted prices use live rates and are approximate, for information only. Payment and the title deed value are based on the original listing price. BTC values are for information only; property in Türkiye cannot be paid for in crypto.', ru: 'Пересчёт по текущему курсу приблизителен и носит справочный характер. Оплата и стоимость в тапу — по исходной цене объекта. Цена в BTC справочная; оплата недвижимости в Турции криптовалютой запрещена.', de: 'Umgerechnete Preise basieren auf Tageskursen und sind nur Richtwerte. Zahlung und Grundbuchwert richten sich nach dem Originalpreis. BTC-Werte dienen nur zur Information; Immobilien in der Türkei können nicht mit Krypto bezahlt werden.', fa: 'قیمت‌های تبدیل‌شده با نرخ روز و تقریبی هستند و فقط جنبه اطلاع‌رسانی دارند. پرداخت و ارزش سند بر اساس قیمت اصلی آگهی است. معادل BTC فقط جنبه اطلاع‌رسانی دارد؛ پرداخت بهای ملک در ترکیه با رمزارز ممکن نیست.' },
  replyLang: { tr: '', en: '', ru: '', de: '', fa: '' },
  callTitle: { tr: 'Sizi arayalım', en: 'Request a call', ru: 'Заказать звонок', de: 'Rückruf anfordern', fa: 'درخواست تماس' },
  callSub: { tr: 'Bilgilerinizi bırakın, danışmanımız kısa süre içinde sizi arasın.', en: 'Leave your details and one of our consultants will call you shortly.', ru: 'Оставьте контакты, и наш консультант скоро вам перезвонит.', de: 'Hinterlassen Sie Ihre Daten, unser Berater ruft Sie in Kürze zurück.', fa: 'اطلاعات خود را بگذارید تا مشاور ما به‌زودی با شما تماس بگیرد.' },
  callMe: { tr: 'Beni arayın', en: 'Call me', ru: 'Позвоните мне', de: 'Rufen Sie mich an', fa: 'با من تماس بگیرید' },
  dialCode: { tr: 'Ülke kodu', en: 'Country code', ru: 'Код страны', de: 'Ländervorwahl', fa: 'کد کشور' },
  consent: { tr: '{{LINK}}’ni okudum; talebime dönüş yapılması için verilerimin işlenmesini kabul ediyorum.', en: 'I have read the {{LINK}} and agree to my data being processed so you can respond to my request.', ru: 'Я ознакомился с документом «{{LINK}}» и согласен на обработку данных для ответа на мой запрос.', de: 'Ich habe den {{LINK}} gelesen und bin mit der Verarbeitung meiner Daten zur Beantwortung meiner Anfrage einverstanden.', fa: '{{LINK}} را خوانده‌ام و با پردازش اطلاعاتم برای پاسخ به درخواستم موافقم.' },
  favAdd: { tr: 'Favorilere ekle', en: 'Save to favourites', ru: 'В избранное', de: 'Merken', fa: 'افزودن به علاقه‌مندی‌ها' },
  favTitle: { tr: 'Favorilerim', en: 'My favourites', ru: 'Избранное', de: 'Meine Favoriten', fa: 'علاقه‌مندی‌های من' },
  favLead: { tr: 'Beğendiğiniz ilanlar bu cihazda saklanır; üyelik gerekmez.', en: 'Saved listings are kept on this device; no account needed.', ru: 'Сохранённые объекты хранятся на этом устройстве, регистрация не нужна.', de: 'Gemerkte Objekte werden auf diesem Gerät gespeichert, ohne Konto.', fa: 'آگهی‌های ذخیره‌شده روی همین دستگاه می‌مانند؛ نیازی به ثبت‌نام نیست.' },
  favEmpty: { tr: 'Henüz favori ilanınız yok. İlan kartlarındaki kalbe dokunarak ekleyebilirsiniz.', en: 'No favourites yet. Tap the heart on any listing to save it.', ru: 'Пока пусто. Нажмите на сердечко на объекте, чтобы сохранить его.', de: 'Noch keine Favoriten. Tippen Sie auf das Herz, um ein Objekt zu merken.', fa: 'هنوز آگهی ذخیره نکرده‌اید. برای ذخیره، روی قلب هر آگهی بزنید.' },
  compare: { tr: 'Karşılaştır', en: 'Compare', ru: 'Сравнить', de: 'Vergleichen', fa: 'مقایسه' },
  compareAdd: { tr: 'Karşılaştırmaya ekle (en fazla 3)', en: 'Add to comparison (max 3)', ru: 'Добавить к сравнению (до 3)', de: 'Zum Vergleich hinzufügen (max. 3)', fa: 'افزودن به مقایسه (حداکثر ۳)' },
  compareTitle: { tr: 'Karşılaştırma', en: 'Comparison', ru: 'Сравнение', de: 'Vergleich', fa: 'مقایسه' },
  compareHint: { tr: 'İlan kartlarındaki “Karşılaştır” düğmesiyle en fazla 3 ilanı yan yana görün.', en: 'Use “Compare” on listing cards to see up to 3 properties side by side.', ru: 'Нажмите «Сравнить» на карточках, чтобы сравнить до 3 объектов.', de: 'Mit „Vergleichen“ sehen Sie bis zu 3 Objekte nebeneinander.', fa: 'با دکمه «مقایسه» حداکثر ۳ آگهی را کنار هم ببینید.' },
  tags: { tr: 'Avantajlar', en: 'Highlights', ru: 'Преимущества', de: 'Vorteile', fa: 'مزایا' },
  similar: { tr: 'Benzer ilanlar', en: 'Similar properties', ru: 'Похожие объекты', de: 'Ähnliche Objekte', fa: 'آگهی‌های مشابه' },
  priceChecked: { tr: 'Fiyat ve durum kontrol edildi', en: 'Price and availability checked', ru: 'Цена и наличие проверены', de: 'Preis und Verfügbarkeit geprüft', fa: 'قیمت و وضعیت بررسی شد' },
  lastCheck: { tr: 'Son kontrol', en: 'Last checked', ru: 'Последняя проверка', de: 'Zuletzt geprüft', fa: 'آخرین بررسی' },
  whyDiff: { tr: 'Aynı evi başka sitelerde farklı fiyatla mı gördünüz?', en: 'Seen this home elsewhere at a different price?', ru: 'Видели этот объект по другой цене?', de: 'Dieses Objekt woanders zu einem anderen Preis gesehen?', fa: 'این ملک را جای دیگر با قیمت متفاوت دیده‌اید؟' },
  whyDiffText: { tr: 'Farklı sitelerdeki ilanlar çoğu zaman güncel değildir ya da kat, cephe, eşya veya ödeme koşulları farklıdır. Bulduğunuz ilanı bize gönderin; aynı mülk mü, koşullar aynı mı, yazılı olarak karşılaştıralım. Rezervasyondan önce fiyatı ve koşulları mal sahibiyle yeniden teyit ederiz.', en: 'Listings elsewhere are often out of date, or differ in floor, view, furniture or payment terms. Send us the listing you found and we will compare it with ours in writing. Before any reservation we reconfirm the price and terms with the owner.', ru: 'Объявления на других сайтах часто устарели или отличаются этажом, видом, мебелью и условиями оплаты. Пришлите нам найденное объявление — мы письменно сравним условия. Перед бронированием мы заново подтверждаем цену у владельца.', de: 'Inserate auf anderen Seiten sind oft veraltet oder unterscheiden sich in Etage, Ausblick, Möblierung oder Zahlungsbedingungen. Schicken Sie uns das Inserat, wir vergleichen schriftlich. Vor einer Reservierung bestätigen wir Preis und Bedingungen erneut beim Eigentümer.', fa: 'آگهی‌های سایت‌های دیگر اغلب به‌روز نیستند یا طبقه، چشم‌انداز، مبلمان یا شرایط پرداخت متفاوتی دارند. آگهی را برای ما بفرستید تا به‌صورت کتبی مقایسه کنیم. پیش از رزرو، قیمت و شرایط را دوباره با مالک تأیید می‌کنیم.' },
  tag_vatandaslik: { tr: 'Vatandaşlığa uygun', en: 'Citizenship eligible', ru: 'Под гражданство', de: 'Für Staatsbürgerschaft geeignet', fa: 'مناسب شهروندی' },
  tag_oturum: { tr: 'Oturum iznine uygun', en: 'Residence permit eligible', ru: 'Под ВНЖ', de: 'Für Aufenthaltserlaubnis', fa: 'مناسب اقامت' },
  tag_deniz: { tr: 'Deniz manzaralı', en: 'Sea view', ru: 'Вид на море', de: 'Meerblick', fa: 'منظره دریا' },
  tag_ilkSira: { tr: 'Denize sıfır', en: 'Seafront', ru: 'Первая линия', de: 'Erste Meereslinie', fa: 'ساحلی' },
  tag_esyali: { tr: 'Eşyalı', en: 'Furnished', ru: 'С мебелью', de: 'Möbliert', fa: 'مبله' },
  tag_firsat: { tr: 'Fırsat', en: 'Great value', ru: 'Выгодно', de: 'Top-Angebot', fa: 'فرصت ویژه' },
  tag_yeni: { tr: 'Yeni yapı', en: 'New build', ru: 'Новостройка', de: 'Neubau', fa: 'نوساز' },
  neighbourhood: { tr: 'Mahalle', en: 'Neighbourhood', ru: 'Микрорайон', de: 'Viertel', fa: 'محله' },
  expectedPrice: { tr: 'Beklediğiniz fiyat (isteğe bağlı)', en: 'Expected price (optional)', ru: 'Ожидаемая цена (необязательно)', de: 'Preisvorstellung (optional)', fa: 'قیمت مورد نظر (اختیاری)' },
  sellReq: { tr: 'Ücretsiz değerleme isteyin', en: 'Request free valuation', ru: 'Запросить бесплатную оценку', de: 'Kostenlose Bewertung anfordern', fa: 'درخواست ارزیابی رایگان' },
  dlCostTitle: {"tr": "2026 Antalya Gerçek Alım Maliyeti Rehberi", "en": "2026 Guide: The True Cost of Buying in Antalya", "ru": "Гид 2026: реальные расходы на покупку в Анталии", "de": "Ratgeber 2026: Die wahren Kaufkosten in Antalya", "fa": "راهنمای ۲۰۲۶: هزینه واقعی خرید در آنتالیا"},
  dlCostSub: {"tr": "Tapu harcı, komisyon, vergiler ve gözden kaçan masraflar tek dosyada", "en": "Title deed fee, commission, taxes and the costs people forget, in one file", "ru": "Сбор за тапу, комиссия, налоги и забытые расходы в одном файле", "de": "Grundbuchgebühr, Provision, Steuern und oft vergessene Kosten in einer Datei", "fa": "هزینه سند، کمیسیون، مالیات‌ها و هزینه‌های فراموش‌شده در یک فایل"},
  dlCitTitle: {"tr": "Yatırımla Türk Vatandaşlığı Rehberi", "en": "Turkish Citizenship by Investment Guide", "ru": "Гид: гражданство Турции за инвестиции", "de": "Ratgeber: Türkische Staatsbürgerschaft durch Investition", "fa": "راهنمای شهروندی ترکیه از طریق سرمایه‌گذاری"},
  dlCitSub: {"tr": "400.000 USD şartı, adım adım süreç ve başvuruyu geciktiren hatalar", "en": "The USD 400,000 rule, the step-by-step process and mistakes that delay applications", "ru": "Порог 400 000 USD, процесс по шагам и ошибки, задерживающие заявку", "de": "Die 400.000-USD-Regel, der Ablauf Schritt für Schritt und typische Fehler", "fa": "شرط ۴۰۰ هزار دلار، مراحل گام‌به‌گام و اشتباهاتی که پرونده را به تأخیر می‌اندازد"},
  dlCta: {"tr": "Ücretsiz indir", "en": "Free download", "ru": "Скачать бесплатно", "de": "Kostenlos herunterladen", "fa": "دانلود رایگان"},
  sellCta: {"tr": "Ücretsiz değerleme", "en": "Free valuation", "ru": "Бесплатная оценка", "de": "Kostenlose Bewertung", "fa": "ارزیابی رایگان"},
  allAreas: {"tr": "Tümü", "en": "All", "ru": "Все", "de": "Alle", "fa": "همه"},
  consultTitle: {"tr": "Ücretsiz danışmanlık", "en": "Free consultation", "ru": "Бесплатная консультация", "de": "Kostenlose Beratung", "fa": "مشاوره رایگان"},
  consultBtn: {"tr": "Bize ulaşın", "en": "Contact us", "ru": "Связаться", "de": "Kontakt", "fa": "تماس با ما"},
  email: {"tr": "E-posta", "en": "Email", "ru": "Эл. почта", "de": "E-Mail", "fa": "ایمیل"},
  quickEnq: {"tr": "Hızlı bilgi al", "en": "Quick enquiry", "ru": "Быстрый запрос", "de": "Schnellanfrage", "fa": "استعلام سریع"},
  citTitle: {"tr": "Yatırımla Türk Vatandaşlığı", "en": "Turkish Citizenship by Investment", "ru": "Гражданство Турции за инвестиции", "de": "Türkische Staatsbürgerschaft durch Investition", "fa": "شهروندی ترکیه از طریق سرمایه‌گذاری"},
  citText: {"tr": "En az 400.000 USD değerinde gayrimenkul alıp tapuya 3 yıl satmama şerhi koyduran yabancılar, eşleri ve 18 yaş altı çocuklarıyla birlikte Türk vatandaşlığına başvurabilir. Uygun portföyü seçmenizde, değerleme raporunda ve başvuru dosyasında yanınızdayız.", "en": "Foreign buyers who purchase property worth at least USD 400,000 and register a 3-year no-sale annotation on the title deed can apply for Turkish citizenship together with their spouse and children under 18. We help you choose eligible properties, obtain the valuation report and prepare the application.", "ru": "Иностранцы, купившие недвижимость минимум на 400 000 USD с обязательством не продавать её 3 года, могут подать на гражданство Турции вместе с супругом и детьми до 18 лет. Мы поможем выбрать подходящий объект, получить отчёт об оценке и подготовить документы.", "de": "Ausländer, die Immobilien im Wert von mindestens 400.000 USD kaufen und ein 3-jähriges Veräußerungsverbot im Grundbuch eintragen lassen, können mit Ehepartner und Kindern unter 18 die türkische Staatsbürgerschaft beantragen. Wir helfen bei Objektauswahl, Wertgutachten und Antrag.", "fa": "خارجی‌هایی که ملکی به ارزش حداقل ۴۰۰ هزار دلار بخرند و تعهد عدم فروش ۳ ساله در سند ثبت کنند، می‌توانند همراه همسر و فرزندان زیر ۱۸ سال برای شهروندی ترکیه اقدام کنند. در انتخاب ملک مناسب، گزارش ارزیابی و آماده‌سازی پرونده کنار شما هستیم."},
  citCta: {"tr": "Rehberi okuyun", "en": "Read the guide", "ru": "Читать гид", "de": "Ratgeber lesen", "fa": "خواندن راهنما"},
  talkTitle: {"tr": "Danışmanımızla konuşun", "en": "Talk to a local adviser", "ru": "Поговорите с нашим консультантом", "de": "Sprechen Sie mit unserem Berater", "fa": "با مشاور محلی ما صحبت کنید"},
  talkSub: {"tr": "Bütçenizi ve beklentinizi yazın; size uygun seçenekleri hazırlayıp dönelim.", "en": "Tell us your budget and goals, and we will come back with suitable options.", "ru": "Напишите бюджет и цели, и мы подберём подходящие варианты.", "de": "Nennen Sie Budget und Ziele, wir melden uns mit passenden Optionen.", "fa": "بودجه و اهداف خود را بنویسید تا گزینه‌های مناسب را برایتان آماده کنیم."},
  budget: {"tr": "Bütçeniz", "en": "Your budget", "ru": "Ваш бюджет", "de": "Ihr Budget", "fa": "بودجه شما"},
  popSearches: {"tr": "Popüler aramalar", "en": "Popular searches", "ru": "Популярные запросы", "de": "Beliebte Suchen", "fa": "جستجوهای پرطرفدار"},
  popAreas: {"tr": "Popüler bölgeler", "en": "Popular areas", "ru": "Популярные районы", "de": "Beliebte Gegenden", "fa": "مناطق پرطرفدار"},
  usefulLinks: {"tr": "Faydalı bağlantılar", "en": "Useful links", "ru": "Полезные ссылки", "de": "Nützliche Links", "fa": "پیوندهای مفید"},
  followUs: {"tr": "Bizi takip edin", "en": "Follow us", "ru": "Мы в соцсетях", "de": "Folgen Sie uns", "fa": "ما را دنبال کنید"},
  dlPageTitle: {"tr": "Ücretsiz rehberler", "en": "Free guides", "ru": "Бесплатные гиды", "de": "Kostenlose Ratgeber", "fa": "راهنماهای رایگان"},
  dlPageLead: {"tr": "Bilgilerinizi bırakın, rehberleri hemen indirin. Sorularınız için danışmanımız da size ulaşsın.", "en": "Leave your details and download the guides right away; one of our consultants can also answer your questions.", "ru": "Оставьте контакты и сразу скачайте гиды; наш консультант ответит на вопросы.", "de": "Hinterlassen Sie Ihre Daten und laden Sie die Ratgeber sofort herunter; unser Berater beantwortet gern Ihre Fragen.", "fa": "اطلاعات خود را بگذارید و راهنماها را فوراً دانلود کنید؛ مشاور ما هم به سؤالاتتان پاسخ می‌دهد."},
  dlReady: {"tr": "Rehberleriniz hazır", "en": "Your guides are ready", "ru": "Ваши гиды готовы", "de": "Ihre Ratgeber sind bereit", "fa": "راهنماهای شما آماده است"},
  partnerPill: {"tr": "İş ortağımız olun", "en": "Be our partner", "ru": "Стать партнёром", "de": "Partner werden", "fa": "همکار ما شوید"},
  areasTitle: { tr: 'Bölge Rehberleri', en: 'Area Guides', ru: 'Гид по районам', de: 'Regionen-Ratgeber', fa: 'راهنمای مناطق' },
  areasLead: { tr: 'Antalya’nın ilçelerini tanıyın: konum, yaşam, öne çıkan mahalleler ve kimler için uygun olduğu.', en: 'Get to know Antalya’s districts: location, lifestyle, key neighbourhoods and who each one suits.', ru: 'Районы Анталии: расположение, образ жизни, главные микрорайоны и для кого они подходят.', de: 'Lernen Sie Antalyas Bezirke kennen: Lage, Lebensstil, wichtige Viertel und für wen sie passen.', fa: 'با مناطق آنتالیا آشنا شوید: موقعیت، سبک زندگی، محله‌های مهم و اینکه برای چه کسانی مناسب‌اند.' },
  areaListings: { tr: '{{A}} ilanlarını gör', en: 'See properties in {{A}}', ru: 'Объекты в районе {{A}}', de: 'Immobilien in {{A}}', fa: 'املاک {{A}}' },
  areaNote: { tr: 'Güncel fiyat ve kira verileri için danışmanımızdan bölgeye özel analiz isteyin.', en: 'Ask our consultant for an up-to-date price and rent analysis for the area.', ru: 'Запросите у консультанта актуальный анализ цен и аренды по району.', de: 'Fragen Sie unseren Berater nach einer aktuellen Preis- und Mietanalyse.', fa: 'برای تحلیل به‌روز قیمت و اجاره منطقه، از مشاور ما بپرسید.' },
  teamCap: { tr: 'ACC Ailesi, ACC Plaza önünde · Kasım 2026', en: 'The ACC family in front of ACC Plaza · November 2026', ru: 'Команда ACC у ACC Plaza · ноябрь 2026', de: 'Die ACC-Familie vor ACC Plaza · November 2026', fa: 'خانواده ACC مقابل ACC Plaza · نوامبر ۲۰۲۶', pl: 'Zespół ACC przed ACC Plaza · listopad 2026', fr: 'La famille ACC devant ACC Plaza · novembre 2026', es: 'La familia ACC frente a ACC Plaza · noviembre de 2026', nl: 'De ACC-familie voor ACC Plaza · november 2026', sv: 'ACC-familjen framför ACC Plaza · november 2026', ar: 'عائلة ACC أمام ACC Plaza · نوفمبر 2026', zh: 'ACC团队于ACC Plaza前 · 2026年11月' },
  currency: { tr: 'Para birimi', en: 'Currency', ru: 'Валюта', de: 'Währung', fa: 'واحد پول' },
  partnersTitle: { tr: 'İş ortaklarımız', en: 'Our partners', ru: 'Наши партнёры', de: 'Unsere Partner', fa: 'همکاران ما' },
  speaks: { tr: 'Diller', en: 'Languages', ru: 'Языки', de: 'Sprachen', fa: 'زبان‌ها' },
  projectsTr: { tr: '', en: '', ru: '', de: 'Projektseiten auf Türkisch', fa: 'صفحات پروژه به زبان ترکی' },
};
export const s = (k, lang) => (S[k] ? (S[k][lang] ?? S[k].en) : k);

export const SEGS = {
  projects: { tr: 'projeler', en: 'projects', ru: 'proekty', de: 'projekte', fa: 'projeha' },
  downloads: { tr: 'ucretsiz-rehberler', en: 'free-guides', ru: 'besplatnye-gidy', de: 'kostenlose-ratgeber', fa: 'rahnamaye-rayegan', pl: 'bezplatne-poradniki' },
  areas: { tr: 'bolge-rehberleri', en: 'area-guides', ru: 'rayony', de: 'regionen', fa: 'manategh', pl: 'dzielnice', fr: 'quartiers', es: 'zonas', nl: 'wijken', sv: 'omraden', ar: 'manatiq', zh: 'quyu' },
  favorites: { tr: 'favorilerim', en: 'favourites', ru: 'izbrannoe', de: 'favoriten', fa: 'alaghemandiha' },
  reviews: { tr: 'musteri-yorumlari', en: 'reviews', ru: 'otzyvy', de: 'bewertungen', fa: 'nazarat' },
};

export const T_EXTRA = {
  de: {
    htmlLang: 'de', locale: 'de_DE',
    nav: { home: 'Startseite', list: 'Immobilien', guide: 'Altıntaş-Ratgeber', contact: 'Kontakt' },
    seg: { list: 'immobilien', listing: 'objekt', guide: 'altintas-ratgeber', contact: 'kontakt' },
    heroTitle: 'Immobilien in Antalya kaufen und mieten',
    heroSub: 'Von ACC Plaza aus, mit 50 Partnern in 10 Sprachen: Wohnungen, Villen, autorisierte Projekte und Gewerbeimmobilien – professionell, transparent und datenbasiert',
    heroCta: 'Immobilien ansehen', heroCta2: 'Per WhatsApp fragen',
    featured: 'Ausgewählte Immobilien', all: 'Alle Immobilien', seeAll: 'Alle Immobilien ansehen',
    why: 'Warum ACC HOMES',
    whyItems: [
      ['Datenbasierte Preise', 'Jede Immobilie wird mit Vergleichsobjekten und Marktdaten bewertet'],
      ['Mehrsprachiges Team', 'Beratung auf Deutsch, Englisch, Türkisch, Russisch und mehr'],
      ['Transparenter Ablauf', 'Jeder Schritt bis zur Grundbucheintragung klar und schriftlich'],
      ['Professionelles Marketing', 'Eigenes Foto-, Video- und Digitalmarketing-Team'],
    ],
    filters: { tip: 'Art', any: 'Alle', sale: 'Kaufen', rent: 'Mieten', rooms: 'Zimmer', sort: 'Sortieren', newest: 'Neueste', priceAsc: 'Preis aufsteigend', priceDesc: 'Preis absteigend' },
    fields: { price: 'Preis', rooms: 'Zimmer', gross: 'Bruttofläche', net: 'Nettofläche', age: 'Baujahr/Alter', floor: 'Etage', floors: 'Etagen gesamt', heat: 'Heizung', inSite: 'In Wohnanlage', credit: 'Finanzierbar', deed: 'Grundbuch', project: 'Projekt / Anlage', location: 'Lage', type: 'Objektart', no: 'Objekt-Nr.', features: 'Ausstattung', desc: 'Beschreibung' },
    priceOnReq: 'Preis auf Anfrage', sold: 'Verkauft', option: 'Reserviert',
    sale: 'Zu verkaufen', rent: 'Zu vermieten',
    askTitle: 'Anfrage zu dieser Immobilie', name: 'Ihr Name', phone: 'Telefon', msg: 'Nachricht', send: 'Senden',
    call: 'Anrufen', wa: 'WhatsApp',
    waText: (l) => `Hallo, ich interessiere mich für das Objekt ${l}.`,
    waGeneral: 'Hallo, ich interessiere mich für Immobilien in Antalya.',
    empty: 'Neue Immobilien werden vorbereitet. Schreiben Sie uns, wir finden das passende Objekt für Sie.',
    demo: 'Designvorschau – die gezeigten Objekte sind Beispiele',
    contactTitle: 'Kontakt', contactSub: 'Sie suchen eine Immobilie in Antalya oder möchten verkaufen? Sprechen Sie uns an',
    office: 'Büro', thanks: 'Vielen Dank, wir melden uns in Kürze',
    guideTitle: 'Altıntaş-Ratgeber',
    guideSub: 'Wissenswertes über Altıntaş, eines der am schnellsten wachsenden Viertel Antalyas',
    guideBody: [
      ['Wo liegt Altıntaş', 'Altıntaş liegt im Bezirk Aksu, nahe Lara und dem Flughafen, und wächst rasch mit neuen Wohnprojekten.'],
      ['Für wen geeignet', 'Beliebt bei Familien, Investoren und ausländischen Käufern, die Neubauten in Anlagen mit Pool suchen.'],
      ['Verkehr', 'Vom Projekt Prime Lara sind es etwa 3 km zu den Stränden von Lara und etwa 5 km zum Flughafen Antalya.'],
      ['Investition', 'Wir analysieren aktuelle Verkaufs- und Mietpreise der Gegend für Sie. Fragen Sie nach einer kostenlosen Bewertung.'],
    ],
    footerAbout: 'Professionelles Immobilienbüro in Antalya: Verkauf, Vermietung, autorisierte Projekte und Investitionsberatung.',
    corporate: 'Unternehmensseite', rights: 'Alle Rechte vorbehalten',
    revTitle: 'Das sagen unsere Kunden', revSub: 'Eine Auswahl unserer Google-Bewertungen im Originalwortlaut', revAll: 'Alle Bewertungen auf Google', revMore: 'Weiterlesen auf Google',
    igTitle: 'ACC HOMES auf Instagram', igFollowBtn: 'Folgen', igPosts: 'Beiträge', igFollowers: 'Follower',
    barCall: 'Jetzt anrufen', barWa: 'WhatsApp schreiben',
    projects: 'Projekte', projectsLead: 'Projekte, für die ACC HOMES das autorisierte Verkaufsbüro ist (Seiten auf Türkisch)', projectsCta: 'Projekt ansehen',
    company: 'Unternehmen', blog: 'Blog', blogLead: 'Ratgeber und Analysen zum Immobilienmarkt Antalya (auf Englisch)', readMore: 'Weiterlesen', menu: 'Menü',
    gReviews: (n) => `${n} Google-Bewertungen`, readReviews: 'Bewertungen lesen', igFollow: 'Folgen Sie uns auf Instagram', mapTitle: 'Unser Büro auf der Karte', directions: 'Route planen', trustTitle: 'Das sagen unsere Kunden',
    metaHome: 'ACC HOMES International Real Estate: Wohnungen, Villen, autorisierte Projekte und Gewerbeimmobilien in Antalya kaufen und mieten. Beratung in 10 Sprachen, auch auf Deutsch.',
  },
  fa: {
    htmlLang: 'fa', locale: 'fa_IR',
    nav: { home: 'صفحه اصلی', list: 'املاک', guide: 'راهنمای آلتین‌تاش', contact: 'تماس با ما' },
    seg: { list: 'amlak', listing: 'melk', guide: 'rahnama-altintash', contact: 'tamas' },
    heroTitle: 'خرید و اجاره ملک در آنتالیا',
    heroSub: 'از دفتر ACC Plaza با ۵۰ همکار و خدمات به ۱۰ زبان: آپارتمان، ویلا، پروژه‌های رسمی و املاک تجاری؛ مشاوره‌ای حرفه‌ای، شفاف و مبتنی بر داده',
    heroCta: 'مشاهده املاک', heroCta2: 'پرسش در واتس‌اپ',
    featured: 'املاک منتخب', all: 'همه املاک', seeAll: 'مشاهده همه املاک',
    why: 'چرا ACC HOMES',
    whyItems: [
      ['قیمت‌گذاری مبتنی بر داده', 'هر ملک با نمونه‌های مشابه و داده‌های بازار ارزیابی می‌شود'],
      ['تیم چندزبانه', 'خدمات به فارسی، ترکی، انگلیسی، روسی و زبان‌های دیگر'],
      ['روند شفاف', 'هر مرحله تا انتقال سند، روشن و مکتوب'],
      ['بازاریابی حرفه‌ای', 'تیم داخلی عکاسی، ویدیو و بازاریابی دیجیتال'],
    ],
    filters: { tip: 'نوع آگهی', any: 'همه', sale: 'فروش', rent: 'اجاره', rooms: 'اتاق', sort: 'مرتب‌سازی', newest: 'جدیدترین', priceAsc: 'قیمت صعودی', priceDesc: 'قیمت نزولی' },
    fields: { price: 'قیمت', rooms: 'اتاق', gross: 'متراژ ناخالص', net: 'متراژ خالص', age: 'سن بنا', floor: 'طبقه', floors: 'تعداد طبقات', heat: 'سیستم گرمایش', inSite: 'داخل مجتمع', credit: 'قابل وام', deed: 'وضعیت سند', project: 'پروژه / مجتمع', location: 'موقعیت', type: 'نوع ملک', no: 'کد آگهی', features: 'امکانات', desc: 'توضیحات' },
    priceOnReq: 'قیمت با تماس', sold: 'فروخته شد', option: 'رزرو شده',
    sale: 'فروشی', rent: 'اجاره‌ای',
    askTitle: 'درباره این ملک بپرسید', name: 'نام شما', phone: 'تلفن', msg: 'پیام', send: 'ارسال',
    call: 'تماس', wa: 'واتس‌اپ',
    waText: (l) => `سلام، درباره آگهی ${l} اطلاعات می‌خواهم.`,
    waGeneral: 'سلام، درباره خرید ملک در آنتالیا اطلاعات می‌خواهم.',
    empty: 'آگهی‌های جدید در حال آماده‌سازی است. برای ما پیام بگذارید تا ملک مناسب شما را پیدا کنیم.',
    demo: 'پیش‌نمایش طراحی — آگهی‌های نمایش‌داده‌شده نمونه هستند',
    contactTitle: 'تماس با ما', contactSub: 'به دنبال ملک در آنتالیا هستید یا می‌خواهید ملک خود را بفروشید؟ با ما در تماس باشید',
    office: 'دفتر', thanks: 'سپاس، به‌زودی با شما تماس می‌گیریم',
    guideTitle: 'راهنمای آلتین‌تاش',
    guideSub: 'آنچه باید درباره آلتین‌تاش، یکی از محله‌های رو به رشد آنتالیا، بدانید',
    guideBody: [
      ['آلتین‌تاش کجاست', 'آلتین‌تاش در منطقه آکسو، نزدیک لارا و فرودگاه قرار دارد و با پروژه‌های مسکونی جدید به‌سرعت در حال توسعه است.'],
      ['مناسب چه کسانی است', 'انتخابی محبوب برای خانواده‌ها، سرمایه‌گذاران و خریداران خارجی که به دنبال واحدهای نوساز در مجتمع‌های دارای استخر هستند.'],
      ['دسترسی', 'از پروژه Prime Lara تا سواحل لارا حدود ۳ کیلومتر و تا فرودگاه آنتالیا حدود ۵ کیلومتر فاصله است.'],
      ['سرمایه‌گذاری', 'قیمت‌های روز فروش و اجاره منطقه را برای شما تحلیل می‌کنیم. برای ارزیابی رایگان با ما تماس بگیرید.'],
    ],
    footerAbout: 'دفتر املاک حرفه‌ای در آنتالیا: فروش، اجاره، پروژه‌های رسمی و مشاوره سرمایه‌گذاری.',
    corporate: 'وب‌سایت شرکت', rights: 'تمامی حقوق محفوظ است',
    revTitle: 'نظر مشتریان ما', revSub: 'گزیده‌ای از نظرات گوگل، به زبان اصلی نویسندگان', revAll: 'همه نظرات در گوگل', revMore: 'ادامه در گوگل',
    igTitle: 'ACC HOMES در اینستاگرام', igFollowBtn: 'دنبال کنید', igPosts: 'پست', igFollowers: 'دنبال‌کننده',
    barCall: 'تماس فوری', barWa: 'پیام در واتس‌اپ',
    projects: 'پروژه‌ها', projectsLead: 'پروژه‌هایی که ACC HOMES دفتر فروش رسمی آن‌هاست (صفحات به زبان ترکی)', projectsCta: 'مشاهده پروژه',
    company: 'شرکت', blog: 'وبلاگ', blogLead: 'راهنماها و تحلیل‌های بازار ملک آنتالیا (به زبان انگلیسی)', readMore: 'ادامه مطلب', menu: 'منو',
    gReviews: (n) => `${n} نظر در گوگل`, readReviews: 'خواندن نظرات', igFollow: 'ما را در اینستاگرام دنبال کنید', mapTitle: 'دفتر ما روی نقشه', directions: 'مسیریابی', trustTitle: 'نظر مشتریان ما',
    metaHome: 'ACC HOMES International Real Estate: خرید و اجاره آپارتمان، ویلا، پروژه‌های رسمی و املاک تجاری در آنتالیا. مشاوره به ۱۰ زبان، از جمله فارسی.',
  },
};

const PLAZA_X = {
  de: {
    eyebrow: 'ACC PLAZA · Hauptsitz',
    title: 'ACC PLAZA: Antalyas visionärstes Immobilienzentrum',
    sub: 'Hunderte zufriedene Kunden und ein Service über Grenzen hinweg',
    body: [
      'In ACC Plaza, unserem neuen 1.000 m² großen Hauptsitz im Herzen von Yeşilbahçe (Muratpaşa), setzen wir neue Maßstäbe für Immobilieninvestitionen und gehobenes Wohnen. Wir sind mehr als ein Maklerbüro: ein internationales Investitionszentrum, das die besten autorisierten Projekte der Region, globale Investitionsmöglichkeiten und professionelle Immobilienverwaltung unter einem Dach vereint.',
      'Mit 50 erfahrenen Partnern und Service in 10 Sprachen begleiten wir Ihre Investition sorgfältig und transparent – wo auch immer Sie sind. Unsere Stärke sind Hunderte erfolgreiche Referenzen. Besuchen Sie uns auf einen Kaffee in ACC Plaza.',
    ],
    badges: [
      ['🏢', '1.000 m² Hauptsitz', 'Modernes Büro in Yeşilbahçe, Muratpaşa'],
      ['🤝', '50 Partner', 'Experten für jede Region und jedes Projekt'],
      ['🌍', 'Service in 10 Sprachen', 'Betreuung in Ihrer Muttersprache, auch auf Deutsch'],
      ['💎', 'Exklusive Projekte', 'Autorisierte Portfolios nur bei ACC Homes'],
    ],
    cta1: 'Unser Team kennenlernen', cta2: 'Route zu ACC Plaza',
  },
  fa: {
    eyebrow: 'ACC PLAZA · دفتر مرکزی',
    title: 'ACC PLAZA: پیشروترین مرکز املاک آنتالیا',
    sub: 'صدها مشتری راضی و خدماتی فراتر از مرزها',
    body: [
      'در ACC Plaza، دفتر مرکزی جدید ما با ۱۰۰۰ متر مربع مساحت در قلب یشیل‌باغچه (مورات‌پاشا)، استاندارد تازه‌ای برای سرمایه‌گذاری در ملک و زندگی مجلل ارائه می‌کنیم. ما فقط یک دفتر املاک نیستیم؛ مرکزی بین‌المللی هستیم که بهترین پروژه‌های رسمی منطقه، فرصت‌های سرمایه‌گذاری جهانی و مدیریت حرفه‌ای ملک را زیر یک سقف گرد آورده است.',
      'با ۵۰ همکار متخصص و خدمات پیوسته به ۱۰ زبان، هر جای دنیا که باشید روند سرمایه‌گذاری شما را با دقت و شفافیت مدیریت می‌کنیم. شما را برای صرف یک فنجان قهوه به ACC Plaza دعوت می‌کنیم.',
    ],
    badges: [
      ['🏢', 'دفتر مرکزی ۱۰۰۰ متری', 'فضای کاری مدرن در یشیل‌باغچه'],
      ['🤝', '۵۰ همکار متخصص', 'آشنا به هر منطقه و هر پروژه'],
      ['🌍', 'خدمات به ۱۰ زبان', 'پشتیبانی به زبان مادری شما، از جمله فارسی'],
      ['💎', 'پروژه‌های انحصاری', 'سبد املاکی که فقط از طریق ACC Homes عرضه می‌شود'],
    ],
    cta1: 'آشنایی با تیم ما', cta2: 'مسیریابی به ACC Plaza',
  },
};

const TIMELINE_X = {
  de: [['2023', 'Ali Caner Can wird bester Berater des Jahres bei Realty World MES Real Estate.'], ['2024', 'Gründung von ACC HOMES International Real Estate.'], ['2025', 'Wachstum von Team und Portfolio unter dem Motto „Excellence in Real Estate“.'], ['2026', 'Eröffnung des 1.000 m² großen Hauptsitzes ACC Plaza; autorisiertes Verkaufsbüro für Prime Lara und Antalle; rund 50 Partner.']],
  fa: [['2023', 'علی جانر جان به‌عنوان بهترین مشاور سال در Realty World MES Real Estate انتخاب شد.'], ['2024', 'تأسیس ACC HOMES International Real Estate.'], ['2025', 'رشد تیم و سبد املاک با شعار «Excellence in Real Estate».'], ['2026', 'افتتاح دفتر مرکزی ۱۰۰۰ متری ACC Plaza؛ دفتر فروش رسمی Prime Lara و Antalle؛ حدود ۵۰ همکار.']],
};

const LANGS_SPOKEN_X = {
  de: ['Türkisch', 'Englisch', 'Russisch', 'Ukrainisch', 'Deutsch', 'Französisch', 'Niederländisch', 'Spanisch', 'Arabisch', 'Persisch'],
  fa: ['ترکی', 'انگلیسی', 'روسی', 'اوکراینی', 'آلمانی', 'فرانسوی', 'هلندی', 'اسپانیایی', 'عربی', 'فارسی'],
};

const ROLES_X = {
  'Ali Caner Can': { de: 'Broker & Gründer', fa: 'بروکر و بنیان‌گذار' },
  'Esma Özdal': { de: 'Generalkoordinatorin', fa: 'هماهنگ‌کننده کل' },
  'Okan Akgün': { de: 'Büroleiter', fa: 'مدیر دفتر' },
  'Melissa Enriquez Sedita': { de: 'CRM & internationaler Vertrieb', fa: 'مسئول CRM و فروش بین‌المللی' },
  'Adnan Konuk': { de: 'Projektkoordinator', fa: 'هماهنگ‌کننده پروژه' },
  'Naz Bensu Taşbaş': { de: 'Social-Media-Spezialistin', fa: 'کارشناس شبکه‌های اجتماعی' },
  'Derya Plyatner': { de: 'Grafikdesignerin', fa: 'کارشناس طراحی گرافیک' },
  'Zeynep Çarıkçı': { de: 'Büroservice', fa: 'خدمات دفتر' },
  'Kamil Bey': { de: 'Bürokater', fa: 'گربه دفتر' },
};

const PAGES_X = {
  about: {
    seg: { de: 'ueber-uns', fa: 'darbare-ma' }, nav: { de: 'Über uns', fa: 'درباره ما' },
    de: {
      title: 'Über uns', desc: 'ACC HOMES International Real Estate: professionelles Immobilienbüro in Antalya mit rund 50 Partnern und Service in 10 Sprachen.',
      lead: 'Ein internationales Immobilienbüro in Antalya: professionelle Standards, Transparenz und datenbasierte Beratung.',
      html: `
<h2>Unsere Geschichte</h2>
<p>ACC HOMES International Real Estate wurde 2024 in Antalya von Broker <a href="{{URL:broker}}">Ali Caner Can</a> gegründet, einem Maschinenbauingenieur mit langjähriger Erfahrung im Konzernvertrieb internationaler Unternehmen. Unser Ziel: professionelle Disziplin, datenbasierte Preisfindung und echten Kundenservice in die Immobilienbranche zu bringen.</p>
<p>Heute betreuen rund 50 Partner von unserem 1.000 m² großen Hauptsitz ACC Plaza (Yeşilbahçe, Muratpaşa) aus Kunden in 10 Sprachen: Kauf und Miete von Wohnungen, Villen, Neubauprojekte, Gewerbeimmobilien und Investitionsberatung.</p>
{{STATS}}
<h2>ACC Plaza</h2>
{{OFFICE}}
<h2>So arbeiten wir</h2>
<div class="cards3">
<div><h3>Datenbasierte Preise</h3><p>Jede Immobilie wird mit Vergleichsverkäufen und Marktdaten bewertet.</p></div>
<div><h3>360°-Marketing</h3><p>Profifotos, Drohne und Video, Portale, Meta-Werbung und internationale Vermarktung.</p></div>
<div><h3>Transparent bis zum Grundbuch</h3><p>Vertrag, Besichtigungen, Verhandlung, Bank und Grundbucheintragung – alles dokumentiert.</p></div>
</div>
<h2>Unser Weg</h2>
{{TIMELINE}}
<h2>Autorisierte Projekte</h2>
<p>ACC HOMES ist das autorisierte Verkaufsbüro für <b>Prime Lara</b> (Ekiciler Grup, Altıntaş) und <b>Antalle Concept Houses</b> (Döşemealtı, Altınkale).</p>
<div class="ctas"><a class="btn" href="{{URL:team}}">Unser Team</a><a class="btn ghost" href="{{URL:services}}">Leistungen</a></div>`,
    },
    fa: {
      title: 'درباره ما', desc: 'ACC HOMES International Real Estate: دفتر املاک حرفه‌ای در آنتالیا با حدود ۵۰ همکار و خدمات به ۱۰ زبان.',
      lead: 'یک دفتر املاک بین‌المللی در آنتالیا: استانداردهای حرفه‌ای، شفافیت و مشاوره مبتنی بر داده.',
      html: `
<h2>داستان ما</h2>
<p>ACC HOMES International Real Estate در سال ۲۰۲۴ در آنتالیا توسط <a href="{{URL:broker}}">علی جانر جان</a> تأسیس شد؛ مهندس مکانیک با سابقه طولانی در فروش سازمانی شرکت‌های بین‌المللی. هدف ما آوردن نظم حرفه‌ای، قیمت‌گذاری مبتنی بر داده و خدمات واقعی به مشتری در صنعت املاک است.</p>
<p>امروز حدود ۵۰ همکار از دفتر مرکزی ۱۰۰۰ متری ACC Plaza (یشیل‌باغچه، مورات‌پاشا) به ۱۰ زبان به مشتریان خدمت می‌کنند: خرید و اجاره آپارتمان، ویلا، پروژه‌های نوساز، املاک تجاری و مشاوره سرمایه‌گذاری.</p>
{{STATS}}
<h2>ACC Plaza</h2>
{{OFFICE}}
<h2>روش کار ما</h2>
<div class="cards3">
<div><h3>قیمت مبتنی بر داده</h3><p>هر ملک با معاملات مشابه و داده‌های بازار ارزیابی می‌شود.</p></div>
<div><h3>بازاریابی ۳۶۰ درجه</h3><p>عکاسی حرفه‌ای، پهپاد و ویدیو، سایت‌های آگهی، تبلیغات متا و بازاریابی بین‌المللی.</p></div>
<div><h3>شفاف تا انتقال سند</h3><p>قرارداد، بازدیدها، مذاکره، بانک و انتقال سند؛ همه مکتوب.</p></div>
</div>
<h2>مسیر ما</h2>
{{TIMELINE}}
<h2>پروژه‌های رسمی</h2>
<p>ACC HOMES دفتر فروش رسمی پروژه <b>Prime Lara</b> (Ekiciler Grup، آلتین‌تاش) و <b>Antalle Concept Houses</b> (دوشمه‌آلتی، آلتین‌قلعه) است.</p>
<div class="ctas"><a class="btn" href="{{URL:team}}">تیم ما</a><a class="btn ghost" href="{{URL:services}}">خدمات</a></div>`,
    },
  },
  broker: {
    seg: { de: 'ali-caner-can', fa: 'ali-caner-can' }, nav: { de: 'Ali Caner Can', fa: 'علی جانر جان' },
    de: {
      title: 'Ali Caner Can – Broker & Gründer', desc: 'Ali Caner Can, Broker und Gründer von ACC HOMES: Maschinenbauingenieur, Erfahrung im Konzernvertrieb, über 290 Transaktionen in Antalya.',
      lead: 'Ingenieursdisziplin, Erfahrung im Konzernvertrieb und tiefe Kenntnis des Marktes in Antalya.',
      html: `
<div class="bio">
<div class="biophoto">{{BROKER_PHOTO}}</div>
<div>
<p>Ali Caner Can studierte Maschinenbau an der Technischen Universität Yıldız. Vor seinem Einstieg in die Immobilienbranche arbeitete er in Führungs- und Vertriebspositionen bei Kraft Heinz, Nestlé, Hasbro, Reckitt Benckiser und Bosch.</p>
<p>Er kam nach Antalya, ohne dort jemanden zu kennen. Bei Realty World MES Real Estate begleitete er Hunderte Transaktionen und wurde 2023 bester Berater des Büros. 2024 gründete er ACC HOMES International Real Estate.</p>
<p>Heute leitet er in ACC Plaza ein Team von rund 50 Partnern und blickt auf über 290 Transaktionen zurück, darunter Verkäufe an Käufer aus Europa, Russland und der Ukraine.</p>
<p><a href="{{IG_CANER}}" target="_blank" rel="noopener">Instagram: @alicanercan.therealtor →</a></p>
</div></div>
<div class="ctas"><a class="btn" href="{{WA}}" target="_blank" rel="noopener">Per WhatsApp schreiben</a><a class="btn ghost" href="{{TEL}}">Anrufen</a></div>`,
    },
    fa: {
      title: 'علی جانر جان، بروکر و بنیان‌گذار', desc: 'علی جانر جان، بروکر و بنیان‌گذار ACC HOMES: مهندس مکانیک، با سابقه فروش سازمانی و بیش از ۲۹۰ معامله در آنتالیا.',
      lead: 'نظم مهندسی، تجربه فروش سازمانی و شناخت عمیق بازار آنتالیا.',
      html: `
<div class="bio">
<div class="biophoto">{{BROKER_PHOTO}}</div>
<div>
<p>علی جانر جان دانش‌آموخته مهندسی مکانیک از دانشگاه فنی ییلدیز است. پیش از ورود به حوزه املاک، در سمت‌های مدیریتی و فروش سازمانی در Kraft Heinz، Nestlé، Hasbro، Reckitt Benckiser و Bosch کار کرده است.</p>
<p>او بدون هیچ آشنایی به آنتالیا آمد. در Realty World MES Real Estate صدها معامله انجام داد و در سال ۲۰۲۳ بهترین مشاور دفتر شد. در سال ۲۰۲۴ شرکت ACC HOMES International Real Estate را تأسیس کرد.</p>
<p>امروز تیمی حدوداً ۵۰ نفره را در ACC Plaza رهبری می‌کند و بیش از ۲۹۰ معامله در کارنامه دارد، از جمله فروش به خریدارانی از اروپا، روسیه و اوکراین.</p>
<p><a href="{{IG_CANER}}" target="_blank" rel="noopener">اینستاگرام: ‎@alicanercan.therealtor</a></p>
</div></div>
<div class="ctas"><a class="btn" href="{{WA}}" target="_blank" rel="noopener">پیام در واتس‌اپ</a><a class="btn ghost" href="{{TEL}}">تماس</a></div>`,
    },
  },
  team: {
    seg: { de: 'team', fa: 'tim-ma' }, nav: { de: 'Unser Team', fa: 'تیم ما' },
    de: {
      title: 'Unser Team', desc: 'Das Team von ACC HOMES: Broker, Verwaltungs- und Supportteam sowie rund 50 Partner mit Service in 10 Sprachen.',
      lead: 'Rund 50 Partner, 10 Sprachen und ein Ziel: ein professionelles, verlässliches Erlebnis für jeden Kunden.',
      html: `
{{TEAMPHOTOS}}
<h2>Leitung und Support</h2>
{{TEAM}}
<h2>Unsere Partner</h2>
<p>Unsere Berater nennen wir <b>Partner</b>. Sie betreuen Wohnungen, Villen, Neubauprojekte, Gewerbeimmobilien und Grundstücke, unterstützt von unserem Foto- und Videoteam, Social Media und Design, CRM und regelmäßigen Schulungen der ACC Academy.</p>
{{PARTNERS}}
<h3>Unsere Sprachen</h3>
{{LANGS}}
<div class="ctas"><a class="btn" href="{{URL:contact}}">Kontakt aufnehmen</a></div>`,
    },
    fa: {
      title: 'تیم ما', desc: 'تیم ACC HOMES: بروکر، تیم پشتیبانی و حدود ۵۰ همکار با خدمات به ۱۰ زبان.',
      lead: 'حدود ۵۰ همکار، ۱۰ زبان و یک هدف: تجربه‌ای حرفه‌ای و قابل اعتماد برای هر مشتری.',
      html: `
{{TEAMPHOTOS}}
<h2>مدیریت و پشتیبانی</h2>
{{TEAM}}
<h2>همکاران ما</h2>
<p>ما مشاوران خود را <b>همکار</b> می‌نامیم. آن‌ها با پشتیبانی تیم عکاسی و ویدیو، شبکه‌های اجتماعی و طراحی، CRM و آموزش‌های منظم ACC Academy، در زمینه آپارتمان، ویلا، پروژه‌های نوساز، املاک تجاری و زمین فعالیت می‌کنند.</p>
{{PARTNERS}}
<h3>زبان‌های خدمات ما</h3>
{{LANGS}}
<div class="ctas"><a class="btn" href="{{URL:contact}}">تماس با ما</a></div>`,
    },
  },
  services: {
    seg: { de: 'leistungen', fa: 'khadamat' }, nav: { de: 'Leistungen', fa: 'خدمات' },
    de: {
      title: 'Unsere Leistungen', desc: 'Leistungen von ACC HOMES: Verkauf und Vermietung, Immobilienverwaltung, Projektvermarktung, Verkauf an ausländische Käufer, Bewertung und Investitionsberatung.',
      lead: 'Alle Immobilienleistungen aus einer Hand – vom Verkauf bis zur Betreuung internationaler Investoren.',
      html: `
<h2>Vor dem Kauf</h2>
<div class="svc">
<div><span>🏠</span><h3>Verkauf</h3><p>Datenbasierter Preis, professionelle Präsentation und Begleitung bis zum Grundbuch.</p></div>
<div><span>🔑</span><h3>Vermietung</h3><p>Mietersuche, Vertrag und Übergabe – transparent für beide Seiten.</p></div>
<div><span>🛠️</span><h3>Verwaltung</h3><p>Mietzahlungen, Kontakt zu Mietern und Lösungen das ganze Jahr.</p></div>
<div><span>🏗️</span><h3>Projektvermarktung</h3><p>Verkaufsbüro, Koordination und 360°-Marketing für Bauträger.</p></div>
<div><span>🌍</span><h3>Ausländische Käufer</h3><p>Service in 10 Sprachen, Hilfe bei Grundbuch und Vollmacht.</p></div>
<div><span>📊</span><h3>Bewertung</h3><p>Preisbericht auf Basis von Vergleichstransaktionen.</p></div>
<div><span>📈</span><h3>Investition</h3><p>Analyse von Mietrendite und Wertsteigerung.</p></div>
<div><span>🏬</span><h3>Gewerbe und Grundstücke</h3><p>Läden, Büros, Hotels und Investitionsgrundstücke.</p></div>
</div>
<h2>Nach dem Kauf</h2>
<ul class="ticks cols2"><li>Anmeldung von Strom, Wasser, Gas und Internet</li><li>DASK-Erdbebenversicherung und Hausratversicherung</li><li>Steuernummer und Bankkonto</li><li>Möblierung und Einkaufsbegleitung</li><li>Vermietung und Verwaltung</li><li>Unterlagen für Aufenthaltserlaubnis und Staatsbürgerschaft</li></ul>
<div class="ctas"><a class="btn" href="{{WA}}" target="_blank" rel="noopener">Kostenlose Bewertung</a><a class="btn ghost" href="{{URL:contact}}">Kontakt</a></div>`,
    },
    fa: {
      title: 'خدمات ما', desc: 'خدمات ACC HOMES: فروش و اجاره، مدیریت ملک، بازاریابی پروژه، فروش به خریداران خارجی، ارزیابی و مشاوره سرمایه‌گذاری.',
      lead: 'همه خدمات املاک در یک جا؛ از فروش و اجاره تا همراهی سرمایه‌گذاران خارجی.',
      html: `
<h2>پیش از خرید</h2>
<div class="svc">
<div><span>🏠</span><h3>فروش</h3><p>قیمت‌گذاری مبتنی بر داده، معرفی حرفه‌ای و همراهی تا انتقال سند.</p></div>
<div><span>🔑</span><h3>اجاره</h3><p>یافتن مستأجر، قرارداد و تحویل ملک؛ شفاف برای هر دو طرف.</p></div>
<div><span>🛠️</span><h3>مدیریت ملک</h3><p>پیگیری اجاره‌بها، ارتباط با مستأجر و حل مسائل در تمام سال.</p></div>
<div><span>🏗️</span><h3>بازاریابی پروژه</h3><p>دفتر فروش، هماهنگی و بازاریابی ۳۶۰ درجه برای سازندگان.</p></div>
<div><span>🌍</span><h3>خریداران خارجی</h3><p>خدمات به ۱۰ زبان از جمله فارسی، کمک در انتقال سند و وکالت‌نامه.</p></div>
<div><span>📊</span><h3>ارزیابی</h3><p>گزارش قیمت بر پایه معاملات مشابه.</p></div>
<div><span>📈</span><h3>سرمایه‌گذاری</h3><p>تحلیل بازده اجاره و رشد ارزش ملک.</p></div>
<div><span>🏬</span><h3>تجاری و زمین</h3><p>مغازه، دفتر کار، هتل و زمین سرمایه‌گذاری.</p></div>
</div>
<h2>پس از خرید</h2>
<ul class="ticks cols2"><li>ثبت انشعاب برق، آب، گاز و اینترنت</li><li>بیمه زلزله DASK و بیمه منزل</li><li>شماره مالیاتی و حساب بانکی</li><li>مبلمان و همراهی در خرید</li><li>اجاره و مدیریت ملک</li><li>مدارک اقامت و شهروندی</li></ul>
<div class="ctas"><a class="btn" href="{{WA}}" target="_blank" rel="noopener">ارزیابی رایگان</a><a class="btn ghost" href="{{URL:contact}}">تماس</a></div>`,
    },
  },
  join: {
    seg: { de: 'karriere', fa: 'hamkari' }, nav: { de: 'Karriere', fa: 'همکاری با ما' },
    de: {
      title: 'Karriere bei ACC HOMES', desc: 'ACC HOMES sucht Partner: keine Arbeitsplatzgebühr, keine Monatsbeiträge, 70 % der Provision für den Partner.',
      lead: 'Wir suchen keine Angestellten, sondern Partner.',
      html: `
<div class="cards3">
<div><h3>Keine Platzgebühr</h3><p>Keine Fixkosten und keine monatlichen Beiträge.</p></div>
<div><h3>70 % für Sie</h3><p>Von jeder Transaktion erhalten Sie 70 %, das Büro 30 %.</p></div>
<div><h3>Starkes Supportteam</h3><p>Foto und Video, Personal Branding, Social Media, CRM und ACC Academy.</p></div>
</div>
<div class="ctas"><a class="btn" href="{{WA_JOIN}}" target="_blank" rel="noopener">Per WhatsApp schreiben</a></div>`,
    },
    fa: {
      title: 'همکاری با ACC HOMES', desc: 'ACC HOMES همکار می‌پذیرد: بدون هزینه میز و حق عضویت ماهانه، ۷۰٪ کمیسیون سهم همکار.',
      lead: 'ما به دنبال کارمند نیستیم؛ به دنبال همکار هستیم.',
      html: `
<div class="cards3">
<div><h3>بدون هزینه میز</h3><p>بدون هزینه ثابت و حق عضویت ماهانه.</p></div>
<div><h3>۷۰٪ سهم شما</h3><p>از هر معامله ۷۰٪ به شما و ۳۰٪ به دفتر می‌رسد.</p></div>
<div><h3>تیم پشتیبانی قوی</h3><p>عکاسی و ویدیو، برند شخصی، شبکه‌های اجتماعی، CRM و آموزش ACC Academy.</p></div>
</div>
<div class="ctas"><a class="btn" href="{{WA_JOIN}}" target="_blank" rel="noopener">پیام در واتس‌اپ</a></div>`,
    },
  },
};

export function extend({ PAGES, PLAZA, TIMELINE, LANGS_SPOKEN, TEAM, GUIDE_SEG, GUIDE_TITLE, GUIDE_LEAD, SITE, T, LANG_NAMES, PARTNER_ROLE, SWORN_ROLE }) {
  for (const p of PACKS) {
    const c = p.code;
    T[c] = p.T; PLAZA[c] = p.plaza; TIMELINE[c] = p.timeline; LANGS_SPOKEN[c] = p.langsSpoken;
    for (const [k, v] of Object.entries(p.S)) if (S[k]) S[k][c] = v;
    SEGS.projects[c] = p.segs.projects; if (p.segs.favorites) SEGS.favorites[c] = p.segs.favorites; SEGS.reviews[c] = p.segs.reviews;
    GUIDE_SEG[c] = p.segs.buyersguide; GUIDE_TITLE[c] = p.guide.title; GUIDE_LEAD[c] = p.guide.lead;
    SITE.slogan[c] = p.slogan; LANG_NAMES[c] = p.langNames; PARTNER_ROLE[c] = p.partnerRole; SWORN_ROLE[c] = p.swornRole;
    for (const m of TEAM) if (p.roles[m.name]) m.role[c] = p.roles[m.name];
    for (const [k, pg] of Object.entries(p.pages || corpPages(p.corp))) {
      if (!PAGES[k]) continue;
      PAGES[k].seg[c] = pg.seg; PAGES[k].nav[c] = pg.nav;
      PAGES[k][c] = { title: pg.title, desc: pg.desc, lead: pg.lead, html: pg.html };
    }
  }
  Object.assign(PLAZA, PLAZA_X);
  Object.assign(TIMELINE, TIMELINE_X);
  Object.assign(LANGS_SPOKEN, LANGS_SPOKEN_X);
  for (const [k, x] of Object.entries(PAGES_X)) {
    if (!PAGES[k]) continue;
    Object.assign(PAGES[k].seg, x.seg); Object.assign(PAGES[k].nav, x.nav);
    PAGES[k].de = x.de; PAGES[k].fa = x.fa;
  }
  for (const p of TEAM) Object.assign(p.role, ROLES_X[p.name] || {});
  Object.assign(GUIDE_SEG, { de: 'kaeuferratgeber', fa: 'rahnama-kharid' });
  Object.assign(GUIDE_TITLE, { de: 'Käuferratgeber', fa: 'راهنمای خریدار' });
  Object.assign(GUIDE_LEAD, {
    de: 'Alles Wichtige zum Immobilienkauf in der Türkei und in Antalya: Ablauf, Unterlagen, Kosten, Staatsbürgerschaft, Aufenthaltserlaubnis und Grundbuch (Artikel auf Englisch).',
    fa: 'هر آنچه برای خرید ملک در ترکیه و آنتالیا باید بدانید: مراحل، مدارک، هزینه‌ها، شهروندی، اقامت و سند (مقالات به زبان انگلیسی).',
  });
  Object.assign(SITE.slogan, { de: 'Excellence in Real Estate', fa: 'Excellence in Real Estate' });
}
