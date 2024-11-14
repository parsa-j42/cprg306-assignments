import Link from "next/link";

export default function Home() {
    return (
        <main className="container mx-auto py-8 flex flex-col items-center">
            <h1 className="mb-10">CPRG 306: Web Development 2 - Assignments</h1>
            <Link id="week-2" href="/week-2" className="text-orange-400 hover:text-red-400">
                Go to Week 2 Page
            </Link>
            <Link id="week-3" href="/week-3" className="text-orange-400 hover:text-red-400">
                Go to Week 3 Page
            </Link>
            <Link id="week-4" href="/week-4" className="text-orange-400 hover:text-red-400">
                Go to Week 4 Page
            </Link>
            <Link id="week-5" href="/week-5" className="text-orange-400 hover:text-red-400">
                Go to Week 5 Page
            </Link>
            <Link id="week-6" href="/week-6" className="text-orange-400 hover:text-red-400">
                Go to Week 6 Page
            </Link>
            <Link id="week-7" href="/week-7" className="text-orange-400 hover:text-red-400">
                Go to Week 7 Page
            </Link>
            <Link id="week-8" href="/week-8" className="text-orange-400 hover:text-red-400">
                Go to Week 8 Page
            </Link>
            <Link id="week-9" href="/week-9" className="text-orange-400 hover:text-red-400">
                Go to Week 9 Page
            </Link>
        </main>
    );
}