// ACC HOMES Blog: yatırımcı, müteahhit ve Antalya odaklı yayın.
// Kategoriler 12 dilde; yazı içerikleri TR/EN (diğer diller EN'e düşer).
// AYLIK GÜNCELLEME: RENT dizisine yeni ayı, SALES dizisine yeni ayı ekleyin. Sayfa başlıkları ve tablolar kendiliğinden güncellenir.
const L12 = (tr, en, de, ru, fa, pl, fr, es, nl, sv, ar, zh) => ({ tr, en, de, ru, fa, pl, fr, es, nl, sv, ar, zh });

export const BLOG = {
  lead: L12(
    'Antalya gayrimenkul piyasası için yatırımcı ve müteahhit odaklı analizler, güncel veriler, vatandaşlık ve ikamet gelişmeleri.',
    'Investor- and developer-focused analysis of the Antalya property market: live data, citizenship and residency updates.',
    'Analysen zum Immobilienmarkt Antalya für Investoren und Bauträger: aktuelle Daten, Staatsbürgerschaft und Aufenthalt.',
    'Аналитика рынка недвижимости Анталии для инвесторов и девелоперов: актуальные данные, гражданство и ВНЖ.',
    'تحلیل بازار املاک آنتالیا برای سرمایه‌گذاران و سازندگان: داده‌های به‌روز، تابعیت و اقامت.',
    'Analizy rynku nieruchomości w Antalyi dla inwestorów i deweloperów: aktualne dane, obywatelstwo i pobyt.',
    'Analyses du marché immobilier d’Antalya pour investisseurs et promoteurs : données à jour, citoyenneté et résidence.',
    'Análisis del mercado inmobiliario de Antalya para inversores y promotores: datos actuales, ciudadanía y residencia.',
    'Analyses van de vastgoedmarkt in Antalya voor investeerders en ontwikkelaars: actuele data, staatsburgerschap en verblijf.',
    'Analyser av fastighetsmarknaden i Antalya för investerare och byggherrar: aktuell data, medborgarskap och uppehåll.',
    'تحليلات سوق العقارات في أنطاليا للمستثمرين والمطورين: بيانات محدثة والجنسية والإقامة.',
    '面向投资者与开发商的安塔利亚房地产市场分析：最新数据、入籍与居留动态。'),
  cats: {
    veri: { icon: '📊', name: L12('Piyasa ve Veri', 'Market Data', 'Marktdaten', 'Рыночные данные', 'داده‌های بازار', 'Dane rynkowe', 'Données du marché', 'Datos de mercado', 'Marktdata', 'Marknadsdata', 'بيانات السوق', '市场数据') },
    yatirim: { icon: '📈', name: L12('Yatırım', 'Investment', 'Investition', 'Инвестиции', 'سرمایه‌گذاری', 'Inwestycje', 'Investissement', 'Inversión', 'Investeren', 'Investering', 'الاستثمار', '投资') },
    vatandaslik: { icon: '🛂', name: L12('Vatandaşlık ve İkamet', 'Citizenship & Residency', 'Staatsbürgerschaft & Aufenthalt', 'Гражданство и ВНЖ', 'تابعیت و اقامت', 'Obywatelstwo i pobyt', 'Citoyenneté et résidence', 'Ciudadanía y residencia', 'Staatsburgerschap & verblijf', 'Medborgarskap & uppehåll', 'الجنسية والإقامة', '入籍与居留') },
    bolge: { icon: '📍', name: L12('Bölgeler', 'Areas', 'Regionen', 'Районы', 'مناطق', 'Dzielnice', 'Quartiers', 'Zonas', 'Gebieden', 'Områden', 'المناطق', '区域') },
    muteahhit: { icon: '🏗️', name: L12('Müteahhitler ve Projeler', 'Developers & Projects', 'Bauträger & Projekte', 'Застройщики и проекты', 'سازندگان و پروژه‌ها', 'Deweloperzy i projekty', 'Promoteurs et projets', 'Promotores y proyectos', 'Ontwikkelaars & projecten', 'Byggherrar & projekt', 'المطورون والمشاريع', '开发商与项目') },
    rehber: { icon: '🧭', name: L12('Alıcı ve Satıcı Rehberi', 'Buyer & Seller Guides', 'Ratgeber für Käufer & Verkäufer', 'Гид для покупателей и продавцов', 'راهنمای خریدار و فروشنده', 'Poradnik kupującego i sprzedającego', 'Guides acheteur et vendeur', 'Guías para compradores y vendedores', 'Gidsen voor kopers en verkopers', 'Guider för köpare och säljare', 'أدلة المشترين والبائعين', '买卖指南') },
  },
  ui: {
    all: L12('Tümü', 'All', 'Alle', 'Все', 'همه', 'Wszystkie', 'Tous', 'Todos', 'Alle', 'Alla', 'الكل', '全部'),
    updated: L12('Güncellendi', 'Updated', 'Aktualisiert', 'Обновлено', 'به‌روزرسانی', 'Zaktualizowano', 'Mis à jour', 'Actualizado', 'Bijgewerkt', 'Uppdaterad', 'تم التحديث', '更新于'),
    live: L12('Her ay güncellenir', 'Updated monthly', 'Monatlich aktualisiert', 'Обновляется ежемесячно', 'ماهانه به‌روز می‌شود', 'Aktualizowane co miesiąc', 'Mis à jour chaque mois', 'Se actualiza cada mes', 'Maandelijks bijgewerkt', 'Uppdateras varje månad', 'يُحدَّث شهريًا', '每月更新'),
    sources: L12('Kaynaklar', 'Sources', 'Quellen', 'Источники', 'منابع', 'Źródła', 'Sources', 'Fuentes', 'Bronnen', 'Källor', 'المصادر', '来源'),
  },
  // Mevcut yazıların kategorileri
  catOf: { 'altintas-ev-alirken-dikkat-edilmesi-gerekenler': 'rehber', 'evimi-satarken-dogru-fiyat-nasil-belirlenir': 'rehber' },
};

// TÜFE 12 aylık ortalama (kira artış üst sınırı). [ay, oran]
export const RENT = [
  ['2025-12', 35.91], ['2026-01', 34.88], ['2026-02', 33.98], ['2026-03', 33.39], ['2026-04', 32.82], ['2026-05', 32.43],
  ['2026-06', 32.24], ['2026-07', 32.03], ['2026-08', 31.90], ['2026-09', 31.79], ['2026-10', 31.49], ['2026-11', 31.23],
];
export const RENT_NEXT = { date: '2026-12-03', month: '2026-12' }; // TÜİK Kasım enflasyonu açıklanınca Aralık oranı belli olur

// TÜİK konut satışları. [ay, Antalya toplam, Antalya yabancı, Türkiye toplam, Türkiye yabancı] (bilinmeyen: null)
export const SALES = [
  ['2026-06', 6818, null, 129979, 2015],
  ['2026-07', 6305, null, 123623, null],
  ['2026-08', 5855, 599, 127410, 1938],
  ['2026-09', 6704, null, 142390, 2167],
];

const MONTHS = {
  tr: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};
export const monthName = (ym, L) => { const [y, m] = ym.split('-'); return `${MONTHS[L][+m - 1]} ${y}`; };
const pct = (v, L) => (L === 'tr' ? `%${v.toFixed(2).replace('.', ',')}` : `${v.toFixed(2)}%`);
const num = (v, L) => (v == null ? '—' : v.toLocaleString(L === 'tr' ? 'tr-TR' : 'en-GB'));

function rentHtml(L) {
  const cur = RENT[RENT.length - 1]; const prev = RENT[RENT.length - 2];
  const diff = (cur[1] - prev[1]).toFixed(2);
  const rows = [...RENT].reverse().map(([m, v]) => `<tr><td>${monthName(m, L)}</td><td><b>${pct(v, L)}</b></td></tr>`).join('');
  const opts = [...RENT].reverse().map(([m, v]) => `<option value="${v}">${monthName(m, L)} · ${pct(v, L)}</option>`).join('');
  const T = L === 'tr' ? {
    now: `${monthName(cur[0], L)} kira artış üst sınırı`, chg: `${monthName(prev[0], L)}: ${pct(prev[1], L)} (${diff.replace('.', ',')} puan)`,
    intro: `<p>Konut ve çatılı iş yeri kiralarında yenileme döneminde uygulanabilecek en yüksek artış, Türk Borçlar Kanunu’nun 344. maddesi gereği TÜİK’in açıkladığı <b>TÜFE’nin 12 aylık ortalamasıdır</b>. Oran her ayın başında, bir önceki ayın enflasyon verisiyle birlikte netleşir. Bu sayfayı her ay güncelliyoruz.</p>`,
    calcH: 'Kira artışı hesaplama', rentL: 'Mevcut aylık kira (TL)', monthL: 'Sözleşmenin yenileneceği ay', newL: 'Yeni kira', incL: 'Artış tutarı',
    tableH: 'Aylara göre kira artış oranları', mcol: 'Ay', rcol: 'Azami artış',
    howH: 'Bilmeniz gerekenler',
    how: ['Oran, sözleşmenin yenilendiği ay için geçerlidir; kiranızın yenilendiği aya bakın.', 'Bu oran bir üst sınırdır. Taraflar daha düşük bir artışta anlaşabilir; sözleşmede daha düşük bir oran yazıyorsa o uygulanır.', 'Konut ve iş yeri kiralarında aynı üst sınır geçerlidir.', 'Beş yılı dolduran kira ilişkilerinde kira bedeli, mahkeme kararıyla emsal kiralara göre yeniden belirlenebilir.'],
    next: `Bir sonraki oran: TÜİK’in ${RENT_NEXT.date.split('-').reverse().join('.')} tarihinde açıklayacağı veriyle ${monthName(RENT_NEXT.month, L)} oranı belli olacak.`,
    inv: '<h2>Yatırımcı gözüyle</h2><p>Kira artış sınırının aylar içinde gerilemesi, kira getirisi hesaplarken yalnızca bugünkü kiraya değil, sözleşme yenileme takvimine de bakmayı gerektiriyor. Antalya’da kiralık yatırım düşünüyorsanız bölgeye göre kira getirisi ve boşluk süresini birlikte değerlendirmek gerekir.</p><p>ACC HOMES, ev sahiplerine kiracı bulma ve yıl boyu kira yönetimi hizmeti veriyor: kira takibi, yıllık artışlar ve kiracı iletişimi tek elden. <a href="{{WA}}" target="_blank" rel="noopener">Bilgi almak için yazın →</a></p>',
    src: 'TÜİK, Tüketici Fiyat Endeksi bültenleri; Türk Borçlar Kanunu m. 344.',
  } : {
    now: `Rent increase cap for ${monthName(cur[0], L)}`, chg: `${monthName(prev[0], L)}: ${pct(prev[1], L)} (${diff} pts)`,
    intro: `<p>Under Article 344 of the Turkish Code of Obligations, the maximum increase on renewal of residential and commercial leases is the <b>12-month average of CPI</b> published by TurkStat (TÜİK). The rate is set at the start of each month with the previous month’s inflation data. We update this page every month.</p>`,
    calcH: 'Rent increase calculator', rentL: 'Current monthly rent (TRY)', monthL: 'Month the lease renews', newL: 'New rent', incL: 'Increase',
    tableH: 'Rent increase caps by month', mcol: 'Month', rcol: 'Maximum increase',
    howH: 'What you need to know',
    how: ['The rate applies to the month in which the lease renews.', 'It is a ceiling: the parties can agree a lower increase, and a lower rate written in the contract applies.', 'The same cap applies to residential and commercial leases.', 'After five years of tenancy, the rent can be reset by court to market level.'],
    next: `Next rate: the ${monthName(RENT_NEXT.month, L)} cap will be set by TurkStat’s release on ${RENT_NEXT.date.split('-').reverse().join('.')}.`,
    inv: '<h2>The investor view</h2><p>With the cap easing month by month, rental yield calculations need to account for each lease’s renewal date, not just today’s rent. If you are considering a buy-to-let in Antalya, look at yield and void periods by area together.</p><p>ACC HOMES finds tenants and offers year-round rental management: rent collection, annual increases and tenant communication in one place. <a href="{{WA}}" target="_blank" rel="noopener">Message us →</a></p>',
    src: 'TurkStat (TÜİK) CPI bulletins; Turkish Code of Obligations, Art. 344.',
  };
  return `<div class="statbig"><span>${T.now}</span><b>${pct(cur[1], L)}</b><small>${T.chg}</small></div>
${T.intro}
<div class="calc" data-rentcalc><h3>${T.calcH}</h3><div class="calcg"><label>${T.rentL}<input type="number" inputmode="numeric" min="0" step="100" value="30000" data-rent></label><label>${T.monthL}<select data-rate>${opts}</select></label></div><div class="calcr"><div><span>${T.incL}</span><b data-inc>—</b></div><div><span>${T.newL}</span><b data-new>—</b></div></div></div>
<script>(function(){var b=document.querySelector('[data-rentcalc]');if(!b)return;var r=b.querySelector('[data-rent]'),s=b.querySelector('[data-rate]'),i=b.querySelector('[data-inc]'),n=b.querySelector('[data-new]'),f=new Intl.NumberFormat('${L === 'tr' ? 'tr-TR' : 'en-GB'}',{maximumFractionDigits:0});function c(){var v=+r.value||0,p=+s.value;i.textContent=f.format(v*p/100)+' TL';n.textContent=f.format(v*(1+p/100))+' TL';}r.addEventListener('input',c);s.addEventListener('change',c);c();})();</script>
<h2>${T.tableH}</h2><table class="spec dtable"><thead><tr><th>${T.mcol}</th><th>${T.rcol}</th></tr></thead><tbody>${rows}</tbody></table>
<p class="note">${T.next}</p>
<h2>${T.howH}</h2><ul class="ticks">${T.how.map((x) => `<li>${x}</li>`).join('')}</ul>
${T.inv}
<p class="srcs"><b>${L === 'tr' ? 'Kaynak' : 'Source'}:</b> ${T.src}</p>`;
}

function salesHtml(L) {
  const cur = SALES[SALES.length - 1];
  const rows = [...SALES].reverse().map(([m, a, af, t, tf]) => `<tr><td>${monthName(m, L)}</td><td><b>${num(a, L)}</b></td><td>${num(af, L)}</td><td>${num(t, L)}</td><td>${num(tf, L)}</td></tr>`).join('');
  const T = L === 'tr' ? {
    now: `${monthName(cur[0], L)} · Antalya’da satılan konut`,
    sub: `Türkiye geneli: ${num(cur[3], L)} konut`,
    intro: '<p>TÜİK her ay il bazında konut satış istatistiklerini yayımlıyor. Bu sayfada Antalya ve Türkiye geneli için son ayları tek tabloda topluyor, yatırımcı açısından ne anlama geldiğini yorumluyoruz. Yeni veri yayımlandıkça güncelliyoruz.</p>',
    tableH: 'Aylara göre konut satışları', cols: ['Ay', 'Antalya toplam', 'Antalya yabancıya', 'Türkiye toplam', 'Türkiye yabancıya'],
    hl: `<h2>Öne çıkanlar</h2><ul class="ticks">
<li>Eylül 2026’da Antalya’da ${num(6704, L)} konut satıldı; bir yıl önceki aynı ayda bu sayı ${num(7348, L)} idi (yaklaşık %8,8 düşüş).</li>
<li>Türkiye genelinde Eylül 2026’da ${num(142390, L)} konut satıldı: ${num(51519, L)} ilk el, ${num(90871, L)} ikinci el. İlk el satışlar yıllık %3,9 arttı, ikinci el satışlar %15,3 azaldı.</li>
<li>Yabancılara satış Eylül’de yıllık %9,9 artışla ${num(2167, L)} oldu; Ocak–Eylül toplamı ${num(15308, L)}.</li>
<li>Ocak–Ağustos 2026’da Rusya vatandaşlarının Türkiye’de aldığı ${num(2676, L)} konutun ${num(1722, L)}’si Antalya’daydı. Antalya’nın yabancıya satıştaki payı ise %30,7 oldu.</li>
<li>Haziran 2026’da Antalya’da ilçelere göre en çok satış Kepez (${num(1918, L)}), Muratpaşa (${num(833, L)}), Döşemealtı (${num(352, L)}) ve Konyaaltı’nda (${num(317, L)}) gerçekleşti.</li></ul>`,
    inv: '<h2>Yatırımcı gözüyle</h2><p>Antalya, toplam satışta Türkiye’nin ilk beş ili arasındaki yerini korurken yabancıya satışta İstanbul ile yarışan iki şehirden biri olmaya devam ediyor. İlk el satışların ikinci ele göre daha dirençli olması, proje aşamasında ve yeni teslim konutlara talebin sürdüğünü gösteriyor. Bölge ve proje seçerken bu tabloyu ilçe bazında okumak gerekir.</p><p>Bölgenize göre güncel emsal ve fiyat analizi için <a href="{{WA}}" target="_blank" rel="noopener">bize yazın →</a></p>',
    note: 'Ekim 2026 verileri TÜİK tarafından Kasım ayı ortasında yayımlanır; yayımlandığında tabloya eklenecek. “—” henüz derlenmemiş veriyi gösterir.',
    src: 'TÜİK, Konut ve İş Yeri Satış İstatistikleri (Haziran–Eylül 2026) ve bu verilerden derlenen haberler.',
  } : {
    now: `${monthName(cur[0], L)} · homes sold in Antalya`,
    sub: `Türkiye total: ${num(cur[3], L)} homes`,
    intro: '<p>TurkStat publishes monthly housing sales by province. Here we bring the latest months for Antalya and Türkiye into one table and explain what they mean for investors. We update the page as new data is released.</p>',
    tableH: 'Housing sales by month', cols: ['Month', 'Antalya total', 'Antalya to foreigners', 'Türkiye total', 'Türkiye to foreigners'],
    hl: `<h2>Highlights</h2><ul class="ticks">
<li>In September 2026, ${num(6704, L)} homes were sold in Antalya, against ${num(7348, L)} a year earlier (about 8.8% lower).</li>
<li>Across Türkiye, ${num(142390, L)} homes were sold in September 2026: ${num(51519, L)} new-build and ${num(90871, L)} resale. New-build sales rose 3.9% year on year, resale fell 15.3%.</li>
<li>Sales to foreigners rose 9.9% year on year to ${num(2167, L)} in September; ${num(15308, L)} in January–September.</li>
<li>Of the ${num(2676, L)} homes bought by Russian citizens in January–August 2026, ${num(1722, L)} were in Antalya; Antalya’s share of sales to foreigners was 30.7%.</li>
<li>In June 2026 the busiest Antalya districts were Kepez (${num(1918, L)}), Muratpaşa (${num(833, L)}), Döşemealtı (${num(352, L)}) and Konyaaltı (${num(317, L)}).</li></ul>`,
    inv: '<h2>The investor view</h2><p>Antalya remains among Türkiye’s top five provinces for total sales and one of two cities, with Istanbul, competing for the lead in sales to foreigners. New-build sales holding up better than resale shows continuing demand for off-plan and newly completed homes; read the figures district by district when choosing an area or project.</p><p>For current comparables and pricing in your area, <a href="{{WA}}" target="_blank" rel="noopener">message us →</a></p>',
    note: 'TurkStat publishes October 2026 data in mid-November; it will be added when released. “—” marks data not yet compiled.',
    src: 'TurkStat (TÜİK), Housing and Commercial Property Sales Statistics (June–September 2026) and news reports based on them.',
  };
  return `<div class="statbig"><span>${T.now}</span><b>${num(cur[1], L)}</b><small>${T.sub}</small></div>
${T.intro}
<h2>${T.tableH}</h2><div class="tscroll"><table class="spec dtable"><thead><tr>${T.cols.map((c) => `<th>${c}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div>
<p class="note">${T.note}</p>
${T.hl}
${T.inv}
<p class="srcs"><b>${L === 'tr' ? 'Kaynak' : 'Source'}:</b> ${T.src}</p>`;
}

const lastRent = RENT[RENT.length - 1]; const lastSale = SALES[SALES.length - 1];
export const BLOG_POSTS = [
  {
    slug: 'kira-artis-orani', cat: 'veri', live: true, stat: { tr: pct(lastRent[1], 'tr'), en: pct(lastRent[1], 'en'), lab: { tr: `${monthName(lastRent[0], 'tr')} kira artış oranı`, en: `Rent cap, ${monthName(lastRent[0], 'en')}` } }, date: '2026-01-05', updated: '2026-11-03', icon: '🏷️',
    tr: { title: `Kira Artış Oranı ${monthName(lastRent[0], 'tr')}: ${pct(lastRent[1], 'tr')}`, desc: `${monthName(lastRent[0], 'tr')} kira artış üst sınırı ${pct(lastRent[1], 'tr')}. Aylara göre güncel tablo, kira artışı hesaplama ve bilmeniz gerekenler.`, html: rentHtml('tr') },
    en: { title: `Türkiye Rent Increase Cap ${monthName(lastRent[0], 'en')}: ${pct(lastRent[1], 'en')}`, desc: `The rent increase cap for ${monthName(lastRent[0], 'en')} is ${pct(lastRent[1], 'en')}. Monthly table, calculator and what landlords and tenants need to know.`, html: rentHtml('en') },
  },
  {
    slug: 'antalya-konut-satis-istatistikleri', cat: 'veri', live: true, stat: { tr: num(lastSale[1], 'tr'), en: num(lastSale[1], 'en'), lab: { tr: `${monthName(lastSale[0], 'tr')} · Antalya’da satılan konut`, en: `${monthName(lastSale[0], 'en')} · homes sold in Antalya` } }, date: '2026-07-18', updated: '2026-10-19', icon: '🏘️',
    tr: { title: `Antalya Konut Satış İstatistikleri (${monthName(lastSale[0], 'tr')})`, desc: `TÜİK verileriyle Antalya ve Türkiye konut satışları, yabancıya satışlar ve yatırımcı yorumu. ${monthName(lastSale[0], 'tr')} itibarıyla güncel.`, html: salesHtml('tr') },
    en: { title: `Antalya Housing Sales Statistics (${monthName(lastSale[0], 'en')})`, desc: `TurkStat housing sales for Antalya and Türkiye, sales to foreigners and an investor’s reading. Updated to ${monthName(lastSale[0], 'en')}.`, html: salesHtml('en') },
  },
];

// ---- Yazılar ----
BLOG_POSTS.push(
  {
    slug: 'gayrimenkul-ile-turk-vatandasligi-ve-ikamet-2026', cat: 'vatandaslik', date: '2026-11-15', cover: '/img/vatandaslik-antalya-600.webp',
    tr: {
      title: 'Gayrimenkul ile Türk Vatandaşlığı ve İkamet: 2026 Sonu Güncel Durum',
      desc: '400.000 USD vatandaşlık eşiği, 200.000 USD ikamet şartı, Ağustos 2026’daki 6.134 iptal kararı ve değerleme denetimleri: Antalya’da yatırım yapacak yabancılar için güncel tablo.',
      html: `
<p>Yatırım yoluyla Türk vatandaşlığı 2026’da da Antalya’ya gelen yabancı yatırımcıların en çok sorduğu konu. Bu yıl tutar değişmedi; değişen, sürecin ne kadar sıkı denetlendiği. Aşağıda yatırımcının bilmesi gereken güncel tabloyu özetliyoruz.</p>
<h2>Kısaca</h2>
<ul class="ticks">
<li><b>Vatandaşlık eşiği:</b> En az 400.000 USD değerinde gayrimenkul alımı ve tapuya 3 yıl satmama şerhi.</li>
<li><b>İkamet:</b> Gayrimenkule dayalı kısa dönem ikamet izni için 2026 itibarıyla aranan değer 200.000 USD.</li>
<li><b>Denetim:</b> İçişleri Bakanlığı, Ağustos 2026’da sahte değerleme ve muvazaalı satışlar nedeniyle 6.134 kişinin vatandaşlık kararını iptal ettiğini veya geri aldığını açıkladı.</li>
</ul>
<h2>Vatandaşlık şartları değişti mi?</h2>
<p>Hayır. Yatırım yoluyla vatandaşlıkta gayrimenkul eşiği 400.000 USD olarak devam ediyor; tutar 2022’de 250.000 USD’den bu seviyeye çıkmıştı. Değişen, değerin nasıl doğrulandığı: değerleme raporları, ödemelerin banka kayıtları ve satış bedelinin gerçek piyasa değeriyle uyumu artık çok daha dikkatli inceleniyor.</p>
<p>400.000 USD’lik bir alım tek başına vatandaşlığı garanti etmez. Mülkün değeri, ödeme yöntemi, değerleme raporu, tapudaki şerh ve belgelerin tutarlılığı birlikte değerlendirilir. Başvurunun güvenlik incelemesi ve nihai onayı ise ayrı kurumlarca yapılır.</p>
<h2>Ağustos 2026: 6.134 iptal ne anlatıyor?</h2>
<p>İçişleri Bakanlığı, 16 ilde düzenlenen ve 72 şüphelinin yakalandığı operasyonun ardından yaptığı açıklamada, sahte ekspertiz raporları ve usulsüz işlemlerle elde edilen vatandaşlıkları iptal ettiğini duyurdu. Toplamda 1.413 yatırımcı ve aileleri olmak üzere 6.134 kişinin vatandaşlık kararı 5901 sayılı Türk Vatandaşlığı Kanunu kapsamında iptal edildi veya geri alındı.</p>
<p>Sonuç net: Değeri kâğıt üzerinde şişirilmiş mülkler, “parasının bir kısmı iade edilir” pazarlıkları ya da “200.000 dolara vatandaşlık” vaatleri yatırımcıyı vatandaşlığını, parasını ve mülkünü kaybetme riskine sokuyor.</p>
<h2>Gayrimenkul ile ikamet izni</h2>
<p>Vatandaşlık şartını karşılamayan ama Türkiye’de yaşamak isteyen yabancılar için gayrimenkule dayalı kısa dönem ikamet izni seçeneği var. 2026 itibarıyla mülkün değeri en az 200.000 USD olmalı ve yabancıların ikamet kaydına açık bir mahallede bulunmalı. İzin genellikle 1 veya 2 yıllık verilir ve mülk sahipliği devam ettikçe yenilenebilir. İkamet izni vatandaşlık vermez ve çalışma izni yerine geçmez.</p>
<h2>Antalya’da güvenli bir vatandaşlık alımı için kontrol listesi</h2>
<ul class="ticks">
<li>Mülkün değerini bölgedeki gerçekleşmiş satışlarla karşılaştırın; emsalin çok üzerinde fiyat bir uyarı işaretidir.</li>
<li>Satıcıdan bağımsız bir avukatla çalışın.</li>
<li>Ödemeleri yalnızca dosyada adı geçen banka kanallarıyla, izlenebilir şekilde yapın.</li>
<li>Nakit iade, gizli indirim veya yan sözleşme tekliflerini reddedin.</li>
<li>Değerleme raporu, dekont ve sözleşmelerin tamamını saklayın.</li>
<li>Mülkün yabancıya satışa ve ikamet kaydına uygun bir bölgede olduğunu önceden teyit edin.</li>
</ul>
<h2>ACC HOMES nasıl yardımcı olur?</h2>
<p>Vatandaşlığa uygun portföyü değerleme gerçekleriyle birlikte sunuyor, emsal analizini paylaşıyor ve süreci tapu, banka ve avukatınızla koordineli yürütüyoruz. Antalya’da vatandaşlığa uygun portföyleri <a href="{{URL:list}}?etiket=vatandaslik">ilanlarımızda</a> görebilir, adım adım süreç için <a href="{{URL:buyersguide}}">alıcı rehberimize</a> göz atabilirsiniz.</p>
<p class="srcs"><b>Kaynaklar:</b> T.C. İçişleri Bakanlığı açıklaması (4 Ağustos 2026) ve buna dayanan haberler; 5901 sayılı Türk Vatandaşlığı Kanunu ve Uygulama Yönetmeliği; Göç İdaresi ikamet uygulamaları. Bu yazı genel bilgilendirme amaçlıdır, hukuki danışmanlık yerine geçmez.</p>`,
    },
    en: {
      title: 'Turkish Citizenship and Residency Through Property: Where Things Stand in Late 2026',
      desc: 'The USD 400,000 citizenship threshold, the USD 200,000 residency rule, August 2026’s 6,134 revocations and tighter valuation checks: what foreign investors in Antalya need to know.',
      html: `
<p>Citizenship by investment remains the question foreign investors in Antalya ask most. The amount has not changed in 2026; what has changed is how closely the process is checked.</p>
<h2>In brief</h2>
<ul class="ticks">
<li><b>Citizenship threshold:</b> property worth at least USD 400,000, with a three-year no-sale annotation on the title deed.</li>
<li><b>Residency:</b> property-based short-term residence now requires a property value of USD 200,000.</li>
<li><b>Enforcement:</b> in August 2026 the Ministry of Interior announced that citizenship decisions for 6,134 people had been cancelled or withdrawn over fake valuations and sham sales.</li>
</ul>
<h2>Have the citizenship rules changed?</h2>
<p>No. The real estate threshold remains USD 400,000; it rose from USD 250,000 in 2022. What has changed is verification: valuation reports, bank records of payments and whether the price matches real market value are now examined much more closely.</p>
<p>A USD 400,000 purchase does not by itself guarantee citizenship. The property’s value, payment method, valuation report, title deed annotation and consistency of documents are assessed together, and security checks and final approval are handled by separate authorities.</p>
<h2>August 2026: what the 6,134 revocations tell us</h2>
<p>Following an operation across 16 provinces in which 72 suspects were detained, the Ministry of Interior said citizenship obtained through fake appraisal reports and irregular transactions had been revoked. In total, decisions for 6,134 people, 1,413 investors and their families, were cancelled or withdrawn under Turkish Citizenship Law No. 5901.</p>
<p>The lesson is clear: inflated paper valuations, “part of your money will be refunded” deals and promises of “citizenship for USD 200,000” put investors at risk of losing their citizenship, their money and their property.</p>
<h2>Residency through property</h2>
<p>For foreigners who want to live in Türkiye without meeting the citizenship threshold, there is a property-based short-term residence permit. As of 2026 the property must be worth at least USD 200,000 and be in a neighbourhood open to residence registration for foreigners. Permits are usually issued for one or two years and can be renewed while you own the property. Residency does not lead automatically to citizenship and is not a work permit.</p>
<h2>Checklist for a safe citizenship purchase in Antalya</h2>
<ul class="ticks">
<li>Compare the price with completed sales nearby; a price far above comparables is a warning sign.</li>
<li>Use a lawyer independent of the seller.</li>
<li>Pay only through traceable bank channels named in the file.</li>
<li>Refuse cash refunds, hidden discounts or side agreements.</li>
<li>Keep every valuation report, receipt and contract.</li>
<li>Confirm in advance that the property is in an area open to foreign buyers and residence registration.</li>
</ul>
<h2>How ACC HOMES helps</h2>
<p>We present citizenship-eligible properties with honest valuations and comparables, and coordinate the process with the land registry, the bank and your lawyer. See <a href="{{URL:list}}?etiket=vatandaslik">eligible listings</a> or our step-by-step <a href="{{URL:buyersguide}}">buyer’s guide</a>.</p>
<p class="srcs"><b>Sources:</b> Ministry of Interior statement (4 August 2026) and news coverage of it; Turkish Citizenship Law No. 5901 and its implementing regulation; immigration authority residence practice. This article is general information, not legal advice.</p>`,
    },
  },
  {
    slug: 'muteahhitler-icin-proje-satis-ve-pazarlama-yonetimi', cat: 'muteahhit', date: '2026-11-15', cover: '/img/ekip/ekip-maket-2026.webp',
    tr: {
      title: 'Müteahhitler İçin Proje Satış ve Pazarlama Yönetimi: Neden Profesyonel Bir Satış Ofisi?',
      desc: 'Bir projenin başarısı inşaat kalitesi kadar satış hızına bağlı. Fiyatlama, satış ofisi, 360° pazarlama ve ekip yönetimini tek elden yürüten yapı müteahhide ne kazandırır?',
      html: `
<p>İyi bir proje kendini satmaz. Arsa ve inşaat maliyetleri yükseldikçe müteahhit için en kritik değişken satış hızı ve nakit akışı oluyor. Projeyi doğru fiyatla, doğru zamanda ve doğru alıcıya ulaştırmak ayrı bir uzmanlık ister.</p>
<h2>Müteahhitlerin en sık yaşadığı sorunlar</h2>
<ul class="ticks">
<li>Lansman fiyatının piyasa verisi yerine tahmine göre belirlenmesi.</li>
<li>Birden fazla emlak ofisine dağınık yetki verilmesi; fiyat ve bilgi tutarsızlığı.</li>
<li>Talep toplayan ama takip etmeyen satış süreçleri; kaybolan müşteri adayları.</li>
<li>Yabancı alıcıya ulaşamayan, tek dilde kalan pazarlama.</li>
<li>Satış ofisinin müteahhidin kendi ekibine yük olması.</li>
</ul>
<h2>ACC HOMES’un proje satış modeli</h2>
<div class="cards3">
<div><h3>Veriye dayalı fiyatlama</h3><p>Bölgedeki emsal satışlar, rakip projeler ve talep verisiyle etap ve daire bazında fiyat listesi; lansman ve kampanya planı.</p></div>
<div><h3>Satış ofisi yönetimi</h3><p>Proje sahasında veya ACC Plaza’da satış ofisi kurulumu, proje koordinatörü, gösterim ve sözleşme süreçlerinin yönetimi.</p></div>
<div><h3>360° pazarlama</h3><p>Profesyonel fotoğraf, drone ve video; Meta ve Google reklamları; ilan portalları; çok dilli tanıtım ve yurt dışı yatırımcı ağı.</p></div>
<div><h3>Talep takibi ve CRM</h3><p>Her müşteri adayının kaydı, geri dönüş süreleri ve dönüşüm oranları; müteahhide düzenli satış raporu.</p></div>
<div><h3>Geniş satış gücü</h3><p>ACC Plaza’daki yaklaşık 50 iş ortağı ve yatırımcı veritabanı ile projeye ilk günden ulaşan alıcı kitlesi.</p></div>
<div><h3>Etkinlik ve lansman</h3><p>Open House günleri, yatırımcı buluşmaları ve iş ortağı sunumlarıyla projeyi doğru kitleye yerinde göstermek.</p></div>
</div>
<h2>Sahadan örnekler</h2>
<p>ACC HOMES; Capital İnşaat’ın Altıntaş’taki 216 daireli projesinde satış, pazarlama ve ekip yönetimini üstlendi. Döşemealtı Altınkale’deki <a href="/projeler/antalle-concept-houses/">Antalle Concept Houses</a> ve Altıntaş’taki Prime Lara projelerinin yetkili satış ofisidir. Aralık 2025’te Antalle için düzenlediğimiz <a href="{{URL:events}}antalle-open-house-2025/">Open House</a>, bu modelin sahadaki karşılığıdır.</p>
<h2>Kimler için uygun?</h2>
<p>Antalya’da konut, villa veya karma proje geliştiren, satışını hızlandırmak ya da yurt dışı alıcıya açılmak isteyen yapı firmaları ve arsa sahipleri. Kat karşılığı projelerde arsa sahibi ile müteahhidi doğru şartlarla buluşturuyoruz.</p>
<p>Projenizi birlikte değerlendirmek için Broker <a href="{{URL:broker}}">Ali Caner Can</a> ile görüşme planlayın: <a href="{{WA}}" target="_blank" rel="noopener">WhatsApp’tan yazın →</a></p>`,
    },
    en: {
      title: 'Project Sales and Marketing for Developers: Why a Professional Sales Office Pays Off',
      desc: 'A project’s success depends on sales velocity as much as build quality. What a single partner for pricing, sales office, 360° marketing and team management brings a developer.',
      html: `
<p>A good project does not sell itself. As land and construction costs rise, sales velocity and cash flow become a developer’s most critical variables. Getting the right price, timing and buyer is a discipline of its own.</p>
<h2>Common problems developers face</h2>
<ul class="ticks">
<li>Launch prices set by guesswork rather than market data.</li>
<li>Mandates scattered across several agencies, with inconsistent prices and information.</li>
<li>Enquiries collected but not followed up; lost leads.</li>
<li>Single-language marketing that never reaches foreign buyers.</li>
<li>A sales office that burdens the developer’s own team.</li>
</ul>
<h2>The ACC HOMES project sales model</h2>
<div class="cards3">
<div><h3>Data-driven pricing</h3><p>Phase- and unit-level price lists built on local comparables, competing projects and demand data, with a launch and campaign plan.</p></div>
<div><h3>Sales office management</h3><p>A sales office on site or at ACC Plaza, a project coordinator, and management of viewings and contracts.</p></div>
<div><h3>360° marketing</h3><p>Professional photo, drone and video; Meta and Google ads; listing portals; multilingual promotion and an international investor network.</p></div>
<div><h3>Lead tracking and CRM</h3><p>Every lead logged, response times and conversion tracked, with regular sales reporting to the developer.</p></div>
<div><h3>Sales reach</h3><p>Around 50 partners at ACC Plaza and an investor database that reach buyers from day one.</p></div>
<div><h3>Events and launches</h3><p>Open House days, investor meetings and partner presentations that show the project to the right audience on site.</p></div>
</div>
<h2>Examples</h2>
<p>ACC HOMES handled sales, marketing and team management for Capital İnşaat’s 216-apartment project in Altıntaş, and is the authorised sales office for <a href="/projeler/antalle-concept-houses/">Antalle Concept Houses</a> in Döşemealtı and Prime Lara in Altıntaş. The Antalle <a href="{{URL:events}}antalle-open-house-2025/">Open House</a> in December 2025 is this model in action.</p>
<h2>Who it is for</h2>
<p>Developers and landowners in Antalya building homes, villas or mixed-use projects who want faster sales or access to foreign buyers. On land-for-flats deals we bring landowners and developers together on fair terms.</p>
<p>To discuss your project, book a meeting with broker <a href="{{URL:broker}}">Ali Caner Can</a>: <a href="{{WA}}" target="_blank" rel="noopener">message us on WhatsApp →</a></p>`,
    },
  },
);
