import styled from "styled-components";
import tw from "twin.macro";

export const StyledAddableInputWrapper = styled.div`
    ${tw`flex flex-col items-start gap-4`}
`;

export const StyledAddableInputComponentWrapper = styled.div`
    ${tw`flex flex-col items-start gap-4`}
`;
export const StyledInputWrapper = styled.div`
    ${tw`flex items-center justify-between gap-2`}
`;
export const StyledDeleteItemIcon = styled.button`
    ${tw`px-3 text-base border-r border-gray-400 text-gray-400 rounded absolute top-0 bottom-0`}
`;
export const StyledAddableInputWithDeleteButton = styled.input`
    ${tw`w-full h-full text-[14px] pl-10 py-2 outline-none bg-white text-[rgba(33, 33, 33, 0.6)] rounded border border-gray-300 focus:border-purple-3`}
`;
export const StyledAddableInput = styled.input`
    ${tw`w-full h-full text-[14px] pl-2 py-2 outline-none bg-white text-[rgba(33, 33, 33, 0.6)] rounded border border-gray-300 focus:border-purple-3`}
`;

export const StyledInputContent = styled.div`
    ${tw`flex flex-col items-start`}
`;

export const StyledInputAndDeleteButtonWrapper = styled.div`
    ${tw`relative`}
`;
