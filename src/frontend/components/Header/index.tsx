"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../Button";
import { useFormState } from "react-dom";
import { getUser } from "@/apis/users/getUser";
import { logout } from "@/apis/users/actions";
import { initialState } from "@/apis/users/state";

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = () => {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
  const [state, formAction] = useFormState(logout, initialState);

  return (
    <header>
      <div className={styles.header}>
        <Link href="/">
          <div className={styles.logo_box}>
            <Image src="/icon.svg" alt="icon" priority width={48} height={48} />
            <h1 className="title">Codia</h1>
          </div>
        </Link>

        <div className={styles.button_box}>
          {user?.id ? (
            <>
              <Link className={styles["primary_link"]} href="/questions/create">
                質問する
              </Link>

              <form action={formAction}>
                <Button size="small" type="submit" label="ログアウト" />
              </form>
            </>
          ) : (
            <>
              <Link className={styles["primary_link"]} href="/login">
                ログイン
              </Link>
              <Link className={styles["secondary_link"]} href="/signup">
                新規登録
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
