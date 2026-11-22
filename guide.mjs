// ACC HOMES — Alıcı Rehberi / Buyer's Guide (TR + EN)
// Yasal rakamlar 15.11.2026 tarihinde doğrulandı; değişiklikleri takip edin. Kaynaklar build çıktısında değil, proje notlarında.

export const GUIDE_SEG = { tr: 'alici-rehberi', en: 'buyers-guide', ru: 'buyers-guide' };
export const GUIDE_TITLE = { tr: 'Alıcı Rehberi', en: 'Buyer’s Guide', ru: 'Гид покупателя' };
export const GUIDE_LEAD = {
  tr: 'Türkiye’de, özellikle Antalya’da gayrimenkul alırken bilmeniz gereken her şey: süreç, belgeler, masraflar, vatandaşlık, oturum izni ve tapu.',
  en: 'Everything you need to know about buying property in Türkiye, and Antalya in particular: the process, documents, costs, citizenship, residence permits and the title deed.',
  ru: 'Всё о покупке недвижимости в Турции и Анталии: процесс, документы, расходы, гражданство, ВНЖ и тапу (на английском).',
};
export const GUIDE_UPDATED = '22.11.2026';

export const GUIDES = [
  {
    slug: 'satin-alma-sureci', en: 'buying-process', icon: '🧭',
    tr: {
      title: 'Adım Adım Satın Alma Süreci', short: 'İlk görüşmeden anahtar teslimine 6 adım',
      html: `
<ol class="steps">
<li><b>İhtiyaç analizi ve bütçe</b><p>Amacınızı (oturum, yatırım, kira getirisi, vatandaşlık), bölge tercihinizi ve bütçenizi birlikte netleştiririz. Kredi kullanacaksanız ön değerlendirmeyi bu aşamada yaparız.</p></li>
<li><b>Gösterim: yerinde veya online</b><p>Seçtiğimiz mülkleri yerinde gezeriz. Yurt dışındaysanız canlı görüntülü gösterimle mülkü, binayı ve çevresini anlık olarak gösteririz.</p></li>
<li><b>Hukuki ve teknik kontrol</b><p>Tapu kaydı (ipotek, haciz, şerh), imar ve iskan durumu, aidat borcu ve site yönetimi kontrol edilir. Yabancı alıcılarda değerleme raporu ve gerekli izinler bu aşamada planlanır.</p></li>
<li><b>Kapora ve satış sözleşmesi</b><p>Fiyat ve ödeme planı netleşince kapora alınır ve yazılı satış sözleşmesi imzalanır. Tüm koşullar sözleşmede açıkça yazılır.</p></li>
<li><b>Tapu devri</b><p>Vergi numarası, değerleme raporu ve gerekiyorsa tercüman ve noter işlemleri tamamlanır; tapu müdürlüğünde harçlar ödenip devir yapılır. Vekaletnameyle sizin yerinize de işlem yapılabilir.</p></li>
<li><b>Anahtar teslimi ve satış sonrası</b><p>Elektrik, su, doğalgaz ve internet abonelikleri, DASK zorunlu deprem sigortası ve isterseniz mülk yönetimi için yanınızdayız.</p></li>
</ol>`,
    },
    enc: {
      title: 'Step-by-Step Buying Process', short: 'Six steps from first call to keys',
      html: `
<ol class="steps">
<li><b>Needs and budget</b><p>We clarify your goal (living, investment, rental income, citizenship), preferred areas and budget. If you need a mortgage, we look at it at this stage.</p></li>
<li><b>Viewings: in person or online</b><p>We tour shortlisted properties with you. If you are abroad, we show the property, building and surroundings on a live video call.</p></li>
<li><b>Legal and technical checks</b><p>We check the title deed record (mortgages, liens, annotations), zoning and occupancy permit (iskan), unpaid fees and site management. For foreign buyers we plan the valuation report and any required approvals.</p></li>
<li><b>Deposit and sales agreement</b><p>Once price and payment terms are agreed, a deposit is paid and a written sales agreement is signed, with every condition spelled out.</p></li>
<li><b>Title deed transfer</b><p>Tax number, valuation report and, if needed, translator and notary steps are completed; fees are paid and the deed is transferred at the land registry. This can also be done on your behalf with a power of attorney.</p></li>
<li><b>Handover and after-sales</b><p>We help with electricity, water, gas and internet subscriptions, compulsory earthquake insurance (DASK) and, if you wish, property management.</p></li>
</ol>`,
    },
  },
  {
    slug: 'belgeler-vergi-numarasi-banka', en: 'documents-tax-number-bank', icon: '📄',
    tr: {
      title: 'Gerekli Belgeler, Vergi Numarası ve Banka Hesabı', short: 'Tapu için neler gerekir, nasıl hazırlanır',
      html: `
<h2>Türk vatandaşı alıcılar</h2>
<ul class="ticks"><li>Nüfus cüzdanı veya kimlik kartı</li><li>Vesikalık fotoğraf (tapu müdürlüğünün istemesine göre)</li><li>Kredi kullanılıyorsa banka yazısı ve ekspertiz</li></ul>
<h2>Yabancı alıcılar</h2>
<ul class="ticks">
<li><b>Pasaport</b> ve gerektiğinde noter onaylı Türkçe tercümesi</li>
<li><b>Türk vergi numarası:</b> Pasaportla vergi dairesinden aynı gün alınabilir. Tapu, banka ve abonelik işlemlerinin hepsinde gerekir.</li>
<li><b>Değerleme raporu:</b> Yabancıya satışlarda tapu işlemi için yetkili bir değerleme kuruluşunun raporu istenir. Vatandaşlık ve oturum başvurularında da resmî değer bu rapora göre belirlenir.</li>
<li><b>Tercüman:</b> Türkçe bilmeyen alıcılar için tapuda yeminli tercüman bulunur.</li>
<li><b>Vesikalık fotoğraf</b></li>
</ul>
<h2>Banka hesabı</h2>
<p>Ödemelerin kayıtlı ve izlenebilir olması için Türkiye’de bir banka hesabı açmanızı öneririz. Pasaport ve vergi numarasıyla açılabilir; bankaya göre ek belge istenebilir. ACC HOMES ekibi randevu ve tercümanlık desteği sağlar.</p>
<p class="note">Belge listesi tapu müdürlüğüne ve işlemin türüne göre değişebilir. İşleminiz öncesinde güncel listeyi sizinle birlikte kontrol ederiz.</p>`,
    },
    enc: {
      title: 'Documents, Tax Number and Bank Account', short: 'What you need for the title deed',
      html: `
<h2>Foreign buyers</h2>
<ul class="ticks">
<li><b>Passport</b> and, where required, a notarised Turkish translation</li>
<li><b>Turkish tax number:</b> issued by the tax office on presentation of your passport, usually the same day. You need it for the deed, bank and utility accounts.</li>
<li><b>Valuation report:</b> for sales to foreigners, the land registry asks for a report from an authorised valuation company. For citizenship and residence applications, the official value is also based on this report.</li>
<li><b>Translator:</b> a sworn translator attends the deed transfer if you do not speak Turkish.</li>
<li><b>Passport photos</b></li>
</ul>
<h2>Bank account</h2>
<p>We recommend opening a Turkish bank account so that payments are recorded and traceable. You can open one with your passport and tax number; banks may ask for additional documents. Our team arranges appointments and translation.</p>
<p class="note">Requirements can vary by land registry office and transaction type. We check the current list with you before your transaction.</p>`,
    },
  },
  {
    slug: 'alim-masraflari', en: 'purchase-costs', icon: '🧾', calc: true,
    tr: {
      title: 'Alım Masrafları ve Hesaplayıcı', short: 'Tapu harcı, döner sermaye, komisyon ve diğerleri',
      html: `
<p>Bir mülk alırken satış bedeline ek olarak şu masrafları planlamanız gerekir:</p>
<table class="spec wide">
<tr><th>Tapu harcı</th><td>Beyan edilen satış bedelinin <b>%2’si alıcıdan, %2’si satıcıdan</b> alınır (toplam %4). Harç, emlak vergisi değerinden düşük olmayan gerçek bedel üzerinden hesaplanır.</td></tr>
<tr><th>Döner sermaye hizmet bedeli</th><td>Tapu müdürlüğü hizmet bedeli; bölgeye göre katsayıyla değişir.</td></tr>
<tr><th>Emlak danışmanlığı hizmet bedeli</th><td>ACC HOMES’ta satış bedelinin %2’si + KDV. Fotoğraf, video, ilan, sözleşme, banka ve tapu takibi bu hizmete dahildir.</td></tr>
<tr><th>DASK</th><td>Zorunlu deprem sigortası; 5 Eylül 2026’dan itibaren alıcı tapudan önce kendi adına yeni poliçe yaptırır.</td></tr>
<tr><th>Değerleme raporu</th><td>Yabancı alıcılarda ve kredili alımlarda gerekir; ücret mülke ve kuruluşa göre değişir.</td></tr>
<tr><th>Tercüme ve noter</th><td>Yabancı alıcılarda tercüman ve gerekiyorsa vekaletname masrafı.</td></tr>
<tr><th>KDV</th><td>Müteahhitten ilk satışta KDV doğabilir. Türkiye’de yerleşik olmayan yabancılara konut ve iş yeri satışında, bedelin döviz olarak Türkiye’ye getirilmesi gibi şartlarla KDV istisnası uygulanabilir. İşlem öncesi güncel durumu birlikte teyit ederiz.</td></tr>
</table>
{{CALC}}
<p class="note">Bu sayfa genel bilgilendirme amaçlıdır, vergi veya hukuki danışmanlık yerine geçmez. Oranlar ${'15.11.2026'} itibarıyla günceldir.</p>`,
    },
    enc: {
      title: 'Purchase Costs and Calculator', short: 'Title deed fee, land registry fee, agency fee and more',
      html: `
<p>On top of the purchase price, plan for these costs:</p>
<table class="spec wide">
<tr><th>Title deed fee (tapu harcı)</th><td><b>2% paid by the buyer and 2% by the seller</b> on the declared sale price (4% in total), calculated on a value no lower than the property-tax value.</td></tr>
<tr><th>Land registry service fee</th><td>A fixed service fee that varies by district coefficient.</td></tr>
<tr><th>Agency fee</th><td>At ACC HOMES, 2% of the sale price + VAT. Photography, video, marketing, contract, bank and deed follow-up are included.</td></tr>
<tr><th>DASK</th><td>Compulsory earthquake insurance; since 5 September 2026 the buyer takes out a new policy in their own name before the deed transfer.</td></tr>
<tr><th>Valuation report</th><td>Required for foreign buyers and mortgages; the fee depends on the property and the company.</td></tr>
<tr><th>Translation and notary</th><td>Sworn translator and, if needed, power-of-attorney costs.</td></tr>
<tr><th>VAT</th><td>VAT may apply to first sales by developers. For non-resident foreigners, a VAT exemption on homes and workplaces may apply under conditions such as bringing the price into Türkiye in foreign currency. We confirm the current position with you before the transaction.</td></tr>
</table>
{{CALC}}
<p class="note">General information only, not tax or legal advice. Rates current as of 15 Nov 2026.</p>`,
    },
  },
  {
    slug: 'gayrimenkul-ile-vatandaslik', en: 'citizenship-by-investment', icon: '🇹🇷',
    tr: {
      title: 'Gayrimenkul Yoluyla Türk Vatandaşlığı', short: '400.000 USD, 3 yıl satmama şerhi ve süreç',
      html: `
<h2>Temel şartlar</h2>
<ul class="ticks">
<li>Değeri en az <b>400.000 ABD Doları</b> (veya karşılığı) olan bir ya da birden fazla taşınmaz satın alınması</li>
<li>Taşınmazın tapu kaydına <b>3 yıl boyunca satılmayacağına dair şerh</b> konulması</li>
<li>Yatırım tutarını doğrulayan <b>resmî değerleme raporu</b>; değer, ödediğiniz bedele değil rapordaki tutara göre dikkate alınır</li>
<li>Ödemenin bankacılık sistemi üzerinden, belgelenebilir şekilde yapılması</li>
</ul>
<p>Eşiniz ve 18 yaş altı çocuklarınız aynı başvuruya dahil edilebilir.</p>
<h2>Süreç</h2>
<ol class="steps compact"><li><b>Uygun taşınmazın seçimi</b><p>Vatandaşlığa uygun mülkleri değerleme ihtimaliyle birlikte seçeriz.</p></li><li><b>Değerleme ve ödeme</b><p>Rapor alınır, ödeme belgelenerek yapılır.</p></li><li><b>Tapu ve şerh</b><p>Tapu devri yapılır, 3 yıllık şerh işlenir; uygunluk belgesi alınır.</p></li><li><b>Başvuru</b><p>İkamet izni ve vatandaşlık başvurusu dosyası hazırlanır.</p></li></ol>
<p class="note">Vatandaşlık başvurusu ilgili kurumlarca değerlendirilir; ACC HOMES süreç boyunca gayrimenkul tarafında destek verir, hukuki süreç için anlaşmalı avukatlara yönlendirir.</p>`,
    },
    enc: {
      title: 'Turkish Citizenship by Property Investment', short: 'USD 400,000, 3-year no-sale annotation and the process',
      html: `
<h2>Key requirements</h2>
<ul class="ticks">
<li>Buying one or more properties worth at least <b>USD 400,000</b> (or equivalent)</li>
<li>An <b>annotation on the title deed that the property will not be sold for 3 years</b></li>
<li>An <b>official valuation report</b> confirming the investment; the value used is the report value, not simply the price you paid</li>
<li>Payment through the banking system, fully documented</li>
</ul>
<p>Your spouse and children under 18 can be included in the same application.</p>
<p class="note">Applications are assessed by the relevant authorities. ACC HOMES supports the property side and refers you to partner lawyers for the legal process.</p>`,
    },
  },
  {
    slug: 'gayrimenkul-ile-oturum-izni', en: 'residence-permit', icon: '🏠',
    tr: {
      title: 'Gayrimenkul Yoluyla Oturum İzni', short: 'Konut sahibi yabancılar için kısa dönem ikamet',
      html: `
<p>Türkiye’de konut satın alan yabancılar, taşınmaza dayalı <b>kısa dönem ikamet izni</b>ne başvurabilir. İzin genellikle 1–2 yıllık verilir ve mülkiyet devam ettiği sürece yenilenebilir.</p>
<h2>Temel şartlar</h2>
<ul class="ticks">
<li>Konut niteliğinde taşınmaz ve konutun gerçekten ikamet amacıyla kullanılması</li>
<li>Güncel düzenlemeye göre taşınmazın değerinin en az <b>200.000 ABD Doları</b> veya Türk lirası karşılığı olması (değer resmî değerleme raporuna göre esas alınır)</li>
<li>Geçerli pasaport, sağlık sigortası, adres kaydı ve Göç İdaresi’nin istediği diğer belgeler</li>
</ul>
<p>Başvurular Göç İdaresi’nin e-ikamet sistemi üzerinden yapılır. Eş ve 18 yaş altı çocuklar başvuruya eklenebilir.</p>
<p class="note">Bazı mahalleler yabancıların ikametine kapalı olabilir; başvurudan önce bölgenin uygunluğunu kontrol ederiz.</p>`,
    },
    enc: {
      title: 'Residence Permit through Property', short: 'Short-term residence for foreign home owners',
      html: `
<p>Foreigners who buy a home in Türkiye can apply for a property-based <b>short-term residence permit</b>, usually issued for 1–2 years and renewable while you own the property.</p>
<h2>Key requirements</h2>
<ul class="ticks">
<li>A residential property that you genuinely use as your home</li>
<li>Under current rules, a property value of at least <b>USD 200,000</b> or the Turkish lira equivalent, based on the official valuation report</li>
<li>Valid passport, health insurance, address registration and other documents requested by the Presidency of Migration Management</li>
</ul>
<p>Applications start on the e-ikamet system. Spouses and children under 18 can be added.</p>
<p class="note">Some neighbourhoods may be closed to new foreign residents; we check eligibility before you buy.</p>`,
    },
  },
  {
    slug: 'tapu-sureci-gerekli-belgeler', en: 'title-deed-process-documents', icon: '🗂️',
    tr: { title: 'Tapu Süreci ve Gerekli Belgeler 2026', short: 'DASK, Web Tapu, gerçek bedel, yabancılar, projeden alım', desc: 'Antalya’da ev, daire, villa veya arsa alırken ve satarken gerekli belgeler: yeni DASK kuralı, Web Tapu, gerçek bedel beyanı, yabancılar için süreç.', html: `<p class="lead">Bir evin, dairenin ya da villanın tapusu birkaç saatte el değiştirir; o güne kadar yapılan hazırlık ise haftalar sürer. Bu rehberde 2026’da değişen kuralları, Türk ve yabancı alıcılar için gereken belgeleri, hazır ve projeden konut alırken bakılacak noktaları sırayla anlattık.</p><h2 id="degisenler">2026’da neler değişti?</h2><p>Son iki yılda tapu işlemleri hem dijitalleşti hem de denetim sıkılaştı. Ev, daire, villa ya da arsa alıp satacak herkesin bilmesi gereken dört değişiklik var:</p><ul class="ticks"><li><b>DASK artık alıcı adına:</b> 5 Eylül 2026’dan itibaren satılan konutun DASK poliçesi yeni sahibine devredilmiyor. Satıcının poliçesi tapudaki satış tarihiyle sona eriyor ve kullanılmayan günlerin primi iade edilebiliyor; alıcı tapudan önce kendi adına yeni poliçe yaptırıyor. Tapu müdürlüğü alıcı adına geçerli poliçe olup olmadığını kontrol ediyor.</li><li><b>Gerçek satış bedeli beyanı:</b> Tapu harcı, beyan edilen gerçek satış bedeli üzerinden alıcıdan %2, satıcıdan %2 olmak üzere toplam %4 alınıyor; bedel emlak vergisi değerinin altında olamaz. Düşük bedel gösterildiği tespit edilirse eksik harç, vergi ziyaı cezası ve gecikme faiziyle birlikte isteniyor.</li><li><b>Başvurular Web Tapu üzerinden:</b> Satış başvurusu e-Devlet ile Web Tapu’dan yapılıyor; giriş için iki aşamalı doğrulama zorunlu.</li><li><b>Ödemelerin izlenebilirliği:</b> Bedelin banka üzerinden ödenmesi hem güvenlik hem de beyanla uyum açısından önemli. Tapuda gösterilen bedel ile hesaplar arasındaki hareket birbirini tutmalı.</li></ul><h2 id="webtapu">Web Tapu, iki aşamalı doğrulama ve dolandırıcılığa karşı önlem</h2><p>Tapu müdürlüğüne gitmeden önce satış başvurusu Web Tapu’dan yapılır: e-Devlet ile giriş yapılır, işlem türü seçilir, tapu müdürlüğü belgeleri inceler, harç tutarı bildirilir ve randevu verilir. İmza günü taraflar tapu müdürlüğünde hazır bulunur.</p><p>Web Tapu’ya girişte e-Devlet şifresi tek başına yetmiyor; iki aşamalı giriş açık olmalı. Bu, kimliğinizle doğrulanmış cep telefonunuza gelen kodla yapılıyor. e-Devlet şifresi yoksa PTT’den alınabilir. Bu uygulama sahte vekâlet ve kimlik bilgisiyle yapılan dolandırıcılığın önüne geçmek için getirildi.</p><p class="note">Kimseyle e-Devlet şifrenizi ya da telefonunuza gelen doğrulama kodunu paylaşmayın. Ödemeyi tapu imzası anında, satıcının kendi adına açılmış banka hesabına yapın.</p><p><b>Takyidat kontrolü:</b> Taşınmaz üzerinde ipotek, haciz, şerh, beyan ya da irtifak hakkı olup olmadığını gösteren tapu kaydı Web Tapu’dan alınır. Bu kayıt yalnızca alındığı anın fotoğrafıdır; icra dairesinden ya da başka kurumlardan gelecek yeni bir haciz tapu gününe kadar kaydı değiştirebilir. Bu yüzden takyidat %100 güvence değildir; kontrol tapu gününe yakın tekrarlanmalı ve süreci takip eden emlak danışmanının yönlendirmesi dinlenmelidir.</p><h2 id="adimlar">Tapu süreci adım adım</h2><ul class="ticks"><li>Fiyat ve ödeme planında anlaşma; kapora ve şartların yazılı hale getirilmesi</li><li>Tapu kaydı ve takyidat kontrolü; imar ve iskân durumunun incelenmesi</li><li>Belediyeden emlak vergisi değeri (rayiç) ve borç durumunun kontrolü; borç varsa satıcı tarafından kapatılması</li><li>Alıcı adına yeni DASK poliçesinin yapılması</li><li>Web Tapu’dan satış başvurusu (iki aşamalı doğrulamayla)</li><li>Tapu müdürlüğünün incelemesi; tapu harcı ve döner sermaye bedelinin ödenmesi</li><li>Randevu günü imza; ödemenin bankadan yapılması</li><li>Anahtar teslim tutanağı, abonelik devirleri ve site yönetimine bildirim</li></ul><h2 id="satici">Satıcıdan istenen belgeler</h2><ul class="ticks"><li>Kimlik (yabancı satıcı için pasaport ve yeminli tercümesi)</li><li>Tapu bilgileri</li><li>Belediyeden emlak vergisi değeri ve borç durumu. Birçok tapu müdürlüğü bunu sistemden sorgulasa da yazıyı önceden hazır tutuyoruz; borç varsa tapu öncesi kapatılmalı.</li><li>Fotoğraf (tapu müdürlüğünün istediği sayıda)</li><li>Site veya apartman yönetiminden aidat ve ortak gider borcu olmadığına dair yazı</li><li>Kiracı varsa kira sözleşmesi ve depozito bilgisi</li><li>Elektrik, su, doğalgaz ve internet aboneliklerinin son faturaları</li></ul><p>Yabancı uyruklu bir satıcı Türk alıcıya sattığında değerleme (ekspertiz) raporu aranmıyor. Rapor, alıcının yabancı olduğu satışlarda, yabancıdan yabancıya satış dahil, isteniyor.</p><h2 id="alici">Alıcıdan istenen belgeler</h2><ul class="ticks"><li>Kimlik</li><li>Fotoğraf</li><li>Kendi adına düzenlenmiş geçerli DASK poliçesi</li><li>Tapu harcının (alıcı payı %2) ve döner sermaye bedelinin ödendiğini gösteren dekont</li><li>Kredi kullanılıyorsa bankanın ekspertiz raporu ve kredi onayı</li></ul><h2 id="yabanci">Yabancı alıcılar için süreç ve belgeler</h2><p>Türkiye’de konut alan yabancı alıcının süreci Türk alıcıya göre birkaç adım daha uzun. Hepsini sizinle birlikte planlıyor, isterseniz vekâletle Türkiye’ye gelmeden tamamlıyoruz.</p><ul class="ticks"><li><b>Vergi numarası:</b> Pasaportla vergi dairesinden alınır; banka hesabı ve tapu için gerekir.</li><li><b>Pasaport ve yeminli tercümesi</b> ile fotoğraf</li><li><b>Türkiye’de banka hesabı:</b> Ödemelerin izlenebilir olması için</li><li><b>Değerleme (ekspertiz) raporu:</b> Yabancı gerçek kişinin alıcı olduğu satışlarda zorunlu; Web Tapu üzerinden talep edilir ve düzenlendiği tarihten itibaren üç ay geçerlidir.</li><li><b>Döviz Alım Belgesi (DAB):</b> Satış bedeli kadar dövizin Türkiye’deki bir bankada Türk lirasına çevrildiğini gösteren belge; tapu işleminden önce müdürlüğe sunulur.</li><li><b>DASK:</b> Alıcı adına yeni poliçe</li><li><b>Yabancı alım bilgileri:</b> Tapu müdürlüğünün istediği beyan ve formlar</li><li><b>Bölge kontrolü:</b> Taşınmazın yabancıların edinimine açık olup olmadığı ve askeri yasak ya da güvenlik bölgesi kontrolü; bunu teklif aşamasında önceden kontrol ediyoruz.</li></ul><p><b>Türk vatandaşlığı hedefleniyorsa:</b> Uygulamada asgari yatırım tutarı 400.000 ABD doları ve taşınmazın üç yıl satılmayacağına dair tapuya şerh konuluyor. Değer, değerleme raporuyla doğrulanıyor; değerleme şirketi GABİM (Gayrimenkul Bilgi Merkezi) üzerinden seçilebiliyor ve hazırlanan rapor kontrol ediliyor. Vatandaşlık uygunluğunu her mülk için ayrı kontrol ediyoruz.</p><p><b>Vekâletle alım:</b> Pasaport, tercüme, vergi numarası, banka hesabı, değerleme ve tapu imzası, noterden verilecek vekâletle sizin adınıza takip edilebilir. Vekâletin kapsamını ve süresini işlemden önce birlikte belirliyoruz.</p><h2 id="hazir">Hazır (iskânlı) ev, daire ya da villa alırken bakılacaklar</h2><ul class="ticks"><li><b>İskân (yapı kullanma izni):</b> Yapının iskânı var mı? İskânsız yapılarda kredi, abonelik ve satış süreçleri zorlaşabilir.</li><li><b>Kat mülkiyeti mi, kat irtifakı mı?</b> Tapuda cins tashihi yapılıp kat mülkiyetine geçilip geçilmediğine bakın.</li><li><b>Plana uygunluk:</b> Konutun onaylı mimari projeye uygun olup olmadığını belediyenin imar biriminden alınan proje ile karşılaştırın. Projede olmayan kat, havuz ya da kapalı alanlar sonradan sorun çıkarabilir.</li><li><b>Takyidat:</b> İpotek, haciz, şerh ve irtifak hakları; tapu gününe yakın tekrar kontrol</li><li><b>Kiracı:</b> Kiracı varsa kira sözleşmesi, depozitonun kime kalacağı ve tahliye ya da devam durumu önceden yazılı olarak konuşulmalı; kiracının satıcıya borcu varsa tapu öncesi kapatılmalı.</li><li><b>Borçlar:</b> Emlak vergisi, site aidatları ve ortak gider borçlarının kapatıldığını gösteren “borcu yoktur” yazıları (satıcı evde otursa da oturmasa da)</li><li><b>Abonelikler:</b> Elektrik, su, doğalgaz ve internet borçlarının kapatılıp aboneliklerin devri; son endekslerin tutanağa yazılması</li></ul><p><b>Site ve yönetim planı:</b> Site ve apartmanlarda yönetim planını mutlaka okuyun. Bahçe ve ortak alan kullanımı, havuz, güvenlik, fitness, spa, hamam, sauna ve yeşil alan giderlerinin nasıl paylaşıldığı (arsa payına göre mi, metrekareye göre mi, eşit mi), müstakil havuz ve bahçe masraflarının kime ait olduğu, sitenin profesyonel bir yönetim şirketiyle mi yoksa malikler tarafından mı yönetildiği aylık maliyetinizi doğrudan etkiler. Yönetimi kurulmuş, düzeni oturmuş siteler komşuluk huzuru açısından da öne çıkar.</p><h2 id="proje">Projeden (bitmemiş) konut alırken bakılacaklar</h2><ul class="ticks"><li><b>Yapı ruhsatı:</b> Ruhsat alınmadan ön ödemeli konut satış sözleşmesi yapılamaz.</li><li><b>Sözleşmenin şekli:</b> Ön ödemeli konut satışı, kat irtifakının alıcı adına tapuya tescil edilmesiyle ya da noterde düzenleme şeklinde yapılan satış vaadi sözleşmesiyle kurulur. Mümkünse satış vaadini noterde yaptırıp tapuya şerh ettirin.</li><li><b>Teknik şartname ve mahal listesi:</b> Müteahhitten kullanılacak malzemeleri ve teslim standardını yazılı alın.</li><li><b>Kat karşılığı sözleşmesi:</b> Arsa sahibi ile müteahhit arasındaki sözleşmede satın aldığınız bağımsız bölümün kime kaldığını kontrol edin; tapuda arsa sahibi mi, müteahhit mi imza atacak önceden belli olsun.</li><li><b>Teminat:</b> Sözleşmede verilen teminata ilişkin bilgiler, teslim tarihi ve şekli yer almalı.</li><li><b>Vergi ve borç durumu:</b> Şirketin vergi ve SGK borcu olup olmadığı, projede ipotek bulunup bulunmadığı</li><li><b>Ödeme planı ve senetler:</b> Vadeli ödemelerde senetlerin hangi ödemeye karşılık geldiği yazılı olmalı.</li><li><b>Tapu teslim koşulları:</b> Tapunun hangi ödemeden sonra verileceği, satış bedelinin tapuda nasıl gösterileceği</li><li><b>Gecikme:</b> Teslim tarihi aşılırsa ne olacağı (gecikme bedeli, emsal kira tutarında tazminat) sözleşmede açıkça yazmalı; gecikme halinde haklarınız için bir avukatla görüşün.</li><li><b>Yabancı alıcılar için:</b> Bölgenin yabancı edinimine açık olduğu teklif aşamasında kontrol edilmeli.</li></ul><h2 id="teslim">Teslim ve anahtar</h2><p>Tapu imzasından sonra teslimi mutlaka tutanakla yapıyoruz: anahtarlar, kumandalar, sayaç endeksleri, demirbaşlar ve varsa eksikler tarih ve imzayla kayda geçer. Elektrik, su, doğalgaz ve diğer abonelikler toplu olarak devredilir; aidatlar dahil tüm borçlar kapatılmış olarak teslim edilir.</p><h2 id="acc">ACC HOMES bu süreci nasıl yönetiyor?</h2><p>Tapu sürecinde emlak danışmanının işi ilanla bitmez. ACC HOMES olarak tapu takip işlerinde profesyonellerle çalışıyoruz; takyidat, imar, iskân, borç ve belge kontrollerini alıcılar için biz yaptırıyor, satıcılardan da satışa hazırlık aşamasında bu belgeleri önceden istiyoruz. Yabancı alıcılarda vergi numarasından değerleme raporuna ve döviz alım belgesine kadar her adımı birlikte planlıyor, isteyenler için vekâletle yürütüyoruz.</p><p>Hedefimiz tapu gününün sürprizsiz geçmesi: herkes neyi ne zaman getireceğini bilir, ödeme ve teslim kayıt altına alınır.</p><h2 id="arsa">Arsa alırken ek olarak</h2><ul class="ticks"><li>Belediyeden imar durumu belgesi: yapılaşma emsali, kat yüksekliği, çekme mesafeleri</li><li>Hisseli tapu ise hisse oranları ve diğer paydaşlar; kat karşılığı yapılacaksa ortak karar</li><li>Yola cephe, altyapı (elektrik, su, kanalizasyon) ve varsa kamulaştırma şerhi</li><li>Tarla veya zeytinlik niteliğinde ise özel izin ve kısıtlamalar</li></ul><h2 id="sss">Sık sorulan sorular</h2><details><summary>Villa satışında DASK’ı kim yaptırır?</summary><p>5 Eylül 2026’dan itibaren satılan konutun DASK poliçesi yeni sahibine devredilmiyor. Alıcı tapudan önce kendi adına yeni poliçe yaptırır; satıcı kendi poliçesinin kullanılmayan süresi için prim iadesi isteyebilir.</p></details><details><summary>Tapu harcı ne kadar ve kim öder?</summary><p>Gerçek satış bedeli üzerinden alıcı %2, satıcı %2 olmak üzere toplam %4 tapu harcı ödenir. Bedel emlak vergisi değerinin altında olamaz; ayrıca döner sermaye bedeli ödenir.</p></details><details><summary>Tapuda düşük bedel gösterilirse ne olur?</summary><p>Gerçek bedel ile beyan arasında fark tespit edilirse eksik harç, vergi ziyaı cezası ve gecikme faiziyle birlikte alıcıdan ve satıcıdan istenebilir.</p></details><details><summary>Web Tapu’ya neden giremiyorum?</summary><p>Web Tapu girişinde e-Devlet hesabınızda iki aşamalı girişin açık olması gerekir. Telefonunuzu kimliğinizle doğrulayıp e-Devlet ayarlarından iki aşamalı girişi açabilirsiniz; e-Devlet şifresi PTT’den alınabilir.</p></details><details><summary>Yabancı alıcıdan hangi belgeler istenir?</summary><p>Pasaport ve yeminli tercümesi, vergi numarası, fotoğraf, değerleme raporu, döviz alım belgesi ve alıcı adına DASK. Banka hesabı ödemelerin izlenebilirliği için gereklidir. Bu adımlar vekâletle de yürütülebilir.</p></details><details><summary>Yabancı satıcıdan değerleme raporu istenir mi?</summary><p>Yabancı gerçek kişinin satıcı olduğu satışlarda değerleme raporu aranmaz; alıcı da yabancıysa rapor istenir.</p></details><details><summary>Takyidat belgesi tam güvence verir mi?</summary><p>Hayır. Takyidat, alındığı anın kaydıdır; tapu gününe kadar yeni bir haciz ya da şerh gelebilir. Kontrol tapu gününe yakın tekrarlanmalıdır.</p></details><p class="note">Bu rehber genel bilgilendirme amaçlıdır, hukuki veya mali danışmanlık yerine geçmez. Mevzuat ve tapu uygulamaları değişebilir; işlem öncesinde güncel durumu birlikte kontrol ediyoruz.</p>` },
    enc: { title: 'Title Deed Process and Documents 2026', short: 'DASK, Web Tapu, real price, foreign buyers, off-plan', desc: 'Documents to buy or sell a home, apartment, villa or land in Antalya: the new DASK rule, Web Tapu, real price declaration and the process for foreigners.', html: `<p class="lead">A home’s title deed changes hands in a few hours; the preparation behind that day takes weeks. This guide explains the rules that changed in 2026, the documents Turkish and foreign buyers need, and what to check when buying a finished or an off-plan home.</p><h2 id="changes">What changed in 2026?</h2><ul class="ticks"><li><b>DASK earthquake insurance in the buyer’s name:</b> From 5 September 2026 the seller’s DASK policy is no longer transferred to the buyer. It ends on the sale date and unused premium can be refunded; the buyer takes out a new policy in their own name before the title deed, and the land registry checks it.</li><li><b>Real price declaration:</b> Title deed fee is 2% from the buyer and 2% from the seller (4% in total) on the real sale price, and not below the municipal tax value. Under-declaration can lead to the missing fee plus a tax loss penalty and late interest.</li><li><b>Applications via Web Tapu:</b> Sale applications are made online through e-Devlet and Web Tapu, which requires two-step verification.</li><li><b>Traceable payments:</b> Paying through banks keeps the declared price and the money trail consistent.</li></ul><h2 id="webtapu">Web Tapu, two-step verification and fraud prevention</h2><p>The sale application is made on Web Tapu before going to the land registry: log in via e-Devlet, choose the transaction, the registry reviews the documents, announces the fee and gives an appointment. Both parties sign at the land registry on the day.</p><p>An e-Devlet password alone is not enough to enter Web Tapu; two-step login must be active, with a code sent to a phone registered to your identity. This was introduced to stop fraud with fake powers of attorney and stolen credentials. Foreign owners use the Web Tapu foreigner portal.</p><p class="note">Never share your e-Devlet password or verification codes. Pay at the moment of signing, into a bank account in the seller’s own name.</p><p><b>Encumbrance check:</b> The title record showing mortgages, seizures and annotations is obtained from Web Tapu. It is a snapshot of that moment; a new seizure can be registered before the appointment, so it is not a 100% guarantee and should be repeated close to the deed day.</p><h2 id="steps">The title deed process step by step</h2><ul class="ticks"><li>Agree price and payment plan; put the deposit and terms in writing</li><li>Check the title record, encumbrances, zoning and occupancy permit</li><li>Check the municipal tax value and any tax debt; the seller clears debts</li><li>New DASK policy in the buyer’s name</li><li>Sale application on Web Tapu</li><li>Registry review; payment of title deed fee and service fee</li><li>Signing at the appointment; payment through the bank</li><li>Key handover protocol, utility transfers and notice to site management</li></ul><h2 id="foreign">Documents and process for foreign buyers</h2><ul class="ticks"><li><b>Turkish tax number</b> from the tax office with your passport</li><li><b>Passport and sworn translation</b>, photos</li><li><b>Turkish bank account</b> for traceable payments</li><li><b>Valuation report:</b> mandatory when a foreign individual buys; requested via Web Tapu and valid for three months</li><li><b>Foreign Exchange Purchase Certificate (DAB):</b> shows that foreign currency equal to the sale price was converted to Turkish lira at a bank in Türkiye; submitted before the title deed</li><li><b>DASK</b> policy in your name</li><li><b>Area check:</b> whether the property is open to foreign ownership and outside military or security zones; we check this at offer stage</li></ul><p><b>Turkish citizenship:</b> In practice the minimum is USD 400,000 with a three-year no-sale annotation on the title. The value is confirmed by a valuation report; the valuation company can be selected through GABİM, which checks the report. We check citizenship eligibility for each property separately.</p><p><b>By power of attorney:</b> Tax number, translation, bank account, valuation and signing can all be handled for you with a notarised power of attorney, without travelling to Türkiye.</p><p><b>Foreign sellers:</b> No valuation report is required when a foreign individual sells to a Turkish buyer; it is required when the buyer is also foreign. DASK, municipal tax value and debt checks apply as usual.</p><h2 id="finished">Buying a finished home or villa: what to check</h2><ul class="ticks"><li>Occupancy permit (iskân)</li><li>Full ownership (kat mülkiyeti) or construction servitude (kat irtifakı)</li><li>Compliance with the approved plans at the municipality’s zoning department</li><li>Encumbrances, repeated close to the deed day</li><li>Tenant: lease, deposit and handover agreed in writing</li><li>No-debt letters for property tax and site fees</li><li>Utilities: debts cleared, meter readings recorded, subscriptions transferred</li></ul><p><b>Site management plan:</b> Read it. How pool, security, fitness, spa, sauna and green-area costs are shared (by land share, by size or equally), who pays for private pools and gardens, and whether a professional company manages the site all affect your monthly costs. Well-established, well-managed complexes also mean calmer neighbours.</p><h2 id="offplan">Buying off-plan: what to check</h2><ul class="ticks"><li>Building permit: pre-paid sales contracts cannot be signed without it</li><li>Contract form: registration of construction servitude in your name, or a sales promise contract drawn up at a notary and annotated on the title</li><li>Technical specification and finishes list from the developer</li><li>Land-owner/developer agreement: who owns your unit and who signs at the registry</li><li>Guarantee details, delivery date and handover terms in the contract</li><li>Developer’s tax and social security debts; mortgages on the project</li><li>Promissory notes matched to each instalment</li><li>When the title is transferred and what price is declared</li><li>Delay clause: what happens if delivery is late (penalty, compensation equal to market rent); consult a lawyer for your rights</li></ul><h2 id="acc">How ACC HOMES manages the process</h2><p>We work with title deed professionals and run the encumbrance, zoning, permit, debt and document checks for our buyers; from sellers we request these documents while preparing the sale. For foreign buyers we plan every step from the tax number to the valuation report and exchange certificate, and can handle it all by power of attorney. Deliveries are always made with a signed handover protocol.</p><h2 id="land">Buying land: extra checks</h2><ul class="ticks"><li>Zoning certificate from the municipality: building ratio, height and setbacks</li><li>Shared title: shares and co-owners</li><li>Road frontage, utilities and any expropriation annotation</li><li>Special permissions for agricultural or olive-grove land</li></ul><h2 id="sss">Frequently asked questions</h2><details><summary>Who pays for DASK earthquake insurance when a villa is sold?</summary><p>Since 5 September 2026 the buyer takes out a new DASK policy in their own name before the title deed; the seller can claim a refund of unused premium.</p></details><details><summary>How much is the title deed fee?</summary><p>4% of the real sale price: 2% paid by the buyer and 2% by the seller, not below the municipal tax value, plus a service fee.</p></details><details><summary>What documents does a foreign buyer need?</summary><p>Passport and sworn translation, Turkish tax number, photos, a valuation report, a Foreign Exchange Purchase Certificate and DASK in the buyer’s name. A Turkish bank account keeps payments traceable. All of this can be handled by power of attorney.</p></details><details><summary>Is a valuation report required when a foreigner sells?</summary><p>No, not when a foreign individual sells to a Turkish buyer. It is required when the buyer is foreign.</p></details><details><summary>Is an encumbrance record a full guarantee?</summary><p>No. It shows the record at that moment; new seizures can be registered before the deed day, so the check should be repeated close to the appointment.</p></details><p class="note">This guide is general information and not legal or financial advice. Regulations and land registry practice can change; we check the current situation with you before each transaction.</p>` },
  },
  {
    slug: 'ev-aldiktan-sonra-pisman-olmamak', en: 'buying-a-home-without-regrets', icon: '🏡',
    tr: { title: 'Ev Alırken Pişman Olmamak İçin Dikkat Edilecekler', short: 'Daireden villaya, bahçe katına ya da büyük siteye geçerken', desc: 'Daireden villaya, bahçe katına ya da büyük siteye geçmeden önce bakım bütçesini, aidatı, vergiyi ve yaşam değişimini bilin. Antalya için gerçekçi rehber.', html: `<p class="lead">Yeni ev seçerken çoğu alıcı fiyata, metrekareye ve konuma bakar. Taşındıktan sonra can sıkan konular ise genellikle başkadır: önceden hesaplanmayan giderler, değişen günlük düzen, komşu ve site ilişkileri. Daireden villaya, bahçe katına ya da büyük bir siteye geçiyorsanız yaşam tarzınız değişir; aşağıdaki soruları almadan önce sorarsanız yeni evinizin keyfini ilk günden çıkarırsınız.</p>
<p><em>Bu rehber, ACC HOMES kurucusu ve brokerı Ali Caner Can’ın Antalya’da ev alan ailelerle yaşadığı saha deneyimleriyle hazırlanmıştır.</em></p>
<h2 id="giderler">1. Ev büyüdükçe giderler de büyür</h2><p>Daha büyük bir ev; daha yüksek ısınma ve soğutma faturası, daha fazla temizlik ve daha fazla mobilya demektir. Taşınmadan önce yıllık bir bütçe çıkarın: aidat, enerji, bakım-onarım payı, mobilya ve taşınma. Bahçeli ve havuzlu evlerde Antalya’da Kasım 2026 itibarıyla gördüğümüz ortalamalar:</p>
<table class="spec wide">
<tr><th>İlaçlama</th><td>Uygulama başına yaklaşık 3.000 TL, yılda en az 4 kez: yılda yaklaşık 12.000 TL</td></tr>
<tr><th>Havuz bakımı</th><td>Açılış ve kapanış 10.000’er TL, sezonda ayda 3.000 TL: yılda yaklaşık 40.000–50.000 TL</td></tr>
<tr><th>Bahçıvan</th><td>Aylık ziyaret ve bakım 3.000–5.000 TL: yılda yaklaşık 36.000–60.000 TL</td></tr>
<tr><th>Toplam</th><td><b>Yılda yaklaşık 88.000–122.000 TL</b>; büyük onarımlar, enerji, vergi ve aidat hariç</td></tr>
</table>
<h2 id="aidat-vergi">2. Aidat ve emlak vergisi değişir</h2><p>Büyük sitelerde havuz, güvenlik, spor salonu ve peyzaj aidata yansır. Aidatın neyi kapsadığını ve son yıllarda nasıl arttığını yönetimden yazılı olarak öğrenin. Emlak vergisi bina ve arsa payının değeri üzerinden hesaplanır; büyükşehirde konutta oran binde 2’dir. Villa ve bahçe katı gibi arsa payı büyük evlerde vergi, aynı fiyattaki bir daireye göre farklı çıkabilir.</p>
<h2 id="bakim">3. Bakım sorumluluğu kime ait?</h2><p>Apartmanda çatı, cephe ve ortak tesisat ortak bütçeden yapılır. Villada ve müstakil evde çatı, dış cephe yalıtımı, zemin ve su yalıtımı, havuz ve bahçe sahibine aittir. Bahçe katında da bahçenin bakımı, ilaçlaması ve sineklikler size kalır.</p>
<h2 id="ilk-yil">4. Yeni binada ilk yıl</h2><p>Yeni bir binada bazı teknik sorunlar ancak yaşandıkça ortaya çıkar. Teslimde odaları tek tek gezerek tutanak imzalayın, eksikleri fotoğraflayın ve garanti kapsamını yazılı alın.</p>
<h2 id="kat">5. Kat sayısı, merdiven ve aile</h2><p>Dubleks, tripleks ve villalarda merdiven günlük yaşamın parçası olur. Ailede yaşlı ya da hareket kısıtlı biri varsa zemin katta bir yatak odası ve banyo olup olmadığına bakın.</p>
<h2 id="isinma">6. Isınma ve enerji</h2><p>Bazı yeni bölgelerde doğalgaz henüz yoktur. Isı pompası ve güneş paneli iyi çözümlerdir; kurulum maliyetini ve elektrik tüketimini önceden hesaplayın.</p>
<h2 id="komsu">7. Komşular, ortak alanlar ve yönetim</h2><ul class="ticks"><li>Yönetim planını ve son toplantı tutanaklarını okuyun.</li><li>Site profesyonel yönetimle mi yönetiliyor?</li><li>Komşu daire ya da villada sahibi mi oturuyor, kiracı mı?</li><li>Ortak alanların kuralları (havuz saatleri, misafir, evcil hayvan) yaşamınıza uyuyor mu?</li></ul>
<h2 id="guvenlik">8. Güvenlik</h2><p>Bahçe katı ve müstakil evde güvenlik açığı daireye göre fazladır. Site güvenliğinin kapsamını öğrenin; gerekiyorsa alarm, kamera ve aydınlatma için bütçe ayırın.</p>
<h2 id="cevre">9. Çevre ve ulaşım</h2><p>Evi akşam ve hafta içi de görün. Yol, çöp toplama ve sokak aydınlatmasını kontrol edin. Market, hastane, okul ve toplu taşımanın kaç dakika uzakta olduğunu, aracı olmayan aile bireyleri açısından da düşünün.</p>
<h2 id="sonuc">Sonuç</h2><p>Doğru ev, yalnızca fiyatı ve metrekaresi uygun olan değil, yaşamınıza ve bütçenize uyan evdir. ACC HOMES olarak alıcılarımızla bu soruları almadan önce birlikte konuşuruz. Belgeler için <a href="/alici-rehberi/tapu-sureci-gerekli-belgeler/">Tapu Süreci ve Gerekli Belgeler</a>, masraflar için <a href="/alici-rehberi/alim-masraflari/">Alım Masrafları</a> rehberine bakabilirsiniz.</p>
<p>Villa almayı düşünüyorsanız havuzdan ısı pompasına kadar ayrıntılar ACC VILLAS’ta: <a href="https://accvillas.com/blog/villa-aldiktan-sonra-pisman-olmamak/" target="_blank" rel="noopener">Villa alırken pişman olmamak için dikkat edilecekler</a>.</p>
<p class="note">Bakım rakamları Kasım 2026 Antalya ortalamalarıdır; bölgeye, evin büyüklüğüne ve hizmet veren firmaya göre değişir.</p>` },
    enc: { title: 'Buying a Home Without Regrets', short: 'Moving from an apartment to a villa, garden flat or large complex', desc: 'Before moving to a villa, garden flat or large complex, know the upkeep budget, service charges, taxes and lifestyle change. A realistic guide for Antalya.', html: `<p class="lead">Most buyers choose a home by price, size and location. What frustrates people after the move is usually something else: costs nobody calculated, a different daily routine, neighbours and complex management. If you are moving from an apartment to a villa, a garden flat or a large complex, your lifestyle changes; ask the questions below before you buy and you will enjoy your new home from day one.</p>
<p><em>This guide draws on the field experience of ACC HOMES founder and broker Ali Caner Can with families buying homes in Antalya.</em></p>
<h2 id="costs">1. A bigger home means bigger running costs</h2><p>A larger home means higher heating and cooling bills, more cleaning and more furniture. Make a yearly budget before moving: service charges, energy, a repair reserve, furniture and the move itself. For homes with a garden and pool, the averages we see in Antalya as of November 2026:</p>
<table class="spec wide">
<tr><th>Pest control</th><td>About TRY 3,000 per visit, at least 4 times a year: about TRY 12,000 a year</td></tr>
<tr><th>Pool care</th><td>Opening and closing TRY 10,000 each, TRY 3,000 a month in season: about TRY 40,000–50,000 a year</td></tr>
<tr><th>Gardener</th><td>Monthly visit and care TRY 3,000–5,000: about TRY 36,000–60,000 a year</td></tr>
<tr><th>Total</th><td><b>About TRY 88,000–122,000 a year</b>, excluding major repairs, energy, tax and service charges</td></tr>
</table>
<h2 id="charges-tax">2. Service charges and property tax change</h2><p>In large complexes, pools, security, gyms and landscaping are reflected in the service charge. Get in writing what it covers and how it has risen in recent years. Property tax is based on the value of the building and land share; inside metropolitan municipalities the residential rate is 0.2%. Homes with a large land share, such as villas and garden flats, can be taxed differently from an apartment at the same price.</p>
<h2 id="upkeep">3. Who is responsible for upkeep?</h2><p>In an apartment block the roof, façade and shared systems are paid from the common budget. In a villa or detached house the roof, façade insulation, ground and waterproofing, pool and garden belong to the owner. In a garden flat, the garden, pest control and insect screens are yours too.</p>
<h2 id="first-year">4. The first year in a new building</h2><p>Some technical issues only appear once a building is lived in. At handover, walk every room and sign a report, photograph anything missing and get the warranty terms in writing.</p>
<h2 id="floors">5. Floors, stairs and family</h2><p>In duplexes, triplexes and villas the stairs become part of daily life. If an older or less mobile person lives with you, check for a ground-floor bedroom and bathroom.</p>
<h2 id="heating">6. Heating and energy</h2><p>Some newer areas do not yet have natural gas. Heat pumps and solar panels are good solutions; work out installation cost and electricity use in advance.</p>
<h2 id="neighbours">7. Neighbours, shared areas and management</h2><ul class="ticks"><li>Read the management plan and recent meeting minutes.</li><li>Is the complex professionally managed?</li><li>Does the owner or a tenant live next door?</li><li>Do the rules for shared areas (pool hours, guests, pets) suit your life?</li></ul>
<h2 id="security">8. Security</h2><p>Garden flats and detached homes are more exposed than apartments. Find out what the complex security covers and budget for an alarm, cameras and lighting if needed.</p>
<h2 id="area">9. Neighbourhood and transport</h2><p>See the home in the evening and on a weekday too. Check the road, rubbish collection and street lighting. Consider how far the supermarket, hospital, school and public transport are, including for family members without a car.</p>
<h2 id="conclusion">Conclusion</h2><p>The right home is not just the one with the right price and size, but the one that fits your life and budget. At ACC HOMES we go through these questions with buyers before they decide. For documents see <a href="/en/buyers-guide/title-deed-process-documents/">Title Deed Process and Documents</a>, and for costs <a href="/en/buyers-guide/purchase-costs/">Purchase Costs</a>.</p>
<p>Thinking of a villa? Details from pools to heat pumps are on ACC VILLAS: <a href="https://accvillas.com/en/blog/avoid-regret-after-buying-a-villa/" target="_blank" rel="noopener">Buying a villa without regrets</a>.</p>
<p class="note">Upkeep figures are Antalya averages as of November 2026 and vary by area, home size and provider.</p>` },
  },
  {
    slug: 'tapu-rehberi', en: 'title-deed', icon: '📜',
    tr: {
      title: 'Tapu Rehberi: Kat İrtifakı, Kat Mülkiyeti ve İskan', short: 'Tapunuzda neye bakmalısınız',
      html: `
<h2>Kat irtifakı ve kat mülkiyeti</h2>
<p><b>Kat irtifakı</b>, bina tamamlanmadan önce bağımsız bölüm için kurulan haktır; yeni projelerde tapu genellikle önce bu şekilde verilir. Bina tamamlanıp <b>iskan</b> (yapı kullanma izin belgesi) alındıktan sonra <b>kat mülkiyetine</b> geçilir.</p>
<h2>Tapuda kontrol ettiklerimiz</h2>
<ul class="ticks"><li>Malikin kimliği ve hisse durumu</li><li>İpotek, haciz, tedbir ve şerhler</li><li>Net / brüt alan ve arsa payı</li><li>Ana taşınmazın niteliği ve imar durumu</li><li>İskan ve yapı ruhsatı</li><li>Aidat ve site yönetimine borç</li></ul>
<h2>Tapu devri günü</h2>
<p>Randevu e-Devlet / Web Tapu üzerinden alınır, harçlar ödenir, taraflar (veya vekilleri) tapu müdürlüğünde imza atar. Yeni tapu aynı gün elektronik olarak düzenlenir.</p>`,
    },
    enc: {
      title: 'Title Deed Guide: Kat İrtifakı, Kat Mülkiyeti and Iskan', short: 'What to check on your deed',
      html: `
<p><b>Kat irtifakı</b> is the right created for an apartment before the building is completed; new projects usually start with this deed. Once the building is complete and the <b>iskan</b> (occupancy permit) is issued, it converts to full <b>kat mülkiyeti</b> (condominium ownership).</p>
<h2>What we check</h2>
<ul class="ticks"><li>Owner identity and shares</li><li>Mortgages, liens, injunctions and annotations</li><li>Net / gross area and land share</li><li>Zoning and the nature of the main plot</li><li>Occupancy permit and building licence</li><li>Unpaid service charges</li></ul>`,
    },
  },
  {
    slug: 'uzaktan-alim-ve-vekaletname', en: 'buying-remotely', icon: '🎥',
    tr: {
      title: 'Uzaktan Alım: Online Gösterim ve Vekaletname', short: 'Türkiye’ye gelmeden şeffaf alım',
      html: `
<p>Yurt dışındaysanız Türkiye’ye gelmeden de mülk alabilirsiniz. ACC HOMES’ta uzaktan alım şöyle ilerler:</p>
<ol class="steps compact">
<li><b>Canlı görüntülü gösterim</b><p>Profesyonelimiz mülkü, binayı, manzarayı ve çevreyi canlı yayında gösterir; sorularınızı anında yanıtlar. Görüşmeyi kaydedip size gönderebiliriz.</p></li>
<li><b>Belgelerin dijital paylaşımı</b><p>Tapu kaydı, iskan, aidat ve değerleme bilgileri size yazılı olarak iletilir.</p></li>
<li><b>Vekaletname</b><p>Bulunduğunuz ülkedeki Türk konsolosluğundan ya da Türkiye’deki bir noterden, işlemleri yürütecek kişiye özel vekaletname verebilirsiniz. Vekaletnamenin kapsamını işlemden önce birlikte belirleriz.</p></li>
<li><b>Tapu ve teslim</b><p>Tapu devri vekiliniz tarafından yapılır; tapu ve anahtar size ulaştırılır, abonelikler açılır.</p></li>
</ol>`,
    },
    enc: {
      title: 'Buying Remotely: Online Viewings and Power of Attorney', short: 'A transparent purchase without travelling',
      html: `
<ol class="steps compact">
<li><b>Live video viewing</b><p>Your consultant shows the property, building, view and surroundings live and answers your questions; we can record the call for you.</p></li>
<li><b>Documents shared digitally</b><p>Deed record, occupancy permit, service charges and valuation details are sent to you in writing.</p></li>
<li><b>Power of attorney</b><p>You can grant a specific power of attorney at a Turkish consulate abroad or a notary in Türkiye. We define its scope with you beforehand.</p></li>
<li><b>Deed and handover</b><p>Your attorney completes the transfer; the deed and keys reach you and utilities are set up.</p></li>
</ol>`,
    },
  },
];

export const FAQ = {
  tr: [
    ['Yabancılar Türkiye’de mülk alabilir mi?', 'Evet. Birçok ülke vatandaşı Türkiye’de konut ve iş yeri satın alabilir. Askeri ve güvenlik bölgeleri gibi bazı alanlarda ek izin veya kısıtlamalar uygulanır; uygunluğu işlem öncesinde kontrol ederiz.'],
    ['Alım masrafları toplam ne kadar tutar?', 'Kabaca tapu harcı (alıcı payı %2), döner sermaye, emlak danışmanlığı hizmet bedeli (%2 + KDV), DASK ve yabancılarda değerleme raporu ile tercüme masrafı. Alım Masrafları sayfasındaki hesaplayıcıyla tahmini tutarı görebilirsiniz.'],
    ['Vatandaşlık için ne kadar yatırım gerekir?', 'Güncel düzenlemeye göre en az 400.000 ABD Doları değerinde taşınmaz ve tapuya 3 yıl satılmayacağına dair şerh gerekir.'],
    ['Oturum izni için asgari değer nedir?', 'Güncel uygulamada konutun resmî değerleme raporundaki değerinin en az 200.000 ABD Doları veya Türk lirası karşılığı olması gerekir.'],
    ['Türkiye’ye gelmeden ev alabilir miyim?', 'Evet. Canlı görüntülü gösterim ve vekaletnameyle tüm süreci uzaktan yürütebiliriz.'],
    ['Kredi kullanabilir miyim?', 'Türk vatandaşları ve bazı bankalarda yabancılar konut kredisi kullanabilir. Bankanın ekspertiz değeri ve tapu durumu belirleyicidir; ön değerlendirmeyi birlikte yaparız.'],
    ['Tapu ne kadar sürede çıkar?', 'Belgeler hazır olduğunda tapu devri genellikle randevu gününde tamamlanır. Yabancı alıcılarda değerleme raporu ve vergi numarası için birkaç gün eklenebilir.'],
    ['Kat irtifaklı tapu ile almak güvenli mi?', 'Yeni projelerde yaygındır. Müteahhidin geçmişini, ruhsatları ve teslim taahhüdünü sözleşmede net yazdırmak önemlidir; kontrolleri biz yaparız.'],
    ['Satın aldığım evi kiraya verebilir misiniz?', 'Evet. Kiracı bulma, sözleşme, kira takibi ve yıl boyu mülk yönetimi hizmeti veriyoruz.'],
    ['Hangi dillerde hizmet veriyorsunuz?', 'Türkçe, İngilizce, Rusça, Ukraynaca, Almanca, Fransızca, Felemenkçe, İspanyolca, Arapça ve Farsça.'],
    ['Kripto para ile ödeme yapabilir miyim?', 'Hayır. Türkiye’de kripto varlıkların ödemelerde kullanılması TCMB yönetmeliğiyle yasaktır; ödemeler bankacılık sistemi üzerinden yapılır.'],
    ['Ofisinizi ziyaret edebilir miyim?', 'Elbette. ACC Plaza, Yeşilbahçe Mah. Portakal Çiçeği Bulvarı Cd. No:36/B, Muratpaşa / Antalya adresinde sizi kahve içmeye bekliyoruz.'],
  ],
  en: [
    ['Can foreigners buy property in Türkiye?', 'Yes. Citizens of most countries can buy homes and commercial property. Some areas, such as military or security zones, have extra approvals or restrictions; we check eligibility before you commit.'],
    ['How much are the buying costs?', 'Roughly: title deed fee (buyer’s share 2%), land registry service fee, agency fee (2% + VAT), DASK and, for foreigners, a valuation report and translation. Use the calculator on the Purchase Costs page for an estimate.'],
    ['How much do I need to invest for citizenship?', 'Under current rules, property worth at least USD 400,000 with a 3-year no-sale annotation on the title deed.'],
    ['What is the minimum value for a residence permit?', 'Currently the home’s value in the official valuation report must be at least USD 200,000 or the lira equivalent.'],
    ['Can I buy without travelling to Türkiye?', 'Yes. With live video viewings and a power of attorney we can handle the whole process remotely.'],
    ['Can I get a mortgage?', 'Some Turkish banks lend to foreigners. The bank’s valuation and the deed status are decisive; we help with a pre-assessment.'],
    ['Can you rent out my property?', 'Yes. We find tenants, handle contracts and rent collection, and offer year-round property management.'],
    ['Can I pay with cryptocurrency?', 'No. A Central Bank regulation prohibits the use of crypto assets in payments in Türkiye; payments go through the banking system.'],
    ['Which languages do you speak?', 'Turkish, English, Russian, Ukrainian, German, French, Dutch, Spanish, Arabic and Persian.'],
    ['Can I visit your office?', 'Of course. Visit us at ACC Plaza, Yeşilbahçe, Portakal Çiçeği Bulvarı Cd. No:36/B, Muratpaşa, Antalya.'],
  ],
};
