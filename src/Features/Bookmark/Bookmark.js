import React from "react";
import { useData } from "../../Context/DataContext";
import { SinglePost } from "../../Components/SinglePost/SinglePost";
import "./Bookmark.css";
import { useEffect } from "react";
export const Bookmark = () => {
  const {
    dataState: { users, posts },
    setIsLoading,
    darkMode,
  } = useData();
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));

  const loggedInUser = users?.find(
    ({ username }) => username === socialUser.username
  );
  const newBookmark = posts?.filter(({ _id }) =>
    loggedInUser?.bookmarks.includes(_id)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);
  return (
    <div className={` home ${darkMode && "bgDarkmode"}`}>
      {newBookmark?.length > 0 ? (
        newBookmark.map((data) => <SinglePost data={data} key={data._id} />)
      ) : (
        <p className={`bookmarke-heading ${darkMode && "bgDarkmode"}`}>
          No bookmarks available.
        </p>
      )}
    </div>
  );
};
