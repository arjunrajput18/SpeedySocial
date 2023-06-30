import React from "react";
import { useData } from "../../Context/DataContext";
import "./ShowFollowing.css";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import {
  getFollowHandler,
  getUnfollowHandler,
} from "../../Services/DataServices";
export const ShowFollower = ({ setShowFollowing,foundUser }) => {
  const {
    dataState: { users },darkMode,
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
  const handleFollow = (_id, socialToken, dataDispatch) => {
    console.log({_id, socialToken, dataDispatch})
    getFollowHandler(_id, socialToken, dataDispatch);
  };

  const handleUnfollow = (followUserId, socialToken, dataDispatch) => {
    console.log({ followUserId, socialToken });
    getUnfollowHandler(followUserId, socialToken, dataDispatch);
  };

  console.log(loggedInUser.username,"loggedInUser")

  return (
    <div className={`ShowFollowing-mainContainer  ${darkMode && "bgSecondaryDarkMode"}`}>
      <div className="ShowFollowing-innerContainer">
        <div className="divheadingBox">
          <div className="headingFollowing">Followers</div>
          <button
            className={`closeButton ${darkMode && "bgSecondaryDarkMode"}`}
            onClick={() => setShowFollowing(false)}
          >
            <RxCross2 />
          </button>
        </div>
        {foundUser?.followers.length === 0 && (
          <div className="headingFollowing">
            <h3>No Following</h3>
          </div>
        )}
        <div>
          {foundUser?.followers.map((data) =>  {
        return  (
            <div className="followingUser" key={data._id}>
            <div className="flex">
            <div className="padding-5"  onClick={()=>handleNavigate(data.userHandler)}>
                <img src={data?.profilePic} alt="img" height={30} width={30} />
              </div>
              <p className="padding-5"  onClick={()=>handleNavigate(data.userHandler)}>
                {data?.firstName} {data?.lastName}
              </p>
            </div>
              <div className="padding-5">
              

                {loggedInUser.username!== data.username && (foundUser?.following?.some(
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
          )})}
        </div>
      </div>
    </div>
  );
};
