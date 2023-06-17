import React from "react";
import "./Search.css";
import { BsSearch } from "react-icons/bs";
import { useData } from "../../Context/DataContext";

export const Search = () => {
  const {userSearch, setUserSearch} =useData()
  return (
    <div className="searchBox">
      <input type="search" className="searchInput" placeholder="Search here " onChange={(e) => setUserSearch(e.target.value)} value={userSearch}  />
      <span className="searchButton">
        <BsSearch />
      </span>
    </div>
  );
};
