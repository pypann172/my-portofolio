const technicalSkills = [
    { name: 'HTML & CSS', level: 'Menengah', width: '60%', detail: 'Layout responsif dan interface yang rapi' },
    { name: 'JavaScript', level: 'Dasar', width: '30%', detail: 'Interaksi web dan logika aplikasi' },
    { name: 'TypeScript', level: 'Dasar', width: '20%', detail: 'Membangun kode yang lebih terstruktur' },
    { name: 'Python', level: 'Menengah', width: '40%', detail: 'Eksplorasi automasi dan pemrograman' },
    { name: 'Tailwind CSS', level: 'Dasar', width: '30%', detail: 'Desain responsif dan interaktif' },
    { name: 'Next.js', level: 'Dasar', width: '10%', detail: 'Pengembangan aplikasi web' },
    { name: 'Supabase', level: 'Dasar', width: '20%', detail: 'Pengembangan aplikasi web' },
    { name: 'MySQL', level: 'Menengah', width: '50%', detail: 'Pengembangan aplikasi web' },
];

const workingStyle = [
    ['01', 'Problem solving', 'Memecah masalah besar menjadi langkah yang jelas.'],
    ['02', 'Adaptive learner', 'Cepat belajar tools baru saat proyek membutuhkannya.'],
    ['03', 'Prompt engineering', 'Menggunakan AI sebagai partner berpikir, bukan pengganti proses.'],
];

export default function Keahlian() {
    return (
        <main className="relative isolate mx-auto w-full max-w-6xl flex-1 overflow-hidden px-5 py-14 sm:px-8 sm:py-20">
            <div className="pointer-events-none absolute right-0 top-0 -z-10 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
            <section className="animate-[fade-up_700ms_ease-out_both]">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-blue-600">Skills</p>
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-blue-950 sm:text-6xl">
                            Hal yang sedang saya <span className="text-blue-600">bangun.</span>
                        </h1>
                        <p className="mt-5 max-w-xl text-base leading-8 text-blue-950/65 sm:text-lg">
                            Bukan hanya kumpulan tools, tapi cara saya mengubah ide menjadi produk digital yang bisa dipakai.
                        </p>
                    </div>
                    <div className="terus-belajar-skills flex items-center gap-3 text-sm text-blue-900/60">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        Terus belajar, terus berkembang
                    </div>
                </div>
            </section>

            <section className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="animate-[fade-up_700ms_120ms_ease-out_both] rounded-3xl border border-blue-200 bg-white/70 p-6 shadow-[0_18px_45px_rgba(30,64,175,0.08)] sm:p-8">
                    <div className="mb-8 flex items-start justify-between gap-4">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Core tools</p>
                            <h2 className="mt-2 text-2xl font-bold text-blue-950">Technical skills</h2>
                        </div>
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">01 — 04</span>
                    </div>
                    <div className="space-y-6">
                        {technicalSkills.map((skill) => (
                            <div key={skill.name}>
                                <div className="mb-2 flex items-center justify-between gap-4">
                                    <span className="font-semibold text-blue-950">{skill.name}</span>
                                    <span className="text-xs font-semibold text-blue-600">{skill.level}</span>
                                </div>
                                <div className="h-2 overflow-hidden rounded-full bg-blue-100">
                                    <div className="h-full rounded-full bg-blue-600" style={{ width: skill.width }} />
                                </div>
                                <p className="mt-2 text-xs text-blue-950/55">{skill.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="animate-[fade-up_700ms_240ms_ease-out_both] rounded-3xl bg-blue-950 p-6 text-blue-50 shadow-[0_18px_45px_rgba(30,64,175,0.2)] sm:p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">Beyond code</p>
                    <h2 className="mt-2 text-2xl font-bold">Cara saya bekerja</h2>
                    <div className="mt-8 divide-y divide-blue-800">
                        {workingStyle.map(([number, title, detail]) => (
                            <div key={number} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                                <span className="font-mono text-xs text-sky-300">{number}</span>
                                <div>
                                    <h3 className="font-semibold">{title}</h3>
                                    <p className="mt-1 text-sm leading-6 text-blue-200/70">{detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
