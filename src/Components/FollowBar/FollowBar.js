import React from "react";
import "./FollowBar.css";
import { useData } from "../../Context/DataContext";
import { useNavigate } from "react-router-dom";
import { getFollowHandler } from "../../Services/DataServices";

export const FollowBar = () => {
  const {
    dataState: { users },
    dataDispatch,
    darkMode,
  } = useData();
  const socialToken = localStorage.getItem("socialToken");
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const navigate = useNavigate();

  const handleClick = (userHandler) => {
    navigate(`/profile/${userHandler}`);
  };

  const handleFollow = (_id, socialToken, dataDispatch) => {
    getFollowHandler(_id, socialToken, dataDispatch);
  };
  const user = users?.find((el) => el.username === socialUser?.username);
  const followingArray = user?.following.map((el) => el?.username);
  const notFollowedUsers = users?.filter(
    (el) =>
      el?.username !== socialUser?.username &&
      !followingArray?.includes(el?.username)
  );

  return (
    <div className={`main-followbar  ${darkMode && "bgDarkmode"}`}>
      <div className="inner-followbar">
        <p className={`followbar-heading ${darkMode && "bgDarkmode"}`}>
          Suggested Users
        </p>
        <div
          className={`${
            notFollowedUsers.length === 0 ? "FollowBar-lowHeight" : "FollowBar"
          } ${darkMode && "bgDarkmode"} `}
        >
          <ul className={`followBar-list ${darkMode && "bgDarkmode"}`}>
            {notFollowedUsers?.map((data) => (
              <li className="followBar-list-item" key={data._id}>
                <div className={`profile-follow ${darkMode && "bgDarkmode"}`}>
                  <img
                    src={data.profilePic}
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
                    <button
                      className="btn-follow"
                      onClick={() =>
                        handleFollow(data._id, socialToken, dataDispatch)
                      }
                    >
                      +Follow
                    </button>
                  </div>
                </div>
              </li>
            ))}
            {notFollowedUsers.length === 0 && (
              <div className={`followbar-heading ${darkMode && "bgDarkmode"}`}>
                Nothing to Suggest
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
