"use client";

import React, { useState } from 'react';

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const item = { name, quantity, category };
        console.log(item);
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    const categories = [
        "Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods",
        "Dry Goods", "Beverages", "Snacks", "Household", "Other"
    ];

    return (
        <div className="flex h-screen items-center justify-center pb-60">
            <form onSubmit={handleSubmit} className="p-8 rounded-xl bg-white shadow-xl">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-4">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 py-1.5 px-2.5 block w-full rounded-xl border-2 border-blue-100 shadow-sm text-black focus:border-blue-300 focus:outline-none"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-4">Quantity</label>
                    <div className="flex items-center space-x-4">
                        <button
                            type="button"
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-10 h-10 flex items-center justify-center shadow-md bg-blue-100 text-blue-900 hover:bg-blue-200 rounded-lg disabled:bg-gray-100 disabled:text-gray-100"
                            disabled={quantity === 1}
                        >
                            -
                        </button>
                        <span className="text-2xl font-bold text-black">{quantity}</span>
                        <button
                            type="button"
                            onClick={() => setQuantity(Math.min(20, quantity + 1))}
                            className="w-10 h-10 flex items-center justify-center shadow-md bg-blue-100 text-blue-900 hover:bg-blue-200 rounded-md disabled:bg-gray-100 disabled:text-gray-100"
                            disabled={quantity === 20}
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-4">Category</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="block appearance-none shadow-sm w-full bg-white border-2 border-blue-100 text-gray-700 py-1.5 px-2.5 pr-8 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-200"
                    >
                        {categories.map((cat) => (
                            <option key={cat.toLowerCase()} value={cat.toLowerCase()} className="hover:bg-blue-100">
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="w-1/2 px-3.5 py-2 shadow-md bg-blue-100 text-blue-900 rounded-xl hover:bg-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-200"
                    >
                        Add Item
                    </button>
                </div>
            </form>
        </div>
    );
}