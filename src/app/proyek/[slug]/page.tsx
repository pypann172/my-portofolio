import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../projects";
import Badge from "../../components/Badge";

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }: PageProps<"/proyek/[slug]">) {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="relative isolate mx-auto w-full max-w-6xl flex-1 overflow-hidden px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
            <div className="pointer-events-none absolute -left-32 top-24 -z-10 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl" />
            <Link href="/proyek" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-950">← Kembali ke daftar project</Link>
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
                <div className="relative aspect-4/3 overflow-hidden rounded-4xl border border-blue-200 bg-blue-950 p-3 shadow-2xl shadow-blue-900/15 sm:p-4">
                    <Image src={project.image} alt={project.title} fill priority sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover p-3 sm:p-4" />
                </div>
                <section className="animate-[fade-up_700ms_ease-out_both]">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">Project / {project.number}</p>
                    <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-blue-950 sm:text-6xl">{project.title}</h1>
                    <div className="mt-6 flex flex-wrap gap-2"><Badge label={project.category} /><span className="rounded-full border border-blue-200 px-3 py-1.5 text-xs font-semibold text-blue-700">{project.status}</span></div>
                    <p className="mt-8 text-base leading-8 text-blue-950/65 sm:text-lg">{project.description}</p>
                    <div className="mt-9 border-t border-blue-200 pt-6">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-500">Tools &amp; focus</p>
                        <div className="mt-3 flex flex-wrap gap-2">{project.tools.map((tool) => <span key={tool} className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-semibold text-blue-800">{tool}</span>)}</div>
                    </div>
                </section>
            </div>
        </main>
    );
}
