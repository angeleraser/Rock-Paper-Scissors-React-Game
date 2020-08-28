import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import OptionsWrapper from "./OptionsWrapper";
import RulesModal from "../RulesModal/RulesModal";
import GoBackButton from "../GoBackButton/GoBackButton";
import { GameContext } from "../GameLogic/GameContext";
const StandardModeScreen = () => {
  const {
    language: {
      package: {
        standardMode: { header },
      },
    },
    dispatch,
  } = useContext(GameContext);

  useEffect(() => {
    dispatch({ type: "SET_GAME_MODE", payload: "Standard" });
  }, [dispatch]);
  
  return (
    <div className="w-full standard-mode-screen flex-col flex items-center">
      <Header modeName={header} />
      <OptionsWrapper />
      <RulesModal gameMode="Standard" />
      <GoBackButton />
    </div>
  );
};

export default StandardModeScreen;
