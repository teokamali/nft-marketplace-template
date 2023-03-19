import React, { useEffect, useState } from "react";
import Button from "src/components/Common/Button/Button";
import { useAppDispatch } from "src/redux/hooks";
import { openAddProperty } from "src/redux/slices/modals/modalsSlice";
import { Properties } from "../types";
import { IAddableInputProps } from "./AddableInputTypes";
import {
    StyledAddableInput,
    StyledAddableInputComponentWrapper,
    StyledAddableInputWithDeleteButton,
    StyledAddableInputWrapper,
    StyledDeleteItemIcon,
    StyledInputAndDeleteButtonWrapper,
    StyledInputContent,
    StyledInputWrapper,
} from "./StyledAddableInput";

const AddableInput = ({ onSave, values }: IAddableInputProps) => {
    const [state, setState] = useState<Properties[]>([{ type: "", value: "" }]);
    const dispatch = useAppDispatch();

    const handleRemoveItem = (indexToRemove: number) => {
        setState(prevState =>
            prevState.filter((_, index) => index !== indexToRemove)
        );
    };
    const handleNameInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const { value } = event.target;
        setState(prevState => {
            const newState = [...prevState];
            newState[index] = { ...newState[index], type: value };
            return newState;
        });
    };
    const handleValueInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const { value } = event.target;
        setState(prevState => {
            const newState = [...prevState];
            newState[index] = { ...newState[index], value: value };
            return newState;
        });
    };

    useEffect(() => {
        if (values.length) {
            setState(values);
        }
    }, [values]);

    return (
        <StyledAddableInputComponentWrapper>
            <StyledAddableInputWrapper>
                {state.map((item, index) => (
                    <StyledInputWrapper key={index}>
                        <StyledInputContent>
                            <span>Type</span>
                            <StyledInputAndDeleteButtonWrapper>
                                <StyledDeleteItemIcon
                                    onClick={() =>
                                        state.length > 1
                                            ? handleRemoveItem(index)
                                            : null
                                    }
                                >
                                    X
                                </StyledDeleteItemIcon>
                                <StyledAddableInputWithDeleteButton
                                    type="text"
                                    value={item.type}
                                    onChange={e => {
                                        handleNameInputChange(e, index);
                                    }}
                                />
                            </StyledInputAndDeleteButtonWrapper>
                        </StyledInputContent>

                        <div>
                            <span>Value</span>
                            <StyledAddableInput
                                type="text"
                                value={item.value}
                                onChange={e => {
                                    handleValueInputChange(e, index);
                                }}
                            />
                        </div>
                    </StyledInputWrapper>
                ))}
                <Button
                    size="sm"
                    variant="outlined"
                    onClick={() => {
                        setState(prev => [...prev, { type: "", value: "" }]);
                    }}
                >
                    Add More
                </Button>
            </StyledAddableInputWrapper>
            <Button
                size="full"
                variant="normal"
                onClick={() => {
                    onSave(state);
                    dispatch(openAddProperty(false));
                }}
            >
                Save
            </Button>
        </StyledAddableInputComponentWrapper>
    );
};

export default AddableInput;
