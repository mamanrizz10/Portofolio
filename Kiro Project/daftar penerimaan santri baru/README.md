# Landing Page Pendaftaran Santri Baru - Ponpes Assalam Kubar

Landing page untuk pendaftaran santri baru Pondok Pesantren Assalam Kalimantan Timur, mencakup jenjang Madrasah Tsanawiyah (MTs) dan Madrasah Aliyah (MA).

## Fitur

- 🎨 Desain modern dan responsif dengan Tailwind CSS
- 📱 Mobile-friendly
- 📝 Formulir pendaftaran lengkap
- 🏫 Informasi jenjang pendidikan (MTs & MA)
- ✨ Tampilan fasilitas pondok pesantren
- ⚡ Dibangun dengan Next.js 14 dan TypeScript

## Instalasi

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka browser dan akses [http://localhost:3000](http://localhost:3000)

## Build untuk Production

```bash
npm run build
npm start
```

## Struktur Project

```
├── app/
│   ├── globals.css       # Tailwind CSS global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Halaman utama landing page
├── public/               # Static assets
├── tailwind.config.ts    # Konfigurasi Tailwind
├── tsconfig.json         # Konfigurasi TypeScript
└── package.json          # Dependencies
```

## Kustomisasi

Anda dapat mengkustomisasi:
- Warna tema di `tailwind.config.ts`
- Konten dan informasi di `app/page.tsx`
- Informasi kontak di bagian footer

## Teknologi

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- PostCSS

## Catatan

Untuk menjalankan project ini, pastikan Anda sudah menginstall Node.js versi 18 atau lebih tinggi.
