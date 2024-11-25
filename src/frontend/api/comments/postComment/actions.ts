"use server";

import fetchApi from "@/api/libs/fetch";
import { State } from "./state";
import { revalidateTag } from "next/cache";

export async function createComment(
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
      url: `${id}/comments`,
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
      error: "Failed to create question",
    };
  }
}
