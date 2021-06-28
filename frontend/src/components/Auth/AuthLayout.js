import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "100vh",
  },
  grid: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "center",
  },
  gridLeft: { backgroundColor: "#FFF" },
  gridRight: {},
  content: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
    "& > form": {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "center",
      "& > *": {
        marginBottom: "20px",
      },
      "& > button": {
        marginTop: "10px",
      },
    },
  },
  gridLeftContent: { flexGrow: 1, margin: "2em", maxWidth: "500px" },
  header: {
    alignSelf: "flex-start",
    marginBottom: "4em",
  },
  img: {
    width: "100%",
    height: "auto",
  },
  footer: {
    textAlign: "center",
    marginTop: "20px",
  },
}));

function AuthLayout({
  title = null,
  subtitle = null,
  body = null,
  footer = null,
}) {
  const c = useStyles();

  return (
    <Box className={c.wrapper}>
      <Grid
        container
        className={c.grid}
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        <Grid item xs={12} sm={7} className={clsx(c.grid, c.gridLeft)}>
          <Box className={clsx(c.content, c.gridLeftContent)}>
            <Box className={c.header}>
              <Typography variant="h4" component="h1" color="secondary">
                {title}
              </Typography>
              <Typography variant="h5" component="h2">
                {subtitle}
              </Typography>
            </Box>
            {body}
            <Box className={c.footer}>{footer}</Box>
          </Box>
        </Grid>
        
      </Grid>
    </Box>
  );
}

export default AuthLayout;
