'use client'
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const UserContext = createContext()

const ContextApi = ({children}) => {
 const [dataApi, setDataApi] = useState([])
 useEffect(()=>{
  const getData = async () => {
   const data = await axios.get('https://dummyjson.com/products')
   setDataApi(data.data.products)
 }
 getData()
},
 [])
 console.log(dataApi);
 
  return (
    
   <UserContext.Provider value={dataApi}>
    {children}
   </UserContext.Provider>
  )
}

export default ContextApi