"use client";

import Image from "next/image";
import { Button } from "../Button";
import "./styles.css";

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
    <div className="header">
      <div className="logo-box">
        <Image src="/icon.svg" alt="icon" priority width={48} height={48} />
        <h1 className="title">Codia</h1>
      </div>

      <div className="button-box">
        <Button label="ログイン" />
        <Button type={"secondary"} label="新規登録" />
      </div>
    </div>
  </header>
);
