import styled from "styled-components";
import tw from "twin.macro";

export const StyledUserNFTRow = styled.div`
    ${tw`w-full flex flex-col md:flex-row justify-between items-stretch`}

`
export const StyledNFTinformationColumn = styled.div`
    ${tw`flex-grow `}
`

export const StyledInformationSection = styled.div`
    ${tw`w-full h-full flex flex-col md:flex-row justify-between gap-1.5 p-4`}
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
    transform:translateX(-50%)
`