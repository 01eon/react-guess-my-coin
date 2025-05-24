import styled from "styled-components";

export const ResultsBase = styled.div`
  text-align: center;
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 1.1rem;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
`;

export const ResultsShow = styled(ResultsBase)`
  opacity: 1;
  transform: translateY(0);
`;

export const ResultsCorrect = styled(ResultsBase)`
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
`;

export const ResultsWrong = styled(ResultsBase)`
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
`;
