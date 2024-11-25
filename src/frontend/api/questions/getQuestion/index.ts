"use server";

import fetchApi from "@/api/libs/fetch";
import type { Question } from "@/types/question";

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
