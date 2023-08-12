import { styled } from 'styled-components';

export const Button = styled.button`
  border-radius: 8px;
  margin-top: 10px;
  background: #1c2b3a;
  padding: 10px 14px;
  color: white;
  &:hover {
    background: #182431;
  }
`;

export const GreenSquare = styled.div`
  position: relative;
  max-width: 650px;
  @media (max-width: 1385px) {
    max-width: 500px;
  }
  display: flex;
  justify-content: center;
  padding: 22px;
  border-radius: 8px;
  border: 1px solid #0c1616;
  background: linear-gradient(
    154deg,
    rgba(23, 85, 83, 0.7) 0%,
    rgba(67, 217, 173, 0.09) 100%
  );
  box-shadow: 0px 2px 0px 0px rgba(255, 255, 255, 0.2) inset;
  backdrop-filter: blur(32px);
`;
