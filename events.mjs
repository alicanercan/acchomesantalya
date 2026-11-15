// Etkinlikler: Yatırımcı & Network · Lansman & Open House · Sosyal Sorumluluk
// Yeni etkinlik eklemek için EVENTS.events dizisinin BAŞINA kayıt ekleyin (en yeni üstte).
// images: static/img/... altında WebP [src, w, h] · media: projects.mjs'teki Drive görsel id'leri · remote: derlemede indirilen görsel [url, dosyaAdı]
// Metinler TR/EN; diğer diller EN metne düşer. Kategori, menü ve arayüz metinleri 12 dilde.
const L12 = (tr, en, de, ru, fa, pl, fr, es, nl, sv, ar, zh) => ({ tr, en, de, ru, fa, pl, fr, es, nl, sv, ar, zh });

export const EVENTS = {
  seg: L12('etkinlikler', 'events', 'veranstaltungen', 'meropriyatiya', 'rooydadha', 'wydarzenia', 'evenements', 'eventos', 'evenementen', 'evenemang', 'faaliyat', 'huodong'),
  nav: L12('Etkinlikler', 'Events', 'Veranstaltungen', 'Мероприятия', 'رویدادها', 'Wydarzenia', 'Événements', 'Eventos', 'Evenementen', 'Evenemang', 'الفعاليات', '活动'),
  lead: L12(
    'Yatırımcı buluşmaları, proje lansmanları ve sosyal sorumluluk günleri: ekibimizin vizyonunu sahada gösterdiği anlar.',
    'Investor meetings, project launches and social responsibility days: the moments where our team shows its vision in the field.',
    'Investorentreffen, Projektvorstellungen und soziale Aktionstage: Momente, in denen unser Team seine Vision vor Ort zeigt.',
    'Встречи с инвесторами, презентации проектов и дни социальной ответственности: моменты, когда наша команда показывает своё видение на деле.',
    'دیدار با سرمایه‌گذاران، رونمایی پروژه‌ها و روزهای مسئولیت اجتماعی: لحظه‌هایی که تیم ما چشم‌انداز خود را در عمل نشان می‌دهد.',
    'Spotkania z inwestorami, premiery projektów i dni odpowiedzialności społecznej: chwile, w których nasz zespół pokazuje swoją wizję w praktyce.',
    'Rencontres investisseurs, lancements de projets et journées de responsabilité sociale : les moments où notre équipe montre sa vision sur le terrain.',
    'Encuentros con inversores, lanzamientos de proyectos y días de responsabilidad social: los momentos en que nuestro equipo muestra su visión sobre el terreno.',
    'Investeerdersbijeenkomsten, projectlanceringen en dagen voor maatschappelijke verantwoordelijkheid: momenten waarop ons team zijn visie in de praktijk laat zien.',
    'Investerarträffar, projektlanseringar och samhällsansvarsdagar: tillfällen då vårt team visar sin vision i praktiken.',
    'لقاءات المستثمرين وإطلاق المشاريع وأيام المسؤولية الاجتماعية: لحظات يُظهر فيها فريقنا رؤيته على أرض الواقع.',
    '投资者见面会、项目发布和社会责任日：我们团队在现场展示愿景的时刻。'),
  intro: {
    tr: '<p>ACC HOMES’ta işimiz bir ilanla sınırlı değil. Yatırımcılarımızı ve iş ortaklarımızı düzenli olarak bir araya getiriyor, projeleri yerinde tanıtıyor ve her yıl bir günümüzü yalnızca topluma ayırıyoruz. Bu sayfada ekibimizin düzenlediği ve sponsor olduğu etkinlikleri bulabilirsiniz.</p>',
    en: '<p>At ACC HOMES our work goes beyond a listing. We regularly bring our investors and business partners together, present projects on site, and every year set aside one day for our community alone. On this page you will find the events our team has organised and sponsored.</p>',
  },
  cats: {
    investor: {
      icon: '🌍',
      name: L12('Yatırımcı ve Network Buluşmaları', 'Investor & Network Meetings', 'Investoren- und Netzwerktreffen', 'Встречи инвесторов и партнёров', 'دیدارهای سرمایه‌گذاران و شبکه', 'Spotkania inwestorów i networking', 'Rencontres investisseurs et réseau', 'Encuentros de inversores y networking', 'Investeerders- en netwerkbijeenkomsten', 'Investerar- och nätverksträffar', 'لقاءات المستثمرين والشبكة', '投资者与人脉交流会'),
      desc: L12('Global iş ortaklarımız ve yatırımcılarımızla yurt içi ve yurt dışı fırsatları paylaştığımız buluşmalar.', 'Meetings where we share opportunities at home and abroad with our global partners and investors.', 'Treffen, bei denen wir mit globalen Partnern und Investoren Chancen im In- und Ausland teilen.', 'Встречи, на которых мы делимся возможностями в Турции и за рубежом с глобальными партнёрами и инвесторами.', 'دیدارهایی که در آن فرصت‌های داخلی و خارجی را با شرکا و سرمایه‌گذاران جهانی خود به اشتراک می‌گذاریم.', 'Spotkania, na których dzielimy się szansami w kraju i za granicą z partnerami i inwestorami.', 'Des rencontres où nous partageons des opportunités en Turquie et à l’étranger avec nos partenaires et investisseurs.', 'Encuentros en los que compartimos oportunidades nacionales e internacionales con socios e inversores.', 'Bijeenkomsten waar we kansen in binnen- en buitenland delen met onze partners en investeerders.', 'Träffar där vi delar möjligheter i Turkiet och utomlands med partner och investerare.', 'لقاءات نتشارك فيها الفرص المحلية والدولية مع شركائنا ومستثمرينا.', '与全球合作伙伴和投资者分享国内外机会的聚会。'),
      cta: L12('Bir sonraki yatırımcı buluşmasına davet almak ister misiniz?', 'Would you like an invitation to our next investor meeting?', 'Möchten Sie zum nächsten Investorentreffen eingeladen werden?', 'Хотите получить приглашение на следующую встречу инвесторов?', 'مایلید به دیدار بعدی سرمایه‌گذاران دعوت شوید؟', 'Chcesz otrzymać zaproszenie na kolejne spotkanie inwestorów?', 'Souhaitez-vous être invité à notre prochaine rencontre investisseurs ?', '¿Quiere recibir una invitación a nuestro próximo encuentro de inversores?', 'Wilt u een uitnodiging voor onze volgende investeerdersbijeenkomst?', 'Vill du bli inbjuden till nästa investerarträff?', 'هل ترغب في دعوة إلى لقاء المستثمرين القادم؟', '想收到下一次投资者见面会的邀请吗？'),
    },
    launch: {
      icon: '🏡',
      name: L12('Proje Lansmanları ve Open House', 'Project Launches & Open House', 'Projektvorstellungen und Open House', 'Презентации проектов и дни открытых дверей', 'رونمایی پروژه‌ها و Open House', 'Premiery projektów i dni otwarte', 'Lancements de projets et portes ouvertes', 'Lanzamientos y jornadas de puertas abiertas', 'Projectlanceringen en open huis', 'Projektlanseringar och visningsdagar', 'إطلاق المشاريع والأيام المفتوحة', '项目发布与开放日'),
      desc: L12('Yetkili satış ofisi olduğumuz projeleri yatırımcılarımıza yerinde gösterdiğimiz günler.', 'Days when we show investors the projects we represent as authorised sales office, on site.', 'Tage, an denen wir Investoren die Projekte, für die wir autorisiertes Verkaufsbüro sind, vor Ort zeigen.', 'Дни, когда мы показываем инвесторам на месте проекты, официальным офисом продаж которых являемся.', 'روزهایی که پروژه‌هایی را که دفتر فروش رسمی آنها هستیم، در محل به سرمایه‌گذاران نشان می‌دهیم.', 'Dni, w które pokazujemy inwestorom na miejscu projekty, dla których jesteśmy autoryzowanym biurem sprzedaży.', 'Des journées où nous montrons sur place les projets dont nous sommes le bureau de vente agréé.', 'Días en los que mostramos in situ los proyectos de los que somos oficina de ventas autorizada.', 'Dagen waarop we investeerders ter plaatse de projecten tonen waarvoor we erkend verkoopkantoor zijn.', 'Dagar då vi visar investerare de projekt vi är auktoriserat säljkontor för, på plats.', 'أيام نعرض فيها على المستثمرين في الموقع المشاريع التي نحن مكتب مبيعاتها المعتمد.', '我们在现场向投资者展示我们作为授权销售处的项目的日子。'),
      cta: L12('Projeyi yerinde görmek için randevu alın', 'Book a site visit', 'Besichtigungstermin vereinbaren', 'Записаться на просмотр', 'رزرو بازدید از پروژه', 'Umów wizytę na miejscu', 'Réserver une visite sur place', 'Reserve una visita', 'Plan een bezichtiging', 'Boka en visning', 'احجز زيارة للموقع', '预约实地看房'),
    },
    csr: {
      icon: '🤝',
      name: L12('Sosyal Sorumluluk', 'Social Responsibility', 'Soziale Verantwortung', 'Социальная ответственность', 'مسئولیت اجتماعی', 'Odpowiedzialność społeczna', 'Responsabilité sociale', 'Responsabilidad social', 'Maatschappelijke verantwoordelijkheid', 'Samhällsansvar', 'المسؤولية الاجتماعية', '社会责任'),
      desc: L12('Her yıl bir günümüzü yalnızca iyiliğe ayırıyoruz: ACC Sosyal Sorumluluk Günü, “ACC Day”.', 'Every year we set aside one day for doing good alone: the ACC Social Responsibility Day, “ACC Day”.', 'Jedes Jahr widmen wir einen Tag ausschließlich guten Taten: den „ACC Day“.', 'Каждый год мы посвящаем один день только добрым делам: «ACC Day».', 'هر سال یک روز را فقط به کار خیر اختصاص می‌دهیم: «ACC Day».', 'Co roku jeden dzień poświęcamy wyłącznie pomaganiu: „ACC Day”.', 'Chaque année, nous consacrons une journée uniquement à faire le bien : « ACC Day ».', 'Cada año dedicamos un día solo a hacer el bien: «ACC Day».', 'Elk jaar wijden we één dag volledig aan het goede doel: “ACC Day”.', 'Varje år ägnar vi en dag enbart åt att göra gott: ”ACC Day”.', 'نخصص كل عام يومًا واحدًا لفعل الخير فقط: «ACC Day».', '每年我们拿出一天只做公益：“ACC Day”。'),
      cta: L12('Bir sonraki ACC Day’e destek olmak ister misiniz?', 'Would you like to support the next ACC Day?', 'Möchten Sie den nächsten ACC Day unterstützen?', 'Хотите поддержать следующий ACC Day?', 'مایلید از ACC Day بعدی حمایت کنید؟', 'Chcesz wesprzeć kolejny ACC Day?', 'Envie de soutenir le prochain ACC Day ?', '¿Quiere apoyar el próximo ACC Day?', 'Wilt u de volgende ACC Day steunen?', 'Vill du stödja nästa ACC Day?', 'هل ترغب في دعم ACC Day القادم؟', '想支持下一届ACC Day吗？'),
    },
  },
  ui: {
    all: L12('Tümü', 'All', 'Alle', 'Все', 'همه', 'Wszystkie', 'Tous', 'Todos', 'Alle', 'Alla', 'الكل', '全部'),
    read: L12('Etkinliği incele', 'View event', 'Zur Veranstaltung', 'Подробнее', 'مشاهده رویداد', 'Zobacz wydarzenie', 'Voir l’événement', 'Ver evento', 'Bekijk evenement', 'Se evenemanget', 'عرض الفعالية', '查看活动'),
    ig: L12('Instagram’da görün', 'See it on Instagram', 'Auf Instagram ansehen', 'Смотреть в Instagram', 'مشاهده در اینستاگرام', 'Zobacz na Instagramie', 'Voir sur Instagram', 'Ver en Instagram', 'Bekijk op Instagram', 'Se på Instagram', 'شاهد على إنستغرام', '在Instagram上查看'),
    others: L12('Diğer etkinlikler', 'Other events', 'Weitere Veranstaltungen', 'Другие мероприятия', 'رویدادهای دیگر', 'Inne wydarzenia', 'Autres événements', 'Otros eventos', 'Andere evenementen', 'Andra evenemang', 'فعاليات أخرى', '其他活动'),
    photosSoon: L12('Etkinlik fotoğrafları yakında eklenecek.', 'Event photos coming soon.', 'Fotos folgen in Kürze.', 'Фотографии скоро появятся.', 'عکس‌های رویداد به‌زودی اضافه می‌شود.', 'Zdjęcia wkrótce.', 'Photos bientôt disponibles.', 'Fotos próximamente.', 'Foto’s volgen binnenkort.', 'Bilder kommer snart.', 'ستُضاف الصور قريبًا.', '活动照片即将上线。'),
    projPhotos: L12('Proje görselleri', 'Project images', 'Projektbilder', 'Фото проекта', 'تصاویر پروژه', 'Zdjęcia projektu', 'Images du projet', 'Imágenes del proyecto', 'Projectbeelden', 'Projektbilder', 'صور المشروع', '项目图片'),
  },
  events: [
    {
      id: 'akra-dubai-yatirimci-bulusmasi-2025', cat: 'investor', date: '19–20.12.2025',
      ig: 'https://www.instagram.com/p/DSdaOVpDknE/',
      images: [['/img/sosyal/akra-dubai-2025-ekip-sahne.webp', 1400, 933, 'wide'], ['/img/sosyal/akra-dubai-2025-akra-hotel.webp', 1000, 556], ['/img/sosyal/akra-dubai-2025-vizyon-sunumu.webp', 1000, 667], ['/img/sosyal/akra-dubai-2025-hosgeldiniz.webp', 1000, 667], ['/img/sosyal/akra-dubai-2025-dubai-projeleri.webp', 1000, 563], ['/img/sosyal/akra-dubai-2025-danube-markalari.webp', 1000, 667], ['/img/sosyal/akra-dubai-2025-konuk-konusmaci.webp', 1000, 667, '', { tr: 'Konuk konuşmacı Uzm. Dr. Timur Yılmaz (Nörolog)', en: 'Guest speaker Dr. Timur Yılmaz (neurologist)' }], ['/img/sosyal/akra-dubai-2025-salon.webp', 1000, 667], ['/img/sosyal/akra-dubai-2025-ekip-ve-is-ortaklari.webp', 1000, 667], ['/img/sosyal/akra-dubai-2025-networking.webp', 1000, 667]],
      media: [],
      stats: {
        tr: [['100+', 'yatırımcı ve iş ortağı'], ['4', 'oturum: 2 gün, her gün 2 oturum'], ['1', 'konuk konuşmacı: Nörolog Dr. Timur Yılmaz']],
        en: [['100+', 'investors and business partners'], ['4', 'sessions: 2 days, 2 sessions a day'], ['1', 'guest speaker: neurologist Dr. Timur Yılmaz']],
      },
      tr: {
        title: 'Dubai fırsatları Akra Hotel’de: ACC HOMES × Danube Properties yatırımcı buluşması',
        card: 'ACC HOMES sponsorluğunda, portföylerimizi ve global networkümüzü uluslararası Dubai projeleri için bir araya getirdik.',
        place: 'Akra Hotel, Antalya',
        html: `<p>19–20 Aralık 2025’te ACC HOMES sponsorluğunda ve Danube Properties iş birliğiyle Akra Hotel’de düzenlediğimiz iki günlük buluşmada, portföylerimizi ve global networkümüzü uluslararası Dubai projeleri için bir araya getirdik. Buluşmada 100’ü aşkın yatırımcı ve iş ortağımızı ağırladık.</p>
<h3>Programda neler vardı</h3>
<ul class="ticks"><li>Dubai’deki yatırım fırsatlarının Danube Properties ile birlikte sunumu</li><li>Konuk konuşmacı Uzm. Dr. Timur Yılmaz (Nörolog): “Beyin Nasıl Büyük Kararlar Alır?”</li><li>“Neden ACC HOMES?”: Antalya’nın şeffaf ve kurumsal emlak ofisi; yatırımcının kârına ve geleceğine odaklanan butik yaklaşım</li></ul>
<p>Her gün iki oturum düzenlendi; 20 Aralık Cumartesi oturumları 13:30 ve 16:00’da, ücretsiz girişle yapıldı.</p>
<h3>Neden bu buluşmaları yapıyoruz</h3>
<p>Yatırımcılarımızı yalnızca Antalya’daki değil, global pazarlardaki doğru fırsatlarla da buluşturmak istiyoruz. Uluslararası iş ortaklarımızla kurduğumuz ilişkiyi bu buluşmalarda yatırımcılarımızla doğrudan paylaşıyoruz.</p>`,
      },
      en: {
        title: 'Dubai opportunities at Akra Hotel: ACC HOMES × Danube Properties investor meeting',
        card: 'Sponsored by ACC HOMES, we brought our portfolios and global network together for international Dubai projects.',
        place: 'Akra Hotel, Antalya',
        html: `<p>At the two-day meeting we hosted at Akra Hotel on 19–20 December 2025, sponsored by ACC HOMES and in collaboration with Danube Properties, we brought our portfolios and global network together for international Dubai projects. We welcomed more than 100 investors and business partners.</p>
<h3>What was on the programme</h3>
<ul class="ticks"><li>A presentation of investment opportunities in Dubai together with Danube Properties</li><li>Guest speaker Dr. Timur Yılmaz (neurologist): “How Does the Brain Make Big Decisions?”</li><li>“Why ACC HOMES?”: Antalya’s transparent, corporate real estate office, with a boutique approach focused on the investor’s profit and future</li></ul>
<p>Two sessions were held each day; on Saturday 20 December they took place at 13:30 and 16:00, free of charge.</p>
<h3>Why we hold these meetings</h3>
<p>We want to connect our investors not only with the right opportunities in Antalya, but also in global markets. These meetings are where we share our relationships with international partners directly with our investors.</p>`,
      },
    },
    {
      id: 'antalle-open-house-2025', cat: 'launch', date: '13–14.12.2025',
      ig: 'https://www.instagram.com/p/DSNhg5wCFEA/',
      project: '/projeler/antalle-concept-houses/',
      images: [['/img/sosyal/antalle-open-house-2025-ekip.webp', 1400, 933, 'wide'], ['/img/sosyal/antalle-open-house-2025-ekip-logo.webp', 562, 1000], ['/img/sosyal/antalle-open-house-2025-satis-ofisi.webp', 562, 1000], ['/img/sosyal/antalle-open-house-2025-karsilama.webp', 667, 1000], ['/img/sosyal/antalle-open-house-2025-lounge.webp', 1000, 667], ['/img/sosyal/antalle-open-house-2025-misafirler.webp', 562, 1000], ['/img/sosyal/antalle-open-house-2025-ikram.webp', 667, 1000]],
      media: [],
      stats: {
        tr: [['2', 'gün açık kapı'], ['İskanlı', 'villalar, taşınmaya hazır'], ['4+1', 'dubleks villa ve 2+1 teras daire']],
        en: [['2', 'open house days'], ['Ready', 'villas with occupancy permit'], ['4+1', 'duplex villas and 2+1 terrace flats']],
      },
      tr: {
        title: 'Antalle Concept Houses Open House',
        card: 'Yetkili satış ofisi olduğumuz Antalle’de iskanlı, taşınmaya hazır villaları misafirlerimizle yerinde gezdik.',
        place: 'Antalle satış ofisi, Altınkale, Döşemealtı / Antalya',
        html: `<p>ACC HOMES’un yetkili satış ofisi olduğu Antalle Concept Houses’ta düzenlediğimiz Open House etkinliğinin ilk günü, 13 Aralık’ta büyük bir enerjiyle tamamlandı. Bize katılan tüm misafirlerimize, iş ortaklarımıza ve yatırımcılarımıza teşekkür ederiz.</p>
<p>Etkinlik 14 Aralık Pazar günü Döşemealtı Altınkale’deki satış ofisimizde devam etti. Ziyaretçilerimiz iskanlı ve taşınmaya hazır villaları yerinde gezdi.</p>
<h3>Neden Open House</h3>
<p>Bir projeyi anlatmanın en iyi yolu onu yerinde göstermek. Open House günlerinde yatırımcılarımız malzemeyi, işçiliği ve çevreyi kendi gözleriyle görüyor, sorularını doğrudan ekibimize soruyor.</p>
<p><a href="/projeler/antalle-concept-houses/">Antalle Concept Houses proje sayfası →</a></p>`,
      },
      en: {
        title: 'Antalle Concept Houses Open House',
        card: 'At Antalle, where we are the authorised sales office, we toured the ready-to-move-in villas with our guests.',
        place: 'Antalle sales office, Altınkale, Döşemealtı / Antalya',
        html: `<p>The first day of the Open House we held at Antalle Concept Houses, where ACC HOMES is the authorised sales office, was completed with great energy on 13 December. Thank you to all the guests, business partners and investors who joined us.</p>
<p>The event continued on Sunday 14 December at our sales office in Altınkale, Döşemealtı. Visitors toured the villas, which have their occupancy permit and are ready to move into.</p>
<h3>Why an Open House</h3>
<p>The best way to explain a project is to show it on site. On Open House days our investors see the materials, workmanship and surroundings for themselves and put their questions directly to our team.</p>
<p><a href="/projeler/antalle-concept-houses/">Antalle Concept Houses project page →</a></p>`,
      },
    },
    {
      id: 'acc-day-2025', cat: 'csr', date: '23.12.2025',
      images: [['/img/sosyal/acc-day-2025-okul.webp', 1000, 1000], ['/img/sosyal/acc-day-2025-ogretmenler.webp', 1000, 1000]],
      remote: [['https://acchomesantalya.com/wp-content/uploads/2026/01/IMG_6752-scaled.jpg', 'acc-day-2025-hazirlik.jpg']],
      media: [],
      stats: { tr: [['800', 'öğrenciye hediye paketi'], ['20', 'destekçi iş ortağı'], ['2', 'ülkeden destek: ABD ve Belçika']], en: [['800', 'students received gift packs'], ['20', 'supporting business partners'], ['2', 'countries sent support: USA and Belgium']] },
      tr: {
        title: 'ACC Day 2025: 800 öğrencinin yüzü güldü',
        card: 'Kepez’deki Şehit Serhat Genç İlkokulu’nda 20 iş ortağımızla 800 öğrenciye hediye paketi ulaştırdık.',
        place: 'Şehit Serhat Genç İlkokulu, Habibler Mahallesi, Kepez / Antalya',
        html: `<p>ACC HOMES olarak her yıl bir günü “ACC Sosyal Sorumluluk Günü” ilan ediyoruz. O gün ticari işlerimize ara verip tüm ekip ve iş ortaklarımızla yalnızca çevremize faydalı olmaya odaklanıyoruz. Önceliğimiz eğitim ve çocuklar; çünkü onlara yapılan her yatırım geleceğe yapılmış bir yatırımdır.</p>
<p>ACC Day 2025’te Kepez Habibler Mahallesi’ndeki Şehit Serhat Genç İlkokulu’nu ziyaret ettik. Kurucumuz Ali Caner Can önderliğinde düzenlenen etkinliğe inşaat, emlak ve mimarlık firmaları ile yayınevleri başta olmak üzere 20 iş ortağımız destek verdi.</p>
<p>Bir hafta boyunca ofisimize gelen bağışlar, bir kalemtıraştan 200 deftere kadar tek tek ayrıldı. Kampanya Antalya’nın dışına taştı; Amerika ve Belçika’dan da destek geldi.</p>
<h3>Neler hazırladık</h3>
<ul class="ticks"><li>Ana sınıfları için gelişimi destekleyen oyuncaklar</li><li>Okul kütüphanesi için yüzlerce kitap</li><li>İlkokul öğrencileri için kırtasiye malzemeli 800 kişiye özel paket</li></ul>
<p>Etkinlik günü ACC ailesi ve iş ortaklarımız paketleri sınıf sınıf gezerek öğrencilere elden teslim etti; okul müdürü, idareciler ve öğretmenlerle okulun ihtiyaçlarını konuştuk.</p>
<blockquote>“Her yıl bir günümüzü ‘ACC Sosyal Sorumluluk Günü’ ilan ediyor, o gün tüm ticari işlerimizi durdurarak yalnızca çevremize faydalı olmaya odaklanıyoruz. Amacımız sadece hediye vermek değil; çocuklarımıza yeni yıla girerken yanlarında olduğumuzu hissettirmek ve eğitimlerine katkı sunmak. 800 öğrencimizin gözündeki mutluluk, bizim için tüm başarılardan daha değerli. Amerika’dan Belçika’ya, mimarlardan yayınevlerine destek veren herkese teşekkür ediyorum.”<cite>Ali Caner Can, Kurucu</cite></blockquote>`,
      },
      en: {
        title: 'ACC Day 2025: smiles for 800 students',
        card: 'At Şehit Serhat Genç Primary School in Kepez, we delivered gift packs to 800 students with 20 business partners.',
        place: 'Şehit Serhat Genç Primary School, Habibler, Kepez / Antalya',
        html: `<p>Every year ACC HOMES declares one day the “ACC Social Responsibility Day”. We pause our business and, together with our whole team and partners, focus only on giving back to our community. Our priority is education and children, because every investment in them is an investment in the future.</p>
<p>For ACC Day 2025 we visited Şehit Serhat Genç Primary School in Habibler, Kepez. The event, led by our founder Ali Caner Can, was supported by 20 business partners, including construction, real estate and architecture firms and publishers.</p>
<p>For a week, donations arriving at our office, from a single pencil sharpener to 200 notebooks, were sorted one by one. The campaign reached beyond Antalya, with support from the USA and Belgium.</p>
<h3>What we prepared</h3>
<ul class="ticks"><li>Educational toys for the kindergarten classes</li><li>Hundreds of books for the school library</li><li>800 personalised stationery packs for the primary school pupils</li></ul>
<p>On the day, the ACC family and our partners went from class to class handing the packs to each student, and met the head teacher, administrators and teachers to talk about the school’s needs.</p>
<blockquote>“Every year we declare one day the ‘ACC Social Responsibility Day’, stop all our business and focus only on benefiting our community. Our aim is not just to give a gift, but to let our children feel that we are with them as they start the new year, and to contribute to their education. Seeing the happiness in the eyes of 800 students means more to us than any business success. Thank you to everyone who supported us, from the USA to Belgium, from architects to publishers.”<cite>Ali Caner Can, Founder</cite></blockquote>`,
      },
    },
  ],
};
