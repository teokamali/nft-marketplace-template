import styled, { css } from "styled-components";
import tw from "twin.macro";

export const StyleExploreWraper = styled.div`
    ${tw`flex flex-col w-full  px-4 mx-auto`}
`;
export const StyleExploreHeaderSection = styled.div`
    ${tw`w-full flex flex-col gap-[8px] items-center`}
`;
export const StyleExploreHeaderSLeftTextTitle = styled.span`
    ${tw`font-semibold  light:text-black dark:text-[#fff] text-title1`}
`;
export const StyleExploreHeaderSLeftTextDesc = styled.span`
    ${tw`font-light  text-[#212121] opacity-30 text-title3 max-w-[361px] text-center`}
`;
export const StyleExploreHeaderOpratorSection = styled.div`
    ${tw`w-full flex flex-row justify-between items-center mt-[10px]`}
`;
export const StyleExploreHeaderOpratorBox = styled.div`
    ${tw`flex flex-row items-center gap-[3px]`}
`;
export const StyleExploreHeaderOpratorTextBox = styled.div`
    ${tw`flex flex-col items-center `}
`;
export const StyleExploreHeaderCenterTitleText = styled.span`
    ${tw`light:text-black dark:text-[#fff] font-semibold text-title3`}
`;
export const StyleExploreHeaderSLeftDesc = styled.span`
    ${tw`font-light  text-[#212121] opacity-30 text-[10px]`}
`;

export const StyleExploreMainSection = styled.div`
    ${tw`mt-[40px] flex flex-row flex-wrap justify-center gap-[30px] items-center `}
`;
export const StyleTradingCategoriesCardBox = styled.div`
    ${tw`flex flex-col items-center relative max-w-[175px]  rounded-[16px]`}
`;
export const StyleTradingCategoriesCardImage = styled.img`
    ${tw``}
`;
export const StyleTradingCategoriesCardTextBox = styled.div`
    ${tw`w-full flex flex-row    bg-white relative shadow-md  rounded-b-[12px] `}
`;
export const StyleTradingCategoriesCardText = styled.div`
    ${tw` font-bold text-[10px]  justify-start ml-[10px] flex flex-row  `}
`;

export const StyleTradingCategoriesThumbnailBox = styled.div`
    ${tw`w-[40px] h-[40px] absolute top-[-10px] left-[5px]  border-[6px] border-white rounded-[8px]`}
    ${css`
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-size: cover;
    `}
`;
