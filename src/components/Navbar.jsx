import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-end bg-gray-800 p-4">
      <ul className="flex space-x-4 list-none ">
      <li><Link href="/" className="text-white">Home</Link></li>
        <li><Link href="/contact" className="text-white">Contact</Link></li>
        <li><Link href="/about" className="text-white">About</Link></li>
        <li><Link href="/product" className="text-white">Product</Link></li>
        <li><Link href="/privacy" className="text-white">Privacy</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;