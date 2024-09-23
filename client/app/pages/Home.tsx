import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import Reviews from '../components/Reviews'

const Home = () => {
  return (
    <section>
      <Navbar/>
      <Hero/>
      <SectionTwo/>
      <SectionThree/>
      <Reviews/>
    </section>
  )
}

export default Home
