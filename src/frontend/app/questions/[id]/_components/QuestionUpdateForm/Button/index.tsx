import styles from "./styles.module.css";
import { useFormStatus } from "react-dom";

export interface ButtonProps {
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  variant = "primary",
  type = "button",
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      type={type}
      className={`
        ${styles.button}
        ${styles[`button--${size}`]}
        ${styles[`button--${variant}`]}
        ${pending && styles[`button--${variant}--disabled`]}
      `}
      disabled={pending}
      {...props}
    >
      {label}
    </button>
  );
};
