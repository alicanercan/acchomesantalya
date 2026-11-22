// Altıntaş SEO: uzun kuyruk açılış sayfaları, ana sayfa rehber metni, veri tabanlı SSS, popüler aramalar.
// Rakamlar yalnızca kendi portföyümüzden derleme anında hesaplanır; fiyat artışı / getiri vaadi yok.

const isRoom = (l, n) => parseInt(l.oda) === n;
const isVilla = (l) => /villa|müstakil/i.test(l.altTip || '') && !/imarlı/i.test(l.altTip || '');
const isLand = (l) => l.emlakTipi === 'arsa' || /imarlı|arsa|tarla/i.test(l.altTip || '');
const isShop = (l) => l.emlakTipi === 'isyeri' || /dükkan|mağaza|depo|restoran|ofis|işyeri/i.test(l.altTip || '');
const isFlat = (l) => !isVilla(l) && !isLand(l) && !isShop(l);

export const LAND = [
  { k: 'l_s11', f: (l) => l.tip === 'Satılık' && isFlat(l) && isRoom(l, 1),
    seg: { tr: 'satilik-1-1-daire', en: '1-bedroom-apartments-for-sale', ru: 'kvartiry-1-1-na-prodazhu' },
    h: { tr: 'Altıntaş satılık 1+1 daire', en: '1+1 apartments for sale in Altıntaş', ru: 'Квартиры 1+1 на продажу в Алтынташе' },
    p: { tr: 'Altıntaş’ta 1+1 daireler kiraya verme ve ilk yatırım için en çok aranan tip. Yeni projelerde 1+1’ler çoğunlukla 32–60 m² net arasında; net alanı küçük olan dairelerde kiracı da alıcı da daha seçici. Aşağıdaki ilanların her biri yerinde gördüğümüz, tapu ve imar durumunu kontrol ettiğimiz portföylerdir.', en: '1+1 apartments are the most searched type in Altıntaş for letting and first investments. In new projects they are mostly 32–60 m² net; buyers and tenants are more selective on small net areas. Every listing below has been seen on site and checked for title deed and zoning.', ru: 'Квартиры 1+1 — самый востребованный тип в Алтынташе для сдачи в аренду и первой инвестиции. В новых проектах это обычно 32–60 м² полезной площади. Каждый объект ниже мы осмотрели и проверили тапу и градостроительный статус.' } },
  { k: 'l_s21', f: (l) => l.tip === 'Satılık' && isFlat(l) && isRoom(l, 2),
    seg: { tr: 'satilik-2-1-daire', en: '2-bedroom-apartments-for-sale', ru: 'kvartiry-2-1-na-prodazhu' },
    h: { tr: 'Altıntaş satılık 2+1 daire', en: '2+1 apartments for sale in Altıntaş', ru: 'Квартиры 2+1 на продажу в Алтынташе' },
    p: { tr: 'Altıntaş’ta talep son dönemde 1+1’lerden 2+1’lere kaydı: küçük net alanlı 1+1’ler aileler için dar kalıyor, 2+1’ler hem oturum hem kiralama için daha geniş bir alıcı kitlesine hitap ediyor. Havuzlu sitelerde, ana yola yakın ve otoparklı 2+1 seçeneklerimizi aşağıda bulabilirsiniz.', en: 'Demand in Altıntaş has shifted from 1+1 to 2+1: small 1+1 units feel tight for families, while 2+1 apartments suit both living and letting. Our 2+1 options in complexes with pools, parking and good road access are listed below.', ru: 'Спрос в Алтынташе сместился с 1+1 на 2+1: маленькие 1+1 тесноваты для семьи, а 2+1 подходят и для жизни, и для аренды. Ниже — наши варианты 2+1 в комплексах с бассейном и парковкой.' } },
  { k: 'l_s31', f: (l) => l.tip === 'Satılık' && isFlat(l) && parseInt(l.oda) >= 3,
    seg: { tr: 'satilik-3-1-ve-dubleks-daire', en: '3-bedroom-and-duplex-apartments-for-sale', ru: 'kvartiry-3-1-i-dupleksy-na-prodazhu' },
    h: { tr: 'Altıntaş satılık 3+1, 4+1 ve dubleks daire', en: '3+1, 4+1 and duplex apartments for sale in Altıntaş', ru: 'Квартиры 3+1, 4+1 и дуплексы в Алтынташе' },
    p: { tr: 'Geniş aileler ve kalıcı oturum düşünenler için Altıntaş’taki 3+1, 4+1, bahçe ve çatı dubleksi seçenekleri. Bu tiplerde site olanakları, cephe ve kat seçimi fiyatı belirgin biçimde etkiliyor; karşılaştırmalı fiyat analizini sizinle paylaşıyoruz.', en: '3+1, 4+1, garden and penthouse duplex options in Altıntaş for larger families and permanent living. Facilities, aspect and floor affect price strongly in these types; we share a comparable price analysis with you.', ru: 'Квартиры 3+1, 4+1, дуплексы с садом и пентхаусы в Алтынташе для больших семей и постоянного проживания. Мы предоставляем сравнительный анализ цен.' } },
  { k: 'l_villa', f: (l) => l.tip === 'Satılık' && isVilla(l),
    seg: { tr: 'satilik-villa', en: 'villas-for-sale', ru: 'villy-na-prodazhu' },
    h: { tr: 'Altıntaş satılık villa', en: 'Villas for sale in Altıntaş', ru: 'Виллы на продажу в Алтынташе' },
    p: { tr: 'Havalimanına ve Lara plajlarına yakınlığıyla Altıntaş, havuzlu müstakil ve ikiz villalar için de tercih ediliyor. Antalya’nın tüm villa portföyü için ACC VILLAS sitemize de göz atabilirsiniz.', en: 'Close to the airport and Lara beaches, Altıntaş is also chosen for detached and semi-detached villas with pools. For all villas across Antalya, see our ACC VILLAS website.', ru: 'Благодаря близости к аэропорту и пляжам Лары Алтынташ выбирают и для вилл с бассейном. Все виллы Анталии — на нашем сайте ACC VILLAS.' } },
  { k: 'l_arsa', f: (l) => l.tip === 'Satılık' && isLand(l),
    seg: { tr: 'satilik-arsa', en: 'land-for-sale', ru: 'uchastki-na-prodazhu' },
    h: { tr: 'Altıntaş satılık arsa ve kat karşılığı', en: 'Land for sale and joint ventures in Altıntaş', ru: 'Участки на продажу в Алтынташе' },
    p: { tr: 'Konut ve villa imarlı arsalar. Altıntaş’ta arsa alırken imar durumu, parselasyon ve tapu şerhi kontrolü kritik; kat karşılığı değerlendirmek isteyen arsa sahiplerini müteahhit ağımızla buluşturuyoruz.', en: 'Residential and villa-zoned plots. Zoning status, parcelling and title-deed annotations are critical in Altıntaş; we also connect landowners with our developer network for joint ventures.', ru: 'Участки под жилую застройку и виллы. В Алтынташе важно проверить градостроительный статус, межевание и обременения в тапу.' } },
  { k: 'l_k11', f: (l) => l.tip === 'Kiralık' && isFlat(l) && isRoom(l, 1),
    seg: { tr: 'kiralik-1-1-daire', en: '1-bedroom-apartments-for-rent', ru: 'arenda-kvartir-1-1' },
    h: { tr: 'Altıntaş kiralık 1+1 daire', en: '1+1 apartments for rent in Altıntaş', ru: 'Аренда квартир 1+1 в Алтынташе' },
    p: { tr: 'Altıntaş’ta kiralık daireler çok hızlı kiralanıyor; havalimanı, Lara ve organize iş alanlarına yakınlık kiracı talebini canlı tutuyor. Eşyalı ve eşyasız 1+1 seçenekleri için WhatsApp’tan yazın, yeni gelen ilanları ilk size iletelim.', en: 'Rentals in Altıntaş let very quickly; proximity to the airport and Lara keeps demand high. Message us on WhatsApp for furnished and unfurnished 1+1 options and we will send new listings first.', ru: 'Квартиры в аренду в Алтынташе сдаются очень быстро. Напишите нам в WhatsApp — мы первыми пришлём новые варианты 1+1.' } },
  { k: 'l_k21', f: (l) => l.tip === 'Kiralık' && isFlat(l) && parseInt(l.oda) >= 2,
    seg: { tr: 'kiralik-2-1-daire', en: '2-bedroom-apartments-for-rent', ru: 'arenda-kvartir-2-1' },
    h: { tr: 'Altıntaş kiralık 2+1 ve 3+1 daire', en: '2+1 and 3+1 apartments for rent in Altıntaş', ru: 'Аренда квартир 2+1 и 3+1 в Алтынташе' },
    p: { tr: 'Aileler için site içinde, havuzlu ve otoparklı kiralık 2+1 ve 3+1 daireler. Kira sözleşmesi, depozito ve teslim tutanağını sizin için hazırlıyoruz.', en: 'Family apartments for rent in complexes with pools and parking. We prepare the lease, deposit terms and handover report for you.', ru: 'Семейные квартиры в аренду в комплексах с бассейном и парковкой. Готовим договор аренды и акт передачи.' } },
  { k: 'l_ticari', f: (l) => isShop(l),
    seg: { tr: 'dukkan-ve-isyeri', en: 'shops-and-commercial', ru: 'kommercheskaya-nedvizhimost' },
    h: { tr: 'Altıntaş satılık ve kiralık dükkân, işyeri', en: 'Shops and commercial property in Altıntaş', ru: 'Магазины и коммерческая недвижимость в Алтынташе' },
    p: { tr: 'Kardeş Kentler Caddesi ve ana yollar üzerinde bütçe dostu dükkânlar, depo ve restoran devirleri. Hızla dolan yeni sitelerin çevresinde ticari alan talebi artıyor.', en: 'Budget-friendly shops on Kardeş Kentler Avenue and main roads, plus warehouse and restaurant transfers. Demand for commercial space grows around the fast-filling new complexes.', ru: 'Недорогие магазины на проспекте Кардеш Кентлер и главных дорогах, склады и передача ресторанов.' } },
  { k: 'l_yab', f: (l) => l.tip === 'Satılık' && !isLand(l),
    seg: { tr: 'yabancilar-icin-altintas', en: 'buying-property-in-altintas-as-a-foreigner', ru: 'pokupka-nedvizhimosti-inostrancem-altyntash' },
    h: { tr: 'Yabancılar Altıntaş’tan ev alabilir mi?', en: 'Buying property in Altıntaş as a foreigner', ru: 'Покупка недвижимости в Алтынташе иностранцем' },
    p: { tr: 'Yabancı uyruklu alıcılar Türkiye’de konut satın alabilir; ancak Altıntaş’ın bazı bölümleri yabancılara satışa kapalı. Bu nedenle her parseli tapu müdürlüğü ve askeri/güvenlik bölgesi açısından önceden kontrol ediyoruz. Yabancıya satışta lisanslı değerleme (ekspertiz) raporu zorunlu; vatandaşlık başvurusu için en az 400.000 ABD doları değerinde gayrimenkul ve üç yıl satmama şerhi gerekiyor.', en: 'Foreign nationals can buy residential property in Türkiye, but some parts of Altıntaş are closed to sales to foreigners. We therefore check every plot in advance with the land registry and for military/security zones. A licensed valuation report is mandatory for sales to foreigners; citizenship by investment requires property worth at least USD 400,000 and a three-year no-sale annotation.', ru: 'Иностранцы могут покупать жильё в Турции, но часть Алтынташа закрыта для продажи иностранцам, поэтому мы заранее проверяем каждый участок в кадастре и на предмет военных/охранных зон. При продаже иностранцу обязателен лицензированный отчёт об оценке; для гражданства нужна недвижимость не менее 400 000 долларов США и запрет на продажу три года.' } },
];

// Ana sayfa "Altıntaş satılık daire rehberi" (footer üstü uzun metin)
export const HOMESEO = {
  tr: { h: 'Altıntaş satılık daire rehberi', secs: [
    ['Altıntaş nerede, neden bu kadar aranıyor?', 'Altıntaş, Antalya’nın Aksu ilçesinde; Antalya Havalimanı, Lara plajları, Expo alanı ve Muratpaşa’ya birkaç dakika, Belek’e kısa bir sürüş mesafesinde. Şehrin en yeni ve en geniş imar alanlarından biri olduğu için eski yapı stoku yok denecek kadar az; bölge büyük ölçüde havuzlu, güvenlikli yeni sitelerden oluşuyor. Ana aks Kardeş Kentler Caddesi; çevresinde gündelik ihtiyaçlar için market, kafe ve mağazalar hızla çoğalıyor.'],
    ['Hangi daire tipi daha çok tercih ediliyor?', 'İlk dalga projelerde 1+1’ler öne çıktı; ancak net alanı 32–33 m²’ye kadar düşen 1+1’ler aileler için dar kalınca talep 2+1’lere kaydı. Bugün hem oturum hem kiralama için en dengeli tip 2+1; 3+1 ve dubleksler kalıcı yaşam için aranıyor.'],
    ['Kiralık piyasası nasıl?', 'Altıntaş’ta kiralık daireler çok hızlı kiralanıyor. Ev sahipleri için doğru fiyat ve güvenilir kiracı, kiracılar için ise eşyalı/eşyasız ve site içi seçenekler belirleyici. Dairenizi kiraya verecekseniz ilanı ve kiracı kontrolünü biz yapıyoruz.'],
    ['Altyapı ve imar: alırken neye bakmalı?', 'Bölgede elektrik (CK Akdeniz), su ve kanalizasyon (ASAT), doğalgaz ve asfalt çalışmaları sokak sokak tamamlanıyor; alacağınız binanın bağlantılarının bitip bitmediğini kontrol etmek gerekiyor. 2026’da verilen parselasyon iptali kararından sonra tapulara şerh konuldu; imar planları iptal edilmedi. Her portföyde tapu, imar ve şerh durumunu ayrıca inceliyoruz.'],
    ['Yabancı alıcılar ve gurbetçiler', 'Altıntaş, havalimanına yakınlığı nedeniyle yurt dışında yaşayan Türkler ve yabancı alıcılar için de cazip. Bazı bölgeler yabancılara satışa kapalı olduğu için parsel bazında önceden kontrol yapıyor, sürecin tamamını TR/EN/RU olarak yürütüyoruz.'],
    ['Evinizi satmak mı istiyorsunuz?', 'Altıntaş’taki dairenizi, arsanızı veya dükkânınızı satmak ya da kiralamak için ücretsiz ekspertiz ve emsal analizi yapıyoruz. Satış sürecini yerinde görüşmeden tapu devrine kadar biz yönetiyoruz.'] ] },
  en: { h: 'Guide to buying an apartment in Altıntaş', secs: [
    ['Where is Altıntaş and why is it in demand?', 'Altıntaş is in the Aksu district of Antalya, minutes from Antalya Airport, the Lara beaches, the Expo area and Muratpaşa, and a short drive from Belek. As one of the city’s newest zoning areas it has very little old housing; most homes are in new gated complexes with pools. The main axis is Kardeş Kentler Avenue, where shops and cafés are multiplying.'],
    ['Which apartment type is most popular?', 'Early projects focused on 1+1 units, but with net areas as small as 32–33 m², demand has shifted to 2+1 apartments, which now offer the best balance for living and letting. 3+1 and duplexes are sought for permanent living.'],
    ['What is the rental market like?', 'Rentals in Altıntaş let very quickly. We handle listing, pricing and tenant checks for landlords, and furnished or unfurnished options for tenants.'],
    ['Infrastructure and zoning: what to check', 'Electricity, water, gas and asphalt works are being completed street by street, so connections must be checked building by building. After the 2026 court decision annulling the parcelling, annotations were placed on title deeds; zoning plans were not annulled. We check title, zoning and annotations for every property.'],
    ['Foreign buyers', 'Some areas are closed to sales to foreigners, so we check each plot in advance and run the whole process in English and Russian.'],
    ['Selling your home?', 'We offer a free valuation and comparable-sales analysis for apartments, land and shops in Altıntaş, and manage the sale through to title transfer.'] ] },
  ru: { h: 'Гид по покупке квартиры в Алтынташе', secs: [
    ['Где находится Алтынташ и почему он востребован?', 'Алтынташ — район округа Аксу, в нескольких минутах от аэропорта Анталии, пляжей Лары, территории Экспо и Муратпаши. Это одна из новейших зон застройки: почти всё жильё — новые охраняемые комплексы с бассейнами. Главная улица — проспект Кардеш Кентлер.'],
    ['Какие квартиры выбирают чаще?', 'Первые проекты предлагали в основном 1+1, но при полезной площади 32–33 м² спрос сместился к 2+1 — оптимальному варианту для жизни и аренды.'],
    ['Рынок аренды', 'Квартиры в аренду в Алтынташе сдаются очень быстро. Мы готовим объявление, цену и проверку арендатора.'],
    ['Инфраструктура и градостроительный статус', 'Электричество, вода, газ и асфальт подводятся улица за улицей — подключения нужно проверять по каждому дому. После решения суда 2026 года об отмене межевания на тапу внесены отметки; генпланы не отменены. Мы проверяем каждый объект.'],
    ['Иностранные покупатели', 'Часть территории закрыта для продажи иностранцам, поэтому мы заранее проверяем каждый участок и ведём сделку на русском и английском.'],
    ['Хотите продать квартиру?', 'Бесплатная оценка и анализ сравнимых продаж для квартир, участков и магазинов в Алтынташе.'] ] },
};

export const POP = { tr: 'Popüler aramalar', en: 'Popular searches', ru: 'Популярные запросы' };
export const SEOFAQ_T = { tr: 'Altıntaş satılık daire: sık sorulan sorular', en: 'Altıntaş apartments: frequently asked questions', ru: 'Квартиры в Алтынташе: вопросы и ответы' };

// Portföy verisinden SSS (yalnızca kendi ilanlarımız; tarihli)
export function dataFaq(list, lang, date, fmtTL) {
  const tl = list.filter((l) => l.para === 'TL' && l.fiyat > 0);
  if (tl.length < 3) return [];
  const ps = tl.map((l) => l.fiyat).sort((a, b) => a - b); const m2 = tl.filter((l) => l.brut > 0).map((l) => l.fiyat / l.brut);
  const avg = Math.round(ps.reduce((a, b) => a + b, 0) / ps.length / 1000) * 1000; const am2 = m2.length ? Math.round(m2.reduce((a, b) => a + b, 0) / m2.length / 100) * 100 : 0;
  const rooms = {}; for (const l of list) if (l.oda) rooms[l.oda] = (rooms[l.oda] || 0) + 1; const top = Object.entries(rooms).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([k, v]) => `${k} (${v})`).join(', ');
  const q = {
    tr: [[`Altıntaş’ta satılık daire fiyatları ne kadar?`, `${date} itibarıyla ACC HOMES Altıntaş portföyündeki ${tl.length} satılık ilanda fiyatlar ${fmtTL(ps[0])} ile ${fmtTL(ps[ps.length - 1])} arasında; ortalama ${fmtTL(avg)}. Bu rakamlar ilan fiyatıdır, gerçekleşen satış fiyatı değildir.`],
      ...(am2 ? [[`Altıntaş’ta metrekare fiyatı ortalama ne kadar?`, `Portföyümüzdeki satılık ilanlarda brüt metrekare başına ortalama ilan fiyatı yaklaşık ${fmtTL(am2)} (${date}). Site olanakları, kat, cephe ve bina yaşı fiyatı belirgin biçimde etkiler; daireniz için ücretsiz emsal analizi yapıyoruz.`]] : []),
      [`Altıntaş’ta en çok hangi daire tipleri satılıyor?`, `Portföyümüzde en çok bulunan tipler: ${top}. Talep son dönemde 1+1’lerden 2+1’lere kaydı.`],
      [`Altıntaş’ta daire alırken nelere dikkat edilmeli?`, 'Tapu ve imar durumu, parselasyon iptali sonrası konulan şerhler, iskân, elektrik-su-doğalgaz bağlantıları, site aidatı ve yabancıya satış uygunluğu. Her portföyde bu kontrolleri biz yapıyoruz.']],
    en: [[`How much do apartments for sale in Altıntaş cost?`, `As of ${date}, the ${tl.length} sale listings in the ACC HOMES Altıntaş portfolio range from ${fmtTL(ps[0])} to ${fmtTL(ps[ps.length - 1])}, averaging ${fmtTL(avg)}. These are asking prices, not completed sale prices.`],
      ...(am2 ? [[`What is the average price per m² in Altıntaş?`, `In our sale listings the average asking price is about ${fmtTL(am2)} per gross m² (${date}). Facilities, floor, aspect and building age affect price considerably.`]] : []),
      [`Which apartment types are most common?`, `Most common in our portfolio: ${top}. Demand has shifted from 1+1 to 2+1.`]],
    ru: [[`Сколько стоят квартиры в Алтынташе?`, `На ${date} в портфеле ACC HOMES Altıntaş ${tl.length} объектов на продажу: от ${fmtTL(ps[0])} до ${fmtTL(ps[ps.length - 1])}, в среднем ${fmtTL(avg)}. Это цены предложения, а не цены сделок.`],
      ...(am2 ? [[`Средняя цена за м² в Алтынташе?`, `В наших объявлениях средняя цена предложения — около ${fmtTL(am2)} за м² общей площади (${date}).`]] : []),
      [`Какие планировки встречаются чаще?`, `Чаще всего в нашем портфеле: ${top}. Спрос сместился с 1+1 на 2+1.`]],
  };
  return q[lang];
}
