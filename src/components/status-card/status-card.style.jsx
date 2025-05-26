import styled from "styled-components";

export const StatusContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 30px 0;
`;

export const StatusCardContainer = styled.div`
  background: #f8fafc;
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;

  &:hover {
    background: #f1f5f9;
    transform: translateY(-2px);
  }
`;

export const StatusNumber = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 4px;
`;

export const StatusLabel = styled.div`
  color: #6b7280;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;
