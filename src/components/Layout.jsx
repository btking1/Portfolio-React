import { makeStyles } from "@material-ui/core";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const useStyle = makeStyles({
  mainPage: {
    margin: "0 auto",
    padding: "0px",
    width: "100%",
    maxWidth: 'fit-content',
    minHeight: "fit-content",

// make responsive main page

// minHeight: "100vh",
display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",





    // backgroundColor: "rgba(204, 232, 247, 0.75)",


    // marginBottom: "20px",
    // minWidth: "100vh",
    // margin: "0 auto",
    // padding: "0px",
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default function Layout({ children }) {
  const classes = useStyle();
  return (
    <>
      <NavBar />
      <div className={classes.mainPage}>{children}</div>
      <Footer />    
    </>
  );
}
