// Blog 12 (25.11.2026): Antalya'da evinizi kiraya vermek — ev sahibi rehberi (TR/EN/RU). Kaynak taslak: claude/blog-6-antalya-evimi-kiraya-vermek.md
// Caner onayı 25.11.2026: ev sahibinden kiralama komisyonu alınmaz; fotoğraf/ilan masrafı bizden; mülk yönetimi ayrıca teklifle; kısa dönem yönetimi yok; kira garantisi yok.
// Kira rakamları ilan fiyatıdır: Evdeğer (Ekim 2026, Antalya Hürses 31.10.2026), Emlakjet (24.11.2026). Kasım 2026 kira artış tavanı %31,23. Google 470+ yorum.
const A = (s, t) => `<a href="{{URL:areas}}${s}/">${t}</a>`;
const AR = (s, t) => `<a href="/en/area-guides/${s}/">${t}</a>`; // RU bölge sayfası yok
const B = (s, t) => `<a href="{{URL:blog}}${s}/">${t}</a>`;
const WA = (t) => `<a href="{{WA}}" target="_blank" rel="noopener">${t}</a>`;

export const POSTS12 = [
  {
    slug: 'antalya-evimi-kiraya-vermek-istiyorum', cat: 'rehber', date: '2026-11-25', icon: '🔑',
    tr: {
      title: 'Antalya’da Evinizi Kiraya Vermek İstiyorsanız: Ev Sahibi Rehberi',
      seo: 'Antalya’da Evimi Kiraya Vermek İstiyorum: Ev Sahibi Rehberi',
      desc: 'Antalya’da evinizi veya villanızı kiraya mı vereceksiniz? Doğru kira, Findeks ve kefilli kiracı, fotoğraflı teslim, vekaletle kiralama, mülk yönetimi.',
      html: `
<p>“Evimi kiraya vermek istiyorum ama kime güveneceğim?” Antalya’da ev sahiplerinden en sık duyduğumuz soru bu. Kira geliri önemli; ama daha da önemlisi evinizin doğru kişiye, doğru bedelle ve sağlam bir sözleşmeyle teslim edilmesi. Bu rehberde Antalya’da dairenizi ya da villanızı kiraya verirken izlemeniz gereken adımları, kiracı seçerken nelere bakılması gerektiğini ve ACC HOMES olarak bu süreci sizin yerinize nasıl yönettiğimizi anlattık.</p>
<p><b>Önce en çok sorulan soru:</b> ACC HOMES’ta kiralama komisyonu ev sahibinden alınmaz. Evinizi kiraya verirken bize komisyon ödemezsiniz.</p>
<h2>1. Kirayı doğru belirleyin</h2>
<p>Kirayı yüksek tutan ev boş bekler; düşük tutan ev sahibi ise yıllarca kayıp yaşar. Çünkü konut kiralarında yıllık artış, son 12 aylık TÜFE ortalamasıyla sınırlıdır. Örneğin Kasım 2026’da yenilenen sözleşmeler için yasal tavan <b>%31,23</b> oldu (güncel oran için ${B('kira-artis-orani', 'kira artış oranı sayfamıza')} bakabilirsiniz). Başlangıç kirasını yanlış belirlerseniz, bu farkı sonraki yıllarda kapatmanız zorlaşır.</p>
<p>Doğru kira için:</p>
<ul class="ticks">
<li><b>Emsal kiralar:</b> Aynı mahallede, benzer büyüklük, kat ve donanımdaki dairelerin güncel kiraları karşılaştırılır.</li>
<li><b>Evin özellikleri:</b> Site içi mi, havuz, otopark, asansör, eşyalı mı, denize ve okula yakınlık kirayı doğrudan etkiler.</li>
<li><b>Kiracı profili:</b> Aile, öğrenci, beyaz yaka, emekli ya da yabancı kiracı; her birinin beklentisi ve ödeyebileceği kira farklıdır.</li>
</ul>
<p>Fikir vermesi için: Ekim 2026’da ilan edilen kiralık konutların ortalaması Konyaaltı’nda yaklaşık 43.000 TL, Muratpaşa’da 35.000 TL, Kepez’de 25.000 TL; Antalya genelinde ise 27.000 TL civarındaydı. Bunlar ilan fiyatlarıdır; gerçek kira, evinizin özelliklerine ve pazarlığa göre değişir. Evinize özel kira analizini ücretsiz hazırlıyoruz.</p>
<h2>2. Evinizi kiraya hazırlayın</h2>
<p>Kiracı kararını çoğu zaman ilk fotoğraflarda verir. Küçük dokunuşlar kirayı da kiralama süresini de değiştirir:</p>
<ul class="ticks">
<li>Boya, küçük tamiratlar, temiz ve sade bir ev</li>
<li>Kombi, klima ve beyaz eşyaların bakımı</li>
<li>Tapu, DASK poliçesi ve site aidat bilgilerinin hazır olması</li>
<li>Eşyalı veriyorsanız eşya listesinin baştan çıkarılması</li>
</ul>
<p>Ardından en önemli adım: <b>profesyonel sunum.</b> ACC HOMES’ta kendi çekim ekibimiz ve sabit tasarımcılarımız çalışıyor. Evinizin profesyonel fotoğrafı, gerekirse drone ve video çekimi ile ilan tasarımları ekibimiz tarafından hazırlanıyor; bu masraflar sizden çıkmıyor.</p>
<h2>3. Doğru kiracıyı seçin: ön eleme</h2>
<p>Kiraya vermenin en kritik adımı, kiracı seçimidir. Ev sahibinin istediği aslında basit: kirası düzenli ödenen, eve iyi bakan ve sözleşmeye uyan bir kiracı. Bunun için kiracı adaylarını size getirmeden önce eliyoruz:</p>
<ul class="ticks">
<li><b>Gelir ve iş bilgisi:</b> Kiranın aday için sürdürülebilir olup olmadığına bakılır.</li>
<li><b>Findeks raporu:</b> İsterseniz kiracı adayından, kendi onayıyla alacağı Findeks kredi notu raporunu talep ediyoruz. Ödeme alışkanlığı hakkında net bir fikir verir.</li>
<li><b>Kefil:</b> Gerekli görüldüğünde müteselsil kefil alınır. Kefil evliyse eşinin yazılı onayının da alınması gerekir; bu ayrıntıyı biz takip ederiz.</li>
<li><b>Referans:</b> Önceki ev sahibi ya da iş yeri referansı istenebilir.</li>
<li><b>Birebir görüşme:</b> Kaç kişi oturacağı, evcil hayvan ve kullanım amacı baştan netleşir.</li>
</ul>
<p>Son kararı her zaman siz verirsiniz; biz size karşılaştırmalı ve eksiksiz bilgi sunarız.</p>
<h2>4. Sağlam bir sözleşme ve fotoğraflı teslim</h2>
<p>Sorunların çoğu sözleşmede ve teslimde yapılan eksikliklerden doğar. Bu yüzden:</p>
<ul class="ticks">
<li><b>Yazılı kira sözleşmesi:</b> Kira bedeli, ödeme günü, artış koşulu, aidat ve fatura sorumluluğu, evcil hayvan, alt kiralama ve tahliye koşulları açıkça yazılır.</li>
<li><b>Depozito:</b> Konut kiralarında depozito en fazla 3 aylık kira bedeli kadar olabilir. Tutar ve iade koşulları sözleşmede belirtilir.</li>
<li><b>Fotoğraflı demirbaş listesi:</b> Evdeki eşya ve donanım, oda oda fotoğraflanarak listelenir.</li>
<li><b>Anahtar teslim tutanağı:</b> Evin teslim anındaki durumu, sayaç değerleri ve teslim edilen anahtar sayısı tutanakla kayıt altına alınır. Çıkışta ev aynı tutanakla teslim alınır; depozito tartışması büyük ölçüde ortadan kalkar.</li>
<li><b>Abonelikler:</b> Elektrik, su ve doğalgaz aboneliklerinin kiracı adına geçmesi takip edilir.</li>
</ul>
<h2>5. Antalya’da değilseniz: vekaletle kiraya verme</h2>
<p>Yurt dışında ya da başka bir şehirde yaşıyorsanız Antalya’ya gelmenize gerek yok. Noterden vereceğiniz kiraya verme yetkili bir vekaletname ile kiracı bulma, sözleşme, teslim ve tahsilat süreçlerini sizin adınıza yürütebiliriz. Yurt dışındaysanız vekaletnameyi bulunduğunuz ülkedeki Türk konsolosluğundan verebilirsiniz. Tüm süreç boyunca fotoğraf, video ve yazılı raporla bilgilendirilirsiniz.</p>
<h2>6. Hiçbir şeyle uğraşmak istemiyorsanız: kiralık mülk yönetimi</h2>
<p>Kiracı bulmak işin yalnızca başlangıcı. Kiranın takibi, arızalar, aidat ve faturalar, yıllık artış ve sözleşme yenileme zaman ister. ACC HOMES’un <b>kiralık mülk yönetimi</b> hizmetiyle bunların hepsi bizde:</p>
<ul class="ticks">
<li>Kira tahsilatının takibi ve aylık raporlama</li>
<li>Arıza, bakım ve onarımların koordinasyonu</li>
<li>Aidat, fatura ve DASK takibi</li>
<li>Yıllık kira artışının yasal sınırlar içinde hesaplanması ve sözleşme yenileme</li>
<li>Kiracı ile tüm iletişim</li>
<li>Sorun çıktığında süreç desteği ve gerekirse avukat yönlendirmesi</li>
<li>Kiracı çıkışında evin tutanakla teslim alınması ve yeni kiracının bulunması</li>
</ul>
<p>Kiracı bulma hizmetimiz için ev sahibinden komisyon alınmaz. Mülk yönetimini ayrıca isterseniz kapsam evinize ve ihtiyacınıza göre belirlenir. <b>Mülk yönetimi için bizden teklif alın:</b> ${WA('WhatsApp’tan teklif isteyin →')}</p>
<p><i>Not: Kısa dönem (günlük, haftalık) kiralama yönetimi yapmıyoruz; hizmetimiz uzun dönem kiralama içindir.</i></p>
<h2>7. Antalya’da kiralık talebinin yoğun olduğu bölgeler</h2>
<p>Antalya’da kiralık konut piyasası en çok merkez ilçelerde ve yazlık bölgelerde yoğunlaşıyor. Kasım 2026’da bir ilan portalındaki kiralık daire ilan sayılarına göre sıralama şöyle: Alanya, Kepez, Muratpaşa, Konyaaltı, Manavgat, Aksu, Döşemealtı ve Serik. Mahalle bazında ise Aksu Altıntaş, Muratpaşa Güzeloba ve Konyaaltı Hurma öne çıkıyor.</p>
<p>Bizim gözlemimiz de buna paralel: bugün ACC HOMES’taki kiralık portföyün büyük bölümü Aksu Altıntaş, Muratpaşa (Güzeloba, Çağlayan, Fener, Ermenek, Meydankavağı), Konyaaltı (Hurma) ve Döşemealtı’nda.</p>
<table><thead><tr><th>Bölge</th><th>Kiracı profili ve öne çıkanlar</th></tr></thead><tbody>
<tr><td>${A('aksu-altintas', 'Aksu Altıntaş')}</td><td>Yeni siteler, havuzlu ve otoparklı daireler; havalimanına yakınlık nedeniyle havacılık çalışanları, genç aileler ve yabancı kiracılar</td></tr>
<tr><td>${A('lara-guzeloba', 'Lara ve Güzeloba')}, Çağlayan, ${A('fener', 'Fener')}</td><td>Okullara, hastanelere ve sahile yakınlık; aileler ve beyaz yaka kiracılar. Lara’da villa talebi de yüksek</td></tr>
<tr><td>Muratpaşa Ermenek, Meydankavağı, Yeşilbahçe</td><td>Şehir merkezine ve iş akslarına yakınlık; çalışanlar ve küçük aileler</td></tr>
<tr><td>${A('konyaalti', 'Konyaaltı')} (Hurma, Liman, Sarısu)</td><td>Deniz ve doğa bir arada; Antalya’nın en yüksek metrekare kiraları, yerli ve yabancı aileler</td></tr>
<tr><td>Kepez</td><td>İlan sayısı yüksek, kiralar görece uygun; öğrenciler ve geniş aileler</td></tr>
<tr><td>${A('dosemealti', 'Döşemealtı')}</td><td>Bahçeli ev ve villa; sakin yaşam arayan aileler, okul çevresi</td></tr>
<tr><td>${A('belek', 'Belek')}, ${A('kadriye', 'Kadriye')}, ${A('kemer', 'Kemer')}, Alanya</td><td>Villa ve yazlık; yabancı kiracılar ve uzun dönem yaşamak isteyen emekliler</td></tr>
</tbody></table>
<p>Eviniz hangi bölgede olursa olsun, bölgenizdeki güncel kira seviyesini ve kiracı talebini görüşmemizde birlikte değerlendiriyoruz. Mevcut kiralık ilanlarımızı görmek için <a href="{{URL:list}}">ilanlar sayfamıza</a> bakabilirsiniz.</p>
<h2>Neden ACC HOMES?</h2>
<p>Evinizi kiraya verirken en önemli soru, kime güveneceğiniz. ACC HOMES, kurucu ve broker Ali Caner Can liderliğinde, yaklaşık 50 kişilik ekibiyle Antalya’da ACC Plaza’da hizmet veriyor.</p>
<ul class="ticks">
<li><b>Ev sahibinden komisyon alınmaz:</b> Evinizi kiraya verirken bize komisyon ödemezsiniz. Fotoğraf, tasarım ve ilan masrafları da bizden.</li>
<li><b>Hazır kiracı talebi:</b> CRM sistemimizde kiralık ev arayan yerli ve yabancı müşteriler kayıtlı. Özellikle kapalı sitelerde kiralık arayanlardan sürekli talep alıyoruz; uygun bir kiracı, eviniz ilana çıkmadan önce bile bulunabiliyor.</li>
<li><b>Pazarlama gücü:</b> Eviniz kendi web sitemizde 12 dilde, Türkiye’nin önde gelen ilan portallarında ve uluslararası portallarda yayımlanıyor.</li>
<li><b>50 kişilik paylaşım ağı:</b> İlanınız yalnızca bir hesapta değil, yaklaşık 50 iş ortağımızın ve ACC HOMES’un Instagram ve sosyal medya hesaplarında aynı anda paylaşılıyor; böylece çok daha geniş bir kiracı kitlesine kısa sürede ulaşıyor.</li>
<li><b>12 dilde hizmet:</b> Türkçe, İngilizce, Rusça ve diğer dillerde kiracılarla doğrudan iletişim; yabancı kiracı sürecinde tercüme ve sözleşme desteği.</li>
<li><b>Profesyonel fotoğraf ve tasarım:</b> Kendi çekim ekibimiz ve tasarımcılarımız evinizi en iyi şekilde sunuyor.</li>
<li><b>Sistemli takip:</b> Tüm talepler, gösterimler ve görüşmeler kendi ACC HOMES Panel’imizde takip edilir; hiçbir aday ve hiçbir geri dönüş kaybolmaz.</li>
<li><b>Güven:</b> Google’da 470’i aşkın yorum ve 4,9 puan; yüzlerce ev sahibi ve kiracıyla tamamlanmış işlem.</li>
</ul>
<p>Evinizi satmayı da düşünüyorsanız ${B('antalya-villanizi-satmak-rehberi', 'satış rehberimize')} bakabilirsiniz.</p>
<h2>Evinizi birlikte kiraya verelim</h2>
<p>Antalya’da dairenizi ya da villanızı kiraya vermeyi düşünüyorsanız, iş ortağımız evinizi yerinde görüp ücretsiz kira analizi hazırlasın. Ev sahibi olarak komisyon ödemezsiniz. Hiçbir şeyle uğraşmak istemiyorsanız kiralık mülk yönetimi için teklifimizi alın: ${WA('WhatsApp’tan yazın →')}</p>`,
      faq: [
        ['Evimi kiraya vermek için komisyon ödüyor muyum?', 'Hayır. ACC HOMES’ta kiralama komisyonu ev sahibinden alınmaz; ev sahibi komisyon ödemez. Kira analizi, fotoğraf çekimi ve ilan masrafları da sizden çıkmaz. Kiracı bulunduktan sonra kiralık mülk yönetimi hizmetini ayrıca isterseniz, onun için size özel bir teklif hazırlarız.'],
        ['Kiracıdan Findeks raporu isteyebilir miyim?', 'Evet. Findeks raporunu kiracı adayı kendi onayıyla alır ve size ya da bize iletir. Raporu istemek, adayın ödeme alışkanlığını görmenin en pratik yoludur.'],
        ['Depozito en fazla ne kadar alınabilir?', 'Konut kiralarında depozito en fazla üç aylık kira bedeli kadar olabilir.'],
        ['Kira artışını ne kadar yapabilirim?', 'Konut kiralarında yıllık artış, bir önceki 12 aylık TÜFE ortalamasını geçemez. Kasım 2026 için bu oran %31,23 oldu. Her yıl doğru oranı hesaplayıp size ve kiracınıza bildiriyoruz.'],
        ['Yurt dışındayım, evimi kiraya verebilir miyim?', 'Evet. Kiraya verme yetkili vekaletname ile tüm süreci sizin adınıza yürütürüz; vekaletnameyi bulunduğunuz ülkedeki Türk konsolosluğundan verebilirsiniz.'],
        ['Villamı da kiraya veriyor musunuz?', 'Evet. Konyaaltı, Lara, Döşemealtı, Belek, Kadriye ve Kemer başta olmak üzere villa kiralamada yerli ve yabancı kiracı ağımızla çalışıyoruz.'],
        ['Kira garantisi veriyor musunuz?', 'Hayır. Kimse dürüstçe kira garantisi veremez. Bizim verdiğimiz; kiracının dikkatle seçilmesi, sağlam bir sözleşme, fotoğraflı teslim ve düzenli takiptir.'],
      ],
    },
    en: {
      title: 'Renting Out Your Home in Antalya: A Guide for Property Owners',
      seo: 'Rent Out Your Apartment or Villa in Antalya: Owner’s Guide',
      desc: 'Renting out your apartment or villa in Antalya? Right rent, vetted tenants, photo-documented handover, renting by power of attorney and property management.',
      html: `
<p>“I want to rent out my home in Antalya, but who can I trust?” This is the question we hear most from property owners. Rental income matters, but what matters more is that your home goes to the right tenant, at the right rent, under a solid contract. This guide covers the steps to follow when renting out your apartment or villa in Antalya, what to check when choosing a tenant, and how ACC HOMES can manage the whole process for you.</p>
<p><b>First, the question we are asked most:</b> at ACC HOMES, owners pay no letting commission. You pay us nothing to find you a tenant.</p>
<h2>1. Set the right rent</h2>
<p>A home priced too high sits empty; a home priced too low costs the owner for years. That is because annual increases on residential leases in Turkey are capped at the 12-month average CPI. For leases renewed in November 2026, for example, the legal cap was <b>31.23%</b>. If the starting rent is wrong, the gap is hard to close later.</p>
<p>To set the right rent we look at:</p>
<ul class="ticks">
<li><b>Comparable rents:</b> current rents for similar size, floor and specification in the same neighbourhood.</li>
<li><b>The property itself:</b> whether it is in a gated complex, pool, parking, lift, furnished or not, distance to the sea and schools.</li>
<li><b>Tenant profile:</b> families, students, professionals, retirees and international tenants all have different needs and budgets.</li>
</ul>
<p>As a guide: in October 2026, average advertised rents were about TRY 43,000 in Konyaaltı, TRY 35,000 in Muratpaşa and TRY 25,000 in Kepez, with an Antalya-wide average of around TRY 27,000. These are asking rents; the actual rent depends on your home and on negotiation. We prepare a free rent analysis for your property.</p>
<h2>2. Prepare your home</h2>
<p>Tenants usually decide from the first photos. Small touches change both the rent and how quickly the home is let:</p>
<ul class="ticks">
<li>Fresh paint, small repairs, a clean and uncluttered home</li>
<li>Servicing of the boiler, air conditioning and appliances</li>
<li>Title deed, compulsory earthquake insurance (DASK) and service charge details ready</li>
<li>An inventory prepared in advance if you let it furnished</li>
</ul>
<p>Then the most important step: <b>professional presentation.</b> ACC HOMES has its own photo team and in-house designers. Professional photos, drone and video where needed, and listing designs are all produced by our team, at no cost to you.</p>
<h2>3. Choose the right tenant: screening</h2>
<p>Choosing the tenant is the most important step. What an owner wants is simple: a tenant who pays on time, looks after the home and respects the contract. That is why we screen applicants before introducing them to you:</p>
<ul class="ticks">
<li><b>Income and employment:</b> we check that the rent is sustainable for the applicant.</li>
<li><b>Credit report:</b> if you wish, we ask the applicant for a Findeks credit report, which they obtain with their own consent. It gives a clear picture of their payment history.</li>
<li><b>Guarantor:</b> where needed, a joint guarantor is added. If the guarantor is married, their spouse’s written consent is also required; we take care of this detail.</li>
<li><b>References:</b> from a previous landlord or employer.</li>
<li><b>Face-to-face meeting:</b> number of occupants, pets and intended use are clarified from the start.</li>
</ul>
<p>The final decision is always yours; we give you complete, comparable information.</p>
<h2>4. A solid contract and photo-documented handover</h2>
<p>Most problems come from gaps in the contract or the handover. So:</p>
<ul class="ticks">
<li><b>Written lease:</b> rent, payment date, increase terms, service charges and bills, pets, subletting and move-out terms are set out clearly.</li>
<li><b>Deposit:</b> on residential leases the deposit can be at most three months’ rent. The amount and return terms are written into the contract.</li>
<li><b>Photo inventory:</b> furniture and fittings are photographed and listed room by room.</li>
<li><b>Key handover report:</b> the condition of the home, meter readings and number of keys are recorded at handover. At move-out the home is checked against the same report, which largely removes deposit disputes.</li>
<li><b>Utilities:</b> we follow up the transfer of electricity, water and gas accounts to the tenant.</li>
</ul>
<h2>5. Not in Antalya? Renting by power of attorney</h2>
<p>If you live abroad or in another city, you do not need to come to Antalya. With a power of attorney authorising the letting, issued by a notary, we can find the tenant, sign the contract, hand over the home and follow up payments on your behalf. If you are abroad, you can issue the power of attorney at the Turkish consulate in your country. You are kept informed throughout with photos, video and written reports.</p>
<h2>6. Prefer a hands-off approach? Rental property management</h2>
<p>Finding a tenant is only the beginning. Rent collection, repairs, service charges and bills, annual increases and renewals all take time. With ACC HOMES <b>rental property management</b>, we handle it all:</p>
<ul class="ticks">
<li>Rent collection follow-up and monthly reporting</li>
<li>Coordination of repairs and maintenance</li>
<li>Service charges, utility bills and DASK follow-up</li>
<li>Calculating the annual increase within the legal cap and renewing the lease</li>
<li>All communication with the tenant</li>
<li>Process support if problems arise, with referral to a lawyer when needed</li>
<li>Checking the home back in at move-out and finding the next tenant</li>
</ul>
<p>Owners pay no commission for our letting service. If you would also like property management, the scope is tailored to your home and needs. <b>Ask us for a property management quote:</b> ${WA('message us on WhatsApp →')}</p>
<p><i>Note: we do not manage short-term (daily or weekly) holiday lets; our service is for long-term rentals.</i></p>
<h2>7. Where rental demand is strongest in Antalya</h2>
<p>Antalya’s rental market is concentrated in the central districts and the holiday areas. By the number of rental apartment listings on a major portal in November 2026, the order is: Alanya, Kepez, Muratpaşa, Konyaaltı, Manavgat, Aksu, Döşemealtı and Serik. At neighbourhood level, Altıntaş (Aksu), Güzeloba (Muratpaşa) and Hurma (Konyaaltı) stand out.</p>
<p>Our own portfolio reflects this: most of the rental homes we handle today are in Altıntaş, Muratpaşa (Güzeloba, Çağlayan, Fener, Ermenek, Meydankavağı), Konyaaltı (Hurma) and Döşemealtı.</p>
<table><thead><tr><th>Area</th><th>Tenant profile and highlights</th></tr></thead><tbody>
<tr><td>${A('aksu-altintas', 'Altıntaş (Aksu)')}</td><td>New complexes with pools and parking; close to the airport, so popular with aviation staff, young families and international tenants</td></tr>
<tr><td>${A('lara-guzeloba', 'Lara and Güzeloba')}, Çağlayan, ${A('fener', 'Fener')}</td><td>Close to schools, hospitals and the coast; families and professionals. Strong demand for villas in Lara too</td></tr>
<tr><td>Ermenek, Meydankavağı, Yeşilbahçe (Muratpaşa)</td><td>Close to the city centre and business corridors; working people and small families</td></tr>
<tr><td>${A('konyaalti', 'Konyaaltı')} (Hurma, Liman, Sarısu)</td><td>Sea and nature together; Antalya’s highest rents per m², local and international families</td></tr>
<tr><td>Kepez</td><td>Many listings, relatively affordable rents; students and larger families</td></tr>
<tr><td>${A('dosemealti', 'Döşemealtı')}</td><td>Homes with gardens and villas; families looking for a quiet life, school catchments</td></tr>
<tr><td>${A('belek', 'Belek')}, ${A('kadriye', 'Kadriye')}, ${A('kemer', 'Kemer')}, Alanya</td><td>Villas and holiday homes; international tenants and retirees who want to live long term</td></tr>
</tbody></table>
<p>Wherever your home is, we review current rent levels and tenant demand in your area together. See our current rentals on the <a href="{{URL:list}}">listings page</a>.</p>
<h2>Why ACC HOMES?</h2>
<p>When you rent out your home, the key question is who you can trust. ACC HOMES is led by founder and broker Ali Caner Can and works from ACC Plaza in Antalya with a team of about 50 people.</p>
<ul class="ticks">
<li><b>No commission for owners:</b> you pay us no commission to let your home. Photography, design and listing costs are on us too.</li>
<li><b>Ready tenant demand:</b> local and international clients looking to rent are registered in our CRM. We receive steady demand especially for homes in gated complexes, so the right tenant can sometimes be found before your home is even advertised.</li>
<li><b>Marketing reach:</b> your home is published on our own website in 12 languages, on Turkey’s leading property portals and on international portals.</li>
<li><b>A 50-person sharing network:</b> your listing is shared at the same time by about 50 ACC HOMES partners and on ACC HOMES Instagram and social media accounts, reaching a far wider pool of tenants quickly.</li>
<li><b>Service in 12 languages:</b> direct communication with tenants in Turkish, English, Russian and other languages, with translation and contract support for international tenants.</li>
<li><b>Professional photography and design:</b> our own photo team and designers present your home at its best.</li>
<li><b>Systematic follow-up:</b> every enquiry, viewing and conversation is tracked in our own ACC HOMES Panel, so no applicant and no reply is lost.</li>
<li><b>Trust:</b> more than 470 Google reviews with a 4.9 rating, and hundreds of completed deals with owners and tenants.</li>
</ul>
<p>Thinking of selling instead? See our ${B('antalya-villanizi-satmak-rehberi', 'guide to selling your villa')}.</p>
<h2>Let’s rent out your home together</h2>
<p>If you are thinking of renting out your apartment or villa in Antalya, one of our partners will view your home and prepare a free rent analysis. As an owner, you pay no commission. If you prefer not to deal with anything, ask us for a property management quote: ${WA('message us on WhatsApp →')}</p>`,
      faq: [
        ['Do I pay a commission to rent out my home?', 'No. At ACC HOMES, owners pay no letting commission. The rent analysis, photography and listing costs are also on us. If you would like property management after the tenant is found, we will prepare a separate quote for you.'],
        ['Can I ask the tenant for a credit report?', 'Yes. The applicant obtains a Findeks credit report with their own consent and shares it with you or with us. It is the most practical way to see their payment history.'],
        ['What is the maximum deposit?', 'On residential leases in Turkey, the deposit can be at most three months’ rent.'],
        ['How much can I increase the rent?', 'Annual increases on residential leases cannot exceed the previous 12-month average CPI. For November 2026 the cap was 31.23%. We calculate the correct rate every year and notify you and your tenant.'],
        ['I live abroad. Can I still rent out my home?', 'Yes. With a power of attorney authorising the letting, we handle the whole process on your behalf; you can issue it at the Turkish consulate in your country.'],
        ['Do you also rent out villas?', 'Yes. We let villas, especially in Konyaaltı, Lara, Döşemealtı, Belek, Kadriye and Kemer, through our network of local and international tenants.'],
        ['Do you guarantee the rent?', 'No. No one can honestly guarantee rent. What we offer is careful tenant selection, a solid contract, a photo-documented handover and regular follow-up.'],
      ],
    },
    ru: {
      title: 'Как сдать квартиру или виллу в Анталии: гид для собственников',
      seo: 'Сдать квартиру или виллу в Анталии: гид для собственников',
      desc: 'Хотите сдать квартиру или виллу в Анталии? Правильная цена аренды, проверка арендатора, передача по фотоакту, сдача по доверенности и управление.',
      html: `
<p>«Хочу сдать квартиру в Анталии, но кому можно доверять?» — самый частый вопрос, который мы слышим от собственников. Доход от аренды важен, но ещё важнее, чтобы жильё досталось правильному арендатору, по правильной цене и по надёжному договору. В этом гиде — шаги, которые стоит пройти, сдавая квартиру или виллу в Анталии, на что смотреть при выборе арендатора и как ACC HOMES может взять весь процесс на себя.</p>
<p><b>Сначала о самом частом вопросе:</b> в ACC HOMES собственник не платит комиссию за сдачу. За поиск арендатора вы нам ничего не платите.</p>
<h2>1. Определите правильную цену аренды</h2>
<p>Слишком дорогая квартира простаивает, а слишком дешёвая годами приносит собственнику убытки. Дело в том, что ежегодное повышение аренды жилья в Турции ограничено средним индексом потребительских цен за 12 месяцев. Например, для договоров, продлеваемых в ноябре 2026 года, законный предел составил <b>31,23%</b>. Если начальная цена выбрана неверно, разницу потом сложно наверстать.</p>
<p>Для правильной цены мы учитываем:</p>
<ul class="ticks">
<li><b>Сопоставимые предложения:</b> актуальные цены аренды похожих по площади, этажу и оснащению квартир в том же районе.</li>
<li><b>Особенности объекта:</b> комплекс или отдельный дом, бассейн, паркинг, лифт, мебель, близость к морю и школам.</li>
<li><b>Профиль арендатора:</b> семьи, студенты, специалисты, пенсионеры и иностранцы — у всех разные ожидания и бюджеты.</li>
</ul>
<p>Для ориентира: в октябре 2026 года средняя цена в объявлениях об аренде составляла около 43 000 TRY в Коньяалты, 35 000 TRY в Муратпаше и 25 000 TRY в Кепезе, а в среднем по Анталии — около 27 000 TRY. Это цены в объявлениях; реальная аренда зависит от вашего объекта и торга. Мы бесплатно подготовим анализ аренды для вашей недвижимости.</p>
<h2>2. Подготовьте жильё</h2>
<p>Арендатор обычно принимает решение по первым фотографиям. Небольшие улучшения влияют и на цену, и на скорость сдачи:</p>
<ul class="ticks">
<li>Покраска, мелкий ремонт, чистая и аккуратная квартира</li>
<li>Обслуживание котла, кондиционеров и бытовой техники</li>
<li>Готовые документы: тапу, обязательная страховка от землетрясения (DASK), данные о взносах комплекса</li>
<li>Опись мебели заранее, если сдаёте с мебелью</li>
</ul>
<p>Затем самое важное — <b>профессиональная подача.</b> В ACC HOMES работают своя съёмочная команда и штатные дизайнеры. Профессиональные фото, при необходимости съёмка с дрона и видео, а также дизайн объявлений готовит наша команда — бесплатно для вас.</p>
<h2>3. Выберите правильного арендатора: проверка</h2>
<p>Выбор арендатора — самый важный шаг. Собственнику нужно простое: арендатор, который платит вовремя, бережёт жильё и соблюдает договор. Поэтому мы проверяем кандидатов, прежде чем представить их вам:</p>
<ul class="ticks">
<li><b>Доход и работа:</b> проверяем, по силам ли кандидату аренда.</li>
<li><b>Кредитный отчёт:</b> по вашему желанию мы запрашиваем у кандидата отчёт Findeks, который он получает со своего согласия. Он хорошо показывает платёжную дисциплину.</li>
<li><b>Поручитель:</b> при необходимости оформляется солидарный поручитель. Если поручитель женат или замужем, требуется письменное согласие супруга; эту деталь мы контролируем.</li>
<li><b>Рекомендации:</b> от прежнего арендодателя или работодателя.</li>
<li><b>Личная встреча:</b> сразу уточняются число жильцов, домашние животные и цель проживания.</li>
</ul>
<p>Окончательное решение всегда за вами; мы даём полную и сравнимую информацию.</p>
<h2>4. Надёжный договор и передача по фотоакту</h2>
<p>Большинство проблем возникает из-за пробелов в договоре и при передаче жилья. Поэтому:</p>
<ul class="ticks">
<li><b>Письменный договор аренды:</b> чётко прописываются цена, дата оплаты, условия повышения, взносы и счета, животные, субаренда и условия выезда.</li>
<li><b>Депозит:</b> при аренде жилья депозит не может превышать трёхмесячную арендную плату. Сумма и условия возврата указываются в договоре.</li>
<li><b>Фотоопись:</b> мебель и оснащение фотографируются и вносятся в список по комнатам.</li>
<li><b>Акт передачи ключей:</b> фиксируются состояние жилья, показания счётчиков и количество ключей. При выезде жильё принимается по тому же акту — споры о депозите практически исчезают.</li>
<li><b>Коммунальные услуги:</b> контролируем переоформление электричества, воды и газа на арендатора.</li>
</ul>
<h2>5. Вы не в Анталии? Сдача по доверенности</h2>
<p>Если вы живёте за границей или в другом городе, приезжать в Анталию не нужно. По нотариальной доверенности с правом сдачи в аренду мы найдём арендатора, подпишем договор, передадим жильё и будем контролировать оплату от вашего имени. Находясь за рубежом, доверенность можно оформить в турецком консульстве вашей страны. На всех этапах вы получаете фото, видео и письменные отчёты.</p>
<h2>6. Не хотите ничем заниматься? Управление арендной недвижимостью</h2>
<p>Найти арендатора — только начало. Контроль платежей, поломки, взносы и счета, ежегодное повышение и продление договора требуют времени. С услугой <b>управления арендной недвижимостью</b> ACC HOMES всё это берём на себя мы:</p>
<ul class="ticks">
<li>Контроль поступления аренды и ежемесячные отчёты</li>
<li>Организация ремонта и обслуживания</li>
<li>Контроль взносов, коммунальных счетов и DASK</li>
<li>Расчёт ежегодного повышения в рамках закона и продление договора</li>
<li>Всё общение с арендатором</li>
<li>Сопровождение при спорных ситуациях и, при необходимости, направление к юристу</li>
<li>Приёмка жилья по акту при выезде и поиск нового арендатора</li>
</ul>
<p>За поиск арендатора собственник комиссию не платит. Если вам нужно и управление, объём услуг подбирается под ваш объект и задачи. <b>Запросите у нас предложение по управлению:</b> ${WA('напишите нам в WhatsApp →')}</p>
<p><i>Примечание: краткосрочной (посуточной, понедельной) арендой мы не управляем; наша услуга — для долгосрочной аренды.</i></p>
<h2>7. Где в Анталии самый высокий спрос на аренду</h2>
<p>Рынок аренды в Анталии сосредоточен в центральных районах и курортных зонах. По числу объявлений об аренде квартир на крупном портале в ноябре 2026 года порядок такой: Аланья, Кепез, Муратпаша, Коньяалты, Манавгат, Аксу, Дёшемеалты и Серик. Среди кварталов выделяются Алтынташ (Аксу), Гюзелоба (Муратпаша) и Хурма (Коньяалты).</p>
<p>Наш портфель это подтверждает: большая часть арендного жилья, с которым мы работаем сегодня, находится в Алтынташе, Муратпаше (Гюзелоба, Чаглаян, Фенер, Эрменек, Мейданкавагы), Коньяалты (Хурма) и Дёшемеалты.</p>
<table><thead><tr><th>Район</th><th>Профиль арендатора и особенности</th></tr></thead><tbody>
<tr><td>${AR('aksu-altintas', 'Алтынташ (Аксу)')}</td><td>Новые комплексы с бассейнами и паркингом; рядом аэропорт — востребован у сотрудников авиации, молодых семей и иностранцев</td></tr>
<tr><td>${AR('lara-guzeloba', 'Лара и Гюзелоба')}, Чаглаян, ${AR('fener', 'Фенер')}</td><td>Рядом школы, больницы и побережье; семьи и специалисты. В Ларе также высокий спрос на виллы</td></tr>
<tr><td>Эрменек, Мейданкавагы, Йешильбахче (Муратпаша)</td><td>Близость к центру и деловым магистралям; работающие люди и небольшие семьи</td></tr>
<tr><td>${AR('konyaalti', 'Коньяалты')} (Хурма, Лиман, Сарысу)</td><td>Море и природа рядом; самая высокая аренда за м² в Анталии, местные и иностранные семьи</td></tr>
<tr><td>Кепез</td><td>Много объявлений, относительно доступная аренда; студенты и большие семьи</td></tr>
<tr><td>${AR('dosemealti', 'Дёшемеалты')}</td><td>Дома с садом и виллы; семьи, ищущие спокойную жизнь, школы рядом</td></tr>
<tr><td>${AR('belek', 'Белек')}, ${AR('kadriye', 'Кадрие')}, ${AR('kemer', 'Кемер')}, Аланья</td><td>Виллы и дома для отдыха; иностранные арендаторы и пенсионеры, желающие жить долгосрочно</td></tr>
</tbody></table>
<p>Где бы ни находилось ваше жильё, на встрече мы вместе оценим текущий уровень аренды и спрос в вашем районе. Наши актуальные объекты в аренду — на <a href="{{URL:list}}">странице объявлений</a>.</p>
<h2>Почему ACC HOMES?</h2>
<p>Сдавая жильё, главное — понимать, кому вы доверяете. ACC HOMES возглавляет основатель и брокер Али Джанер Джан; команда из около 50 человек работает в Анталии, в ACC Plaza.</p>
<ul class="ticks">
<li><b>Без комиссии для собственника:</b> за сдачу жилья вы не платите нам комиссию. Фото, дизайн и размещение объявлений — тоже за наш счёт.</li>
<li><b>Готовый спрос:</b> в нашей CRM зарегистрированы местные и иностранные клиенты, ищущие аренду. Особенно много запросов на жильё в закрытых комплексах — подходящий арендатор иногда находится ещё до публикации объявления.</li>
<li><b>Сила маркетинга:</b> ваш объект публикуется на нашем сайте на 12 языках, на ведущих турецких порталах и на международных площадках.</li>
<li><b>Сеть из 50 человек:</b> объявление одновременно публикуют около 50 партнёров ACC HOMES и официальные аккаунты ACC HOMES в Instagram и соцсетях — так оно быстро охватывает гораздо больше арендаторов.</li>
<li><b>Обслуживание на 12 языках:</b> прямое общение с арендаторами на турецком, английском, русском и других языках, перевод и помощь с договором для иностранцев.</li>
<li><b>Профессиональные фото и дизайн:</b> наша съёмочная команда и дизайнеры представят ваше жильё в лучшем виде.</li>
<li><b>Системная работа:</b> все запросы, показы и переговоры фиксируются в нашей собственной панели ACC HOMES — ни один кандидат и ни один ответ не теряется.</li>
<li><b>Доверие:</b> более 470 отзывов в Google с оценкой 4,9 и сотни завершённых сделок с собственниками и арендаторами.</li>
</ul>
<p>Если думаете о продаже, прочитайте наш ${B('antalya-villanizi-satmak-rehberi', 'гид по продаже виллы')}.</p>
<h2>Сдадим ваше жильё вместе</h2>
<p>Если вы хотите сдать квартиру или виллу в Анталии, наш партнёр осмотрит объект и бесплатно подготовит анализ аренды. Собственник комиссию не платит. Если не хотите ничем заниматься, запросите предложение по управлению: ${WA('напишите нам в WhatsApp →')}</p>`,
      faq: [
        ['Плачу ли я комиссию за сдачу квартиры?', 'Нет. В ACC HOMES собственник не платит комиссию за сдачу. Анализ аренды, фотосъёмка и размещение объявлений также за наш счёт. Если после заселения арендатора вам нужно управление недвижимостью, мы подготовим отдельное предложение.'],
        ['Можно ли запросить у арендатора кредитный отчёт?', 'Да. Кандидат получает отчёт Findeks со своего согласия и передаёт его вам или нам. Это самый практичный способ увидеть его платёжную дисциплину.'],
        ['Какой максимальный депозит?', 'При аренде жилья в Турции депозит не может превышать трёхмесячную арендную плату.'],
        ['На сколько можно повысить аренду?', 'Ежегодное повышение аренды жилья не может превышать средний ИПЦ за предыдущие 12 месяцев. В ноябре 2026 года предел составил 31,23%. Мы ежегодно рассчитываем правильный процент и уведомляем вас и арендатора.'],
        ['Я живу за границей. Могу ли я сдать квартиру?', 'Да. По доверенности с правом сдачи в аренду мы ведём весь процесс от вашего имени; оформить её можно в турецком консульстве вашей страны.'],
        ['Вы сдаёте и виллы?', 'Да. Мы сдаём виллы, прежде всего в Коньяалты, Ларе, Дёшемеалты, Белеке, Кадрие и Кемере, через нашу сеть местных и иностранных арендаторов.'],
        ['Вы гарантируете арендную плату?', 'Нет. Честно гарантировать аренду не может никто. Мы предлагаем тщательный отбор арендатора, надёжный договор, передачу по фотоакту и регулярный контроль.'],
      ],
    },
  },
];
