const getRandomOption = (gameMode) => {
  const options = ["Paper", "Rock", "Scissors", "Lizard", "Spock"];
  const indx = gameMode !== "Standard" ? options.length : 3;
  const randomIndx = Math.floor(Math.random() * indx);
  return options[randomIndx];
};
const getPlayerTwoName = (gameMode) => {
  const names = ["Sheldon", "Leonard", "Raj", "Howard"];
  const randomIndx = Math.floor(Math.random() * names.length);
  return gameMode === "Standard" ? "House" : names[randomIndx];
};
const getResults = (p1, p2) => {
  const OPTIONS = [
    {
      name: "Rock",
      losses: ["Paper", "Spock"],
      wins: ["Scissors", "Lizard"],
      deuce: "Rock",
    },
    {
      name: "Paper",
      losses: ["Scissors", "Lizard"],
      wins: ["Rock", "Spock"],
      deuce: "Paper",
    },
    {
      name: "Scissors",
      losses: ["Rock", "Spock"],
      wins: ["Paper", "Lizard"],
      deuce: "Scissors",
    },
    {
      name: "Spock",
      losses: ["Paper", "Lizard"],
      wins: ["Scissors", "Rock"],
      deuce: "Spock",
    },
    {
      name: "Lizard",
      losses: ["Scissors", "Rock"],
      wins: ["Spock", "Paper"],
      deuce: "Lizard",
    },
  ];

  const playerOne = OPTIONS.find(({ name }) => p1.option === name);

  const playerTwo = OPTIONS.find(({ name }) => p2.option === name);

  const results = {
    winner: null,
    losser: null,
    deuce: false,
    done: true,
  };

  if (playerOne.name === playerTwo.name) {
    results.deuce = true;
  } else {
    if (playerOne.losses.some((option) => option === playerTwo.name)) {
      results.winner = p2;
      results.losser = p1;
    } else {
      results.winner = p1;
      results.losser = p2;
    }
  }
  return results;
};
const addScore = ({ winner }, score) => {
  if (winner?.name === "You") {
    return score + 1;
  } else {
    return score;
  }
};
const USLanguagePackage = {
  name: "EN",
  package: {
    backButton: "back",
    mainScreen: {
      header: "rock paper scissors",
      startButton: "start",
      link: "Developed by",
      language: "Language",
    },
    playAgainButton: "play again",
    rulesButton: "rules",
    selectModeScreen: {
      header: "Select a mode",
    },
    score: "score",
    standardMode: {
      header: "rock paper scissors",
    },
    tbbtVersion: {
      header: "rock paper scissors lizard spock",
    },
    players: {
      one: {
        name: "You",
      },
      two: {
        name: "House",
      },
    },
  },
};
const ESLanguagePackage = {
  name: "ES",
  package: {
    backButton: "atrás",
    mainScreen: {
      header: "piedra papel tijeras",
      startButton: "jugar",
      link: "Desarrollado por",
      language: "Idioma",
    },
    playAgainButton: "jugar otra vez",
    rulesButton: "reglas",
    selectModeScreen: {
      header: "Elige un modo",
    },
    score: "puntaje",
    standardMode: {
      header: "piedra papel tijeras",
    },
    tbbtVersion: {
      header: "piedra papel tijeras lagarto spock",
    },
  },
};
const langPackages = [USLanguagePackage, ESLanguagePackage];
const getLanguagePackage = (lang) =>
  langPackages.find(({ name }) => name === lang);

export {
  getRandomOption,
  getPlayerTwoName,
  getResults,
  addScore,
  getLanguagePackage,
  USLanguagePackage,
};
