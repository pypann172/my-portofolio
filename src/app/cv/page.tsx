import CvContent from "../components/cv-content";

export const metadata = {
    title: "CV | Irfan Syah",
    description: "Curriculum vitae Moh. Irfan Syah.",
};

export default function CvPage() {
    return (
        <main className="relative isolate mx-auto w-full max-w-6xl flex-1 overflow-hidden px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
            <div className="pointer-events-none absolute -right-32 top-20 -z-10 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl" />
            <CvContent />
        </main>
    );
}
