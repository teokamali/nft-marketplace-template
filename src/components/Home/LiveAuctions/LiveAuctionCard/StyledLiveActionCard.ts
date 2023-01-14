import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";

export const StyledLiveAuctionsCardWrapper = styled.div`
    ${tw`w-full flex flex-col items-center border-2 border-[#E8E8E8] dark:border-[rgba(249, 249, 249, 0.4)] rounded-[13px]`}
`;
export const StyledLiveAuctionsCardImageWrapper = styled.div`
    ${tw`w-full relative`}
`;
export const StyledImage = styled.img`
    ${tw`w-full rounded-[13px] object-cover`}
    aspect-ratio:1/1;
`;
export const StyledImageBadge = styled.div`
    ${tw`absolute bg-white text-black dark:bg-black dark:text-white flex items-center gap-2 py-2 pr-4 pl-[12px] rounded`}
    left:50%;
    bottom: -16px;
    transform: translateX(-50%);
`;

export const StyledImageBadgeIconWrapper = styled.div`
    ${tw`w-[15px] h-[15px] text-black dark:text-white `}
`;

export const StyledImageBadgeText = styled.span`
    ${tw`text-[12px] font-medium`}
`;
export const StyledLiveAuctionCardContent = styled.div`
    ${tw`pt-4 w-full`}
`;

export const StyledLiveAuctionCardTitle = styled.h6`
    ${tw`font-semibold text-title1 text-center text-black dark:text-white`}
`;
export const StyledLiveAuctionPriceWrapper = styled.div`
    ${tw`w-full flex justify-between items-center px-5 py-4`}
`;
export const StyledPrice = styled.span`
    ${tw`text-base text-black dark:text-white font-normal`}
`;
export const StyledLink = styled(Link)`
    ${tw`font-semibold text-base text-purple-6 dark:text-darkMode-purple-7 `}
`;
export const StyledLiveAuctionCardFooter = styled.div`
    ${tw`w-full flex items-center justify-between p-4 border-t-2 border-[#E8E8E8] dark:border-[rgba(249, 249, 249, 0.4)]`}
`;
export const StyledDetailWrapper = styled.div`
    ${tw`flex items-center gap-[10px] text-[rgba(33, 33, 33, 0.5)] dark:text-[rgba(249, 249, 249, 0.5)]`}
`;
export const StyledIconWrapper = styled.div`
    ${tw`text-current w-6 h-6`}
`;
export const StyledFooterText = styled.span`
    ${tw`text-current`}
`;
