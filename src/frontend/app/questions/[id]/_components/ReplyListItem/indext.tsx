import styles from "./styles.module.css";
import type { Reply } from "./type";

export const ReplyListItem = ({ reply }: { reply: Reply }) => {
  return (
    <div className={styles["reply-list-item"]}>
      <div className={styles["reply-list-item__top"]}>
        <div className={styles["reply-list-item__user-image"]}></div>
        <div className={styles["reply-list-item__username"]}>shtk0llq</div>
        <div className={styles["reply-list-item__created-at"]}>
          {reply.created_at}
        </div>
      </div>

      <div>{reply.content}</div>
    </div>
  );
};
