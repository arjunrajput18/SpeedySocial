import React from "react";
import "./SinglePost.css";
import profile1 from "../../Assets/profile1.png";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill, BsFillBookmarkFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";

import {
  addCommentHandle,
  deletePostHandle,

  getBookMark,
  getDislikeData,
  getRemoveBookmarkData,
  getlikeData,
} from "../../Services/DataServices";
import { useData } from "../../Context/DataContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const SinglePost = ({ data }) => {
  const [commentText, setCommentText] = useState();

  const {
    _id,

    likes: { likeCount, likedBy },
  } = data;
  const {
    dataState: { users },
    posts,
    dataDispatch,
    setBtnAddPost,
    btnAddPost,
  } = useData();

  const socialToken = localStorage.getItem("socialToken");
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInuser = users?.find(({ _id }) => _id === socialUser._id);
  // const newBookmark = bookmarksMatch.bookmarks.some((data) => data === _id);

  const isBookmark = loggedInuser?.bookmarks?.includes(data?._id);
  // console.log(newBookmark);
  const handleLike = () => {
    console.log("like");
    // console.log(data?._id, dataDispatch, socialToken)
    getlikeData(_id, dataDispatch, socialToken);
  };
  // console.log(likedBy.some(({_id})=>_id===data?._id))
  const handledisLike = () => {
    console.log("like");
    getDislikeData(_id, dataDispatch, socialToken);
  };
  const btnLike = likedBy?.some((ele) => ele._id === socialUser._id);

  const navigate = useNavigate();

  // const socialUserId = socialUser._id;
  const handleClick = (userHandler) => {
    navigate(`/profile/${userHandler}`);
  };

  const handleBookmark = () => {
    getBookMark(dataDispatch, socialToken, _id, socialUser.username);
    // console.log(users);
    // bookmarkPostHandler(_id, socialToken, dataDispatch, socialUser)
  };
  const handleRemoveBookmark = () => {
    getRemoveBookmarkData(dataDispatch, socialToken, _id, socialUser.username);
  };

  const handleProductDetailClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  const handleAddComment = () => {
    if (commentText) {
      console.log(_id, commentText, socialToken, dataDispatch);
      addCommentHandle(_id, commentText, socialToken, dataDispatch);
    }
  };

  const handleDeletePost = (postId) => {
    console.log(postId, dataDispatch, socialToken);
    deletePostHandle(postId, dataDispatch, socialToken);
  };

  const handleEditPost = (postId) => {
    dataDispatch({ type: "EDIT_POST", payload: postId });
    setBtnAddPost(!btnAddPost);
  };

  console.log(data, "ll");
  return (
    <div className="singlePost-MainContainer">
      <div>
        <div className="single-profile-Username">
          <img
            src={data?.profilePic}
            alt="profile1"
            className="single-profile-photo"
            onClick={() => handleClick(data?.userHandler)}
          />
          <div>
            <div className="flex-edit-delete">
              <p className="single-profile-userName">
                {data?.userHandler}{" "}
                {/* <span className="single-profile-userId">{username}</span> */}
              </p>
              <button
                className="post-btn-comment"
                onClick={() => handleDeletePost(data?._id)}
              >
                Delete
              </button>
              <button
                className="post-btn-comment"
                onClick={() => handleEditPost(data?._id)}
              >
                Edit
              </button>
            </div>

            <p className="single-profile-date-time">20/06/2023 16:30</p>
          </div>
        </div>
        {data?.file && (
          <img src={data?.file} alt="Uploaded" height={200} width={200} />
        )}
        <p
          className="text-comment-box"
          onClick={() => handleProductDetailClick(data?._id)}
        >
          {data?.content}
        </p>

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
            {isBookmark ? (
              <span className="btn-like-single-profile">
                <BsBookmarkFill onClick={handleRemoveBookmark} />
              </span>
            ) : (
              <span className="btn-like-single-profile">
                <BsBookmark onClick={handleBookmark} />
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
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button className="post-btn-comment" onClick={handleAddComment}>
              POST
            </button>
          </div>
        </div>

        <div>
          {data?.comments?.map((comment) => (
            <div className="comments-added">
              <img
                src={profile1}
                alt="img1"
                className="single-profile-photo-comment"
              />
              <div className="comments-add-by-user">
                <div className="deleteFlex">
                  <p>
                    {comment?.username
                    }{" "}
                  </p>
                </div>
                <p>{comment?.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
