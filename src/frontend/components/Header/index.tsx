"use client";

import { getUser } from "@/api/users/getUser";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../Button";
import { useFormState } from "react-dom";
import { logout } from "@/api/users/logout/actions";
import { initialState } from "@/api/users/logout/state";

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
        <div className={styles.logo_box}>
          <Image src="/icon.svg" alt="icon" priority width={48} height={48} />
          <h1 className="title">Codia</h1>
        </div>

        <div className={styles.button_box}>
          {user?.id ? (
            <form action={formAction}>
              <Button size="small" type="submit" label="ログアウト" />
            </form>
          ) : (
            <>
              <Link className={styles["login_link"]} href="/login">
                ログイン
              </Link>
              <Link className={styles["signup_link"]} href="/signup">
                新規登録
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
