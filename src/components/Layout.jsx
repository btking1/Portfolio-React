import { makeStyles } from "@material-ui/core";
import React from "react";
import NavBar from "./NavBar";

const useStyle = makeStyles({
  mainPage: {
    minHeight: "90vh",
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
    </>
  );
}
