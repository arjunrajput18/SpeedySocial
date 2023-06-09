import React from "react";
import "./Home.css";
import { BsFire } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiFillPlusCircle } from "react-icons/ai";
import { SinglePost } from "../../Components/SinglePost/SinglePost";
export const Home = () => {
  return (
    <div className="home">
      <div className="home-input-box">
        <button className="cgProfile-input-post">
          <CgProfile className="profile-logo-input" />
        </button>
        <input
          type="text"
          placeholder="what's on your mind?"
          className="addPost"
        />
        <button className="plus-logo-input">
          <AiFillPlusCircle />
        </button>
      </div>
      <div className="trend-latest">
        <button className="btn-TL trending-btn">
          <BsFire />
          Trending
        </button>
        <button className="btn-TL latest-btn">Latest Post</button>
      </div>
      <SinglePost />
      
      
      

    </div>
  );
};
