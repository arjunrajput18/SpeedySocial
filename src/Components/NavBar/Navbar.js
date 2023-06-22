import React from "react";
import "./Navbar.css";
import logo from "../../Assets/twitter.png";
import { Search } from "../Search/Search";
import { useData } from "../../Context/DataContext";

import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const {userSearch,setUserSearch, dataState: { users } } =useData()
  const socialUser = JSON.parse(localStorage.getItem("socialUser"))
  const navigate = useNavigate();
  const searchValue = userSearch
  ? users?.filter(item => item.username===socialUser.username?null:item.userHandler.toLowerCase().includes(userSearch.toLowerCase()))
  : [];
  // console.log(searchValue,"userSearch")
  const handleClick = (userHandler) => {
    setUserSearch("")
    navigate(`/profile/${userHandler}`);
  };


  return (
    <nav className="navbar">
    <div className="nav-main flex">
      <div className="nav-logo">
        <img src={logo} alt="logo" height={50} width={50} />
      </div>
      <div className="nav-heading">Speedy Social</div>
    </div>
    <div className="search-navbar">
      <Search />
      <div className="searchOutput">
        <ul className="searchResults">
          {searchValue?.map((data) => (
            <li className="searchResult-item" key={data._id}>
              <div className="profile-container">
                <img
                  src={data.profilePic}
                  alt="profile1"
                  className="profileImg"
                  onClick={() => handleClick(data.userHandler)}
                />
                <div className="profile-info">
                  <p
                    className="user-follow-name"
                    onClick={() => handleClick(data.userHandler)}
                  >
                    {data.firstName} {data.lastName}
                  </p>
                  <span
                    className="userId"
                    onClick={() => handleClick(data.userHandler)}
                  >
                    {data.userHandler}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
  

  );
};
