import styled from "styled-components";
import tw from "twin.macro";

export const SliderWrapper = styled.div`
    ${tw`h-full w-full relative block z-10 `}
`;
export const ButtonNext = styled.div`
    ${tw`w-14 h-14 absolute top-1/2 -right-7 text-white cursor-pointer bg-purple-5 rounded-full z-30`}
    background-image: url(/svg/chervon-right.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 14.82px 24px;
`;
export const ButtonPrev = styled.div`
    ${tw`w-14 h-14 absolute top-1/2 -left-7 text-white cursor-pointer bg-purple-5 rounded-full z-30`}
    background-image: url(/svg/chervon-left.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 14.82px 24px;
`;
