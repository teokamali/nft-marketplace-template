import styled from "styled-components";
import tw from "twin.macro";

export const NewsLetterWrapper = styled.div`
    ${tw`w-full py-10 mt-32 bg-[#E5EAF0] dark:bg-black flex flex-col items-center gap-4`}
`;
export const NewsLetterTitle = styled.h5`
    ${tw`text-[25px] font-black text-black dark:text-white `}
`;
export const NewsLetterDescription = styled.p`
    ${tw`w-full md:w-[40%] text-center text-base font-normal text-black dark:text-white`}
`;
export const NewsLetterBlueText = styled.span`
    ${tw`text-base font-normal text-purple-5`}
`;
export const NewsLetterForm = styled.form`
    ${tw`flex flex-col w-[80%] gap-4 items-center md:(flex-row items-stretch justify-center gap-2)`}
`;
