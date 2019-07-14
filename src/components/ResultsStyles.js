import styled from "styled-components";

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4a5568;

  h1 {
    margin-bottom: 30px;
  }
`;

export const FeedbackMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  p {
    text-transform: uppercase;
    font-size: 30px;
    font-weight: bold;
  }

  span {
    margin: 10px;
  }
`;
