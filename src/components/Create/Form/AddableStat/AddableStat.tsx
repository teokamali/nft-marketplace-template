import React, { useEffect, useState } from "react";
import Button from "src/components/Common/Button/Button";
import { useAppDispatch } from "src/redux/hooks";
import { openAddStat } from "src/redux/slices/modals/modalsSlice";
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
import { Stats } from "../types";
import { StyledAddableLevelValuesInputsWrapper } from "./StyledAddableStat";

export default function AddableStat({
    onSave,
    values,
}: {
    onSave: (values: Stats[]) => void;
    values: Stats[];
}) {
    const dispatch = useAppDispatch();

    const [state, setState] = useState<Stats[]>([
        { name: "", value: 2, of: 10 },
    ]);

    const handleRemoveItem = (indexToRemove: number) => {
        if (state.length > 1) {
            return setState(prevState =>
                prevState.filter((_, index) => index !== indexToRemove)
            );
        }
        return setState(prev => [{ name: "", value: 2, of: 10 }]);
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
            newState[index] = { ...newState[index], of: parseInt(value) };
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
                                    onClick={() => handleRemoveItem(index)}
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
                            <StyledAddableLevelValuesInputsWrapper>
                                <StyledAddableInput
                                    type="number"
                                    value={item.value}
                                    onChange={e => {
                                        handleValueInputChange(e, index);
                                    }}
                                />
                                <span>of</span>
                                <StyledAddableInput
                                    type="number"
                                    value={item.of}
                                    onChange={e => {
                                        handleMaxValueInputChange(e, index);
                                    }}
                                />
                            </StyledAddableLevelValuesInputsWrapper>
                        </div>
                    </StyledInputWrapper>
                ))}
                <Button
                    variant="outlined"
                    onClick={() => {
                        setState(prev => [
                            ...prev,
                            { name: "", value: 2, of: 10 },
                        ]);
                    }}
                >
                    Add More
                </Button>
            </StyledAddableInputWrapper>
            <Button
                variant="normal"
                onClick={() => {
                    onSave(state);
                    dispatch(openAddStat(false));
                }}
            >
                Save
            </Button>
        </StyledAddableInputComponentWrapper>
    );
}
