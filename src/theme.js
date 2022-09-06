import {createTheme } from '@material-ui/core';
import {blue,red } from '@material-ui/core/colors';

const Blue = blue[50];
const Red  = red [50];

export const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "rgba(204, 232, 247, 0.75)",
        other: "rgba(204, 232, 247, 1)",
        lightGreenText: "rgba(196,224,228,1)",
      },
      secondary: {
        main: "rgba(237,215,103,.75)",
      },
      blueText: {
        main: "rgba(89,186,195,1)",
      },
      black: {
        main: "rgba(0,0,0,.95)",
      }
    },
    myButton: {
        backgroundColor: Red,
        color: 'white',
        border: 'rgba(204, 232, 247, 1)',
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
      fontFamily: [
        'JetBrains Mono',
        'Inter',
        'Dosis',
        'Montserrat',
      ].join(','),
    },
  });


   



