import React, { useContext } from "react";
import Option from "../Option/Option";
import { GameContext } from "../GameLogic/GameContext";

const OptionsResult = ({ loading }) => {
  const { playerOne, playerTwo } = useContext(GameContext);
  return (
    <>
      <div className="option-bg player-one"></div>
      <Option
        animations="animate__backInLeft"
        name={playerOne.option}
        loading={loading}
        player="One"
      />
      <Option
        animations="animate__backInRight"
        name={playerTwo.option}
        loading={loading}
        player="Two"
      />
      <div className="option-bg player-two"></div>
    </>
  );
};

export default OptionsResult;
