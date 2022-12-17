import React, { FC, PropsWithChildren } from "react";
import { NormalButton, OutLinedButton } from "./ButtonStyles";

interface IProps extends PropsWithChildren {
    variant: "normal" | "outlined";
    isLarge?: boolean;
}

const Button: FC<IProps> = ({ children, variant }) => {
    if (variant !== "outlined") {
        return <NormalButton>{children}</NormalButton>;
    }
    return <OutLinedButton>{children}</OutLinedButton>;
};

export default Button;
