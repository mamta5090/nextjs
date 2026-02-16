'use client'
import { useParams } from 'next/navigation';
import React from 'react'

const page = ({params}) => {
const city=useParams().city;
  return (
    <div className='flex justify-center items-center h-screen text-white font-bold text-[30px]'>
      {city} this is a beautiful city
    </div>
  )
}

export default page
