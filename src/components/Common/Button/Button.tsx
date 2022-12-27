import React, { FC, PropsWithChildren } from "react";
import { NormalButton, OutLinedButton } from "./ButtonStyles";

interface IProps extends PropsWithChildren {
    variant: "normal" | "outlined";
    size: "xs" | "sm" | "md" | "lg";
}

const Button: FC<IProps> = ({ children, variant, size, ...props }) => {
    if (variant !== "outlined") {
        return (
            <NormalButton size={size} {...props}>
                {children}
            </NormalButton>
        );
    }
    return (
        <OutLinedButton size={size} {...props}>
            {children}
        </OutLinedButton>
    );
};

export default Button;
