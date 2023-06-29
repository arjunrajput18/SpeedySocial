import React from "react";
import "./Signup.css";
import logo from "../../Assets/twitter.png";
import { signupUser } from "../../Services/AuthServices";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useData } from "../../Context/DataContext";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
export const Signup = () => {

const {dataDispatch}=useData()

  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    // userHandler: `${this?.username}`,
    password: "",
    profilePic: "https://www.pngmart.com/files/22/Charizard-Pokemon-Download-PNG-Image.png",
    bio:"Hey I am New to here,Happy to Connect with you",
    followers:[],
    following:[],
    bookmarks:[],
    userHandler:"",
  });
  const navigate = useNavigate();
const {setIsLoggedIn}=useAuth()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpDetails((prev) => ({ ...prev, [name]: value }));
  };

  const { firstName, lastName, username, password } = signUpDetails;
  const handleSignUp = () => {
    if ((firstName, lastName, username, password)) {
      signupUser(signUpDetails, navigate,setIsLoggedIn,dataDispatch);
      setTimeout(() => {
        toast.success('Signup successful!');
      }, 200);
    }
  };

  useEffect(() => {
    setSignUpDetails(prevState => ({
      ...prevState,
      userHandler: prevState.username,
    }));
  }, [signUpDetails.username]);

  return (
    <div className="mainSignup-container">
      <div className="innerSignUp-container">
        <div className="innerHeading-signup">
          <div className="nav-logo">
            <img src={logo} alt="logo" height={50} width={50} />
          </div>
          <h2 className="headingName">SpeedySocial</h2>
        </div>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="login-input"
          required
        />
        <input type="text"
          placeholder="Surname"
          name="lastName"
          onChange={handleChange}
          className="login-input"
          required
        />
        <input type="email"
          placeholder="Email"
          name="username"
          onChange={handleChange}
          className="login-input"
          required
        />
        <input type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          className="login-input"
          required
        />
        <button className="login-btn" onClick={handleSignUp}>
          Create Account
        </button>
        <div className="newAccount-btn">
          <NavLink to="/login" className={"no-underline"}>
            <button className="newAccount-btn">Already Have An Account</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
