import React from 'react'

import { useParams } from 'react-router-dom'
import { useData } from '../../Context/DataContext'

import profile1 from "../../Assets/profile1.png";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill, BsFillBookmarkFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";
import {
  getBookMark,
  getDislikeData,
  getPostDetails,
  getRemoveBookmarkData,
  getlikeData,
} from "../../Services/DataServices";

import { useNavigate } from "react-router-dom";
export const PostDetails = () => {
  const {dataState:{posts,users},dataDispatch}=useData()
  // const [loading,setLoading]=useState(true)
    const {_id}=useParams()
    console.log(_id,"postId")

  
const postDeatils=posts?.find((post)=>post._id.toString()===_id.toString())

  console.log(postDeatils,"ppp")
  const socialToken = localStorage.getItem("socialToken");
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInuser = users?.find(({ _id }) => _id === socialUser._id);
  // const newBookmark = bookmarksMatch.bookmarks.some((data) => data === _id);
  

  const isBookmark=loggedInuser?.bookmarks?.includes(postDeatils?._id)
  // console.log(newBookmark);
  const handleLike = () => {
    console.log("like")
    // console.log(data?._id, dataDispatch, socialToken)
    getlikeData(_id, dataDispatch, socialToken);
  };
  // console.log(likedBy.some(({_id})=>_id===data?._id))
  const handledisLike = () => {
    console.log("like")
    getDislikeData(_id, dataDispatch, socialToken);
  };
  
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
  const handleRemoveBookmark=()=>{
  getRemoveBookmarkData(dataDispatch, socialToken, _id, socialUser.username)
}

const handleProductDetailClick=(postId)=>{
  navigate(`/post/${postId}`)
}


// const {likes: { likeCount, likedBy }} = postDeatils;
const btnLike = postDeatils?.likes?.likedBy?.some((ele) => ele._id === socialUser._id);
  return (
    <div>
<div className="singlePost-MainContainer">
      <div>
        <div className="single-profile-Username">
          <img src={postDeatils?.profilePic} alt="profile1" className="single-profile-photo" onClick={() => handleClick(postDeatils?.userHandler)}/>
          <div>
            <p className="single-profile-userName">
              {postDeatils?.userHandler}{" "}
              {/* <span className="single-profile-userId">{username}</span> */}
            </p>

            <p className="single-profile-date-time">20/06/2023 16:30</p>
          </div>
        </div>
       {postDeatils?.file && <img src={postDeatils?.file} alt="Uploaded"  height={200} width={200}/>}
        <p className="text-comment-box" onClick={()=>handleProductDetailClick(postDeatils?._id)}>{postDeatils?.content}</p>

        <div className="btn-single-profile">
          {btnLike ? (
            <span className="btn-like-single-profile">
              <AiFillHeart onClick={handledisLike} />
              {postDeatils?.likes?.likeCount}
            </span>
          ) : (
            <span className="btn-like-single-profile">
              <AiOutlineHeart onClick={handleLike} />
              {postDeatils?.likes?.likeCount}
            </span>
          )}

          <>
            {isBookmark ? <span className="btn-like-single-profile">
                <BsBookmarkFill onClick={handleRemoveBookmark} />
              </span>:(
              <span className="btn-like-single-profile">
                <BsBookmark onClick={handleBookmark} />
              </span>
            )  }{" "}
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
    </div>
  )
}
