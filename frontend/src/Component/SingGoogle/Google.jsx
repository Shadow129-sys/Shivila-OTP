import React from "react";
import './Google.css';

import { addUser } from "../redux/bazarSlice";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { getLocalStorage } from "../../hooks/useLocalStorage"

const Google = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // addUser({
        // _id: user.uid,
        // name: user.displayName,
        // email: user.email,
        // image: user.photoURL,
        // });
        localStorage.setItem("loggedUser", JSON.stringify(user))
        // const userDetails = getLocalStorage("loggedUser");
        // console.log(userDetails);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="google-container" onClick={handleGoogleLogin}>
      <p className="google-text">Continue With </p>
      <img
        src="https://freepngimg.com/thumb/google/153884-logo-google-png-download-free.png"
        alt="Google Logo"
        className="google-logo"
      />
    </div>
  );
};

export default Google;
