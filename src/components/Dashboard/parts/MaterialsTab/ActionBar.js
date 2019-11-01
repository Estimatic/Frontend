import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  margin: {
    margin: "0",
    marginBottom: "16px",
    background: "#0D076F",
    color: "white"
  }
});

function ActionBar(props) {
  const classes = useStyles();
  const { secondary_color, side_bar_color } = props.ui.colors;
  return (
    <div>
      <Button
        style={{
          backgroundColor: secondary_color || "#0D076F",
          color: side_bar_color || "white"
        }}
        variant="contained"
        size="small"
        className={classes.margin}
        onClick={() => {
          props.history.push("/app/materials/category/create");
        }}
      >
        Add Category
      </Button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ui: { ...state.ui }
  };
};

export default connect(
  mapStateToProps,
  {}
)(withRouter(ActionBar));
