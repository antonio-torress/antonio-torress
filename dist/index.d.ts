/// <reference types="react" />
declare type ButtonType = "button" | "submit" | "reset" | undefined;
declare type ButtonSize = "small" | "big" | "whole" | undefined;
interface ButtonProps {
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

declare const Button: (props: ButtonProps) => JSX.Element;

export { Button };
