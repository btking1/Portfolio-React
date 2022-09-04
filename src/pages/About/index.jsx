import React from "react";
// import { useState } from "react";
import { Container, Box, Typography } from "@mui/material";

function About() {

  return (
    <Container sx={{
      marginTop: "4%",
      marginBottom: "6%",
      padding: "1%",
    }}>
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // make container responsive
        maxHeight: "70vh",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        padding: "10px",
        marginBottom: "7%",
        marginTop: "7%",
        backdropFilter: "blur(6px)",
        // transparent
        backgroundColor: "rgba(204, 232, 247, 0.65)",
      }}
    >
      <Box
        id="avatar"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          maxHeight: "60vh",
        }}
      >
        <img className="avatar" src={`/src/assets/avatar.png`} />
      </Box>
      <Box
        sx={{
          maxHeight: "60vh",
          width: "100%",
          display: "flex",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={1}
          padding={1}
          sx={
            {
              fontSize: [".9rem", "1.2rem", "2.2rem", "2.5rem"],
              fontWeight: "200",
              padding: "10px",
            }
          }
        >
          Developer based in North Carolina with expertise in building
          full-stack applications. In my work, I combine compelling design with
          creative problem-solving. My goal is to provide an easy-to-use,
          intuitive, and user-friendly application.
        </Typography>
      </Box>
    </Container>
    </Container>
  );

}

export default About;
