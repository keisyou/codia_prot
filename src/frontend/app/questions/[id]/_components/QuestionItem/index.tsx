"use client";

import "./styles.css";
import { useQuery } from "@tanstack/react-query";
import { getQuestion } from "../../getQuestion";
import { FaRegCommentAlt, FaRegHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";

export const QuestionItem = ({ questionId }: { questionId: string }) => {
  const { data: question } = useQuery({
    queryKey: ["question", questionId],
    queryFn: () => getQuestion(questionId),
  });

  return (
    <div className="question-item">
      <div className="question-item__header">
        <div className="wrapper">
          <div className="question-item__header__inner">
            <h2 className="question-item__title">{question?.title}</h2>
            <ul className="question-item__category">
              {question?.categories.map((category) => (
                <li key={category.id} className="question-item__category-item">
                  {category.name}
                </li>
              ))}
            </ul>

            <div className="question-item__metrics">
              <div className="question-item__user-info">
                <div className="question-item__user-image"></div>

                <p className="question-item__username">shtk0llq</p>
              </div>

              <div>
                <div className="question-item__metrics-group">
                  <div
                    className="question-item__metric question-item__metric--comments"
                    aria-label="コメント数"
                  >
                    <FaRegCommentAlt size={16} />
                    <span className="question-item__metric-count">1</span>
                    <span>コメント</span>
                  </div>
                  <div
                    className="question-item__metric question-item__metric--likes"
                    aria-label="いいね数"
                  >
                    <FaRegHeart size={16} />
                    <span className="question-item__metric-count">1</span>
                    <span>いいね</span>
                  </div>
                  <div
                    className="question-item__metric question-item__metric--views"
                    aria-label="閲覧数"
                  >
                    <LuEye size={16} />
                    <span className="question-item__metric-count">1</span>
                    <span>閲覧</span>
                  </div>
                </div>

                <p className="question-item__created-at">
                  <IoMdTime size={20} />
                  {`2024年01月01日 00:00`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="question-item__main">
        <div className="wrapper">
          <div className="question-item__content">
            <h3 className="question-item__content-title">内容</h3>
            {question?.content}
          </div>
        </div>
      </div>
    </div>
  );
};
