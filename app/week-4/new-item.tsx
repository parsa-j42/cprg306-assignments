"use client";

import React, { useState } from 'react';

export default function NewList() {
    const [quantity, setQuantity] = useState<number>(1);

    function increment() {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    function decrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="flex h-screen items-center justify-center pb-60">
            <div className="p-8 rounded-xl bg-white-lg shadow-xl">
                <p className="text-xl mb-4 text-black">Quantity: {quantity}</p>
                <div className="flex items-center justify-center space-x-4">
                    <button
                        onClick={decrement}
                        disabled={quantity === 1}
                        className="w-10 h-10 flex items-center justify-center shadow-md bg-blue-100 text-blue-900 hover:bg-blue-200 rounded-lg disabled:bg-gray-100 disabled:text-gray-100"
                    >
                        -
                    </button>
                    <span className="text-2xl font-bold text-black">{quantity}</span>
                    <button
                        onClick={increment}
                        disabled={quantity === 20}
                        className="w-10 h-10 flex items-center justify-center shadow-md bg-blue-100 text-blue-900 hover:bg-blue-200 rounded-lg disabled:bg-gray-100 disabled:text-gray-100"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}