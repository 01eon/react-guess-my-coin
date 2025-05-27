import styled from "styled-components";
import { media } from "../media-query/media-query.styled";

export const StatusContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 30px 0;

  ${media.standardPhone`
    margin: 10px 0;
    `}
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
  ${media.standardPhone`
    padding: 7px;
    `}
`;

export const StatusNumber = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 4px;

  ${media.standardPhone`
    font-size: 1.5rem;
    `}
`;

export const StatusLabel = styled.div`
  color: #6b7280;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  ${media.standardPhone`
      font-size: 0.7rem;
    `}
`;
