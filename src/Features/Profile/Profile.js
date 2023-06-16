import React from "react";
import profile1 from "../../Assets/profile1.png";
import "./Profile.css";
import {useData} from "../../Context/DataContext"
import { SinglePost } from "../../Components/SinglePost/SinglePost";
// import { useParams } from "react-router-dom";
// import { NavLink } from "react-router-dom";

export const Profile = () => {

// const {userHandler}=useParams()
const {dataState:{users,posts}}=useData()
// console.log(users,"usersssss")
// const user=users
const socialUser = JSON.parse(localStorage.getItem("socialUser"));

// const socialToken = localStorage.getItem("socialToken")
const loggedInUser = users?.find(user => user.username === socialUser.username);

// const user=users?.find(data=>data.userHandler===userHandler)
const { firstName, lastName, username, followers, following } = loggedInUser;
    // const token=JSON.parse(localStorage.getItem("socialUser"))
    
  const profileUserPosts = posts?.filter(post => post.username === socialUser.username)
  return (
    <div className="profile-outerContainer">
    <div className="profile-mainContainer">
      <div className="profile-innerContainer">
        <img src={profile1} alt="img1" className="profile-user-logo" />
        <div>
          <div className="profile-heading">
            <div>
              <h4>{firstName} {lastName}</h4>
              <p>{username}</p>
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
            <span>{followers.length} Followers</span>{" "}
            <span>{following.length} Following</span>
          </div>
          <div className="profile-link">
            <a href="https://arjunsinghportfolio.netlify.app" target="_blank" rel="noreferrer">https://arjunsinghportfolio.netlify.app/</a>
          </div>
        </div>
      </div>
    </div>
    
    <div className='posts'>
        {
          profileUserPosts?.map(post => <SinglePost key={post.username} data={post} />)
        }
      </div>
    </div>
  );
};
