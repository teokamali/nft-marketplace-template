import React, { FC, PropsWithChildren } from "react";
import { NormalButton, OutLinedButton } from "./ButtonStyles";

interface IProps extends PropsWithChildren {
    variant: "normal" | "outlined";
    isLarge?: boolean;
}

const Button: FC<IProps> = ({ children, variant, isLarge }) => {
    if (variant !== "outlined") {
        return <NormalButton isLarge={isLarge}>{children}</NormalButton>;
    }
    return <OutLinedButton isLarge={isLarge}>{children}</OutLinedButton>;
};

export default Button;
