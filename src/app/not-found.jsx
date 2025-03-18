"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();
  const handleButton = () => {
    alert('Product Returned!');
    router.push('/product')
    
    
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="text-blue-500 hover:underline">Go back to Home</Link>
      <button className='text-blue-600 hover:bg-amber-400 border-2 rounded-lg px-3 py-1 mt-2' onClick={handleButton}>Return Product</button>
    </div>
  );
}

export default NotFound;