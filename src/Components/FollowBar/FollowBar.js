import React from "react";
import "./FollowBar.css";
import profile1 from "../../Assets/profile1.png";
import profile2 from "../../Assets/profile2.png"

export const FollowBar = () => {
  return (
    <div className="FollowBar">
      <p className="followbar-heading">Who to Follow</p>
      <hr></hr>
      <ul className="followBar-list">
        <li className="followBar-list-item">
          <div className="profile-follow">
            <img src={profile1} alt="profile1" className="profileImg" />
            <div>
              <p>Arjun Rajput</p>
              <span className="userId">arjunrajput18</span>
            </div>
            <div>
              <button className="btn-follow">+Follow</button>
            </div>
          </div>
          <hr />
        </li>
        <li className="followBar-list-item">
          <div className="profile-follow">
            <img src={profile2} alt="profile1" className="profileImg" />
            <div>
              <p>Adarsh Balika</p>
              <span className="userId">adarshbalika07</span>
            </div>
            <div>
              <button className="btn-follow">+Follow</button>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};
