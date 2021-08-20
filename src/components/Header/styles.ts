import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 55px;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  background: #3f3f3f;
  align-items: center;
  padding-left: 22px;
  padding-right: 22px;

  .logo {
    width: 160px;

    img {
      width: 100%;
    }
  }

  .content {
    display: flex;
    align-items: center;

    div {
      display: flex;
    }

    div + div {
      margin-left: 12px;
    }

    .title {
      display: flex;
      align-items: center;
      font-size: 22px;
      font-weight: bold;
      font-style: italic;
      margin-right: 4px;
      color: #e8af1f;
    }

    .count {
      font-size: 22px;
      font-weight: bold;
    }
  }
`;
