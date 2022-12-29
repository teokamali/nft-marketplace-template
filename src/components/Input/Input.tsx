import React, { InputHTMLAttributes } from "react";
import { InputError, InputWrapper, TextInput } from "./style";
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    onChange: (e: any) => void;
    error?: string;
}

const Input = ({ value, onChange, error, ...props }: IProps) => {
    return (
        <InputWrapper>
            <TextInput
                value={value}
                onChange={onChange}
                type="text"
                {...props}
            />
            {error && <InputError>{error}</InputError>}
        </InputWrapper>
    );
};

export default Input;
