import {
  ResultsCorrect,
  ResultsShow,
  ResultsWrong,
} from "./results.style";
import { useContext } from "react";
import { GameContext } from "../../context/game.context";

const Results = () => {
  const { correct, currentStreak, result, total, mode} =
    useContext(GameContext);
  if (total === 0) return null;
  return (
    <>
      {total !== 5 ? (result.correct >= 1 
        ? ( <ResultsCorrect as={ResultsShow}>⭐ You got it right!</ResultsCorrect> ) 
          : ( <ResultsWrong as={ResultsShow}>💀 Too bad.</ResultsWrong> ) ) 
        : ((mode === 'score' && correct >= 3) || (mode === 'streak' && currentStreak >= 3)) 
          ? ( <ResultsCorrect as={ResultsShow}> 🎉 Woah! You made it.  </ResultsCorrect> ) 
            : ((mode === 'score' && correct <= 2) || (mode === 'streak' && currentStreak <= 2 ))
              ? ( <ResultsWrong as={ResultsShow}> 😭 What the?! How can you fail this? </ResultsWrong> )
                : null
      }

      {/* {total !== 5 ? (
        result.correct >= 1 ? (
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
      )} */}
    </>
  );
};

export default Results;
