import React from "react";
import Select, { Props as SelectProps } from "react-select";
import {
    StyledInputDescription,
    StyledInputLabel,
    StyledInputWrapper,
} from "../Input/StyledInput";

interface ISelectInput extends SelectProps {
    title: string;
    description: string;
}
const SelectInput = ({ title, description, ...props }: ISelectInput) => {
    return (
        <StyledInputWrapper>
            <StyledInputLabel>{title}</StyledInputLabel>
            <StyledInputDescription>{description}</StyledInputDescription>
            <Select
                {...props}
                styles={{
                    control: (
                        provided: Record<string, unknown>,
                        state: any
                    ) => ({
                        ...provided,
                        height: 52,
                        border: state.isFocused
                            ? "1px solid #5f6df1"
                            : "1px solid #cccccc",
                        boxShadow: state.isFocused ? "none" : "none",
                    }),
                }}
            />
        </StyledInputWrapper>
    );
};

export default SelectInput;
