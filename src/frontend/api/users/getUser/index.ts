"use server";

import fetchApi from "@/api/libs/fetch";
import type { User } from "./type";

export async function getUser(): Promise<User | undefined> {
  const user = await fetchApi<User>({
    method: "GET",
    url: "user",
  });

  return user;
}
