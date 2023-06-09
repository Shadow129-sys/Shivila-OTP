import React from 'react';
import './Home.css'
import { useLocation } from 'react-router-dom';


const Home = () => {
  const location=useLocation()
  if( location.pathname !== "/"){
    return null
    }
  return (
    <div>
     
      <img src="https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/1685366974266-671-6712133_summer-special-badge-with-banner-summer-offer-logo-removebg-preview.png" alt="Home" />
    </div>
  );
};

export default Home;
