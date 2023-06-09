/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./Westbengal.css";

const Westbengalpage = () => {
  const location = useLocation();
  const URL = "https://hotel-backend-tge7.onrender.com/statesData?state=Westbengal";
  const [data, setData] = React.useState({});
  React.useEffect(() => {
   axios.get(`${URL}`).then((resp) => {
    setData(resp.data);
   })
  }, []);
  if (location.pathname !== "/state/westbengal") {
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
          {/* <h2>Darjeeling</h2> */}
          <p>
          {data[0]?.text[0]}
          </p>
        </div>
      </div>

      <div className="image-text-container">
        <div className="text">
          {/* <h2>Digha</h2> */}
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
          {/* <h2>Murshidabad</h2> */}
          <p>{data[0]?.text[2]}</p>
        </div>
      </div>
    </div>
  );
};

export default Westbengalpage;
