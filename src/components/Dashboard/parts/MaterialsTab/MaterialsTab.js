import React, { useState, useEffect } from "react";
import { ViewWrapper } from "../ViewWrapper";
import NoMaterials from "./NoMaterials";
import MaterialsInnerWrapper from "./MaterialsInnerWrapper";
import ActionBar from "./ActionBar";
import { connect } from "react-redux";
import { getCompantCategories } from "../../../../actions/categories";

function MaterialsTab(props) {
  const [categories, setCategories] = useState([]);

  // fetch categories and materials for a company
  const { company_id } = props.user;
  const { getCompantCategories } = props;
  useEffect(() => {
    if (company_id) {
      getCompantCategories(company_id);
    }
  }, [company_id, getCompantCategories]);

  // set categories to state
  useEffect(() => {
    const fetchedCategories = props.categories;

    // currently faking a materials array for each cat until thats working
    fetchedCategories.map(cat => (cat.materials = []));
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

export default connect(
  mapStateToProps,
  { getCompantCategories }
)(MaterialsTab);
