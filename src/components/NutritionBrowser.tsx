'use client'; // Ini adalah Client Component yang interaktif

import { useState, useMemo } from 'react';

type Food = {
    Food_Item: string;
    Category: string;
    'Calories (kcal)': number;
    'Protein (g)': number;
    'Carbohydrates (g)': number;
    'Fat (g)': number;
};

type Props = {
    initialFoods: Food[];
    filters: {
        categories: string[];
    };
};

export default function NutritionBrowser({ initialFoods, filters }: Props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');

    const filteredFoods = useMemo(() => {
        return initialFoods.filter(food => {
            const nameMatch = food.Food_Item.toLowerCase().includes(searchTerm.toLowerCase());
            const categoryMatch = categoryFilter === 'all' || food.Category === categoryFilter;
            return nameMatch && categoryMatch;
        });
    }, [searchTerm, categoryFilter, initialFoods]);

    return (
        <>
            <div className="filter-container">
                <input
                    type="text"
                    id="food-search-input"
                    placeholder="Cari nama makanan..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select id="category-filter" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                    <option value="all">Semua Kategori</option>
                    {filters.categories?.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
            </div>

            <div className="food-grid">
                {filteredFoods.length > 0 ? (
                    filteredFoods.map((food, index) => (
                        <div key={index} className="food-card">
                            <h3>{food.Food_Item}</h3>
                            <span className="food-category">{food.Category}</span>
                            <ul>
                                <li><strong>Kalori:</strong> {food['Calories (kcal)']} kcal</li>
                                <li><strong>Protein:</strong> {food['Protein (g)']} g</li>
                                <li><strong>Karbohidrat:</strong> {food['Carbohydrates (g)']} g</li>
                                <li><strong>Lemak:</strong> {food['Fat (g)']} g</li>
                            </ul>
                        </div>
                    ))
                ) : (
                    <p>Tidak ada makanan yang cocok dengan filter Anda.</p>
                )}
            </div>
        </>
    );
}