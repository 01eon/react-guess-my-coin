import {
  ChoiceContainer,
  ModalContainer,
  ModalContent,
  ModalTitle,
  StreakMode,
  ScoreMode,
  ModeTitle,
  ModeIcon,
  ModeDesc,
} from "./mode-modal.style";

import { useContext } from "react";
import { GameContext } from "../../context/game.context"

const ModeModal = () => {
    const { setMode } = useContext(GameContext);
  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>Select Game Mode</ModalTitle>
        <ChoiceContainer>
          <ScoreMode onClick={() => {
            setMode('score')
          }}>
            <ModeTitle>Above the Odds</ModeTitle>
            <ModeIcon>🏆</ModeIcon>
            <ModeDesc>Get at least 3 correct guess.</ModeDesc>
          </ScoreMode>
          <StreakMode onClick={() => {
            setMode('streak')
          }}>
            <ModeTitle>Streak Master</ModeTitle>
            <ModeIcon>🔥</ModeIcon>
            <ModeDesc>Get 3 consecutive correct guess.</ModeDesc>
          </StreakMode>
        </ChoiceContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModeModal;
