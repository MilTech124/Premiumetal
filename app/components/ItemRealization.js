import React from 'react'
import Image from 'next/image'

function ItemRealization({src}) {
  return (
    <Image src={src} width={400} height={300} />
  )
}

export default ItemRealization