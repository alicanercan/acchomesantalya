// Mahalle rehberleri (TR + EN). Fiyat/getiri rakamı yok; doğrulanabilir genel bilgi + SSS (FAQPage schema).
// parent: areas.mjs içindeki ilçe rehberinin slug'ı.
const FQ_FOREIGN = {
  tr: ['Yabancılar bu mahallede ev alabilir mi?', 'Yabancıların tapu alımı genel olarak mümkündür; ancak bazı mahalleler dönemsel olarak yabancıların ikamet kaydına kapatılabilir. Oturum izni planlıyorsanız alımdan önce mahallenin güncel durumunu birlikte kontrol ediyoruz.'],
  en: ['Can foreigners buy property here?', 'Foreigners can generally buy title deeds, but some neighbourhoods are periodically closed to residence registration for foreigners. If you plan a residence permit, we check the neighbourhood’s current status with you before you buy.'],
};
const FQ_PRICE = {
  tr: ['Bu mahallede fiyatlar ne kadar?', 'Fiyatlar binanın yaşı, denize uzaklık, kat, manzara ve site olanaklarına göre çok değişiyor. Size bölgedeki gerçekleşmiş satışlara dayanan güncel bir emsal analizi hazırlayabiliriz.'],
  en: ['What do properties cost here?', 'Prices vary widely with building age, distance to the sea, floor, view and complex facilities. We can prepare a current comparables analysis based on completed sales in the area.'],
};
export const MAHALLELER = [
  {
    slug: 'lara-guzeloba', parent: 'muratpasa', ilce: 'Muratpaşa', icon: '🏖️',
    tr: {
      name: 'Lara ve Güzeloba', title: 'Lara ve Güzeloba Mahalle Rehberi', short: 'Kumsal, Düden Şelalesi ve havalimanına yakınlık: Antalya’nın doğu sahilinde site içi yaşam.',
      html: `<p>Lara, Antalya’nın doğu sahil şeridinin adıdır; Güzeloba ise bu hattın en büyük konut mahallelerinden biridir. Bölge, kumsalıyla bilinen Lara Plajı, Düden Şelalesi’nin denize döküldüğü Karpuzkaldıran falezleri ve havalimanına kısa sürüş mesafesiyle öne çıkar.</p>
<h2>Yaşam</h2><ul class="ticks"><li>Lara Plajı ve sahil boyunca uzanan oteller, restoranlar ve plaj kulüpleri.</li><li>Havuzlu ve güvenlikli siteler, müstakil villalar ve yeni projeler bir arada.</li><li>Okullar, özel hastaneler ve alışveriş merkezleri kısa mesafede; şehir merkezi ve havalimanı arasında konum.</li></ul>
<h2>Kimler için uygun?</h2><p>Denize yakın, site içinde yaşamak isteyen aileler; havalimanına yakınlık arayan sık seyahat edenler ve yabancı yerleşimciler. Kiralık talebi yıl boyu devam eder.</p>
<h2>Alırken dikkat</h2><p>Lara’da aynı sokakta bile fiyatlar binanın yaşına, denize uzaklığa ve site olanaklarına göre belirgin şekilde değişir. Uçuş rotasına yakın sokaklarda ses düzeyini yerinde kontrol etmenizi öneririz.</p>`,
      faq: [['Lara’dan havalimanına ne kadar sürede gidilir?', 'Trafik durumuna göre değişmekle birlikte Lara ve Güzeloba, Antalya Havalimanı’na şehrin en yakın konut bölgeleri arasındadır; çoğu noktadan kısa bir sürüş mesafesindedir.'], FQ_FOREIGN.tr, FQ_PRICE.tr],
    },
    en: {
      name: 'Lara & Güzeloba', title: 'Lara & Güzeloba Neighbourhood Guide', short: 'Sandy beach, Düden Waterfall and quick airport access: gated living on Antalya’s eastern coast.',
      html: `<p>Lara is the name of Antalya’s eastern coastline, and Güzeloba is one of its largest residential neighbourhoods. The area is known for sandy Lara Beach, the Karpuzkaldıran cliffs where the Düden Waterfall meets the sea, and a short drive to the airport.</p>
<h2>Living here</h2><ul class="ticks"><li>Lara Beach with hotels, restaurants and beach clubs along the coast.</li><li>Gated complexes with pools and security, detached villas and new projects side by side.</li><li>Schools, private hospitals and malls nearby; located between the city centre and the airport.</li></ul>
<h2>Who it suits</h2><p>Families who want to live near the sea in a complex, frequent travellers who value airport access, and foreign residents. Rental demand continues year-round.</p>
<h2>What to check</h2><p>Prices in Lara can differ sharply even on the same street, depending on building age, distance to the sea and facilities. On streets near the flight path, check noise levels in person.</p>`,
      faq: [['How far is Lara from the airport?', 'It depends on traffic, but Lara and Güzeloba are among the closest residential areas to Antalya Airport, a short drive from most addresses.'], FQ_FOREIGN.en, FQ_PRICE.en],
    },
  },
  {
    slug: 'fener', parent: 'muratpasa', ilce: 'Muratpaşa', icon: '🌊',
    tr: {
      name: 'Fener', title: 'Fener Mahallesi Rehberi', short: 'Falezler, TerraCity ve Eski Lara Yolu: Muratpaşa’nın en çok talep gören mahallelerinden biri.',
      html: `<p>Fener, Muratpaşa’nın Lara tarafında, falezler boyunca uzanan köklü bir mahalle. Eski Lara Yolu’ndaki yürüyüş ve bisiklet parkurları, falezlerden denize girme imkânı, TerraCity ve Beyaz Dünya çevresindeki alışveriş ve restoranlar bölgenin günlük hayatını belirliyor.</p>
<h2>Konut yapısı</h2><ul class="ticks"><li>Falez hattında geniş metrekareli, deniz manzaralı köklü daireler.</li><li>Parsel bazında yükselen yeni projeler ve çatı dubleksleri.</li><li>Çok sayıda muayenehane ve ofis nedeniyle karma kullanım.</li></ul>
<h2>Kimler için uygun?</h2><p>Merkezde ama sakin bir yaşam isteyen aileler ve profesyoneller; nitelikli kiracı hedefleyen yatırımcılar. Doğru fiyatlanmış kiralık daireler hızlı işleme döner.</p>
<p>Ayrıntılı analiz için <a href="/blog/muratpasa-fener-sirinyali-bahcelievler-yatirim-rehberi/">Muratpaşa’nın merkez mahalleleri</a> yazımıza bakın.</p>`,
      faq: [['Fener’de deniz manzaralı daire bulunur mu?', 'Evet, özellikle falez hattındaki binalarda deniz manzaralı daireler var. Manzaranın hangi katlardan ve ne kadar süre korunacağını alım öncesi yerinde birlikte değerlendiriyoruz.'], FQ_FOREIGN.tr, FQ_PRICE.tr],
    },
    en: {
      name: 'Fener', title: 'Fener Neighbourhood Guide', short: 'Cliffs, TerraCity and the Old Lara Road: one of Muratpaşa’s most sought-after neighbourhoods.',
      html: `<p>Fener is an established neighbourhood on the Lara side of Muratpaşa, running along the cliffs. Walking and cycling paths on the Old Lara Road, swimming from the cliffs, and shopping and dining around TerraCity and Beyaz Dünya shape daily life.</p>
<h2>Housing</h2><ul class="ticks"><li>Spacious, established sea-view flats along the cliff line.</li><li>New plot-by-plot projects and rooftop duplexes.</li><li>Mixed use, with many medical practices and offices.</li></ul>
<h2>Who it suits</h2><p>Families and professionals who want a central but calm life, and investors targeting quality tenants. Well-priced rentals let quickly.</p>
<p>For a deeper look, see our article on <a href="/en/blog/muratpasa-fener-sirinyali-bahcelievler-yatirim-rehberi/">central Muratpaşa</a>.</p>`,
      faq: [['Are there sea-view flats in Fener?', 'Yes, especially in buildings along the cliff line. Before buying, we assess on site from which floors the view is visible and how likely it is to last.'], FQ_FOREIGN.en, FQ_PRICE.en],
    },
  },
  {
    slug: 'sirinyali', parent: 'muratpasa', ilce: 'Muratpaşa', icon: '🌴',
    tr: {
      name: 'Şirinyalı', title: 'Şirinyalı Mahalle Rehberi', short: 'Hastaneler, Yalım Park ve falez yürüyüş yolu: merkezi ve hareketli bir yaşam alanı.',
      html: `<p>Şirinyalı, Muratpaşa’nın merkezi mahallelerinden biri. Akra Hotel, Yaşam Hastanesi ve Medical Park’a yürüme mesafesi, Yalım Park, falez üzerindeki Eski Lara yürüyüş yolu ve bilinen kafe ve restoranları bölgeyi Antalya’nın en çok aranan konut alanlarından biri yapıyor.</p>
<h2>Konut ve yatırım</h2><ul class="ticks"><li>Deniz manzaralı daireler: oturum ve uzun dönem kira.</li><li>Cadde üzerindeki ticari dükkânlar: kira sözleşmesi ve kiracının sektörü fiyat kadar önemli.</li><li>Eski binalarda dönüşüm potansiyeli.</li></ul>
<h2>Kimler için uygun?</h2><p>Hastanelere ve hizmetlere yakın yaşamak isteyenler, emekliler, şehir merkezinde kalıcı yaşam arayan yabancılar ve ticari gelir hedefleyen yatırımcılar.</p>`,
      faq: [['Şirinyalı’da ticari dükkân almak mantıklı mı?', 'Cadde üzerindeki dükkânlar sürekli yaya ve araç trafiğinden yararlanır. Alım öncesi mevcut kira sözleşmesini, kiracının sektörünü, imar durumunu ve emsal kira bedellerini birlikte inceliyoruz.'], FQ_FOREIGN.tr, FQ_PRICE.tr],
    },
    en: {
      name: 'Şirinyalı', title: 'Şirinyalı Neighbourhood Guide', short: 'Hospitals, Yalım Park and the cliff-top promenade: central, lively living.',
      html: `<p>Şirinyalı is one of Muratpaşa’s central neighbourhoods. Walking distance to Akra Hotel, Yaşam Hospital and Medical Park, Yalım Park, the cliff-top Old Lara promenade and well-known cafés and restaurants make it one of Antalya’s most searched residential areas.</p>
<h2>Homes and investment</h2><ul class="ticks"><li>Sea-view flats for living in or long-term letting.</li><li>Street-front retail units, where lease terms and the tenant’s sector matter as much as price.</li><li>Regeneration potential in older buildings.</li></ul>
<h2>Who it suits</h2><p>People who want hospitals and services close by, retirees, foreigners seeking year-round city living and investors targeting commercial income.</p>`,
      faq: [['Is buying a shop in Şirinyalı a good idea?', 'Street-front units benefit from steady foot and car traffic. Before buying, we review the current lease, the tenant’s sector, zoning and comparable rents with you.'], FQ_FOREIGN.en, FQ_PRICE.en],
    },
  },
  {
    slug: 'kundu', parent: 'aksu-altintas', ilce: 'Aksu', icon: '🏨',
    tr: {
      name: 'Kundu', title: 'Kundu Mahalle Rehberi', short: 'Büyük tatil otelleri, Lara sahilinin doğu ucu ve havalimanına yakınlık.',
      html: `<p>Kundu, Aksu ilçesinde, Lara sahilinin doğu ucunda yer alır ve Antalya’nın büyük tatil otelleriyle tanınır. Bölgenin sahil hattı ağırlıklı olarak otellere ayrılmıştır; konut projeleri ise daha çok iç kesimde, Altıntaş’a doğru gelişir.</p>
<h2>Yatırımcı açısından</h2><ul class="ticks"><li>Turizm sektöründe çalışanlardan gelen kiralık talebi.</li><li>Havalimanına ve Lara sahiline kısa mesafe.</li><li>Yakındaki Altıntaş’ta site içi yeni projelerle birlikte değerlendirilmesi gereken bir bölge.</li></ul>
<h2>Alırken dikkat</h2><p>“Kundu” adıyla pazarlanan her proje sahilde değildir. Denize gerçek uzaklığı, plaja erişimin nasıl sağlandığını ve kısa dönem kiralama planınız varsa site yönetim planının buna izin verip vermediğini kontrol edin.</p>
<p>Komşu bölge için <a href="/altintas-rehberi/">Altıntaş rehberimize</a> bakın.</p>`,
      faq: [['Kundu’da denize sıfır konut var mı?', 'Sahil hattı büyük ölçüde otellere ayrılmış durumda. Konut projelerinin çoğu iç kesimde; her ilanda denize gerçek mesafeyi ve plaja erişim şeklini ayrıca doğruluyoruz.'], FQ_FOREIGN.tr, FQ_PRICE.tr],
    },
    en: {
      name: 'Kundu', title: 'Kundu Neighbourhood Guide', short: 'Large resort hotels, the eastern end of Lara’s coast and quick airport access.',
      html: `<p>Kundu lies in the Aksu district at the eastern end of the Lara coast and is known for Antalya’s large resort hotels. The seafront is largely given over to hotels; residential projects tend to develop inland, towards Altıntaş.</p>
<h2>For investors</h2><ul class="ticks"><li>Rental demand from people working in tourism.</li><li>A short distance to the airport and Lara beach.</li><li>Best assessed together with new gated projects in neighbouring Altıntaş.</li></ul>
<h2>What to check</h2><p>Not every project marketed as “Kundu” is on the coast. Check the real distance to the sea, how beach access works and, if you plan short lets, whether the site management plan allows it.</p>
<p>See our <a href="/en/altintas-guide/">Altıntaş guide</a> for the neighbouring area.</p>`,
      faq: [['Are there beachfront homes in Kundu?', 'The coastline is largely occupied by hotels. Most residential projects are inland, so we verify the real distance to the sea and how beach access works for every listing.'], FQ_FOREIGN.en, FQ_PRICE.en],
    },
  },
  {
    slug: 'hurma', parent: 'konyaalti', ilce: 'Konyaaltı', icon: '⛰️',
    tr: {
      name: 'Hurma', title: 'Hurma Mahalle Rehberi', short: 'Konyaaltı’nın batısında, dağ ve deniz arasında havuzlu sitelerin yoğun olduğu bir yaşam alanı.',
      html: `<p>Hurma, Konyaaltı’nın batı tarafında, Toros eteklerine doğru gelişen bir konut mahallesi. Son yıllarda havuzlu ve güvenlikli siteleriyle hem yerli ailelerin hem de Antalya’ya yerleşen yabancıların tercih ettiği bölgelerden biri oldu.</p>
<h2>Yaşam</h2><ul class="ticks"><li>Konyaaltı sahiline kısa mesafe; dağ manzaralı ve sakin sokaklar.</li><li>Site içi yaşam: havuz, otopark, güvenlik ve çocuk oyun alanları.</li><li>Market, kafe ve günlük hizmetler mahalle içinde.</li></ul>
<h2>Kimler için uygun?</h2><p>Sahile yakın ama merkezin kalabalığından uzak yaşamak isteyen aileler, yıl boyu Antalya’da yaşayan yabancılar ve uzun dönem kiralama hedefleyen yatırımcılar.</p>
<h2>Alırken dikkat</h2><p>Yeni sitelerde aidatı, site yönetimini ve iskânın alınmış olup olmadığını kontrol edin. Denize yürüme mesafesi binadan binaya değişir.</p>`,
      faq: [['Hurma denize ne kadar yakın?', 'Mahallenin konumuna göre değişir; denize yakın kısımlar yürüme mesafesindeyken iç kesimler kısa bir sürüş gerektirir. Her ilanda gerçek mesafeyi belirtiyoruz.'], FQ_FOREIGN.tr, FQ_PRICE.tr],
    },
    en: {
      name: 'Hurma', title: 'Hurma Neighbourhood Guide', short: 'West Konyaaltı, between mountains and sea, with many gated complexes with pools.',
      html: `<p>Hurma is a residential neighbourhood on the western side of Konyaaltı, growing towards the Taurus foothills. Its gated complexes with pools have made it popular with local families and with foreigners settling in Antalya.</p>
<h2>Living here</h2><ul class="ticks"><li>Close to Konyaaltı beach, with mountain views and quiet streets.</li><li>Complex living: pools, parking, security and play areas.</li><li>Shops, cafés and daily services within the neighbourhood.</li></ul>
<h2>Who it suits</h2><p>Families who want to be near the beach but away from the busy centre, foreigners living in Antalya year-round and investors targeting long-term lets.</p>
<h2>What to check</h2><p>In newer complexes, check site fees, management and whether the occupancy permit (iskan) has been issued. Walking distance to the sea varies from building to building.</p>`,
      faq: [['How close is Hurma to the sea?', 'It depends on the location within the neighbourhood: parts closer to the coast are within walking distance, while inland areas need a short drive. We state the real distance for every listing.'], FQ_FOREIGN.en, FQ_PRICE.en],
    },
  },
  {
    slug: 'liman-sarisu', parent: 'konyaalti', ilce: 'Konyaaltı', icon: '🚡',
    tr: {
      name: 'Liman ve Sarısu', title: 'Liman ve Sarısu Mahalle Rehberi', short: 'Konyaaltı sahilinin batı ucu: Tünektepe teleferiği, Sarısu kıyıları ve yeni projeler.',
      html: `<p>Liman ve Sarısu, Konyaaltı sahil şeridinin batı ucunda yer alır. Bölge, Tünektepe teleferiği, Sarısu’nun mesire alanları ve kıyıları ile Konyaaltı’nın en yeşil yaşam alanları arasındadır; son yıllarda yeni konut projeleriyle hızla gelişiyor.</p>
<h2>Yaşam</h2><ul class="ticks"><li>Deniz ve dağ arasında, şehir merkezine göre daha sakin bir çevre.</li><li>Konyaaltı sahili boyunca uzanan yürüyüş ve bisiklet yolları.</li><li>Yeni siteler ve sosyal olanaklı projeler.</li></ul>
<h2>Kimler için uygun?</h2><p>Doğaya ve denize yakın, sakin bir yaşam arayan aileler, emekliler ve yabancı yerleşimciler.</p>
<h2>Alırken dikkat</h2><p>Gelişmekte olan bölgelerde çevredeki imar durumunu, yapılacak yeni binaları ve toplu taşıma erişimini önceden kontrol etmenizi öneririz.</p>`,
      faq: [['Liman ve Sarısu şehir merkezine uzak mı?', 'Konyaaltı’nın batı ucunda oldukları için merkeze göre biraz daha uzaktırlar; buna karşılık daha sakin ve yeşil bir çevre sunarlar. Ulaşım süresi trafik ve güzergâha göre değişir.'], FQ_FOREIGN.tr, FQ_PRICE.tr],
    },
    en: {
      name: 'Liman & Sarısu', title: 'Liman & Sarısu Neighbourhood Guide', short: 'The western end of Konyaaltı beach: the Tünektepe cable car, Sarısu’s shoreline and new projects.',
      html: `<p>Liman and Sarısu sit at the western end of the Konyaaltı coastline. With the Tünektepe cable car and Sarısu’s picnic areas and shoreline, they are among Konyaaltı’s greenest areas and have grown quickly with new residential projects.</p>
<h2>Living here</h2><ul class="ticks"><li>Between sea and mountains, calmer than the city centre.</li><li>Walking and cycling paths along Konyaaltı beach.</li><li>New complexes and projects with shared facilities.</li></ul>
<h2>Who it suits</h2><p>Families, retirees and foreign residents looking for a quiet life close to nature and the sea.</p>
<h2>What to check</h2><p>In developing areas, check surrounding zoning, planned buildings and public transport access before buying.</p>`,
      faq: [['Are Liman and Sarısu far from the city centre?', 'Being at the western end of Konyaaltı, they are a little further from the centre but offer a calmer, greener setting. Travel time depends on traffic and route.'], FQ_FOREIGN.en, FQ_PRICE.en],
    },
  },
  {
    slug: 'altinkale-yesilbayir', parent: 'dosemealti', ilce: 'Döşemealtı', icon: '🌲',
    tr: {
      name: 'Altınkale ve Yeşilbayır', title: 'Altınkale ve Yeşilbayır Mahalle Rehberi', short: 'Döşemealtı’nın villa bölgeleri: bahçeli yaşam, serin iklim ve geniş arsalar.',
      html: `<p>Altınkale ve Yeşilbayır, Döşemealtı’nda villa ve müstakil yaşamın öne çıktığı mahalleler. Şehir merkezine göre daha yüksek rakımda olan bölge, yazları daha serin ve daha az nemli havasıyla Antalya’da bahçeli ev arayan ailelerin rotasında.</p>
<h2>Konut yapısı</h2><ul class="ticks"><li>Özel havuzlu ve bahçeli villalar, ikiz villalar ve dubleksler.</li><li>Geniş arsa payları; değerin önemli kısmı arsadan gelir.</li><li>Güneş enerjisi ve şarj altyapısı gibi yeni nesil özellikler sunan projeler.</li></ul>
<h2>Kimler için uygun?</h2><p>Yıl boyu Antalya’da yaşayacak, çocuklu aileler ve alan, mahremiyet, sessizlik arayanlar.</p>
<p>ACC HOMES, Altınkale’deki <a href="/projeler/antalle-concept-houses/">Antalle Concept Houses</a> projesinin yetkili satış ofisidir. Ayrıntılar için <a href="/blog/dosemealti-villa-yasami-ve-enerji/">Döşemealtı’nda villa yaşamı</a> yazımıza bakın.</p>`,
      faq: [['Döşemealtı’ndan şehir merkezine ulaşım nasıl?', 'Bölge şehir merkezine karayoluyla bağlıdır; günlük ulaşım genellikle özel araçla yapılır. Okul ve iş güzergâhınıza göre süreyi yerinde birlikte değerlendirebiliriz.'], ['Villa alırken nelere bakmalıyım?', 'Tapu türü ve iskân durumu, arsa büyüklüğü ve hisseniz, havuz ve bahçe bakım maliyeti, site aidatı ve enerji altyapısı en önemli başlıklar.'], FQ_FOREIGN.tr],
    },
    en: {
      name: 'Altınkale & Yeşilbayır', title: 'Altınkale & Yeşilbayır Neighbourhood Guide', short: 'Döşemealtı’s villa areas: garden living, a cooler climate and generous plots.',
      html: `<p>Altınkale and Yeşilbayır are the Döşemealtı neighbourhoods where villa and detached living stand out. At a higher elevation than the city centre, with cooler and less humid summers, they attract families looking for a home with a garden in Antalya.</p>
<h2>Housing</h2><ul class="ticks"><li>Villas with private pools and gardens, semi-detached villas and duplexes.</li><li>Generous plots, with much of the value in the land.</li><li>Projects offering new-generation features such as solar power and EV charging.</li></ul>
<h2>Who it suits</h2><p>Families living in Antalya year-round and anyone seeking space, privacy and quiet.</p>
<p>ACC HOMES is the authorised sales office for <a href="/projeler/antalle-concept-houses/">Antalle Concept Houses</a> in Altınkale. See our article on <a href="/en/blog/dosemealti-villa-yasami-ve-enerji/">villa living in Döşemealtı</a>.</p>`,
      faq: [['How do you get to the city centre from Döşemealtı?', 'The area is connected to the centre by road and daily travel is usually by car. We can assess travel times for your school and work routes on site.'], ['What should I check when buying a villa?', 'Title type and occupancy permit, plot size and your share, pool and garden upkeep, site fees and energy infrastructure are the key points.'], FQ_FOREIGN.en],
    },
  },
  {
    slug: 'belek', parent: 'serik-belek-kadriye', ilce: 'Serik', icon: '⛳',
    tr: {
      name: 'Belek', title: 'Belek Mahalle Rehberi', short: 'Türkiye’nin golf merkezi: tatil köyleri, plajlar ve villa ağırlıklı konut.',
      html: `<p>Belek, Serik ilçesinde, Türkiye’nin golf merkezi olarak bilinen turizm bölgesidir. Çok sayıda golf sahası, büyük tatil köyleri ve uzun kumsallar bölgenin karakterini belirler; konut tarafında villa, rezidans ve site içi daireler öne çıkar.</p>
<h2>Yatırımcı açısından</h2><ul class="ticks"><li>Yazlık ve kısa dönem kiralama talebi; golf turizmi sayesinde sezon dışında da hareketlilik.</li><li>Havalimanına şehir merkezinden daha yakın bir konum.</li><li>Kış aylarında bazı sitelerin ve işletmelerin daha sakin olduğunu hesaba katın.</li></ul>
<h2>Alırken dikkat</h2><p>Kısa dönem kiralama planlıyorsanız izin ve site yönetim planını, yıl boyu yaşayacaksanız çevredeki okul, market ve sağlık hizmetlerinin kışın açık olup olmadığını kontrol edin.</p>`,
      faq: [['Belek’te yıl boyu yaşanır mı?', 'Evet, Belek’te yıl boyu yaşayan yerli ve yabancı aileler var. Ancak bazı turistik işletmeler kışın kapanır; mülk seçerken çevredeki hizmetlerin kış durumunu birlikte değerlendiriyoruz.'], FQ_FOREIGN.tr, FQ_PRICE.tr],
    },
    en: {
      name: 'Belek', title: 'Belek Neighbourhood Guide', short: 'Turkey’s golf capital: resorts, beaches and mostly villa-led housing.',
      html: `<p>Belek, in the Serik district, is the tourism area known as Turkey’s golf capital. Numerous golf courses, large resorts and long sandy beaches define it; on the housing side, villas, residences and apartments in gated complexes stand out.</p>
<h2>For investors</h2><ul class="ticks"><li>Holiday-home and short-let demand, with golf tourism keeping activity going out of season.</li><li>Closer to the airport than the city centre.</li><li>Some complexes and businesses are quieter in winter, so factor that in.</li></ul>
<h2>What to check</h2><p>If you plan short lets, check permits and the site management plan; if you will live year-round, check whether nearby schools, shops and healthcare stay open in winter.</p>`,
      faq: [['Can you live in Belek year-round?', 'Yes, local and foreign families live in Belek all year. Some tourist businesses close in winter, so we review the winter status of nearby services with you when choosing a property.'], FQ_FOREIGN.en, FQ_PRICE.en],
    },
  },
  {
    slug: 'kadriye', parent: 'serik-belek-kadriye', ilce: 'Serik', icon: '🎢',
    tr: {
      name: 'Kadriye', title: 'Kadriye Mahalle Rehberi', short: 'Belek’in komşusu: golf, The Land of Legends ve daha uygun bütçeli konut seçenekleri.',
      html: `<p>Kadriye, Serik ilçesinde Belek’in hemen yanında yer alan bir mahalle. Golf sahaları, The Land of Legends tema parkı ve sahil otelleri bölgenin tanınırlığını artırırken konut tarafında site içi daireler ve villalar sunar.</p>
<h2>Yaşam ve yatırım</h2><ul class="ticks"><li>Belek’in olanaklarına yakın, çoğu zaman daha erişilebilir bütçeler.</li><li>Yazlık, kısa dönem kiralama ve emeklilik için tercih edilen bir bölge.</li><li>Havalimanına görece yakın konum.</li></ul>
<h2>Alırken dikkat</h2><p>Site aidatlarını, sezon dışı doluluğu ve kısa dönem kiralama izinlerini önceden netleştirin.</p>`,
      faq: [['Kadriye ile Belek arasındaki fark nedir?', 'İki bölge yan yanadır ve olanakları paylaşır. Kadriye genellikle daha geniş bütçe aralığında seçenek sunar; Belek ise golf ve tatil köyü yoğunluğuyla daha premium konumlanır.'], FQ_FOREIGN.tr, FQ_PRICE.tr],
    },
    en: {
      name: 'Kadriye', title: 'Kadriye Neighbourhood Guide', short: 'Belek’s neighbour: golf, The Land of Legends and more accessible budgets.',
      html: `<p>Kadriye is a neighbourhood in the Serik district right next to Belek. Golf courses, The Land of Legends theme park and beach hotels raise its profile, while housing consists of apartments in complexes and villas.</p>
<h2>Living and investment</h2><ul class="ticks"><li>Close to Belek’s amenities, often at more accessible budgets.</li><li>Popular for holiday homes, short lets and retirement.</li><li>Relatively close to the airport.</li></ul>
<h2>What to check</h2><p>Clarify site fees, off-season occupancy and short-let permits in advance.</p>`,
      faq: [['What is the difference between Kadriye and Belek?', 'They sit side by side and share amenities. Kadriye usually offers a wider range of budgets, while Belek is positioned more at the premium end thanks to its golf courses and resorts.'], FQ_FOREIGN.en, FQ_PRICE.en],
    },
  },
];
