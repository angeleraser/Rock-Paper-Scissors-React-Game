import React, { useContext } from "react";
import { rules } from "../../data";
import { GameContext } from "../GameLogic/GameContext";
const getRulesImg = (gameMode) =>
  rules.find(({ mode }) => mode === gameMode).rules;
const Modal = ({ gameMode, isOpen, toggleModal }) => {
  const {
    language: {
      package: { rulesButton },
    },
  } = useContext(GameContext);
  return (
    <div className="modal-wrapper w-full absolute h-screen top-0 z-50">
      <dialog
        className={`w-full rules-modal flex-col items-center justify-center  h-full top-0 ${
          isOpen ? "flex" : "none"
        }`}>
        {" "}
        <h1>{rulesButton}</h1>
        {getRulesImg(gameMode)}
        <button onClick={toggleModal} className="bg-center bg-cover"></button>
      </dialog>
    </div>
  );
};

export default Modal;
