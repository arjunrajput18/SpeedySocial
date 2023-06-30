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
    darkMode,
  } = useData();
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

  const sortPostsByLikes = [...likedPosts]?.sort(
    (a, b) => a.likes.likedBy.length - b.likes.likedBy.length
  );
  const combinedData = [...loggedInUserPosts.reverse(), ...homePosts].reverse();

  const postsByType =
    postsType === "latest"
      ? combinedData.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        )
      : postsType === "oldest"
      ? combinedData.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      : sortPostsByLikes;

  const HandleAddPost = () => {
    setBtnAddPost(true);
  };

  const HandleSortBy = (e) => {
    setPostsType(e.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  return (
    <div className={`home ${darkMode && "bgDarkmode"}`}>
      <div className={`home-input-box ${darkMode && "bgSecondaryDarkMode"}`}>
        <button
          className={`cgProfile-input-post ${
            darkMode && "bgSecondaryDarkMode"
          }`}
        >
          <CgProfile
            className={`profile-logo-input ${
              darkMode && "bgSecondaryDarkMode"
            }`}
          />
        </button>
        <input
          type="btn"
          placeholder="what's on your mind?"
          className={`addPost ${darkMode && "bgSecondaryDarkMode"}`}
          onClick={HandleAddPost}
          disabled={btnAddPost}
        />
        <button
          className={`plus-logo-input ${darkMode && "bgSecondaryDarkMode"}`}
        >
          <AiFillPlusCircle onClick={HandleAddPost} />
        </button>
      </div>
      <div className="trend-latest">
        <select
          className={`btn-TL latest-btn ${darkMode && "bgSecondaryDarkMode"}`}
          onClick={HandleSortBy}
          onChange={HandleSortBy}
        >
          <option
            className={`btn-TL btn-L trending-btn ${
              postsType === "latest" ? "bgColor" : ""
            }  ${darkMode && "bgSecondaryDarkMode"}`}
            value="latest"
          >
            <BsClock />
            <p className={` ${darkMode && "bgSecondaryDarkMode"}`}>
              Latest Post
            </p>
          </option>

          <option
            className={`btn-TL btn-L trending-btn  ${
              postsType === "oldest" ? "bgColor" : ""
            }`}
            value={"oldest"}
          >
            <BsClock />
            Oldest Post
          </option>
        </select>
        <button
          onClick={() => setPostsType("trending")}
          className={`btn-TL latest-btn ${
            postsType === "trending" ? "bgColor" : ""
          }  ${darkMode && "bgSecondaryDarkMode"}`}
        >
          <BsFire />
          Trending
        </button>
      </div>
      <div className={`follow-bar  ${darkMode && "bgSecondaryDarkMode"} `}>
        <FollowBar />
      </div>
      {postsType === "trending" && (
        <p
          className={`flex justify-center trendingPhotosHeading ${
            darkMode && "bgDarkmode"
          }`}
        >
          <BsFire /> Trending posts
        </p>
      )}
      {postsType === "latest" && (
        <p
          className={`flex justify-center trendingPhotosHeading ${
            darkMode && "bgDarkmode"
          }`}
        >
          Latest posts
        </p>
      )}

      {postsType === "oldest" && (
        <p
          className={`flex justify-center trendingPhotosHeading ${
            darkMode && "bgDarkmode"
          }`}
        >
          Oldest posts
        </p>
      )}

      {postsByType.length > 0 ? (
        <div className="posts">
          {postsByType?.reverse()?.map((post) => (
            <SinglePost key={post._id} data={post} />
          ))}
        </div>
      ) : (
        <h2
          className={`likes-posts-heading text-center followbar-heading margin-top-1 ${
            darkMode && "bgDarkmode"
          }`}
        >
          Please follow some users to see their feeds.
        </h2>
      )}
    </div>
  );
};
