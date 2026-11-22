// Villa alım-satım ve tapu rehberi (22.11.2026). Genel bilgilendirmedir; mevzuat değişebilir.
export const SEG8 = { tr: { guide: 'villa-alim-satim-rehberi' }, en: { guide: 'villa-buying-selling-guide' }, ru: { guide: 'gid-pokupka-prodazha-villy' } };

// b: blok listesi. ['p', metin] paragraf · ['ul', [..]] liste · ['ok', metin] not kutusu
export const GUIDE = {
  tr: {
    nav: 'Alım-Satım ve Tapu Rehberi', short: 'Tapu Rehberi',
    title: 'Villa Alım-Satım ve Tapu Rehberi 2026: Gerekli Belgeler | ACC VILLAS',
    desc: 'Antalya’da villa alırken ve satarken gerekli belgeler, Web Tapu ve iki aşamalı doğrulama, yeni DASK kuralı, gerçek bedel beyanı, yabancı alıcılar için süreç ve projeden alımda kontroller.',
    eye: 'Rehber · Güncelleme: 22 Kasım 2026', h1: 'Villa alırken ve satarken: tapu süreci ve gerekli belgeler',
    lead: 'Bir villanın tapusu birkaç saatte el değiştirir; o güne kadar yapılan hazırlık ise haftalar sürer. Bu rehberde 2026’da değişen kuralları, Türk ve yabancı alıcılar için gereken belgeleri, hazır ve projeden villa alırken bakılacak noktaları sırayla anlattık.',
    toc: 'Bu rehberde', hero: { e: 'Rehber', t: 'Villa alırken ve satarken tapu rehberi', s: 'Yeni DASK kuralı, Web Tapu, gerçek bedel ve yabancılar için süreç', b: 'Rehberi okuyun' },
    note: 'Bu rehber genel bilgilendirme amaçlıdır, hukuki veya mali danışmanlık yerine geçmez. Mevzuat ve tapu uygulamaları değişebilir; işlem öncesinde güncel durumu birlikte kontrol ediyoruz.',
    cta: { h: 'Belgeleri ve kontrolleri biz hazırlayalım', p: 'Alıcı da olsanız satıcı da, tapu öncesi kontrolleri tapu takip uzmanlarımızla birlikte yapıyor, eksik belgeyi tapu gününden önce tamamlıyoruz.', b1: 'WhatsApp’tan yazın', b2: 'Ücretsiz değerleme' },
    s: [
      ['degisenler', '2026’da neler değişti?', [
        ['p', 'Son iki yılda tapu işlemleri hem dijitalleşti hem de denetim sıkılaştı. Villa alacak ya da satacak herkesin bilmesi gereken dört değişiklik var:'],
        ['ul', ['<b>DASK artık alıcı adına:</b> 5 Eylül 2026’dan itibaren satılan konutun DASK poliçesi yeni sahibine devredilmiyor. Satıcının poliçesi tapudaki satış tarihiyle sona eriyor ve kullanılmayan günlerin primi iade edilebiliyor; alıcı tapudan önce kendi adına yeni poliçe yaptırıyor. Tapu müdürlüğü alıcı adına geçerli poliçe olup olmadığını kontrol ediyor.', '<b>Gerçek satış bedeli beyanı:</b> Tapu harcı, beyan edilen gerçek satış bedeli üzerinden alıcıdan %2, satıcıdan %2 olmak üzere toplam %4 alınıyor; bedel emlak vergisi değerinin altında olamaz. Düşük bedel gösterildiği tespit edilirse eksik harç, vergi ziyaı cezası ve gecikme faiziyle birlikte isteniyor.', '<b>Başvurular Web Tapu üzerinden:</b> Satış başvurusu e-Devlet ile Web Tapu’dan yapılıyor; giriş için iki aşamalı doğrulama zorunlu.', '<b>Ödemelerin izlenebilirliği:</b> Bedelin banka üzerinden ödenmesi hem güvenlik hem de beyanla uyum açısından önemli. Tapuda gösterilen bedel ile hesaplar arasındaki hareket birbirini tutmalı.']]
      ]],
      ['webtapu', 'Web Tapu, iki aşamalı doğrulama ve dolandırıcılığa karşı önlem', [
        ['p', 'Tapu müdürlüğüne gitmeden önce satış başvurusu Web Tapu’dan yapılır: e-Devlet ile giriş yapılır, işlem türü seçilir, tapu müdürlüğü belgeleri inceler, harç tutarı bildirilir ve randevu verilir. İmza günü taraflar tapu müdürlüğünde hazır bulunur.'],
        ['p', 'Web Tapu’ya girişte e-Devlet şifresi tek başına yetmiyor; iki aşamalı giriş açık olmalı. Bu, kimliğinizle doğrulanmış cep telefonunuza gelen kodla yapılıyor. e-Devlet şifresi yoksa PTT’den alınabilir. Bu uygulama sahte vekâlet ve kimlik bilgisiyle yapılan dolandırıcılığın önüne geçmek için getirildi.'],
        ['ok', 'Kimseyle e-Devlet şifrenizi ya da telefonunuza gelen doğrulama kodunu paylaşmayın. Ödemeyi tapu imzası anında, satıcının kendi adına açılmış banka hesabına yapın.'],
        ['p', '<b>Takyidat kontrolü:</b> Taşınmaz üzerinde ipotek, haciz, şerh, beyan ya da irtifak hakkı olup olmadığını gösteren tapu kaydı Web Tapu’dan alınır. Bu kayıt yalnızca alındığı anın fotoğrafıdır; icra dairesinden ya da başka kurumlardan gelecek yeni bir haciz tapu gününe kadar kaydı değiştirebilir. Bu yüzden takyidat %100 güvence değildir; kontrol tapu gününe yakın tekrarlanmalı ve süreci takip eden emlak danışmanının yönlendirmesi dinlenmelidir.']
      ]],
      ['adimlar', 'Tapu süreci adım adım', [
        ['ul', ['Fiyat ve ödeme planında anlaşma; kapora ve şartların yazılı hale getirilmesi', 'Tapu kaydı ve takyidat kontrolü; imar ve iskân durumunun incelenmesi', 'Belediyeden emlak vergisi değeri (rayiç) ve borç durumunun kontrolü; borç varsa satıcı tarafından kapatılması', 'Alıcı adına yeni DASK poliçesinin yapılması', 'Web Tapu’dan satış başvurusu (iki aşamalı doğrulamayla)', 'Tapu müdürlüğünün incelemesi; tapu harcı ve döner sermaye bedelinin ödenmesi', 'Randevu günü imza; ödemenin bankadan yapılması', 'Anahtar teslim tutanağı, abonelik devirleri ve site yönetimine bildirim']]
      ]],
      ['satici', 'Satıcıdan istenen belgeler', [
        ['ul', ['Kimlik (yabancı satıcı için pasaport ve yeminli tercümesi)', 'Tapu bilgileri', 'Belediyeden emlak vergisi değeri ve borç durumu. Birçok tapu müdürlüğü bunu sistemden sorgulasa da yazıyı önceden hazır tutuyoruz; borç varsa tapu öncesi kapatılmalı.', 'Fotoğraf (tapu müdürlüğünün istediği sayıda)', 'Site veya apartman yönetiminden aidat ve ortak gider borcu olmadığına dair yazı', 'Kiracı varsa kira sözleşmesi ve depozito bilgisi', 'Elektrik, su, doğalgaz ve internet aboneliklerinin son faturaları']],
        ['p', 'Yabancı uyruklu bir satıcı Türk alıcıya sattığında değerleme (ekspertiz) raporu aranmıyor. Rapor, alıcının yabancı olduğu satışlarda, yabancıdan yabancıya satış dahil, isteniyor.']
      ]],
      ['alici', 'Alıcıdan istenen belgeler', [
        ['ul', ['Kimlik', 'Fotoğraf', 'Kendi adına düzenlenmiş geçerli DASK poliçesi', 'Tapu harcının (alıcı payı %2) ve döner sermaye bedelinin ödendiğini gösteren dekont', 'Kredi kullanılıyorsa bankanın ekspertiz raporu ve kredi onayı']]
      ]],
      ['yabanci', 'Yabancı alıcılar için süreç ve belgeler', [
        ['p', 'Türkiye’de villa alan yabancı alıcının süreci Türk alıcıya göre birkaç adım daha uzun. Hepsini sizinle birlikte planlıyor, isterseniz vekâletle Türkiye’ye gelmeden tamamlıyoruz.'],
        ['ul', ['<b>Vergi numarası:</b> Pasaportla vergi dairesinden alınır; banka hesabı ve tapu için gerekir.', '<b>Pasaport ve yeminli tercümesi</b> ile fotoğraf', '<b>Türkiye’de banka hesabı:</b> Ödemelerin izlenebilir olması için', '<b>Değerleme (ekspertiz) raporu:</b> Yabancı gerçek kişinin alıcı olduğu satışlarda zorunlu; Web Tapu üzerinden talep edilir ve düzenlendiği tarihten itibaren üç ay geçerlidir.', '<b>Döviz Alım Belgesi (DAB):</b> Satış bedeli kadar dövizin Türkiye’deki bir bankada Türk lirasına çevrildiğini gösteren belge; tapu işleminden önce müdürlüğe sunulur.', '<b>DASK:</b> Alıcı adına yeni poliçe', '<b>Yabancı alım bilgileri:</b> Tapu müdürlüğünün istediği beyan ve formlar', '<b>Bölge kontrolü:</b> Taşınmazın yabancıların edinimine açık olup olmadığı ve askeri yasak ya da güvenlik bölgesi kontrolü; bunu teklif aşamasında önceden kontrol ediyoruz.']],
        ['p', '<b>Türk vatandaşlığı hedefleniyorsa:</b> Uygulamada asgari yatırım tutarı 400.000 ABD doları ve taşınmazın üç yıl satılmayacağına dair tapuya şerh konuluyor. Değer, değerleme raporuyla doğrulanıyor; değerleme şirketi GABİM (Gayrimenkul Bilgi Merkezi) üzerinden seçilebiliyor ve hazırlanan rapor kontrol ediliyor. Vatandaşlık uygunluğunu her villa için ayrı kontrol ediyoruz.'],
        ['p', '<b>Vekâletle alım:</b> Pasaport, tercüme, vergi numarası, banka hesabı, değerleme ve tapu imzası, noterden verilecek vekâletle sizin adınıza takip edilebilir. Vekâletin kapsamını ve süresini işlemden önce birlikte belirliyoruz.']
      ]],
      ['hazir', 'Bitmiş (iskânlı) villa alırken bakılacaklar', [
        ['ul', ['<b>İskân (yapı kullanma izni):</b> Villanın iskânı var mı? İskânsız yapılarda kredi, abonelik ve satış süreçleri zorlaşabilir.', '<b>Kat mülkiyeti mi, kat irtifakı mı?</b> Tapuda cins tashihi yapılıp kat mülkiyetine geçilip geçilmediğine bakın.', '<b>Plana uygunluk:</b> Villanın onaylı mimari projeye uygun olup olmadığını belediyenin imar biriminden alınan proje ile karşılaştırın. Projede olmayan kat, havuz ya da kapalı alanlar sonradan sorun çıkarabilir.', '<b>Takyidat:</b> İpotek, haciz, şerh ve irtifak hakları; tapu gününe yakın tekrar kontrol', '<b>Kiracı:</b> Kiracı varsa kira sözleşmesi, depozitonun kime kalacağı ve tahliye ya da devam durumu önceden yazılı olarak konuşulmalı; kiracının satıcıya borcu varsa tapu öncesi kapatılmalı.', '<b>Borçlar:</b> Emlak vergisi, site aidatları ve ortak gider borçlarının kapatıldığını gösteren “borcu yoktur” yazıları (satıcı evde otursa da oturmasa da)', '<b>Abonelikler:</b> Elektrik, su, doğalgaz ve internet borçlarının kapatılıp aboneliklerin devri; son endekslerin tutanağa yazılması']],
        ['p', '<b>Site ve yönetim planı:</b> Villa sitelerinde yönetim planını mutlaka okuyun. Bahçe ve ortak alan kullanımı, havuz, güvenlik, fitness, spa, hamam, sauna ve yeşil alan giderlerinin nasıl paylaşıldığı (arsa payına göre mi, metrekareye göre mi, eşit mi), müstakil havuz ve bahçe masraflarının kime ait olduğu, sitenin profesyonel bir yönetim şirketiyle mi yoksa malikler tarafından mı yönetildiği aylık maliyetinizi doğrudan etkiler. Yönetimi kurulmuş, düzeni oturmuş siteler komşuluk huzuru açısından da öne çıkar.']
      ]],
      ['proje', 'Projeden (bitmemiş) villa alırken bakılacaklar', [
        ['ul', ['<b>Yapı ruhsatı:</b> Ruhsat alınmadan ön ödemeli konut satış sözleşmesi yapılamaz.', '<b>Sözleşmenin şekli:</b> Ön ödemeli konut satışı, kat irtifakının alıcı adına tapuya tescil edilmesiyle ya da noterde düzenleme şeklinde yapılan satış vaadi sözleşmesiyle kurulur. Mümkünse satış vaadini noterde yaptırıp tapuya şerh ettirin.', '<b>Teknik şartname ve mahal listesi:</b> Müteahhitten kullanılacak malzemeleri ve teslim standardını yazılı alın.', '<b>Kat karşılığı sözleşmesi:</b> Arsa sahibi ile müteahhit arasındaki sözleşmede satın aldığınız bağımsız bölümün kime kaldığını kontrol edin; tapuda arsa sahibi mi, müteahhit mi imza atacak önceden belli olsun.', '<b>Teminat:</b> Sözleşmede verilen teminata ilişkin bilgiler, teslim tarihi ve şekli yer almalı.', '<b>Vergi ve borç durumu:</b> Şirketin vergi ve SGK borcu olup olmadığı, projede ipotek bulunup bulunmadığı', '<b>Ödeme planı ve senetler:</b> Vadeli ödemelerde senetlerin hangi ödemeye karşılık geldiği yazılı olmalı.', '<b>Tapu teslim koşulları:</b> Tapunun hangi ödemeden sonra verileceği, satış bedelinin tapuda nasıl gösterileceği', '<b>Gecikme:</b> Teslim tarihi aşılırsa ne olacağı (gecikme bedeli, emsal kira tutarında tazminat) sözleşmede açıkça yazmalı; gecikme halinde haklarınız için bir avukatla görüşün.', '<b>Yabancı alıcılar için:</b> Bölgenin yabancı edinimine açık olduğu teklif aşamasında kontrol edilmeli.']]
      ]],
      ['teslim', 'Teslim ve anahtar', [
        ['p', 'Tapu imzasından sonra teslimi mutlaka tutanakla yapıyoruz: anahtarlar, kumandalar, sayaç endeksleri, demirbaşlar ve varsa eksikler tarih ve imzayla kayda geçer. Elektrik, su, doğalgaz ve diğer abonelikler toplu olarak devredilir; aidatlar dahil tüm borçlar kapatılmış olarak teslim edilir.']
      ]],
      ['acc', 'ACC VILLAS bu süreci nasıl yönetiyor?', [
        ['p', 'Tapu sürecinde emlak danışmanının işi ilanla bitmez. ACC VILLAS olarak tapu takip işlerinde profesyonellerle çalışıyoruz; takyidat, imar, iskân, borç ve belge kontrollerini alıcılar için biz yaptırıyor, satıcılardan da satışa hazırlık aşamasında bu belgeleri önceden istiyoruz. Yabancı alıcılarda vergi numarasından değerleme raporuna ve döviz alım belgesine kadar her adımı birlikte planlıyor, isteyenler için vekâletle yürütüyoruz.'],
        ['p', 'Hedefimiz tapu gününün sürprizsiz geçmesi: herkes neyi ne zaman getireceğini bilir, ödeme ve teslim kayıt altına alınır.']
      ]],
    ],
    faqT: 'Sık sorulan sorular',
    faq: [
      ['Villa satışında DASK’ı kim yaptırır?', '5 Eylül 2026’dan itibaren satılan konutun DASK poliçesi yeni sahibine devredilmiyor. Alıcı tapudan önce kendi adına yeni poliçe yaptırır; satıcı kendi poliçesinin kullanılmayan süresi için prim iadesi isteyebilir.'],
      ['Tapu harcı ne kadar ve kim öder?', 'Gerçek satış bedeli üzerinden alıcı %2, satıcı %2 olmak üzere toplam %4 tapu harcı ödenir. Bedel emlak vergisi değerinin altında olamaz; ayrıca döner sermaye bedeli ödenir.'],
      ['Tapuda düşük bedel gösterilirse ne olur?', 'Gerçek bedel ile beyan arasında fark tespit edilirse eksik harç, vergi ziyaı cezası ve gecikme faiziyle birlikte alıcıdan ve satıcıdan istenebilir.'],
      ['Web Tapu’ya neden giremiyorum?', 'Web Tapu girişinde e-Devlet hesabınızda iki aşamalı girişin açık olması gerekir. Telefonunuzu kimliğinizle doğrulayıp e-Devlet ayarlarından iki aşamalı girişi açabilirsiniz; e-Devlet şifresi PTT’den alınabilir.'],
      ['Yabancı alıcıdan hangi belgeler istenir?', 'Pasaport ve yeminli tercümesi, vergi numarası, fotoğraf, değerleme raporu, döviz alım belgesi ve alıcı adına DASK. Banka hesabı ödemelerin izlenebilirliği için gereklidir. Bu adımlar vekâletle de yürütülebilir.'],
      ['Yabancı satıcıdan değerleme raporu istenir mi?', 'Yabancı gerçek kişinin satıcı olduğu satışlarda değerleme raporu aranmaz; alıcı da yabancıysa rapor istenir.'],
      ['Takyidat belgesi tam güvence verir mi?', 'Hayır. Takyidat, alındığı anın kaydıdır; tapu gününe kadar yeni bir haciz ya da şerh gelebilir. Kontrol tapu gününe yakın tekrarlanmalıdır.'],
    ],
  },
  en: {
    nav: 'Buying & Title Deed Guide', short: 'Title Deed Guide',
    title: 'Buying or Selling a Villa in Antalya: Title Deed Guide 2026 | ACC VILLAS',
    desc: 'Documents needed to buy or sell a villa in Turkey, the new DASK rule, real-price declaration, Web Tapu with two-step verification, the process for foreign buyers and checks for off-plan villas.',
    eye: 'Guide · Updated 22 November 2026', h1: 'Buying and selling a villa: the title deed process and documents',
    lead: 'A villa’s title deed changes hands in a few hours; the preparation behind that day takes weeks. This guide explains the rules that changed in 2026, the documents Turkish and foreign buyers need, and what to check when buying a finished or an off-plan villa.',
    toc: 'In this guide', hero: { e: 'Guide', t: 'Title deed guide for villa buyers and sellers', s: 'New DASK rule, Web Tapu, real price and the process for foreigners', b: 'Read the guide' },
    note: 'This guide is general information and not legal or financial advice. Regulations and land registry practice can change; we check the current situation with you before each transaction.',
    cta: { h: 'Let us prepare the documents and checks', p: 'Whether you are buying or selling, we run the pre-title-deed checks with our title deed specialists and complete missing documents before the appointment.', b1: 'Message on WhatsApp', b2: 'Free valuation' },
    s: [
      ['changes', 'What changed in 2026?', [
        ['ul', ['<b>DASK earthquake insurance in the buyer’s name:</b> From 5 September 2026 the seller’s DASK policy is no longer transferred to the buyer. It ends on the sale date and unused premium can be refunded; the buyer takes out a new policy in their own name before the title deed, and the land registry checks it.', '<b>Real price declaration:</b> Title deed fee is 2% from the buyer and 2% from the seller (4% in total) on the real sale price, and not below the municipal tax value. Under-declaration can lead to the missing fee plus a tax loss penalty and late interest.', '<b>Applications via Web Tapu:</b> Sale applications are made online through e-Devlet and Web Tapu, which requires two-step verification.', '<b>Traceable payments:</b> Paying through banks keeps the declared price and the money trail consistent.']]
      ]],
      ['webtapu', 'Web Tapu, two-step verification and fraud prevention', [
        ['p', 'The sale application is made on Web Tapu before going to the land registry: log in via e-Devlet, choose the transaction, the registry reviews the documents, announces the fee and gives an appointment. Both parties sign at the land registry on the day.'],
        ['p', 'An e-Devlet password alone is not enough to enter Web Tapu; two-step login must be active, with a code sent to a phone registered to your identity. This was introduced to stop fraud with fake powers of attorney and stolen credentials. Foreign owners use the Web Tapu foreigner portal.'],
        ['ok', 'Never share your e-Devlet password or verification codes. Pay at the moment of signing, into a bank account in the seller’s own name.'],
        ['p', '<b>Encumbrance check:</b> The title record showing mortgages, seizures and annotations is obtained from Web Tapu. It is a snapshot of that moment; a new seizure can be registered before the appointment, so it is not a 100% guarantee and should be repeated close to the deed day.']
      ]],
      ['steps', 'The title deed process step by step', [
        ['ul', ['Agree price and payment plan; put the deposit and terms in writing', 'Check the title record, encumbrances, zoning and occupancy permit', 'Check the municipal tax value and any tax debt; the seller clears debts', 'New DASK policy in the buyer’s name', 'Sale application on Web Tapu', 'Registry review; payment of title deed fee and service fee', 'Signing at the appointment; payment through the bank', 'Key handover protocol, utility transfers and notice to site management']]
      ]],
      ['foreign', 'Documents and process for foreign buyers', [
        ['ul', ['<b>Turkish tax number</b> from the tax office with your passport', '<b>Passport and sworn translation</b>, photos', '<b>Turkish bank account</b> for traceable payments', '<b>Valuation report:</b> mandatory when a foreign individual buys; requested via Web Tapu and valid for three months', '<b>Foreign Exchange Purchase Certificate (DAB):</b> shows that foreign currency equal to the sale price was converted to Turkish lira at a bank in Türkiye; submitted before the title deed', '<b>DASK</b> policy in your name', '<b>Area check:</b> whether the property is open to foreign ownership and outside military or security zones; we check this at offer stage']],
        ['p', '<b>Turkish citizenship:</b> In practice the minimum is USD 400,000 with a three-year no-sale annotation on the title. The value is confirmed by a valuation report; the valuation company can be selected through GABİM, which checks the report. We check citizenship eligibility for each villa separately.'],
        ['p', '<b>By power of attorney:</b> Tax number, translation, bank account, valuation and signing can all be handled for you with a notarised power of attorney, without travelling to Türkiye.'],
        ['p', '<b>Foreign sellers:</b> No valuation report is required when a foreign individual sells to a Turkish buyer; it is required when the buyer is also foreign. DASK, municipal tax value and debt checks apply as usual.']
      ]],
      ['finished', 'Buying a finished villa: what to check', [
        ['ul', ['Occupancy permit (iskân)', 'Full ownership (kat mülkiyeti) or construction servitude (kat irtifakı)', 'Compliance with the approved plans at the municipality’s zoning department', 'Encumbrances, repeated close to the deed day', 'Tenant: lease, deposit and handover agreed in writing', 'No-debt letters for property tax and site fees', 'Utilities: debts cleared, meter readings recorded, subscriptions transferred']],
        ['p', '<b>Site management plan:</b> Read it. How pool, security, fitness, spa, sauna and green-area costs are shared (by land share, by size or equally), who pays for private pools and gardens, and whether a professional company manages the site all affect your monthly costs. Well-established, well-managed complexes also mean calmer neighbours.']
      ]],
      ['offplan', 'Buying off-plan: what to check', [
        ['ul', ['Building permit: pre-paid sales contracts cannot be signed without it', 'Contract form: registration of construction servitude in your name, or a sales promise contract drawn up at a notary and annotated on the title', 'Technical specification and finishes list from the developer', 'Land-owner/developer agreement: who owns your unit and who signs at the registry', 'Guarantee details, delivery date and handover terms in the contract', 'Developer’s tax and social security debts; mortgages on the project', 'Promissory notes matched to each instalment', 'When the title is transferred and what price is declared', 'Delay clause: what happens if delivery is late (penalty, compensation equal to market rent); consult a lawyer for your rights']]
      ]],
      ['acc', 'How ACC VILLAS manages the process', [
        ['p', 'We work with title deed professionals and run the encumbrance, zoning, permit, debt and document checks for our buyers; from sellers we request these documents while preparing the sale. For foreign buyers we plan every step from the tax number to the valuation report and exchange certificate, and can handle it all by power of attorney. Deliveries are always made with a signed handover protocol.']
      ]],
    ],
    faqT: 'Frequently asked questions',
    faq: [
      ['Who pays for DASK earthquake insurance when a villa is sold?', 'Since 5 September 2026 the buyer takes out a new DASK policy in their own name before the title deed; the seller can claim a refund of unused premium.'],
      ['How much is the title deed fee?', '4% of the real sale price: 2% paid by the buyer and 2% by the seller, not below the municipal tax value, plus a service fee.'],
      ['What documents does a foreign buyer need?', 'Passport and sworn translation, Turkish tax number, photos, a valuation report, a Foreign Exchange Purchase Certificate and DASK in the buyer’s name. A Turkish bank account keeps payments traceable. All of this can be handled by power of attorney.'],
      ['Is a valuation report required when a foreigner sells?', 'No, not when a foreign individual sells to a Turkish buyer. It is required when the buyer is foreign.'],
      ['Is an encumbrance record a full guarantee?', 'No. It shows the record at that moment; new seizures can be registered before the deed day, so the check should be repeated close to the appointment.'],
    ],
  },
  ru: {
    nav: 'Гид по покупке и тапу', short: 'Гид по тапу',
    title: 'Покупка и продажа виллы в Анталии: гид по тапу 2026 | ACC VILLAS',
    desc: 'Документы для покупки и продажи виллы в Турции, новое правило DASK, декларация реальной цены, Web Tapu и двухэтапная проверка, процесс для иностранцев и проверка строящихся вилл.',
    eye: 'Гид · Обновлено 22 ноября 2026', h1: 'Покупка и продажа виллы: процесс оформления тапу и документы',
    lead: 'Тапу переходит к новому владельцу за несколько часов, а подготовка занимает недели. В этом гиде — изменения 2026 года, документы для турецких и иностранных покупателей и что проверить при покупке готовой виллы и виллы на этапе строительства.',
    toc: 'В этом гиде', hero: { e: 'Гид', t: 'Гид по тапу для покупателей и продавцов вилл', s: 'Новое правило DASK, Web Tapu, реальная цена и процесс для иностранцев', b: 'Читать гид' },
    note: 'Гид носит общий информационный характер и не заменяет юридическую или финансовую консультацию. Законодательство может меняться; перед сделкой мы проверяем актуальную ситуацию вместе с вами.',
    cta: { h: 'Подготовим документы и проверки', p: 'Покупаете вы или продаёте — мы проводим проверки вместе со специалистами по тапу и собираем недостающие документы до дня сделки.', b1: 'Написать в WhatsApp', b2: 'Бесплатная оценка' },
    s: [
      ['changes', 'Что изменилось в 2026 году', [
        ['ul', ['<b>Страховка DASK на имя покупателя:</b> с 5 сентября 2026 года полис продавца не переходит к покупателю, он прекращается в дату сделки, неиспользованная премия возвращается. Покупатель оформляет новый полис на своё имя до тапу, кадастр это проверяет.', '<b>Декларация реальной цены:</b> пошлина за тапу — 2% с покупателя и 2% с продавца (всего 4%) от реальной цены, не ниже кадастровой стоимости. За занижение цены — доначисление, налоговый штраф и пени.', '<b>Заявки через Web Tapu</b> с обязательной двухэтапной проверкой.', '<b>Прозрачные платежи</b> через банк.']]
      ]],
      ['foreign', 'Документы для иностранных покупателей', [
        ['ul', ['Турецкий налоговый номер', 'Паспорт и нотариальный перевод, фотографии', 'Счёт в турецком банке', 'Отчёт об оценке: обязателен, если покупатель — иностранец; заказывается через Web Tapu, действует три месяца', 'Справка о покупке валюты (DAB): валюта на сумму сделки конвертирована в лиры в банке Турции; подаётся до тапу', 'Полис DASK на имя покупателя', 'Проверка, открыт ли район для иностранцев и не входит ли в военную зону — делаем это заранее']],
        ['p', '<b>Гражданство Турции:</b> на практике минимум 400 000 USD и запрет продажи на три года с отметкой в тапу. Стоимость подтверждается отчётом об оценке; оценочную компанию можно выбрать через GABİM, отчёт проверяется. Пригодность для гражданства проверяем по каждой вилле.'],
        ['p', '<b>По доверенности:</b> все шаги можно пройти без приезда в Турцию по нотариальной доверенности.'],
        ['p', '<b>Если продаёт иностранец:</b> отчёт об оценке не нужен при продаже турецкому покупателю, но нужен, если покупатель тоже иностранец.']
      ]],
      ['webtapu', 'Web Tapu и защита от мошенничества', [
        ['p', 'Заявка на сделку подаётся через Web Tapu: вход через e-Devlet с двухэтапной проверкой по телефону, проверка документов кадастром, оплата пошлины и запись на подпись. Иностранные владельцы используют портал Web Tapu для иностранцев.'],
        ['ok', 'Никому не передавайте пароль e-Devlet и коды подтверждения. Оплачивайте в момент подписи на счёт продавца, открытый на его имя.'],
        ['p', '<b>Выписка об обременениях</b> показывает ипотеки, аресты и отметки на момент запроса. До дня сделки может появиться новый арест, поэтому проверку повторяют ближе к дате тапу.']
      ]],
      ['finished', 'Готовая вилла: что проверить', [
        ['ul', ['Разрешение на заселение (iskân)', 'Полная собственность (kat mülkiyeti) или kat irtifakı', 'Соответствие утверждённому проекту в муниципалитете', 'Обременения — повторно перед сделкой', 'Арендатор: договор, депозит и выезд письменно', 'Справки об отсутствии долгов по налогу и взносам комплекса', 'Коммунальные счета: долги закрыты, показания счётчиков зафиксированы']],
        ['p', '<b>Устав комплекса:</b> как делятся расходы на бассейн, охрану, фитнес, спа и сад (по доле земли, площади или поровну), кто платит за частный бассейн и сад, есть ли профессиональная управляющая компания.']
      ]],
      ['offplan', 'Строящаяся вилла: что проверить', [
        ['ul', ['Разрешение на строительство', 'Нотариальный договор обещания продажи с отметкой в тапу или регистрация kat irtifakı на ваше имя', 'Техническая спецификация от застройщика', 'Договор землевладельца и застройщика: кто подписывает в кадастре', 'Гарантии, срок и порядок передачи', 'Долги застройщика и ипотеки на проект', 'Векселя по каждому платежу', 'Условия передачи тапу и указываемая цена', 'Пункт о задержке: неустойка или компенсация в размере рыночной аренды; консультируйтесь с юристом']]
      ]],
      ['acc', 'Как работает ACC VILLAS', [
        ['p', 'Мы работаем со специалистами по оформлению тапу, проводим проверки обременений, разрешений и долгов для покупателей и заранее запрашиваем документы у продавцов. Для иностранцев планируем все шаги и можем провести сделку по доверенности. Передача ключей всегда оформляется актом.']
      ]],
    ],
    faqT: 'Частые вопросы',
    faq: [
      ['Кто оформляет DASK при продаже виллы?', 'С 5 сентября 2026 года покупатель оформляет новый полис на своё имя до тапу, продавец может вернуть неиспользованную премию.'],
      ['Сколько стоит оформление тапу?', '4% от реальной цены сделки: 2% платит покупатель и 2% продавец, не ниже кадастровой стоимости, плюс сбор за услуги.'],
      ['Какие документы нужны иностранцу?', 'Паспорт с переводом, налоговый номер, фото, отчёт об оценке, справка о покупке валюты и DASK на имя покупателя. Всё можно оформить по доверенности.'],
    ],
  },
};
