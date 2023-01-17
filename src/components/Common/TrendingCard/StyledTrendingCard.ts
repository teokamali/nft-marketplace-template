import styled, { css } from "styled-components";
import tw from "twin.macro";

export const StyleTradingCategoriesCardBox = styled.div`
    ${tw`flex flex-col items-center relative  rounded-[16px]  bg-white text-black dark:(bg-black text-white) `}
`;
export const StyleTradingCategoriesCardImage = styled.img`
    ${tw``}
`;

export const StyleTradingCategoriesCardTextBox = styled.div`
    ${tw`w-full flex flex-row relative shadow-md  rounded-b-[16px] `}
`;
export const StyleTradingCategoriesCardText = styled.span`
    ${tw`justify-center font-semibold text-title1 flex gap-[5px] flex-row  `}
`;

export const StyleTradingCategoriesThumbnailBox = styled.div`
    ${tw`w-[80px] h-[80px] absolute top-[-30px] left-[20px]  border-[6px] border-white dark:border-black rounded-[8px]`}
    ${css`
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-size: cover;
    `}
`;
