"use client";

import styles from "./styles.module.css";
import Link from "next/link";
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
      <div className={styles.question_list}>
        {questions.map((question) => (
          <Link key={question.id} href={`/questions/${question.id}`}>
            <QuestionListItem question={question} />
          </Link>
        ))}
      </div>
    </>
  );
};
