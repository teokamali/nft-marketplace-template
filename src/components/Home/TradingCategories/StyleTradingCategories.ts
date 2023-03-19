import styled, { css } from "styled-components";
import tw from "twin.macro";

export const StyleTradingCategoriesSection = styled.div`
    ${tw`flex flex-col gap-[50px] mt-[100px] items-center pt-[10px]  text-black dark:text-white`}
`;
export const StyleTradingCategoriesTitleBox = styled.div`
    ${tw`flex flex-col gap-[10px] text-black dark:text-white items-center`}
`;
export const StyleTradingCategoriesTitleText = styled.div`
    ${tw`flex flex-row  items-center gap-[10px] relative `}
`;
export const StyleTradingCategoriesTitleTextone = styled.h4`
    ${tw`font-semibold `}
`;
export const StyleTradingCategoriesTitleTextTow = styled.h5`
    ${tw`font-medium text-[#5F6DF1] flex flex-row items-center gap-[10px] `}
`;
export const StyleTradingCategoriesTitleDesc = styled.span`
    ${tw`font-light text-title1 text-[#212121]  opacity-60 `}
`;
export const StyleTradingCategoriesSliderSection = styled.div`
    ${tw``}
`;

export const StyleTradingCategoriesSectionMobile = styled.button`
    ${tw`w-full flex flex-col gap-[30px] mt-[30px] justify-center  items-center pt-[10px] text-black dark:text-white`}
`;

export const StyleTradingCategoriesTitleTextoneMobile = styled.h6`
    ${tw`font-semibold `}
`;
export const StyleTradingCategoriesTitleTextMobile = styled.span`
    ${tw`font-medium text-[#5F6DF1] flex flex-row items-center gap-[10px] `}
`;
export const StyleTradingCategoriesTitleDescMobile = styled.span`
    ${tw`font-light text-title2 text-[#212121] opacity-60 `}
`;
export const StyleTradingCategoriesCardMobile = styled.span`
    ${tw`justify-center font-semibold text-title2 bg-white flex gap-[5px] flex-row `}
`;
export const StyleTradingCategorieDropDown = styled.div`
    ${tw` shadow-md rounded-[10px] absolute top-[50px] bg-white right-[-10px] flex flex-col px-[15px] py-[10px] gap-[10px]  text-black dark:text-white`}
`;
export const StyleTradingCategorieDropDownText = styled.span`
    ${tw`text-[18px] cursor-pointer py-[2px] hover:bg-[#E5EAF0] text-black dark:text-white`}
`;
export const StyleTradingCategoriesButton = styled.button`
    ${tw` py-[14px] px-[64px] bg-[#4858EF] text-title1 font-medium rounded-[8px] text-white`}
`;
