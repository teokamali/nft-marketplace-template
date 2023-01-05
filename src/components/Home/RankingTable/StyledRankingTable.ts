import styled from "styled-components";
import tw from "twin.macro";

export const StyledRankingTableWrapper = styled.div`
    ${tw`text-black dark:text-white text-center`}
`;
export const StyledRankingTableTitle = styled.h5`
    ${tw`font-semibold text-[31px] p-6`}
`;
export const StyledRankingTable = styled.table`
    ${tw`w-full`}
`;
export const StyledRankingTableThead = styled.thead`
    ${tw`bg-[#E9EBFD] dark:bg-white text-black`}
`;
export const StyledRankingTableBody = styled.tbody`
    ${tw`p-5 text-title1`}
`;
export const StyledRankingTableTheadTH = styled.th`
    ${tw`text-black font-medium py-5 text-title1 text-left`}
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
`;
export const StyledRankingTd = styled.td`
    ${tw`py-4`}
`;

export const StyledRankingNumber = styled.span`
    ${tw`text-title1 font-medium`}
`;

export const StyledRankingCollectionWrapper = styled.div`
    ${tw`flex items-center gap-5`}
`;
export const StyledVerifiedIconWrapper = styled.div`
    ${tw`w-6 h-6`}
`;

export const StyledRankingImage = styled.img`
    ${tw`w-[72px] h-[70px] rounded-full`}
`;
