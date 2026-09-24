// Server Component: kartu hanya merender data project tanpa interaksi client-side.
import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";

interface CardProyekProps {
    slug: string;
    number: string;
    title: string;
    category: string;
    status: string;
    summary: string;
    description: string;
    tools: string[];
    image: string;
}

export default function CardProyek({ slug, number, title, category, status, summary, image }: CardProyekProps) {
    return (
        <article className="group flex flex-col overflow-hidden rounded-3xl border border-blue-200 bg-blue-50/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/10">
            <div className="relative aspect-4/3 overflow-hidden bg-blue-100">
                <Image src={image} alt={title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-blue-950/60 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-blue-950/55 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-50 backdrop-blur">{number}</span>
                <div className="absolute bottom-4 left-4"><Badge label={category} /></div>
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3"><h3 className="text-xl font-bold tracking-tight text-blue-950">{title}</h3><span className="shrink-0 rounded-full border border-blue-200 px-2.5 py-1 text-[10px] font-semibold text-blue-600">{status}</span></div>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-blue-950/60">{summary}</p>
                <Link href={`/proyek/${slug}`} className="mt-6 flex w-full items-center justify-between border-t border-blue-200 pt-4 text-sm font-bold text-blue-700 transition-colors hover:text-blue-950">Lihat detail <span aria-hidden="true" className="text-lg">↗</span></Link>
            </div>
        </article>
    );
}