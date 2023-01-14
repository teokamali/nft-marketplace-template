import styled from "styled-components";
import tw from "twin.macro";

export const StyledTopCollectionsWrapper = styled.div`
    ${tw`w-full text-black dark:text-smokeWhite p-6 mt-6`}
`;
export const StyledTopCollectionTitleWrapper = styled.div`
    ${tw`flex items-center justify-center gap-1`}
`;
export const StyledTopCollectionSubTitle = styled.h6`
    ${tw`text-[rgba(33, 33, 33, 0.6)] dark:text-[rgba(249, 249, 249, 0.8)] text-title1 font-light text-center`}
`;

export const StyledTopCollectionIconWrapper = styled.div`
    ${tw`w-6 h-6 text-purple-6 dark:text-darkMode-purple-7`}
`;
export const StyledTopCollectionMainTitle = styled.h4`
    ${tw`text-base md:text-[31px] font-semibold drop-shadow-lg shadow-[rgba(0, 0, 0, 0.15)]`}
`;
export const StyledTopCollectionDropdownWrapper = styled.div`
    ${tw`relative inline-block mt-[5px]`}
`;
export const StyledTopCollectionDropdownButton = styled.button`
    ${tw`text-[14px] md:text-[25px] text-purple-6 font-medium dark:text-darkMode-purple-7 flex items-center gap-1`}
`;
export const StyledTopCollectionDropdownList = styled.ul<{ show: boolean }>`
    ${tw`bg-white text-black transition-all ease-linear duration-75 invisible opacity-0 shadow-md absolute w-full md:translate-x-[90%] transform-gpu rounded-[10px]`}
    ${props =>
        props.show && tw`visible opacity-100`} /* transform:translateX(90%) */
`;

export const StyledTopCollectionDropdownItem = styled.li`
    ${tw`cursor-pointer text-[12px] md:text-base font-normal p-2 md:p-4`}
`;
export const StyledTopCollectionContent = styled.div`
    ${tw`grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 py-14`}
`;
