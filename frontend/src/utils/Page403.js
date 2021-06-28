import React from "react";

import HttpsIcon from "@material-ui/icons/Https";

const Page403 = () => {
  return (
    <div style={errorContainer}>
      <HttpsIcon />
      <h1>Access Denied</h1>
    </div>
  );
};

const errorContainer = {
  display: "flex",
  flexgrow: 1,
  margin: "40px",
  alignItems: "center",
};

export default Page403;
