"use server";

import type { Question } from "./type";
import fetchApi from "@/api/libs/fetch";

export async function getQuestions(): Promise<Question[] | undefined> {
  const questions = await fetchApi<Question[]>({
    method: "GET",
    url: "questions",
  });

  return questions;
}
