import Link from "next/link";
import { projects } from "./projects";
import CardProyek from "../components/CardProyek";

interface ProjectsPageProps {
    searchParams: Promise<{ category?: string }>;
}

export default async function Projects({ searchParams }: ProjectsPageProps) {
    const { category } = await searchParams;
    const categories = [...new Set(projects.map((project) => project.category))];
    const filteredProjects = category ? projects.filter((project) => project.category === category) : projects;

    return (
        <main className="relative isolate mx-auto w-full max-w-6xl flex-1 overflow-hidden px-5 py-14 sm:px-8 sm:py-20">
            <div className="pointer-events-none absolute -right-32 top-16 -z-10 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl" />
            <div className="grid items-end gap-8 border-b border-blue-200 pb-12 lg:grid-cols-[1fr_auto]">
                <section className="animate-[fade-up_700ms_ease-out_both]">
                    <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-blue-600">Selected work</p>
                    <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-tight text-blue-950 sm:text-7xl">
                        Hal-hal yang <span className="text-blue-600">sedang saya buat.</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-base leading-8 text-blue-950/65 sm:text-lg">
                        Kumpulan latihan dan eksperimen kecil untuk mengasah cara berpikir, rasa visual, dan kemampuan membangun produk digital.
                    </p>
                </section>
                <div className="flex items-center gap-3 text-sm font-semibold text-blue-900/60 lg:pb-2">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-700 text-blue-50">{filteredProjects.length}</span>
                    <span className="arsip-project">Projects archive</span>
                </div>
            </div>

            <section className="mt-12">
                <div className="mb-6 flex items-end justify-between gap-4">
                    <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Project list</p><h2 className="mt-2 text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl">Karya dan eksperimen</h2></div>
                    <p className="hidden text-sm text-blue-950/55 sm:block">Pilih project untuk melihat detail</p>
                </div>
                <div className="mb-8 flex flex-wrap gap-2">
                    <Link href="/proyek" className={!category ? "rounded-full bg-blue-700 px-3 py-1.5 text-xs font-semibold text-blue-50" : "rounded-full border border-blue-200 px-3 py-1.5 text-xs font-semibold text-blue-700 transition-colors hover:border-blue-400"}>Semua</Link>
                    {categories.map((projectCategory) => (
                        <Link key={projectCategory} href={`/proyek?category=${encodeURIComponent(projectCategory)}`} className={category === projectCategory ? "rounded-full bg-blue-700 px-3 py-1.5 text-xs font-semibold text-blue-50" : "rounded-full border border-blue-200 px-3 py-1.5 text-xs font-semibold text-blue-700 transition-colors hover:border-blue-400"}>
                            {projectCategory}
                        </Link>
                    ))}
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project) => <CardProyek key={project.slug} {...project} />)}
                </div>
            </section>

            <section className="mt-16 grid gap-6 border-t border-blue-200 pt-8 sm:grid-cols-3">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-500">Status</p><p className="mt-2 font-semibold text-blue-950">Terus berkembang</p>
                </div>
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-500">Fokus</p><p className="mt-2 font-semibold text-blue-950">UI/UX Web Development <br /> Mobile Development <br/>MockUp Design</p>
                </div>
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-500">Tools</p><p className="mt-2 font-semibold text-blue-950">HTML, CSS, JavaScript, TypeScript <br/>TailwindCSS, NextJS
                <br/> Figma Design</p>
                </div>
            </section>
        </main>
    );
}