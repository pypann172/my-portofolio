This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Portofolio Irfan Syah

Website portofolio pribadi yang dibangun sebagai tugas Kelas Industri Next.js, SMK Negeri 1
Pasuruan, jurusan RPL. Project ini dikembangkan bertahap mengikuti modul pembelajaran dan
sekarang datanya diambil dari database cloud Supabase.

## Teknologi

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (PostgreSQL + `@supabase/supabase-js`)
- pnpm

## Fitur

- Navigasi multi-halaman dengan `next/link` dan indikator halaman aktif
- Dark mode
- Halaman Home, About, Skills, Contact, dan CV
- Halaman Projects dengan filter kategori (`?category=...`)
- Dynamic routing `/proyek/[slug]` untuk detail proyek
- Halaman 404 kustom
- Data proyek diambil langsung dari Supabase (bukan lagi data statis di kode)

## Progres modul

| Modul | Topik | Status |
|---|---|---|
| 1 | Dasar Next.js, App Router, routing, navigasi `Link` | Selesai |
| 2 | Styling Tailwind, komponen reusable, `useState`, dynamic routing | Selesai |
| 3 | Integrasi database Supabase | Selesai |

## Cara menjalankan

1. Clone repository ini
2. Install dependency:
```bash
   pnpm install
```
3. Buat file `.env.local` di root project (file ini tidak ikut ke GitHub):
```
   NEXT_PUBLIC_SUPABASE_URL=url_project_supabase_kamu
   NEXT_PUBLIC_SUPABASE_ANON_KEY=publishable_key_kamu
```
4. Jalankan development server:
```bash
   pnpm dev
```
5. Buka http://localhost:3000

## Database Supabase

Semua tabel memakai Row Level Security (RLS) dengan policy `SELECT` publik, sehingga data
hanya bisa dibaca dari website, tidak bisa diubah. Key yang dipakai di kode hanya
publishable/anon key, secret key tidak pernah dipakai di frontend.

### Tabel `proyek` (sudah terhubung ke halaman `/proyek`)

| Kolom | Tipe | Keterangan |
|---|---|---|
| id | bigint | Primary key, auto increment |
| slug | text | Unik, dipakai untuk URL `/proyek/[slug]` |
| number | text | Nomor urut tampilan |
| title | text | Judul proyek |
| category | text | Kategori, dipakai untuk filter |
| status | text | Status pengerjaan |
| summary | text | Ringkasan singkat |
| description | text | Deskripsi lengkap |
| tools | text | Teknologi, dipisah koma |
| image | text | Path gambar di folder `public/` |
| created_at | timestamptz | Waktu dibuat, otomatis |

### Tabel pendukung (sudah dibuat di Supabase)

| Tabel | Kolom utama | Fungsi |
|---|---|---|
| galeri | id, image, title, category, sort_order | Data foto galeri |
| skills | id, name, level, width_percent, detail, sort_order | Skill teknis di halaman Skills |
| skills_timeline | id, name, detail, sort_order | Daftar toolkit |
| working_style | id, title, detail, sort_order | Bagian "Cara saya bekerja" |
| kontak | id, label, value, href, note, sort_order | Kanal kontak |
| apresiasi | id, jumlah, updated_at | Counter apresiasi |
| buku_tamu | id, nama, pesan, created_at | Pesan buku tamu |

## Struktur folder utama

```
src/
├── app/
│   ├── components/     # Navbar, Footer, Badge, CardProyek, dll
│   ├── proyek/         # Katalog dan detail proyek
│   ├── test-supabase/  # Halaman uji koneksi Supabase
│   └── ...             # Halaman lain
└── lib/
    └── supabase.ts     # Client koneksi Supabase
```

---
Dibuat oleh Moh. Irfan Syah, siswa RPL SMK Negeri 1 Pasuruan