import styled from "styled-components";
import { media } from "../media-query/media-query.styled";

const ModalContainer = styled.div`
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

export const ModeContainer = styled(ModalContainer)`
  z-index: 20;
  
`;

export const DiffContainer = styled(ModalContainer)`
  z-index: 30;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  width: 50rem;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 1rem;

  ${media.standardPhone`
    margin: 0.5rem 1rem;
  `}

  ${media.hdPhone`
    margin: 0.5rem 5.5rem;
  `}
`;

export const ModalTitle = styled.h2`
  text-transform: capitalize;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;

  ${media.standardPhone`
    font-size: 2rem;
    `}

  ${media.hdPhone`
      font-size: 2.5rem;
      `}
`;

export const ChoiceContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  ${media.standardPhone`
    flex-direction: column;
    gap: 0;  
  `}

  ${media.fhdPhone`
    flex-direction: row;
    gap: 0.5rem;
    `}
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

  ${media.standardPhone`
    width: 15rem;
    margin-bottom: 1rem;
    `}

  ${media.hdPhone`
      width: 20rem;
      margin-bottom: 2rem;`}
`;

export const ScoreMode = styled(SelectMode)`
  &:hover {
    border: solid;
    cursor: pointer;
    background-color: #fff8b4;
  }
`;

export const StreakMode = styled(SelectMode)`
  &:hover {
    border: solid;
    cursor: pointer;
    background-color: #fecdae;
  }
`;

export const ModeTitle = styled.div`
  font-size: 2rem;
  font-weight: 800;

  ${media.standardPhone`
    font-size: 1.5rem;
    `}
  ${media.hdPhone`
      font-size: 2rem;`}
`;

export const ModeIcon = styled.div`
  font-size: 7rem;
  ${media.standardPhone`
    font-size: 5rem;
    `}
  ${media.hdPhone`
    font-size: 7rem;
    `}
`;

export const ModeDesc = styled.span`
  font-size: 1.2rem;
  text-align: center;

  ${media.standardPhone`
    font-size: 1rem;
    `}

  ${media.hdPhone`
      font-size: 1.2rem;
      `}
`;

export const DiffBtnContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-bottom: 1.5rem;

  ${media.standardPhone`
    flex-direction: column;  
  `}

  ${media.tablet`
    flex-direction: row;
    `}
`;
