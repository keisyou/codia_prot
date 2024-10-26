"use client";

import styles from "./styles.module.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getQuestion } from "@/api/questions/getQuestion";
import { FaRegCommentAlt, FaRegHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { QuestionUpdateForm } from "../QuestionUpdateForm";
import { Modal } from "./Modal";

export const QuestionItem = ({ questionId }: { questionId: string }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { data: question } = useQuery({
    queryKey: ["question", questionId],
    queryFn: () => getQuestion({ id: questionId }),
  });

  return (
    <div className={styles["question-item"]}>
      <div className={styles["question-item__header"]}>
        <div className={styles["wrapper"]}>
          <div className={styles["question-item__header__inner"]}>
            <div className={styles["question-item__header__inner__top"]}>
              <h2 className={styles["question-item__title"]}>
                {question?.title}
              </h2>

              <button
                className={styles["question-item__actions__delete"]}
                onClick={() => setIsOpen(true)}
              >
                Delete
              </button>

              <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                questionId={question!.id}
              />
            </div>
            <ul className={styles["question-item__category"]}>
              {question?.categories.map((category) => (
                <li
                  key={category.id}
                  className={styles["question-item__category-item"]}
                >
                  {category.name}
                </li>
              ))}
            </ul>

            <div className={styles["question-item__metrics"]}>
              <div className={styles["question-item__user-info"]}>
                <div className={styles["question-item__user-image"]}></div>

                <p className={styles["question-item__username"]}>shtk0llq</p>
              </div>

              <div>
                <div className={styles["question-item__metrics-group"]}>
                  <div
                    className={`${styles["question-item__metric"]} ${styles["question-item__metric--comments"]}`}
                    aria-label="コメント数"
                  >
                    <FaRegCommentAlt size={16} />
                    <span className={styles["question-item__metric-count"]}>
                      1
                    </span>
                    <span>コメント</span>
                  </div>
                  <div
                    className={`${styles["question-item__metric"]} ${styles["question-item__metric--likes"]}`}
                    aria-label="いいね数"
                  >
                    <FaRegHeart size={16} />
                    <span className={styles["question-item__metric-count"]}>
                      1
                    </span>
                    <span>いいね</span>
                  </div>
                  <div
                    className={`${styles["question-item__metric"]} ${styles["question-item__metric--views"]}`}
                    aria-label="閲覧数"
                  >
                    <LuEye size={16} />
                    <span className={styles["question-item__metric-count"]}>
                      1
                    </span>
                    <span>閲覧</span>
                  </div>
                </div>

                <p className={styles["question-item__created-at"]}>
                  <IoMdTime size={20} />
                  {`2024年01月01日 00:00`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["question-item__main"]}>
        <div className={styles["wrapper"]}>
          <div className={styles["question-item__container"]}>
            {isEdit ? (
              <QuestionUpdateForm question={question!} setIsEdit={setIsEdit} />
            ) : (
              <div>
                <div className={styles["quesiton-item__container__top"]}>
                  <h3 className={styles["question-item__container--title"]}>
                    内容
                  </h3>
                  <button
                    className={styles["question-item__container--edit-button"]}
                    onClick={() => setIsEdit(true)}
                  >
                    Edit
                  </button>
                </div>

                <div className={styles["question-item__container--content"]}>
                  {question?.content}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
