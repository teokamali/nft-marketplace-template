import React, { ReactNode } from "react";
import Select, { Props as SelectProps } from "react-select";
import {
    StyledInputDescription,
    StyledInputLabel,
    StyledInputWrapper,
} from "../../Create/Form/Input/StyledInput";
import { StyledIconAndTextWrapper } from "../../Create/Form/StyledCreateForm";
import { StyledSelectInput } from "./StyledSelectInput";

interface ISelectInput extends SelectProps {
    title?: string;
    description?: string;
    icon?: ReactNode;
}
const SelectInput = ({ title, description, icon, ...props }: ISelectInput) => {
    return (
        <StyledInputWrapper>
            <StyledInputLabel>
                <StyledIconAndTextWrapper>
                    {icon && <span>{icon}</span>}
                    {title}
                </StyledIconAndTextWrapper>
            </StyledInputLabel>
            <StyledInputDescription>{description}</StyledInputDescription>
            <StyledSelectInput
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
