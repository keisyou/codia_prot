import styles from "./styles.module.css";

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
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[`button--${size}`]} ${styles[`button--${variant}`]}`}
      {...props}
    >
      {label}
    </button>
  );
};
