import styles from "./styles.module.css";
import { Comment } from "./type";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useFormState } from "react-dom";
import { Button } from "./Button";
import { updateComment } from "@/api/comments/actions";
import { initialState } from "@/api/comments/state";

export const CommentUpdateForm = ({
  questionId,
  comment,
  setIsEdit,
}: {
  questionId: number;
  comment: Comment;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}) => {
  const [state, formAction] = useFormState(
    updateComment.bind(null, questionId, comment.id),
    initialState,
  );

  useEffect(() => {
    if (state.message === "成功") {
      setIsEdit(false);
    }
  }, [state]);

  return (
    <div className={styles["comment-update-form"]}>
      <form action={formAction}>
        <div className={styles["comment-update-form__container"]}>
          <textarea
            className={styles["comment-update-form__textarea"]}
            name="content"
            defaultValue={comment.content}
          ></textarea>
        </div>

        <div className={styles["comment-update-form__buttons"]}>
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
