import styles from "./styles.module.css";
import { Dispatch, SetStateAction } from "react";
import { useFormState } from "react-dom";
import { IoClose } from "react-icons/io5";
import { deleteReply } from "@/api/replies/deleteReply/actions";
import { initialState } from "@/api/questions/deleteQuestion/state";

export const Modal = ({
  isOpen,
  setIsOpen,
  commentId,
  replyId,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  commentId: number;
  replyId: number;
}) => {
  const [state, formAction] = useFormState(
    deleteReply.bind(null, commentId, replyId),
    initialState,
  );

  return (
    <div className={styles.overlay} data-open={isOpen}>
      <dialog className={`${styles["modal"]}`} open={isOpen}>
        <div className={styles["modal__header"]}>
          <h1 className={styles["modal__title"]}>Delete Question</h1>
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
            この質問を削除してもよろしいですか？
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
                Delete Question
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};
