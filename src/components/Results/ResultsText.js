import React, { useContext } from "react";
import { GameContext } from "../GameLogic/GameContext";
import { getWinnerName, deuceText } from "../GameLogic/methods";
import PlayAgainButton from "./PlayAgainButton";

const ResultsText = () => {
  const {
    results: { winner, deuce },
    language,
  } = useContext(GameContext);
  return (
    <div className="results-winner flex flex-col items-center">
      <h2 className="animate__bounce animate__animated">
        {deuce ? deuceText(language) : getWinnerName(language, winner)}
      </h2>{" "}
      <PlayAgainButton />{" "}
    </div>
  );
};

export default ResultsText;
