import styled, { css } from "styled-components";
import tw from "twin.macro";

export const StyledTestContainer = styled.div`
    ${tw`text-sm font-bold underline`}
    ${css`
        z-index: 9990;
    `}
`;
