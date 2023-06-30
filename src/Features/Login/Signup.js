import React from "react";
import "./Signup.css";
import logo from "../../Assets/twitter.png";
import { signupUser } from "../../Services/AuthServices";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useData } from "../../Context/DataContext";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPass, setConfirmPass] = useState();
  const { dataDispatch, darkMode } = useData();

  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    profilePic:
      "https://www.pngmart.com/files/22/Charizard-Pokemon-Download-PNG-Image.png",
    bio: "Hey I am New to here,Happy to Connect with you",
    followers: [],
    following: [],
    bookmarks: [],
    userHandler: "",
  });
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpDetails((prev) => ({ ...prev, [name]: value }));
  };

  const { firstName, lastName, username, password } = signUpDetails;
  const handleSignUp = () => {
    if (firstName && lastName && username && password && confirmPass) {
      if (password === confirmPass) {
        signupUser(signUpDetails, navigate, setIsLoggedIn, dataDispatch);
      } else {
        toast.warn("Password does not match!");
      }
    } else {
      setTimeout(() => {
        toast.warn("Please fills all details!");
      }, 200);
    }
  };

  useEffect(() => {
    setSignUpDetails((prevState) => ({
      ...prevState,
      userHandler: prevState.username,
    }));
  }, [signUpDetails.username]);

  const handleConfirmPassword = (e) => {
    setConfirmPass(e.target.value);
  };

  return (
    <div className={`mainSignup-container ${darkMode && "bgDarkmode"}`}>
      <div className={`innerSignUp-container `}>
        <div className="innerHeading-signup">
          <div className="nav-logo">
            <img src={logo} alt="logo" height={50} width={50} />
          </div>
          <h2 className="headingName">SpeedySocial</h2>
        </div>
        <div className="flex gap-5">
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="login-input"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
            className="login-input"
            required
          />
        </div>

        <input
          type="email"
          placeholder="User Name or Email"
          name="username"
          onChange={handleChange}
          className="login-input"
          required
        />
        <div className="passwordIcon">
          <input
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Password"
            name="password"
            onChange={handleChange}
            className="login-input"
            required
          />
          {signUpDetails.password &&
            (showPassword ? (
              <VscEye
                onClick={() => setShowPassword(false)}
                className="eyeIcon"
              />
            ) : (
              <VscEyeClosed
                onClick={() => setShowPassword(true)}
                className="eyeIcon"
              />
            ))}
        </div>

        <div className="passwordIcon">
          <input
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Confirm Password"
            name="Confirm password"
            onChange={handleConfirmPassword}
            className="login-input"
            required
          />
          {signUpDetails.password &&
            (showPassword ? (
              <VscEye
                onClick={() => setShowPassword(false)}
                className="eyeIcon"
              />
            ) : (
              <VscEyeClosed
                onClick={() => setShowPassword(true)}
                className="eyeIcon"
              />
            ))}
        </div>

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
