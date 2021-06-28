import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Link, Switch, useParams } from "react-router-dom";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";

import { DRAWER_WIDTH } from "../utils/constants";
import PrivateRoute from "../containers/PrivateRoute/index";
import NavBar from "./NavBar";
import Users from "./Users/";
import { authSignOut } from "./Auth/actions";
import { getContacts } from "./ContactBook/actions";
import ContactBook from "./ContactBook";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: DRAWER_WIDTH,
    overflowX: "hidden",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1),
    },
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginLeft: DRAWER_WIDTH,
    },
  },
  drawerContent: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#F3F3F3",
    height: "100%",
  },
  logo: {
    height: "30px",
    width: "auto",
    marginBottom: "50px",
  },
  logoImg: {
    height: "100%",
    width: "auto",
  },
  list: {
    textAlign: "center",
  },
  listItem: {
    borderRadius: "14px",
    padding: "16px",
    height: "60px",
    width: "60px",
    marginBottom: "10px",
    "&.Mui-selected": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  listItemIcon: {
    fontSize: "24px",
    color: "#D2D2D2",
  },
  listItemSelectedIcon: {
    color: "white",
  },
}));
let drawerList = [
  { key: "home", text: "Home", icon: <HomeIcon /> },
  { key: "users", text: "Profile", icon: <AccountCircleIcon /> },
];

function Dashboard(props) {
  const { window } = props;
  const c = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { page } = useParams();
  const [activeListItem, setActiveListItem] = useState(drawerList[0]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const item = drawerList.find((item) => item.key === page) || drawerList[0];
    if (item) setActiveListItem(item);
  }, [page]);

  useEffect(() => {
    dispatch(getContacts({ offset: 0, limit: 5, name: "" }));
  }, []);
  const drawer = (
    <div className={c.drawerContent}>
      <div className={c.logo}></div>
      <List className={c.list}>
        {drawerList.map((item) => {
          const isSelected =
            item.key === page || (!page && item.key === "home");

          return (
            <Tooltip
              title={item.text}
              aria-label={item.text}
              placement="right"
              key={item.key}
            >
              <Link to={`/dashboard/${item.key}`}>
                <ListItem
                  button
                  selected={isSelected}
                  classes={{
                    root: c.listItem,
                  }}
                >
                  <ListItemIcon
                    className={clsx({
                      [c.listItemIcon]: true,
                      [c.listItemSelectedIcon]: isSelected,
                    })}
                  >
                    {item.icon}
                  </ListItemIcon>
                </ListItem>
              </Link>
            </Tooltip>
          );
        })}
        <Tooltip
          title={"logout"}
          aria-label={"logout"}
          placement="right"
          key={"logout"}
          onClick={() => dispatch(authSignOut())}
        >
          <ListItem
            button
            classes={{
              root: c.listItem,
            }}
          >
            <ListItemIcon
              className={clsx({
                [c.listItemIcon]: true,
              })}
            >
              <PowerSettingsNewIcon />{" "}
            </ListItemIcon>
          </ListItem>
        </Tooltip>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={c.root}>
      <NavBar
        activeListItem={activeListItem}
        handleDrawerToggle={handleDrawerToggle}
      />
      <nav className={c.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: c.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: c.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={c.content}>
        <Switch>
          <PrivateRoute path="/dashboard/users">
            <Users />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <ContactBook />
          </PrivateRoute>
        </Switch>
      </main>
    </div>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
