import styles from "./styles.module.css";
import { Dispatch, SetStateAction } from "react";
import { useFormState } from "react-dom";
import { IoClose } from "react-icons/io5";
import { deleteComment } from "@/apis/comments/actions";
import { initialState } from "@/apis/comments/state";

export const Modal = ({
  isOpen,
  setIsOpen,
  questionId,
  commentId,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  questionId: number;
  commentId: number;
}) => {
  const [state, formAction] = useFormState(
    deleteComment.bind(null, questionId, commentId),
    initialState,
  );

  return (
    <div className={styles.overlay} data-open={isOpen}>
      <dialog className={`${styles["modal"]}`} open={isOpen}>
        <div className={styles["modal__header"]}>
          <h1 className={styles["modal__title"]}>Delete Comment</h1>
          <button
            className={styles["modal__close-action"]}
            type="button"
            onClick={() => setIsOpen(false)}
          >
            <IoClose size={24} />
          </button>
        </div>
        <div className={styles["modal__body"]}>
          <p className={styles["modal__text"]}>
            このコメントを削除してもよろしいですか？
          </p>
          <form action={formAction}>
            <div className={styles["modal__buttons"]}>
              <button
                className={styles["modal__close-button"]}
                type="button"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button className={styles["modal__delete-button"]} type="submit">
                Delete Comment
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};
