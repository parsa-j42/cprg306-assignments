import React from 'react';
import NewItem from './new-item';

export default function Page() {
    return (
        <main className="flex justify-center items-center min-h-screen bg-gray-100">
            <NewItem />
        </main>
    );
}