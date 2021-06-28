import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { get } from "lodash";

import AuthSignIn from "./AuthSignIn";
import AuthSignUp from "./AuthSignUp";

function Auth({ user }) {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (get(user, "key")) {
      history.push(
        new URLSearchParams(location.search).get("redirect") || "/dashboard/"
      );
    }
  }, [user, history, location.search]);

  return (
    <Switch>
      <Route path="/auth/sign-in">
        <AuthSignIn />
      </Route>
      <Route path="/auth/sign-up">
        <AuthSignUp />
      </Route>
     
      <Route path="/">
        <AuthSignIn />
      </Route>
    </Switch>
  );
}

const mapStateToProps = ({ auth: { user } }) => ({
  user,
});

export default connect(mapStateToProps)(Auth);
