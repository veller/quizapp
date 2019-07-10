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

export const Container = styled.div`
  max-width: 700px;
  background: #eee;
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 30px;
  margin: 100px auto;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuestionCounter = styled.div`
  align-self: center;
  margin-bottom: 15px;
  color: #ccc;
`;
