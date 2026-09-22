'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const exitTimer = window.setTimeout(() => setIsExiting(true), 900);
        const removeTimer = window.setTimeout(() => setIsVisible(false), 1400);

        return () => {
            window.clearTimeout(exitTimer);
            window.clearTimeout(removeTimer);
        };
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div
            className={`splash-screen fixed inset-0 z-100 grid place-items-center bg-blue-950 text-blue-50 transition-opacity duration-500 ${isExiting ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
            role="status"
            aria-label="Memuat portfolio Ipann"
            aria-hidden={isExiting}
        >
            <div className="relative flex flex-col items-center px-6 text-center">
                <div className="splash-logo relative grid h-24 w-24 place-items-center overflow-hidden rounded-3xl bg-white p-2 shadow-2xl shadow-black/20 sm:h-28 sm:w-28">
                    <Image src="/ipann/logoIpann.jpg" alt="Logo Ipann" fill priority sizes="112px" className="object-contain" />
                </div>
                <p className="splash-title mt-7 text-xs font-bold uppercase tracking-[0.3em] text-sky-200">Moh. Irfan Syah</p>
                <p className="splash-subtitle mt-3 text-sm text-blue-200/65">Portfolio</p>
                <div className="mt-8 h-1 w-32 overflow-hidden rounded-full bg-blue-800">
                    <div className="splash-progress h-full w-1/2 rounded-full bg-sky-300" />
                </div>
            </div>
            <span className="absolute bottom-8 text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-300/50">Loading experience</span>
        </div>
    );
}
