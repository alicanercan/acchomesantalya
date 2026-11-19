// Blog 6. parti (20.11.2026): Antalya Yaşam Rehberi serisinin ilk iki yazısı. Şimdilik yalnız TR (EN Caner onayından sonra).
// Kaynak taslaklar: ACC HOMES Workspace projesi, claude/blog-1-antalya-avm-rehberi.md ve claude/blog-2-antalya-tarihi-antik-kentler.md
// AVM sıralaması Google Trends (Antalya, son 12 ay, Kasım 2026); tarih sıralaması Google Trends (dünya, son 12 ay).
// Mağaza bilgileri (Zara, MediaMarkt, Decathlon, Tesla) değişebilir; 6 ayda bir kontrol edin. Kapak görselleri ayrıca eklenecek.
const A = (s, t) => `<a href="{{URL:areas}}${s}/">${t}</a>`;
const P = (s, t) => `<a href="{{URL:projects}}${s}/">${t}</a>`;

export const POSTS6 = [
  {
    slug: 'antalya-avm-rehberi', cat: 'bolge', date: '2026-11-20', icon: '🛍️',
    tr: {
      title: 'Antalya AVM Rehberi 2026: Alışveriş Merkezleri ve Yakın Semtler',
      seo: 'Antalya AVM Rehberi 2026: Alışveriş Merkezleri ve Yakın Semtler',
      desc: 'Antalya’nın alışveriş merkezleri ilçe ilçe: MarkAntalya, TerraCity, Mall of Antalya, ÖzdilekPark, 5M Migros, Erasta, Deepo ve daha fazlası; konumlar ve yakın konut bölgeleri.',
      html: `
<p>Antalya’da ev seçerken alışverişe, sinemaya ve günlük ihtiyaçlara yakınlık, özellikle aileler için belirleyici ölçütlerden biri. Bu rehberde şehrin başlıca alışveriş merkezlerini konumlarıyla ve çevresindeki konut bölgeleriyle birlikte derledik. Sıralamayı, Google’da Antalya’dan yapılan aramalara göre belirledik.</p>
<h2>1. ÖzdilekPark Antalya (Kepez)</h2>
<p>Fabrikalar Mahallesi’ndeki ÖzdilekPark; geniş mağaza ve restoran seçeneği, sinema, bowling ve çocuk oyun alanlarıyla her yaştan ziyaretçiye hitap ediyor. Önündeki durağa birçok şehir içi otobüs hattı uğruyor.</p>
<p><b>Çevresindeki konut bölgeleri:</b> Fabrikalar, Dokuma, Kültür ve Kepez merkez. Bölgeyi tanımak için ${A('kepez', 'Kepez rehberimize')} bakabilirsiniz.</p>
<h2>2. MarkAntalya (Muratpaşa, şehir merkezi)</h2>
<p>Tahılpazarı Mahallesi’ndeki MarkAntalya, Antalya’nın tam merkezinde, şehrin ortak buluşma noktası. Yaya trafiğinin en yoğun olduğu bu noktada otobüs hatları ve raylı sistem kesişiyor; Kaleiçi kısa bir yürüyüş mesafesinde. Moda, teknoloji, yeme-içme ve sinema bir arada; elektronik alışverişi için MediaMarkt da burada.</p>
<p><b>Bu çevrede ev arayanlar için:</b> araçsız yaşam, her yöne toplu taşıma ve kiralık talebi yüksek bir merkez konum. Ayrıntılar: ${A('muratpasa', 'Muratpaşa rehberi')}.</p>
<h2>3. TerraCity (Muratpaşa, Fener)</h2>
<p>Fener Mahallesi’ndeki TerraCity, Lara tarafının en çok tercih edilen alışveriş merkezi. Çok sayıda mağaza ve restoran, büyük bir yemek katı ve sinema sunuyor; önündeki duraktan birçok otobüs hattı geçiyor.</p>
<p>TerraCity yalnızca alışveriş için değil, sosyal hayat için de bir buluşma noktası: kış sezonunda kurulan Christmas Market ve buz pateni pisti şehrin en sevilen yılbaşı etkinliklerinden; AVM’nin çatısında ise padel kortları bulunuyor. Öne çıkan mağazalar arasında Zara, MediaMarkt ve Decathlon var.</p>
<p><b>Çevresindeki konut bölgeleri:</b> ${A('fener', 'Fener')}, ${A('sirinyali', 'Şirinyalı')}, ${A('lara-guzeloba', 'Lara ve Güzeloba')} ve Çağlayan.</p>
<h2>4. Mall of Antalya (Kepez, havalimanı yolu)</h2>
<p>Havalimanı yolu üzerindeki Mall of Antalya; mağazaları, sinema ve çocuk alanlarıyla öne çıkıyor. Deepo Outlet ile içeriden bağlantılı; IKEA ve Agora da hemen yakınında. Bu üçlü, şehrin doğusunda büyük bir alışveriş aksı oluşturuyor.</p>
<p><b>Çevresindeki konut bölgeleri:</b> Altınova, Altıntaş, ${A('kundu', 'Kundu')} ve Lara’nın doğusu. Bu bölgedeki yetkili projelerimiz: ${P('prime-lara-altintas', 'Prime Lara')}, ${P('falez-manzara-altintas', 'Falez Manzara')} ve ${P('math-uno-dos', 'Math UNO ve DOS')}. Ayrıca ${A('aksu-altintas', 'Altıntaş rehberimiz')}.</p>
<h2>5. Erasta Antalya (Kepez)</h2>
<p>Erasta, Kepez’de; Konyaaltı ile Döşemealtı ilçelerinin arasında, Akdeniz Üniversitesi Hastanesi’ne ve şehirlerarası otogara yakın konumda. Sinema, yeme-içme ve Decathlon’un büyük spor mağazası bulunuyor. Döşemealtı’nda yaşayanlar için en yakın büyük AVM.</p>
<p><b>Bu çevrede:</b> ${A('konyaalti', 'Konyaaltı')}, ${A('dosemealti', 'Döşemealtı')} ve ${P('nox-apt-dosemealti', 'Nox Apt')}.</p>
<h2>6. 5M Migros (Konyaaltı)</h2>
<p>Arapsuyu Mahallesi’nde, Atatürk Bulvarı üzerindeki 5M Migros, Antalya’nın ilk büyük alışveriş merkezlerinden ve açıldığı günden bu yana şehrin en sevilen AVM’lerinden biri. Konserlere, sosyal ve kültürel etkinliklere ev sahipliği yapıyor; büyük hipermarketi, sineması ve yemek katının yanı sıra Zara, MediaMarkt ve Tesla mağazası da burada. Otobüs ve tramvay duraklarına, Beach Park ve Atatürk Parkı’na yakın.</p>
<p><b>Çevresindeki konut bölgeleri:</b> Arapsuyu, ${A('liman-sarisu', 'Liman')}, ${A('hurma', 'Hurma')}, Uncalı ve Konyaaltı sahili.</p>
<h2>7. Deepo Outlet Center (Kepez, havalimanı karşısı)</h2>
<p>Havalimanının karşısındaki Deepo, bölgenin en bilinen outlet merkezlerinden biri; marka mağazalarında indirimli alışveriş imkânı sunuyor ve Mall of Antalya ile bağlantılı. Çevresindeki konut bölgeleri Altınova, Altıntaş ve Kundu.</p>
<h2>8. Agora Antalya ve IKEA (Kepez)</h2>
<p>Agora Antalya, IKEA ile birlikte ve Mall of Antalya’ya yürüme mesafesinde. Ev kuranlar için mobilya, dekorasyon ve market alışverişini tek noktada toplayan bir adres.</p>
<h2>9. Fenix Center (Konyaaltı, Liman)</h2>
<p>Liman Mahallesi’ndeki Fenix Center; alışveriş, otel ve rezidansı bir araya getiren karma bir proje. Google’da son dönemde en hızlı yükselen AVM araması, mağazalara ve açılışa olan merakı gösteriyor. Bölge için ${A('liman-sarisu', 'Liman ve Sarısu rehberimize')} bakabilirsiniz.</p>
<h2>10. The Land of Legends Shopping Avenue (Serik, Kadriye)</h2>
<p>Belek turizm bölgesinde, Kadriye’deki The Land of Legends; tema park, su parkı ve otelle birlikte mağaza, restoran ve kafelerden oluşan bir alışveriş caddesi sunuyor. Belek’in golf sahalarına ve golf otellerine yakın, havalimanına kısa mesafede.</p>
<p><b>Bu bölgede ev arayanlar için:</b> golf ve tatil yaşamı, kiralama potansiyeli ve havalimanına hızlı erişim. Ayrıntılar: ${A('belek', 'Belek')} ve ${A('kadriye', 'Kadriye')} rehberleri.</p>
<h2>Hangi bölgeye hangi AVM yakın</h2>
<table><thead><tr><th>Bölge</th><th>Yakın AVM’ler</th></tr></thead><tbody>
<tr><td>Konyaaltı (Liman, Hurma, Arapsuyu)</td><td>5M Migros, Fenix Center, Erasta</td></tr>
<tr><td>Muratpaşa merkez</td><td>MarkAntalya</td></tr>
<tr><td>Lara, Fener, Şirinyalı, Güzeloba</td><td>TerraCity</td></tr>
<tr><td>Kepez</td><td>ÖzdilekPark, Erasta</td></tr>
<tr><td>Döşemealtı</td><td>Erasta</td></tr>
<tr><td>Altıntaş, Altınova, Kundu</td><td>Mall of Antalya, Deepo, Agora ve IKEA</td></tr>
<tr><td>Belek, Kadriye</td><td>The Land of Legends</td></tr>
</tbody></table>
<h2>Yaşamak istediğiniz çevreyi birlikte bulalım</h2>
<p>ACC HOMES International Real Estate olarak Antalya’nın her bölgesinde satılık ve kiralık konut seçenekleri sunuyoruz. Hangi AVM’ye, okula ya da işinize yakın yaşamak istediğinizi söyleyin; size uygun seçenekleri birlikte değerlendirelim: <a href="{{WA}}" target="_blank" rel="noopener">WhatsApp’tan yazın →</a> ya da <a href="{{URL:list}}">ilanlarımıza göz atın</a>.</p>
<p class="note">Mağaza ve etkinlik bilgileri Kasım 2026 itibarıyla derlenmiştir ve değişebilir; güncel bilgi için AVM’lerin resmi sitelerine bakınız.</p>`,
      faq: [
        ['Havalimanına en yakın AVM’ler hangileri?', 'Deepo Outlet, Mall of Antalya ve Agora/IKEA, havalimanı yolu üzerinde birbirine yakın konumda.'],
        ['Konyaaltı’nda hangi AVM’ler var?', '5M Migros ve Liman Mahallesi’ndeki Fenix Center. Erasta da Konyaaltı’nın kuzeyine yakın.'],
        ['Lara’ya en yakın AVM hangisi?', 'Fener Mahallesi’ndeki TerraCity.'],
        ['Zara, MediaMarkt ve Decathlon Antalya’da hangi AVM’lerde?', 'Zara: TerraCity ve 5M Migros. MediaMarkt: MarkAntalya, TerraCity ve 5M Migros. Decathlon: Erasta ve TerraCity.'],
        ['Toplu taşımayla en kolay ulaşılan AVM hangisi?', 'Şehrin tam merkezindeki MarkAntalya; otobüs hatları ve raylı sistem burada kesişiyor.'],
      ],
    },
  },
  {
    slug: 'antalya-tarihi-antik-kentler', cat: 'bolge', date: '2026-11-20', icon: '🏛️',
    tr: {
      title: 'Antalya’nın Tarihi ve Antik Kentleri: Kaleiçi’nden Aspendos’a Rehber',
      seo: 'Antalya’nın Tarihi ve Antik Kentleri: Kaleiçi’nden Aspendos’a',
      desc: 'Attaleia’dan bugüne Antalya’nın kısa tarihi; Aspendos, Perge, Olympos, Çıralı ve Yanartaş, Phaselis, Kaleiçi, Termessos, Side, Myra, Kaş, Kalkan, Alanya ve Likya Yolu.',
      html: `
<p>Antalya’da yaşamak, binlerce yıllık bir mirasın içinde yaşamak demek. Hafta sonu Aspendos’ta bir konser, Perge’nin sütunlu caddesinde bir yürüyüş, akşam Kaleiçi’nin dar sokaklarında bir yemek... Bu rehberde Antalya’nın kısa tarihini ve dünyada en çok merak edilen tarihi yerlerini derledik. Sıralamayı, Google’da dünya genelinde yapılan aramalara göre belirledik.</p>
<h2>Antalya’nın kısa tarihi</h2>
<ul class="ticks">
<li><b>Kuruluş, Attaleia:</b> Antalya, M.Ö. 2. yüzyılda Bergama Kralı II. Attalos tarafından kuruldu ve onun adıyla Attaleia olarak anıldı. Şehrin bugünkü adı da buradan geliyor.</li>
<li><b>Pamfilya ve Likya:</b> Bugünkü Antalya’nın doğusu antik çağda Pamfilya bölgesiydi; Perge, Aspendos ve Side burada yer alır. Batısı ise Phaselis, Olympos, Myra ve Patara gibi kentleriyle Likya bölgesiydi.</li>
<li><b>Roma dönemi:</b> İmparator Hadrianus’un M.S. 130 yılındaki ziyareti anısına yapılan Hadrian Kapısı, bugün hâlâ Kaleiçi’nin girişinde duruyor.</li>
<li><b>Selçuklu ve Osmanlı:</b> Kent 13. yüzyılın başında Selçukluların eline geçti; Kaleiçi’ndeki Yivli Minare bu dönemin ve Antalya’nın simgesi oldu. Kaleiçi’nin taş evleri ve dar sokakları ise Osmanlı döneminin mirası.</li>
<li><b>Cumhuriyet ve bugün:</b> Antalya, turizmle birlikte Türkiye’nin en hızlı büyüyen ve en çok ziyaret edilen şehirlerinden biri haline geldi.</li>
</ul>
<h2>Aspendos (Serik)</h2>
<p>Dünyanın en iyi korunmuş antik tiyatrolarından biri Aspendos’ta. Roma döneminden kalan tiyatro bugün hâlâ sahne olarak kullanılıyor; Aspendos Opera ve Bale Festivali gibi etkinliklere ev sahipliği yapıyor. Tarihi bir yapıda, yıldızların altında konser izlemek Antalya’da yaşamanın ayrıcalıklarından biri. Yakın yaşam bölgeleri: ${A('belek', 'Belek')}, ${A('kadriye', 'Kadriye')} ve ${A('serik-belek-kadriye', 'Serik')}.</p>
<h2>Perge (Aksu)</h2>
<p>Pamfilya’nın en önemli kentlerinden Perge; anıtsal kent kapıları, sütunlu caddesi ve stadyumuyla biliniyor. Şehir merkezine ve havalimanına çok yakın olması ziyaretini kolaylaştırıyor. Yakın yaşam bölgeleri: ${A('aksu-altintas', 'Aksu ve Altıntaş')}; bu bölgedeki projelerimiz ${P('prime-lara-altintas', 'Prime Lara')} ve ${P('falez-manzara-altintas', 'Falez Manzara')}.</p>
<h2>Olympos (Kumluca), Çıralı ve Yanartaş (Kemer)</h2>
<p>Olympos, ormanın içinde dere boyunca uzanıp sahile açılan bir Likya kenti.</p>
<p>Hemen yanındaki Çıralı, Kemer’in Ulupınar Mahallesi’ne bağlı ve Olimpos Beydağları Milli Parkı içinde. Bu yüzden büyük oteller yerine bahçe içinde pansiyonlar ve küçük butik tesislerle sakin bir köy olarak kalmış. Olympos ile birleşik kumsalı, Türkiye’deki deniz kaplumbağası yuvalama alanlarından biri; yuvalama sezonunda kumsala gece girilmiyor ve koruma çalışmaları köy halkının kurduğu kooperatifle birlikte yürütülüyor. Köyde narenciye bahçeleri ve organik tarım sürüyor.</p>
<p>Çıralı’nın üstündeki Yanartaş’ta (antik adıyla Khimaira) kayaların arasından çıkan doğal gaz binlerce yıldır kendiliğinden yanıyor. Efsaneye göre kahraman Bellerophon, kanatlı atı Pegasus ile ateş püskürten Khimaira’yı burada yendi. Yanartaş’a Çıralı’dan yaklaşık 1,4 kilometrelik bir patikayla çıkılıyor; alevleri görmek için en etkileyici zaman akşam karanlığı.</p>
<h2>Phaselis (Kemer)</h2>
<p>Üç limanlı bir antik liman kenti olan Phaselis, çam ormanı ve berrak koylarıyla doğa ile tarihi bir arada sunuyor. Antik caddede yürüyüp koyda yüzmek mümkün. Yakın yaşam bölgeleri: ${A('kemer', 'Kemer')} ve Tekirova.</p>
<h2>Kaleiçi (Muratpaşa): şehrin kalbi</h2>
<p>Antik liman, Hadrian Kapısı, Yivli Minare, Hıdırlık Kulesi, restore edilmiş Osmanlı konakları, butik oteller ve sanat galerileri... Kaleiçi, Antalya’nın tarihini şehrin tam ortasında yaşatıyor. Yakınındaki Antalya Müzesi ise bölgedeki antik kentlerden çıkan eserleri sergiliyor. Yakın yaşam bölgeleri: ${A('muratpasa', 'Muratpaşa merkez')} ve Kaleiçi çevresi.</p>
<h2>Termessos (Güllük Dağı)</h2>
<p>Dağın tepesine kurulmuş bir “kartal yuvası” olan Termessos, Büyük İskender’in kuşatıp alamadığı kent olarak anlatılır. Milli park içindeki kalıntılar, doğa yürüyüşüyle birlikte gezilir. Yakın yaşam bölgeleri: ${A('dosemealti', 'Döşemealtı')}; bölgedeki projemiz ${P('antalle-concept-houses', 'Antalle Concept Houses')}.</p>
<h2>Side (Manavgat)</h2>
<p>Deniz kıyısındaki Apollon Tapınağı ve antik tiyatrosuyla Side, gün batımının en güzel izlendiği antik kentlerden biri.</p>
<h2>Myra ve Aziz Nikolaos (Demre)</h2>
<p>Noel Baba olarak bilinen Aziz Nikolaos’un piskoposluk yaptığı Myra; Aziz Nikolaos Kilisesi ve kayalara oyulmuş Likya mezarlarıyla dünyanın dört bir yanından ziyaretçi çekiyor.</p>
<h2>Kaş: Antiphellos ve Kekova</h2>
<p>Kaş, antik Likya kenti Antiphellos’un üzerinde kurulu. Kasabanın içinde deniz manzaralı antik tiyatro, sokak arasında duran Kral Lahdi ve kayalara oyulmuş mezarlar var. Yakınındaki Kekova’da, depremlerle sulara gömüldüğü anlatılan “batık kent”, Simena (Kaleköy) kalesi ve su içinde duran lahitler tekneyle geziliyor. Dalış, yamaç paraşütü ve bakir koylarıyla Kaş, yabancıların da yerleştiği butik bir sahil kasabası.</p>
<h2>Kalkan ve Patara</h2>
<p>Kalkan, Kaş’a bağlı eski bir liman köyü; taş evleri ve dar sokaklarıyla Akdeniz’in en sevilen villa bölgelerinden biri. Yakınındaki Patara, Likya Birliği’nin meclis binası ve Aziz Nikolaos’un doğduğu kent olarak biliniyor; önündeki uzun kumsal da deniz kaplumbağalarının yuva alanı. Biraz ileride UNESCO Dünya Mirası listesindeki Xanthos ve Letoon yer alıyor.</p>
<h2>Alanya: Selçuklu’nun sahil başkenti</h2>
<p>Antik adı Korakesion olan Alanya’yı, 1221’de Selçuklu Sultanı I. Alaeddin Keykubad aldı ve kentin adını Alaiye yaptı; bugünkü adı buradan geliyor. Bu dönemin üç simgesi bugün de ayakta:</p>
<ul class="ticks">
<li><b>Alanya Kalesi:</b> yarımadayı saran surlar, iç kale ve tarihi mahalle</li>
<li><b>Kızıl Kule:</b> limanı koruyan sekizgen kule</li>
<li><b>Tersane:</b> kayaların içine oyulmuş Selçuklu tersanesi</li>
</ul>
<p>Damlataş Mağarası ve çevredeki antik kentlerle Alanya, yabancıların en çok ev aldığı Türk şehirlerinden biri.</p>
<h2>Likya Yolu</h2>
<p>Türkiye’nin ilk işaretli uzun mesafe yürüyüş rotası Likya Yolu, Fethiye’den Antalya’ya uzanıyor ve 500 kilometreyi aşıyor. Rota; Patara, Kalkan, Kaş, Kekova, Myra, Olympos ve Phaselis gibi bu rehberdeki birçok antik kentin arasından geçiyor. Yürüyüş için en iyi dönemler ilkbahar ve sonbahar.</p>
<h2>Tarih ve yaşam</h2>
<p>Antik kentlere yakın bölgeler, hem yaşam kalitesi hem de kiralama talebi açısından değer taşıyor. Belek ve Kadriye Aspendos’a, Altıntaş Perge’ye, Kemer Phaselis’e, Döşemealtı Termessos’a, Muratpaşa ise Kaleiçi’ne yakın. Tarihin bu kadar yakında olduğu bir şehirde, nerede yaşayacağınızı seçerken bunu da hesaba katmaya değer.</p>
<p>ACC HOMES International Real Estate olarak Antalya’nın her bölgesinde satılık ve kiralık konut seçenekleri sunuyoruz. Tarihe, denize ya da doğaya yakın yaşamak istediğinizi söyleyin; size uygun seçenekleri birlikte değerlendirelim: <a href="{{WA}}" target="_blank" rel="noopener">WhatsApp’tan yazın →</a></p>`,
      faq: [
        ['Antalya’nın en ünlü antik kenti hangisi?', 'Dünya genelindeki aramalarda Aspendos ve Perge öne çıkıyor; Olympos ve Phaselis de en çok merak edilenler arasında.'],
        ['Antalya’nın eski adı nedir?', 'Attaleia. Kenti kuran Bergama Kralı II. Attalos’un adından geliyor.'],
        ['Şehir merkezinde görülecek tarihi yerler nerede?', 'Kaleiçi’nde: Hadrian Kapısı, Yivli Minare, Hıdırlık Kulesi ve antik liman. Antalya Müzesi de merkeze yakın.'],
        ['Yanartaş nerede, ne zaman gidilmeli?', 'Kemer’e bağlı Çıralı’nın üstünde. Alevler en iyi akşam karanlığında görülüyor.'],
      ],
    },
  },
];
