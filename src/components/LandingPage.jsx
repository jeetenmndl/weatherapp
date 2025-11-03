import React from 'react'
import Navbar from './shared/Navbar'
import Hero from './shared/Hero'
import Features from './shared/Features'
import Contact from './shared/Contact'

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Features />
        <Contact />
    </div>
  )
}

export default LandingPage