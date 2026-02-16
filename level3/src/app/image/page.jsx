import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Image
      src={'/globe.svg'}
        width={500}
        height={500}
      />
    </div>
  )
}

export default page
