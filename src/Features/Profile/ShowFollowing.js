import React from "react";
import { useData } from "../../Context/DataContext";
import "./ShowFollowing.css";
import { RxCross2 } from "react-icons/rx";
import {
  getFollowHandler,
  getUnfollowHandler,
} from "../../Services/DataServices";
import { useNavigate } from "react-router-dom";
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

  const  navigate=useNavigate()
  const handleNavigate=(data)=>{
    console.log(data)
    if(data!==socialUser.userHandler){
      navigate(`/profile/${data}`)
    }else{
      navigate("/profile")
    }
    }

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
            <div className="followingUser"  onClick={()=>handleNavigate(data.userHandler)}>
              <div className="padding-5">
                <img src={data?.profilePic} alt="img" height={30} width={30} />
              </div>
              <p className="padding-5">
                {data?.firstName} {data?.lastName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
