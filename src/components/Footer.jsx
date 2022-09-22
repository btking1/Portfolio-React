import React from "react";
import { Container, Box, Typography, Button, ButtonGroup } from "@mui/material";
import { GitHub, LinkedIn } from "@material-ui/icons";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
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
  );
}

export default Footer;
