import React from "react";
import "./NewAccount.css"
import logo from "../../Assets/twitter.png";
export const NewAccount = () => {
  return (
    <div className="mainSignup-container">
      <div className="innerSignUp-container">
      <div className="innerHeading-signup">
      <div className="nav-logo">
          <img src={logo} alt="logo" height={50} width={50} />
        </div>
      <h2 className="headingName">SpeedySocial</h2>
      </div>
        <input placeholder="First Name"  className="login-input"/>
        <input placeholder="Surname"  className="login-input" />
        <input placeholder="Username or Email"  className="login-input" />
        <input placeholder="Password"  className="login-input" />
        <button className="login-btn">Create Account</button>
        <p  className="innerHeading-signup">Already Have An Account</p>
      </div>
    </div>
  );
};
