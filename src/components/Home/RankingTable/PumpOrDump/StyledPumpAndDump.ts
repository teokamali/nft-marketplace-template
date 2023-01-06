import styled from "styled-components";
import tw from "twin.macro";

export const StyledPumpAndDumpTd = styled.td<{ color: string }>`
    ${tw`font-medium text-title1`}
    color:${props => props.color}
`;
