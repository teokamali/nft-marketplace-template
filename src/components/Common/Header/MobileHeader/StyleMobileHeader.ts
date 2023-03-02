import styled, { css } from "styled-components";
import tw from "twin.macro";

export const Section = styled.div`
    ${tw`w-full  flex flex-row items-center relative  h-[50px] bg-transparent justify-between px-[22px] `}
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
export const DropDounBox = styled.div`
    ${tw`max-w-[308px] light:bg-[#fff] dark:bg-[#212121] absolute right-[-30PX] top-[40px] border-[#4B4A4A] border-t-[1px] z-10 flex flex-col pl-[10px] py-[11px] rounded-bl-[10px]`}
`;
export const TitleDropDounBox = styled.div`
    ${tw`flex flex-row items-center gap-[11px]  light:stroke-[#212121] dark:stroke-[#fff]`}
`;
export const TitleDropDounText = styled.h6`
    ${tw` font-medium cursor-pointer`}
`;
export const DescriptionDropDoun = styled.span`
    ${tw` text-[12px]  font-light light:text-[#4B4A4A] dark:text-[#fff] mt-[10px]`}
`;
export const MenuDropDoun = styled.div`
    ${tw` mt-[20px] flex flex-col gap-[13px] `}
`;
export const MenuDropDounItem = styled.div`
    ${tw`  flex flex-row gap-[7px] items-center cursor-pointer`}
`;
export const MenuDropDounItemImg = styled.div`
    ${tw` w-[23px] `}
`;
export const MenuDropDounItemText = styled.span`
    ${tw`  text-[13px] font-semibold cursor-pointer`}
`;

export const SearchBox = styled.div`
    ${tw` w-full h-[35px] mx-[10px]  absolute right-[0px] top-[5px]  `}
`;
