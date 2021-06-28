import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { selectUser } from "../Auth/authSlice";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

function Users(props) {
  const classes = useStyles();
  const user = useSelector(selectUser);
  return (
    <>
      <Card
        className={classes.root}
        variant="outlined"
        style={{ backgroundColor: "aqua", textAlign: "center" }}
      >
        <CardContent>
          <Typography> User Name :- {user.username} </Typography>
          <Typography> Email :- {user.email} </Typography>
          <Typography> Staff :- {user.is_staff ? "true" : "false"} </Typography>
          <Typography>
            Superuser :- {user.is_superuser ? "true" : "false"}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default Users;
