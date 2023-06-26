import React, { useEffect } from "react";
import profile1 from "../../Assets/profile1.png";
import "./Profile.css";
import { useData } from "../../Context/DataContext";
import { SinglePost } from "../../Components/SinglePost/SinglePost";
import {
  getFollowHandler,
  getUnfollowHandler,
} from "../../Services/DataServices";
import { useParams } from "react-router-dom";
import { ShowFollowing } from "./ShowFollowing";
import { ShowFollower } from "./ShowFollower";
import { useState } from "react";

export const AnyProfile = () => {
  const { userHandler } = useParams();
  const {
    dataState: { users, posts },
    dataDispatch,
    setIsLoading,
  } = useData();
  const [showFollowing, setShowFollowing] = useState("");
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInUser = users?.find((el) => el.username === socialUser.username);

  const foundUser = users?.find((el) => el.userHandler === userHandler);

  const handleFollow = (followUserId, socialToken, dataDispatch) => {
    getFollowHandler(followUserId, socialToken, dataDispatch);
  };

  const handleUnfollow = (followUserId, socialToken, dataDispatch) => {
    getUnfollowHandler(followUserId, socialToken, dataDispatch);
  };
  const socialToken = localStorage.getItem("socialToken");
  const foundUsersPosts = posts?.filter(
    (post) => post.username === foundUser?.username
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  const followingHandle = () => {
    if (foundUser?.following.length > 0) {
      setShowFollowing("following");
    }
  };
  const followerHandle = () => {
    if (foundUser?.followers.length > 0) {
      setShowFollowing("followers");
    }
  };

  // console.log(foundUser, "foundUser");
  return (
    <div className="profile-outerContainer">
      <div className="profile-mainContainer">
        <div className="profile-innerContainer">
          <img
            src={foundUser?.profilePic}
            alt="img1"
            className="profile-user-logo"
          />
          <div>
            <div className="profile-heading">
              <div>
                <h4>
                  {foundUser?.firstName} {foundUser?.lastName}
                </h4>
                <p>{foundUser?.username}</p>
              </div>
              <div>
                {/* <button className="profile-edit-btn">Edit</button> */}

                {loggedInUser?.following?.some(
                  (el) => el.username === foundUser?.username
                ) ? (
                  <button
                    onClick={() =>
                      handleUnfollow(foundUser?._id, socialToken, dataDispatch)
                    }
                    className="EditBtn"
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      handleFollow(foundUser?._id, socialToken, dataDispatch)
                    }
                    className="EditBtn"
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div className="margin-top-1">
              <p>An aspiring web developer</p>
            </div>

            <div className="flex space-between margin-top-1 ">
              <span>{foundUsersPosts.length} Posts</span>{" "}
              <span onClick={followerHandle} className="pointer  underline-hover">
                {foundUser?.followers.length} Followers
              </span>{" "}
              <span onClick={followingHandle} className="pointer  underline-hover">
                {foundUser?.following.length} Following
              </span>
            </div>
            {showFollowing === "following" && (
              <div className="modalFollowing">
                <div className="modalContent">
                  <ShowFollowing
                    setShowFollowing={setShowFollowing}
                    foundUser={foundUser}
                  />
                </div>
              </div>
            )}
            {showFollowing === "followers" && (
              <div className="modalFollowing">
                <div className="modalContent">
              <ShowFollower
                setShowFollowing={setShowFollowing}
                foundUser={foundUser}
              />
              </div>
              </div>
            )}
            <div className="profile-link">
              <a
                href="https://arjunsinghportfolio.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                https://arjunsinghportfolio.netlify.app/
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="posts">
        {foundUsersPosts?.map((post) => (
          <SinglePost key={post.username} data={post} />
        ))}
        {foundUsersPosts?.length === 0 && (
          <div className="anyProfileInner">
            <div className="bookmarke-heading margin-top-1">
              {foundUser?.firstName} {foundUser?.lastName} haven't post anything
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
