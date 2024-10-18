import { FetchApiProps } from "./type";

export default async function fetchApi<T>({
  method,
  url,
  headerOptions,
  nextOptions,
  body,
  ...options
}: FetchApiProps<T>): Promise<T | undefined> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/${url}`,
      {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...headerOptions,
        },
        next: nextOptions,
        body: body && JSON.stringify(body),
        ...options,
      },
    );

    const data = await response.json();

    return data;
  } catch (error: unknown) {
    if (error === "400") {
      return;
    }

    if (error === "401") {
      return;
    }

    if (error === "403") {
      return;
    }

    if (error === "404") {
      return;
    }

    if (error === "500") {
      return;
    }

    return;
  }
}
