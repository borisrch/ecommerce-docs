import React, { useState, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Blue from "@material-ui/core/colors/blue";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import Link from "next/link";
import Image from "next/image";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { docs } from "../../src/docs";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: "#fff",
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#f4f6f9",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  indent: {
    paddingLeft: theme.spacing(2),
  },
  active: {
    color: Blue[700],
    borderLeftColor: Blue[700],
    borderLeftWidth: "2px",
    borderLeftStyle: "solid",
  },
  logo: {
    paddingLeft: theme.spacing(1),
    backgroundColor: "#fff",
  },
  capitalize: {
    textTransform: "capitalize",
  },
}));

function ResponsiveDrawer(props) {
  const { window, content, label } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const BreadcrumbsPath = (props) => {
    let route = props.route;
    route = route.replace(/-/g, " ");

    let path = route.split("/");
    path = path.filter((el) => {
      return el != "";
    });

    return (
      <React.Fragment>
        <Breadcrumbs aria-label="breadcrumb" className={classes.capitalize}>
          <Link color="inherit" href="/">
            Home
          </Link>
          {path.map((way, i) => (
            <Typography color="textPrimary" key={i}>
              {way}
            </Typography>
          ))}
        </Breadcrumbs>
      </React.Fragment>
    );
  };

  const getRoute = (label, parentLabel) => {
    let route = `${parentLabel}/${label}`;
    route = route.toLowerCase();
    route = route.replace(/ /g, "-");
    return route;
  };

  const LinkListItem = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <ListItem button className={classes.nested} key={i}>
        <ListItemText
          primary={item.label}
          className={clsx(
            classes.indent,
            props.key === item.label && classes.active
          )}
        />
      </ListItem>
    );
  });

  const ListWrapper = (props) => {
    const children = props.item.children;
    const index = props.index;
    return (
      <List
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            disableSticky={true}
          >
            {props.item.label}
          </ListSubheader>
        }
        key={index}
      >
        {children.map((child, i) => (
          <Link href={child.route} passHref key={i}>
            <ListItem button component="a" className={classes.nested}>
              <ListItemText
                primary={child.label}
                className={clsx(
                  classes.indent,
                  props.pageLabel === child.label && classes.active
                )}
              />
            </ListItem>
          </Link>
        ))}
      </List>
    );
  };

  const drawer = (
    <div>
      <div className={(classes.toolbar, classes.logo)}>
        <Image
          src="/shopcast-redesign-small.svg"
          alt="shopcast-logo"
          width={134}
          height={64}
        />
      </div>
      <Divider />
      {docs.map((item, index) => (
        <ListWrapper item={item} index={index} pageLabel={label} />
      ))}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            ShopCast Docs
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
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
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <BreadcrumbsPath route={props.route} />
        <Container maxWidth="md">{content}</Container>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
