// Ek kurumsal sayfalar: evinizi satın, online gösterim ve tanışma turu, lisanslar ve belgeler.
// TR + EN; diğer dillerde İngilizcesi gösterilir (çeviri sırada).
export const PAGES2 = {
  sell: {
    seg: { tr: 'evinizi-satin', en: 'sell-your-property', de: 'immobilie-verkaufen', ru: 'prodat-nedvizhimost', fa: 'foroosh-melk', pl: 'sprzedaj-nieruchomosc' },
    nav: { tr: 'Evinizi Satın', en: 'Sell Your Property', de: 'Immobilie verkaufen', ru: 'Продать недвижимость', fa: 'فروش ملک شما', pl: 'Sprzedaj nieruchomość' },
    tr: {
      title: 'Evinizi Doğru Fiyata, Doğru Alıcıya Satalım', desc: 'Antalya’da evinizi satmak mı istiyorsunuz? Ücretsiz değerleme, veriye dayalı fiyat, profesyonel tanıtım ve 10 dilde yerli ve yabancı alıcıya ulaşım.',
      lead: 'Ücretsiz değerleme ile başlayın: emsal verilerle gerçekçi bir fiyat, profesyonel tanıtım ve tapuya kadar şeffaf süreç.',
      html: `
<div class="cards3">
<div><h3>1. Ücretsiz değerleme</h3><p>Bölgedeki güncel satış ve ilan verileriyle evinizin gerçekçi değerini çıkarır, yazılı olarak paylaşırız.</p></div>
<div><h3>2. Profesyonel tanıtım</h3><p>Profesyonel fotoğraf, video ve dron çekimi; ilan portalları, Instagram ve Meta reklamları; 10 dilde yerli ve yabancı alıcı ağı.</p></div>
<div><h3>3. Tapuya kadar yanınızdayız</h3><p>Gösterimler, pazarlık, kapora, banka ve tapu işlemleri; her adımda yazılı bilgi.</p></div>
</div>
<h2>Ücretsiz değerleme talebi</h2>
{{SELLFORM}}
<p class="note">Değerleme ücretsizdir ve sizi satışa zorunlu kılmaz.</p>`,
    },
    en: {
      title: 'Sell Your Property at the Right Price, to the Right Buyer', desc: 'Selling a home in Antalya? Free valuation, data-driven pricing, professional marketing and access to local and international buyers in 10 languages.',
      lead: 'Start with a free valuation: a realistic price based on comparables, professional marketing and a transparent process all the way to the title deed.',
      html: `
<div class="cards3">
<div><h3>1. Free valuation</h3><p>We assess your home’s realistic value using current local sales and listing data and share it with you in writing.</p></div>
<div><h3>2. Professional marketing</h3><p>Professional photos, video and drone; property portals, Instagram and Meta ads; a network of local and international buyers in 10 languages.</p></div>
<div><h3>3. With you until the title deed</h3><p>Viewings, negotiation, deposit, bank and title deed transfer, with written updates at every step.</p></div>
</div>
<h2>Request a free valuation</h2>
{{SELLFORM}}
<p class="note">The valuation is free and does not oblige you to sell.</p>`,
    },
  },
  viewing: {
    seg: { tr: 'online-gosterim-ve-tanisma-turu', en: 'online-viewing-and-inspection-trip', de: 'online-besichtigung', ru: 'onlayn-prosmotr', fa: 'bazdid-online', pl: 'ogladanie-online' },
    nav: { tr: 'Online Gösterim ve Tanışma Turu', en: 'Online Viewing & Inspection Trip', de: 'Online-Besichtigung & Besichtigungsreise', ru: 'Онлайн-просмотр и ознакомительный тур', fa: 'بازدید آنلاین و تور آشنایی', pl: 'Oglądanie online i wizyta' },
    tr: {
      title: 'Online Gösterim ve Tanışma Turu', desc: 'Antalya’ya gelmeden evleri görüntülü görüşmeyle gezin; geldiğinizde bölgeleri ve seçtiğiniz evleri tek günde görün.',
      lead: 'Yurt dışından ya da başka şehirden ev arayanlar için iki adımlı süreç.',
      html: `
<div class="cards3">
<div><span>📱</span><h3>Online görüntülü gösterim</h3><p>Danışmanımız evi WhatsApp veya Zoom üzerinden canlı gezdirir; manzarayı, cepheyi, siteyi ve çevreyi gösterir, sorularınızı anında yanıtlar.</p></div>
<div><span>🚗</span><h3>Tanışma turu</h3><p>Antalya’ya geldiğinizde bölgeleri ve kısa listeye aldığınız evleri tek bir planda gezdiririz; ACC Plaza’da süreci ve masrafları yüz yüze anlatırız.</p></div>
<div><span>📝</span><h3>Uzaktan alım</h3><p>Karar verdiğinizde vekâletname ile Türkiye’ye gelmeden de tapu işlemi yapılabilir. Detaylar Alıcı Rehberi’nde.</p></div>
</div>
<div class="ctas"><a class="btn" href="{{WA}}" target="_blank" rel="noopener">Görüntülü gösterim planlayın</a><a class="btn ghost" href="{{URL:buyersguide}}">Alıcı Rehberi</a></div>`,
    },
    en: {
      title: 'Online Viewing & Inspection Trip', desc: 'Tour homes by live video before coming to Antalya, then see the areas and your shortlist in a single day when you arrive.',
      lead: 'A two-step process for buyers searching from abroad or another city.',
      html: `
<div class="cards3">
<div><span>📱</span><h3>Live video viewing</h3><p>Our consultant walks you through the home on WhatsApp or Zoom, showing the view, orientation, complex and surroundings, and answers your questions on the spot.</p></div>
<div><span>🚗</span><h3>Inspection trip</h3><p>When you arrive in Antalya we plan a tour of the areas and your shortlisted homes, and explain the process and costs face to face at ACC Plaza.</p></div>
<div><span>📝</span><h3>Buying remotely</h3><p>Once you decide, the title deed transfer can be completed by power of attorney without travelling to Türkiye. See our Buyer’s Guide.</p></div>
</div>
<div class="ctas"><a class="btn" href="{{WA}}" target="_blank" rel="noopener">Book a video viewing</a><a class="btn ghost" href="{{URL:buyersguide}}">Buyer’s Guide</a></div>`,
    },
  },
  licences: {
    seg: { tr: 'lisanslar-ve-belgeler', en: 'licences-and-credentials', de: 'lizenzen', ru: 'litsenzii', fa: 'mojavezha', pl: 'licencje' },
    nav: { tr: 'Lisanslar ve Belgeler', en: 'Licences & Credentials', de: 'Lizenzen & Nachweise', ru: 'Лицензии и документы', fa: 'مجوزها و مدارک', pl: 'Licencje i dokumenty' },
    tr: {
      title: 'Lisanslar ve Belgeler', desc: 'ACC HOMES International Real Estate Taşınmaz Ticareti Yetki Belgesi numaraları, ofis bilgileri ve müşteri değerlendirmeleri.',
      lead: 'Yasal yetkiyle, kayıtlı bir ofisten, şeffaf şekilde çalışıyoruz.',
      html: `
<table class="spec">
<tr><th>Ticari unvan</th><td>ACC HOMES International Real Estate Gayrimenkul</td></tr>
<tr><th>Taşınmaz Ticareti Yetki Belgesi I</th><td>0703112</td></tr>
<tr><th>Taşınmaz Ticareti Yetki Belgesi II</th><td>0705041</td></tr>
<tr><th>Merkez ofis</th><td>ACC Plaza, Yeşilbahçe Mah. Portakal Çiçeği Bulvarı No:36/B, Muratpaşa / Antalya</td></tr>
<tr><th>Google değerlendirmesi</th><td>{{RATING}}</td></tr>
</table>
<p class="note">Yetki belgesi numaraları Ticaret Bakanlığı Emlak İletişim ve Denetim Sistemi (EİDS) üzerinden doğrulanabilir.</p>
<h2>Başarılar</h2>
<ul class="ticks"><li>2023: Kurucumuz Ali Caner Can, Realty World MES Real Estate’in yılın şampiyon danışmanı</li><li>2026: Prime Lara ve Antalle Concept Houses projelerinin yetkili satış ofisi</li></ul>
<div class="ctas"><a class="btn" href="{{URL:about}}">Biz Kimiz</a><a class="btn ghost" href="{{URL:reviews}}">Müşteri yorumları</a></div>`,
    },
    en: {
      title: 'Licences & Credentials', desc: 'ACC HOMES International Real Estate real estate trade licence numbers, office details and client reviews.',
      lead: 'We work under official licence, from a registered office, with full transparency.',
      html: `
<table class="spec">
<tr><th>Company name</th><td>ACC HOMES International Real Estate Gayrimenkul</td></tr>
<tr><th>Real estate trade licence I (Türkiye)</th><td>0703112</td></tr>
<tr><th>Real estate trade licence II (Türkiye)</th><td>0705041</td></tr>
<tr><th>Head office</th><td>ACC Plaza, Yeşilbahçe Mah. Portakal Çiçeği Bulvarı No:36/B, Muratpaşa / Antalya</td></tr>
<tr><th>Google rating</th><td>{{RATING}}</td></tr>
</table>
<p class="note">Licence numbers can be verified on the Turkish Ministry of Trade’s real estate licensing system (EİDS).</p>
<h2>Recognition</h2>
<ul class="ticks"><li>2023: Our founder Ali Caner Can named champion consultant of the year at Realty World MES Real Estate</li><li>2026: Authorised sales office for Prime Lara and Antalle Concept Houses</li></ul>
<div class="ctas"><a class="btn" href="{{URL:about}}">About us</a><a class="btn ghost" href="{{URL:reviews}}">Client reviews</a></div>`,
    },
  },
};
