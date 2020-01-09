import React, { useState, useEffect } from "react";
import { ViewWrapper } from "../ViewWrapper";
import NoMaterials from "./NoMaterials";
import MaterialsInnerWrapper from "./MaterialsInnerWrapper";
import ActionBar from "./ActionBar";
import { connect } from "react-redux";
import withData from "../../../DataFetchingHOC";

function MaterialsTab(props) {
  const [categories, setCategories] = useState([]);

  // set categories to state
  useEffect(() => {
    const fetchedCategories = props.categories;

    setCategories(fetchedCategories);
  }, [props.categories]);

  return (
    <ViewWrapper>
      <h3>Your Materials</h3>
      <hr style={{ marginBottom: "16px" }} />
      <ActionBar />
      {categories.length === 0 ? (
        <NoMaterials />
      ) : (
        <MaterialsInnerWrapper categories={categories} />
      )}
    </ViewWrapper>
  );
}

const mapStateToProps = state => {
  return {
    user: { ...state.auth.user },
    categories: state.categories.categories
  };
};

export default withData(
  connect(
    mapStateToProps,
    {}
  )(MaterialsTab)
);
