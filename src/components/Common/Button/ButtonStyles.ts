import styled from "styled-components";
import tw from "twin.macro";

export const NormalButton = styled.button`
    ${tw`w-full h-full p-1 bg-purple-5 text-white rounded font-medium  whitespace-nowrap transition-all hover:bg-purple-3 dark:bg-darkMode-purple-5 dark:hocus:bg-darkMode-purple-3`}
`;

export const OutLinedButton = styled.button`
    ${tw`w-full p-1 bg-white text-black hover:(bg-purple-5 text-white) whitespace-nowrap transition-all dark:(bg-darkMode-white text-black) dark:hover:(bg-darkMode-purple-5 text-darkMode-white) border border-purple-5  rounded font-medium `}
`;
