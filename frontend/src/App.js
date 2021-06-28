import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import PrivateRoute from "./containers/PrivateRoute";
import Dashboard from "./components/index";
import Auth from "./components/Auth";
import { selectAuthToken } from "./components/Auth/authSlice";
import Page403 from "./utils/Page403";

import { withTheme } from "./theme";

function App(props) {
  const authToken = useSelector(selectAuthToken);

  // Add/Delete axios Authorization header
  const authHeader = axios.defaults.headers.common["Authorization"];
  if (authToken) {
    if (!authHeader || authHeader !== authToken)
      axios.defaults.headers.common["Authorization"] = `Token ${authToken}`;
  } else if (authHeader) {
    delete axios.defaults.headers.common["Authorization"];
  }

  return (
    <Switch>
      <PrivateRoute path="/dashboard/:page">
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute exact path="/403">
        <Page403 />
      </PrivateRoute>
      {/* Keep at bottom */}
      <Route path="/">
        <Auth />
      </Route>
    </Switch>
  );
}

export default withTheme(App);
