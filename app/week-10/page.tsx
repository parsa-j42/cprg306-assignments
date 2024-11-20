"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import { IconBrandGithub } from '@tabler/icons-react';

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleGitHubSignIn = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Error signing in with GitHub:", error);
        }
    };

    // const handleGoogleSignIn = async () => {
    //     try {
    //         await googleSignIn();
    //     } catch (error) {
    //         console.error("Error signing in with Google:", error);
    //     }
    // };

    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="p-8 rounded-xl bg-white shadow-xl w-full max-w-md">
                {user ? (
                    <div className="space-y-6">
                        <div className="text-center">
                            <h1 className="text-2xl text-black font-bold mb-2">Welcome!</h1>
                            <p className="text-gray-600">
                                Signed in as {user.displayName} ({user.email})
                            </p>
                        </div>

                        <Link
                            href="/week-10/shopping-list"
                            className="no-underline block w-full px-4 py-2 text-center bg-blue-100 text-blue-900 rounded-xl hover:bg-blue-200 transition-colors shadow-md"
                        >
                            Go to Shopping List
                        </Link>

                        <button
                            onClick={handleSignOut}
                            className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors shadow-md"
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div className="text-center">
                            <h1 className="text-2xl text-black font-bold mb-2">Shopping List App</h1>
                            <p className="text-gray-600">
                                Please sign in to access your shopping list
                            </p>
                        </div>

                        <button
                            onClick={handleGitHubSignIn}
                            className="w-full px-4 py-2 bg-blue-100 text-blue-900 rounded-xl hover:bg-blue-200 transition-colors shadow-md flex items-center justify-center gap-2"
                        >
                            <IconBrandGithub size={24}/>
                            <span>Sign in with GitHub</span>
                        </button>
                        {/*<button*/}
                        {/*    onClick={handleGoogleSignIn}*/}
                        {/*    className="w-full px-4 py-2 bg-blue-100 text-blue-900 rounded-xl hover:bg-blue-200 transition-colors shadow-md flex items-center justify-center gap-2"*/}
                        {/*>*/}
                        {/*    <IconBrandGoogle size={24}/>*/}
                        {/*    <span>Sign in with Google</span>*/}
                        {/*</button>*/}
                    </div>
                )}
            </div>
        </main>
    );
}