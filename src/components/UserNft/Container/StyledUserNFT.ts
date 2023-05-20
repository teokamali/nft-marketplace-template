import styled from "styled-components";
import tw from "twin.macro";

export const StyledUserNFTContainer = styled.div`
    ${tw`flex flex-col gap-5`}
`

export const StyledUserNFTRow = styled.div`
    ${tw`w-full flex flex-col md:flex-row justify-between items-stretch gap-14`}

`
export const StyledNFTColumn = styled.div`
    ${tw`w-full md:w-1/2 `}
`

export const StyledInformationSection = styled.div`
    ${tw`w-full flex flex-col md:flex-row justify-between gap-1.5 py-4`}
`
export const StyledNftDetailWrapper = styled.div`
    ${tw`w-full md:w-[50%] flex flex-col items-start gap-3`}
`
export const StyledNFTTitle = styled.h4`
    ${tw`text-black dark:text-white font-semibold text-title1`}
`
export const StyledNftID = styled.span`
    ${tw`font-normal text-[14px] text-purple-5`}
`

export const StyledOwnerAndViewerWrapper = styled.div`
    ${tw`w-full flex gap-6 text-gray-600 dark:text-smokeWhite`}
`
export const StyledOwnerText = styled.span`
    ${tw`text-[11px] lg:text-base`}
`
export const StyledViewIconWrapper = styled.div`
    ${tw`w-3 h-3 lg:(w-6 h-6)`}
`

export const StyledViewWrapper = styled.div`
    ${tw`flex justify-center items-center gap-2`}
`
export const StyledNFTDetailsButtonWrapper = styled.div`
    ${tw`w-full flex items-center justify-between gap-2`}

`
export const StyledShareAndButtonsWrapper = styled.div`
    ${tw`flex flex-col items-center gap-2`}

`
export const StyledMobileShareBoxWrapper = styled.div`
    ${tw`w-[90%] fixed left-[50%] bottom-1 z-10`}
    transform:translateX(-50%);
`
export const StyledAccordionGroupWrapper = styled.div`
    ${tw`w-full border border-gray-300/50 rounded-[8px]`}
`
export const StyledAccordionGroupItem = styled.div`
    ${tw`border-b border-gray-300/50 `}
`

export const StyledAccordionContent = styled.div`
    ${tw`w-full p-2 text-black dark:text-white`}
`
export const StyledNFTDescription = styled.p`
    ${tw`text-gray-300`}
`
export const StyledAccordionTitle = styled.div`
    ${tw`p-2 text-black dark:text-white flex items-center gap-2`}
`
export const StyledButtonContentWrapper = styled.div`
    ${tw`w-full flex justify-between items-center text-black dark:text-white`}
`
export const StyledChartDescriptionWrapper = styled.div`
    ${tw`flex justify-between items-center gap-4 px-10 text-black dark:text-white`}
`
export const StyledChartDescriptionItem = styled.div`
    ${tw`w-full  md:w-1/2 text-black`}
`
export const StyledCartAverageContentWrapper = styled.div`
    ${tw`mt-1.5 flex flex-col justify-center text-black dark:text-white`}
`
export const StyledAverageText = styled.span`
    ${tw`text-purple-5 dark:text-purple-5`}

`
export const StyledOffersAndListingTableWrapper = styled.div`
    ${tw`flex flex-col gap-8`}

`
export const StyledActivityContentWrapper = styled.div`
    ${tw`flex flex-col gap-3 text-black dark:text-white`}

`
export const StyledMoreItemsContentWrapper = styled.div`
    ${tw`flex items-center gap-2 text-black dark:text-white`}

`