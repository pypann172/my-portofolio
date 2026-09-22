import Image from "next/image";
import Link from "next/link";
import { projects } from "./projects";

export default function Projects() {
    return (
        <main className="relative isolate mx-auto w-full max-w-6xl flex-1 overflow-hidden px-5 py-14 sm:px-8 sm:py-20">
            <div className="pointer-events-none absolute -right-32 top-16 -z-10 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl" />
            <div className="grid items-end gap-8 border-b border-blue-200 pb-12 lg:grid-cols-[1fr_auto]">
                <section className="animate-[fade-up_700ms_ease-out_both]">
                    <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-blue-600">Selected work / 01</p>
                    <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-tight text-blue-950 sm:text-7xl">
                        Hal-hal yang <span className="text-blue-600">sedang saya buat.</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-base leading-8 text-blue-950/65 sm:text-lg">
                        Kumpulan latihan dan eksperimen kecil untuk mengasah cara berpikir, rasa visual, dan kemampuan membangun produk digital.
                    </p>
                </section>
                <div className="flex items-center gap-3 text-sm font-semibold text-blue-900/60 lg:pb-2">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-700 text-blue-50">{projects.length}</span>
                    <span>Projects archive</span>
                </div>
            </div>

            <section className="mt-12">
                <div className="mb-6 flex items-end justify-between gap-4">
                    <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Project list</p><h2 className="mt-2 text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl">Karya dan eksperimen</h2></div>
                    <p className="hidden text-sm text-blue-950/55 sm:block">Pilih project untuk melihat detail</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <article key={project.slug} className="group flex flex-col overflow-hidden rounded-3xl border border-blue-200 bg-blue-50/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/10">
                            <div className="relative aspect-4/3 overflow-hidden bg-blue-100">
                                <Image src={project.image} alt={project.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-linear-to-t from-blue-950/60 to-transparent" />
                                <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-blue-950/55 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-50 backdrop-blur">{project.number}</span>
                                <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.16em] text-sky-100">{project.category}</span>
                            </div>
                            <div className="flex flex-1 flex-col p-5 sm:p-6">
                                <div className="flex items-start justify-between gap-3"><h3 className="text-xl font-bold tracking-tight text-blue-950">{project.title}</h3><span className="shrink-0 rounded-full border border-blue-200 px-2.5 py-1 text-[10px] font-semibold text-blue-600">{project.status}</span></div>
                                <p className="mt-3 line-clamp-2 text-sm leading-6 text-blue-950/60">{project.summary}</p>
                                <Link href={`/proyek/${project.slug}`} className="mt-6 flex w-full items-center justify-between border-t border-blue-200 pt-4 text-sm font-bold text-blue-700 transition-colors hover:text-blue-950">Lihat detail <span aria-hidden="true" className="text-lg">↗</span></Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mt-16 grid gap-6 border-t border-blue-200 pt-8 sm:grid-cols-3">
                <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-500">Status</p><p className="mt-2 font-semibold text-blue-950">Terus berkembang</p></div>
                <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-500">Fokus</p><p className="mt-2 font-semibold text-blue-950">UI/UX Web Development <br /> Mobile Development <br/>MockUp Design</p></div>
                <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-500">Tools</p><p className="mt-2 font-semibold text-blue-950">HTML, CSS, JavaScript, TypeScript <br/>TailwindCSS, NextJS
                <br/> Figma Design</p></div>
            </section>
        </main>
    );
}