import React, { useEffect, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import ip from '../common/Config';
import { useSelector, useDispatch } from "react-redux";
import { fetchDataBanners } from '../redux/features/Banners';


const swiper_container = {
  position: 'relative',
}

const swiper_arrows = {
  both: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '2',
  },
  next: {
    right: '30px',
  },
  prev: {
    left: '30px',
  }
}

function Banner() {
  const dispatch = useDispatch();
  const swiperRef = useRef(false);
  const banners = useSelector((state) => state?.banners?.data)

  useEffect(() => {
    if (!banners.length) {
      dispatch(fetchDataBanners())
    }
  }, [])

  return (
    <div>
      {
        banners?.length > 0 &&
        // <div className="main-swiper h-[320px] md:h-[400px] lg:h-[600px] overflow-hidden py-[20px] md:py-[30px] lg:py-[40px]" style={swiper_container}>
        <div className="main-swiper overflow-hidden py-[20px] md:py-[30px] lg:py-[40px]" style={swiper_container}>
          <button onClick={() => swiperRef.current?.slidePrev()} className='hidden md:block main-swiper-button' id="main-swiper-prev_arrow" style={{ ...swiper_arrows.prev, ...swiper_arrows.both }}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.91663 17.0001L20.2545 5.66675L22.6666 8.31119L14.7409 17.0001L22.6666 25.689L20.2545 28.3334L9.91663 17.0001Z" fill="#0E1217" />
            </svg>
          </button>
          <button onClick={() => swiperRef.current?.slideNext()} className='hidden md:block main-swiper-button' id="main-swiper-next_arrow" style={{ ...swiper_arrows.next, ...swiper_arrows.both }}>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.0833 16.9999L13.7455 28.3333L11.3333 25.6888L19.259 16.9999L11.3333 8.31103L13.7455 5.66658L24.0833 16.9999Z" fill="#0E1217" />
            </svg>
          </button>
          {
            banners?.length > 0 &&
            <Swiper
              className='h-full rounded-lg overflow-hidden'
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              lazy='true'
              loop={true}
              speed={1000}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false
              }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {
                banners.map((banner, index) => (
                  <SwiperSlide key={index} className='relative h-full rounded-lg overflow-hidden'>
                    <Link to={banner.link}>
                      <img src={ip + '/' + banner.image} alt="" className='w-full h-full object-cover' />
                    </Link>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          }
        </div>
      }
    </div>
  );
}

export default Banner;
