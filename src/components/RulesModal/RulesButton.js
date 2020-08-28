import React, { useContext } from "react";
import { GameContext } from "../GameLogic/GameContext";

const RulesButton = ({ toggleModal }) => {
  const {
    results: { done },
    language: {
      package: { rulesButton },
    },
  } = useContext(GameContext);
  return (
    <button
      className={`rules-button ${done ? "display-none" : ""}`}
      onClick={toggleModal}>
      {" "}
      {rulesButton}
    </button>
  );
};

export default RulesButton;
