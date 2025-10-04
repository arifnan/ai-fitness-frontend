import WorkoutBrowser from '@/components/WorkoutBrowser'; // Impor komponen baru

// Fungsi untuk mengambil data dari backend Flask
async function getWorkouts() {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000';
        const res = await fetch(`${apiUrl}/api/workouts`, { cache: 'no-store' });
        if (!res.ok) return { workouts: [], filters: { body_parts: [], levels: [] } };
        return res.json();
    } catch (error) {
        console.error('Error fetching workouts:', error);
        return { workouts: [], filters: { body_parts: [], levels: [] } };
    }
}

export default async function WorkoutsPage() {
    const data = await getWorkouts();

    return (
        <div className="page-content">
            <h1>Exercise Library</h1>
            <p>Gunakan filter di bawah ini untuk menemukan latihan yang sempurna untuk Anda.</p>
            
            {/* Gunakan komponen interaktif di sini */}
            <WorkoutBrowser initialWorkouts={data.workouts} filters={data.filters} />
        </div>
    );
}