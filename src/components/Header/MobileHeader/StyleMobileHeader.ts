import styled, { css } from "styled-components";
import tw from "twin.macro";

export const Section = styled.div`
    ${tw`w-full  flex flex-row items-center  h-[50px] bg-transparent justify-between px-[22px] `}
`;
export const Title = styled.span`
    ${tw`font-bold text-title3 light:text-black dark:text-smokeWhite`}
`;

export const MenuSection = styled.div`
    ${tw`flex  flex-row  gap-[12px] light:fill-[#212121] dark:fill-[#fff]`}
`;
export const MenuItem = styled.a`
    ${tw`cursor-pointer   light:stroke-[#212121] dark:stroke-[#fff] `}
`;
export const LanguageVsWalletSection = styled.a`
    ${tw`flex flex-row gap-[23px] items-center`}
`;
export const RoundedButton = styled.button`
    ${tw`w-[50px] h-[50px] rounded-[50px]  ml-[29px]  bg-gradient-to-t from-[#FCABF4]  to-[#580CFA]`}
`;
