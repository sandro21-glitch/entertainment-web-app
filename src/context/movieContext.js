import React, { useEffect,useReducer, useState } from 'react'
import { useContext } from 'react'
import reducer from '../reducer/reducer'
import dataContent from '../data.json'
import { useLocation } from 'react-router-dom'
import Bookmarks from '../pages/Bookmarks'
const MoviesContext = React.createContext()

const initialState = {
  error:false,
  loading:false,
  trendingMovies:[],
  popularMovies:[],
}

export const MoviesProvider = ({children}) => {
  const [state,dispatch] = useReducer(reducer,initialState)
  const [data,setData] = useState(dataContent)
  const [movies,setMovies] = useState([])
  const [series,setSeries] = useState([])
  const [value,setValue] = useState('')
  const [bookmarks,setBookmarks] = useState([])
  const [searchAll,setSearchAll] = useState([])

  useEffect(() => {
    // trending movies filter 
    const trendingMovies = data.filter(movie => movie.isTrending)
    dispatch({ type: 'TRENDING', payload: trendingMovies })
    // recommended movies filter
    const recomendedMovies = data.filter((movie) => movie.isRecommended)
    dispatch({ type: 'RECOMENDED', payload:recomendedMovies })
    // only movies
    const onlyMovies = data.filter((movie) => movie.category === 'Movie')
    setMovies(onlyMovies)
    // only series
    const onlySeries = data.filter((movie) => movie.category === 'TV')
    setSeries(onlySeries)
    // search all
    setSearchAll([...data])
  }, [data])
  
  // add movie to bookmarks
  const addBookmark = (id) => {
    const movieToToggle = data.find((movie) => movie.id === id);
    const isBookmarked = bookmarks.some((movie) => movie.id === id);

  if (isBookmarked) {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.filter((movie) => movie.id !== id)
    );
    setData((prevData) =>
      prevData.map((movie) =>
        movie.id === id ? { ...movie, isBookmarked: false } : movie
      )
    );
  }else {
    const bookmarked = { ...movieToToggle, isBookmarked: true };
    setBookmarks([...bookmarks, bookmarked]);
    setData((prevData) =>
      prevData.map((movie) =>
        movie.id === id ? { ...movie, isBookmarked: true } : movie
      )
    );
  }
  };

  // remove movie form bookmarks
  const removeBookmark = (id) => {
    setBookmarks(bookmarks.filter((movie) => movie.id !== id));
    setData(
      data.map((movie) => (movie.id === id ? { ...movie, isBookmarked: false } : movie))
    );
  }
  
  return (
    <MoviesContext.Provider 
    value={{ ...state,
            movies,
            series,
            value,
            setValue,
            bookmarks,
            addBookmark,
            removeBookmark,
            searchAll,
          }}>
        {children}
      </MoviesContext.Provider>
  )
}

export const useMoviesContext = () => {
    return useContext(MoviesContext)
}
  