"use server";

import type { Question } from "./type";
import fetchApi from "@/apis/libs/fetch";

export async function getQuestions(): Promise<Question[] | undefined> {
  const questions = await fetchApi<Question[]>({
    method: "GET",
    url: "questions",
    cache: "no-store",
  });

  return questions;
}
