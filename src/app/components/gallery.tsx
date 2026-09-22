"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const galleryItems = [
    { image: "/galeri/ipann.jpeg", title: "Irfan Syah", category: "Profile" },
    { image: "/galeri/panitia1.JPG", title: "Panitia Event OSIS", category: "Organization" },
    { image: "/galeri/panitia2.JPG", title: "Kegiatan Event MPLS 2026", category: "Event" },
    { image: "/galeri/panitia3.JPG", title: "Sertifikat kepanitiaan", category: "Achievement" },
    { image: "/galeri/SertifEfe1.jpg", title: "Sertifikat EFE", category: "Certificate" },
    { image: "/galeri/SertifLiterasiDigital.jpg", title: "Literasi Digital", category: "Certificate" },
    { image: "/galeri/sertifPahamAI.jpeg", title: "Paham AI", category: "Certificate" },
];

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d={direction === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
        </svg>
    );
}

export default function Gallery() {
    const galleryRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    function scrollGallery(direction: "left" | "right") {
        const gallery = galleryRef.current;
        if (!gallery) return;

        const amount = gallery.clientWidth * (window.innerWidth >= 640 ? 0.34 : 0.88);
        gallery.scrollBy({ left: direction === "right" ? amount : -amount, behavior: "smooth" });
    }

    useEffect(() => {
        const gallery = galleryRef.current;
        if (!gallery) return;

        const handleScroll = () => {
            const card = gallery.firstElementChild as HTMLElement | null;
            if (!card) return;
            const step = card.offsetWidth + 16;
            setActiveIndex(Math.round(gallery.scrollLeft / step));
        };

        gallery.addEventListener("scroll", handleScroll, { passive: true });
        return () => gallery.removeEventListener("scroll", handleScroll);
    }, []);

    function goToSlide(index: number) {
        const gallery = galleryRef.current;
        const card = gallery?.firstElementChild as HTMLElement | null;
        if (!gallery || !card) return;
        gallery.scrollTo({ left: index * (card.offsetWidth + 16), behavior: "smooth" });
    }

    return (
        <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20" aria-labelledby="gallery-title">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">Gallery</p>
                    <h2 id="gallery-title" className="mt-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-5xl">Potongan cerita saya.</h2>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-blue-950/60 sm:text-base">Dokumentasi kecil dari kegiatan, proses belajar, dan momen yang ikut membentuk perjalanan saya.</p>
                </div>
                <div className="flex shrink-0 gap-2 self-start sm:self-auto">
                    <button type="button" onClick={() => scrollGallery("left")} className="grid h-11 w-11 place-items-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 shadow-sm transition hover:border-blue-500 hover:bg-blue-700 hover:text-blue-50" aria-label="Geser galeri ke kiri"><ArrowIcon direction="left" /></button>
                    <button type="button" onClick={() => scrollGallery("right")} className="grid h-11 w-11 place-items-center rounded-full border border-blue-200 bg-blue-700 text-blue-50 shadow-sm transition hover:bg-blue-800" aria-label="Geser galeri ke kanan"><ArrowIcon direction="right" /></button>
                </div>
            </div>

            <div ref={galleryRef} className="gallery-scrollbar mt-9 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
                {galleryItems.map((item) => (
                    <article key={item.image} className="group w-[88%] shrink-0 snap-start overflow-hidden rounded-3xl border border-blue-200 bg-blue-50/70 shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/10 sm:w-[calc((100%-2rem)/3)]">
                        <div className="relative aspect-4/3 overflow-hidden bg-blue-100">
                            <Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 88vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-linear-to-t from-blue-950/70 via-transparent to-transparent" />
                            <span className="absolute bottom-4 left-4 rounded-full border border-white/40 bg-blue-950/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-50 backdrop-blur">{item.category}</span>
                        </div>
                        <div className="p-4 sm:p-5"><h3 className="font-bold text-blue-950">{item.title}</h3><p className="mt-1 text-xs text-blue-950/55">Dokumentasi pribadi</p></div>
                    </article>
                ))}
            </div>

            <div className="mt-5 flex justify-center gap-2" aria-label="Posisi galeri">
                {galleryItems.map((item, index) => <button key={item.image} type="button" onClick={() => goToSlide(index)} aria-label={`Buka foto ${index + 1}`} aria-current={activeIndex === index} className={`h-2 rounded-full transition-all ${activeIndex === index ? "w-7 bg-blue-700" : "w-2 bg-blue-200 hover:bg-blue-400"}`} />)}
            </div>
        </section>
    );
}
