# Portfolio Website - Dafif Afin Annafi

Website portfolio personal untuk Dafif Afin Annafi, seorang Data Analyst. Didesain dengan estetika modern yang clean, minimal, dan terang (light theme). Dibangun menggunakan HTML, CSS, dan JavaScript murni tanpa framework, sehingga sangat cepat dan mudah dikustomisasi.

## 🚀 Deploy ke GitHub Pages (Gratis)

Ikuti langkah-langkah berikut untuk meng-online-kan website Anda:

1. Buat repository baru di GitHub (misal dengan nama `portfolio` atau `dafif-afin-annafi.github.io`)
2. Upload semua file (index.html, style.css, script.js, dan README.md) ke repository tersebut
3. Buka tab **Settings** pada repository
4. Pada menu sebelah kiri, pilih **Pages**
5. Di bagian "Source", pilih branch `main` (atau `master`) dan folder `/ (root)`
6. Klik **Save**
7. Tunggu beberapa menit, website Anda akan online di `https://username.github.io/nama-repo/`

> **Note:** Jika Anda menamai repository dengan format `username.github.io` (dimana username adalah username GitHub Anda), website akan dapat diakses tanpa `/nama-repo/` di belakangnya.

## ✏️ Cara Edit Konten

Sebagian besar konten dapat diedit langsung dari file `index.html`. Berikut adalah panduannya:

- **Profil & About**: Edit teks pada section `<section class="about" id="about">`
- **Skills**: Tambahkan atau hapus card pada `<div class="skills-grid">`
- **Experience & Education**: Edit timeline item pada section `<section class="experience" id="experience">`
- **Projects**: Duplikat tag `<div class="project-card">` dan sesuaikan konten serta linknya
- **Kontak**: Ganti placeholder link email, WhatsApp, LinkedIn, dan GitHub di `<section class="contact" id="contact">`
- **Foto Profil**: Cari div dengan class `.hero-image-wrapper` di `index.html`, lalu ganti div placeholder dengan tag `<img>` yang mengarah ke foto Anda.

## 🎨 Cara Ganti Warna & Desain

Desain diatur menggunakan CSS Custom Properties (Variabel) sehingga sangat mudah diubah warnanya.
Buka `style.css` dan perhatikan baris-baris paling atas:

```css
:root {
  /* Color Palette */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8FAFC;
  --accent-primary: #4F46E5; /* Ganti kode HEX ini untuk mengubah warna utama (biru/indigo) */
  --accent-secondary: #0EA5E9; 
  /* ... */
}
```

## 📁 Struktur File

```
├── index.html    # Halaman utama dengan semua section portfolio
├── style.css     # Semua styling, variabel warna, responsive layout
├── script.js     # Efek smooth scroll, animasi mengetik, counter angka
└── README.md     # Dokumentasi ini
```

## 💡 Tips

- **Icon**: Website ini menggunakan inline SVG icon untuk meminimalisir loading time. Anda bisa mencari icon baru (dalam format SVG) di situs seperti [Feather Icons](https://feathericons.com/) atau [Lucide](https://lucide.dev/).
- Semua teks placeholder ditandai dengan komentar `<!-- EDIT: ... -->` di dalam `index.html` agar mudah ditemukan.
- Pastikan untuk mengecek tampilan di handphone setelah mengedit konten. Layout sudah diatur menggunakan teknik *mobile-first* dan *CSS Grid*.
