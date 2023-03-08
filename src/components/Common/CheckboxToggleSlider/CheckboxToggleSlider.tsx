import React, { ChangeEvent } from "react";
import {
    StyledCheckBoxInput,
    StyledCheckBoxToggleSliderWrapper,
    StyledToggleViewer,
} from "./StyledChcekboxToggleSlider";

interface ICheckboxToggleSlider {
    isChecked: boolean;
    setIsChecked: (checked: boolean) => void;
}

export default function CheckboxToggleSlider({
    isChecked,
    setIsChecked,
}: ICheckboxToggleSlider) {
    return (
        <StyledCheckBoxToggleSliderWrapper>
            <StyledCheckBoxInput
                type="checkbox"
                checked={isChecked}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setIsChecked(e.target.checked)
                }
            />
            <StyledToggleViewer isChecked={isChecked}></StyledToggleViewer>
        </StyledCheckBoxToggleSliderWrapper>
    );
}
