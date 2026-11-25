// ACC NEWS — haftalık emlak bülteni (TR / EN / RU). En yeni sayı en üstte.
// Her sayı: date, tr/en/ru → metaTitle, desc, h1, dl, intro, sections[{title, items[{h, p, src:[ad, url]}]}], calTitle, cal[[tarih, olay]], viewTitle, view, srcTitle, sources[[ad, url]], note
export const NEWS_UI = {
  tr: { name: 'ACC NEWS', title: 'ACC NEWS: Haftalık Emlak Gündemi', lead: 'Antalya ve Türkiye gayrimenkul piyasasının haftalık özeti: faiz, kredi, satış verileri, imar ve ihaleler; kaynaklı ve ACC HOMES yorumuyla.', metaTitle: 'ACC NEWS: Antalya ve Türkiye Haftalık Emlak Gündemi | ACC HOMES', issues: 'Sayılar', read: 'Sayıyı oku', cta: 'ACC HOMES iş ortağı olun', all: 'Tüm sayılar', rss: 'RSS ile takip et' },
  en: { name: 'ACC NEWS', title: 'ACC NEWS: Weekly Real Estate Brief', lead: 'A weekly, sourced brief on the Antalya and Turkish property market: rates, lending, sales data, zoning and tenders, with the ACC HOMES view.', metaTitle: 'ACC NEWS: Weekly Antalya & Turkey Real Estate Brief | ACC HOMES', issues: 'Issues', read: 'Read issue', cta: 'Become an ACC HOMES partner', all: 'All issues', rss: 'Follow via RSS' },
  ru: { name: 'ACC NEWS', title: 'ACC NEWS: еженедельный обзор недвижимости', lead: 'Еженедельный обзор рынка недвижимости Анталии и Турции: ставки, ипотека, статистика продаж, градостроительство и торги — с источниками и комментарием ACC HOMES.', metaTitle: 'ACC NEWS: еженедельный обзор недвижимости Анталии и Турции | ACC HOMES', issues: 'Выпуски', read: 'Читать выпуск', cta: 'Станьте партнёром ACC HOMES', all: 'Все выпуски', rss: 'RSS' },
};
export const NEWS = [
  { date: '2026-11-25', ...{
 "tr": {
  "metaTitle": "ACC NEWS 25 Kasım 2026: Reel Fiyat Kaybı ve Antalya Ruhsat Verisi",
  "desc": "Konut ilan fiyatları reelde yıllık %9 düştü, ilanlar 58,6 gün bekliyor. Antalya'da 3. çeyrekte 8.733 daireye ruhsat, 7.604 daireye iskân verildi.",
  "h1": "ACC NEWS — Günün Haberi",
  "dl": "25 Kasım 2026 · Hazırlayan: Ali Caner Can, Broker",
  "intro": "İş ortaklarımız ve müşterilerimiz için bugünün iki önemli gelişmesini kısa, kaynaklı ve yorumlu olarak derledik. Ayrıntılı analiz blogumuzda.",
  "sections": [
   {
    "title": "Günün 2 kritik gelişmesi",
    "items": [
     {
      "h": "Satılık konutta reel fiyat kaybı hızlandı, ilanlar 58,6 gün yayında",
      "p": "BETAM'ın sahibinden.com ilan verisine dayanan Ekim raporuna göre Türkiye'de ortalama ilan fiyatı 47.179 TL/m² oldu. Nominal yıllık artış %18'e geriledi (Eylül %19,6); enflasyondan arındırıldığında fiyatlar yıllık %9 düştü (Eylül −%7,8). İlanların yayında kalma süresi Ağustos'ta 54,2, Eylül'de 57,6 gündü, Ekim'de 58,6 güne çıktı. Talep endeksi aylık %2,9 geriledi.",
      "src": [
       "EmlakDream / BETAM",
       "https://www.emlakdream.com/satilik-konutta-reel-fiyat-kaybi-yeniden-hizlandi-ilanlarin-yayinda-kalma-suresi-58-6-gune-cikti/"
      ]
     },
     {
      "h": "Antalya'da üç ayda 8.733 daireye ruhsat, 7.604 daireye iskân",
      "p": "TÜİK'in Temmuz–Eylül 2026 yapı izin istatistiklerine göre Antalya'da 8.733 daire için yapı ruhsatı, 7.604 daire için yapı kullanma izni verildi. Türkiye genelinde ruhsat verilen daire sayısı yıllık yalnızca %1,6 artarken iskân alan daire sayısı %21,1 arttı: teslimatlar hızlı, yeni başlangıçlar yavaş. TÜİK'in Kasım inşaat güven endeksi de aylık %3,8 düşüşle 80,2'ye indi.",
      "src": [
       "Akdeniz Gerçek / TÜİK",
       "https://www.akdenizgercek.com.tr/ekonomi/antalyada-2026nin-ucuncu-ceyreginde-8-bin-733-daireye-yapi-ruhsati-verildi/389913"
      ]
     }
    ]
   },
   {
    "title": "Antalya ve bölge",
    "items": [
     {
      "h": null,
      "p": "Döşemealtı Altınkale'de 25 bin m² ticaret alanında 70 bin m² inşaat alanlı, 90 mağazalı ve 730 araçlık otoparklı bir AVM projesi için ÇED süreci başlatıldı. Bu aşama onay ya da inşaat başlangıcı anlamına gelmiyor; bölgedeki konut değerlemesi açısından izlenecek bir gelişme.",
      "src": [
       "Akdeniz Gerçek",
       "https://www.akdenizgercek.com.tr/dosemealti/antalya-dosemealtina-dev-alisveris-merkezi-geliyor/389909"
      ]
     }
    ]
   },
   {
    "title": "Kısa kısa",
    "items": [
     {
      "h": null,
      "p": "TCMB kredi kartı referans faizini %3,11'den %2,94'e indirdi; 30 bin TL altı borçta azami akdi faiz 1 Aralık'tan itibaren %3,08 olacak.",
      "src": [
       "Memurlar.net / AA",
       "https://www.memurlar.net/haber/1185079/kredi-karti-azami-akdi-faiz-orani-yuzde-3-08-e-indirildi.html"
      ]
     },
     {
      "h": null,
      "p": "Emlak vergisi 2. taksitinde son ödeme günü 30 Kasım; süresinde ödenmeyen tutara aylık %3,7 gecikme zammı uygulanıyor.",
      "src": [
       "Yeni Asır",
       "https://www.yeniasir.com.tr/gundem/2026/11/25/emlak-vergisinde-son-hafta"
      ]
     }
    ]
   }
  ],
  "calTitle": "Takvim",
  "cal": [
   [
    "26 Kasım",
    "TCMB haftalık kredi faizi ve BDDK verileri"
   ],
   [
    "27 Kasım",
    "TCMB Finansal İstikrar Raporu"
   ],
   [
    "30 Kasım",
    "Emlak vergisi 2. taksit son gün"
   ],
   [
    "3 Aralık",
    "Kasım enflasyonu ve Aralık kira artış tavanı"
   ],
   [
    "10 Aralık",
    "TCMB PPK faiz kararı"
   ]
  ],
  "viewTitle": "İş ortağı notu",
  "view": "Satıcıya: İlanlar her ay biraz daha uzun bekliyor; piyasanın üzerinde fiyatlanan ilan iki ayı rahatça geçer. İlk 30 günde emsale dayalı doğru fiyatla çıkmak, sonradan indirim yapmaktan daha az kaybettirir. Alıcıya: Fiyatlar enflasyonun altında artıyor, pazarlık payı geçen yıla göre daha geniş ve Antalya'da iskânlı hazır stok bol; krediyle alacak müşteriye bu stok öncelikli gösterilmeli. Yabancı alıcıya: TL bazında reel düşüş, döviz bazında alım avantajı olarak anlatılabilir; bunun Türkiye ortalaması olduğu belirtilmeli. Yatırımcıya: Yeni ruhsatların zayıf seyri, 2027–2028'de arzın sınırlı kalabileceğine işaret ediyor; kesin fiyat öngörüsü değil, izlenecek bir eğilim.",
  "srcTitle": "Kaynaklar",
  "sources": [
   [
    "ACC HOMES Blog: Antalya Konut Piyasası Kasım 2026",
    "https://acchomesantalya.com/blog/antalya-konut-piyasasi-kasim-2026/"
   ],
   [
    "EmlakDream / BETAM",
    "https://www.emlakdream.com/satilik-konutta-reel-fiyat-kaybi-yeniden-hizlandi-ilanlarin-yayinda-kalma-suresi-58-6-gune-cikti/"
   ],
   [
    "Akdeniz Gerçek / TÜİK",
    "https://www.akdenizgercek.com.tr/ekonomi/antalyada-2026nin-ucuncu-ceyreginde-8-bin-733-daireye-yapi-ruhsati-verildi/389913"
   ],
   [
    "EmlakDream / TÜİK güven",
    "https://www.emlakdream.com/insaat-sektoru-guven-endeksi-kasim-ayinda-yuzde-3-8-azaldi/"
   ],
   [
    "Akdeniz Gerçek / Döşemealtı AVM",
    "https://www.akdenizgercek.com.tr/dosemealti/antalya-dosemealtina-dev-alisveris-merkezi-geliyor/389909"
   ],
   [
    "Memurlar.net / AA",
    "https://www.memurlar.net/haber/1185079/kredi-karti-azami-akdi-faiz-orani-yuzde-3-08-e-indirildi.html"
   ],
   [
    "Yeni Asır",
    "https://www.yeniasir.com.tr/gundem/2026/11/25/emlak-vergisinde-son-hafta"
   ]
  ],
  "note": "Bu sayfa bilgilendirme amaçlıdır, yatırım ve hukuki tavsiye değildir. Haberler kaynaklarından özetlenmiştir."
 },
 "en": {
  "metaTitle": "ACC NEWS 25 Nov 2026: Real Price Decline, Antalya Permits",
  "desc": "Home asking prices fell 9% in real terms; listings now stay 58.6 days. Antalya issued permits for 8,733 homes and occupancy permits for 7,604 in Q3.",
  "h1": "ACC NEWS — News of the Day",
  "dl": "25 November 2026 · By Ali Caner Can, Broker",
  "intro": "Two developments that matter today for our partners and clients, summarised with sources and our view. Full analysis on our blog.",
  "sections": [
   {
    "title": "Two key developments",
    "items": [
     {
      "h": "Real home prices fall faster; listings stay online 58.6 days",
      "p": "According to BETAM's October report based on sahibinden.com listings, the average asking price in Turkey was TRY 47,179 per m². Nominal annual growth eased to 18% (September: 19.6%); adjusted for inflation, prices fell 9% year on year (September: −7.8%). Average time on market rose from 54.2 days in August and 57.6 in September to 58.6 days in October. The demand index fell 2.9% month on month.",
      "src": [
       "EmlakDream / BETAM",
       "https://www.emlakdream.com/satilik-konutta-reel-fiyat-kaybi-yeniden-hizlandi-ilanlarin-yayinda-kalma-suresi-58-6-gune-cikti/"
      ]
     },
     {
      "h": "Antalya: construction permits for 8,733 homes, occupancy permits for 7,604 in three months",
      "p": "TurkStat's building permit statistics for July–September 2026 show 8,733 dwellings receiving construction permits and 7,604 receiving occupancy permits in Antalya. Nationally, dwellings with construction permits rose only 1.6% year on year, while those with occupancy permits rose 21.1%: completions are fast, new starts slow. TurkStat's construction confidence index fell 3.8% in November to 80.2.",
      "src": [
       "Akdeniz Gerçek / TurkStat",
       "https://www.akdenizgercek.com.tr/ekonomi/antalyada-2026nin-ucuncu-ceyreginde-8-bin-733-daireye-yapi-ruhsati-verildi/389913"
      ]
     }
    ]
   },
   {
    "title": "Antalya and the region",
    "items": [
     {
      "h": null,
      "p": "An environmental impact (ÇED) process has started for a shopping mall project in Altınkale, Döşemealtı: 70,000 m² of construction on a 25,000 m² commercial plot, 90 shops and 730 parking spaces. This stage is not an approval or a construction start.",
      "src": [
       "Akdeniz Gerçek",
       "https://www.akdenizgercek.com.tr/dosemealti/antalya-dosemealtina-dev-alisveris-merkezi-geliyor/389909"
      ]
     }
    ]
   },
   {
    "title": "In brief",
    "items": [
     {
      "h": null,
      "p": "The Central Bank cut the credit card reference rate from 3.11% to 2.94%; the maximum contractual rate for balances under TRY 30,000 will be 3.08% from 1 December.",
      "src": [
       "Memurlar.net / AA",
       "https://www.memurlar.net/haber/1185079/kredi-karti-azami-akdi-faiz-orani-yuzde-3-08-e-indirildi.html"
      ]
     }
    ]
   }
  ],
  "calTitle": "Calendar",
  "cal": [
   [
    "26 Nov",
    "Central Bank weekly loan rates, BDDK data"
   ],
   [
    "27 Nov",
    "Central Bank Financial Stability Report"
   ],
   [
    "30 Nov",
    "Property tax 2nd instalment deadline"
   ],
   [
    "3 Dec",
    "November inflation and December rent cap"
   ],
   [
    "10 Dec",
    "Central Bank rate decision"
   ]
  ],
  "viewTitle": "Partner note",
  "view": "Sellers: listings are staying online longer each month, and an overpriced home can easily sit for over two months. Pricing correctly from comparables in the first 30 days costs less than cutting later. Buyers: prices are rising below inflation, there is more room to negotiate than last year, and ready homes with occupancy permits are widely available in Antalya. Foreign buyers: the real decline in lira prices can be an advantage when buying in foreign currency; note that this is a national average. Investors: weak growth in new permits points to limited supply in 2027–2028; a trend to watch, not a price forecast.",
  "srcTitle": "Sources",
  "sources": [
   [
    "ACC HOMES Blog: Antalya Housing Market November 2026",
    "https://acchomesantalya.com/en/blog/antalya-konut-piyasasi-kasim-2026/"
   ],
   [
    "EmlakDream / BETAM",
    "https://www.emlakdream.com/satilik-konutta-reel-fiyat-kaybi-yeniden-hizlandi-ilanlarin-yayinda-kalma-suresi-58-6-gune-cikti/"
   ],
   [
    "Akdeniz Gerçek / TurkStat",
    "https://www.akdenizgercek.com.tr/ekonomi/antalyada-2026nin-ucuncu-ceyreginde-8-bin-733-daireye-yapi-ruhsati-verildi/389913"
   ],
   [
    "EmlakDream / TurkStat confidence",
    "https://www.emlakdream.com/insaat-sektoru-guven-endeksi-kasim-ayinda-yuzde-3-8-azaldi/"
   ],
   [
    "Akdeniz Gerçek / Döşemealtı mall",
    "https://www.akdenizgercek.com.tr/dosemealti/antalya-dosemealtina-dev-alisveris-merkezi-geliyor/389909"
   ],
   [
    "Memurlar.net / AA",
    "https://www.memurlar.net/haber/1185079/kredi-karti-azami-akdi-faiz-orani-yuzde-3-08-e-indirildi.html"
   ]
  ],
  "note": "This page is for information only and is not investment or legal advice. News items are summarised from their sources."
 },
 "ru": {
  "metaTitle": "ACC NEWS 25.11.2026: реальное снижение цен, разрешения в Анталии",
  "desc": "Цены предложения жилья снизились на 9% в реальном выражении, объявления висят 58,6 дня. В Анталии за III квартал — разрешения на 8 733 квартиры.",
  "h1": "ACC NEWS — новость дня",
  "dl": "25 ноября 2026 · Автор: Али Джанер Джан, брокер",
  "intro": "Два важных события дня для наших партнёров и клиентов — кратко, с источниками и нашим комментарием. Подробный разбор — в нашем блоге.",
  "sections": [
   {
    "title": "Два ключевых события",
    "items": [
     {
      "h": "Реальное снижение цен на жильё ускорилось, объявления висят 58,6 дня",
      "p": "По октябрьскому отчёту BETAM на основе объявлений sahibinden.com, средняя цена предложения в Турции составила 47 179 лир за м². Номинальный рост за год замедлился до 18% (сентябрь: 19,6%); с учётом инфляции цены снизились на 9% (сентябрь: −7,8%). Средний срок экспозиции вырос с 54,2 дня в августе и 57,6 в сентябре до 58,6 дня в октябре. Индекс спроса снизился на 2,9% за месяц.",
      "src": [
       "EmlakDream / BETAM",
       "https://www.emlakdream.com/satilik-konutta-reel-fiyat-kaybi-yeniden-hizlandi-ilanlarin-yayinda-kalma-suresi-58-6-gune-cikti/"
      ]
     },
     {
      "h": "Анталия: за три месяца разрешения на строительство 8 733 квартир и на ввод 7 604",
      "p": "По данным TÜİK за июль–сентябрь 2026 года, в Анталии выдано разрешений на строительство 8 733 квартир и на ввод в эксплуатацию (искан) 7 604 квартир. По Турции число квартир с разрешением на строительство выросло за год лишь на 1,6%, а с разрешением на ввод — на 21,1%. Индекс доверия в строительстве в ноябре снизился на 3,8%, до 80,2.",
      "src": [
       "Akdeniz Gerçek / TÜİK",
       "https://www.akdenizgercek.com.tr/ekonomi/antalyada-2026nin-ucuncu-ceyreginde-8-bin-733-daireye-yapi-ruhsati-verildi/389913"
      ]
     }
    ]
   },
   {
    "title": "Анталия и регион",
    "items": [
     {
      "h": null,
      "p": "В Алтынкале (Дёшемеалты) начата процедура экологической экспертизы (ÇED) проекта торгового центра: 70 000 м² строительной площади, 90 магазинов, 730 парковочных мест. Это не одобрение и не начало строительства.",
      "src": [
       "Akdeniz Gerçek",
       "https://www.akdenizgercek.com.tr/dosemealti/antalya-dosemealtina-dev-alisveris-merkezi-geliyor/389909"
      ]
     }
    ]
   }
  ],
  "calTitle": "Календарь",
  "cal": [
   [
    "26 нояб.",
    "Еженедельные ставки по кредитам ЦБ, данные BDDK"
   ],
   [
    "27 нояб.",
    "Отчёт ЦБ о финансовой стабильности"
   ],
   [
    "3 дек.",
    "Инфляция за ноябрь и лимит роста аренды"
   ],
   [
    "10 дек.",
    "Решение ЦБ по ставке"
   ]
  ],
  "viewTitle": "Комментарий для партнёров",
  "view": "Продавцам: объявления висят всё дольше, а квартира с завышенной ценой легко провисит больше двух месяцев. Правильная цена по сравнимым объектам в первые 30 дней обходится дешевле последующего снижения. Покупателям: цены растут медленнее инфляции, возможностей для торга больше, чем год назад, готового жилья с исканом в Анталии много. Иностранным покупателям: реальное снижение цен в лирах — преимущество при покупке за валюту; это среднее по стране. Инвесторам: слабый рост новых разрешений указывает на ограниченное предложение в 2027–2028 годах — тренд, а не прогноз цен.",
  "srcTitle": "Источники",
  "sources": [
   [
    "Блог ACC HOMES: рынок жилья Анталии, ноябрь 2026",
    "https://acchomesantalya.com/ru/blog/antalya-konut-piyasasi-kasim-2026/"
   ],
   [
    "EmlakDream / BETAM",
    "https://www.emlakdream.com/satilik-konutta-reel-fiyat-kaybi-yeniden-hizlandi-ilanlarin-yayinda-kalma-suresi-58-6-gune-cikti/"
   ],
   [
    "Akdeniz Gerçek / TÜİK",
    "https://www.akdenizgercek.com.tr/ekonomi/antalyada-2026nin-ucuncu-ceyreginde-8-bin-733-daireye-yapi-ruhsati-verildi/389913"
   ],
   [
    "EmlakDream / TÜİK",
    "https://www.emlakdream.com/insaat-sektoru-guven-endeksi-kasim-ayinda-yuzde-3-8-azaldi/"
   ],
   [
    "Akdeniz Gerçek / ТЦ Дёшемеалты",
    "https://www.akdenizgercek.com.tr/dosemealti/antalya-dosemealtina-dev-alisveris-merkezi-geliyor/389909"
   ]
  ],
  "note": "Материал носит информационный характер и не является инвестиционной или юридической консультацией. Новости кратко изложены по источникам."
 }
} },
  { date: '2026-11-18', ...{
 "tr": {
  "metaTitle": "ACC NEWS 18 Kasım 2026: İkamet Kararı ve Ekim Satışları",
  "desc": "Yabancı yatırımcıya 150 bin $ ile 3 yıl, 200 bin $ ile 5 yıl ikamet izni yürürlükte. Ekim'de konut satışları %23,3 düştü, Antalya'da yabancıya satış arttı.",
  "h1": "ACC NEWS — Günün Haberi",
  "dl": "18 Kasım 2026 · Hazırlayan: Ali Caner Can, Broker",
  "intro": "İş ortaklarımız ve müşterilerimiz için bugünün iki önemli gelişmesini kısa, kaynaklı ve yorumlu olarak derledik.",
  "sections": [
   {
    "title": "Günün 2 kritik gelişmesi",
    "items": [
     {
      "h": "Yabancı yatırımcıya 150 bin dolara 3 yıl, 200 bin dolara 5 yıl ikamet izni",
      "p": "18 Kasım 2026 tarihli Resmi Gazete'de yayımlanan Cumhurbaşkanı Kararı aynı gün yürürlüğe girdi. Banka mevduatı, devlet borçlanma araçları, gayrimenkul yatırım fonu ve girişim sermayesi fonu payları ile bireysel emekliliğe en az 150 bin dolar yatıran yabancıya 3 yıla, 200 bin dolar yatırana 5 yıla kadar ikamet izni verilebilecek; yatırımın izin süresinin en az yarısı boyunca tutulması gerekiyor. Haberlere göre doğrudan konut alımı bu yeni yolun kapsamında değil. Gayrimenkulle vatandaşlık eşiği 400 bin dolar olarak aynı kaldı. Başvuru usulleri İçişleri Bakanlığı tarafından belirlenecek.",
      "src": [
       "Memurlar.net",
       "https://www.memurlar.net/haber/1184464/yabanci-yatirimciya-150-bin-dolara-3-yil-ikamet-izni.html"
      ]
     },
     {
      "h": "Ekim'de 131 bin konut satıldı, yıllık düşüş %23,3",
      "p": "TÜİK verilerine göre Ekim'de 131.072 konut satıldı; satışlar yıllık %23,3, aylık %7,9 azaldı. İkinci el satışlar %28,5, ilk el satışlar %13,1 geriledi. İpotekli satışlar %5,7 düşüşle 23.286'da kaldı ve toplamın %17,8'ini oluşturdu. Yabancıya satış ise %0,9 artışla 2.259 oldu.",
      "src": [
       "Foreks / Bizim Menkul",
       "https://www.foreks.com/haber/detay/6afc5db3d7f1e62e226b552a/FRKS/tr/analiz-ekim-2026-konut-satis-istatistikleri-degerlendirmesi-bizim-menkul-17-11-26/"
      ]
     }
    ]
   },
   {
    "title": "Antalya ve bölge",
    "items": [
     {
      "h": null,
      "p": "Antalya'da Ekim'de yabancıya 752 konut satıldı, geçen yılın aynı ayına göre %1,6 artış. İstanbul (898) ve Antalya birlikte yabancıya satışın %73'ünü aldı; Mersin 153 satışla üçüncü. Ocak–Ekim döneminde Antalya'da yabancıya satış 5.445 adetle %5,5 geride. En çok alan milliyetler Rusya, İran, Irak, Ukrayna ve Almanya.",
      "src": [
       "Yeni Alanya / DHA",
       "https://www.yenialanya.com/yabanciya-konut-satisinin-yuzde-73u-istanbul-ve-antalyada"
      ]
     }
    ]
   },
   {
    "title": "Kısa kısa",
    "items": [
     {
      "h": null,
      "p": "Kasım ayında yenilenen konut ve iş yeri kira sözleşmelerinde artış tavanı %31,23 (12 aylık TÜFE ortalaması). Ekim'de %31,49'du.",
      "src": [
       "Bigpara",
       "https://bigpara.hurriyet.com.tr/haberler/konut-haberleri/son-dakika-kasim-ayi-kira-artis-orani-belli-oldu_ID102281157/"
      ]
     },
     {
      "h": null,
      "p": "İlk kez konut alacak vatandaşı tapu harcından muaf tutmayı öneren kanun teklifi Meclis'e sunuldu. Teklif henüz yasalaşmadı.",
      "src": [
       "Malatya Güncel / İLKHA",
       "https://www.malatyaguncel.com/tedb-genel-baskani-hakan-akcam-ilk-kez-ev-alacak-3120281h.htm"
      ]
     }
    ]
   }
  ],
  "calTitle": "Takvim",
  "cal": [
   [
    "3 Aralık",
    "Kasım enflasyonu ve Aralık kira artış tavanı"
   ],
   [
    "10 Aralık",
    "TCMB PPK faiz kararı"
   ],
   [
    "17 Aralık",
    "PPK toplantı özeti"
   ]
  ],
  "viewTitle": "İş ortağı notu",
  "view": "Yeni ikamet kararı, konut alımıyla ikamet ve vatandaşlık yolunu kaldırmıyor; mevduat ve fon yatırımı için ek bir kapı açıyor. Müşterinin hedefi yalnızca oturumsa bu yol bir alternatif; mülk sahibi olmak, kira geliri ve değer artışı isteniyorsa konut yatırımı öne çıkıyor. 400 bin dolar üzeri alımlarda vatandaşlık seçeneği de açık. Satış tarafında yerli talep zayıfladı ve pazarlık gücü alıcıya geçti; doğru ilk fiyat ve emsal analizi her zamankinden önemli. Antalya'da yabancı talebinin Ekim'de yeniden artması, Rusça, İngilizce ve Almanca pazarlamanın sürdürülmesi gerektiğini gösteriyor.",
  "srcTitle": "Kaynaklar",
  "sources": [
   [
    "Memurlar.net",
    "https://www.memurlar.net/haber/1184464/yabanci-yatirimciya-150-bin-dolara-3-yil-ikamet-izni.html"
   ],
   [
    "Milli Gazete",
    "https://www.milligazete.com.tr/cumhurbaskani-erdogan-imzaladi-yururluge-girdi-yabanci-yatirimcilara-150-bin-dolar-karsiliginda-3-yil-200-bin-dolar-karsiliginda-5-yil-ikamet-izni-getirildi"
   ],
   [
    "Foreks / Bizim Menkul",
    "https://www.foreks.com/haber/detay/6afc5db3d7f1e62e226b552a/FRKS/tr/analiz-ekim-2026-konut-satis-istatistikleri-degerlendirmesi-bizim-menkul-17-11-26/"
   ],
   [
    "Forbes Türkiye",
    "https://www.forbes.com.tr/ekonomi/turkiye-genelinde-ekim-ayinda-konut-satislari-dustu"
   ],
   [
    "Yeni Alanya / DHA",
    "https://www.yenialanya.com/yabanciya-konut-satisinin-yuzde-73u-istanbul-ve-antalyada"
   ],
   [
    "Bigpara",
    "https://bigpara.hurriyet.com.tr/haberler/konut-haberleri/son-dakika-kasim-ayi-kira-artis-orani-belli-oldu_ID102281157/"
   ],
   [
    "Malatya Güncel / İLKHA",
    "https://www.malatyaguncel.com/tedb-genel-baskani-hakan-akcam-ilk-kez-ev-alacak-3120281h.htm"
   ]
  ],
  "note": "Bu sayfa bilgilendirme amaçlıdır, yatırım ve hukuki tavsiye değildir. Haberler kaynaklarından özetlenmiştir."
 },
 "en": {
  "metaTitle": "ACC NEWS · 18 Nov 2026 | New Residence Rule, October Sales",
  "desc": "Foreign investors can now get a 3-year permit for USD 150,000 or up to 5 years for USD 200,000. October home sales fell 23.3%; Antalya foreign sales rose.",
  "h1": "ACC NEWS — News of the Day",
  "dl": "18 November 2026 · By Ali Caner Can, Broker",
  "intro": "Two developments that matter today for our partners and clients, summarised with sources and our view.",
  "sections": [
   {
    "title": "Two key developments",
    "items": [
     {
      "h": "Residence permit for foreign investors: USD 150,000 for 3 years, USD 200,000 for up to 5 years",
      "p": "A Presidential Decree published in the Official Gazette on 18 November 2026 took effect the same day. Foreign investors who place at least USD 150,000 in bank deposits, government debt instruments, real estate investment fund or venture capital fund units, or private pension plans can obtain a residence permit of up to 3 years; USD 200,000 allows up to 5 years. The investment must be held for at least half of the permit period. According to press reports, a direct property purchase is not part of this new route. The citizenship threshold through real estate remains USD 400,000. Application procedures will be set by the Ministry of Interior.",
      "src": [
       "Memurlar.net",
       "https://www.memurlar.net/haber/1184464/yabanci-yatirimciya-150-bin-dolara-3-yil-ikamet-izni.html"
      ]
     },
     {
      "h": "October home sales: 131,000 units, down 23.3% year on year",
      "p": "According to TurkStat, 131,072 homes were sold in October, down 23.3% year on year and 7.9% month on month. Resales fell 28.5% and new-build sales 13.1%. Mortgaged sales eased 5.7% to 23,286, or 17.8% of the total. Sales to foreigners rose 0.9% to 2,259.",
      "src": [
       "Foreks / Bizim Menkul",
       "https://www.foreks.com/haber/detay/6afc5db3d7f1e62e226b552a/FRKS/tr/analiz-ekim-2026-konut-satis-istatistikleri-degerlendirmesi-bizim-menkul-17-11-26/"
      ]
     }
    ]
   },
   {
    "title": "Antalya and the region",
    "items": [
     {
      "h": null,
      "p": "Antalya sold 752 homes to foreign buyers in October, up 1.6% on a year earlier. Istanbul (898) and Antalya together took 73% of foreign sales, with Mersin third at 153. From January to October, Antalya's foreign sales stand at 5,445, 5.5% behind last year. Top buyer nationalities: Russia, Iran, Iraq, Ukraine and Germany.",
      "src": [
       "Yeni Alanya / DHA",
       "https://www.yenialanya.com/yabanciya-konut-satisinin-yuzde-73u-istanbul-ve-antalyada"
      ]
     }
    ]
   },
   {
    "title": "In brief",
    "items": [
     {
      "h": null,
      "p": "The cap on rent increases for leases renewed in November is 31.23% (12-month average CPI), down from 31.49% in October.",
      "src": [
       "Bigpara",
       "https://bigpara.hurriyet.com.tr/haberler/konut-haberleri/son-dakika-kasim-ayi-kira-artis-orani-belli-oldu_ID102281157/"
      ]
     }
    ]
   }
  ],
  "calTitle": "Calendar",
  "cal": [
   [
    "3 Dec",
    "November inflation and December rent cap"
   ],
   [
    "10 Dec",
    "Central Bank rate decision"
   ],
   [
    "17 Dec",
    "Rate meeting summary"
   ]
  ],
  "viewTitle": "Partner note",
  "view": "The new rule does not replace residence or citizenship through property; it adds a separate route via deposits and funds. If a client only needs residence, this is an alternative. If they want ownership, rental income and capital growth, property remains the stronger choice, and purchases above USD 400,000 still open the citizenship route. Domestic demand has softened and buyers have more negotiating room, so accurate pricing backed by comparables matters more than ever. Renewed foreign demand in Antalya in October supports continued marketing in Russian, English and German.",
  "srcTitle": "Sources",
  "sources": [
   [
    "Memurlar.net",
    "https://www.memurlar.net/haber/1184464/yabanci-yatirimciya-150-bin-dolara-3-yil-ikamet-izni.html"
   ],
   [
    "Milli Gazete",
    "https://www.milligazete.com.tr/cumhurbaskani-erdogan-imzaladi-yururluge-girdi-yabanci-yatirimcilara-150-bin-dolar-karsiliginda-3-yil-200-bin-dolar-karsiliginda-5-yil-ikamet-izni-getirildi"
   ],
   [
    "Foreks / Bizim Menkul",
    "https://www.foreks.com/haber/detay/6afc5db3d7f1e62e226b552a/FRKS/tr/analiz-ekim-2026-konut-satis-istatistikleri-degerlendirmesi-bizim-menkul-17-11-26/"
   ],
   [
    "Forbes Türkiye",
    "https://www.forbes.com.tr/ekonomi/turkiye-genelinde-ekim-ayinda-konut-satislari-dustu"
   ],
   [
    "Yeni Alanya / DHA",
    "https://www.yenialanya.com/yabanciya-konut-satisinin-yuzde-73u-istanbul-ve-antalyada"
   ],
   [
    "Bigpara",
    "https://bigpara.hurriyet.com.tr/haberler/konut-haberleri/son-dakika-kasim-ayi-kira-artis-orani-belli-oldu_ID102281157/"
   ],
   [
    "Malatya Güncel / İLKHA",
    "https://www.malatyaguncel.com/tedb-genel-baskani-hakan-akcam-ilk-kez-ev-alacak-3120281h.htm"
   ]
  ],
  "note": "This page is for information only and is not investment or legal advice. News items are summarised from their sources."
 },
 "ru": {
  "metaTitle": "ACC NEWS · 18.11.2026 | Новое ВНЖ и продажи за октябрь",
  "desc": "ВНЖ до 3 лет за 150 000 $ и до 5 лет за 200 000 $ для иностранных инвесторов. Продажи жилья в октябре −23,3%, продажи иностранцам в Анталии выросли.",
  "h1": "ACC NEWS — новость дня",
  "dl": "18 ноября 2026 · Автор: Али Джанер Джан, брокер",
  "intro": "Два важных события дня для наших партнёров и клиентов — кратко, с источниками и нашим комментарием.",
  "sections": [
   {
    "title": "Два ключевых события",
    "items": [
     {
      "h": "ВНЖ для иностранных инвесторов: 150 000 $ — до 3 лет, 200 000 $ — до 5 лет",
      "p": "Указ Президента, опубликованный в Официальной газете 18 ноября 2026 года, вступил в силу в тот же день. Иностранец, вложивший не менее 150 000 $ в банковский депозит, государственные долговые бумаги, паи фондов недвижимости или венчурных фондов либо в частную пенсионную программу, может получить ВНЖ до 3 лет; при 200 000 $ — до 5 лет. Вложения нужно сохранять не менее половины срока разрешения. По данным прессы, прямая покупка недвижимости в этот новый механизм не входит. Порог гражданства через недвижимость остаётся 400 000 $. Порядок подачи заявлений определит МВД.",
      "src": [
       "Memurlar.net",
       "https://www.memurlar.net/haber/1184464/yabanci-yatirimciya-150-bin-dolara-3-yil-ikamet-izni.html"
      ]
     },
     {
      "h": "В октябре продано 131 тыс. квартир, на 23,3% меньше, чем год назад",
      "p": "По данным TÜİK, в октябре продано 131 072 единицы жилья: минус 23,3% за год и минус 7,9% за месяц. Вторичный рынок снизился на 28,5%, первичный — на 13,1%. Ипотечные сделки сократились на 5,7%, до 23 286 (17,8% всех продаж). Продажи иностранцам выросли на 0,9%, до 2 259.",
      "src": [
       "Foreks / Bizim Menkul",
       "https://www.foreks.com/haber/detay/6afc5db3d7f1e62e226b552a/FRKS/tr/analiz-ekim-2026-konut-satis-istatistikleri-degerlendirmesi-bizim-menkul-17-11-26/"
      ]
     }
    ]
   },
   {
    "title": "Анталия и регион",
    "items": [
     {
      "h": null,
      "p": "В октябре иностранцы купили в Анталии 752 объекта — на 1,6% больше, чем годом ранее. На Стамбул (898) и Анталию пришлось 73% всех продаж иностранцам, Мерсин — третий со 153 сделками. За январь–октябрь продажи иностранцам в Анталии составили 5 445, что на 5,5% ниже прошлого года. Больше всего покупали граждане России, Ирана, Ирака, Украины и Германии.",
      "src": [
       "Yeni Alanya / DHA",
       "https://www.yenialanya.com/yabanciya-konut-satisinin-yuzde-73u-istanbul-ve-antalyada"
      ]
     }
    ]
   }
  ],
  "calTitle": "Календарь",
  "cal": [
   [
    "3 дек.",
    "Инфляция за ноябрь и лимит роста аренды на декабрь"
   ],
   [
    "10 дек.",
    "Решение ЦБ по ставке"
   ],
   [
    "17 дек.",
    "Резюме заседания ЦБ"
   ]
  ],
  "viewTitle": "Комментарий для партнёров",
  "view": "Новое правило не отменяет ВНЖ и гражданство через покупку недвижимости, а добавляет отдельный путь через депозиты и фонды. Если клиенту нужен только ВНЖ, это альтернатива. Если важны собственность, арендный доход и рост стоимости, недвижимость остаётся более сильным выбором, а покупка от 400 000 $ по-прежнему открывает путь к гражданству. Внутренний спрос ослаб, у покупателей больше возможностей для торга, поэтому точная цена на основе сравнимых объектов особенно важна. Рост интереса иностранцев к Анталии в октябре подтверждает, что маркетинг на русском, английском и немецком нужно продолжать.",
  "srcTitle": "Источники",
  "sources": [
   [
    "Memurlar.net",
    "https://www.memurlar.net/haber/1184464/yabanci-yatirimciya-150-bin-dolara-3-yil-ikamet-izni.html"
   ],
   [
    "Milli Gazete",
    "https://www.milligazete.com.tr/cumhurbaskani-erdogan-imzaladi-yururluge-girdi-yabanci-yatirimcilara-150-bin-dolar-karsiliginda-3-yil-200-bin-dolar-karsiliginda-5-yil-ikamet-izni-getirildi"
   ],
   [
    "Foreks / Bizim Menkul",
    "https://www.foreks.com/haber/detay/6afc5db3d7f1e62e226b552a/FRKS/tr/analiz-ekim-2026-konut-satis-istatistikleri-degerlendirmesi-bizim-menkul-17-11-26/"
   ],
   [
    "Forbes Türkiye",
    "https://www.forbes.com.tr/ekonomi/turkiye-genelinde-ekim-ayinda-konut-satislari-dustu"
   ],
   [
    "Yeni Alanya / DHA",
    "https://www.yenialanya.com/yabanciya-konut-satisinin-yuzde-73u-istanbul-ve-antalyada"
   ],
   [
    "Bigpara",
    "https://bigpara.hurriyet.com.tr/haberler/konut-haberleri/son-dakika-kasim-ayi-kira-artis-orani-belli-oldu_ID102281157/"
   ],
   [
    "Malatya Güncel / İLKHA",
    "https://www.malatyaguncel.com/tedb-genel-baskani-hakan-akcam-ilk-kez-ev-alacak-3120281h.htm"
   ]
  ],
  "note": "Материал носит информационный характер и не является инвестиционной или юридической консультацией. Новости кратко изложены по источникам."
 }
} },
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
