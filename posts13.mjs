// Blog 13 (25.11.2026): Arsa mı, ev mi, tarla mı? Antalya gayrimenkul yatırımı rehberi (TR/EN/RU). Kaynak taslak: claude/blog-7-antalya-gayrimenkul-yatirimi-ne-almali.md
// Rakamlar (Caner onayı 25.11.2026): tapu harcı %4; döner sermaye 2026 büyükşehir ~6.680 TL (emlak blogları, resmi tutar Web-Tapu); DAK istisnası 2026 150.000 TL; konut kira istisnası 2026 58.000 TL (GVK Seri 332, PwC);
// emlak vergisi büyükşehir konut binde 2 / işyeri 4 / arsa 6 / arazi 2 (PwC); aracılık %2+KDV taraf başı (Yönetmelik m.20); amortisman TSKB Aralık 2024 (14–17 yıl). HER YIL GÜNCELLEYİN (ocak).
const A = (s, t) => `<a href="{{URL:areas}}${s}/">${t}</a>`;
const AR = (s, t) => `<a href="/en/area-guides/${s}/">${t}</a>`; // RU bölge sayfası yok
const B = (s, t) => `<a href="{{URL:blog}}${s}/">${t}</a>`;
const WA = (t) => `<a href="{{WA}}" target="_blank" rel="noopener">${t}</a>`;

export const POSTS13 = [
  {
    slug: 'antalya-gayrimenkul-yatirimi-arsa-mi-ev-mi', cat: 'yatirim', date: '2026-11-25', icon: '📈',
    tr: {
      title: 'Arsa mı, Ev mi, Tarla mı? Antalya’da Gayrimenkul Yatırımı Rehberi 2026',
      seo: 'Arsa mı, Ev mi, Tarla mı? Antalya Yatırım Rehberi 2026',
      desc: 'Antalya’da arsa mı, ev mi, tarla mı? Vade, kira getirisi, kredi, amortisman, imar, tapu harcı, emlak vergisi ve değer artış kazancı: 2026 rehberi.',
      html: `
<p>“Elimde birikim var; arsa mı alayım, ev mi, tarla mı?” Bu sorunun herkes için tek bir doğru cevabı yok. Doğru yatırım; ne beklediğinize (kira geliri mi, değer artışı mı), paranızı ne kadar süre bağlayabileceğinize, krediyle mi peşin mi alacağınıza ve alım satım masraflarıyla vergileri hesaba katıp katmadığınıza göre değişir. Bu rehberde Antalya’da gayrimenkul yatırımı yaparken bu soruları sırayla ele aldık.</p>
<h2>Neden hâlâ gayrimenkul?</h2>
<p>Toprak, dünyada yeniden üretilemeyen nadir varlıklardan biri. Nüfus arttıkça, şehirler büyüdükçe ve göç sürdükçe iyi konumdaki arsa ve konutun değeri uzun vadede korunur. Bu yüzden dünyada ve Türkiye’de büyük şirketler, köklü aileler ve kurumsal yatırımcılar servetlerinin önemli bir bölümünü hâlâ gayrimenkulde tutuyor. Gayrimenkul hem kira geliriyle düzenli nakit, hem de değer artışıyla enflasyona karşı koruma sağlayabiliyor.</p>
<p>Ama gayrimenkul her koşulda kazandırmaz. Yanlış yerden, yanlış fiyattan ya da yanlış vadeyle alınan bir mülk; acil satış, zamansız satış ya da kötü pazarlama yüzünden zarar ettirebilir. Bu rehberin amacı, bu hataları baştan önlemek.</p>
<h2>1. Önce beklentinizi belirleyin</h2>
<p>Yatırıma başlamadan önce kendinize şu soruyu sorun: <b>Bu yatırımdan ne bekliyorum?</b></p>
<table><thead><tr><th>Beklenti</th><th>Uygun mülk türü</th><th>Dikkat edilecekler</th></tr></thead><tbody>
<tr><td>Düzenli kira geliri (pasif gelir)</td><td>Talebi yüksek bölgede 1+1, 2+1 daire; site içi, ulaşıma ve okula yakın</td><td>Kira getirisi, boş kalma süresi, aidat, kiracı profili</td></tr>
<tr><td>Kısa vadede değer artışı (1 yıldan kısa)</td><td>Proje başı ya da inşaat halindeki konut, fiyatı piyasanın altında kalmış mülk</td><td>Alım satım masrafları, değer artış kazancı vergisi, kolay satılabilirlik</td></tr>
<tr><td>Orta vadede değer artışı (1–5 yıl)</td><td>Gelişen bölgelerde yeni konut, teslime yakın projeler</td><td>Bölgenin altyapı ve ulaşım planları, projenin teslim güvencesi</td></tr>
<tr><td>Uzun vadeli birikim (5 yıl ve üzeri)</td><td>İmar potansiyeli olan arsa, şehrin büyüme aksındaki tarla, villa arsası</td><td>İmar planı, yol, altyapı, hisse durumu, likidite</td></tr>
</tbody></table>
<p>Beklentiniz netleşmeden alınan mülk, çoğu zaman ne iyi kira getirir ne de iyi prim yapar.</p>
<h2>2. Ev mi? Kira geliri ve amortisman hesabı</h2>
<p>Konut, kira geliri isteyen yatırımcı için en bilinen seçenek. Burada temel ölçü <b>amortisman süresi</b>, yani evin kendini kira geliriyle kaç yılda ödediği:</p>
<p><b>Amortisman süresi = Satın alma fiyatı ÷ Yıllık kira geliri</b></p>
<p>Örnek: 5.000.000 TL’ye alınan ve aylık 25.000 TL kiraya verilen bir daire yılda 300.000 TL kira getirir. 5.000.000 ÷ 300.000 = yaklaşık <b>16,7 yıl</b>. Yıllık brüt kira getirisi ise yaklaşık %6’dır.</p>
<p>TSKB Gayrimenkul Değerleme’nin Aralık 2024’te yayımlanan araştırmasına göre Türkiye’de konutun ortalama amortisman süresi 16–20 yıl, Antalya’nın da aralarında bulunduğu büyük illerde ise 14–17 yıl aralığındaydı. Bu süreyi kısaltan şeyler: doğru fiyattan alım, kiracı talebinin yüksek olduğu bölge, boş kalmayan bir ev ve doğru başlangıç kirası.</p>
<p>Unutmayın: amortisman hesabı yalnızca kirayı gösterir. Konutun aynı dönemde kazandığı değer artışı da toplam getirinize eklenir.</p>
<p><b>Antalya’da kira için öne çıkan bölgeler:</b> ${A('aksu-altintas', 'Aksu Altıntaş')}, Muratpaşa (${A('lara-guzeloba', 'Lara ve Güzeloba')}, Çağlayan, ${A('fener', 'Fener')}), ${A('konyaalti', 'Konyaaltı')} (Hurma, Liman) ve merkeze yakın Kepez. Ayrıntılar için ${B('antalya-evimi-kiraya-vermek-istiyorum', 'Antalya’da evinizi kiraya vermek')} rehberimize bakabilirsiniz.</p>
<h2>3. Krediyle mi alacaksınız? Hesap ayrı yapılır</h2>
<p>Krediyle alınan yatırım evinde soru değişir: <b>Kira, kredi taksitini karşılıyor mu?</b></p>
<ul class="ticks">
<li>Kira taksitten düşükse aradaki farkı her ay cebinizden ödersiniz. Bu durumda yatırımın kârı, büyük ölçüde değer artışına bağlıdır.</li>
<li>Faiz yüksek dönemlerde uzun vadeli kredi, toplam maliyeti ciddi ölçüde artırır. Kredi maliyetini değer artışı beklentinizle karşılaştırın.</li>
<li>Bankaların kullandırdığı kredi oranı; evin değerine ve enerji sınıfına göre değişir. A ve B enerji sınıfındaki konutlarda kullanılabilecek kredi oranı daha yüksektir.</li>
<li>Krediyle alınan evin mutlaka krediye uygun (iskânlı, tapu durumu düzgün) olması gerekir; bu, ileride satarken de alıcı kitlenizi genişletir.</li>
</ul>
<h2>4. Arsa mı, tarla mı? İmar planı her şeyi değiştirir</h2>
<p>Arsa ve tarla kira getirmez; ama doğru yerden alındığında uzun vadede en yüksek değer artışını sağlayabilen yatırımlardır. Buradaki anahtar kelime: <b>imar.</b></p>
<ul class="ticks">
<li><b>Tarla (tarım arazisi):</b> Henüz imarı olmayan, tarımsal niteliktedir. Şehrin büyüme yönündeki bir tarla, imar planına girdiğinde değeri kat kat artabilir. Ama bu süreç yıllar sürebilir; hiç gerçekleşmeyebilir de.</li>
<li><b>İmarlı arsa:</b> Üzerine yapı yapılabilir. Değer; imar durumu (emsal, kat adedi, konut ya da ticari), yola cephe ve altyapıyla belirlenir.</li>
<li><b>Kat karşılığı potansiyeli:</b> İyi konumda, imarlı bir arsa müteahhide kat karşılığı verilerek arsa sahibine birden fazla daire kazandırabilir.</li>
</ul>
<p>Arsa ve tarla alırken mutlaka kontrol edin:</p>
<ul class="ticks">
<li>Belediyeden imar durumu belgesi ve plan notları</li>
<li>Yola cephe, elektrik ve su altyapısı</li>
<li>Hisseli mi, müstakil parsel mi? Hisseli tapularda satış ve kullanım çok daha zordur; tarım arazilerinde bölünme ve hisse satışı yasal sınırlamalara tabidir.</li>
<li>İmar uygulamasında parselin bir bölümü yol, park gibi kamu alanlarına ayrılabilir (düzenleme ortaklık payı). Ayrıca imar planı değişikliğiyle değeri artan taşınmazlarda belediye “değer artış payı” talep edebilir.</li>
<li>Arsa ve tarlanın alıcı kitlesi daha dardır; alıcı çoğu zaman kredi kullanamaz, satış süresi uzundur.</li>
</ul>
<p><b>Antalya’da arsa yatırımında öne çıkan bölgeler:</b> ${A('dosemealti', 'Döşemealtı')} (${A('altinkale-yesilbayir', 'Altınkale, Yeşilbayır')} ve çevresi), Aksu ve Kundu çevresi, Serik (${A('belek', 'Belek')}, ${A('kadriye', 'Kadriye')}) hattı ve şehrin büyüme aksındaki bölgeler. Hangi parselin gerçekten potansiyeli olduğunu imar planı, ulaşım projeleri ve bölgedeki son satışlarla birlikte değerlendirmek gerekir.</p>
<h2>5. Vadeye göre doğru mülk: kolay satılabilirlik</h2>
<p>Yatırımın en çok gözden kaçan yanı <b>likidite</b>, yani ihtiyaç halinde ne kadar hızlı ve değerinde satılabildiği.</p>
<ul class="ticks">
<li><b>Kısa vade (1 yıldan kısa):</b> Prim beklentisi tek başına yetmez; alım ve satım masrafları ile vergi, kazancın önemli bir kısmını götürebilir (aşağıdaki hesaba bakın). Kısa vadede en kolay satılan mülkler; talebi yüksek bölgedeki 1+1 ve 2+1 daireler, site içindeki ve krediye uygun konutlardır. Sık ve sürekli alım satım yapanların kazancı vergi açısından ticari kazanç sayılabilir; bunu da göz önünde bulundurun.</li>
<li><b>Orta vade (1–5 yıl):</b> Gelişen bölgelerde doğru fiyattan alınan yeni konutlar ve teslime yakın projeler öne çıkar. Antalya’da Altıntaş bunun son yıllardaki en belirgin örneklerinden biri.</li>
<li><b>Uzun vade (5 yıl ve üzeri):</b> Arsa, tarla ve villa arsası gibi değer artışı zamana yayılan yatırımlar. 5 yıldan uzun elde tutulan gayrimenkulde değer artış kazancı vergisi doğmaz.</li>
</ul>
<h2>6. Masrafları ve vergileri baştan hesaplayın</h2>
<p>Birçok yatırımcı yalnızca alış ve satış fiyatına bakar; ama gerçek kâr, masraflar ve vergiler düşüldükten sonra ortaya çıkar.</p>
<h3>Alım ve satımda</h3>
<ul class="ticks">
<li><b>Tapu harcı:</b> Tapudaki satış bedelinin toplam <b>%4</b>’ü. Kural olarak alıcı %2, satıcı %2 öder; uygulamada taraflar farklı anlaşabilir.</li>
<li><b>Döner sermaye ücreti:</b> Tapu Müdürlüğü’nün işlem ücreti. 2026’da büyükşehirlerde satış işlemi için yaklaşık <b>6.680 TL</b> (KDV dahil). Kesin tutar Web-Tapu başvurusunda hesaplanır.</li>
<li><b>Aracılık hizmet bedeli:</b> Bir emlak firması aracılık ediyorsa, satışta yasal üst sınır alıcı ve satıcı için ayrı ayrı satış bedelinin <b>%2’si + KDV</b>’dir.</li>
<li><b>Diğer:</b> Zorunlu deprem sigortası (DASK), krediyle alımda ekspertiz, yabancı alıcılarda tercüman ve değerleme raporu.</li>
</ul>
<p><b>Örnek hesap:</b> 5.000.000 TL’lik bir daireyi alıp kısa süre sonra satarsanız; alışta %2 tapu harcı ve %2 + KDV aracılık bedeli, satışta yine %2 tapu harcı ve %2 + KDV aracılık bedeli ödersiniz. Bu, döner sermaye ve diğer masraflar hariç toplam yaklaşık <b>%8,8</b>’lik bir maliyet demek. Yani kısa vadede bu dairenin yalnızca masrafları karşılaması için yaklaşık 440.000 TL değer kazanması gerekir; üstüne değer artış kazancı vergisi gelir.</p>
<h3>Satışta: değer artış kazancı vergisi</h3>
<p>Satın aldığınız bir gayrimenkulü <b>5 yıl dolmadan satarsanız</b>, elde ettiğiniz kazanç “değer artış kazancı” olarak gelir vergisine tabidir.</p>
<ul class="ticks">
<li>2026 yılı satışları için <b>150.000 TL</b> istisna uygulanır; bu tutarı aşan kazanç beyan edilir.</li>
<li>Vergi, gelir vergisi dilimlerine göre artan oranlı hesaplanır.</li>
<li>Alış maliyeti, belirli koşullarla enflasyona göre (Yİ-ÜFE) güncellenebilir; bu da ödenecek vergiyi azaltabilir.</li>
<li>Satış, izleyen yılın mart ayında beyan edilir.</li>
</ul>
<p>5 yılı doldurduktan sonra yapılan satışta bu vergi doğmaz. Bu yüzden satış zamanlaması, yatırımın net kârını doğrudan değiştirir.</p>
<h3>Elde tutarken: yıllık vergiler</h3>
<ul class="ticks">
<li><b>Emlak vergisi:</b> Her yıl belediyeye, mayıs ve kasım aylarında iki taksitte ödenir. Antalya gibi büyükşehirlerde oranlar: konutta <b>binde 2</b>, işyerinde <b>binde 4</b>, arsada <b>binde 6</b>, tarlada (arazi) <b>binde 2</b>. Arsanın konuttan üç kat yüksek oranla vergilendirildiğine dikkat edin.</li>
<li><b>Çevre temizlik vergisi:</b> Konut ve işyerlerinde belediye tarafından alınır; konutta genellikle su faturasıyla birlikte tahsil edilir. Boş arsa ve tarlada bu vergi yoktur.</li>
<li><b>Site aidatı ve bakım:</b> Vergi değildir ama kira getirisini doğrudan etkiler.</li>
</ul>
<h3>Kiraya verdiğinizde</h3>
<ul class="ticks">
<li><b>Şahıs olarak:</b> Konut kira geliri yıllık gelir vergisi beyannamesiyle mart ayında beyan edilir. 2026 yılında elde edilen konut kira gelirleri için <b>58.000 TL</b>’lik istisna uygulanır; istisnanın koşulları vardır. Giderler gerçek ya da götürü (%15) yöntemle düşülebilir. Vergi, gelir dilimlerine göre artan oranlıdır.</li>
<li><b>Şirket olarak:</b> Kira geliri şirketin kazancına eklenir ve kurumlar vergisine tabidir. Kiralananın konut ya da işyeri olmasına ve kiracının durumuna göre KDV ve stopaj uygulanabilir. Şahsi mi şirket üzerinden mi yatırım yapacağınıza mali müşavirinizle birlikte karar vermeniz en doğrusu.</li>
</ul>
<p>Kira artışının yasal sınırları için ${B('kira-artis-orani', 'kira artış oranı sayfamızı')} takip edebilirsiniz.</p>
<h2>7. Para kaybettiren hatalar</h2>
<p>Gayrimenkulde zarar çoğu zaman mülkün kendisinden değil, yanlış kararlardan doğar:</p>
<ul class="ticks">
<li><b>Acil satış:</b> Nakit ihtiyacıyla aceleyle satılan mülk, neredeyse her zaman değerinin altında gider.</li>
<li><b>Zamansız satış:</b> 5 yıl dolmadan yapılan satış vergi doğurur; piyasanın durgun olduğu dönemde yapılan satış ise fiyat kaybettirir.</li>
<li><b>Yanlış fiyat:</b> Piyasanın üzerinde fiyatlanan mülk ilanda eskir; sonunda çoğu zaman piyasanın altında satılır.</li>
<li><b>Zayıf pazarlama:</b> Telefonla çekilmiş birkaç fotoğraf ve tek bir ilan, doğru alıcıya ulaşmaz.</li>
<li><b>Kontrolsüz alım:</b> İmar durumu, tapu, iskân ve hisse kontrolü yapılmadan alınan mülk, satarken sorun çıkarır.</li>
</ul>
<h2>Neden ACC HOMES ile yatırım yapmalısınız?</h2>
<p>Doğru gayrimenkul yatırımı; doğru bölge, doğru mülk, doğru fiyat ve doğru zamanlamanın birleşimidir. ACC HOMES olarak Antalya’da yatırımcılara alımdan satışa kadar <b>gayrimenkul yatırım danışmanlığı</b> veriyoruz.</p>
<ul class="ticks">
<li><b>Beklentinize göre portföy:</b> Kira geliri, kısa vadeli prim ya da uzun vadeli birikim; hedefinize uygun mülkleri öneriyoruz.</li>
<li><b>Veriye dayalı fiyat analizi:</b> Bölgedeki emsal satış ve kira verileriyle, aldığınız mülkün gerçek değerini ve amortisman süresini birlikte hesaplıyoruz.</li>
<li><b>Kapalı portföy ve yetkili projeler:</b> İlana çıkmadan satılan kapalı portföylere ve yetkili olduğumuz <a href="{{URL:projects}}">projelere</a> erişim.</li>
<li><b>Arsa ve imar değerlendirmesi:</b> Arsa ve tarla alımında imar durumu, plan notları ve bölgenin gelişim potansiyelini birlikte inceliyoruz.</li>
<li><b>Masraf ve vergi planlaması:</b> Alım satım masraflarını ve satış zamanlamasını baştan planlıyor, vergi konularında mali müşavirinizle koordineli çalışıyoruz.</li>
<li><b>Satarken güçlü pazarlama:</b> Zamanı geldiğinde mülkünüz 12 dilde web sitemizde, ulusal ve uluslararası portallarda, profesyonel fotoğraf ve videoyla, yaklaşık 50 iş ortağımızın aynı anda paylaşımıyla pazarlanıyor. Acele satış yerine doğru alıcıya, değerinde satış.</li>
<li><b>Kiralama ve mülk yönetimi:</b> Kira geliri için aldığınız evi kiraya veriyor, isterseniz tüm yönetimini üstleniyoruz.</li>
<li><b>Güven:</b> Kurucu ve broker Ali Caner Can liderliğinde, ACC Plaza’da yaklaşık 50 kişilik ekip; Google’da 470’i aşkın yorum ve 4,9 puan.</li>
</ul>
<p><i>Bu yazı genel bilgilendirme amaçlıdır, yatırım tavsiyesi değildir. Vergi tutarları ve oranları her yıl güncellenir; kendi durumunuz için mali müşavirinize danışmanızı öneririz.</i></p>
<h2>Yatırımınızı birlikte planlayalım</h2>
<p>Antalya’da gayrimenkul yatırımı yapmayı düşünüyorsanız, beklentinizi ve bütçenizi konuşalım; size uygun bölgeyi, mülk türünü ve vadeyi birlikte belirleyelim: ${WA('WhatsApp’tan yatırım görüşmesi talep edin →')}</p>`,
      faq: [
        ['Arsa mı ev mi daha kârlı?', 'Beklentinize bağlıdır. Düzenli kira geliri istiyorsanız konut; uzun vadede yüksek değer artışı bekliyor ve paranızı yıllarca bağlayabiliyorsanız imar potansiyeli olan arsa daha uygun olabilir.'],
        ['Ev kendini kaç yılda amorti eder?', 'Satın alma fiyatını yıllık kira gelirine bölerek hesaplanır. TSKB’nin 2024 araştırmasına göre Antalya’nın da aralarında bulunduğu büyük illerde bu süre 14–17 yıl aralığındaydı.'],
        ['Gayrimenkulü 5 yıl dolmadan satarsam vergi öder miyim?', 'Evet, kazancınız 2026 için 150.000 TL’lik istisnayı aşıyorsa değer artış kazancı vergisi ödersiniz. 5 yıl dolduktan sonra yapılan satışta bu vergi yoktur.'],
        ['Ev alırken hangi masraflar çıkar?', 'Tapu harcı (toplam %4), döner sermaye ücreti, aracılık hizmet bedeli (taraf başına en fazla %2 + KDV), DASK ve krediyle alımda ekspertiz ücreti.'],
        ['Arsa ve tarlanın yıllık vergisi var mı?', 'Evet, emlak vergisi. Büyükşehirlerde arsada binde 6, tarlada binde 2 oranında, her yıl iki taksitte belediyeye ödenir.'],
        ['Kira gelirim için vergi öder miyim?', 'Şahıs olarak 2026’da elde edilen konut kira gelirinin 58.000 TL’yi aşan kısmı, koşullara bağlı olarak beyan edilir ve vergilendirilir. Şirket olarak kiraya verirseniz gelir kurumlar vergisine tabidir.'],
      ],
    },
    en: {
      title: 'Land, Apartment or Farmland? A Guide to Property Investment in Antalya 2026',
      seo: 'Land or Apartment? Antalya Property Investment Guide 2026',
      desc: 'Land, apartment or farmland in Antalya? Horizon, rental yield, mortgages, payback, zoning, title deed fees, property tax and capital gains: 2026 guide.',
      html: `
<p>“I have some savings: should I buy land, an apartment or farmland?” There is no single right answer for everyone. The right investment depends on what you expect (rental income or capital growth), how long you can tie up your money, whether you buy with a mortgage or in cash, and whether you factor in transaction costs and taxes. This guide walks through these questions for property investment in Antalya.</p>
<h2>Why property, still?</h2>
<p>Land is one of the few assets that cannot be produced again. As populations grow, cities expand and migration continues, well-located land and homes hold their value over the long term. That is why large companies, established families and institutional investors around the world and in Turkey still keep a large share of their wealth in property. Real estate can provide both regular cash through rent and protection against inflation through capital growth.</p>
<p>But property does not win in every situation. A property bought in the wrong place, at the wrong price or with the wrong time horizon can lose money through a forced sale, badly timed sale or poor marketing. This guide aims to help you avoid those mistakes from the start.</p>
<h2>1. Start with your goal</h2>
<p>Before investing, ask yourself: <b>what do I expect from this investment?</b></p>
<table><thead><tr><th>Goal</th><th>Suitable property</th><th>What to watch</th></tr></thead><tbody>
<tr><td>Regular rental income (passive income)</td><td>1+1 or 2+1 apartment in a high-demand area; gated complex, close to transport and schools</td><td>Rental yield, vacancy, service charges, tenant profile</td></tr>
<tr><td>Short-term capital growth (under 1 year)</td><td>Off-plan or under-construction homes, property priced below market</td><td>Transaction costs, capital gains tax, ease of resale</td></tr>
<tr><td>Medium-term growth (1–5 years)</td><td>New homes in developing areas, projects close to completion</td><td>Infrastructure and transport plans, delivery guarantees</td></tr>
<tr><td>Long-term wealth (5 years and more)</td><td>Land with zoning potential, farmland on the city’s growth corridor, villa plots</td><td>Zoning plan, road access, utilities, shared title, liquidity</td></tr>
</tbody></table>
<p>A property bought before the goal is clear often delivers neither good rent nor good growth.</p>
<h2>2. An apartment? Rental income and payback period</h2>
<p>Homes are the best-known choice for investors who want rental income. The key measure is the <b>payback period</b>: how many years of rent it takes to pay back the purchase price.</p>
<p><b>Payback period = Purchase price ÷ Annual rent</b></p>
<p>Example: an apartment bought for TRY 5,000,000 and let for TRY 25,000 a month earns TRY 300,000 a year. 5,000,000 ÷ 300,000 ≈ <b>16.7 years</b>, a gross rental yield of about 6%.</p>
<p>According to research by TSKB Real Estate Appraisal published in December 2024, the average payback period for homes in Turkey was 16–20 years, and 14–17 years in large cities including Antalya. What shortens it: buying at the right price, an area with strong tenant demand, minimal vacancy and the right starting rent.</p>
<p>Remember that the payback period only measures rent. Any increase in the home’s value over the same period adds to your total return.</p>
<p><b>Strong rental areas in Antalya:</b> ${A('aksu-altintas', 'Altıntaş (Aksu)')}, Muratpaşa (${A('lara-guzeloba', 'Lara and Güzeloba')}, Çağlayan, ${A('fener', 'Fener')}), ${A('konyaalti', 'Konyaaltı')} (Hurma, Liman) and central Kepez. See our ${B('antalya-evimi-kiraya-vermek-istiyorum', 'guide to renting out your home in Antalya')}.</p>
<h2>3. Buying with a mortgage? Run the numbers separately</h2>
<p>With a mortgage, the question changes: <b>does the rent cover the monthly instalment?</b></p>
<ul class="ticks">
<li>If the rent is lower than the instalment, you pay the difference every month. The profit then depends largely on capital growth.</li>
<li>When interest rates are high, a long-term loan raises the total cost significantly. Compare the cost of credit with your expected growth.</li>
<li>The loan-to-value ratio banks offer depends on the property’s value and energy class; homes with an A or B energy certificate can qualify for a higher ratio.</li>
<li>A home bought with a mortgage must be eligible for one (occupancy permit, clean title). This also widens your pool of buyers when you sell.</li>
</ul>
<h2>4. Land or farmland? Zoning changes everything</h2>
<p>Land and farmland earn no rent, but bought in the right place they can deliver the highest capital growth over the long term. The key word is <b>zoning.</b></p>
<ul class="ticks">
<li><b>Farmland:</b> agricultural land without zoning. Farmland on the city’s growth path can multiply in value once it enters the zoning plan, but this can take years, or may never happen.</li>
<li><b>Zoned land:</b> can be built on. Its value depends on the zoning (floor area ratio, number of storeys, residential or commercial), road frontage and utilities.</li>
<li><b>Flat-for-land potential:</b> a well-located zoned plot can be given to a developer in exchange for several finished apartments.</li>
</ul>
<p>When buying land or farmland, always check:</p>
<ul class="ticks">
<li>The zoning certificate and plan notes from the municipality</li>
<li>Road frontage, electricity and water</li>
<li>Whether the title is shared or a separate parcel. Shared titles are much harder to sell and use, and subdividing or selling shares of agricultural land is legally restricted.</li>
<li>In zoning, part of the parcel may be allocated to roads and parks (the land readjustment share), and municipalities can levy a “value increase share” on properties that gain value from a plan change.</li>
<li>Land has a narrower pool of buyers, who often cannot use a mortgage, so sales take longer.</li>
</ul>
<p><b>Areas of note for land in Antalya:</b> ${A('dosemealti', 'Döşemealtı')} (${A('altinkale-yesilbayir', 'Altınkale, Yeşilbayır')} and around), the Aksu and Kundu area, the Serik (${A('belek', 'Belek')}, ${A('kadriye', 'Kadriye')}) corridor and the city’s other growth axes. Which parcel really has potential has to be judged with the zoning plan, transport projects and recent sales in the area.</p>
<h2>5. The right property for your time horizon: liquidity</h2>
<p>The most overlooked side of investing is <b>liquidity</b>: how quickly, and at what value, a property can be sold when you need to.</p>
<ul class="ticks">
<li><b>Short term (under 1 year):</b> expected growth alone is not enough; buying and selling costs plus tax can take a large share of the gain (see the calculation below). The easiest properties to resell quickly are 1+1 and 2+1 apartments in high-demand areas, in gated complexes and eligible for a mortgage. Frequent, continuous buying and selling may be treated as commercial income for tax purposes.</li>
<li><b>Medium term (1–5 years):</b> new homes bought at the right price in developing areas and projects close to completion stand out. Altıntaş has been one of the clearest examples in Antalya in recent years.</li>
<li><b>Long term (5 years and more):</b> land, farmland and villa plots, where growth builds over time. No capital gains tax arises on property held for more than five years.</li>
</ul>
<h2>6. Calculate costs and taxes from the start</h2>
<p>Many investors look only at the buying and selling price, but the real profit appears after costs and taxes.</p>
<h3>When buying and selling</h3>
<ul class="ticks">
<li><b>Title deed fee:</b> a total of <b>4%</b> of the declared sale price, normally 2% paid by the buyer and 2% by the seller, though the parties may agree otherwise.</li>
<li><b>Land registry service fee (döner sermaye):</b> about <b>TRY 6,680</b> for a sale in metropolitan cities in 2026 (VAT included). The exact amount is calculated in the Web-Tapu application.</li>
<li><b>Agency fee:</b> where an agency is involved, the legal cap on a sale is <b>2% + VAT</b> of the price for the buyer and the seller separately.</li>
<li><b>Other:</b> compulsory earthquake insurance (DASK), a valuation for mortgage purchases, and a translator and valuation report for foreign buyers.</li>
</ul>
<p><b>Example:</b> if you buy a TRY 5,000,000 apartment and sell it soon after, you pay a 2% title fee and 2% + VAT agency fee when buying, and the same again when selling. That is about <b>8.8%</b> in total, before the registry fee and other costs. In other words, the apartment must gain about TRY 440,000 in value just to cover costs in the short term, and capital gains tax comes on top.</p>
<h3>When selling: capital gains tax</h3>
<p>If you sell a property <b>within five years</b> of buying it, the gain is subject to income tax as a “value increase gain”.</p>
<ul class="ticks">
<li>For sales in 2026, an exemption of <b>TRY 150,000</b> applies; gains above this are declared.</li>
<li>Tax is calculated at the progressive income tax rates.</li>
<li>Under certain conditions, the purchase cost can be indexed to inflation (PPI), which can reduce the tax.</li>
<li>The sale is declared in March of the following year.</li>
</ul>
<p>No such tax arises on a sale after five years, so timing directly affects your net profit.</p>
<h3>While holding: annual taxes</h3>
<ul class="ticks">
<li><b>Property tax:</b> paid to the municipality every year in two instalments, in May and November. In metropolitan cities such as Antalya the rates are <b>0.2%</b> for homes, <b>0.4%</b> for commercial buildings, <b>0.6%</b> for land plots and <b>0.2%</b> for farmland. Note that land plots are taxed at three times the rate of homes.</li>
<li><b>Environmental cleaning tax:</b> charged by the municipality on homes and commercial premises, for homes usually with the water bill. It does not apply to vacant land or farmland.</li>
<li><b>Service charges and maintenance:</b> not taxes, but they directly affect your rental yield.</li>
</ul>
<h3>When you rent it out</h3>
<ul class="ticks">
<li><b>As an individual:</b> residential rental income is declared on the annual income tax return in March. For residential rent earned in 2026, an exemption of <b>TRY 58,000</b> applies, subject to conditions. Expenses can be deducted on an actual or lump-sum (15%) basis, and tax is progressive.</li>
<li><b>As a company:</b> rental income forms part of the company’s profit and is subject to corporate tax. Depending on whether the property is residential or commercial and on the tenant, VAT and withholding tax may apply. Decide with your accountant whether to invest personally or through a company.</li>
</ul>
<h2>7. Mistakes that lose money</h2>
<p>Losses in property usually come not from the property itself but from wrong decisions:</p>
<ul class="ticks">
<li><b>Forced sales:</b> a property sold in a hurry for cash almost always goes below its value.</li>
<li><b>Badly timed sales:</b> selling within five years triggers tax; selling in a slow market costs price.</li>
<li><b>Wrong price:</b> a property priced above the market goes stale and often ends up selling below it.</li>
<li><b>Weak marketing:</b> a few phone photos and a single listing do not reach the right buyer.</li>
<li><b>Unchecked purchases:</b> buying without checking zoning, title, occupancy permit and shared ownership causes problems when you sell.</li>
</ul>
<h2>Why invest with ACC HOMES?</h2>
<p>A good property investment combines the right area, the right property, the right price and the right timing. ACC HOMES provides <b>property investment advisory</b> to investors in Antalya, from purchase to sale.</p>
<ul class="ticks">
<li><b>A portfolio matched to your goal:</b> rental income, short-term growth or long-term wealth, we suggest properties that fit.</li>
<li><b>Data-based pricing:</b> using comparable sales and rents, we work out a property’s real value and payback period with you.</li>
<li><b>Off-market properties and authorised projects:</b> access to properties sold without public listings and to <a href="{{URL:projects}}">projects</a> we represent.</li>
<li><b>Land and zoning review:</b> for land and farmland we review zoning, plan notes and growth potential together.</li>
<li><b>Cost and tax planning:</b> we plan transaction costs and sale timing from the start and work alongside your accountant on tax.</li>
<li><b>Strong marketing when you sell:</b> your property is marketed on our website in 12 languages, on national and international portals, with professional photos and video, and shared at the same time by about 50 partners. A sale at the right value to the right buyer, not a rushed one.</li>
<li><b>Lettings and property management:</b> we let the home you bought for income and can manage it fully if you wish.</li>
<li><b>Trust:</b> led by founder and broker Ali Caner Can, a team of about 50 at ACC Plaza; more than 470 Google reviews with a 4.9 rating.</li>
</ul>
<p><i>This article is for general information and is not investment advice. Tax amounts and rates are updated every year; please consult your accountant about your own situation.</i></p>
<h2>Let’s plan your investment together</h2>
<p>If you are thinking of investing in property in Antalya, let’s talk about your goals and budget and choose the right area, property type and time horizon together: ${WA('request an investment meeting on WhatsApp →')}</p>`,
      faq: [
        ['Is land or an apartment more profitable?', 'It depends on your goal. For regular rental income, a home; if you expect strong long-term growth and can tie up your money for years, land with zoning potential may suit you better.'],
        ['How many years does a home take to pay for itself?', 'Divide the purchase price by the annual rent. According to TSKB research from 2024, the period was 14–17 years in large cities including Antalya.'],
        ['Do I pay tax if I sell within five years?', 'Yes, if your gain exceeds the TRY 150,000 exemption for 2026, capital gains tax applies. There is no such tax on sales after five years.'],
        ['What costs are there when buying a home?', 'Title deed fee (4% in total), land registry service fee, agency fee (up to 2% + VAT per party), DASK insurance and a valuation fee when buying with a mortgage.'],
        ['Is there an annual tax on land and farmland?', 'Yes, property tax. In metropolitan cities it is 0.6% for land plots and 0.2% for farmland, paid to the municipality in two instalments a year.'],
        ['Do I pay tax on rental income?', 'As an individual, residential rent earned in 2026 above TRY 58,000 is declared and taxed, subject to conditions. If you let through a company, the income is subject to corporate tax.'],
      ],
    },
    ru: {
      title: 'Участок, квартира или сельхозземля? Гид по инвестициям в недвижимость Анталии 2026',
      seo: 'Участок или квартира? Инвестиции в недвижимость Анталии 2026',
      desc: 'Участок, квартира или сельхозземля в Анталии? Сроки, доходность аренды, ипотека, окупаемость, зонирование, сбор за тапу, налоги: гид 2026.',
      html: `
<p>«У меня есть сбережения: купить участок, квартиру или сельхозземлю?» Единого правильного ответа для всех нет. Правильная инвестиция зависит от того, чего вы ждёте (дохода от аренды или роста стоимости), на какой срок готовы вложить деньги, покупаете ли вы в ипотеку или за наличные и учитываете ли расходы на сделку и налоги. В этом гиде мы по порядку разбираем эти вопросы для инвестиций в недвижимость Анталии.</p>
<h2>Почему по-прежнему недвижимость?</h2>
<p>Земля — один из немногих активов, которые невозможно произвести заново. С ростом населения, расширением городов и миграцией хорошо расположенные участки и жильё сохраняют стоимость в долгосрочной перспективе. Поэтому крупные компании, известные семьи и институциональные инвесторы в мире и в Турции по-прежнему держат значительную часть капитала в недвижимости. Недвижимость может давать и регулярный доход от аренды, и защиту от инфляции за счёт роста стоимости.</p>
<p>Но недвижимость приносит прибыль не всегда. Объект, купленный не в том месте, не по той цене или не на тот срок, может принести убыток из-за срочной продажи, продажи не вовремя или слабого маркетинга. Цель этого гида — помочь избежать таких ошибок с самого начала.</p>
<h2>1. Сначала определите цель</h2>
<p>Перед покупкой спросите себя: <b>чего я жду от этой инвестиции?</b></p>
<table><thead><tr><th>Цель</th><th>Подходящий объект</th><th>На что обратить внимание</th></tr></thead><tbody>
<tr><td>Регулярный доход от аренды (пассивный доход)</td><td>Квартира 1+1 или 2+1 в районе с высоким спросом; комплекс, рядом транспорт и школы</td><td>Доходность, простой, взносы, профиль арендатора</td></tr>
<tr><td>Быстрый рост стоимости (до 1 года)</td><td>Жильё на старте или на этапе строительства, объект ниже рынка</td><td>Расходы на сделку, налог на прирост стоимости, ликвидность</td></tr>
<tr><td>Рост в среднесрочной перспективе (1–5 лет)</td><td>Новое жильё в развивающихся районах, проекты близкие к сдаче</td><td>Планы инфраструктуры и транспорта, гарантии сдачи</td></tr>
<tr><td>Долгосрочное накопление (от 5 лет)</td><td>Участок с потенциалом зонирования, сельхозземля на оси роста города, участок под виллу</td><td>План зонирования, дорога, коммуникации, долевая собственность, ликвидность</td></tr>
</tbody></table>
<p>Объект, купленный без ясной цели, часто не даёт ни хорошей аренды, ни хорошего роста.</p>
<h2>2. Квартира? Аренда и срок окупаемости</h2>
<p>Жильё — самый известный выбор для инвестора, которому нужен доход от аренды. Главный показатель — <b>срок окупаемости</b>: за сколько лет аренда возвращает цену покупки.</p>
<p><b>Срок окупаемости = Цена покупки ÷ Годовая аренда</b></p>
<p>Пример: квартира за 5 000 000 TRY, сданная за 25 000 TRY в месяц, приносит 300 000 TRY в год. 5 000 000 ÷ 300 000 ≈ <b>16,7 года</b>, валовая доходность около 6% в год.</p>
<p>По исследованию TSKB Gayrimenkul Değerleme (декабрь 2024 года), средний срок окупаемости жилья в Турции составлял 16–20 лет, а в крупных городах, включая Анталию, — 14–17 лет. Срок сокращают покупка по правильной цене, район с высоким спросом, минимальный простой и правильная начальная аренда.</p>
<p>Помните: срок окупаемости учитывает только аренду. Рост стоимости жилья за тот же период добавляется к общей доходности.</p>
<p><b>Районы Анталии с сильным спросом на аренду:</b> ${AR('aksu-altintas', 'Алтынташ (Аксу)')}, Муратпаша (${AR('lara-guzeloba', 'Лара и Гюзелоба')}, Чаглаян, ${AR('fener', 'Фенер')}), ${AR('konyaalti', 'Коньяалты')} (Хурма, Лиман) и центральный Кепез. Подробнее — в нашем ${B('antalya-evimi-kiraya-vermek-istiyorum', 'гиде по сдаче жилья в Анталии')}.</p>
<h2>3. Покупаете в ипотеку? Считайте отдельно</h2>
<p>При ипотеке вопрос меняется: <b>покрывает ли аренда ежемесячный платёж?</b></p>
<ul class="ticks">
<li>Если аренда ниже платежа, разницу вы доплачиваете каждый месяц, и прибыль зависит в основном от роста стоимости.</li>
<li>При высоких ставках долгосрочный кредит заметно увеличивает общую стоимость. Сравните стоимость кредита с ожидаемым ростом.</li>
<li>Доля кредита, которую дают банки, зависит от стоимости и энергетического класса жилья; для классов A и B она выше.</li>
<li>Жильё должно подходить под ипотеку (искан, чистое тапу) — это расширит круг покупателей и при продаже.</li>
</ul>
<h2>4. Участок или сельхозземля? Всё решает зонирование</h2>
<p>Участки и сельхозземли не приносят аренды, но при правильном выборе могут дать самый высокий рост стоимости в долгосрочной перспективе. Ключевое слово — <b>зонирование (имар).</b></p>
<ul class="ticks">
<li><b>Сельхозземля (тарла):</b> земля без зонирования. Тарла на оси роста города может многократно подорожать после включения в план застройки, но это может занять годы или не произойти вовсе.</li>
<li><b>Участок с зонированием (арса):</b> на нём можно строить. Стоимость определяется параметрами застройки (коэффициент, этажность, жилая или коммерческая), выходом на дорогу и коммуникациями.</li>
<li><b>Потенциал обмена на квартиры:</b> хороший участок можно передать застройщику в обмен на несколько готовых квартир.</li>
</ul>
<p>При покупке участка или тарлы обязательно проверьте:</p>
<ul class="ticks">
<li>Справку о зонировании и примечания к плану в муниципалитете</li>
<li>Выход на дорогу, электричество и воду</li>
<li>Долевая ли собственность или отдельный участок. Долевые тапу намного сложнее продать и использовать, а раздел и продажа долей сельхозземель ограничены законом.</li>
<li>При зонировании часть участка может отойти под дороги и парки, а муниципалитет может взимать «долю прироста стоимости» с объектов, подорожавших после изменения плана.</li>
<li>Круг покупателей земли уже, они часто не могут взять ипотеку, поэтому продажа идёт дольше.</li>
</ul>
<p><b>Районы Анталии, интересные для покупки земли:</b> ${AR('dosemealti', 'Дёшемеалты')} (${AR('altinkale-yesilbayir', 'Алтынкале, Йешилбайыр')} и окрестности), Аксу и Кунду, направление Серик (${AR('belek', 'Белек')}, ${AR('kadriye', 'Кадрие')}) и другие оси роста города. Реальный потенциал участка оценивается вместе с планом зонирования, транспортными проектами и последними продажами в районе.</p>
<h2>5. Объект под ваш срок: ликвидность</h2>
<p>Самая недооценённая сторона инвестиций — <b>ликвидность</b>: насколько быстро и по какой цене объект можно продать при необходимости.</p>
<ul class="ticks">
<li><b>Короткий срок (до 1 года):</b> одного ожидания роста мало — расходы на покупку и продажу и налог могут съесть большую часть прибыли (см. расчёт ниже). Быстрее всего продаются квартиры 1+1 и 2+1 в районах с высоким спросом, в комплексах и подходящие под ипотеку. Частые и регулярные сделки могут считаться коммерческой деятельностью для целей налогообложения.</li>
<li><b>Средний срок (1–5 лет):</b> выделяются новое жильё, купленное по правильной цене в развивающихся районах, и проекты близкие к сдаче. Яркий пример последних лет в Анталии — Алтынташ.</li>
<li><b>Длительный срок (от 5 лет):</b> участки, сельхозземли и участки под виллы, где рост растянут во времени. При владении более пяти лет налог на прирост стоимости не возникает.</li>
</ul>
<h2>6. Сразу считайте расходы и налоги</h2>
<p>Многие инвесторы смотрят только на цену покупки и продажи, но реальная прибыль видна лишь после вычета расходов и налогов.</p>
<h3>При покупке и продаже</h3>
<ul class="ticks">
<li><b>Сбор за тапу:</b> всего <b>4%</b> от указанной в тапу цены; обычно 2% платит покупатель и 2% продавец, но стороны могут договориться иначе.</li>
<li><b>Сбор кадастрового управления (дёнер сермайе):</b> в 2026 году около <b>6 680 TRY</b> за сделку купли-продажи в крупных городах (с НДС). Точная сумма рассчитывается в системе Web-Tapu.</li>
<li><b>Агентское вознаграждение:</b> если сделку ведёт агентство, законный предел — <b>2% + НДС</b> от цены отдельно для покупателя и продавца.</li>
<li><b>Прочее:</b> обязательная страховка от землетрясения (DASK), оценка при ипотеке, переводчик и отчёт об оценке для иностранцев.</li>
</ul>
<p><b>Пример:</b> купив квартиру за 5 000 000 TRY и вскоре продав её, вы платите 2% сбора за тапу и 2% + НДС агентству при покупке и столько же при продаже. Это около <b>8,8%</b> в сумме без учёта кадастрового сбора и прочих расходов. То есть квартира должна подорожать примерно на 440 000 TRY только для покрытия расходов, а сверху ещё налог на прирост стоимости.</p>
<h3>При продаже: налог на прирост стоимости</h3>
<p>Если вы продаёте недвижимость <b>раньше пяти лет</b> после покупки, прибыль облагается подоходным налогом как «прирост стоимости».</p>
<ul class="ticks">
<li>Для продаж 2026 года действует необлагаемый порог <b>150 000 TRY</b>; прибыль сверх него декларируется.</li>
<li>Налог рассчитывается по прогрессивной шкале подоходного налога.</li>
<li>При определённых условиях цену покупки можно индексировать на инфляцию (индекс цен производителей), что снижает налог.</li>
<li>Продажа декларируется в марте следующего года.</li>
</ul>
<p>После пяти лет владения этот налог не возникает, поэтому момент продажи напрямую влияет на чистую прибыль.</p>
<h3>Во время владения: ежегодные налоги</h3>
<ul class="ticks">
<li><b>Налог на недвижимость (эмляк):</b> ежегодно уплачивается муниципалитету двумя платежами, в мае и ноябре. В крупных городах, таких как Анталия, ставки: жильё <b>0,2%</b>, коммерческие здания <b>0,4%</b>, участки <b>0,6%</b>, сельхозземли <b>0,2%</b>. Обратите внимание: участки облагаются по ставке втрое выше, чем жильё.</li>
<li><b>Налог на уборку территории:</b> взимается муниципалитетом с жилья и коммерческих помещений, для жилья обычно вместе со счётом за воду. Для пустых участков и сельхозземель не применяется.</li>
<li><b>Взносы комплекса и обслуживание:</b> не налог, но напрямую влияют на доходность аренды.</li>
</ul>
<h3>При сдаче в аренду</h3>
<ul class="ticks">
<li><b>Физическое лицо:</b> доход от аренды жилья декларируется в годовой декларации в марте. Для аренды жилья, полученной в 2026 году, действует необлагаемая сумма <b>58 000 TRY</b> при соблюдении условий. Расходы вычитаются по фактическим затратам или фиксированно (15%), ставка прогрессивная.</li>
<li><b>Компания:</b> доход от аренды входит в прибыль компании и облагается налогом на прибыль. В зависимости от типа объекта (жильё или коммерческий) и арендатора могут применяться НДС и удержание у источника. Решать, инвестировать лично или через компанию, лучше вместе с бухгалтером.</li>
</ul>
<h2>7. Ошибки, из-за которых теряют деньги</h2>
<p>Убытки в недвижимости чаще всего возникают не из-за самого объекта, а из-за неверных решений:</p>
<ul class="ticks">
<li><b>Срочная продажа:</b> объект, проданный впопыхах ради денег, почти всегда уходит ниже стоимости.</li>
<li><b>Продажа не вовремя:</b> продажа до пяти лет влечёт налог, продажа на вялом рынке — потерю в цене.</li>
<li><b>Неверная цена:</b> объект дороже рынка «залёживается» и в итоге часто продаётся ниже рынка.</li>
<li><b>Слабый маркетинг:</b> пара фото с телефона и одно объявление не доходят до нужного покупателя.</li>
<li><b>Покупка без проверки:</b> без проверки зонирования, тапу, искана и долевой собственности объект создаёт проблемы при продаже.</li>
</ul>
<h2>Почему стоит инвестировать с ACC HOMES?</h2>
<p>Удачная инвестиция — это сочетание правильного района, объекта, цены и момента. ACC HOMES предоставляет инвесторам в Анталии <b>консультации по инвестициям в недвижимость</b> — от покупки до продажи.</p>
<ul class="ticks">
<li><b>Портфель под вашу цель:</b> доход от аренды, быстрый рост или долгосрочное накопление — подбираем подходящие объекты.</li>
<li><b>Цена на основе данных:</b> по сопоставимым продажам и аренде вместе с вами считаем реальную стоимость объекта и срок окупаемости.</li>
<li><b>Закрытые предложения и авторизованные проекты:</b> доступ к объектам, которые продаются без публичных объявлений, и к <a href="{{URL:projects}}">проектам</a>, которые мы представляем.</li>
<li><b>Анализ участков и зонирования:</b> при покупке земли вместе изучаем зонирование, примечания к плану и потенциал района.</li>
<li><b>Планирование расходов и налогов:</b> заранее планируем расходы на сделку и момент продажи, по налогам работаем вместе с вашим бухгалтером.</li>
<li><b>Сильный маркетинг при продаже:</b> ваш объект продвигается на нашем сайте на 12 языках, на турецких и международных порталах, с профессиональными фото и видео, его одновременно публикуют около 50 партнёров. Продажа по справедливой цене нужному покупателю, а не в спешке.</li>
<li><b>Аренда и управление:</b> сдаём купленное для дохода жильё и при желании берём на себя полное управление.</li>
<li><b>Доверие:</b> команда из около 50 человек в ACC Plaza под руководством основателя и брокера Али Джанера Джана; более 470 отзывов в Google с оценкой 4,9.</li>
</ul>
<p><i>Статья носит информационный характер и не является инвестиционной рекомендацией. Суммы и ставки налогов обновляются ежегодно; по своей ситуации проконсультируйтесь с бухгалтером.</i></p>
<h2>Спланируем инвестицию вместе</h2>
<p>Если вы думаете об инвестициях в недвижимость Анталии, давайте обсудим ваши цели и бюджет и вместе выберем район, тип объекта и срок: ${WA('запросите встречу в WhatsApp →')}</p>`,
      faq: [
        ['Что выгоднее: участок или квартира?', 'Зависит от цели. Для регулярного дохода от аренды — жильё; если вы ждёте сильного долгосрочного роста и можете вложить деньги на годы, может больше подойти участок с потенциалом зонирования.'],
        ['За сколько лет окупается жильё?', 'Цену покупки делят на годовую аренду. По исследованию TSKB 2024 года, в крупных городах, включая Анталию, срок составлял 14–17 лет.'],
        ['Плачу ли я налог при продаже до пяти лет?', 'Да, если прибыль превышает необлагаемый порог 150 000 TRY на 2026 год. После пяти лет владения этот налог не возникает.'],
        ['Какие расходы при покупке жилья?', 'Сбор за тапу (всего 4%), кадастровый сбор, агентское вознаграждение (до 2% + НДС с каждой стороны), страховка DASK и оценка при ипотеке.'],
        ['Есть ли ежегодный налог на участки и сельхозземли?', 'Да, налог на недвижимость. В крупных городах 0,6% для участков и 0,2% для сельхозземель, двумя платежами в год муниципалитету.'],
        ['Плачу ли я налог с дохода от аренды?', 'Физлицо декларирует и платит налог с аренды жилья 2026 года сверх 58 000 TRY при соблюдении условий. При сдаче через компанию доход облагается налогом на прибыль.'],
      ],
    },
  },
];
