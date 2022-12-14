import styled from "styled-components";
import tw from "twin.macro";

export const HeroWrapper = styled.div`
    ${tw`flex flex-col items-center `}
`;
export const HeroImage = styled.figure`
    ${tw`w-[286px] h-[440px] relative rounded-[11px]`}
`;
export const HeroDescriptionWrapper = styled.div`
    ${tw`max-w-[286px] mt-7`}
`;
