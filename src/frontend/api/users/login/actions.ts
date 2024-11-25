"use server";

import fetchApi from "@/api/libs/fetch";
import { State } from "./state";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(
  prevState: State,
  formData: FormData,
): Promise<State> {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      throw new Error("Missing required fields");
    }

    // anyは修正必須
    const response: any = await fetchApi({
      method: "POST",
      url: "login",
      body: {
        email: email,
        password: password,
      },
    });

    cookies().set({
      name: "Bearer",
      value: response.token,
      httpOnly: true,
      secure: true,
      maxAge: 7 * 24 * 60 * 60,
      path: "/",
    });
  } catch (error) {
    return {
      ...prevState,
      message: error instanceof Error ? error.message : "Failed to login",
    };
  }

  return redirect("/");
}
