import React from "react";
import "./MenuBar.css";
import { ImHome } from "react-icons/im";
import { MdOutlineExplore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
export const MenuBar = () => {
  return (
    <div className="Menubar">
      <ul className="Menubar-list">
        <li className="Menubar-list-item size-1">
          <ImHome />
          <span className="item-name ">Home</span>
        </li>
        <li className="Menubar-list-item size-1">
          <MdOutlineExplore />
          <span className="item-name">Explore</span>
        </li>
        <li className="Menubar-list-item size-1">
          <BsFillBookmarkHeartFill />
          <span className="item-name">Bookmark</span>
        </li>
        <li className="Menubar-list-item size-1">
          <CgProfile />
          <span className="item-name">Profile</span>
        </li>
        <li className="Menubar-list-item size-1">
          <IoMdLogOut />
          <span className="item-name">Logout</span>
        </li>
      </ul>
    </div>
  );
};
