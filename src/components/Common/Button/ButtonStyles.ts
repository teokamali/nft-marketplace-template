import styled from "styled-components";
import tw from "twin.macro";

export const NormalButton = styled.button<{ isLarge?: boolean }>`
    ${tw`bg-purple-5 text-white rounded font-medium text-button transition-all hover:bg-purple-3 dark:bg-darkMode-purple-5 dark:hocus:bg-darkMode-purple-3`}
    ${props => (props.isLarge ? tw`px-9 py-3.5` : tw`px-5 py-2`)}
`;

export const OutLinedButton = styled.button<{ isLarge?: boolean }>`
    ${tw`bg-white text-black hover:(bg-purple-5 text-white) transition-all dark:(bg-darkMode-white text-black) dark:hover:(bg-darkMode-purple-5 text-darkMode-white) border border-purple-5  rounded font-medium text-button`}
    ${props =>
        props.isLarge ? tw`px-[35px] py-[13px]` : tw`px-[19px] py-[7px]`}
`;
