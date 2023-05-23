import React, { CSSProperties, FC, PropsWithChildren } from "react";
import { NormalButton, OutLinedButton } from "./ButtonStyles";

interface IProps extends PropsWithChildren {
    variant: "normal" | "outlined";
    type?: "button" | "submit" | "reset";
    style?: CSSProperties;
    onClick?: () => void;
}

const Button: FC<IProps> = ({
    children,
    variant = "normal",
    onClick,
    type,
    style,
}) => {
    if (variant !== "outlined") {
        return (
            <NormalButton onClick={onClick} type={type} style={style}>
                {children}
            </NormalButton>
        );
    }
    return (
        <OutLinedButton onClick={onClick} type={type} style={style}>
            {children}
        </OutLinedButton>
    );
};

export default Button;
