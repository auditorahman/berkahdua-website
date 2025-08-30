# BerkahDua.Original - Website Company Profile

## Tentang Website Ini
Berkahdua Original adalah website company profile modern yang dibuat untuk mempromosikan bisnis heating element dan elemen pemanas. Website ini menampilkan produk-produk heating element berkualitas tinggi untuk kebutuhan industri dan rumah tangga.

## Fitur Utama
✅ Design Responsif - Tampilan optimal di semua perangkat (desktop, tablet, mobile)

✅ Product Gallery - Menampilkan produk dengan filter kategori

✅ Product Modal - Detail produk dalam popup modal

✅ Modern Animations - Animasi halus dengan Framer Motion

✅ SEO Optimized - Struktur semantic HTML dan meta tags lengkap

✅ Contact Integration - Integrasi dengan WhatsApp dan Email

✅ Newsletter Subscription - Form berlangganan newsletter

## Teknologi yang Digunakan
### Frontend Framework
Next.js 14 - React framework dengan App Router

TypeScript - Bahasa pemrograman dengan type safety

### Styling
Tailwind CSS - Utility-first CSS framework

CSS3 - Custom styles dan animations

### Animations
Framer Motion - Library animasi untuk React

### Deployment
Vercel - Platform deployment untuk Next.js applications

## Struktur Project 
berkahdua-website/
├── app/
│   ├── page.tsx              # Halaman utama
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── public/
│   └── images/               # Folder untuk gambar assets
├── next.config.js            # Konfigurasi Next.js
├── tailwind.config.ts        # Konfigurasi Tailwind CSS
├── tsconfig.json             # Konfigurasi TypeScript
└── package.json              # Dependencies dan scripts

Cara Menjalankan di Local
Install Dependencies

bash
npm install
Jalankan Development Server

bash
npm run dev
Buka Browser

Buka http://localhost:3000

Build untuk Production
bash
// Build project
npm run build

// Jalankan production server
npm start


## Deploy ke Vercel
Push code ke GitHub repository

Login ke Vercel

Import project dari GitHub

Deploy otomatis - Vercel akan otomatis deploy saat ada update

## Customization
Mengubah Konten
Edit file app/page.tsx untuk mengubah konten utama

Update produk di array products dalam component

Modifikasi styles di app/globals.css atau menggunakan Tailwind classes

Menambah Halaman Baru
Buat folder baru di app/nama-halaman/

Buat file page.tsx dalam folder tersebut

Halaman akan tersedia di /nama-halaman

## Mengubah Warna Theme
Edit tailwind.config.ts untuk mengubah color palette

atau modifikasi CSS variables di app/globals.css

## Dependencies Utama
next: 14.0.0+

react: 18.0.0+

react-dom: 18.0.0+

framer-motion: Untuk animasi

typescript: Untuk type safety

tailwindcss: Untuk styling

Browser Support
Website ini mendukung:

Chrome (versi terbaru)

Firefox (versi terbaru)

Safari (versi terbaru)

Edge (versi terbaru)

## Performance Features
✅ Image Optimization - Optimasi gambar dengan next/image

✅ Code Splitting - Automatic code splitting dengan Next.js

✅ SEO Friendly - Meta tags dan structured data

✅ Mobile First - Design responsive mobile-first

## Kontribusi
Untuk berkontribusi pada pengembangan website ini:

Fork repository

Buat feature branch

Commit perubahan

Push ke branch

Buat Pull Request

## License
Project ini dibuat untuk Berkahdua Original © 2025

## Support
Untuk pertanyaan teknis, hubungi developer atau buat issue di repository GitHub.