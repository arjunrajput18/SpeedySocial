import React from "react";
import "./SinglePost.css";
import profile1 from "../../Assets/profile1.png";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill, BsFillBookmarkFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";
import {
  getBookMark,
  getDislikeData,
  getlikeData,
} from "../../Services/DataServices";
import { useData } from "../../Context/DataContext";
export const SinglePost = ({ data }) => {
  const {
    _id,
    content,
    likes: { likeCount, likedBy },
    username,
    userHandler,
  } = data;
  const {
    dataState: { users },
    posts,
    dataDispatch,
  } = useData();

  const sociaToken = localStorage.getItem("socialToken");
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const bookmarksMatch = users?.find(({ _id }) => _id === socialUser._id);
  const newBookmark = bookmarksMatch.bookmarks.some((data) => data === _id);
  console.log(newBookmark);
  const handleLike = () => {
    getlikeData(_id, dataDispatch, sociaToken);
  };
  // console.log(likedBy.some(({_id})=>_id===data._id))
  const handledisLike = () => {
    getDislikeData(_id, dataDispatch, sociaToken);
  };
  const btnLike = likedBy?.some((ele) => ele._id === socialUser._id);
  const socialUserId = socialUser._id;
  const handleBookmark = () => {
    getBookMark(dataDispatch, sociaToken, _id, socialUserId);
    // console.log(users);
  };

  return (
    <div className="singlePost-MainContainer">
      <div>
        <div className="single-profile-Username">
          <img src={profile1} alt="profile1" className="single-profile-photo" />
          <div>
            <p className="single-profile-userName">
              {userHandler}{" "}
              <span className="single-profile-userId">@{username}</span>
            </p>

            <p className="single-profile-date-time">20/06/2023 16:30</p>
          </div>
        </div>

        <p className="text-comment-box">{content}</p>

        <div className="btn-single-profile">
          {btnLike ? (
            <span className="btn-like-single-profile">
              <AiFillHeart onClick={handledisLike} />
              {likeCount}
            </span>
          ) : (
            <span className="btn-like-single-profile">
              <AiOutlineHeart onClick={handleLike} />
              {likeCount}
            </span>
          )}

          <>
            {!newBookmark ? (
              <span className="btn-like-single-profile">
                <BsBookmark onClick={handleBookmark} />
              </span>
            ) : (
              <span className="btn-like-single-profile">
                <BsBookmarkFill onClick={handleBookmark} />
              </span>
            )}{" "}
          </>

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
