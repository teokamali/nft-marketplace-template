import React, { FC, PropsWithChildren } from "react";
import { NormalButton, OutLinedButton } from "./ButtonStyles";

interface IProps extends PropsWithChildren {
    variant: "normal" | "outlined";
    size: "xs" | "sm" | "md" | "lg" | "full";
    onClick: () => void;
}

const Button: FC<IProps> = ({ children, variant, size, onClick, ...props }) => {
    if (variant !== "outlined") {
        return (
            <NormalButton size={size} onClick={onClick} {...props}>
                {children}
            </NormalButton>
        );
    }
    return (
        <OutLinedButton size={size} onClick={onClick} {...props}>
            {children}
        </OutLinedButton>
    );
};

export default Button;
