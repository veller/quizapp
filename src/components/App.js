import React, { useState } from "react";
import data from "../data";
import Questions from "./Questions";
import GlobalStyle, {
  Container,
  QuestionContainer,
  QuestionCounter
} from "./AppStyles";

/*
to dos:
[] style: visual feedback on the selected answer
[] style: disable buttons after selecting answer
   clean the disabled state when in the next question
[] fetch questions from the API: https://opentdb.com/api_config.php
*/

function App() {
  const quiz = data.results;
  const totalQuestions = quiz.length;
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Container>
        {index === totalQuestions ? (
          <div>The quiz has ended. your total score is {score}</div>
        ) : (
          <QuestionContainer>
            <QuestionCounter>
              {`Question ${index + 1} of ${totalQuestions}`}
            </QuestionCounter>
            <Questions
              question={quiz[index]}
              setIndex={setIndex}
              setScore={setScore}
            />
          </QuestionContainer>
        )}
      </Container>
    </>
  );
}

export default App;
