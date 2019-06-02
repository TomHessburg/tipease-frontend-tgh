import React from "react";
import { connect } from "react-redux";
import UsersTopBar from "./TopBar/UsersTopBar.js";

const Users = props => {
  console.log(props);
  return (
    <div>
      <UsersTopBar history={props.history} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  {}
)(Users);
