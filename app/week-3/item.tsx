import React from 'react';

interface ItemProps {
    name: string;
    quantity: number;
    category: string;
}

export default function Item({ name, quantity, category }: ItemProps) {
    return (
        <li className="shadow-md rounded-lg p-4 flex justify-between items-center">
            <div>
                <h2 className="text-lg">{name}</h2>
                <p className="text-gray-400">Category: {category}</p>
            </div>
            <span className="bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-full">
        Qty: {quantity}
      </span>
        </li>
    );
}