// ACC HOMES derlemesinden (dist/ilan) öne çıkan ilanları signature sitesi için çeker.
// Çalıştır: node build.mjs && node signature/sync-featured.mjs  →  signature/featured.json
import fs from 'node:fs';
const P = JSON.parse(fs.readFileSync('data/portfoy.json', 'utf8'));
const slugs = fs.readdirSync('dist/ilan');
const out = P.filter((l) => l.durum === 'Yayında' && l.tip === 'Satılık' && l.oneCikan === 'Evet' && l.fiyat > 0)
  .map((l) => { const slug = slugs.find((s) => s.endsWith('-' + l.id.toLowerCase())); return slug && { id: l.id, slug, t: l.baslik, fiyat: l.fiyat, para: l.para, oda: l.oda, brut: l.brut, ilce: l.ilce, mahalle: l.mahalle, tur: l.tur, foto: (l.thumbs && l.thumbs[0]) || l.foto[0] }; })
  .filter(Boolean).slice(0, 6);
fs.writeFileSync('signature/featured.json', JSON.stringify(out, null, 1));
console.log(out.length, 'ilan:', out.map((x) => x.id).join(', '));
