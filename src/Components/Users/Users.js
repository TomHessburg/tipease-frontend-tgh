import React from "react";
import { connect } from "react-redux";
import UsersTopBar from "./TopBar/UsersTopBar.js";
import UsersDashboard from "./UsersDashboard/UsersDashboard.js";

const Users = props => {
  return (
    <div>
      <UsersTopBar history={props.history} />
      <UsersDashboard history={props.history} />
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
