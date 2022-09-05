import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import {  ThemeProvider } from "@mui/material/";
import "./index.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import {theme } from "./theme";


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
