// Server Component: badge hanya menampilkan props dan tidak membutuhkan state atau event browser.
interface BadgeProps {
    label: string;
}

export default function Badge({ label }: BadgeProps) {
    return <span className="rounded-full bg-blue-700 px-3 py-1.5 text-xs font-semibold text-blue-50">{label}</span>;
}