import React from "react";
import { useContext } from "react";
import { GameContext } from "../GameLogic/GameContext";
import { Options } from "./Options";
import Results from "../Results/Results";

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
