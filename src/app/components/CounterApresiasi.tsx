"use client";

// Client Component: useState diperlukan agar jumlah apresiasi berubah saat tombol diklik.
import { useState } from "react";

export default function CounterApresiasi() {
    const [count, setCount] = useState(0);

    return (
        <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-blue-200 pt-6">
            <button type="button" onClick={() => setCount((currentCount) => currentCount + 1)} className="rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-blue-50 transition-colors hover:bg-blue-950">
                Beri Apresiasi
            </button>
            <span className="text-sm font-semibold text-blue-950">{count} apresiasi</span>
        </div>
    );
}