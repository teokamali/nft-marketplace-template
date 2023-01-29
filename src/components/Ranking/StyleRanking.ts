import styled, { css } from "styled-components";
import tw from "twin.macro";

export const StyleRankingWrapper = styled.div`
    ${tw`flex flex-col  mt-[10px]  w-full max-w-[1640px] px-9 mx-auto relative`}
`;
export const StyleRankingHeaderSection = styled.div`
    ${tw`flex flex-row justify-between   w-full  `}
`;
export const StyleRankingFilterButton = styled.button`
    ${tw`flex flex-row  items-center h-[50px] z-10 gap-[10px] px-[13px]  rounded-[8px] bg-[#E7E7E7] light:text-black dark:text-[#fff] text-title2`}
`;
export const StyleRankingHeaderTitleSection = styled.div`
    ${tw`flex flex-col  items-center gap-[10px] `}
`;
export const StyleRankingHeaderTitleText = styled.h4`
    ${tw`font-semibold light:text-black dark:text-[#fff] `}
`;
export const StyleRankingHeaderTitleTextDesc = styled.span`
    ${tw` text-black  opacity-30 text-title2  `}
`;

// export const StyledRankingTable = styled.table`
//     ${tw`w-full mb-[20px]`}
// `;
export const StyledRankingTable = styled.table<{
    isShowFilter: boolean;
}>`
    ${tw`w-full mb-[20px]`}
    ${props => props.isShowFilter && "filter: blur(12px)"}
`;
export const StyledRankingTableThead = styled.thead`
    ${tw`border-b-[1px] border-[#0500FF] dark:bg-white text-black`}
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

export const StyledPumpOrDumpWrapper = styled.div`
    ${tw`font-medium text-[8px] md:text-base lg:text-title1 inline`}
`;
export const StyleRankingFilterSection = styled.div`
    ${tw`flex flex-col gap-[12px] absolute top-[60px] left-[35px] py-[25px] px-[25px] bg-[rgba(33, 33, 33, 0.2)] rounded-[15px]`}
`;
export const StyleRankingFilterItemBox = styled.div`
    ${tw`flex flex-row justify-between items-center gap-[70px]  py-[5px] px-[10px]  rounded-[10px] bg-white`}
`;
