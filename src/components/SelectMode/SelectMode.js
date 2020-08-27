import React from "react";
import { Route } from "react-router";
import "./css/SelectMode.css";
import BaseLink from "../BaseLink/BaseLink";
import GoBackButton from "../GoBackButton/GoBackButton";
import { useContext } from "react";
import { GameContext } from "../GameLogic/GameContext";
const Content = ({ match }) => {
  const {
    language: {
      package: {
        selectModeScreen: { header },
      },
    },
  } = useContext(GameContext);
  return (
    <main className="select-mode relative flex-col items-center justify-center w-full flex animate__animated animate__slideInRight">
      <h1>{header}</h1>
      <BaseLink route="/standard-mode" label={"Standard"} />
      <BaseLink
        route="/the-big-bang-theory-mode"
        label={"The Big Bang Theory version"}
      />
      <GoBackButton />
    </main>
  );
};
const SelectMode = ({ path }) => {
  return <Route path={path} component={Content} />;
};

export default SelectMode;
