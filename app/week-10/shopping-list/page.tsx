"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { useUserAuth } from "@/app/week-10/_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

interface Item {
    id: string;
    name: string;
    quantity: number;
    category: string;
}

export default function Page() {
    const router = useRouter();
    const { user, firebaseSignOut } = useUserAuth();
    const userIsLoggedIn = !(user == null);
    const [items, setItems] = useState<Item[]>([]);
    const [selectedItemName, setSelectedItemName] = useState<string | null>(null);
    const [countdown, setCountdown] = useState(5);

    const loadItems = async () => {
        if (user) {
            try {
                const itemsList = await getItems(user.uid);
                setItems(itemsList);
            } catch (error) {
                console.error("Error loading items:", error);
            }
        }
    };

    const handleAddItem = async (newItem: Item) => {
        try {
            if (user) {
                const newItemId = await addItem(user.uid, newItem);
                setItems(prevItems => [...prevItems, { ...newItem, id: newItemId }]);
            }
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    useEffect(() => {
        loadItems();
    }, [user, loadItems]);

    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
            router.push('/week-10');
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    const handleItemSelect = (item: Item) => {
        const cleanName = item.name
            .split(',')[0] // remove anything after comma
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
            .trim(); // remove extra spaces
        setSelectedItemName(cleanName);
    };

    useEffect(() => {
        if (!userIsLoggedIn) {
            const timer = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        router.push('/week-10');
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [userIsLoggedIn, router]);

    return (
        <>
            {userIsLoggedIn ? (
                <main className="container mx-auto px-4 py-8">
                    <div className="absolute top-4 left-4">
                        <div className="p-4 rounded-xl bg-white shadow-xl">
                            <div className="flex items-center space-x-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{user?.displayName}</p>
                                    <p className="text-sm text-gray-600">{user?.email}</p>
                                </div>
                                <button
                                    onClick={handleSignOut}
                                    className="px-3 py-1.5 text-sm bg-blue-100 text-blue-900 rounded-lg hover:bg-blue-200 transition-colors shadow-sm"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>

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
            ) : (
                <div className="min-h-screen flex items-center justify-center bg-gray-50">
                    <div className="p-8 rounded-xl bg-white shadow-xl text-center">
                        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
                        <p className="text-gray-600 mb-4">Please sign in to view the shopping list.</p>
                        <p className="bg-gradient-to-r from-blue-400 to-blue-900 text-transparent bg-clip-text font-semibold border-blue-100 border-2 rounded-xl p-2">
                            Redirecting to login page in {countdown} seconds...
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}