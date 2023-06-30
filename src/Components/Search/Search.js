import React from "react";
import "./Search.css";
import { BsSearch } from "react-icons/bs";
import { useData } from "../../Context/DataContext";

export const Search = () => {
  const { userSearch, setUserSearch, darkMode } = useData();
  return (
    <div className={`searchBox  ${darkMode && "bgSecondaryDarkMode"}`}>
      <input
        type="search"
        className={`searchInput  ${darkMode && "bgSecondaryDarkMode"}`}
        placeholder="Search here "
        onChange={(e) => setUserSearch(e.target.value)}
        value={userSearch}
      />
      <span className={`searchButton  ${darkMode && "bgSecondaryDarkMode"}`}>
        <BsSearch />
      </span>
    </div>
  );
};
