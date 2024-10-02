import React from 'react';
import ItemList from './item-list';

export default function Page() {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-center">Shopping List</h1>
            <ItemList />
        </main>
    );
}