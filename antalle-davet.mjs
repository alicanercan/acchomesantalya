// Antalle Özel Davet (28–29 Kasım 2026) — proje sayfasındaki davet + kayıt bölümü (TR / EN / RU; diğer diller EN)
// Form doğrudan ACC HOMES Panel'e yazar (Supabase RPC antalle_davet_kayit). Linkteki ?d=<kod> kaydı ilgili iş ortağına bağlar.
import { ILCELER } from './taxonomy.mjs';

export const DAVET_AKTIF = Date.now() < Date.parse('2026-11-30T00:00:00+03:00');
const RPC = 'https://vqsocwdfmvpgdpxkcubz.supabase.co/rest/v1/rpc/antalle_davet_kayit';
const KEY = 'sb_publishable_Fv0kalSrYIRLNjCoER1y2Q_31N9fJ_z';

const TX = {
  tr: {
    eyebrow: 'DAVETLİSİNİZ', title: 'Antalle Özel Davet', cta: 'Yerinizi ayırın',
    lead: 'Örnek villa ve dairemizi ENNE Mobilya ile döşedik. 28–29 Kasım’da sizi Antalle’de ağırlamak istiyoruz.',
    when: '28–29 Kasım · Cumartesi ve Pazar', hours: '10:00–18:00 · Gün boyu sizi ağırlıyoruz', cocktail: '14:00–17:00 · Özel Kokteyl ve Canlı Akustik Trio',
    whatT: 'Sizi neler bekliyor',
    what: [['🏡', 'ENNE ile döşenmiş örnek villa ve 2+1 teras daire'], ['🔑', '1. etap: teslime hazır, tapulu, iskânlı'], ['🏗️', '2. etap: inşaatı devam eden evleri yerinde görme imkânı'], ['🌱', 'Yeni etap: 3. etap lansman sunumu'], ['🥂', 'Özel kokteyl ve canlı akustik müzik']],
    partnerT: 'Çözüm ortağımız ENNE Mobilya', partner: 'Antalle’nin örnek villa ve dairesi ENNE Mobilya tasarımlarıyla döşendi. Antalle’nin mimarisini ve ENNE’nin tasarımını aynı evde, yerinde deneyimleyin.',
    sign: ['Antalle Concept Houses', 'Lejant Proje', 'ENNE Mobilya', 'ACC HOMES'], signRole: ['Proje', 'Yaşam Mimarı', 'Mobilya çözüm ortağı', 'Pazarlama ve danışmanlık'],
    formT: 'Yerinizi ayırın', formS: 'Kaydınızı alalım, gün ve saat yaklaşırken konum ve hatırlatmayı WhatsApp’tan gönderelim.',
    ad: 'Ad Soyad', tel: 'Telefon (WhatsApp)', eposta: 'E-posta', meslek: 'Meslek', gun: 'Hangi gün geleceksiniz?', gunler: [['28 Kasım', '28 Kasım Cumartesi'], ['29 Kasım', '29 Kasım Pazar']],
    kisi: 'Kaç kişi geleceksiniz?', ilgi: 'Antalle’ye ilginiz', ilgiler: ['Oturmak için', 'Yatırım için'], ikamet: 'İkamet ettiğiniz ilçe', disari: 'Şehir dışı',
    kaynak: 'Bizi nereden duydunuz?', kaynaklar: ['Instagram', 'Facebook', 'Google', 'İş ortağımız / danışmanınız', 'Arkadaş tavsiyesi', 'Diğer'],
    sec: 'Seçin', kvkk: 'Bilgilerimin etkinlik kaydı ve benimle iletişim için kullanılmasını kabul ediyorum.', send: 'Yerimi ayır',
    okT: 'Kaydınız alındı, teşekkür ederiz', ok: 'Sizi 28–29 Kasım’da Antalle’de ağırlamaktan mutluluk duyacağız. Konum ve hatırlatma WhatsApp’tan gelecek.', map: 'Konumu aç',
    err: 'Kaydınız şu an gönderilemedi. Lütfen WhatsApp’tan yazın, hemen kaydedelim.', wa: 'Merhaba, Antalle Özel Davet için yer ayırmak istiyorum.', loc: 'Altınkale, Döşemealtı / Antalya',
  },
  en: {
    eyebrow: 'YOU ARE INVITED', title: 'Antalle Private Invitation', cta: 'Reserve your place',
    lead: 'Our show villa and apartment are now furnished by ENNE Furniture. We would love to welcome you at Antalle on 28–29 November.',
    when: '28–29 November · Saturday and Sunday', hours: '10:00–18:00 · All day', cocktail: '14:00–17:00 · Private cocktail & live acoustic trio',
    whatT: 'What awaits you',
    what: [['🏡', 'Show villa and 2+1 terrace apartment furnished by ENNE'], ['🔑', 'Phase 1: ready to move in, title deeds and occupancy permit'], ['🏗️', 'Phase 2: see the homes under construction on site'], ['🌱', 'New phase: Phase 3 launch presentation'], ['🥂', 'Private cocktail and live acoustic music']],
    partnerT: 'Our solution partner ENNE Furniture', partner: 'Antalle’s show villa and apartment are furnished with ENNE Furniture designs. Experience Antalle’s architecture and ENNE’s design in the same home.',
    sign: ['Antalle Concept Houses', 'Lejant Proje', 'ENNE Furniture', 'ACC HOMES'], signRole: ['Project', 'Living architect', 'Furniture partner', 'Marketing & consultancy'],
    formT: 'Reserve your place', formS: 'Register and we will send you the location and a reminder on WhatsApp.',
    ad: 'Full name', tel: 'Phone (WhatsApp)', eposta: 'Email', meslek: 'Occupation', gun: 'Which day will you come?', gunler: [['28 Kasım', 'Saturday 28 November'], ['29 Kasım', 'Sunday 29 November']],
    kisi: 'Number of guests', ilgi: 'Your interest in Antalle', ilgiler: [['Oturmak için', 'To live in'], ['Yatırım için', 'Investment']], ikamet: 'Where do you live? (district)', disari: 'Outside Antalya',
    kaynak: 'How did you hear about us?', kaynaklar: [['Instagram', 'Instagram'], ['Facebook', 'Facebook'], ['Google', 'Google'], ['İş ortağımız / danışmanınız', 'Our partner / your agent'], ['Arkadaş tavsiyesi', 'Friend’s recommendation'], ['Diğer', 'Other']],
    sec: 'Select', kvkk: 'I agree that my details are used for the event registration and to contact me.', send: 'Reserve my place',
    okT: 'Thank you, you are registered', ok: 'We look forward to welcoming you at Antalle on 28–29 November. The location and a reminder will follow on WhatsApp.', map: 'Open location',
    err: 'Your registration could not be sent right now. Please write to us on WhatsApp and we will register you.', wa: 'Hello, I would like to reserve a place for the Antalle Private Invitation.', loc: 'Altınkale, Döşemealtı / Antalya',
  },
  ru: {
    eyebrow: 'ВЫ ПРИГЛАШЕНЫ', title: 'Частное приглашение Antalle', cta: 'Забронируйте место',
    lead: 'Наши шоу-вилла и квартира обставлены мебелью ENNE. Будем рады видеть вас в Antalle 28–29 ноября.',
    when: '28–29 ноября · суббота и воскресенье', hours: '10:00–18:00 · весь день', cocktail: '14:00–17:00 · коктейль и живое акустическое трио',
    whatT: 'Что вас ждёт',
    what: [['🏡', 'Шоу-вилла и квартира 2+1 с террасой с мебелью ENNE'], ['🔑', '1-я очередь: готово к заселению, тапу и разрешение на заселение'], ['🏗️', '2-я очередь: дома в процессе строительства на месте'], ['🌱', 'Новая очередь: презентация 3-й очереди'], ['🥂', 'Коктейль и живая акустическая музыка']],
    partnerT: 'Наш партнёр — мебель ENNE', partner: 'Шоу-вилла и квартира Antalle обставлены мебелью ENNE. Оцените архитектуру Antalle и дизайн ENNE в одном доме.',
    sign: ['Antalle Concept Houses', 'Lejant Proje', 'ENNE', 'ACC HOMES'], signRole: ['Проект', 'Архитектор', 'Партнёр по мебели', 'Маркетинг и консалтинг'],
    formT: 'Забронируйте место', formS: 'Зарегистрируйтесь — мы пришлём локацию и напоминание в WhatsApp.',
    ad: 'Имя и фамилия', tel: 'Телефон (WhatsApp)', eposta: 'E-mail', meslek: 'Профессия', gun: 'В какой день придёте?', gunler: [['28 Kasım', 'Суббота, 28 ноября'], ['29 Kasım', 'Воскресенье, 29 ноября']],
    kisi: 'Количество гостей', ilgi: 'Ваш интерес', ilgiler: [['Oturmak için', 'Для жизни'], ['Yatırım için', 'Инвестиция']], ikamet: 'Где вы живёте? (район)', disari: 'За пределами Антальи',
    kaynak: 'Откуда вы о нас узнали?', kaynaklar: [['Instagram', 'Instagram'], ['Facebook', 'Facebook'], ['Google', 'Google'], ['İş ortağımız / danışmanınız', 'Наш партнёр / ваш агент'], ['Arkadaş tavsiyesi', 'Рекомендация друга'], ['Diğer', 'Другое']],
    sec: 'Выберите', kvkk: 'Я согласен(на) на использование моих данных для регистрации и связи со мной.', send: 'Забронировать место',
    okT: 'Спасибо, вы зарегистрированы', ok: 'Будем рады видеть вас в Antalle 28–29 ноября. Локацию и напоминание пришлём в WhatsApp.', map: 'Открыть карту',
    err: 'Не удалось отправить регистрацию. Напишите нам в WhatsApp — мы вас зарегистрируем.', wa: 'Здравствуйте, хочу забронировать место на приглашение Antalle.', loc: 'Алтынкале, Дёшемеалты / Анталья',
  },
};
export const davetTx = (lang) => TX[lang] || TX.en;

const LOGOS = [['/img/antalle/logo-antalle.webp', 'Antalle Concept Houses', 150], ['/img/antalle/logo-lejant.webp', 'Lejant Proje', 160], ['/img/antalle/logo-enne-antalya.webp', 'ENNE Antalya', 150], ['/img/logo/acc-siyah.svg', 'ACC HOMES International Real Estate', 150]];
const opt = (o) => (Array.isArray(o) ? o : [o, o]);
const sel = (name, label, ops, ph) => `<label class="advf"><span>${label} *</span><select name="${name}" required><option value="">${ph}</option>${ops.map((o) => { const [v, l] = opt(o); return `<option value="${v}">${l}</option>`; }).join('')}</select></label>`;

export function davetSection(lang, { esc, telIn, privacyUrl, mapUrl, waNum }) {
  const t = davetTx(lang);
  const dil = TX[lang] ? lang : 'en';
  const ilce = [...ILCELER, ['Şehir dışı', t.disari]];
  return `<section class="adv" id="davet"><style>
.adv{background:#F1F6F0;border-top:4px solid #1E6339;padding:56px 0}.adv .wrap{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:40px;align-items:start}
.adv .ey{letter-spacing:.3em;font-weight:800;color:#1E6339;font-size:13px;margin:0}.adv h2{color:#1E6339;font-size:clamp(34px,5vw,54px);line-height:1.02;margin:6px 0 10px}
.adv .lead{font-size:18px;line-height:1.5;margin:0 0 18px}.adv .chips{display:grid;gap:8px;margin:0 0 22px}.adv .chips div{background:#fff;border:1px solid #CFE0CF;border-left:5px solid #1E6339;border-radius:8px;padding:10px 14px;font-weight:700}
.adv h3{color:#1E6339;margin:18px 0 8px}.adv ul.what{list-style:none;padding:0;margin:0;display:grid;gap:8px}.adv ul.what li{display:flex;gap:10px;font-size:16px}
.adv .enne{background:#fff;border:1px solid #CFE0CF;border-radius:10px;padding:16px 18px;margin-top:22px}.adv .enne b{color:#1E6339}
.adv .sign{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:20px;text-align:center}.adv .sign div{background:#fff;border-radius:8px;padding:10px 6px}.adv .sign div{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px}.adv .sign img{max-width:100%;height:40px;width:auto;object-fit:contain}.adv .sign small{color:#4F4F4F;font-size:11px}.adv .gal{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:0 0 22px}.adv .gal img{width:100%;height:auto;border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,.12);display:block}
.adv form{background:#fff;border-radius:12px;box-shadow:0 10px 30px rgba(30,99,57,.12);padding:24px;display:grid;gap:12px}.adv form h3{margin:0;font-size:26px}.adv form p.s{margin:0;color:#4F4F4F}
.adv .advf{display:grid;gap:4px;font-size:14px;font-weight:700;color:#2E2E2E}.adv .advf span{font-weight:700}.adv .two{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.adv form .btn{background:#1E6339;border-color:#1E6339;font-size:17px;padding:14px}.adv .okbox{background:#fff;border-radius:12px;padding:28px;border:2px solid #1E6339}.adv .okbox h3{margin-top:0}
.adv .err{color:#B42318;font-weight:700}.adv form input:not([type=checkbox]),.adv form select{width:100%;box-sizing:border-box;min-width:0}.adv .cptel{display:flex;gap:6px}.adv .cptel select{width:auto;flex:none}.adv .cptel input{flex:1}
.adv .wrap>div{min-width:0}@media(max-width:860px){.adv .wrap{grid-template-columns:minmax(0,1fr)}.adv .two{grid-template-columns:minmax(0,1fr)}.adv .sign{grid-template-columns:repeat(2,minmax(0,1fr))}.adv{padding:36px 0}}
</style><div class="wrap"><div>
<p class="ey">${esc(t.eyebrow)}</p><h2>${esc(t.title)}</h2><p class="lead">${esc(t.lead)}</p>
<div class="chips"><div>📅 ${esc(t.when)}</div><div>🕙 ${esc(t.hours)}</div><div>🥂 ${esc(t.cocktail)}</div><div>📍 Antalle Concept Houses · ${esc(t.loc)}</div></div>
<div class="gal">${[['antalle-davetlisiniz', t.title], ['antalle-program', 'Program']].map(([f, alt]) => `<a href="/img/antalle/${f}.jpg" target="_blank" rel="noopener"><img src="/img/antalle/${f}-600.webp" srcset="/img/antalle/${f}-600.webp 600w, /img/antalle/${f}.webp 1080w" sizes="(max-width:860px) 46vw, 260px" alt="${esc(alt)}" width="600" height="750" loading="lazy" decoding="async"></a>`).join('')}</div>
<h3>${esc(t.whatT)}</h3><ul class="what">${t.what.map(([i, x]) => `<li><span>${i}</span><span>${esc(x)}</span></li>`).join('')}</ul>
<div class="enne"><b>🛋 ${esc(t.partnerT)}</b><p style="margin:6px 0 0">${esc(t.partner)}</p></div>
<div class="sign">${LOGOS.map(([src, alt, w], i) => `<div><img src="${src}" alt="${esc(alt)}" width="${w}" height="56" loading="lazy" decoding="async"><small>${esc(t.signRole[i])}</small></div>`).join('')}</div></div>
</div><div>
<form id="advForm" class="form" novalidate><input type="hidden" name="kod"><input type="hidden" name="dil" value="${dil}"><p hidden><input name="bot" tabindex="-1" autocomplete="off"></p>
<h3>${esc(t.formT)}</h3><p class="s">${esc(t.formS)}</p>
<label class="advf"><span>${esc(t.ad)} *</span><input name="ad" required minlength="3" autocomplete="name"></label>
<label class="advf"><span>${esc(t.tel)} *</span>${telIn(dil, esc(t.tel))}</label>
<div class="two"><label class="advf"><span>${esc(t.eposta)} *</span><input name="eposta" type="email" required autocomplete="email"></label>
<label class="advf"><span>${esc(t.meslek)} *</span><input name="meslek" required autocomplete="organization-title"></label></div>
<div class="two">${sel('gun', esc(t.gun), t.gunler, esc(t.sec))}${sel('kisi', esc(t.kisi), ['1', '2', '3', '4', '5', '6'], esc(t.sec))}</div>
<div class="two">${sel('ilgi', esc(t.ilgi), t.ilgiler, esc(t.sec))}${sel('ikamet', esc(t.ikamet), ilce, esc(t.sec))}</div>
${sel('kaynak', esc(t.kaynak), t.kaynaklar, esc(t.sec))}
<label class="chk"><input type="checkbox" name="kvkk" value="evet" required> <span>${esc(t.kvkk)} <a href="${privacyUrl}" target="_blank" rel="noopener">KVKK</a> *</span></label>
<p class="err" id="advErr" hidden></p>
<button class="btn" type="submit">${esc(t.send)}</button></form>
<div class="okbox" id="advOk" hidden><h3>✅ ${esc(t.okT)}</h3><p>${esc(t.ok)}</p><p><a class="btn" href="${mapUrl}" target="_blank" rel="noopener">📍 ${esc(t.map)}</a></p></div>
</div></div>
<script>(function(){var f=document.getElementById('advForm');if(!f)return;var q=new URLSearchParams(location.search),k=(q.get('d')||'').toLowerCase().replace(/[^a-z0-9-]/g,'');
try{if(k)localStorage.setItem('acc_davet_kod',k);else k=localStorage.getItem('acc_davet_kod')||'';}catch(e){}
f.kod.value=k;var utm=['utm_source','utm_medium','utm_campaign','utm_content','fbclid'].filter(function(x){return q.get(x)}).map(function(x){return x+'='+q.get(x)}).join('&');
var er=document.getElementById('advErr');
f.addEventListener('submit',function(e){e.preventDefault();er.hidden=true;if(f.bot.value)return;
if(!f.checkValidity()){f.reportValidity();return;}
var b=f.querySelector('button[type=submit]');b.disabled=true;
var d={kod:f.kod.value,dil:f.dil.value,ad:f.ad.value.trim(),telefon:((f.ulke_kodu?f.ulke_kodu.value:'')+' '+f.telefon.value).trim(),eposta:f.eposta.value.trim(),meslek:f.meslek.value.trim(),gun:f.gun.value,kisi:f.kisi.value,ilgi:f.ilgi.value,ikamet:f.ikamet.value,kaynak:f.kaynak.value,kvkk:'evet',utm:utm};
fetch(${JSON.stringify(RPC)},{method:'POST',headers:{'apikey':${JSON.stringify(KEY)},'Content-Type':'application/json'},body:JSON.stringify({p:d})}).then(function(r){return r.json()}).then(function(j){
if(!j||!j.ok)throw 0;f.hidden=true;document.getElementById('advOk').hidden=false;document.getElementById('davet').scrollIntoView({behavior:'smooth'});
try{window.fbq&&fbq('track','Lead',{content_name:'Antalle Ozel Davet'});window.gtag&&gtag('event','generate_lead',{event_label:'antalle_davet'});}catch(x){}
}).catch(function(){b.disabled=false;er.innerHTML=${JSON.stringify(esc(t.err))}+' <a href="https://wa.me/${waNum}?text='+encodeURIComponent(${JSON.stringify(t.wa)})+'" target="_blank" rel="noopener">WhatsApp →</a>';er.hidden=false;});});})();</script></section>`;
}
