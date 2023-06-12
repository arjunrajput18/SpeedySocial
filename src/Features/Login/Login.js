import React from "react";
import "./Login.css";
import logo from "../../Assets/twitter.png";
import { NewAccount } from "./Signup";
export const Login = () => {
  return (
    <div className="login-mainConatiner">

      <form className="form-new-address">
      <div className="login-page-info">
      <h2 className="headingName"><div className="nav-logo">
          <img src={logo} alt="logo" height={50} width={50} />
        </div>SpeedySocial  </h2>
        <p>
          SpeedySocial helps you connect and share with the people in your life.
        </p>
      </div>
        <div className="innerContainer-login">
          <input type="text" placeholder="Email address or phone number" className="login-input" />
          <input type="password"  className="login-input" placeholder="Password"name="password" autoComplete="on"/>
          <button className="login-btn">Log in</button>
          <button className="loginAsGuest-btn"> Login as Guest</button>
          <button className="newAccount-btn">Create new account</button>
        </div>
      </form>
      

    </div>
  );
};
