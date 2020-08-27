import React from "react";
import { useHistory } from "react-router";
import "./css/BackButton.css";
import { useContext } from "react";
import { GameContext } from "../GameLogic/GameContext";
const GoBackButton = () => {
  const { goBack } = useHistory();
  const {
    dispatch,
    results: { done },
    language: {
      package: { backButton },
    },
  } = useContext(GameContext);
  return (
    <button
      className={`back-button ${done ? "display-none" : ""}`}
      onClick={() => {
        goBack();
        setTimeout(() => {
          dispatch({
            type: "RESET",
          });
        }, 500);
      }}>
      {" "}
      {backButton}
    </button>
  );
};

export default GoBackButton;
