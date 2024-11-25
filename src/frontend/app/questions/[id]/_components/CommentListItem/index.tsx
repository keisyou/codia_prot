import styles from "./styles.module.css";
import type { Comment } from "./type";
import { useState } from "react";
import { ReplyList } from "../ReplyList";
import { ReplyForm } from "../ReplyForm";
import { CommentUpdateForm } from "./CommentUpdateForm";
import { Modal } from "./Modal";

export const CommentListItem = ({
  questionId,
  comment,
}: {
  questionId: number;
  comment: Comment;
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles["comment-list-item__container"]}>
      <div className={styles["comment-list-item"]}>
        {isEdit ? (
          <CommentUpdateForm
            questionId={questionId}
            comment={comment}
            setIsEdit={setIsEdit}
          />
        ) : (
          <>
            <div className={styles["comment-list-item__top"]}>
              <div className={styles["comment-list-item__top__info"]}>
                <div className={styles["comment-list-item__user-image"]}></div>
                <p className={styles["comment-list-item__username"]}>
                  shtk0llq
                </p>
                <p className={styles["comment-list-item__created-at"]}>
                  {comment.created_at}
                </p>
              </div>
              <div className={styles["comment-list-item__actions"]}>
                <button
                  className={styles["comment-list-item--edit-button"]}
                  onClick={() => setIsEdit(true)}
                >
                  Edit
                </button>
                <button
                  className={styles["comment-list-item--delete-button"]}
                  onClick={() => setIsOpen(true)}
                >
                  Delete
                </button>

                <Modal
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  questionId={questionId}
                  commentId={comment.id}
                />
              </div>
            </div>
            <div className={styles["comment-list-item__main"]}>
              <div className={styles["comment-list-item__main__content"]}>
                {comment.content}
              </div>
            </div>
          </>
        )}

        <div className={styles["comment-list-item__bottom"]}>
          <p className={styles["comment-list-item__reply__count"]}>
            {comment.replies.length} replise
          </p>
        </div>
      </div>

      <div className={styles["comment-list-item__child"]}>
        <ReplyList replies={comment.replies} commentId={comment.id} />
      </div>

      <ReplyForm commentId={comment.id} />
    </div>
  );
};
