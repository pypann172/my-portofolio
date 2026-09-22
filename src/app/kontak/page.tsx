import Link from 'next/link';

const contactChannels = [
    { label: 'Email', value: 'irfansyah1752@gmail.com', href: 'mailto:irfansyah1752@gmail.com', note: 'Untuk percakapan serius' },
    { label: 'Instagram', value: '@_ipannpann', href: 'https://instagram.com/_ipannpan', note: 'Keseharian dan proses' },
    { label: 'GitHub', value: 'FelixLeon175', href: 'https://github.com/FelixLeon175', note: 'Kode dan eksperimen' },
];

export default function Kontak() {
    return (
        <main className="relative isolate mx-auto w-full max-w-6xl flex-1 overflow-hidden px-5 py-14 sm:px-8 sm:py-20">
            <div className="pointer-events-none absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-sky-200/45 blur-3xl" />
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
                <section className="animate-[fade-up_700ms_ease-out_both]">
                    <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-blue-600">Contact</p>
                    <h1 className="max-w-2xl text-5xl font-bold leading-[1.02] tracking-tight text-blue-950 sm:text-7xl">
                        Punya ide? <span className="text-blue-600">Mari ngobrol.</span>
                    </h1>
                    <p className="mt-7 max-w-xl text-base leading-8 text-blue-950/65 sm:text-lg">
                        Saya selalu terbuka untuk bertemu dengan orang baru, membahas ide, atau mengerjakan sesuatu yang seru bersama.
                    </p>
                    <Link href="mailto:irfansyah1752@gmail.com" className="mt-9 inline-flex items-center gap-3 rounded-xl bg-blue-700 px-5 py-3.5 text-sm font-semibold text-blue-50 shadow-lg shadow-blue-700/20 transition-transform hover:-translate-y-0.5 hover:bg-blue-800">
                        Kirim email <span aria-hidden="true" className="text-lg">↗</span>
                    </Link>
                </section>

                <section className="animate-[fade-up_700ms_160ms_ease-out_both] rounded-3xl border border-blue-200 bg-white/70 p-6 shadow-[0_18px_45px_rgba(30,64,175,0.08)] sm:p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Temukan saya</p>
                    <div className="mt-5 divide-y divide-blue-100">
                        {contactChannels.map((channel) => (
                            <Link key={channel.label} href={channel.href} target={channel.href.startsWith('http') ? '_blank' : undefined} rel={channel.href.startsWith('http') ? 'noreferrer' : undefined} className="group flex items-center justify-between gap-4 py-5 first:pt-0 last:pb-0">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-500">{channel.label}</p>
                                    <p className="mt-1 font-semibold text-blue-950 transition-colors group-hover:text-blue-600">{channel.value}</p>
                                    <p className="mt-1 text-xs text-blue-950/50">{channel.note}</p>
                                </div>
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-blue-200 text-lg text-blue-600 transition-all group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white" aria-hidden="true">↗</span>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
