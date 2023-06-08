import React from "react";
import "./Navbar.css";
import logo from "../../Assets/twitter.png"

export const Navbar = () => {
  return (
    <nav>
    <div className="nav-logo"><img src={logo} alt="logo" height={50} width={50}/></div>
      <div className="nav-heading">Speedy Social</div>
    </nav>
  );
};
