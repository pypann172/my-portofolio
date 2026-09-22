import Image from "next/image";
import Link from "next/link";

const cvImage = "/ipann/CV_Moh_Irfan_Syah.jpg";

export const metadata = {
    title: "Preview CV | Ipann",
    description: "Preview curriculum vitae Moh. Irfan Syah.",
};

export default function CvPreviewPage() {
    return (
        <main className="relative isolate mx-auto w-full max-w-5xl flex-1 overflow-hidden px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
            <div className="pointer-events-none absolute -right-32 top-20 -z-10 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl" />
            <div className="flex flex-wrap items-center justify-between gap-4">
                <Link href="/cv" className="text-sm font-semibold text-blue-700 transition-colors hover:text-blue-950">← Kembali ke CV</Link>
                <a
                    href={cvImage}
                    download="CV_Moh_Irfan_Syah.jpg"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-bold text-blue-50 shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800 focus-visible:outline-3 focus-visible:outline-blue-300 focus-visible:outline-offset-3"
                >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3v12" />
                        <path d="m7 10 5 5 5-5" />
                        <path d="M5 21h14" />
                    </svg>
                    Download CV
                </a>
            </div>
            <section className="mt-8" aria-labelledby="cv-preview-title">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">CV preview</p>
                <h1 id="cv-preview-title" className="mt-3 text-3xl font-bold tracking-tight text-blue-950 sm:text-5xl">Curriculum vitae Moh. Irfan Syah</h1>
                <div className="mt-8 overflow-hidden rounded-3xl border border-blue-200 bg-blue-950 p-2 shadow-2xl shadow-blue-900/15 sm:p-4">
                    <Image src={cvImage} alt="Preview CV Moh. Irfan Syah" width={2480} height={3508} priority className="h-auto w-full rounded-2xl" />
                </div>
            </section>
        </main>
    );
}