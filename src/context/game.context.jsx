import { createContext, useState, useEffect } from "react";

export const GameContext = createContext({
  correct: 0,
  total: 0,
  currentStreak: 0,
  maxStreak: 5,
  result: null,
  isFlipping: null,
  mode: "",
  showModal: true,
  makeGuess: () => {},
  resetGame: () => {},
});

export const GameProvider = ({ children }) => {
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [result, setResult] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [mode, setModeState] = useState("");
  const [showModal, setShowModal] = useState(true);
  const maxStreak = 5;

  const getRandomOutcome = () => (Math.random() < 0.5 ? "heads" : "tails");
  
  useEffect(() => {
    if (mode) {
      console.log("----- Checking Game Mode:", mode);
    }
  }, [mode]);

  const setMode = (select) => {
    setModeState(select);
    setShowModal(false);
  };

  const modeScore = correct >= 3;
  const modeStreak = currentStreak >= 3;

  const makeGuess = (guess, callback) => {
    // Guard Clause
    if (isFlipping) return;

    console.log("makeGuess CALLED with:", guess);

    // Coin Flip in Progress
    setIsFlipping(true);
    setTimeout(() => {
      const outcome = getRandomOutcome();
      const isCorrect = guess === outcome;

      console.log("Flipped Outcome:", outcome);

      setTotal((prev) => prev + 1);
      setCorrect((prev) => (isCorrect ? prev + 1 : prev));
      setCurrentStreak((prev) => (isCorrect ? prev + 1 : 0));
      setResult({ outcome, correct: isCorrect });

      // Flip end
      setIsFlipping(false);

      callback?.(outcome);
    }, 600);
  };

  const resetGame = () => {
    setCorrect(0);
    setTotal(0);
    setCurrentStreak(0);
    setResult(null);
    setModeState(null);
    setShowModal(true);
  };

  const value = {
    correct,
    total,
    currentStreak,
    maxStreak,
    result,
    isFlipping,
    mode,
    showModal,
    modeScore,
    modeStreak,
    setModeState,
    setMode,
    makeGuess,
    resetGame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
