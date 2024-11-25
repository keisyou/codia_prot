"use server";

import fetchApi from "@/api/libs/fetch";
import { State } from "./state";
import { revalidateTag } from "next/cache";

export async function deleteComment(
  questionId: number,
  commentId: number,
  prevState: State,
  formData: FormData,
): Promise<State> {
  try {
    const response = await fetchApi({
      method: "DELETE",
      url: `${questionId}/comments/${commentId}`,
    });

    revalidateTag("comments");

    return {
      ...prevState,
      message: "成功",
    };
  } catch (error) {
    return {
      ...prevState,
      message: "Failed to delete comment",
    };
  }
}
