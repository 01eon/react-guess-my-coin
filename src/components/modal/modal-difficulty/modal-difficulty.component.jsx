import { useContext } from "react";
import {
  ButtonEasy,
  ButtonMedium,
  ButtonHard,
} from "../../button/button.styled";
import {
  DiffBtnContainer,
  DiffContainer,
  ModalContent,
  ModalTitle,
} from "../modal.style";
import { GameContext } from "../../../context/game.context";

const ModalDifficulty = () => {
  const { setDiff } = useContext(GameContext)
  return (
    <DiffContainer>
      <ModalContent>
        <ModalTitle>Select Difficulty</ModalTitle>
        <DiffBtnContainer>
          <ButtonEasy onClick={() => setDiff('easy') }> Easy </ButtonEasy>
          <ButtonMedium onClick={() => setDiff('medium') }> Medium </ButtonMedium>
          <ButtonHard onClick={() => setDiff('hard') }> Hard </ButtonHard>
        </DiffBtnContainer>
      </ModalContent>
    </DiffContainer>
  );
};

export default ModalDifficulty;
