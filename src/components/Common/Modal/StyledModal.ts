import styled from "styled-components";
import tw from "twin.macro";

export const StyledModalOverLay = styled.div`
    ${tw`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0, 0, 0, 0.5)] z-50 `}
`;
export const StyledModal = styled.div`
    ${tw` bg-white shadow-[rgba(99, 99, 99, 0.2) 0px 2px 8px 0px] rounded`}
`;
export const StyledSlideDown = styled.div`
    ${tw`fixed w-full flex justify-center`}
`;

export const StyledModalHeader = styled.div`
    ${tw`w-full bg-white p-2 text-[1.5rem] rounded-[inherit]`}
`;
export const StyledCloseButton = styled.button`
    ${tw`text-black hover:border-gray-500  `}
`;
export const StyledModalHeaderWrapper = styled.div`
    ${tw`flex justify-between items-center `}
`;

export const StyledModalContent = styled.div`
    ${tw`text-black`}
`;
export const StyledHeaderTitle = styled.h5`
    ${tw`text-black text-title1`}
`;
