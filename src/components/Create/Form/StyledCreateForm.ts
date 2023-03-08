import styled from "styled-components";
import tw from "twin.macro";

export const StyledFormWrapper = styled.form`
    ${tw`max-w-3xl mx-auto flex flex-col gap-7`}
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
    ${tw`w-[120px] flex flex-col items-center p-3 overflow-hidden border border-purple-2 bg-purple-9 rounded-[8px] gap-2`}
`;
export const StyledPropertyText = styled.span`
    ${tw`text-black max-w-[90%] mx-auto overflow-hidden text-[13px]`}
    text-overflow:ellipsis;
`;
