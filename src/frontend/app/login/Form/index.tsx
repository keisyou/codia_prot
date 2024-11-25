"use client";

import styles from "./styles.module.css";
import Link from "next/link";
import { useFormState } from "react-dom";
import { login } from "@/apis/users/actions";
import { initialState } from "@/apis/users/state";

export const Form = () => {
  const [state, formAction] = useFormState(login, initialState);

  return (
    <div className={styles["login-form"]}>
      <h1 className={styles["login-form__title"]}>ログイン</h1>

      <div className={styles["wrapper"]}>
        <form action={formAction}>
          <div className={styles["login-form__container"]}>
            <div className={styles["login-form__field"]}>
              <input
                className={styles["login-form__input"]}
                type="email"
                name="email"
                placeholder="メールアドレス"
              />
            </div>
            <div className={styles["login-form__field"]}>
              <input
                className={styles["login-form__input"]}
                type="password"
                name="password"
                placeholder="パスワード"
              />
            </div>

            <div>
              <button className={styles["login-form__button"]} type="submit">
                ログイン
              </button>
            </div>
          </div>
        </form>

        <p className={styles["login-form__text"]}>
          アカウントをお持ちでない方は
          <Link className={styles["login-form__link"]} href="/signup">
            こちら
          </Link>
        </p>
      </div>
    </div>
  );
};
