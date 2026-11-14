# altintassatilikdaire.com

ACC HOMES International Real Estate — Altıntaş portföy sitesi.

- Veri: `data/portfoy.json` (Portföy Havuzu Google Sheet'inden Web Ajanı üretir; yalnızca Yayında / Opsiyonlu / Satıldı ilanlar)
- Fotoğraflar: `static/img/<İlan No>/`
- Derleme: `node build.mjs` → `dist/` (bağımlılık yok)
- Yayın: Netlify (main dalına her push otomatik yayınlanır)
- Formlar: Netlify Forms (`ilan-talep`, `iletisim`)
- `portfoy.json` boşken site örnek verilerle önizleme modunda açılır ve arama motorlarına kapalıdır (robots Disallow).
