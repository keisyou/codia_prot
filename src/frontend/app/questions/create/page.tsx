"use client";

import { useFormState } from "react-dom";

async function createQuestion(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const response = await fetch('http://localhost:8000/api/questions', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: formData.get('title'), content: formData.get('content') }),
  });

  console.log(response);

  return { message: "" }
}

const initialState = {
  message: ""
}

function Create() {
  const [state, formAction] = useFormState(createQuestion, initialState);

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="title">タイトル</label>
        <input type="text" name="title" id="title" />
      </div>

      <div>
        <label htmlFor="content">内容</label>
        <textarea name="content" id="content"></textarea>
      </div>

      <button type="submit">作成する</button>
    </form>
  )
}

export default Create;
