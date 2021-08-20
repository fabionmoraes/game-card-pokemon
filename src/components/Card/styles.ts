import styled, { css } from 'styled-components';

interface IProps {
  height: number;
  bg: boolean;
}

export const Card = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${props => `${props.height}px`};
  border-radius: 6px;
  box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  ${props =>
    props.bg
      ? css`
          background: #bf1e2e url('/static/bg-pokebola.jpg') no-repeat;
          background-size: cover;
        `
      : css`
          background: #eee;
        `}

  p {
    color: #fff;
    font-size: 16px;
  }

  span {
    color: #999;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  background: none;
  border: 0;
`;
