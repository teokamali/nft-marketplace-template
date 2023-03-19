import React from "react";
import { StyledProgress, StyledProgressBarWrapper } from "./StyledProgressbar";

interface IProgressbarProps {
    value: number;
    maxValue: number;
}

export default function Progressbar({ value, maxValue }: IProgressbarProps) {
    const widthCalculator = (value / maxValue) * 100;
    return (
        <StyledProgressBarWrapper>
            <StyledProgress width={widthCalculator}></StyledProgress>
        </StyledProgressBarWrapper>
    );
}
