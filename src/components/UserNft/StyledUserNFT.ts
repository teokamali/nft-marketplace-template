import styled from "styled-components";
import tw from "twin.macro";

export const StyledUserNFTRow = styled.div`
    ${tw`w-full flex justify-between items-stretch`}

`
export const StyledNFTinformationColumn = styled.div`
    ${tw`flex-grow `}
`
export const StyledNFTImage = styled.img`
    ${tw`w-full h-full object-fill max-w-[656px] max-h-[422px]`}
`
export const StyledInformationSection = styled.div`
    ${tw`w-full h-full flex justify-between p-4`}
`
export const StyledNftDetailWrapper = styled.div`
    ${tw`w-[50%] flex flex-col items-start gap-3`}
`
export const StyledNFTTitle = styled.h4`
    ${tw`text-black dark:text-white font-semibold text-title1`}
`
export const StyledNftID = styled.span`
    ${tw`font-normal text-[14px] text-purple-5`}
`

export const StyledOwnerAndViewerWrapper = styled.div`
    ${tw`w-full flex gap-6 text-base text-gray-600 dark:text-smokeWhite`}
`
export const StyledViewWrapper = styled.div`
    ${tw`flex justify-center items-center gap-2`}
`