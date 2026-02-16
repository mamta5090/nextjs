'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const router=useRouter();
  const destination=[
    'Paris',
    'Tokyo',
    'New York',
    'London',
  ]
  return (
     <div className="text-white mt-[100px] w-[50%]">
      {destination.map((d,place)=>(
        <div key={place} className="bg-white text-black m-4 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" onClick={()=>router.push(`/destination/${d.toLowerCase()}`)}>
          {d}
        </div>
      ))}
    </div>
  )
}

export default page
