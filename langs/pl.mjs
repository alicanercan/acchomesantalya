// Polski (pl) — pakiet językowy ACC HOMES
export default {
  code: 'pl', locale: 'pl-PL', base: '/pl', rtl: false, defCur: 'PLN',
  slogan: 'Excellence in Real Estate',
  segs: { projects: 'projekty', reviews: 'opinie', buyersguide: 'poradnik-kupujacego' },
  guide: {
    title: 'Poradnik kupującego',
    lead: 'Wszystko o zakupie nieruchomości w Turcji i w Antalyi: proces, dokumenty, koszty, obywatelstwo, pozwolenie na pobyt i akt własności (artykuły w języku angielskim).',
  },
  T: {
    htmlLang: 'pl', locale: 'pl_PL',
    nav: { home: 'Strona główna', list: 'Nieruchomości', guide: 'Przewodnik po Altıntaş', contact: 'Kontakt' },
    seg: { list: 'nieruchomosci', listing: 'oferta', guide: 'przewodnik-altintas', contact: 'kontakt' },
    heroTitle: 'Nieruchomości na sprzedaż i wynajem w Antalyi',
    heroSub: 'Z biura ACC Plaza, 50 partnerów i obsługa w 10 językach: mieszkania, wille, autoryzowane inwestycje i nieruchomości komercyjne – profesjonalnie, przejrzyście i w oparciu o dane',
    heroCta: 'Zobacz oferty', heroCta2: 'Zapytaj na WhatsApp',
    featured: 'Polecane nieruchomości', all: 'Wszystkie oferty', seeAll: 'Zobacz wszystkie oferty',
    why: 'Dlaczego ACC HOMES',
    whyItems: [
      ['Ceny oparte na danych', 'Każda nieruchomość jest wyceniana na podstawie transakcji porównawczych i danych rynkowych'],
      ['Wielojęzyczny zespół', 'Obsługa po polsku, angielsku, turecku, rosyjsku i w innych językach'],
      ['Przejrzysty proces', 'Każdy krok, od oglądania do aktu własności, jasno i na piśmie'],
      ['Profesjonalny marketing', 'Własny zespół foto, wideo i marketingu cyfrowego'],
    ],
    filters: { tip: 'Rodzaj oferty', any: 'Wszystkie', sale: 'Sprzedaż', rent: 'Wynajem', rooms: 'Pokoje', sort: 'Sortuj', newest: 'Najnowsze', priceAsc: 'Cena rosnąco', priceDesc: 'Cena malejąco' },
    fields: { price: 'Cena', rooms: 'Pokoje', gross: 'Powierzchnia brutto', net: 'Powierzchnia netto', age: 'Wiek budynku', floor: 'Piętro', floors: 'Liczba pięter', heat: 'Ogrzewanie', inSite: 'Na osiedlu', credit: 'Możliwy kredyt', deed: 'Akt własności', project: 'Inwestycja / Osiedle', location: 'Lokalizacja', type: 'Rodzaj nieruchomości', no: 'Nr oferty', features: 'Udogodnienia', desc: 'Opis' },
    priceOnReq: 'Cena na zapytanie', sold: 'Sprzedane', option: 'Zarezerwowane',
    sale: 'Na sprzedaż', rent: 'Na wynajem',
    askTitle: 'Zapytaj o tę nieruchomość', name: 'Imię i nazwisko', phone: 'Telefon', msg: 'Wiadomość', send: 'Wyślij',
    call: 'Zadzwoń', wa: 'WhatsApp',
    waText: (l) => `Dzień dobry, proszę o informacje na temat oferty ${l}.`,
    waGeneral: 'Dzień dobry, interesuje mnie zakup nieruchomości w Antalyi.',
    empty: 'Przygotowujemy nowe oferty. Napisz do nas, a znajdziemy nieruchomość dla Ciebie.',
    demo: 'Podgląd projektu – pokazane oferty są przykładowe',
    contactTitle: 'Kontakt', contactSub: 'Szukasz nieruchomości w Antalyi lub chcesz sprzedać swoją? Skontaktuj się z nami',
    office: 'Biuro', thanks: 'Dziękujemy, wkrótce się odezwiemy',
    guideTitle: 'Przewodnik po Altıntaş',
    guideSub: 'Co warto wiedzieć o Altıntaş, jednej z najszybciej rozwijających się dzielnic Antalyi',
    guideBody: [
      ['Gdzie leży Altıntaş', 'Altıntaş znajduje się w dzielnicy Aksu, blisko Lary i lotniska, i szybko się rozwija dzięki nowym inwestycjom mieszkaniowym.'],
      ['Dla kogo', 'Popularny wybór rodzin, inwestorów i kupujących z zagranicy, którzy szukają nowych mieszkań na osiedlach z basenem.'],
      ['Dojazd', 'Z inwestycji Prime Lara do plaż Lary jest około 3 km, a do lotniska w Antalyi około 5 km.'],
      ['Inwestycja', 'Analizujemy dla Ciebie aktualne ceny sprzedaży i najmu w okolicy. Zapytaj o bezpłatną wycenę.'],
    ],
    footerAbout: 'Profesjonalne biuro nieruchomości w Antalyi: sprzedaż, wynajem, autoryzowane inwestycje i doradztwo inwestycyjne.',
    corporate: 'Strona firmowa', rights: 'Wszelkie prawa zastrzeżone',
    revTitle: 'Opinie naszych klientów', revSub: 'Wybrane opinie z Google w oryginalnym brzmieniu', revAll: 'Wszystkie opinie w Google', revMore: 'Czytaj dalej w Google',
    igTitle: 'ACC HOMES na Instagramie', igFollowBtn: 'Obserwuj', igPosts: 'posty', igFollowers: 'obserwujących',
    barCall: 'Zadzwoń teraz', barWa: 'Napisz na WhatsApp',
    projects: 'Inwestycje', projectsLead: 'Inwestycje, dla których ACC HOMES jest autoryzowanym biurem sprzedaży (strony po turecku)', projectsCta: 'Zobacz inwestycję',
    company: 'Firma', blog: 'Blog', blogLead: 'Poradniki i analizy rynku nieruchomości w Antalyi (po angielsku)', readMore: 'Czytaj dalej', menu: 'Menu',
    gReviews: (n) => `${n} opinii w Google`, readReviews: 'Czytaj opinie', igFollow: 'Obserwuj nas na Instagramie', mapTitle: 'Nasze biuro na mapie', directions: 'Wyznacz trasę', trustTitle: 'Opinie naszych klientów',
    metaHome: 'ACC HOMES International Real Estate: mieszkania, wille, autoryzowane inwestycje i nieruchomości komercyjne na sprzedaż i wynajem w Antalyi. Obsługa w 10 językach, także po polsku.',
  },
  S: {
    partners: 'partnerów', langsSvc: 'języków', waJoin: 'Dzień dobry, chcę zostać partnerem ACC HOMES.', aboutUs: 'O nas',
    type: 'Rodzaj', district: 'Dzielnica', search: 'Szukaj',
    calcTitle: 'Kalkulator kosztów zakupu', calcPrice: 'Cena (TRY)', calcPh: 'np. 7 500 000', calcForeign: 'Jestem kupującym z zagranicy',
    calcDeed: 'Opłata za akt własności (kupujący 2%)', calcAgency: 'Prowizja biura (2% + 20% VAT)', calcMisc: 'Opłata urzędu ksiąg, DASK', calcMiscV: 'Zależy od lokalizacji i nieruchomości',
    calcFx: 'Operat szacunkowy i tłumaczenie', calcFxV: 'Zależy od wykonawcy; zbierzemy dla Ciebie oferty', calcTotal: 'Szacunkowe koszty łącznie',
    calcNote: 'To tylko szacunek; dokładne kwoty potwierdzamy na piśmie przed transakcją.',
    faq: 'Najczęstsze pytania', faqShort: 'FAQ', askWa: 'Zapytaj nas na WhatsApp', updated: 'Ostatnia aktualizacja', askConsultant: 'Zapytaj naszego doradcę',
    guideEnNote: 'Artykuły poradnika są dostępne po angielsku.', broker: 'Broker', beach: 'Plaża', airport: 'Lotnisko', centre: 'Centrum miasta',
    ref: 'Nr', shareWa: 'Udostępnij na WhatsApp', copy: 'Kopiuj link', print: 'Drukuj', reportMsg: 'Zgłoszenie oferty: ', report: 'Zgłoś ofertę',
    distances: 'Odległości', costs: 'Szacunkowe koszty zakupu', costsMore: 'Więcej o kosztach zakupu →',
    viewing: 'Umów oglądanie', inPerson: 'Na miejscu', online: 'Rozmowa wideo', reqViewing: 'Umów termin',
    licence: 'Licencja na obrót nieruchomościami (Turcja)', directionsTitle: 'Jak do nas dojechać',
    directionsText: 'Na skrzyżowaniu Sampi skręć w aleję Portakal Çiçeği; jesteśmy po prawej stronie, 200–250 m za pływalnią Süleyman Erol.',
    settings: 'Język, waluta i jednostki', language: 'Język', unit: 'Jednostka miary', metric: 'Metryczna (m²)', imperial: 'Imperialna (sq ft)', close: 'Zamknij',
    curNote: 'Przeliczone ceny są orientacyjne, według bieżących kursów. Płatność i wartość w akcie własności opierają się na cenie oryginalnej. Wartość w BTC ma charakter wyłącznie informacyjny; w Turcji nie można płacić za nieruchomość kryptowalutą.',
    currency: 'Waluta', partnersTitle: 'Nasi partnerzy', speaks: 'Języki',
  },
  plaza: {
    eyebrow: 'ACC PLAZA · Siedziba główna',
    title: 'ACC PLAZA: najbardziej wizjonerskie centrum nieruchomości w Antalyi',
    sub: 'Setki zadowolonych klientów i obsługa bez granic',
    body: [
      'W ACC Plaza, naszej nowej siedzibie o powierzchni 1000 m² w sercu Yeşilbahçe (Muratpaşa), wyznaczamy nowy standard inwestowania w nieruchomości. Jesteśmy kimś więcej niż biurem nieruchomości: to międzynarodowe centrum inwestycyjne, które pod jednym dachem łączy najlepsze autoryzowane inwestycje w regionie, globalne możliwości inwestycyjne i profesjonalne zarządzanie nieruchomościami.',
      'Dzięki 50 doświadczonym partnerom i obsłudze w 10 językach prowadzimy Twoją inwestycję starannie i przejrzyście – gdziekolwiek jesteś. Naszą siłą są setki udanych transakcji. Zapraszamy na kawę do ACC Plaza.',
    ],
    badges: [
      ['🏢', 'Siedziba 1000 m²', 'Nowoczesne biuro w Yeşilbahçe, Muratpaşa'],
      ['🤝', '50 partnerów', 'Eksperci w każdej dzielnicy i inwestycji'],
      ['🌍', 'Obsługa w 10 językach', 'Wsparcie w Twoim języku'],
      ['💎', 'Ekskluzywne inwestycje', 'Autoryzowane oferty dostępne tylko w ACC Homes'],
    ],
    cta1: 'Poznaj nasz zespół', cta2: 'Trasa do ACC Plaza',
  },
  timeline: [['2023', 'Ali Caner Can zostaje najlepszym doradcą roku w Realty World MES Real Estate.'], ['2024', 'Założenie ACC HOMES International Real Estate.'], ['2025', 'Rozwój zespołu i portfela pod hasłem „Excellence in Real Estate”.'], ['2026', 'Otwarcie siedziby ACC Plaza (1000 m²); autoryzowane biuro sprzedaży Prime Lara i Antalle; około 50 partnerów.']],
  langsSpoken: ['turecki', 'angielski', 'rosyjski', 'ukraiński', 'niemiecki', 'francuski', 'niderlandzki', 'hiszpański', 'arabski', 'perski'],
  langNames: { tr: 'turecki', en: 'angielski', ru: 'rosyjski', de: 'niemiecki', fr: 'francuski', es: 'hiszpański', nl: 'niderlandzki', fa: 'perski' },
  partnerRole: 'Doradca ds. nieruchomości', swornRole: 'Doradczyni i tłumaczka przysięgła',
  roles: {
    'Ali Caner Can': 'Broker i założyciel', 'Esma Özdal': 'Koordynatorka generalna', 'Okan Akgün': 'Kierownik biura',
    'Melissa Enriquez Sedita': 'CRM i sprzedaż międzynarodowa', 'Adnan Konuk': 'Koordynator inwestycji', 'Bensu Taşbaş': 'Specjalistka social media',
    'Derya Plyatner': 'Graficzka', 'Zeynep Çarıkçı': 'Obsługa biura', 'Kamil Bey': 'Kot biurowy',
  },
  pages: {
    about: {
      seg: 'o-nas', nav: 'O nas',
      title: 'O nas', desc: 'ACC HOMES International Real Estate: profesjonalne biuro nieruchomości w Antalyi, około 50 partnerów i obsługa w 10 językach.',
      lead: 'Międzynarodowe biuro nieruchomości w Antalyi: profesjonalne standardy, przejrzystość i doradztwo oparte na danych.',
      html: `
<h2>Nasza historia</h2>
<p>ACC HOMES International Real Estate założył w 2024 roku w Antalyi broker <a href="{{URL:broker}}">Ali Caner Can</a> – inżynier mechanik z wieloletnim doświadczeniem w sprzedaży korporacyjnej w międzynarodowych firmach. Naszym celem jest wniesienie do branży nieruchomości korporacyjnej dyscypliny, wyceny opartej na danych i prawdziwej obsługi klienta.</p>
<p>Dziś około 50 partnerów z naszej siedziby ACC Plaza (1000 m², Yeşilbahçe, Muratpaşa) obsługuje klientów w 10 językach: sprzedaż i wynajem mieszkań, wille, nowe inwestycje, nieruchomości komercyjne i doradztwo inwestycyjne.</p>
{{STATS}}
<h2>ACC Plaza</h2>
{{OFFICE}}
<h2>Jak pracujemy</h2>
<div class="cards3">
<div><h3>Cena oparta na danych</h3><p>Każdą nieruchomość wyceniamy na podstawie transakcji porównawczych i danych rynkowych.</p></div>
<div><h3>Marketing 360°</h3><p>Profesjonalne zdjęcia, dron i wideo, portale, reklamy Meta i marketing międzynarodowy.</p></div>
<div><h3>Przejrzyście aż do aktu własności</h3><p>Umowa, oglądanie, negocjacje, bank i akt własności – wszystko udokumentowane.</p></div>
</div>
<h2>Nasza droga</h2>
{{TIMELINE}}
<h2>Autoryzowane inwestycje</h2>
<p>ACC HOMES jest autoryzowanym biurem sprzedaży inwestycji <b>Prime Lara</b> (Ekiciler Grup, Altıntaş) oraz <b>Antalle Concept Houses</b> (Döşemealtı, Altınkale).</p>
<div class="ctas"><a class="btn" href="{{URL:team}}">Nasz zespół</a><a class="btn ghost" href="{{URL:services}}">Usługi</a></div>`,
    },
    broker: {
      seg: 'ali-caner-can', nav: 'Ali Caner Can',
      title: 'Ali Caner Can – broker i założyciel', desc: 'Ali Caner Can, broker i założyciel ACC HOMES: inżynier mechanik, doświadczenie w sprzedaży korporacyjnej, ponad 290 transakcji w Antalyi.',
      lead: 'Inżynierska dyscyplina, doświadczenie w sprzedaży korporacyjnej i dogłębna znajomość rynku w Antalyi.',
      html: `
<div class="bio">
<div class="biophoto">{{BROKER_PHOTO}}</div>
<div>
<p>Ali Caner Can ukończył inżynierię mechaniczną na Politechnice Yıldız. Przed wejściem do branży nieruchomości pracował na stanowiskach kierowniczych i w sprzedaży korporacyjnej w firmach Kraft Heinz, Nestlé, Hasbro, Reckitt Benckiser i Bosch.</p>
<p>Przyjechał do Antalyi, nie znając tu nikogo. W Realty World MES Real Estate przeprowadził setki transakcji i w 2023 roku został najlepszym doradcą biura. W 2024 roku założył ACC HOMES International Real Estate.</p>
<p>Dziś kieruje w ACC Plaza zespołem około 50 partnerów i ma na koncie ponad 290 transakcji, w tym sprzedaże dla kupujących z Europy, Rosji i Ukrainy.</p>
<p><a href="{{IG_CANER}}" target="_blank" rel="noopener">Instagram: @alicanercan.therealtor →</a></p>
</div></div>
<div class="ctas"><a class="btn" href="{{WA}}" target="_blank" rel="noopener">Napisz na WhatsApp</a><a class="btn ghost" href="{{TEL}}">Zadzwoń</a></div>`,
    },
    team: {
      seg: 'zespol', nav: 'Nasz zespół',
      title: 'Nasz zespół', desc: 'Zespół ACC HOMES: broker, zespół wsparcia i około 50 partnerów obsługujących klientów w 10 językach.',
      lead: 'Około 50 partnerów, 10 języków i jeden cel: profesjonalna i rzetelna obsługa każdego klienta.',
      html: `
{{TEAMPHOTOS}}
<h2>Zarząd i wsparcie</h2>
{{TEAM}}
<h2>Nasi partnerzy</h2>
<p>Naszych doradców nazywamy <b>partnerami</b>. Zajmują się mieszkaniami, willami, nowymi inwestycjami, nieruchomościami komercyjnymi i działkami, ze wsparciem zespołu foto i wideo, social media i grafiki, CRM oraz regularnych szkoleń ACC Academy.</p>
{{PARTNERS}}
<h3>Języki, w których pracujemy</h3>
{{LANGS}}
<div class="ctas"><a class="btn" href="{{URL:contact}}">Skontaktuj się z nami</a></div>`,
    },
    services: {
      seg: 'uslugi', nav: 'Usługi',
      title: 'Nasze usługi', desc: 'Usługi ACC HOMES: sprzedaż i wynajem, zarządzanie nieruchomościami, marketing inwestycji, sprzedaż klientom zagranicznym, wycena i doradztwo inwestycyjne.',
      lead: 'Pełen zakres usług na rynku nieruchomości – od sprzedaży i wynajmu po opiekę nad inwestorami z zagranicy.',
      html: `
<h2>Przed zakupem</h2>
<div class="svc">
<div><span>🏠</span><h3>Sprzedaż</h3><p>Cena oparta na danych, profesjonalna prezentacja i wsparcie aż do aktu własności.</p></div>
<div><span>🔑</span><h3>Wynajem</h3><p>Znalezienie najemcy, umowa i przekazanie – przejrzyście dla obu stron.</p></div>
<div><span>🛠️</span><h3>Zarządzanie</h3><p>Kontrola czynszu, kontakt z najemcą i rozwiązywanie spraw przez cały rok.</p></div>
<div><span>🏗️</span><h3>Marketing inwestycji</h3><p>Biuro sprzedaży, koordynacja i marketing 360° dla deweloperów.</p></div>
<div><span>🌍</span><h3>Klienci zagraniczni</h3><p>Obsługa w 10 językach, pomoc przy akcie własności i pełnomocnictwie.</p></div>
<div><span>📊</span><h3>Wycena</h3><p>Raport cenowy na podstawie porównywalnych transakcji.</p></div>
<div><span>📈</span><h3>Inwestycje</h3><p>Analiza rentowności najmu i wzrostu wartości.</p></div>
<div><span>🏬</span><h3>Komercja i działki</h3><p>Sklepy, biura, hotele i działki inwestycyjne.</p></div>
</div>
<h2>Po zakupie</h2>
<ul class="ticks cols2"><li>Podłączenie prądu, wody, gazu i internetu</li><li>Ubezpieczenie od trzęsienia ziemi DASK i ubezpieczenie domu</li><li>Numer podatkowy i konto bankowe</li><li>Umeblowanie i pomoc przy zakupach</li><li>Wynajem i zarządzanie nieruchomością</li><li>Dokumenty do pozwolenia na pobyt i obywatelstwa</li></ul>
<div class="ctas"><a class="btn" href="{{WA}}" target="_blank" rel="noopener">Bezpłatna wycena</a><a class="btn ghost" href="{{URL:contact}}">Kontakt</a></div>`,
    },
    join: {
      seg: 'kariera', nav: 'Kariera',
      title: 'Kariera w ACC HOMES', desc: 'ACC HOMES szuka partnerów: bez opłaty za biurko i składek miesięcznych, 70% prowizji dla partnera.',
      lead: 'Nie szukamy pracowników, szukamy partnerów.',
      html: `
<div class="cards3">
<div><h3>Bez opłaty za biurko</h3><p>Żadnych stałych kosztów ani składek miesięcznych.</p></div>
<div><h3>70% dla Ciebie</h3><p>Z każdej transakcji 70% otrzymujesz Ty, 30% biuro.</p></div>
<div><h3>Silny zespół wsparcia</h3><p>Foto i wideo, marka osobista, social media, CRM i szkolenia ACC Academy.</p></div>
</div>
<div class="ctas"><a class="btn" href="{{WA_JOIN}}" target="_blank" rel="noopener">Napisz na WhatsApp</a></div>`,
    },
  },
};
