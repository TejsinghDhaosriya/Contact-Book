import React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { Box } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";

import { DRAWER_WIDTH } from "../utils/constants";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "transparent",
    backgroundColor: "#F3F3F3",
    color: theme.palette.text.primary,
    boxShadow: "none",
    marginTop: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
    },
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexGrow: 1,
  },
  headerIcon: {
    marginRight: "14px",
    display: "flex",
    alignItems: "center",
  },
  headerDivider: {
    marginLeft: theme.spacing(5),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

function NavBar({ activeListItem, handleDrawerToggle }) {
  const c = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawer = () => {
    setMobileOpen(!mobileOpen);
    handleDrawerToggle();
  };

  return (
    <AppBar position="relative" className={c.root}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawer}
          className={c.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Box className={c.header}>
          {activeListItem && (
            <>
              {activeListItem.icon && (
                <Box className={c.headerIcon}>{activeListItem.icon}</Box>
              )}
              {activeListItem.text && (
                <Typography variant="h6" noWrap>
                  {activeListItem.text}
                </Typography>
              )}
              {(activeListItem.icon || activeListItem.text) && (
                <Divider
                  orientation="vertical"
                  flexItem
                  className={c.headerDivider}
                />
              )}
            </>
          )}
        </Box>
        <Box>
          <IconButton aria-controls="simple-menu" aria-haspopup="true">
            <NotificationsIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
