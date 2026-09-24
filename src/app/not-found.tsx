// Server Component: halaman 404 bersifat statis dan tidak membutuhkan state client.
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="not-found-page flex flex-1 items-center justify-center px-5 py-20 sm:px-8">
            <section className="w-full max-w-xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">404 / Tidak ditemukan</p>
                <h1 className="mt-5 text-5xl font-bold tracking-tight text-blue-950 sm:text-7xl">Halaman ini belum ada.</h1>
                <p className="mx-auto mt-6 max-w-md text-base leading-8 text-blue-950/65">Project atau halaman yang kamu cari tidak tersedia di portfolio ini.</p>
                <Link href="/" className="mt-8 inline-flex rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-blue-50 transition-colors hover:bg-blue-950">Kembali ke Home</Link>
            </section>
        </main>
    );
}