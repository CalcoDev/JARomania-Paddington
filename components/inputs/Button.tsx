import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: "primary" | "secondary";
  aspect: "dimmed";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  theme,
  aspect,
  children,
  ...rest
}) => {
  return (
    <button className="" {...rest}>
      {children}
    </button>
  );
};

export default Button;
