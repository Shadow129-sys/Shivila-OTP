/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Haryana.css";

const Haryanapage = () => {
  const URL = "https://hotel-backend-tge7.onrender.com/statesData?state=Haryana";
  const [data, setData] = React.useState({});
  React.useEffect(() => {
   axios.get(`${URL}`).then((resp) => {
    setData(resp.data);
   })
  }, []);
  const location = useLocation();
  if (location.pathname !== "/state/haryana"){
    return null
  }
    return (
      <div>
        <div className="image-text-container">
          <div className="image">
            <img
              src={data[0]?.images[0]}
              alt="Image 1"
            />
          </div>
          <div className="text">
            {/* <h2>Panchkula</h2> */}
           <p>
              {data[0]?.text[0]}
            </p>
          </div>
        </div>

        <div className="image-text-container">
          <div className="text">
            {/* <h2>Karnal</h2> */}
            <p>
            {data[0]?.text[1]}
            </p>
          </div>
          <div className="image">
            <img
              src={data[0]?.images[1]}
              alt="Image 2"
            />
          </div>
        </div>

        <div className="image-text-container">
          <div className="image">
            <img src={data[0]?.images[2]}alt="Image 3" />
          </div>
          <div className="text">
            {/* <h2>Rohtak</h2> */}
            <p>{data[0]?.text[2]}</p>
          </div>
        </div>
      </div>
    );
};

export default Haryanapage;
