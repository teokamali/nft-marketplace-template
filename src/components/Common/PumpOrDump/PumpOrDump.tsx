import React from "react";
import { StyledPumpAndDump } from "./StyledPumpAndDump";

interface IProps {
    data: string;
}

function PumpOrDump({ data }: IProps) {
    let pickColor = "#212121cc";
    if (data[0] === "+") {
        pickColor = "#3BD49B";
    } else {
        pickColor = "#E7204F";
    }
    return <StyledPumpAndDump color={pickColor}>{data}%</StyledPumpAndDump>;
}

export default PumpOrDump;
