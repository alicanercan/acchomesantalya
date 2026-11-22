#!/usr/bin/env python3
"""Galeri veri hattı.
Yeni foto eklemek: dosyayı signature/media/galeri/<kategori>/ içine koy
(kategori: saha | teslim | sahne | ekip | portre), sonra:  python3 signature/galeri.py
İsteğe bağlı açıklama: aynı ada .txt (1. satır TR, 2. EN, 3. RU).
Çıktı: signature/static/img/galeri/<kat>/<ad>-600.webp ve -1400.webp + signature/galeri.json
"""
import json, os, re, unicodedata
from PIL import Image, ImageOps
H = os.path.dirname(os.path.abspath(__file__)); ST = os.path.join(H, 'static')
DEF = {  # varsayılan açıklamalar (müşteri adı asla yazılmaz)
 'saha':  ('Sahada, portföy çekiminde', 'On site, filming a listing', 'На объекте, съёмка'),
 'teslim':('Tapu ve anahtar teslimi, mutlu bir ACC HOMES müşterisi', 'Title deed and key handover with a happy ACC HOMES client', 'Передача ключей счастливому клиенту ACC HOMES'),
 'sahne': ('Sahnede ve etkinlikte', 'On stage and at events', 'На сцене и мероприятиях'),
 'ekip':  ('ACC HOMES ekibi ve ACC Plaza', 'ACC HOMES team and ACC Plaza', 'Команда ACC HOMES и ACC Plaza'),
 'portre':('Ali Caner Can', 'Ali Caner Can', 'Али Джанер Джан'),
}
TR = str.maketrans('çğıöşüÇĞİÖŞÜ', 'cgiosuCGIOSU')
def slug(s): s = unicodedata.normalize('NFKD', s.translate(TR)).encode('ascii', 'ignore').decode(); return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')
def dims(p):
    with Image.open(p) as im: return im.size
seed = json.load(open(os.path.join(H, 'galeri-kaynak.json'), encoding='utf8'))
out = []
for e in seed:  # mevcut görseller: {s, b, cat, tr, en, ru}
    w, h = dims(ST + e['b']); out.append({'s': e['s'], 'b': e['b'], 'w': w, 'h': h, 'cat': e['cat'], 'cap': {k: e[k] for k in ('tr', 'en', 'ru')}})
M = os.path.join(H, 'media', 'galeri')
for cat in sorted(os.listdir(M)):
    d = os.path.join(M, cat)
    if cat not in DEF or not os.path.isdir(d): continue
    for f in sorted(os.listdir(d)):
        if not re.search(r'\.(jpe?g|png|webp)$', f, re.I): continue
        base = slug(os.path.splitext(f)[0]); od = os.path.join(ST, 'img', 'galeri', cat); os.makedirs(od, exist_ok=True)
        im = ImageOps.exif_transpose(Image.open(os.path.join(d, f))).convert('RGB')
        for wmax in (600, 1400):
            p = os.path.join(od, f'{base}-{wmax}.webp')
            if not os.path.exists(p): r = im.copy(); r.thumbnail((wmax, wmax * 2)); r.save(p, 'WEBP', quality=80)
        cap = list(DEF[cat]); t = os.path.join(d, os.path.splitext(f)[0] + '.txt')
        if os.path.exists(t): ln = [x.strip() for x in open(t, encoding='utf8').read().splitlines() if x.strip()]; cap = (ln + cap[len(ln):])[:3]
        w, h = dims(os.path.join(od, f'{base}-1400.webp'))
        out.append({'s': f'/img/galeri/{cat}/{base}-600.webp', 'b': f'/img/galeri/{cat}/{base}-1400.webp', 'w': w, 'h': h, 'cat': cat, 'cap': dict(zip(('tr', 'en', 'ru'), cap))})
json.dump(out, open(os.path.join(H, 'galeri.json'), 'w', encoding='utf8'), ensure_ascii=False, indent=1)
from collections import Counter; print(len(out), 'foto', dict(Counter(x['cat'] for x in out)))
