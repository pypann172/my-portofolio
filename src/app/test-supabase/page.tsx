import { getProjects } from '@/lib/queries';

export default async function TestSupabasePage() {
    const projects = await getProjects();

    console.log('Data dari Supabase:', projects);
        
    return <p>Cek terminal VS Code kalian untuk melihat hasilnya.</p>;
}

export const dynamic = "force-dynamic";