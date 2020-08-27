import React from "react";
import "./css/Option.css";
import { useContext } from "react";
import { GameContext } from "../GameLogic/GameContext";
import "animate.css";
const Option = ({ name = "", player = "", loading, animations = "" }) => {
  const {
    dispatch,
    playerOne,
    playerTwo,
    results: { winner, done },
    language,
  } = useContext(GameContext);
  const selectOption = () => {
    if (!done) {
      dispatch({
        type: "OPTION_SELECTION",
        payload: name,
      });
      dispatch({
        type: "SET_RESULTS",
      });
    }
  };
  const playerOneChoice = () =>
    language.name === "EN" ? `${playerOne.name} picked` : "Elegiste";
  const playerTwoChoice = () =>
    language.name === "EN"
      ? `${playerTwo.name} picked`
      : `${playerTwo.name} eligió`;

  return (
    <div
      onClick={selectOption}
      className={`animate__animated option-button flex justify-center items-center ${name.toLowerCase()} player-${player.toLowerCase()} ${animations}`}>
      <button
        className={`option flex items-center justify-center ${name.toLowerCase()}`}>
        {name}
      </button>
      <div
        className={`radial-bg animate__animated ${
          winner?.option === name && loading ? "winner animate__pulse" : ""
        }`}></div>
      {loading && (
        <p className="absolute">
          {player === "One" ? playerOneChoice() : playerTwoChoice()}
        </p>
      )}
    </div>
  );
};

export default Option;
