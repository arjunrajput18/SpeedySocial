import React from "react";
import "./AddPost.css";
import { IoMdArrowRoundBack } from "react-icons/io";
// import { BsFillImageFill } from "react-icons/bs";
import {BiImageAdd} from "react-icons/bi"
export const AddPost = () => {
  return (
    <div className="AddPost-mainDiv">
      <div className="AddPost-MainContainer">
        <div className="AddPost-innerContainer">
          <div>
            <IoMdArrowRoundBack className="logo-back-addPost" />
          </div>
          <div>
            <textarea
              type="text"
              className="addPost-input"
              placeholder="What's on your mind?"
            />
          </div>
          <div className="addPost-upload-file-post">
            <div class="file-upload">
              <input type="file" id="upload" class="input-file" />
              <label for="upload" class="file-label">
                {/* <BsFillImageFill /> */}
                <BiImageAdd/>
              </label>
            </div>
            <button className="btn-add-post">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};
