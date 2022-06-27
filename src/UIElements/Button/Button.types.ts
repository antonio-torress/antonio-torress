type ButtonType = "button" | "submit" | "reset" | undefined;

type ButtonSize = "small" | "big" | "whole" | undefined;

export interface ButtonProps {
  size?: ButtonSize;
  href?: string;
  to?: string;
  type?: ButtonType;
  icon?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  inverse?: boolean;
  danger?: boolean;
  outline?: boolean;
  disabled?: boolean;
}