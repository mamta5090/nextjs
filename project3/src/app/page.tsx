'use client'
import React, { useEffect } from 'react'

const page =async () => {
//SSR
  // let repsonse = fetch('http://localhost:3000/api/user',{
  //   cache:'no-store'
  // })
  // console.log(repsonse)
  // let data=await response.json()
  // console.log(data)


//SSG
  // let response=await fetch('http://localhost:3000/api/user',{
  //   cache:'force-cache'
  // })
  // let data=response.json()
  // console.log(data)

//ISR

// let response=await fetch("http://localhost:3000/api/user",{
//   cache:{revalidate:10}
// })


//CSR
const handleApi=async()=>{
  let response=await fetch('/api/user')
  let data=await response.json()
  console.log(data)
}
useEffect(()=>{
  handleApi()
},[])

  return (
    <div>
      <h1>Data Loaded....</h1>
    </div>
  )
}

export default page
