import React from "react";
import { Container, Box, Typography, makeStyles } from "@material-ui/core";
import { Image } from "mui-image";
import avatar from "../../../public/assets/avatar.png";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    display: "flex",
    flexGrowing: 1,
    alignContent: "center",
    padding: "2%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backdropFilter: "blur(6px)",
    backgroundColor: "rgba(204, 232, 247, 0.65)",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
    },
  },
  Avatar: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    [theme.breakpoints.down("sm")]: {
    },
  },
  textBox: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "2%",
    },
  },
  text: {
    fontFamily: "Dosis",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
    },
  },
}));

function About() {
  const classes = useStyles();
  return (
    <Container  className={classes.aboutContainer}>
      <Box className={classes.Avatar} sx={{
        flex: 1,
      }}>
        <Image disableTransistion='true' cover='true' aspectRatio='1/1' height="100%" width="100%" src={avatar} alt />
      </Box>
      <Box className={classes.textBox} sx={{
        flex: 2,
      }}>
        <Typography className={classes.text} variant="h3" fontWeight={1}>
          Developer based in North Carolina with expertise in building
          full-stack applications. In my work, I combine compelling design with
          creative problem-solving. My goal is to provide an easy-to-use,
          intuitive, and user-friendly application.
        </Typography>
      </Box>
    </Container>
    
  );
}

export default About;
