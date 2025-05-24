import { Fragment } from "react";
import {
  GameContain,
  GameDesc,
  GameHeader,
  GameTitle,
} from "./game-container.style";
import CoinDisplay from "../../components/coin-display/coin-display.component";
import StreakIndicator from "../../components/streak-indicator/streak-indicator.component";
import CoinSelect from "../../components/coin-select/coin-select.component";
import Results from "../../components/results/results.component";
import StatusCard from "../../components/status-card/status-card.component";
import { ButtonSecondary } from "../../components/button/button.styled";

const GameContainer = () => {
  return ( 
    <Fragment>
      <GameContain>
        
        <GameHeader>
          <GameTitle>Guess My Coin</GameTitle>
          <GameDesc>Test your luck and intuition!</GameDesc>
        </GameHeader>

        <CoinDisplay />

        <StreakIndicator />

        <CoinSelect />

        <Results />

        <StatusCard />

        <ButtonSecondary id="btnReset">🔄 Reset Game</ButtonSecondary>
      </GameContain>
    </Fragment>
  );
};

export default GameContainer;
