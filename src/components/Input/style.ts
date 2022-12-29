import styled from "styled-components";
import tw from "twin.macro";

export const InputWrapper = styled.div`
    ${tw`w-full flex flex-col relative`}
`;
export const TextInput = styled.input`
    ${tw`px-4 py-3 outline-none border border-[#ccc] text-[#212121] bg-[#FAFAFA] rounded-[8px] `}
`;
export const InputError = styled.span`
    ${tw`absolute bottom-[-20px] right-3 text-[11px] `}
`;
