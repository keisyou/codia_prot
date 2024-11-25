import styles from "./styles.module.css";
import type { Reply } from "./type";
import { useState } from "react";
import { ReplyUpdateForm } from "./ReplyUpdateForm";
import { Modal } from "./Modal";

export const ReplyListItem = ({
  reply,
  commentId,
}: {
  reply: Reply;
  commentId: number;
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles["reply-list-item"]}>
      {isEdit ? (
        <ReplyUpdateForm
          commentId={commentId}
          reply={reply}
          setIsEdit={setIsEdit}
        />
      ) : (
        <>
          <div className={styles["reply-list-item__top"]}>
            <div className={styles["reply-list-item__top__info"]}>
              <div className={styles["reply-list-item__user-image"]}></div>
              <div className={styles["reply-list-item__username"]}>
                shtk0llq
              </div>
              <div className={styles["reply-list-item__created-at"]}>
                {reply.created_at}
              </div>
            </div>

            <div className={styles["reply-list-item__actions"]}>
              <button
                className={styles["reply-list-item--edit-button"]}
                onClick={() => setIsEdit(true)}
              >
                Edit
              </button>
              <button
                className={styles["reply-list-item--delete-button"]}
                onClick={() => setIsOpen(true)}
              >
                Delete
              </button>

              <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                commentId={commentId}
                replyId={reply.id}
              />
            </div>
          </div>
          <div>{reply.content}</div>
        </>
      )}
    </div>
  );
};
