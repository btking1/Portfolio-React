import React from "react";
import { Container, Box, Typography, makeStyles } from "@material-ui/core";
import { Image } from "mui-image";
import avatar from "../../../public/assets/avatar.png";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    display: "flex",
    flexDirection: "row",
    backdropFilter: "blur(6px)",
    backgroundColor: "rgba(204, 232, 247, 0.65)",
    [theme.breakpoints.down("sm")]: {
      width: "content-fit",
      maxWidth: "75%",
    },
  },
  Avatar: {
    [theme.breakpoints.down("sm")]: {
    },
  },
  textBox: {
    // [theme.breakpoints.down("sm")]: {
    //   width: '50%'
    // },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      fontSize: ".9rem",
    },
  },
}));
// fontSize: [".9rem", "1.2rem", "2.2rem", "2.5rem"],
// fontWeight: "200",
// padding: "10px",

function About() {
  const classes = useStyles();
  return (
    <Container className={classes.aboutContainer}>
      <Box className={classes.Avatar}>
        <Image easing='linear' height="100%" width="100%" src={avatar} alt />
      </Box>
      <Box className={classes.textBox}>
        <Typography className={classes.text} variant="h3" fontWeight={1}>
          Developer based in North Carolina with expertise in building
          full-stack applications. In my work, I combine compelling design with
          creative problem-solving. My goal is to provide an easy-to-use,
          intuitive, and user-friendly application.
        </Typography>
      </Box>
    </Container>
    // <Container className="about-container"
    //   sx={{
    //     marginTop: "4%",
    //     marginBottom: "6%",
    //     padding: "1%",
    //   }}
    // >
    //   <Container
    //     maxWidth='xl'
    //     sx={{
    //       display: "flex",
    //       flexDirection: "row",
    //       alignItems: "center",
    //       maxHeight: "70vh",
    //       boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    //       borderRadius: "5px",
    //       padding: "10px",
    //       marginBottom: "7%",
    //       marginTop: "7%",
    //       backdropFilter: "blur(6px)",
    //       backgroundColor: "rgba(204, 232, 247, 0.65)",
    //     }}
    //   >
    //     <Box
    //       id="avatar"
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         width: "70%",
    //         height: "70%",
    //         maxHeight: "50vh",

    //         // add media query
    //       }}
    //     >
    //       <img className="avatar" alt="avatar" src={avatar} />
    //     </Box>
    //     <Box
    //       sx={{
    //         maxHeight: "60vh",
    //         width: "100%",
    //         display: "flex",
    //       }}
    //     >
    //       <Typography
    //         variant="h3"
    //         fontWeight={1}
    //         padding={1}
    //         className="about-text"
    //         sx={{
    //           fontSize: [".9rem", "1.2rem", "2.2rem", "2.5rem"],
    //           fontWeight: "200",
    //           padding: "10px",
    //         }}
    //       >
    //         Developer based in North Carolina with expertise in building
    //         full-stack applications. In my work, I combine compelling design
    //         with creative problem-solving. My goal is to provide an easy-to-use,
    //         intuitive, and user-friendly application.
    //       </Typography>
    //     </Box>
    //   </Container>
    // </Container>
  );
}

export default About;
