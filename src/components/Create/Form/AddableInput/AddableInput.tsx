import React, { useState } from "react";
import Button from "src/components/Common/Button/Button";
import { AddableInputValue, IAddableInputProps } from "./AddableInputTypes";
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

const AddableInput = ({ onSave }: IAddableInputProps) => {
    const [state, setState] = useState<AddableInputValue[]>([
        { name: "", value: "" },
    ]);

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
            newState[index] = { ...newState[index], name: value };
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
                                    value={item.name}
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
                        setState(prev => [...prev, { name: "", value: "" }]);
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
                }}
            >
                Save
            </Button>
        </StyledAddableInputComponentWrapper>
    );
};

export default AddableInput;
