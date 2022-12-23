import styled from "styled-components";
import tw from "twin.macro";

export const CardWrapper = styled.div`
    ${tw`w-full relative before:(content-[""] block pt-[135.91%] )`}
`;
export const CarOverLay = styled.div<{ url: string }>`
    background-image: ${props => props.url && `url(${props.url})`};
    ${tw`w-full h-full absolute top-0 left-0 z-10 bg-no-repeat bg-cover`};
    filter: blur(4px);
`;
export const CardContent = styled.div`
    ${tw`w-full h-full absolute top-0 left-0 z-20 px-[50px] py-5 flex flex-col items-start`}
`;

export const CardBadge = styled.span`
    ${tw`bg-white rounded text-black px-5 py-0.5 text-title3 font-bold mb-2.5`}
`;
export const ImageContainer = styled.div`
    ${tw`w-full block pt-[135.38%] relative mb-2`}
`;
export const NftInfoWrapper = styled.div`
    ${tw`w-full flex flex-col items-center`}
`;
export const NftTitle = styled.span`
    ${tw`text-title1 xl:text-[25px] font-bold`}
`;
export const NftDescription = styled.p`
    ${tw`text-[10px] xl:text-title3 font-semibold text-center`}
`;
