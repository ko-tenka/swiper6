import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.css';

import Image1 from '/image.svg';
import Image2 from '/image-2.svg';
import Image3 from '/image-3.svg';
import './Features.css'

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
          slidesPerView: 3,
        },
      },
    });

    return () => swiper.destroy();
  }, []);

  return (
<div className="features">
  <div className="swiper-container" ref={swiperRef}>
    <div className="swiper-wrapper">
      <div className="swiper-slide card" >
        <img src={Image1} alt="" />
        <p>Some text</p>
        <a href="#">+7 (999) 253 25 25</a>
        <a href="#" className="slide-more">more</a>
      </div>
      <div className="swiper-slide card" >
        <img src={Image2} alt="" />
        <p>Some text</p>
        <a href="#">+7 (999) 253 25 25</a>
        <a href="#" className="slide-more">more</a>
      </div>
      <div className="swiper-slide card" >
        <img src={Image3} alt="" />
        <p>Some text</p>
        <a href="#">+7 (999) 253 25 25</a>
        <a href="#" className="slide-more">more</a>
      </div>
    </div>
    <div className="swiper-button-prev">←</div>
    <div className="swiper-button-next">→</div>
    <div className="swiper-pagination"></div>
  </div>
</div>

  );
}
