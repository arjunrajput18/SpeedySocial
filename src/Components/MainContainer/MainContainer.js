import React from "react";
import { FollowBar } from "../FollowBar/FollowBar";
import { MenuBar } from "../MenuBar/MenuBar";
import "./MainContainer.css";
import { Navbar } from "../NavBar/Navbar";
import { RequireAuth } from "../../Auth/RequireAuth";
import { CommentBox } from "../CommentBox/CommentBox";
import { useData } from "../../Context/DataContext";

export const MainContainer = ({ children }) => {
  const {commentToggle}=useData()
  return (
    <>
      <RequireAuth>
        <Navbar />
        <div className="mainContainer">
          <div>
            <MenuBar />
          </div>
          <div> {children}</div>
          
         {commentToggle && <div className="overComment"><CommentBox/></div>}
         
          <div className="dektop-followbar">
            <FollowBar />
          </div>
        </div>
      </RequireAuth>
    </>
  );
};
