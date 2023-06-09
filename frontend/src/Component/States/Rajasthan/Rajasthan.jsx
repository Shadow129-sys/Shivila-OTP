/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useLocation } from "react-router-dom";
import "./Rajasthan.css";
import axios from "axios"

const Rajasthanpage = () => {
  const location = useLocation();
  const URL = "https://hotel-backend-tge7.onrender.com/statesData?state=Rajasthan";
  const [data, setData] = React.useState({});
  React.useEffect(() => {
   axios.get(`${URL}`).then((resp) => {
    setData(resp.data);
   })
  }, []);
  if (location.pathname !== "/state/rajasthan"){
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
            {/* <h2>Jaipur</h2> */}
            <p>
             {data[0]?.text[0]}
            </p>
          </div>
        </div>

        <div className="image-text-container">
          <div className="text">
            {/* <h2>Udaipur</h2> */}
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
            <img src={data[0]?.images[2]} alt="Image 3" />
          </div>
          <div className="text">
            {/* <h2>Jaisalmer</h2> */}
            <p>{data[0]?.images[2]}</p>
          </div>
        </div>
      </div>
    );
};

export default Rajasthanpage;
