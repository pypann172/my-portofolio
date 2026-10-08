import { cache } from "react";
import { supabase } from "@/lib/supabase";
import type {
    Contact,
    GalleryItem,
    GuestbookPublicEntry,
    Profile,
    Project,
    Skill,
    SkillTimelineItem,
    WorkingStyle,
} from "@/lib/types";

type ProjectRow = Omit<Project, "tools" | "createdAt" | "number"> & {
    number: string | number;
    tools: string | null;
    created_at: string;
};

function toProject(row: ProjectRow): Project {
    return {
        id: row.id,
        slug: row.slug,
        number: String(row.number),
        title: row.title,
        category: row.category,
        status: row.status,
        summary: row.summary,
        description: row.description,
        tools: (row.tools ?? "").split(",").map((tool) => tool.trim()).filter(Boolean),
        image: row.image,
        createdAt: row.created_at,
    };
}

export const getProjects = cache(async (): Promise<Project[]> => {
    try {
        const { data, error } = await supabase.from("proyek").select("*").order("id", { ascending: true });
        if (error) {
            console.error("Gagal memuat proyek:", error);
            return [];
        }

        return (data ?? []).map((row) => toProject(row as ProjectRow));
    } catch (error) {
        console.error("Gagal memuat proyek:", error);
        return [];
    }
});

export const getProjectBySlug = cache(async (slug: string): Promise<Project | null> => {
    try {
        const { data, error } = await supabase.from("proyek").select("*").eq("slug", slug).maybeSingle();
        if (error) {
            console.error("Gagal memuat detail proyek:", error);
            return null;
        }

        return data ? toProject(data as ProjectRow) : null;
    } catch (error) {
        console.error("Gagal memuat detail proyek:", error);
        return null;
    }
});

export const getGallery = cache(async (): Promise<GalleryItem[]> => {
    try {
        const { data, error } = await supabase.from("galeri").select("*").order("sort_order", { ascending: true });
        if (error) {
            console.error("Gagal memuat galeri:", error);
            return [];
        }

        return (data ?? []).map((row) => ({
            id: row.id,
            image: row.image,
            title: row.title,
            category: row.category,
            sortOrder: row.sort_order,
        }));
    } catch (error) {
        console.error("Gagal memuat galeri:", error);
        return [];
    }
});

export const getSkills = cache(async (): Promise<Skill[]> => {
    try {
        const { data, error } = await supabase.from("skills").select("*").order("sort_order", { ascending: true });
        if (error) {
            console.error("Gagal memuat keahlian:", error);
            return [];
        }

        return (data ?? []).map((row) => ({
            id: row.id,
            name: row.name,
            level: row.level,
            widthPercent: row.width_percent,
            detail: row.detail,
            sortOrder: row.sort_order,
        }));
    } catch (error) {
        console.error("Gagal memuat keahlian:", error);
        return [];
    }
});

export const getSkillsTimeline = cache(async (): Promise<SkillTimelineItem[]> => {
    try {
        const { data, error } = await supabase.from("skills_timeline").select("*").order("sort_order", { ascending: true });
        if (error) {
            console.error("Gagal memuat timeline keahlian:", error);
            return [];
        }

        return (data ?? []).map((row) => ({
            id: row.id,
            name: row.name,
            detail: row.detail,
            sortOrder: row.sort_order,
        }));
    } catch (error) {
        console.error("Gagal memuat timeline keahlian:", error);
        return [];
    }
});

export const getWorkingStyle = cache(async (): Promise<WorkingStyle[]> => {
    try {
        const { data, error } = await supabase.from("working_style").select("*").order("sort_order", { ascending: true });
        if (error) {
            console.error("Gagal memuat cara kerja:", error);
            return [];
        }

        return (data ?? []).map((row) => ({
            id: row.id,
            title: row.title,
            detail: row.detail,
            sortOrder: row.sort_order,
        }));
    } catch (error) {
        console.error("Gagal memuat cara kerja:", error);
        return [];
    }
});

export const getContacts = cache(async (): Promise<Contact[]> => {
    try {
        const { data, error } = await supabase.from("kontak").select("*").order("sort_order", { ascending: true });
        if (error) {
            console.error("Gagal memuat kontak:", error);
            return [];
        }

        return (data ?? []).map((row) => ({
            id: row.id,
            label: row.label,
            value: row.value,
            href: row.href,
            note: row.note,
            sortOrder: row.sort_order,
        }));
    } catch (error) {
        console.error("Gagal memuat kontak:", error);
        return [];
    }
});

export const getProfil = cache(async (): Promise<Profile | null> => {
    try {
        const { data, error } = await supabase.from("profil").select("*").eq("id", 1).maybeSingle();
        if (error) {
            console.error("Gagal memuat profil:", error);
            return null;
        }
        if (!data) return null;

        return {
            id: data.id,
            namaLengkap: data.nama_lengkap,
            namaTampil: data.nama_tampil,
            role: data.role,
            deskripsiHome: data.deskripsi_home,
            bioTentang: data.bio_tentang,
            ringkasanCv: data.ringkasan_cv,
            fokusSaatIni: data.fokus_saat_ini,
            kelas: data.kelas,
            jurusan: data.jurusan,
            sekolah: data.sekolah,
            kota: data.kota,
            email: data.email,
            githubUrl: data.github_url,
            fotoHome: data.foto_home,
            fotoTentang: data.foto_tentang,
            logo: data.logo,
        };
    } catch (error) {
        console.error("Gagal memuat profil:", error);
        return null;
    }
});

export const getFeatureFlag = cache(async (key: string): Promise<boolean> => {
    try {
        const { data, error } = await supabase.from("fitur_flags").select("aktif").eq("kunci", key).maybeSingle();
        if (error) {
            console.error(`Gagal memuat fitur ${key}:`, error);
            return false;
        }

        return data?.aktif ?? false;
    } catch (error) {
        console.error(`Gagal memuat fitur ${key}:`, error);
        return false;
    }
});

export const getApresiasi = cache(async (): Promise<number> => {
    try {
        const { data, error } = await supabase.from("apresiasi").select("jumlah").limit(1).maybeSingle();
        if (error) {
            console.error("Gagal memuat jumlah apresiasi:", error);
            return 0;
        }

        return data?.jumlah ?? 0;
    } catch (error) {
        console.error("Gagal memuat jumlah apresiasi:", error);
        return 0;
    }
});

export const getGuestbookPublik = cache(async (limit = 4): Promise<GuestbookPublicEntry[]> => {
    try {
        const { data, error } = await supabase
            .from("buku_tamu_publik")
            .select("*")
            .order("created_at", { ascending: false })
            .limit(limit);
        if (error) {
            console.error("Gagal memuat buku tamu publik:", error);
            return [];
        }

        return (data ?? []).map((row) => ({
            id: row.id,
            nama: row.nama,
            pesan: row.pesan,
            createdAt: row.created_at,
        }));
    } catch (error) {
        console.error("Gagal memuat buku tamu publik:", error);
        return [];
    }
});
