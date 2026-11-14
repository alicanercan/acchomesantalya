// İlan filtreleri, galeri ve form teşekkür mesajı
(function () {
  var qp = {}; location.search.replace(/^\?/, '').split('&').forEach(function (kv) { if (!kv) return; var p = kv.split('='); qp[decodeURIComponent(p[0])] = decodeURIComponent((p[1] || '').replace(/\+/g, ' ')); });
  var f = document.getElementById('filters');
  if (f) {
    if (qp.tip) f.tip.value = qp.tip; if (qp.oda && f.oda.querySelector('option[value="' + qp.oda + '"],option')) f.oda.value = qp.oda;
    var grid = document.querySelector('.grid');
    var cards = grid ? Array.prototype.slice.call(grid.children) : [];
    var apply = function () {
      var tip = f.tip.value, oda = f.oda.value, sort = f.sort.value;
      cards.forEach(function (c) {
        var ok = (!tip || c.dataset.tip === tip) && (!oda || c.dataset.oda === oda) && (!qp.tur || c.dataset.tur === qp.tur) && (!qp.ilce || c.dataset.ilce === qp.ilce);
        c.style.display = ok ? '' : 'none';
      });
      var sorted = cards.slice().sort(function (a, b) {
        if (sort === 'asc') return (+a.dataset.fiyat || 9e15) - (+b.dataset.fiyat || 9e15);
        if (sort === 'desc') return (+b.dataset.fiyat || 0) - (+a.dataset.fiyat || 0);
        return (b.dataset.tarih || '').localeCompare(a.dataset.tarih || '');
      });
      sorted.forEach(function (c) { grid.appendChild(c); });
    };
    f.addEventListener('change', apply); apply();
  }
  var main = document.querySelector('.gallery .main');
  document.querySelectorAll('.thumbs img').forEach(function (t) {
    t.addEventListener('click', function () { main.src = t.src; });
  });
  document.querySelectorAll('.tabs [data-tab]').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelectorAll('.tabs [data-tab]').forEach(function (x) { x.setAttribute('aria-selected', x === b ? 'true' : 'false'); });
      document.querySelectorAll('.tabp').forEach(function (p) { p.hidden = p.dataset.panel !== b.dataset.tab; });
    });
  });
  if (/[?&]ok=1/.test(location.search)) { var ok = document.getElementById('ok'); if (ok) ok.hidden = false; }
})();

// banner slider
(function () {
  var s = document.querySelector('.slides'); if (!s) return;
  var dots = document.querySelectorAll('.dots button'), n = dots.length, i = 0, t;
  function go(k) { i = (k + n) % n; s.scrollTo({ left: s.clientWidth * i, behavior: 'smooth' }); dots.forEach(function (d, j) { d.toggleAttribute('aria-current', j === i); }); }
  dots.forEach(function (d, j) { d.addEventListener('click', function () { go(j); clearInterval(t); }); });
  if (n > 1) t = setInterval(function () { go(i + 1); }, 6000);
})();
// masraf hesaplayıcı
(function () {
  document.querySelectorAll('[data-calc]').forEach(function (c) {
    var p = c.querySelector('[data-price]'), fx = c.querySelector('[data-foreign]'), loc = ({ tr: 'tr-TR', ru: 'ru-RU', de: 'de-DE', fa: 'fa-IR' })[document.documentElement.lang] || 'en-GB';
    var fmt = function (n) { return new Intl.NumberFormat(loc, { maximumFractionDigits: 0 }).format(n) + ' TL'; };
    function run() {
      var v = parseFloat(p.value) || 0; if (!v) return;
      var deed = v * 0.02, ag = v * 0.02 * 1.2;
      c.querySelector('[data-out=deed]').textContent = fmt(deed);
      c.querySelector('[data-out=agency]').textContent = fmt(ag);
      c.querySelector('.fx').hidden = !fx.checked;
      c.querySelector('[data-out=total]').textContent = fmt(deed + ag) + ' +' + (window.accConv ? window.accConv(deed + ag, 'TRY') : '');
    }
    p.addEventListener('input', run); fx.addEventListener('change', function () { c.querySelector('.fx').hidden = !fx.checked; run(); });
    if (c.dataset.price) { p.value = c.dataset.price; run(); }
  });
})();

// randevu günleri, bağlantı kopyala, döviz karşılığı
(function () {
  var d = document.querySelector('[data-days]');
  if (d) {
    var lang = ({ tr: 'tr-TR', ru: 'ru-RU', de: 'de-DE', fa: 'fa-IR' })[d.dataset.lang] || 'en-GB', hid = document.querySelector('[data-day]');
    for (var i = 1; i <= 6; i++) {
      var x = new Date(); x.setDate(x.getDate() + i); if (x.getDay() === 0) continue;
      var b = document.createElement('button'); b.type = 'button'; b.textContent = x.toLocaleDateString(lang, { weekday: 'short', day: 'numeric', month: 'short' });
      b.dataset.v = x.toISOString().slice(0, 10);
      b.addEventListener('click', function () { d.querySelectorAll('button').forEach(function (y) { y.removeAttribute('aria-pressed'); }); this.setAttribute('aria-pressed', 'true'); hid.value = this.dataset.v; });
      d.appendChild(b);
    }
  }
  document.querySelectorAll('[data-copy]').forEach(function (b) { b.addEventListener('click', function () { navigator.clipboard && navigator.clipboard.writeText(b.dataset.copy); b.textContent = '✓'; }); });
})();

// ayar paneli: dil, para birimi (BTC dahil), ölçü birimi
(function () {
  var panel = document.querySelector('[data-set-panel]'), open = document.querySelector('[data-set-open]');
  if (!panel) return;
  var get = function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } };
  var put = function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} };
  var cur = get('acc-cur') || panel.dataset.defCur || 'USD', unit = get('acc-unit') || 'm2';
  var loc = ({ tr: 'tr-TR', ru: 'ru-RU', de: 'de-DE', fa: 'fa-IR', pl: 'pl-PL', fr: 'fr-FR', es: 'es-ES', nl: 'nl-NL', sv: 'sv-SE', ar: 'ar-AE', zh: 'zh-CN' })[document.documentElement.lang] || 'en-GB';
  var sym = { TRY: '₺', USD: '$', EUR: '€', GBP: '£', RUB: '₽', BTC: '₿', AED: 'AED ', CNY: '¥', PLN: 'zł ', SEK: 'kr ', SAR: 'SAR ', CAD: 'C$' }, rates = null;
  var nf = function (n, c) { return new Intl.NumberFormat(loc, c === 'BTC' ? { maximumFractionDigits: n < 1 ? 4 : 2 } : { maximumFractionDigits: 0 }).format(n); };
  function conv(amt, from, to) { return amt / rates[from] * rates[to]; }
  window.accConv = function (amt, from) { if (!rates || !rates[cur] || cur === from) return ''; return ' (≈ ' + sym[cur] + nf(conv(amt, from, cur), cur) + ')'; };
  function applyCur() {
    document.querySelectorAll('[data-cur-label]').forEach(function (e) { e.textContent = cur; });
    panel.querySelectorAll('[data-cur-set]').forEach(function (b) { b.toggleAttribute('aria-pressed', b.dataset.curSet === cur); });
    document.querySelectorAll('[data-amt]').forEach(function (el) {
      if (!el.dataset.orig) el.dataset.orig = el.innerHTML;
      var from = el.dataset.ccy;
      if (!rates || !rates[cur] || !rates[from] || cur === from) { el.innerHTML = el.dataset.orig; return; }
      el.innerHTML = '≈ ' + sym[cur] + nf(conv(+el.dataset.amt, from, cur), cur) + '<small class="orig">' + el.dataset.orig + '</small>';
    });
    document.querySelectorAll('[data-calc] [data-price]').forEach(function (i) { i.dispatchEvent(new Event('input')); });
  }
  function applyUnit() {
    document.querySelectorAll('[data-unit-label]').forEach(function (e) { e.textContent = unit === 'ft2' ? 'ft²' : 'm²'; });
    panel.querySelectorAll('[data-unit-set]').forEach(function (b) { b.toggleAttribute('aria-pressed', b.dataset.unitSet === unit); });
    document.querySelectorAll('[data-m2]').forEach(function (el) { var m = +el.dataset.m2; el.textContent = unit === 'ft2' ? new Intl.NumberFormat(loc, { maximumFractionDigits: 0 }).format(m * 10.7639) + ' ft²' : m + ' m²'; });
  }
  open.addEventListener('click', function () { panel.hidden = !panel.hidden; open.setAttribute('aria-expanded', !panel.hidden); });
  panel.querySelector('[data-set-close]').addEventListener('click', function () { panel.hidden = true; open.setAttribute('aria-expanded', 'false'); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') panel.hidden = true; });
  panel.querySelectorAll('[data-cur-set]').forEach(function (b) { b.addEventListener('click', function () { cur = b.dataset.curSet; put('acc-cur', cur); applyCur(); }); });
  panel.querySelectorAll('[data-unit-set]').forEach(function (b) { b.addEventListener('click', function () { unit = b.dataset.unitSet; put('acc-unit', unit); applyUnit(); }); });
  applyCur(); applyUnit();
  Promise.all([
    fetch('https://open.er-api.com/v6/latest/TRY').then(function (r) { return r.json(); }).catch(function () { return null; }),
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=try').then(function (r) { return r.json(); }).catch(function () { return null; })
  ]).then(function (res) {
    if (!res[0] || !res[0].rates) return;
    rates = res[0].rates; rates.TRY = 1;
    if (res[1] && res[1].bitcoin && res[1].bitcoin.try) rates.BTC = 1 / res[1].bitcoin.try;
    applyCur();
  });
})();

// "Beni arayın" penceresi: 40 sn sonra ya da masaüstünde sayfadan çıkarken; oturumda bir kez
(function () {
  var pop = document.querySelector('[data-cpop]'); if (!pop) return;
  var ss = function (k, v) { try { if (v === undefined) return sessionStorage.getItem(k); sessionStorage.setItem(k, v); } catch (e) { return null; } };
  var ls = function (k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } };
  if (ls('acc-called') || ss('acc-pop') || /[?&]ok=1/.test(location.search)) return;
  var shown = false, last;
  function show() {
    if (shown || ss('acc-pop')) return;
    var sp = document.querySelector('[data-set-panel]'); if (sp && !sp.hidden) return;
    if (document.activeElement && /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) return;
    shown = true; ss('acc-pop', '1'); last = document.activeElement;
    pop.querySelector('[data-cpop-page]').value = location.pathname;
    pop.hidden = false; document.body.classList.add('noscroll');
    setTimeout(function () { var f = pop.querySelector('input[name=ad]'); f && f.focus(); }, 50);
  }
  function hide() { pop.hidden = true; document.body.classList.remove('noscroll'); last && last.focus && last.focus(); }
  pop.querySelector('[data-cpop-close]').addEventListener('click', hide);
  pop.addEventListener('click', function (e) { if (e.target === pop) hide(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !pop.hidden) hide(); });
  pop.querySelector('[data-cpop-form]').addEventListener('submit', function () { ls('acc-called', '1'); });
  setTimeout(show, 40000);
  if (window.matchMedia('(pointer:fine)').matches) setTimeout(function () {
    document.addEventListener('mouseout', function (e) { if (!e.relatedTarget && e.clientY < 10) show(); });
  }, 12000);
})();

// favoriler ve karşılaştırma (bu cihazda saklanır)
(function () {
  var rd = function (k) { try { return JSON.parse(localStorage.getItem(k) || '[]'); } catch (e) { return []; } };
  var wr = function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  var fav = rd('acc-fav'), cmp = rd('acc-cmp');
  function paint() {
    document.querySelectorAll('[data-fav]').forEach(function (b) { b.setAttribute('aria-pressed', fav.indexOf(b.dataset.fav) > -1); });
    document.querySelectorAll('[data-cmp]').forEach(function (b) { b.setAttribute('aria-pressed', cmp.indexOf(b.dataset.cmp) > -1); });
    document.querySelectorAll('[data-fav-count]').forEach(function (e) { e.textContent = fav.length; });
    var fp = document.querySelector('[data-favpage]');
    if (fp) {
      var n = 0; fp.querySelectorAll('.card').forEach(function (c) { var on = fav.indexOf(c.dataset.id) > -1; c.style.display = on ? '' : 'none'; if (on) n++; });
      var em = document.querySelector('[data-fav-empty]'); if (em) em.hidden = n > 0;
    }
    var tb = document.querySelector('[data-cmptable]'), dataEl = document.getElementById('cmpdata');
    if (tb && dataEl) {
      var all = JSON.parse(dataEl.textContent), sel = all.filter(function (x) { return cmp.indexOf(x.id) > -1; });
      if (!sel.length) { tb.innerHTML = ''; return; }
      var rows = sel[0].r.map(function (r, i) { return '<tr><th>' + r[0] + '</th>' + sel.map(function (x) { return '<td>' + (x.r[i][1] || '—') + '</td>'; }).join('') + '</tr>'; }).join('');
      tb.innerHTML = '<table class="cmp"><thead><tr><th></th>' + sel.map(function (x) { return '<th><a href="' + x.u + '">' + (x.img ? '<img src="' + x.img + '" alt="">' : '') + '<b>' + x.t + '</b></a><div class="price" data-amt="' + x.a + '" data-ccy="' + x.c + '">' + x.p + '</div><button type="button" data-cmp="' + x.id + '">✕</button></th>'; }).join('') + '</tr></thead><tbody>' + rows + '</tbody></table>';
      tb.querySelectorAll('[data-cmp]').forEach(bindCmp);
    }
  }
  function bindCmp(b) { b.addEventListener('click', function (e) { e.preventDefault(); var id = b.dataset.cmp, i = cmp.indexOf(id); if (i > -1) cmp.splice(i, 1); else { if (cmp.length >= 3) cmp.shift(); cmp.push(id); } wr('acc-cmp', cmp); paint(); }); }
  document.querySelectorAll('[data-fav]').forEach(function (b) { b.addEventListener('click', function (e) { e.preventDefault(); var id = b.dataset.fav, i = fav.indexOf(id); if (i > -1) fav.splice(i, 1); else fav.push(id); wr('acc-fav', fav); paint(); }); });
  document.querySelectorAll('[data-cmp]').forEach(bindCmp);
  paint();
  // etiket filtresi
  var tf = document.querySelector('[data-tagfilter]'), grid = document.querySelector('.grid');
  if (tf && grid) {
    var m = location.search.match(/[?&]etiket=([^&]+)/); if (m) { var c = tf.querySelector('input[value="' + decodeURIComponent(m[1]) + '"]'); if (c) c.checked = true; }
    var ff = document.getElementById('filters');
    var run = function () { var on = [].map.call(tf.querySelectorAll('input:checked'), function (i) { return i.value; }); grid.querySelectorAll('.card').forEach(function (c) { var t = (c.dataset.tags || '').split(' '); if (!on.every(function (x) { return t.indexOf(x) > -1; })) c.style.display = 'none'; }); };
    if (ff) ff.addEventListener('change', run);
    tf.addEventListener('change', function () { if (ff) ff.dispatchEvent(new Event('change')); else { grid.querySelectorAll('.card').forEach(function (c) { c.style.display = ''; }); run(); } }); run();
  }
})();
