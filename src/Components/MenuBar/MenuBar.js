import React from "react";
import "./MenuBar.css";
import { ImHome } from "react-icons/im";
import {
  MdDarkMode,
  MdLightMode,
  MdOutlineDarkMode,
  MdOutlineExplore,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { useData } from "../../Context/DataContext";

export const MenuBar = () => {
  const { setIsLoggedIn } = useAuth();
  const {
    dataState: { users },
    darkMode,
    setDarkMode,
  } = useData();
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInuser = users?.find(
    ({ username }) => username === socialUser.username
  );
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("socialUser");
    localStorage.removeItem("socialToken");
    setTimeout(() => {
      toast.success("Logout successful!");
    }, 200);
  };

  const getActiveStyle = ({ isActive }) => {
    if (isActive && !darkMode) {
      return {
        color: isActive && " #8e44ad ",
      };
    } else {
      return {
        color: isActive && "lightcoral",
      };
    }
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/profile");
  };
  return (
    <div className={`Menubar ${darkMode && "bgDarkmode"}`}>
      <ul className={`Menubar-list ${darkMode && "bgDarkmodeActive"}`}>
        <li
          className={`Menubar-list-item size-1 ${
            darkMode && "bgDarkmodeActive"
          }`}
        >
          <NavLink
            to={"/"}
            className={`  ${
              !darkMode ? "navlink-MenuBar" : "bgDarkmodeActive"
            }`}
            style={getActiveStyle}
          >
            <ImHome />
            <span className={`item-name `}>Home</span>
          </NavLink>
        </li>
        <li className="Menubar-list-item size-1">
          <NavLink
            to={"/explore"}
            className={`  ${
              !darkMode ? "navlink-MenuBar" : "bgDarkmodeActive"
            }`}
            style={getActiveStyle}
          >
            <MdOutlineExplore />
            <span className="item-name">Explore</span>
          </NavLink>
        </li>
        <li className="Menubar-list-item size-1">
          <NavLink
            to={"/bookmark"}
            className={`  ${
              !darkMode ? "navlink-MenuBar" : "bgDarkmodeActive"
            }`}
            style={getActiveStyle}
          >
            <BsFillBookmarkHeartFill />
            <span className="item-name">Bookmark</span>
          </NavLink>
        </li>
        {darkMode ? (
          <li
            className="Menubar-list-item size-1"
            onClick={() => setDarkMode(false)}
          >
            <MdLightMode />
            <span className="item-name">Light Mode</span>
          </li>
        ) : (
          <li
            className="Menubar-list-item size-1"
            onClick={() => setDarkMode(true)}
          >
            <MdDarkMode />
            <span className="item-name">Dark Mode</span>
          </li>
        )}
        <li className="Menubar-list-item size-1">
          <NavLink
            to={"/profile"}
            className={`  ${
              !darkMode ? "navlink-MenuBar" : "bgDarkmodeActive"
            }`}
            style={getActiveStyle}
          >
            <CgProfile />
            <span className="item-name">Profile</span>
          </NavLink>
        </li>
        <li className="Menubar-list-item size-1" onClick={handleLogout}>
          <IoMdLogOut />
          <span className="item-name">Logout</span>
        </li>
        <div className="MenuBarProfile hideBox">
          <img
            src={loggedInuser?.profilePic}
            alt="img"
            height={45}
            width={45}
            className=" flex align-center justify-center margin-top-1 "
          />
          <div onClick={handleNavigate} className="pointer">
            <p className={`padding-5 ${darkMode && "bgDarkmode"}`}>
              {loggedInuser?.firstName} {loggedInuser?.lastName}
            </p>
            <p className="single-profile-userId smaller">
              {loggedInuser?.userHandler}
            </p>
          </div>
        </div>
      </ul>
    </div>
  );
};
