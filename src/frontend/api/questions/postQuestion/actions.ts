"use server";

import fetchApi from "@/api/libs/fetch";
import { State } from "./state";

interface QuestionPost {
  title: FormDataEntryValue;
  content: FormDataEntryValue;
  category_id: FormDataEntryValue;
}

export async function createQuestion(
  prevState: State,
  formData: FormData,
): Promise<State> {
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

  // response の処理
  if (response) {
    // 成功時の処理
    return {
      ...prevState,
      // response データを使用して state を更新
    };
  } else {
    // エラー時の処理
    return {
      ...prevState,
      error: "Failed to create question",
    };
  }
}
