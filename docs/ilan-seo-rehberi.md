# İlan SEO rehberi (panel ilanları)

Panelden gelen her ilan (Sahibinden aktarımı ya da iş ortağının kendi girişi) sitede `ilan-seo.mjs` ile işlenir:

- `data/ilan-seo.json` içinde ilanın kaydı **varsa** o özgün TR/EN/RU metin kullanılır.
- **Yoksa** ilanın alanlarından otomatik başlık, meta, özet ve öne çıkanlar kurulur (geçici ama yayına uygun).

Hedef: her ilanın `data/ilan-seo.json` içinde özgün kaydı olması.

## Veri nereden alınır

Ağ kısıtlı oturumlarda panel verisi son yayının GitHub Actions çıktısından alınır:

```
# en son panel anlık görüntüsü (her Turhost yayınında yüklenir, 7 gün saklanır)
mkdir -p /tmp/panel && cd /tmp/panel
URL=$(gh api "repos/alicanercan/acchomesantalya/actions/artifacts?name=panel-snapshot&per_page=1" -q '.artifacts[0].archive_download_url')
gh api "$URL" > a.zip && unzip -o a.zip && cd -
# /tmp/panel/panel-snapshot.json → site_ilanlari satırları (telefon/e-posta ayıklanmış)
```

Hangi ilanların özgün kaydı yok:

```
node -e "const p=require('/tmp/panel/panel-snapshot.json');const c=require('./data/ilan-seo.json');const m=new Set(require('./data/portfoy.json').map(x=>x.id));console.log(p.filter(v=>!m.has(v.id)&&!c[v.id]).map(v=>v.id+' '+v.ilce).join('\n'))"
```

Panelde güncellenen ilan (`updated_at` kayıttaki `kaynak`tan yeni) ve metinde etkisi olan alan değiştiyse (oda, m², kat, kullanım vb.) kayıt yeniden yazılır. Yalnız fiyat değiştiyse gerek yok: build eski fiyatı yenisiyle değiştirir.

## Kayıt biçimi

```json
"ACC-1234": {
  "baslik":   { "tr": "...", "en": "...", "ru": "..." },
  "meta":     { "tr": "...", "en": "...", "ru": "..." },
  "aciklama": { "tr": "p1\np2\n...", "en": "...", "ru": "..." },
  "nedenler": { "tr": ["4 kısa madde"], "en": [...], "ru": [...] },
  "kaynak": "<panel updated_at>",
  "fiyat": 1234567
}
```

## Yazım kuralları (sitenin standardı)

- **Başlık:** en fazla 65 karakter, sonunda nokta yok.
  - Sırası: mahalle (gerekirse ilçe) + site/proje adı + satılık/kiralık + oda + tür + m².
  - Örnek: "Konyaaltı Hurma Oscar Residence’ta Satılık 2+1 Çatı Dubleksi".
  - Müstakil mi site içi mi belli olsun.
- **Meta:** 120–155 karakter. Konum, oda, m², en güçlü 2–3 özellik ve fiyat.
- **Açıklama:** 4–5 paragraf, TR 130–180 kelime; EN ve RU aynı içerikte.
  1. Ne, nerede, ne büyüklükte.
  2. Plan ve donanım.
  3. Mahalle ve konum avantajı (genel ve doğru bilgi).
  4. Tapu, kredi, kullanım durumu, aidat ve fiyat.
  5. "Gösterim için ACC HOMES iş ortağımız <ad> ile iletişime geçebilirsiniz. İlan no: <id>." İlan Ali Caner Can'ınsa "broker’ı" yazılır.
- **Kaynak metin:** Sahibinden/panel metni **kopyalanmaz**; bilgiler alınır, metin baştan yazılır. Metin ile alanlar çelişirse alan esas alınır, emin olunmayan bilgi yazılmaz.
- **Yazılmayacaklar:**
  - Telefon, e-posta, mal sahibi adı, tapu ada/parsel, tam adres.
  - Abartı: "kaçırılmaz", "emsalsiz", "en iyi".
  - "Tek yetkili" ifadesi; yalnız panelde `yetkili: true` ise yazılabilir.
- **Terim:** iş ortağı ("danışman" değil).
- **Ton:** kurumsal, sade, veriye dayalı.
- **Vatandaşlık ve oturum:** yalnız Caner onaylarsa yazılır. Vatandaşlık "güncel mevzuat ve SPK değerlemesine tabi" diye yazılır, eşik 400.000 $.
- **RU:** yer adları Rusça okunuşla (Коньяалты, Муратпаша, Хурма…), kişi adları da Kiril harfle yazılabilir.

## Yayın

```
SITE_HOST=turhost node build.mjs     # derleme kontrolü (ağ yoksa PANEL_SNAPSHOT=/tmp/panel/panel-snapshot.json)
git add data/ilan-seo.json && git commit -m "İlan SEO: <n> ilana özgün TR/EN/RU metin" && git pull --rebase && git push
```

Push, Turhost yayınını kendisi başlatır.
