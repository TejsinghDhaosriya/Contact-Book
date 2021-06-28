import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { get } from "lodash";

const PrivateRoute = ({ user, role, ...rest }) => {
  if (!get(user, "key")) {
    return <Redirect push to={`/auth/sign-in`} />;
  }

  return <Route {...rest} />;
};

const mapStateToProps = ({ auth: { user } }) => ({
  user,
});

export default connect(mapStateToProps)(PrivateRoute);
