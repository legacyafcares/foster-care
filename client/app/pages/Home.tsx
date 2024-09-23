import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import Reviews from '../components/Reviews'
import HomeContact from '../components/HomeContact'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <section>
      <Navbar/>
      <Hero/>
      <SectionTwo/>
      <SectionThree/>
      <Reviews/>
      <HomeContact/>
      <Subscribe/>
      <Footer/>
    </section>
  )
}

export default Home
