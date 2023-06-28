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
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { useData } from "../../Context/DataContext";
import { CiDark } from "react-icons/ci";
// import {useData} from "../../Context/DataContext"
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
    if (isActive) {
      return {
        color: isActive && " #8e44ad ",
        borderRadius: isActive && "0.5rem",
      };
    }
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/profile");
  };

  // const socialUser=JSON.parse(localStorage.getItem("socialUser"))
  // const userHandler=socialUser.userHandler
  return (
    <div className={`Menubar ${darkMode && "bgDarkmode"}`}>
      <ul className={`Menubar-list ${darkMode && "bgDarkmode"}`}>
        <li className={`Menubar-list-item size-1 ${darkMode && "bgDarkmode"}`}>
          <NavLink
            to={"/"}
            className={`navlink-MenuBar ${darkMode && "bgDarkmode"}`}
            style={getActiveStyle}
          >
            <ImHome />
            <span className="item-name">Home</span>
          </NavLink>
        </li>
        <li className="Menubar-list-item size-1">
          <NavLink
            to={"/explore"}
            className={`navlink-MenuBar ${darkMode && "bgDarkmode"}`}
            style={getActiveStyle}
          >
            <MdOutlineExplore />
            <span className="item-name">Explore</span>
          </NavLink>
        </li>
        <li className="Menubar-list-item size-1">
          <NavLink
            to={"/bookmark"}
            className={`navlink-MenuBar ${darkMode && "bgDarkmode"}`}
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
            className={`navlink-MenuBar ${darkMode && "bgDarkmode"}`}
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
            <p className="padding-5">
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
