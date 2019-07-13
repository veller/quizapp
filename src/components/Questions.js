import React, { useState } from "react";
import {
  Button,
  QuestionTitle,
  AnswersContainer,
  Answer
} from "./QuestionsStyles";

function Questions({
  question,
  setIndex,
  setScore,
  correctAnswer,
  shuffledAnswers
}) {
  const [isCorrect, setCorrect] = useState(null);
  const [isSelectedAnswer, setSelectedAnswer] = useState(null);
  const [isDisabled, setDisabled] = useState(false);

  const handleFeedback = answer => {
    setSelectedAnswer(answer);
    setCorrect(answer === correctAnswer);
    setDisabled(true);
  };

  const handleNextQuestion = () => {
    setIndex(prevState => prevState + 1);
    isCorrect && setScore(prevState => prevState + 1);
    setSelectedAnswer(null);
    setDisabled(false);
  };

  console.log(correctAnswer);

  return (
    <>
      <QuestionTitle>{question.question}</QuestionTitle>
      <AnswersContainer>
        {shuffledAnswers.map(answer => (
          <Answer
            isSelectedAnswer={answer === isSelectedAnswer}
            key={answer}
            onClick={() => handleFeedback(answer)}
            disabled={isDisabled}
          >
            {answer}
          </Answer>
        ))}
      </AnswersContainer>
      <Button onClick={handleNextQuestion}>Next question</Button>
    </>
  );
}

export default Questions;
