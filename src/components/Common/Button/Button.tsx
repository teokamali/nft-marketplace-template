import React, { FC, PropsWithChildren } from "react";
import { NormalButton, OutLinedButton } from "./ButtonStyles";

interface IProps extends PropsWithChildren {
    variant: "normal" | "outlined";
    size: "xs" | "sm" | "md" | "lg" | "full";
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

const Button: FC<IProps> = ({
    children,
    variant = "normal",
    size = "sm",
    onClick,
    type,
    ...props
}) => {
    if (variant !== "outlined") {
        return (
            <NormalButton size={size} onClick={onClick} type={type} {...props}>
                {children}
            </NormalButton>
        );
    }
    return (
        <OutLinedButton size={size} onClick={onClick} type={type} {...props}>
            {children}
        </OutLinedButton>
    );
};

export default Button;
