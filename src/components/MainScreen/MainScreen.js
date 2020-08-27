import React from "react";
import { Route } from "react-router";
import "./css/MainScreen.css";
import BaseLink from "../BaseLink/BaseLink";
import { useContext } from "react";
import { GameContext } from "../GameLogic/GameContext";
import { LoadScreen } from "../LoadScreen/LoadScreen";
import { useLoad } from "../../components/hooks/useLoad";
const Content = () => {
  const {
    dispatch,
    language: {
      name: languageName,
      package: {
        mainScreen: { header, link, startButton, language },
      },
    },
  } = useContext(GameContext);

  const names = header.split(" ").map((name) => {
    let animation = "";
    switch (name) {
      case "rock":
      case "piedra":
      case "tijeras":
      case "scissors":
        animation = "animate__slideInLeft";
        break;
      case "paper":
      case "papel":
        animation = "animate__slideInRight";
        break;
      default:
        break;
    }
    return (
      <span key={name} className={`animate__animated ${animation}`}>
        {name}
      </span>
    );
  });

  const setLanguage = (lang) => {
    setTimeout(() => {
      dispatch({
        type: "SET_LANGUAGE",
        payload: lang,
      });
    }, 800);
    awaitLoad();
    hiddenLoadScreen(2000);
  };
  const [loading, awaitLoad, hiddenLoadScreen] = useLoad(0);
  const screen = (
    <main className="main-screen flex-col animate__animated animate__fadeIn items-center justify-center w-full flex">
      <h1>{names}</h1>
      <BaseLink route="/select-mode" label={startButton} />
      <h2>
        {link}{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.twitter.com/angeleraser">
          @angeleraser
        </a>
      </h2>
      <div className="lang-buttons-wrapper flex w-full justify-center items-center">
        {language}:
        <button
          onClick={({ target: { ariaLabel } }) => {
            !(languageName === ariaLabel) && setLanguage(ariaLabel);
          }}
          aria-label="EN"
          className="mx-4 EN-lang"></button>
        <button
          onClick={({ target: { ariaLabel } }) => {
            !(languageName === ariaLabel) && setLanguage(ariaLabel);
          }}
          aria-label="ES"
          className="ES-lang"></button>
      </div>
    </main>
  );
  return loading ? <LoadScreen /> : screen;
};
const MainScreen = ({ path, ...rest }) => {
  return <Route {...rest} path={path} component={Content} />;
};
export default MainScreen;
