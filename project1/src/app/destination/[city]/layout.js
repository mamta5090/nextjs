'use client'
import React from 'react'
import info from './@info/page.jsx'

const layout = ({children}) => {
  return (
    <div className="flex">
       
      {children}
       {info}
    </div>
  )
}

export default layout
