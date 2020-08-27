import React, { useContext } from "react";
import Results from "../../components/Results/Results";
import { GameContext } from "../GameLogic/GameContext";
import { Options } from "./Options";
const OptionsWrapper = () => {
  const { results } = useContext(GameContext);
  return (
    <div
      className={`w-full options-wrapper grid ${
        results.done ? "results" : ""
      }`}>
      {results.done ? <Results /> : <Options />}
    </div>
  );
};

export default OptionsWrapper;
