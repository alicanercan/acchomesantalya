// Blog 14 (25.11.2026): Antalya'da ev alırken dikkat edilmesi gerekenler — alıcı yasal kontrol listesi (TR/EN/RU). Kaynak taslak: claude/blog-8-antalya-ev-alirken-yasal-kontrol.md
// Caner onayı 25.11.2026. Güvenli Ödeme Sistemi zorunluluğu: son haber 1 Aralık 2026 (birkaç kez ertelendi) — ertelenirse metni güncelleyin.
// Tapuda gerçek bedel: eksik harç + %100 vergi ziyaı + gecikme faizi, alıcı ve satıcı (istiklal 13.04.2026, gzt 16.04.2026).
const B = (s, t) => `<a href="{{URL:blog}}${s}/">${t}</a>`;
const WA = (t) => `<a href="{{WA}}" target="_blank" rel="noopener">${t}</a>`;

export const POSTS14 = [
  {
    slug: 'antalya-ev-alirken-dikkat-edilmesi-gerekenler', cat: 'rehber', date: '2026-11-25', icon: '📋',
    tr: {
      title: 'Antalya’da Daire, Ev veya Villa Alırken Dikkat Edilmesi Gerekenler: Yasal Kontrol Listesi 2026',
      seo: 'Antalya’da Ev Alırken Dikkat Edilmesi Gerekenler 2026',
      desc: 'Antalya’da daire, ev veya villa alırken tapu, iskân, kat mülkiyeti, şerh, kiracı, vekalet, güvenli ödeme ve aidat borcu: 2026 kontrol listesi.',
      html: `
<p>Ev almak, çoğu insanın hayatındaki en büyük harcama. Fiyat, konum ve manzara kadar önemli olan bir şey daha var: <b>evin hukuki olarak temiz olması.</b> İskânı olmayan, üzerinde haciz ya da şerh bulunan, kiracısı tahliye edilemeyen ya da satıcısının mülkü satmaya tam yetkisi olmayan bir ev, yıllarca sürecek sorunlara yol açabilir.</p>
<p>Bu rehberde Antalya’da daire, müstakil ev ya da villa alırken tapuya gitmeden önce kontrol etmeniz gereken belgeleri ve durumları tek listede topladık.</p>
<h2>1. Tapu kaydı: kimin adına, hangi nitelikte?</h2>
<p>İlk kontrol, tapunun kendisidir.</p>
<ul class="ticks">
<li><b>Malik:</b> Tapudaki malik, karşınızdaki satıcı mı? Birden fazla malik varsa (hisseli tapu) tüm maliklerin satışa katılması gerekir.</li>
<li><b>Nitelik:</b> Tapuda taşınmazın niteliği ne yazıyor: mesken, arsa, tarla? Tarla üzerine yapılmış bir “ev”, tapuda konut değildir.</li>
<li><b>Kat mülkiyeti:</b> Bina tamamlanmış, iskân alınmış ve tapu kat mülkiyetine geçirilmiştir. En güvenli durumdur.</li>
<li><b>Kat irtifakı:</b> Bina projesine göre bağımsız bölüm tapusu verilmiştir; ama iskân alınmamış ya da kat mülkiyetine geçilmemiş olabilir. Yeni binalarda yaygındır; iskânın ne zaman alınacağını mutlaka sorun.</li>
<li><b>Hisseli tapu:</b> Bağımsız bölüm tapusu yoktur; arsa üzerinde pay satın alırsınız. Satışı, kredisi ve kullanımı en zor olan durumdur.</li>
</ul>
<p>Tapu kaydını alıcı olarak satıcıdan ya da tapu müdürlüğünden; satıcı ise e-Devlet’ten görüntüleyebilir.</p>
<h2>2. İskân var mı? Yapı kayıt belgesi ne demek?</h2>
<p><b>İskân (yapı kullanma izin belgesi),</b> binanın ruhsatına ve projesine uygun yapıldığını gösteren belgedir. İskânlı ev konut kredisine uygundur, alıcı kitlesi geniştir; elektrik, su ve doğalgaz abonelikleri sorunsuz yapılır ve kat mülkiyetine geçiş mümkündür.</p>
<p><b>Yapı kayıt belgesi,</b> 2018’deki imar barışı kapsamında kaçak ya da ruhsatına aykırı yapılara verilen bir belgedir. Yapının geçici olarak kullanılmasını ve aboneliklerin yapılmasını sağlar; ama yapıyı imara uygun hale getirmez, deprem güvenliğini garanti etmez. Yapı kayıt belgeli bir evde kredi kullanmak zorlaşabilir, kentsel dönüşümde ya da yıkım kararlarında ek riskler doğabilir. Bu tür evleri alırken fiyatın bu riski yansıtıp yansıtmadığına dikkat edin.</p>
<p>Ayrıca belediyeden evin <b>projesine uygun</b> olup olmadığını kontrol edin: projede olmayan kapatılmış balkon, çatı katı ya da ek yapı ileride sorun çıkarabilir.</p>
<h2>3. Tapuda şerh, beyan, ipotek ve haciz var mı?</h2>
<p>Tapu kaydının şerhler, beyanlar ve rehinler bölümleri, evin üzerindeki hakları ve kısıtlamaları gösterir. Alımdan önce mutlaka kontrol edin:</p>
<ul class="ticks">
<li><b>İpotek:</b> Satıcının evi teminat göstererek kredi kullandığını gösterir. İpotek, tapu devrinden önce ya da devirle eş zamanlı kaldırılmalıdır.</li>
<li><b>Haciz ve ihtiyati tedbir:</b> Satıcının borcu ya da evle ilgili bir dava olduğunu gösterir. Haciz veya tedbirli bir evi almak ciddi risktir.</li>
<li><b>Kira şerhi:</b> Tapuya şerh edilmiş bir kira sözleşmesi olduğunu gösterir; yeni malik bu sözleşmeye bağlıdır.</li>
<li><b>Aile konutu şerhi:</b> Ev, satıcının ailesinin oturduğu konut olarak işaretlenmişse satış için eşin açık rızası gerekir.</li>
<li><b>İntifa ve oturma hakkı:</b> Başka birinin evde yaşama ya da kira alma hakkı olabilir.</li>
<li><b>Yönetim planı ve diğer beyanlar:</b> Site kuralları, kullanım kısıtlamaları, otopark ve ortak alan kullanımı gibi bilgileri içerir.</li>
</ul>
<p>Üzerinde şerh bulunan bir ev her zaman alınmaz değildir; ama şerhin ne anlama geldiğini bilerek ve gerekirse avukat görüşü alarak karar verilmelidir.</p>
<h2>4. Satıcı evi nasıl edindi? Bağış ve miras konusu</h2>
<p>Satıcının evi <b>bağış</b> yoluyla (örneğin anne ya da babasından) edinmiş olması ileride sorun çıkarabilir. Bağışlayan kişi vefat ettiğinde, diğer mirasçılar saklı paylarının zedelendiğini düşünürlerse dava açabilir. Gerçekte satış olan ama bağış gibi gösterilen ya da bağış olan ama satış gibi gösterilen işlemler de mirasçılar tarafından dava konusu edilebilir.</p>
<ul class="ticks">
<li>Satıcının evi hangi yolla (satış, miras, bağış) ve ne zaman edindiğini öğrenin.</li>
<li>Bağış ya da miras yoluyla edinilmiş evlerde, varsa diğer mirasçıların durumunu ve olası dava riskini değerlendirin; gerekirse avukat görüşü alın.</li>
</ul>
<h2>5. Satış bedeli tapuda tam gösterilmeli</h2>
<p>Eskiden yaygın olan “tapuda düşük bedel gösterme” alışkanlığı, bugün hem alıcıya hem satıcıya ciddi maliyet çıkarabiliyor. 2026 itibarıyla tapuda gerçek değerin altında bedel beyan edildiği tespit edilirse, eksik ödenen harç <b>%100 vergi ziyaı cezası ve gecikme faiziyle</b> birlikte hem alıcıdan hem satıcıdan istenebiliyor. Banka transferleri, ekspertiz raporları ve ilan sitelerindeki fiyatlar bu kontrolde kullanılabiliyor.</p>
<p>Gerçek bedelin gösterilmesi alıcı için başka açılardan da önemli:</p>
<ul class="ticks">
<li>İleride sattığınızda değer artış kazancı vergisi, tapudaki alış bedeline göre hesaplanır. Düşük gösterilen alış bedeli, ileride ödeyeceğiniz vergiyi artırır.</li>
<li>Satıştan kaynaklanan bir uyuşmazlıkta tapuda gösterilen bedel esas alınabilir.</li>
</ul>
<p>Alım satım masrafları ve vergiler için ${B('antalya-gayrimenkul-yatirimi-arsa-mi-ev-mi', 'Arsa mı, ev mi, tarla mı? yatırım rehberimize')} bakabilirsiniz.</p>
<h2>6. Evde kiracı var mı?</h2>
<p>Kiracılı bir evi almak mümkündür; ama bilerek alınmalıdır. Mevcut kira sözleşmesi, ev satılsa da yeni malik için geçerlidir; yani evi kiracısıyla birlikte almış olursunuz.</p>
<ul class="ticks">
<li>Kiracı varsa kira sözleşmesini, kira bedelini, depozitoyu ve sözleşmenin bitiş tarihini görün.</li>
<li>Evde kendiniz oturmak istiyorsanız, yeni malikin ihtiyaç nedeniyle tahliye isteyebilmesi kanunda belirli bildirim ve süre koşullarına bağlıdır. Kiracının hemen çıkacağını varsaymayın.</li>
<li>Ev “boş” olarak satılıyorsa, tapu öncesinde evi boş olarak görün ve anahtar teslimini tapu günüyle eşleştirin.</li>
</ul>
<h2>7. Tapuya satıcının kendisi gelsin</h2>
<p>Vekaletname ile satış yasal bir yöntemdir ve özellikle yurt dışındaki maliklerle sık kullanılır. Ama vekaletle yapılan satışlar sahte ya da geçersiz vekaletname gibi riskler de taşır.</p>
<ul class="ticks">
<li>Mümkünse tapuya <b>satıcının kendisi</b> gelsin.</li>
<li>Vekaletle satış yapılacaksa vekaletnamenin aslını görün; hangi noterden, ne zaman düzenlendiğini ve satış yetkisi içerip içermediğini kontrol edin. Noterden vekaletnamenin geçerliliğini teyit ettirin.</li>
<li>Vekaletname çok eskiyse ya da vekil satıcının yakını değilse ekstra dikkatli olun.</li>
</ul>
<h2>8. Ödeme: elden değil, banka yoluyla</h2>
<p>Elden para teslimi, hem dolandırıcılık hem de ispat açısından en riskli yöntemdir.</p>
<ul class="ticks">
<li>Kapora dahil tüm ödemeler, açıklaması yazılarak (hangi taşınmaz için ve “satış bedeli” ya da “kapora” ifadesiyle) <b>banka yoluyla</b> yapılmalıdır.</li>
<li>Kapora ödemeden önce yazılı bir kapora ya da ön sözleşme yapılmalı; cayma halinde ne olacağı yazılmalıdır.</li>
<li><b>Tapuda Güvenli Ödeme Sistemi:</b> Satış bedeli alıcı tarafından bankada bloke edilir, tapu devri tamamlanınca satıcının hesabına aktarılır; devir gerçekleşmezse para alıcıya iade edilir. Ticaret Bakanlığı’nın düzenlemesiyle bu sistem tapudaki satışlarda <b>Aralık 2026 itibarıyla</b> zorunlu hale geliyor. Miras, bağış ve birinci derece akrabalar arası satış gibi bazı işlemler kapsam dışında.</li>
</ul>
<h2>9. Abonelikler, aidat ve borçlar</h2>
<ul class="ticks">
<li><b>Abonelikler:</b> Elektrik, su, doğalgaz ve internet aboneliklerinin satıcı tarafından son okumayla kapatılması ya da size devredilmesi. Sayaç değerlerini teslim günü fotoğraflayın.</li>
<li><b>Aidat ve site bakım borcu:</b> Site yönetiminden satıcının <b>“borcu yoktur”</b> yazısını alın. Biriken aidat borçları yeni malikle sorun yaratabilir.</li>
<li><b>Emlak vergisi:</b> Satıcının emlak vergisi borcu olmadığını belediyeden teyit ettirin. Satış yılının emlak vergisi satıcıya aittir; siz bir sonraki yıldan itibaren ödersiniz ve belediyeye bildirimde bulunmanız gerekir.</li>
<li><b>DASK:</b> Zorunlu deprem sigortası tapu devri için gereklidir; poliçenin size geçmesini ya da yenisinin yapılmasını sağlayın.</li>
</ul>
<h2>10. Altyapı, bina ve site kontrolleri</h2>
<ul class="ticks">
<li><b>Altyapı:</b> Elektrik, su, kanalizasyon ve doğalgaz bağlı mı? Yeni yerleşim alanlarında altyapının tamamlanıp tamamlanmadığını sorun.</li>
<li><b>Bina yaşı ve yapı güvenliği:</b> Bina 2000 öncesi ise depreme dayanıklılık açısından ek inceleme düşünün. Yeni binalarda yapı denetim firması ve ruhsat tarihi bilgisi alın.</li>
<li><b>Rutubet, çatı ve tesisat:</b> Özellikle zemin, bahçe ve çatı katlarında rutubet ve su yalıtımına bakın.</li>
<li><b>Site yönetim planı:</b> Aidat, ortak alanlar, evcil hayvan, otopark ve kiralama kuralları. Evi kısa dönem (günlük, haftalık) kiralamayı düşünüyorsanız, bunun için yasal izin ve site kat maliklerinin onayı gerektiğini unutmayın.</li>
<li><b>Enerji kimlik belgesi:</b> Evin enerji sınıfını öğrenin; kullanılabilecek kredi oranını etkileyebilir.</li>
</ul>
<h2>11. Villa alırken ek kontroller</h2>
<ul class="ticks">
<li><b>Arsa ve imar durumu:</b> Villanın oturduğu arsanın imar durumu, emsal hakkı ve arsa payı.</li>
<li><b>Müstakil mi, site içi mi?</b> Site içindeki villalarda yönetim planı ve ortak alan kuralları; müstakil villalarda arsanın sınırları ve komşu parseller.</li>
<li><b>Ruhsat dışı ek yapılar:</b> Havuz, kış bahçesi, ek oda, bodrum ya da çatı katı ruhsata ve projeye işlenmiş mi?</li>
<li><b>Antalya’ya özgü kısıtlamalar:</b> Kıyıya yakın villalarda kıyı kenar çizgisi, bazı bölgelerde sit alanı, orman sınırı ya da turizm alanı kısıtlamaları olabilir. Bunlar ileride yapılabilecek değişiklikleri ve satış kolaylığını doğrudan etkiler.</li>
</ul>
<h2>12. Projeden (maketten) alıyorsanız</h2>
<ul class="ticks">
<li>Satış vaadi sözleşmesinin <b>noterde</b> yapılması</li>
<li>Müteahhidin ve projenin ruhsatı, arsanın tapusu ve kat irtifakı durumu</li>
<li>Teslim tarihi, gecikme halinde ödenecek cezalar ve ödeme planı</li>
<li>Müteahhidin daha önce teslim ettiği projeler</li>
</ul>
<h2>13. Yabancı alıcıysanız</h2>
<p>Yabancı uyruklu alıcılarda tapu sürecinde ek adımlar vardır: değerleme raporu, yeminli tercüman, bazı bölgelerde askeri güvenlik kontrolü ve vatandaşlık ya da ikamet amaçlı alımlarda ek koşullar. Ayrıntılar için ${B('gayrimenkul-ile-turk-vatandasligi-ve-ikamet-2026', 'gayrimenkul ile Türk vatandaşlığı ve ikamet rehberimize')} ve <a href="{{URL:buyersguide}}">alıcı rehberimize</a> bakabilirsiniz.</p>
<h2>Tapu öncesi kısa kontrol listesi</h2>
<table><thead><tr><th>Kontrol</th><th>Nereden</th></tr></thead><tbody>
<tr><td>Tapu kaydı, malik, nitelik</td><td>Tapu müdürlüğü / satıcının e-Devlet kaydı</td></tr>
<tr><td>Kat mülkiyeti, kat irtifakı, hisse</td><td>Tapu kaydı</td></tr>
<tr><td>İskân veya yapı kayıt belgesi</td><td>Belediye, satıcı</td></tr>
<tr><td>Projeye uygunluk</td><td>Belediye imar arşivi</td></tr>
<tr><td>Şerh, ipotek, haciz, aile konutu</td><td>Tapu kaydı</td></tr>
<tr><td>Satıcının edinme şekli (satış, miras, bağış)</td><td>Tapu kaydı, satıcı</td></tr>
<tr><td>Kiracı durumu ve sözleşme</td><td>Satıcı, kira sözleşmesi</td></tr>
<tr><td>Vekaletname geçerliliği</td><td>Noter teyidi</td></tr>
<tr><td>Aidat borcu yoktur yazısı</td><td>Site yönetimi</td></tr>
<tr><td>Emlak vergisi borcu</td><td>Belediye</td></tr>
<tr><td>DASK</td><td>Sigorta şirketi</td></tr>
<tr><td>Abonelikler ve son okumalar</td><td>Elektrik, su, doğalgaz, internet şirketleri</td></tr>
</tbody></table>
<h2>Neden ACC HOMES ile almalısınız?</h2>
<p>Bu kontrollerin her biri ayrı bir uzmanlık ve zaman istiyor. ACC HOMES’ta alıcılarımız için bu süreci baştan sona birlikte yürütüyoruz:</p>
<ul class="ticks">
<li><b>Satın alma öncesi ön kontrol:</b> Tapu kaydı, iskân, şerh ve borç durumunu tapuya gitmeden birlikte inceliyoruz.</li>
<li><b>Hukuki destek:</b> Gerekli durumlarda çalıştığımız avukatlarla şerh, miras ve sözleşme konularında görüş alıyoruz.</li>
<li><b>Güvenli ödeme ve tapu süreci:</b> Kapora sözleşmesinden tapu randevusuna, güvenli ödemeden anahtar teslimine kadar her adımı planlıyoruz.</li>
<li><b>Teslim ve abonelikler:</b> Sayaç okumaları, abonelik devri, aidat ve DASK işlemlerinde yanınızdayız.</li>
<li><b>Yabancı alıcı deneyimi:</b> Tercüman, değerleme raporu ve vekaletname süreçlerini 12 dilde yönetiyoruz.</li>
<li><b>Güven:</b> Kurucu ve broker Ali Caner Can liderliğinde, ACC Plaza’da yaklaşık 50 kişilik ekip; Google’da 470’i aşkın yorum ve 4,9 puan.</li>
</ul>
<p><i>Bu yazı genel bilgilendirme amaçlıdır, hukuki danışmanlık yerine geçmez. Kendi işleminiz için bir avukattan görüş almanızı öneririz.</i></p>
<h2>Ev alırken yalnız olmayın</h2>
<p>Antalya’da daire, ev ya da villa almayı düşünüyorsanız, beğendiğiniz mülkün belgelerini tapuya gitmeden birlikte inceleyelim. ACC HOMES portföyündeki mülklerde bu kontrolleri baştan yapıyoruz; başka bir mülk için de ön kontrol desteği isteyebilirsiniz: ${WA('WhatsApp’tan yazın →')} ya da <a href="{{URL:list}}">ilanlarımıza göz atın</a>.</p>`,
      faq: [
        ['İskânsız ev alınır mı?', 'Alınabilir; ama iskânsız evde konut kredisi kullanmak zorlaşır, abonelik ve kat mülkiyetine geçiş sorunları olabilir. Kat irtifaklı yeni binalarda iskânın ne zaman alınacağını mutlaka öğrenin.'],
        ['Kat irtifakı ile kat mülkiyeti arasındaki fark nedir?', 'Kat mülkiyeti, binanın tamamlandığını ve iskânın alındığını gösterir. Kat irtifakı ise proje üzerinden verilen bağımsız bölüm tapusudur; bina iskân alıp kat mülkiyetine geçtiğinde tapu da kat mülkiyetine dönüşür.'],
        ['Bağış yoluyla edinilmiş ev alınır mı?', 'Alınabilir; ama bağışlayanın mirasçıları ileride dava açabilir. Satıcının evi nasıl edindiğini ve diğer mirasçıların durumunu değerlendirmek, gerekirse avukat görüşü almak gerekir.'],
        ['Tapuda düşük bedel göstermenin cezası var mı?', 'Evet. Tapuda gerçek değerin altında bedel beyan edildiği tespit edilirse eksik harç, %100 vergi ziyaı cezası ve gecikme faiziyle hem alıcıdan hem satıcıdan istenebilir.'],
        ['Kiracılı ev alırsam kiracıyı çıkarabilir miyim?', 'Mevcut kira sözleşmesi yeni malik için de geçerlidir. Kendi ihtiyacınız için tahliye isteyebilmeniz kanundaki bildirim ve süre koşullarına bağlıdır; kiracının hemen çıkacağını varsaymayın.'],
        ['Tapuda güvenli ödeme sistemi nedir?', 'Satış bedelinin bankada bloke edildiği, tapu devri tamamlanınca satıcıya aktarıldığı sistemdir. Devir gerçekleşmezse para alıcıya iade edilir. Aralık 2026 itibarıyla tapudaki satışlarda zorunlu hale geliyor.'],
        ['Aidat borcu yoktur yazısı neden önemli?', 'Satıcının site aidatı ya da bakım borcu varsa bu borçlar yeni malikle sorun yaratabilir. Tapudan önce site yönetiminden borcu yoktur yazısı alınmalıdır.'],
      ],
    },
    en: {
      title: 'Buying an Apartment, House or Villa in Antalya: Legal Checklist 2026',
      seo: 'Buying Property in Antalya: Legal Checklist for Buyers 2026',
      desc: 'Buying an apartment, house or villa in Antalya? Title deed, occupancy permit, annotations, tenants, power of attorney, secure payment and service charges.',
      html: `
<p>Buying a home is the biggest purchase most people ever make. As important as price, location and view is one more thing: <b>the property must be legally clean.</b> A home without an occupancy permit, with a seizure or annotation on the title, with a tenant who cannot be moved out, or sold by someone without full authority can cause problems for years.</p>
<p>This guide brings together, in one list, the documents and points to check before going to the land registry when buying an apartment, house or villa in Antalya.</p>
<h2>1. The title deed: whose name, what type?</h2>
<ul class="ticks">
<li><b>Owner:</b> is the owner on the title the person selling to you? If there are several owners (shared title), all of them must take part in the sale.</li>
<li><b>Type:</b> what does the title say: residence, land plot, farmland? A “house” built on farmland is not a home on the title.</li>
<li><b>Full condominium title (kat mülkiyeti):</b> the building is complete, the occupancy permit has been issued and the title converted. This is the safest status.</li>
<li><b>Construction servitude title (kat irtifakı):</b> a unit title issued on the basis of the building project; the occupancy permit may not yet be issued. Common in new buildings; always ask when the permit will be obtained.</li>
<li><b>Shared title (hisseli tapu):</b> no separate unit title; you buy a share of the plot. The hardest to sell, finance and use.</li>
</ul>
<p>As a buyer you can see the title record through the seller or the land registry office; the seller can view it on e-Devlet.</p>
<h2>2. Is there an occupancy permit? What is a structure registration certificate?</h2>
<p>The <b>occupancy permit (iskân)</b> shows that the building was built according to its permit and project. A home with one is eligible for a mortgage, has a wider pool of buyers, gets utility connections without problems and can move to full condominium title.</p>
<p>The <b>structure registration certificate (yapı kayıt belgesi)</b> was issued under the 2018 zoning amnesty to unlicensed or non-compliant buildings. It allows temporary use and utility connections, but it does not make the building compliant or guarantee earthquake safety. Mortgages can be harder to obtain, and there may be extra risks in urban renewal or demolition decisions. Check whether the price reflects this risk.</p>
<p>Also check with the municipality that the home <b>matches its approved project</b>: an enclosed balcony, roof floor or extension that is not in the project can cause problems later.</p>
<h2>3. Annotations, mortgages and seizures on the title</h2>
<ul class="ticks">
<li><b>Mortgage:</b> the seller used the home as loan security. It must be lifted before, or at the same time as, the transfer.</li>
<li><b>Seizure and injunction:</b> a debt of the seller or a court case concerning the home. Buying with one of these is a serious risk.</li>
<li><b>Lease annotation:</b> a lease registered on the title; the new owner is bound by it.</li>
<li><b>Family home annotation:</b> if the home is registered as the seller’s family residence, the spouse’s explicit consent is required for the sale.</li>
<li><b>Usufruct or right of residence:</b> someone else may have the right to live in the home or collect its rent.</li>
<li><b>Management plan and other notes:</b> complex rules, use restrictions, parking and shared areas.</li>
</ul>
<p>An annotation does not always rule a home out, but you should understand what it means and, where needed, get a lawyer’s opinion.</p>
<h2>4. How did the seller acquire it? Gifts and inheritance</h2>
<p>If the seller received the home as a <b>gift</b> (for example from a parent), problems can arise later. When the donor dies, other heirs who believe their reserved share was harmed can go to court. Transactions shown as gifts but really sales, or the reverse, can also be challenged by heirs.</p>
<ul class="ticks">
<li>Find out how (sale, inheritance, gift) and when the seller acquired the home.</li>
<li>For homes acquired by gift or inheritance, consider the other heirs and the risk of a claim, and get a lawyer’s opinion if needed.</li>
</ul>
<h2>5. Declare the full price on the title deed</h2>
<p>The old habit of declaring a lower price at the land registry can now be costly for both sides. As of 2026, if a price below the real value is detected, the unpaid fee can be claimed from both buyer and seller with a <b>100% tax loss penalty and late interest</b>. Bank transfers, valuation reports and listing prices can be used in these checks.</p>
<ul class="ticks">
<li>When you sell later, capital gains tax is calculated from the purchase price on the title. A low declared price increases your future tax.</li>
<li>In a dispute arising from the sale, the declared price may be taken as the basis.</li>
</ul>
<p>For transaction costs and taxes, see our ${B('antalya-gayrimenkul-yatirimi-arsa-mi-ev-mi', 'property investment guide')}.</p>
<h2>6. Is there a tenant?</h2>
<p>You can buy a tenanted home, but do it knowingly. The existing lease remains valid for the new owner; you buy the home together with its tenant.</p>
<ul class="ticks">
<li>See the lease, the rent, the deposit and the end date.</li>
<li>If you want to live there yourself, evicting a tenant for your own need is subject to notice and time conditions in the law. Do not assume the tenant will leave at once.</li>
<li>If the home is sold “vacant”, see it empty before the transfer and match the key handover with the title deed day.</li>
</ul>
<h2>7. The seller should attend in person</h2>
<p>Selling through a power of attorney is legal and common with owners living abroad, but it carries risks such as forged or invalid documents.</p>
<ul class="ticks">
<li>If possible, the <b>seller should come to the land registry in person</b>.</li>
<li>If a power of attorney is used, see the original, check which notary issued it, when, and that it includes the authority to sell, and have its validity confirmed by the notary.</li>
<li>Take extra care if the document is very old or the attorney is not a relative of the seller.</li>
</ul>
<h2>8. Payment: through the bank, not in cash</h2>
<ul class="ticks">
<li>All payments, including the deposit, should be made <b>by bank transfer</b> with a clear description (which property, and “sale price” or “deposit”).</li>
<li>Sign a written deposit or preliminary agreement before paying, stating what happens if either side withdraws.</li>
<li><b>Secure Payment System at the land registry:</b> the buyer blocks the price at a bank; it is released to the seller once the transfer is completed, or returned to the buyer if it is not. Under a Ministry of Trade regulation, this system becomes mandatory for sales <b>from December 2026</b>. Some transactions, such as inheritance, gifts and sales between first-degree relatives, are exempt.</li>
</ul>
<h2>9. Utilities, service charges and debts</h2>
<ul class="ticks">
<li><b>Utilities:</b> electricity, water, gas and internet should be closed with final readings or transferred to you. Photograph the meters on handover day.</li>
<li><b>Service charges:</b> get a <b>“no debt” letter</b> for the seller from the complex management. Unpaid charges can cause problems for the new owner.</li>
<li><b>Property tax:</b> confirm with the municipality that the seller has no unpaid property tax. The tax for the year of sale belongs to the seller; you pay from the following year and must notify the municipality.</li>
<li><b>DASK:</b> compulsory earthquake insurance is required for the transfer; make sure the policy is transferred or a new one issued.</li>
</ul>
<h2>10. Infrastructure, building and complex checks</h2>
<ul class="ticks">
<li><b>Infrastructure:</b> are electricity, water, sewerage and gas connected? In new residential areas, ask whether infrastructure is complete.</li>
<li><b>Building age and safety:</b> for buildings from before 2000, consider an extra earthquake assessment. For new buildings, ask for the building inspection company and permit date.</li>
<li><b>Damp, roof and plumbing:</b> check for damp and waterproofing, especially on ground, garden and top floors.</li>
<li><b>Management plan:</b> service charges, shared areas, pets, parking and letting rules. If you plan short-term (daily or weekly) holiday lets, remember that a legal permit and the consent of the other owners are required.</li>
<li><b>Energy certificate:</b> find out the energy class; it can affect how much you can borrow.</li>
</ul>
<h2>11. Extra checks for villas</h2>
<ul class="ticks">
<li><b>Plot and zoning:</b> the zoning status, building rights and land share of the plot.</li>
<li><b>Detached or in a complex?</b> In complexes, the management plan and shared area rules; for detached villas, the plot boundaries and neighbouring parcels.</li>
<li><b>Unlicensed additions:</b> are the pool, winter garden, extra room, basement or roof floor included in the permit and project?</li>
<li><b>Antalya-specific restrictions:</b> villas near the sea may be affected by the coastal line; some areas have heritage site, forest boundary or tourism zone restrictions. These directly affect future changes and resale.</li>
</ul>
<h2>12. Buying off-plan</h2>
<ul class="ticks">
<li>A sales promise agreement signed <b>at a notary</b></li>
<li>The developer’s and project’s permit, the land title and construction servitude status</li>
<li>Delivery date, penalties for delay and the payment plan</li>
<li>Projects the developer has delivered before</li>
</ul>
<h2>13. If you are a foreign buyer</h2>
<p>Foreign buyers have extra steps: a valuation report, a sworn translator, a military security check in some areas and additional conditions for citizenship or residence purchases. See our ${B('gayrimenkul-ile-turk-vatandasligi-ve-ikamet-2026', 'guide to citizenship and residence through property')} and our <a href="{{URL:buyersguide}}">buyer’s guide</a>.</p>
<h2>Quick checklist before the transfer</h2>
<table><thead><tr><th>Check</th><th>Where</th></tr></thead><tbody>
<tr><td>Title record, owner, type</td><td>Land registry / seller’s e-Devlet record</td></tr>
<tr><td>Full title, servitude title, shared title</td><td>Title record</td></tr>
<tr><td>Occupancy permit or structure registration</td><td>Municipality, seller</td></tr>
<tr><td>Match with approved project</td><td>Municipal zoning archive</td></tr>
<tr><td>Annotations, mortgage, seizure, family home</td><td>Title record</td></tr>
<tr><td>How the seller acquired it</td><td>Title record, seller</td></tr>
<tr><td>Tenant and lease</td><td>Seller, lease</td></tr>
<tr><td>Power of attorney validity</td><td>Notary confirmation</td></tr>
<tr><td>“No debt” letter for service charges</td><td>Complex management</td></tr>
<tr><td>Property tax debt</td><td>Municipality</td></tr>
<tr><td>DASK</td><td>Insurance company</td></tr>
<tr><td>Utilities and final readings</td><td>Electricity, water, gas, internet providers</td></tr>
</tbody></table>
<h2>Why buy with ACC HOMES?</h2>
<p>Each of these checks takes expertise and time. At ACC HOMES we handle the whole process with our buyers:</p>
<ul class="ticks">
<li><b>Pre-purchase check:</b> we review the title record, occupancy permit, annotations and debts with you before the transfer.</li>
<li><b>Legal support:</b> where needed, we get opinions from the lawyers we work with on annotations, inheritance and contracts.</li>
<li><b>Secure payment and transfer:</b> we plan every step, from the deposit agreement to the land registry appointment, secure payment and key handover.</li>
<li><b>Handover and utilities:</b> we help with meter readings, utility transfers, service charges and DASK.</li>
<li><b>Experience with foreign buyers:</b> translators, valuation reports and powers of attorney, managed in 12 languages.</li>
<li><b>Trust:</b> led by founder and broker Ali Caner Can, a team of about 50 at ACC Plaza; more than 470 Google reviews with a 4.9 rating.</li>
</ul>
<p><i>This article is for general information and is not legal advice. Please get a lawyer’s opinion for your own transaction.</i></p>
<h2>Don’t buy alone</h2>
<p>If you are thinking of buying an apartment, house or villa in Antalya, let’s review the documents of the property you like before going to the land registry. We carry out these checks from the start for properties in our portfolio, and you can ask us for a pre-purchase check on another property too: ${WA('message us on WhatsApp →')} or <a href="{{URL:list}}">browse our listings</a>.</p>`,
      faq: [
        ['Can I buy a home without an occupancy permit?', 'You can, but mortgages become harder and there may be problems with utilities and moving to full condominium title. For new buildings with a servitude title, always ask when the permit will be obtained.'],
        ['What is the difference between kat irtifakı and kat mülkiyeti?', 'Kat mülkiyeti shows the building is complete and has its occupancy permit. Kat irtifakı is a unit title issued on the project; it converts to kat mülkiyeti once the permit is obtained.'],
        ['Can I buy a home the seller received as a gift?', 'Yes, but the donor’s heirs may bring a claim later. Assess how the seller acquired it and the position of other heirs, and get a lawyer’s opinion if needed.'],
        ['Is there a penalty for declaring a lower price at the land registry?', 'Yes. If a price below the real value is detected, the unpaid fee can be claimed from both buyer and seller with a 100% tax loss penalty and late interest.'],
        ['If I buy a tenanted home, can I move the tenant out?', 'The existing lease remains valid for the new owner. Eviction for your own need depends on notice and time conditions in the law; do not assume the tenant will leave at once.'],
        ['What is the land registry Secure Payment System?', 'The price is blocked at a bank and released to the seller when the transfer is completed, or returned to the buyer if it is not. It becomes mandatory for sales from December 2026.'],
        ['Why is a “no debt” letter for service charges important?', 'Unpaid service or maintenance charges of the seller can cause problems for the new owner. Get the letter from the complex management before the transfer.'],
      ],
    },
    ru: {
      title: 'Что проверить при покупке квартиры, дома или виллы в Анталии: юридический чек-лист 2026',
      seo: 'Покупка жилья в Анталии: юридический чек-лист 2026',
      desc: 'Покупаете квартиру, дом или виллу в Анталии? Тапу, искан, обременения, арендатор, доверенность, безопасная оплата и долги по взносам: чек-лист 2026.',
      html: `
<p>Покупка жилья — самая крупная трата в жизни большинства людей. Не менее важно, чем цена, расположение и вид, ещё одно: <b>юридическая чистота объекта.</b> Жильё без искана, с арестом или обременением в тапу, с арендатором, которого нельзя выселить, или проданное человеком без полных полномочий может создавать проблемы годами.</p>
<p>В этом гиде мы собрали в одном списке документы и моменты, которые нужно проверить до похода в кадастр при покупке квартиры, дома или виллы в Анталии.</p>
<h2>1. Тапу: на кого оформлено и какой тип?</h2>
<ul class="ticks">
<li><b>Собственник:</b> совпадает ли владелец по тапу с продавцом? Если собственников несколько (долевое тапу), в сделке должны участвовать все.</li>
<li><b>Назначение:</b> что указано в тапу — жильё, участок, сельхозземля? «Дом» на сельхозземле по тапу жильём не является.</li>
<li><b>Кат мюлькийети:</b> здание достроено, получен искан, тапу переоформлено. Самый надёжный статус.</li>
<li><b>Кат иртифакы:</b> тапу на квартиру выдано по проекту, искан может быть ещё не получен. Часто встречается в новостройках; обязательно спросите, когда будет искан.</li>
<li><b>Долевое тапу (хиссели):</b> отдельного тапу на квартиру нет, вы покупаете долю участка. Такой объект сложнее всего продать, взять под него ипотеку и использовать.</li>
</ul>
<p>Покупатель может увидеть выписку через продавца или в кадастре; продавец — в системе e-Devlet.</p>
<h2>2. Есть ли искан? Что такое yapı kayıt belgesi?</h2>
<p><b>Искан (разрешение на эксплуатацию)</b> подтверждает, что здание построено по разрешению и проекту. Такое жильё подходит под ипотеку, у него шире круг покупателей, без проблем подключаются коммунальные услуги и возможен переход на кат мюлькийети.</p>
<p><b>Yapı kayıt belgesi</b> выдавался по «строительной амнистии» 2018 года незаконным или не соответствующим разрешению постройкам. Он позволяет временно пользоваться зданием и подключать коммунальные услуги, но не делает здание законным и не гарантирует сейсмостойкость. Ипотеку получить сложнее, возможны дополнительные риски при реновации или решениях о сносе. Проверьте, учитывает ли цена этот риск.</p>
<p>Также проверьте в муниципалитете <b>соответствие проекту</b>: застеклённый балкон, мансарда или пристройка, которых нет в проекте, могут стать проблемой.</p>
<h2>3. Обременения, ипотека и аресты в тапу</h2>
<ul class="ticks">
<li><b>Ипотека:</b> продавец заложил жильё под кредит. Её нужно снять до или одновременно с переоформлением.</li>
<li><b>Арест и обеспечительная мера:</b> долг продавца или судебный спор по объекту. Покупка с ними — серьёзный риск.</li>
<li><b>Запись об аренде:</b> договор аренды внесён в тапу; новый собственник обязан его соблюдать.</li>
<li><b>Запись «семейное жильё»:</b> для продажи нужно явное согласие супруга продавца.</li>
<li><b>Узуфрукт и право проживания:</b> у другого человека может быть право жить в квартире или получать аренду.</li>
<li><b>План управления и прочие записи:</b> правила комплекса, ограничения использования, парковка и общие зоны.</li>
</ul>
<p>Обременение не всегда означает отказ от покупки, но нужно понимать его смысл и при необходимости получить заключение юриста.</p>
<h2>4. Как продавец получил объект? Дарение и наследство</h2>
<p>Если продавец получил жильё в <b>дар</b> (например, от родителей), позже могут возникнуть проблемы. После смерти дарителя другие наследники, считающие свою обязательную долю нарушенной, могут подать в суд. Наследники также могут оспорить сделки, где продажа оформлена как дарение или наоборот.</p>
<ul class="ticks">
<li>Узнайте, как (покупка, наследство, дарение) и когда продавец получил объект.</li>
<li>При дарении или наследстве оцените положение других наследников и риск иска; при необходимости проконсультируйтесь с юристом.</li>
</ul>
<h2>5. Указывайте в тапу реальную цену</h2>
<p>Привычка занижать цену в кадастре сегодня может дорого обойтись обеим сторонам. С 2026 года при выявлении заниженной цены недоплаченный сбор взыскивается с покупателя и продавца вместе со <b>штрафом 100% и пеней</b>. Для проверки могут использоваться банковские переводы, отчёты об оценке и цены в объявлениях.</p>
<ul class="ticks">
<li>При будущей продаже налог на прирост стоимости считается от цены покупки в тапу; заниженная цена увеличивает ваш будущий налог.</li>
<li>В споре по сделке за основу может быть взята цена, указанная в тапу.</li>
</ul>
<p>О расходах на сделку и налогах читайте в нашем ${B('antalya-gayrimenkul-yatirimi-arsa-mi-ev-mi', 'гиде по инвестициям в недвижимость')}.</p>
<h2>6. Есть ли арендатор?</h2>
<p>Купить жильё с арендатором можно, но осознанно. Действующий договор аренды сохраняет силу для нового собственника — вы покупаете квартиру вместе с арендатором.</p>
<ul class="ticks">
<li>Посмотрите договор, размер аренды, депозит и срок окончания.</li>
<li>Если вы хотите жить сами, выселение по собственной нужде возможно только при соблюдении сроков и уведомлений по закону. Не рассчитывайте, что арендатор съедет сразу.</li>
<li>Если объект продаётся «свободным», осмотрите его пустым до сделки и передайте ключи в день оформления тапу.</li>
</ul>
<h2>7. Продавец должен прийти лично</h2>
<p>Продажа по доверенности законна и часто используется собственниками за рубежом, но несёт риски поддельных или недействительных доверенностей.</p>
<ul class="ticks">
<li>По возможности <b>продавец должен лично прийти в кадастр</b>.</li>
<li>При продаже по доверенности посмотрите оригинал, проверьте нотариуса, дату и наличие права продажи, подтвердите действительность у нотариуса.</li>
<li>Будьте особенно внимательны, если доверенность очень старая или представитель не родственник продавца.</li>
</ul>
<h2>8. Оплата: через банк, а не наличными</h2>
<ul class="ticks">
<li>Все платежи, включая задаток, — <b>банковским переводом</b> с понятным назначением (за какой объект, «цена покупки» или «задаток»).</li>
<li>До оплаты задатка подпишите письменное соглашение и пропишите, что будет при отказе сторон.</li>
<li><b>Система безопасной оплаты в кадастре:</b> покупатель блокирует сумму в банке; после регистрации перехода права она поступает продавцу, а если сделка не состоялась — возвращается покупателю. По регламенту Министерства торговли система становится обязательной для сделок <b>с декабря 2026 года</b>. Некоторые сделки, например наследство, дарение и продажа между близкими родственниками, исключены.</li>
</ul>
<h2>9. Коммунальные услуги, взносы и долги</h2>
<ul class="ticks">
<li><b>Коммунальные услуги:</b> электричество, вода, газ и интернет закрываются продавцом с финальными показаниями или переоформляются на вас. Сфотографируйте счётчики в день передачи.</li>
<li><b>Взносы комплекса:</b> возьмите у управляющей компании <b>справку об отсутствии долга</b> продавца. Долги по взносам могут создать проблемы новому владельцу.</li>
<li><b>Налог на недвижимость:</b> уточните в муниципалитете, что у продавца нет долгов. Налог за год продажи платит продавец; вы платите со следующего года и должны уведомить муниципалитет.</li>
<li><b>DASK:</b> обязательная страховка от землетрясения нужна для сделки; полис нужно переоформить или оформить новый.</li>
</ul>
<h2>10. Коммуникации, здание и комплекс</h2>
<ul class="ticks">
<li><b>Коммуникации:</b> подключены ли электричество, вода, канализация и газ? В новых районах уточните, завершена ли инфраструктура.</li>
<li><b>Возраст и безопасность здания:</b> для домов до 2000 года подумайте о дополнительной сейсмической экспертизе. Для новостроек узнайте компанию технадзора и дату разрешения.</li>
<li><b>Сырость, крыша и сантехника:</b> особенно на цокольных, садовых и верхних этажах.</li>
<li><b>План управления комплексом:</b> взносы, общие зоны, животные, парковка и правила аренды. Для краткосрочной (посуточной) аренды нужны разрешение по закону и согласие собственников комплекса.</li>
<li><b>Энергетический сертификат:</b> узнайте класс энергоэффективности — он может влиять на размер ипотеки.</li>
</ul>
<h2>11. Дополнительно при покупке виллы</h2>
<ul class="ticks">
<li><b>Участок и зонирование:</b> статус зонирования, коэффициент застройки и доля земли.</li>
<li><b>Отдельно стоящая или в комплексе?</b> В комплексе — план управления и правила общих зон; у отдельной виллы — границы участка и соседние участки.</li>
<li><b>Постройки без разрешения:</b> внесены ли бассейн, зимний сад, дополнительная комната, подвал или мансарда в разрешение и проект?</li>
<li><b>Ограничения, характерные для Анталии:</b> у моря — береговая линия, в некоторых районах — охраняемые зоны, границы леса или туристические зоны. Это напрямую влияет на будущие изменения и перепродажу.</li>
</ul>
<h2>12. Покупка на этапе строительства</h2>
<ul class="ticks">
<li>Предварительный договор купли-продажи, заключённый <b>у нотариуса</b></li>
<li>Разрешение на строительство, тапу участка и статус кат иртифакы</li>
<li>Срок сдачи, штрафы за просрочку и график платежей</li>
<li>Проекты, которые застройщик уже сдал</li>
</ul>
<h2>13. Если вы иностранный покупатель</h2>
<p>Для иностранцев есть дополнительные шаги: отчёт об оценке, присяжный переводчик, в некоторых районах военная проверка и дополнительные условия при покупке ради гражданства или ВНЖ. Подробнее — в нашем ${B('gayrimenkul-ile-turk-vatandasligi-ve-ikamet-2026', 'гиде по гражданству и ВНЖ через недвижимость')} и <a href="{{URL:buyersguide}}">гиде для покупателей</a>.</p>
<h2>Короткий чек-лист перед сделкой</h2>
<table><thead><tr><th>Что проверить</th><th>Где</th></tr></thead><tbody>
<tr><td>Выписка из тапу, собственник, назначение</td><td>Кадастр / e-Devlet продавца</td></tr>
<tr><td>Кат мюлькийети, кат иртифакы, доля</td><td>Выписка из тапу</td></tr>
<tr><td>Искан или yapı kayıt belgesi</td><td>Муниципалитет, продавец</td></tr>
<tr><td>Соответствие проекту</td><td>Архив муниципалитета</td></tr>
<tr><td>Обременения, ипотека, арест, «семейное жильё»</td><td>Выписка из тапу</td></tr>
<tr><td>Как продавец получил объект</td><td>Выписка из тапу, продавец</td></tr>
<tr><td>Арендатор и договор</td><td>Продавец, договор аренды</td></tr>
<tr><td>Действительность доверенности</td><td>Подтверждение нотариуса</td></tr>
<tr><td>Справка об отсутствии долга по взносам</td><td>Управляющая компания</td></tr>
<tr><td>Долг по налогу на недвижимость</td><td>Муниципалитет</td></tr>
<tr><td>DASK</td><td>Страховая компания</td></tr>
<tr><td>Коммунальные услуги и финальные показания</td><td>Поставщики электричества, воды, газа, интернета</td></tr>
</tbody></table>
<h2>Почему стоит покупать с ACC HOMES?</h2>
<p>Каждая из этих проверок требует опыта и времени. В ACC HOMES мы проходим этот путь вместе с покупателем от начала до конца:</p>
<ul class="ticks">
<li><b>Проверка до покупки:</b> вместе изучаем тапу, искан, обременения и долги до похода в кадастр.</li>
<li><b>Юридическая поддержка:</b> при необходимости получаем заключения юристов, с которыми работаем, по обременениям, наследству и договорам.</li>
<li><b>Безопасная оплата и сделка:</b> планируем каждый шаг — от соглашения о задатке до записи в кадастр, безопасной оплаты и передачи ключей.</li>
<li><b>Передача и коммунальные услуги:</b> помогаем со счётчиками, переоформлением, взносами и DASK.</li>
<li><b>Опыт с иностранцами:</b> переводчики, отчёты об оценке и доверенности — на 12 языках.</li>
<li><b>Доверие:</b> команда из около 50 человек в ACC Plaza под руководством основателя и брокера Али Джанера Джана; более 470 отзывов в Google с оценкой 4,9.</li>
</ul>
<p><i>Статья носит информационный характер и не является юридической консультацией. По своей сделке обратитесь к юристу.</i></p>
<h2>Не покупайте в одиночку</h2>
<p>Если вы думаете о покупке квартиры, дома или виллы в Анталии, давайте вместе проверим документы понравившегося объекта до похода в кадастр. Для объектов из нашего портфеля мы делаем эти проверки заранее, а для другого объекта вы тоже можете запросить предварительную проверку: ${WA('напишите нам в WhatsApp →')} или <a href="{{URL:list}}">посмотрите наши объекты</a>.</p>`,
      faq: [
        ['Можно ли купить жильё без искана?', 'Можно, но ипотеку получить сложнее, возможны проблемы с коммунальными услугами и переходом на кат мюлькийети. В новостройках с кат иртифакы обязательно узнайте, когда будет искан.'],
        ['Чем кат иртифакы отличается от кат мюлькийети?', 'Кат мюлькийети означает, что здание достроено и получен искан. Кат иртифакы — тапу на квартиру по проекту; после получения искана оно переоформляется в кат мюлькийети.'],
        ['Можно ли купить жильё, полученное продавцом в дар?', 'Да, но наследники дарителя могут позже подать иск. Нужно оценить, как продавец получил объект и положение других наследников, при необходимости проконсультироваться с юристом.'],
        ['Есть ли штраф за занижение цены в тапу?', 'Да. При выявлении заниженной цены недоплаченный сбор взыскивается с покупателя и продавца вместе со штрафом 100% и пеней.'],
        ['Если я куплю квартиру с арендатором, смогу ли его выселить?', 'Договор аренды сохраняет силу для нового собственника. Выселение по собственной нужде зависит от сроков и уведомлений по закону; не рассчитывайте, что арендатор съедет сразу.'],
        ['Что такое система безопасной оплаты в кадастре?', 'Сумма блокируется в банке и поступает продавцу после регистрации перехода права, а если сделка не состоялась — возвращается покупателю. Обязательна для сделок с декабря 2026 года.'],
        ['Зачем справка об отсутствии долга по взносам?', 'Долги продавца по взносам комплекса могут создать проблемы новому владельцу. Справку нужно получить у управляющей компании до сделки.'],
      ],
    },
  },
];
