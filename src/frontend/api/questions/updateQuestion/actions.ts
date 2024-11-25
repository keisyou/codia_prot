"use server";

import { revalidatePath } from "next/cache";
import fetchApi from "@/api/libs/fetch";
import { State } from "./state";

interface QuestionPost {
  title: FormDataEntryValue;
  content: FormDataEntryValue;
  category_id: FormDataEntryValue;
}

export async function updateQuestion(
  id: number,
  prevState: State,
  formData: FormData,
): Promise<State> {
  try {
    const title = formData.get("title");
    const content = formData.get("content");
    const category_id = formData.get("category_id");

    if (!title || !content || !category_id) {
      throw new Error("Missing required fields");
    }

    const response = await fetchApi<QuestionPost>({
      method: "PATCH",
      url: `questions/${id}`,
      body: {
        title: title,
        content: content,
        category_id: category_id,
      },
    });

    revalidatePath(`questions/${id}`);
    return {
      ...prevState,
      message: "成功",
    };
  } catch (error) {
    return {
      ...prevState,
      error: "Failed to update quesiton",
    };
  }
}
