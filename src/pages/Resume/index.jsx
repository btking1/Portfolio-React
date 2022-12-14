import React from "react";
import resumepage from "../../../src/projects/webdevresume.pdf";
import { Grid, Box, Typography, Button, Container } from "@mui/material";
import { theme } from "../../theme";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  ...theme.myButton,
});

function Resume() {
  const classes = useStyle();
  return (
      <Grid container direction='row' sx={{
        // display: "flex",
        // justifyContent: "center",
        // border: "1px solid black",
       maxWidth: "90vw",
      }} spacing={2}>
        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              // backgroundColor: "primary.main",
              padding: "5%",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
              transform: "skew(-.3deg, 0deg)",
              backdropFilter: "blur(6px)",
            }}
          >
            <Typography
              variant="h4"
              fontSize={{ sm: "60px", md: "72px", lg: "82px" }}
              color="black.main"
            >
              Front end:
            </Typography>
            <Typography variant="h6" fontSize={{ sm: "32px", lg: "32px" }}>
              <ul>
                <li>React</li>
                <li>JavaScript ES6+</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>HTML</li>
                <li>CSS</li>

                <li>Material Ui</li>
              </ul>
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Box
            sx={{
              height: "fit-content",
              display: "flex",
              // maxWidth: "330px",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: "5%",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
              transform: "skew(-.3deg, 0deg)",
              backdropFilter: "blur(6px)",
            }}
          >
            <Typography
              variant="h4"
              fontSize={{ sm: "60px", md: "72px", lg: "82px" }}
            >
              Back end:
            </Typography>
            <Typography variant="h6" fontSize={{ sm: "32px", lg: "32px" }}>
              <ul>
                <li>Express</li>
                <li>Node</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>SQL</li>
                <li>NoSQL</li>
                <li>GraphQL</li>
              </ul>
            </Typography>
          </Box>
          <Button
            className={classes.myButton}
            variant="contained"
            size="xl"
            sx={{
              marginTop: "10px",
              padding: "20px",
            }}
            onClick={() => window.open(resumepage, "_blank", "fullscreen=true")}
          >
            View Resume
          </Button>
        </Grid>
        {/* {openModal && < ViewOptions closeModal={setOpenModal}  />} */}
      </Grid>
    // </Container>
  );
}

export default Resume;
