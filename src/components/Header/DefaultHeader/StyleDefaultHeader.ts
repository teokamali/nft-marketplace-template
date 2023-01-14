import styled, { css } from "styled-components";
import tw from "twin.macro";

export const Section = styled.div`
    ${tw`w-full  flex flex-row items-center  h-[113px] bg-transparent justify-between relative`}
`;
export const Title = styled.h6`
    ${tw`font-bold light:text-black dark:text-smokeWhite`}
`;
export const SearchBox = styled.form`
    ${tw`w-[504px] h-[40px] mx-[10px]  `}
`;
export const MenuSection = styled.div`
    ${tw`flex flex-row justify-between text-[17px]  gap-[10px] items-center  font-bold light:text-black dark:text-smokeWhite`}
`;
export const MenuItem = styled.a`
    ${tw`cursor-pointer font-medium  light:stroke-[#212121] dark:stroke-[#fff] `}
`;
export const LanguageVsWalletSection = styled.a`
    ${tw`flex flex-row justify-between gap-[10px] items-center`}
`;
export const RoundedButton = styled.button`
    ${tw`w-[50px] h-[50px]   rounded-[50%]    bg-gradient-to-t from-[#FCABF4]  to-[#580CFA]`}
`;
export const ButtonWallet = styled.button`
    ${tw`light:stroke-[#212121] dark:stroke-[#fff]`}
`;
export const DropDounBox = styled.div`
    ${tw`max-w-[438px] light:bg-[#fff] dark:bg-[#212121] absolute right-[-30PX] top-[91px] border-[#4B4A4A] border-t-[1px] z-10 flex flex-col pl-[20px] py-[21px] rounded-bl-[10px]`}
`;
export const TitleDropDounBox = styled.div`
    ${tw`flex flex-row gap-[14px] light:stroke-[#212121] dark:stroke-[#fff]`}
`;
export const TitleDropDounText = styled.h5`
    ${tw` font-medium cursor-pointer`}
`;
export const DescriptionDropDoun = styled.span`
    ${tw` text-[15px] font-light light:text-[#4B4A4A] dark:text-[#fff] mt-[10px]`}
`;
export const MenuDropDoun = styled.div`
    ${tw` mt-[26px] flex flex-col gap-[33px] cursor-pointer`}
`;
export const MenuDropDounItem = styled.div`
    ${tw`  flex flex-row gap-[10px] items-center cursor-pointer`}
`;
export const MenuDropDounItemImg = styled.div`
    ${tw` w-[33px]`}
`;
export const MenuDropDounItemText = styled.span`
    ${tw`  text-[15px] font-semibold cursor-pointer`}
`;
