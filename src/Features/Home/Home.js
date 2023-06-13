import React from "react";
import "./Home.css";
import { BsFire } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiFillPlusCircle } from "react-icons/ai";
import { SinglePost } from "../../Components/SinglePost/SinglePost";
import { FollowBar } from "../../Components/FollowBar/FollowBar";
import { useData } from "../../Context/DataContext";
export const Home = () => {

const {dataState:{posts}}=useData()

// console.log(posts,"postsss")

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
        <button className="btn-TL btn-L trending-btn">
          <BsFire />
          Trending
        </button>
        <button className="btn-TL latest-btn">Latest Post</button>
      </div>
      <div  className="follow-bar">
      <FollowBar/>
      </div>
      {/* <AddPost/> */}

 {posts.map((data)=> <SinglePost data={data} key={data._id}/>)}      

 


    </div>
  );
};
