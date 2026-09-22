const profile = {
    name: "Moh. Irfan Syah",
    role: "Software Engineer",
    summary: "Siswa Rekayasa Perangkat Lunak yang sedang memperdalam web development, interface design, dan cara membangun produk digital yang rapi serta mudah digunakan.",
    location: "Pasuruan, Indonesia",
    email: "irfansyah1752@gmail.com",
};

const skills = ["HTML", "Vanilla CSS", "JavaScript", "Python", "Tailwind CSS", "Next.js", "Supabase"];

const highlights = [
    { label: "Pendidikan", value: "SMK Negeri 1 Pasuruan" },
    { label: "Kelas", value: "XI RPL 1" },
    { label: "Fokus", value: "Web & interface" },
];

export default function CvContent() {
    return (
        <div className="mx-auto w-full max-w-5xl">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">CV / Download</p>
                <a
                    href="/cv/preview"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-3 text-sm font-bold text-blue-50 shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800 focus-visible:outline-3 focus-visible:outline-blue-300 focus-visible:outline-offset-3"
                >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
                        <circle cx="12" cy="12" r="2.5" />
                    </svg>
                    Lihat CV
                </a>
            </div>
            <header className="grid gap-8 border-b border-blue-200 pb-10 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">Curriculum vitae</p>
                    <h1 className="mt-4 text-5xl font-bold leading-none tracking-tight text-blue-950 sm:text-7xl">{profile.name}</h1>
                    <p className="mt-5 text-xl font-semibold text-blue-700 sm:text-2xl">{profile.role}</p>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-blue-950/65 sm:text-lg">{profile.summary}</p>
                </div>
                <div className="text-left text-sm leading-7 text-blue-950/60 md:text-right">
                    <p>{profile.location}</p>
                    <a href={`mailto:${profile.email}`} className="font-semibold text-blue-700 hover:text-blue-950">{profile.email}</a>
                </div>
            </header>

            <div className="mt-10 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
                <aside>
                    <section>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Profile snapshot</p>
                        <div className="mt-5 divide-y divide-blue-200 border-y border-blue-200">
                            {highlights.map((item) => (
                                <div key={item.label} className="py-4">
                                    <p className="text-xs text-blue-950/55">{item.label}</p>
                                    <p className="mt-1 font-semibold text-blue-950">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="mt-10">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Technical skills</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {skills.map((skill) => <span key={skill} className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-semibold text-blue-800">{skill}</span>)}
                        </div>
                    </section>
                </aside>

                <div className="space-y-10">
                    <section>
                        <div className="flex items-center gap-4"><p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Education</p><span className="h-px flex-1 bg-blue-200" /></div>
                        <article className="mt-5 border-l-2 border-blue-600 pl-5">
                            <p className="text-sm font-semibold text-blue-600">Saat ini</p>
                            <h2 className="mt-2 text-xl font-bold text-blue-950">Rekayasa Perangkat Lunak</h2>
                            <p className="cv-smk mt-1 font-medium text-blue-950/70">SMK Negeri 1 Pasuruan</p>
                            <p className="mt-3 text-sm leading-6 text-blue-950/60">Mempelajari dasar pemrograman, web development, desain interface, dan pengembangan aplikasi.</p>
                        </article>
                    </section>
                    <section>
                        <div className="flex items-center gap-4"><p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Selected focus</p><span className="h-px flex-1 bg-blue-200" /></div>
                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                            <article className="rounded-2xl border border-blue-200 bg-blue-50/70 p-5"><h2 className="font-bold text-blue-950">Web development</h2><p className="mt-2 text-sm leading-6 text-blue-950/60">Membangun website responsif dengan struktur yang jelas dan pengalaman yang nyaman.</p></article>
                            <article className="rounded-2xl border border-blue-200 bg-blue-50/70 p-5"><h2 className="font-bold text-blue-950">Interface design</h2><p className="mt-2 text-sm leading-6 text-blue-950/60">Mengeksplorasi layout, visual, dan komponen dari ide menjadi tampilan yang rapi.</p></article>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
