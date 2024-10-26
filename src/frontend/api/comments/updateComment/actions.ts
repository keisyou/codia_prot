"use server";

import fetchApi from "@/api/libs/fetch";
import { State } from "./state";
import { revalidateTag } from "next/cache";

export async function updateComment(
  questionId: number,
  commentId: number,
  prevState: State,
  formData: FormData,
): Promise<State> {
  const content = formData.get("content");

  console.log(content);

  if (!content) {
    throw new Error("Missing required fields");
  }

  try {
    const response = await fetchApi({
      method: "PATCH",
      url: `${questionId}/comments/${commentId}`,
      body: {
        content: content,
      },
    });

    revalidateTag("comments");

    return {
      ...prevState,
      message: "成功",
    };
  } catch (error) {
    return {
      ...prevState,
      message: "Failed to update comment",
    };
  }
}
