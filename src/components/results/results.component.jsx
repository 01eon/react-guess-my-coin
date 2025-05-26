import { ResultsBase, ResultsCorrect, ResultsShow, ResultsWrong } from "./results.style";
import { useContext, useEffect } from "react";
import { GameContext } from "../../context/game.context";

const Results = () => {
  const { result } = useContext(GameContext);

  useEffect(() => {
    if (result) {
      console.log("Updated Result", result);
    }
  }, [result]);

  if (!result) return null;
  return (
    <>
      {result && result.correct ? <ResultsCorrect as={ResultsShow}>🎉 You got it right!</ResultsCorrect> : <ResultsWrong as={ResultsShow}>💀 Too bad.</ResultsWrong>}
    </>
  )
      // {result && result.correct ? <ResultsCorrect as={ResultsShow}>aaa</ResultsCorrect> : <ResultsWrong as={ResultsShow}>ssss</ResultsWrong>}
  
};

export default Results;
