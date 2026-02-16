'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Nav = () => {
    const pathname=usePathname();
  return (
    <div className='bg-white fixed w-full flex  p-4 flex justify-between items-center px-[20px] '>
      <div className='text-black font-bold text-2xl'>
      🌍Travel Guide
      </div>
      <div>
      <ul className='flex ]'>
       <Link href={'/'} className={pathname=="/"? "text-blue-500":""}><li className='px-[15px]'>Home</li></Link>
       <Link href={'/destination'} className={pathname=="/destination"? "text-blue-500":""}> <li  className='px-[15px]'>Destination</li></Link>
       <Link href={'/contact'} className={pathname=="/contact"? "text-blue-500":""}><li  className='px-[15px]'>Contact</li></Link> 
       
        
        </ul></div>
    </div>
  )
}

export default Nav
