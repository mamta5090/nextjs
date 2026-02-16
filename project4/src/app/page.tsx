'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

const page = () => {
  const {data}=useSession()
  console.log(data)
  return (
    <div className='min-h-screen flex flex  bg-black '>
      {data && <div>
        {data.user.image && <div>
          <Image/></div>}</div>}
      {!data && <div>Loading....</div>}
    </div>
  )
}

export default page
