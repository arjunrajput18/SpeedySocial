import React from "react";
import { FollowBar } from "../FollowBar/FollowBar";
import { MenuBar } from "../MenuBar/MenuBar";
import "./MainContainer.css";

export const MainContainer = ({ children }) => {
  return (
    <div className="mainContainer">
      <div>
        <MenuBar />
      </div>
      <div>{children}</div>
      <FollowBar />
    </div>
  );
};
