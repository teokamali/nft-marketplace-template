import styled from "styled-components";
import tw from "twin.macro";

export const LayoutWrapper = styled.div`
    ${tw` min-h-screen bg-layout-bg dark:bg-layout-bg-dark bg-no-repeat bg-center bg-cover`}
`;

export const LayoutMain = styled.main<{
    isWalletDropDownOpen: boolean;
    isMenuDropDownOpen: boolean;
}>`
    ${tw`w-full transition-all min-h-[calc(100vh - 370px)] duration-500`}
    ${props => props.isWalletDropDownOpen && "filter: blur(12px)"}
    ${props => props.isMenuDropDownOpen && "filter: blur(12px)"}
`;
export const LayoutFooter = styled.footer<{
    isWalletDropDownOpen: boolean;
    isMenuDropDownOpen: boolean;
}>`
    ${tw`w-full transition-all duration-500`}
    ${props => props.isWalletDropDownOpen && "filter: blur(12px)"}
    ${props => props.isMenuDropDownOpen && "filter: blur(12px)"}
`;
export const Container = styled.div`
    ${tw`w-full max-w-[1640px] px-7 mx-auto`}
`;
