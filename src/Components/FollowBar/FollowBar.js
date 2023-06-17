import React from "react";
import "./FollowBar.css";
import profile1 from "../../Assets/profile1.png";
import { useData } from "../../Context/DataContext";
import { useNavigate } from "react-router-dom";
import { getFollowHandler } from "../../Services/DataServices";
// import { getprofileData } from "../../Services/DataServices";

export const FollowBar = () => {
  const {
    dataState: { users },dataDispatch
  } = useData();
  const socialToken = localStorage.getItem("socialToken");
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const navigate = useNavigate();

  const handleClick = (userHandler) => {
    navigate(`/profile/${userHandler}`);
  };

const handleFollow=(_id,socialToken,dataDispatch)=>{
  getFollowHandler(_id,socialToken,dataDispatch)
}
const user = users?.find(el => el.username === socialUser.username)

const notFollowedUsers = users?.filter(el => el.username !== socialUser.username && user.following.every(item => item.username !== el.username))


  return (
    <div className="main-followbar">
      <p className="followbar-heading">Suggested Users</p>
      <div className="FollowBar">
        <ul className="followBar-list">
          {notFollowedUsers?.map((data) => (
            <li className="followBar-list-item" key={data._id}>
              <div className="profile-follow">
                <img
                  src={profile1}
                  alt="profile1"
                  className="profileImg"
                  onClick={() => handleClick(data.userHandler)}
                />
                <div>
                  <p
                    className="user-follow-name"
                    onClick={() => handleClick(data.userHandler)}
                  >
                    {data.firstName} {data.lastName}
                  </p>
                  <span
                    className="userId"
                    onClick={() => handleClick(data.userHandler)}
                  >
                    {data.userHandler}
                  </span>
                </div>
                <div>
                  <button className="btn-follow" onClick={()=>handleFollow(data._id,socialToken,dataDispatch)}>+Follow</button>
                </div>
              </div>

              {/* <hr /> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
