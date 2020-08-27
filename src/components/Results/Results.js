import React from "react";
import { useContext } from "react";
import { GameContext } from "../GameLogic/GameContext";
import Option from "../../components/Option/Option";
import PlayAgainButton from "./PlayAgainButton";
import { useLoad } from "../hooks/useLoad";
import { useEffect } from "react";
const Results = () => {
  const {
    playerOne,
    playerTwo,
    dispatch,
    results: { winner, deuce },
    language,
  } = useContext(GameContext);

  const [loading, awaitResult] = useLoad(2700);
  const deuceText = language.name === "EN" ? "Deuce!" : "¡Empate!";
  const winnerName = () => {
    if (language.name === "EN") {
      return winner.name + " win!";
    } else {
      if (winner.name === "You") {
        return "¡Ganaste!";
      } else {
        return "¡Perdiste!";
      }
    }
  };

  awaitResult();

  useEffect(() => {
    if (loading) {
      dispatch({ type: "ADD_SCORE" });
    }
  }, [loading, dispatch]);

  return (
    <>
      {" "}
      <div className="option-bg player-one"></div>
      <div className="option-bg player-two"></div>
      {loading && (
        <>
          <div className="results-winner flex flex-col items-center">
            <h2 className="animate__bounce animate__animated">
              {deuce ? deuceText : winnerName()}
            </h2>{" "}
            <PlayAgainButton />{" "}
          </div>
        </>
      )}
      <Option
        animations="animate__backInRight"
        name={playerTwo.option}
        player="Two"
        loading={loading}
      />
      <Option
        name={playerOne.option}
        player="One"
        animations="animate__backInLeft"
        loading={loading}
      />
    </>
  );
};

export default Results;
