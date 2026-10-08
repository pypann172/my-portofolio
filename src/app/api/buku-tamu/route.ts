import { Resend } from "resend";
import { getFeatureFlag } from "@/lib/queries";
import { supabase } from "@/lib/supabase";

function escapeHtml(value: string): string {
    const entities: Record<string, string> = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
    };

    return value.replace(/[&<>"']/g, (character) => entities[character]);
}

function badRequest(message: string): Response {
    return Response.json({ ok: false, message }, { status: 400 });
}

export async function POST(request: Request): Promise<Response> {
    if (!(await getFeatureFlag("buku_tamu"))) {
        return Response.json({ ok: false, message: "Buku tamu sedang dinonaktifkan." }, { status: 403 });
    }

    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return badRequest("Permintaan tidak berisi JSON yang valid.");
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
        return badRequest("Data pesan tidak valid.");
    }

    const payload = body as Record<string, unknown>;
    const website = payload.website;
    if (typeof website === "string" && website.trim()) {
        return Response.json({ ok: true });
    }

    const nama = typeof payload.nama === "string" ? payload.nama.trim() : "";
    const email = typeof payload.email === "string" ? payload.email.trim() : "";
    const pesan = typeof payload.pesan === "string" ? payload.pesan.trim() : "";

    if (nama.length < 1 || nama.length > 40) {
        return badRequest("Nama wajib diisi dan maksimal 40 karakter.");
    }
    if (email.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return badRequest("Email wajib diisi, maksimal 120 karakter, dan harus berformat valid.");
    }
    if (pesan.length < 1 || pesan.length > 500) {
        return badRequest("Pesan wajib diisi dan maksimal 500 karakter.");
    }

    try {
        const { error } = await supabase.from("buku_tamu").insert({ nama, email, pesan });
        if (error) {
            console.error("Gagal menyimpan pesan buku tamu:", error);
            return Response.json({ ok: false, message: "Pesan belum dapat disimpan. Silakan coba lagi." }, { status: 500 });
        }
    } catch (error) {
        console.error("Gagal menyimpan pesan buku tamu:", error);
        return Response.json({ ok: false, message: "Pesan belum dapat disimpan. Silakan coba lagi." }, { status: 500 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.BUKU_TAMU_NOTIFY_EMAIL;
    if (apiKey && notifyEmail) {
        const sentAt = new Intl.DateTimeFormat("id-ID", {
            timeZone: "Asia/Jakarta",
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZoneName: "short",
        }).format(new Date());

        try {
            const resend = new Resend(apiKey);
            const { error } = await resend.emails.send({
                from: "Buku Tamu Portfolio <onboarding@resend.dev>",
                to: notifyEmail,
                replyTo: email,
                subject: `Pesan baru dari ${nama.replace(/[\r\n]+/g, " ")} (Buku Tamu)`,
                text: `Nama: ${nama}\nEmail: ${email}\nWaktu: ${sentAt}\n\nPesan:\n${pesan}`,
                html: `<h2>Pesan baru dari buku tamu</h2><p><strong>Nama:</strong> ${escapeHtml(nama)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Waktu kirim:</strong> ${escapeHtml(sentAt)}</p><p><strong>Pesan:</strong></p><p style="white-space:pre-wrap">${escapeHtml(pesan)}</p>`,
            });
            if (error) {
                console.error("Gagal mengirim notifikasi buku tamu:", error);
            }
        } catch (error) {
            console.error("Gagal mengirim notifikasi buku tamu:", error);
        }
    }

    return Response.json({ ok: true });
}
