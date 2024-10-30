"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

interface Item {
    id: string;
    name: string;
    quantity: number;
    category: string;
}

export default function Page() {
    const [items, setItems] = useState<Item[]>(itemsData);

    const handleAddItem = (item: Item) => {
        setItems([...items, item]);
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
                        <ItemList items={items}/>
                    </div>
                </div>
            </main>
        </>
    );
}