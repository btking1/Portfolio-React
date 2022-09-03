import React from "react";
import { Container, Box, Typography } from "@mui/material";

function About() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "10px",
        marginTop: "7%",
        // transparent
        backgroundColor: "(0, 0, 0, 0.54)",
      }}
    >
      <Box sx={{}}>
        <img className="avatar" src={`/src/assets/avatar.png`} />
      </Box>
      <Box sx={{
      }}>
        <Typography variant="p" fontSize={28}>
          North Carolina-based web developer with expertise in building
          full-stack applications.
          <br />
          <br />
          <br />
          In addition to solving problems, I enjoy learning new technologies.
        </Typography>
      </Box>
    </Container>
  );
  // <section>
  //   <div>
  //     <div>
  //       <img src={`/src/assets/avatar.png`} />
  //       <p>
  //         North Carolina-based web developer with expertise in building
  //         full-stack applications.
  //         <br />
  //         <br />
  //         In addition to solving problems, I enjoy learning new technologies.
  //       </p>
  //     </div>
  //   </div>
  // </section>
}

export default About;
