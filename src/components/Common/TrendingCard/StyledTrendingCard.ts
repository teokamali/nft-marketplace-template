import Image from "next/image";
import styled, { css } from "styled-components";
import tw from "twin.macro";

export const StyleTradingCategoriesCardBox = styled.div`
    ${tw`flex flex-col  relative  rounded-[16px]  bg-white text-black dark:(bg-black text-white) `}
`;

export const StyledTradingCategoriesCardBoxImageWrapper = styled.div`
    ${tw`w-full h-[200px] relative overflow-hidden`}
`;
export const StyleTradingCategoriesCardTextBox = styled.div`
    ${tw`w-full flex flex-row relative shadow-md  rounded-b-[16px] `}
`;
export const StyleTradingCategoriesCardText = styled.span`
    ${tw`justify-center font-semibold text-title1 flex gap-[5px] flex-row  `}
`;

export const StyleTradingCategoriesThumbnailBox = styled.div`
    ${tw`w-[80px] h-[80px] absolute top-[-30px] left-[20px]  border-[6px] border-white bg-no-repeat bg-cover bg-center  dark:border-black rounded-[8px]`}

`;
