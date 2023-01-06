import styled from "styled-components";
import tw from "twin.macro";

export const StyledPumpAndDumpTd = styled.td<{ color: string }>`
    ${tw``}
    color:${props => props.color}
`;
