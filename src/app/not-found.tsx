// Server Component: halaman 404 bersifat statis dan tidak membutuhkan state client.
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <main className="not-found-page flex flex-1 items-center justify-center px-5 py-20 sm:px-8">
                <div className="absolute h-40 w-39 overflow-hidden center top-40 rounded-2xl md:h-60 md:w-58 lg:h-80 lg:w-78 md:top-25 lg:top-15 md:rounded-3xl lg:rounded-6xl">
                    <Image
                        src="/tambahan/kucingMaaf.jpg"
                        alt="Ilustrasi kucing"
                        fill
                        priority
                        sizes="150px"
                        className="object-cover"
                    />
                </div>
            <section className="w-full max-w-xl text-center">
                <p className="text-6xl font-bold uppercase tracking-[0.24em] text-blue-600">404</p>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-800">Tidak ditemukan</p>
                <h1 className="mt-5 text-5xl font-bold tracking-tight text-blue-950 sm:text-7xl">Halaman ini belum ada.</h1>
                <p className="mx-auto mt-6 max-w-md text-base leading-8 text-blue-950/65">Project atau halaman yang kamu cari tidak tersedia di portfolio ini.</p>
                <Link href="/" className="mt-8 inline-flex rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-blue-50 transition-colors hover:bg-blue-950">Kembali ke Home</Link>
            </section>
        </main>
    );
}