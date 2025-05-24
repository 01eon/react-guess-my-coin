import { Fragment } from "react";
import {
  GameContain,
  GameDesc,
  GameHeader,
  GameTitle,
} from "./game-container.style";
import CoinDisplay from "../../components/coin-display/coin-display.component";

const GameContainer = () => {
  return (
    <Fragment>
      <GameContain>
        <GameHeader>
          <GameTitle>Guess My Coin</GameTitle>
          <GameDesc>Test your luck and intuition!</GameDesc>
        </GameHeader>
        <CoinDisplay />

        
      </GameContain>
    </Fragment>
  );
};

export default GameContainer;
