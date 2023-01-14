import styled, { css } from "styled-components";
import tw from "twin.macro";
const bg = "./images/FooterBackground.png";
// export const SectionWraper = styled.div`
//     ${tw`w-full  flex flex-row   h-[271px] mt-[40px] pt-[40px] pl-[156px]   `}
// `;

export const SectionWraper = styled.div`
    ${tw`w-full  flex flex-col gap-[10px]  py-4 px-[18px] bg-footer-bg dark:bg-layout-bg-footer-dark bg-no-repeat bg-center bg-cover `}
`;
export const SectionTitleBox = styled.div`
    ${tw`w-full  flex flex-col  `}
`;
export const DescriptionTile = styled.h5`
    ${tw`  font-black text-[15px]	light:text-black dark:text-smokeWhite `}
`;
export const DescriptionTileDesc = styled.h6`
    ${tw`  font-medium	text-[12px] light:text-black dark:text-purple-7 `}
`;
export const DescriptionDesc = styled.span`
    ${tw` pr-[30px] text-[10px]  font-light text-title2 opacity-[70%]	light:text-black dark:text-smokeWhite`}
`;
export const SocialSection = styled.span`
    ${tw`flex flex-col gap-[10px] `}
`;
export const SocialTitle = styled.h6`
    ${tw`font-semibold text-[12px] light:text-black dark:text-white`}
`;
export const SocialBox = styled.div`
    ${tw`flex flex-row gap-[4px]  `}
`;
export const SocialIcon = styled.h6`
    ${tw`flex flex-row items-center w-[30px]
     h-[30px] light:bg-white dark:bg-[#212121] 
     justify-center light:stroke-[#4858EF] dark:stroke-[#6573F2]
     light:fill-[#4858EF] dark:fill-[#6573F2] cursor-pointer`}
`;
export const MenuFooterSection = styled.div`
    ${tw`flex flex flex-wrap  justify-between`}
`;
export const MenuSection = styled.div`
    ${tw`flex flex-col   gap-[5px]`}
`;
export const MenuTitle = styled.h6`
    ${tw`font-semibold text-title2 light:text-black dark:text-white`}
`;
export const MenuText = styled.span`
    ${tw`font-light text-title3 light:text-black dark:text-smokeWhite cursor-pointer opacity-[70%]`}
`;
