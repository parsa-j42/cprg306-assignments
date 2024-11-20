"use client";

import { useState, useEffect } from 'react';

interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

interface MealIdeasProps {
    ingredient: string | null;
}

async function fetchMealIdeas(ingredient: string): Promise<Meal[]> {
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
}

export default function MealIdeas({ ingredient }: MealIdeasProps) {
    const [meals, setMeals] = useState<Meal[]>([]);

    const loadMealIdeas = async () => {
        if (ingredient) {
            const mealIdeas = await fetchMealIdeas(ingredient);
            setMeals(mealIdeas);
        } else {
            setMeals([]);
        }
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="w-full shadow-xl rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
            {ingredient && (
                <p className="mb-4 text-gray-700">Here are some meal ideas using {ingredient}:</p>
            )}
            <ul className="space-y-4">
                {meals.map((meal) => (
                    <li key={meal.idMeal} className="p-4 hover:bg-gray-100 rounded-lg shadow-md border border-gray-200">
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    );
}