import React from "react";

function Scroll(props) {
  return (
    <div style={{ overflowX: "scroll", height: "12rem" }}>{props.children}</div>
  );
}

export default Scroll;
