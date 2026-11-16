// ACC HOMES — Alıcı Rehberi / Buyer's Guide (TR + EN)
// Yasal rakamlar 15.11.2026 tarihinde doğrulandı; değişiklikleri takip edin. Kaynaklar build çıktısında değil, proje notlarında.

export const GUIDE_SEG = { tr: 'alici-rehberi', en: 'buyers-guide', ru: 'buyers-guide' };
export const GUIDE_TITLE = { tr: 'Alıcı Rehberi', en: 'Buyer’s Guide', ru: 'Гид покупателя' };
export const GUIDE_LEAD = {
  tr: 'Türkiye’de, özellikle Antalya’da gayrimenkul alırken bilmeniz gereken her şey: süreç, belgeler, masraflar, vatandaşlık, oturum izni ve tapu.',
  en: 'Everything you need to know about buying property in Türkiye, and Antalya in particular: the process, documents, costs, citizenship, residence permits and the title deed.',
  ru: 'Всё о покупке недвижимости в Турции и Анталии: процесс, документы, расходы, гражданство, ВНЖ и тапу (на английском).',
};
export const GUIDE_UPDATED = '15.11.2026';

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
<tr><th>DASK</th><td>Zorunlu deprem sigortası; tapu devrinde poliçe istenir.</td></tr>
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
<tr><th>DASK</th><td>Compulsory earthquake insurance; a policy is required at the deed transfer.</td></tr>
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
