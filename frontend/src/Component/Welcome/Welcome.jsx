import React, { useState, useEffect } from 'react';

import './Welcome.css';
import { useLocation } from 'react-router-dom';

const PopupCard = () => {
const location=useLocation()
  const [showPopup, setShowPopup] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://hotel-backend-tge7.onrender.com/welcome/get')
      .then(response => response.json())
      .then(data => {
        setImages(data);
        
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      })
      .catch(error => {
        console.error('Error fetching API:', error);
      });
  }, []);
if(location.pathname !== "/"){
    return null
}

  return (
    <div className={`popup-card ${showPopup ? 'show' : 'hide'}`}>
      {images && images.map((imageUrl, index) => (
        <img key={index} src={imageUrl.images} alt="Popup Image" />
      ))}
    </div>
  );
};

export default PopupCard;
