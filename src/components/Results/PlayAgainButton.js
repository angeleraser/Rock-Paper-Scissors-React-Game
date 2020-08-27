import React, { useContext } from "react";
import "./css/PlayAgainButton.css";
import { GameContext } from "../GameLogic/GameContext";
const PlayAgainButton = () => {
  const {
    dispatch,
    language: {
      package: { playAgainButton },
    },
  } = useContext(GameContext);
  const playAgain = () => {
    dispatch({ type: "PLAY_AGAIN" });
  };
  return (
    <button onClick={playAgain} className="play-again-button">
      {playAgainButton}
    </button>
  );
};

export default PlayAgainButton;
