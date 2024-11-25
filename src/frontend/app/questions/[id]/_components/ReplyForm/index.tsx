"use client";

import styles from "./styles.module.css";
import { useRef } from "react";
import { useFormState } from "react-dom";
import { Button } from "@/components/Button";
import { createReply } from "@/apis/replies/actions";
import { initialState } from "@/apis/replies/state";

export const ReplyForm = ({ commentId }: { commentId: number }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(
    createReply.bind(null, commentId),
    initialState,
  );

  return (
    <div className={styles["reply-form"]}>
      <form ref={formRef} action={formAction}>
        <div className={styles["reply-form__container"]}>
          <textarea
            name="content"
            className={styles["reply-form__textarea"]}
            rows={3}
            placeholder="返信内容を入力してください"
          ></textarea>
        </div>

        <div className={styles["reply-form__button"]}>
          <Button type="submit" size="small" label="投稿" />
        </div>
      </form>
    </div>
  );
};
