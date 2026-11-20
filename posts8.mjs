// Blog 8. parti (20.11.2026): Antalya Yaşam Rehberi — Antalya hastaneler rehberi (TR/EN/RU).
// Kaynak taslak: ACC HOMES Workspace projesi, claude/blog-3-antalya-hastaneler-rehberi.md
// Mahalle bilgileri Caner'in yerel bilgisi; adresler hastane siteleri ve sağlık rehberlerinden (Kasım 2026).
// Atatürk Devlet Hastanesi 31.12.2025'te hasta kabulünü durdurdu (DHA). MMT Hospital adresi eklenince güncellenecek.
const A = (s, t) => `<a href="{{URL:areas}}${s}/">${t}</a>`;
const AR = (s, t) => `<a href="/en/area-guides/${s}/">${t}</a>`; // RU bölge sayfası yok, EN'e bağla

export const POSTS8 = [
  {
    slug: 'antalya-hastaneler-rehberi', cat: 'bolge', date: '2026-11-20', icon: '🏥',
    tr: {
      title: 'Antalya Hastaneler Rehberi: Devlet ve Özel Hastaneler, Yakın Mahalleler',
      seo: 'Antalya Hastaneler Rehberi 2026: Devlet ve Özel Hastaneler İlçe İlçe',
      desc: 'Antalya’daki devlet, üniversite ve özel hastaneler; bulundukları ilçe ve yakın konut bölgeleri. Yabancılar için sağlık sigortası ve Türkiye’de sağlık sistemi.',
      html: `
<p>Ev seçerken hastaneye yakınlık; özellikle aileler, emekliler ve Antalya’ya yeni taşınanlar için önemli bir ölçüt. Bu rehberde Antalya’nın başlıca devlet, üniversite ve özel hastanelerini, bulundukları bölge ve çevresindeki konut alanlarıyla birlikte derledik. Ayrıca yabancılar için sağlık sigortası ve Türkiye’deki sağlık sistemi hakkında temel bilgileri bulacaksınız.</p>
<p class="note">Bu sayfa bilgi amaçlıdır; sağlık tavsiyesi veya hastane karşılaştırması içermez. Bölüm, randevu ve anlaşmalı sigorta bilgisi için hastanelerin resmi sitelerine bakınız.</p>
<h2>Devlet ve üniversite hastaneleri</h2>
<h3>Antalya Şehir Hastanesi (Kepez)</h3>
<p>1.500 yatak kapasitesiyle Mart 2024’te hizmete açılan Antalya Şehir Hastanesi, kentin kamu sağlık kapasitesini önemli ölçüde artırdı. <b>Çevresindeki konut bölgeleri:</b> ${A('kepez', 'Kepez’in tamamı')} (Duacı, Fevzi Çakmak ve Çankaya dahil), Altınova ve Göksu ile Döşemealtı’nın Yeşilbayır ve Altınkale mahalleleri.</p>
<h3>Akdeniz Üniversitesi Hastanesi (Konyaaltı)</h3>
<p>Pınarbaşı’nda, Dumlupınar Bulvarı üzerinde ve tramvay hattının yanında. Tıp fakültesiyle birlikte Antalya’nın eğitim, araştırma ve ileri tedavi merkezi. <b>Çevresindeki konut bölgeleri:</b> Arapsuyu, Pınarbaşı, ${A('hurma', 'Hurma')}, ${A('liman-sarisu', 'Liman')} ve Uncalı.</p>
<h3>Antalya Eğitim ve Araştırma Hastanesi (Muratpaşa)</h3>
<p>Varlık Mahallesi’nde, Kazım Karabekir Caddesi üzerinde; şehir merkezinin başlıca kamu hastanesi. <b>Çevresindeki konut bölgeleri:</b> Varlık ve ${A('muratpasa', 'Muratpaşa merkez')}.</p>
<h3>Kepez Devlet Hastanesi (Kepez)</h3>
<p>Hüsnü Karakaş Mahallesi’nde, Hastane Caddesi üzerinde; Sütçüler bölgesine yapılan 350 yataklı devlet hastanesi. <b>Çevresindeki konut bölgeleri:</b> Hüsnü Karakaş, Sütçüler, Duacı ve Kepez’in batısı.</p>
<h3>Atatürk Devlet Hastanesi (Muratpaşa, Üçgen)</h3>
<p>Şehrin ilk büyük hastanesi olan Atatürk Devlet Hastanesi, Anafartalar Caddesi üzerinde. Depreme dayanıklılık gerekçesiyle 2025 sonunda hasta kabulünü durdurdu; yerine 300 yataklı yeni bir hastane yapılacak.</p>
<h2>Büyük özel hastaneler</h2>
<h3>Medstar Antalya Hastanesi (Muratpaşa, Yıldız)</h3>
<p>2009’dan beri hizmet veren Medstar, Uluslararası Sağlık Turizmi Yetki Belgesi ile yabancı hastalara da hizmet veriyor. Grubun Antalya’da Medstar Topçular Hastanesi de bulunuyor.</p>
<h3>Amerikan Hastanesi / Anatolia (Anadolu) Hastaneleri</h3>
<p>Koç Holding Sağlık Grubu, Antalya’daki Anatolia (Anadolu) Hastanelerini bünyesine kattı; merkez hastane Çaybaşı’nda Antalya Amerikan Hastanesi adıyla hizmet veriyor. Grubun Güzeloba (Lara), Kemer, Belek (Kadriye), Aspendos (Serik), Side ve Alanya’da da hastaneleri bulunuyor; bu şubeler Anatolia, Anadolu ve Amerikan Hastanesi adlarıyla biliniyor.</p>
<h3>Memorial Antalya Hastanesi (Kepez)</h3>
<p>Zafer Mahallesi’nde, Yıldırım Beyazıt Caddesi üzerinde; JCI uluslararası kalite akreditasyonuna sahip.</p>
<h3>Medical Park Antalya Hastanesi (Muratpaşa, Fener)</h3>
<p>${A('fener', 'Fener')} Mahallesi’nde, TerraCity’ye yakın. Yabancı hastalara hizmet veriyor ve çok sayıda yerli ve yabancı sigorta şirketiyle anlaşmalı.</p>
<h3>Rich Hospital (Muratpaşa, Kızıltoprak)</h3>
<p>Şehir merkezine yakın konumda özel hastane.</p>
<h3>Yaşam Hastaneleri (Muratpaşa)</h3>
<p>Özel Antalya Yaşam Hastanesi 2006’dan beri ${A('sirinyali', 'Şirinyalı')}’da hizmet veriyor. Grubun Işıklar’daki Akdeniz Sağlık Vakfı (ASV) Yaşam Hastanesi ile Kemer, Manavgat ve Alanya’da da hastaneleri var.</p>
<h3>Özel Olimpos Hastanesi (Konyaaltı)</h3>
<p>Öğretmenevleri Mahallesi’nde, Çamlık Caddesi üzerinde; ${A('konyaalti', 'Konyaaltı')}’nın yerleşim alanının ortasında.</p>
<h3>Özel Akdeniz Şifa Hastanesi (Kepez)</h3>
<p>Kuzey Yaka Mahallesi’nde, Varsak Köprüsü yakınında; 2011’den beri hizmette.</p>
<h3>MMT Hospital (Belek, Serik)</h3>
<p>${A('belek', 'Belek')}’te hizmet veren özel hastane; Belek, Kadriye ve Altıntaş tarafında yaşayanlar için yakın bir seçenek.</p>
<h2>Antalya’da sağlık: uzun dönemli yaşam için neden güvenilir</h2>
<h3>Hastanelerin Antalya’ya katkısı</h3>
<p>Antalya, her yıl milyonlarca yabancı ziyaretçiyi ağırlayan bir şehir; bu kadar büyük bir uluslararası nüfusa hizmet veren sağlık altyapısı, kentte yaşayanlar için de güçlü bir güvence. Özel hastanelerin bir kısmı uluslararası hasta birimleri ve sağlık turizmi yetki belgesiyle çalışıyor. Sağlık sektörü aynı zamanda binlerce hekim, hemşire ve öğrenci için iş ve eğitim yeri; bu da hastane çevrelerinde sürekli bir konut ve kiralık talebi yaratıyor.</p>
<h3>Kamu, üniversite ve özel: üç katmanlı sistem</h3>
<ul class="ticks">
<li><b>Kamu:</b> Antalya Şehir Hastanesi, Eğitim ve Araştırma Hastanesi ve ilçe devlet hastaneleri.</li>
<li><b>Üniversite:</b> Akdeniz Üniversitesi Hastanesi; eğitim, araştırma ve ileri tedavi.</li>
<li><b>Özel:</b> Medstar, Amerikan / Anatolia, Memorial, Medical Park, Yaşam, Rich Hospital, Olimpos ve diğerleri. Özel hastanelerin çoğu yerli ve yabancı birçok sigorta şirketiyle anlaşmalı.</li>
</ul>
<h3>Yabancılar için sağlık sigortası</h3>
<ul class="ticks">
<li>Türkiye’de ikamet izni başvurusunda, izin süresini kapsayan geçerli bir sağlık sigortası istenir; bu, belirlenmiş asgari teminatlara sahip özel bir sağlık sigortası olabilir.</li>
<li>Türkiye’de kesintisiz bir yıl ikamet eden yabancılar, talep ederlerse SGK genel sağlık sigortasına katılabilir ve devlet hastanelerinden sigortalı olarak yararlanabilir.</li>
<li>Sigorta ve ikamet kuralları değişebilir; güncel şartlar için Göç İdaresi ve SGK kaynaklarına bakılmalıdır.</li>
<li>ACC HOMES International Real Estate olarak, Antalya’da ev alan yabancı müşterilerimize ikamet izni ve sağlık sigortası sürecinde yönlendirme desteği veriyoruz.</li>
</ul>
<h3>Türkiye’de hekim eğitimi</h3>
<p>Türkiye’de tıp fakültesi eğitimi 6 yıl sürer. Uzman olmak isteyen hekimler, Tıpta Uzmanlık Sınavı (TUS) ile uzmanlık eğitimine girer ve dala göre birkaç yıl süren bu eğitimi tamamlar. Antalya’da hekim yetiştiren ve araştırma yapan başlıca kurum Akdeniz Üniversitesi Tıp Fakültesi’dir.</p>
<h2>Hastane çevresindeki mahalleler</h2>
<p>Hastane çevreleri iki açıdan değerlidir: sağlık hizmetine yakın yaşamak isteyen aileler ve emekliler için yaşam kalitesi; sağlık çalışanları ve öğrencilerden gelen sürekli kiralık talebi nedeniyle de yatırımcı için.</p>
<table><thead><tr><th>Hastane bölgesi</th><th>Yakın mahalleler</th><th>Not</th></tr></thead><tbody>
<tr><td>Akdeniz Üniversitesi Hastanesi (Konyaaltı)</td><td>Arapsuyu, Pınarbaşı, Hurma, Liman, Uncalı</td><td>Öğrenci ve personel kiralık talebi; tramvay hattı</td></tr>
<tr><td>Eğitim ve Araştırma, Medstar, Amerikan, Rich (Muratpaşa)</td><td>Varlık, Yıldız, Çaybaşı, Kızıltoprak, merkez</td><td>Merkezde araçsız yaşam</td></tr>
<tr><td>Medical Park, Yaşam (Fener, Şirinyalı)</td><td>Fener, Şirinyalı, Çağlayan, Güzeloba</td><td>Lara yaşamı, aileler</td></tr>
<tr><td>Şehir Hastanesi, Memorial, Akdeniz Şifa (Kepez)</td><td>Kepez geneli, Altınova, Göksu, Yeşilbayır, Altınkale</td><td>Kepez ve Döşemealtı’nda büyüyen konut stoku</td></tr>
</tbody></table>
<h3>Hekimler ve sağlık çalışanları nerede yaşıyor?</h3>
<p>Antalya’da hekimler ve sağlık çalışanları ağırlıklı olarak Lara tarafını tercih ediyor: ${A('lara-guzeloba', 'Lara')}, Yeşilbahçe, Şirinyalı, Fener, Güzeloba, Çağlayan, Kızıltoprak ve Meydankavağı. Bu mahalleler, Muratpaşa’daki özel hastanelere ve şehir merkezine yakınlığıyla öne çıkıyor. Konyaaltı da, özellikle Akdeniz Üniversitesi Hastanesi’ne yakınlığı nedeniyle, sağlık çalışanlarının sık tercih ettiği bölgelerden.</p>
<h2>Hangi bölgeye hangi hastane yakın</h2>
<table><thead><tr><th>Bölge</th><th>Yakın hastaneler</th></tr></thead><tbody>
<tr><td>Konyaaltı</td><td>Akdeniz Üniversitesi Hastanesi, Olimpos</td></tr>
<tr><td>Muratpaşa merkez</td><td>Eğitim ve Araştırma, Medstar, Antalya Amerikan Hastanesi, Rich Hospital</td></tr>
<tr><td>Lara, Fener, Şirinyalı</td><td>Medical Park, Antalya Yaşam, Amerikan / Anatolia Lara</td></tr>
<tr><td>Kepez</td><td>Şehir Hastanesi, Memorial, Akdeniz Şifa, Kepez Devlet</td></tr>
<tr><td>Belek, Kadriye</td><td>MMT Hospital, Amerikan / Anatolia Belek</td></tr>
<tr><td>Altıntaş, Aksu</td><td>Amerikan / Anatolia Lara (Güzeloba), MMT Hospital (Belek)</td></tr>
<tr><td>Döşemealtı</td><td>Antalya Şehir Hastanesi, Memorial, Konyaaltı’ndaki hastaneler</td></tr>
</tbody></table>
<h2>Antalya’da ev arıyorsanız</h2>
<p>ACC HOMES International Real Estate olarak hastaneye, okula ya da denize yakın yaşamak isteyenler için Antalya’nın her bölgesinde satılık ve kiralık konut seçeneklerini birlikte değerlendiriyoruz: <a href="{{WA}}" target="_blank" rel="noopener">WhatsApp’tan yazın →</a> ya da <a href="{{URL:list}}">ilanlarımıza göz atın</a>.</p>`,
      faq: [
        ['Antalya’daki en büyük devlet hastanesi hangisi?', '1.500 yataklı Antalya Şehir Hastanesi.'],
        ['Yabancılar hangi hastanelerde hizmet alabilir?', 'Medstar, Medical Park ve Memorial uluslararası hastalara hizmet veriyor; diğer hastaneler için resmi sitelerine bakınız.'],
        ['Yabancılar devlet hastanesinden yararlanabilir mi?', 'Türkiye’de kesintisiz bir yıl ikamet eden yabancılar SGK genel sağlık sigortasına katılarak devlet hastanelerinden sigortalı olarak yararlanabilir.'],
        ['Atatürk Devlet Hastanesi açık mı?', 'Hayır. Depreme dayanıklılık gerekçesiyle 2025 sonunda hasta kabulünü durdurdu; yerine 300 yataklı yeni bir hastane yapılacak.'],
      ],
    },
    en: {
      title: 'Antalya Hospitals Guide: Public and Private Hospitals and Nearby Neighbourhoods',
      seo: 'Antalya Hospitals Guide 2026: Public and Private Hospitals by District',
      desc: 'Public, university and private hospitals in Antalya, the districts they are in and the residential areas nearby, plus health insurance for foreigners and Türkiye’s health system.',
      html: `
<p>When choosing a home, being close to a hospital matters, especially for families, retirees and people new to Antalya. In this guide we cover Antalya’s main public, university and private hospitals, with their locations and the residential areas around them. You will also find the basics of health insurance for foreigners and of Türkiye’s health system.</p>
<p class="note">This page is for information only and does not offer medical advice or compare hospitals. For departments, appointments and accepted insurers, please check each hospital’s official website.</p>
<h2>Public and university hospitals</h2>
<h3>Antalya City Hospital (Kepez)</h3>
<p>Opened in March 2024 with 1,500 beds, Antalya City Hospital has significantly increased the city’s public healthcare capacity. <b>Nearby residential areas:</b> ${A('kepez', 'all of Kepez')} (including Duacı, Fevzi Çakmak and Çankaya), Altınova and Göksu, and Yeşilbayır and Altınkale in Döşemealtı.</p>
<h3>Akdeniz University Hospital (Konyaaltı)</h3>
<p>On Dumlupınar Boulevard in Pınarbaşı, next to the tram line. Together with its medical school it is Antalya’s centre for teaching, research and advanced treatment. <b>Nearby residential areas:</b> Arapsuyu, Pınarbaşı, ${A('hurma', 'Hurma')}, ${A('liman-sarisu', 'Liman')} and Uncalı.</p>
<h3>Antalya Training and Research Hospital (Muratpaşa)</h3>
<p>On Kazım Karabekir Street in the Varlık neighbourhood; the main public hospital in the city centre. <b>Nearby residential areas:</b> Varlık and ${A('muratpasa', 'central Muratpaşa')}.</p>
<h3>Kepez State Hospital (Kepez)</h3>
<p>A 350-bed state hospital on Hastane Street in the Hüsnü Karakaş neighbourhood, in the Sütçüler area. <b>Nearby residential areas:</b> Hüsnü Karakaş, Sütçüler, Duacı and western Kepez.</p>
<h3>Atatürk State Hospital (Muratpaşa, Üçgen)</h3>
<p>The city’s first large hospital, on Anafartalar Street. It stopped admitting patients at the end of 2025 for earthquake-resistance reasons, and a new 300-bed hospital will be built in its place.</p>
<h2>Major private hospitals</h2>
<h3>Medstar Antalya Hospital (Muratpaşa, Yıldız)</h3>
<p>Open since 2009, Medstar holds an International Health Tourism Authorisation Certificate and also serves foreign patients. The group also runs Medstar Topçular Hospital in Antalya.</p>
<h3>American Hospital / Anatolia (Anadolu) Hospitals</h3>
<p>Koç Holding’s healthcare group has taken over Antalya’s Anatolia (Anadolu) Hospitals; the main hospital in Çaybaşı operates as Antalya American Hospital. The group also has hospitals in Güzeloba (Lara), Kemer, Belek (Kadriye), Aspendos (Serik), Side and Alanya, known under the Anatolia, Anadolu and American Hospital names.</p>
<h3>Memorial Antalya Hospital (Kepez)</h3>
<p>On Yıldırım Beyazıt Street in the Zafer neighbourhood; accredited by JCI for international quality standards.</p>
<h3>Medical Park Antalya Hospital (Muratpaşa, Fener)</h3>
<p>In the ${A('fener', 'Fener')} neighbourhood, close to TerraCity. It serves foreign patients and works with many Turkish and international insurers.</p>
<h3>Rich Hospital (Muratpaşa, Kızıltoprak)</h3>
<p>A private hospital close to the city centre.</p>
<h3>Yaşam Hospitals (Muratpaşa)</h3>
<p>Private Antalya Yaşam Hospital has served ${A('sirinyali', 'Şirinyalı')} since 2006. The group also runs the Akdeniz Health Foundation (ASV) Yaşam Hospital in Işıklar and hospitals in Kemer, Manavgat and Alanya.</p>
<h3>Private Olimpos Hospital (Konyaaltı)</h3>
<p>On Çamlık Street in the Öğretmenevleri neighbourhood, in the middle of residential ${A('konyaalti', 'Konyaaltı')}.</p>
<h3>Private Akdeniz Şifa Hospital (Kepez)</h3>
<p>In the Kuzey Yaka neighbourhood near Varsak Bridge; open since 2011.</p>
<h3>MMT Hospital (Belek, Serik)</h3>
<p>A private hospital in ${A('belek', 'Belek')}, a nearby option for residents of Belek, Kadriye and Altıntaş.</p>
<h2>Healthcare in Antalya: why it is reliable for long-term living</h2>
<h3>What hospitals bring to Antalya</h3>
<p>Antalya welcomes millions of international visitors every year, and a healthcare system built to serve such a large international population is a strong reassurance for residents too. Some private hospitals have international patient departments and health tourism authorisation. The healthcare sector also employs and trains thousands of doctors, nurses and students, creating steady housing and rental demand around hospitals.</p>
<h3>Public, university and private: a three-tier system</h3>
<ul class="ticks">
<li><b>Public:</b> Antalya City Hospital, the Training and Research Hospital and district state hospitals.</li>
<li><b>University:</b> Akdeniz University Hospital, for teaching, research and advanced treatment.</li>
<li><b>Private:</b> Medstar, American / Anatolia, Memorial, Medical Park, Yaşam, Rich Hospital, Olimpos and others. Most private hospitals work with many Turkish and international insurers.</li>
</ul>
<h3>Health insurance for foreigners</h3>
<ul class="ticks">
<li>A residence permit application in Türkiye requires valid health insurance covering the permit period; this can be private health insurance with set minimum cover.</li>
<li>Foreigners who have lived in Türkiye continuously for one year can, if they wish, join the SGK general health insurance scheme and use state hospitals as insured patients.</li>
<li>Insurance and residence rules can change; check the Presidency of Migration Management and SGK for current requirements.</li>
<li>At ACC HOMES International Real Estate we guide our foreign clients who buy a home in Antalya through the residence permit and health insurance process.</li>
</ul>
<h3>How doctors are trained in Türkiye</h3>
<p>Medical school in Türkiye takes six years. Doctors who want to specialise enter specialty training through the Medical Specialty Exam (TUS) and complete several more years of training depending on the field. In Antalya, the main institution training doctors and carrying out research is the Akdeniz University Faculty of Medicine.</p>
<h2>Neighbourhoods around the hospitals</h2>
<p>Areas around hospitals are valuable in two ways: quality of life for families and retirees who want to live near healthcare, and steady rental demand from healthcare staff and students for investors.</p>
<table><thead><tr><th>Hospital area</th><th>Nearby neighbourhoods</th><th>Note</th></tr></thead><tbody>
<tr><td>Akdeniz University Hospital (Konyaaltı)</td><td>Arapsuyu, Pınarbaşı, Hurma, Liman, Uncalı</td><td>Rental demand from students and staff; tram line</td></tr>
<tr><td>Training and Research, Medstar, American, Rich (Muratpaşa)</td><td>Varlık, Yıldız, Çaybaşı, Kızıltoprak, centre</td><td>Car-free city-centre living</td></tr>
<tr><td>Medical Park, Yaşam (Fener, Şirinyalı)</td><td>Fener, Şirinyalı, Çağlayan, Güzeloba</td><td>Lara lifestyle, families</td></tr>
<tr><td>City Hospital, Memorial, Akdeniz Şifa (Kepez)</td><td>Kepez, Altınova, Göksu, Yeşilbayır, Altınkale</td><td>Growing housing stock in Kepez and Döşemealtı</td></tr>
</tbody></table>
<h3>Where do doctors and healthcare staff live?</h3>
<p>In Antalya, doctors and healthcare staff mostly choose the Lara side of the city: ${A('lara-guzeloba', 'Lara')}, Yeşilbahçe, Şirinyalı, Fener, Güzeloba, Çağlayan, Kızıltoprak and Meydankavağı, which stand out for their proximity to the private hospitals in Muratpaşa and to the city centre. Konyaaltı is also a frequent choice, especially for its proximity to Akdeniz University Hospital.</p>
<h2>Which hospital is closest to which area</h2>
<table><thead><tr><th>Area</th><th>Nearby hospitals</th></tr></thead><tbody>
<tr><td>Konyaaltı</td><td>Akdeniz University Hospital, Olimpos</td></tr>
<tr><td>Central Muratpaşa</td><td>Training and Research, Medstar, Antalya American Hospital, Rich Hospital</td></tr>
<tr><td>Lara, Fener, Şirinyalı</td><td>Medical Park, Antalya Yaşam, American / Anatolia Lara</td></tr>
<tr><td>Kepez</td><td>City Hospital, Memorial, Akdeniz Şifa, Kepez State</td></tr>
<tr><td>Belek, Kadriye</td><td>MMT Hospital, American / Anatolia Belek</td></tr>
<tr><td>Altıntaş, Aksu</td><td>American / Anatolia Lara (Güzeloba), MMT Hospital (Belek)</td></tr>
<tr><td>Döşemealtı</td><td>Antalya City Hospital, Memorial, Konyaaltı hospitals</td></tr>
</tbody></table>
<h2>Looking for a home in Antalya?</h2>
<p>ACC HOMES International Real Estate helps people who want to live near a hospital, school or the sea find homes for sale and rent in every part of Antalya: <a href="{{WA}}" target="_blank" rel="noopener">message us on WhatsApp →</a> or <a href="{{URL:list}}">browse our listings</a>.</p>`,
      faq: [
        ['What is the largest public hospital in Antalya?', 'Antalya City Hospital, with 1,500 beds.'],
        ['Which hospitals serve foreign patients?', 'Medstar, Medical Park and Memorial serve international patients; for other hospitals, check their official websites.'],
        ['Can foreigners use state hospitals?', 'Foreigners who have lived in Türkiye continuously for one year can join the SGK general health insurance scheme and use state hospitals as insured patients.'],
        ['Is Atatürk State Hospital open?', 'No. It stopped admitting patients at the end of 2025 for earthquake-resistance reasons, and a new 300-bed hospital will be built in its place.'],
      ],
    },
    ru: {
      title: 'Больницы Анталии: государственные и частные клиники и районы рядом с ними',
      seo: 'Больницы Анталии 2026: государственные и частные больницы по районам',
      desc: 'Государственные, университетские и частные больницы Анталии, их районы и жильё рядом, а также медицинская страховка для иностранцев и система здравоохранения Турции.',
      html: `
<p>При выборе жилья близость к больнице важна, особенно для семей, пенсионеров и тех, кто только переезжает в Анталию. В этом гиде — главные государственные, университетские и частные больницы Анталии, их расположение и жилые районы рядом. Также вы найдёте основное о медицинской страховке для иностранцев и о системе здравоохранения Турции.</p>
<p class="note">Страница носит информационный характер и не является медицинской рекомендацией или сравнением больниц. Об отделениях, записи и страховых компаниях узнавайте на официальных сайтах больниц.</p>
<h2>Государственные и университетские больницы</h2>
<h3>Городская больница Анталии (Кепез)</h3>
<p>Открытая в марте 2024 года, больница на 1 500 коек значительно увеличила возможности государственной медицины города. <b>Жилые районы рядом:</b> ${AR('kepez', 'весь Кепез')} (включая Дуаджы, Февзи Чакмак и Чанкая), Алтынова и Гёксу, а также Йешилбайыр и Алтынкале в Дёшемеалты.</p>
<h3>Больница Университета Акдениз (Коньяалты)</h3>
<p>На бульваре Думлупынар в районе Пынарбашы, рядом с трамвайной линией. Вместе с медицинским факультетом это центр обучения, исследований и высокотехнологичного лечения Анталии. <b>Жилые районы рядом:</b> Арапсую, Пынарбашы, ${AR('hurma', 'Хурма')}, ${AR('liman-sarisu', 'Лиман')} и Унджалы.</p>
<h3>Учебно-исследовательская больница Анталии (Муратпаша)</h3>
<p>На улице Казым Карабекир в районе Варлык; главная государственная больница центра города. <b>Жилые районы рядом:</b> Варлык и ${AR('muratpasa', 'центр Муратпаши')}.</p>
<h3>Государственная больница Кепеза (Кепез)</h3>
<p>Государственная больница на 350 коек на улице Хастане в районе Хюсню Каракаш, в зоне Сютчюлер. <b>Жилые районы рядом:</b> Хюсню Каракаш, Сютчюлер, Дуаджы и западный Кепез.</p>
<h3>Государственная больница имени Ататюрка (Муратпаша, Учген)</h3>
<p>Первая крупная больница города на улице Анафарталар. В конце 2025 года прекратила приём пациентов по причине сейсмоустойчивости; на её месте построят новую больницу на 300 коек.</p>
<h2>Крупные частные больницы</h2>
<h3>Medstar Antalya (Муратпаша, Йылдыз)</h3>
<p>Работающая с 2009 года, Medstar имеет сертификат на международный медицинский туризм и принимает иностранных пациентов. В Анталии у группы есть также больница Medstar Topçular.</p>
<h3>Американская больница / больницы Anatolia (Anadolu)</h3>
<p>Медицинская группа Koç Holding объединила больницы Anatolia (Anadolu) в Анталии; главная больница в Чайбашы работает как Американская больница Анталии. У группы есть больницы в Гюзелобе (Лара), Кемере, Белеке (Кадрие), Аспендосе (Серик), Сиде и Аланье, известные под названиями Anatolia, Anadolu и Американская больница.</p>
<h3>Memorial Antalya (Кепез)</h3>
<p>На улице Йылдырым Беязыт в районе Зафер; имеет международную аккредитацию качества JCI.</p>
<h3>Medical Park Antalya (Муратпаша, Фенер)</h3>
<p>В районе ${AR('fener', 'Фенер')}, рядом с TerraCity. Принимает иностранных пациентов и работает со многими турецкими и международными страховыми компаниями.</p>
<h3>Rich Hospital (Муратпаша, Кызылтопрак)</h3>
<p>Частная больница недалеко от центра города.</p>
<h3>Больницы Yaşam (Муратпаша)</h3>
<p>Частная больница Antalya Yaşam работает в ${AR('sirinyali', 'Ширинъялы')} с 2006 года. У группы есть также больница ASV Yaşam в Ышыкларе и больницы в Кемере, Манавгате и Аланье.</p>
<h3>Частная больница Olimpos (Коньяалты)</h3>
<p>На улице Чамлык в районе Ögretmenevleri, в самом центре жилого ${AR('konyaalti', 'Коньяалты')}.</p>
<h3>Частная больница Akdeniz Şifa (Кепез)</h3>
<p>В районе Кузей Яка у моста Варсак; работает с 2011 года.</p>
<h3>MMT Hospital (Белек, Серик)</h3>
<p>Частная больница в ${AR('belek', 'Белеке')}, удобная для жителей Белека, Кадрие и Алтынташа.</p>
<h2>Медицина в Анталии: почему ей можно доверять при долгосрочной жизни</h2>
<h3>Что больницы дают Анталии</h3>
<p>Анталия ежегодно принимает миллионы иностранных гостей, и система здравоохранения, рассчитанная на такое международное население, — надёжная опора и для жителей. Часть частных больниц имеет международные отделения и сертификат медицинского туризма. Кроме того, медицина даёт работу и образование тысячам врачей, медсестёр и студентов, что создаёт постоянный спрос на жильё и аренду рядом с больницами.</p>
<h3>Государственные, университетские и частные: три уровня</h3>
<ul class="ticks">
<li><b>Государственные:</b> Городская больница Анталии, Учебно-исследовательская больница и районные государственные больницы.</li>
<li><b>Университетская:</b> больница Университета Акдениз — обучение, исследования и сложное лечение.</li>
<li><b>Частные:</b> Medstar, Американская / Anatolia, Memorial, Medical Park, Yaşam, Rich Hospital, Olimpos и другие. Большинство частных больниц работают со многими турецкими и иностранными страховщиками.</li>
</ul>
<h3>Медицинская страховка для иностранцев</h3>
<ul class="ticks">
<li>При подаче на вид на жительство в Турции требуется действующая медицинская страховка на весь срок разрешения; это может быть частная страховка с установленным минимальным покрытием.</li>
<li>Иностранцы, непрерывно прожившие в Турции один год, по желанию могут вступить в систему общего медицинского страхования SGK и обслуживаться в государственных больницах как застрахованные.</li>
<li>Правила страхования и проживания могут меняться; актуальные требования уточняйте в Управлении миграции и SGK.</li>
<li>ACC HOMES International Real Estate помогает иностранным клиентам, купившим жильё в Анталии, пройти процесс получения ВНЖ и медицинской страховки.</li>
</ul>
<h3>Как готовят врачей в Турции</h3>
<p>Обучение на медицинском факультете в Турции длится шесть лет. Чтобы стать специалистом, врачи сдают экзамен TUS и проходят несколько лет специализации в зависимости от направления. Главное учреждение в Анталии, готовящее врачей и ведущее исследования, — медицинский факультет Университета Акдениз.</p>
<h2>Районы рядом с больницами</h2>
<p>Районы у больниц ценны вдвойне: качество жизни для семей и пенсионеров, которые хотят жить рядом с медициной, и стабильный арендный спрос со стороны медперсонала и студентов — для инвесторов.</p>
<table><thead><tr><th>Больница</th><th>Районы рядом</th><th>Заметка</th></tr></thead><tbody>
<tr><td>Университет Акдениз (Коньяалты)</td><td>Арапсую, Пынарбашы, Хурма, Лиман, Унджалы</td><td>Спрос на аренду от студентов и персонала; трамвай</td></tr>
<tr><td>Учебно-исследовательская, Medstar, Американская, Rich (Муратпаша)</td><td>Варлык, Йылдыз, Чайбашы, Кызылтопрак, центр</td><td>Жизнь в центре без машины</td></tr>
<tr><td>Medical Park, Yaşam (Фенер, Ширинъялы)</td><td>Фенер, Ширинъялы, Чаглаян, Гюзелоба</td><td>Жизнь в Ларе, семьи</td></tr>
<tr><td>Городская больница, Memorial, Akdeniz Şifa (Кепез)</td><td>Кепез, Алтынова, Гёксу, Йешилбайыр, Алтынкале</td><td>Растущий жилой фонд Кепеза и Дёшемеалты</td></tr>
</tbody></table>
<h3>Где живут врачи и медперсонал?</h3>
<p>В Анталии врачи и медработники чаще всего выбирают сторону Лары: ${AR('lara-guzeloba', 'Лара')}, Йешилбахче, Ширинъялы, Фенер, Гюзелоба, Чаглаян, Кызылтопрак и Мейданкавагы — эти районы близки к частным больницам Муратпаши и к центру. Часто выбирают и Коньяалты, особенно из-за близости к больнице Университета Акдениз.</p>
<h2>Какая больница ближе к какому району</h2>
<table><thead><tr><th>Район</th><th>Ближайшие больницы</th></tr></thead><tbody>
<tr><td>Коньяалты</td><td>Университет Акдениз, Olimpos</td></tr>
<tr><td>Центр Муратпаши</td><td>Учебно-исследовательская, Medstar, Американская больница Анталии, Rich Hospital</td></tr>
<tr><td>Лара, Фенер, Ширинъялы</td><td>Medical Park, Antalya Yaşam, Американская / Anatolia Лара</td></tr>
<tr><td>Кепез</td><td>Городская больница, Memorial, Akdeniz Şifa, Государственная больница Кепеза</td></tr>
<tr><td>Белек, Кадрие</td><td>MMT Hospital, Американская / Anatolia Белек</td></tr>
<tr><td>Алтынташ, Аксу</td><td>Американская / Anatolia Лара (Гюзелоба), MMT Hospital (Белек)</td></tr>
<tr><td>Дёшемеалты</td><td>Городская больница, Memorial, больницы Коньяалты</td></tr>
</tbody></table>
<h2>Ищете жильё в Анталии?</h2>
<p>ACC HOMES International Real Estate поможет тем, кто хочет жить рядом с больницей, школой или морем, подобрать жильё на продажу и в аренду во всех районах Анталии: <a href="{{WA}}" target="_blank" rel="noopener">напишите нам в WhatsApp →</a> или <a href="{{URL:list}}">посмотрите наши объекты</a>.</p>`,
      faq: [
        ['Какая самая большая государственная больница в Анталии?', 'Городская больница Анталии на 1 500 коек.'],
        ['Какие больницы принимают иностранцев?', 'Medstar, Medical Park и Memorial принимают международных пациентов; о других больницах узнавайте на их официальных сайтах.'],
        ['Могут ли иностранцы обслуживаться в государственных больницах?', 'Иностранцы, непрерывно прожившие в Турции один год, могут вступить в систему страхования SGK и обслуживаться в государственных больницах как застрахованные.'],
        ['Работает ли больница имени Ататюрка?', 'Нет. В конце 2025 года она прекратила приём пациентов по причине сейсмоустойчивости; на её месте построят новую больницу на 300 коек.'],
      ],
    },
  },
];
