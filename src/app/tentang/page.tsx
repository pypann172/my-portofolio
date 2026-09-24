import Image from 'next/image';
import CounterApresiasi from '../components/CounterApresiasi';

const profileDetails = [
    ['Nama', 'Moh. Irfan Syah'],
    ['Kelas', 'XI RPL 1'],
    ['Jurusan', 'Rekayasa Perangkat Lunak'],
    ['Sekolah', 'SMK Negeri 1 Pasuruan'],
];

export default function Tentang() {
    return (
        <main className="relative isolate mx-auto w-full max-w-6xl flex-1 overflow-hidden px-5 py-14 sm:px-8 sm:py-20">
            <div className="pointer-events-none absolute -left-24 top-20 -z-10 h-64 w-64 rounded-full bg-sky-200/45 blur-3xl" />
            <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                <div className="relative mx-auto w-full max-w-sm animate-[fade-up_700ms_ease-out_both]">
                    <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl border-2 border-blue-300" />
                    <div className="relative overflow-hidden rounded-4xl border-8 border-white bg-blue-950 shadow-2xl shadow-blue-900/15">
                        <div className="relative aspect-4/5">
                            <Image src="/ipann/irfanFormal.jpeg" alt="Moh. Irfan Syah" fill sizes="(max-width: 1024px) 90vw, 30vw" className="object-cover object-[67%_42%]" />
                        </div>
                    </div>
                    <div className="absolute -right-5 top-8 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 shadow-lg shadow-blue-900/10">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-500">Based in</p>
                        <p className="mt-1 font-semibold text-blue-950">Pasuruan, ID</p>
                    </div>
                </div>

                <section className="animate-[fade-up_700ms_160ms_ease-out_both]">
                    <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-blue-600">About me / 01</p>
                    <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-blue-950 sm:text-6xl">
                        Saya suka membuat sesuatu yang <span className="text-blue-600">berarti.</span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-blue-950/65 sm:text-lg">
                        Saya adalah siswa Rekayasa Perangkat Lunak di SMK Negeri 1 Pasuruan. Saat ini saya sedang memperdalam web development dan mencari cara baru untuk membuat pengalaman digital yang sederhana, rapi, dan terasa manusiawi.
                    </p>
                    <div className="mt-9 grid max-w-xl grid-cols-1 gap-x-8 gap-y-5 border-t border-blue-200 pt-6 sm:grid-cols-2">
                        {profileDetails.map(([label, value]) => (
                            <div key={label}>
                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">{label}</p>
                                <p className="mt-1.5 text-sm font-semibold text-blue-950">{value}</p>
                            </div>
                        ))}
                    </div>
                    <CounterApresiasi />
                </section>
            </div>
        </main>
    );
}
