import React from "react";
import "./SearchBar.css";

function SearchBar({ searchChange }) {
  return (
    <div className="tc">
      <input
        type="search"
        placeholder="Type Here"
        onChange={searchChange}
      ></input>
    </div>
  );
}

export default SearchBar;
