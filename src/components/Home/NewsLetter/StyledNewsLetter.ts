import styled from "styled-components";
import tw from "twin.macro";

export const NewsLetterWrapper = styled.div`
    ${tw`w-full py-10 flex flex-col items-center gap-4`}
`;
export const NewsLetterTitle = styled.h5`
    ${tw`text-[25px] font-black `}
`;
export const NewsLetterDescription = styled.p`
    ${tw`w-[50%] text-center text-base font-normal`}
`;
export const NewsLetterBlueText = styled.span`
    ${tw`text-base font-normal text-purple-5`}
`;
export const NewsLetterForm = styled.form`
    ${tw`flex w-[50%] items-center justify-center gap-2 `}
`;
