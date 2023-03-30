import React, { FC, HtmlHTMLAttributes, PropsWithChildren } from "react";
import { ReactFC } from "src/types/types";
import { NormalButton, OutLinedButton } from "./ButtonStyles";

interface IProps extends HtmlHTMLAttributes<HTMLButtonElement> {
    variant: "normal" | "outlined";
}

const Button: ReactFC<IProps> = ({ children, variant, onClick, ...props }) => {
    if (variant !== "outlined") {
        return (
            <NormalButton onClick={onClick} {...props}>
                {children}
            </NormalButton>
        );
    }
    return (
        <OutLinedButton onClick={onClick} {...props}>
            {children}
        </OutLinedButton>
    );
};

export default Button;
