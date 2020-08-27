import React from "react";
import "./css/RulesModal.css";
import { rules } from "../../data";
import { useState } from "react";
import { useContext } from "react";
import { GameContext } from "../GameLogic/GameContext";
const RulesModal = ({ gameMode }) => {
  const { rules: rulesImg } = rules.find(({ mode }) => mode === gameMode);
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    window.scrollTo(0, 0);
    setIsOpen(!isOpen);
  };
  const {
    results: { done },
    language: {
      package: { rulesButton },
    },
  } = useContext(GameContext);
  return isOpen ? (
    <div className="modal-wrapper w-full absolute h-screen top-0 z-50">
      <dialog
        className={`w-full rules-modal flex-col items-center justify-center  h-full top-0 ${
          isOpen ? "flex" : "none"
        }`}>
        {" "}
        <h1>{rulesButton}</h1>
        {rulesImg}
        <button onClick={toggleModal} className="bg-center bg-cover"></button>
      </dialog>
    </div>
  ) : (
    <button
      className={`rules-button ${done ? "display-none" : ""}`}
      onClick={toggleModal}>
      {" "}
      {rulesButton}
    </button>
  );
};

export default RulesModal;
