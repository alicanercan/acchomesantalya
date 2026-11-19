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
  (function () {
    var g = document.querySelector('[data-gal]'); if (!g) return;
    var main = g.querySelector('.main'), th = [].slice.call(g.querySelectorAll('.thumbs img')), cnt = g.querySelector('.gcount b');
    var src = th.length ? th.map(function (t) { return t.getAttribute('data-full'); }) : [main.src], i = 0;
    function show(n) { i = (n + src.length) % src.length; main.src = src[i]; if (cnt) cnt.textContent = i + 1; th.forEach(function (t, k) { t.classList.toggle('on', k === i); }); if (th[i]) th[i].scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' }); if (box && !box.hidden) bimg.src = src[i]; }
    th.forEach(function (t, k) { t.addEventListener('click', function () { show(k); }); });
    var pv = g.querySelector('.prev'), nx = g.querySelector('.next');
    if (pv) pv.addEventListener('click', function () { show(i - 1); });
    if (nx) nx.addEventListener('click', function () { show(i + 1); });
    var box = document.createElement('div'); box.className = 'lbox'; box.hidden = true;
    box.innerHTML = '<button type="button" class="lx" aria-label="×">×</button><button type="button" class="gnav prev">‹</button><img alt=""><button type="button" class="gnav next">›</button>';
    document.body.appendChild(box); var bimg = box.querySelector('img');
    function open() { bimg.src = src[i]; box.hidden = false; document.documentElement.style.overflow = 'hidden'; }
    function close() { box.hidden = true; document.documentElement.style.overflow = ''; }
    main.addEventListener('click', open); var fb = g.querySelector('.gfull'); if (fb) fb.addEventListener('click', open);
    box.querySelector('.lx').addEventListener('click', close);
    box.querySelector('.prev').addEventListener('click', function () { show(i - 1); });
    box.querySelector('.next').addEventListener('click', function () { show(i + 1); });
    box.addEventListener('click', function (e) { if (e.target === box) close(); });
    document.addEventListener('keydown', function (e) { if (box.hidden && !g.matches(':hover')) return; if (e.key === 'ArrowLeft') show(i - 1); else if (e.key === 'ArrowRight') show(i + 1); else if (e.key === 'Escape') close(); });
    [main, bimg].forEach(function (el) { var x0 = null; el.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true }); el.addEventListener('touchend', function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) show(i + (dx < 0 ? 1 : -1)); x0 = null; }, { passive: true }); });
    if (src.length > 1) { var pre = new Image(); pre.src = src[1]; }
  })();
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
  var nx = document.querySelector('[data-snext]'), pv = document.querySelector('[data-sprev]');
  if (nx) nx.addEventListener('click', function () { go(i + 1); clearInterval(t); });
  if (pv) pv.addEventListener('click', function () { go(i - 1); clearInterval(t); });
  s.addEventListener('scroll', function () { var k = Math.round(s.scrollLeft / s.clientWidth); if (k !== i && k >= 0) { i = k; dots.forEach(function (d, j) { d.toggleAttribute('aria-current', j === i); }); } }, { passive: true });
  if (n > 1) t = setInterval(function () { go(i + 1); }, 7000);
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
  window.accToTRY = function (amt, from) { return rates && rates[from] ? amt / rates[from] : null; };
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
    rates = res[0].rates; rates.TRY = 1; setTimeout(function () { window.dispatchEvent(new Event('accrates')); }, 0);
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

// öne çıkan ilanlarda bölge sekmeleri ve "Hızlı bilgi al"
(function () {
  document.querySelectorAll('[data-areatabs]').forEach(function (bar) {
    var grid = bar.nextElementSibling;
    bar.querySelectorAll('[data-area]').forEach(function (b) { b.addEventListener('click', function () {
      bar.querySelectorAll('[data-area]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
      if (grid) grid.querySelectorAll('.card').forEach(function (c) { c.style.display = !b.dataset.area || c.dataset.ilce === b.dataset.area ? '' : 'none'; });
    }); });
  });
  var pop = document.querySelector('[data-cpop]');
  document.querySelectorAll('[data-enq]').forEach(function (b) { b.addEventListener('click', function () {
    if (!pop) return; pop.querySelector('[data-cpop-ilan]').value = b.dataset.enq; pop.querySelector('[data-cpop-page]').value = location.pathname;
    pop.hidden = false; document.body.classList.add('noscroll'); var f = pop.querySelector('input[name=ad]'); f && f.focus();
  }); });
})();

// Detaylı ilan arama (Sahibinden uyumlu filtreler)
(function () {
  var form = document.getElementById('xf'); if (!form) return;
  var page = document.querySelector('.lpage'), grid = document.querySelector('.lres .grid'), none = document.querySelector('[data-none]'), cnt = document.querySelector('[data-rcount]');
  var cards = grid ? [].slice.call(grid.querySelectorAll('.card')) : [];
  var qp = {}; location.search.replace(/^\?/, '').split('&').forEach(function (kv) { if (!kv) return; var p = kv.split('='); var k = decodeURIComponent(p[0]), v = decodeURIComponent((p[1] || '').replace(/\+/g, ' ')); (qp[k] = qp[k] || []).push(v); });
  // URL parametrelerinden formu doldur
  Object.keys(qp).forEach(function (k) {
    var name = k === 'tur' ? 'alt' : (k === 'etiket' ? 'tag' : k);
    qp[k].forEach(function (v) {
      var els = form.querySelectorAll('[name="' + name + '"]');
      [].forEach.call(els, function (el) { if (el.type === 'checkbox') { if (el.value === v) el.checked = true; } else if (el.tagName === 'SELECT' || el.type !== 'checkbox') { el.value = v; } });
    });
  });
  var lab = cnt ? cnt.textContent.replace(/^[0-9.,]+\s*/, '') : '';
  function vals(n) { return [].map.call(form.querySelectorAll('[name="' + n + '"]:checked'), function (i) { return i.value; }); }
  function num(n) { var e = form.elements[n]; return e && e.value !== '' ? +e.value : null; }
  function toTRY(a, c) { if (!c || c === 'TRY') return a; return window.accToTRY ? window.accToTRY(a, c) : null; }
  function yasOk(y, sel) { if (!sel.length) return true; if (y === '') return false; y = +y; return sel.some(function (r) { if (r === '0') return y === 0; if (r === '31+') return y >= 31; var p = r.split('-'); return y >= +p[0] && y <= +p[1]; }); }
  var secs = [].map.call(form.querySelectorAll('[name^="f-"]'), function (i) { return i.name; }).filter(function (v, i, a) { return a.indexOf(v) === i; });
  function apply() {
    var q = (form.q.value || '').toLocaleLowerCase('tr').trim(), et = form.emlak.value || page.dataset.ctxEt, kat = form.kat.value || page.dataset.ctxKat, alts = vals('alt'), ilce = form.ilce.value, mah = form.mah.value, odas = vals('oda'), yas = vals('yas'), tags = vals('tag');
    if (page.dataset.ctxAlt) alts = alts.length ? alts : [page.dataset.ctxAlt];
    var fmin = num('fiyatMin'), fmax = num('fiyatMax'), bmin = num('brutMin'), bmax = num('brutMax'), nmin = num('netMin'), nmax = num('netMax');
    var sel = {}; secs.forEach(function (n) { var v = vals(n); if (v.length) sel[n] = v; });
    var kts = vals('kt');
    var shown = 0;
    cards.forEach(function (c) {
      var d = c.dataset, ok = true;
      if (q && d.q.indexOf(q) < 0) ok = false;
      if (ok && et && d.et !== et) ok = false;
      if (ok && kat && d.kat !== kat) ok = false;
      if (ok && alts.length && alts.indexOf(d.alt) < 0) ok = false;
      if (ok && ilce && d.ilce !== ilce) ok = false;
      if (ok && mah && d.mah !== mah) ok = false;
      if (ok && odas.length && odas.indexOf(d.oda) < 0) ok = false;
      if (ok && kts.length) { var kt = (d.kt || '').split('|'); if (!kts.some(function (x) { return kt.indexOf(x) > -1; })) ok = false; }
      if (ok && (fmin !== null || fmax !== null)) { var tr = toTRY(+d.fiyat, d.para); if (tr === null || !+d.fiyat || (fmin !== null && tr < fmin) || (fmax !== null && tr > fmax)) ok = false; }
      if (ok && ((bmin !== null && +d.brut < bmin) || (bmax !== null && (+d.brut > bmax || !+d.brut)))) ok = false;
      if (ok && ((nmin !== null && +d.net < nmin) || (nmax !== null && (+d.net > nmax || !+d.net)))) ok = false;
      if (ok && !yasOk(d.yas, yas)) ok = false;
      if (ok) for (var n in sel) { var v = c.getAttribute('data-' + n); if (sel[n].indexOf(v) < 0) { ok = false; break; } }
      if (ok && tags.length) { var t = (d.tags || '').split(' '); if (!tags.every(function (x) { return t.indexOf(x) > -1; })) ok = false; }
      c.style.display = ok ? '' : 'none'; if (ok) shown++;
    });
    var srt = document.querySelector('[data-sort]'), so = srt ? srt.value : 'new';
    cards.slice().sort(function (a, b) {
      if (so === 'asc' || so === 'desc') { var x = toTRY(+a.dataset.fiyat, a.dataset.para) || 9e15, y = toTRY(+b.dataset.fiyat, b.dataset.para) || 9e15; return so === 'asc' ? x - y : y - x; }
      if (so === 'm2') return (+a.dataset.net || 9e9) - (+b.dataset.net || 9e9);
      return (b.dataset.tarih || '').localeCompare(a.dataset.tarih || '');
    }).forEach(function (c) { grid.appendChild(c); });
    if (cnt) cnt.textContent = shown + ' ' + lab;
    if (none) none.hidden = !cards.length || shown > 0;
  }
  // mahalle listesini ilçeye göre daralt
  function mahs() { var i = form.ilce.value; [].forEach.call(form.mah.options, function (o) { if (o.value) o.hidden = !!i && o.dataset.ilce !== i; }); if (form.mah.selectedOptions[0] && form.mah.selectedOptions[0].hidden) form.mah.value = ''; }
  // emlak tipi / kategori seçimi: kategori sayfasına git
  [].forEach.call(form.querySelectorAll('[data-nav]'), function (s) { s.addEventListener('change', function () { var o = s.selectedOptions[0], h = o && o.dataset.href; if (h && h.indexOf('?') < 0 && h !== location.pathname) location.href = h; else apply(); }); });
  form.addEventListener('input', function (e) { if (e.target.name === 'ilce') mahs(); if (!e.target.hasAttribute('data-nav')) apply(); });
  form.addEventListener('reset', function () { setTimeout(function () { mahs(); apply(); }, 0); });
  var srt = document.querySelector('[data-sort]'); if (srt) srt.addEventListener('change', apply);
  var panel = document.getElementById('fpanel');
  document.querySelectorAll('[data-fopen]').forEach(function (b) { b.addEventListener('click', function () { panel.classList.add('open'); document.body.classList.add('noscroll'); }); });
  document.querySelectorAll('[data-fclose],[data-fapply]').forEach(function (b) { b.addEventListener('click', function () { apply(); panel.classList.remove('open'); document.body.classList.remove('noscroll'); }); });
  window.addEventListener('accrates', apply);
  mahs(); apply();
})();

// Çerez onayı (KVKK / Consent Mode v2), Meta Pikseli, harita ve dönüşüm ölçümü
(function () {
  var box = document.getElementById('cbn'); if (!box) return;
  var KEY = 'acc_consent', st = null;
  try { st = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
  var setBox = box.querySelector('.cbn-set'), saveBtn = box.querySelector('[data-cb=save]');
  function gt() { if (window.gtag) window.gtag.apply(null, arguments); }
  var pixelOn = false;
  function pixel() {
    if (pixelOn || !window.ACC_PIXEL) return; pixelOn = true;
    !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', window.ACC_PIXEL); window.fbq('track', 'PageView');
  }
  var clarOn = false;
  function clarity() {
    if (clarOn || !window.ACC_CLARITY) return; clarOn = true;
    (function (c, l, a, r, i, t, y) { c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); }; t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i; y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y); })(window, document, 'clarity', 'script', window.ACC_CLARITY);
    window.clarity('consent');
  }
  function maps(force) {
    document.querySelectorAll('iframe[data-csrc]').forEach(function (f) {
      if (f.src) return;
      if (force || (st && (st.a || st.m))) { f.src = f.getAttribute('data-csrc'); var b = f.parentNode.querySelector('.cmap'); if (b) b.remove(); return; }
      if (f.parentNode.querySelector('.cmap')) return;
      var d = document.createElement('div'); d.className = 'cmap';
      d.innerHTML = '<button type="button" class="btn sm">' + box.dataset.mapl + '</button><small>' + box.dataset.mapn + '</small>';
      d.querySelector('button').onclick = function () { f.src = f.getAttribute('data-csrc'); d.remove(); };
      f.parentNode.insertBefore(d, f);
    });
  }
  function apply(c) {
    st = c; try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (e) {}
    gt('consent', 'update', { analytics_storage: c.a ? 'granted' : 'denied', ad_storage: c.m ? 'granted' : 'denied', ad_user_data: c.m ? 'granted' : 'denied', ad_personalization: c.m ? 'granted' : 'denied' });
    if (c.m) pixel();
    if (c.a) clarity();
    box.hidden = true; maps();
  }
  box.addEventListener('click', function (e) {
    var a = e.target.getAttribute && e.target.getAttribute('data-cb'); if (!a) return;
    if (a === 'acc') apply({ a: true, m: true, t: Date.now() });
    if (a === 'rej') apply({ a: false, m: false, t: Date.now() });
    if (a === 'set') { setBox.hidden = false; saveBtn.hidden = false; e.target.hidden = true; }
    if (a === 'save') apply({ a: box.querySelector('[data-c=a]').checked, m: box.querySelector('[data-c=m]').checked, t: Date.now() });
  });
  var re = document.querySelector('.cbn-re');
  if (re) re.addEventListener('click', function () { if (st) { box.querySelector('[data-c=a]').checked = !!st.a; box.querySelector('[data-c=m]').checked = !!st.m; } box.hidden = false; });
  if (!st) box.hidden = false; else { if (st.m) pixel(); if (st.a) clarity(); }
  maps();
  // dönüşüm olayları
  function ev(name, params, fbName) { gt('event', name, params || {}); if (window.fbq && pixelOn && fbName) window.fbq('track', fbName); }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a'); if (!a) return; var h = a.getAttribute('href') || '';
    if (h.indexOf('wa.me/') > -1) ev('whatsapp_click', { link_url: h.split('?')[0], page: location.pathname }, 'Contact');
    else if (h.indexOf('tel:') === 0) ev('phone_click', { page: location.pathname }, 'Contact');
    else if (h.indexOf('mailto:') === 0) ev('email_click', { page: location.pathname }, 'Contact');
  });
  document.addEventListener('submit', function (e) {
    var f = e.target; var n = f.getAttribute('name') || (f.querySelector('[name=form-name]') || {}).value; if (!n || f.id === 'xf') return;
    ev('generate_lead', { form_name: n, page: location.pathname }, 'Lead');
  }, true);
})();

// Görsel koruma: fotoğraflarda sağ tık menüsü ve sürükle-bırak kapalı (metin seçimi ve normal sağ tık açık)
(function () {
  function isImg(t) { return t && (t.tagName === 'IMG' || (t.closest && t.closest('picture, .gal, .hero-img'))); }
  document.addEventListener('contextmenu', function (e) { if (e.target && e.target.tagName === 'IMG') e.preventDefault(); });
  document.addEventListener('dragstart', function (e) { if (isImg(e.target)) e.preventDefault(); });
})();

// Açılış hızı: ilk slayt dışındaki arka plan görselleri sayfa yüklendikten sonra
(function () { function bgs() { document.querySelectorAll('[data-bgs]').forEach(function (el) { var m = el.getAttribute('data-bgsm'); el.style.backgroundImage = (m && matchMedia('(max-width:700px)').matches) ? m : el.getAttribute('data-bgs'); el.removeAttribute('data-bgsm'); el.removeAttribute('data-bgs'); }); }
  addEventListener('load', function () { setTimeout(bgs, 100); }); setTimeout(bgs, 1500);
  var sl = document.querySelector('.slides'); if (sl) ['scroll', 'pointerdown', 'touchstart'].forEach(function (e) { sl.addEventListener(e, bgs, { once: true, passive: true }); }); })();
