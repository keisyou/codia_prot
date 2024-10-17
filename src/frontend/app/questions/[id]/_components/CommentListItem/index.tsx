import styles from "./styles.module.css";
import type { Comment } from "./type";

export const CommentListItem = ({ comment }: { comment: Comment }) => {
  return (
    <div className={styles["comment-list-item"]}>
      <div className={styles["comment-list-item__top"]}>
        <div className={styles["comment-list-item__user-image"]}></div>
        <p className={styles["comment-list-item__username"]}>shtk0llq</p>
        <p className={styles["comment-list-item__created-at"]}>
          {comment.created_at}
        </p>
      </div>

      <div className={styles["comment-list-item__main"]}>
        <div className={styles["comment-list-item__main__content"]}>
          {comment.content}
        </div>
      </div>

      <div className={styles["comment-list-item__bottom"]}>
        <p className={styles["comment-list-item__reply__count"]}>
          {comment.replies.length} replise
        </p>
      </div>
    </div>
  );
};
