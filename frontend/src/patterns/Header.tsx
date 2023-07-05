'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Logo } from '../assets/icons/Logo';
import { Menu } from '../assets/icons/Menu';

import { body } from '@/_data/screens/home/pt-br';

const { nav_links, auth_links } = body;

function Navbar() {
    return (
        <nav>
            <ul className="flex flex-col gap-4 md:flex-row">
                {nav_links.map((link, index) => (
                    <li
                        key={index}
                        className="px-3 py-2 font-medium transition-all duration-200 rounded-md cursor-pointer hover:text-violet-300 hover:bg-neutral-600/30 hover:backdrop-blur-xl"
                    >
                        <a href={link.source}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

function AuthLinks() {
    return (
        <div className="flex flex-col items-start gap-3 md:items-center md:flex-row">
            {auth_links.map((link, index) => (
                <Link
                    key={index}
                    href={link.source}
                    className="px-3 py-2 font-medium transition-all duration-200 rounded-md hover:bg-neutral-600/40 bg-neutral-600/20 backdrop-blur-xl"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}

export function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <div className="sticky top-0 left-0 flex w-full font-sans bg-neutral-900/20 backdrop-blur-xl">
            <header className="flex items-center justify-between w-full max-w-6xl px-6 py-6 mx-auto">
                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="transition-all duration-300 hover:opacity-80"
                        title="Spinit Finance"
                    >
                        <Logo />
                    </Link>

                    <div className="hidden md:block">
                        <Navbar />
                    </div>

                    {isOpenMenu && (
                        <div className="fixed inset-0 block w-full h-screen md:hidden bg-zinc-900/90">
                            <div className="absolute right-0 flex flex-col w-10/12 h-full gap-12 p-6 shadow-lg shadow-neutral-200/5 bg-neutral-900 md:hidden">
                                <div className="flex items-center justify-between">
                                    <Logo />

                                    <button
                                        type="button"
                                        aria-label="Menu"
                                        onClick={() => setIsOpenMenu(false)}
                                    >
                                        <Menu />
                                    </button>
                                </div>

                                <Navbar />

                                <AuthLinks />
                            </div>
                        </div>
                    )}
                </div>

                <div className="hidden md:block">
                    <AuthLinks />
                </div>

                <button
                    type="button"
                    className="flex items-center justify-center w-8 h-8 p-1 bg-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent md:hidden"
                    onClick={() => setIsOpenMenu(true)}
                >
                    <span className="sr-only">Menu</span>
                    <Menu />
                </button>
            </header>
        </div>
    );
}
