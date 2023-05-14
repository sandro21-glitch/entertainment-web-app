import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <section className="mx-auto overflow-hidden flex items-center justify-center h-screen flex-col ">
        <div className="text-center">
          <h1 className='text-white text-[5rem] md:Ltext-[10rem]'>404</h1>
          <p className='text-white text-lg md:text-3xl mb-5'>Sorry, that page can't be found</p>
          <Link to='/' className='text-white text-md md:text-xl bg-[#5A6A90] px-3 py-1 rounded-md uppercase'>Home</Link>
        </div>
      </section>
  )
}

export default Error
