import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './hotel.module.css';

function HotelList() {
  const location = useLocation();
  const [hotels, setHotels] = useState([]);
  const [expandedResultId, setExpandedResultId] = useState(null);

  useEffect(() => {
    fetch('https://hotel-backend-tge7.onrender.com/get/all/hotels')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Logging the received data
        setHotels(data);
      })
      .catch(error => console.log(error));
  }, []);

  if (location.pathname !== '/') {
    return null;
  }

  const handleBuy = (hotelName) => {
    // Replace with the logic to handle the booking action
    console.log(`Book Now: ${hotelName}`);
  };

  const toggleDetails = (resultId) => {
    if (expandedResultId === resultId) {
      setExpandedResultId(null);
    } else {
      setExpandedResultId(resultId);
    }
  };

  return (
    <>
      <div className="search-results">
        {hotels.map((result) => (
          <div key={result._id} className="search-result">
            <img src={result.images} alt="hotel-pic" className="search-result-image" />
            <div className="search-result-content">
              <h3 className="search-result-title">{result.hotelName}</h3>
              <hr />
              <p className="search-result-destination">{result.destination}</p>
              <p className="search-result-price">Price: {result.price}</p>
              <p className="search-result-rating">Rating: {result.rating}</p>
              <p className="search-result-guests">Guests: {result.guests}</p>
              <p className="search-result-rooms">Rooms: {result.numRooms}</p>
              <hr />
              <p className="search-result-availability">Local ID: {result.availability}</p>
              <hr />

              <button className="view-details-button" onClick={() => toggleDetails(result._id)}>
                View Details
              </button>
              <button className="book-now-button" onClick={() => handleBuy(result.hotelName)}>
                Book Now
              </button>

              {expandedResultId === result._id && (
                <div>
                  <div className="amenities">
                    <h6>More:</h6>
                    <ul>
                      {result.moreOptions.map((more) => (
                        <li key={more}>{more}</li>
                      ))}
                    </ul>
                  </div>
                  <hr />
                  <div className="amenities">
                    <h6>Amenities:</h6>
                    <ul>
                      {result.amenities.map((amenity) => (
                        <li key={amenity}>{amenity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HotelList;
