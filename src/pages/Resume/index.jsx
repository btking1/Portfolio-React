import React from "react";
import { Grid, Box, Typography, Button, Container } from "@mui/material";

// const viewResume = (image) => {
//   const [open, setOpen] = useState(false);
// }
function Resume() { 
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "fit-content",
        minWidth: "500px",
        marginTop: "10%",
        marginBottom: "10%",
      }}
    >
      <Grid container rowSpacing={2} columnSpacing={{ xs: 3, sm: 3, lg: 7 }}>
        <Grid item xs={6} lg={6}>
          <Box
            sx={{
              height: "fit-content",
              maxWidth: "330px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              backgroundColor: "primary.main",
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
          xs={6}
          lg={6}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Box
            sx={{
              height: "fit-content",
              display: "flex",
              maxWidth: "330px",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              backgroundColor: "primary.main",
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
            variant="contained"
            size="xl"
            sx={{
              marginTop: "10px",
              padding: "20px",
            }}
            // onClick={viewResume}
          >
            View Resume
          </Button>
    /     </Grid>
      </Grid>
    </Container>
  )
}


export default Resume;