import styled from "styled-components";
import tw from "twin.macro";

export const NormalButton = styled.button`
    ${tw`bg-purple-5 text-white px-5 py-2 md:(px-9 py-3.5) rounded font-medium text-button transition-all hover:bg-purple-3 dark:bg-darkMode-purple-5 dark:hocus:bg-darkMode-purple-3`}
`;

export const OutLinedButton = styled.button`
    ${tw`bg-white text-black px-[19px] py-[7px] md:(px-[35px] py-[13px]) hover:(bg-purple-5 text-white) transition-all dark:(bg-darkMode-white text-black) dark:hover:(bg-darkMode-purple-5 text-darkMode-white) border border-purple-5  rounded font-medium text-button`}
`;
