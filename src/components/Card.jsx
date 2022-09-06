import React, { useState } from "react";
import { GitHub } from "@material-ui/icons";
import {
  Card,
  Typography,
  CardHeader,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import { Image } from "mui-image";

// styled mui card
const StyledCard = (props) => {
  return (
    <Card
      {...props}
      style={{
        backgroundColor: "rgba(204, 232, 247, 0.75)",
        backdropFilter: "blur(6px)",
      }}
    />
  );
};

export default function CardComponent(props) {
  // const [hover, setHover] = useState(false);

  // const handleMouseEnter = () => {
  //   setHover(true);
  // };

  // const handleMouseLeave = () => {
  //   setHover(false);
  // };
  // function displayViewOption() {}
  // function hideViewOption() {}
  return (
    <StyledCard 
    // onMouseEnter={handleMouseEnter} 
    // onMouseLeave={handleMouseLeave}
    >
      <CardHeader
        sx={{
          maxHeight: "40rem",
          lineHeight: "2.5rem",
        }}
        title={
          <Typography
            sx={{
              fontSize: "2.5rem",
              fontWeight: "200",
              padding: "10px",
            }}
            variant="h3"
          >
            {props.title}
          </Typography>
        }
        subheader={
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.54)",
              display: "flex",
              justifyContent: "flex-end",
            }}
            variant="h6"
          >
            {props.subheader}
          </Typography>
        }
        action={
          <IconButton onClick={() => window.open(props.github)}>
            <GitHub />
          </IconButton>
        }
      />

      <CardMedia
        // height={hover ? "250px" : "200px"}
        // width={hover ? "300px" : "200px"}
        // onMouseEnter={displayViewOption()}
        // onMouseLeave={hideViewOption()}
        // onClick={() => window.open(props.appLink)}
        sx={{
          zIndex: "-100",
          overflow: "auto",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          objectFit: "cover",
          backgroundClip: "content-box",
          transition: "all 0.5s ease",

          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <Image alt={props.title} src={props.image} />
      </CardMedia>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          sx={{
            fontSize: "1rem",
            fontFamily: "jetbrains mono",
          }}
        >
          {props.description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
}
