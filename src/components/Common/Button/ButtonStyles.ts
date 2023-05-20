import styled from "styled-components";
import tw from "twin.macro";

export const NormalButton = styled.button<{
    size: "xs" | "sm" | "md" | "lg" | "full";
}>`
    ${props => props.size === "xs" && tw`p-[0.5rem 1.1875rem] text-[0.5625rem]`}
    ${props =>
        props.size === "sm" && tw`p-[0.6875rem 1.4375rem] text-[0.75rem]`}
    ${props => props.size === "md" && tw`p-[0.6473rem 1.875rem] text-[1.25rem]`}
    ${props =>
        props.size === "lg" && tw`p-[0.6473rem 2.1875rem] text-[1.25rem]`}
    ${props =>
        props.size === "full" &&
        tw`w-full p-[0.6473rem 2.1875rem] text-[1.25rem]`}
    ${tw`bg-purple-5 text-white rounded font-medium  whitespace-nowrap transition-all hover:bg-purple-3 dark:bg-darkMode-purple-5 dark:hocus:bg-darkMode-purple-3`}
`;

export const OutLinedButton = styled.button<{
    size: "xs" | "sm" | "md" | "lg" | "full";
}>`
    ${props => props.size === "xs" && tw`p-[0.5rem 1.1875rem] text-[0.5625rem]`}
    ${props =>
        props.size === "sm" && tw`p-[0.6875rem 1.4375rem] text-[0.75rem]`}
    ${props => props.size === "md" && tw`p-[0.6473rem 1.875rem] text-[1.25rem]`}
    ${props =>
        props.size === "lg" && tw`p-[0.6473rem 2.1875rem] text-[1.25rem]`}
    ${props =>
        props.size === "full" &&
        tw`w-full p-[0.6473rem 2.1875rem] text-[1.25rem]`}
    ${tw`bg-white text-black hover:(bg-purple-5 text-white) whitespace-nowrap transition-all dark:(bg-darkMode-white text-black) dark:hover:(bg-darkMode-purple-5 text-darkMode-white) border border-purple-5  rounded font-medium `}
`;