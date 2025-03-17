'use client'
import { UserContext } from '@/components/ContextApi'
import ProductItem from '@/components/ProductItem'
import Image from 'next/image'
import React, { useContext } from 'react'

const page = () => {
  const user = useContext(UserContext)
  // console.log(user);
  return (
    <div className='flex flex-wrap gap-4 justify-evenly'>
      {user.map((item, index)=> 
      <div className='border-2 rounded-lg border-gray-200 p-3' key={index}>
        <h1>ID: {item.id}</h1>
        <h1>Title: {item.title}</h1>
        <h1>Category: {item.category}</h1>
        <h1>Price: ${item.price}</h1>
        <Image src={item.thumbnail} alt={item.title} width={200} height={200} /> 
      </div>
        )}

      
    </div>
  )
}

export default page