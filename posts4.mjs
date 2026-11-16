// Blog 4. parti (16.11.2026): alıcı rehberi (bölge seçimi) + COP31 gündem yazısı. TR / EN / RU.
// Fiyat verisi: Emlakjet satılık daire ilan ortalamaları, Ekim 2026. Her güncellemede tabloyu ve "updated" alanını yenileyin.
export const POSTS4 = [
  {
    slug: 'antalyada-nereden-ev-alinir-konyaalti-lara-altintas', cat: 'bolge', date: '2026-11-16', icon: '🏡',
    tr: {
      title: 'Antalya’da Nereden Ev Alınır? Konyaaltı mı, Lara mı, Altıntaş mı? (2026 Rehberi)',
      seo: 'Antalya’da Nereden Ev Alınır? Konyaaltı, Lara, Altıntaş', desc: 'Antalya’da ev almak isteyenlere: ilçe ilçe fiyatlar, Konyaaltı–Lara karşılaştırması, aile ve okul için mahalleler, deniz manzaralı ev rehberi.',
      html: `
<p>“Antalya’da ev almak istiyorum, ama nereden?” sorusu ofisimize en sık gelen soru. Cevap tek bir mahalle değil; bütçenize, ailenize, işinize ve evi oturmak için mi yoksa kiraya vermek için mi aldığınıza bağlı. Bu rehberde Antalya’nın merkez ilçelerini güncel ilan verileri ve sahadaki deneyimimizle karşılaştırıyoruz.</p>
<h2>Kısaca: kim, nereye bakmalı?</h2>
<ul class="ticks">
<li><b>Denize yürüyerek inmek ve yeni bir sitede oturmak isteyenler:</b> Konyaaltı (Hurma, Sarısu, Liman).</li>
<li><b>Kumsal, alışveriş merkezleri ve havalimanına yakınlık isteyenler:</b> Lara tarafı (Güzeloba, Çağlayan, Fener, Şirinyalı).</li>
<li><b>Yeni projede, daha erişilebilir bütçeyle ilk evini ya da yatırımını alacaklar:</b> Aksu Altıntaş.</li>
<li><b>Bahçeli müstakil ev ve villa isteyen aileler:</b> Döşemealtı (Altınkale, Yeşilbayır).</li>
<li><b>Şehir merkezinde, hastane ve hizmetlere yakın, dönüşüm fırsatı arayanlar:</b> Muratpaşa’nın merkez mahalleleri.</li>
</ul>
<h2>Antalya’da ev fiyatları: ilçe karşılaştırması</h2>
<p>Aşağıdaki tablo Emlakjet’in Ekim 2026 itibarıyla yayımladığı satılık daire ilan ortalamalarıdır. Bunlar <b>ilan fiyatlarıdır</b>; gerçekleşen satış fiyatları pazarlık, binanın yaşı ve konumuna göre farklılaşır. Yine de bölgeler arasındaki farkı görmek için iyi bir başlangıçtır.</p>
<table class="dtable"><thead><tr><th>İlçe</th><th>Ortalama ilan fiyatı (₺/m²)</th><th>Yıllık değişim</th></tr></thead><tbody>
<tr><td>Konyaaltı</td><td>87.049</td><td>+%27,1</td></tr>
<tr><td>Kemer</td><td>76.293</td><td>+%18,5</td></tr>
<tr><td>Aksu (Altıntaş, Kundu)</td><td>75.048</td><td>+%20,6</td></tr>
<tr><td>Muratpaşa (Lara dahil)</td><td>58.819</td><td>+%30,9</td></tr>
<tr><td>Döşemealtı</td><td>52.391</td><td>+%30,9</td></tr>
<tr><td>Serik (Belek, Kadriye)</td><td>46.622</td><td>+%21,9</td></tr>
<tr><td>Kepez</td><td>45.851</td><td>+%31,4</td></tr>
<tr><td><b>Antalya geneli</b></td><td><b>55.064</b></td><td><b>+%23,0</b></td></tr>
</tbody></table>
<p>Tabloyu okurken iki noktaya dikkat edin. <b>Aksu</b> ortalaması, Kundu’daki otel bölgesine yakın lüks projeler nedeniyle yüksek görünür; Altıntaş’taki yeni 1+1 ve 2+1 daireler genellikle bu ortalamanın altında bir giriş bütçesi sunar. <b>Muratpaşa</b> ortalaması ise şehrin içindeki eski binaları da kapsadığı için düşük görünür; Lara’nın denize yakın mahalleleri ve falez hattındaki Fener, ilçe ortalamasının belirgin üzerindedir. Güncel satış rakamları için <a href="{{URL:blog}}antalya-konut-satis-istatistikleri/">Antalya konut satış istatistiklerimize</a> bakabilirsiniz.</p>
<h2>Konyaaltı mı, Lara mı?</h2>
<p>İkisi de Antalya’nın en çok talep gören sahil bölgeleri, ama yaşam tarzı olarak farklılar:</p>
<table class="dtable"><thead><tr><th></th><th>Konyaaltı</th><th>Lara</th></tr></thead><tbody>
<tr><td>Deniz</td><td>Uzun, çakıllı sahil; arkada Toros Dağları manzarası</td><td>Kumlu, sığ plajlar; çocuklu aileler için rahat</td></tr>
<tr><td>Yaşam</td><td>Sahil parkı, Akdeniz Üniversitesi ve hastanesi, Antalya Akvaryumu</td><td>Büyük alışveriş merkezleri, otel bölgesi, Düden Şelalesi, falezler</td></tr>
<tr><td>Konut yapısı</td><td>Hurma, Sarısu ve Liman’da yeni, havuzlu siteler</td><td>Güzeloba ve Çağlayan’da siteler; Fener’de köklü, geniş daireler</td></tr>
<tr><td>Ulaşım</td><td>Şehrin batı ucu; havalimanına daha uzak</td><td>Havalimanına ve Aksu’ya yakın</td></tr>
<tr><td>Fiyat</td><td>İlçe ortalaması Antalya’nın en yükseklerinden</td><td>Sahile yakın mahalleler Konyaaltı’na yakın seviyede</td></tr>
<tr><td>Kimler için</td><td>Denize yürümek, doğa ve sahil yaşamı isteyenler</td><td>Kumsal, hizmetler ve havalimanı erişimi isteyenler</td></tr>
</tbody></table>
<p>Detaylı bilgi için <a href="{{URL:areas}}konyaalti/">Konyaaltı</a> ve <a href="{{URL:areas}}muratpasa/">Muratpaşa ve Lara</a> bölge rehberlerimize, mahalle düzeyinde ise <a href="{{URL:areas}}hurma/">Hurma</a>, <a href="{{URL:areas}}liman-sarisu/">Liman ve Sarısu</a>, <a href="{{URL:areas}}lara-guzeloba/">Lara ve Güzeloba</a> ile <a href="{{URL:areas}}fener/">Fener</a> sayfalarına bakabilirsiniz.</p>
<h2>Altıntaş ve Aksu: yeni projelerin bölgesi</h2>
<p>Altıntaş son yıllarda Antalya’da en çok yeni konut projesinin yükseldiği bölge oldu. Havalimanına, Lara plajlarına ve Kundu otel bölgesine kısa mesafede; COP31 için Antalya EXPO çevresinde yapılan yol ve altyapı yatırımları da bu aksı doğrudan ilgilendiriyor (ayrıntılar <a href="{{URL:blog}}cop31-antalya-iklim-zirvesi-gayrimenkul-etkisi/">COP31 yazımızda</a>).</p>
<p>Altıntaş’ın avantajı, yeni ve havuzlu sitelerde daha erişilebilir bir giriş bütçesi; dezavantajı ise bölgenin hâlâ gelişiyor olması: okul, sağlık ve sosyal donatıların bazıları yeni açılıyor, bazı sokaklarda inşaat sürüyor. Bu nedenle proje seçimi, müteahhidin geçmişi ve iskân durumu burada daha da önemli. Yetkili satış ofisi olduğumuz <a href="{{URL:projects}}prime-lara-altintas/">Prime Lara</a> projesinden Lara plajlarına yaklaşık 3 km, havalimanına yaklaşık 5 km mesafe var. Bölge hakkında daha fazlası için <a href="{{URL:areas}}aksu-altintas/">Aksu ve Altıntaş rehberimize</a> bakın.</p>
<h2>Aileler için en uygun mahalleler</h2>
<p>Çocuklu aileler için “en iyi mahalle” genellikle şu dört kriterin kesiştiği yerdir: okula yürüme ya da kısa servis mesafesi, site içinde güvenli oyun alanı, parka ve denize yakınlık, günlük ihtiyaçlara kolay erişim.</p>
<ul class="ticks">
<li><b>Konyaaltı Hurma, Sarısu, Liman:</b> Havuzlu ve oyun alanlı yeni siteler, sahil parkı ve okullar bir arada.</li>
<li><b>Lara Güzeloba ve Çağlayan:</b> Kumsala yakınlık, alışveriş ve sosyal alanlar; köklü ve oturmuş bir aile mahallesi dokusu.</li>
<li><b>Fener ve Şirinyalı:</b> Merkezi konum, hastanelere ve falez parkına yakınlık; geniş metrekareli daireler.</li>
<li><b>Döşemealtı Altınkale ve Yeşilbayır:</b> Bahçeli müstakil ev ve villa yaşamı, temiz hava; okul ve işe araçla ulaşım gerekir (<a href="{{URL:blog}}dosemealti-villa-yasami-ve-enerji/">Döşemealtı villa rehberimiz</a>).</li>
<li><b>Aksu Altıntaş:</b> Yeni siteler ve gelişen sosyal donatılar; genç aileler ve ilk ev alıcıları için.</li>
</ul>
<h2>Antalya’da okul için hangi bölge?</h2>
<p>Özel okul ve kolej seçenekleri en yoğun olarak Lara (Muratpaşa) ve Konyaaltı’nda; birçok kolejin bu iki bölgede kampüsü var, Lara’da Rusça eğitim veren okul da bulunuyor. Döşemealtı’nda da bazı kampüsler yer alıyor. Devlet okullarında ise ilk ve ortaokul kayıtları ikamet adresine göre yapıldığı için, evi almadan önce o adresin hangi okulun kayıt alanına düştüğünü ilgili okul ya da ilçe milli eğitim müdürlüğünden öğrenmenizi öneririz. Pratik kural: okulu ve iş yerini haritada işaretleyin, sabah 07.30–08.30 trafiğinde ev ile okul arasındaki süreyi bir kez de siz deneyin.</p>
<h2>Antalya’da denize nereden girilir?</h2>
<ul class="ticks">
<li><b>Konyaaltı Plajı:</b> Şehrin batısında kilometrelerce uzanan çakıllı sahil; halk plajı bölümleri ücretsiz, plaj işletmeleri ücretli. Liman, Hurma ve Sarısu’dan yürüyerek ulaşılır.</li>
<li><b>Lara plajları:</b> Kumlu ve sığ; Lara halk plajı ve otel bölgesine kadar uzanan sahil. Güzeloba ve Çağlayan’dan kısa mesafede.</li>
<li><b>Falezler (Fener, Şirinyalı, merkez):</b> Kayalıklardan merdivenle inilen platformlar ve plaj kulüpleri; derin ve berrak su, çoğunlukla ücretli.</li>
<li><b>Kundu ve Aksu sahili:</b> Otel bölgesine uzanan kumsal; Altıntaş’tan araçla birkaç dakika.</li>
</ul>
<h2>Deniz manzaralı ev: nerede, neye dikkat?</h2>
<p>Antalya’da kalıcı deniz manzarası en çok falez hattında (Fener, Şirinyalı, Lara’nın sahil tarafı) ve Konyaaltı’nda sahile yakın yüksek katlarda bulunur. Manzara, fiyata ciddi bir prim ekler; bu yüzden şu soruları mutlaka sorun:</p>
<ul class="ticks">
<li>Manzara hangi kattan başlıyor ve önündeki parsellerin imar durumu ne? Bugün açık olan manzara yarın kapanabilir.</li>
<li>Cephe ve rüzgâr: güney cephe kışın güneşli ama yazın sıcak; deniz tarafında tuz ve nem bakım ihtiyacını artırır.</li>
<li>Bina yaşı ve deprem dayanıklılığı: falez hattındaki birçok bina 30–40 yaşında.</li>
<li>Otopark ve asansör: eski binalarda en sık eksik kalan unsurlar.</li>
</ul>
<h2>Satın almadan önce kontrol listesi</h2>
<ul class="ticks">
<li>Tapu ve iskân durumu, imar ve varsa şerhler.</li>
<li>Aynı sokakta, benzer yaş ve metrekaredeki gerçekleşmiş satışlar (ilan fiyatı değil).</li>
<li>Site aidatı, yönetim planı ve ortak alanların bakımı.</li>
<li>Kiralama hedefliyorsanız bölgenin uzun dönem kira talebi; kısa dönem kiralama için izin belgesi gerektiği.</li>
<li>Yabancı alıcılar için mahallenin yeni ikamet izni başvurularına açık olup olmadığı.</li>
</ul>
<p>Bütçenizi ve önceliklerinizi paylaşırsanız, profesyonelimiz size uygun mahalleleri ve güncel portföyü birlikte çıkarır. <a href="{{URL:list}}">İlanlarımıza</a> göz atabilir, satmayı düşündüğünüz bir ev için <a href="{{URL:sell}}">ücretsiz değerleme</a> isteyebilirsiniz. Yatırım odaklıysanız <a href="{{URL:blog}}antalyada-gayrimenkul-yatirimi-bolgeler-ve-stratejiler/">bölge ve strateji rehberimiz</a> de işinize yarar.</p>
<p class="nsrc">Kaynak: Emlakjet, Antalya satılık daire piyasası (ilan ortalamaları, Ekim 2026). Fiyatlar bilgilendirme amaçlıdır; değerleme yerine geçmez.</p>`,
      faq: [
        ['Antalya’da ev almak için en iyi bölge neresi?', 'Tek bir cevap yok: denize yürümek ve yeni site isteyenler için Konyaaltı, kumsal ve havalimanı yakınlığı isteyenler için Lara, daha erişilebilir bütçeyle yeni proje arayanlar için Altıntaş, bahçeli müstakil ev isteyen aileler için Döşemealtı öne çıkar.'],
        ['Konyaaltı mı Lara mı daha pahalı?', 'Ekim 2026 ilan ortalamalarına göre Konyaaltı ilçe ortalaması (yaklaşık 87 bin TL/m²) Muratpaşa ortalamasının üzerinde. Ancak Muratpaşa ortalaması şehir içindeki eski binaları da kapsar; Lara’nın denize yakın mahalleleri Konyaaltı’na yakın seviyededir.'],
        ['Antalya’da aileler için en uygun mahalleler hangileri?', 'Konyaaltı’nda Hurma, Sarısu ve Liman; Lara tarafında Güzeloba ve Çağlayan; merkezde Fener ve Şirinyalı; villa yaşamı için Döşemealtı Altınkale ve Yeşilbayır; yeni siteler için Aksu Altıntaş aileler tarafından sık tercih edilir.'],
        ['Antalya’da okul için hangi bölge daha mantıklı?', 'Özel okul ve kolej seçenekleri en yoğun olarak Lara ve Konyaaltı’ndadır. Devlet ilk ve ortaokullarında kayıt ikamet adresine göre yapıldığından, ev almadan önce adresin hangi okulun kayıt alanında olduğunu öğrenmek gerekir.'],
        ['Antalya’da denize ücretsiz nereden girilir?', 'Konyaaltı ve Lara sahillerinde ücretsiz halk plajı bölümleri vardır. Falezlerdeki platformlar ve plaj kulüpleri çoğunlukla ücretlidir.'],
        ['Altıntaş’tan ev almak mantıklı mı?', 'Yeni ve havuzlu sitelerde daha erişilebilir bir giriş bütçesi, havalimanına ve Lara plajlarına yakınlık sunduğu için ilk ev ve yatırım alıcıları tarafından tercih edilir. Bölge gelişmeye devam ettiği için proje, müteahhit ve iskân durumu dikkatle kontrol edilmelidir.'],
        ['Deniz manzaralı ev alırken nelere dikkat etmeliyim?', 'Manzaranın hangi kattan başladığını, önündeki parsellerin imar durumunu, bina yaşını, cepheyi ve otopark-asansör gibi temel donatıları kontrol edin. Manzara fiyata önemli bir prim ekler; kalıcı olup olmayacağı belirleyicidir.'],
        ['Yabancılar Antalya’nın her mahallesinden ev alabilir mi?', 'Yabancılar Antalya’da konut satın alabilir; ancak bazı mahalleler yeni ikamet izni başvurularına kapalı olabilir. Ev ikamet amacıyla alınıyorsa, alım öncesinde mahallenin güncel durumu kontrol edilmelidir.'],
      ],
    },
    en: {
      title: 'Where to Buy a Home in Antalya: Konyaaltı, Lara or Altıntaş? (2026 Guide)',
      seo: 'Where to Buy in Antalya: Konyaaltı, Lara or Altıntaş', desc: 'District prices, Konyaaltı vs Lara, the best neighbourhoods for families and schools, beaches and sea-view homes: where to buy in Antalya in 2026.',
      html: `
<p>“I want to buy a home in Antalya, but where?” is the question we hear most at our office. The answer is not a single neighbourhood: it depends on your budget, your family, your work and whether you will live in the home or let it. This guide compares Antalya’s central districts using current listing data and our experience on the ground.</p>
<h2>In brief: who should look where?</h2>
<ul class="ticks">
<li><b>Walk to the sea and live in a new complex:</b> Konyaaltı (Hurma, Sarısu, Liman).</li>
<li><b>Sandy beaches, shopping and the airport close by:</b> the Lara side (Güzeloba, Çağlayan, Fener, Şirinyalı).</li>
<li><b>A first home or investment in a new project on a more accessible budget:</b> Aksu Altıntaş.</li>
<li><b>Families who want a detached house or villa with a garden:</b> Döşemealtı (Altınkale, Yeşilbayır).</li>
<li><b>City-centre living near hospitals, with regeneration opportunities:</b> central Muratpaşa.</li>
</ul>
<h2>Antalya property prices by district</h2>
<p>The table shows Emlakjet’s average asking prices for apartments for sale as of October 2026. These are <b>asking prices</b>: completed sale prices vary with negotiation, building age and exact location. They are still a good way to see the gap between areas.</p>
<table class="dtable"><thead><tr><th>District</th><th>Average asking price (TRY/m²)</th><th>Annual change</th></tr></thead><tbody>
<tr><td>Konyaaltı</td><td>87,049</td><td>+27.1%</td></tr>
<tr><td>Kemer</td><td>76,293</td><td>+18.5%</td></tr>
<tr><td>Aksu (Altıntaş, Kundu)</td><td>75,048</td><td>+20.6%</td></tr>
<tr><td>Muratpaşa (incl. Lara)</td><td>58,819</td><td>+30.9%</td></tr>
<tr><td>Döşemealtı</td><td>52,391</td><td>+30.9%</td></tr>
<tr><td>Serik (Belek, Kadriye)</td><td>46,622</td><td>+21.9%</td></tr>
<tr><td>Kepez</td><td>45,851</td><td>+31.4%</td></tr>
<tr><td><b>Antalya overall</b></td><td><b>55,064</b></td><td><b>+23.0%</b></td></tr>
</tbody></table>
<p>Two caveats. The <b>Aksu</b> average looks high because of luxury projects near the Kundu hotel zone; new one- and two-bedroom flats in Altıntaş usually come in below it. The <b>Muratpaşa</b> average looks low because it includes older buildings in the inner city; Lara’s seaside neighbourhoods and Fener on the cliffs sit well above it. For completed sales see our <a href="{{URL:blog}}antalya-konut-satis-istatistikleri/">Antalya housing sales statistics</a>.</p>
<h2>Konyaaltı or Lara?</h2>
<table class="dtable"><thead><tr><th></th><th>Konyaaltı</th><th>Lara</th></tr></thead><tbody>
<tr><td>Sea</td><td>Long pebble beach with the Taurus Mountains behind</td><td>Sandy, shallow beaches that suit young children</td></tr>
<tr><td>Lifestyle</td><td>Beach park, Akdeniz University and hospital, Antalya Aquarium</td><td>Large malls, the hotel zone, Düden Waterfall, the cliffs</td></tr>
<tr><td>Housing</td><td>New complexes with pools in Hurma, Sarısu and Liman</td><td>Complexes in Güzeloba and Çağlayan; spacious older flats in Fener</td></tr>
<tr><td>Access</td><td>West end of the city, further from the airport</td><td>Close to the airport and Aksu</td></tr>
<tr><td>Price</td><td>One of Antalya’s highest district averages</td><td>Seaside neighbourhoods close to Konyaaltı levels</td></tr>
<tr><td>Best for</td><td>Walking to the sea, nature and beach life</td><td>Sandy beaches, services and airport access</td></tr>
</tbody></table>
<p>See our <a href="{{URL:areas}}konyaalti/">Konyaaltı</a> and <a href="{{URL:areas}}muratpasa/">Muratpaşa &amp; Lara</a> area guides, and the neighbourhood pages for <a href="{{URL:areas}}hurma/">Hurma</a>, <a href="{{URL:areas}}liman-sarisu/">Liman &amp; Sarısu</a>, <a href="{{URL:areas}}lara-guzeloba/">Lara &amp; Güzeloba</a> and <a href="{{URL:areas}}fener/">Fener</a>.</p>
<h2>Altıntaş and Aksu: where the new projects are</h2>
<p>Altıntaş has seen more new residential projects than anywhere else in Antalya in recent years. It is close to the airport, Lara’s beaches and the Kundu hotel zone, and the road and infrastructure work around Antalya EXPO for COP31 directly concerns this corridor (details in our <a href="{{URL:blog}}cop31-antalya-iklim-zirvesi-gayrimenkul-etkisi/">COP31 article</a>).</p>
<p>The advantage is a more accessible entry budget in new complexes with pools; the drawback is that the area is still developing, with some schools, health and social facilities only now opening. Project choice, the developer’s track record and the occupancy permit (iskân) matter even more here. From <a href="{{URL:projects}}prime-lara-altintas/">Prime Lara</a>, for which we are the authorised sales office, Lara’s beaches are about 3 km and the airport about 5 km away. More in our <a href="{{URL:areas}}aksu-altintas/">Aksu &amp; Altıntaş guide</a>.</p>
<h2>The best neighbourhoods for families</h2>
<ul class="ticks">
<li><b>Konyaaltı Hurma, Sarısu, Liman:</b> new complexes with pools and play areas, the beach park and schools together.</li>
<li><b>Lara Güzeloba and Çağlayan:</b> close to the sand, shops and leisure; an established family neighbourhood.</li>
<li><b>Fener and Şirinyalı:</b> central, close to hospitals and the cliff-top park; spacious flats.</li>
<li><b>Döşemealtı Altınkale and Yeşilbayır:</b> detached houses and villas with gardens and clean air; you will drive to school and work (<a href="{{URL:blog}}dosemealti-villa-yasami-ve-enerji/">our Döşemealtı villa guide</a>).</li>
<li><b>Aksu Altıntaş:</b> new complexes and growing amenities; for young families and first-time buyers.</li>
</ul>
<h2>Which area for schools?</h2>
<p>Private schools are most concentrated in Lara (Muratpaşa) and Konyaaltı: many colleges have campuses in both, and Lara also has a Russian-language school. Some campuses are in Döşemealtı. Turkish state primary and middle schools enrol pupils by registered address, so check which school’s catchment an address falls into before you buy. A practical rule: mark the school and your workplace on the map and try the morning school run in 07:30–08:30 traffic yourself.</p>
<h2>Where do you swim in Antalya?</h2>
<ul class="ticks">
<li><b>Konyaaltı Beach:</b> a pebble beach running for kilometres west of the centre; public sections are free, beach clubs charge. Walking distance from Liman, Hurma and Sarısu.</li>
<li><b>Lara beaches:</b> sandy and shallow, from Lara public beach towards the hotel zone; minutes from Güzeloba and Çağlayan.</li>
<li><b>The cliffs (Fener, Şirinyalı, centre):</b> platforms and beach clubs reached by stairs; deep, clear water, mostly paid.</li>
<li><b>Kundu and the Aksu coast:</b> sandy shore towards the hotel zone, a short drive from Altıntaş.</li>
</ul>
<h2>Sea-view homes: where, and what to check</h2>
<p>Lasting sea views are mostly found on the cliff line (Fener, Şirinyalı, Lara’s seaside) and on higher floors close to the beach in Konyaaltı. Views carry a significant price premium, so ask:</p>
<ul class="ticks">
<li>From which floor does the view start, and what is the zoning of the plots in front? An open view today can close tomorrow.</li>
<li>Orientation and wind: south-facing is sunny in winter and hot in summer; salt and humidity raise maintenance by the sea.</li>
<li>Building age and earthquake resilience: many cliff-side buildings are 30–40 years old.</li>
<li>Parking and lift, which older buildings often lack.</li>
</ul>
<h2>Checklist before you buy</h2>
<ul class="ticks">
<li>Title deed and occupancy permit, zoning and any annotations on the title.</li>
<li>Completed sales on the same street for similar age and size, not asking prices.</li>
<li>Service charges, building management and upkeep of shared areas.</li>
<li>If you plan to let: long-term rental demand; short-term holiday letting requires a permit.</li>
<li>For foreign buyers: whether the neighbourhood is open to new residence permit applications.</li>
</ul>
<p>Share your budget and priorities and one of our professionals will shortlist the right neighbourhoods and current properties with you. Browse our <a href="{{URL:list}}">listings</a>, or read our <a href="{{URL:blog}}antalyada-gayrimenkul-yatirimi-bolgeler-ve-stratejiler/">areas and strategies guide</a> if you are investing.</p>
<p class="nsrc">Source: Emlakjet, Antalya apartments-for-sale market (average asking prices, October 2026). Figures are for information only and are not a valuation.</p>`,
      faq: [
        ['What is the best area to buy a home in Antalya?', 'There is no single answer: Konyaaltı for walking to the sea and new complexes, Lara for sandy beaches and airport access, Altıntaş for new projects on a more accessible budget, and Döşemealtı for families who want a villa with a garden.'],
        ['Is Konyaaltı or Lara more expensive?', 'By October 2026 asking prices, Konyaaltı’s district average (about TRY 87,000/m²) is above Muratpaşa’s. But the Muratpaşa figure includes older inner-city buildings; Lara’s seaside neighbourhoods are close to Konyaaltı levels.'],
        ['Which Antalya neighbourhoods are best for families?', 'Hurma, Sarısu and Liman in Konyaaltı; Güzeloba and Çağlayan in Lara; Fener and Şirinyalı in the centre; Altınkale and Yeşilbayır in Döşemealtı for villas; and Altıntaş in Aksu for new complexes.'],
        ['Which area is best for schools in Antalya?', 'Private schools are most concentrated in Lara and Konyaaltı. State primary and middle schools enrol by registered address, so check the catchment of an address before buying.'],
        ['Where can I swim for free in Antalya?', 'Konyaaltı and Lara both have free public beach sections. Cliff platforms and beach clubs usually charge.'],
        ['Is Altıntaş a good place to buy?', 'It offers a more accessible entry budget in new complexes close to the airport and Lara’s beaches, which appeals to first-time buyers and investors. As the area is still developing, check the project, the developer and the occupancy permit carefully.'],
        ['Can foreigners buy in every Antalya neighbourhood?', 'Foreigners can buy homes in Antalya, but some neighbourhoods may be closed to new residence permit applications. If you are buying for residency, check the neighbourhood’s current status first.'],
      ],
    },
    ru: {
      title: 'Где купить квартиру в Анталии: Коньяалты, Лара или Алтынташ? (гид 2026)',
      seo: 'Где купить квартиру в Анталии: Коньяалты, Лара, Алтынташ', desc: 'Цены по районам, Коньяалты или Лара, районы для семей и школ, пляжи и квартиры с видом на море: где купить жильё в Анталии в 2026 году.',
      html: `
<p>«Хочу купить квартиру в Анталии, но где?» — самый частый вопрос в нашем офисе. Ответ зависит не от одного района, а от бюджета, семьи, работы и того, будете ли вы жить в квартире или сдавать её. В этом гиде мы сравниваем центральные районы Анталии по актуальным данным объявлений и нашему опыту.</p>
<h2>Коротко: кому где искать</h2>
<ul class="ticks">
<li><b>Ходить к морю пешком и жить в новом комплексе:</b> Коньяалты (Хурма, Сарысу, Лиман).</li>
<li><b>Песчаные пляжи, торговые центры и близость аэропорта:</b> Лара (Гюзелоба, Чаглаян, Фенер, Ширинялы).</li>
<li><b>Первая квартира или инвестиция в новом проекте с более доступным бюджетом:</b> Алтынташ (район Аксу).</li>
<li><b>Семьи, которым нужен дом или вилла с садом:</b> Дёшемеалты (Алтынкале, Йешилбайыр).</li>
<li><b>Жизнь в центре рядом с больницами и проекты реновации:</b> центральный Муратпаша.</li>
</ul>
<h2>Цены на жильё в Анталии по районам</h2>
<p>В таблице — средние цены предложения квартир по данным Emlakjet на октябрь 2026 года. Это <b>цены в объявлениях</b>: реальные сделки зависят от торга, возраста дома и точного расположения.</p>
<table class="dtable"><thead><tr><th>Район</th><th>Средняя цена предложения (₺/м²)</th><th>Изменение за год</th></tr></thead><tbody>
<tr><td>Коньяалты</td><td>87 049</td><td>+27,1%</td></tr>
<tr><td>Кемер</td><td>76 293</td><td>+18,5%</td></tr>
<tr><td>Аксу (Алтынташ, Кунду)</td><td>75 048</td><td>+20,6%</td></tr>
<tr><td>Муратпаша (включая Лару)</td><td>58 819</td><td>+30,9%</td></tr>
<tr><td>Дёшемеалты</td><td>52 391</td><td>+30,9%</td></tr>
<tr><td>Серик (Белек, Кадрие)</td><td>46 622</td><td>+21,9%</td></tr>
<tr><td>Кепез</td><td>45 851</td><td>+31,4%</td></tr>
<tr><td><b>Анталия в среднем</b></td><td><b>55 064</b></td><td><b>+23,0%</b></td></tr>
</tbody></table>
<p>Важно: среднее по <b>Аксу</b> завышено из‑за люксовых проектов у отельной зоны Кунду; новые квартиры 1+1 и 2+1 в Алтынташе обычно дешевле. Среднее по <b>Муратпаше</b> занижено старым фондом в центре; приморские кварталы Лары и Фенер на скалах заметно дороже. Данные о сделках — в нашей <a href="{{URL:blog}}antalya-konut-satis-istatistikleri/">статистике продаж жилья в Анталии</a>.</p>
<h2>Коньяалты или Лара?</h2>
<table class="dtable"><thead><tr><th></th><th>Коньяалты</th><th>Лара</th></tr></thead><tbody>
<tr><td>Море</td><td>Длинный галечный пляж с видом на Таврские горы</td><td>Песчаные пологие пляжи, удобные для детей</td></tr>
<tr><td>Жизнь</td><td>Пляжный парк, университет Акдениз и его клиника, аквариум</td><td>Крупные ТЦ, отельная зона, водопад Дюден, скалы</td></tr>
<tr><td>Жильё</td><td>Новые комплексы с бассейнами в Хурме, Сарысу и Лимане</td><td>Комплексы в Гюзелобе и Чаглаяне; просторные квартиры в Фенере</td></tr>
<tr><td>Транспорт</td><td>Западная часть города, дальше от аэропорта</td><td>Близко к аэропорту и Аксу</td></tr>
<tr><td>Цена</td><td>Один из самых дорогих районов</td><td>Приморские кварталы близки к уровню Коньяалты</td></tr>
</tbody></table>
<p>Подробнее — в наших гидах по районам <a href="{{URL:areas}}konyaalti/">Коньяалты</a> и <a href="{{URL:areas}}muratpasa/">Муратпаша и Лара</a>.</p>
<h2>Алтынташ и Аксу: район новых проектов</h2>
<p>В последние годы в Алтынташе строится больше всего новых жилых проектов Анталии. Рядом аэропорт, пляжи Лары и отельная зона Кунду, а дорожные и инфраструктурные работы вокруг Antalya EXPO к саммиту COP31 напрямую касаются этого направления (подробнее — в <a href="{{URL:blog}}cop31-antalya-iklim-zirvesi-gayrimenkul-etkisi/">статье о COP31</a>).</p>
<p>Плюс — более доступный входной бюджет в новых комплексах с бассейнами; минус — район ещё развивается, часть школ и социальной инфраструктуры только открывается. Поэтому выбор проекта, репутация застройщика и наличие разрешения на эксплуатацию (iskân) здесь особенно важны. От проекта <a href="{{URL:projects}}prime-lara-altintas/">Prime Lara</a>, где мы являемся официальным офисом продаж, до пляжей Лары около 3 км, до аэропорта около 5 км.</p>
<h2>Лучшие районы для семей</h2>
<ul class="ticks">
<li><b>Коньяалты — Хурма, Сарысу, Лиман:</b> новые комплексы с бассейнами и детскими площадками, пляжный парк и школы рядом.</li>
<li><b>Лара — Гюзелоба и Чаглаян:</b> песчаный пляж, магазины и досуг; сложившийся семейный район.</li>
<li><b>Фенер и Ширинялы:</b> центр, больницы и парк на скалах; просторные квартиры.</li>
<li><b>Дёшемеалты — Алтынкале и Йешилбайыр:</b> дома и виллы с садом, чистый воздух; до школы и работы на машине.</li>
<li><b>Алтынташ:</b> новые комплексы и растущая инфраструктура; для молодых семей.</li>
</ul>
<h2>Какой район выбрать ради школы?</h2>
<p>Больше всего частных школ и колледжей в Ларе и Коньяалты; у многих есть кампусы в обоих районах, а в Ларе работает школа с обучением на русском языке. В государственные начальные и средние школы детей принимают по адресу регистрации, поэтому до покупки уточните, к какой школе относится адрес. Совет: отметьте на карте школу и работу и сами проверьте дорогу в утренний час пик (07:30–08:30).</p>
<h2>Где купаться в Анталии?</h2>
<ul class="ticks">
<li><b>Пляж Коньяалты:</b> галечный пляж длиной в несколько километров; общественные участки бесплатны, пляжные клубы платные.</li>
<li><b>Пляжи Лары:</b> песок и пологий вход; от городского пляжа Лары до отельной зоны.</li>
<li><b>Скалы (Фенер, Ширинялы, центр):</b> платформы и пляжные клубы со спуском по лестнице; глубокая прозрачная вода, в основном платно.</li>
<li><b>Кунду и побережье Аксу:</b> песчаный берег у отельной зоны, несколько минут на машине от Алтынташа.</li>
</ul>
<h2>Квартира с видом на море: где и на что смотреть</h2>
<p>Постоянный вид на море чаще всего бывает на линии скал (Фенер, Ширинялы, приморская Лара) и на верхних этажах у пляжа Коньяалты. Вид заметно повышает цену, поэтому уточните: с какого этажа открывается вид и что можно построить на участках перед домом; ориентацию и ветер; возраст дома и сейсмостойкость; наличие парковки и лифта.</p>
<h2>Чек‑лист перед покупкой</h2>
<ul class="ticks">
<li>Тапу и разрешение на эксплуатацию (iskân), обременения.</li>
<li>Реальные сделки на той же улице, а не цены объявлений.</li>
<li>Платежи за обслуживание комплекса и управление.</li>
<li>Для посуточной аренды нужно специальное разрешение.</li>
<li>Для иностранцев: открыт ли район для новых заявлений на ВНЖ.</li>
</ul>
<p>Расскажите нам о бюджете и приоритетах — наш специалист подберёт подходящие районы и актуальные объекты. Смотрите наши <a href="{{URL:list}}">объявления</a>.</p>
<p class="nsrc">Источник: Emlakjet, рынок продажи квартир в Анталии (средние цены предложения, октябрь 2026). Данные носят информационный характер и не являются оценкой.</p>`,
      faq: [
        ['Какой район Анталии лучше для покупки квартиры?', 'Единого ответа нет: Коньяалты — чтобы ходить к морю пешком и жить в новом комплексе, Лара — песчаные пляжи и близость аэропорта, Алтынташ — новые проекты с более доступным бюджетом, Дёшемеалты — виллы с садом для семей.'],
        ['Что дороже — Коньяалты или Лара?', 'По ценам предложения на октябрь 2026 года среднее по Коньяалты (около 87 000 ₺/м²) выше, чем по Муратпаше. Но в среднее Муратпаши входит старый фонд центра; приморские кварталы Лары близки к уровню Коньяалты.'],
        ['Какие районы лучше для семей с детьми?', 'Хурма, Сарысу и Лиман в Коньяалты; Гюзелоба и Чаглаян в Ларе; Фенер и Ширинялы в центре; Алтынкале и Йешилбайыр в Дёшемеалты для вилл; Алтынташ для новых комплексов.'],
        ['Где в Анталии бесплатные пляжи?', 'На пляжах Коньяалты и Лары есть бесплатные общественные участки. Платформы на скалах и пляжные клубы обычно платные.'],
        ['Могут ли иностранцы покупать жильё в любом районе?', 'Иностранцы могут покупать жильё в Анталии, но некоторые кварталы могут быть закрыты для новых заявлений на ВНЖ. Если покупка связана с ВНЖ, проверьте актуальный статус района заранее.'],
      ],
    },
  },
  {
    slug: 'cop31-antalya-iklim-zirvesi-gayrimenkul-etkisi', cat: 'yatirim', date: '2026-11-16', icon: '🌍',
    tr: {
      title: 'COP31 Antalya: Dünya İklim Zirvesi Şehre ve Gayrimenkul Piyasasına Ne Bırakacak?',
      seo: 'COP31 Antalya ve Gayrimenkul: Zirve Şehre Ne Bırakacak?', desc: 'COP31, 9–20 Kasım 2026’da Antalya EXPO’da. Yeni yollar, kongre altyapısı ve enerji verimli binalar: zirvenin Antalya emlak piyasasına etkisi.',
      html: `
<p>Antalya, 9–20 Kasım 2026 tarihlerinde Birleşmiş Milletler İklim Değişikliği Konferansı’na, yani COP31’e ev sahipliği yapıyor. Dünyanın dört bir yanından devlet liderleri, müzakereciler, iş dünyası, sivil toplum ve medya iki hafta boyunca şehirde. Peki bu zirve, Antalya’da ev alan, satan ya da yatırım yapan biri için ne ifade ediyor? Bu yazıda resmî kaynaklara dayanarak somut olanı, beklenti olandan ayırıyoruz.</p>
<h2>COP31 nedir, nerede yapılıyor?</h2>
<ul class="ticks">
<li><b>Tarih:</b> 9–20 Kasım 2026.</li>
<li><b>Yer:</b> Aksu Soğucaksu’daki Antalya EXPO alanı (EXPO 2016’nın yapıldığı alan).</li>
<li><b>Başkanlık:</b> Türkiye ev sahibi ve COP31 Başkanı; müzakerelerin başkanlığını Avustralya yürütüyor.</li>
<li><b>Katılım:</b> 95 ülke lideri ve 7 uluslararası kuruluş başkanı katılım bildirdi; AFP’ye göre iki hafta boyunca 100 binden fazla kişinin alanı ziyaret etmesi bekleniyor.</li>
<li><b>Gündem:</b> İklim finansmanı, emisyon azaltımı, uyum ve adil geçiş. Türkiye zirveyi bir “uygulama COP’u” olarak konumlandırıyor.</li>
</ul>
<h2>Zirveden Antalya’ya kalıcı olarak ne kalıyor?</h2>
<p>Gayrimenkul açısından asıl önemli olan iki haftalık kalabalık değil, zirve bittikten sonra şehirde kalanlar:</p>
<ul class="ticks">
<li><b>Kalıcı kongre ve fuar altyapısı:</b> Bakanlık açıklamasına göre EXPO alanındaki yatırımlarla Antalya, ulusal ve uluslararası fuar, kongre ve büyük organizasyonlara ev sahipliği yapabilecek kalıcı bir merkeze kavuşuyor.</li>
<li><b>Yeni yollar:</b> Zirve hazırlıkları kapsamında 4 ana arter ve 12 otel bağlantı yolundan oluşan yaklaşık 38 km’lik yol çalışması tamamlandı.</li>
<li><b>Altıntaş’ta havalimanı bağlantısı:</b> Antalya Büyükşehir Belediyesi, havalimanının kargo ve genel havacılık terminallerine erişimi kolaylaştırmak için Altıntaş Mahallesi sınırlarında bir yol yapım işini ihaleye çıkardı.</li>
<li><b>Su altyapısı:</b> ASAT, Aksu ve Serik–Belek bölgesindeki içme suyu tesislerinde ve Belek otel bölgesindeki isale hatlarında yenileme yaptı.</li>
<li><b>Ulaşım ve raylı sistem bağlantıları:</b> Bakanlık, ulaşım ve metro bağlantısına yönelik yatırımların konferans sonrasında da şehre hizmet vereceğini belirtiyor.</li>
</ul>
<h2>Turizm ve ekonomi tarafı</h2>
<p>Antalya İl Kültür ve Turizm Müdürlüğü, COP31’in şehrin tarihindeki en iyi kasım ayını getirebileceğini ve Türkiye’ye doğrudan ve dolaylı yaklaşık 2 milyar dolarlık döviz girdisi sağlamasının beklendiğini açıkladı. Bundan daha kalıcı olan etki ise kongre turizmi: sezon dışında da dolu oteller, uluslararası etkinlikler ve şehrin “yaz tatili” dışındaki görünürlüğü.</p>
<h2>Gayrimenkul piyasası için ne anlama geliyor?</h2>
<p><b>Kısa vadede fiyat sıçraması beklemeyin.</b> İki haftalık bir etkinlik, konut fiyatlarını tek başına kalıcı olarak artırmaz; fiyatları belirleyen asıl unsurlar faiz, kredi koşulları, enflasyon ve arz-talep dengesi olmaya devam ediyor. Zirveyi gerekçe göstererek yapılan agresif fiyat artışlarına karşı dikkatli olun.</p>
<p><b>Uzun vadede altyapı ve görünürlük önemli.</b> Havalimanı–EXPO–Altıntaş–Kundu aksı, yeni yollar ve kalıcı kongre merkeziyle şehrin en çok yatırım alan koridorlarından biri hâline geldi. Bu aks zaten yeni konut projelerinin yoğunlaştığı bölge; altyapının tamamlanması günlük yaşamı ve kiralama talebini destekler. Bölgeyi <a href="{{URL:areas}}aksu-altintas/">Aksu ve Altıntaş rehberimizde</a>, <a href="{{URL:areas}}kundu/">Kundu</a> ve <a href="{{URL:areas}}belek/">Belek</a> sayfalarımızda inceleyebilirsiniz.</p>
<p><b>Kısa dönem kiralama düşünenler kurallara dikkat etmeli.</b> Kongre ve etkinlik dönemlerinde günlük kiralık talebi artar; ancak konutların turizm amaçlı kısa süreli kiralanması için Kültür ve Turizm Bakanlığı’ndan izin belgesi ve sitede kat maliklerinin onayı gerekiyor. İzinsiz kiralamanın cezası yüksek.</p>
<p><b>Enerji verimliliği değer kriteri hâline geliyor.</b> COP31 Başkanlığı, binalarda karbonsuzlaşmayı hızlandırmak için “Enerji Verimli Binalar için Antalya Taahhüdü”nü (Antalya Compact) başlattı. Alıcılar için bunun pratik karşılığı şu: yalıtım, ısı pompası, güneş paneli ve iyi bir Enerji Kimlik Belgesi sınıfı; hem aidat ve faturaları düşürüyor hem de ileride yeniden satışta fark yaratıyor. Villa tarafındaki örnekler için <a href="{{URL:blog}}dosemealti-villa-yasami-ve-enerji/">Döşemealtı’nda yeni nesil villa yazımıza</a> bakabilirsiniz.</p>
<p><b>İklim riskini de fiyatlayın.</b> Antalya sıcak ve kurak dönemleri giderek daha yoğun yaşıyor. Ev seçerken cephe, gölgelik, yalıtım, su deposu ve orman yangını riski olan bölgelere yakınlık gibi konuları da sorun.</p>
<h2>ACC HOMES’un görüşü</h2>
<p>COP31, Antalya’nın “sadece tatil şehri” algısını “kongre, iş ve yaşam şehri” yönünde genişleten önemli bir vitrin. Yatırımcılar için asıl fırsat, zirve haberleriyle değil; altyapının kalıcı olarak dokunduğu aksları, doğru projeyi ve doğru fiyatı birlikte değerlendirmekte. Altıntaş’ta yetkili satış ofisi olduğumuz <a href="{{URL:projects}}prime-lara-altintas/">Prime Lara</a> dahil, bölgedeki seçenekleri karşılaştırmalı olarak sunabiliriz. Genel yol haritası için <a href="{{URL:blog}}antalyada-gayrimenkul-yatirimi-bolgeler-ve-stratejiler/">Antalya’da gayrimenkul yatırımı rehberimize</a> ve hangi semtin size uygun olduğunu görmek için <a href="{{URL:blog}}antalyada-nereden-ev-alinir-konyaalti-lara-altintas/">Antalya’da nereden ev alınır yazımıza</a> göz atın.</p>
<h2>Kaynaklar</h2>
<ol class="nsources">
<li><a href="https://unfccc.int/cop31/ifp" target="_blank" rel="noopener nofollow">UNFCCC, Information for COP 31 participants</a></li>
<li><a href="https://www.alomaliye.com/2026/11/09/cop31-icin-antalyaya-102-liderden-katilim-beyani/" target="_blank" rel="noopener nofollow">AloMaliye, COP31 için 102 liderden katılım beyanı (09.11.2026)</a></li>
<li><a href="https://cambodianess.com/article/cop31-opens-as-climate-and-geopolitical-pressures-mount" target="_blank" rel="noopener nofollow">AFP / Cambodianess, COP31 opens</a></li>
<li><a href="https://www.milliyet.com.tr/haber/7695862/" target="_blank" rel="noopener nofollow">Milliyet / AA, COP31 alanı ve yapıları Antalya’nın marka değerini güçlendirecek (06.11.2026)</a></li>
<li><a href="https://www.timeturk.com/antalya-turizmine-192-milyar-liralik-yatirim-cop31-icin-dev-hazirlik" target="_blank" rel="noopener nofollow">Timeturk, COP31 için 38 km yol</a></li>
<li><a href="https://www.24saatgazetesi.com/cop31-iklim-zirvesi-icin-antalya-havalimani-baglanti-yollarina-63-milyon-liralik-ihale" target="_blank" rel="noopener nofollow">24 Saat, Havalimanı bağlantı yolları ihalesi</a></li>
<li><a href="https://www.dha.com.tr/yerel-haberler/antalya/asattan-cop31-oncesi-guclu-altyapi-hamlesi-2920293" target="_blank" rel="noopener nofollow">DHA, ASAT’tan COP31 öncesi altyapı hamlesi</a></li>
<li><a href="https://www.hurriyetdailynews.com/cop31-climate-summit-set-to-boost-antalyas-tourism-217853" target="_blank" rel="noopener nofollow">Hürriyet Daily News, COP31 set to boost Antalya’s tourism</a></li>
<li><a href="https://sustainabilitymag.com/news/cop31-turkiye-targets-a-more-sustainable-built-environment" target="_blank" rel="noopener nofollow">Sustainability Magazine, Antalya Compact for Energy Efficient Buildings</a></li>
</ol>`,
      faq: [
        ['COP31 ne zaman ve nerede yapılıyor?', 'COP31, 9–20 Kasım 2026 tarihlerinde Antalya’nın Aksu ilçesindeki Soğucaksu’da bulunan Antalya EXPO alanında yapılıyor. Türkiye ev sahibi ve COP31 Başkanı, müzakerelerin başkanlığını ise Avustralya yürütüyor.'],
        ['COP31 Antalya’da ev fiyatlarını artırır mı?', 'İki haftalık bir etkinlik tek başına konut fiyatlarını kalıcı olarak artırmaz. Fiyatlar faiz, kredi, enflasyon ve arz-talep dengesiyle belirlenir. Zirvenin kalıcı etkisi yeni yollar, kongre altyapısı ve şehrin uluslararası görünürlüğü üzerinden uzun vadede hissedilir.'],
        ['COP31’den en çok hangi bölgeler etkileniyor?', 'Havalimanı–EXPO–Altıntaş–Kundu aksı ve Belek otel bölgesi; yeni yollar, havalimanı bağlantı yolu ve su altyapısı yatırımları bu bölgelerde yoğunlaşıyor.'],
        ['Zirve ya da kongreler için evimi günlük kiraya verebilir miyim?', 'Konutun turizm amaçlı kısa süreli kiralanması için Kültür ve Turizm Bakanlığı’ndan izin belgesi ve sitede kat maliklerinin onayı gerekir. İzinsiz kiralamaya yüksek idari para cezası uygulanır.'],
        ['Antalya Compact (Antalya Taahhüdü) nedir?', 'COP31 Başkanlığı’nın binalarda enerji verimliliğini ve karbonsuzlaşmayı hızlandırmak için başlattığı uluslararası çerçevedir. Konut alıcıları için yalıtım, ısı pompası, güneş enerjisi ve Enerji Kimlik Belgesi sınıfının önemini artırıyor.'],
      ],
    },
    en: {
      title: 'COP31 Antalya: What the UN Climate Summit Leaves the City and Its Property Market',
      seo: 'COP31 Antalya: What the Summit Means for Property', desc: 'COP31 runs 9–20 Nov 2026 at Antalya EXPO. New roads, congress infrastructure and energy-efficient buildings: what it means for Antalya property.',
      html: `
<p>From 9 to 20 November 2026 Antalya is hosting the UN Climate Change Conference, COP31. Heads of state, negotiators, business, civil society and media from around the world are in the city for two weeks. What does that mean for anyone buying, selling or investing in Antalya property? Based on official sources, we separate what is concrete from what is expectation.</p>
<h2>What and where is COP31?</h2>
<ul class="ticks">
<li><b>Dates:</b> 9–20 November 2026.</li>
<li><b>Venue:</b> Antalya EXPO Center in Soğucaksu, Aksu (the former EXPO 2016 grounds).</li>
<li><b>Presidency:</b> Türkiye hosts and holds the COP31 Presidency; Australia presides over the negotiations.</li>
<li><b>Attendance:</b> 95 heads of state or government and the heads of 7 international organisations confirmed attendance; AFP reports more than 100,000 people are expected over the two weeks.</li>
<li><b>Agenda:</b> climate finance, emissions cuts, adaptation and a just transition, framed by Türkiye as an “implementation COP”.</li>
</ul>
<h2>What stays in Antalya after the summit?</h2>
<ul class="ticks">
<li><b>A permanent congress and exhibition venue:</b> according to the ministry, the EXPO investments give Antalya a permanent centre for national and international fairs, congresses and large events.</li>
<li><b>New roads:</b> about 38 km of road works, covering 4 main arteries and 12 hotel link roads, were completed.</li>
<li><b>An airport link in Altıntaş:</b> Antalya Metropolitan Municipality tendered a road project in Altıntaş to improve access to the airport’s cargo and general aviation terminals.</li>
<li><b>Water infrastructure:</b> the water utility ASAT upgraded drinking-water facilities in Aksu and Serik–Belek and renewed mains in the Belek hotel zone.</li>
<li><b>Transport and rail links:</b> the ministry says transport and metro-link investments will continue to serve the city after the conference.</li>
</ul>
<h2>Tourism and the economy</h2>
<p>Antalya’s provincial tourism directorate expects COP31 to deliver one of the best Novembers in the city’s history and around USD 2 billion in direct and indirect foreign-currency inflows for Türkiye. The more lasting effect is congress tourism: hotels busy outside the season, international events and a profile beyond summer holidays.</p>
<h2>What it means for property</h2>
<p><b>Don’t expect a short-term price jump.</b> A two-week event does not lift house prices permanently on its own; interest rates, mortgage conditions, inflation and supply and demand still set prices. Be wary of aggressive price rises justified by the summit.</p>
<p><b>Infrastructure and visibility matter in the long run.</b> The airport–EXPO–Altıntaş–Kundu corridor, with new roads and a permanent congress venue, has become one of the city’s most invested routes. It is already where new residential projects are concentrated; finished infrastructure supports daily life and rental demand. See our <a href="{{URL:areas}}aksu-altintas/">Aksu &amp; Altıntaş guide</a> and the <a href="{{URL:areas}}kundu/">Kundu</a> and <a href="{{URL:areas}}belek/">Belek</a> pages.</p>
<p><b>Short-term letting has rules.</b> Congresses lift demand for short stays, but letting a home for tourism requires a permit from the Ministry of Culture and Tourism and the consent of the other owners in the building; fines for unpermitted letting are high.</p>
<p><b>Energy efficiency is becoming a value driver.</b> The COP31 Presidency launched the Antalya Compact for Energy Efficient Buildings to accelerate building decarbonisation. For buyers that means insulation, heat pumps, solar panels and a good Energy Performance Certificate rating, which lower running costs and help at resale. See our <a href="{{URL:blog}}dosemealti-villa-yasami-ve-enerji/">new-generation villa article</a> for examples.</p>
<p><b>Price in climate risk too.</b> Antalya is facing hotter, drier spells. Ask about orientation, shading, insulation, water tanks and proximity to wildfire-prone areas.</p>
<h2>Our view</h2>
<p>COP31 is a showcase that broadens Antalya’s image from holiday resort to a city for congresses, business and living. For investors the opportunity lies not in summit headlines but in weighing the corridors that infrastructure has permanently improved, the right project and the right price together. We can compare the options in the area for you, including <a href="{{URL:projects}}prime-lara-altintas/">Prime Lara</a> in Altıntaş, for which we are the authorised sales office. See also <a href="{{URL:blog}}antalyada-nereden-ev-alinir-konyaalti-lara-altintas/">where to buy a home in Antalya</a>.</p>
<h2>Sources</h2>
<ol class="nsources">
<li><a href="https://unfccc.int/cop31/ifp" target="_blank" rel="noopener nofollow">UNFCCC, Information for COP 31 participants</a></li>
<li><a href="https://www.alomaliye.com/2026/11/09/cop31-icin-antalyaya-102-liderden-katilim-beyani/" target="_blank" rel="noopener nofollow">AloMaliye, 102 leaders confirm attendance (9 Nov 2026)</a></li>
<li><a href="https://cambodianess.com/article/cop31-opens-as-climate-and-geopolitical-pressures-mount" target="_blank" rel="noopener nofollow">AFP / Cambodianess, COP31 opens</a></li>
<li><a href="https://www.milliyet.com.tr/haber/7695862/" target="_blank" rel="noopener nofollow">Milliyet / AA, COP31 venue and legacy (6 Nov 2026)</a></li>
<li><a href="https://www.timeturk.com/antalya-turizmine-192-milyar-liralik-yatirim-cop31-icin-dev-hazirlik" target="_blank" rel="noopener nofollow">Timeturk, 38 km of new roads</a></li>
<li><a href="https://www.24saatgazetesi.com/cop31-iklim-zirvesi-icin-antalya-havalimani-baglanti-yollarina-63-milyon-liralik-ihale" target="_blank" rel="noopener nofollow">24 Saat, airport link road tender</a></li>
<li><a href="https://www.dha.com.tr/yerel-haberler/antalya/asattan-cop31-oncesi-guclu-altyapi-hamlesi-2920293" target="_blank" rel="noopener nofollow">DHA, ASAT infrastructure works</a></li>
<li><a href="https://www.hurriyetdailynews.com/cop31-climate-summit-set-to-boost-antalyas-tourism-217853" target="_blank" rel="noopener nofollow">Hürriyet Daily News, COP31 set to boost Antalya’s tourism</a></li>
<li><a href="https://sustainabilitymag.com/news/cop31-turkiye-targets-a-more-sustainable-built-environment" target="_blank" rel="noopener nofollow">Sustainability Magazine, Antalya Compact</a></li>
</ol>`,
      faq: [
        ['When and where is COP31?', 'COP31 takes place from 9 to 20 November 2026 at the Antalya EXPO Center in Soğucaksu, Aksu. Türkiye hosts and holds the Presidency; Australia presides over the negotiations.'],
        ['Will COP31 raise house prices in Antalya?', 'A two-week event does not lift prices permanently on its own; rates, credit, inflation and supply and demand set prices. The lasting effect comes through new roads, congress infrastructure and the city’s international profile.'],
        ['Which areas are most affected?', 'The airport–EXPO–Altıntaş–Kundu corridor and the Belek hotel zone, where the new roads, the airport link and water infrastructure works are concentrated.'],
        ['Can I let my home short-term during congresses?', 'Letting a home for tourism requires a permit from the Ministry of Culture and Tourism and the consent of the other owners in the building. Unpermitted letting carries heavy fines.'],
        ['What is the Antalya Compact?', 'An international framework launched by the COP31 Presidency to accelerate energy efficiency and decarbonisation in buildings. For buyers it raises the importance of insulation, heat pumps, solar power and the energy certificate rating.'],
      ],
    },
    ru: {
      title: 'COP31 в Анталии: что климатический саммит ООН оставит городу и рынку недвижимости',
      seo: 'COP31 в Анталии: что саммит значит для недвижимости', desc: 'COP31 проходит 9–20 ноября 2026 года в Antalya EXPO. Дороги, инфраструктура и энергоэффективные здания: что саммит значит для недвижимости.',
      html: `
<p>С 9 по 20 ноября 2026 года Анталия принимает Конференцию ООН по изменению климата COP31. Две недели в городе главы государств, переговорщики, бизнес, гражданское общество и СМИ. Что это значит для тех, кто покупает, продаёт или инвестирует в недвижимость Анталии? Опираясь на официальные источники, отделяем факты от ожиданий.</p>
<h2>Что такое COP31 и где он проходит?</h2>
<ul class="ticks">
<li><b>Даты:</b> 9–20 ноября 2026 года.</li>
<li><b>Место:</b> Antalya EXPO Center в Согуджаксу, район Аксу (территория EXPO 2016).</li>
<li><b>Председательство:</b> Турция — страна-хозяйка и председатель COP31; переговорами руководит Австралия.</li>
<li><b>Участники:</b> о приезде заявили 95 лидеров государств и главы 7 международных организаций; по данным AFP, за две недели ожидается более 100 000 человек.</li>
<li><b>Повестка:</b> климатическое финансирование, сокращение выбросов, адаптация и справедливый переход; Турция называет саммит «COP внедрения».</li>
</ul>
<h2>Что останется Анталии после саммита?</h2>
<ul class="ticks">
<li><b>Постоянная конгрессно-выставочная площадка</b> на территории EXPO для ярмарок, конгрессов и крупных мероприятий.</li>
<li><b>Новые дороги:</b> около 38 км — 4 магистрали и 12 подъездов к отелям.</li>
<li><b>Дорога к аэропорту в Алтынташе:</b> муниципалитет объявил тендер на строительство дороги к грузовому терминалу и терминалу деловой авиации аэропорта.</li>
<li><b>Водоснабжение:</b> модернизация водопроводных сооружений в Аксу и Серик–Белеке.</li>
<li><b>Транспорт:</b> по словам министерства, вложения в транспорт и связь с метро будут служить городу и после конференции.</li>
</ul>
<h2>Что это значит для рынка недвижимости</h2>
<p><b>Не ждите скачка цен в короткий срок.</b> Двухнедельное событие само по себе не поднимает цены надолго: их определяют ставки, ипотека, инфляция и баланс спроса и предложения. Осторожно относитесь к резкому повышению цен «из‑за саммита».</p>
<p><b>В долгосрочной перспективе важны инфраструктура и узнаваемость.</b> Ось аэропорт–EXPO–Алтынташ–Кунду с новыми дорогами и постоянным конгресс-центром стала одним из самых инвестируемых направлений города, и именно здесь сосредоточены новые жилые проекты. Подробнее — в нашем <a href="{{URL:areas}}aksu-altintas/">гиде по Аксу и Алтынташу</a>.</p>
<p><b>Посуточная аренда — по правилам.</b> Для сдачи жилья туристам нужно разрешение Министерства культуры и туризма и согласие других собственников в доме; штрафы за аренду без разрешения высокие.</p>
<p><b>Энергоэффективность становится фактором стоимости.</b> Председательство COP31 запустило «Антальский пакт по энергоэффективным зданиям». Для покупателя это утепление, тепловые насосы, солнечные панели и хороший класс энергосертификата: ниже расходы и выше ликвидность при перепродаже.</p>
<p><b>Учитывайте климатические риски:</b> ориентацию, затенение, утепление, резервуар для воды и близость к лесам с риском пожаров.</p>
<h2>Мнение ACC HOMES</h2>
<p>COP31 расширяет образ Анталии от курорта до города конгрессов, бизнеса и жизни. Реальная возможность для инвестора — не в новостях о саммите, а в сочетании улучшенной инфраструктурой локации, правильного проекта и правильной цены. Мы можем сравнить для вас варианты в этом районе, включая проект <a href="{{URL:projects}}prime-lara-altintas/">Prime Lara</a> в Алтынташе, где мы официальный офис продаж. См. также <a href="{{URL:blog}}antalyada-nereden-ev-alinir-konyaalti-lara-altintas/">где купить квартиру в Анталии</a>.</p>
<h2>Источники</h2>
<ol class="nsources">
<li><a href="https://unfccc.int/cop31/ifp" target="_blank" rel="noopener nofollow">UNFCCC, Information for COP 31 participants</a></li>
<li><a href="https://www.alomaliye.com/2026/11/09/cop31-icin-antalyaya-102-liderden-katilim-beyani/" target="_blank" rel="noopener nofollow">AloMaliye, 102 лидера подтвердили участие (09.11.2026)</a></li>
<li><a href="https://cambodianess.com/article/cop31-opens-as-climate-and-geopolitical-pressures-mount" target="_blank" rel="noopener nofollow">AFP / Cambodianess, открытие COP31</a></li>
<li><a href="https://www.milliyet.com.tr/haber/7695862/" target="_blank" rel="noopener nofollow">Milliyet / AA, наследие COP31 (06.11.2026)</a></li>
<li><a href="https://www.timeturk.com/antalya-turizmine-192-milyar-liralik-yatirim-cop31-icin-dev-hazirlik" target="_blank" rel="noopener nofollow">Timeturk, 38 км новых дорог</a></li>
<li><a href="https://www.24saatgazetesi.com/cop31-iklim-zirvesi-icin-antalya-havalimani-baglanti-yollarina-63-milyon-liralik-ihale" target="_blank" rel="noopener nofollow">24 Saat, тендер на дорогу к аэропорту</a></li>
<li><a href="https://sustainabilitymag.com/news/cop31-turkiye-targets-a-more-sustainable-built-environment" target="_blank" rel="noopener nofollow">Sustainability Magazine, Antalya Compact</a></li>
</ol>`,
      faq: [
        ['Когда и где проходит COP31?', 'COP31 проходит с 9 по 20 ноября 2026 года в Antalya EXPO Center в Согуджаксу (район Аксу). Турция — страна-хозяйка и председатель, переговорами руководит Австралия.'],
        ['Поднимет ли COP31 цены на жильё в Анталии?', 'Двухнедельное событие само по себе не поднимает цены надолго. Долгосрочный эффект — через новые дороги, конгресс-инфраструктуру и международную узнаваемость города.'],
        ['Можно ли сдавать квартиру посуточно во время конгрессов?', 'Для туристической аренды нужно разрешение Министерства культуры и туризма и согласие других собственников в доме. За аренду без разрешения предусмотрены крупные штрафы.'],
      ],
    },
  },
];
