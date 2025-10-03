import NutritionBrowser from "@/components/NutritionBrowser";

async function getNutritionData() {
    try {
        const res = await fetch('http://127.0.0.1:5000/api/nutrition', { cache: 'no-store' });
        if (!res.ok) return { foods: [], filters: { categories: [] } };
        return res.json();
    } catch (error) {
        console.error('Error fetching nutrition data:', error);
        return { foods: [], filters: { categories: [] } };
    }
}

export default async function NutritionPage() {
    const data = await getNutritionData();

    return (
        <div className="page-content">
            <h1>Nutrition Guide</h1>
            <p>Temukan informasi gizi dari berbagai jenis makanan dan minuman.</p>

            <NutritionBrowser initialFoods={data.foods} filters={data.filters} />
        </div>
    );
}