"use server";

interface Category {
  id: number;
  name: string;
}

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
  );

  const data: Category[] = await response.json();

  return data;
};
