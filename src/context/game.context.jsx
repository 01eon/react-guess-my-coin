import { createContext, useState } from "react";

export const GameContext = createContext({
  correct: 0,
  total: 0,
  currentStreak: 0,
  maxStreak: 5,
  result: null,
  isFlipping: null,
  makeGuess: () => {},
  resetGame: () => {},
});

const getRandomOutcome = () => (Math.random() < 0.7 ? "heads" : "tails");

export const GameProvider = ({ children }) => {
  const [correct, setCorrect] = useState(0);
  const [total, setTotal] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [result, setResult] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const maxStreak = 5;

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
  };

  const value = {
    correct,
    total,
    currentStreak,
    maxStreak,
    result,
    isFlipping,
    makeGuess,
    resetGame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
