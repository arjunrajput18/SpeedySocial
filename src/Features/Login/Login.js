import React from "react";
import "./Login.css";
export const Login = () => {
  return (
    <div>
      <form className="form-new-address">
        <h2>SpeedySocial</h2>
        <p>
          SpeedySocial helps you connect and share with the people in your life.
        </p>

        <div className="innerContainer-login">
          <input type="text" placeholder="Email address or phone number" className="login-input" />
          <input type="password"  className="login-input" />
          <button>Log in</button>
          <button> Login as Guest</button>
          <button>Create new account</button>
        </div>
      </form>
    </div>
  );
};
