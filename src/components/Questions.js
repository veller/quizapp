import React, { useState } from "react";
import { shuffle } from "../utils";
import {
  Button,
  QuestionTitle,
  AnswersContainer,
  Answer
} from "./QuestionsStyles";

function Questions({ question, setIndex, setScore }) {
  let isCorrect = null;
  const answers = [question.correct_answer, ...question.incorrect_answers];
  const correctAnswer = answers[0];
  const shuffledAnswers = shuffle(answers);

  const handleFeedback = (answer, i) => {
    isCorrect = answer === correctAnswer;
  };

  const handleNextQuestion = () => {
    setIndex(prevState => prevState + 1);
    isCorrect && setScore(prevState => prevState + 1);
  };

  return (
    <>
      <QuestionTitle>{question.question}</QuestionTitle>
      <AnswersContainer>
        {shuffledAnswers.map((answer, i) => (
          <Answer key={answer} onClick={() => handleFeedback(answer, i)}>
            {answer}
          </Answer>
        ))}
      </AnswersContainer>
      <Button onClick={handleNextQuestion}>Next question</Button>
    </>
  );
}

export default Questions;
