'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';
import FriendsChatLogo from './FriendsChatLogo';

const Navbar = () => {
    const { user } = useUser();
    // console.log(user?.id);


    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);


    return (
        <nav className="bg-gray-900 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="">
                    <FriendsChatLogo width='50%' />
                </Link>

                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                <div className={`md:flex md:items-center space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <Link href="/" className="text-gray-400 hover:text-blue-600">Home</Link>
                    <Link href="/forums" className="text-gray-400 hover:text-blue-600">Forums</Link>
                    <Link href="/chatapp" className="text-gray-400 hover:text-blue-600">UserChat</Link>
                    <Link href="/contact" className="flex items-center justify-center">
                        <UserButton />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
