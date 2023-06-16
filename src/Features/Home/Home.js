import React from "react";
import "./Home.css";
import { BsFire } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiFillPlusCircle } from "react-icons/ai";
import { SinglePost } from "../../Components/SinglePost/SinglePost";
import { FollowBar } from "../../Components/FollowBar/FollowBar";
import { useData } from "../../Context/DataContext";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { createPostHandler } from "../../Services/DataServices";
export const Home = () => {
  const {
    dataState: { posts },dataDispatch
  } = useData();
  const defaultPost = {
    _id: uuid(),
    content: "",
    comments: [],
  };
  const [postsType, setPostsType] = useState("latest");
  const [newPost, setNewPost] = useState(defaultPost);
  const socialToken = localStorage.getItem("socialToken");
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const homePosts = posts?.filter(post => socialUser?.following?.some(el => el.username === post.username));
  console.log(homePosts,"home")
const addNoteHandler=()=>{

  console.log("hii")
  if (newPost.content.length > 0) {
    createPostHandler(newPost, socialToken,dataDispatch );
    setNewPost(defaultPost);
  }
}
const loggedInUserPosts = posts?.filter(post => post?.username === socialUser?.username);

const likedPosts = posts?.filter(post => post?.likes?.likedBy?.length > 0);

const sortPostsByLikes = [...likedPosts]?.sort((a, b) => a.likes.likedBy.length - b.likes.likedBy.length)

const postsByType = postsType === "latest" ? [...loggedInUserPosts, ...homePosts] : sortPostsByLikes;



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
          value={newPost.content}
          onChange={(e)=>setNewPost({...newPost,content:e.target.value})}
        />
        <button className="plus-logo-input">
          <AiFillPlusCircle  onClick={addNoteHandler}/>
        </button>
      </div>
      <div className="trend-latest">
        <button onClick={() => setPostsType("trending")}  className="btn-TL btn-L trending-btn">
          <BsFire />
          Trending
        </button>
        <button onClick={() => setPostsType("latest")} className="btn-TL latest-btn">Latest Post</button>
      </div>
      <div className="follow-bar">
        <FollowBar />
      </div>
      {/* <AddPost/> */}

 
      {
        postsByType?.length > 0 ? <div className='posts'>
          {
            postsByType?.reverse()?.map(post => <SinglePost key={post._id} data={post} />)
          }
        </div>
          :
          <h2 className='likes-posts-heading text-center'>Liked Some Posts To See</h2>
      }
    </div>
  );
};
