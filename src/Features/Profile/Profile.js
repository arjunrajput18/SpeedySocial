import React from "react";
import "./Profile.css";
import { useData } from "../../Context/DataContext";
import { SinglePost } from "../../Components/SinglePost/SinglePost";
import { useState } from "react";
import { useEffect } from "react";
import { ShowFollowing } from "./ShowFollowing";
import { ShowFollower } from "./ShowFollower";

export const Profile = () => {
  const {
    dataState: { users, posts },
    editBtn,
    setEditBtn,
    setIsLoading,
    darkMode,
  } = useData();

  const [showFollowing, setShowFollowing] = useState("");

  const socialUser = JSON.parse(localStorage.getItem("socialUser"));

  const loggedInUser = users?.find(
    (user) => user.username === socialUser.username
  );

  const profileUserPosts = posts?.filter(
    (post) => post.username === socialUser.username
  );

  const handleEdit = () => {
    setEditBtn(!editBtn);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  const followingHandle = () => {
    if (loggedInUser?.following.length > 0) {
      setShowFollowing("following");
    }
  };
  const followerHandle = () => {
    if (loggedInUser?.followers.length > 0) {
      setShowFollowing("followers");
    }
  };

  return (
    <div className={`profile-outerContainer  ${darkMode && "bgDarkmode"}`}>
      <div
        className={`profile-mainContainer ${darkMode && "bgSecondaryDarkMode"}`}
      >
        <div
          className={`profile-innerContainer  ${darkMode && "bgSecondaryDarkMode"
          }`}
        >
          <img
            src={loggedInUser?.profilePic}
            alt="img1"
            className="profile-user-logo"
          />
          <div>
            <div className="profile-heading">
              <div className="profile-innerHeading">
                <h4>
                  {loggedInUser?.firstName} {loggedInUser?.lastName}
                </h4>
                <p
                  className={`single-profile-userId  ${
                    darkMode && "btnDarkUsernname"
                  }`}
                >
                  @{loggedInUser?.userHandler}
                </p>
              </div>
              <div>
                <button className="EditBtn" onClick={handleEdit}>
                  Edit
                </button>
              </div>
            </div>

            <div className="margin-top-1 wrap">
              <p>{loggedInUser?.bio}</p>
            </div>
            <div className="profile-link">
              <a
                href={loggedInUser?.link}
                target="_blank"
                rel="noreferrer"
                className="profile-link"
              >
                {loggedInUser?.link}
              </a>
            </div>
            <div
              className={`profile-follow-hr   ${
                darkMode && "bgSecondaryDarkMode"
              }`}
            >
              <div
                className={`inner-profile-follow-count  ${
                  darkMode && "bgSecondaryDarkMode"
                }`}
              >
                <div>{profileUserPosts.length} Posts </div>
                <div
                  onClick={followerHandle}
                  className="pointer underline-hover"
                >
                  {" "}
                  {loggedInUser?.followers.length} Followers
                </div>{" "}
                <div
                  onClick={followingHandle}
                  className="pointer underline-hover"
                >
                  {" "}
                  {loggedInUser?.following.length} Following
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showFollowing === "following" && (
        <div className="modalFollowing">
          <div className="modalContent">
            <ShowFollowing
              setShowFollowing={setShowFollowing}
              foundUser={loggedInUser}
            />
          </div>
        </div>
      )}
      {showFollowing === "followers" && (
        <div className="modalFollowing">
          <div className="modalContent">
            <ShowFollower
              setShowFollowing={setShowFollowing}
              foundUser={loggedInUser}
            />
          </div>
        </div>
      )}
      <div className="posts">
        {profileUserPosts?.reverse().map((post) => (
          <SinglePost key={post?._id} data={post} />
        ))}
      </div>
      <div className="margin-bottom-profile"></div>
    </div>
  );
};
