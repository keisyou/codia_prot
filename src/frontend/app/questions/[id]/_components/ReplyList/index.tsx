import styles from "./styles.module.css";
import type { Reply } from "./type";
import { ReplyListItem } from "../ReplyListItem/indext";

export const ReplyList = ({ replies }: { replies: Reply[] }) => {
  return (
    <div className={styles["reply-list"]}>
      {replies.map((reply) => (
        <ReplyListItem key={reply.id} reply={reply} />
      ))}
    </div>
  );
};
