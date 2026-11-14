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
      c.querySelector('[data-out=total]').textContent = fmt(deed + ag) + ' +';
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
  var p = document.querySelector('[data-try]'), fx = document.querySelector('[data-fx]');
  if (p && fx && +p.dataset.try > 0) {
    fetch('https://open.er-api.com/v6/latest/TRY').then(function (r) { return r.json(); }).then(function (j) {
      if (!j || !j.rates) return; var v = +p.dataset.try, f = function (c, s) { return s + new Intl.NumberFormat('en-GB', { maximumFractionDigits: 0 }).format(v * j.rates[c]); };
      fx.textContent = '≈ ' + f('USD', '$') + ' · ' + f('EUR', '€'); fx.hidden = false;
    }).catch(function () {});
  }
})();
