import React from "react";
// import "./index.css";
import { Container, Grid } from "@mui/material";
import StyledCard from "../../components/Card";
import imaginai from "../../../src/projects/imagineai.svg";
import ipd from "../../../src/projects/ipd.svg";
import notetaker from "../../../src/projects/notesonline.svg";
import photoport from "../../../src/projects/photography.svg";
import teamdash from "../../../src/projects/teamdash.svg";
import techblog from "../../../src/projects/techblog.svg";

const projects = [
  {
    title: "Image AI",
    subheader: "JS, React, Node, Express, MySQL",
    description:
      "Image AI is a web application that uses machine learning to classify images of animals and objects.",
    github: `https://github.com/FredElick/project-2`,
    image: imaginai,
  },

  {
    title: "Investment Dashboard",
    subheader: "HTML, CSS, JS",
    description:
      "Online investment dashboard that allows users to manage their stock portfolios.",
    appLink: `https://cpm-128.github.io/investment-portfolio-dashboard/`,
    github: "https://github.com/cpm-128/investment-portfolio-dashboard",
    image: ipd,
  },
  {
    title: "Note Taker",
    subheader: "HTML, CSS, JS, Node, Express",
    description:
      "A web application that allows users to create, edit, and delete notes.",
    appLink: "https://notesmonline.herokuapp.com/",
    github: "https://github.com/btking1/notesOnline",
    image: notetaker,
  },
  {
    title: "Photo Portfolio",
    subheader: "React, CSS, JS, Node",
    description: "Demo portfolio for photographer.",
    github: "https://github.com/btking1/Photography-Portfolio",
    image: photoport,
  },
  {
    title: "Team Dashboard",
    subheader: "JS, Node, HTML, CSS, MarkDown",
    description: "Command line team management tool.",
    github: "https://github.com/btking1/Eng-Team-Profile-Generator",
    appLink: `https://github.com/btking1/Eng-Team-Profile-Generator`,
    image: teamdash,
  },
  {
    title: "Tech Blog",
    subheader: "JS, Node, SQL, HTML, CSS",
    description:
      "Blog based app that allows for creation of users and posts through RESTful API.",
    appLink: `https://tech-talk-mvc.herokuapp.com/login`,
    github: "https://github.com/btking1/Tech-Talk-blog",
    image: techblog,
  },
];

// key generator
const key = [];
const makeKey = () => {
  let counter = 0;
  for (let i = 6; counter < i; counter++) {
    console.log(counter);
    key.push(counter);
  }
  return key;
};

makeKey();

function Works() {
  return (
    <>
      <Container
        sx={{
          marginTop: "5%",
          marginBottom: "5%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "-100",
        }}
        maxWidth="lg"
      >
        <Grid
          container
          spacing={2}
          rowSpacing={4}
          direction="row"
          sx={{
            display: "flex",
            width: "100%",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          {projects.map((project, key) => (
            <Grid item key={key} sm={12} md={6} lg={4} xl={4}>
              <StyledCard
                key={key}
                title={project.title}
                subheader={project.subheader}
                description={project.description}
                github={project.github}
                image={project.image}
                appLink={project.appLink}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* <div style="clear: both;" /> */}
    </>
  );
}

export default Works;
