import styled, { css } from "styled-components";
import tw from "twin.macro";

export const StyledInput = styled.input`
    ${tw`border border-gray-500 rounded-lg block mt-3 p-1`}
`;

export const StyledBtn = styled.button`
    ${tw` bg-gray-500 rounded-lg h-8 w-32 text-white mt-3`}
`;
