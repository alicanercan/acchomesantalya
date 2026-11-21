// Blog 11 (21.11.2026): Lara mahalleleri rehberi (TR/EN/RU). Kaynak: claude/blog-5-lara-mahalleleri.md
// Mekân bilgileri Caner'in gözlemleri (21.11.2026); Akra (Şirinyalı Mah. Lara Cad. 24) ve Düden Parkı (Çağlayan) doğrulandı. Mekânlar kapanabilir; 6 ayda bir kontrol.
const A = (s, t) => `<a href="{{URL:areas}}${s}/">${t}</a>`;
const AR = (s, t) => `<a href="/en/area-guides/${s}/">${t}</a>`;
const B = (s, t) => `<a href="{{URL:blog}}${s}/">${t}</a>`;
const WA = (t) => `<a href="{{WA}}" target="_blank" rel="noopener">${t}</a>`;

export const POSTS11 = [
  {
    slug: 'lara-mahalleleri-rehberi', cat: 'bolge', date: '2026-11-21', icon: '🌊',
    tr: {
      title: 'Lara’da Nerede Ev Alınır? Yeşilbahçe, Şirinyalı, Fener, Çağlayan, Barınaklar, Güzeloba',
      seo: 'Lara’da Nerede Ev Alınır? Mahalle Mahalle Lara Rehberi 2026',
      desc: 'Lara’da ev almak isteyenler için mahalle mahalle rehber: Yeşilbahçe, Şirinyalı, Fener, Çağlayan, Barınaklar ve Güzeloba’da yaşam, sahil, okul, hastane, mekânlar ve kimler için uygun.',
      html: `
<p>Lara, Antalya’da yaşamak isteyenlerin ilk baktığı bölgelerden biri: denize ve falezlere yakınlık, şehir merkezine kısa mesafe, hastaneler, alışveriş merkezleri ve havalimanına kolay ulaşım bir arada. Ama “Lara” tek bir yer değil; Yeşilbahçe’den Güzeloba’ya kadar her mahallenin kendine özgü bir karakteri, alıcı profili ve yaşam tarzı var. Bu rehberde Lara tarafının başlıca mahallelerini karşılaştırdık.</p>
<p>Hekimler ve sağlık çalışanlarının Antalya’da en çok tercih ettiği bölge de Lara tarafı; ayrıntılar için ${B('antalya-hastaneler-rehberi', 'Antalya Hastaneler Rehberimize')} bakabilirsiniz.</p>
<h2>Yeşilbahçe</h2>
<p>Lara’nın şehir merkezine en yakın, yerleşik mahallelerinden. Okullara, hastanelere, alışverişe ve toplu taşımaya kolay erişim; günlük hayatın her şeyi yürüme mesafesinde. Mahallenin yüksek katlarında deniz manzaralı daireler de bulunuyor.</p>
<p>Yeşilbahçe ile Şirinyalı’nın birleştiği sahil hattı, Lara’nın en sevilen yürüyüş güzergâhlarından: Yalım Park ve sahil yolu boyunca yürüyüş alanları, dondurmacılar, Akra Hotel, Akra Kitap Kafe, Bambus Plajı ve 212 Mangal gibi mekânlar bu hatta.</p>
<p><b>Kimler için:</b> şehir merkezine yakın, her şeye yürüme mesafesinde yaşamak isteyen aileler ve emekliler.</p>
<h2>Şirinyalı</h2>
<p>Falezlere ve deniz manzarasına yakınlığıyla Lara’nın en sevilen mahallelerinden. Antalya Yaşam Hastanesi Şirinyalı’da; Medical Park Hastanesi de Fener ile Şirinyalı’nın sınırında. Mahallede otelleri, klinikleri ve sağlık turizmine yönelik işletmeleriyle canlı bir yaşam var.</p>
<p>Şirinyalı aynı zamanda Lara’nın gece hayatının merkezlerinden: Gaga Club, Black Live gibi kulüpler ile Tezgah Burger, Public ve Kanatçı Ali Asker gibi mekânlar bu mahallede.</p>
<p><b>Kimler için:</b> denize yürüme mesafesinde, sosyal hayatın içinde yaşamak isteyenler; kiralık talebi yüksek. Bölge sayfası: ${A('sirinyali', 'Şirinyalı')}.</p>
<h2>Fener</h2>
<p>Lara’nın alışveriş ve sosyal yaşam merkezi. TerraCity ve Beyaz Dünya AVM, Vatan Computer ve Teknosa gibi büyük mağazalar, Selfie Park ile Shakespeare, Happy Moon’s, Starbucks ve Kushi Moto gibi kafe ve restoranlar Fener’de. Mahallenin denize yakın kesimlerinde deniz manzaralı daireler bulunuyor. Alışveriş tarafı için ${B('antalya-avm-rehberi', 'Antalya AVM Rehberimize')} bakabilirsiniz.</p>
<p><b>Kimler için:</b> alışverişe ve sosyal hayata yürüme mesafesinde yaşamak isteyenler; kiralık talebi yüksek. Bölge sayfası: ${A('fener', 'Fener')}.</p>
<h2>Çağlayan</h2>
<p>Denize yürüme mesafesinde, ama daha çok aileleri çeken bir mahalle: Bahçeşehir Koleji ve Bilfen Koleji gibi özel okullar Çağlayan’da. Aşağı Düden Şelalesi’nin denize döküldüğü Düden Parkı da bu mahallede. Deniz manzaralı daireler de bulunuyor.</p>
<p>Yeme içme tarafında Sıralı Kebap, Kum Balık, Kalamar Balık ve belediyenin uygun bütçeli kafe ve restoranı Deniz Yüzü öne çıkan adresler.</p>
<p><b>Kimler için:</b> okula ve denize yakın yaşamak isteyen aileler.</p>
<h2>Barınaklar</h2>
<p>Denize çok yakın, iki katlı imarıyla yüksek binaların olmadığı, ferah bir mahalle. Klinikler, oteller, restoranlar ve balık restoranları, gece hayatı, yürüyüş alanları ve parklar bir arada.</p>
<p><b>Kimler için:</b> denize çok yakın, az katlı ve sakin bir yapılaşmada yaşamak isteyenler; villa ve müstakil ev arayanlar.</p>
<h2>Güzeloba</h2>
<p>Lara plajlarına ve otel bölgesine yakın, son yıllarda yeni projelerle gelişen mahalle. Örnekköy Sitesi ve plajı ile Sera Hotel mahallenin bilinen noktalarından; Amerikan / Anatolia Lara Hastanesi de Güzeloba’da. Diğer Lara mahallelerine göre deniz manzaralı konut sayısı az.</p>
<p><b>Kimler için:</b> plaja yakın yaşam, yazlık ve yatırım, yeni site ve villa arayanlar. Bölge sayfası: ${A('lara-guzeloba', 'Lara ve Güzeloba')}.</p>
<h2>Mahalleler bir bakışta</h2>
<table><thead><tr><th>Mahalle</th><th>Öne çıkan</th><th>Kimler için</th></tr></thead><tbody>
<tr><td>Yeşilbahçe</td><td>Merkeze yakınlık, sahil yürüyüş hattı</td><td>Aileler, emekliler</td></tr>
<tr><td>Şirinyalı</td><td>Falez, hastaneler, gece hayatı</td><td>Denize yakın, sosyal yaşam</td></tr>
<tr><td>Fener</td><td>TerraCity, alışveriş ve kafeler</td><td>Her şeye yakın yaşam, kiralama</td></tr>
<tr><td>Çağlayan</td><td>Özel okullar, Düden Parkı, deniz</td><td>Aileler</td></tr>
<tr><td>Barınaklar</td><td>Denize çok yakın, iki katlı imar</td><td>Sakin, az katlı yaşam; villa</td></tr>
<tr><td>Güzeloba</td><td>Lara plajları, yeni projeler</td><td>Plaj, yazlık, yatırım</td></tr>
</tbody></table>
<h2>Lara’da ev arıyorsanız</h2>
<p>ACC HOMES International Real Estate olarak Lara’nın her mahallesinde satılık ve kiralık konut seçeneklerini, bölgeyi yakından tanıyan profesyonellerimizle birlikte değerlendiriyoruz: ${WA('WhatsApp’tan yazın →')} ya da <a href="{{URL:list}}">ilanlarımıza göz atın</a>. Lara’da evinizi ya da villanızı satmayı düşünüyorsanız ${B('antalya-villanizi-satmak-rehberi', 'villa satış rehberimize')} bakabilir, ücretsiz değerleme için bize ulaşabilirsiniz.</p>`,
      faq: [
        ['Lara’da aileler için en uygun mahalle hangisi?', 'Okullara yakınlık arayan aileler için Çağlayan (Bahçeşehir ve Bilfen kolejleri), şehir merkezine ve günlük ihtiyaçlara yakınlık arayanlar için Yeşilbahçe öne çıkıyor.'],
        ['Lara’da denize en yakın ve az katlı mahalle hangisi?', 'Barınaklar; denize çok yakın ve iki katlı imarlı bir mahalle.'],
        ['Lara’da kiralık talebi en yüksek mahalleler hangileri?', 'Sosyal hayatın, hastanelerin ve alışverişin yoğunlaştığı Fener ve Şirinyalı.'],
        ['Lara plajlarına en yakın mahalle hangisi?', 'Güzeloba; Lara plajları, Örnekköy Sitesi ve otel bölgesi bu mahallede.'],
      ],
    },
    en: {
      title: 'Where to Buy in Lara, Antalya: Yeşilbahçe, Şirinyalı, Fener, Çağlayan, Barınaklar, Güzeloba',
      seo: 'Where to Buy Property in Lara, Antalya: A Neighbourhood Guide',
      desc: 'A neighbourhood-by-neighbourhood guide to Lara, Antalya: life, beaches, schools, hospitals and local favourites in Yeşilbahçe, Şirinyalı, Fener, Çağlayan, Barınaklar and Güzeloba.',
      html: `
<p>Lara is one of the first areas people look at when moving to Antalya: the sea and cliffs, a short drive to the city centre, hospitals, shopping malls and easy access to the airport. But “Lara” is not one place. From Yeşilbahçe to Güzeloba, each neighbourhood has its own character, buyer profile and lifestyle. This guide compares the main neighbourhoods on the Lara side.</p>
<p>Lara is also where most of Antalya’s doctors and healthcare staff choose to live; see our ${B('antalya-hastaneler-rehberi', 'Antalya hospitals guide')}.</p>
<h2>Yeşilbahçe</h2>
<p>One of Lara’s established neighbourhoods and the closest to the city centre, with schools, hospitals, shops and public transport within walking distance. Upper floors offer sea-view apartments.</p>
<p>The coastline where Yeşilbahçe meets Şirinyalı is one of Lara’s favourite walking routes, with Yalım Park, seafront paths, ice-cream shops, Akra Hotel, Akra Book Café, Bambus Beach and 212 Mangal.</p>
<p><b>Best for:</b> families and retirees who want everything within walking distance of the centre.</p>
<h2>Şirinyalı</h2>
<p>One of Lara’s most popular neighbourhoods, known for its cliffs and sea views. Antalya Yaşam Hospital is here, and Medical Park Hospital sits on the Fener–Şirinyalı border. Hotels, clinics and health-tourism businesses make it a lively area.</p>
<p>Şirinyalı is also a centre of Lara’s nightlife, with clubs such as Gaga Club and Black Live, and venues like Tezgah Burger, Public and Kanatçı Ali Asker.</p>
<p><b>Best for:</b> living close to the sea and to social life; strong rental demand. Area page: ${A('sirinyali', 'Şirinyalı')}.</p>
<h2>Fener</h2>
<p>Lara’s shopping and social hub: TerraCity and Beyaz Dünya malls, large stores such as Vatan Computer and Teknosa, Selfie Park, and cafés and restaurants including Shakespeare, Happy Moon’s, Starbucks and Kushi Moto. Parts of Fener near the sea have sea-view apartments. See our ${B('antalya-avm-rehberi', 'Antalya shopping malls guide')}.</p>
<p><b>Best for:</b> living within walking distance of shopping and social life; strong rental demand. Area page: ${A('fener', 'Fener')}.</p>
<h2>Çağlayan</h2>
<p>Within walking distance of the sea but especially popular with families, as private schools such as Bahçeşehir College and Bilfen College are here. Düden Park, where the Lower Düden Waterfall pours into the sea, is also in Çağlayan, and there are sea-view apartments too.</p>
<p>Local favourites include Sıralı Kebap, Kum Balık, Kalamar Balık and Deniz Yüzü, the municipality’s affordable café and restaurant.</p>
<p><b>Best for:</b> families who want to live near good schools and the sea.</p>
<h2>Barınaklar</h2>
<p>A spacious neighbourhood very close to the sea, where zoning allows only two-storey buildings, so there are no high-rises. Clinics, hotels, restaurants and seafood restaurants, nightlife, walking paths and parks are all here.</p>
<p><b>Best for:</b> those who want to live very close to the sea in a calm, low-rise setting; villa and detached-house buyers.</p>
<h2>Güzeloba</h2>
<p>Close to Lara’s beaches and hotel strip, Güzeloba has grown with new projects in recent years. Örnekköy Sitesi and its beach and Sera Hotel are well-known landmarks, and American / Anatolia Lara Hospital is here. There are fewer sea-view homes than in other Lara neighbourhoods.</p>
<p><b>Best for:</b> beach living, holiday homes and investment, new developments and villas. Area page: ${A('lara-guzeloba', 'Lara and Güzeloba')}.</p>
<h2>At a glance</h2>
<table><thead><tr><th>Neighbourhood</th><th>Highlights</th><th>Best for</th></tr></thead><tbody>
<tr><td>Yeşilbahçe</td><td>Close to the centre, seafront walking route</td><td>Families, retirees</td></tr>
<tr><td>Şirinyalı</td><td>Cliffs, hospitals, nightlife</td><td>Seaside social life</td></tr>
<tr><td>Fener</td><td>TerraCity, shopping and cafés</td><td>Convenience, rental</td></tr>
<tr><td>Çağlayan</td><td>Private schools, Düden Park, sea</td><td>Families</td></tr>
<tr><td>Barınaklar</td><td>Very close to the sea, two-storey zoning</td><td>Calm low-rise living; villas</td></tr>
<tr><td>Güzeloba</td><td>Lara beaches, new projects</td><td>Beach, holiday home, investment</td></tr>
</tbody></table>
<h2>Looking for a home in Lara?</h2>
<p>ACC HOMES International Real Estate offers homes for sale and rent in every Lara neighbourhood, with professionals who know the area closely: ${WA('message us on WhatsApp →')} or <a href="{{URL:list}}">browse our listings</a>. If you own a home or villa in Lara and are thinking of selling, see our ${B('antalya-villanizi-satmak-rehberi', 'guide to selling your villa')} and ask us for a free valuation.</p>`,
      faq: [
        ['Which Lara neighbourhood is best for families?', 'Çağlayan for families who want to be near schools (Bahçeşehir and Bilfen colleges), and Yeşilbahçe for those who want to be close to the centre and daily needs.'],
        ['Which Lara neighbourhood is closest to the sea with low-rise buildings?', 'Barınaklar, which is very close to the sea and zoned for two-storey buildings.'],
        ['Where is rental demand highest in Lara?', 'Fener and Şirinyalı, where social life, hospitals and shopping are concentrated.'],
        ['Which neighbourhood is closest to Lara Beach?', 'Güzeloba, home to Lara’s beaches, Örnekköy Sitesi and the hotel strip.'],
      ],
    },
    ru: {
      title: 'Где купить жильё в Ларе: Йешилбахче, Ширинъялы, Фенер, Чаглаян, Барынаклар, Гюзелоба',
      seo: 'Где купить недвижимость в Ларе (Анталия): гид по районам',
      desc: 'Гид по районам Лары в Анталии: жизнь, пляжи, школы, больницы и популярные места в Йешилбахче, Ширинъялы, Фенере, Чаглаяне, Барынакларе и Гюзелобе.',
      html: `
<p>Лара — один из первых районов, которые рассматривают при переезде в Анталию: море и скалы, близость к центру, больницы, торговые центры и удобная дорога в аэропорт. Но «Лара» — не одно место. От Йешилбахче до Гюзелобы у каждого квартала свой характер, свой покупатель и свой образ жизни. В этом гиде мы сравнили главные кварталы Лары.</p>
<p>Именно в Ларе чаще всего живут врачи и медработники Анталии — подробнее в нашем ${B('antalya-hastaneler-rehberi', 'гиде по больницам Анталии')}.</p>
<h2>Йешилбахче</h2>
<p>Один из обжитых кварталов Лары, ближайший к центру: школы, больницы, магазины и транспорт — в шаговой доступности. На верхних этажах есть квартиры с видом на море.</p>
<p>Береговая линия на стыке Йешилбахче и Ширинъялы — один из любимых прогулочных маршрутов Лары: парк Ялым, набережная, кафе-мороженое, отель Akra, книжное кафе Akra, пляж Bambus и ресторан 212 Mangal.</p>
<p><b>Для кого:</b> семьи и пенсионеры, которым важно, чтобы всё было рядом с центром.</p>
<h2>Ширинъялы</h2>
<p>Один из самых популярных кварталов Лары благодаря скалам и видам на море. Здесь больница Antalya Yaşam, а Medical Park находится на границе Фенера и Ширинъялы. Отели, клиники и медицинский туризм делают район оживлённым.</p>
<p>Ширинъялы — также центр ночной жизни Лары: клубы Gaga Club и Black Live, заведения Tezgah Burger, Public и Kanatçı Ali Asker.</p>
<p><b>Для кого:</b> жизнь у моря и в центре событий; высокий спрос на аренду. Страница района: ${AR('sirinyali', 'Ширинъялы')}.</p>
<h2>Фенер</h2>
<p>Центр шопинга и социальной жизни Лары: ТЦ TerraCity и Beyaz Dünya, крупные магазины Vatan Computer и Teknosa, Selfie Park, кафе и рестораны Shakespeare, Happy Moon’s, Starbucks и Kushi Moto. Ближе к морю есть квартиры с видом. См. наш ${B('antalya-avm-rehberi', 'гид по торговым центрам')}.</p>
<p><b>Для кого:</b> жизнь рядом с магазинами и развлечениями; высокий спрос на аренду. Страница района: ${AR('fener', 'Фенер')}.</p>
<h2>Чаглаян</h2>
<p>Море в шаговой доступности, но квартал особенно любят семьи: здесь частные школы Bahçeşehir и Bilfen. В Чаглаяне и парк Дюден, где Нижний Дюденский водопад падает в море. Есть квартиры с видом на море.</p>
<p>Популярные места: Sıralı Kebap, Kum Balık, Kalamar Balık и муниципальное кафе Deniz Yüzü с доступными ценами.</p>
<p><b>Для кого:</b> семьи, которым нужны хорошие школы и море рядом.</p>
<h2>Барынаклар</h2>
<p>Просторный квартал совсем рядом с морем, где разрешены только двухэтажные дома — высоток нет. Клиники, отели, рестораны и рыбные рестораны, ночная жизнь, прогулочные зоны и парки.</p>
<p><b>Для кого:</b> тем, кто хочет жить у самого моря в спокойной малоэтажной застройке; покупатели вилл и частных домов.</p>
<h2>Гюзелоба</h2>
<p>Рядом с пляжами Лары и отельной зоной; в последние годы активно застраивается новыми проектами. Известные места — комплекс Örnekköy с пляжем и отель Sera; здесь же больница American / Anatolia Lara. Квартир с видом на море меньше, чем в других кварталах Лары.</p>
<p><b>Для кого:</b> жизнь у пляжа, летний дом и инвестиции, новые комплексы и виллы. Страница района: ${AR('lara-guzeloba', 'Лара и Гюзелоба')}.</p>
<h2>Кратко</h2>
<table><thead><tr><th>Квартал</th><th>Особенности</th><th>Для кого</th></tr></thead><tbody>
<tr><td>Йешилбахче</td><td>Близко к центру, прогулочная набережная</td><td>Семьи, пенсионеры</td></tr>
<tr><td>Ширинъялы</td><td>Скалы, больницы, ночная жизнь</td><td>Жизнь у моря в центре событий</td></tr>
<tr><td>Фенер</td><td>TerraCity, магазины и кафе</td><td>Удобство, аренда</td></tr>
<tr><td>Чаглаян</td><td>Частные школы, парк Дюден, море</td><td>Семьи</td></tr>
<tr><td>Барынаклар</td><td>У самого моря, двухэтажная застройка</td><td>Спокойная жизнь; виллы</td></tr>
<tr><td>Гюзелоба</td><td>Пляжи Лары, новые проекты</td><td>Пляж, летний дом, инвестиции</td></tr>
</tbody></table>
<h2>Ищете жильё в Ларе?</h2>
<p>ACC HOMES International Real Estate предлагает жильё на продажу и в аренду во всех кварталах Лары, с профессионалами, которые хорошо знают район: ${WA('напишите нам в WhatsApp →')} или <a href="{{URL:list}}">посмотрите наши объекты</a>. Если вы хотите продать дом или виллу в Ларе, прочитайте наш ${B('antalya-villanizi-satmak-rehberi', 'гид по продаже виллы')} и закажите бесплатную оценку.</p>`,
      faq: [
        ['Какой квартал Лары лучше для семей?', 'Чаглаян — для семей, которым важны школы (Bahçeşehir и Bilfen), и Йешилбахче — для тех, кому важна близость к центру.'],
        ['Какой квартал Лары ближе всего к морю с малоэтажной застройкой?', 'Барынаклар: он у самого моря, здесь разрешены только двухэтажные дома.'],
        ['Где в Ларе самый высокий спрос на аренду?', 'В Фенере и Ширинъялы, где сосредоточены развлечения, больницы и магазины.'],
        ['Какой квартал ближе всего к пляжам Лары?', 'Гюзелоба: здесь пляжи Лары, комплекс Örnekköy и отельная зона.'],
      ],
    },
  },
];
