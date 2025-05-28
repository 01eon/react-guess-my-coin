import styled from "styled-components";
import { media } from "../media-query/media-query.styled";

export const ResultsBase = styled.div`
  text-align: center;
  padding: 20px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 1.1rem;
  opacity: 0;
  margin-top: 1rem;
  transform: translateY(10px);
  transition: all 0.3s ease;
  width: 70%;

  ${media.standardPhone`
      width: 60%;
      font-size: 0.9rem;
      margin-top: 0.5rem;
      padding: 20px 10px;
    `}

    ${media.hdPhone`
      width: 70%;
      font-size: 1.1rem;
      margin-top: 1rem;
      padding: 20px;
      `}
`;

export const ResultsShow = styled(ResultsBase)`
  opacity: 1;
  transform: translateY(0);
`;

export const ResultsCorrect = styled(ResultsBase)`
  background: linear-gradient(135deg, #67c9b2, #5fb77a);
  color: white;
`;


export const ResultsWrong = styled(ResultsBase)`
  background: linear-gradient(135deg, #f76060, #f87171);

  color: white;
`;
