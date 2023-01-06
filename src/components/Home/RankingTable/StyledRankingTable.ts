import styled from "styled-components";
import tw from "twin.macro";

export const StyledRankingTableWrapper = styled.div`
    ${tw`text-black dark:text-white text-center `}
`;
export const StyledRankingTableTitle = styled.h5`
    ${tw`font-semibold text-[1rem] lg:text-[1.9375rem] p-6`}
`;
export const StyledRankingTable = styled.table`
    ${tw`w-full`}
`;
export const StyledRankingTableThead = styled.thead`
    ${tw`bg-[#E9EBFD] dark:bg-white text-black`}
`;
export const StyledRankingTableBody = styled.tbody`
    ${tw`p-5 text-[8px] md:text-base lg:text-title1`}
`;
export const StyledRankingTableTheadTH = styled.th`
    ${tw`text-black font-medium py-5 text-[0.5rem] md:text-base lg:text-title1 text-left`}
    &:first-child {
        padding-left: 20px;
        padding-right: 0px;
        border-radius: 10px 0 0 10px;
    }
    &:last-child {
        padding-right: 20px;
        padding-left: 0px;
        border-radius: 0 10px 10px 0;
    }
`;
export const StyledRankingTableRow = styled.tr`
    ${tw`border-b border-[rgba(0, 0, 0, 0.2)] text-left`}
    &:last-child {
        border: 0;
    }
`;
export const StyledRankingTd = styled.td`
    ${tw`py-4`}
`;
export const StyledRankingNormalTd = styled.td`
    ${tw`py-4 text-[8px] md:text-base lg:text-title1 text-[rgba(33, 33, 33, 0.8)]  dark:text-[rgba(249, 249, 249, 0.8)]`}
`;

export const StyledRankingNumber = styled.span`
    ${tw`text-base lg:text-title1 font-medium`}
`;
export const StyledRankingCollectionName = styled.span`
    ${tw`text-[6px] md:text-base lg:text-title1 text-center font-semibold`}
`;

export const StyledRankingCollectionWrapper = styled.div`
    ${tw`flex flex-col gap-1 md:(flex-row gap-5 ) items-center`}
`;
export const StyledVerifiedIconWrapper = styled.div`
    ${tw`min-w-[10px] min-h-[10px] w-3 h-3 md:(w-6 h-6)`}
`;

export const StyledRankingImage = styled.img`
    ${tw`w-[30px] h-[30px] lg:w-[72px] lg:h-[70px] rounded-full`}
`;
export const StyledRankingTableButton = styled.div`
    ${tw`mt-6 lg:mt-24`}
`;
