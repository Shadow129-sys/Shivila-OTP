/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./HeaderImage.css";

const HeaderImage = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  if (location.pathname !== "/") {
    return null;
  }

  return (
    <div className="header">
      <div className="city">
        <div className="dropdown">
          <div className="top-offers" onClick={toggleDropdown}>
            <img
              className="circle"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Biswa_Bangla_Gate_in_Kolkata_01.jpg/1200px-Biswa_Bangla_Gate_in_Kolkata_01.jpg"
              alt="Top Offers"
            />
            <p className="city-name">Top Offers</p>
          </div>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <a href="#">Offers for Hotel</a>
              <a href="#">Offers for Tour</a>
            </div>
          )}
        </div>
      </div>
      <a href="state/punjab" class="no-underline text-black">
        <div className="city">
          <img
            className="circle"
            src="https://www.newsclick.in/sites/default/files/styles/amp_1200x675_16_9/public/2020-04/Punjab.PNG?itok=6M8kSqzz"
            alt="Image 2"
          />
          <p className="city-name">Punjab</p>
        </div>
      </a>
      <a href="state/maharashtra" class="no-underline text-black">
        <div className="city">
          <img
            className="circle"
            src="https://static.india.com/wp-content/uploads/2018/08/maharashtra-1.jpg"
            alt="Image 3"
          />
          <p className="city-name">Maharashtra</p>
        </div>
      </a>
      <a href="state/goa" class="no-underline text-black">
        <div className="city">
          <img
            className="circle"
            src="https://assets.gqindia.com/photos/61bc4462b764212228e2b603/1:1/w_3716,h_3716,c_limit/Fairfield%20by%20Marriott%20Goa%20Benaulim2.jpeg"
            alt="Image 4"
          />
          <p className="city-name">Goa</p>
        </div>
      </a>
      <a href="state/tamilnadu" class="no-underline text-black">
        <div className="city">
          <img
            className="circle"
            src="https://gumlet.assettype.com/swarajya%2F2022-08%2Fc4a036cd-b6e8-4f34-a340-f60e6de012ae%2FCollage_Maker_11_Aug_2022_08_07_PM.jpg?q=75&auto=format%2Ccompress&w=1200"
            alt="Image 5"
          />
          <p className="city-name">Tamil Nadu</p>
        </div>
      </a>
      <a href="state/uttarpradesh" class="no-underline text-black">
        <div className="city">
          <img
            className="circle"
            src="https://cdn.britannica.com/22/124522-050-D8C3C313/pilgrims-Varanasi-Ganges-River-India-Uttar-Pradesh.jpg"
            alt="Image 6"
          />
          <p className="city-name">Uttar Pradesh</p>
        </div>
      </a>
      <a href="state/delhi" class="no-underline text-black">
        <div className="city">
          <img
            className="circle"
            src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"
            alt="Image 7"
          />
          <p className="city-name">Delhi</p>
        </div>
      </a>
      <a href="state/westbengal" class="no-underline text-black">
        <div className="city">
          <img
            className="circle"
            src="https://images.hindustantimes.com/img/2021/03/04/550x309/_e5c11594-450e-11eb-9d7d-764df83b7a87_1614867899376.jpg"
            alt="Image 8"
          />
          <p className="city-name">West Bengal</p>
        </div>
      </a>
      <a href="state/rajasthan" class="no-underline text-black">
        <div className="city">
          <img
            className="circle"
            src="https://static.toiimg.com/thumb/93105946/rajasthan.jpg?width=1200&height=900"
            alt="Image 9"
          />
          <p className="city-name">Rajasthan</p>
        </div>
      </a>
      <a href="state/kerala" class="no-underline text-black">
        <div className="city">
          <img
            className="circle"
            src="https://media.istockphoto.com/id/1246366598/photo/a-scenic-view-of-boats-under-a-blue-sky-in-backwaters-situated-in-allepey-town-located-in.jpg?s=612x612&w=0&k=20&c=YBv_3nP-6YjvN9JRhaNsBmq8ke4azCgvGLS5h3r9jSk="
            alt="Image 10"
          />
          <p className="city-name">Kerala</p>
        </div>
      </a>
      <a href="state/bihar" class="no-underline text-black">
        <div className="city">
          <img
            className="circle"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPzoADWDPjfXwmeuM-GbOf7I974WSjUlACwg&usqp=CAU"
            alt="Image 11"
          />
          <p className="city-name">Bihar</p>
        </div>
      </a>
      <a href="state/assam" class="no-underline text-black">
        <div className="city">
          <img
            className="circle"
            src="https://assets.sentinelassam.com/h-upload/2023/03/18/445148-assam-tea-industries.webp"
            alt="Image 12"
          />
          <p className="city-name">Assam</p>
        </div>
      </a>
      <a href="state/karnataka" class="no-underline text-black">
        <div className="city">
          <img
            className="circle"
            src="https://cdn.britannica.com/73/156473-050-E0E9F844/Vidah-Sauda-state-legislature-building-Karnataka-Bengaluru.jpg"
            alt="Image 13"
          />
          <p className="city-name">Karnataka</p>
        </div>
      </a>
      <a href="state/gujrat" class="no-underline text-black">
        <div className="city">
          <img
            className="circle"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mosque_in_Gujrat_Pakistan.JPG/1200px-Mosque_in_Gujrat_Pakistan.JPG"
            alt="Image 14"
          />
          <p className="city-name">Gujrat</p>
        </div>
      </a>
      <a href="state/kashmir" class="no-underline text-black">
        <div className="city">
          <img
            className="circle"
            src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/12/12103708/jammu-and-kashmir-1.jpg"
            alt="Image 14"
          />
          <p className="city-name">Jammu & Kashmir</p>
        </div>
      </a>
      <a href="state/haryana" class="no-underline text-black">
        <div className="city">
          <img
            className="circle"
            src="https://lp-cms-production.imgix.net/2019-06/f17a82146e4fdc978a9e5b4ad79e95b3bc28e4e77828065ae3ca95282668cef4.jpg"
            alt="Image 16"
          />
          <p className="city-name">Haryana</p>
        </div>
      </a>
    </div>
  );
};

export default HeaderImage;
