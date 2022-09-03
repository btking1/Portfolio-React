import React from "react";
// import "./index.css";
import { Button, Grid, Box, TextField, Typography } from "@mui/material";
// import { makeStyles } from "@material-ui/core";

const Contact = () => {
  return (
    <Grid
      container
      spacing={3}
      // style the form container
      sx={{
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "600px",
        margin: "0 auto",
        marginBottom: "20px",
        padding: "0px",
      }}
    >
      <Typography variant="h2" fontWeight={"semi-bold"} sx={
        {padding: '10px', my:'20px'}
      }>
        Contact Me
      </Typography>

      <Grid item xs={12}>
        <Box
          bgcolor="primary"
          boxShadow={3}
          // style={{ minWidth: "300px" }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            style={{ minwidth: "300", width: "100%" }}
          />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box
          bgcolor="primary"
          boxShadow={3}
          // style={{ minWidth: "300px" }}
        >
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

      <Grid item xs={12} sx={
        {display:"flex",justifyContent: "center",}
      }>
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
            // on hover
            "&:hover": {
            },
          }}
        >Submit</Button>
      </Grid>
    </Grid>
  );
};

export default Contact;

// const useStyle = makeStyles({

//     //  button on hover
//     btn: {
//       "&:hover": {
//         backgroundColor: "#00bcd4",
//         color: "white",
//       },
//     },
// });

// function Contact() {
//   const classes = useStyle();
//   return (
//     <section className="ContactPage">
//       <h1>Contact me</h1>
//       <form id="contact-form">
//         <div id="name-input">
//           <input id="input" type="text" name="name" placeholder="name" />
//         </div>
//         <div>
//           <input id="input" type="email" name="email" placeholder="email" />
//         </div>
//         <div>
//           <textarea
//             id="message"
//             name="message"
//             placeholder="message"
//             rows={10}
//             cols={97}
//           />
//         </div>
//         {/* make material ui button */}
//         <Button
//           className={classes.btn}
//           size="large"
//           variant="contained"
//           color="primary"
//           id="submit"
//           type="submit"
//         >
//           Submit
//         </Button>
//       </form>
//     </section>
//   );
// }

// export default Contact;
