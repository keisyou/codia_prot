"use server";

import fetchApi from "@/api/libs/fetch";
import { State } from "./state";
import { revalidateTag } from "next/cache";

export async function updateReply(
  commentId: number,
  replyId: number,
  prevState: State,
  formData: FormData,
): Promise<State> {
  const content = formData.get("content");

  if (!content) {
    throw new Error("Missing required fields");
  }

  try {
    const response = await fetchApi({
      method: "PATCH",
      url: `${commentId}/replies/${replyId}`,
      body: {
        content: content,
      },
    });

    revalidateTag("replies");

    return {
      ...prevState,
      message: "成功",
    };
  } catch (error) {
    return {
      ...prevState,
      message: "Failed to update reply",
    };
  }
}
