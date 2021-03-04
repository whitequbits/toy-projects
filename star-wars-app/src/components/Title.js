import React from "react";
import Tilt from "react-tilt";
import "./Title.css";
import "tachyons";

function Title() {
  return (
    <div className="Title tc">
      <Tilt
        className="Tilt tc"
        options={{ max: 35 }}
        style={{ height: 150, width: 1000 }}
      >
        <img src="https://img.icons8.com/color/144/000000/star-wars.png"></img>
      </Tilt>
    </div>
  );
}

export default Title;
