import React from 'react'
import AutomationAgriculture from '../../components/AutomationAgriculture/AutomationAgriculture'
import MainCarousel from '../../components/Carousel/MainCarousel'
import MainNavbar from '../../components/Navbar/MainNavbar'
import WhatWeOffer from '../../components/WhatWeOffer/WhatWeOffer'

const Homepage = () => {
  return (
    <>
      <MainNavbar/>

      <AutomationAgriculture/>
      <hr />
      <MainCarousel/>
      <WhatWeOffer/>
    </>
  )
}

export default Homepage
