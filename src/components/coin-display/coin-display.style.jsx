import styled, { keyframes } from "styled-components";

// Add perspective: 1000px if needed
export const CoinDisp = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.8rem 0;
`;
const flip = keyframes`
    0% { transform: rotateY(0); }
    50% { transform: rotateY(90deg) scale(1.1); }
    100% { transform: rotateY(180deg); }
`;

export const Coin = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  border: 4px solid #f59e0b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  font-family: "ADLaM Display", system-ui;
  font-style: normal;
  color: #92400e;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 25px rgba(245, 158, 11, 0.3);
  position: relative;

  &:hover {
    transform: rotateY(180deg) scale(1.05);
  }

  &.flipping {
    animation: ${flip} 0.6s ease-in-out;
  }

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #ffd700, #ffed4e, #ffd700);
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:hover::before {
    opacity: 0.5;
  }
`;
