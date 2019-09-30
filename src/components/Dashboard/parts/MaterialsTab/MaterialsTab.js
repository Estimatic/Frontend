import React from "react";
import { ViewWrapper } from "../ViewWrapper";
import NoMaterials from "./NoMaterials";

const fakeMaterials = [];

export default function MaterialsTab() {
  return (
    <ViewWrapper>
      <h3>Your Materials (assigned by grade, i.e. A,B,C,D,F)</h3>
      <hr />
      {fakeMaterials.length === 0 ? (
        <NoMaterials />
      ) : (
        fakeMaterials.map(material => {
          return <p>hi</p>;
        })
      )}
    </ViewWrapper>
  );
}
