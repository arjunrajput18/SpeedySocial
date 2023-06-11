import React from "react";
import "./MenuBar.css";
import { ImHome } from "react-icons/im";
import { MdOutlineExplore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
export const MenuBar = () => {
  return (
    <div className="Menubar">
      <ul className="Menubar-list">
        <li className="Menubar-list-item size-1">
          <NavLink to={"/"} className={"navlink-MenuBar"}>
            <ImHome />
            <span className="item-name">Home</span>
          </NavLink>
        </li>
        <li className="Menubar-list-item size-1">
          <NavLink to={"/explore"} className={"navlink-MenuBar"}>
            <MdOutlineExplore />
            <span className="item-name">Explore</span>
          </NavLink>
        </li>
        <li className="Menubar-list-item size-1">
        <NavLink to={"/bookmark"} className={"navlink-MenuBar"} >
        <BsFillBookmarkHeartFill />
          <span className="item-name">Bookmark</span>
        </NavLink>
   
        </li>
        <li className="Menubar-list-item size-1">
          <NavLink to={"/profile"} className={"navlink-MenuBar"}>
            <CgProfile />
            <span className="item-name">Profile</span>
          </NavLink>
        </li>
        <li className="Menubar-list-item size-1">
          <IoMdLogOut />
          <span className="item-name">Logout</span>
        </li>
      </ul>
    </div>
  );
};
