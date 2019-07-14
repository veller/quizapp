import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        background: #07689f;
        -webkit-font-smoothing: antialiased;
    }

    body, button {
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }
`;

export const SubmitButton = styled.button`
  background: #ff7e67;
  color: #eee;
  border: 0;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 30px;
`;
