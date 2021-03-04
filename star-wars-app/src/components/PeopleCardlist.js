import React from "react";
import Card from "./Card";

function PeopleCardlist({ input }) {
  const PeopleCardArray = input.map((user, i) => {
    return (
      <Card
        key={i}
        prop1={input[i].name}
        prop2={input[i].gender}
        prop3={input[i].birth_year}
      />
    );
  });
  return <div>{PeopleCardArray}</div>;
}

export default PeopleCardlist;
