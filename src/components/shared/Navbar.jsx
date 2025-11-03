import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <header className=' shadow'>
      <div className='flex justify-between items-center px-4 md:px-8 lg:px-20 py-4'>

        <a href="/">
          <h2 className='text-2xl lg:text-3xl text-purple-500 font-bold'>WeatherApp</h2>
        </a>

        <nav className='flex gap-8'>
          <div className='hidden lg:flex gap-8 items-center'>
            <a className='text-lg ' href="/about">About</a>
            <a className='text-lg' href="/contact">Contact</a>
          </div>

          <a href="/weather">
          <Button text="Show Weather" />
          </a>
        </nav>

      </div>
    </header>
  )
}

export default Navbar