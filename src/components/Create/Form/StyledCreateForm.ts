import styled from "styled-components";
import tw from "twin.macro";

export const StyledFormWrapper = styled.form`
    ${tw`max-w-3xl mx-auto flex flex-col gap-7 py-6`}
`;
export const StyledInputWrapper = styled.div`
    ${tw`w-full flex items-center justify-between`}
`;
export const StyledInputTitleAndDescriptionWrapper = styled.div`
    ${tw`flex items-start flex-col gap-2`}
`;
export const StyledPropertiesWrapper = styled.div`
    ${tw`w-full flex items-start flex-col gap-2`}
`;
export const StyledViewPropertiesWrapper = styled.div`
    ${tw`flex items-start gap-2`}
`;
export const StyledProperty = styled.div`
    ${tw`w-[120px] flex flex-col items-center p-3 overflow-hidden border border-purple-2 bg-[rgba(118, 130, 243, 0.5)] rounded-[8px] gap-2`}
`;
export const StyledPropertyText = styled.span`
    ${tw`text-black dark:text-smokeWhite max-w-[90%] mx-auto overflow-hidden text-[13px]`}
    text-overflow:ellipsis;
`;

export const StyledLevelsWrapper = styled.div`
    ${tw`w-full flex items-start flex-col gap-2`}
`;
export const StyledLevelsPreview = styled.div`
    ${tw`w-full flex items-start flex-col gap-2`}
`;
export const StyledLevel = styled.div`
    ${tw`w-full flex flex-col gap-1 bg-[rgba(217, 217, 217, 0.38)] py-1 px-3.5 rounded`}
`;
export const StyledLevelInfo = styled.div`
    ${tw`w-full flex justify-between text-[12px] text-[#212121] dark:text-smokeWhite font-normal`}
`;
export const StyledStat = styled.div`
    ${tw`w-[50%] flex justify-between text-[12px] px-3.5 py-1 rounded bg-[rgba(217, 217, 217, 0.38)]  text-[#212121] dark:text-smokeWhite font-normal`}
`;

export const StyledSwitchableInputsWrapper = styled.div`
    ${tw`w-full flex flex-col items-start gap-1`}
`;
export const StyledSwitchableInputsContent = styled.div`
    ${tw`w-full flex justify-between gap-1`}
`;

export const StyledSwitchableInputsContentTextWrapper = styled.div`
    ${tw`w-full flex flex-col items-start gap-1`}
`;
export const StyledTextArea = styled.textarea`
    ${tw`w-full h-32 rounded p-3 outline-none border bg-white text-black focus:border-purple-6 transition-colors duration-300`}
`;
export const StyledDisabledFreezeMetaDataDescription = styled.p`
    ${tw`w-full text-center bg-gray-300 text-black text-[13px] font-medium rounded p-2`}
`;
export const StyledIconAndInputWrapper = styled.div`
    ${tw`flex items-center gap-2`}
`;
export const StyledIconAndTextWrapper = styled.div`
    ${tw`flex items-center gap-2`}
`;
