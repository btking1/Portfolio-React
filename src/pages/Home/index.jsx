import { Typography, Box, Container, Grid } from "@mui/material";
import { makeStyles, alpha } from "@material-ui/core/styles";
import React from "react";
import { cyan, yellow, blue, indigo, blueGrey } from "@mui/material/colors";

const Cyan = cyan[50];

const Blue = blue[200];
const Yellow = yellow[500];
const useStyles = makeStyles((theme) => ({
  home: {
    width: "fit-content",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(9),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      maxWidth: "fit-content",
    },
  },
  hello: {
    color: theme.palette.common.white,
    textShadow: `0px 0px 10px ${alpha(theme.palette.common.black, 0.5)}`,
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  name: {
    width: "fit-content",
    height: "fit-content",
    color: alpha("rgb(242, 226, 169)", 0.95),
    textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "6rem",
    },
  },
  homeBox: {
    width: "100%",
    height: "52vh",
    [theme.breakpoints.down("sm")]: {},
    justifyContent: "space-around",
  },
  fullstack: {
    backgroundColor: alpha(Blue, 0.75),
    borderRadius: "5px",
    padding: ".50%",
    width: "fit-content",
    boxShadow: `0px 0px 3px 0px ${alpha(theme.palette.common.black, 0.55)}`,
    color: alpha(theme.palette.common.white, 1),
    textShadow: `1px 1px 3px ${alpha(theme.palette.common.black, 0.45)}`,
  },
  span: {
    color: alpha(Yellow, 0.7),
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Box className={classes.home}>
      <Box cn={classes.homeBox}>
        <Typography
          marginLeft={10}
          fontSize={"4.5rem"}
          className={classes.hello}
          variant="h3"
        >
          Hello, I'm
        </Typography>

        <Typography
          fontSize={["8rem", "rem", "12rem"]}
          variant="h1"
          className={classes.name}
        >
          {/* <span className={classes.span}> */}
          Booker King
        </Typography>

        <Box
          // justifyContent={"flex-end"}
          sx={{
            display: "flex",
            // height: "fit-content",
            justifyContent: "flex-end",
            marginRight: 14,
            // width: "fit-content",
          }}
        >
          <Typography
            fontStyle={"italic"}
            text
            fontWeight={1}
            flexDirection={"row"}
            // color={alpha(BG, 0.95)}
            // font size for different breakdown points
            fontSize={[".9rem", "1rem", "1.3rem"]}
            // marginTop={1}
            className={classes.fullstack}
            variant="h4"
            noWrap={true}
          >
            Full-Stack Web Developer
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
