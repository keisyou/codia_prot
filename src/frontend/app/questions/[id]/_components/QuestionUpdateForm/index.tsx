import styles from "./styles.module.css";
import type { Question } from "./type";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useFormState } from "react-dom";
import { Button } from "./Button";
import { updateQuestion } from "@/apis/questions/actions";
import { initialState } from "@/apis/questions/state";

export const QuestionUpdateForm = ({
  question,
  setIsEdit,
}: {
  question: Question;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}) => {
  const [state, formAction] = useFormState(
    updateQuestion.bind(null, question.id),
    initialState,
  );

  useEffect(() => {
    if (state.message === "成功") {
      setIsEdit(false);
    }
  }, [state]);

  return (
    <div className={styles["question-update-form"]}>
      <form action={formAction}>
        <input name="title" defaultValue={question.title} hidden />
        <input
          name="category_id"
          defaultValue={question.categories.map((category) =>
            String(category.id),
          )}
          hidden
        />
        <div className={styles["question-update-form__container"]}>
          <textarea
            className={styles["question-update-form__textarea"]}
            name="content"
            defaultValue={question.content}
          ></textarea>
        </div>

        <div className={styles["question-update-form__buttons"]}>
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
