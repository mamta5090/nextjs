'use client'; // only if using App Router

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              MyLogo
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="#" className="hover:text-gray-300">Courses</Link>
            <Link href="#" className="hover:text-gray-300">About</Link>
            <Link href="#" className="hover:text-gray-300">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-2">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/courses" className="hover:text-gray-300">Courses</Link>
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
