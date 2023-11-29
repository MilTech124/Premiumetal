import React from 'react'
import Hero from './components/home/Hero'
import ItemsSmallContainer from './components/home/ItemsSmallContainer'
import HomeRealization from './components/home/HomeRealization'
import AboutPremium from './components/home/AboutPremium'
import Colours from './components/home/Colours'

function page() {
  return (
    <div>
      <Hero />
      <ItemsSmallContainer />
      <HomeRealization />
      <AboutPremium />
      <Colours />
      
    </div>
  )
}

export default page