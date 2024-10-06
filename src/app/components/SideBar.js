'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = ({ children }) => {
    const pathname = usePathname();

    return (
        <div 
        className="flex"
        // style={{backgroundColor:'pink'}}
        >
            <nav 
            className="bg-gray-800 w-64 min-h-screen p-4 flex flex-col space-y-4"
            >
                <Link href="/" className={`text-white hover:text-gray-300 transition ${pathname === '/' ? 'font-bold' : ''}`}>
                    Home
                </Link>
                <Link href="/about" className={`text-white hover:text-gray-300 transition ${pathname === '/about' ? 'font-bold' : ''}`}>
                    Preview
                </Link>
                <Link href="/profile" className={`text-white hover:text-gray-300 transition ${pathname === '/profile' ? 'font-bold' : ''}`}>
                    Profile
                </Link>
                <Link href="/settings" className={`text-white hover:text-gray-300 transition ${pathname === '/settings' ? 'text-blue-400 font-bold' : ''}`}>
                    Settings
                </Link>
            </nav>

            <main className="flex-grow p-4">
                {children}
            </main>
        </div>
    );
};

export default SideBar;
