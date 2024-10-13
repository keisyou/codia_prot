"use client";

import "./styles.css";
import { useQuery } from "@tanstack/react-query";
import { getQuestions } from "./getQuestions";
import { QuestionListItem } from "../QuestionListItem";

export const QuestionList = () => {
  const { data: questions = [] } = useQuery({
    queryKey: ["questions"],
    queryFn: getQuestions,
  });

  return (
    <>
      <div className="question-list">
        {questions.map((question) => (
          <QuestionListItem key={question.id} question={question} />
        ))}
      </div>
    </>
  );
};
