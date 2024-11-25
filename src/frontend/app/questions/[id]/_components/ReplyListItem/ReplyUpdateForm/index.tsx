import styles from "./styles.module.css";
import type { Reply } from "./type";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useFormState } from "react-dom";
import { Button } from "./Button";
import { updateReply } from "@/api/replies/actions";
import { initialState } from "@/api/replies/state";

export const ReplyUpdateForm = ({
  commentId,
  reply,
  setIsEdit,
}: {
  commentId: number;
  reply: Reply;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}) => {
  const [state, formAction] = useFormState(
    updateReply.bind(null, commentId, reply.id),
    initialState,
  );

  useEffect(() => {
    if (state.message === "成功") {
      setIsEdit(false);
    }
  }, [state]);

  return (
    <div className={styles["reply-update-form"]}>
      <form action={formAction}>
        <div className={styles["reply-update-form__container"]}>
          <textarea
            className={styles["reply-update-form__textarea"]}
            name="content"
            defaultValue={reply.content}
          ></textarea>
        </div>

        <div className={styles["reply-update-form__buttons"]}>
          <Button
            type="button"
            variant="secondary"
            size="small"
            label="キャンセル"
            onClick={() => setIsEdit(false)}
          />
          <Button type="submit" size="small" label="更新" />
        </div>
      </form>
    </div>
  );
};
