import styled, { css } from "styled-components";
import tw from "twin.macro";
const bg = "./images/FooterBackground.png";

export const SectionWraper = styled.div`
    ${tw`w-full  flex flex-row   h-[358px]   pt-[90px] pl-[156px] bg-footer-bg dark:bg-layout-bg-footer-dark bg-no-repeat bg-center `}
`;
export const DescriptionSection = styled.div`
    ${tw`  flex flex-col gap-[10px] `}
`;
export const DescriptionTileBox = styled.div`
    ${tw`  flex flex-col  `}
`;
export const DescriptionTile = styled.h5`
    ${tw`  font-black	light:text-black dark:text-smokeWhite `}
`;
export const DescriptionTileDesc = styled.h6`
    ${tw`  font-medium	 light:text-black dark:text-purple-7 `}
`;
export const DescriptionDesc = styled.span`
    ${tw`max-w-[522px] pr-[30px]  font-light text-title2 opacity-[70%]	light:text-black dark:text-smokeWhite`}
`;
export const MenuFooterSection = styled.div`
    ${tw`flex flex-row  ml-[80px] gap-[60px]`}
`;
export const MenuSection = styled.div`
    ${tw`flex flex-col   gap-[10px]`}
`;
export const MenuTitle = styled.h6`
    ${tw`font-semibold light:text-black dark:text-white`}
`;
export const MenuText = styled.span`
    ${tw`font-light text-title2 light:text-black dark:text-smokeWhite cursor-pointer opacity-[70%]`}
`;
export const SocialSection = styled.span`
    ${tw`flex flex-col gap-[10px] ml-[128px]`}
`;
export const SocialTitle = styled.h6`
    ${tw`font-semibold light:text-black dark:text-white`}
`;
export const SocialBox = styled.div`
    ${tw`flex flex-row gap-[10px]  `}
`;
export const SocialIcon = styled.h6`
    ${tw`flex flex-row items-center w-[30px]
     h-[30px] light:bg-white dark:bg-[#212121] 
     justify-center light:stroke-[#4858EF] dark:stroke-[#6573F2]
     light:fill-[#4858EF] dark:fill-[#6573F2] cursor-pointer`}
`;
