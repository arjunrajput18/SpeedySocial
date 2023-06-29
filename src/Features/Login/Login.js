import React from "react";
import "./Login.css";
import logo from "../../Assets/twitter.png";
import { loginUser } from "../../Services/AuthServices";
import { NavLink,  useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { useData } from "../../Context/DataContext";
export const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const {darkMode} =useData()
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { username, password } = loginDetails;
  const handleLogin = () => {
    if (username && password) {
      loginUser({ username, password }, navigate, setIsLoggedIn);
      setTimeout(() => {
        toast.success('Login successful!');
      }, 200);
    }
  };

  const handleGuestLogin = () => {
    const creds = { username: "ArjunsinghRajput@gmail.com", password: "123" };
    setLoginDetails(creds);
    loginUser(creds, navigate, setIsLoggedIn);
    setTimeout(() => {
      toast.success('Login successful!');
    }, 200);
    
  };

  return (
    <div className={`login-mainConatiner  ${darkMode && "bgDarkmode"}`}>
      <form className={`form-new-address ${darkMode && "bgDarkmode"}`} onSubmit={(e) => e.preventDefault()}>
        <div className={`login-page-info ${darkMode && "bgDarkmode"}`}>
          <h2 className={`headingName ${darkMode && "bgDarkmode"}`}>
            <div className={`nav-logo ${darkMode && "bgDarkmode"}`}>
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
