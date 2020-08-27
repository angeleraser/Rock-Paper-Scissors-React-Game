import React, { createContext } from "react";
import { GameLogic, gameReducer, defaultState } from "./GameReducer";
export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [
    { mode, score, results, playerOne, playerTwo, language },
    dispatch,
  ] = GameLogic(gameReducer, defaultState);
  const providerValue = {
    mode,
    score,
    results,
    playerOne,
    playerTwo,
    dispatch,
    language,
  };
  return (
    <GameContext.Provider value={providerValue}>
      {children}
    </GameContext.Provider>
  );
};
