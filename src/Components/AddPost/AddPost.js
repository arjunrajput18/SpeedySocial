import React from "react";
import "./AddPost.css";
import { v4 as uuid } from "uuid";
import { IoMdArrowRoundBack } from "react-icons/io";
// import { BsFillImageFill } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import { useState } from "react";
import { createPostHandler } from "../../Services/DataServices";
import { useData } from "../../Context/DataContext";
export const AddPost = () => {
  const { dataDispatch ,setBtnAddPost,btnAddPost} = useData();
  const defaultPost = {
    _id: uuid(),
    content: "",
    file:"",
  };
  const [newPost, setNewPost] = useState(defaultPost);
  const [images, setImages] = useState();

  const socialToken = localStorage.getItem("socialToken");
  const addNoteHandler = () => {

    if (newPost.content.length > 0) {
      createPostHandler(newPost, socialToken, dataDispatch);
      setNewPost(defaultPost);
      setBtnAddPost(!btnAddPost)
    }
  };

  const fileUploadHandle = (e) => {
 const file = e.target.files[0];
 setImages(URL.createObjectURL(file))
 setNewPost({...newPost,file:URL.createObjectURL(file)})
  };

  return (
    <div className="AddPost-mainDiv">
      <div className="AddPost-MainContainer">
        <div className="AddPost-innerContainer">
          <div>
            <IoMdArrowRoundBack className="logo-back-addPost"  onClick={()=>setBtnAddPost(!btnAddPost)}/>
          </div>
          <div>
            <textarea
              type="text"
              className="addPost-input"
              placeholder="What's on your mind?"
              onChange={(e) =>
                setNewPost({ ...newPost, content: e.target.value })
              }
              value={newPost.content}
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
            {images && <img
            src={images}
            alt="img1"
            className="single-profile-photo-comment"
            height={100}
            width={100}
          />}
            {images && <button onClick={()=>setImages(null)}>-</button>}
            <button className="btn-add-post" onClick={addNoteHandler}>
              Post
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};
