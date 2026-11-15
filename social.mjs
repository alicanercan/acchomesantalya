// Sosyal sorumluluk etkinlikleri. Yeni etkinlik eklemek için EVENTS dizisinin başına yeni kayıt ekleyin.
// Görseller static/img/sosyal/ altında WebP (en fazla 1000 px). remote: derlemede eski siteden indirilen görsel.
export const SOCIAL = {
  seg: { tr: 'sosyal-sorumluluk', en: 'social-responsibility', de: 'soziale-verantwortung', ru: 'sotsialnaya-otvetstvennost', fa: 'masooliat-ejtemai', pl: 'odpowiedzialnosc-spoleczna', fr: 'responsabilite-sociale', es: 'responsabilidad-social', nl: 'maatschappelijke-verantwoordelijkheid', sv: 'samhallsansvar', ar: 'almasuliya-alijtimaiya', zh: 'shehui-zeren' },
  nav: { tr: 'Sosyal Sorumluluk', en: 'Social Responsibility', de: 'Soziale Verantwortung', ru: 'Социальная ответственность', fa: 'مسئولیت اجتماعی', pl: 'Odpowiedzialność społeczna', fr: 'Responsabilité sociale', es: 'Responsabilidad social', nl: 'Maatschappelijke verantwoordelijkheid', sv: 'Samhällsansvar', ar: 'المسؤولية الاجتماعية', zh: '社会责任' },
  lead: {
    tr: 'Her yıl bir günümüzü yalnızca iyiliğe ayırıyoruz: ACC Sosyal Sorumluluk Günü, “ACC Day”.',
    en: 'Every year we set aside one day for doing good alone: the ACC Social Responsibility Day, “ACC Day”.',
    de: 'Jedes Jahr widmen wir einen Tag ausschließlich guten Taten: den ACC-Tag der sozialen Verantwortung, „ACC Day“.',
    ru: 'Каждый год мы посвящаем один день только добрым делам: День социальной ответственности ACC, «ACC Day».',
    fa: 'هر سال یک روز را فقط به کار خیر اختصاص می‌دهیم: روز مسئولیت اجتماعی ACC یا «ACC Day».',
    pl: 'Co roku jeden dzień poświęcamy wyłącznie pomaganiu innym: Dzień Odpowiedzialności Społecznej ACC, „ACC Day”.',
    fr: 'Chaque année, nous consacrons une journée uniquement à faire le bien : la Journée de responsabilité sociale ACC, « ACC Day ».',
    es: 'Cada año dedicamos un día solo a hacer el bien: el Día de Responsabilidad Social de ACC, «ACC Day».',
    nl: 'Elk jaar wijden we één dag volledig aan het goede doel: de ACC-dag voor maatschappelijke verantwoordelijkheid, “ACC Day”.',
    sv: 'Varje år ägnar vi en dag enbart åt att göra gott: ACC:s samhällsansvarsdag, ”ACC Day”.',
    ar: 'نخصص كل عام يومًا واحدًا لفعل الخير فقط: يوم المسؤولية الاجتماعية في ACC، «ACC Day».',
    zh: '每年我们都会拿出一天只做公益：ACC社会责任日，即“ACC Day”。',
  },
  intro: {
    tr: '<p>ACC HOMES olarak her yıl bir günü “ACC Sosyal Sorumluluk Günü” ilan ediyoruz. O gün ticari işlerimize ara verip tüm ekip ve iş ortaklarımızla yalnızca çevremize faydalı olmaya odaklanıyoruz. Önceliğimiz eğitim ve çocuklar; çünkü onlara yapılan her yatırım geleceğe yapılmış bir yatırımdır.</p>',
    en: '<p>Every year ACC HOMES declares one day the “ACC Social Responsibility Day”. We pause our business and, together with our whole team and partners, focus only on giving back to our community. Our priority is education and children, because every investment in them is an investment in the future.</p>',
  },
  events: [
    {
      id: 'acc-day-2025', date: '23.12.2025',
      images: [['/img/sosyal/acc-day-2025-okul.webp', 1000, 1000], ['/img/sosyal/acc-day-2025-ogretmenler.webp', 1000, 1000]],
      remote: [['https://acchomesantalya.com/wp-content/uploads/2026/01/IMG_6752-scaled.jpg', 'acc-day-2025-hazirlik.jpg']],
      stats: { tr: [['800', 'öğrenciye hediye paketi'], ['20', 'destekçi iş ortağı'], ['2', 'ülkeden destek: ABD ve Belçika']], en: [['800', 'students received gift packs'], ['20', 'supporting business partners'], ['2', 'countries sent support: USA and Belgium']] },
      tr: {
        title: 'ACC Day 2025: 800 öğrencinin yüzü güldü',
        place: 'Şehit Serhat Genç İlkokulu, Habibler Mahallesi, Kepez / Antalya',
        html: `<p>ACC Day 2025’te Kepez Habibler Mahallesi’ndeki Şehit Serhat Genç İlkokulu’nu ziyaret ettik. Kurucumuz Ali Caner Can önderliğinde düzenlenen etkinliğe inşaat, emlak ve mimarlık firmaları ile yayınevleri başta olmak üzere 20 iş ortağımız destek verdi.</p>
<p>Bir hafta boyunca ofisimize gelen bağışlar, bir kalemtıraştan 200 deftere kadar tek tek ayrıldı. Kampanya Antalya’nın dışına taştı; Amerika ve Belçika’dan da destek geldi.</p>
<h3>Neler hazırladık</h3>
<ul class="ticks"><li>Ana sınıfları için gelişimi destekleyen oyuncaklar</li><li>Okul kütüphanesi için yüzlerce kitap</li><li>İlkokul öğrencileri için kırtasiye malzemeli 800 kişiye özel paket</li></ul>
<p>Etkinlik günü ACC ailesi ve iş ortaklarımız paketleri sınıf sınıf gezerek öğrencilere elden teslim etti; okul müdürü, idareciler ve öğretmenlerle okulun ihtiyaçlarını konuştuk.</p>
<blockquote>“Her yıl bir günümüzü ‘ACC Sosyal Sorumluluk Günü’ ilan ediyor, o gün tüm ticari işlerimizi durdurarak yalnızca çevremize faydalı olmaya odaklanıyoruz. Amacımız sadece hediye vermek değil; çocuklarımıza yeni yıla girerken yanlarında olduğumuzu hissettirmek ve eğitimlerine katkı sunmak. 800 öğrencimizin gözündeki mutluluk, bizim için tüm başarılardan daha değerli. Amerika’dan Belçika’ya, mimarlardan yayınevlerine destek veren herkese teşekkür ediyorum.”<cite>Ali Caner Can, Kurucu</cite></blockquote>`,
      },
      en: {
        title: 'ACC Day 2025: smiles for 800 students',
        place: 'Şehit Serhat Genç Primary School, Habibler, Kepez / Antalya',
        html: `<p>For ACC Day 2025 we visited Şehit Serhat Genç Primary School in Habibler, Kepez. The event, led by our founder Ali Caner Can, was supported by 20 business partners, including construction, real estate and architecture firms and publishers.</p>
<p>For a week, donations arriving at our office, from a single pencil sharpener to 200 notebooks, were sorted one by one. The campaign reached beyond Antalya, with support from the USA and Belgium.</p>
<h3>What we prepared</h3>
<ul class="ticks"><li>Educational toys for the kindergarten classes</li><li>Hundreds of books for the school library</li><li>800 personalised stationery packs for the primary school pupils</li></ul>
<p>On the day, the ACC family and our partners went from class to class handing the packs to each student, and met the head teacher, administrators and teachers to talk about the school’s needs.</p>
<blockquote>“Every year we declare one day the ‘ACC Social Responsibility Day’, stop all our business and focus only on benefiting our community. Our aim is not just to give a gift, but to let our children feel that we are with them as they start the new year, and to contribute to their education. Seeing the happiness in the eyes of 800 students means more to us than any business success. Thank you to everyone who supported us, from the USA to Belgium, from architects to publishers.”<cite>Ali Caner Can, Founder</cite></blockquote>`,
      },
    },
  ],
};
