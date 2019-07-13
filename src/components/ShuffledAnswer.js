import React from "react";
import { shuffle } from "../utils";
import Questions from "./Questions";

function ShuffledAnswer(props) {
  const answers = [
    props.question.correct_answer,
    ...props.question.incorrect_answers
  ];
  const correctAnswer = answers[0];
  const shuffledAnswers = shuffle(answers);

  return (
    <Questions
      {...props}
      correctAnswer={correctAnswer}
      shuffledAnswers={shuffledAnswers}
      answers={answers}
    />
  );
}

export default ShuffledAnswer;
