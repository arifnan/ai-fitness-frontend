'use client'; // Menandakan ini adalah Client Component

import { useState, useMemo } from 'react';
import Link from 'next/link';

// Mendefinisikan tipe data untuk kejelasan
type Workout = {
    'Unnamed: 0': number;
    Title: string;
    BodyPart: string;
    Level: string;
    Equipment: string;
};

type Props = {
    initialWorkouts: Workout[];
    filters: {
        body_parts: string[];
        levels: string[];
    };
};

export default function WorkoutBrowser({ initialWorkouts, filters }: Props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [bodypartFilter, setBodypartFilter] = useState('all');
    const [levelFilter, setLevelFilter] = useState('all');

    const filteredWorkouts = useMemo(() => {
        return initialWorkouts.filter(workout => {
            const titleMatch = workout.Title.toLowerCase().includes(searchTerm.toLowerCase());
            const bodypartMatch = bodypartFilter === 'all' || workout.BodyPart === bodypartFilter;
            const levelMatch = levelFilter === 'all' || workout.Level === levelFilter;
            return titleMatch && bodypartMatch && levelMatch;
        });
    }, [searchTerm, bodypartFilter, levelFilter, initialWorkouts]);

    return (
        <>
            <div className="filter-container">
                <input
                    type="text"
                    id="search-input"
                    placeholder="Cari nama latihan..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select id="bodypart-filter" value={bodypartFilter} onChange={(e) => setBodypartFilter(e.target.value)}>
                    <option value="all">Semua Bagian Tubuh</option>
                    {filters.body_parts?.map(part => <option key={part} value={part}>{part}</option>)}
                </select>
                <select id="level-filter" value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)}>
                    <option value="all">Semua Level</option>
                    {filters.levels?.map(level => <option key={level} value={level}>{level}</option>)}
                </select>
            </div>

            <div className="workout-grid">
                {filteredWorkouts.length > 0 ? (
                    filteredWorkouts.map((workout, index) => (
                        <Link key={index} href={`/workouts/${workout['Unnamed: 0']}`} className="workout-card-link">
                            <div className="workout-card">
                                <h3>{workout.Title}</h3>
                                <div className="card-icons">
                                    <span className="icon-tag"><i className="fas fa-dumbbell"></i> {workout.BodyPart}</span>
                                    <span className="icon-tag"><i className="fas fa-tachometer-alt"></i> {workout.Level}</span>
                                </div>
                                <p><strong>Equipment:</strong> {workout.Equipment}</p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>Tidak ada latihan yang cocok dengan filter Anda.</p>
                )}
            </div>
        </>
    );
}