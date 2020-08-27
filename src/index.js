import React from "react";
import ReactDOM from "react-dom";
import "./css/tailwind/tailwind.output.css";
import "animate.css";
import "./css/index.css";
import { HashRouter } from "react-router-dom";
import Game from "./components/Game/Game";
const ROOT = document.getElementById("root");
ReactDOM.render(
  <HashRouter>
    <Game />
  </HashRouter>,
  ROOT
);