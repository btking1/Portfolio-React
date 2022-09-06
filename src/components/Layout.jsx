import { makeStyles, Grid } from "@material-ui/core";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const useStyle = makeStyles({
 layout:{
    display: "flex",
 },
 nav:{
  flex: 1,
 },
 page:{
flex: 3,
 },
  footer:{
flex: 1,
  },

});

export default function Layout({ children }) {
  const classes = useStyle();

  return (
    <div>
      <Grid className={classes.layout} container direction="column">
        <Grid className={classes.nav} item sm={12}>
          <NavBar />
        </Grid>
        <Grid className={classes.page} item sm={12}>
          {children}
        </Grid>
        <Grid className={classes.footer} item sm={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
