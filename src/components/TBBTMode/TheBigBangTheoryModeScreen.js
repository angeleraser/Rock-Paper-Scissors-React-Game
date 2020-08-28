import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import OptionsWrapper from "./OptionsWrapper";
import RulesModal from "../RulesModal/RulesModal";
import GoBackButton from "../GoBackButton/GoBackButton";
import { GameContext } from "../GameLogic/GameContext";

const TheBigBangTheoryModeScreen = () => {
  const {
    language: {
      package: {
        tbbtVersion: { header },
      },
    },
    dispatch,
  } = useContext(GameContext);

  useEffect(() => {
    dispatch({ type: "SET_GAME_MODE", payload: "The Big Bang Theory Version" });
  }, [dispatch]);
  
  return (
    <div className="w-full tbbt-mode-screen flex-col flex items-center relative">
      <Header modeName={header} />
      <OptionsWrapper />
      <RulesModal gameMode="The Big Bang Theory" />
      <GoBackButton />
      <div className="background-cap animate__animated animate__slideInRight h-full w-full absolute top-0"></div>
    </div>
  );
};

export default TheBigBangTheoryModeScreen;
