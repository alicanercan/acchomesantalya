// Blog 16 (27.11.2026): Altın mı, döviz mi, fon mu, gayrimenkul mü? 2026'nın dersleri (TR/EN/RU).
// Taslak: claude/blog-9-altin-doviz-fon-gayrimenkul.md — Caner onayı 27.11.2026. TÜİK reel getiri rakamları TÜİK Ekim 2026 bülteni haberleriyle teyit edildi.
const B = (s, t) => `<a href="{{URL:blog}}${s}/">${t}</a>`;
const WA = (t) => `<a href="{{WA}}" target="_blank" rel="noopener">${t}</a>`;
const SRC = `<ol class="nsources">
<li><a href="https://www.ntv.com.tr/ntvpara/spk-tasfiye-edilecek-fonlardaki-yatirimci-sayisini-acikladi-1743087" target="_blank" rel="noopener nofollow">NTV, SPK: tasfiye edilen fonlardaki yatırımcı sayısı</a></li>
<li><a href="https://haber.sol.org.tr/haber/spk-tasfiye-edilen-131-fondaki-yatirimci-sayisi-455-bin-758-kisi-414158" target="_blank" rel="noopener nofollow">SOL Haber, SPK: 131 fonda 455.758 tekil yatırımcı</a></li>
<li><a href="https://ntv.com.tr/turkiye/fon-sorusturmasi-spk-fonlarin-tasfiye-surecini-6-aya-cikardi-1742738" target="_blank" rel="noopener nofollow">NTV, SPK fonların tasfiye sürecini 6 aya çıkardı</a></li>
<li><a href="https://www.ekonomigazetesi.com/ekonomi/10-soruda-fon-krizi-ne-oldu-ne-olacak-90966" target="_blank" rel="noopener nofollow">Ekonomi Gazetesi, 10 soruda fon krizi</a></li>
<li><a href="https://www.turkiyegazetesi.com.tr/ekonomi/gram-altin-mevduat-cekismesi-2026da-roller-tamamen-degisti-1828611" target="_blank" rel="noopener nofollow">Türkiye Gazetesi, gram altın ve mevduat 2026</a></li>
<li><a href="https://hangihesaplama.com/altin-fiyatlari-yillara-gore" target="_blank" rel="noopener nofollow">Hangihesaplama, gram altın fiyatları yıllara göre</a></li>
<li><a href="https://www.gzt.com/foto-galeri/ekonomi/altin-ne-kadar-gram-altin-ceyrek-altin-fiyatlari-23-mart-2026-ekonomi-haberleri-4025397" target="_blank" rel="noopener nofollow">GZT, ons altında 43 yılın en sert haftalık düşüşü (23.03.2026)</a></li>
<li><a href="https://www.dunya.com/foto-galeri/ekonomi/gumuste-kayip-yuzde-50yi-asti-gram-gumusu-simdi-ne-bekliyor-galeri-844984" target="_blank" rel="noopener nofollow">Dünya, gümüşte kayıp %50’yi aştı</a></li>
<li><a href="https://www.borsagundem.com.tr/bofadan-turkiye-analizi-tlde-reel-degerlenme-sureci-devam-edebilir" target="_blank" rel="noopener nofollow">Borsa Gündem, BofA Türkiye raporu (reel kur stratejisi)</a></li>
<li><a href="https://www.cnbce.com/veriler/tuik-acikladi-gecen-ayin-en-cok-kazandiran-yatirim-araci-belli-oldu-h41333" target="_blank" rel="noopener nofollow">CNBC-e, TÜİK finansal yatırım araçlarının reel getirileri, Ekim 2026</a></li>
<li><a href="https://www.politikam.com/ekim-2026-en-cok-kazandiran-yatirim-araci-altin-dolar-borsa" target="_blank" rel="noopener nofollow">Politikam, TÜİK Ekim 2026 yıllık reel getiriler (TÜFE)</a></li>
<li><a href="https://www.capital.com.tr/tum-haberler/ekimde-en-yuksek-aylik-reel-getiri-mevduat-faizinde-oldu" target="_blank" rel="noopener nofollow">Capital, DİBS yıllık reel getirisi Ekim 2026</a></li>
<li><a href="https://www.sbb.gov.tr/2026-yili-ekim-ayi-tuketici-ve-uretici-fiyat-gelismeleri/" target="_blank" rel="noopener nofollow">SBB, Ekim 2026 tüketici ve üretici fiyat gelişmeleri</a></li>
<li><a href="https://www.cnbce.com/veriler/konut-fiyatlari-ekimde-reel-bazda-yuzde-66-geriledi-h41983" target="_blank" rel="noopener nofollow">CNBC-e, TCMB Konut Fiyat Endeksi Ekim 2026</a></li>
<li><a href="https://www.foreks.com/haber/detay/6afbfd0c4b18523914463a8d/PICNEWS/tr/konut-fiyatlarina-enflasyon-darbesi-reel-kayip-yuzde-6-6-17-11-26/" target="_blank" rel="noopener nofollow">Foreks, TCMB KFE 240,9 ve Yeni Kiracı Kira Endeksi</a></li>
<li><a href="https://www.milligazete.com.tr/ev-alacaklar-dikkat-istanbulda-konutun-kendini-amorti-etme-suresi-degisti-iste-10-yilda-kazandiran-ilceler" target="_blank" rel="noopener nofollow">Milli Gazete, Emlakjet/Endeksa amortisman raporu</a></li>
<li><a href="https://www.emlakmanset.com/ortalama-konut-fiyati-55-milyon-tl-il-il-ekim-deger-raporu.html" target="_blank" rel="noopener nofollow">Emlak Manşet, Emlakjet/Endeksa Ekim 2026 değer raporu</a></li>
<li><a href="https://www.emlakdream.com/satilik-konutta-reel-fiyat-kaybi-yeniden-hizlandi-ilanlarin-yayinda-kalma-suresi-58-6-gune-cikti/" target="_blank" rel="noopener nofollow">EmlakDream, BETAM sahibindex Ekim 2026</a></li>
</ol>`;

export const POSTS16 = [
  {
    slug: 'altin-mi-doviz-mi-fon-mu-gayrimenkul-mu-2026', cat: 'yatirim', date: '2026-11-27', icon: '⚖️',
    tr: {
      title: 'Altın mı, Döviz mi, Fon mu, Gayrimenkul mü? Son Bir Yılın Verileriyle 2026’nın Dersleri',
      seo: 'Altın mı, Döviz mi, Gayrimenkul mü? 2026’nın Dersleri',
      desc: 'Fon krizi, altın ve gümüşte sert dalga, kontrollü kur: Son 12 ayın resmi verileriyle altın, döviz, fon, mevduat ve gayrimenkulü karşılaştırdık.',
      html: `
<p class="lead"><b>Kısa cevap:</b> TÜİK’in Ekim 2026 verisine göre son 12 ayda altın, dolar, euro ve BIST 100 enflasyonun gerisinde kaldı. En yüksek reel getiriyi devlet tahvili (DİBS) ve mevduat sağladı. Konutta fiyatlar yıllık %21,1, yeni kiracı kiraları %24,5 arttı. Kira geliri eklendiğinde konutun toplam getirisi enflasyona yakın gerçekleşti ve bunu sert dalgalanma, işlem durdurma ya da panik satışı yaşatmadan yaptı.</p>
<p>2026, Türkiye’de birikimi olan herkes için zor bir sınav yılı oldu. Yılın başında rekor kıran altın ve gümüş kısa sürede sert düştü. Eylül’de yüz binlerce kişinin parası, işlemleri durdurulan yatırım fonlarında kaldı. Dolar ve euro ise enflasyonun gerisinde, kontrollü bir patikada ilerledi. Bu yazıda son bir yılda ne olduğunu resmi veriler ve haberlerle özetliyor, her yatırım aracının ne kazandırıp ne kaybettirdiğini yan yana koyuyoruz.</p>
<h2>1. Fon krizi: Getiri kadar likidite ve şeffaflık da önemli</h2>
<p>Sermaye Piyasası Kurulu (SPK), 17 Eylül 2026’da yedi portföy yönetim şirketinin TEFAS’ta işlem gören fonlarını işleme kapattı ve 131 fonun tasfiyesine karar verdi. SPK’nın açıklamasına göre bu fonlardaki tekil yatırımcı sayısı <b>455 bin 758</b>.</p>
<p>Krizin arka planında, SPK’nın bazı serbest fonlar ve para piyasası fonları üzerinden fiili dolaşım oranı düşük hisselerde şirketlerin temel verileriyle açıklanamayan fiyat hareketleri tespit etmesi var. Konuyla ilgili geniş çaplı adli soruşturma başlatıldı ve süreç yargıda devam ediyor. Tasfiye süresi altı aya uzatıldı, yatırımcılara ödemeler kademeli olarak yapılıyor.</p>
<p><b>Ders:</b> Pek çok yatırımcı “fon” kelimesini düşük riskle eşleştirmişti. Oysa bir yatırımın gerçek riski, ihtiyaç duyduğunuz anda paranıza ulaşıp ulaşamayacağınızda ve içinde ne olduğunu bilip bilmediğinizde ortaya çıkar. Tapulu bir mülk sizin adınıza kayıtlıdır; değeri bir yönetim şirketinin kararına ya da tek bir hissenin fiyatına bağlı değildir.</p>
<h2>2. Altın ve gümüş: Zirveden alan zarar etti</h2>
<p>2025’te gram altın yaklaşık %100 kazandırınca 2026’ya büyük beklentiyle girildi. Ons altın Ocak’ta 5.600 dolar civarında zirve yaptı, Kasım’ın ikinci haftasında 4.000 dolar sınırına geriledi. Gram altın 29 Ocak’ta 7.995 TL ile rekor gördü, hemen ardından tek seansta tarihi bir düşüş yaşadı. Mart’ta ons altın son 43 yılın en sert haftalık düşüşünü kaydetti.</p>
<p>Gümüşte tablo daha da sertti: Ons gümüş 29 Ocak’ta 121 doların üzerinde rekor kırdı, sonraki aylarda zirvesine göre %50’yi aşan kayıp yaşadı.</p>
<p>Kasım 2025’ten Kasım 2026’ya gram altının nominal getirisi tek haneli kaldı. TÜİK’e göre külçe altın son 12 ayda enflasyondan arındırıldığında <b>%11,7</b> kaybettirdi.</p>
<p><b>Ders:</b> Altın uzun vadede değer koruyabilir, ancak kısa vadede çok oynaktır. Haberlerin ve sosyal medyadaki “kaçırma” telaşının etkisiyle zirveden alan yatırımcı, bir yıl sonra hâlâ zarardaydı.</p>
<h2>3. Dolar ve euro: Kontrollü kur, reel kayıp</h2>
<p>Merkez Bankası 2026 boyunca sıkı para politikasını ve pozitif reel faizi sürdürdü. Kur, ani sıçramalar yerine kademeli ve kontrollü biçimde yükseldi; uluslararası kurumların raporlarında da TCMB’nin reel kur stratejisinden sapmadığı vurgulandı. Sonuçta dolar son bir yılda yaklaşık %19, euro yaklaşık %13 arttı. Aynı dönemde yıllık enflasyon %29,77 oldu.</p>
<p>TÜİK verisine göre son 12 ayda dolar enflasyondan arındırıldığında <b>%8,9</b>, euro <b>%12,3</b> kaybettirdi.</p>
<p><b>Ders:</b> Döviz, kur şoklarına karşı bir sigorta olarak tutulabilir. Ancak enflasyonun kurdan hızlı arttığı dönemlerde birikimi büyütmez, eritir.</p>
<h2>4. Mevduat ve devlet tahvili: Bu yılın kazananı, ama kalıcı değil</h2>
<p>Adil olmak gerekirse: Son 12 ayda en yüksek reel getiriyi devlet iç borçlanma senetleri (TÜFE’ye göre %4,04) ve mevduat sağladı. Yüksek politika faizi bu araçları öne çıkardı.</p>
<p>Ancak faizler düşüş sürecinde ve piyasa önümüzdeki dönemde yeni indirimler bekliyor. Faiz düştükçe mevduatın getirisi de düşer. Mevduat, enflasyonla birlikte büyüyen bir gelir (kira gibi) ya da anaparanın kendi değer artışını sunmaz. Bu yüzden kısa vadeli bir park yeri olarak iyidir, uzun vadeli servet aracı olarak sınırlıdır.</p>
<h2>5. Gayrimenkul: Dalgalanmasız, gelir üreten varlık</h2>
<p>TCMB Konut Fiyat Endeksi’ne göre konut fiyatları Ekim 2026’da yıllık <b>%21,1</b> arttı; yeni kiracı kiraları <b>%24,5</b> yükseldi. Fiyat artışı enflasyonun gerisinde kaldı ve reel olarak %6,6’lık düşüş var. Bunu açıkça söylemek gerekir. Ancak tablo bununla bitmiyor:</p>
<ul class="ticks">
<li><b>Kira geliri:</b> Türkiye genelinde konutun kendini kirayla geri ödeme süresi 13 yıl (Emlakjet/Endeksa). Bu, yaklaşık %7–8 brüt yıllık kira getirisi demek. Fiyat artışına kira eklendiğinde konutun toplam getirisi enflasyona yakın gerçekleşti.</li>
<li><b>Kayıp, diğer araçlardan az:</b> Yalnızca fiyat bazında bile konutun reel kaybı (%6,6); altın (%11,7), euro (%12,3) ve borsadan (%15,1) düşük kaldı. Fonlardaki gibi bir işlem durdurma ya da tasfiye riski de yaşanmadı.</li>
<li><b>Antalya ortalamanın üzerinde:</b> Emlakjet/Endeksa Ekim raporuna göre Antalya’da ortalama konut fiyatı yıllık %23,2 arttı.</li>
<li><b>Orta vadede güçlü değer artışı:</b> TCMB Konut Fiyat Endeksi 2023 ortalamasında 100 iken Ekim 2026’da 240,9’a ulaştı. Ortalama bir konutun fiyatı yaklaşık üç yılda 2,4 katına çıktı.</li>
<li><b>Arz daralıyor:</b> Antalya’da yeni yapı ruhsatlarının zayıf seyri ve müteahhit güveninin düşüklüğü, 2027–2028’de yeni konut arzının sınırlı kalabileceğine işaret ediyor. Bu kesin bir fiyat öngörüsü değil, izlenmesi gereken bir eğilim.</li>
</ul>
<h3>Gayrimenkulün riskleri de var</h3>
<ul>
<li><b>Likidite:</b> Ev, altın gibi bir dakikada satılmaz. Bugün ilanlar Türkiye genelinde ortalama iki aya yakın yayında kalıyor; doğru fiyatla çıkılmazsa süre uzar.</li>
<li><b>İşlem maliyeti:</b> Tapu harcı, emlak vergisi, aidat ve bakım toplam getiriden düşülmelidir.</li>
<li><b>Yanlış seçim:</b> Yanlış bölge, imar sorunu ya da kiralanması zor bir mülk, en güvenli varlığı bile verimsiz hale getirir. Turizm bölgelerinde fiyatlar kiradan hızlı arttığı için amortisman süreleri uzayabiliyor; bu da bölge ve mülk seçimini daha kritik yapıyor.</li>
</ul>
<h2>6. Son 12 ay tek tabloda</h2>
<div class="tblw"><table class="cmp"><thead><tr><th>Yatırım aracı</th><th>Son 12 ayda olan</th><th>Reel sonuç</th></tr></thead><tbody>
<tr><td>Devlet tahvili (DİBS)</td><td>Yüksek faiz</td><td>+%4,0</td></tr>
<tr><td>Mevduat (brüt)</td><td>Yüksek faiz, indirim süreci başladı</td><td>Pozitif</td></tr>
<tr><td>Dolar</td><td>Yaklaşık +%19</td><td>−%8,9</td></tr>
<tr><td>Altın</td><td>Ocak zirvesinden sert düşüş</td><td>−%11,7</td></tr>
<tr><td>Euro</td><td>Yaklaşık +%13</td><td>−%12,3</td></tr>
<tr><td>BIST 100</td><td>Dalgalı</td><td>−%15,1</td></tr>
<tr><td>Krizdeki yatırım fonları</td><td>131 fon tasfiyede, işlemler durdu</td><td>Parası aylarca kilitli kalan yatırımcılar</td></tr>
<tr><td>Konut (yalnız fiyat)</td><td>+%21,1</td><td>−%6,6</td></tr>
<tr><td>Konut (fiyat + kira)</td><td>Fiyat artışına %7–8 brüt kira eklendi</td><td>Enflasyona yakın</td></tr>
</tbody></table></div>
<p class="srcs">Reel sonuçlar TÜFE ile indirgenmiştir. Kaynak: TÜİK Ekim 2026 finansal yatırım araçları reel getirileri, TCMB Konut Fiyat Endeksi Ekim 2026, Emlakjet/Endeksa amortisman raporu. Konutun toplam getirisi Türkiye ortalamasıdır ve ACC HOMES’un yaklaşık hesabıdır.</p>
<h2>7. Gayrimenkulde fark yaratan: Doğru bölge, doğru mülk, doğru danışman</h2>
<p>Son bir yılın asıl dersi şu: Aynı yatırım aracında bile sonuçlar çok farklı olabiliyor. Gayrimenkulde bu farkı dört şey belirliyor:</p>
<ol>
<li><b>Bölge seçimi:</b> Ulaşım, okul, hastane, sahil ve yeni yatırımlara yakınlık. Antalya’da bölgelere göre yatırım mantığını ${B('antalyada-gayrimenkul-yatirimi-bolgeler-ve-stratejiler', 'Antalya gayrimenkul yatırım rehberimizde')} anlatıyoruz.</li>
<li><b>Doğru fiyat:</b> Emsal verisiyle piyasa değerinin üstünde ödememek. Güncel veriler için ${B('antalya-konut-piyasasi-kasim-2026', 'Kasım 2026 konut piyasası raporumuza')} bakabilirsiniz.</li>
<li><b>Hukuki kontrol:</b> Tapu, imar, iskân ve takyidat kontrolü. Liste için ${B('antalya-ev-alirken-dikkat-edilmesi-gerekenler', 'ev alırken yasal kontrol rehberimize')} göz atın.</li>
<li><b>Kira stratejisi:</b> Mülkün kime, ne kadara ve nasıl kiralanacağı baştan planlanmalı. Ayrıntılar ${B('antalya-evimi-kiraya-vermek-istiyorum', 'evimi kiraya vermek istiyorum rehberimizde')}.</li>
</ol>
<p>Arsa mı, daire mi kararsızsanız ${B('antalya-gayrimenkul-yatirimi-arsa-mi-ev-mi', 'arsa mı ev mi yazımız')}, krediyle almayı düşünüyorsanız ${B('bddk-konut-kredisi-ikinci-ev-karari-kasim-2026', 'BDDK konut kredisi kararı yazımız')} yol gösterir.</p>
<h2>ACC HOMES’un görüşü</h2>
<p>Fon krizi ve değerli metallerdeki sert dalga, birikimin yalnızca getiriyle değil; güvenlik, şeffaflık ve uyku kalitesiyle de ölçüldüğünü bir kez daha hatırlattı. Gayrimenkul her yıl en çok kazandıran araç olmayabilir. Ama tapusu sizin adınıza olan, kira geliri üreten ve uzun vadede enflasyonla birlikte değerlenen bir varlık olarak sakin bir liman olmayı sürdürüyor. Bu limanın verimi ise doğru bölgeye, doğru fiyata ve doğru analize bağlı.</p>
<p>Antalya’da bütçenize ve hedefinize uygun bölgeleri, güncel emsal fiyatları ve tahmini kira getirisini birlikte değerlendirmek için ${WA('WhatsApp’tan bize yazın →')}</p>
<p class="srcs">Bu yazı genel bilgilendirme amaçlıdır, yatırım tavsiyesi değildir. ACC HOMES sermaye piyasası araçları için yatırım danışmanlığı yapmaz. Rakamlar aşağıdaki kaynaklardan özetlenmiştir.</p>
<h2>Kaynaklar</h2>
${SRC}`,
      faq: [
        ['2026’da en çok kazandıran yatırım aracı hangisi oldu?', 'TÜİK’in Ekim 2026 verisine göre son 12 ayda en yüksek reel getiriyi devlet iç borçlanma senetleri (TÜFE’ye göre %4,04) ve mevduat sağladı. Altın, dolar, euro ve BIST 100 enflasyonun gerisinde kaldı.'],
        ['Altın mı, ev mi daha güvenli?', 'Altın hızlı nakde dönebilir ama çok oynaktır: 2026’da gram altın Ocak zirvesinden kısa sürede sert düştü. Konut daha yavaş satılır ama fiyatı dalgalanmaz ve kira geliri üretir. Hangisinin uygun olduğu vadeye ve likidite ihtiyacına bağlıdır.'],
        ['Fon krizi nedir, kaç kişiyi etkiledi?', 'SPK 17 Eylül 2026’da yedi portföy yönetim şirketinin fonlarını işleme kapattı ve 131 fonun tasfiyesine karar verdi. Bu fonlarda 455 bin 758 tekil yatırımcı bulunuyor. Süreçle ilgili adli soruşturma devam ediyor.'],
        ['Konut fiyatları enflasyonun altında mı kaldı?', 'Evet. TCMB verisine göre Ekim 2026’da konut fiyatları yıllık %21,1 arttı, reel olarak %6,6 geriledi. Yaklaşık %7–8 brüt kira getirisi eklendiğinde toplam getiri enflasyona yakın gerçekleşti.'],
        ['Antalya’da gayrimenkul yatırımı hâlâ mantıklı mı?', 'Antalya’da fiyatlar Ekim’de yıllık %23,2 ile Türkiye ortalamasının üzerinde arttı ve yeni konut arzı yavaşlıyor. Ancak kira getirisi bölgeye göre çok değişiyor; bölge ve mülk seçimi emsal fiyat analiziyle yapılmalı.'],
      ],
    },
    en: {
      title: 'Gold, Currency, Funds or Real Estate? What 2026 Taught Turkish Investors',
      seo: 'Gold, FX or Real Estate? Turkey’s 2026 Lessons',
      desc: 'A fund crisis, a gold crash and a managed lira: we compare gold, dollars, funds, deposits and Turkish property with 12 months of official data.',
      html: `
<p class="lead"><b>Short answer:</b> According to TÜİK (Turkish Statistical Institute) data for October 2026, gold, the US dollar, the euro and the BIST 100 index all lagged inflation over the past 12 months. Government bonds and bank deposits delivered the highest real returns. Turkish house prices rose 21.1% year on year and new-tenant rents 24.5%. Once rental income is added, housing delivered a total return close to inflation, without sharp swings, trading halts or panic selling.</p>
<p>2026 was a tough test for anyone in Turkey with savings. Gold and silver hit records early in the year and then fell sharply. In September, the money of hundreds of thousands of people was frozen in investment funds whose trading was suspended. The dollar and the euro moved along a managed path, behind inflation. Here we summarise what happened over the past year with official data and news, and compare what each asset gained or lost.</p>
<h2>1. The fund crisis: liquidity and transparency matter as much as returns</h2>
<p>On 17 September 2026, Turkey’s Capital Markets Board (SPK) suspended trading in the funds of seven portfolio management companies on the TEFAS platform and ordered the liquidation of 131 funds. According to the SPK, these funds had <b>455,758</b> individual investors.</p>
<p>Behind the crisis were the SPK’s findings of price moves in thinly traded shares, bought through some hedge and money-market funds, that could not be explained by company fundamentals. A wide criminal investigation was opened and the case is still before the courts. The liquidation period was extended to six months and investors are being paid in stages.</p>
<p><b>Lesson:</b> Many investors equated “fund” with low risk. Yet the real risk of an investment shows when you need your money and cannot reach it, or do not know what you actually own. A property with a title deed is registered in your name; its value does not depend on a management company’s decisions or on the price of a single share.</p>
<h2>2. Gold and silver: those who bought at the top lost</h2>
<p>After gold returned roughly 100% in lira terms in 2025, investors entered 2026 with high expectations. Gold peaked near USD 5,600 per ounce in January and fell to around USD 4,000 by mid-November. Gram gold in Turkey hit a record of TRY 7,995 on 29 January, then suffered a historic one-day drop. In March, ounce gold had its sharpest weekly fall in 43 years.</p>
<p>Silver was even more brutal: it set a record above USD 121 per ounce on 29 January and later lost more than 50% from its peak.</p>
<p>From November 2025 to November 2026 gram gold’s nominal return stayed in single digits. According to TÜİK, gold bullion lost <b>11.7%</b> in real terms over the past 12 months.</p>
<p><b>Lesson:</b> Gold can preserve value over the long run but is very volatile in the short run. Investors who bought at the top out of fear of missing out were still at a loss a year later.</p>
<h2>3. Dollar and euro: a managed exchange rate, a real loss</h2>
<p>Turkey’s central bank (TCMB) kept tight monetary policy and positive real interest rates throughout 2026. The lira weakened gradually rather than in sudden jumps, and international banks noted that the TCMB stuck to its real exchange rate strategy. As a result, the dollar rose about 19% and the euro about 13% over the year, while annual inflation was 29.77%.</p>
<p>According to TÜİK, the dollar lost <b>8.9%</b> and the euro <b>12.3%</b> in real terms over the past 12 months.</p>
<p><b>Lesson:</b> Foreign currency can be held as insurance against a currency shock. But when inflation runs ahead of the exchange rate, it erodes savings rather than growing them.</p>
<h2>4. Deposits and government bonds: this year’s winners, but not for ever</h2>
<p>To be fair: over the past 12 months government bonds (4.04% real, CPI-deflated) and bank deposits delivered the highest real returns, thanks to a high policy rate.</p>
<p>Rates are now falling and markets expect further cuts. As rates fall, deposit returns fall too. A deposit offers neither income that grows with inflation (like rent) nor growth in the value of the capital itself. It is a good short-term parking place but a limited long-term wealth tool.</p>
<h2>5. Real estate: a stable, income-producing asset</h2>
<p>According to the TCMB house price index, Turkish house prices rose <b>21.1%</b> year on year in October 2026, and new-tenant rents <b>24.5%</b>. Price growth lagged inflation: in real terms prices fell 6.6%. That should be said plainly. But the picture does not end there:</p>
<ul class="ticks">
<li><b>Rental income:</b> Across Turkey, a home pays for itself through rent in about 13 years (Emlakjet/Endeksa), which implies a gross rental yield of roughly 7–8% a year. Adding rent to price growth, housing’s total return came close to inflation.</li>
<li><b>Smaller losses than other assets:</b> Even on price alone, housing’s real loss (6.6%) was smaller than gold (11.7%), the euro (12.3%) and the stock market (15.1%). There was no trading halt or forced liquidation either.</li>
<li><b>Antalya above average:</b> According to Emlakjet/Endeksa’s October report, average home prices in Antalya rose 23.2% year on year.</li>
<li><b>Strong medium-term growth:</b> The TCMB house price index stood at 100 on its 2023 average and reached 240.9 in October 2026. The price of an average home rose about 2.4 times in roughly three years.</li>
<li><b>Supply is tightening:</b> Weak new building permits and low builder confidence in Antalya point to limited new supply in 2027–2028. This is a trend to watch, not a price forecast.</li>
</ul>
<h3>Real estate has risks too</h3>
<ul>
<li><b>Liquidity:</b> A home does not sell in a minute like gold. Listings in Turkey now stay online for close to two months on average, longer if mispriced.</li>
<li><b>Transaction costs:</b> Title deed fees, property tax, service charges and maintenance must be deducted from returns.</li>
<li><b>The wrong choice:</b> The wrong area, a zoning issue or a hard-to-let property can make even the safest asset inefficient. In tourist areas prices have risen faster than rents, lengthening payback periods, which makes area and property selection even more important.</li>
</ul>
<h2>6. The last 12 months in one table</h2>
<div class="tblw"><table class="cmp"><thead><tr><th>Asset</th><th>What happened</th><th>Real result</th></tr></thead><tbody>
<tr><td>Government bonds</td><td>High interest rates</td><td>+4.0%</td></tr>
<tr><td>Bank deposits (gross)</td><td>High rates, cuts have begun</td><td>Positive</td></tr>
<tr><td>US dollar</td><td>About +19%</td><td>−8.9%</td></tr>
<tr><td>Gold</td><td>Sharp fall from January peak</td><td>−11.7%</td></tr>
<tr><td>Euro</td><td>About +13%</td><td>−12.3%</td></tr>
<tr><td>BIST 100</td><td>Volatile</td><td>−15.1%</td></tr>
<tr><td>Funds caught in the crisis</td><td>131 funds in liquidation, trading halted</td><td>Investors’ money frozen for months</td></tr>
<tr><td>Housing (price only)</td><td>+21.1%</td><td>−6.6%</td></tr>
<tr><td>Housing (price + rent)</td><td>7–8% gross rent added to price growth</td><td>Close to inflation</td></tr>
</tbody></table></div>
<p class="srcs">Real results are deflated by CPI. Sources: TÜİK real returns of financial investment instruments, October 2026; TCMB house price index, October 2026; Emlakjet/Endeksa payback report. Housing total return is a Turkey average and an approximate calculation by ACC HOMES.</p>
<h2>7. What makes the difference in real estate: the right area, property and adviser</h2>
<p>The main lesson of the past year: results can differ widely even within the same asset class. In real estate four things make the difference:</p>
<ol>
<li><b>Area:</b> transport, schools, hospitals, the coast and new investment. See our ${B('antalyada-gayrimenkul-yatirimi-bolgeler-ve-stratejiler', 'Antalya investment guide by area')}.</li>
<li><b>The right price:</b> not paying above market value, based on comparable sales. See our ${B('antalya-konut-piyasasi-kasim-2026', 'November 2026 Antalya market report')}.</li>
<li><b>Legal checks:</b> title deed, zoning, occupancy permit and encumbrances. See our ${B('antalya-ev-alirken-dikkat-edilmesi-gerekenler', 'legal checklist for buying a home')}.</li>
<li><b>Rental strategy:</b> plan from day one who the property will be let to, at what rent and how. See our ${B('antalya-evimi-kiraya-vermek-istiyorum', 'guide to renting out your home')}.</li>
</ol>
<p>Undecided between land and an apartment? Read ${B('antalya-gayrimenkul-yatirimi-arsa-mi-ev-mi', 'land or a home')}. Buying with a mortgage? See ${B('bddk-konut-kredisi-ikinci-ev-karari-kasim-2026', 'the BDDK mortgage decision')}.</p>
<h2>ACC HOMES’ view</h2>
<p>The fund crisis and the swings in precious metals were a reminder that savings are measured not only by returns but also by security, transparency and peace of mind. Real estate may not be the top performer every year. But as an asset registered in your name, producing rent and appreciating with inflation over the long run, it remains a calm harbour. How well that harbour performs depends on the right area, the right price and sound analysis.</p>
<p>To review areas in Antalya that fit your budget and goals, with current comparable prices and estimated rental yield, ${WA('message us on WhatsApp →')}</p>
<p class="srcs">This article is for general information only and is not investment advice. ACC HOMES does not provide investment advice on capital market instruments. Figures are summarised from the sources below (mostly in Turkish).</p>
<h2>Sources</h2>
${SRC}`,
      faq: [
        ['Which investment performed best in Turkey in 2026?', 'According to TÜİK data for October 2026, government bonds (4.04% real, CPI-deflated) and bank deposits delivered the highest real returns over the past 12 months. Gold, the US dollar, the euro and the BIST 100 lagged inflation.'],
        ['Is gold or property safer?', 'Gold converts to cash quickly but is very volatile: in 2026 gram gold fell sharply soon after its January peak. Property sells more slowly but its price does not swing and it produces rent. The right choice depends on your time horizon and liquidity needs.'],
        ['What was the Turkish fund crisis?', 'On 17 September 2026 the Capital Markets Board suspended the funds of seven portfolio managers and ordered 131 funds to be liquidated. These funds had 455,758 individual investors, and a criminal investigation is ongoing.'],
        ['Did Turkish house prices lag inflation?', 'Yes. According to the TCMB, house prices rose 21.1% in the year to October 2026, a 6.6% fall in real terms. Adding a gross rental yield of roughly 7–8%, total return came close to inflation.'],
        ['Is real estate in Antalya still a sensible investment?', 'Prices in Antalya rose 23.2% year on year in October, above the Turkish average, and new supply is slowing. Rental yields vary widely by area, so area and property choice should be based on comparable price analysis.'],
      ],
    },
    ru: {
      title: 'Золото, валюта, фонды или недвижимость? Уроки 2026 года для инвесторов в Турции',
      seo: 'Золото, валюта или недвижимость? Уроки 2026 года',
      desc: 'Кризис фондов, обвал золота и серебра, управляемый курс лиры: сравниваем золото, доллар, фонды, депозиты и недвижимость в Турции по данным за 12 месяцев.',
      html: `
<p class="lead"><b>Коротко:</b> по данным TÜİK (Турецкий статистический институт) за октябрь 2026 года, за последние 12 месяцев золото, доллар, евро и индекс BIST 100 отстали от инфляции. Самую высокую реальную доходность дали государственные облигации и банковские депозиты. Цены на жильё в Турции выросли на 21,1% за год, аренда для новых арендаторов — на 24,5%. С учётом арендного дохода совокупная доходность жилья оказалась близка к инфляции — без резких колебаний, остановки торгов и панических продаж.</p>
<p>2026 год стал серьёзным испытанием для всех, у кого в Турции есть сбережения. В начале года золото и серебро обновили рекорды, а затем резко упали. В сентябре деньги сотен тысяч людей оказались заморожены в инвестиционных фондах, торги которыми приостановили. Доллар и евро двигались по управляемой траектории, отставая от инфляции. Ниже — что произошло за год по официальным данным и новостям и что принёс каждый инструмент.</p>
<h2>1. Кризис фондов: ликвидность и прозрачность важны не меньше доходности</h2>
<p>17 сентября 2026 года Совет по рынкам капитала Турции (SPK) приостановил торги фондами семи управляющих компаний на платформе TEFAS и принял решение о ликвидации 131 фонда. По данным SPK, в этих фондах было <b>455 758</b> частных инвесторов.</p>
<p>Причиной стали выводы SPK о том, что через ряд хедж-фондов и фондов денежного рынка цены на малоликвидные акции двигались без связи с финансовыми показателями компаний. Возбуждено масштабное уголовное расследование, дело рассматривается в суде. Срок ликвидации продлён до шести месяцев, выплаты инвесторам идут поэтапно.</p>
<p><b>Урок:</b> многие считали слово «фонд» синонимом низкого риска. Но реальный риск инвестиции проявляется тогда, когда деньги нужны, а доступа к ним нет, или когда вы не знаете, чем владеете. Недвижимость с тапу зарегистрирована на ваше имя; её стоимость не зависит от решений управляющей компании или цены одной акции.</p>
<h2>2. Золото и серебро: купившие на пике потеряли</h2>
<p>После того как в 2025 году грамм золота принёс около 100% в лирах, 2026 год начался с больших ожиданий. Унция золота достигла пика около 5 600 долларов в январе и к середине ноября опустилась к 4 000 долларов. Грамм золота в Турции 29 января установил рекорд 7 995 лир, а затем пережил историческое однодневное падение. В марте унция золота показала самое резкое недельное снижение за 43 года.</p>
<p>Серебро упало ещё сильнее: 29 января оно поднялось выше 121 доллара за унцию, а затем потеряло более 50% от пика.</p>
<p>С ноября 2025 по ноябрь 2026 года номинальная доходность грамма золота осталась однозначной. По данным TÜİK, слитковое золото за 12 месяцев потеряло <b>11,7%</b> в реальном выражении.</p>
<p><b>Урок:</b> золото может сохранять стоимость в долгосрочной перспективе, но в краткосрочной оно очень волатильно. Те, кто купил на пике из страха упустить рост, спустя год оставались в минусе.</p>
<h2>3. Доллар и евро: управляемый курс, реальные потери</h2>
<p>Центральный банк Турции (TCMB) весь 2026 год сохранял жёсткую денежную политику и положительную реальную ставку. Лира слабела постепенно, без резких скачков; международные банки отмечали, что TCMB придерживается стратегии реального курса. В итоге доллар вырос примерно на 19%, евро — на 13%, а годовая инфляция составила 29,77%.</p>
<p>По данным TÜİK, за 12 месяцев доллар потерял <b>8,9%</b>, евро — <b>12,3%</b> в реальном выражении.</p>
<p><b>Урок:</b> валюту можно держать как страховку от курсового шока. Но когда инфляция обгоняет курс, она не приумножает сбережения, а съедает их.</p>
<h2>4. Депозиты и гособлигации: победители года, но не навсегда</h2>
<p>Справедливости ради: за последние 12 месяцев самую высокую реальную доходность дали государственные облигации (4,04% с учётом инфляции) и депозиты — благодаря высокой ключевой ставке.</p>
<p>Однако ставки снижаются, и рынок ждёт новых снижений. Вместе со ставкой падает и доходность депозитов. Депозит не даёт ни растущего вместе с инфляцией дохода (как аренда), ни роста стоимости самого капитала. Это хорошее место для временного хранения денег, но ограниченный инструмент для долгосрочного накопления.</p>
<h2>5. Недвижимость: стабильный актив, приносящий доход</h2>
<p>По индексу цен на жильё TCMB, в октябре 2026 года цены выросли на <b>21,1%</b> за год, аренда для новых арендаторов — на <b>24,5%</b>. Рост цен отстал от инфляции: в реальном выражении снижение составило 6,6%. Это нужно сказать прямо. Но картина на этом не заканчивается:</p>
<ul class="ticks">
<li><b>Арендный доход:</b> в среднем по Турции жильё окупается арендой примерно за 13 лет (Emlakjet/Endeksa), то есть валовая арендная доходность около 7–8% в год. С учётом аренды совокупная доходность жилья оказалась близка к инфляции.</li>
<li><b>Потери меньше, чем у других активов:</b> даже только по цене реальное снижение жилья (6,6%) меньше, чем у золота (11,7%), евро (12,3%) и фондового рынка (15,1%). Не было и остановки торгов или принудительной ликвидации.</li>
<li><b>Анталия выше среднего:</b> по октябрьскому отчёту Emlakjet/Endeksa, средняя цена жилья в Анталии выросла на 23,2% за год.</li>
<li><b>Сильный рост в среднесрочной перспективе:</b> индекс цен TCMB был равен 100 в среднем за 2023 год и достиг 240,9 в октябре 2026 года. Средняя квартира подорожала примерно в 2,4 раза примерно за три года.</li>
<li><b>Предложение сокращается:</b> слабая динамика новых разрешений на строительство и низкое доверие застройщиков в Анталии указывают на ограниченное новое предложение в 2027–2028 годах. Это тенденция, а не прогноз цен.</li>
</ul>
<h3>У недвижимости тоже есть риски</h3>
<ul>
<li><b>Ликвидность:</b> квартира не продаётся за минуту, как золото. Объявления в Турции сейчас висят в среднем почти два месяца, дольше — при завышенной цене.</li>
<li><b>Расходы на сделку:</b> сбор за тапу, налог на недвижимость, коммунальные платежи комплекса и обслуживание нужно вычитать из доходности.</li>
<li><b>Неправильный выбор:</b> неудачный район, проблемы с зонированием или объект, который трудно сдать, делают неэффективным даже самый надёжный актив. В туристических районах цены росли быстрее аренды, и срок окупаемости удлиняется — поэтому выбор района и объекта ещё важнее.</li>
</ul>
<h2>6. Последние 12 месяцев в одной таблице</h2>
<div class="tblw"><table class="cmp"><thead><tr><th>Инструмент</th><th>Что произошло</th><th>Реальный результат</th></tr></thead><tbody>
<tr><td>Гособлигации</td><td>Высокие ставки</td><td>+4,0%</td></tr>
<tr><td>Депозиты (брутто)</td><td>Высокие ставки, начались снижения</td><td>Положительный</td></tr>
<tr><td>Доллар США</td><td>Около +19%</td><td>−8,9%</td></tr>
<tr><td>Золото</td><td>Резкое падение с январского пика</td><td>−11,7%</td></tr>
<tr><td>Евро</td><td>Около +13%</td><td>−12,3%</td></tr>
<tr><td>BIST 100</td><td>Волатильность</td><td>−15,1%</td></tr>
<tr><td>Фонды, попавшие в кризис</td><td>131 фонд ликвидируется, торги остановлены</td><td>Деньги инвесторов заморожены на месяцы</td></tr>
<tr><td>Жильё (только цена)</td><td>+21,1%</td><td>−6,6%</td></tr>
<tr><td>Жильё (цена + аренда)</td><td>К росту цены добавлено 7–8% валовой аренды</td><td>Близко к инфляции</td></tr>
</tbody></table></div>
<p class="srcs">Реальные результаты рассчитаны с учётом индекса потребительских цен. Источники: TÜİK, реальная доходность финансовых инструментов, октябрь 2026; индекс цен на жильё TCMB, октябрь 2026; отчёт Emlakjet/Endeksa о сроках окупаемости. Совокупная доходность жилья — среднее по Турции и приблизительный расчёт ACC HOMES.</p>
<h2>7. Что решает в недвижимости: правильный район, объект и консультант</h2>
<p>Главный урок года: даже внутри одного класса активов результаты сильно различаются. В недвижимости разницу определяют четыре вещи:</p>
<ol>
<li><b>Район:</b> транспорт, школы, больницы, море и новые инвестиции. Подробнее в нашем ${B('antalyada-gayrimenkul-yatirimi-bolgeler-ve-stratejiler', 'гиде по инвестициям в Анталии по районам')}.</li>
<li><b>Правильная цена:</b> не переплачивать сверх рынка, опираясь на сравнимые сделки. Свежие данные — в нашем ${B('antalya-konut-piyasasi-kasim-2026', 'обзоре рынка Анталии за ноябрь 2026')}.</li>
<li><b>Юридическая проверка:</b> тапу, зонирование, разрешение на эксплуатацию (iskân) и обременения. Смотрите ${B('antalya-ev-alirken-dikkat-edilmesi-gerekenler', 'чек-лист юридической проверки')}.</li>
<li><b>Стратегия аренды:</b> заранее решите, кому, за сколько и как будет сдаваться объект. Подробнее в ${B('antalya-evimi-kiraya-vermek-istiyorum', 'гиде по сдаче жилья в аренду')}.</li>
</ol>
<p>Выбираете между участком и квартирой — читайте ${B('antalya-gayrimenkul-yatirimi-arsa-mi-ev-mi', 'участок или жильё')}. Планируете ипотеку — смотрите ${B('bddk-konut-kredisi-ikinci-ev-karari-kasim-2026', 'решение BDDK по ипотеке')}.</p>
<h2>Мнение ACC HOMES</h2>
<p>Кризис фондов и обвал драгоценных металлов напомнили, что сбережения измеряются не только доходностью, но и надёжностью, прозрачностью и спокойствием. Недвижимость не каждый год становится лидером по доходности. Но как актив, зарегистрированный на ваше имя, приносящий аренду и в долгосрочной перспективе дорожающий вместе с инфляцией, она остаётся спокойной гаванью. А её эффективность зависит от правильного района, правильной цены и грамотного анализа.</p>
<p>Чтобы подобрать районы Анталии под ваш бюджет и цели, с актуальными ценами сравнимых объектов и оценкой арендной доходности, ${WA('напишите нам в WhatsApp →')}</p>
<p class="srcs">Статья носит информационный характер и не является инвестиционной рекомендацией. ACC HOMES не консультирует по инструментам рынка капитала. Цифры приведены по источникам ниже (в основном на турецком языке).</p>
<h2>Источники</h2>
${SRC}`,
      faq: [
        ['Какой инструмент принёс больше всего в Турции в 2026 году?', 'По данным TÜİK за октябрь 2026 года, самую высокую реальную доходность за 12 месяцев дали государственные облигации (4,04% с учётом инфляции) и депозиты. Золото, доллар, евро и BIST 100 отстали от инфляции.'],
        ['Что надёжнее — золото или недвижимость?', 'Золото быстро превращается в деньги, но очень волатильно: в 2026 году грамм золота резко упал вскоре после январского пика. Недвижимость продаётся медленнее, но её цена не скачет, и она приносит аренду. Выбор зависит от горизонта инвестиций и потребности в ликвидности.'],
        ['Что такое кризис фондов в Турции?', '17 сентября 2026 года Совет по рынкам капитала приостановил фонды семи управляющих компаний и принял решение о ликвидации 131 фонда. В них было 455 758 частных инвесторов; уголовное расследование продолжается.'],
        ['Отстали ли цены на жильё в Турции от инфляции?', 'Да. По данным TCMB, за год до октября 2026 года цены выросли на 21,1%, что означает снижение на 6,6% в реальном выражении. С учётом валовой арендной доходности около 7–8% совокупная доходность близка к инфляции.'],
        ['Есть ли смысл инвестировать в недвижимость Анталии сейчас?', 'В октябре цены в Анталии выросли на 23,2% за год — выше среднего по Турции, а новое предложение замедляется. Арендная доходность сильно зависит от района, поэтому выбор района и объекта нужно делать на основе анализа сравнимых цен.'],
      ],
    },
  },
];
