import React from "react";
import { StyledPumpAndDumpTd } from "./StyledPumpAndDump";

interface IProps {
    data: string;
}

function PumpOrDump({ data }: IProps) {
    console.log(data[0]);
    let pickColor = "#212121cc";
    if (data[0] === "+") {
        pickColor = "#3BD49B";
    } else {
        pickColor = "#E7204F";
    }
    return <StyledPumpAndDumpTd color={pickColor}>{data}%</StyledPumpAndDumpTd>;
}

export default PumpOrDump;
