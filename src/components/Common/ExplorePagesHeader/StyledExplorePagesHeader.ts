import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledExplorePagesHeaderWrapper = styled.div`
    ${tw`flex items-start justify-between`}
`;
export const StyledMobileHeaderWrapper = styled.div`
    ${tw`w-full flex items-start justify-between`}
`;
export const StyledMobileExplorePagesHeaderWrapper = styled.div`
    ${tw`flex flex-col items-center`}
`;
export const StyledMainContentWrapper = styled.div`
    ${tw`w-[50%] max-w-[500px] flex flex-col flex-grow items-center gap-2`}
`;
export const StyledMobileMainContentWrapper = styled.div`
    ${tw`w-[100%] p-3 flex flex-col flex-grow items-center gap-2`}
`;
export const StyledMainContentTitle = styled.h2`
    ${tw`text-base sm:text-[31px] font-semibold text-center text-black dark:text-white`}
`;

export const StyledMainContentDescription = styled.p`
    ${tw`text-[14px] sm:text-title1 font-light text-center text-black dark:text-white`}
`;

export const StyledNavigationWrapper = styled.div`
    ${tw`flex flex-col items-center min-w-[80px] sm:min-w-[130px] text-black dark:text-white`}
`;
export const StyledIconWrapper = styled.div`
    ${tw`text-black dark:text-white w-6 h-6`}
`;
export const StyledNavigationLink = styled(Link)`
    ${tw` flex items-center`}
`;
export const StyledNavigationCategoryName = styled.span`
    ${tw`text-[14px] sm:text-title1 font-bold`}
`;
export const StyledButtonInfoText = styled.span`
    ${tw`font-light text-[12px]`}
`;
