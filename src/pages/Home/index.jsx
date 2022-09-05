import { Typography, Box, Container} from "@mui/material";
import React from "react";
import { cyan, yellow, blue } from "@mui/material/colors";

const Cyan = cyan[300];
const Yellow = yellow[300];
const lightyellow = yellow[50];
const Blue = blue[50];

function Home() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        alignContent: "center",
        my: "10%",
        padding: '1%'
      }}
    >
      <Box
        sx={{
          flexDirection: "row",
          padding: "5%",
          width: "fit-content",
          alignContent: "center",
        }}
      >
        <Typography
          color={Cyan}
          sx={{
            filter: "transparentize(0.5, 0.5)",
            textShadow: "1px 1px rgba(0, 0, 0, 0.5)",
            justifyContent: "flex-start",
            position: "relative",
            left: "8rem",
            marginBottom: "0rem",
          }}
          variant="h1" fontSize="140px"
        >
          Hello,
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            width: "fit-content",
            alignContent: "center",
          }}
        >
          <Typography
            color={lightyellow}
            fontSize="120px"
            sx={{
              marginRight: "1rem",
              marginBottom: "2rem",

              textShadow: "1px 1px rgba(0, 0, 0, 0.5)",
            }}
            variant="h2"
          >
            I’m
          </Typography>
          <Typography
            color={Yellow}
            sx={{
              textShadow: "1px 1px rgba(0, 0, 0, 0.5)",

              // media queries
              [`@media (max-width: ${800}px)`]: {
                marginLeft: "1rem",
                fontSize: "90px",
             

            }}}
            variant="h1" fontSize="140px"
          >
            Booker King
          </Typography>
        </Box>

        <Typography
          fontSize="medium"
          fontWeight="300"
          fontStyle="italic"
          variant="h4"
          color={Blue}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "1.5%",
            textShadow: "1px 1px rgba(0, 0, 0, 0.5)",
          }}
        >
          Full-Stack Web Developer
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
