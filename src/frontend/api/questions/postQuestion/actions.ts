"use server";

import fetchApi from "@/api/libs/fetch";
import { State } from "./state";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

interface QuestionPost {
  title: FormDataEntryValue;
  content: FormDataEntryValue;
  category_id: FormDataEntryValue;
}

export async function createQuestion(
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
      method: "POST",
      url: "questions",
      body: {
        title: title,
        content: content,
        category_id: category_id,
      },
    });

    // 成功時の処理
    // const newState = {
    //   ...prevState,
    //   data: response,
    //   message: "成功",
    // };

    revalidatePath("/");
  } catch (error) {
    // エラー時の処理
    return {
      ...prevState,
      error: "Failed to create question",
    };
  }

  redirect("/");
}
