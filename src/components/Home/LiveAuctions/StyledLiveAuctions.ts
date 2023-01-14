import styled from "styled-components";
import tw from "twin.macro";

export const StyledLiveAuctionSectionWrapper = styled.div`
    ${tw`w-full`}
`;
export const StyledLiveAuctionTitleWrapper = styled.div`
    ${tw`w-[80%] xl:w-[40%] flex flex-col items-center mx-auto mb-12`}
`;
export const StyledTitle = styled.h2`
    ${tw`font-semibold text-[20px] xl:text-[31px] text-black dark:text-white`}
`;
export const StyledDescription = styled.p`
    ${tw`font-light text-title3 xl:text-title1 text-center text-[rgba(33, 33, 33, 0.6)] dark:text-[rgba(249, 249, 249, 0.8)]`}
`;
export const StyledLiveAuctionsWrapper = styled.div`
    ${tw`grid grid-cols-1 gap-3.5 md:(grid-cols-2 gap-7) xl:(grid-cols-4 gap-14)`}
`;
export const StyledLiveAuctionCardWrapper = styled.div`
    ${tw`col-span-1`}
`;
