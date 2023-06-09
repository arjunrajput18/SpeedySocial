import React from "react";
import "./Search.css";
import { BsSearch } from "react-icons/bs";

export const Search = () => {
  return (
    <div className="searchBox">
      <input type="search" className="searchInput" placeholder="Search here " />
      <span className="searchButton">
        <BsSearch />
      </span>
    </div>
  );
};
