import { Fragment, useContext, useState } from "react";
import {
  GameContain,
  GameDesc,
  GameHeader,
  GameTitle,
  GameMode,
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
import ModalMode from "../../components/modal/modal-mode/modal-mode.component";

const GameContainer = () => {
  const { mode, diffLabel, isFlipping, total, showModal, makeGuess, resetGame } =
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
      {showModal && <ModalMode />}

      <GameContain>
        <GameHeader>
          <GameTitle>Guess My Coin</GameTitle>
          <GameMode>[ {mode} Mode: {diffLabel} ]</GameMode>
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

        {total === 0 ? (
          <ButtonSecondary onClick={resetGame}>👆 Select Mode</ButtonSecondary>
        ) : total !== 0 || total !== 5 ? (
          <ButtonSecondary onClick={resetGame}> 🔄 New Game</ButtonSecondary>
        ) : null}

      </GameContain>
    </Fragment>
  );
};

export default GameContainer;
