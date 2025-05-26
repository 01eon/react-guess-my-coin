import styled from "styled-components";

export const StreakContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
`;

export const StreakDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #e5e7eb;
  transition: all 0.2s ease;
`;

export const StreakDotActive = styled(StreakDot)`
  background: linear-gradient(135deg, #667eea, #764ba2);
  transform: scale(1.2);
`;
