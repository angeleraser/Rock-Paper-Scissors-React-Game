import React from "react";
import { useContext } from "react";
import { GameContext } from "../GameLogic/GameContext";
import { useLoad } from "../hooks/useLoad";
import { useEffect } from "react";
import OptionsResult from "./OptionsResult";
import ResultsText from "./ResultsText";
const Results = () => {
  const { dispatch } = useContext(GameContext);

  const [loading, awaitResult] = useLoad(2700);

  awaitResult();

  useEffect(() => {
    if (!loading) {
      dispatch({ type: "ADD_SCORE" });
    }
  }, [loading, dispatch]);

  return (
    <>
      {" "}
      {!loading && (
        <>
          <ResultsText/>
        </>
      )}
      <OptionsResult loading={!loading} />
    </>
  );
};

export default Results;
