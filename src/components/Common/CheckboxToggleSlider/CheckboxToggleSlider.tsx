import React, { ChangeEvent, HtmlHTMLAttributes } from "react";
import {
    StyledCheckBoxInput,
    StyledCheckBoxToggleSliderWrapper,
    StyledToggleViewer,
} from "./StyledChcekboxToggleSlider";

interface ICheckboxToggleSlider extends HtmlHTMLAttributes<HTMLInputElement> {
    isChecked: boolean;
    setIsChecked: (checked: boolean) => void;
    disabled?: boolean;
}

export default function CheckboxToggleSlider({
    isChecked,
    setIsChecked,
    disabled,
}: ICheckboxToggleSlider) {
    return (
        <StyledCheckBoxToggleSliderWrapper disabled={disabled ?? true}>
            <StyledCheckBoxInput
                type="checkbox"
                checked={isChecked}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    !disabled ? setIsChecked(e.target.checked) : null
                }
                disabled={disabled}
            />
            <StyledToggleViewer isChecked={isChecked}></StyledToggleViewer>
        </StyledCheckBoxToggleSliderWrapper>
    );
}
