import styled from "styled-components";
import tw from "twin.macro";

export const StyledInputWrapper = styled.div`
    ${tw`w-full flex flex-col gap-1.5 relative`}
`;
export const TextInput = styled.input`
    ${tw`w-full h-full text-[14px] px-3 py-2 outline-none bg-white text-[rgba(33, 33, 33, 0.6)] rounded-[8px]`}
`;
export const InputError = styled.span`
    ${tw`absolute bottom-[-25px] left-0 text-title3 text-red-600`}
`;
export const StyledInputLabel = styled.label`
    ${tw`font-bold  text-black dark:text-white text-title1`}
`;
export const StyledInputDescription = styled.label`
    ${tw`font-light text-black dark:text-white text-[16px] opacity-50`}
`;
