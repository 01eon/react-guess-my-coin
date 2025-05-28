import styled from "styled-components";
import { media } from "../../components/media-query/media-query.styled";

export const GameContain = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 10;
  border-radius: 2rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.standardPhone`
    padding: 0.5rem;
    `}

  ${media.hdPhone`
    padding: 1.5rem;
    `}
`;

export const GameHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.2rem;
`;

export const GameTitle = styled.h2`
  text-transform: capitalize;
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
  margin-bottom: 0rem;

  ${media.standardPhone`
    font-size: 2rem;
    `};

  ${media.hdPhone`
      font-size: 2.5rem;
      `}
`;

export const GameMode = styled.span`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.8rem;
`;

export const GameDesc = styled.span`
  color: #6b7280;
  font-size: 1rem;
  font-weight: 500;
`;
