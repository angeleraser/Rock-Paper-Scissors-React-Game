import React from "react";
import Score from "../Score/Score";
import "./css/Header.css";
const Header = ({ modeName = "rock paper scissors" }) => {
  return (
    <header className="header w-full flex justify-between items-center">
      <h1>
        {modeName.split(" ").map((name) => {
          let element;
          switch (name) {
            case "rock":
            case "piedra":
              element = "rock";
              break;
            case "paper" || "papel":
            case "papel":
              element = "paper";
              break;
            case "scissors" || "tijeras":
            case "tijeras":
              element = "scissors";
              break;
            case "lizard":
            case "lagarto":
              element = "lizard";
              break;
            case "spock":
              element = "spock";
              break;
            default:
              break;
          }
          return (
            <span key={name} className={element}>
              {name}
            </span>
          );
        })}
      </h1>
      <Score />
    </header>
  );
};

export default Header;
