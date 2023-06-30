import React from "react";
import "./SinglePost.css";
import { AiFillHeart, AiOutlineDelete, AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { FaEdit, FaRegComment, FaTrash } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import {
  deleteCommentHandle,
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
import { IoMdArrowRoundBack } from "react-icons/io";

export const SinglePost = ({ data, showComment }) => {
  const [menuBtn, setMenuBtn] = useState(false);

  const {
    dataState: { users },
    dataDispatch,
    setBtnAddPost,
    btnAddPost,

    setCommentText,
    commentToggle,
    setCommentToggle,
    setCommentId,
    darkMode,
  } = useData();

  const socialToken = localStorage.getItem("socialToken");
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInuser = users?.find(
    ({ username }) => username === socialUser.username
  );

  const isBookmark = loggedInuser?.bookmarks?.includes(data?._id);

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
    const viewUser = userHandler === socialUser.userHandler;
    console.log(userHandler, "userHandler");
    if (!viewUser) {
      navigate(`/profile/${userHandler}`);
    } else {
      navigate(`/profile`);
    }
  };
  const handleBookmark = () => {
    getBookMark(dataDispatch, socialToken, data?._id, socialUser.username);
    toast.success("Added To Bookmark!");
  };
  const handleRemoveBookmark = () => {
    getRemoveBookmarkData(
      dataDispatch,
      socialToken,
      data?._id,
      socialUser.username
    );
    toast.success("Removed from Bookmark!");
  };

  const handleProductDetailClick = (postId) => {
    navigate(`/post/${data.id}`);
  };

  const handleDeleteComment = (commentId, commentData) => {
    deleteCommentHandle(
      data?._id,
      commentId,
      commentData,
      socialToken,
      dataDispatch
    );
    setCommentText("");
  };

  const handleDeletePost = (postId) => {
    deletePostHandle(postId, dataDispatch, socialToken);
    setMenuBtn(!menuBtn);
    toast.success("Post Deleted successful!");
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

    toast.success("Copied To Clipboard");
  };

  const handleMenuClick = () => {
    setMenuBtn(!menuBtn);
  };

  const handleCommentEnable = () => {
    setCommentId(data._id);
    setCommentToggle(!commentToggle);
  };
  const handleBack = () => {
    setBtnAddPost(false);
    navigate("/");
  };

  const userDetails = users?.find((el) => el.username === data.username);
  const formattedCreatedAt = new Date(data?.createdAt).toLocaleDateString();
  const createTime = new Date(data?.createdAt).toLocaleTimeString();

  return (
    <div
      className={`singlePost-MainContainer ${
        darkMode && "bgSecondaryDarkMode"
      }`}
    >
      <div
        className={`singlepost-innerContainer ${
          darkMode && "bgSecondaryDarkMode"
        }`}
      >
        <div
          className={`flex--singlepost-justify ${
            darkMode && "bgSecondaryDarkMode"
          }`}
        >
          <div className="flex--singlepost">
            {showComment && (
              <div>
                <IoMdArrowRoundBack
                  className="logo-back-addPost"
                  onClick={handleBack}
                />
              </div>
            )}
            <div className="flex-uploadimgg">
              <img
                src={userDetails?.profilePic}
                alt="profile1"
                className="single-profile-photo"
                onClick={() => handleClick(userDetails?.userHandler)}
              />
            </div>

            <div className="flex-edit-delete">
              <span
                className={`single-profile-userName pointer ${
                  darkMode && "bgSecondaryDarkMode"
                }`}
                onClick={() => handleClick(userDetails?.userHandler)}
              >
                {userDetails?.firstName} {userDetails?.lastName}
              </span>
              <p
                className={`single-profile-userId pointer  ${
                  darkMode && "btnDarkUsernname"
                }`}
                onClick={() => handleClick(userDetails?.userHandler)}
              >
                @{userDetails?.userHandler}
              </p>
              <p
                className={`single-profile-date-time ${
                  darkMode && "bgSecondaryDarkMode"
                }`}
              >
                {formattedCreatedAt} {createTime}
              </p>
            </div>
          </div>
          <div>
            {socialUser.username === userDetails?.username && (
              <div className={`setting  ${darkMode && "bgSecondaryDarkMode"}`}>
                {menuBtn ? (
                  <RxCross2
                    onClick={() => setMenuBtn(!menuBtn)}
                    className={`setting-icon  ${
                      darkMode && "bgSecondaryDarkMode"
                    }`}
                  />
                ) : (
                  <CiMenuKebab
                    onClick={handleMenuClick}
                    className={`setting-icon  ${
                      darkMode && "bgSecondaryDarkMode"
                    }`}
                  />
                )}
              </div>
            )}
            {menuBtn && (
              <div
                className={`btn-postEdit  ${darkMode && "bgSecondaryDarkMode"}`}
              >
                <button
                  className={`post-delete  ${
                    darkMode && "bgSecondaryDarkMode"
                  }`}
                  onClick={() => handleDeletePost(data?._id)}
                >
                  <AiOutlineDelete />
                </button>
                <button
                  className={`post-edit  ${darkMode && "bgSecondaryDarkMode"}`}
                  onClick={() => handleEditPost(data?._id)}
                >
                  <FaEdit />
                </button>
              </div>
            )}
          </div>
        </div>
        <p
          className={`text-comment-box ${darkMode && "bgSecondaryDarkMode"}`}
          onClick={() => handleProductDetailClick(data?._id)}
        >
          {data?.content}
        </p>
        <div
          className={`flex-uploadimgg" ${darkMode && "bgSecondaryDarkMode"}`}
          onClick={() => handleProductDetailClick(data?._id)}
        >
          {data?.file && (
            <img
              src={data?.file}
              alt="Uploaded"
              className={`main-img ${darkMode && "bgSecondaryDarkMode"}`}
            />
          )}
        </div>
        {/* */}

        <div className="btn-single-profile">
          {btnLike ? (
            <span
              className={`btn-like-single-profile liked icon ${
                darkMode && "bgSecondaryDarkMode"
              }`}
              onClick={handledisLike}
            >
              <AiFillHeart />
              {data?.likes.likeCount}
            </span>
          ) : (
            <span
              className={`btn-like-single-profile icon ${
                darkMode && "bgSecondaryDarkMode"
              }`}
              onClick={handleLike}
            >
              <AiOutlineHeart />
              {data?.likes?.likeCount}
            </span>
          )}
          <>
            {isBookmark ? (
              <span
                className={`btn-like-single-profile liked ${
                  darkMode && "bgSecondaryDarkMode"
                }`}
                onClick={handleRemoveBookmark}
              >
                <BsBookmarkFill />
              </span>
            ) : (
              <span
                className={`btn-like-single-profile ${
                  darkMode && "bgSecondaryDarkMode"
                }`}
                onClick={handleBookmark}
              >
                <BsBookmark />
              </span>
            )}{" "}
          </>

          <p
            className={`btn-like-single-profile ${
              darkMode && "bgSecondaryDarkMode"
            }`}
            onClick={handleCommentEnable}
          >
            <FaRegComment />
            {data?.comments?.length}
          </p>
          <p
            className={`btn-like-single-profile ${
              darkMode && "bgSecondaryDarkMode"
            }`}
            onClick={handleShare}
          >
            <BiShareAlt />
          </p>
        </div>

        {!showComment && (
          <p
            className={`allComments flex  pointer ${
              darkMode && "bgSecondaryDarkMode"
            }`}
            onClick={() => handleProductDetailClick(data?._id)}
          >
            view {data?.comments?.length} comments
          </p>
        )}

        {showComment && (
          <div>
            {data?.comments?.map((comment) => {
              const currentUser = users?.find(
                (user) => user?.username === comment?.username
              );
              const deleteOnlyYoursCmnt =
                socialUser?.username === comment?.username;
              return (
                <div className={`comments-added ${darkMode && "bgDarkmode"}`} key={comment._id}>
                  <img
                    src={currentUser.profilePic}
                    alt="img1"
                    className={`single-profile-photo-comment ${
                      darkMode && "bgDarkmode"
                    }`}
                  />
                  <div
                    className={`comments-add-by-user ${
                      darkMode && "bgDarkmode"
                    }`}
                  >
                    <div className={`deleteFlex ${darkMode && "bgDarkmode"}`}>
                      <p className={`user-name ${darkMode && "bgDarkmode"}`}>
                        {currentUser.firstName} {currentUser.lastName}
                      </p>
                      {deleteOnlyYoursCmnt && (
                        <FaTrash
                          className={`delete-icon ${darkMode && "bgDarkmode"}`}
                          onClick={() =>
                            handleDeleteComment(comment._id, comment.text)
                          }
                        />
                      )}
                    </div>
                    <p className={`comment-text ${darkMode && "bgDarkmode"}`}>
                      {comment?.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
