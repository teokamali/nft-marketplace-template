import styled from "styled-components";
import tw from "twin.macro";

export const StyledTopCollectionsWrapper = styled.div`
    ${tw`w-full text-black dark:text-smokeWhite p-6`}
`;
export const StyledTopCollectionTitleWrapper = styled.div`
    ${tw`flex items-center justify-center gap-1`}
`;
export const StyledTopCollectionSubTitle = styled.h6`
    ${tw`text-[rgba(33, 33, 33, 0.6)] dark:text-[rgba(249, 249, 249, 0.8)] text-title1 font-light text-center`}
`;

export const StyledTopCollectionDropdownWrapper = styled.div`
    ${tw`flex items-center mt-[5px]`}
`;
export const StyledTopCollectionIconWrapper = styled.div`
    ${tw`w-6 h-6 text-purple-6 dark:text-darkMode-purple-7`}
`;
export const StyledTopCollectionMainTitle = styled.h4`
    ${tw`text-[31px] font-semibold drop-shadow-lg shadow-[rgba(0, 0, 0, 0.15)]`}
`;
export const StyledTopCollectionMainSubTitle = styled.span`
    ${tw`text-[25px] text-purple-6 font-medium dark:text-darkMode-purple-7`}
`;
export const StyledTopCollectionContent = styled.div`
    ${tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-14`}
`;
