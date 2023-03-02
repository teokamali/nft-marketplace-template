import React, { ChangeEvent, InputHTMLAttributes } from "react";
import {
    InputError,
    StyledInputDescription,
    StyledInputLabel,
    StyledInputWrapper,
    TextInput,
} from "./FormInput";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
    description?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const Input = ({
    value,
    onChange,
    error,
    title,
    description,
    ...props
}: IProps) => {
    return (
        <StyledInputWrapper>
            <StyledInputLabel htmlFor={props.name}>{title}</StyledInputLabel>
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
