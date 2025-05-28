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

import Results from "../../components/results/results.component";

import { ButtonSecondary } from "../../components/button/button.styled";
import { GameContext } from "../../context/game.context";
import ModeModal from "../../components/mode-modal/mode-modal.component";

const GameContainer = () => {
  const { isFlipping, total, showModal, makeGuess, resetGame } =
    useContext(GameContext);

  const [coinSide, setCoinSide] = useState("?");
  const [coinFlip, setCoinFlip] = useState("");

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
      {showModal && <ModeModal /> }

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
            disabled={isFlipping || total === 5}
          >
            <span> ⭐ Heads</span>
          </ButtonPrimary>
          <ButtonPrimary
            onClick={() => {
              handleGuess("tails");
            }}
            disabled={isFlipping || total === 5}
          >
            <span> ⚖️ Tails</span>
          </ButtonPrimary>
        </SelectContainer>

        <Results />

        <StatusCard />

        {total === 0 || total === 5 ? (
          <ButtonSecondary>👆 Select Mode</ButtonSecondary>
        ) : null}

        {total === 0 ? null : total !== 0 || total !== 5 ? (
          <ButtonSecondary onClick={resetGame}> 🔄 Reset Game</ButtonSecondary>
        ) : total === 5 ? (
          <ButtonSecondary onClick={resetGame}> 🔄 New Game</ButtonSecondary>
        ) : null}

        {/* <ButtonSecondary onClick={resetGame}> {total === 0 ? "🔄 Reset Game" : total === 5 ? "🔄 New Game" : null}</ButtonSecondary> */}
      </GameContain>
    </Fragment>
  );
};

export default GameContainer;
