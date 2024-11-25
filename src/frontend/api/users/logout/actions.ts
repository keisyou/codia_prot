"use server";

import fetchApi from "@/api/libs/fetch";
import { redirect } from "next/navigation";
import { State } from "./state";
import { cookies } from "next/headers";

export async function logout(prevState: State, formData: FormData) {
  try {
    await fetchApi({
      method: "DELETE",
      url: "logout",
    });

    cookies().delete("Bearer");
  } catch (error) {
    return {
      ...prevState,
      message: error instanceof Error ? error.message : "Failed logout",
    };
  }

  return redirect("/login");
}
