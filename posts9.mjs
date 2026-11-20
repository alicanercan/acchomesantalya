// Blog 9 (20.11.2026): BDDK 19.11.2026 kararları — konut kredisinde %75 azaltma artık en az iki konutu olanlara; kredi kartı asgari ödeme %20/%30/%40 (11605).
// Kaynaklar: Milliyet Uzmanpara, Cumhuriyet, Akşam, Sözcü, CNBC-e, Milli Gazete, Ekonomim (20.11.2026); kredi değer oranı tablosu BDDK 29.01.2026 / 11364.
const B = (s, t) => `<a href="{{URL:blog}}${s}/">${t}</a>`;
const SRC = `<ul class="ticks">
<li><a href="https://uzmanpara.milliyet.com.tr/uzmanpara/bddkdan-limit-karari-kredi-kartlarinda-yeni-asgari-odeme-oranlari-degisti-7704596" target="_blank" rel="noopener nofollow">Milliyet Uzmanpara</a></li>
<li><a href="https://www.cumhuriyet.com.tr/ekonomi/ikinci-evi-olanlara-kredi-freni-bddk-den-yuzde-75-karari-2557884" target="_blank" rel="noopener nofollow">Cumhuriyet</a></li>
<li><a href="https://www.aksam.com.tr/ekonomi/bddkdan-konut-kredilerine-yeni-duzenleme-iki-ve-uzeri-evi-olanlara-yuzde-75-siniri/haber-1716071" target="_blank" rel="noopener nofollow">Akşam</a></li>
<li><a href="https://www.cnbce.com/haberler/bddk-kredi-karti-asgari-odeme-oranlarini-yeniden-belirledi-h42288" target="_blank" rel="noopener nofollow">CNBC-e</a></li>
<li><a href="https://www.milligazete.com.tr/kredi-karti-asgari-odeme-orani-2026-ne-kadar-yuzde-kac-oldu-100-bin-ve-200-bin-tl-limitli-kartlarda-asgari-odeme-nasil" target="_blank" rel="noopener nofollow">Milli Gazete</a></li>
<li><a href="https://www.alomaliye.com/2026/01/31/konut-kredilerinde-ve-konut-teminatli-kredilerde-uygulanacak-kredi-deger-orani-ve-azami-kredi-tutari-11364/" target="_blank" rel="noopener nofollow">BDDK 11364 sayılı karar (Alomaliye)</a></li>
</ul>`;

export const POSTS9 = [
  {
    slug: 'bddk-konut-kredisi-ikinci-ev-karari-kasim-2026', cat: 'rehber', date: '2026-11-20', icon: '🏦',
    tr: {
      title: 'BDDK’dan Yeni Karar: İkinci Ev Alana Konut Kredisi Kısıtı Kalktı',
      seo: 'BDDK Kasım 2026 Kararı: İkinci Eve Konut Kredisi ve Yeni Asgari Ödeme Oranları',
      desc: 'BDDK’nın 19 Kasım 2026 kararıyla konut kredisindeki %75 kısıt artık en az iki konutu olanlara uygulanıyor. Hisseli tapu, riskli yapı istisnaları ve kredi kartı asgari ödeme oranları.',
      html: `
<p>Bankacılık Düzenleme ve Denetleme Kurulu (BDDK), 19 Kasım 2026 tarihli toplantısında konut kredileri ve kredi kartlarıyla ilgili iki önemli karar aldı; kararlar 20 Kasım’da kamuoyuna duyuruldu. Ev almayı planlayanlar için en önemli değişiklik şu: <b>bir evi olup ikinci evini almak isteyenler artık konut kredisinde kısıtlamaya takılmıyor.</b></p>
<h2>Konut kredisinde ne değişti?</h2>
<p>Ağustos 2023’ten beri, kişinin kendisi, eşi veya 18 yaşından küçük çocukları adına <b>en az bir</b> konut varsa, kullanılabilecek azami konut kredisi oranı %75 azaltılarak uygulanıyordu. Yeni kararla bu kısıt, adlarına <b>en az iki</b> konut bulunanlara uygulanacak. Kural, konut alımı için kullanılan kredilerle birlikte taşıt kredileri hariç konut teminatlı kredileri de kapsıyor.</p>
<ul class="ticks">
<li><b>Hisseli tapu:</b> Herhangi bir konutta %50 veya daha az hissesi olanların o konutu, konut sahipliği hesabında dikkate alınmayacak. İkiden fazla konutta hisseli tapusu olanlar bu istisnanın dışında.</li>
<li><b>Riskli yapı:</b> Kentsel dönüşüm kapsamında riskli yapı tespiti nedeniyle yıkılmış ya da yıkım kararı alınmış konutlardan yalnızca biri, konut sahipliği değerlendirmesinde dikkate alınmayacak.</li>
</ul>
<h2>Örnek: 5 milyon TL’lik ev</h2>
<p>BDDK’nın Ocak 2026 tablosuna göre değeri 5 milyon TL’ye kadar olan ve enerji sınıfı A veya B olan konutlarda azami kredi oranı %90.</p>
<table><thead><tr><th>Alıcının durumu</th><th>Azami kredi oranı</th><th>Azami kredi</th></tr></thead><tbody>
<tr><td>Hiç evi yok</td><td>%90</td><td>4.500.000 TL</td></tr>
<tr><td>Bir evi var (eski kural)</td><td>%22,5</td><td>1.125.000 TL</td></tr>
<tr><td>Bir evi var (yeni kural)</td><td>%90</td><td>4.500.000 TL</td></tr>
<tr><td>En az iki evi var</td><td>%22,5</td><td>1.125.000 TL</td></tr>
</tbody></table>
<p>Yani evi olan ve ikinci evini, örneğin yatırım ya da büyüyen aile için daha geniş bir ev almak isteyen kişi, artık ilk kez ev alan biriyle aynı oranda kredi kullanabiliyor.</p>
<h3>Güncel azami kredi oranları (BDDK, Ocak 2026)</h3>
<table><thead><tr><th>Konut değeri</th><th>A-B</th><th>C</th><th>Diğer</th></tr></thead><tbody>
<tr><td>5 milyon TL’ye kadar</td><td>%90</td><td>%80</td><td>%70</td></tr>
<tr><td>5 – 7 milyon TL</td><td>%80</td><td>%70</td><td>%60</td></tr>
<tr><td>7 – 10 milyon TL</td><td>%70</td><td>%60</td><td>%50</td></tr>
<tr><td>10 – 20 milyon TL</td><td>%50</td><td>%40</td><td>%30</td></tr>
<tr><td>20 milyon TL üzeri</td><td>%40</td><td>%30</td><td>%20</td></tr>
</tbody></table>
<p>Enerji sınıfı, Enerji Kimlik Belgesi’ne göre belirlenir. En az iki konutu olanlarda bu oranlar %75 azaltılarak uygulanır.</p>
<h2>Kredi kartı asgari ödeme oranları</h2>
<p>BDDK aynı gün aldığı 11605 sayılı kararla kredi kartı asgari ödeme oranlarına yeni bir dilim ekledi. Daha önce 100 bin TL üzerindeki tüm kartlarda %40 olan oran, 100–200 bin TL limitli kartlarda %30’a indi.</p>
<table><thead><tr><th>Kart limiti</th><th>Asgari ödeme</th></tr></thead><tbody>
<tr><td>100.000 TL ve altı</td><td>Dönem borcunun %20’si</td></tr>
<tr><td>100.000 TL üzeri – 200.000 TL dahil</td><td>Dönem borcunun %30’u</td></tr>
<tr><td>200.000 TL üzeri</td><td>Dönem borcunun %40’ı</td></tr>
</tbody></table>
<h2>Gayrimenkul piyasası için ne anlama geliyor?</h2>
<ul class="ticks">
<li><b>İkinci ev talebi:</b> Bir evi olup ikinci evi kredili almak isteyen geniş bir kesim yeniden krediye erişebilecek. Bu, özellikle 5 milyon TL’ye kadar, enerji sınıfı yüksek yeni konutlarda talebi destekleyebilir.</li>
<li><b>Yatırım amaçlı alım:</b> Kiraya vermek için ikinci daire almak isteyenler için finansman yeniden mümkün; ancak üçüncü ve sonraki evlerde kısıt sürüyor.</li>
<li><b>Kentsel dönüşüm:</b> Evi riskli yapı olarak yıkılan ya da yıkım kararı alınan malikler, dönüşüm sürecinde başka bir ev alırken bu konut nedeniyle kısıta takılmayacak. Ayrıntılar için ${B('antalya-kentsel-donusum-rehberi-muratpasa-konyaalti', 'Kentsel Dönüşüm Rehberimize')} bakabilirsiniz.</li>
<li><b>Miras ve hisseli tapular:</b> Bir konutta %50 veya daha az hissesi olanlar, ev alırken bu hisse nedeniyle kısıtlanmayacak.</li>
</ul>
<h2>Dikkat edilmesi gerekenler</h2>
<p>Karar azami oranları belirler; kredinin onaylanması ve tutarı, bankanın gelir ve kredi notu değerlendirmesine bağlıdır. Bankaların yeni kuralı sistemlerine yansıtma zamanı farklı olabilir; başvurudan önce bankanızla teyit edin. Bu yazı bilgilendirme amaçlıdır, finansal danışmanlık değildir.</p>
<p>Krediyle ev almayı ya da ikinci evinizi değerlendirmeyi planlıyorsanız, ACC HOMES International Real Estate olarak bütçenize uygun seçenekleri ve kredi sürecini birlikte planlayabiliriz: <a href="{{WA}}" target="_blank" rel="noopener">WhatsApp’tan yazın →</a> ya da <a href="{{URL:list}}">ilanlarımıza göz atın</a>.</p>
<h2>Kaynaklar</h2>${SRC}`,
      faq: [
        ['Bir evim var, ikinci ev için konut kredisi kullanabilir miyim?', 'Evet. 19 Kasım 2026 kararıyla %75 azaltma yalnızca kendisi, eşi veya 18 yaş altı çocukları adına en az iki konutu olanlara uygulanıyor. Bir evi olan, ilk kez ev alanla aynı azami oranda kredi kullanabilir.'],
        ['Hisseli tapum var, konut sahibi sayılır mıyım?', 'Bir konutta %50 veya daha az hisseniz varsa o konut hesaba katılmaz. İkiden fazla konutta hisseli tapusu olanlar bu istisnadan yararlanamaz.'],
        ['Evim kentsel dönüşümde yıkıldı, bu konut sayılır mı?', 'Riskli yapı nedeniyle yıkılmış veya yıkım kararı alınmış konutlardan yalnızca biri değerlendirmede dikkate alınmaz.'],
        ['Kredi kartı asgari ödeme oranı yüzde kaç oldu?', 'Limiti 100 bin TL ve altı olan kartlarda %20, 100–200 bin TL arasında %30, 200 bin TL üzerinde %40.'],
      ],
    },
    en: {
      title: 'New BDDK Rule: Mortgage Limit for Second-Home Buyers Lifted',
      seo: 'Türkiye BDDK November 2026: Mortgages for Second Homes and New Card Minimum Payments',
      desc: 'Under BDDK’s 19 November 2026 decision, the 75% mortgage cut now applies only to buyers who own at least two homes. Shared title and risky-building exemptions, and new credit card minimum payments.',
      html: `
<p>Türkiye’s Banking Regulation and Supervision Board (BDDK) took two important decisions on mortgages and credit cards at its 19 November 2026 meeting, announced on 20 November. The key change for buyers: <b>people who already own one home can now take out a mortgage for a second home without the previous restriction.</b></p>
<h2>What changed for mortgages?</h2>
<p>Since August 2023, if the buyer, their spouse or their children under 18 owned <b>at least one</b> home, the maximum loan-to-value ratio was cut by 75%. Under the new decision, this cut applies only to those who own <b>at least two</b> homes. The rule covers loans for buying a home and home-secured loans, excluding car loans.</p>
<ul class="ticks">
<li><b>Shared title deeds:</b> A home in which the buyer holds a share of 50% or less is not counted. This exemption does not apply to people with shares in more than two homes.</li>
<li><b>Risky buildings:</b> One home demolished, or under a demolition order, after being declared a risky building under urban renewal law is not counted.</li>
</ul>
<h2>Example: a 5 million TL home</h2>
<p>Under BDDK’s January 2026 table, homes worth up to 5 million TL with energy class A or B can be financed up to 90%.</p>
<table><thead><tr><th>Buyer’s situation</th><th>Max LTV</th><th>Max loan</th></tr></thead><tbody>
<tr><td>No home</td><td>90%</td><td>4,500,000 TL</td></tr>
<tr><td>Owns one home (old rule)</td><td>22.5%</td><td>1,125,000 TL</td></tr>
<tr><td>Owns one home (new rule)</td><td>90%</td><td>4,500,000 TL</td></tr>
<tr><td>Owns two or more homes</td><td>22.5%</td><td>1,125,000 TL</td></tr>
</tbody></table>
<h3>Current maximum loan-to-value ratios (BDDK, January 2026)</h3>
<table><thead><tr><th>Home value</th><th>A-B</th><th>C</th><th>Other</th></tr></thead><tbody>
<tr><td>Up to 5 million TL</td><td>90%</td><td>80%</td><td>70%</td></tr>
<tr><td>5 – 7 million TL</td><td>80%</td><td>70%</td><td>60%</td></tr>
<tr><td>7 – 10 million TL</td><td>70%</td><td>60%</td><td>50%</td></tr>
<tr><td>10 – 20 million TL</td><td>50%</td><td>40%</td><td>30%</td></tr>
<tr><td>Over 20 million TL</td><td>40%</td><td>30%</td><td>20%</td></tr>
</tbody></table>
<p>The energy class is set by the Energy Performance Certificate. For owners of two or more homes these ratios are cut by 75%.</p>
<h2>Credit card minimum payments</h2>
<p>In decision no. 11605 the same day, BDDK added a new tier: cards with a 100,000–200,000 TL limit now pay a 30% minimum instead of 40%.</p>
<table><thead><tr><th>Card limit</th><th>Minimum payment</th></tr></thead><tbody>
<tr><td>Up to 100,000 TL</td><td>20% of the statement balance</td></tr>
<tr><td>100,000 – 200,000 TL</td><td>30%</td></tr>
<tr><td>Over 200,000 TL</td><td>40%</td></tr>
</tbody></table>
<h2>What it means for the property market</h2>
<ul class="ticks">
<li><b>Second-home demand:</b> A large group of owners can again finance a second home, which may support demand for new, energy-efficient homes up to 5 million TL.</li>
<li><b>Buy-to-let:</b> Financing a second flat to rent out is possible again; the restriction remains from the third home onwards.</li>
<li><b>Urban renewal:</b> Owners whose building was demolished or ordered demolished as risky will not be restricted because of that home when buying another.</li>
</ul>
<h2>Points to note</h2>
<p>The decision sets maximum ratios; approval and loan amounts depend on the bank’s assessment of income and credit score. Banks may update their systems at different times, so confirm with your bank before applying. Turkish mortgages are generally aimed at Turkish residents with local income; foreign buyers should check eligibility with their bank. This article is for information only and is not financial advice.</p>
<p>If you are planning to buy with a mortgage or add a second home, ACC HOMES International Real Estate can help you plan options that fit your budget: <a href="{{WA}}" target="_blank" rel="noopener">message us on WhatsApp →</a></p>
<h2>Sources</h2>${SRC}`,
      faq: [
        ['I own one home in Türkiye. Can I get a mortgage for a second?', 'Yes. Since the 19 November 2026 decision, the 75% cut applies only to those who (with spouse and children under 18) own at least two homes.'],
        ['Does a shared title deed count as owning a home?', 'Not if your share in that home is 50% or less, unless you hold shares in more than two homes.'],
        ['What are the new credit card minimum payments?', '20% for limits up to 100,000 TL, 30% for 100,000–200,000 TL and 40% above 200,000 TL.'],
      ],
    },
    ru: {
      title: 'Новое решение BDDK: ипотека на второе жильё снова доступна',
      seo: 'Решение BDDK ноябрь 2026: ипотека на второе жильё и новые минимальные платежи по картам',
      desc: 'По решению BDDK от 19 ноября 2026 года сокращение ипотеки на 75% теперь применяется только к владельцам минимум двух квартир. Исключения для долевой собственности и аварийных домов, новые минимальные платежи по кредитным картам.',
      html: `
<p>Агентство по регулированию и надзору за банками Турции (BDDK) 19 ноября 2026 года приняло два важных решения по ипотеке и кредитным картам; они были объявлены 20 ноября. Главное для покупателей: <b>владельцы одной квартиры теперь могут взять ипотеку на второе жильё без прежнего ограничения.</b></p>
<h2>Что изменилось в ипотеке?</h2>
<p>С августа 2023 года, если у покупателя, его супруга или детей до 18 лет было <b>хотя бы одно</b> жильё, максимальная доля кредита снижалась на 75%. По новому решению это сокращение применяется только к тем, у кого <b>не менее двух</b> объектов жилья. Правило касается кредитов на покупку жилья и кредитов под залог жилья, кроме автокредитов.</p>
<ul class="ticks">
<li><b>Долевая собственность:</b> жильё, в котором у покупателя доля 50% или меньше, не учитывается. Исключение не действует для владельцев долей более чем в двух объектах.</li>
<li><b>Аварийные дома:</b> один объект, снесённый или подлежащий сносу как аварийный в рамках городской реновации, не учитывается.</li>
</ul>
<h2>Пример: квартира за 5 млн TL</h2>
<p>По таблице BDDK от января 2026 года для жилья стоимостью до 5 млн TL с энергоклассом A или B максимальная доля кредита — 90%.</p>
<table><thead><tr><th>Ситуация покупателя</th><th>Макс. доля</th><th>Макс. кредит</th></tr></thead><tbody>
<tr><td>Нет жилья</td><td>90%</td><td>4 500 000 TL</td></tr>
<tr><td>Одно жильё (старое правило)</td><td>22,5%</td><td>1 125 000 TL</td></tr>
<tr><td>Одно жильё (новое правило)</td><td>90%</td><td>4 500 000 TL</td></tr>
<tr><td>Два и более объекта</td><td>22,5%</td><td>1 125 000 TL</td></tr>
</tbody></table>
<h3>Действующие максимальные доли кредита (BDDK, январь 2026)</h3>
<table><thead><tr><th>Стоимость жилья</th><th>A-B</th><th>C</th><th>Прочие</th></tr></thead><tbody>
<tr><td>До 5 млн TL</td><td>90%</td><td>80%</td><td>70%</td></tr>
<tr><td>5 – 7 млн TL</td><td>80%</td><td>70%</td><td>60%</td></tr>
<tr><td>7 – 10 млн TL</td><td>70%</td><td>60%</td><td>50%</td></tr>
<tr><td>10 – 20 млн TL</td><td>50%</td><td>40%</td><td>30%</td></tr>
<tr><td>Свыше 20 млн TL</td><td>40%</td><td>30%</td><td>20%</td></tr>
</tbody></table>
<p>Энергокласс определяется по энергетическому паспорту здания. Для владельцев двух и более объектов эти доли снижаются на 75%.</p>
<h2>Минимальные платежи по кредитным картам</h2>
<p>Решением № 11605 в тот же день BDDK ввело новый уровень: для карт с лимитом 100–200 тыс. TL минимальный платёж снижен с 40% до 30%.</p>
<table><thead><tr><th>Лимит карты</th><th>Минимальный платёж</th></tr></thead><tbody>
<tr><td>До 100 000 TL</td><td>20% задолженности за период</td></tr>
<tr><td>100 000 – 200 000 TL</td><td>30%</td></tr>
<tr><td>Свыше 200 000 TL</td><td>40%</td></tr>
</tbody></table>
<h2>Что это значит для рынка недвижимости</h2>
<ul class="ticks">
<li><b>Спрос на второе жильё:</b> многие владельцы снова смогут купить второе жильё в кредит, что может поддержать спрос на новые энергоэффективные квартиры до 5 млн TL.</li>
<li><b>Покупка для сдачи в аренду:</b> финансирование второй квартиры снова возможно; ограничение сохраняется начиная с третьего объекта.</li>
<li><b>Реновация:</b> владельцы, чей дом снесён или подлежит сносу как аварийный, не будут ограничены из-за этого объекта при покупке другого жилья.</li>
</ul>
<h2>На что обратить внимание</h2>
<p>Решение устанавливает максимальные доли; одобрение и сумма кредита зависят от оценки банком дохода и кредитной истории. Банки могут внедрить правило в разные сроки — уточните в своём банке. Турецкая ипотека в основном рассчитана на резидентов с доходом в Турции; иностранцам стоит уточнить условия в банке. Статья носит информационный характер и не является финансовой консультацией.</p>
<p>Если вы планируете покупку в ипотеку или второе жильё, ACC HOMES International Real Estate поможет подобрать варианты под ваш бюджет: <a href="{{WA}}" target="_blank" rel="noopener">напишите нам в WhatsApp →</a></p>
<h2>Источники</h2>${SRC}`,
      faq: [
        ['У меня есть одна квартира. Могу ли я взять ипотеку на вторую?', 'Да. С 19 ноября 2026 года сокращение на 75% применяется только к тем, у кого (вместе с супругом и детьми до 18 лет) не менее двух объектов жилья.'],
        ['Считается ли доля в квартире владением жильём?', 'Нет, если ваша доля 50% или меньше — кроме случаев, когда у вас доли более чем в двух объектах.'],
        ['Какие теперь минимальные платежи по кредитным картам?', '20% при лимите до 100 000 TL, 30% при 100 000–200 000 TL и 40% при лимите свыше 200 000 TL.'],
      ],
    },
  },
];
