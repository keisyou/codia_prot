"use client";

import styles from "./styles.module.css";
import Link from "next/link";
import { useFormState } from "react-dom";
import { register } from "@/api/users/register/actions";
import { initialState } from "@/api/users/register/state";

export const Form = () => {
  const [state, formAction] = useFormState(register, initialState);

  return (
    <div className={styles["register-form"]}>
      <h1 className={styles["register-form__title"]}>新規登録</h1>

      <div className={styles["wrapper"]}>
        <form action={formAction}>
          <div className={styles["register-form__container"]}>
            <div className={styles["register-form__field"]}>
              <input
                className={styles["register-form__input"]}
                type="text"
                name="name"
                placeholder="ユーザー名"
              />
            </div>
            <div className={styles["register-form__field"]}>
              <input
                className={styles["register-form__input"]}
                type="email"
                name="email"
                placeholder="メールアドレス"
              />
            </div>
            <div className={styles["register-form__field"]}>
              <input
                className={styles["register-form__input"]}
                type="password"
                name="password"
                placeholder="パスワード"
              />
            </div>
            <div className={styles["register-form__field"]}>
              <input
                className={styles["register-form__input"]}
                type="password"
                name="confirmPassword"
                placeholder="確認用パスワード"
              />
            </div>

            <div>
              <button className={styles["register-form__button"]} type="submit">
                登録する
              </button>
            </div>
          </div>
        </form>

        <p className={styles["regsiter-form__text"]}>
          アカウントをお持ちの方は
          <Link className={styles["register-form__link"]} href="/login">
            こちら
          </Link>
        </p>
      </div>
    </div>
  );
};
