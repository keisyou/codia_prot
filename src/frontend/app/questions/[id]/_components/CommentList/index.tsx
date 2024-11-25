"use client";

import styles from "./styles.module.css";
import { useQuery } from "@tanstack/react-query";
import { getComments } from "@/apis/comments/getComments";
import { CommentListItem } from "../CommentListItem";

export const CommentList = ({ questionId }: { questionId: number }) => {
  const { data: comments = [] } = useQuery({
    queryKey: ["comments", questionId],
    queryFn: () => getComments({ id: questionId }),
  });

  return (
    <div className={styles["comment-list"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["comment-list__header"]}>
          <h3 className={styles["comment-list__count"]}>
            {comments.length} comments
          </h3>

          <ul className={styles["comment-list__sort"]}>
            <li
              className={`${styles["comment-list__sort__latest"]} ${styles["comment-list__sort__selected"]}`}
            >
              latest
            </li>
            <li className={styles["comment-list__sort__oldest"]}>oldest</li>
          </ul>
        </div>

        <div className={styles["comment-list-items"]}>
          {comments.map((comment) => (
            <CommentListItem
              key={comment.id}
              questionId={questionId}
              comment={comment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
