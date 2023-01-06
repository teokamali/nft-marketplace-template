import styled from "styled-components";
import tw from "twin.macro";

export const NormalButton = styled.button<{
    size: "xs" | "sm" | "md" | "lg";
}>`
    padding: ${props => props.size === "xs" && "0.5rem 1.1875rem"};
    padding: ${props => props.size === "sm" && "0.6875rem 1.4375rem"};
    padding: ${props => props.size === "md" && "0.6473rem 1.875rem"};
    padding: ${props => props.size === "lg" && "0.6473rem 2.1875rem"};
    font-size: ${props => props.size === "xs" && "0.5625rem"};
    font-size: ${props => props.size === "sm" && "0.75rem"};
    font-size: ${props => props.size === "md" && "1.25rem"};
    font-size: ${props => props.size === "lg" && "1.25rem"};
    ${tw`bg-purple-5 text-white rounded font-medium  whitespace-nowrap transition-all hover:bg-purple-3 dark:bg-darkMode-purple-5 dark:hocus:bg-darkMode-purple-3`}
`;

export const OutLinedButton = styled.button<{
    size: "xs" | "sm" | "md" | "lg";
}>`
    padding: ${props => props.size === "xs" && "0.5rem 1.1875rem"};
    padding: ${props => props.size === "sm" && "0.6875rem 1.4375rem"};
    padding: ${props => props.size === "md" && "0.6473rem 1.875rem"};
    padding: ${props => props.size === "lg" && "0.6473rem 2.1875rem"};
    font-size: ${props => props.size === "xs" && "0.5625rem"};
    font-size: ${props => props.size === "sm" && "0.75rem"};
    font-size: ${props => props.size === "md" && "1.25rem"};
    font-size: ${props => props.size === "lg" && "1.25rem"};
    ${tw`bg-white text-black hover:(bg-purple-5 text-white) whitespace-nowrap transition-all dark:(bg-darkMode-white text-black) dark:hover:(bg-darkMode-purple-5 text-darkMode-white) border border-purple-5  rounded font-medium `}
`;
