import React from "react";
import Score from "../Score/Score";
import "./css/Header.css";
import { getOptionName } from "../GameLogic/methods";
const Header = ({ modeName = "rock paper scissors" }) => {
  return (
    <header className="header w-full flex justify-between items-center">
      <h1>
        {modeName.split(" ").map((name) => {
          const option = getOptionName(name);
          return (
            <span key={name} className={option}>
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
