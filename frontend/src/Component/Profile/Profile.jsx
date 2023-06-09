
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Location } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';
import { FaSignOutAlt } from 'react-icons/fa';
import { BsGearFill } from 'react-icons/bs'
import './Profile.css';
import { getLocalStorage } from '../../hooks/useLocalStorage';
import Avatar from 'react-avatar';
import { TbFolderFilled } from "react-icons/tb"
import { FaUser } from "react-icons/fa"
import { RiWallet3Fill } from "react-icons/ri"
import { MdFolderShared, MdKeyboardArrowRight } from "react-icons/md"
import { AiOutlinePoweroff } from "react-icons/ai"
import { Button } from 'react-bootstrap';
import UpdateProfile from './UpdateProfile';



const Profile = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(true);

  const [profileUpdated, setProfileUpdated] = useState(false);


  useEffect(() => {
    const isSignedIn = localStorage.getItem('isSignedIn');
    const userDetails = getLocalStorage("loggedUser");

    if (!isSignedIn && !userDetails) {
      navigate('/signin');
    } else {
      const userId = localStorage.getItem('userId');
      fetch(`https://hotel-backend-tge7.onrender.com/get/${userId}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to fetch user data');
          }
        })
        .then((data) => {
          setUserData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
  }
    ,
    [navigate]);


  const userDetails = getLocalStorage("loggedUser");
  const isSignedIn = getLocalStorage("isSignedIn");

  console.log(userDetails?.photoURL, "jhvsEFj;hvbasfjhvasf")
  const logOut = () => {
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('isSignedIn');
    localStorage.removeItem("userId");
    navigate("/signin")
  }


  return (
    <>
    
      <UpdateProfile show={show} handleClose={handleClose} setProfileUpdated={setProfileUpdated} />
      <div className="text-center text-slate-800 m-2 h-[680px] flex">
        <div className='w-[30%] flex flex-col -mt-2 p-4'>
          <div className="profile_header ml-2 mr-1 rounded-sm shadow-md p-4 bg-slate-100 flex items-center">
            <Avatar
              name={!isSignedIn && userDetails ? userDetails?.displayName : userData?.name}
              src={!isSignedIn && userDetails ? userDetails?.photoURL : userData?.images[0]}
              round={true}
              size="24"
              className="hover:cursor-pointer hover:opacity-80"
            // onClick={editProfileHandler}
            />
            <h2 className='ml-2 text-base font-medium mt-4'>{!isSignedIn && userDetails ? userDetails?.displayName : userData?.name}</h2>
          </div>
          <div className="profile_body mt-4 ml-2 mr-1 rounded-sm shadow-md p-4 bg-slate-100 ">
            <>
              <div className="flex items-center">
                <TbFolderFilled className='text-blue-500' />
                <h2 className="ml-2 text-base font-medium mt-4">My Orders</h2>
                <MdKeyboardArrowRight className='flex-grow -mr-32' />
              </div>
              <div className='border-[1px] border-slate-400' />
            </>

            <>
              <div className="flex items-center">
                <FaUser className='text-blue-500' />
                <h2 className="ml-2 text-base font-medium mt-4">Account Settings</h2>
              </div>
              <div className="flex flex-col items-start">
                <div className='bg-blue-200 w-[100%] text-left cursor-pointer'>
                  <p className="my-1 ml-6 text-sm font-medium">Profile Information</p>
                </div>
                <p className="my-1 ml-6 text-sm font-medium">Mannage Addresses</p>
                <p className="my-1 ml-6 text-sm font-medium">PAN Card Information</p>
              </div>
              <div className='border-[1px] border-slate-400' />
            </>

            <>
              <div className="flex items-center">
                <RiWallet3Fill className='text-blue-500' />
                <h2 className="ml-2 text-base font-medium mt-4">Payments</h2>
              </div>
              <div className="flex flex-col items-start">
                <p className="my-1 ml-6 text-sm font-medium">Gift Cards</p>
                <p className="my-1 ml-6 text-sm font-medium">Saved Upi</p>
                <p className="my-1 ml-6 text-sm font-medium">Saved Cards</p>
              </div>
              <div className='border-[1px] border-slate-400' />
            </>

            <>
              <div className="flex items-center">
                <MdFolderShared className='text-blue-500' />
                <h2 className="ml-2 text-base font-medium mt-4">My Stuff</h2>
              </div>
              <div className="flex flex-col items-start">
                <p className="my-1 ml-6 text-sm font-medium">My Coupons</p>
                <p className="my-1 ml-6 text-sm font-medium">My Reviews and Ratings</p>
                <p className="my-1 ml-6 text-sm font-medium">All Notifications</p>
                <p className="my-1 ml-6 text-sm font-medium">My WishList</p>
              </div>
              <div className='border-[1px] border-slate-400' />
            </>

            <>
              <div className="flex items-center cursor-pointer" onClick={logOut}>
                <AiOutlinePoweroff className='text-blue-500' />
                <h2 className="ml-2 text-base font-medium mt-4">Logout</h2>
              </div>
            </>
          </div>
        </div>
        <div className='w-[70%] h-[670px] bg-slate-100 my-2 mr-2 ml-1 rounded-sm shadow-md p-4'>
          <>
            <div className="flex">
              <h1 className="text-lg font-semibold">
                Personal Information
              </h1>
              <input type="button" value="Edit" className='ml-4 text-base font-medium text-blue-500' />
            </div>
            <div className="flex mt-4">
              <input type="text" value={!isSignedIn && userDetails ? userDetails?.displayName.split[0] : userData?.name} className='p-2 outline-none border-2 rounded-sm  border-[#ccc]' />
              <input type="text" value={!isSignedIn && userDetails ? userDetails?.displayName.split[userDetails?.displayName.split(" ").length - 1] : userData?.name} className='ml-2 p-2 outline-none border-2 rounded-sm  border-[#ccc]' />
            </div>
          </>
          <>
            <h4 className='text-left mt-4 text-sm font-medium'>Your Gender</h4>
            <div className='flex mt-4'>
              <input type="radio" id="male" name="gender" value="Male" />
              <label for="male" className='ml-2'>Male</label>
              <input type="radio" id="female" name="gender" value="Female" className='ml-2' />
              <label for="female" className='ml-2'>Female</label>
            </div>
          </>
          <>
            <div className="flex">
              <h1 className="text-lg font-semibold mt-4">
                Email Address
              </h1>
              <input type="button" value="Edit" className='ml-4 text-base font-medium text-blue-500' />
            </div>
            <div className="flex mt-4">
              <input type="email" value={!isSignedIn && userDetails ? userDetails?.email : userData?.email} className='w-80 p-2 outline-none border-2 rounded-sm  border-[#ccc]' />
            </div>
          </>
          <>
            <div className="flex">
              <h1 className="text-lg font-semibold mt-4">
                Mobile Number
              </h1>
              <input type="button" value="Edit" className='ml-4 text-base font-medium text-blue-500' />
            </div>
            <div className="flex mt-4">
              <input type="text" value={!isSignedIn && userDetails ? userDetails?.providerData?.phoneNumber : userData?.mobile} className='w-80 p-2 outline-none border-2 rounded-sm  border-[#ccc]' />
            </div>
          </>
          <Button variant="primary" onClick={handleShow}>
            Update Profile
          </Button>
        </div>
      </div>

    </>
  );
};

export default Profile;
