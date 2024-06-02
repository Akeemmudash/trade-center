import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  rounded?: boolean;
  children: React.ReactNode;
  color?: "red" | "white";
}
const Button = ({
  className,
  children,
  rounded = true,
  icon,
  color = "red",
  ...props
}: IButton) => {
  return (
    <button
      className={clsx(
        "button  outline-none border-0 fw-medium",
        { "rounded-pill": rounded },
        className,
        { "bg-bright-red text-white": color === "red" },
        { "bg-white text-bright-red": color === "white" }
      )}
      {...props}
    >
      <span className="|">
        {children} {Boolean(icon) && <span className="ms-2">{icon}</span>}
      </span>
    </button>
  );
};

export default Button;
