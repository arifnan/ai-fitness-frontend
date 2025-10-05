import Link from 'next/link';

// Fungsi untuk mengambil data SATU latihan dari backend
async function getWorkoutDetail(id: string) {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000';
        const res = await fetch(`${apiUrl}/api/workout/${id}`, { cache: 'no-store' });
        if (!res.ok) {
            return null; // Kembalikan null jika latihan tidak ditemukan (404)
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching workout detail:', error);
        return null;
    }
}

// Komponen halaman detail
export default async function WorkoutDetailPage({ params }: { params: { id: string } }) {
    const workout = await getWorkoutDetail(params.id);

    // Tampilan jika data tidak ditemukan
    if (!workout) {
        return (
            <div className="page-content text-center">
                <h1>Latihan Tidak Ditemukan</h1>
                <p>Maaf, kami tidak dapat menemukan detail untuk latihan yang Anda cari.</p>
                <Link href="/workouts" className="btn-primary">Kembali ke Daftar Latihan</Link>
            </div>
        );
    }

    return (
        <div className="detail-page-container">
            <div className="detail-header">
                <h1>{workout.Title}</h1>
                <Link href="/workouts" className="back-link">← Kembali ke Daftar</Link>
            </div>

            <div className="detail-content">
                <div className="detail-description">
                    <h2>Deskripsi & Cara Melakukan</h2>
                    {/* Mengganti baris baru (\n) dengan tag <br> untuk format yang benar */}
                    <p dangerouslySetInnerHTML={{ __html: workout.Desc.replace(/\n/g, '<br />') }}></p>
                </div>

                <div className="detail-meta">
                    <h2>Detail Latihan</h2>
                    <ul>
                        <li>
                            <i className="fas fa-tag"></i>
                            <strong>Tipe:</strong> <span>{workout.Type}</span>
                        </li>
                        <li>
                            <i className="fas fa-dumbbell"></i>
                            <strong>Bagian Tubuh:</strong> <span>{workout.BodyPart}</span>
                        </li>
                        <li>
                            <i className="fas fa-cogs"></i>
                            <strong>Peralatan:</strong> <span>{workout.Equipment}</span>
                        </li>
                        <li>
                            <i className="fas fa-tachometer-alt"></i>
                            <strong>Level:</strong> <span>{workout.Level}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}