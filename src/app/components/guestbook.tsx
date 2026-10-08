"use client";

import { useState, type FormEvent } from "react";
import type { GuestbookPublicEntry } from "@/lib/types";

type GuestbookProps = {
    entries: GuestbookPublicEntry[];
};

const successMessage = "Terima kasih! Pesan kamu sudah terkirim.";

export default function Guestbook({ entries }: GuestbookProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedback, setFeedback] = useState<{ kind: "success" | "error"; text: string } | null>(null);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setFeedback(null);

        try {
            const form = new FormData(event.currentTarget);
            const response = await fetch("/api/buku-tamu", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nama: name,
                    email,
                    pesan: message,
                    website: form.get("website"),
                }),
            });
            let result: { ok?: boolean; message?: string };
            try {
                result = await response.json();
            } catch (error) {
                console.error("Respons API buku tamu tidak valid:", error);
                setFeedback({ kind: "error", text: "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi." });
                return;
            }

            if (!response.ok || !result.ok) {
                setFeedback({ kind: "error", text: result.message || "Pesan belum dapat dikirim. Silakan coba lagi." });
                return;
            }

            setName("");
            setEmail("");
            setMessage("");
            setFeedback({ kind: "success", text: successMessage });
        } catch (error) {
            console.error("Gagal mengirim pesan buku tamu:", error);
            setFeedback({ kind: "error", text: "Tidak dapat mengirim pesan saat ini. Silakan coba lagi." });
        } finally {
            setIsSubmitting(false);
        }
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
                            Email
                            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required maxLength={120} className="mt-2 w-full rounded-xl border border-blue-200 bg-white px-4 py-3 text-sm font-normal text-blue-950 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="Email kamu" />
                        </label>
                        <label className="block text-sm font-semibold text-blue-950">
                            Pesan
                            <textarea value={message} onChange={(event) => setMessage(event.target.value)} required maxLength={500} rows={4} className="mt-2 w-full resize-none rounded-xl border border-blue-200 bg-white px-4 py-3 text-sm font-normal leading-6 text-blue-950 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200" placeholder="Halo, Irfan..." />
                        </label>
                        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                        <button type="submit" disabled={isSubmitting} className="w-full rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-blue-50 shadow-lg shadow-blue-700/15 transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70">{isSubmitting ? "Mengirim..." : <>Kirim pesan <span aria-hidden="true">↗</span></>}</button>
                        {feedback && <p role={feedback.kind === "error" ? "alert" : "status"} className="text-sm leading-6 text-blue-800">{feedback.text}</p>}
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
                                        <p className="pesan-buku-tamu text-md leading-6 text-blue-950/75">“{entry.pesan}”</p>
                                        <p className="mt-3 text-md font-bold uppercase tracking-[0.14em] text-blue-600">{entry.nama}</p>
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
