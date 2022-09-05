import React from "react";

import { Box, Container, Button, Typography } from "@mui/material";

function ViewOptions({ closeModal }) {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        width: "100vh",
        height: "90vh",
        position: "fixed",
        top: 0,
        margin: "3% 3%",
        backgroundColor: "primary.main",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "50vh",
          width: "50vh",
          backgroundColor: "pink",
          display: "flex-column",
          position: "absolute",
        }}
      ></Box>
      <Button
        variant="contained"
        color="error"
        sx={{
          marginTop: "90%",
          marginLeft: "90%",
          marginBottom: "10%",
          padding: "0 5%",
        }}
      >
        <Typography>Close</Typography>
      </Button>
    </Container>
  );
}

export default ViewOptions;
