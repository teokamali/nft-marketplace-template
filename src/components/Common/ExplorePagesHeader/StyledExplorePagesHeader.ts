import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledExplorePagesHeaderWrapper = styled.div`
    ${tw`flex items-start justify-between`}
`;
export const StyledMainContentWrapper = styled.div`
    ${tw`w-[50%] max-w-[500px] flex flex-col flex-grow items-center gap-2`}
`;
export const StyledMainContentTitle = styled.h2`
    ${tw`text-[31px] font-semibold text-center text-black dark:text-white`}
`;

export const StyledMainContentDescription = styled.p`
    ${tw`text-title1 font-light text-justify text-black dark:text-white`}
`;

export const StyledNavigationWrapper = styled.div`
    ${tw`flex flex-col items-center min-w-[130px] text-black dark:text-white`}
`;
export const StyledIconWrapper = styled.div`
    ${tw`text-current w-6 h-6`}
`;
export const StyledNavigationLink = styled(Link)`
    ${tw` flex items-center`}
`;
export const StyledNavigationCategoryName = styled.span`
    ${tw`text-title1 font-bold`}
`;
export const StyledButtonInfoText = styled.span`
    ${tw`font-light text-[12px]`}
`;
