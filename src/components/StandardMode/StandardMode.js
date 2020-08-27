import React from "react";
import { Route } from "react-router";
import "./css/OptionsWrapper.css";
import "./css/StandardMode.css";
import OptionsWrapper from "./OptionsWrapper";
import Header from "../Header/Header";
import RulesModal from "../RulesModal/RulesModal";
import GoBackButton from "../GoBackButton/GoBackButton";
import { useContext } from "react";
import { GameContext } from "../GameLogic/GameContext";
import { LoadScreen } from "../LoadScreen/LoadScreen";
import { useLoad } from "../hooks/useLoad";
import { useEffect } from "react";
import { useRef } from "react";
const Content = () => {
  const isMounted = useRef(true);
  const {
    language: {
      package: {
        standardMode: { header },
      },
    },
    dispatch
  } = useContext(GameContext);
  const [loading, awaitLoad, hiddenLoadScreen] = useLoad(0);

  useEffect(() => {
    if (isMounted.current) {
      awaitLoad();
    }
  }, [isMounted, awaitLoad]);

  useEffect(() => {
    setTimeout(() => {
      isMounted.current = false;
      hiddenLoadScreen(0);
    }, 1500);
  }, [hiddenLoadScreen]);

  useEffect(() => {
    dispatch({ type: "SET_GAME_MODE", payload: "Standard" });
  }, [dispatch]);
  
  return loading ? (
    <LoadScreen />
  ) : (
    !isMounted.current && (
      <div className="w-full standard-mode-screen flex-col flex items-center">
        <Header modeName={header} />
        <OptionsWrapper />
        <RulesModal gameMode="Standard" />
        <GoBackButton />
      </div>
    )
  );
};
const StandardMode = ({ path, ...rest }) => {
  return <Route exact path={path} component={Content} {...rest} />;
};

export default StandardMode;
