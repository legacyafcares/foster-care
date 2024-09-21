import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-full'>
      <video
        src={"/hero.mp4" || '/hero-mobile.mp4'}
        autoPlay
        loop
        muted
        className='w-screen h-screen object-cover' // Ensures the video covers the container
      />

      {/* Overlay with a dark gradient */}
      <div className='absolute top-0 left-0 w-full h-full lg:bg-gradient-to-l lg:from-black/90 lg:to-black/50 bg-gradient-to-b from-black/50 to-black/90'/>
      <div className='absolute lg:top-[200px] lg:ml-[600px] top-[120px] grid place-items-start p-4 w-fit text-white'>
        <h1 className='p-3 lg:text-6xl text-3xl font-extrabold'>Compassionate care for<br /> your loved ones</h1>
        <p className='lg:text-xl p-3'>At our foster care service, we prioritize the well-being and happiness of the elderly. Join us in creating a nurturing environment that feels like home.</p>
        <button className='p-2 border rounded-md mx-auto mt-4'>Learn More</button>
      </div>
    </div>
  )
}

export default Hero
