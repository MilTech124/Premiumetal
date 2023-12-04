"use client"
import {useState} from 'react'
import Image from 'next/image'

function ItemRealization({src}) {
  const [show, setShow] = useState(false)

  const HoverImage = ({src}) => (
    <div className="fixed top-0  inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <Image src={src} layout='fill' objectFit='cover' className='cursor-zoom-out' />
    </div>
  )

  return (
    <div   onClick={() => setShow(!show)} >
      <Image src={src} width={400} height={300} className="rounded-md cursor-zoom-in shadow-md " />
      {show && <HoverImage src={src} />}
    </div>
  )
}

export default ItemRealization