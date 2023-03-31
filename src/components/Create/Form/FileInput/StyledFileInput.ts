import styled from "styled-components";
import tw from "twin.macro";

export const StyledFileInputWrapper = styled.div<{ isDraggedIn: boolean }>`
    ${tw`relative transition-all duration-200 border border-dashed rounded-[8px] w-full h-[302px]`}
    ${props => (props.isDraggedIn ? tw`border-purple-4` : tw`border-gray-400`)}
`;
export const StyledImageInputOverlay = styled.div`
    ${tw`absolute top-0 bottom-0 left-0 right-0 cursor-pointer bg-[rgba(0, 0, 0, 0.5)] z-20 transition-opacity duration-200 opacity-0 hover:opacity-100 rounded-[8px] `}
`;
export const StyledFileInput = styled.input`
    ${tw`absolute top-0 bottom-0 left-0 right-0 opacity-0 z-10 cursor-pointer`}
`;

export const StyledImagePreview = styled.img`
    ${tw`absolute top-0 bottom-0 left-0 right-0 z-10 object-fill w-full max-h-[300px] rounded-[8px]`}
`;
export const StyledFilePlaceHolderWrapper = styled.div`
    ${tw`text-[rgb(204, 204, 204)] absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-2`}
`;
export const StyledDeleteIconWrapper = styled.div`
    ${tw`text-[rgb(204, 204, 204)] inline absolute top-0 right-0 cursor-pointer`}
`;
export const StyledImagePreviewWrapper = styled.div`
    ${tw`relative border border-dashed border-gray-400 rounded-[8px] w-full h-[302px]`}
`;
export const StyledPreviewFileWrapper = styled.div`
    ${tw`relative border border-dashed border-gray-400 rounded-[8px]`}
`;
export const StyledAudioPreviewWrapper = styled.div`
    ${tw`flex flex-col justify-center items-center p-4 gap-3`}
`;
export const StyledVideoPreviewWrapper = styled.div`
    ${tw`flex flex-col justify-center items-center p-4 gap-3`}
`;
export const VideoElement = styled.video`
    ${tw`w-[250px] h-[250px] object-fill`}
`;
export const StyledFilePlaceHolderText = styled.span`
    ${tw`text-[13px] text-center`}
`;
export const StyledSVGWrapper = styled.div`
    ${tw`max-w-[128px] max-h-[128px] `}
`;
export const StyledAddButton = styled.div`
    ${tw`max-w-[100px]`}
`