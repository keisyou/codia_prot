"use server";

import fetchApi from "@/api/libs/fetch";
import { State } from "./state";
import { redirect } from "next/navigation";

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
