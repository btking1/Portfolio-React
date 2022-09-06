import { makeStyles, Grid } from "@material-ui/core";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

// main layout style
const useStyle = makeStyles({
//  layout:{
//     display: "flex",
//     maxWidth: "100%",
//     // nnth child
//     "& > *:nth-child(3)": {
//       justifyContent: "center",
//     }
//  },
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


// layout component
export default function Layout({ children }) {
  // const classes = useStyle();

  return (
    <div>
      <Grid container direction="column">
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
