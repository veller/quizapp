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
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
`;

export const Answer = styled.div.attrs(props => ({
  disabled: props.isDisabled
}))`
  background: ${props => (props.selectedAnswer ? "#000" : "#ccc")};
  border-radius: 20px;
  padding: 10px 50px;
  cursor: pointer;
  margin: 0 0 15px 15px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
