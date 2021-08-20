import styled, { css } from 'styled-components';

type IFilter = {
  filter: boolean;
};

export const Container = styled.div<IFilter>`
  display: flex;
  position: absolute;
  top: 30px;
  left: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  ${props =>
    props.filter &&
    css`
      filter: blur(8px);
    `}
`;

export const Cards = styled.div`
  display: block;
  width: 100%;
  max-width: 1480px;
  margin: 0px auto;
`;

export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 12px;
`;

export const Modal = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
  align-items: center;
  justify-content: center;
  background: rgba(54, 54, 54, 0.8);
`;
