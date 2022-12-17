import styled, { css } from "styled-components";
import tw from "twin.macro";

export const StyledHeader = styled.header`
    ${tw` w-full border-b h-14 pr-2 pl-2.5   flex justify-between items-center `}
`;
export const StyledHeaderOprator = styled.header`
    ${tw`  flex-row-reverse flex  items-center  gap-2.5`}
`;
export const StyledHeaderLogoVMenu = styled.header`
    ${tw`   flex   items-center  gap-4`}
`;
export const StyledBtn = styled.button`
    ${tw` bg-gray-500 rounded-lg h-8 w-32 text-white mt-3`}
`;
