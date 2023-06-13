import React from "react";
import { FollowBar } from "../FollowBar/FollowBar";
import { MenuBar } from "../MenuBar/MenuBar";
import "./MainContainer.css";
import { Navbar } from "../NavBar/Navbar";
import { RequireAuth } from "../../Auth/RequireAuth";

export const MainContainer = ({ children }) => {
  return (
    <>
      <RequireAuth>
        <Navbar />
        <div className="mainContainer">
          <div>
            <MenuBar />
          </div>
          <div> {children}</div>
          <div className="dektop-followbar">
            <FollowBar />
          </div>
        </div>
      </RequireAuth>
    </>
  );
};
