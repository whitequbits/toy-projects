import React from "react";
import Card from "./Card";

function MovieCardlist({ input }) {
  const MovieCardArray = input.map((user, i) => {
    return (
      <Card
        key={i}
        prop1={input[i].title}
        prop2={input[i].release_date}
        prop3={input[i].director}
      />
    );
  });
  return <div>{MovieCardArray}</div>;
}

export default MovieCardlist;
