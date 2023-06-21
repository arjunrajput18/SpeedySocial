import React from "react";
import "./SinglePost.css";
import profile1 from "../../Assets/profile1.png";
import { AiFillHeart, AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill, BsFillBookmarkFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";
import {CiMenuKebab} from "react-icons/ci"

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
    dataState: { users },
    dataDispatch,
    setBtnAddPost,
    btnAddPost,
  } = useData();

  const socialToken = localStorage.getItem("socialToken");
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInuser = users?.find(({ username }) => username === socialUser.username);
// console.log(loggedInuser?.bookmarks)
  const isBookmark = loggedInuser?.bookmarks?.includes(data?._id);
  // console.log(newBookmark);
  const handleLike = () => {
    getlikeData(data._id, dataDispatch, socialToken);
  };
  const handledisLike = () => {

    getDislikeData(data._id, dataDispatch, socialToken);
  };
  const btnLike = data?.likes?.likedBy?.some((ele) => ele.username=== socialUser.username);

  const navigate = useNavigate();

  const handleClick = (userHandler) => {
    navigate(`/profile/${userHandler}`);
  };
  const handleBookmark = () => {
    getBookMark(dataDispatch, socialToken, data?._id, socialUser.username);
  };
  const handleRemoveBookmark = () => {
    getRemoveBookmarkData(dataDispatch, socialToken, data?._id, socialUser.username);
  };

  const handleProductDetailClick = (postId) => {
    navigate(`/post/${data.id}`);
  };

  const handleAddComment = () => {
    if (commentText) {
      // console.log(_id, commentText, socialToken, dataDispatch);
      addCommentHandle(data?._id, commentText, socialToken, dataDispatch);
    }
  };

  const handleDeletePost = (postId) => {
    // console.log(postId, dataDispatch, socialToken);
    deletePostHandle(postId, dataDispatch, socialToken);
  };

  const handleEditPost = (postId) => {
    dataDispatch({ type: "EDIT_POST", payload: postId });
    setBtnAddPost(!btnAddPost);
  };

  const handleShare=()=>{
    navigator.clipboard.writeText(`https://speedysocial.netlify.app/post/${data?.id}`)
  }
  return (
    <div className="singlePost-MainContainer">
      <div className="singlepost-innerContainer">
        <div className="flex--singlepost-justify">
         
          <div className="flex--singlepost">
          <img
            src={data?.profilePic}
            alt="profile1"
            className="single-profile-photo"
            onClick={() => handleClick(data?.userHandler)}
          />
            <div className="flex-edit-delete">
              <p className="single-profile-userName">
                {data?.userHandler}{" "}
                {/* <span className="single-profile-userId">{username}</span> */}
              </p>
              <p className="single-profile-date-time">20/06/2023 16:30</p>
              {/* <button
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
              </button> */}
              

            </div>

           
          </div>
          <div className="setting">
              <CiMenuKebab/>
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
            <span className="btn-like-single-profile liked">
              <AiFillHeart onClick={handledisLike} />
              {data?.likes.likeCount}
            </span>
          ) : (
            <span className="btn-like-single-profile">
              <AiOutlineHeart onClick={handleLike} />
              {data?.likes.likeCount}
            </span>
          )}
          {/* <BsBookmarkFill onClick={handleRemoveBookmark} /> */}
          <>
            {isBookmark ? (
              <span className="btn-like-single-profile liked">
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
            <BiShareAlt  onClick={handleShare}/>
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