// Blog 5. parti (18.11.2026): Kentsel Dönüşüm kategorisinin ilk yazısı. TR / EN (diğer diller EN'e düşer).
// Kategori 2 haftada bir yeni içerikle beslenecek. Mevzuat ve destek tutarlarını her yeni yazıda kontrol edin.
// Hesap örneğindeki maliyet ve satış değeri varsayımdır; metinde açıkça belirtilir.
export const POSTS5 = [
  {
    slug: 'antalya-kentsel-donusum-rehberi-muratpasa-konyaalti', cat: 'donusum', date: '2026-11-18', icon: '🏗️',
    tr: {
      title: 'Antalya Kentsel Dönüşüm Rehberi 2026: Muratpaşa ve Konyaaltı’nda Süreç, Hesap ve Firma Seçimi',
      seo: 'Antalya Kentsel Dönüşüm 2026: Süreç, Hesap ve Firmalar',
      desc: 'Antalya’da kentsel dönüşüm: salt çoğunluk kuralı, kat karşılığı oran hesabı, zemin ve deprem kontrolleri, firma seçimi; Muratpaşa ve Konyaaltı mahalleleri.',
      html: `
<p>Antalya’nın merkez mahallelerinde binaların önemli bir kısmı eski yönetmeliklere göre yapıldı. Bugün Bahçelievler’den Fener’e, Yeşilbahçe’den Konyaaltı Altınkum’a kadar pek çok apartmanda aynı sorular konuşuluyor: Binamız riskli mi? Kaç kişinin imzası yeter? Müteahhit bize kaç metrekare verir? Hangi firmaya güvenebiliriz?</p>
<p>Bu rehberde süreci mevzuat, mühendislik ve piyasa tarafıyla birlikte anlatıyoruz. Amacımız, dönüşüme karar vermeden önce maliklerin doğru soruları sormasını sağlamak.</p>
<h2>Kentsel dönüşüm ve yerinde dönüşüm: Antalya’da ne geçerli?</h2>
<p>Kentsel dönüşümün yasal dayanağı <b>6306 sayılı Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun</b>. Uygulamada iki model öne çıkıyor:</p>
<ul class="ticks">
<li><b>Alan bazlı dönüşüm:</b> Bir bölgenin “riskli alan” ilan edilip kamu eliyle toplu olarak dönüştürülmesi. Antalya’daki en büyük örnek, Antalya Büyükşehir Belediyesi’nin yürüttüğü Kepezaltı–Santral projesi.</li>
<li><b>Bina (parsel) bazlı dönüşüm:</b> Riskli yapı raporu alınan tek bir binanın ya da birkaç bitişik parselin malikler kararıyla yıkılıp yeniden yapılması. Muratpaşa ve Konyaaltı’nda gördüğümüz dönüşümlerin büyük çoğunluğu bu modelde.</li>
</ul>
<p>“Yerinde dönüşüm” kavramı sık karıştırılıyor. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı’nın hibe ve kredi veren resmî <b>Yerinde Dönüşüm</b> kampanyası, 6 Şubat depremlerinden etkilenen bölgeye yönelik. İstanbul’daki <b>Yarısı Bizden</b> kampanyası da yalnızca İstanbul’da geçerli. Antalya’da “yerinde dönüşüm” denildiğinde genellikle maliklerin kendi binalarını aynı parselde yeniden yaptırması kastediliyor. Bu model için de 6306 kapsamındaki kira yardımı, harç muafiyetleri ve faiz desteği gibi araçlar kullanılabiliyor.</p>
<h2>Antalya’da dönüşüm gündemindeki mahalleler</h2>
<p><b>Muratpaşa:</b> Bahçelievler, Varlık, Yıldız, Gençlik, Sinan, Yeşilbahçe, Şirinyalı, Fener, Demircikara, Zerdalilik, Deniz, Meltem, Soğuksu, Bayındır, Elmalı, Kışla, Etiler, Kızıltoprak, Memurevleri, Çağlayan, Güzeloba ve Balbey. Bu mahallelerin ortak özelliği merkezi konum, yaşı ilerlemiş apartman stoku ve yüksek arsa değeri. Muratpaşa Belediyesi’nin Balbey’de yürüttüğü kentsel yenileme projesi ilçedeki kamu öncülüğündeki uygulamaların örneklerinden. Bölgeyi daha yakından tanımak için <a href="{{URL:areas}}muratpasa/">Muratpaşa rehberimize</a>, <a href="{{URL:areas}}fener/">Fener</a> ve <a href="{{URL:areas}}sirinyali/">Şirinyalı</a> sayfalarımıza bakabilirsiniz.</p>
<p><b>Konyaaltı:</b> Altınkum, Arapsuyu, Liman, Uncalı, Gürsu, Hurma, Sarısu ve Toros. Denize yakın, talebi güçlü bu mahallelerde parsel bazlı dönüşüm ve kat karşılığı apartman projeleri yoğun. Ayrıntılar için <a href="{{URL:areas}}konyaalti/">Konyaaltı rehberimiz</a>.</p>
<p><b>Kepez:</b> Kepezaltı–Santral riskli alanı, Güneş Mahallesi ve Gülveren dönüşüm projeleri ilçedeki kamu eliyle yürütülen alan bazlı uygulamalar.</p>
<p>Bir mahallenin listede olması her binanın riskli olduğu anlamına gelmez. Karar, binaya özel riskli yapı tespitiyle verilir.</p>
<h2>Adım adım süreç</h2>
<ol>
<li><b>Riskli yapı tespiti:</b> Bakanlıkça lisanslandırılmış bir kuruluşa başvurulur. Kuruluş binadan karot (beton numunesi) alır, donatıyı tarar ve analiz yapar. Rapor idareye ve tapu müdürlüğüne bildirilir, tapuya şerh düşülür.</li>
<li><b>İtiraz süresi:</b> Tespitin tebliğinden itibaren 15 gün içinde itiraz edilebilir. İtiraz teknik heyetçe incelenir.</li>
<li><b>Malikler kararı:</b> 7471 sayılı Kanun’la (Resmî Gazete, 9 Kasım 2023) eski “üçte iki” şartı kaldırıldı. Karar artık <b>hisseleri oranında paydaşların salt çoğunluğu</b> ile alınıyor. İnternette hâlâ üçte iki yazan çok kaynak var; güncel kural salt çoğunluk.</li>
<li><b>Katılmayan malikler:</b> Karara katılmayanların payları, kanundaki usule göre değerleme yapılarak satışa konu olabilir. Bu aşama hukuki uyuşmazlıkların en sık yaşandığı yer; usule tam uymak gerekir.</li>
<li><b>Tahliye ve yıkım:</b> İdare, riskli yapının yıktırılması için malikler için 90 günü geçmemek üzere süre verir.</li>
<li><b>Proje, ruhsat ve inşaat:</b> Mimari ve statik proje, zemin etüdü, yapı ruhsatı, yapı denetim gözetiminde inşaat.</li>
<li><b>İskân ve tapu:</b> Kat mülkiyetine geçiş, yeni tapuların maliklere ve müteahhide paylaştırılması.</li>
</ol>
<h2>Devlet destekleri: Antalya’daki malik için gerçekçi tablo</h2>
<ul class="ticks">
<li><b>Kira yardımı:</b> Malike 18 aya kadar aylık ödeme yapılır. Riskli alanlarda bu süre 48 aya kadar uzayabilir. Kiracıya ve sınırlı ayni hak sahibine tek seferlik ödeme yapılır. Tutarı Bakanlık il gruplarına göre belirler; Antalya, Ankara, İzmir ve Bursa ile aynı grupta. Güncel tutarı başvuru sırasında Çevre, Şehircilik ve İklim Değişikliği İl Müdürlüğü’nden teyit edin.</li>
<li><b>Faiz desteği:</b> Bakanlıkla protokolü olan bankalardan kullanılan dönüşüm kredilerinde faizin bir kısmını devlet karşılar. Konut yapım ve edinme kredisinde yıllık 840 baz puan destek ve 1.250.000 TL anapara üst sınırı var. Bu üst sınır bugünkü inşaat maliyetlerinin yanında sınırlı kalıyor.</li>
<li><b>Harç ve vergi avantajları:</b> 6306 kapsamındaki işlemlerde tapu harcı, noter ücretleri, damga vergisi ve bazı belediye harçlarında muafiyet var. Yeni konut teslimlerinde KDV için özel düzenlemeler uygulanıyor; dairenizin durumunu mali müşavirinizle teyit edin.</li>
<li><b>Dünya Bankası kaynaklı düşük faizli kredi:</b> Bağımsız bölüm başına 3.000.000 TL’ye kadar. Bu kredi şu an İstanbul, İzmir, Manisa, Kahramanmaraş, Kocaeli, Sakarya ve Tekirdağ’da geçerli; Antalya kapsamda değil.</li>
</ul>
<h2>Kat karşılığı oran nasıl hesaplanır?</h2>
<p>Malikler en çok “müteahhit bize kaç metrekare verir?” sorusunu soruyor. Cevap pazarlıkla değil, dört rakamla başlar: <b>imar hakkı</b>, <b>inşaat maliyeti</b>, <b>yeni dairelerin satış değeri</b> ve <b>müteahhidin makul kârı</b>.</p>
<p>Basit formül şu: Müteahhidin payı = (toplam inşaat maliyeti + kâr) ÷ yeni binanın toplam satış değeri. Kalan oran maliklere düşer.</p>
<p><b>Örnek (varsayımsal rakamlarla):</b> 600 m² parsel, emsal 2,00. Mevcut binada 90 m²’lik 8 daire var.</p>
<ul class="ticks">
<li>İmar hakkı (emsal alanı): 600 × 2,00 = <b>1.200 m²</b>. Ortak alanlar ve emsal dışı alanlarla toplam inşaat yaklaşık <b>1.560 m²</b>.</li>
<li>İnşaat maliyeti varsayımı 35.000 TL/m² (proje, ruhsat, yapı denetim ve altyapı dahil): 1.560 × 35.000 = <b>54,6 milyon TL</b>. Müteahhit kârı %20 ile toplam ihtiyaç <b>65,5 milyon TL</b>.</li>
<li>Yeni daire satış değeri varsayımı 90.000 TL/m²: 1.200 × 90.000 = <b>108 milyon TL</b>.</li>
<li>Müteahhit payı ≈ 65,5 ÷ 108 = <b>%61</b>. Maliklere kalan ≈ %39, yani 1.200 m²’nin yaklaşık 472 m²’si. Kişi başı <b>yaklaşık 59 m²</b>.</li>
</ul>
<p>Bu örnek, merkez mahallelerde sık yaşanan durumu gösteriyor: Mevcut bina imar hakkını zaten büyük ölçüde kullanmışsa, kat karşılığı modelde malikler eskisinden küçük daireyle dönebilir.</p>
<p>Aynı binada <b>malikler inşaatı kendileri yaptırırsa</b> (anahtar teslim götürü bedel ya da yönetimli inşaat), her malik maliyetin 1/8’ini öder: yaklaşık 6,8 milyon TL. Karşılığında 1.200 m²’nin 1/8’i olan yaklaşık <b>150 m²</b>’lik daireyi alır. Hangi modelin uygun olduğu, maliklerin nakit gücüne, kredi imkânına ve risk iştahına bağlı.</p>
<p class="note">Bu rakamlar yalnızca yöntemi göstermek içindir. Gerçek maliyet ve satış değeri malzeme kalitesine, mahalleye, cepheye ve piyasa koşullarına göre değişir. Resmî referans olarak Bakanlığın 2026 yapı yaklaşık birim maliyeti, III-B sınıfı yapılar için 21.050 TL/m² (KDV hariç); bu değer mimarlık ve mühendislik hizmet bedelleri için kullanılır, piyasa maliyetiyle aynı değildir.</p>
<p>İlk iş belediyeden güncel <b>imar durumu</b> almak. Emsal, kat adedi, çekme mesafeleri ve otopark zorunluluğu oranı doğrudan belirler.</p>
<h2>Mühendislik gözüyle: Antalya’ya özel kontroller</h2>
<h3>Zemin ve jeoloji</h3>
<p>Antalya kent merkezinin büyük bölümü traverten platosu ve alüvyonlar üzerinde. Akademik çalışmalar, travertenlerin yer yer karstik boşluklar içerdiğini ve dayanımlarının noktadan noktaya değiştiğini gösteriyor. Muratpaşa’da yapılan bir çalışma, 2000 öncesinde foseptik çukurlarla zemine verilen atık suların travertenin özelliklerini zayıflattığını raporladı. Bu yüzden:</p>
<ul class="ticks">
<li>Zemin etüdünde sondaj sayısı ve derinliği yeterli olmalı. Boşluk şüphesinde jeofizik ölçümler istenmeli.</li>
<li>Gerekiyorsa enjeksiyon, mikro kazık veya radye temel gibi çözümlerin maliyeti teklifte ayrıca yer almalı.</li>
<li>Fener, Şirinyalı ve Muratpaşa sahil şeridindeki falez bandında kenar mesafesi ve şev stabilitesi ayrıca değerlendirilmeli. İnşaat Mühendisleri Odası Antalya Şubesi, falez üzerindeki binalar için ayrı risk analizi yapılması çağrısında bulundu.</li>
<li>Konyaaltı ve Lara’nın kıyı kesimlerinde alüvyon ve yeraltı suyu seviyesi, bodrum katlar ve su yalıtımı açısından önemli.</li>
</ul>
<h3>Taşıyıcı sistem ve malzeme</h3>
<ul class="ticks">
<li>Yeni bina 2018 Türkiye Bina Deprem Yönetmeliği’ne göre projelendirilmeli.</li>
<li>Beton sınıfı, donatı sınıfı ve beton örtü (pas payı) projede yazılı olmalı. Denize yakın binalarda tuzlu hava korozyonu hızlandırır; dayanıklılık önlemleri sözleşmeye girmeli.</li>
<li>Her döküm için beton numune sonuçları ve yapı denetim tutanakları maliklerle paylaşılmalı.</li>
</ul>
<h3>Mekanik tesisat ve konfor</h3>
<p>Kurucumuz Ali Caner Can’ın makine mühendisliği geçmişi, dönüşüm tekliflerinde en çok atlanan kalemleri görmemizi sağlıyor:</p>
<ul class="ticks">
<li><b>Asansör:</b> Marka, kapasite, hız ve bakım koşulları teknik şartnamede yazılmalı.</li>
<li><b>Isıtma ve soğutma:</b> Antalya ikliminde yalıtım, ısı pompası ya da VRF altyapısı ve güneş enerjisi uzun vadede aidatı ve faturayı belirler. Enerji Kimlik Belgesi sınıfı hedefi baştan konmalı.</li>
<li><b>Su ve yangın:</b> Su deposu ve hidrofor kapasitesi, bina yüksekliğine göre yangın merdiveni, basınçlandırma ve söndürme sistemleri.</li>
<li><b>Otopark:</b> Kapalı otopark mı, mekanik sistem mi? Otopark zorunluluğu karşılanamazsa ödenecek bedel kimin hesabına?</li>
</ul>
<h2>Müteahhit seçerken kontrol listesi</h2>
<ul class="ticks">
<li>Bakanlık yapı müteahhidi yetki belgesi ve belge grubu; projenin büyüklüğüyle uyumlu mu?</li>
<li>Tamamlanmış ve iskânı alınmış projeler. Eski müşterileriyle konuşun, binaları gezin.</li>
<li>Mali güç: Banka teminat mektubu verebiliyor mu? Aynı anda kaç şantiyesi var?</li>
<li>Sözleşme: Noterde düzenleme şeklinde yapılmalı. Teslim süresi, gecikme cezası, kira yardımı farkı, daire dağılım tablosu ve kura usulü açıkça yazılmalı.</li>
<li>Tapu devri: Müteahhide arsa payı devri inşaatın ilerleme seviyesine göre aşamalı yapılmalı.</li>
<li>Teknik şartname: Malzeme ve markalar tek tek listelenmeli; “birinci sınıf malzeme” gibi muğlak ifadeler yeterli değil.</li>
<li>Sigorta: İnşaat süresince tüm riskler sigortası ve üçüncü şahıs sorumluluk sigortası.</li>
</ul>
<h2>Antalya’da kentsel dönüşümde öne çıkan kurum ve firmalar</h2>
<p>Aşağıdaki liste, kamuya açık projeleri ve duyurularına göre derlenmiştir. Bir sıralama ya da tavsiye değildir; her firmayı yukarıdaki kontrol listesiyle değerlendirmenizi öneririz.</p>
<ol>
<li><b>Kentsel Dönüşüm Başkanlığı ve Antalya Çevre, Şehircilik ve İklim Değişikliği İl Müdürlüğü:</b> Riskli yapı süreçleri, kira yardımı ve destek başvuruları.</li>
<li><b>Antalya Büyükşehir Belediyesi:</b> Türkiye’nin en büyük kentsel dönüşüm projelerinden biri olarak duyurulan, yaklaşık 1,3 milyon m²’lik Kepezaltı–Santral projesi ve Kepez Güneş Mahallesi dönüşümü.</li>
<li><b>Muratpaşa Belediyesi:</b> Balbey Kentsel Yenileme Projesi.</li>
<li><b>Kendirciler İnşaat:</b> Konyaaltı’nda Port Selection (Liman, 2024) ve Palm Selection (2024) projelerini salt çoğunluk kararıyla başlattığını açıklıyor.</li>
<li><b>Masal Yapı:</b> Bayındır Mahallesi merkezli; Muratpaşa ve Konyaaltı’nda kentsel dönüşüm ve konut projeleri.</li>
<li><b>HDY İnşaat ve Pratikiz Mimarlık:</b> Muratpaşa Yıldız Mahallesi’nde iki bitişik parselin dönüşümü; tasarımı mal sahipleriyle birlikte yapılan bir proje.</li>
<li><b>Verado İnşaat:</b> Altıntaş ve Döşemealtı’nda kentsel dönüşüm, kat karşılığı ve arsa geliştirme.</li>
<li><b>Keleşoğlu İnşaat:</b> Konyaaltı’nda çok sayıda parsel bazlı apartman projesi.</li>
<li><b>Andeva Şirketler Grubu:</b> Muratpaşa, Kepez, Konyaaltı ve Döşemealtı’nda tadilat ve kentsel dönüşüm hizmetleri.</li>
</ol>
<h2>ACC HOMES dönüşümde ne yapar?</h2>
<p>Kentsel dönüşümde müteahhit binayı yapar; ama maliklerin çoğu süreci yönetecek, pazarlıkta yanında duracak ve sonrasında evini satacak ya da kiralayacak tarafsız bir aracı arar. ACC HOMES olarak Antalya’da kentsel dönüşüm ve yerinde dönüşümde <b>malik tarafında</b> çalışıyoruz:</p>
<ul class="ticks">
<li><b>Ön analiz:</b> İmar durumu, mevcut ve yeni alan hesabı, bölgedeki satış değerleriyle gerçekçi bir kat karşılığı aralığı.</li>
<li><b>Malikleri bir araya getirme:</b> Toplantı organizasyonu, bilgilendirme ve karar sürecinin düzenli yürütülmesi.</li>
<li><b>Teklif toplama ve karşılaştırma:</b> Birden fazla müteahhitten teklif alıp oran, süre, teminat ve teknik şartnameyi aynı tabloda karşılaştırma.</li>
<li><b>Hukuk ve mühendislik koordinasyonu:</b> Sözleşme için avukat, teknik şartname ve zemin etüdü için mühendis desteği.</li>
<li><b>İnşaat dönemi:</b> Maliklere ve kiracılara kiralık ev bulma.</li>
<li><b>Teslimden sonra:</b> Yeni dairenin satışı ya da kiralanması; yurt dışındaki alıcılara 10 dilde pazarlama.</li>
</ul>
<p>Yeşilbahçe’deki ACC Plaza’da yaklaşık 50 iş ortağımızla Muratpaşa ve Konyaaltı’nın her mahallesinde sahadayız. Binanız için ilk değerlendirmeyi birlikte yapalım: <a href="{{WA}}" target="_blank" rel="noopener">WhatsApp’tan yazın →</a> ya da <a href="{{URL:sell}}">mülkünüzü değerlendirelim</a>.</p>
<p>Bu kategoride her iki haftada bir yeni yazı yayımlıyoruz: mahalle bazlı dönüşüm notları, mevzuat değişiklikleri ve örnek hesaplar.</p>
<p class="note">Bu yazı genel bilgilendirme amaçlıdır; hukuki, mali veya teknik görüş yerine geçmez. Mevzuat ve destek tutarları değişebilir; işlem öncesinde güncel durumu ilgili kurumlardan teyit edin.</p>
<h2>Kaynaklar</h2>
<ol class="nsources">
<li><a href="https://hukukcularevi.com/kentsel-donusum-riskli-yapi-6306/" target="_blank" rel="noopener nofollow">6306 sayılı Kanun ve 7471 sayılı Kanunla gelen salt çoğunluk kuralı</a></li>
<li><a href="https://hukukcularevi.com/riskli-yapi-tespiti-itiraz-teknik-heyet-6306-3-madde/" target="_blank" rel="noopener nofollow">Riskli yapı tespiti ve 15 günlük itiraz süresi (11.09.2026)</a></li>
<li><a href="https://paradergi.com.tr/sektorler/2023/11/21/kentsel-donusumde-yeni-donem-neler-getiriyor" target="_blank" rel="noopener nofollow">Para Dergi, Kentsel dönüşümde yeni dönem (90 günlük yıkım süresi)</a></li>
<li><a href="https://kulacoglu.av.tr/kentsel-donusumde-devlet-destekleri/" target="_blank" rel="noopener nofollow">Kulaçoğlu Hukuk, Kentsel dönüşümde devlet destekleri (Ekim 2026)</a></li>
<li><a href="https://kulacoglu.av.tr/kentsel-donusumde-kira-yardimi/" target="_blank" rel="noopener nofollow">Kulaçoğlu Hukuk, Kentsel dönüşümde kira yardımı (Kasım 2026)</a></li>
<li><a href="https://www.alomaliye.com/2026/02/03/2026-yili-mimarlik-ve-muhendislik-hizmet-bedellerinin-hesabinda-kullanilacak-yapi-yaklasik-birim-maliyetleri/" target="_blank" rel="noopener nofollow">2026 Yılı Yapı Yaklaşık Birim Maliyetleri Tebliği (RG 03.02.2026)</a></li>
<li><a href="https://www.jmo.org.tr/resimler/ekler/01a78e74b40b0fa_ek.pdf" target="_blank" rel="noopener nofollow">Özçelik ve Şentürk, Antalya yerleşim alanındaki traverten temellerin jeolojik-jeoteknik incelenmesi (67. Türkiye Jeoloji Kurultayı)</a></li>
<li><a href="https://acikerisim.sdu.edu.tr/handle/123456789/91400" target="_blank" rel="noopener nofollow">Özçelik, Effect of wastewater on building foundation in karst travertine areas in Antalya</a></li>
<li><a href="https://hurriyetdailynews.com/building-on-cracked-cliff-deemed-safe-183193" target="_blank" rel="noopener nofollow">Hürriyet Daily News, Falez üzerindeki binalar ve İMO Antalya Şubesi</a></li>
<li><a href="https://cnnturk.com/turkiye/en-buyuk-kentsel-donusum-projesi-antalyada-yapilacak-636333" target="_blank" rel="noopener nofollow">CNN Türk, Kepez–Santral kentsel dönüşüm projesi</a></li>
<li><a href="https://www.sozcu.com.tr/gunes-mahallesinde-kentsel-donusum-icin-dugmeye-basildi-wp6850051" target="_blank" rel="noopener nofollow">Sözcü, Güneş Mahallesi kentsel dönüşüm projesi</a></li>
<li><a href="https://www.milliyet.com.tr/milliyet-tv/bir-mahallenin-34-santimle-imtihani-caddeye-cikabilmek-icin-kilo-almaya-korkuyorlar-video-7048224" target="_blank" rel="noopener nofollow">Milliyet, Balbey Kentsel Yenileme Projesi</a></li>
<li><a href="https://kendircilerinsaat.com/" target="_blank" rel="noopener nofollow">Kendirciler İnşaat</a></li>
<li><a href="https://masalyapi.com.tr/kentsel-donusum" target="_blank" rel="noopener nofollow">Masal Yapı</a></li>
<li><a href="https://www.pratikiz.com/portfolio-collections/konut/muratpas%CC%A7a-1508_23_24" target="_blank" rel="noopener nofollow">Pratikiz Mimarlık, Muratpaşa kentsel dönüşüm projesi (HDY İnşaat)</a></li>
<li><a href="https://verado.com.tr/tr/services/urban-renewal" target="_blank" rel="noopener nofollow">Verado İnşaat</a></li>
<li><a href="https://kelesogluinsaat.com.tr/" target="_blank" rel="noopener nofollow">Keleşoğlu İnşaat</a></li>
<li><a href="https://www.andeva.com/antalya-tadilat-ve-kentsel-donusum-hizmeti/" target="_blank" rel="noopener nofollow">Andeva Şirketler Grubu</a></li>
</ol>`,
      faq: [
        ['Kentsel dönüşüm için kaç malikin onayı gerekir?', '7471 sayılı Kanun’la (9 Kasım 2023) eski üçte iki şartı kaldırıldı. Riskli yapıda dönüşüm kararı artık hisseleri oranında paydaşların salt çoğunluğuyla alınıyor.'],
        ['Binamın riskli olup olmadığını nasıl öğrenirim?', 'Bakanlıkça lisanslandırılmış bir kuruluşa başvurursunuz. Kuruluş binadan beton numunesi alır, donatıyı inceler ve analiz yapar. Sonuç idareye ve tapuya bildirilir. Tebliğden itibaren 15 gün içinde itiraz hakkınız var.'],
        ['Antalya’da Yarısı Bizden veya Yerinde Dönüşüm desteği var mı?', 'Hayır. Yarısı Bizden yalnızca İstanbul’da, resmî Yerinde Dönüşüm kampanyası ise 6 Şubat depremlerinden etkilenen bölgede geçerli. Antalya’da kira yardımı, harç muafiyetleri ve bankalar üzerinden faiz desteği kullanılabiliyor.'],
        ['Kentsel dönüşümde kira yardımı ne kadar ve ne kadar süre verilir?', 'Malike 18 aya kadar aylık ödeme yapılır; riskli alanlarda bu süre 48 aya kadar uzayabilir. Kiracıya tek seferlik ödeme yapılır. Tutarı Bakanlık il gruplarına göre belirler; güncel rakamı İl Müdürlüğü’nden teyit edin.'],
        ['Müteahhit bize kaç metrekare verir?', 'Oran; imar hakkı, inşaat maliyeti, yeni dairelerin satış değeri ve müteahhit kârına göre hesaplanır. Mevcut bina imar hakkını büyük ölçüde kullanmışsa malikler kat karşılığı modelde daha küçük daireyle dönebilir. İlk iş belediyeden imar durumu almak.'],
        ['Kat karşılığı mı, yoksa binayı kendimiz mi yaptıralım?', 'Kat karşılığında nakit ödemezsiniz ama alanın bir kısmını müteahhide bırakırsınız. Kendiniz yaptırırsanız maliyeti paylaşırsınız ama yeni alanın tamamı maliklerde kalır. Seçim, maliklerin nakit gücüne ve kredi imkânına bağlı.'],
        ['Antalya’da zemin neden önemli?', 'Kent merkezinin büyük bölümü traverten ve alüvyon üzerinde. Travertenlerde karstik boşluklar olabilir, kıyıda yeraltı suyu yüksek olabilir. Yeterli sondajlı zemin etüdü ve gerekiyorsa zemin iyileştirmesi teklifte yer almalı.'],
        ['ACC HOMES kentsel dönüşümde hangi hizmeti veriyor?', 'Malik tarafında çalışıyoruz: ön analiz, malik toplantıları, birden fazla müteahhitten teklif toplayıp karşılaştırma, avukat ve mühendis koordinasyonu, inşaat döneminde kiralık ev ve teslimden sonra satış ya da kiralama.'],
      ],
    },
    en: {
      title: 'Urban Renewal in Antalya 2026: Process, Calculations and Choosing a Developer',
      seo: 'Urban Renewal in Antalya 2026: Process and Developers',
      desc: 'Urban renewal (kentsel dönüşüm) in Antalya: the simple-majority rule, how flat-for-land shares are calculated, ground and earthquake checks, and choosing a developer.',
      html: `
<p>Many buildings in Antalya’s central neighbourhoods were built under older regulations. From Bahçelievler to Fener and from Yeşilbahçe to Konyaaltı Altınkum, owners are asking the same questions: is our building risky, how many signatures do we need, how many square metres will the developer give us, and who can we trust? This guide covers the legal, engineering and market side together. It is especially useful for foreign owners of older flats in central Antalya.</p>
<h2>Which model applies in Antalya?</h2>
<p>Urban renewal is governed by <b>Law No. 6306</b> on the transformation of areas under disaster risk. In practice there are two models: <b>area-based renewal</b> led by the public sector (Antalya’s largest example is the Kepezaltı–Santral project run by Antalya Metropolitan Municipality) and <b>building- or plot-based renewal</b>, where owners of a building certified as risky decide to demolish and rebuild. Most renewal in Muratpaşa and Konyaaltı is plot-based.</p>
<p>The ministry’s grant-and-loan <b>“Yerinde Dönüşüm”</b> campaign applies to the region hit by the 6 February earthquakes, and the <b>“Yarısı Bizden”</b> campaign applies only in Istanbul. Neither covers Antalya. Owners in Antalya can still use rent assistance, fee exemptions and interest subsidies under Law 6306.</p>
<h2>Neighbourhoods on the agenda</h2>
<p><b>Muratpaşa:</b> Bahçelievler, Varlık, Yıldız, Gençlik, Sinan, Yeşilbahçe, Şirinyalı, Fener, Demircikara, Zerdalilik, Deniz, Meltem, Soğuksu, Bayındır, Elmalı, Kışla, Etiler, Kızıltoprak, Memurevleri, Çağlayan, Güzeloba and Balbey. <b>Konyaaltı:</b> Altınkum, Arapsuyu, Liman, Uncalı, Gürsu, Hurma, Sarısu and Toros. <b>Kepez:</b> the Kepezaltı–Santral risk area and the Güneş and Gülveren projects. Being on this list does not make a building risky; that is decided building by building. See our <a href="{{URL:areas}}muratpasa/">Muratpaşa</a> and <a href="{{URL:areas}}konyaalti/">Konyaaltı</a> guides.</p>
<h2>Step by step</h2>
<ol>
<li><b>Risk assessment</b> by a ministry-licensed firm (concrete cores, rebar scan, analysis). The result is registered on the title deed.</li>
<li><b>Objection</b> within 15 days of notification.</li>
<li><b>Owners’ decision:</b> since Law No. 7471 (Official Gazette, 9 November 2023) the old two-thirds rule has gone. A <b>simple majority of shares</b> is now enough.</li>
<li><b>Dissenting owners:</b> their shares can be sold after a valuation under the procedure in the law.</li>
<li><b>Demolition:</b> the authority gives owners up to 90 days.</li>
<li><b>Design, permit and construction</b> under building inspection, then <b>occupancy permit and new title deeds</b>.</li>
</ol>
<h2>How flat-for-land shares are calculated</h2>
<p>Developer’s share = (total construction cost + profit) ÷ total sales value of the new building. <b>Illustrative example with assumed figures:</b> a 600 m² plot with a floor-area ratio of 2.00 gives 1,200 m² of buildable area and roughly 1,560 m² of total construction. At an assumed 35,000 TL/m², cost is 54.6 million TL; with 20% profit the developer needs 65.5 million TL. At an assumed 90,000 TL/m² sales value, the new building is worth 108 million TL. The developer’s share is about 61%, leaving owners about 472 m², or about 59 m² each for eight former 90 m² flats. If the owners fund construction themselves instead, each pays about 6.8 million TL and receives about 150 m². These figures only illustrate the method; real costs and prices vary.</p>
<h2>Antalya-specific engineering checks</h2>
<ul class="ticks">
<li><b>Ground:</b> much of central Antalya sits on travertine and alluvium. Travertine can contain karst voids, so site investigation needs enough boreholes and, where needed, geophysical surveys and ground improvement.</li>
<li><b>Cliff band:</b> buildings on the cliffs of Fener, Şirinyalı and central Muratpaşa need separate slope and edge-distance assessment.</li>
<li><b>Structure:</b> design to the 2018 Turkish Building Earthquake Code, with concrete class, rebar class and cover specified. Near the sea, salty air speeds up corrosion.</li>
<li><b>Mechanical systems:</b> lift specification, insulation, heat pumps and solar, water tanks, fire safety and parking. Our founder Ali Caner Can is a mechanical engineer, which helps us read these specifications line by line.</li>
</ul>
<h2>Developer checklist</h2>
<ul class="ticks">
<li>Ministry contractor licence and a licence class that matches the project size.</li>
<li>Completed projects with occupancy permits; speak to past clients.</li>
<li>Financial strength, including a bank guarantee.</li>
<li>A notarised contract with delivery date, delay penalties, flat allocation and lottery rules.</li>
<li>Staged transfer of land shares to the developer as construction progresses.</li>
<li>A written specification listing materials and brands, plus construction all-risk insurance.</li>
</ul>
<h2>Key public bodies and developers in Antalya</h2>
<p>Compiled from public projects and announcements; not a ranking or recommendation. Kentsel Dönüşüm Başkanlığı and the provincial directorate of the ministry; Antalya Metropolitan Municipality (Kepezaltı–Santral, Güneş); Muratpaşa Municipality (Balbey); Kendirciler İnşaat (Konyaaltı); Masal Yapı (Muratpaşa and Konyaaltı); HDY İnşaat with Pratikiz Mimarlık (Yıldız, Muratpaşa); Verado İnşaat (Altıntaş and Döşemealtı); Keleşoğlu İnşaat (Konyaaltı); Andeva Şirketler Grubu.</p>
<h2>How ACC HOMES helps</h2>
<p>We work on the owners’ side: preliminary analysis of zoning, areas and values; organising owners’ meetings; collecting and comparing offers from several developers; coordinating lawyers and engineers; finding rental homes during construction; and selling or letting the new flat afterwards, with marketing in 10 languages. Around 50 partners work with us from ACC Plaza in Yeşilbahçe. <a href="{{WA}}" target="_blank" rel="noopener">Message us on WhatsApp →</a></p>
<p class="note">This article is general information and is not legal, tax or technical advice. Rules and support amounts can change; check the current position with the relevant authorities.</p>`,
      faq: [
        ['How many owners must agree to urban renewal in Turkey?', 'Since Law No. 7471 (9 November 2023), a simple majority of shares is enough for a building certified as risky. The old two-thirds rule no longer applies.'],
        ['Does Antalya have the Yarısı Bizden or Yerinde Dönüşüm support?', 'No. Yarısı Bizden applies only in Istanbul and the official Yerinde Dönüşüm campaign applies to the 6 February earthquake region. Antalya owners can use rent assistance, fee exemptions and interest subsidies.'],
        ['How is the developer’s share calculated?', 'Developer’s share = (construction cost + profit) ÷ total sales value of the new building. It depends mainly on zoning rights, construction cost and local sales prices.'],
        ['Can foreign owners take part in urban renewal in Antalya?', 'Yes. Owners vote by their shares regardless of nationality, and foreign owners can authorise a representative by power of attorney.'],
      ],
    },
  },
];
