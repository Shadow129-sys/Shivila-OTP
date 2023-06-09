/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './Carousel.css';
import SearchComponent from '../Search/Search';

const CarouselPage = () => {
  const location = useLocation();
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    'https://cdn0.desidime.com/cdn-cgi/image/fit=contain,f=auto,onerror=redirect,w=1200,h=675,q=90/attachments/photos/876716/original/OffersinAmazonSummerSale2023.png',
    'https://media.cntraveler.com/photos/6317933fbed61f402524718d/16:9/w_3999,h_2249,c_limit/Airelles%20Saint-Tropez,%20Pan%20Dei%20Palais_Grand-Chambre%20Prestige%20Village%20.jpg',
    'https://image-tc.galaxy.tf/wijpeg-e766ao1ctif48bdcy6xl40o4c/places-to-stay.jpg?width=2000&height=1600',
    'https://cdn.wallpapersafari.com/31/89/k6Gpdl.jpg',
    'https://images.wallpaperscraft.com/image/single/resort_hotel_pool_110912_1600x900.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 2000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  const showSlide = (n) => {
    const newIndex = (n + slides.length) % slides.length;
    setSlideIndex(newIndex);
  };

  const changeSlide = (n) => {
    showSlide(slideIndex + n);
  };

  if (location.pathname !== '/') {
    return null;
  }

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === slideIndex ? 'active' : ''}`}
        >
          <img src={slide} alt={`Image ${index + 1}`} />
        </div>
      ))}

      <div className="overlay">
        <SearchComponent />
      </div>

      <button className="prev-button" onClick={() => changeSlide(-1)}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="next-button" onClick={() => changeSlide(1)}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default CarouselPage;
