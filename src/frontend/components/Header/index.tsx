"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import { Button } from "../Button";

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = () => (
  <header>
    <div className={styles.header}>
      <div className={styles.logo_box}>
        <Image src="/icon.svg" alt="icon" priority width={48} height={48} />
        <h1 className="title">Codia</h1>
      </div>

      <div className={styles.button_box}>
        <Button label="ログイン" />
        <Button variant="secondary" label="新規登録" />
      </div>
    </div>
  </header>
);
