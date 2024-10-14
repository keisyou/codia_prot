"use server";

import { State } from "./state";

export async function createQuestion(
  prevState: State,
  formData: FormData,
): Promise<State> {
  try {
    const res = await fetch("http://codia-app-1/api/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.get("title"),
        content: formData.get("content"),
        category_id: formData.get("category_id"),
      }),
    });

    const data = await res.json();

    return { message: "" };
  } catch (e) {
    return { message: "" };
  }
}
