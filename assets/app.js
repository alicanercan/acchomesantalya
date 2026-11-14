// İlan filtreleri, galeri ve form teşekkür mesajı
(function () {
  var f = document.getElementById('filters');
  if (f) {
    var grid = document.querySelector('.grid');
    var cards = grid ? Array.prototype.slice.call(grid.children) : [];
    var apply = function () {
      var tip = f.tip.value, oda = f.oda.value, sort = f.sort.value;
      cards.forEach(function (c) {
        var ok = (!tip || c.dataset.tip === tip) && (!oda || c.dataset.oda === oda);
        c.style.display = ok ? '' : 'none';
      });
      var sorted = cards.slice().sort(function (a, b) {
        if (sort === 'asc') return (+a.dataset.fiyat || 9e15) - (+b.dataset.fiyat || 9e15);
        if (sort === 'desc') return (+b.dataset.fiyat || 0) - (+a.dataset.fiyat || 0);
        return (b.dataset.tarih || '').localeCompare(a.dataset.tarih || '');
      });
      sorted.forEach(function (c) { grid.appendChild(c); });
    };
    f.addEventListener('change', apply);
  }
  var main = document.querySelector('.gallery .main');
  document.querySelectorAll('.thumbs img').forEach(function (t) {
    t.addEventListener('click', function () { main.src = t.src; });
  });
  if (/[?&]ok=1/.test(location.search)) { var ok = document.getElementById('ok'); if (ok) ok.hidden = false; }
})();
