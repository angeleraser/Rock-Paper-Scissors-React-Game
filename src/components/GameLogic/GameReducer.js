import { useReducer } from "react";
import {
  getRandomOption,
  getResults,
  getPlayerTwoName,
  addScore,
  getLanguagePackage,
  USLanguagePackage,
} from "./methods";

export const defaultState = {
  mode: null,
  language: {
    name: "EN",
    package: USLanguagePackage.package,
  },
  score: 0,
  results: {
    winner: null,
    losser: null,
    deuce: false,
    done: false,
  },
  playerOne: {
    name: "You",
    option: null,
  },
  playerTwo: {
    name: "House",
    option: null,
  },
};
export const gameReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_GAME_MODE":
      return {
        ...state,
        mode: action.payload,
      };
    case "OPTION_SELECTION":
      return {
        ...state,
        playerOne: {
          ...state.playerOne,
          option: action.payload,
        },
        playerTwo: {
          ...state.playerTwo,
          option: getRandomOption(state.mode),
          name: getPlayerTwoName(state.mode),
        },
      };
    case "SET_RESULTS":
      return {
        ...state,
        results: getResults(state.playerOne, state.playerTwo),
      };
    case "ADD_SCORE":
      return {
        ...state,
        score: addScore(state.results, state.score),
      };
    case "PLAY_AGAIN":
      return {
        ...state,
        results: {
          ...state.results,
          done: false,
          winner: null,
          losser: null,
        },
        playerOne: {
          ...state.playerOne,
          option: null,
        },
        playerTwo: {
          ...state.playerTwo,
          option: null,
        },
      };
    case "SET_LANGUAGE":
      return {
        ...state,
        language: getLanguagePackage(action.payload),
      };
    case "RESET":
      return {
        ...defaultState,
        language: state.language,
      };
    default:
      return state;
  }
};
export const GameLogic = useReducer;
