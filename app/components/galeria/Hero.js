import React from 'react'

function Hero({title}) {
  return (
    <div className="bg-[url(/images/hero.png)] bg-cover flex items-center justify-center text-white bg-no-repeat md:h-[400px] bg-bottom pb-20 ">
    <h1>{title}</h1>        
    </div>
  )
}

export default Hero