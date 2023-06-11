import React from "react";
import profile1 from "../../Assets/profile1.png";
import "./Profile.css";
// import { NavLink } from "react-router-dom";

export const Profile = () => {
  return (
    <div className="profile-outerContainer">
    <div className="profile-mainContainer">
      <div className="profile-innerContainer">
        <img src={profile1} alt="img1" className="profile-user-logo" />
        <div>
          <div className="profile-heading">
            <div>
              <h4>ArjunSingh Rajput</h4>
              <p>@arjunsingh18</p>
            </div>
            <div>
              <button className="profile-edit-btn">Edit</button>
            </div>
          </div>
          <div className="margin-top-1">
            <p>An aspiring web developer</p>
          </div>
          <div className="flex space-between margin-top-1">
            <span>3 Posts</span>{" "}
            <span>0 Followers</span>{" "}
            <span>0 Folowing</span>
          </div>
          <div className="profile-link">
            <a href="https://arjunsinghportfolio.netlify.app" target="_blank" rel="noreferrer">https://arjunsinghportfolio.netlify.app/</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
