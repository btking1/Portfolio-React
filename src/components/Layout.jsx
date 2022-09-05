import { makeStyles } from "@material-ui/core";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const useStyle = makeStyles({
  mainPage: {
    margin: "0 auto",
    padding: "0px",
    display: "flex",

   
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
