import React from 'react'
import CTA from '../Components/CTA'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import SD1 from '../Components/SD1'
import SD2 from '../Components/SD2'
import ServiceArea from '../Components/ServiceArea'
import Services from '../Components/Services'
import Work from '../Components/Work'

function Home() {
  return (
    <div>
        <Hero/>
        <Work/>
        <SD1/>
        <Services/>
        <SD2/>
        <CTA/>
        <ServiceArea/>
        <Footer/>
    </div>
  )
}

export default Home