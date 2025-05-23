"use server";

import type { Comment } from "./type";
import fetchApi from "@/apis/libs/fetch";

export async function getComments({
  id,
}: {
  id: number;
}): Promise<Comment[] | undefined> {
  const comments = await fetchApi<Comment[]>({
    method: "GET",
    url: `${id}/comments`,
    cache: "no-store",
  });

  return comments;
}
