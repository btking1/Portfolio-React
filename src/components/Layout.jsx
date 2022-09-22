import { makeStyles, Grid } from "@material-ui/core";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

// main layout style
const useStyle = makeStyles((theme) => ({

  // core: {
  //   border: "1px solid black",
  // },
  nav: {
    // flex: 1,
    marginBottom: theme.spacing(2),
  },
  page: {
    display: "flex",
    justifyContent: "center",
    // width: "100%",
    
  
  },
  footer: {
    [theme.breakpoints.down("sm")]: {
visibility: "hidden"
    },
  },
}));

// layout component
export default function Layout({ children,  theme }) {
  const classes = useStyle();

  return (
    // <div className={classes.core} >
      <Grid container spacing={10} wrap='nowrap'direction="column" className={classes.core}>
        <Grid className={classes.nav} draggable='false' item xs={12}>
          <NavBar />
        </Grid>
        <Grid className={classes.page} item xs={12} >
          {children}
        </Grid>
        <Grid item xs={12}>
          <Footer className={classes.footer} />
        </Grid>
      </Grid>
    // </div>
  );
}
