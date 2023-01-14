import styled from "styled-components";
import tw from "twin.macro";

export const StyledPumpAndDump = styled.span<{ color: string }>`
    ${tw``}
    color:${props => props.color}
`;
