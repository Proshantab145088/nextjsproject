import React from 'react'
import { Poppins } from "next/font/google";
import Image from 'next/image'
import dhoni from '../assets/images/dhoni.jpeg'

const poppins = Poppins({
  subsets: ["latin"],
  weight: '400',
  display: 'swap',
});
const page = () => {
  
  
  return (
    <div className={poppins.className}>
      <h1>Hello World</h1>
      <Image src={dhoni} alt="dhoni" width={402} height={402} />
    </div>
  )
}

export default page