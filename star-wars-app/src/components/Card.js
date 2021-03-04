import React from "react";

function Card({ prop1, prop2, prop3 }) {
  if (prop2 === "n/a") {
    prop2 = "robot";
  }
  return (
    <div className=" Card tc bg-white-30 dib br3 pa3 ma3 grow bw2 shadow-5">
      <div>
        <h2 className="subtitle">{prop1}</h2>
        <p className="Prop">{prop2}</p>
        <p className="Prop">{prop3}</p>
      </div>
    </div>
  );
}
export default Card;
