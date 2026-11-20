// posts6 (AVM rehberi, Antalya tarihi) için EN ve RU sürümleri (20.11.2026, Caner onayı).
const A = (s, t) => `<a href="{{URL:areas}}${s}/">${t}</a>`;
const P = (s, t) => s === 'antalle-concept-houses' ? `<a href="{{URL:projects}}${s}/">${t}</a>` : `<a href="/projeler/${s}/">${t}</a>`; // proje sayfası yalnız TR'de var (Antalle hariç)
const AR = (s, t) => `<a href="/en/area-guides/${s}/">${t}</a>`; // RU bölge sayfası yok, EN'e bağla

export const POSTS6_I18N = {
  'antalya-avm-rehberi': {
    en: {
      title: 'Antalya Shopping Malls Guide 2026: Malls and the Neighbourhoods Around Them',
      seo: 'Antalya Shopping Malls Guide 2026: Malls and Nearby Neighbourhoods',
      desc: 'Antalya’s shopping malls district by district: MarkAntalya, TerraCity, Mall of Antalya, ÖzdilekPark, 5M Migros, Erasta, Deepo and more, with the residential areas around each.',
      html: `
<p>When choosing a home in Antalya, being close to shops, cinemas and everyday services is one of the deciding factors, especially for families. In this guide we have gathered the city’s main shopping malls, with their locations and the residential neighbourhoods around them. The order follows Google searches made from Antalya.</p>
<h2>1. ÖzdilekPark Antalya (Kepez)</h2>
<p>ÖzdilekPark in the Fabrikalar neighbourhood appeals to all ages with a wide choice of shops and restaurants, a cinema, bowling and children’s play areas. Many city bus lines stop right in front of it.</p>
<p><b>Nearby residential areas:</b> Fabrikalar, Dokuma, Kültür and central Kepez. See our ${A('kepez', 'Kepez guide')}.</p>
<h2>2. MarkAntalya (Muratpaşa, city centre)</h2>
<p>MarkAntalya in Tahılpazarı sits in the very heart of Antalya and is the city’s common meeting point. Bus lines and the tram cross here, at one of the busiest pedestrian spots in town, and Kaleiçi old town is a short walk away. Fashion, technology, food and a cinema are all under one roof, and MediaMarkt is here for electronics.</p>
<p><b>For home seekers:</b> car-free living, public transport in every direction and a central location with strong rental demand. More in our ${A('muratpasa', 'Muratpaşa guide')}.</p>
<h2>3. TerraCity (Muratpaşa, Fener)</h2>
<p>TerraCity in the Fener neighbourhood is the most popular mall on the Lara side of the city, with a large number of shops and restaurants, a big food court and a cinema. Many bus lines stop outside.</p>
<p>TerraCity is a social hub as well as a place to shop: its seasonal Christmas Market and ice rink are among the city’s favourite winter events, and there are padel courts on the roof. Its key stores include Zara, MediaMarkt and Decathlon.</p>
<p><b>Nearby residential areas:</b> ${A('fener', 'Fener')}, ${A('sirinyali', 'Şirinyalı')}, ${A('lara-guzeloba', 'Lara and Güzeloba')} and Çağlayan.</p>
<h2>4. Mall of Antalya (Kepez, airport road)</h2>
<p>Mall of Antalya, on the airport road, stands out with its shops, cinema and children’s areas. It is connected inside to Deepo Outlet, and IKEA and Agora are right next door, together forming a large shopping axis on the east side of the city.</p>
<p><b>Nearby residential areas:</b> Altınova, Altıntaş, ${A('kundu', 'Kundu')} and eastern Lara. Our authorised projects in this area: ${P('prime-lara-altintas', 'Prime Lara')}, ${P('falez-manzara-altintas', 'Falez Manzara')} and ${P('math-uno-dos', 'Math UNO and DOS')}. See also our ${A('aksu-altintas', 'Altıntaş guide')}.</p>
<h2>5. Erasta Antalya (Kepez)</h2>
<p>Erasta is in Kepez, between the Konyaaltı and Döşemealtı districts, close to Akdeniz University Hospital and the intercity bus station. It has a cinema, restaurants and a large Decathlon sports store, and it is the nearest big mall for residents of Döşemealtı.</p>
<p><b>Nearby:</b> ${A('konyaalti', 'Konyaaltı')}, ${A('dosemealti', 'Döşemealtı')} and ${P('nox-apt-dosemealti', 'Nox Apt')}.</p>
<h2>6. 5M Migros (Konyaaltı)</h2>
<p>5M Migros on Atatürk Boulevard in Arapsuyu is one of Antalya’s first large shopping centres and has been one of the city’s best-loved malls since it opened. It hosts concerts and social and cultural events, and alongside a large hypermarket, cinema and food court you will find Zara, MediaMarkt and a Tesla store. It is close to bus and tram stops, Beach Park and Atatürk Park.</p>
<p><b>Nearby residential areas:</b> Arapsuyu, ${A('liman-sarisu', 'Liman')}, ${A('hurma', 'Hurma')}, Uncalı and the Konyaaltı seafront.</p>
<h2>7. Deepo Outlet Center (Kepez, opposite the airport)</h2>
<p>Deepo, opposite the airport, is one of the best-known outlet centres in the region, with discounted brand stores, and is connected to Mall of Antalya. Nearby residential areas are Altınova, Altıntaş and Kundu.</p>
<h2>8. Agora Antalya and IKEA (Kepez)</h2>
<p>Agora Antalya is home to IKEA and within walking distance of Mall of Antalya, making it a one-stop address for furniture, home décor and groceries when setting up a new home.</p>
<h2>9. Fenix Center (Konyaaltı, Liman)</h2>
<p>Fenix Center in the Liman neighbourhood is one of Antalya’s first mixed-use projects, bringing together a shopping mall, a Swissôtel and residences. It is currently the fastest-rising mall search on Google, reflecting curiosity about its stores and opening. See our ${A('liman-sarisu', 'Liman and Sarısu guide')}.</p>
<h2>10. The Land of Legends Shopping Avenue (Serik, Kadriye)</h2>
<p>In the Belek tourism area, The Land of Legends in Kadriye combines a theme park, water park and hotel with a shopping avenue of stores, restaurants and cafés. It is close to Belek’s golf courses and golf hotels and a short drive from the airport.</p>
<p><b>For home seekers:</b> golf and holiday living, rental potential and fast airport access. More in our ${A('belek', 'Belek')} and ${A('kadriye', 'Kadriye')} guides.</p>
<h2>Which mall is closest to which area</h2>
<table><thead><tr><th>Area</th><th>Nearby malls</th></tr></thead><tbody>
<tr><td>Konyaaltı (Liman, Hurma, Arapsuyu)</td><td>5M Migros, Fenix Center, Erasta</td></tr>
<tr><td>Central Muratpaşa</td><td>MarkAntalya</td></tr>
<tr><td>Lara, Fener, Şirinyalı, Güzeloba</td><td>TerraCity</td></tr>
<tr><td>Kepez</td><td>ÖzdilekPark, Erasta</td></tr>
<tr><td>Döşemealtı</td><td>Erasta</td></tr>
<tr><td>Altıntaş, Altınova, Kundu</td><td>Mall of Antalya, Deepo, Agora and IKEA</td></tr>
<tr><td>Belek, Kadriye</td><td>The Land of Legends</td></tr>
</tbody></table>
<h2>Let’s find the right neighbourhood together</h2>
<p>ACC HOMES International Real Estate offers homes for sale and rent in every part of Antalya. Tell us which mall, school or workplace you would like to live near, and we will go through the options with you: <a href="{{WA}}" target="_blank" rel="noopener">message us on WhatsApp →</a> or <a href="{{URL:list}}">browse our listings</a>.</p>
<p class="note">Store and event information was compiled in November 2026 and may change; please check each mall’s official website for current details.</p>`,
      faq: [
        ['Which malls are closest to the airport?', 'Deepo Outlet, Mall of Antalya and Agora/IKEA are close to each other on the airport road.'],
        ['Which malls are in Konyaaltı?', '5M Migros and Fenix Center in the Liman neighbourhood. Erasta is also close to northern Konyaaltı.'],
        ['Which mall is closest to Lara?', 'TerraCity in the Fener neighbourhood.'],
        ['Which Antalya malls have Zara, MediaMarkt and Decathlon?', 'Zara: TerraCity and 5M Migros. MediaMarkt: MarkAntalya, TerraCity and 5M Migros. Decathlon: Erasta and TerraCity.'],
        ['Which mall is easiest to reach by public transport?', 'MarkAntalya in the city centre, where bus lines and the tram meet.'],
      ],
    },
    ru: {
      title: 'Торговые центры Анталии 2026: путеводитель по ТЦ и районам рядом с ними',
      seo: 'Торговые центры Анталии 2026: ТЦ и районы рядом',
      desc: 'Торговые центры Анталии по районам: MarkAntalya, TerraCity, Mall of Antalya, ÖzdilekPark, 5M Migros, Erasta, Deepo и другие; расположение и жилые районы рядом.',
      html: `
<p>При выборе жилья в Анталии близость магазинов, кинотеатров и повседневной инфраструктуры — один из решающих критериев, особенно для семей. В этом путеводителе мы собрали главные торговые центры города с их расположением и жилыми районами вокруг. Порядок основан на поисковых запросах Google из Анталии.</p>
<h2>1. ÖzdilekPark Antalya (Кепез)</h2>
<p>ÖzdilekPark в районе Фабрикалар рассчитан на все возрасты: большой выбор магазинов и ресторанов, кинотеатр, боулинг и детские игровые зоны. Рядом останавливаются многие городские автобусы.</p>
<p><b>Жилые районы рядом:</b> Фабрикалар, Докума, Кюльтюр и центр Кепеза. Подробнее — в нашем ${AR('kepez', 'гиде по Кепезу')}.</p>
<h2>2. MarkAntalya (Муратпаша, центр города)</h2>
<p>MarkAntalya в районе Тахылпазары находится в самом центре Анталии и служит общим местом встреч горожан. Здесь пересекаются автобусные маршруты и трамвай, а до старого города Калеичи — несколько минут пешком. Мода, техника, кафе и кинотеатр под одной крышей; есть и магазин электроники MediaMarkt.</p>
<p><b>Для покупателей жилья:</b> жизнь без машины, транспорт во всех направлениях и центральное расположение с высоким спросом на аренду. Подробнее — в ${AR('muratpasa', 'гиде по Муратпаше')}.</p>
<h2>3. TerraCity (Муратпаша, Фенер)</h2>
<p>TerraCity в районе Фенер — самый популярный ТЦ со стороны Лары: множество магазинов и ресторанов, большой фуд-корт и кинотеатр. Рядом проходят многие автобусные маршруты.</p>
<p>TerraCity — не только место для покупок, но и точка притяжения: зимой здесь работают рождественская ярмарка и каток, одни из самых любимых новогодних событий города, а на крыше есть корты для падела. Среди ключевых магазинов — Zara, MediaMarkt и Decathlon.</p>
<p><b>Жилые районы рядом:</b> ${AR('fener', 'Фенер')}, ${AR('sirinyali', 'Ширинъялы')}, ${AR('lara-guzeloba', 'Лара и Гюзелоба')}, Чаглаян.</p>
<h2>4. Mall of Antalya (Кепез, дорога в аэропорт)</h2>
<p>Mall of Antalya на дороге в аэропорт выделяется магазинами, кинотеатром и детскими зонами. Он соединён с Deepo Outlet, а рядом находятся IKEA и Agora — вместе они образуют крупную торговую ось на востоке города.</p>
<p><b>Жилые районы рядом:</b> Алтынова, Алтынташ, ${AR('kundu', 'Кунду')} и восточная Лара. Наши авторизованные проекты здесь: ${P('prime-lara-altintas', 'Prime Lara')}, ${P('falez-manzara-altintas', 'Falez Manzara')} и ${P('math-uno-dos', 'Math UNO и DOS')}. См. также ${AR('aksu-altintas', 'гид по Алтынташу')}.</p>
<h2>5. Erasta Antalya (Кепез)</h2>
<p>Erasta расположен в Кепезе, между районами Коньяалты и Дёшемеалты, рядом с больницей Университета Акдениз и междугородним автовокзалом. Здесь кинотеатр, рестораны и большой спортивный магазин Decathlon. Для жителей Дёшемеалты это ближайший крупный ТЦ.</p>
<p><b>Рядом:</b> ${AR('konyaalti', 'Коньяалты')}, ${AR('dosemealti', 'Дёшемеалты')} и ${P('nox-apt-dosemealti', 'Nox Apt')}.</p>
<h2>6. 5M Migros (Коньяалты)</h2>
<p>5M Migros на бульваре Ататюрка в районе Арапсую — один из первых крупных торговых центров Анталии и с самого открытия один из самых любимых. Здесь проходят концерты, социальные и культурные мероприятия; помимо большого гипермаркета, кинотеатра и фуд-корта есть Zara, MediaMarkt и магазин Tesla. Рядом остановки автобуса и трамвая, Beach Park и парк Ататюрка.</p>
<p><b>Жилые районы рядом:</b> Арапсую, ${AR('liman-sarisu', 'Лиман')}, ${AR('hurma', 'Хурма')}, Унджалы и побережье Коньяалты.</p>
<h2>7. Deepo Outlet Center (Кепез, напротив аэропорта)</h2>
<p>Deepo напротив аэропорта — один из самых известных аутлетов региона со скидками в брендовых магазинах; соединён с Mall of Antalya. Жилые районы рядом: Алтынова, Алтынташ и Кунду.</p>
<h2>8. Agora Antalya и IKEA (Кепез)</h2>
<p>В Agora Antalya находится IKEA, а до Mall of Antalya можно дойти пешком. Удобный адрес, чтобы обустроить новый дом: мебель, декор и продукты в одном месте.</p>
<h2>9. Fenix Center (Коньяалты, Лиман)</h2>
<p>Fenix Center в районе Лиман — один из первых в Анталии многофункциональных проектов, объединяющий торговый центр, отель Swissôtel и резиденции. Сейчас это самый быстрорастущий запрос о ТЦ в Google — интерес к магазинам и открытию высок. Подробнее — в ${AR('liman-sarisu', 'гиде по Лиману и Сарысу')}.</p>
<h2>10. The Land of Legends Shopping Avenue (Серик, Кадрие)</h2>
<p>The Land of Legends в Кадрие, в туристической зоне Белека, объединяет тематический парк, аквапарк и отель с торговой улицей магазинов, ресторанов и кафе. Рядом гольф-поля и гольф-отели Белека, до аэропорта недалеко.</p>
<p><b>Для покупателей жилья:</b> гольф и курортная жизнь, потенциал аренды и быстрый доступ к аэропорту. Подробнее — в гидах по ${AR('belek', 'Белеку')} и ${AR('kadriye', 'Кадрие')}.</p>
<h2>Какой ТЦ ближе к какому району</h2>
<table><thead><tr><th>Район</th><th>Ближайшие ТЦ</th></tr></thead><tbody>
<tr><td>Коньяалты (Лиман, Хурма, Арапсую)</td><td>5M Migros, Fenix Center, Erasta</td></tr>
<tr><td>Центр Муратпаши</td><td>MarkAntalya</td></tr>
<tr><td>Лара, Фенер, Ширинъялы, Гюзелоба</td><td>TerraCity</td></tr>
<tr><td>Кепез</td><td>ÖzdilekPark, Erasta</td></tr>
<tr><td>Дёшемеалты</td><td>Erasta</td></tr>
<tr><td>Алтынташ, Алтынова, Кунду</td><td>Mall of Antalya, Deepo, Agora и IKEA</td></tr>
<tr><td>Белек, Кадрие</td><td>The Land of Legends</td></tr>
</tbody></table>
<h2>Подберём район вместе</h2>
<p>ACC HOMES International Real Estate предлагает недвижимость на продажу и в аренду во всех районах Анталии. Расскажите, рядом с каким ТЦ, школой или работой вы хотите жить, — и мы вместе подберём варианты: <a href="{{WA}}" target="_blank" rel="noopener">напишите нам в WhatsApp →</a> или <a href="{{URL:list}}">посмотрите наши объекты</a>.</p>
<p class="note">Информация о магазинах и мероприятиях собрана в ноябре 2026 года и может меняться; актуальные данные — на официальных сайтах ТЦ.</p>`,
      faq: [
        ['Какие ТЦ ближе всего к аэропорту?', 'Deepo Outlet, Mall of Antalya и Agora/IKEA расположены рядом друг с другом на дороге в аэропорт.'],
        ['Какие ТЦ есть в Коньяалты?', '5M Migros и Fenix Center в районе Лиман. Erasta также недалеко от северной части Коньяалты.'],
        ['Какой ТЦ ближе всего к Ларе?', 'TerraCity в районе Фенер.'],
        ['В каких ТЦ Анталии есть Zara, MediaMarkt и Decathlon?', 'Zara: TerraCity и 5M Migros. MediaMarkt: MarkAntalya, TerraCity и 5M Migros. Decathlon: Erasta и TerraCity.'],
        ['До какого ТЦ проще всего добраться на транспорте?', 'До MarkAntalya в центре города, где пересекаются автобусы и трамвай.'],
      ],
    },
  },
  'antalya-tarihi-antik-kentler': {
    en: {
      title: 'Antalya’s History and Ancient Cities: A Guide from Kaleiçi to Aspendos',
      seo: 'Antalya History and Ancient Cities: From Kaleiçi to Aspendos',
      desc: 'A short history of Antalya from ancient Attaleia to today, plus Aspendos, Perge, Olympos, Çıralı and the Chimaera flames, Phaselis, Kaleiçi, Termessos, Side, Myra, Kaş, Kalkan, Alanya and the Lycian Way.',
      html: `
<p>Living in Antalya means living inside thousands of years of history: a concert at Aspendos at the weekend, a walk along the colonnaded street of Perge, dinner in the narrow lanes of Kaleiçi in the evening. In this guide we cover a short history of Antalya and the historic sites people around the world are most curious about, ordered by worldwide Google searches.</p>
<h2>A short history of Antalya</h2>
<ul class="ticks">
<li><b>Founding, Attaleia:</b> Antalya was founded in the 2nd century BC by King Attalos II of Pergamon and was named Attaleia after him; today’s name comes from it.</li>
<li><b>Pamphylia and Lycia:</b> In antiquity the east of today’s Antalya was the region of Pamphylia, home to Perge, Aspendos and Side. The west was Lycia, with cities such as Phaselis, Olympos, Myra and Patara.</li>
<li><b>Roman era:</b> Hadrian’s Gate, built to mark Emperor Hadrian’s visit in AD 130, still stands at the entrance to Kaleiçi.</li>
<li><b>Seljuk and Ottoman eras:</b> The city passed to the Seljuks in the early 13th century, and the Yivli Minaret in Kaleiçi became a symbol of that period and of Antalya. Kaleiçi’s stone houses and narrow streets are an Ottoman legacy.</li>
<li><b>The Republic and today:</b> With tourism, Antalya has become one of Türkiye’s fastest-growing and most visited cities.</li>
</ul>
<h2>Aspendos (Serik)</h2>
<p>Aspendos has one of the best-preserved ancient theatres in the world. The Roman-era theatre is still used as a stage today and hosts events such as the Aspendos Opera and Ballet Festival. Watching a concert under the stars in a historic building is one of the privileges of living in Antalya. Nearby residential areas: ${A('belek', 'Belek')}, ${A('kadriye', 'Kadriye')} and ${A('serik-belek-kadriye', 'Serik')}.</p>
<h2>Perge (Aksu)</h2>
<p>One of the most important cities of Pamphylia, Perge is known for its monumental city gates, colonnaded street and stadium. Being very close to the city centre and the airport makes it easy to visit. Nearby residential areas: ${A('aksu-altintas', 'Aksu and Altıntaş')}; our projects here are ${P('prime-lara-altintas', 'Prime Lara')} and ${P('falez-manzara-altintas', 'Falez Manzara')}.</p>
<h2>Olympos (Kumluca), Çıralı and the Chimaera flames (Kemer)</h2>
<p>Olympos is a Lycian city stretching along a stream through the forest and opening onto the beach.</p>
<p>Next door, Çıralı belongs to the Ulupınar neighbourhood of Kemer and lies within Olympos Beydağları National Park. As a result it has stayed a quiet village of garden guesthouses and small boutique hotels rather than large resorts. Its beach, shared with Olympos, is one of Türkiye’s sea turtle nesting sites; during the nesting season the beach is closed at night, and conservation is carried out together with a cooperative founded by the villagers. Citrus orchards and organic farming continue in the village.</p>
<p>Above Çıralı, at Yanartaş (ancient Chimaera), natural gas escaping between the rocks has been burning on its own for thousands of years. Legend says the hero Bellerophon, riding the winged horse Pegasus, defeated the fire-breathing Chimaera here. A path of about 1.4 km leads up from Çıralı, and the flames are most striking after dark.</p>
<h2>Phaselis (Kemer)</h2>
<p>An ancient harbour city with three ports, Phaselis combines history and nature with its pine forest and clear coves. You can walk the ancient street and swim in the bay. Nearby residential areas: ${A('kemer', 'Kemer')} and Tekirova.</p>
<h2>Kaleiçi (Muratpaşa): the heart of the city</h2>
<p>The ancient harbour, Hadrian’s Gate, the Yivli Minaret, Hıdırlık Tower, restored Ottoman mansions, boutique hotels and art galleries: Kaleiçi keeps Antalya’s history alive right in the middle of the city. The nearby Antalya Museum displays finds from the region’s ancient cities. Nearby residential areas: ${A('muratpasa', 'central Muratpaşa')} and the streets around Kaleiçi.</p>
<h2>Termessos (Mount Güllük)</h2>
<p>Built like an “eagle’s nest” on a mountaintop, Termessos is known as the city Alexander the Great besieged but could not take. Its ruins, inside a national park, are explored on a nature walk. Nearby residential area: ${A('dosemealti', 'Döşemealtı')}; our project there is ${P('antalle-concept-houses', 'Antalle Concept Houses')}.</p>
<h2>Side (Manavgat)</h2>
<p>With its seaside Temple of Apollo and ancient theatre, Side is one of the most beautiful places to watch the sunset among ancient cities.</p>
<h2>Myra and Saint Nicholas (Demre)</h2>
<p>Myra, where Saint Nicholas, known today as Santa Claus, served as bishop, draws visitors from all over the world with the Church of Saint Nicholas and its rock-cut Lycian tombs.</p>
<h2>Kaş: Antiphellos and Kekova</h2>
<p>Kaş is built on the ancient Lycian city of Antiphellos. In town you will find an ancient theatre overlooking the sea, the King’s Tomb standing in a side street and tombs carved into the rocks. Nearby Kekova is toured by boat to see the “sunken city”, said to have slipped beneath the sea in earthquakes, the castle of Simena (Kaleköy) and sarcophagi standing in the water. With diving, paragliding and unspoilt coves, Kaş is a boutique seaside town where many foreigners have settled.</p>
<h2>Kalkan and Patara</h2>
<p>Kalkan, part of Kaş, is a former harbour village whose stone houses and narrow streets make it one of the most popular villa areas on the Mediterranean. Nearby Patara is known for the assembly building of the Lycian League and as the birthplace of Saint Nicholas, and its long beach is a sea turtle nesting site. A little further on are Xanthos and Letoon, on the UNESCO World Heritage List.</p>
<h2>Alanya: the Seljuk coastal capital</h2>
<p>Known in antiquity as Korakesion, Alanya was taken in 1221 by the Seljuk Sultan Alaeddin Keykubad I, who renamed it Alaiye, the origin of its present name. Three symbols of that era still stand:</p>
<ul class="ticks">
<li><b>Alanya Castle:</b> walls encircling the peninsula, an inner citadel and a historic quarter</li>
<li><b>Red Tower (Kızıl Kule):</b> an octagonal tower guarding the harbour</li>
<li><b>Shipyard (Tersane):</b> a Seljuk shipyard carved into the rock</li>
</ul>
<p>With Damlataş Cave and the ancient cities around it, Alanya is one of the Turkish cities where foreigners buy the most homes.</p>
<h2>The Lycian Way</h2>
<p>Türkiye’s first waymarked long-distance trail, the Lycian Way runs from Fethiye to Antalya and is more than 500 km long. It passes many of the ancient cities in this guide, including Patara, Kalkan, Kaş, Kekova, Myra, Olympos and Phaselis. Spring and autumn are the best seasons for walking.</p>
<h2>History and everyday life</h2>
<p>Areas close to ancient sites offer both quality of life and rental demand. Belek and Kadriye are near Aspendos, Altıntaş near Perge, Kemer near Phaselis, Döşemealtı near Termessos and Muratpaşa near Kaleiçi. In a city where history is this close, it is worth factoring in when choosing where to live.</p>
<p>ACC HOMES International Real Estate offers homes for sale and rent in every part of Antalya. Tell us whether you would like to live close to history, the sea or nature, and we will go through the options with you: <a href="{{WA}}" target="_blank" rel="noopener">message us on WhatsApp →</a></p>`,
      faq: [
        ['What is Antalya’s most famous ancient city?', 'In worldwide searches Aspendos and Perge stand out, with Olympos and Phaselis also among the most searched.'],
        ['What was Antalya’s ancient name?', 'Attaleia, after King Attalos II of Pergamon, who founded the city.'],
        ['Where are the historic sights in the city centre?', 'In Kaleiçi: Hadrian’s Gate, the Yivli Minaret, Hıdırlık Tower and the ancient harbour. Antalya Museum is also close to the centre.'],
        ['Where is the Chimaera (Yanartaş) and when should I go?', 'Above Çıralı, in Kemer. The flames are best seen after dark.'],
      ],
    },
    ru: {
      title: 'История Анталии и античные города: от Калеичи до Аспендоса',
      seo: 'История Анталии и античные города: от Калеичи до Аспендоса',
      desc: 'Краткая история Анталии от древней Атталии до наших дней, а также Аспендос, Перге, Олимпос, Чиралы и Янарташ, Фаселис, Калеичи, Термессос, Сиде, Мира, Каш, Калкан, Аланья и Ликийская тропа.',
      html: `
<p>Жить в Анталии — значит жить внутри многотысячелетней истории: концерт в Аспендосе на выходных, прогулка по колоннадной улице Перге, ужин вечером в узких улочках Калеичи. В этом гиде — краткая история Анталии и исторические места, которыми больше всего интересуются во всём мире; порядок основан на мировых поисковых запросах Google.</p>
<h2>Краткая история Анталии</h2>
<ul class="ticks">
<li><b>Основание, Атталия:</b> Анталию основал во II веке до н. э. пергамский царь Аттал II, и город назвали в его честь Атталией; отсюда и современное название.</li>
<li><b>Памфилия и Ликия:</b> В древности восток нынешней Анталии был Памфилией — здесь Перге, Аспендос и Сиде. Запад относился к Ликии с такими городами, как Фаселис, Олимпос, Мира и Патара.</li>
<li><b>Римская эпоха:</b> Ворота Адриана, построенные в честь визита императора Адриана в 130 году н. э., до сих пор стоят у входа в Калеичи.</li>
<li><b>Сельджуки и османы:</b> В начале XIII века город перешёл к сельджукам, и минарет Йивли в Калеичи стал символом той эпохи и всей Анталии. Каменные дома и узкие улочки Калеичи — наследие османского периода.</li>
<li><b>Республика и сегодня:</b> Благодаря туризму Анталия стала одним из самых быстрорастущих и посещаемых городов Турции.</li>
</ul>
<h2>Аспендос (Серик)</h2>
<p>В Аспендосе находится один из лучше всего сохранившихся античных театров мира. Театр римской эпохи до сих пор используется как сцена и принимает, например, Международный фестиваль оперы и балета «Аспендос». Концерт под звёздами в древнем театре — одна из привилегий жизни в Анталии. Жилые районы рядом: ${AR('belek', 'Белек')}, ${AR('kadriye', 'Кадрие')} и ${AR('serik-belek-kadriye', 'Серик')}.</p>
<h2>Перге (Аксу)</h2>
<p>Один из важнейших городов Памфилии, Перге известен монументальными городскими воротами, колоннадной улицей и стадионом. Он совсем близко к центру и аэропорту, поэтому его легко посетить. Жилые районы рядом: ${AR('aksu-altintas', 'Аксу и Алтынташ')}; наши проекты здесь — ${P('prime-lara-altintas', 'Prime Lara')} и ${P('falez-manzara-altintas', 'Falez Manzara')}.</p>
<h2>Олимпос (Кумлуджа), Чиралы и Янарташ (Кемер)</h2>
<p>Олимпос — ликийский город, протянувшийся вдоль ручья через лес и выходящий к морю.</p>
<p>Соседний Чиралы относится к району Улупынар в Кемере и находится на территории национального парка «Олимпос-Бейдаглары». Поэтому здесь нет крупных отелей — это тихая деревня с гостевыми домами в садах и небольшими бутик-отелями. Общий с Олимпосом пляж — одно из мест гнездования морских черепах в Турции: в сезон гнездования пляж ночью закрыт, а охрану ведут вместе с кооперативом, созданным жителями. В деревне выращивают цитрусовые и занимаются органическим земледелием.</p>
<p>Над Чиралы, на Янарташе (античная Химера), природный газ, выходящий из-под камней, горит сам по себе уже тысячи лет. По легенде, именно здесь герой Беллерофонт на крылатом коне Пегасе победил огнедышащую Химеру. От Чиралы ведёт тропа длиной около 1,4 км; огни красивее всего в темноте.</p>
<h2>Фаселис (Кемер)</h2>
<p>Античный портовый город с тремя гаванями, Фаселис сочетает историю и природу: сосновый лес и прозрачные бухты. Можно пройтись по древней улице и искупаться в бухте. Жилые районы рядом: ${AR('kemer', 'Кемер')} и Текирова.</p>
<h2>Калеичи (Муратпаша): сердце города</h2>
<p>Древняя гавань, ворота Адриана, минарет Йивли, башня Хыдырлык, отреставрированные османские особняки, бутик-отели и галереи — Калеичи хранит историю Анталии в самом центре города. Рядом Антальский музей с находками из античных городов региона. Жилые районы рядом: ${AR('muratpasa', 'центр Муратпаши')} и окрестности Калеичи.</p>
<h2>Термессос (гора Гюллюк)</h2>
<p>Построенный «орлиным гнездом» на вершине горы, Термессос известен как город, который Александр Македонский осаждал, но так и не взял. Руины в национальном парке осматривают во время пешей прогулки. Жилой район рядом: ${AR('dosemealti', 'Дёшемеалты')}; наш проект там — ${P('antalle-concept-houses', 'Antalle Concept Houses')}.</p>
<h2>Сиде (Манавгат)</h2>
<p>Храм Аполлона на берегу моря и античный театр делают Сиде одним из лучших мест для заката среди древних городов.</p>
<h2>Мира и Святой Николай (Демре)</h2>
<p>Мира, где епископом служил Святой Николай, известный сегодня как Санта-Клаус, привлекает гостей со всего мира храмом Святого Николая и высеченными в скалах ликийскими гробницами.</p>
<h2>Каш: Антифеллос и Кекова</h2>
<p>Каш построен на месте ликийского города Антифеллос. В городе есть античный театр с видом на море, Царская гробница прямо на улице и гробницы в скалах. Рядом Кекова: на лодке осматривают «затонувший город», который, по преданию, ушёл под воду после землетрясений, крепость Симена (Калекёй) и саркофаги в воде. Дайвинг, параглайдинг и нетронутые бухты сделали Каш бутик-городком, где поселились и многие иностранцы.</p>
<h2>Калкан и Патара</h2>
<p>Калкан, относящийся к Кашу, — бывшая портовая деревня; каменные дома и узкие улочки делают его одним из самых популярных вилльных районов Средиземноморья. Соседняя Патара известна зданием собрания Ликийского союза и как место рождения Святого Николая, а её длинный пляж — место гнездования морских черепах. Чуть дальше — Ксанф и Летоон из списка Всемирного наследия ЮНЕСКО.</p>
<h2>Аланья: прибрежная столица сельджуков</h2>
<p>Аланью, в древности Коракесион, в 1221 году взял сельджукский султан Алаэддин Кейкубад I и переименовал её в Алайе — отсюда современное название. Три символа той эпохи стоят до сих пор:</p>
<ul class="ticks">
<li><b>Крепость Аланьи:</b> стены вокруг полуострова, внутренняя цитадель и исторический квартал</li>
<li><b>Красная башня (Кызыл Куле):</b> восьмиугольная башня, охраняющая гавань</li>
<li><b>Верфь (Терсане):</b> сельджукская верфь, высеченная в скале</li>
</ul>
<p>С пещерой Дамлаташ и античными городами вокруг Аланья — один из турецких городов, где иностранцы покупают больше всего жилья.</p>
<h2>Ликийская тропа</h2>
<p>Первый в Турции маркированный маршрут дальнего пешего туризма, Ликийская тропа идёт от Фетхие до Анталии и превышает 500 км. Она проходит через многие античные города из этого гида: Патару, Калкан, Каш, Кекову, Миру, Олимпос и Фаселис. Лучшее время для похода — весна и осень.</p>
<h2>История и жизнь</h2>
<p>Районы рядом с античными городами ценны и для жизни, и для аренды. Белек и Кадрие — рядом с Аспендосом, Алтынташ — с Перге, Кемер — с Фаселисом, Дёшемеалты — с Термессосом, Муратпаша — с Калеичи. В городе, где история так близко, это стоит учитывать при выборе места для жизни.</p>
<p>ACC HOMES International Real Estate предлагает недвижимость на продажу и в аренду во всех районах Анталии. Расскажите, хотите ли вы жить ближе к истории, морю или природе, — и мы вместе подберём варианты: <a href="{{WA}}" target="_blank" rel="noopener">напишите нам в WhatsApp →</a></p>`,
      faq: [
        ['Какой античный город Анталии самый известный?', 'В мировых поисковых запросах лидируют Аспендос и Перге; Олимпос и Фаселис также среди самых популярных.'],
        ['Как раньше называлась Анталия?', 'Атталия — в честь основавшего город пергамского царя Аттала II.'],
        ['Какие исторические места есть в центре города?', 'В Калеичи: ворота Адриана, минарет Йивли, башня Хыдырлык и древняя гавань. Антальский музей тоже недалеко от центра.'],
        ['Где находится Янарташ (Химера) и когда туда идти?', 'Над Чиралы, в районе Кемер. Огни лучше всего видны в темноте.'],
      ],
    },
  },
};
