import styled from "styled-components";
import tw from "twin.macro";

export const StyledCheckBoxToggleSliderWrapper = styled.div<{
    disabled: boolean;
}>`
    ${tw`relative w-[50px] h-[25px] bg-[#EBEBEB] rounded-full`}
    ${props => props.disabled && tw`opacity-50 pointer-events-none`}
`;
export const StyledCheckBoxInput = styled.input`
    ${tw`absolute top-0 bottom-0 left-0 right-0 z-10 opacity-0 cursor-pointer `}
`;
export const StyledToggleViewer = styled.span<{ isChecked: boolean }>`
    ${tw`absolute left-1 top-[50%] w-[20px] h-[20px] transition-all duration-500 rounded-full bg-purple-7 `}
    transform:translateY(-50%);
    ${props => props.isChecked && tw`left-[calc(100% - 25px)] bg-purple-5`}
`;
