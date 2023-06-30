import React from "react";
import { useData } from "../../Context/DataContext";
import "./ShowFollowing.css";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import {
  getFollowHandler,
  getUnfollowHandler,
} from "../../Services/DataServices";
export const ShowFollowing = ({ setShowFollowing, foundUser }) => {
  const {
    dataState: { users },
    dataDispatch,
    darkMode,
  } = useData();
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInUser = users?.find(
    (user) => user.username === socialUser.username
  );

  const socialToken = localStorage.getItem("socialToken");

  const handleFollow = (_id, socialToken, dataDispatch) => {
    getFollowHandler(_id, socialToken, dataDispatch);
  };

  const handleUnfollow = (followUserId, socialToken, dataDispatch) => {
    getUnfollowHandler(followUserId, socialToken, dataDispatch);
  };
  const navigate = useNavigate();
  const handleNavigate = (data) => {
    console.log(data);
    if (data !== socialUser.userHandler) {
      navigate(`/profile/${data}`);
    } else {
      navigate("/profile");
    }
  };
  return (
    <div
      className={`ShowFollowing-mainContainer  ${
        darkMode && "bgSecondaryDarkMode"
      }`}
    >
      <div className="ShowFollowing-innerContainer">
        <div className="divheadingBox">
          <div className="headingFollowing">Following</div>
          <button
            className={`closeButton ${darkMode && "bgSecondaryDarkMode"}`}
            onClick={() => setShowFollowing(false)}
          >
            <RxCross2 />
          </button>
        </div>
        {foundUser?.following.length === 0 && (
          <div className="headingFollowing">
            <h3>No Following</h3>
          </div>
        )}
        <div>
          {foundUser?.following.map((data) => (
            <div className="followingUser">
              <div
                className="padding-5"
                onClick={() => handleNavigate(data.userHandler)}
              >
                <img src={data?.profilePic} alt="img" height={30} width={30} />
              </div>
              <p
                className="padding-5"
                onClick={() => handleNavigate(data.userHandler)}
              >
                {data?.firstName} {data?.lastName}
              </p>
              <div className="padding-5">
                {loggedInUser.username !== data.username &&
                  (foundUser?.following?.some(
                    (el) => el.username === data?.username
                  ) ? (
                    <button
                      onClick={() =>
                        handleUnfollow(data?._id, socialToken, dataDispatch)
                      }
                      className="EditBtn"
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        handleFollow(data?._id, socialToken, dataDispatch)
                      }
                      className="EditBtn"
                    >
                      Follow
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
