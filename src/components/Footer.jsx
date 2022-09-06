import React from "react";
import { Container, Box, Typography, Button, ButtonGroup } from "@mui/material";
import { GitHub, LinkedIn } from "@material-ui/icons";

function Footer() {
  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",

        position: "fixed",
        bottom: "0",
        marginBottom: "5px",
        // minWidth: "100vh",
        margin: "0 auto",
        padding: "0px",

        alignItems: "center",

        // transition: "all 0.5s ease-in-out",
        // [`@media (min-width: ${830}px)`]: {
        //   position: "unset",
        //   maxWidth: "50px",
        // },
      }}
    >
      <Box
        sx={{
          display: "flex",
          // minWidth: "7vw",
          minHeight: "5vh",
          maxWidth: "10vw",
          padding: "5px",
        }}
      >
        <Typography
          fontSize="1.5rem"
          variant="h3"
          sx={{
            fontWeight: "200",
            color: "rgba(188,208,199,0.54)",
          }}
        ></Typography>
        <ButtonGroup
          variant="text"
          color="secondary"
          aria-label="text button group"
          sx={{
            fontWeight: "200",
            display: "flex",
          }}
        >
          <Button
            onClick={() => window.open("https://github.com/btking1")}
            sx={{
              transition: "all 0.5s ease-in-out",
              "&:hover": {
                color: "rgba(204, 232, 247, 0.75)",
              },
            }}
          >
            <GitHub />
          </Button>
          <Button
            onClick={() =>
              window.open("https://www.linkedin.com/in/booker-king-42493a247/")
            }
            sx={{
              transition: "all 0.5s ease-in-out",
              "&:hover": {
                color: "rgba(204, 232, 247, 0.75)",
              },
            }}
          >
            <LinkedIn />
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
}

export default Footer;
