'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  
  return (
    <nav className="flex justify-end bg-gray-800 p-4">
      <ul className="flex space-x-4 list-none ">
      <li><Link href="/" className={`px-4 py-2 rounded-md transition-all ${
        pathname === '/' ? "bg-blue-600 text-white" : "text-blue-200 hover:text-black hover:bg-gray-200"
      }`}>Home</Link></li>
        <li><Link href="/contact" className={`px-4 py-2 rounded-md transition-all ${
        pathname === '/contact' ? "bg-blue-600 text-white" : "text-blue-200 hover:text-black hover:bg-gray-200"
      }`}>Contact</Link></li>
        <li><Link href="/about" className={`px-4 py-2 rounded-md transition-all ${
        pathname === '/about' ? "bg-blue-600 text-white" : "text-blue-200 hover:text-black hover:bg-gray-200"
      }`}>About</Link></li>
        <li><Link href="/product" className={`px-4 py-2 rounded-md transition-all ${
        pathname === '/product' ? "bg-blue-600 text-white" : "text-blue-200 hover:text-black hover:bg-gray-200"
      }`}>Product</Link></li>
        <li><Link href="/privacy" className={`px-4 py-2 rounded-md transition-all ${
        pathname === '/privacy' ? "bg-blue-600 text-white" : "text-blue-200 hover:text-black hover:bg-gray-200"
      }`}>Privacy</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;