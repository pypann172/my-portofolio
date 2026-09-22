import Link from "next/link";
import Image from "next/image";
import Guestbook from "./components/guestbook";
import SkillsTimeline from "./components/skills-timeline";
import Gallery from "./components/gallery";

export default function Home() {
    return (
        <>
            <main className="relative isolate mx-auto flex w-full max-w-6xl flex-1 items-center overflow-hidden px-5 py-16 sm:px-8 sm:py-24">
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_22%,rgba(96,165,250,0.25),transparent_28%),linear-gradient(rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.06)_1px,transparent_1px)]" />
                <div className="grid w-full items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
                <section className="animate-[fade-up_700ms_ease-out_both]">
                    <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                        <span className="h-2 w-2 rounded-full bg-sky-500" />
                        My Portfolio
                        <span className="h-2 w-2 rounded-full bg-sky-500" />
                    </p>
                    <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-tight text-blue-950 sm:text-7xl">
                        Moh. Irfan <span className="text-blue-600">Syah</span>
                    </h1>
                    <h2 className="mt-6 text-xl font-semibold text-blue-800 sm:text-2xl">Software Engineer</h2>
                    <p className="mt-6 max-w-xl text-base leading-8 text-blue-950/65 sm:text-lg">
                        Saya murid Rekayasa Perangkat Lunak di SMK Negeri 1 Pasuruan yang senang mengubah ide menjadi pengalaman digital yang rapi, berguna, dan terus berkembang.
                    </p>
                    <div className="mt-9 flex flex-wrap gap-3">
                        <Link href="/proyek" className="rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-blue-50 shadow-lg shadow-blue-700/20 transition-transform hover:-translate-y-0.5 hover:bg-blue-800">
                            Lihat proyek <span aria-hidden="true">↗</span>
                        </Link>
                        <Link href="/tentang" className="rounded-xl border border-blue-300 bg-blue-100/50 px-5 py-3 text-sm font-semibold text-blue-800 transition-colors hover:bg-blue-100">
                            Kenali saya
                        </Link>
                    </div>
                </section>

                <aside className="relative animate-[fade-up_700ms_180ms_ease-out_both]">
                    <div className="absolute -right-5 -top-5 h-24 w-24 animate-[float_5s_ease-in-out_infinite] rounded-3xl border border-sky-300/80 bg-sky-200/50" />
                    <div className="relative overflow-hidden rounded-4xl border border-blue-200 bg-blue-950 p-3 text-blue-50 shadow-2xl shadow-blue-900/25 sm:p-4">
                        <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-blue-900">
                            <Image
                                src="/ipann/irfanFormal.jpeg"
                                alt="Moh. Irfan Syah"
                                fill
                                priority
                                sizes="(max-width: 1024px) 90vw, 36vw"
                                className="object-cover object-[67%_42%] transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-blue-950/90 via-blue-950/5 to-transparent" />
                            <div className="absolute inset-3 rounded-3xl border border-blue-100/30" />
                            <span className="absolute left-5 top-5 rounded-full border border-sky-200/50 bg-blue-950/65 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-200 backdrop-blur">
                                Irfan Syah
                           </span>
                            <span className="absolute bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-sky-200/60 bg-blue-700/80 text-xl text-sky-200 backdrop-blur">
                                ✦
                            </span>
                            <div className="absolute bottom-5 left-5">
                                <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-200">Software Engineer</p>
                                <p className="mt-1 text-2xl font-semibold text-blue-50">Moh. Irfan Syah</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 px-3 pb-2 pt-5 text-sm sm:px-4">
                            <div><p className="text-blue-200/60">Fokus saat ini</p><p className="mt-1 font-medium">Web Development</p></div>
                            <div><p className="text-blue-200/60">Domisili</p><p className="mt-1 font-medium text-sky-300">Pasuruan</p></div>
                        </div>
                    </div>
                </aside>
                </div>
            </main>
            <SkillsTimeline />
            <Gallery />
            <Guestbook />
        </>
    );
}