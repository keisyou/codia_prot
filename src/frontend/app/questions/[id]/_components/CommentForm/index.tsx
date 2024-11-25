"use client";

import styles from "./styles.module.css";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { Button } from "@/components/Button";
import { createComment } from "@/apis/comments/actions";
import { initialState } from "@/apis/comments/state";

export const CommentForm = ({ questionId }: { questionId: number }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(
    createComment.bind(null, questionId),
    initialState,
  );

  useEffect(() => {
    if (state.message === "成功") {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <div className={styles["comment-form"]}>
      <div className={styles["wrapper"]}>
        <form ref={formRef} action={formAction}>
          <div className={styles["comment-form__container"]}>
            <textarea
              name="content"
              className={styles["comment-form__textarea"]}
              rows={5}
              placeholder="ここに回答を入力してください"
            ></textarea>
          </div>

          <div className={styles["comment-form__button"]}>
            <Button type="submit" size="small" label="投稿" />
          </div>
        </form>
      </div>
    </div>
  );
};
