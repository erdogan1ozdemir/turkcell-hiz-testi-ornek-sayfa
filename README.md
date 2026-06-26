# Turkcell Hız Testi · Örnek Sayfa Tasarımı (4 CRO/Dönüşüm Varyantı)

[turkcell.com.tr/hiz-testi](https://www.turkcell.com.tr/hiz-testi) sayfasının **sadık klon kabuğu**
(navy #001043, mavi #1C37CA kart, Turkcell sarısı #FFC40C, inline Turkcell logo) üzerine, gövdesi
CRO/dönüşüme göre yeniden tasarlanmış **örnek sayfa**. Tek dosya, self-contained (CSS/JS/logo inline).

## Varyantlar (sağdaki/alttaki yüzen seçici · `#v=a|b|c|d`)
- **A · Akıllı Sonuç** · test biter bitmez ölçülen hıza göre dinamik paket önerisi (rakiplerde yok)
- **B · Sade Hız** · tek net sonuç + tek güçlü CTA
- **C · Değer / Paket** · şu anki hız vs Turkcell + net fiyatlı paket kartları
- **D · Lead / Altyapı** · ad/telefon + adres ile lead toplama formu

"GO" butonuna basınca animasyonlu demo test çalışır; sonuç paneli seçili varyanta göre canlanır.

## Yayın
- **Vercel:** statik (`vercel.json` · cleanUrls) · kök `index.html` doğrudan açılır.
- **Railway/Render:** `npm start` → `server.js` (`PORT` dinler).
- **Yerel:** `python3 -m http.server` veya `node server.js`.

## İlgili
- Ana rapor + 4 varyant: https://github.com/erdogan1ozdemir/turkcell-hiz-testi
- Skill: https://github.com/erdogan1ozdemir/hedef-lp-keyword-rapor-tasarim-ornegi-skill

---
Tasarım örneği (demo) · Hazırlayan: Inbound · 26 Haziran 2026
