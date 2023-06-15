import React from "react";
import "./Login.css";
import logo from "../../Assets/twitter.png";
import { loginUser } from "../../Services/AuthServices";
import { NavLink,  useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";

export const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { username, password } = loginDetails;
  const handleLogin = () => {
    if (username && password) {
      loginUser({ username, password }, navigate, setIsLoggedIn);
    }
  };

  const handleGuestLogin = () => {
    const creds = { username: "adarshbalika@gmail.com", password: "adarshBalika123" };
    setLoginDetails(creds);
    loginUser(creds, navigate, setIsLoggedIn);
  };

  return (
    <div className="login-mainConatiner">
      <form className="form-new-address" onSubmit={(e) => e.preventDefault()}>
        <div className="login-page-info">
          <h2 className="headingName">
            <div className="nav-logo">
              <img src={logo} alt="logo" height={50} width={50} />
            </div>
            SpeedySocial{" "}
          </h2>
          <p>
            SpeedySocial helps you connect and share with the people in your
            life.
          </p>
        </div>
        <div className="innerContainer-login">
          <input
            type="text"
            placeholder="Email address or phone number"
            className="login-input"
            value={username}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, username: e.target.value })
            }
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            name="password"
            autoComplete="on"
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
            value={password}
          />
          <button className="login-btn" onClick={handleLogin}>
            Log in
          </button>
          <button className="loginAsGuest-btn" onClick={handleGuestLogin}>
            {" "}
            Login as Guest
          </button>

          <NavLink to={"/signup"} className={"no-underline"}>
            <p className="newAccount-btn">Create new account</p>
          </NavLink>
        </div>
      </form>
    </div>
  );
};
