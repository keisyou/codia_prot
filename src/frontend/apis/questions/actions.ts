"use server";

import { revalidatePath } from "next/cache";
import { State } from "./state";
import { redirect } from "next/navigation";
import fetchApi from "../libs/fetch";

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

export async function deleteQuestion(
  id: number,
  prevState: State,
  formData: FormData,
): Promise<State> {
  try {
    await fetchApi({
      method: "DELETE",
      url: `questions/${id}`,
    });
  } catch (error) {
    return {
      ...prevState,
      message: "Failed to Delete question",
    };
  }

  return redirect("/");
}
