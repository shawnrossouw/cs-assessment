import React, { useRef } from 'react';
import style from './style.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const Athletes = ({ blok }) => {

  const sliderNext = useRef(null);
  const sliderPrev = useRef(null);

  return (
    <section className={style.showcase}>
      <h2>{blok.title}</h2>
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
          {blok.slider.map((player, i) => (
            <SwiperSlide key={i}>
              {({ isNext }) => (
                <div className={`${style.slide} ${isNext ? `${style.zoom}` : ''}`}>
                  <figure><img src={player.image.filename} alt={player.image.alt} /></figure>
                  <p>{player.text} <em>{player.name}</em></p>
                  <span>{player.category}</span>
                </div>
              )}
            </SwiperSlide>
          ))}
          <button className={style.prev} ref={sliderPrev}><div className={style.arrow}></div></button>
          <button className={style.next} ref={sliderNext}><div className={style.arrow}></div></button>
        </Swiper>
      </div>
      <div className={style.listingBtn}>
        <button>See All Athletes</button>
      </div>
    </section>
  )
}
export default Athletes