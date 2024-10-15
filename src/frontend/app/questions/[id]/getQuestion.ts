"use server";

interface Question {
  id: number;
  title: string;
  content: string;
  is_resolved: boolean;
  created_at: string;
  updated_at: string;
  categories: Category[];
}

interface Category {
  id: number;
  name: string;
}

export const getQuestion = async (
  id: string,
): Promise<Question | undefined> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/questions/${id}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
  );

  const data: Question = await response.json();

  return data;
};
