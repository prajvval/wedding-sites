"""Regenerate the three Knot & Ink QR codes.

Run: python qr/generate.py
Requires: pip install qrcode[pil]

Edit the URLS dict below if the landing URL, sample URL, or WhatsApp
number ever changes.
"""

import qrcode
from qrcode.constants import ERROR_CORRECT_H
from pathlib import Path

URLS = {
    'qr-landing.png':  'https://knotandink.netlify.app',
    'qr-sample.png':   'https://knotandink.netlify.app/samples/aanya-rohan/',
    'qr-whatsapp.png': 'https://wa.me/918956929726',
}

OUT_DIR = Path(__file__).parent

# Error correction H (~30%) survives bad print, smudges, partial occlusion.
# box_size 24 + border 4 produces ~1000 px PNG — enough for any print size
# down to a 25 mm business-card icon and up to A3 poster.
for filename, data in URLS.items():
    qr = qrcode.QRCode(
        version=None,
        error_correction=ERROR_CORRECT_H,
        box_size=24,
        border=4,
    )
    qr.add_data(data)
    qr.make(fit=True)
    img = qr.make_image(fill_color='black', back_color='white')
    out_path = OUT_DIR / filename
    img.save(out_path)
    print(f'  {filename}  ({img.size[0]}x{img.size[1]} px)  -> {data}')

print('Done. Open qr/index.html in a browser to view + save the PNGs.')
