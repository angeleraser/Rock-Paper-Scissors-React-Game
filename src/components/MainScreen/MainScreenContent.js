import React, { useContext } from "react";
import { headerNames } from "../GameLogic/methods";
import BaseLink from "../BaseLink/BaseLink";
import { GameContext } from "../GameLogic/GameContext";

const MainScreenContent = ({ loadScreenFunctions }) => {
  const {
    dispatch,
    language: {
      name: languageName,
      package: {
        mainScreen: { header, link, startButton, language },
      },
    },
  } = useContext(GameContext);
  
  const dispatchSetLanguage = ({ target: { ariaLabel: lang } }) => {
    if (languageName !== lang) {
      setTimeout(() => {
        dispatch({
          type: "SET_LANGUAGE",
          payload: lang,
        });
      }, 500);
      loadScreenFunctions();
    }
  };
  return (
    <main className="main-screen flex-col animate__animated animate__fadeIn items-center justify-center w-full flex">
      <h1>{headerNames(header)}</h1>
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
          onClick={dispatchSetLanguage}
          aria-label="EN"
          className="mx-4 EN-lang"></button>
        <button
          onClick={dispatchSetLanguage}
          aria-label="ES"
          className="ES-lang"></button>
      </div>
    </main>
  );
};

export default MainScreenContent;
