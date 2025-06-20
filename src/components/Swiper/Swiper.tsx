import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.css';

import Image1 from '/image.svg';
import Image2 from '/image-2.svg';
import Image3 from '/image-3.svg';
import Frame13 from '/Frame13.svg';
import Frame14 from '/Frame14.svg';
import Vector2 from '/Vector2.svg';

import './Swiper.css';

SwiperCore.use([Navigation, Pagination]);

export default function Features() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!swiperRef.current) return;
  
    const swiper = new Swiper(swiperRef.current, {
      loop: false,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
  
    return () => swiper.destroy();
  }, []);
  

  return (
    <div className="swiper">
      <div className="swiper-container" ref={swiperRef}>
        <div className="swiper-wrapper">
          {/* Slide 1 */}
          <div className="swiper-slide card">
            <img src={Image1} alt="" />
            <p className="card__description">Answer five questions</p>
            <h2 className="card__title">Sending to the university</h2>
            <a className="card__phone" href="#">+7 (999) 253 25 25</a>
            <div className="slide-more-wrapper">
              <a href="#" className="slide-more">
                More <img src={Vector2} alt="" />
              </a>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="swiper-slide card">
            <img src={Image2} alt="" />
            <p className="card__description">Answer five questions</p>
            <h2 className="card__title">We select the university</h2>
            <a className="card__phone" href="#">+7 (999) 253 25 25</a>
            <div className="slide-more-wrapper">
              <a href="#" className="slide-more">
                More <img src={Vector2} alt="" />
              </a>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="swiper-slide card">
            <img src={Image3} alt="" />
            <p className="card__description">Answer five questions</p>
            <h2 className="card__title">Sending to the university</h2>
            <a className="card__phone" href="#">+7 (999) 253 25 25</a>
            <div className="slide-more-wrapper">
              <a href="#" className="slide-more">
                More <img src={Vector2} alt="" />
              </a>
            </div>
          </div>
        </div>

        {/* Навигация и пагинация */}
        <div className="swiper-button-prev">
          <img src={Frame13} alt="prev" />
        </div>
        <div className="swiper-button-next">
          <img src={Frame14} alt="next" />
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}
