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
            <Select {...props} />
        </StyledInputWrapper>
    );
};

export default SelectInput;
