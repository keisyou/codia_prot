import "./styles.css";

export interface ButtonProps {
  type?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  type = "primary",
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={["button", `button--${size}`, `button--${type}`].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
