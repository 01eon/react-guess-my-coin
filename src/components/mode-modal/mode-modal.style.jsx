import styled from "styled-components";

export const ModalContainer = styled.div`
  z-index: 20;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 50rem;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 1rem;
`;

export const ModalTitle = styled.h2`
  text-transform: capitalize;
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
`;

export const ChoiceContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SelectMode = styled.div`
  border: 3px dotted #9396cc;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  transition: all 0.2s ease;
  width: 20rem;
`;

export const StreakMode = styled(SelectMode)`
  &:hover {
    border: solid;
    cursor: pointer;
    background-color: #fecdae;
  }
`;

export const ScoreMode = styled(SelectMode)`
  &:hover {
    border: solid;
    cursor: pointer;
    background-color: #FFF8B4;
  }
`;

export const ModeTitle = styled.div`
  font-size: 2rem;
  font-weight: 800;
`;

export const ModeIcon = styled.div`
  font-size: 7rem;
`;

export const ModeDesc = styled.span`
  font-size: 1.2rem;
`;
