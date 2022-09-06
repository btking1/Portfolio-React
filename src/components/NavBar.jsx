import React, { useState } from "react";
// import styled from "styled-components";
import { NavLink } from "react-router-dom";

import {
  Container,
  Box,
  AppBar,
  IconButton,
  Button,
  Typography,
  makeStyles,
  alpha,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const Blue = blue[200];

const useStyles = makeStyles((theme) => ({
  logoLg: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    fontFamily: "Dosis",
    textDecoration: "none",

    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  logobtn: {
    flex: 4,
    minWidth: "100%",
    width: "fit-content",
    display: "flex",
    color: alpha(theme.palette.common.white, 0.85),
    padding: "0.5rem 1rem",
    marginLeft: theme.spacing(1),
  },
  navContainer: {
    flexGrow: 1,
    width: "100%",
    // display: (props) => (props.hidden ? "none" : "flex"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: alpha(Blue, 0.7),
  },
  linkContainer: {
    flex: 1,
    maxWidth: "45%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginInlineEnd: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  link: {
    padding: "0.5rem 1rem",
    mx: "0.5rem",
    fontFamily: "Dosis",
    "&:hover": {
      cursor: "pointer",
    },
    color: alpha(theme.palette.common.white, 0.85),
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
      padding: "0",
    },
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position='fixed' color="transparent" className={classes.navContainer}>
      <NavLink key="5" to="/">
        <Box
          sx={{
            width: "fit-content",
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Button className={classes.logobtn}>
            <Typography variant="h4" component="div" className={classes.logoLg}>
              BK : DEV
            </Typography>
          </Button>
        </Box>
      </NavLink>
      <div className={classes.linkContainer}>
        {[
          {
            childText: `About`,
            key: 1,
            link: `/about`,
          },
          {
            childText: `Works`,
            key: 2,
            link: `/works`,
          },
          {
            childText: `Contact`,
            key: 3,
            link: `/contact`,
          },
          {
            childText: `Resume`,
            key: 4,
            link: `/resume`,
          },
        ].map((data) => (
          <NavLink key={data.key} to={data.link}>
            <Button className={classes.link} key={data.key}>
              {data.childText}
            </Button>
          </NavLink>
        ))}
      </div>
    </AppBar>
  );
}

export default NavBar;
