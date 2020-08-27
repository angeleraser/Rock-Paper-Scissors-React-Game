import React, { useEffect } from "react";
import { Route } from "react-router";
import Header from "../Header/Header";
import OptionsWrapper from "./OptionsWrapper";
import "./css/OptionsWrapper.css";
import "./css/TBBTMode.css";
import RulesModal from "../RulesModal/RulesModal";
import GoBackButton from "../GoBackButton/GoBackButton";
import { useContext } from "react";
import { GameContext } from "../GameLogic/GameContext";
import { useLoad } from "../hooks/useLoad";
import { useRef } from "react";
import { LoadScreen } from "../LoadScreen/LoadScreen";
const Content = () => {
  const isMounted = useRef(true);
  const {
    language: {
      package: {
        tbbtVersion: { header },
      },
    },
    dispatch,
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
    }, 2000);
  }, [hiddenLoadScreen]);

  useEffect(() => {
    dispatch({ type: "SET_GAME_MODE", payload: "The Big Bang Theory Version" });
  }, [dispatch]);

  return loading ? (
    <LoadScreen />
  ) : (
    !isMounted.current && (
      <>
        <div className="w-full tbbt-mode-screen flex-col flex items-center relative">
          <Header modeName={header} />
          <OptionsWrapper />
          <RulesModal gameMode="The Big Bang Theory" />
          <GoBackButton />
          <div className="background-cap animate__animated animate__slideInRight h-full w-full absolute top-0"></div>
        </div>
      </>
    )
  );
};
const TheBigBangTheoryMode = ({ path, ...rest }) => {
  return <Route exact path={path} component={Content} {...rest} />;
};

export default TheBigBangTheoryMode;
