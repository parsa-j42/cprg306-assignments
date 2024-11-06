"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

interface Item {
    id: string;
    name: string;
    quantity: number;
    category: string;
}

export default function Page() {
    const [items, setItems] = useState<Item[]>(itemsData);
    const [selectedItemName, setSelectedItemName] = useState<string | null>(null);

    const handleAddItem = (item: Item) => {
        setItems([...items, item]);
    };

    const handleItemSelect = (item: Item) => {
        const cleanName = item.name
            .split(',')[0] // remve anything after comma
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
            .trim(); // remove extra spaces
        setSelectedItemName(cleanName);
    };

    return (
        <>
            <main className="container mx-auto px-4 py-8">
                <h1 className="mb-6 text-center">Shopping List</h1>
                <div className="flex flex-col md:flex-row justify-center items-start gap-8">
                    <div className="w-full md:w-1/3 md:sticky md:top-4">
                        <NewItem onAddItem={handleAddItem}/>
                    </div>
                    <div className="w-full md:w-2/3">
                        <ItemList items={items} onItemSelect={handleItemSelect}/>
                    </div>
                    <div className="hidden md:block md:w-1/3 md:sticky md:top-4">
                        <MealIdeas ingredient={selectedItemName}/>
                    </div>
                </div>
            </main>
        </>
    );
}