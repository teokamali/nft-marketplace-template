import styled from "styled-components";
import tw from "twin.macro";

export const StyledTopCollectionItemWrapper = styled.div`
    ${tw`w-[80%] col-span-1 flex items-center p-2 gap-2 border-b border-[rgba(0, 0, 0, 0.1)] dark:border-[rgba(249, 249, 249, 0.8)] text-center`}
`;
export const StyledTopCollectionItemRank = styled.span`
    ${tw`text-[11px] text-black dark:text-smokeWhite font-bold`}
`;

export const StyledTopCollectionItemImage = styled.img`
    ${tw`w-[50px] h-[50px] rounded-full`}
`;
export const StyledTopCollectionItemInfoWrapper = styled.div`
    ${tw`flex flex-col items-start gap-1`}
`;
export const StyledTopCollectionName = styled.span`
    ${tw`text-base font-medium`}
`;

export const StyledTopCollectionFloorPriceWrapper = styled.div`
    ${tw`text-base font-light`}
`;
export const StyledTopCollectionFloorPriceTitle = styled.span`
    ${tw`text-base font-light`}
`;
export const StyledTopCollectionFloorPrice = styled.span`
    ${tw`text-[12px] font-medium`}
`;
export const StyledTopCollectionItemPumpAndItemsWrapper = styled.div`
    ${tw`flex flex-col items-center gap-3`}
`;
export const StyledPumpOrDumpWrapper = styled.div`
    ${tw`text-[12px] font-medium`}
`;
export const StyledTopCollectionItemCount = styled.span`
    ${tw`text-[12px] font-light text-black dark:text-smokeWhite`}
`;
