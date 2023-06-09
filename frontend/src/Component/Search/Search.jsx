/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Search.css';
import moment from 'moment';
import { getSearchState } from '../redux/SearchSlice';
import { useDispatch } from 'react-redux';

const SearchComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState({
    destination: '',
    startDate: null,
    endDate: null,
    guests: '1',
    numRooms: '1',
    localId: false,
    maritalStatus: '',
    moreOptions: '',
  });
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    // Format start date and end date
    const startDate = searchData.startDate
      ? moment(searchData.startDate).format('YYYY-MM-DD')
      : '';
    const endDate = searchData.endDate
      ? moment(searchData.endDate).format('YYYY-MM-DD')
      : '';

    const queryString = new URLSearchParams({
      destination: searchData.destination,
      startDate,
      endDate,
      guests: searchData.guests,
      numRooms: searchData.numRooms,
      localId: searchData.localId ? 'true' : '',
      moreOptions: searchData.moreOptions,
    }).toString();

    // Fetch search results from the API
    fetch(`https://hotel-backend-tge7.onrender.com/search?${queryString}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
        console.log(data[0], "Search results")
        dispatch(getSearchState(data))
        navigate("/search/results")
      })
      .catch((error) => {
        console.error('Error fetching search results:', error);
      });
  };
  //====== /search/results
 
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : (type === 'select-one' && value === '') ? '' : value;
    setSearchData((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));
  };
  

  const renderOptions = (start, end, selectedValue) => {
    const options = [];

    for (let i = start; i <= end; i++) {
      const value = i.toString();
      const label = i === end ? value : value + '';
      options.push(
        <option key={value} value={value} selected={selectedValue === value}>
          {label}
        </option>
      );
    }

    return options;
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          id="destination"
          name="destination"
          placeholder="Search Your Hotel and Destination"
          value={searchData.destination}
          onChange={handleInputChange}
          required
          className="input-text"
        />

        <div className="date-picker">
          <div className="start-date">
            <DatePicker
              id="start-date"
              name="startDate"
              selected={searchData.startDate}
              onChange={(date) =>
                setSearchData((prevState) => ({
                  ...prevState,
                  startDate: date,
                }))
              }
              required
              className="input-startdate"
              placeholderText="Check-in"
              dateFormat="dd-MM-yyyy" // Set the desired date format
              utcOffset={-1 * new Date().getTimezoneOffset()} // Set the UTC offset to the current local offset
            />
          </div>
          <div className="end-date">
            <DatePicker
              id="endDate"
              name="endDate"
              selected={searchData.endDate}
              onChange={(date) =>
                setSearchData((prevState) => ({
                  ...prevState,
                  endDate: date,
                }))
              }
              required
              className="input-enddate"
              placeholderText="Check-out"
              dateFormat="dd-MM-yyyy" // Set the desired date format
              utcOffset={-1 * new Date().getTimezoneOffset()}
            />
          </div>
        </div>

        <div className="guests">
          <select
            id="guests"
            name="guests"
            value={searchData.guests}
            onChange={handleInputChange}
            required
            className="input-guests"
          >
            {renderOptions(1, 1000, 'Guests')}
          </select>
          <p>Guests</p>
        </div>

        <div className="rooms">
          <select
            id="numRooms"
            name="numRooms"
            value={searchData.numRooms}
            onChange={handleInputChange}
            required
            className="input-rooms"
          >
            {renderOptions(1, 1000, 'Rooms')}
          </select>
          <p>Rooms</p>
        </div>

        <div className="local">
  <label htmlFor="localId">
    <input
      type="checkbox"
      id="localId"
      name="localId"
      checked={searchData.localId}
      onChange={handleInputChange}
      className="input-checkbox"
    />
    Local ID
  </label>
</div>

        <div className="marital">
          <select
            id="maritalStatus"
            name="maritalStatus"
            value={searchData.maritalStatus}
            onChange={handleInputChange}
            required
            className="input-select-marital"
          >
            <option value="">Select marital status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        </div>

        <div className="more-options">
          <select
            id="moreOptions"
            name="moreOptions"
            value={searchData.moreOptions}
            onChange={handleInputChange}
            className="input-select-more"
          >
            <option value="">More</option>
            <option value="Pets Allowed">Pets Allowed</option>
            <option value="Alcohol Allowed">Alcohol Allowed</option>
            <option value="Bachelors Allowed">Bachelors Allowed</option>
            <option value="Smoking Allowed">Smoking Allowed</option>
          </select>
        </div>

        <div className="btn">
          <button type="submit">Search</button>
        </div>
      </form>

      <div className="search-results">
        {searchResults.map((result) => (
          <div key={result._id} className="search-result">
            <img src={result.images} alt="hotel-pic" />
            <h3>{result.hotelName}</h3>
            <p>{result.destination}</p>
            <p>Price: {result.price}</p>
            <p>Rating: {result.rating}</p>
            <p>Guests: {result.guests}</p>
            <p>Rooms: {result.numRooms}</p>
            <p>Local ID: {result.localId}</p>
            <p>More: {result.moreOptions}</p>
            <p>Amenities: {result.amenities}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
