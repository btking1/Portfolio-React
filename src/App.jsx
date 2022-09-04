import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { createTheme, ThemeProvider, Typography } from "@mui/material/";
import "./index.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import { red } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgba(204, 232, 247, 0.75)",
      lightGreenText: "rgba(196,224,228,1)",
    },
    secondary: {
      main: "rgba(237,215,103,.75)",
    },
    error: {
      main: red.A400,
    },
    blueText: {
      main: "rgba(89,186,195,1)",
    },
  },
  typography: {
    h1: {
      fontFamily: "dosis",
      fontSize: "124px",
      fontWeight: 500,
    },
    h2: {
      fontFamily: "dosis",
      fontSize: "72px",
      fontWeight: 500,
    },
    h3: {
      fontFamily: "dosis",
      fontSize: "2.5rem",
    },
    h4: {
      fontFamily: "jetbrains mono",
    },
    h5: {
      fontFamily: "inter",
    },
    h6: {
      fontFamily: "montserrat",
      fontSize: ".9rem",
      fontWeight: "400",
    },
    p: {
      fontFamily: "inter",
    },
    // subtitle1: {
    //   fontFamily: "jetbrains mono",
    // }
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
