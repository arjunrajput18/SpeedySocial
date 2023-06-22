import React from "react";
import "./AddPost.css";
import { v4 as uuid } from "uuid";
import { IoMdArrowRoundBack } from "react-icons/io";
// import { BsFillImageFill } from "react-icons/bs";
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
    dataDispatch,
    setBtnAddPost,
    btnAddPost,
  } = useData();

  const [images, setImages] = useState();
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
        console.log(typeof postId);
        console.log(postId, "postId", postDetails);
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
    setImages(URL.createObjectURL(file));
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
    setImages(null);
    setPostDetails({ ...postDetails, file: "" });
    toast.success("Post Removed!");
  };
  return (
    <div className="AddPost-mainDiv">
      <div className="AddPost-MainContainer">
        <div className="AddPost-innerContainer">
          <div>
            <IoMdArrowRoundBack
              className="logo-back-addPost"
              onClick={() => setBtnAddPost(!btnAddPost)}
            />
          </div>
          <div>
            <textarea
              type="text"
              className="addPost-input"
              placeholder="What's on your mind?"
              onChange={(e) =>
                setPostDetails({ ...postDetails, content: e.target.value })
              }
              value={postDetails.content}
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
                {/* <BsFillImageFill /> */}
                <BiImageAdd />
              </label>
            </div>
            {images && (
              <div className="image-preview-container">
                <div className="image-preview">
                  <img
                    src={images}
                    alt="img1"
                  
                  />
                  <button
                    className="image-preview-button"
                    onClick={handleImageRemove}
                  >
                    <AiFillMinusCircle />
                  </button>
                </div>
              </div>
            )}
            <button className="btn-add-post" onClick={addNoteHandler}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
