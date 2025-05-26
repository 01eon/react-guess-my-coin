import {
  ResultsBase,
  ResultsCorrect,
  ResultsShow,
  ResultsWrong,
} from "./results.style";
import { useContext } from "react";
import { GameContext } from "../../context/game.context";

const Results = () => {
  const { correct, total } = useContext(GameContext);
  if (total === 0) return null;
  return (
    <>
      {total !== 5 ? (
        correct >= 1 ? (
          <ResultsCorrect as={ResultsShow}>⭐ You got it right!</ResultsCorrect>
        ) : (
          <ResultsWrong as={ResultsShow}>💀 Too bad.</ResultsWrong>
        )
      ) : correct >= 3 ? (
        <ResultsCorrect as={ResultsShow}>🎉 Woah! You made it.</ResultsCorrect>
      ) : (
        <ResultsWrong as={ResultsShow}>
          😭 What the?! How can you fail this?
        </ResultsWrong>
      )}
    </>
  );
};

export default Results;
