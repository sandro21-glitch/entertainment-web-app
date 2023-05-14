import React from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'

const HeroTrendingMovies = ({id,category,year,title,rating,thumbnail,addBookmark,isBookmarked}) => {
  return (
        <div className='swiper-slide h-fit w-[270px] md:w-[450px] relative rounded-xl overflow-hidden group/res transition-all ease-in duration-200'>
            <img src={thumbnail.trending.small} alt="poster" className='block w-full object-cover group-hover/res:scale-110 transition-all ease-in duration-200' />
            <div className="absolute z-50 bottom-3 left-3 text-white">
                <div className="flex items-center">
                    <p className='text-xs md:text-md lg:text-lg'>{year}</p>
                    <span className='after:content-["•"] mx-2'></span>
                    <p className='text-xs md:text-md lg:text-lg'>{rating}</p>
                    <p className='flex items-center'>
                        <span className='mx-2'><svg className="pl-1 text-base" width="1em" height="1em" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z" fill="#FFF" opacity=".75"></path></svg></span>
                        <span className='capitalize text-xs md:text-md lg:text-lg'>{category}</span>
                    </p>
                </div>
                <h6 className='text-sm md:text-lg lg:text-xl font-bold'>{title}</h6>
            </div>
            {/* bookmark */}
            <div onClick={() => addBookmark(id)} className={`${isBookmarked ? 'fill-white' : 'fill-none'} z-50 group/bookmark absolute top-3 right-3 text-white w-[2rem] h-[2rem] bg-bookmarkBg cursor-pointer rounded-full flex items-center justify-center
            hover:bg-white transition-colors ease-in`}>
                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg" ><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" strokeWidth="1.5"
                className='group-hover/bookmark:stroke-[#10141E] transition-colors ease-in'></path></svg>
            </div>
            {/* play button */}
            <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-transparentBlack flex items-center justify-center text-white -z-20
            group-hover/res:z-10 transition-all ease-in duration-0">
                <div className="cursor-pointer text-lg md:text-3xl flex items-center justify-center gap-2 bg-playButton px-2 py-[.2rem] rounded-full">
                      <AiFillPlayCircle className='inline-block' />
                      <span className='text-xs lg:text-lg capitalize font-semibold'>Play</span>
                  </div>
            </div>
        </div>

  )
}

export default HeroTrendingMovies
