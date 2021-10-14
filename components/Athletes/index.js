import React, { useRef } from 'react';
import style from './style.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const Athletes = () => {

  const content = [
    {
      image: './player1.jpg',
      alt: 'Neymar Jr',
      name: 'Neymar Jr',
      category: 'Football'
    },
    {
      image: './player2.jpg',
      alt: 'Pelé',
      name: 'Pelé',
      category: 'Football'
    },
    {
      image: './player3.jpg',
      alt: 'Marcus Rashford',
      name: 'Marcus Rashford',
      category: 'Football'
    },
  ]
  const sliderNext = useRef(null);
  const sliderPrev = useRef(null);

  return (
    <section className={style.showcase}>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing.</h2>
      <div className={style.slides}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            640: {
              slidesPerView: 3,
            }
          }}
          navigation={{
            prevEl: sliderPrev.current,
            nextEl: sliderNext.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = sliderPrev.current;
            swiper.params.navigation.nextEl = sliderNext.current;
          }}
          loop={true}
          autoHeight={true}
        >
          {content.map((player, i) => (
            <SwiperSlide key={i}>
              {({ isActive, isPrev, isNext }) => (
                <div className={`${style.slide} ${isNext ? `${style.zoom}` : ''}`}>
                  <figure><img src={player.image} alt={player.alt} /></figure>
                  <p>Connect with <em>{player.name}</em></p>
                  <span>{player.category}</span>
                </div>
              )}
            </SwiperSlide>
          ))}
          <button ref={sliderPrev}>Previous</button>
          <button ref={sliderNext}>Next</button>
        </Swiper>
      </div>
      <div className={style.listingBtn}>
        <button>See All Athletes</button>
      </div>
    </section>
  )
}
export default Athletes