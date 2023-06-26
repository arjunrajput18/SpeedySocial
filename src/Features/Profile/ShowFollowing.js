import React from "react";
import { useData } from "../../Context/DataContext";
import "./ShowFollowing.css";
import { RxCross2 } from "react-icons/rx";
import {
  getFollowHandler,
  getUnfollowHandler,
} from "../../Services/DataServices";
export const ShowFollowing = ({ setShowFollowing,foundUser }) => {
  const {
    dataState: { users, posts },
    dataDispatch,
  } = useData();
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInUser = users?.find(
    (user) => user.username === socialUser.username
  );

  const socialToken = localStorage.getItem("socialToken");

  const handleFollow = (_id, socialToken, dataDispatch) => {
    getFollowHandler(_id, socialToken, dataDispatch);
  };
//   console.log(loggedInUser.following, "llll");
  const handleUnfollow = (followUserId, socialToken, dataDispatch) => {
    // console.log({ followUserId, socialToken });
    getUnfollowHandler(followUserId, socialToken, dataDispatch);
  };

  return (
    <div className="ShowFollowing-mainContainer">
      <div className="ShowFollowing-innerContainer">
        <div className="divheadingBox">
          <div className="headingFollowing">Following</div>
          <button
            className="closeButton"
            onClick={() => setShowFollowing(false)}
          >
            <RxCross2 />
          </button>
        </div>
        {loggedInUser?.following.length === 0 && (
          <div className="headingFollowing">
            <h3>No Following</h3>
          </div>
        )}
        <div>
          {foundUser?.following.map((data) => (
            <div className="followingUser">
              <div className="padding-5">
                <img src={data?.profilePic} alt="img" height={30} width={30} />
              </div>
              <p className="padding-5">
                {data?.firstName} {data?.lastName}
              </p>
              <div className="padding-5">
                {/* <button className="profile-edit-btn">Edit</button> */}

                {foundUser?.following?.some(
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
