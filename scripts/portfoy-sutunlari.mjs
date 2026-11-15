// Portföy Havuzu (Google Sheet, sekme "Portföyler") sütun başlıkları → site ilan alanları.
// Kullanım: rowsToListings(values) — values: Sheets API'den gelen 2B dizi (ilk satır başlık).
import { EMLAK_TIPLERI } from '../taxonomy.mjs';

export const SUTUN = {
  'İlan No': 'id', 'Durum': 'durum', 'Yayın Siteleri': 'siteler', 'Danışman': 'danismanAd',
  'Emlak Tipi': 'emlakTipiAd', 'Kategori': 'tip', 'Alt Tip': 'tur', 'İlçe': 'ilce', 'Mahalle': 'mahalle', 'Proje / Site Adı': 'proje',
  'Fiyat': 'fiyat', 'Para Birimi': 'para', 'Oda Sayısı': 'oda', 'Brüt m²': 'brut', 'Net m²': 'net', 'Bina Yaşı': 'yas',
  'Bulunduğu Kat': 'kat', 'Kat Sayısı': 'katSayisi', 'Isıtma': 'isitma', 'Banyo Sayısı': 'banyo', 'Balkon': 'balkon', 'Asansör': 'asansor',
  'Otopark': 'otopark', 'Eşya Durumu': 'esya', 'Kullanım Durumu': 'kullanim', 'Site İçinde': 'site', 'Aidat (TL)': 'aidat',
  'Krediye Uygun': 'kredi', 'Tapu Durumu': 'tapu', 'Takas': 'takas', 'İmar Durumu (Arsa)': 'imar', 'Etiketler': 'etiketler', 'Özellikler': 'ozellikler',
  'Kapak Fotoğrafı Linki': 'kapak', 'Video Linki': 'video',
  'Başlık TR': 'baslik.tr', 'Açıklama TR': 'aciklama.tr', 'Başlık EN': 'baslik.en', 'Açıklama EN': 'aciklama.en', 'Başlık RU': 'baslik.ru', 'Açıklama RU': 'aciklama.ru',
  'SEO URL': 'slug', 'Meta Açıklama': 'meta', 'Öne Çıkan': 'oneCikan', 'Eklenme Tarihi': 'tarih',
};
const NUM = new Set(['fiyat', 'brut', 'net', 'yas', 'katSayisi', 'aidat']);

export function rowsToListings(values) {
  const [head, ...rows] = values;
  return rows.filter((r) => r && r[0]).map((r) => {
    const l = { baslik: {}, aciklama: {} };
    head.forEach((h, i) => {
      const k = SUTUN[String(h).trim()]; const v = r[i] === undefined ? '' : String(r[i]).trim();
      if (!k || v === '') return;
      if (k.includes('.')) { const [a, b] = k.split('.'); l[a][b] = v; return; }
      l[k] = NUM.has(k) ? Number(v.replace(/[^\d.]/g, '')) : v;
    });
    if (l.emlakTipiAd) { const e = EMLAK_TIPLERI.find((x) => x.tr === l.emlakTipiAd); if (e) l.emlakTipi = e.k; delete l.emlakTipiAd; }
    if (l.tur) l.altTip = l.tur;
    if (l.etiketler) l.etiketler = l.etiketler.split(',').map((x) => x.trim()).filter(Boolean);
    if (l.ozellikler) l.ozellikler = l.ozellikler.split(',').map((x) => x.trim()).filter(Boolean);
    if (l.kapak) l.foto = [l.kapak];
    return l;
  });
}
