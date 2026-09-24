import Image from "next/image";
import Link from "next/link";

const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/proyek" },
    { label: "Skills", href: "/keahlian" },
    { label: "About", href: "/tentang" },
    { label: "Contact", href: "/kontak" },
];

export default function Footer() {
    return (
        <footer className="global-footer mt-auto border-t border-blue-200 bg-blue-950 text-blue-50">
            <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-12">
                <div>
                    <Link href="/" className="inline-flex items-center gap-3" aria-label="Kembali ke halaman utama Ipann">
                        <Image src="/ipann/logoIpann.jpg" alt="Logo Ipann" width={42} height={42} className="h-10 w-10 rounded-xl object-contain" />
                        <span className="text-lg font-bold tracking-tight">Irfan Syah</span>
                    </Link>
                    <p className="mt-5 max-w-sm text-sm leading-7 text-blue-200/75">
                        Portfolio pribadi Moh. Irfan Syah, siswa Rekayasa Perangkat Lunak pada SMK Negeri 1 Pasuruan.
                    </p>
                </div>

                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">Explore</p>
                    <nav className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 text-sm" aria-label="Footer navigation">
                        {footerLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-blue-100/75 transition-colors hover:text-white">{link.label}</Link>
                        ))}
                    </nav>
                </div>

                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">Get in touch</p>
                    <div className="mt-4 space-y-3 text-sm">
                        <a href="mailto:irfansyahipann@gmail.com" className="block break-all text-blue-100/75 transition-colors hover:text-white">irfansyahipann@gmail.com</a>
                        <a href="https://github.com/pypann172" target="_blank" rel="noreferrer" className="block text-blue-100/75 transition-colors hover:text-white">GitHub ↗</a>
                        <p className="text-blue-200/55">Pasuruan, Indonesia</p>
                    </div>
                </div>
            </div>
            <div className="border-t border-blue-800/80">
                <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-blue-200/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                    <p>© {new Date().getFullYear()} Irfan Syah.</p>
                    <p>Portfolio pribadi</p>
                </div>
            </div>
        </footer>
    );
}
