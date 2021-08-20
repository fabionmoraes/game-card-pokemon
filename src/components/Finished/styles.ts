import styled from 'styled-components';

export const Animation = styled.div`
  width: 260px;
  margin-top: -120px;
  margin-bottom: -50px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .title {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }

  .btn {
    text-align: center;
    padding-top: 6px;

    button + button {
      margin-left: 6px;
    }
  }
`;
