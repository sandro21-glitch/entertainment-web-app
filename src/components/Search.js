import React, {useEffect, useState} from 'react'
import { useMoviesContext } from '../context/movieContext'
import { useLocation } from 'react-router-dom'
const Search = () => {
    
    const {setValue} = useMoviesContext()
    const location = useLocation()
    useEffect(() => {
        setValue('')
    },[location])

  return (
    <div className='mb-10'>
        <form className="flex items-center">   
          <label htmlFor='simple-search' className="sr-only"></label>
          <div className="relative w-full">
              <div className="text-4xl absolute inset-y-0 left-0 flex items-center pl-2 md:pl-1 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 md:w-7 h-5 md:h-7 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <input onChange={(e) => setValue(e.target.value)} type="text" id="simple-search" className="text-white outline-none bg-transparent border-b border-transparent  focus:border-gray-300 text-sm md:text-lg lg:text-2xl  block w-full pl-10 p-2.5 " placeholder={`Search for ${location.pathname === '/' ? 'movies or TV series ' : location.pathname.slice(1,location.pathname.length)}`} required />
          </div>
      </form>
    </div>
  )
}

export default Search
