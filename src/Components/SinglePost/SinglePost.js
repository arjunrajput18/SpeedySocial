import React from "react";
import "./SinglePost.css";
import profile1 from "../../Assets/profile1.png";
import {
  AiFillHeart,
  AiOutlineDelete,
  AiOutlineHeart,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsBookmark, BsBookmarkFill, BsFillBookmarkFill } from "react-icons/bs";
import { FaEdit, FaRegComment } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
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
import { toast } from "react-toastify";

export const SinglePost = ({ data }) => {
  const [commentText, setCommentText] = useState();
  const [menuBtn, setMenuBtn] = useState(false);
  const {
    dataState: { users },
    dataDispatch,
    setBtnAddPost,
    btnAddPost,
  } = useData();

  const socialToken = localStorage.getItem("socialToken");
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInuser = users?.find(
    ({ username }) => username === socialUser.username
  );
  // console.log(loggedInuser?.bookmarks)
  const isBookmark = loggedInuser?.bookmarks?.includes(data?._id);
  // console.log(newBookmark);
  const handleLike = () => {
    getlikeData(data._id, dataDispatch, socialToken);
  };
  const handledisLike = () => {
    getDislikeData(data._id, dataDispatch, socialToken);
  };
  const btnLike = data?.likes?.likedBy?.some(
    (ele) => ele.username === socialUser.username
  );

  const navigate = useNavigate();

  const handleClick = (userHandler) => {
    navigate(`/profile/${userHandler}`);
  };
  const handleBookmark = () => {
    getBookMark(dataDispatch, socialToken, data?._id, socialUser.username);
    toast.success('Added To Bookmark!');
  };
  const handleRemoveBookmark = () => {
    getRemoveBookmarkData(
      dataDispatch,
      socialToken,
      data?._id,
      socialUser.username
    );
    toast.success('Removed from Bookmark!');
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
    setMenuBtn(!menuBtn);
      toast.success('Post Deleted successful!');
  };

  const handleEditPost = (postId) => {
    dataDispatch({ type: "EDIT_POST", payload: postId });
    setBtnAddPost(!btnAddPost);
    setMenuBtn(!menuBtn);

  };

  const handleShare = () => {
    navigator.clipboard.writeText(
      `https://speedysocial.netlify.app/post/${data?.id}`
    );
    
      toast.success('Copied To Clipboard');
    
  };

  const handleMenuClick = () => {
    setMenuBtn(!menuBtn);
  };


const userDetails=users?.find((el)=>el.username===data.username)
console.log(userDetails,"aaaa")
  return (
    <div className="singlePost-MainContainer">
      <div className="singlepost-innerContainer">
        <div className="flex--singlepost-justify">
          <div className="flex--singlepost">
          <div className="flex-uploadimgg">
          <img
              src={userDetails?.profilePic}
              alt="profile1"
              className="single-profile-photo"
              onClick={() => handleClick(data?.userHandler)}
            />
          </div>
          
            <div className="flex-edit-delete">
              <p className="single-profile-userName">
                {userDetails?.firstName}{" "}{userDetails?.lastName}
                {/* <span className="single-profile-userId">{username}</span> */}
              </p>
              <p className="single-profile-date-time">20/06/2023 16:30</p>
            </div>
          </div>
          <div>
            <div className="setting">
              {menuBtn ?(
                <RxCross2 onClick={()=>setMenuBtn(!menuBtn)} className="setting-icon" />
              ): (
                <CiMenuKebab onClick={handleMenuClick} className="setting-icon"  />
              ) }
            </div>
            {menuBtn && (
              <div className="btn-postEdit">
                <button
                  className="post-delete"
                  onClick={() => handleDeletePost(data?._id)}
                >
                  <AiOutlineDelete />
                </button>
                <button
                  className="post-edit"
                  onClick={() => handleEditPost(data?._id)}
                >
                  <FaEdit />
                </button>
              </div>
            )}
          </div>
        </div>
        <p
          className="text-comment-box"
          onClick={() => handleProductDetailClick(data?._id)}
        >
          {data?.content}
        </p> 
        <div className="flex-uploadimgg">
        {data?.file && (
          <img src={data?.file} alt="Uploaded" className="main-img" />
        )}
        </div>
        {/* */}

        <div className="btn-single-profile">
          {btnLike ? (
            <span className="btn-like-single-profile liked icon">
              <AiFillHeart onClick={handledisLike} />
              {data?.likes.likeCount}
            </span>
          ) : (
            <span className="btn-like-single-profile icon">
              <AiOutlineHeart onClick={handleLike} />
              {data?.likes?.likeCount}
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
            <FaRegComment />{data?.comments?.length}
          </p>
          <p className="btn-like-single-profile">
            <BiShareAlt onClick={handleShare} />
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
          {data?.comments?.map((comment) =>{
            
            const currentUser=users?.find((user)=>user?.username===comment?.username)
   
            console.log({currentUser})
            return  (
            <div className="comments-added">
              <img
                src={profile1}
                alt="img1"
                className="single-profile-photo-comment"
              />
              <div className="comments-add-by-user">
                <div className="deleteFlex">
                  <p>{currentUser.firstName} {" "} {currentUser.lastName }</p>
                </div>
                <p>{comment?.text}</p>
              </div>
            </div>
          )})}
        </div>
      </div>
    </div>
  );
};
