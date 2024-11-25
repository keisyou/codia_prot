import styles from "./styles.module.css";

export interface ButtonProps {
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  size?: "small" | "medium" | "large";
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  variant = "primary",
  type = "button",
  size = "medium",
  label,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`
        ${styles.button}
        ${styles[`button--${size}`]}
        ${styles[`button--${variant}`]}
        ${disabled && styles[`button--${variant}--disabled`]}
      `}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};
