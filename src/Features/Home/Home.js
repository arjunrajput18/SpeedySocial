import React, { useEffect } from "react";
import "./Home.css";
import { BsFire } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiFillPlusCircle } from "react-icons/ai";
import { SinglePost } from "../../Components/SinglePost/SinglePost";
import { FollowBar } from "../../Components/FollowBar/FollowBar";
import { useData } from "../../Context/DataContext";
import { useState } from "react";
import { v4 as uuid } from "uuid";

import { AddPost } from "../../Components/AddPost/AddPost";
import { BsClock } from "react-icons/bs";

export const Home = () => {
  const {
    dataState: { posts, users },
    setBtnAddPost,
    btnAddPost,
    setIsLoading,
  } = useData();
  const defaultPost = {
    _id: uuid(),
    content: "",
    comments: [],
  };
  const [postsType, setPostsType] = useState("latest");



  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInUser = users?.find((el) => el.username === socialUser.username);

  const loggedInUserPosts = posts?.filter(
    (post) => post?.username === loggedInUser?.username
  );

  const homePosts = posts?.filter((post) =>
    loggedInUser?.following?.some((el) => el.username === post.username)
  );

  const likedPosts = [...loggedInUserPosts, ...homePosts]?.filter(
    (post) => post?.likes?.likedBy?.length > 0
  );
  // console.log(likedPosts, "likedPost");
  // const followLiked=
  const sortPostsByLikes = [...likedPosts]?.sort(
    (a, b) => a.likes.likedBy.length - b.likes.likedBy.length
  );
  // [...loggedInUserPosts.reverse(), ...homePosts].reverse()
  const combinedData = [...loggedInUserPosts.reverse(), ...homePosts].reverse();

  // sortPostsByLikes

  const postsByType = postsType === "latest" ? combinedData.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  ) :  postsType === "oldest"?combinedData.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)):sortPostsByLikes;

  const HandleAddPost = () => {
    setBtnAddPost(true);
  };


const HandleSortBy=(e)=>{
  const sortVal=e.target.value  // setSortBy()
  // console.log(sortVal)
  setPostsType(e.target.value)
}

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  return (
    <div className="home">
      <div className="home-input-box">
        <button className="cgProfile-input-post">
          <CgProfile className="profile-logo-input" />
        </button>
        <input
          type="btn"
          placeholder="what's on your mind?"
          className="addPost"
          onClick={HandleAddPost}
          disabled={btnAddPost}
        />
        <button className="plus-logo-input">
          <AiFillPlusCircle onClick={HandleAddPost} />
        </button>
      </div>
      <div className="trend-latest">
        <select className="btn-TL latest-btn"    onClick={HandleSortBy}   onChange={HandleSortBy}>
          <option
   
            className="btn-TL btn-L trending-btn "
            value="latest"
          >
            <BsClock />
            Latest Post
          </option>

          <option
        
            className="btn-TL btn-L trending-btn"
            value={"oldest"}
          >
            <BsClock />
            Oldest Post
          </option>
        </select>
        <button
          onClick={() => setPostsType("trending")}
          className="btn-TL latest-btn"
        >
          <BsFire />
          Trending
        </button>
      </div>
      <div className="follow-bar">
        <FollowBar />
      </div>
      {btnAddPost && <AddPost />}

      {postsByType.length > 0 ? (
        <div className="posts">
          {postsByType?.reverse()?.map((post) => (
            <SinglePost key={post._id} data={post} />
          ))}
        </div>
      ) : (
        <h2 className="likes-posts-heading text-center">
          Liked Some Posts To See
        </h2>
      )}
    </div>
  );
};
