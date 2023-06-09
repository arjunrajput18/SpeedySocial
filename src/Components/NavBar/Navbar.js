import React from "react";
import "./Navbar.css";
import logo from "../../Assets/twitter.png";
import { Search } from "../Search/Search";

export const Navbar = () => {
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
</div>
    </nav>
  );
};
