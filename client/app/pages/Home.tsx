import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'

const Home = () => {
  return (
    <section>
      <Navbar/>
      <Hero/>
      <SectionTwo/>
      <SectionThree/>
    </section>
  )
}

export default Home
