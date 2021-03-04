import React from "react";

function Searchbox({ searchfield, searchChange }) {
  return (
    <div className="tc bg-light-green dib br1 pa1 ma1 grow bw2 shadow-5">
      <input
        aria-label="SearchRobot"
        type="search"
        placeholder="Input Something"
        onChange={searchChange}
      ></input>
    </div>
  );
}

export default Searchbox;
