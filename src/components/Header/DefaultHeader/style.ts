import styled, { css } from "styled-components";
import tw from "twin.macro";

export const Section = styled.div`
    ${tw`w-screen  bg-[#ccc] flex flex-row items-center  h-[113px] px-[50px] `}
`;
export const Title = styled.h6`
    ${tw`font-bold`}
`;
export const SearchBox = styled.form`
    ${tw`w-[504px] h-[40px] mx-[50px]  `}
`;
export const MenuSection = styled.div`
    ${tw`flex flex-row gap-[24px] text-title1  `}
`;
