import styled from "styled-components";

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
