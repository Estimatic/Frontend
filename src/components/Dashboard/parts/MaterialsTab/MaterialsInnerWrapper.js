import React from "react";
import SingleCategory from "./SingleCategory";

export default function MaterialsInnerWrapper(props) {
  return (
    <div>
      {props.categories.map(category => {
        return <SingleCategory key={category._id} category={category} />;
      })}
    </div>
  );
}
