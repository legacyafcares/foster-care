import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import Reviews from '../components/Reviews'
import HomeContact from '../components/HomeContact'
import Subscribe from '../components/Subscribe'
import ContactForm from '../components/ContactForm'

const Home = () => {
  return (
    <section>
      <Navbar/>
      <Hero/>
      <SectionTwo/>
      <SectionThree/>
      <HomeContact/>
      <Reviews/>
      <ContactForm/>
      <Subscribe/>
    </section>
  )
}

export default Home
