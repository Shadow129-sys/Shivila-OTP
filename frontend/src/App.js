import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
// import Home from './Component/Home/Home';
// import About from './Component/About/About';
// import Contact from './Component/Contact/Contact';
import Register from './Component/Register/Register.jsx';
import Login from './Component/Login/Login';
import Profile from './Component/Profile/Profile.jsx';
import HeaderImage from './Component/HeaderImage/HeaderImage';

// import CarouselPage from './Component/Carousel/Carousel';
// import IndividualIntervalsExample from './Component/Carousel/Carousel';
import Carousel from './Component/Carousel/Carousel';
// import SearchComponent from './Component/Search/Search';
import Home from './Component/Home/Home.jsx'

import ChatBox from './Component/Chatbot/Chatbot';
import PopupCard from './Component/Welcome/Welcome';
import Footer from './Component/Footer/Footer';
import Hotel from './Component/Hotel/Hotel.jsx';

import UserSettings from './Component/Profile/UserAction';
import Partner from './Component/Partner/Partner';
import PunjabPage from './Component/States/Punjab/Punjab';

import Maharashtrapage from './Component/States/Maharashtra/Maharashtra';
import Assampage from './Component/States/Assam/Assam';
import Goapage from './Component/States/Goa/Goa';
import Tamilnadupage from './Component/States/Tamilnadu/Tamilnadu';
import Uttarpradeshpage from './Component/States/Uttarpradesh/Uttarpradesh';
import Delhipage from './Component/States/Delhi/Delhi';
import Westbengalpage from './Component/States/Westbengal/Westbengal';
import Rajasthanpage from './Component/States/Rajasthan/Rajasthan';
import Keralapage from './Component/States/Kerala/Kerala';
import Biharpage from './Component/States/Bihar/Bihar';
import Kernatakapage from './Component/States/Karnataka/Karnataka';
import Gujratpage from './Component/States/Gujrat/Gujrat';
import Kashmirpage from './Component/States/Kashmir/Kashmir';
import Haryanapage from './Component/States/Haryana/Haryana';
import SearchResults from './Component/Search/SearchResults';
import GetOTP from "./Component/OTP/Getotp";

function App() {
  // console.log(search)
  return (
    <Router>
      <div>
        <Header />

        <HeaderImage />

        <Carousel />
   
        <Home />
        <Hotel />
        <ChatBox />
        <PopupCard />



        <UserSettings />
        <Partner />
        <PunjabPage />
 
        <Maharashtrapage/>
         <Goapage/>
         <Tamilnadupage/>
         <Uttarpradeshpage/>
         <Delhipage/>
         <Westbengalpage/>
         <Rajasthanpage/>
         <Keralapage/>
         <Biharpage/>
         <Assampage/>
         <Kernatakapage/>
         <Gujratpage/>
         <Kashmirpage/>
         <Haryanapage/>
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search/results" element={<SearchResults />} />
          <Route path="/signinOTP" element={<GetOTP/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
