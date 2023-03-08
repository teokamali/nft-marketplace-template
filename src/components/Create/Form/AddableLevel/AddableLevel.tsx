import React, { useEffect, useState } from "react";
import Button from "src/components/Common/Button/Button";
import { useAppDispatch } from "src/redux/hooks";
import { openAddLevel } from "src/redux/slices/modals/modalsSlice";
import {
    StyledAddableInputComponentWrapper,
    StyledAddableInputWrapper,
    StyledInputContent,
    StyledInputWrapper,
    StyledAddableInput,
    StyledAddableInputWithDeleteButton,
    StyledDeleteItemIcon,
    StyledInputAndDeleteButtonWrapper,
} from "../AddableInput/StyledAddableInput";
import { Levels } from "../types";

export default function AddableLevel({
    onSave,
    values,
}: {
    onSave: (values: Levels[]) => void;
    values: Levels[];
}) {
    const dispatch = useAppDispatch();

    const [state, setState] = useState<Levels[]>([
        { name: "", value: 0, maxValue: 0 },
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
            newState[index] = { ...newState[index], value: parseInt(value) };
            return newState;
        });
    };
    const handleMaxValueInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const { value } = event.target;
        setState(prevState => {
            const newState = [...prevState];
            newState[index] = { ...newState[index], maxValue: parseInt(value) };
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
                            <span>Name</span>
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
                                type="number"
                                value={item.value}
                                onChange={e => {
                                    handleValueInputChange(e, index);
                                }}
                            />
                        </div>
                        <div>
                            <span>From Value</span>
                            <StyledAddableInput
                                type="number"
                                value={item.maxValue}
                                onChange={e => {
                                    handleMaxValueInputChange(e, index);
                                }}
                            />
                        </div>
                    </StyledInputWrapper>
                ))}
                <Button
                    size="sm"
                    variant="outlined"
                    onClick={() => {
                        setState(prev => [
                            ...prev,
                            { name: "", value: 0, maxValue: 0 },
                        ]);
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
                    dispatch(openAddLevel(false));
                }}
            >
                Save
            </Button>
        </StyledAddableInputComponentWrapper>
    );
}
