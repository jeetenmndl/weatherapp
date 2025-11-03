import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <header className=' shadow'>
        <div className='flex justify-between items-center px-20 py-4'>

            <h2 className='text-3xl text-purple-500 font-bold'>WeatherApp</h2>

            <nav className='flex gap-8'>
                <div className='flex gap-8 items-center'>
                    <a className='text-lg ' href="/about">About</a>
                    <a className='text-lg' href="/contact">Contact</a>
                </div>

                <Button text="Show Weather" />
            </nav>

        </div>
    </header>
  )
}

export default Navbar