import { Fragment, useContext, useState } from "react";
import {
  GameContain,
  GameDesc,
  GameHeader,
  GameTitle,
} from "./game-container.style";

// Coin Display Styled Component
import {
  CoinDisp,
  Coin,
} from "../../components/coin-display/coin-display.style";

// Coin Select Styled Component
import { SelectContainer } from "../../components/coin-select/coin-select.style";

// Button Styled Component
import { ButtonPrimary } from "../../components/button/button.styled";

import StreakIndicator from "../../components/streak-indicator/streak-indicator.component";

import StatusCard from "../../components/status-card/status-card.component";

import { ResultsCorrect } from "../../components/results/results.style"

import { ButtonSecondary } from "../../components/button/button.styled";
import { GameContext } from "../../context/game.context";

const GameContainer = () => {
  const { isFlipping, result, initGuess, makeGuess, resetGame } =
    useContext(GameContext);

  const [coinSide, setCoinSide] = useState("?");
  const [coinFlip, setCoinFlip] = useState("");

  // initGuess();

  const handleGuess = (guess) => {
    setCoinSide("?");
    setCoinFlip("flipping");
    
    makeGuess(guess, (outcome) => {
      setCoinSide(outcome === "heads" ? "H" : "T");
      setCoinFlip("");
    });
  };


  return (
    <Fragment>
      <GameContain>
        <GameHeader>
          <GameTitle>Guess My Coin</GameTitle>
          <GameDesc>Test your luck and intuition!</GameDesc>
        </GameHeader>

        <CoinDisp>
          <Coin className={`${coinFlip}`} id="coin">
            {coinSide}
          </Coin>
        </CoinDisp>

        <StreakIndicator />

        <SelectContainer>
          <ButtonPrimary
            onClick={() => {
              handleGuess("heads");
            }}
            disabled={isFlipping}
          >
            <span> ⭐ Heads</span>
          </ButtonPrimary>
          <ButtonPrimary
            onClick={() => {
              handleGuess("tails");
            }}
            disabled={isFlipping}
          >
            <span> ⚖️ Tails</span>
          </ButtonPrimary>
        </SelectContainer>


        <StatusCard />

        <ButtonSecondary id="btnReset">🔄 Reset Game</ButtonSecondary>
      </GameContain>
    </Fragment>
  );
};

export default GameContainer;
