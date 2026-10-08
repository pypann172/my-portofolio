"use client";

// Client Component: useState diperlukan agar jumlah apresiasi berubah saat tombol diklik.
import { useState } from "react";
import { supabase } from "@/lib/supabase";

type CounterApresiasiProps = {
    initialCount: number;
};

export default function CounterApresiasi({ initialCount }: CounterApresiasiProps) {
    const [count, setCount] = useState(initialCount);

    async function giveAppreciation() {
        const previousCount = count;
        setCount(previousCount + 1);

        try {
            const { data, error } = await supabase.rpc("tambah_apresiasi");
            if (error || typeof data !== "number") {
                console.error("Gagal menambah apresiasi:", error ?? "Fungsi tidak mengembalikan angka.");
                setCount(previousCount);
                return;
            }

            setCount(data);
        } catch (error) {
            console.error("Gagal menambah apresiasi:", error);
            setCount(previousCount);
        }
    }

    return (
        <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-blue-200 pt-6">
            <button type="button" onClick={giveAppreciation} className="rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-blue-50 transition-colors hover:bg-blue-950">
                Beri Apresiasi
            </button>
            <span className="text-sm font-semibold text-blue-950">{count} apresiasi</span>
        </div>
    );
}