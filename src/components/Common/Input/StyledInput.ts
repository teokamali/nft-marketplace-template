import styled from "styled-components";
import tw from "twin.macro";

export const InputWrapper = styled.div`
    ${tw`w-full max-w-[513px] max-h-10 flex flex-col relative`}
`;
export const TextInput = styled.input`
    ${tw`w-full h-full text-[14px] px-6 py-2 outline-none bg-white text-black rounded-[8px]`}
`;
export const InputError = styled.span`
    ${tw`absolute bottom-[-30px] left-3 text-title3 text-red-600`}
`;
