import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './searchResult.css';

export default function SearchResults() {
  const searchResults = useSelector((state) => state.searchState);
  const [expandedResultId, setExpandedResultId] = useState(null);

  const toggleDetails = (resultId) => {
    if (expandedResultId === resultId) {
      setExpandedResultId(null);
    } else {
      setExpandedResultId(resultId);
    }
  };

  return (
    <div className="search-results">
      {searchResults.map((result) => (
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

            <div className="button-container">
              <button className="view-details-button" onClick={() => toggleDetails(result._id)}>
                View Details
              </button>
              <button className="book-now-button">Book Now</button>
            </div>

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
  );
}
