import styled, { css } from "styled-components";
import tw from "twin.macro";

export const StyleExploreWraper = styled.div`
    ${tw`flex flex-col w-full max-w-[1640px] px-8 mx-auto`}
`;
export const StyleExploreHeaderSection = styled.div`
    ${tw`flex flex-row justify-between`}
`;
export const StyleExploreHeaderOpratorSection = styled.div`
    ${tw`flex flex-row gap-[14px] items-center max-h-[40px]  cursor-pointer`}
`;
export const StyleExploreHeaderLeftTextBox = styled.div`
    ${tw`flex flex-col gap-[1px]  items-center`}
`;
export const StyleExploreHeaderSLeftTextTitle = styled.span`
    ${tw`font-bold  light:text-black dark:text-[#fff] text-title1`}
`;
export const StyleExploreHeaderSLeftTextDesc = styled.span`
    ${tw`font-light  text-[#212121] opacity-30 text-title3`}
`;

export const StyleExploreHeaderCenterSection = styled.div`
    ${tw`flex flex-col gap-[10px] max-w-[511px] items-center`}
`;
export const StyleExploreHeaderCenterTitleText = styled.h4`
    ${tw`light:text-black dark:text-[#fff] font-semibold `}
`;
export const StyleExploreHeaderCenterDecsText = styled.span`
    ${tw`text-[#212121] opacity-30 font-light text-title1 `}
`;
export const StyleExploreMainSection = styled.div`
    ${tw`mt-[40px] flex flex-row flex-wrap  justify-between `}
`;
export const StyleTradingCategoriesCardBox = styled.div`
    ${tw`flex flex-col items-center relative max-w-[390px   ] rounded-[16px]`}
`;
export const StyleTradingCategoriesCardImage = styled.img`
    ${tw``}
`;
export const StyleTradingCategoriesCardTextBox = styled.div`
    ${tw`w-full flex flex-row    bg-white relative shadow-md  rounded-b-[16px] `}
`;
export const StyleTradingCategoriesCardText = styled.span`
    ${tw`justify-center font-semibold text-title1 bg-white flex gap-[5px] flex-row  `}
`;
export const StyleTradingCategoriesButton = styled.button`
    ${tw` py-[14px] px-[64px] bg-[#4858EF] text-title1 font-medium rounded-[8px] text-white`}
`;
export const StyleTradingCategoriesThumbnailBox = styled.div`
    ${tw`w-[80px] h-[80px] absolute top-[-30px] left-[20px]  border-[6px] border-white rounded-[8px]`}
    ${css`
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-size: cover;
    `}
`;
