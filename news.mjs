// ACC NEWS — haftalık emlak bülteni (TR / EN / RU). En yeni sayı en üstte.
// Her sayı: date, tr/en/ru → metaTitle, desc, h1, dl, intro, sections[{title, items[{h, p, src:[ad, url]}]}], calTitle, cal[[tarih, olay]], viewTitle, view, srcTitle, sources[[ad, url]], note
export const NEWS_UI = {
  tr: { name: 'ACC NEWS', title: 'ACC NEWS: Haftalık Emlak Gündemi', lead: 'Antalya ve Türkiye gayrimenkul piyasasının haftalık özeti: faiz, kredi, satış verileri, imar ve ihaleler; kaynaklı ve ACC HOMES yorumuyla.', metaTitle: 'ACC NEWS: Antalya ve Türkiye Haftalık Emlak Gündemi | ACC HOMES', issues: 'Sayılar', read: 'Sayıyı oku', cta: 'ACC HOMES iş ortağı olun', all: 'Tüm sayılar', rss: 'RSS ile takip et' },
  en: { name: 'ACC NEWS', title: 'ACC NEWS: Weekly Real Estate Brief', lead: 'A weekly, sourced brief on the Antalya and Turkish property market: rates, lending, sales data, zoning and tenders, with the ACC HOMES view.', metaTitle: 'ACC NEWS: Weekly Antalya & Turkey Real Estate Brief | ACC HOMES', issues: 'Issues', read: 'Read issue', cta: 'Become an ACC HOMES partner', all: 'All issues', rss: 'Follow via RSS' },
  ru: { name: 'ACC NEWS', title: 'ACC NEWS: еженедельный обзор недвижимости', lead: 'Еженедельный обзор рынка недвижимости Анталии и Турции: ставки, ипотека, статистика продаж, градостроительство и торги — с источниками и комментарием ACC HOMES.', metaTitle: 'ACC NEWS: еженедельный обзор недвижимости Анталии и Турции | ACC HOMES', issues: 'Выпуски', read: 'Читать выпуск', cta: 'Станьте партнёром ACC HOMES', all: 'Все выпуски', rss: 'RSS' },
};
export const NEWS = [
  { date: '2026-11-16', ...{
 "tr": {
  "metaTitle": "ACC NEWS · 16 Kasım 2026 | Antalya ve Türkiye Emlak Gündemi",
  "desc": "Konut kredisi faizi %41,33'e geriledi, TCMB kredi sınırlarını gevşetti, Aralık PPK beklentisi ve Antalya imar ile ihale gündemi. ACC HOMES haftalık emlak bülteni.",
  "h1": "ACC NEWS — Haftalık Emlak Gündemi",
  "dl": "16 Kasım 2026 · Hazırlayan: Ali Caner Can, Broker",
  "intro": "İş ortaklarımız için haftanın öne çıkan emlak gelişmelerini kısa, kaynaklı ve yorumlu olarak derledik.",
  "view": "Politika faizi Eylül'den bu yana 4 puan düştü, konut kredisi faizi ise yalnızca 0,63 puan geriledi. Kredi faizi politika faizini gecikmeli izliyor. Alıcılar için fiyat ve faiz birlikte değerlendirilmeli; satıcılar için peşin ve yabancı alıcı segmenti hâlâ belirleyici. Antalya'da askıdaki imar değişiklikleri, ilgili bölgelerde portföy ve değerleme çalışmalarında takip edilmeli. Yabancı müşterilerimizin mülklerini satışa veya kiraya çıkarırken yabancı kimlik numarası ve e-Devlet erişimi olup olmadığını en başta kontrol ediyor, yetkilendirmeyi birlikte tamamlıyoruz.",
  "note": "Bu sayfa bilgilendirme amaçlıdır, yatırım tavsiyesi değildir. Haberler kaynaklarından özetlenmiştir.",
  "sections": [
   {
    "title": "Haftanın 3 kritik gelişmesi",
    "items": [
     {
      "h": "Konut kredisi faizi %41,33'e geriledi",
      "p": "TCMB verisine göre 6 Kasım haftasında TL konut kredisi ağırlıklı ortalama faizi 16 baz puan düşerek %41,33 oldu; kredi bakiyesi 855 milyar TL'ye çıktı. Politika faizindeki düşüşe rağmen konut kredisi faizi yavaş geriliyor.",
      "src": [
       "Emlak Haber Ajansı",
       "https://www.emlakhaberajansi.com/konut-kredisi-faizi-yuzde-4133e-geriledi-stok-855-milyar-tl.html"
      ]
     },
     {
      "h": "TCMB kredi büyüme sınırlarını gevşetti, konut kredisi hariç",
      "p": "11 Kasım tarihli duyuruyla ihtiyaç ve taşıt kredilerinde 8 haftalık büyüme sınırı %3'ten %3,5'e, KOBİ kredilerinde %5'ten %5,5'e çıkarıldı. Konut kredilerinde değişiklik yapılmadı.",
      "src": [
       "Emlak Manşet",
       "https://www.emlakmanset.com/tcmb-kredi-buyume-sinirlarini-artirdi-konut-kredisi-kapsam-disi.html"
      ]
     },
     {
      "h": "Aralık PPK'da %35 beklentisi",
      "p": "Politika faizi %36. 10 Aralık'taki yılın son toplantısında piyasa katılımcıları 100 baz puan indirim bekliyor; bazı kurumlar ise faizin sabit kalacağını öngörüyor. TCMB 2026 yıl sonu enflasyon tahminini %29,5'e yükseltti.",
      "src": [
       "Emlak Manşet",
       "https://www.emlakmanset.com/aralik-ppksi-konut-kredisi-faizlerini-ne-kadar-dusurur.html"
      ]
     }
    ]
   },
{"title": "Son dakika: yabancı malik ilanları", "items": [{"h": "Güncelleme: EİDS'de yabancı malik doğrulaması", "p": "Sektör temsilcilerinin aktardığına göre 15–16 Kasım 2026 itibarıyla ilan portallarında \"Yabancıdan\", \"Yurt dışı tapulu\" gibi seçeneklerle girilen ilanlarda taşınmaz sahibinin gerçekten yabancı uyruklu olup olmadığı EİDS üzerinden kontrol ediliyor. Emlak işletmesi ilan girişinde tapudaki taşınmaz numarasını yazıyor, platform maliki bu numara üzerinden sorguluyor; doğrulanamayan ilan bu seçenekle yayımlanamıyor. Böylece yabancı malik istisnası, yetki doğrulamasını atlamak için kullanılamayacak. Yabancı kimlik numarası olan malikler e-Devlet üzerinden emlak işletmesini yetkilendirebiliyor. Bakanlığın konuya ilişkin ayrıntılı duyurusu yayımlandığında bu maddeyi güncelleyeceğiz.", "src": ["Emlak Haberleri", "https://www.emlakhaberi.com/yabancidan-ilanlarinda-eids-dogrulamasi-zorunlu-hale-geliyor"]}]},
   {
    "title": "Antalya ve bölge",
    "items": [
     {
      "h": null,
      "p": "Antalya Büyükşehir'in 11 ilçedeki 17 imar planı değişikliği 4 Kasım'dan itibaren 30 gün askıda; Konyaaltı, Kepez Altınova, Aksu, Alanya Konaklı ve Manavgat dahil.",
      "src": [
       "Antalya Körfez",
       "https://www.antalyakorfez.com/antalyanin-11-ilcesinde-imar-planlari-degisti-17-duzenleme-askida"
      ]
     },
     {
      "h": null,
      "p": "Antalya Eylül'de 6.704 konut satışı yaptı. Türkiye genelinde yabancıya satış yıllık %9,9 artışla 2.167 oldu.",
      "src": [
       "Akdeniz Gerçek / DHA",
       "https://www.akdenizgercek.com.tr/antalya/antalyada-konut-piyasasi-durulmuyor-eylulde-6-bin-704-satis/387385"
      ]
     }
    ]
   },
   {
    "title": "İhale ve fırsatlar",
    "items": [
     {
      "h": null,
      "p": "Manavgat Karacalar'da 8.506 m² Hazine tarlası satışta: tahmini bedel 25,52 milyon TL, ihale 26 Kasım 2026, açık teklif. KDV ve harç alınmıyor, 5 yıl emlak vergisi muafiyeti var.",
      "src": [
       "Antalya Hürses",
       "https://www.antalyahurses.com/antalyada-hazineye-ait-8-bin-506-metrekarelik-arazi-satisa-cikiyor-iste-fiyati/561350"
      ]
     }
    ]
   }
  ],
  "calTitle": "Takvim",
  "cal": [
   [
    "17 Kasım",
    "TÜİK Ekim konut satış istatistikleri (beklenen)"
   ],
   [
    "26 Kasım",
    "Manavgat Hazine arazisi ihalesi"
   ],
   [
    "30 Kasım",
    "Emlak vergisi 2. taksit son gün"
   ],
   [
    "10 Aralık",
    "TCMB PPK faiz kararı"
   ]
  ],
  "viewTitle": "ACC yorumu",
  "srcTitle": "Kaynaklar",
  "sources": [["Emlak Haberleri", "https://www.emlakhaberi.com/yabancidan-ilanlarinda-eids-dogrulamasi-zorunlu-hale-geliyor"],["Manisa Manşet / TEDB", "https://www.manisamansetgazetesi.com/manisa-haberleri/emlak-ilanlarinda-yeni-donem-yabanci-tapulu-tasinmazlara-eids-duzenlemesi/623716"],
   [
    "Emlak Haber Ajansı",
    "https://www.emlakhaberajansi.com/konut-kredisi-faizi-yuzde-4133e-geriledi-stok-855-milyar-tl.html"
   ],
   [
    "Emlak Manşet",
    "https://www.emlakmanset.com/tcmb-kredi-buyume-sinirlarini-artirdi-konut-kredisi-kapsam-disi.html"
   ],
   [
    "Emlak Manşet",
    "https://www.emlakmanset.com/aralik-ppksi-konut-kredisi-faizlerini-ne-kadar-dusurur.html"
   ],
   [
    "Emlak Haber Ajansı",
    "https://www.emlakhaberajansi.com/konut-kredisi-faizleri-kasim-2026-en-dusuk-oran-yuzde-287.html"
   ],
   [
    "Antalya Körfez",
    "https://www.antalyakorfez.com/antalyanin-11-ilcesinde-imar-planlari-degisti-17-duzenleme-askida"
   ],
   [
    "Akdeniz Gerçek / DHA",
    "https://www.akdenizgercek.com.tr/antalya/antalyada-konut-piyasasi-durulmuyor-eylulde-6-bin-704-satis/387385"
   ],
   [
    "Antalya Hürses",
    "https://www.antalyahurses.com/antalyada-hazineye-ait-8-bin-506-metrekarelik-arazi-satisa-cikiyor-iste-fiyati/561350"
   ],
   [
    "Haberdijital",
    "https://haberdijital.com.tr/9-15-kasim-2026nin-one-cikan-emlak-haberleri/"
   ]
  ]
 },
 "en": {
  "metaTitle": "ACC NEWS · 16 November 2026 | Antalya & Turkey Real Estate Brief",
  "desc": "Turkish mortgage rates ease to 41.33%, the central bank loosens credit growth caps, December rate expectations and Antalya zoning and land tenders. ACC HOMES weekly brief.",
  "h1": "ACC NEWS — Weekly Real Estate Brief",
  "dl": "16 November 2026 · By Ali Caner Can, Broker",
  "intro": "A short, sourced weekly brief on Turkish and Antalya real estate for our partners, with our take on what it means.",
  "view": "The policy rate has fallen 4 points since September, yet mortgage rates are down only 0.63 points: lending rates lag policy. Buyers should weigh price and financing together; for sellers, cash and foreign buyers remain the decisive segment. The zoning amendments on display in Antalya are worth tracking for listings and valuations in the affected areas. When listing our foreign clients' properties, we first check whether they hold a Turkish foreigner ID and e-Devlet access, and complete the authorisation together with them.",
  "note": "For information only; not investment advice. News items are summarised from the sources listed.",
  "sections": [
   {
    "title": "Top 3 developments",
    "items": [
     {
      "h": "Mortgage rates ease to 41.33%",
      "p": "Central bank data show the weighted average TL mortgage rate fell 16 bps to 41.33% in the week of 6 November, while the mortgage stock rose to TRY 855 billion. Mortgage rates are falling far more slowly than the policy rate.",
      "src": [
       "Emlak Haber Ajansı",
       "https://www.emlakhaberajansi.com/konut-kredisi-faizi-yuzde-4133e-geriledi-stok-855-milyar-tl.html"
      ]
     },
     {
      "h": "Credit growth caps loosened, mortgages excluded",
      "p": "On 11 November the central bank raised the 8-week growth cap for consumer and auto loans from 3% to 3.5% and for SME loans from 5% to 5.5%. Mortgages were left unchanged.",
      "src": [
       "Emlak Manşet",
       "https://www.emlakmanset.com/tcmb-kredi-buyume-sinirlarini-artirdi-konut-kredisi-kapsam-disi.html"
      ]
     },
     {
      "h": "December rate cut to 35% expected",
      "p": "The policy rate is 36%. Market participants expect a 100 bps cut at the final meeting of the year on 10 December, though some institutions see a hold. The central bank raised its end-2026 inflation forecast to 29.5%.",
      "src": [
       "Emlak Manşet",
       "https://www.emlakmanset.com/aralik-ppksi-konut-kredisi-faizlerini-ne-kadar-dusurur.html"
      ]
     }
    ]
   },
{"title": "Breaking: foreign-owner listings", "items": [{"h": "Update: EİDS now checks foreign-owner listings", "p": "According to industry representatives, from 15–16 November 2026 listings entered on portals under options such as \"from a foreign owner\" or \"title held abroad\" are checked through EİDS to confirm that the owner really is a foreign national. The agency enters the property number from the title deed and the platform verifies the owner; listings that cannot be verified can no longer be published under that option. This closes a gap where the foreign-owner exception was used to bypass authorisation checks. Foreign owners with a Turkish foreigner ID number can authorise their agency through e-Devlet. We will update this item when the Ministry publishes detailed guidance.", "src": ["Emlak Haberleri", "https://www.emlakhaberi.com/yabancidan-ilanlarinda-eids-dogrulamasi-zorunlu-hale-geliyor"]}]},
   {
    "title": "Antalya and the region",
    "items": [
     {
      "h": null,
      "p": "Antalya Metropolitan Municipality has 17 zoning plan amendments across 11 districts on public display for 30 days from 4 November, including Konyaaltı, Kepez Altınova, Aksu, Alanya Konaklı and Manavgat.",
      "src": [
       "Antalya Körfez",
       "https://www.antalyakorfez.com/antalyanin-11-ilcesinde-imar-planlari-degisti-17-duzenleme-askida"
      ]
     },
     {
      "h": null,
      "p": "Antalya recorded 6,704 home sales in September. Nationwide, sales to foreigners rose 9.9% year on year to 2,167.",
      "src": [
       "Akdeniz Gerçek / DHA",
       "https://www.akdenizgercek.com.tr/antalya/antalyada-konut-piyasasi-durulmuyor-eylulde-6-bin-704-satis/387385"
      ]
     }
    ]
   },
   {
    "title": "Tenders and opportunities",
    "items": [
     {
      "h": null,
      "p": "Treasury farmland of 8,506 m² in Karacalar, Manavgat is up for sale: estimated value TRY 25.52 million, open-bid tender on 26 November 2026. No VAT or fees; 5-year property tax exemption.",
      "src": [
       "Antalya Hürses",
       "https://www.antalyahurses.com/antalyada-hazineye-ait-8-bin-506-metrekarelik-arazi-satisa-cikiyor-iste-fiyati/561350"
      ]
     }
    ]
   }
  ],
  "calTitle": "Calendar",
  "cal": [
   [
    "17 Nov",
    "TurkStat October housing sales (expected)"
   ],
   [
    "26 Nov",
    "Manavgat Treasury land tender"
   ],
   [
    "30 Nov",
    "Property tax 2nd instalment deadline"
   ],
   [
    "10 Dec",
    "Central bank rate decision"
   ]
  ],
  "viewTitle": "ACC view",
  "srcTitle": "Sources",
  "sources": [["Emlak Haberleri", "https://www.emlakhaberi.com/yabancidan-ilanlarinda-eids-dogrulamasi-zorunlu-hale-geliyor"],["Manisa Manşet / TEDB", "https://www.manisamansetgazetesi.com/manisa-haberleri/emlak-ilanlarinda-yeni-donem-yabanci-tapulu-tasinmazlara-eids-duzenlemesi/623716"],
   [
    "Emlak Haber Ajansı",
    "https://www.emlakhaberajansi.com/konut-kredisi-faizi-yuzde-4133e-geriledi-stok-855-milyar-tl.html"
   ],
   [
    "Emlak Manşet",
    "https://www.emlakmanset.com/tcmb-kredi-buyume-sinirlarini-artirdi-konut-kredisi-kapsam-disi.html"
   ],
   [
    "Emlak Manşet",
    "https://www.emlakmanset.com/aralik-ppksi-konut-kredisi-faizlerini-ne-kadar-dusurur.html"
   ],
   [
    "Emlak Haber Ajansı",
    "https://www.emlakhaberajansi.com/konut-kredisi-faizleri-kasim-2026-en-dusuk-oran-yuzde-287.html"
   ],
   [
    "Antalya Körfez",
    "https://www.antalyakorfez.com/antalyanin-11-ilcesinde-imar-planlari-degisti-17-duzenleme-askida"
   ],
   [
    "Akdeniz Gerçek / DHA",
    "https://www.akdenizgercek.com.tr/antalya/antalyada-konut-piyasasi-durulmuyor-eylulde-6-bin-704-satis/387385"
   ],
   [
    "Antalya Hürses",
    "https://www.antalyahurses.com/antalyada-hazineye-ait-8-bin-506-metrekarelik-arazi-satisa-cikiyor-iste-fiyati/561350"
   ],
   [
    "Haberdijital",
    "https://haberdijital.com.tr/9-15-kasim-2026nin-one-cikan-emlak-haberleri/"
   ]
  ]
 },
 "ru": {
  "metaTitle": "ACC NEWS · 16 ноября 2026 | Недвижимость Анталии и Турции",
  "desc": "Ставка по ипотеке в Турции снизилась до 41,33%, ЦБ смягчил лимиты роста кредитов, ожидания по ставке в декабре, градостроительные изменения и торги в Анталии. Обзор ACC HOMES.",
  "h1": "ACC NEWS — Еженедельный обзор недвижимости",
  "dl": "16 ноября 2026 · Автор: Али Джанер Джан, брокер",
  "intro": "Краткий еженедельный обзор рынка недвижимости Турции и Анталии для наших партнёров — с источниками и нашим комментарием.",
  "view": "С сентября ключевая ставка снизилась на 4 пункта, а ипотечная — лишь на 0,63 пункта: кредитные ставки отстают от политики ЦБ. Покупателям стоит оценивать цену и условия финансирования вместе; для продавцов решающими остаются покупатели за наличные и иностранцы. Изменения планов застройки в Анталии важно учитывать при оценке объектов в затронутых районах. Размещая объекты наших иностранных клиентов, мы сначала проверяем наличие турецкого ВНЖ-номера и доступа к e-Devlet и оформляем полномочия вместе с владельцем.",
  "note": "Материал носит информационный характер и не является инвестиционной рекомендацией. Новости кратко изложены по указанным источникам.",
  "sections": [
   {
    "title": "3 главных события недели",
    "items": [
     {
      "h": "Ставка по ипотеке снизилась до 41,33%",
      "p": "По данным ЦБ, средневзвешенная ставка по ипотеке в лирах на неделе 6 ноября снизилась на 16 б.п. до 41,33%, а ипотечный портфель вырос до 855 млрд лир. Ипотечные ставки снижаются значительно медленнее ключевой.",
      "src": [
       "Emlak Haber Ajansı",
       "https://www.emlakhaberajansi.com/konut-kredisi-faizi-yuzde-4133e-geriledi-stok-855-milyar-tl.html"
      ]
     },
     {
      "h": "ЦБ смягчил лимиты роста кредитов, ипотека не затронута",
      "p": "11 ноября ЦБ повысил 8-недельный лимит роста потребительских и автокредитов с 3% до 3,5%, кредитов МСП — с 5% до 5,5%. Для ипотеки изменений нет.",
      "src": [
       "Emlak Manşet",
       "https://www.emlakmanset.com/tcmb-kredi-buyume-sinirlarini-artirdi-konut-kredisi-kapsam-disi.html"
      ]
     },
     {
      "h": "В декабре ожидают снижения ставки до 35%",
      "p": "Ключевая ставка — 36%. Участники рынка ожидают снижения на 100 б.п. на последнем в году заседании 10 декабря, хотя часть аналитиков прогнозирует паузу. ЦБ повысил прогноз инфляции на конец 2026 года до 29,5%.",
      "src": [
       "Emlak Manşet",
       "https://www.emlakmanset.com/aralik-ppksi-konut-kredisi-faizlerini-ne-kadar-dusurur.html"
      ]
     }
    ]
   },
{"title": "Срочно: объявления иностранных владельцев", "items": [{"h": "Обновление: EİDS проверяет объявления иностранных владельцев", "p": "По данным представителей отрасли, с 15–16 ноября 2026 года объявления, размещаемые на порталах с пометкой «от иностранца» или «тапу за рубежом», проверяются через систему EİDS: подтверждается, что владелец действительно иностранный гражданин. Агентство указывает номер объекта из тапу, а платформа проверяет владельца; непроверенное объявление с такой пометкой опубликовать нельзя. Так закрывается лазейка, через которую исключение для иностранцев использовали, чтобы обойти проверку полномочий. Владельцы-иностранцы с турецким номером ВНЖ (YKN) могут уполномочить агентство через e-Devlet. Мы обновим этот пункт после публикации подробных разъяснений Министерства.", "src": ["Emlak Haberleri", "https://www.emlakhaberi.com/yabancidan-ilanlarinda-eids-dogrulamasi-zorunlu-hale-geliyor"]}]},
   {
    "title": "Анталия и регион",
    "items": [
     {
      "h": null,
      "p": "Муниципалитет Анталии вынес на 30-дневное публичное рассмотрение (с 4 ноября) 17 изменений планов застройки в 11 районах, включая Коньяалты, Кепез-Алтынова, Аксу, Аланья-Конаклы и Манавгат.",
      "src": [
       "Antalya Körfez",
       "https://www.antalyakorfez.com/antalyanin-11-ilcesinde-imar-planlari-degisti-17-duzenleme-askida"
      ]
     },
     {
      "h": null,
      "p": "В сентябре в Анталии продано 6 704 объекта жилья. По Турции продажи иностранцам выросли на 9,9% г/г до 2 167.",
      "src": [
       "Akdeniz Gerçek / DHA",
       "https://www.akdenizgercek.com.tr/antalya/antalyada-konut-piyasasi-durulmuyor-eylulde-6-bin-704-satis/387385"
      ]
     }
    ]
   },
   {
    "title": "Торги и возможности",
    "items": [
     {
      "h": null,
      "p": "В Манавгате (Караджалар) продаётся государственный участок 8 506 м²: оценочная стоимость 25,52 млн лир, открытые торги 26 ноября 2026. Без НДС и пошлин, освобождение от налога на имущество на 5 лет.",
      "src": [
       "Antalya Hürses",
       "https://www.antalyahurses.com/antalyada-hazineye-ait-8-bin-506-metrekarelik-arazi-satisa-cikiyor-iste-fiyati/561350"
      ]
     }
    ]
   }
  ],
  "calTitle": "Календарь",
  "cal": [
   [
    "17 ноября",
    "TÜİK: продажи жилья за октябрь (ожидается)"
   ],
   [
    "26 ноября",
    "Торги по участку в Манавгате"
   ],
   [
    "30 ноября",
    "Срок 2-го платежа налога на имущество"
   ],
   [
    "10 декабря",
    "Решение ЦБ по ставке"
   ]
  ],
  "viewTitle": "Мнение ACC",
  "srcTitle": "Источники",
  "sources": [["Emlak Haberleri", "https://www.emlakhaberi.com/yabancidan-ilanlarinda-eids-dogrulamasi-zorunlu-hale-geliyor"],["Manisa Manşet / TEDB", "https://www.manisamansetgazetesi.com/manisa-haberleri/emlak-ilanlarinda-yeni-donem-yabanci-tapulu-tasinmazlara-eids-duzenlemesi/623716"],
   [
    "Emlak Haber Ajansı",
    "https://www.emlakhaberajansi.com/konut-kredisi-faizi-yuzde-4133e-geriledi-stok-855-milyar-tl.html"
   ],
   [
    "Emlak Manşet",
    "https://www.emlakmanset.com/tcmb-kredi-buyume-sinirlarini-artirdi-konut-kredisi-kapsam-disi.html"
   ],
   [
    "Emlak Manşet",
    "https://www.emlakmanset.com/aralik-ppksi-konut-kredisi-faizlerini-ne-kadar-dusurur.html"
   ],
   [
    "Emlak Haber Ajansı",
    "https://www.emlakhaberajansi.com/konut-kredisi-faizleri-kasim-2026-en-dusuk-oran-yuzde-287.html"
   ],
   [
    "Antalya Körfez",
    "https://www.antalyakorfez.com/antalyanin-11-ilcesinde-imar-planlari-degisti-17-duzenleme-askida"
   ],
   [
    "Akdeniz Gerçek / DHA",
    "https://www.akdenizgercek.com.tr/antalya/antalyada-konut-piyasasi-durulmuyor-eylulde-6-bin-704-satis/387385"
   ],
   [
    "Antalya Hürses",
    "https://www.antalyahurses.com/antalyada-hazineye-ait-8-bin-506-metrekarelik-arazi-satisa-cikiyor-iste-fiyati/561350"
   ],
   [
    "Haberdijital",
    "https://haberdijital.com.tr/9-15-kasim-2026nin-one-cikan-emlak-haberleri/"
   ]
  ]
 }
} },
];
