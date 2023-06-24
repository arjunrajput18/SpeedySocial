import React from "react";
import profile1 from "../../Assets/profile1.png";
import "./Profile.css";
import { useData } from "../../Context/DataContext";
import { SinglePost } from "../../Components/SinglePost/SinglePost";
import { useState } from "react";
import { EditProfile } from "./EditProfile";
import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { NavLink } from "react-router-dom";

export const Profile = () => {
  // const {userHandler}=useParams()
  const {
    dataState: { users, posts },editBtn, setEditBtn,setIsLoading
  } = useData();


  // console.log(users,"usersssss")
  // const user=users
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));

  // const socialToken = localStorage.getItem("socialToken")
  const loggedInUser = users?.find(
    (user) => user.username === socialUser.username
  );

  // const user=users?.find(data=>data.userHandler===userHandler)


  const profileUserPosts = posts?.filter(
    (post) => post.username === socialUser.username
  );

  const handleEdit = () => {
    setEditBtn(!editBtn);
  };


  console.log(loggedInUser,"loggineed")
  useEffect(()=>{
    window.scrollTo(0, 0)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  },[])
  return (
    <div className="profile-outerContainer">
      <div className="profile-mainContainer">
        <div className="profile-innerContainer">
          <img src={loggedInUser?.profilePic} alt="img1" className="profile-user-logo" />
          <div>
            <div className="profile-heading">
              <div>
                <h4>
                  {loggedInUser?.firstName} {loggedInUser?.lastName}
                </h4>
                <p>{loggedInUser?.username}</p>
              </div>
              <div>
                <button className="updateBtn" onClick={handleEdit}>
                  Edit
                </button>
              </div>
            </div>
            <div className="margin-top-1">
              <p>{loggedInUser?.bio}</p>
            </div>
            <div className="flex space-between margin-top-1">
              <span>{profileUserPosts.length} Posts</span> <span>{loggedInUser?.followers.length} Followers</span>{" "}
              <span>{loggedInUser?.following.length} Following</span>
            </div>
            <div className="profile-link">
              <a href={loggedInUser?.link} target="_blank" rel="noreferrer">
                {loggedInUser?.link}
              </a>
            </div>
          </div>
        </div>
      </div>

   

      <div className="posts">
        {profileUserPosts?.map((post) => (
          <SinglePost key={post.username} data={post} />
        ))}
      </div>
      <div className="margin-bottom-profile"></div>
    </div>
  );
};
