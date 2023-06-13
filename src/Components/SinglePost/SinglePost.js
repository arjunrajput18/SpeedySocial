import React from "react";
import "./SinglePost.css";
import profile1 from "../../Assets/profile1.png";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";
export const SinglePost = ({ data }) => {
  const { _id, content, likes:{likeCount}, username } = data;
  return (
    <div className="singlePost-MainContainer">
      <div>
        <div className="single-profile-Username">
          <img src={profile1} alt="profile1" className="single-profile-photo" />
          <div>
            <p className="single-profile-userName">
              Arjunsingh Rajput{" "}
              <span className="single-profile-userId">@{username}</span>
            </p>

            <p className="single-profile-date-time">20/06/2023 16:30</p>
          </div>
        </div>

        <p className="text-comment-box">
         {content}
        </p>

        <div className="btn-single-profile">
          <p className="btn-like-single-profile">
           {likeCount} <AiOutlineHeart />
          </p>
          <p className="btn-like-single-profile">
            <BsBookmark />
          </p>
          <p className="btn-like-single-profile">
            <FaRegComment />
          </p>
          <p className="btn-like-single-profile">
            <BiShareAlt />
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
        <div className="comments-added">
          <img
            src={profile1}
            alt="img1"
            className="single-profile-photo-comment"
          />
          <div className="comments-add-by-user">
            <p>Arjunsingh Rajput</p>
            <p>nice post , keep it up Bro</p>
          </div>
        </div>
      </div>
    </div>
  );
};
