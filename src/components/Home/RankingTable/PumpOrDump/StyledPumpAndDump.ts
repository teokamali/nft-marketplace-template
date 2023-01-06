import styled from "styled-components";
import tw from "twin.macro";

export const StyledPumpAndDumpTd = styled.td<{ color: string }>`
    ${tw`font-medium text-[8px] md:text-base lg:text-title1`}
    color:${props => props.color}
`;
