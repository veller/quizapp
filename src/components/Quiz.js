import React, { useState } from "react";
import ShuffledAnswer from "./ShuffledAnswer";
import Results from "./Results";
import { Container, QuestionContainer, QuestionCounter } from "./QuizStyles";
import GlobalStyle from "./GlobalStyles";

function Quiz({ quiz, resetQuiz }) {
  const totalQuestions = quiz.length;
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  console.log(score);

  return (
    <>
      <GlobalStyle />
      <Container>
        {index === totalQuestions ? (
          <Results
            score={score}
            totalQuestions={totalQuestions}
            resetQuiz={resetQuiz}
          />
        ) : (
          <QuestionContainer>
            <QuestionCounter>
              {`Question ${index + 1} of ${totalQuestions}`}
            </QuestionCounter>
            <ShuffledAnswer
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

export default Quiz;
