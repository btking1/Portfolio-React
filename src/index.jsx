import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import WebFont from "webfontloader";
import App from "./App";

WebFont.load({
  google: {
    families: ["roboto:,200,300,400", "JetBrains Mono:,700", "Dosis:500,700", "Inter:400,500,600,700", "Montserrat:200,300,400,500"],
  },
});

ReactDOM.render(
  <Router>
  <App />
  </Router>,

  document.getElementById("root")
);
