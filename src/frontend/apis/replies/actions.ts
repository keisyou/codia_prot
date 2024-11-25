"use server";

import fetchApi from "@/apis/libs/fetch";
import { State } from "./state";
import { revalidateTag } from "next/cache";

export async function createReply(
  id: number,
  prevState: State,
  formData: FormData,
): Promise<State> {
  try {
    const content = formData.get("content");

    if (!content) {
      throw new Error("Missing required fields");
    }

    const response = await fetchApi({
      method: "POST",
      url: `${id}/replies`,
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
      error: "Failed to create reply",
    };
  }
}

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
