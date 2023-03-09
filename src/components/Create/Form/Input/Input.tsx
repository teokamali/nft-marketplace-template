import React, { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";
import { StyledIconAndTextWrapper } from "../StyledCreateForm";
import {
    InputError,
    StyledInputDescription,
    StyledInputLabel,
    StyledInputWrapper,
    TextInput,
} from "./StyledInput";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
    description?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    icon?: ReactNode;
}

const Input = ({
    value,
    onChange,
    error,
    title,
    description,
    icon,
    ...props
}: IProps) => {
    return (
        <StyledInputWrapper>
            <StyledInputLabel htmlFor={props.name}>
                <StyledIconAndTextWrapper>
                    {icon && <span>{icon}</span>}
                    {title}
                </StyledIconAndTextWrapper>
            </StyledInputLabel>
            <StyledInputDescription>{description}</StyledInputDescription>
            <TextInput
                value={value}
                onChange={onChange}
                type="text"
                {...props}
            />
            {error && <InputError>{error}</InputError>}
        </StyledInputWrapper>
    );
};

export default Input;
