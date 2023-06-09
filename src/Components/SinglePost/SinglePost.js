import React from "react";
import "./SinglePost.css";
import profile1 from "../../Assets/profile1.png";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

export const SinglePost = () => {
  return (
    <div className="singlePost-MainContainer">
      <div>
        <div className="single-profile-Username">
          <img src={profile1} alt="profile1" className="single-profile-photo" />
          <div>
            <p className="single-profile-userName">
              Arjunsingh Rajput{" "}
              <span className="single-profile-userId">@arjunrajput18</span>
            </p>

            <p className="single-profile-date-time">20/06/2023 16:30</p>
          </div>

        </div>
        
        <p className="text-comment-box">The best investments are buy and forget.</p>
        <div className="btn-single-profile">
          <p className="btn-like-single-profile">
            <AiOutlineHeart />
            Like
          </p>
          <p className="btn-like-single-profile">
            <BsBookmark />
            Bookmark
          </p>
        </div>
        <div className="comment-box">
          <img
            src={profile1}
            alt="img1"
            className="single-profile-photo-comment"
          />
          <div className="inner-comment-box">
            <input
              placeholder="write your comment"
              className="single-profile-input-ccomment"
            />
            <button className="post-btn-comment">POST</button>
          </div>
        </div>
      </div>
    </div>
  );
};
