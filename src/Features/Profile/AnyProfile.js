import React from "react";
import profile1 from "../../Assets/profile1.png";
import "./Profile.css";
import {useData} from "../../Context/DataContext"
import { SinglePost } from "../../Components/SinglePost/SinglePost";
import { getFollowHandler, getUnfollowHandler } from "../../Services/DataServices";
import { useParams } from "react-router-dom";

export const AnyProfile = () => {

const {userHandler}=useParams()
const {dataState:{users,posts},dataDispatch}=useData()

const socialUser = JSON.parse(localStorage.getItem("socialUser"));
const loggedInUser = users?.find(el => el.username === socialUser.username)

const foundUser = users?.find(el => el.userHandler === userHandler);



  const handleFollow = (followUserId, socialToken, dataDispatch) => {
    getFollowHandler(followUserId, socialToken, dataDispatch)
  }

  const handleUnfollow = (followUserId, socialToken, dataDispatch) => {
    getUnfollowHandler(followUserId, socialToken, dataDispatch)
  }
  const socialToken = localStorage.getItem("socialToken")
  const foundUsersPosts = posts?.filter(post => post.username === foundUser?.username)



  return (
    <div className="profile-outerContainer">
    <div className="profile-mainContainer">
      <div className="profile-innerContainer">
        <img src={foundUser?.profilePic} alt="img1" className="profile-user-logo" />
        <div>
          <div className="profile-heading">
            <div>
              <h4>{foundUser?.firstName} {foundUser?.lastName}</h4>
              <p>{foundUser?.username}</p>
            </div>
            <div>
              {/* <button className="profile-edit-btn">Edit</button> */}
           

              {
                loggedInUser?.following?.some(el => el.username === foundUser?.username)
                ?
                <button onClick={() => handleUnfollow(foundUser?._id, socialToken, dataDispatch)} className='profile-edit-btn'>Unfollow</button>
                :
                <button onClick={() => handleFollow(foundUser?._id, socialToken, dataDispatch)} className='profile-edit-btn'>Follow</button>
            }
            </div>
          </div>
          <div className="margin-top-1">
            <p>An aspiring web developer</p>
          </div>
          <div className="flex space-between margin-top-1">
            <span>3 Posts</span>{" "}
            <span>{foundUser?.followers.length} Followers</span>{" "}
            <span>{foundUser?.following.length} Following</span>
          </div>
          <div className="profile-link">
            <a href="https://arjunsinghportfolio.netlify.app" target="_blank" rel="noreferrer">https://arjunsinghportfolio.netlify.app/</a>
          </div>
        </div>
      </div>
    </div>
    
    <div className='posts'>
        {
            foundUsersPosts?.map(post => <SinglePost key={post.username} data={post} />)
        }
      </div>
    </div>
  );
};

