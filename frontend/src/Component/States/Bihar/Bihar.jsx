/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Bihar.css";

const Biharpage = () => {
  const URL = "https://hotel-backend-tge7.onrender.com/statesData?state=Bihar";
  const [data, setData] = useState({});
  const location = useLocation();

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (location.pathname !== "/state/bihar") {
    return null;
  }

  return (
    <div>
      <div className="image-text-container">
        <div className="image">
          <img src={data[0]?.images[0]} alt="Image 1" />
        </div>
        <div className="text">
          <p>{data[0]?.text[0]}</p>
        </div>
      </div>

      <div className="image-text-container">
        <div className="text">
          <p>{data[0]?.text[1]}</p>
        </div>
        <div className="image">
          <img src={data[0]?.images[1]} alt="Image 2" />
        </div>
      </div>

      <div className="image-text-container">
        <div className="image">
          <img src={data[0]?.images[2]} alt="Image 3" />
        </div>
        <div className="text">
          <h2>Nalanda</h2>
          <p>{data[0]?.text[2]}</p>
        </div>
      </div>
    </div>
  );
};

export default Biharpage;
