import React from "react";
import { FollowBar } from "../FollowBar/FollowBar";
import { MenuBar } from "../MenuBar/MenuBar";
import "./MainContainer.css";
import { Navbar } from "../NavBar/Navbar";
import { RequireAuth } from "../../Auth/RequireAuth";
import { CommentBox } from "../CommentBox/CommentBox";
import { useData } from "../../Context/DataContext";
import { EditProfile } from "../../Features/Profile/EditProfile";
import { AddPost } from "../AddPost/AddPost";

export const MainContainer = ({ children }) => {
  const { commentToggle, setEditBtn, editBtn, btnAddPost, darkMode } =
    useData();
  return (
    <>
      <RequireAuth>
        <Navbar />
        <div className={`mainContainer ${darkMode && "bgDarkmode"}`}>
          <div>
            <MenuBar />
          </div>
          <div> {children}</div>
          {btnAddPost && <AddPost />}
          {commentToggle && (
            <div className="overComment">
              <CommentBox />
            </div>
          )}
          {editBtn && <div className="editBox-bottom"></div>}

          {editBtn && (
            <div className="editBox-Main">
              <EditProfile setEditBtn={setEditBtn} editBtn={editBtn} />
            </div>
          )}
          <div className="dektop-followbar">
            <FollowBar />
          </div>
        </div>
      </RequireAuth>
    </>
  );
};
