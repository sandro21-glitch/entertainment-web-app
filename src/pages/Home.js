import React from 'react'
import Trending from '../components/Trending'
import Popular from '../components/Popular'
import Search from '../components/Search'
import SearchAll from '../components/SearchAll'
import { useLocation } from 'react-router-dom'
import { useMoviesContext } from '../context/movieContext'
const Home = () => {

  const location = useLocation()
  const { value } = useMoviesContext()

  if(value) {
    return <main className='mx-auto flex flex-col py-6 px-4 md:m-6 md:px-0 md:pt-0  '>
        <Search location={location} />
        <SearchAll />
    </main>
  }

  return (
    <main className='mx-auto flex flex-col py-6 px-4 md:m-6 md:px-0 md:pt-0 ml-0 lg:ml-32'>
        <Search location={location} />
        <Trending />
        <Popular />
    </main>
  )
}

export default Home
