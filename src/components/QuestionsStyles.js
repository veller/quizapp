import styled from "styled-components";

export const QuestionTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const AnswersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;
`;

export const Button = styled.button`
  background: #ff7e67;
  color: #eee;
  border: 0;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`;

export const Answer = styled.button`
  background: ${props => {
    if (!props.isSelectedAnswer) return "#ccc";
    return props.isSelectedAnswer && props.isCorrect ? "green" : "#ff7e67";
  }};
  color: ${props => (props.isSelectedAnswer ? "#fff" : "#555")};
  border: 0;
  border-radius: 20px;
  padding: 10px 50px;
  cursor: pointer;
  margin: 0 0 15px 15px;

  &[disabled] {
    cursor: not-allowed;
    opacity: ${props => (props.isSelectedAnswer ? "null" : "0.2")};
  }
`;
