import React from 'react'
import Hero from './components/home/Hero'
import ItemsSmallContainer from './components/home/ItemsSmallContainer'
import HomeRealization from './components/home/HomeRealization'

function page() {
  return (
    <div>
      <Hero />
      <ItemsSmallContainer />
      <HomeRealization />
    </div>
  )
}

export default page