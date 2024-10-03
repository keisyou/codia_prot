"use client";

import { useFormState } from "react-dom";
import { createQuestion } from "./actions";
import { initialState } from "./state";

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
  );
}

export default Create;
