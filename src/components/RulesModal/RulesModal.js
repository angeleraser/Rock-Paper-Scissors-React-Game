import React from "react";
import "./css/RulesModal.css";
import { useState } from "react";
import Modal from "./Modal";
import RulesButton from "./RulesButton";
const RulesModal = ({ gameMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    window.scrollTo(0, 0);
    setIsOpen(!isOpen);
  };

  return isOpen ? (
    <Modal isOpen={isOpen} toggleModal={toggleModal} gameMode={gameMode} />
  ) : (
    <RulesButton toggleModal={toggleModal} />
  );
};

export default RulesModal;
