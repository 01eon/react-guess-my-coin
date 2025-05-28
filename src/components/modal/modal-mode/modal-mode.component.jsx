import {
  ChoiceContainer,
  ModeContainer,
  ModalContent,
  ModalTitle,
  StreakMode,
  ScoreMode,
  ModeTitle,
  ModeIcon,
  ModeDesc,
} from "../modal.style";

import { useContext } from "react";
import { GameContext } from "../../../context/game.context";
import ModalDifficulty from "../modal-difficulty/modal-difficulty.component";

const ModalMode = () => {
  const { showModalDiff, setMode } = useContext(GameContext);
  return (
    <>
      {showModalDiff && <ModalDifficulty />}
      <ModeContainer>
        <ModalContent>
          <ModalTitle>Select Game Mode</ModalTitle>
          <ChoiceContainer>
            <ScoreMode
              onClick={() => {
                setMode("score");
              }}
            >
              <ModeTitle>Above the Odds</ModeTitle>
              <ModeIcon>🏆</ModeIcon>
              <ModeDesc>Get at least 3 correct guess.</ModeDesc>
            </ScoreMode>
            <StreakMode
              onClick={() => {
                setMode("streak");

              }}
            >
              <ModeTitle>Streak Master</ModeTitle>
              <ModeIcon>🔥</ModeIcon>
              <ModeDesc>Get 3 consecutive correct guess.</ModeDesc>
            </StreakMode>
          </ChoiceContainer>
        </ModalContent>
      </ModeContainer>
    </>
  );
};

export default ModalMode;
