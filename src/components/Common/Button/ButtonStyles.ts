import styled from "styled-components";
import tw from "twin.macro";

export const NormalButton = styled.button<{
    size: "xs" | "sm" | "md" | "lg";
}>`
    padding: ${props => props.size === "xs" && "8px 19px"};
    padding: ${props => props.size === "sm" && "11px 23px"};
    padding: ${props => props.size === "md" && "14px 30px"};
    padding: ${props => props.size === "lg" && "14px 35px"};
    width: ${props => props.size === "xs" && "67px"};
    width: ${props => props.size === "sm" && "93px"};
    width: ${props => props.size === "md" && "144px"};
    width: ${props => props.size === "lg" && "200px"};
    font-size: ${props => props.size === "xs" && "9px"};
    font-size: ${props => props.size === "sm" && "12px"};
    font-size: ${props => props.size === "md" && "20px"};
    font-size: ${props => props.size === "lg" && "20px"};
    ${tw`bg-purple-5 text-white rounded font-medium  whitespace-nowrap transition-all hover:bg-purple-3 dark:bg-darkMode-purple-5 dark:hocus:bg-darkMode-purple-3`}
`;

export const OutLinedButton = styled.button<{
    size: "xs" | "sm" | "md" | "lg";
}>`
    padding: ${props => props.size === "xs" && "8px 19px"};
    padding: ${props => props.size === "sm" && "11px 23px"};
    padding: ${props => props.size === "md" && "14px 30px"};
    padding: ${props => props.size === "lg" && "14px 35px"};
    width: ${props => props.size === "xs" && "67px"};
    width: ${props => props.size === "sm" && "93px"};
    width: ${props => props.size === "md" && "144px"};
    width: ${props => props.size === "lg" && "200px"};
    font-size: ${props => props.size === "xs" && "9px"};
    font-size: ${props => props.size === "sm" && "12px"};
    font-size: ${props => props.size === "md" && "20px"};
    font-size: ${props => props.size === "lg" && "20px"};
    ${tw`bg-white text-black hover:(bg-purple-5 text-white) whitespace-nowrap transition-all dark:(bg-darkMode-white text-black) dark:hover:(bg-darkMode-purple-5 text-darkMode-white) border border-purple-5  rounded font-medium `}
`;
