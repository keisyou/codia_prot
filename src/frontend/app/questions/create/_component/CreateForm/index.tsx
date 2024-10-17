"use client";

import styles from "./styles.module.css";
import { useFormState } from "react-dom";
import { useQuery } from "@tanstack/react-query";
import { createQuestion } from "../../actions";
import { initialState } from "../../state";
import { getCategories } from "../../getCategories";
import { Button } from "@/components/Button";

export const CreateForm = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const [state, formAction] = useFormState(createQuestion, initialState);

  return (
    <form action={formAction}>
      <section className={`${styles["create-form__section"]} ${styles["create-form__section-margin"]} ${styles["create-form__section--title"]}`}>
        <div className={styles["create-form__field"]}>
          <div className={styles["create-form__field-header"]}>
            <h3 className={styles["create-form__field-title"]}>
              タイトル
              <span className={styles["create-form__field-required"]}>*</span>
            </h3>
            <p className={styles["create-form__field-description"]}>
              わからないことや解決したいことを10文字以上で書いてください
            </p>
          </div>

          <div>
            <input
              type="text"
              name="title"
              id="title"
              className={styles["create-form__input"]}
              placeholder="質問のタイトルを入力してください"
            />
          </div>
        </div>
      </section>

      <section className={`${styles["create-form__section"]} ${styles["create-form__section-margin"]} ${styles["create-form__section--content"]}`}>
        <div className={styles["create-form__field"]}>
          <div className={styles["create-form__field-header"]}>
            <h3 className={styles["create-form__field-title"]}>
              内容
              <span className={styles["create-form__field-required"]}>*</span>
            </h3>
            <p className={styles["create-form__field-description"]}>
              わからないことや発生している問題の内容を教えてください
            </p>
          </div>

          <div>
            <textarea
              name="content"
              id="content"
              className={styles["create-form__input"]}
              rows={10}
              placeholder="問題の背景、試したこと、期待する結果などを入力してください"
            ></textarea>
          </div>
        </div>
      </section>

      <section className={`${styles["create-form__section"]} ${styles["create-form__section-margin"]} ${styles["create-form__section--content"]}`}>
        <div className={styles["create-form__field"]}>
          <div className={styles["create-form__field-header"]}>
            <h3 className={styles["create-form__field-title"]}>
              カテゴリー
              <span className={styles["create-form__field-required"]}>*</span>
            </h3>
            <p className={styles["create-form__field-description"]}>
              質問のカテゴリーを教えてください
            </p>
          </div>

          <div>
            <select
              name="category_id"
              id="category_id"
              className={`${styles["create-form__input"]} ${styles["create-form__select"]}`}
            >
              <option value="">カテゴリーを選択</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <div className={styles["create-form__buttons"]}>
        <Button type="submit" label="質問を作成する" />
      </div>
    </form>
  );
};
