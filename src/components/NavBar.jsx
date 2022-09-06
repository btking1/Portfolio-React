import React from "react";
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
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logoLg: {
    width: 'fit-content',
    display: "block",
    padding: "0.5rem 1rem",
    fontSize: "1.5rem",
    fontWeight: "bold",
    fontFamily: "Dosis",
    // [theme.breakpoints.down("sm")]: {},
  },
  logoSm: {},
  navContainer: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  linkContainer: {
    width: "fit-content",
    display: "block",
    justifyContent: "space-between",
  }
}));

function NavBar() {
  //   const Nav = styled.div`
  //     width: 100%;
  //     display: flex;
  //     flex-direction: row;
  //     justify-content: space-between;
  //     z-index: 5;
  //     padding: 1%;
  //   `;
  //   const Logo = styled.div`
  //     font-size: 24px;
  //     font-weight: 700;
  //     font-family: Dosis;
  //     margin-left: 1%;
  //     display: flex;
  //     width: 100%;
  //     flex-direction: row;
  //   `;

  //   const Links = styled.div`
  //     display: flex;
  //     flex-direction: row;
  //     justify-content: space-between;
  //     margin-right: 5%;
  //     width: 50%;
  //   `;

  //   const Link = styled.div`
  //     font-size: 22px;
  //     font-weight: 500;
  //     font-family: Dosis;
  //     white-space: nowrap;
  //     display: flex;
  //     justify-content: space-between;
  //     margin-right: 2%;
  //     align-items: center;
  //   `;
  const classes = useStyles();
  return (
    // <Box sx={{
    //   width: "100%",
    // }}>
      <AppBar className={classes.navContainer}>
        <NavLink key='5' to='/'>
        <Typography variant="h4" component="div" className={classes.logoLg}>
          BK : DEV
        </Typography>
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
              <Button key={data.key}>{data.childText}</Button>
            </NavLink>
          ))}
        </div>
      </AppBar>
    // </Box>
    // <Container maxWidth='xl'
    //   sx={{
    //     display: "flex",
    //     marginBottom: "2%",
    //     marginTop: "2%",
    //     // [`@media (maxWidth: ${850}px)`]: {
    //     //   position: 'static',
    //     //   backgroundColor: 'black',
    //     //   boxShadow: 'none',
    //     //   borderBottom: "none",
    //     //   position: "fixed",
    //     //   top: "0",
    //     //   left: "0",
    //     //   boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    //     // },
    //   }}
    // >
    //   <Nav>
    //     <NavLink key="5" to="/">
    //       <Logo>BK : DEV</Logo>
    //     </NavLink>
    //     <Links>
    //       {[
    //         {
    //           childText: `About`,
    //           key: 1,
    //           link: `/about`,
    //         },
    //         {
    //           childText: `Works`,
    //           key: 2,
    //           link: `/works`,
    //         },
    //         {
    //           childText: `Contact`,
    //           key: 3,
    //           link: `/contact`,
    //         },
    //         {
    //           childText: `Resume`,
    //           key: 4,
    //           link: `/resume`,
    //         },
    //       ].map((data) => (
    //         <NavLink key={data.key} to={data.link}>
    //           <Link key={data.key}>{data.childText}</Link>
    //         </NavLink>
    //       ))}
    //     </Links>
    //   </Nav>
    // </Container>
  );
}

export default NavBar;
