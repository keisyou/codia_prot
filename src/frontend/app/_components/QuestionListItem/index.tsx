import styles from "./styles.module.css";
import type { Question } from "./type";
import { FaRegCommentAlt, FaRegHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";

export const QuestionListItem = ({ question }: { question: Question }) => {
  return (
    <article className={styles["question-item"]}>
      <div className={styles["question-item__top"]}>
        {/* 認証機能作成後、ユーザーアイコンに変更予定 */}
        {/* <img className={styles["question-item__user-image"]} src="" alt="User avatar" /> */}
        <div className={styles["question-item__user-image"]}></div>

        <div className={styles["question-item__user-info"]}>
          <p className={styles["question-item__username"]}>shtk0llq</p>
          <time className={styles["question-item__created-at"]} dateTime="2024年01月01日">
            {question.created_at}
          </time>
        </div>
      </div>

      <h2 className={styles["question-item__title"]}>{question.title}</h2>

      <div className={styles["question-item__bottom"]}>
        <div className={styles["question-item__category"]}>
          {question.categories.map((category) => (
            <span key={category.id} className={styles["question-item__category-label"]}>
              {category.name}
            </span>
          ))}
        </div>

        <div className={styles["question-item__metrics"]}>
          <div
            className={`${styles["question-item__metric"]} ${styles["question-item__metric--comments"]}`}
            aria-label="コメント数"
          >
            <FaRegCommentAlt />
            <span className={styles["question-item__metric-count"]}>1</span>
          </div>
          <div
            className={`${styles["question-item__metric"]} ${styles["question-item__metric--likes"]}`}
            aria-label="いいね数"
          >
            <FaRegHeart />
            <span className={styles["question-item__metric-count"]}>1</span>
          </div>
          <div
            className={`${styles["question-item__metric"]} ${styles["question-item__metric--views"]}`}
            aria-label="閲覧数"
          >
            <LuEye />
            <span className={styles["question-item__metric-count"]}>1</span>
          </div>
        </div>
      </div>
    </article>
  );
};
