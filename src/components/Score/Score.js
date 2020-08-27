import React from "react";
import "./css/Score.css";
import { useContext } from "react";
import { GameContext } from "../GameLogic/GameContext";
const Score = () => {
  const {
    score,
    language: {
      package: { score: scoreHeader },
    },
  } = useContext(GameContext);
  return (
    <div className="score flex-col flex items-center justify-center">
      <h1>{scoreHeader}</h1>
      <h2>{score}</h2>
    </div>
  );
};

export default Score;
