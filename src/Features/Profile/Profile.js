import React from "react";
import profile1 from "../../Assets/profile1.png";
import "./Profile.css";
import { useData } from "../../Context/DataContext";
import { SinglePost } from "../../Components/SinglePost/SinglePost";
import { useState } from "react";
import { EditProfile } from "./EditProfile";
import { useEffect } from "react";
import { ShowFollowing } from "./ShowFollowing";
import { ShowFollower } from "./ShowFollower";
// import { useParams } from "react-router-dom";
// import { NavLink } from "react-router-dom";

export const Profile = () => {
  // const {userHandler}=useParams()
  const {
    dataState: { users, posts },
    editBtn,
    setEditBtn,
    setIsLoading,
  } = useData();

  const [showFollowing, setShowFollowing] = useState("");

  // console.log(users,"usersssss")
  // const user=users
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));

  // const socialToken = localStorage.getItem("socialToken")
  const loggedInUser = users?.find(
    (user) => user.username === socialUser.username
  );

  // const user=users?.find(data=>data.userHandler===userHandler)

  // console.log(loggedInUser?.following);
  const profileUserPosts = posts?.filter(
    (post) => post.username === socialUser.username
  );

  const handleEdit = () => {
    setEditBtn(!editBtn);
  };

  // console.log(loggedInUser, "loggineed");
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
    <div className="profile-outerContainer">
      <div className="profile-mainContainer">
        <div className="profile-innerContainer">
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
                <p>{loggedInUser?.username}</p>
              </div>
              <div>
                <button className="EditBtn" onClick={handleEdit}>
                  Edit
                </button>
              </div>
            </div>
            <div className="margin-top-1">
              <p>{loggedInUser?.bio}</p>
            </div>
            <div className="flex space-between margin-top-1 ">
              <span>{profileUserPosts.length} Posts</span>{" "}
              <span onClick={followerHandle} className="pointer underline-hover">
                {loggedInUser?.followers.length} Followers
              </span>{" "}
              <span onClick={followingHandle} className="pointer underline-hover">
                {loggedInUser?.following.length} Following
              </span>
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

            <div className="profile-link">
              <a href={loggedInUser?.link} target="_blank" rel="noreferrer">
                {loggedInUser?.link}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="posts">
        {profileUserPosts?.reverse().map((post) => (
          <SinglePost key={post.username} data={post} />
        ))}
      </div>
      <div className="margin-bottom-profile"></div>
    </div>
  );
};
