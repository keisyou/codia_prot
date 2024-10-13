import { FaRegCommentAlt, FaRegHeart } from "react-icons/fa";
import "./styles.css";
import { LuEye } from "react-icons/lu";

interface Question {
  id: number;
  title: string;
  content: string;
  is_resolved: boolean;
  created_at: string;
  updated_at: string;
  categories: Category[];
}

interface Category {
  id: number;
  name: string;
}

export const QuestionListItem = ({ question }: { question: Question }) => {
  return (
    <article className="question-item">
      <div className="question-item__top">
        {/* 認証機能作成後、ユーザーアイコンに変更予定 */}
        {/* <img className="question-item__user-image" src="" alt="User avatar" /> */}
        <div className="question-item__user-image"></div>

        <div className="question-item__user-info">
          <p className="question-item__username">shtk0llq</p>
          <time className="question-item__created-at" dateTime="2024年01月01日">
            {question.created_at}
          </time>
        </div>
      </div>

      <h2 className="question-item__title">{question.title}</h2>

      <div className="question-item__bottom">
        <div className="question-item__category">
          {question.categories.map((category) => (
            <span key={category.id} className="question-item__category-label">
              {category.name}
            </span>
          ))}
        </div>

        <div className="question-item__metrics">
          <div
            className="question-item__metric question-item__metric--comments"
            aria-label="コメント数"
          >
            <FaRegCommentAlt />
            <span className="question-item__metric-count">1</span>
          </div>
          <div
            className="question-item__metric question-item__metric--likes"
            aria-label="いいね数"
          >
            <FaRegHeart />
            <span className="question-item__metric-count">1</span>
          </div>
          <div
            className="question-item__metric question-item__metric--views"
            aria-label="閲覧数"
          >
            <LuEye />
            <span className="question-item__metric-count">1</span>
          </div>
        </div>
      </div>
    </article>
  );
};
