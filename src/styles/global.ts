import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

  * {
    margin: 0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.2);
  }
  a {
    text-decoration: none;
    color: #ccc;
  }
  body, html {
    position: relative;
    width: 100%;
    height: 100%;
  }
  body {
    position: relative;
    background: #1a1a1b url('/static/bg.png') repeat;
    color: #eee;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }
  h1, h2, h3 h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
  }
  table {
    border-collapse: collapse;
    flex: 1;
  }
  select option {
    font-size: 16px;
  }
  table {
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: grey;
    font-size: 12px;
    width: 100%;
    .table-icon {
      display: flex;
      align-items: center;
      svg {
        margin-right: 4px;
      }
    }
  }
  thead {
    font-weight: bold;
    color: #BFB6BD;
    font-size: 14px;
  }
  thead tr td {
    padding: 10px;
  }
  tbody tr td {
    padding: 10px;
    border-top: 1px solid #1a1a1b;
  }
  .table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }
  .table-hover tbody tr:hover {
    background-color: rgba(0, 0, 0, 0.075);
  }
`;
