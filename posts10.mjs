// Blog 10 (21.11.2026): Antalya'da villanızı satmak — satıcı rehberi (TR/EN/RU). Kaynak taslak: claude/blog-4-antalya-villa-satmak.md
// Bölge gözlemleri, ekip, JamesEdition, Google 472 yorum / 4,9 puan: Caner 21.11.2026. Google sayısı değiştikçe güncelleyin.
const A = (s, t) => `<a href="{{URL:areas}}${s}/">${t}</a>`;
const AR = (s, t) => `<a href="/en/area-guides/${s}/">${t}</a>`; // RU bölge sayfası yok
const B = (s, t) => `<a href="{{URL:blog}}${s}/">${t}</a>`;
const CTA_WA = (t) => `<a href="{{WA}}" target="_blank" rel="noopener">${t}</a>`;

export const POSTS10 = [
  {
    slug: 'antalya-villanizi-satmak-rehberi', cat: 'rehber', date: '2026-11-21', icon: '🏡',
    tr: {
      title: 'Antalya’da Villanızı Satmak: Fiyatlama, Pazarlama ve Doğru Alıcı',
      seo: 'Antalya’da Villanızı Satmak: Adım Adım Satış Rehberi',
      desc: 'Antalya’da villanızı satmak mı istiyorsunuz? Doğru fiyat, hazırlık, profesyonel sunum, yerli ve yabancı alıcıya ulaşma ve güvenli tapu süreci için adım adım rehber.',
      html: `
<p>Villa satmak, daire satmaktan farklıdır. Alıcı kitlesi daha dar, beklentisi daha yüksek ve çoğu zaman Antalya dışından ya da yurt dışından gelir. Doğru fiyat, güçlü bir sunum ve doğru alıcıya ulaşmak, villanızın hem daha kısa sürede hem de değerine satılmasını sağlar. Bu rehberde Antalya’da villa satış sürecini adım adım anlattık.</p>
<h2>1. Doğru fiyatla başlayın</h2>
<p>Villa satışında en sık yapılan hata, fiyatı beklentiye göre belirlemektir. Piyasanın üzerinde fiyatlanan bir villa ilanda uzun süre bekler, alıcıların gözünde “satılamayan ev” algısı oluşur ve sonunda çoğu zaman değerinin altında satılır.</p>
<ul class="ticks">
<li><b>Emsal analizi:</b> Aynı bölgede, benzer arsa ve kapalı alana sahip, yakın zamanda satılmış villalar karşılaştırılır.</li>
<li><b>Villanın kendi özellikleri:</b> Arsa büyüklüğü, havuz, manzara, yapı yılı, iskân, enerji sınıfı, site içi mi müstakil mi olduğu fiyatı doğrudan etkiler.</li>
<li><b>Alıcı profili:</b> Villanızın yerli aileye mi, yatırımcıya mı, yabancı alıcıya mı hitap ettiği, fiyatı ve satış süresini belirler.</li>
</ul>
<p>Ayrıntılar için ${B('evimi-satarken-dogru-fiyat-nasil-belirlenir', 'Evimi satarken doğru fiyat nasıl belirlenir')} yazımıza bakabilirsiniz.</p>
<h2>2. Belgeleri ve villayı hazırlayın</h2>
<ul class="ticks">
<li>Tapu ve varsa iskân belgesi</li>
<li>Zorunlu deprem sigortası (DASK)</li>
<li>Enerji Kimlik Belgesi: A veya B sınıfı villalarda alıcıların kullanabileceği kredi oranı daha yüksektir; bu da alıcı kitlesini genişletir. Güncel oranlar için ${B('bddk-konut-kredisi-ikinci-ev-karari-kasim-2026', 'BDDK konut kredisi kararı')} yazımıza bakabilirsiniz.</li>
<li>Site içindeyse aidat ve yönetim bilgileri</li>
</ul>
<p>Villanın kendisi için küçük ama etkili hazırlıklar: bahçe ve havuz bakımı, boya ve küçük onarımlar, eşyaların sadeleştirilmesi. Alıcı, ilk izlenimde kendini o evde yaşarken hayal edebilmelidir.</p>
<h2>3. Villanızı profesyonelce sunun</h2>
<p>Villa alıcısı kararını çoğu zaman ilk fotoğraflarda verir. Telefonla çekilmiş birkaç fotoğraf, en güzel villayı bile sıradan gösterebilir.</p>
<ul class="ticks">
<li>Profesyonel fotoğraf ve video</li>
<li>Drone çekimi: arsa, bahçe, havuz ve çevre tek karede</li>
<li>Gün batımı ve gece çekimleri</li>
<li>Kat planı ve öne çıkan özelliklerin net anlatımı</li>
</ul>
<p>ACC HOMES bünyesinde 2 sabit tasarımcı ve kendi çekim ekibimiz çalışıyor. Villanızın fotoğraf, drone ve video çekimi, ilan görselleri ve sosyal medya tasarımları dışarıya iş verilmeden ekibimiz tarafından hazırlanıyor; böylece villanız hızla ve markamızın kalite standardıyla satışa çıkıyor.</p>
<h2>4. Doğru alıcıya ulaşın</h2>
<ul class="ticks">
<li><b>Antalya içinden aileler:</b> daha büyük ev, bahçe ve okul yakınlığı arayanlar</li>
<li><b>Diğer şehirlerden taşınanlar:</b> İstanbul, Ankara ve diğer büyük şehirlerden Antalya’ya yerleşmek isteyenler</li>
<li><b>Yabancı alıcılar:</b> Rusya, Ukrayna, Avrupa ve Orta Doğu’dan yaşam, yatırım ya da ikamet amaçlı alım yapanlar</li>
</ul>
<p>Bu kitlelere ulaşmak için ilanın yalnızca bir portalda durması yetmez. ACC HOMES olarak villanızı Türkiye’nin önde gelen ilan portallarında ve kendi web sitemizde 12 dilde, hedefli Meta (Instagram ve Facebook) ve Yandex reklamlarıyla, dünyanın önde gelen lüks gayrimenkul portalı JamesEdition’da ve diğer uluslararası portallarda, ayrıca yerli ve yabancı alıcı portföyümüze doğrudan tanıtıyoruz. Profesyonellerimiz Türkçe, İngilizce, Rusça ve diğer dillerde alıcılarla doğrudan iletişim kurar.</p>
<h2>5. Gösterim, pazarlık ve güvenli tapu süreci</h2>
<ul class="ticks">
<li><b>Gösterimler:</b> Alıcılar önceden bütçe ve ihtiyaç açısından değerlendirilir; villanız yalnızca ciddi alıcılara gösterilir.</li>
<li><b>Pazarlık:</b> Emsal verilerle desteklenen bir fiyat, pazarlıkta elinizi güçlendirir.</li>
<li><b>Satış öncesi sözleşme ve kapora:</b> Tarafların hakları yazılı olarak güvence altına alınır.</li>
<li><b>Tapu ve ödeme:</b> Ödemenin güvenli şekilde ve tapu devriyle eş zamanlı yapılması planlanır; yabancı alıcılarda döviz, ekspertiz ve tercüman süreçleri baştan organize edilir.</li>
<li><b>Vergi:</b> Satıştan önce değer artış kazancı vergisi açısından durumunuzu bilmeniz önemlidir. Villanızın alış tarihi ve bedeline göre olası vergi tutarını sizin için hesaplayabiliriz; bunun için bize özelden ulaşmanız yeterli.</li>
</ul>
<h2>6. Bölgeye göre villa alıcısı ne arıyor?</h2>
<p>Antalya’da her bölgenin ihtiyacı ve villa alıcı profili birbirinden farklıdır. Antalya’da yaşayan ve müşterilerinin hem ilandaki hem de ilana çıkmadan gizli tutulan (kapalı) portföylerini satan biri olarak gözlemim şu: villa alıcısının tercihi kimi zaman Konyaaltı, kimi zaman Lara ve Güzeloba oluyor; ama bugün en revaçta olan bölge Döşemealtı. Son dönemde Kemer’de Göynük ve Çamyuva, Belek ve Kadriye, Kemerağzı ve yeni yerleşim alanı Altıntaş (Aksu) da villa talebinde belirgin bir artış gösteriyor. Kaş ve Kalkan ise ayrı bir pazar: alıcıların neredeyse tamamı yabancı ve beklentileri diğer bölgelerden oldukça farklı.</p>
<table><thead><tr><th>Bölge</th><th>Alıcı profili ve öncelikleri</th></tr></thead><tbody>
<tr><td>${A('dosemealti', 'Döşemealtı')} (${A('altinkale-yesilbayir', 'Altınkale, Yeşilbayır')})</td><td>Şu an en revaçta bölge; geniş arsa, sakin yaşam, temiz hava ve şehre yakınlık arayan aileler</td></tr>
<tr><td>${A('konyaalti', 'Konyaaltı')} (Hurma, Sarısu, Liman)</td><td>Denize ve dağa yakınlık, okul ve hastane, şehir yaşamından kopmak istemeyenler</td></tr>
<tr><td>${A('lara-guzeloba', 'Lara ve Güzeloba')}</td><td>Deniz, sosyal yaşam ve şehir merkezine yakınlık</td></tr>
<tr><td>Kemerağzı ve ${A('aksu-altintas', 'Altıntaş (Aksu)')}</td><td>Yeni yerleşim alanları; sıfır villa projeleri ve havalimanına yakınlık</td></tr>
<tr><td>${A('belek', 'Belek')} ve ${A('kadriye', 'Kadriye')}</td><td>Golf ve resort yaşamı, kiralama potansiyeli; talebi artan bölge</td></tr>
<tr><td>${A('kemer', 'Kemer')} (Göynük, Çamyuva)</td><td>Doğa ve deniz bir arada; tatil ve sürekli yaşam için talebi artan bölge</td></tr>
<tr><td>Kaş ve Kalkan</td><td>Neredeyse tamamen yabancı alıcı; manzara, mahremiyet ve tatil yaşamına odaklı, kendine özgü beklentiler</td></tr>
</tbody></table>
<p>Villanızın hangi alıcıya hitap ettiğini doğru okumak, fiyatı ve pazarlama kanalını da belirler. Kapalı portföy olarak, yani ilana çıkmadan yalnızca seçilmiş alıcılara satmak isterseniz bunu da birlikte planlayabiliriz.</p>
<h2>Neden ACC HOMES?</h2>
<p>Villanızı satarken en önemli soru, kime güveneceğinizdir. Ali Caner Can ve ACC HOMES ekibi, Antalya’da bugüne kadar onlarca villa satışı ve kiralamasını tamamladı. Bu deneyim, villanızın gerçek piyasa değerini ve hangi alıcıya hitap ettiğini ilk görüşmede doğru okumamızı sağlıyor.</p>
<ul class="ticks">
<li><b>Hazır alıcı ve yatırımcı ağı:</b> Yıllar içinde oluşturduğumuz geniş yerli ve yabancı alıcı ile yatırımcı veri tabanı sayesinde villanız, ilana çıkmadan önce bile doğru kişilere ulaşabiliyor.</li>
<li><b>Sistematik çalışma:</b> Tüm talepler, gösterimler ve görüşmeler kendi CRM sistemimizde takip edilir; hiçbir alıcı ve hiçbir geri dönüş kaybolmaz.</li>
<li><b>Dijital pazarlama:</b> Villanız web sitemizde 12 dilde, ilan portallarında ve hedefli Meta ve Yandex reklamlarıyla doğru kitleye gösterilir.</li>
<li><b>Masraf sizden çıkmaz:</b> Fotoğraf, drone ve video çekimi, ilan ve reklam masrafları ACC HOMES tarafından karşılanır.</li>
<li><b>Veriye dayalı fiyat:</b> Emsal ve piyasa verileriyle hazırlanan fiyat analizi ile satışa doğru fiyatla başlanır.</li>
<li><b>Uçtan uca takip:</b> Yetkiden tapuya kadar gösterim, pazarlık, sözleşme, banka ve tapu süreçlerinin tamamını yönetiyoruz.</li>
<li><b>Yabancı alıcı deneyimi:</b> Rus, Ukraynalı ve Avrupalı alıcılarla tamamlanmış çok sayıda satış; 10 dilde hizmet veren profesyonel ekip.</li>
</ul>
<p><b>Son satışlarımızı merak ediyorsanız:</b> Bölgenizde yakın zamanda sattığımız villaların fiyatlarını ve satış sürelerini görmek isterseniz, sizinle özel bir görüşme ayarlayalım. Bu bilgiler alıcı ve satıcılarımızın gizliliği nedeniyle sitede yayımlanmıyor; birebir görüşmede bölgenize özel emsalleri paylaşıyoruz.</p>
<p>Müşterilerimizin deneyimi ortada: Google’da 472 yorum ve 4,9 puan.</p>
<h2>Villanızın değerini birlikte belirleyelim</h2>
<p>Antalya’da villanızı satmayı düşünüyorsanız, profesyonelimiz villanızı yerinde görüp ücretsiz bir değerleme ve satış planı hazırlasın. Bölgenizdeki son villa satış fiyatlarını konuşmak için özel bir görüşme de ayarlayabiliriz: ${CTA_WA('WhatsApp’tan özel görüşme talep edin →')}</p>`,
      faq: [
        ['Villamı ne kadar sürede satarım?', 'Satış süresi; fiyat, bölge, villanın durumu ve alıcı kitlesine göre değişir. Doğru fiyatla ve profesyonel bir sunumla satışa çıkan villalar çok daha kısa sürede alıcı bulur.'],
        ['Villamı yabancı bir alıcıya satabilir miyim?', 'Evet. Yabancılar Türkiye’de yasal sınırlamalar dahilinde konut satın alabilir. Tapu sürecinde tercüman, ekspertiz raporu ve döviz işlemleri gibi ek adımlar vardır; bunların tamamını organize ediyoruz.'],
        ['Satış öncesinde villama yatırım yapmalı mıyım?', 'Büyük tadilatlar yerine bahçe ve havuz bakımı, boya ve küçük onarımlar gibi ilk izlenimi güçlendiren dokunuşlar çoğu zaman en iyi sonucu verir.'],
        ['Değerleme için ücret ödüyor muyum?', 'Hayır. Villanız için ücretsiz değerleme ve fiyat analizi yapıyoruz.'],
      ],
    },
    en: {
      title: 'Selling Your Villa in Antalya: Pricing, Marketing and Finding the Right Buyer',
      seo: 'Sell Your Villa in Antalya: A Step-by-Step Guide for Owners',
      desc: 'Want to sell your villa in Antalya? A step-by-step guide to the right price, preparation, professional presentation, reaching Turkish and international buyers and a safe title deed transfer.',
      html: `
<p>Selling a villa is different from selling an apartment. The pool of buyers is smaller, their expectations are higher and they often come from outside Antalya or from abroad. The right price, strong presentation and reaching the right buyer are what get a villa sold faster and at its true value. This guide walks you through selling a villa in Antalya step by step.</p>
<h2>1. Start with the right price</h2>
<p>The most common mistake is pricing a villa on expectations. A villa listed above the market sits on portals for months, buyers start to see it as “the house that won’t sell”, and it often ends up selling below its value.</p>
<ul class="ticks">
<li><b>Comparable sales:</b> recently sold villas in the same area with similar plot and living space.</li>
<li><b>The villa itself:</b> plot size, pool, view, build year, occupancy permit (iskân), energy class, and whether it is detached or in a gated community all affect the price.</li>
<li><b>Buyer profile:</b> whether your villa suits a local family, an investor or an international buyer shapes both price and time to sell.</li>
</ul>
<h2>2. Prepare the paperwork and the property</h2>
<ul class="ticks">
<li>Title deed (tapu) and, if available, occupancy permit (iskân)</li>
<li>Compulsory earthquake insurance (DASK)</li>
<li>Energy Performance Certificate: buyers of A or B class homes can borrow more, which widens the pool of buyers. See our ${B('bddk-konut-kredisi-ikinci-ev-karari-kasim-2026', 'article on the latest mortgage rules')}.</li>
<li>For gated communities: service charge and management details</li>
</ul>
<p>Small but effective touches pay off: garden and pool maintenance, fresh paint and minor repairs, and decluttering. Buyers should be able to picture themselves living there from the first visit.</p>
<h2>3. Present your villa professionally</h2>
<p>Villa buyers often decide on the first photos. A few phone pictures can make even the finest villa look ordinary.</p>
<ul class="ticks">
<li>Professional photography and video</li>
<li>Drone footage showing plot, garden, pool and surroundings</li>
<li>Sunset and night shots</li>
<li>A clear floor plan and key features</li>
</ul>
<p>ACC HOMES has two in-house designers and its own photo and video team. Your villa’s photography, drone and video, listing visuals and social media designs are produced in-house, so it goes to market quickly and to our brand’s quality standard.</p>
<h2>4. Reach the right buyer</h2>
<ul class="ticks">
<li><b>Families in Antalya:</b> looking for more space, a garden and good schools nearby</li>
<li><b>Buyers relocating from other cities:</b> Istanbul, Ankara and other large cities</li>
<li><b>International buyers:</b> from Russia, Ukraine, Europe and the Middle East, buying to live, invest or obtain residence</li>
</ul>
<p>A single portal listing is not enough to reach these audiences. We market your villa on Türkiye’s leading property portals and our own website in 12 languages, through targeted Meta (Instagram and Facebook) and Yandex ads, on JamesEdition, the world’s leading luxury property portal, and other international portals, and directly to our database of Turkish and international buyers. Our professionals speak with buyers in English, Russian, Turkish and other languages.</p>
<h2>5. Viewings, negotiation and a safe title transfer</h2>
<ul class="ticks">
<li><b>Viewings:</b> buyers are qualified for budget and needs first, so your villa is shown only to serious buyers.</li>
<li><b>Negotiation:</b> a price backed by comparable data strengthens your position.</li>
<li><b>Pre-sale agreement and deposit:</b> both parties’ rights are secured in writing.</li>
<li><b>Title deed and payment:</b> payment is planned to happen securely and at the same time as the transfer; for international buyers, currency, valuation report and translator are arranged in advance.</li>
<li><b>Tax:</b> it is important to know your capital gains tax position before selling. We can estimate it based on your purchase date and price; just contact us privately.</li>
</ul>
<h2>6. What villa buyers look for, area by area</h2>
<p>Each area of Antalya has its own needs and its own villa buyer. As someone who lives in Antalya and sells both listed and off-market villas for clients, here is what I see: buyers sometimes favour Konyaaltı, sometimes Lara and Güzeloba, but today the most sought-after area is Döşemealtı. Demand has also clearly risen in Göynük and Çamyuva in Kemer, Belek and Kadriye, Kemerağzı and the new residential area of Altıntaş (Aksu). Kaş and Kalkan are a market of their own: almost all buyers are international, with quite different expectations.</p>
<table><thead><tr><th>Area</th><th>Buyer profile and priorities</th></tr></thead><tbody>
<tr><td>${A('dosemealti', 'Döşemealtı')} (${A('altinkale-yesilbayir', 'Altınkale, Yeşilbayır')})</td><td>Most sought-after today; families looking for large plots, quiet living, clean air and easy access to the city</td></tr>
<tr><td>${A('konyaalti', 'Konyaaltı')} (Hurma, Sarısu, Liman)</td><td>Close to the sea and mountains, schools and hospitals, without giving up city life</td></tr>
<tr><td>${A('lara-guzeloba', 'Lara and Güzeloba')}</td><td>The sea, social life and proximity to the centre</td></tr>
<tr><td>Kemerağzı and ${A('aksu-altintas', 'Altıntaş (Aksu)')}</td><td>New residential areas; new-build villa projects and proximity to the airport</td></tr>
<tr><td>${A('belek', 'Belek')} and ${A('kadriye', 'Kadriye')}</td><td>Golf and resort living, rental potential; rising demand</td></tr>
<tr><td>${A('kemer', 'Kemer')} (Göynük, Çamyuva)</td><td>Nature and sea together; rising demand for holiday and year-round living</td></tr>
<tr><td>Kaş and Kalkan</td><td>Almost entirely international buyers; views, privacy and holiday lifestyle</td></tr>
</tbody></table>
<p>Reading which buyer your villa suits also determines the price and the marketing channel. If you prefer to sell off-market, to selected buyers only, we can plan that together.</p>
<h2>Why ACC HOMES?</h2>
<p>When selling a villa, the key question is who you can trust. Ali Caner Can and the ACC HOMES team have completed dozens of villa sales and rentals in Antalya, which lets us read your villa’s true market value and its likely buyer from the first meeting.</p>
<ul class="ticks">
<li><b>Ready buyer and investor network:</b> our large database of Turkish and international buyers and investors means your villa can reach the right people even before it is listed.</li>
<li><b>A systematic approach:</b> every enquiry, viewing and conversation is tracked in our own CRM, so no buyer and no follow-up is lost.</li>
<li><b>Digital marketing:</b> your villa is shown to the right audience on our 12-language website, on portals and through targeted Meta and Yandex ads.</li>
<li><b>No marketing costs for you:</b> photography, drone and video, listing and advertising costs are covered by ACC HOMES.</li>
<li><b>Data-driven pricing</b> based on comparables and market data.</li>
<li><b>End-to-end service</b> from listing agreement to title deed: viewings, negotiation, contract, bank and land registry.</li>
<li><b>International experience:</b> many completed sales to Russian, Ukrainian and European buyers, and a team serving clients in 10 languages.</li>
</ul>
<p><b>Curious about our recent sales?</b> If you would like to see the prices and selling times of villas we have recently sold in your area, let’s arrange a private meeting. To protect our clients’ privacy we do not publish them on the website, but we share area-specific comparables one-to-one.</p>
<p>Our clients’ experience speaks for itself: 472 Google reviews with a 4.9 rating.</p>
<h2>Let’s value your villa together</h2>
<p>If you are thinking of selling your villa in Antalya, one of our professionals will visit and prepare a free valuation and sales plan. We can also arrange a private meeting to discuss recent villa prices in your area: ${CTA_WA('request a private meeting on WhatsApp →')}</p>`,
      faq: [
        ['How long does it take to sell a villa in Antalya?', 'It depends on price, area, condition and buyer profile. Villas that go to market at the right price with professional presentation find buyers much faster.'],
        ['Can I sell my villa to a foreign buyer?', 'Yes. Foreigners can buy residential property in Türkiye within legal limits. The title transfer involves extra steps such as a translator, a valuation report and currency exchange; we organise all of them.'],
        ['Should I renovate before selling?', 'Rather than major renovations, touches that improve the first impression, such as garden and pool care, paint and minor repairs, usually give the best result.'],
        ['Do I pay for a valuation?', 'No. We provide a free valuation and price analysis for your villa.'],
      ],
    },
    ru: {
      title: 'Как продать виллу в Анталии: цена, маркетинг и правильный покупатель',
      seo: 'Продать виллу в Анталии: пошаговое руководство для владельцев',
      desc: 'Хотите продать виллу в Анталии? Пошаговое руководство: правильная цена, подготовка, профессиональная подача, поиск турецких и иностранных покупателей и безопасная сделка.',
      html: `
<p>Продать виллу — не то же самое, что продать квартиру. Круг покупателей уже, ожидания выше, и часто покупатели приезжают из других городов или из-за рубежа. Правильная цена, сильная подача и выход на нужного покупателя позволяют продать виллу быстрее и по её реальной стоимости. В этом руководстве — весь процесс продажи виллы в Анталии шаг за шагом.</p>
<h2>1. Начните с правильной цены</h2>
<p>Самая частая ошибка — назначать цену по ожиданиям. Вилла дороже рынка месяцами висит в объявлениях, покупатели начинают воспринимать её как «непродаваемый дом», и в итоге она часто продаётся ниже своей стоимости.</p>
<ul class="ticks">
<li><b>Анализ аналогов:</b> недавно проданные виллы в том же районе с похожим участком и площадью.</li>
<li><b>Особенности виллы:</b> площадь участка, бассейн, вид, год постройки, разрешение на заселение (искан), энергокласс, отдельно стоящая или в комплексе.</li>
<li><b>Профиль покупателя:</b> для местной семьи, инвестора или иностранца — от этого зависят цена и срок продажи.</li>
</ul>
<h2>2. Подготовьте документы и дом</h2>
<ul class="ticks">
<li>Тапу и, если есть, искан</li>
<li>Обязательная страховка от землетрясений (DASK)</li>
<li>Энергетический паспорт: покупатели домов класса A или B могут взять больший кредит, что расширяет круг покупателей. Подробнее — в ${B('bddk-konut-kredisi-ikinci-ev-karari-kasim-2026', 'статье о новых правилах ипотеки')}.</li>
<li>Для комплексов — информация о сборах и управлении</li>
</ul>
<p>Небольшая подготовка даёт большой эффект: уход за садом и бассейном, покраска и мелкий ремонт, минимум лишних вещей. Покупатель должен с первого визита представить себя живущим в этом доме.</p>
<h2>3. Профессиональная подача</h2>
<p>Покупатель виллы часто решает по первым фотографиям. Несколько снимков на телефон способны сделать обычной даже самую красивую виллу.</p>
<ul class="ticks">
<li>Профессиональная фото- и видеосъёмка</li>
<li>Съёмка с дрона: участок, сад, бассейн и окрестности</li>
<li>Закатная и ночная съёмка</li>
<li>Понятная планировка и главные преимущества</li>
</ul>
<p>В ACC HOMES работают два штатных дизайнера и собственная команда съёмки. Фото, дрон и видео, визуалы объявлений и дизайн для соцсетей готовятся внутри компании, поэтому ваша вилла быстро выходит на рынок в нашем стандарте качества.</p>
<h2>4. Найдите правильного покупателя</h2>
<ul class="ticks">
<li><b>Семьи из Анталии:</b> ищут больше пространства, сад и хорошие школы рядом</li>
<li><b>Переезжающие из других городов:</b> Стамбул, Анкара и другие крупные города</li>
<li><b>Иностранные покупатели:</b> из России, Украины, Европы и Ближнего Востока — для жизни, инвестиций или ВНЖ</li>
</ul>
<p>Одного объявления на портале недостаточно. Мы продвигаем вашу виллу на ведущих турецких порталах и на нашем сайте на 12 языках, через таргетированную рекламу Meta (Instagram и Facebook) и Яндекс, на JamesEdition — ведущем мировом портале элитной недвижимости — и других международных порталах, а также напрямую нашей базе турецких и иностранных покупателей. Наши специалисты общаются с покупателями на русском, английском, турецком и других языках.</p>
<h2>5. Показы, переговоры и безопасная сделка</h2>
<ul class="ticks">
<li><b>Показы:</b> покупатели заранее проверяются по бюджету и потребностям — виллу видят только серьёзные покупатели.</li>
<li><b>Переговоры:</b> цена, подкреплённая данными об аналогах, усиливает вашу позицию.</li>
<li><b>Предварительный договор и задаток:</b> права сторон закрепляются письменно.</li>
<li><b>Тапу и оплата:</b> оплата планируется безопасно и одновременно с переоформлением; для иностранцев заранее организуются обмен валюты, отчёт об оценке и переводчик.</li>
<li><b>Налог:</b> важно заранее знать свою позицию по налогу на прирост стоимости. Мы можем рассчитать его по дате и цене покупки — просто свяжитесь с нами лично.</li>
</ul>
<h2>6. Что ищут покупатели вилл в разных районах</h2>
<p>У каждого района Анталии свои потребности и свой покупатель. Как человек, который живёт в Анталии и продаёт виллы клиентов — и в открытой продаже, и закрыто, без публикации, — я вижу так: покупатели выбирают то Коньяалты, то Лару и Гюзелобу, но сегодня самый востребованный район — Дёшемеалты. Заметно вырос спрос и в Гёйнюке и Чамьюве (Кемер), в Белеке и Кадрие, в Кемерагзы и новом районе Алтынташ (Аксу). Каш и Калкан — отдельный рынок: покупатели почти полностью иностранцы с совершенно другими запросами.</p>
<table><thead><tr><th>Район</th><th>Покупатель и приоритеты</th></tr></thead><tbody>
<tr><td>${AR('dosemealti', 'Дёшемеалты')} (${AR('altinkale-yesilbayir', 'Алтынкале, Йешилбайыр')})</td><td>Самый востребованный сегодня; семьи, которым нужны большой участок, тишина, чистый воздух и близость к городу</td></tr>
<tr><td>${AR('konyaalti', 'Коньяалты')} (Хурма, Сарысу, Лиман)</td><td>Море и горы рядом, школы и больницы, городская жизнь</td></tr>
<tr><td>${AR('lara-guzeloba', 'Лара и Гюзелоба')}</td><td>Море, социальная жизнь, близость к центру</td></tr>
<tr><td>Кемерагзы и ${AR('aksu-altintas', 'Алтынташ (Аксу)')}</td><td>Новые районы; новые виллы и близость к аэропорту</td></tr>
<tr><td>${AR('belek', 'Белек')} и ${AR('kadriye', 'Кадрие')}</td><td>Гольф и курортная жизнь, потенциал аренды; растущий спрос</td></tr>
<tr><td>${AR('kemer', 'Кемер')} (Гёйнюк, Чамьюва)</td><td>Природа и море; растущий спрос для отдыха и постоянной жизни</td></tr>
<tr><td>Каш и Калкан</td><td>Почти только иностранцы; вид, приватность, курортный образ жизни</td></tr>
</tbody></table>
<p>Понимание того, кому подходит ваша вилла, определяет и цену, и канал продвижения. Если вы хотите продать закрыто, без публикации, только отобранным покупателям, — спланируем это вместе.</p>
<h2>Почему ACC HOMES?</h2>
<p>При продаже виллы главный вопрос — кому доверять. Али Джанер Джан и команда ACC HOMES провели в Анталии десятки продаж и сдач вилл в аренду. Этот опыт позволяет уже на первой встрече верно оценить реальную стоимость вашей виллы и её покупателя.</p>
<ul class="ticks">
<li><b>Готовая сеть покупателей и инвесторов:</b> большая база турецких и иностранных покупателей позволяет вилле дойти до нужных людей ещё до публикации.</li>
<li><b>Системная работа:</b> все запросы, показы и переговоры фиксируются в нашей CRM — ни один покупатель не теряется.</li>
<li><b>Цифровой маркетинг:</b> сайт на 12 языках, порталы, таргетированная реклама Meta и Яндекс.</li>
<li><b>Без расходов для вас:</b> съёмка, дрон, видео, объявления и реклама — за счёт ACC HOMES.</li>
<li><b>Цена на основе данных</b> об аналогах и рынке.</li>
<li><b>Полное сопровождение</b> от договора до тапу: показы, переговоры, договор, банк и кадастр.</li>
<li><b>Опыт с иностранцами:</b> множество сделок с покупателями из России, Украины и Европы, команда на 10 языках.</li>
</ul>
<p><b>Хотите узнать о наших последних продажах?</b> Если вам интересны цены и сроки продажи вилл, которые мы недавно продали в вашем районе, давайте назначим личную встречу. Из уважения к конфиденциальности клиентов мы не публикуем эти данные на сайте, но делимся аналогами по вашему району лично.</p>
<p>Опыт наших клиентов говорит сам за себя: 472 отзыва в Google и рейтинг 4,9.</p>
<h2>Оценим вашу виллу вместе</h2>
<p>Если вы думаете о продаже виллы в Анталии, наш специалист приедет и подготовит бесплатную оценку и план продажи. Также можем обсудить последние цены на виллы в вашем районе: ${CTA_WA('запросите личную встречу в WhatsApp →')}</p>`,
      faq: [
        ['Сколько времени занимает продажа виллы в Анталии?', 'Зависит от цены, района, состояния и покупателя. Виллы с правильной ценой и профессиональной подачей находят покупателя гораздо быстрее.'],
        ['Могу ли я продать виллу иностранцу?', 'Да. Иностранцы могут покупать жильё в Турции в рамках закона. При переоформлении нужны переводчик, отчёт об оценке и обмен валюты — всё это мы организуем.'],
        ['Нужен ли ремонт перед продажей?', 'Обычно лучше не капитальный ремонт, а то, что улучшает первое впечатление: уход за садом и бассейном, покраска, мелкий ремонт.'],
        ['Платная ли оценка?', 'Нет. Мы бесплатно оцениваем вашу виллу и делаем анализ цены.'],
      ],
    },
  },
];
