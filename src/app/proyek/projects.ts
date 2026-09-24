export type Project = {
    slug: string;
    number: string;
    title: string;
    category: string;
    status: string;
    summary: string;
    description: string;
    tools: string[];
    image: string;
};

export const projects: Project[] = [
    {
        slug: "mockip-aplikasi-ppob",
        number: "01",
        title: "WireFrame Aplikasi PPOB - Marketplace",
        category: "Mockup",
        status: "Resolved",
        summary: "Latihan menyusun tampilan digital yang sederhana dan punya karakter.",
        description: "Project ini berisi eksplorasi layout, komponen, dan arah visual untuk melatih cara menerjemahkan ide dari Figma menjadi antarmuka yang rapi dan mudah dipahami.",
        tools: ["Figma", "Visual design"],
        image: "/projects/figma.png",
    },
    {
        slug: "portfolio-foundation",
        number: "02",
        title: "Portfolio foundation",
        category: "Web Development",
        status: "In progress",
        summary: "Fondasi website portfolio pribadi untuk mendokumentasikan karya.",
        description: "Website portfolio ini menjadi ruang untuk menyimpan proses belajar, memperkenalkan kemampuan, dan menampilkan karya-karya baru secara bertahap.",
        tools: ["Next.js", "Tailwind CSS"],
        image: "/projects/portofolio.png",
    },
    {
        slug: "first-web",
        number: "03",
        title: "First Web - Artikel",
        category: "Web Development",
        status: "Terbengkalai",
        summary: "Awal kali mencoba membuat website menggunakan HTML dan CSS",
        description: "Pertama kali kenal dengan  Web Development dan mencoba membuat website menggunakan HTML dan CSS.",
        tools: ["HTML", "CSS", "JavaScript"],
        image: "/projects/firstWebipann.png",
    },
];

export function getProject(slug: string) {
    return projects.find((project) => project.slug === slug);
}
