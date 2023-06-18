import React from "react";
import "./Navbar.css";
import logo from "../../Assets/twitter.png";
import { Search } from "../Search/Search";
import { useData } from "../../Context/DataContext";
import profile1 from "../../Assets/profile1.png";
import { getFollowHandler } from "../../Services/DataServices";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const {userSearch,setUserSearch, dataState: { users } ,dataDispatch} =useData()
  // const {userSearch, setUserSearch} =useData()
  const socialToken = localStorage.getItem("socialToken");

  const socialUser = JSON.parse(localStorage.getItem("socialUser"))
  const navigate = useNavigate();
  const searchValue = userSearch
  ? users?.filter(item => item.username.toLowerCase().includes(userSearch.toLowerCase()))
  : [];
  // console.log(searchValue,"userSearch")
  const handleClick = (userHandler) => {
    setUserSearch("")
    navigate(`/profile/${userHandler}`);
  };

const handleFollow=(_id,socialToken,dataDispatch)=>{
  getFollowHandler(_id,socialToken,dataDispatch)
}
  return (
    <nav>
      <div className="nav-main flex ">
        <div className="nav-logo">
          <img src={logo} alt="logo" height={50} width={50} />
        </div>
        <div className="nav-heading">Speedy Social</div>
      </div>
<div className="search-navbar">

      <Search />
      {/* <div>{searchValue?.map((data)=>data.firstName)}</div> */}
      <div className="searchOutput">{searchValue?.map((data)=> <li className="followBar-list-item" key={data._id}>
              <div className="profile-follow">
                <img
                  src={profile1}
                  alt="profile1"
                  className="profileImg"
                  onClick={() => handleClick(data.userHandler)}
                />
                <div>
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
                <div>
                  <button className="btn-follow" onClick={()=>handleFollow(data._id,socialToken,dataDispatch)}>+Follow</button>
                </div>
              </div>

              {/* <hr /> */}
            </li>)}</div>
</div>
    </nav>
  );
};
