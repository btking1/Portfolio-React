import React from "react";
import { Button, Grid, Box, TextField, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "600px",
        margin: "0 auto",
        marginTop: "6%",
        marginBottom: "15%",
        padding: "0px",
      }}
    >
      <Typography
        variant="h2"
        fontWeight={"semi-bold"}
        sx={{ padding: "10px", my: "20px" }}
      >
        Contact Me
      </Typography>

      <Grid item xs={12}>
        <Box bgcolor="primary" boxShadow={3}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            style={{ minwidth: "300", width: "100%" }}
          />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box bgcolor="primary" boxShadow={3}>
          <TextField
            id="outlined-basic"
            label="email"
            type="email"
            variant="outlined"
            style={{ minwidth: "300", width: "100%", pt: "10px" }}
          />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box
          component="form"
          bgcolor="primary"
          boxShadow={3}
          style={{ minwidth: "300", width: "100%" }}
        >
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            minRows={7}
            style={{ minwidth: "300", width: "100%" }}
          />
        </Box>
      </Grid>

      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="large"
          variant="contained"
          color="primary"
          id="submit"
          type="submit"
          sx={{
            width: "50%",
            p: ".5rem",
            pt: ".8rem",
            color: "white",
            "&:hover": {},
          }}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default Contact;
