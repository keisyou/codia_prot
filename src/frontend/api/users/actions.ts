"use server";

import fetchApi from "@/api/libs/fetch";
import { State } from "./state";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function register(
  prevState: State,
  formData: FormData,
): Promise<State> {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (!name || !email || !password || !confirmPassword) {
      throw new Error("Missing required fields");
    }

    if (password !== confirmPassword) {
      throw new Error("password and confirmPassword different");
    }

    const response: any = await fetchApi({
      method: "POST",
      url: "register",
      body: {
        name: name,
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
      message: error instanceof Error ? error.message : "Failed to register",
    };
  }

  return redirect("/");
}

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
