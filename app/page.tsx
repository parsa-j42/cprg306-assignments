import Link from "next/link";

export default function Home() {
    return (
        <main className="container mx-auto py-8 flex flex-col items-center">
            <h1 className="mb-10">CPRG 306: Web Development 2 - Assignments</h1>
            <Link id="week-2" href="/week-2" className="text-orange-400 hover:text-red-400 mb-4">
                Go to Week 2 Page
            </Link>
            <Link id="week-3" href="/week-3" className="text-orange-400 hover:text-red-400">
                Go to Week 3 Page
            </Link>
        </main>
    );
}