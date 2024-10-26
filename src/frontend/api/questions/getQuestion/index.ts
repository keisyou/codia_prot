"use server";

import type { Question } from "./type";
import fetchApi from "@/api/libs/fetch";

export async function getQuestion({
  id,
}: {
  id: number;
}): Promise<Question | undefined> {
  const question = await fetchApi<Question>({
    method: "GET",
    url: `questions/${id}`,
  });

  return question;
}
