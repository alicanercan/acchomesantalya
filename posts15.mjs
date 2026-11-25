// Blog 15 (25.11.2026): Antalya konut piyasası Kasım 2026 — reel fiyat kaybı, ilan süresi, ruhsat/iskân (TR/EN/RU).
// Kaynak: claude/acc-news/2026-11-25.md (BETAM sahibindex Ekim 2026, TÜİK Ekim satış, TÜİK 3. çeyrek yapı izin, TÜİK Kasım güven, TCMB). Caner talebi 25.11.2026.
const B = (s, t) => `<a href="{{URL:blog}}${s}/">${t}</a>`;
const WA = (t) => `<a href="{{WA}}" target="_blank" rel="noopener">${t}</a>`;
const SRC = `<ol class="nsources">
<li><a href="https://www.emlakdream.com/satilik-konutta-reel-fiyat-kaybi-yeniden-hizlandi-ilanlarin-yayinda-kalma-suresi-58-6-gune-cikti/" target="_blank" rel="noopener nofollow">EmlakDream, BETAM sahibindex Ekim 2026 (25.11.2026)</a></li>
<li><a href="https://www.akdenizgercek.com.tr/ekonomi/antalyada-2026nin-ucuncu-ceyreginde-8-bin-733-daireye-yapi-ruhsati-verildi/389913" target="_blank" rel="noopener nofollow">Akdeniz Gerçek, TÜİK Yapı İzin İstatistikleri 3. çeyrek 2026 (24.11.2026)</a></li>
<li><a href="https://www.emlakdream.com/insaat-sektoru-guven-endeksi-kasim-ayinda-yuzde-3-8-azaldi/" target="_blank" rel="noopener nofollow">EmlakDream, TÜİK inşaat güven endeksi Kasım 2026 (24.11.2026)</a></li>
<li><a href="https://www.dha.com.tr/ekonomi/tuik-ekimde-131-bin-72-konut-satildi-2983242" target="_blank" rel="noopener nofollow">DHA, TÜİK Ekim 2026 konut satışları</a></li>
<li><a href="https://haberdijital.com.tr/gayrimenkul-yatirimi-artti-konut-fiyat-beklentisi-dustu/" target="_blank" rel="noopener nofollow">Haber Dijital, TCMB Kasım 2026 hanehalkı beklenti anketi</a></li>
<li><a href="https://www.memurlar.net/haber/1185079/kredi-karti-azami-akdi-faiz-orani-yuzde-3-08-e-indirildi.html" target="_blank" rel="noopener nofollow">Memurlar.net / AA, TCMB kredi kartı faiz tavanları (24.11.2026)</a></li>
</ol>`;

export const POSTS15 = [
  {
    slug: 'antalya-konut-piyasasi-kasim-2026', cat: 'veri', date: '2026-11-25', icon: '📊',
    tr: {
      title: 'Antalya Konut Piyasası Kasım 2026: Reel Fiyat Kaybı, İlan Süresi ve Yeni Arz',
      seo: 'Antalya Konut Piyasası Kasım 2026: Fiyatlar ve Arz',
      desc: 'Konut fiyatları reelde yıllık %9 düştü, ilanlar 58,6 gün bekliyor. Antalya’da 3. çeyrekte 8.733 daireye ruhsat verildi. Satıcı ve alıcı için ne anlama geliyor?',
      html: `
<p>Kasım’ın son haftasında açıklanan veriler, konut piyasasında iki şeyi aynı anda gösteriyor: <b>fiyatlar enflasyonun gerisinde kalıyor ve evler daha uzun sürede satılıyor.</b> Öte yandan Antalya’da teslim edilen yeni konut sayısı yüksek, yeni proje başlangıcı ise yavaşlamış durumda. Bu yazıda rakamları tek tek açıklıyor, satıcı, alıcı ve yatırımcı için ne anlama geldiğini özetliyoruz.</p>
<h2>Konut fiyatları: nominalde %18 artış, reelde %9 düşüş</h2>
<p>Bahçeşehir Üniversitesi BETAM’ın sahibinden.com ilan verisine dayanan Ekim 2026 raporuna göre Türkiye’de satılık konutların ortalama ilan fiyatı <b>47.179 TL/m²</b> oldu.</p>
<ul class="ticks">
<li><b>Nominal yıllık artış:</b> %18 (Eylül’de %19,6)</li>
<li><b>Reel yıllık değişim:</b> −%9 (Eylül’de −%7,8). Enflasyondan arındırılmış fiyatlar bir yılda %9 geriledi.</li>
<li><b>Reel aylık değişim:</b> Ekim’de −%1,5</li>
<li><b>Büyükşehirler:</b> İstanbul’da reel yıllık −%5,2 (ortalama 68.889 TL/m²), Ankara’da −%3,4, İzmir’de −%10,4</li>
</ul>
<p>Raporda Antalya için ayrı bir rakam yer almıyor. Türkiye ortalaması, Antalya’daki genel eğilim hakkında fikir verir; ancak Konyaaltı, Lara, Altıntaş ya da Döşemealtı gibi bölgeler arasında farklar büyüktür. Bölgenize özel değer için ${B('evimi-satarken-dogru-fiyat-nasil-belirlenir', 'emsal analizi')} şart.</p>
<h2>İlanlar 58,6 gün yayında kalıyor</h2>
<p>Satılık bir konut ilanının ortalama yayında kalma süresi Ağustos’ta 54,2, Eylül’de 57,6 gündü; Ekim’de <b>58,6 güne</b> çıktı. Talep endeksi de Ekim’de aylık %2,9 geriledi. Yani alıcı daha seçici, karar süresi uzuyor.</p>
<p>TÜİK verileri de aynı tabloyu gösteriyor: Ekim’de Türkiye’de 131.072 konut satıldı, yıllık düşüş %23,3. İkinci el satışlar %28,5, ilk el satışlar %13,1 geriledi. Yabancıya satış ise 2.259 adetle yıllık %0,9 arttı; Antalya Ekim’de yabancıya 752 konut sattı. Ayrıntılar için ${B('antalya-konut-satis-istatistikleri', 'Antalya konut satış istatistikleri')} sayfamıza bakabilirsiniz.</p>
<h2>Antalya’da yeni arz: 8.733 daireye ruhsat, 7.604 daireye iskân</h2>
<p>TÜİK’in Temmuz–Eylül 2026 yapı izin istatistiklerine göre Antalya’da üç ayda <b>8.733 daire için yapı ruhsatı</b>, <b>7.604 daire için yapı kullanma izni (iskân)</b> verildi.</p>
<p>Türkiye genelinde ise tablo şöyle: ruhsat verilen daire sayısı yıllık yalnızca %1,6 artarken iskân alan daire sayısı %21,1 arttı. Ruhsatlı yapı alanı %2,2, iskânlı yapı alanı %11 büyüdü. Kısacası geçmiş yıllarda başlayan projeler hızla teslim ediliyor, yeni proje başlangıcı ise yavaşladı.</p>
<p>Müteahhit tarafındaki hava da temkinli: TÜİK’in Kasım inşaat sektörü güven endeksi aylık %3,8 düşüşle <b>80,2</b>’ye indi. 100’ün altındaki değer, sektörde karamsarlığın ağır bastığını gösterir.</p>
<h2>Talep tarafı: yatırım isteği artıyor, ödeme gücü sınırlı</h2>
<p>TCMB’nin Kasım hanehalkı beklenti anketinde birikimini gayrimenkule yönlendirmek isteyenlerin oranı %35,6’dan %36,5’e çıktı; 12 ay sonrası için konut fiyat artışı beklentisi %30,10. İstek var, ancak peşinat ve taksit yükü alımı sınırlıyor. 19 Kasım’da yürürlüğe giren ${B('bddk-konut-kredisi-ikinci-ev-karari-kasim-2026', 'BDDK ikinci konut kredisi kararı')} evi olanların kredi limitini genişletti. TCMB’nin kredi kartı referans oranını 1 Aralık’tan geçerli olmak üzere %3,11’den %2,94’e çekmesi de faizlerde düşüş eğiliminin sürdüğünü gösteriyor.</p>
<h2>Satıcı, alıcı ve yatırımcı için ne anlama geliyor?</h2>
<p><b>Satıcı için:</b> Evler her ay biraz daha uzun bekliyor. Piyasanın üzerinde fiyatlanan bir ilan iki ayı rahatça geçebilir ve sonunda daha büyük bir indirimle satılır. İlk 30 günde emsallere dayanan doğru fiyatla çıkmak, sonradan indirim yapmaktan daha az kaybettirir. Yeni teslim edilen projelerle aynı alıcıya rakip olduğunuzu unutmayın; fotoğraf, ilan metni ve ödeme esnekliği (kısmi peşin, krediye uygunluk) fark yaratır.</p>
<p><b>Alıcı için:</b> Fiyatlar enflasyonun altında artıyor ve ilanlar uzun bekliyor; pazarlık payı geçen yıla göre daha geniş. Antalya’da iskânlı, teslime hazır seçenek bol. Krediyle alacaksanız bankaların genellikle iskân aradığını unutmayın ve tapudan önce ${B('antalya-ev-alirken-dikkat-edilmesi-gerekenler', 'yasal kontrol listesini')} gözden geçirin.</p>
<p><b>Yabancı alıcı için:</b> TL bazında reel fiyat düşüşü, döviz bazında bakan alıcı için alım avantajı olarak değerlendirilebilir. Yine de bu bir Türkiye ortalamasıdır; bölge ve proje bazında değerlendirme yapılmalıdır.</p>
<p><b>Yatırımcı için:</b> Yeni ruhsatların zayıf seyri ve müteahhit güveninin düşük olması, 2027–2028’de yeni konut arzının sınırlı kalabileceğine işaret ediyor. Bu kesin bir fiyat öngörüsü değil, izlenmesi gereken bir eğilim. Bölge seçimi için ${B('antalyada-gayrimenkul-yatirimi-bolgeler-ve-stratejiler', 'Antalya yatırım rehberimize')} göz atabilirsiniz.</p>
<h2>ACC HOMES’un görüşü</h2>
<p>Bugünkü piyasada fiyatı belirleyen şey beklenti değil, alıcının ödeme gücü. Doğru fiyat, doğru finansman kurgusu ve iyi bir sunum bir araya geldiğinde satış süresi kısalıyor. Evinizin bugünkü piyasa değerini öğrenmek ya da bütçenize uygun seçenekleri görmek için ${WA('WhatsApp’tan bize yazın →')}</p>
<p class="srcs">Bu yazı genel bilgilendirme amaçlıdır, yatırım tavsiyesi değildir. Rakamlar aşağıdaki kaynaklardan özetlenmiştir.</p>
<h2>Kaynaklar</h2>
${SRC}`,
      faq: [
        ['Konut fiyatları düşüyor mu?', 'Nominal olarak hayır: Ekim 2026’da ilan fiyatları yıllık %18 arttı. Ancak enflasyondan arındırıldığında yıllık %9 düşüş var (BETAM sahibindex). Yani fiyatlar enflasyonun gerisinde kalıyor.'],
        ['Bir ev ortalama kaç günde satılıyor?', 'BETAM verisine göre Ekim 2026’da satılık konut ilanları ortalama 58,6 gün yayında kaldı. Bu süre Ağustos’ta 54,2 gündü. Doğru fiyatlanan ilanlar ortalamadan daha hızlı satılır.'],
        ['Antalya’da ne kadar yeni konut üretiliyor?', 'TÜİK’e göre Temmuz–Eylül 2026’da Antalya’da 8.733 daire için yapı ruhsatı, 7.604 daire için iskân verildi.'],
        ['Şimdi ev almak mantıklı mı?', 'Pazarlık payı geçen yıla göre daha geniş ve hazır stok bol. Karar bütçenize, finansman koşullarınıza ve bölge seçiminize bağlıdır. Genel bilgilendirmedir, yatırım tavsiyesi değildir.'],
      ],
    },
    en: {
      title: 'Antalya Housing Market November 2026: Real Price Decline, Time on Market and New Supply',
      seo: 'Antalya Housing Market November 2026: Prices & Supply',
      desc: 'Turkish home prices fell 9% in real terms; listings now stay 58.6 days. Antalya issued permits for 8,733 homes in Q3. What it means for sellers and buyers.',
      html: `
<p>Data released in the last week of November shows two things at once: <b>home prices are lagging inflation and homes are taking longer to sell.</b> Meanwhile Antalya is completing many new homes, while new project starts have slowed. Here are the numbers and what they mean for sellers, buyers and investors.</p>
<h2>Prices: up 18% in lira, down 9% in real terms</h2>
<p>According to the October 2026 report by Bahçeşehir University’s BETAM, based on sahibinden.com listing data, the average asking price for homes in Turkey was <b>TRY 47,179 per m²</b>.</p>
<ul class="ticks">
<li><b>Nominal annual change:</b> +18% (September: +19.6%)</li>
<li><b>Real annual change:</b> −9% (September: −7.8%)</li>
<li><b>Real monthly change:</b> −1.5% in October</li>
<li><b>Major cities:</b> Istanbul −5.2% real (average TRY 68,889/m²), Ankara −3.4%, Izmir −10.4%</li>
</ul>
<p>The report does not give a separate figure for Antalya. The national average indicates the general trend, but prices differ widely between Konyaaltı, Lara, Altıntaş and Döşemealtı.</p>
<h2>Listings stay online for 58.6 days</h2>
<p>The average time a sale listing stays online rose from 54.2 days in August and 57.6 in September to <b>58.6 days</b> in October. The demand index fell 2.9% month on month. Buyers are more selective and take longer to decide.</p>
<p>TurkStat data confirms the picture: 131,072 homes were sold in October, down 23.3% year on year. Resales fell 28.5% and new-build sales 13.1%. Sales to foreigners rose 0.9% to 2,259, and Antalya sold 752 homes to foreign buyers in October.</p>
<h2>New supply in Antalya: permits for 8,733 homes, completions for 7,604</h2>
<p>TurkStat’s building permit statistics for July–September 2026 show that Antalya issued <b>construction permits for 8,733 dwellings</b> and <b>occupancy permits (iskân) for 7,604 dwellings</b>.</p>
<p>Across Turkey, the number of dwellings receiving construction permits rose only 1.6% year on year, while dwellings receiving occupancy permits rose 21.1%. Projects started in previous years are being delivered quickly, while new starts have slowed. TurkStat’s construction confidence index also fell 3.8% in November to <b>80.2</b>; a value below 100 signals pessimism.</p>
<h2>What it means</h2>
<p><b>Sellers:</b> An overpriced listing can easily sit for more than two months and end up selling at a bigger discount. Pricing correctly from comparables in the first 30 days costs less than cutting later.</p>
<p><b>Buyers:</b> Prices are rising below inflation and listings stay longer, so there is more room to negotiate than last year. Ready, completed homes with occupancy permits are widely available in Antalya.</p>
<p><b>Foreign buyers:</b> A real decline in lira prices can be an advantage for buyers who think in foreign currency. This is a national average, so each area and project should be assessed individually.</p>
<p><b>Investors:</b> Weak growth in new permits and low developer confidence point to limited new supply in 2027–2028. This is a trend to watch, not a price forecast.</p>
<p>To find out what your home is worth today, or to see options that fit your budget, ${WA('message us on WhatsApp →')}</p>
<p class="srcs">This article is general information, not investment advice. Figures are summarised from the sources below.</p>
<h2>Sources</h2>
${SRC}`,
      faq: [
        ['Are house prices falling in Turkey?', 'Not in lira terms: asking prices rose 18% year on year in October 2026. Adjusted for inflation, however, they fell 9% (BETAM sahibindex).'],
        ['How long does it take to sell a home?', 'According to BETAM, sale listings stayed online for an average of 58.6 days in October 2026, up from 54.2 days in August.'],
        ['How many new homes is Antalya building?', 'According to TurkStat, Antalya issued construction permits for 8,733 dwellings and occupancy permits for 7,604 dwellings in July–September 2026.'],
      ],
    },
    ru: {
      title: 'Рынок жилья Анталии, ноябрь 2026: реальное снижение цен, срок экспозиции и новое предложение',
      seo: 'Рынок жилья Анталии, ноябрь 2026: цены и предложение',
      desc: 'Цены на жильё в Турции снизились на 9% в реальном выражении, объявления висят 58,6 дня. В Анталии за III квартал выдано разрешений на 8 733 квартиры.',
      html: `
<p>Данные последней недели ноября показывают сразу две вещи: <b>цены на жильё отстают от инфляции, а продажа занимает больше времени.</b> При этом в Анталии сдаётся много новых квартир, а запуск новых проектов замедлился.</p>
<h2>Цены: +18% в лирах, −9% в реальном выражении</h2>
<p>По октябрьскому отчёту BETAM (Университет Бахчешехир) на основе объявлений sahibinden.com, средняя цена предложения жилья в Турции составила <b>47 179 лир за м²</b>.</p>
<ul class="ticks">
<li><b>Номинальный рост за год:</b> +18% (в сентябре +19,6%)</li>
<li><b>Реальное изменение за год:</b> −9% (в сентябре −7,8%)</li>
<li><b>Реальное изменение за месяц:</b> −1,5% в октябре</li>
<li><b>Крупные города:</b> Стамбул −5,2% в реальном выражении (в среднем 68 889 лир/м²), Анкара −3,4%, Измир −10,4%</li>
</ul>
<p>Отдельных данных по Анталии в отчёте нет. Среднее по стране показывает общий тренд, но цены в Коньяалты, Ларе, Алтынташе и Дёшемеалты сильно различаются.</p>
<h2>Объявления держатся 58,6 дня</h2>
<p>Средний срок экспозиции объявления о продаже вырос с 54,2 дня в августе и 57,6 в сентябре до <b>58,6 дня</b> в октябре. Индекс спроса снизился на 2,9% за месяц.</p>
<p>Данные TÜİK подтверждают картину: в октябре продано 131 072 единицы жилья, на 23,3% меньше, чем год назад. Продажи иностранцам выросли на 0,9%, до 2 259; в Анталии иностранцы купили 752 объекта.</p>
<h2>Новое предложение в Анталии: 8 733 разрешения на строительство, 7 604 на ввод</h2>
<p>По данным TÜİK за июль–сентябрь 2026 года, в Анталии выдано <b>разрешений на строительство 8 733 квартир</b> и <b>разрешений на ввод в эксплуатацию (искан) 7 604 квартир</b>. По Турции число квартир с разрешением на строительство выросло за год лишь на 1,6%, а с разрешением на ввод — на 21,1%. Индекс доверия в строительстве в ноябре снизился на 3,8%, до <b>80,2</b>.</p>
<h2>Что это значит</h2>
<p><b>Продавцам:</b> объявление с завышенной ценой легко провисит больше двух месяцев. Правильная цена по сравнимым объектам в первые 30 дней обходится дешевле, чем последующее снижение.</p>
<p><b>Покупателям:</b> цены растут медленнее инфляции, объявления висят дольше — возможностей для торга больше, чем год назад. Готового жилья с исканом в Анталии много.</p>
<p><b>Иностранным покупателям:</b> реальное снижение цен в лирах может быть преимуществом для тех, кто считает в валюте. Это среднее по стране, каждый район и проект нужно оценивать отдельно.</p>
<p><b>Инвесторам:</b> слабый рост новых разрешений и низкое доверие застройщиков указывают на ограниченное новое предложение в 2027–2028 годах. Это тренд, а не прогноз цен.</p>
<p>Чтобы узнать стоимость вашей квартиры или подобрать варианты под ваш бюджет, ${WA('напишите нам в WhatsApp →')}</p>
<p class="srcs">Материал носит информационный характер и не является инвестиционной рекомендацией.</p>
<h2>Источники</h2>
${SRC}`,
      faq: [
        ['Дешевеет ли жильё в Турции?', 'В лирах нет: в октябре 2026 года цены предложения выросли на 18% за год. С учётом инфляции они снизились на 9% (BETAM sahibindex).'],
        ['Сколько времени занимает продажа квартиры?', 'По данным BETAM, в октябре 2026 года объявления о продаже в среднем держались 58,6 дня.'],
        ['Сколько нового жилья строится в Анталии?', 'По данным TÜİK, в июле–сентябре 2026 года в Анталии выдано разрешений на строительство 8 733 квартир и на ввод в эксплуатацию 7 604 квартир.'],
      ],
    },
  },
];
