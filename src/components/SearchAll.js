import React from 'react'
import Search from './Search'
import { AiFillPlayCircle } from 'react-icons/ai'
import { useMoviesContext } from '../context/movieContext'
const SearchAll = ({location}) => {

  const {searchAll,addBookmark,value} = useMoviesContext()
  return (
    <>
      <h2 className='text-2xl md:text-4xl text-white capitalize mb-5'>
        {value ? `results for '${value}'` 
        : 
        location.pathname.slice(1,location.pathname.length)}
    </h2>
    <article className='grid place-items-start grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-x-[2.5rem] md:gap-y-[2.5rem]'>
      {searchAll.filter((movie) => {
        return value?.toLowerCase() === '' ? movie : movie.title.toLowerCase().includes(value)
      }).map((movie) => {
        const {id,title,category,year,rating,isBookmarked,thumbnail:{regular:{large}}} = movie
        return (
          <div key={id} className='overflow-hidden'>
          <div className='relative mb-1 group/rec max-w-[320px] rounded-xl overflow-hidden transition-all ease-in duration-200'>
              <img src={large} alt="recomended movie" className='rounded-2xl w-full block 
              transition-all ease-in duration-200 group-hover/rec:scale-105'/>
              {/* bookmark */}
              <div onClick={() => addBookmark(id)} className={`${isBookmarked ? 'fill-white' : 'fill-none'} z-50 group/bookmark absolute top-3 right-3 text-white w-[2rem] h-[2rem] bg-bookmarkBg cursor-pointer rounded-full flex items-center justify-center
              hover:bg-white transition-colors ease-in`}>
                  <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg" ><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" strokeWidth="1.5" 
                  className='group-hover/bookmark:stroke-[#10141E] transition-colors ease-in'></path></svg>
              </div>
              {/* play button */}
              <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-transparentBlack flex items-center justify-center text-white -z-20
              group-hover/rec:z-20 transition-all ease-in duration-0">
                  <div className="cursor-pointer text-lg md:text-2xl flex items-center justify-center gap-[.3rem] bg-playButton px-2 py-[.2rem] rounded-full">
                      <AiFillPlayCircle className='inline-block' />
                      <span className='text-xs lg:text-md capitalize font-semibold'>Play</span>
                  </div>
              </div>
            </div>
              <div>
                <div className='flex items-center text-paraColor' >
                  <p className='text-xs md:text-base'>{year}</p>
                  <span className='after:content-["•"] mx-2'></span>
                  <p className='text-xs md:text-base'>{category}</p>
                  <p className='flex items-center'>
                      <span className='mx-2'><svg className="pl-1 text-base" width="1em" height="1em" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z" fill="#FFF" opacity=".75"></path></svg></span>
                      <span className='capitalize text-xs md:text-md lg:text-lg'>{rating}</span>
                  </p>
                </div>
                <h6 className='text-sm text-white md:text-lg lg:text-xl font-semibold'>{title}</h6>
            </div>
        </div>
        )
      })}
    </article>
    </>
  )
}

export default SearchAll
