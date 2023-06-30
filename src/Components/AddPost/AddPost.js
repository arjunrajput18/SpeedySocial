import React from "react";
import "./AddPost.css";
import { v4 as uuid } from "uuid";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BiImageAdd } from "react-icons/bi";
import { useState } from "react";
import {
  createPostHandler,
  editPostHandler,
} from "../../Services/DataServices";
import { useData } from "../../Context/DataContext";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { AiFillMinusCircle } from "react-icons/ai";
export const AddPost = () => {
  const {
    dataState: { postId, posts },
    darkMode,
    dataDispatch,
    setBtnAddPost,
    btnAddPost,
    setIsLoading,
  } = useData();

  const [postDetails, setPostDetails] = useState({
    _id: uuid(),
    content: "",
    file: "",
    comments: [],
  });
  const socialToken = localStorage.getItem("socialToken");
  const addNoteHandler = () => {
    if (postId) {
      if (postDetails.content.length > 0 || postDetails.file) {
        editPostHandler(postId, postDetails, dataDispatch, socialToken);

        dataDispatch({ type: "EDIT_POST", payload: null });
        setBtnAddPost(!btnAddPost);
        toast.success("Post Updated!");
      } else {
        toast.warn("Please add post or photo/gif!");
      }
    } else {
      if (postDetails.content.length > 0 || postDetails.file) {
        createPostHandler(postDetails, socialToken, dataDispatch);
        setBtnAddPost(!btnAddPost);
        toast.success("Post Added!");
      } else {
        toast.warn("Please add post or photo/gif!");
      }
    }
  };

  const fileUploadHandle = (e) => {
    const file = e.target.files[0];

    setIsLoading(false);
    setPostDetails({ ...postDetails, file: URL.createObjectURL(file) });
    toast.success("Post Selected!");
  };

  useEffect(() => {
    const postData = posts?.find(({ _id }) => postId === _id);
    if (postId) {
      setPostDetails(postData);
    } else {
      setPostDetails({
        _id: uuid(),
        content: "",
        file: "",
        comments: [],
      });
    }
  }, []);

  const handleImageRemove = () => {
    setPostDetails({ ...postDetails, file: "" });
    toast.success("Post Removed!");
  };

  const handleBack = () => {
    dataDispatch({ type: "EDIT_POST", payload: null });
    setBtnAddPost(!btnAddPost);
  };
  return (
    <div className={`AddPost-mainDiv`}>
      <div className={`AddPost-MainContainer`}>
        <div className={`AddPost-innerContainer ${darkMode && "bgDarkmode"}`}>
          <div>
            <IoMdArrowRoundBack
              className={`logo-back-addPost ${darkMode && "bgDarkmode"}`}
              onClick={handleBack}
            />
          </div>
          <div>
            <textarea
              type="text"
              className={`addPost-input ${darkMode && "bgSecondaryDarkMode"}`}
              placeholder="What's on your mind?"
              onChange={(e) =>
                setPostDetails({ ...postDetails, content: e.target.value })
              }
              value={postDetails.content}
              autoFocus
            />
          </div>
          <div className="addPost-upload-file-post">
            <div class="file-upload">
              <input
                type="file"
                id="upload"
                class="input-file"
                onChange={fileUploadHandle}
              />
              <label for="upload" class="file-label">
                <BiImageAdd />
              </label>
            </div>
            {postDetails.file && (
              <div className="image-preview-container">
                <div className="image-preview">
                  <img src={postDetails.file} alt="img2221" />
                  <button
                    className="image-preview-button"
                    onClick={handleImageRemove}
                  >
                    <AiFillMinusCircle />
                  </button>
                </div>
              </div>
            )}
            <button
              className={`btn-add-post ${darkMode && "btnDark"}`}
              onClick={addNoteHandler}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
