import React from "react";
import { Switch } from "react-router";
import SelectMode from "../SelectMode/SelectMode";
import MainScreen from "../MainScreen/MainScreen";
import StandardMode from "../StandardMode/StandardMode";
import TheBigBangTheoryMode from "../TBBTMode/TheBigBangTheoryMode";
import { GameProvider } from "../GameLogic/GameContext";
const Game = () => {
  return (
    <>
      <Switch>
        <GameProvider>
          <MainScreen exact={true} path="/" />
          <SelectMode path="/select-mode" />
          <StandardMode path="/standard-mode" />
          <TheBigBangTheoryMode path="/the-big-bang-theory-mode" />
        </GameProvider>
      </Switch>
    </>
  );
};

export default Game;
