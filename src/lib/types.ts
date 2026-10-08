export type Project = {
    id: number | string;
    slug: string;
    number: string;
    title: string;
    category: string;
    status: string;
    summary: string;
    description: string;
    tools: string[];
    image: string;
    createdAt: string;
};

export type GalleryItem = {
    id: number | string;
    image: string;
    title: string;
    category: string;
    sortOrder: number;
};

export type Skill = {
    id: number | string;
    name: string;
    level: string;
    widthPercent: number;
    detail: string;
    sortOrder: number;
};

export type SkillTimelineItem = {
    id: number | string;
    name: string;
    detail: string;
    sortOrder: number;
};

export type WorkingStyle = {
    id: number | string;
    title: string;
    detail: string;
    sortOrder: number;
};

export type Contact = {
    id: number | string;
    label: string;
    value: string;
    href: string;
    note: string;
    sortOrder: number;
};

export type Profile = {
    id: number;
    namaLengkap: string;
    namaTampil: string;
    role: string;
    deskripsiHome: string;
    bioTentang: string;
    ringkasanCv: string;
    fokusSaatIni: string;
    kelas: string;
    jurusan: string;
    sekolah: string;
    kota: string;
    email: string;
    githubUrl: string;
    fotoHome: string;
    fotoTentang: string;
    logo: string;
};

export type FeatureFlag = {
    key: string;
    active: boolean;
    description: string;
};

export type Appreciation = {
    id: number;
    count: number;
    updatedAt: string;
};

export type GuestbookEntry = {
    id: number | string;
    nama: string;
    email: string;
    pesan: string;
    disetujui: boolean;
    createdAt: string;
};

export type GuestbookPublicEntry = {
    id: number | string;
    nama: string;
    pesan: string;
    createdAt: string;
};
