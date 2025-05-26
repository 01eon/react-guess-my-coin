import styled from "styled-components";

const ButtonBase = styled.button`
  width: 15rem;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 16px;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: linear-gradient(135deg, #a8b5f2, #a388bf);
    color: white;
    cursor: not-allowed;
    transform: translateY(0px);
  }

  &:hover:disabled {
    transform: translateY(0px);
  box-shadow: none;

  }
`;

export const ButtonPrimary = styled(ButtonBase)`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }
`;

export const ButtonSecondary = styled(ButtonBase)`
  background: #f3f4f6;
  color: #374151;
  border: 2px solid #e5e7eb;

  &:hover {
    background: #e5e7eb;
    transform: translateY(-1px);
  }
`;
