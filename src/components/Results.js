import React from "react";
import { SubmitButton } from "./GlobalStyles";
import { ResultsContainer, FeedbackMessage } from "./ResultsStyles";
import Landing from "./Landing";

const Results = ({ score, totalQuestions }) => {
  const rate = Math.floor((score / totalQuestions) * 100);

  const scoreEmoji = () => {
    return (
      <FeedbackMessage>
        <p>
          {rate === 100
            ? "🎉 You nailed it 🎉"
            : rate >= 50
            ? "👏 Good job 👏"
            : "😅 Keep trying 😅"}
        </p>
      </FeedbackMessage>
    );
  };

  return (
    <ResultsContainer>
      <h1>Congratulations!</h1>
      <p>You have completed the quiz.</p>
      <p>
        You got {score} out of {totalQuestions} questions right - {rate}%
      </p>
      {scoreEmoji()}
      <SubmitButton onClick={() => window.location.reload()}>
        Start over
      </SubmitButton>
    </ResultsContainer>
  );
};

export default Results;
