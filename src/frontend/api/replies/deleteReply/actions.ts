"use server";

import fetchApi from "@/api/libs/fetch";
import { State } from "./state";
import { revalidateTag } from "next/cache";

export async function deleteReply(
  commentId: number,
  replyId: number,
  prevState: State,
  formData: FormData,
): Promise<State> {
  try {
    const response = await fetchApi({
      method: "DELETE",
      url: `${commentId}/replies/${replyId}`,
    });

    revalidateTag("replies");

    return {
      ...prevState,
      message: "成功",
    };
  } catch (error) {
    return {
      ...prevState,
      message: "Failed to delete reply",
    };
  }
}
