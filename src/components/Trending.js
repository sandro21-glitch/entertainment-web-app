import { Link } from 'react-router-dom';
import { useMoviesContext } from '../context/movieContext';
import Loading from './Loading';
import Error from './Error';
import HeroTrendingMovies from './HeroTrendingMovies';
// swiper
import SwiperCore, { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);
const Trending = () => {
  const { error, loading,trendingMovies,addBookmark } = useMoviesContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <section className='mb-10'>
      <header className='mb-5'>
        <div className='flex items-center justify-between'>
          <h2 className='capitalize text-xl md:text-3xl text-white tracking-wide'>
            trending
          </h2>
          <Link className='text-[#5a6a90] uppercase text-[.7rem] font-bold hover:underline'>See More</Link>
        </div>
      </header>
      <Swiper
        centeredSlides={false}
        loop={false}
        draggable={false}
        autoplay={{ delay: 1500}}
        freeMode={true}
        slidesPerGroup={1}
        slidesPerView={1.5}
        spaceBetween={30}
        breakpoints={{
          1200: { slidesPerView: 2.5, spaceBetween: 30 },
          768: { slidesPerView: 1.5, spaceBetween: 30 },
          390: { slidesPerView: 1.5, spaceBetween: 30 },
        }}
        pagination={{el:'.slider-pagination',clickable:true}}
        navigation={{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
            clickable:true,
        }}
        modules={[Pagination]}
        className='swiper_container mySwiper'
      >
        {trendingMovies.map((movie) => (
          <SwiperSlide key={movie.id} >
            <HeroTrendingMovies  {...movie} addBookmark={addBookmark} />
          </SwiperSlide>
        ))}

      </Swiper>
    </section>
  );
};

export default Trending;
