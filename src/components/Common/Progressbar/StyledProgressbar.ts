import styled from "styled-components";
import tw from "twin.macro";

export const StyledProgressBarWrapper = styled.div`
    ${tw`relative w-full h-3 bg-[#D9D9D9] rounded-full`}
`;
export const StyledProgress = styled.span<{ width: number }>`
    ${tw`absolute top-0 bottom-0 bg-purple-5 rounded-full`}
    ${props => (props.width ? `width: ${props.width}%` : "width: 0px")}
`;
