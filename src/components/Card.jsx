import React, { useState } from "react";
import { GitHub, LinkedIn } from "@material-ui/icons";
import {
  Card,
  Typography,
  CardHeader,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";

// styled mui card
const StyledCard = (props) => {
  return (
    <Card
      {...props}
      style={{
        // marginBottom: "2rem",
        backgroundColor: "rgba(204, 232, 247, 0.75)",
      }}
    />
  );
};

export default function CardComponent(props) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <StyledCard onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <CardHeader
        sx={{
          // margin: "2%",
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
              // make color see thru
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
          <IconButton
            onClick={() => window.open(props.github)}
            // href={props.github}
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <GitHub />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        height={hover ? "250px" : "200px"}
        width={hover ? "300px" : "200px"}
        onClick={() => window.open(props.appLink)}
        sx={{
          overflow: "hidden",
          backgroundPosition: "cover",
          objectFit: "cover",
          backgroundClip: "content-box",
          transition: "all 0.5s ease",
          // on hover make pointer
          "&:hover": {
            cursor: "pointer",
          },
        }}
        alt={props.title}
        src={props.image}
      />
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
