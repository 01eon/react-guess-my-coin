import { Fragment } from "react";
import {
  GameContain,
  GameDesc,
  GameHeader,
  GameTitle,
} from "./game-container.style";
import CoinDisplay from "../../components/coin-display/coin-display.component";
import StreakIndicator from "../../components/streak-indicator/streak-indicator.component";

const GameContainer = () => {
  return (
    <Fragment>
      <GameContain>
        <GameHeader>
          <GameTitle>Guess My Coin</GameTitle>
          <GameDesc>Test your luck and intuition!</GameDesc>
        </GameHeader>
        <CoinDisplay />
        <StreakIndicator/>
        
      </GameContain>
    </Fragment>
  );
};

export default GameContainer;
