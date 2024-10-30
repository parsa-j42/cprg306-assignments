"use client";

import { useState } from 'react';
import Item from './item';

interface ItemType {
    id: string;
    name: string;
    quantity: number;
    category: string;
}

interface GroupedItems {
    [key: string]: ItemType[];
}

interface ItemListProps {
    items: ItemType[];
}

export default function ItemList({ items }: ItemListProps) {
    const [sortBy, setSortBy] = useState<"name" | "category" | "grouped">("name");

    // sort
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else {
            return a.category.localeCompare(b.category);
        }
    });

    // group based on category, and sort both categories and items
    const groupedItems = sortedItems.reduce((acc: GroupedItems, item) => {
        const category = item.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(item);
        // by name
        acc[category].sort((a, b) => a.name.localeCompare(b.name));
        return acc;
    }, {});

    const sortedCategories = Object.keys(groupedItems).sort();

    return (
        <div className="max-w-xl mx-auto">
            <div className="flex gap-4 mb-4">
                <button
                    onClick={() => setSortBy("name")}
                    className={`px-4 py-2 rounded-md ${
                        sortBy === "name"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-700"
                    }`}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => setSortBy("category")}
                    className={`px-4 py-2 rounded-md ${
                        sortBy === "category"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-700"
                    }`}
                >
                    Sort by Category
                </button>
                <button
                    onClick={() => setSortBy("grouped")}
                    className={`px-4 py-2 rounded-md ${
                        sortBy === "grouped"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-700"
                    }`}
                >
                    Group by Category
                </button>
            </div>

            <div className="shadow-xl rounded-lg p-6 space-y-4">
                {/* If grouped*/}
                {sortBy === "grouped" ? (
                    sortedCategories.map((category) => (
                        <div key={category} className="mb-8">
                            <h2 className="text-xl font-semibold mb-4 capitalize">
                                {category}
                            </h2>
                            <div className="space-y-4">
                                {groupedItems[category].map((item: ItemType) => (
                                    <Item
                                        key={item.id}
                                        name={item.name}
                                        quantity={item.quantity}
                                        category={item.category}
                                    />
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    sortedItems.map((item: ItemType) => (
                        <Item
                            key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                        />
                    ))
                )}
            </div>
        </div>
    );
}