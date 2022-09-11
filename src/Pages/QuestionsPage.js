import { Questions } from "../Data/Question";

import React, { useEffect, useState } from "react";
import QuestionForm from "../Components/QuestionForm";
import { useNavigate } from "react-router-dom";

const QuestionsPage = () => {
  let Navigate = useNavigate();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const increaseNumber = (correctAnswer) => {
    if (correctAnswer) {
      setScore((score) => score + 1);
    }
    if (questionNumber < Questions.length) {
      setQuestionNumber(questionNumber + 1);
    }
  };
  useEffect(() => {
    if (questionNumber === Questions.length) {
      const data = {
        score,
        total: Questions.length,
      };
      Navigate("/result", { state: data });
    }
  }, [score, questionNumber]);

  if (questionNumber === Questions.length) {
    return <h1>loading</h1>;
  }
  return (
    <div>
      <QuestionForm
        data={Questions[questionNumber]}
        number={questionNumber}
        increaseNumber={increaseNumber}
      />
    </div>
  );
};

export default QuestionsPage;
