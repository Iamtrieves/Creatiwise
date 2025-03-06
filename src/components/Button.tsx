import { ReactNode } from "react";

interface ButtonProps {
  text: string;
  className: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  icon,
  iconPosition,
}) => {
  return (
    <button className={`${className} cursor-pointer`}>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {text}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};

export default Button;
