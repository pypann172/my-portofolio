"use client";

import { FormEvent, useEffect, useState } from "react";

type GuestEntry = {
    id: number;
    name: string;
    message: string;
};

const storageKey = "ipann-guestbook";

export default function Guestbook() {
    const [entries, setEntries] = useState<GuestEntry[]>([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (typeof window === "undefined") return;

        const savedEntries = window.localStorage.getItem(storageKey);
        if (!savedEntries) return;

        try {
            const parsedEntries = JSON.parse(savedEntries) as GuestEntry[];
            setEntries(parsedEntries);
        } catch {
            setEntries([]);
        }
    }, []);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const trimmedName = name.trim();
        const trimmedMessage = message.trim();

        if (!trimmedName || !trimmedMessage) return;

        const nextEntries = [
            { id: Date.now(), name: trimmedName, message: trimmedMessage },
            ...entries,
        ];

        setEntries(nextEntries);
        window.localStorage.setItem(storageKey, JSON.stringify(nextEntries));
        setName("");
        setMessage("");
    }

    return (
        <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20" aria-labelledby="guestbook-title">
            <div className="grid gap-8 border-t border-blue-200 pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">Say hello</p>
                    <h2 id="guestbook-title" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-blue-950 sm:text-4xl">
                        Tinggalkan jejak di buku tamu.
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-7 text-blue-950/60 sm:text-base">
                        Tulis pesan singkat, sapaan, atau hal yang ingin kamu sampaikan setelah berkunjung.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-blue-200 bg-blue-50/70 p-5 sm:p-6">
                        <label className="block text-sm font-semibold text-blue-950">
                            Nama
                            <input value={name} onChange={(event) => setName(event.target.value)} required maxLength={40} className="mt-2 w-full rounded-xl border border-blue-200 bg-white px-4 py-3 text-sm font-normal text-blue-950 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="Nama kamu" />
                        </label>
                        <label className="block text-sm font-semibold text-blue-950">
                            Pesan
                            <textarea value={message} onChange={(event) => setMessage(event.target.value)} required maxLength={180} rows={4} className="mt-2 w-full resize-none rounded-xl border border-blue-200 bg-white px-4 py-3 text-sm font-normal leading-6 text-blue-950 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="Halo, Irfan..." />
                        </label>
                        <button type="submit" className="w-full rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-blue-50 shadow-lg shadow-blue-700/15 transition hover:bg-blue-800">Kirim pesan <span aria-hidden="true">↗</span></button>
                    </form>

                    <div className="min-h-48">
                        {entries.length === 0 ? (
                            <div className="flex h-full min-h-48 items-center justify-center rounded-2xl border border-dashed border-blue-300 px-6 text-center text-sm leading-6 text-blue-950/50">
                                Belum ada pesan. Jadilah yang pertama menyapa.
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {entries.slice(0, 4).map((entry) => (
                                    <article key={entry.id} className="rounded-2xl border border-blue-200 bg-white/70 p-4">
                                        <p className="pesan-buku-tamu text-md leading-6 text-blue-950/75">“{entry.message}”</p>
                                        <p className="mt-3 text-md font-bold uppercase tracking-[0.14em] text-blue-600">{entry.name}</p>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
