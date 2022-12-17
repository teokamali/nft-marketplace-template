import styled from "styled-components";
import tw from "twin.macro";

export const HeroWrapper = styled.div`
    ${tw`relative flex flex-col items-center sm:(w-full px-36) xl:(flex-row-reverse justify-evenly items-center gap-8) `}
`;
export const HeroFigureMobile = styled.figure`
    ${tw`w-[286px] h-[440px] relative rounded-[11px] sm:(hidden invisible)`}
`;
export const HeroImageMobile = styled.img`
    ${tw``}
`;

export const HeroFigureDesktop = styled.figure`
    ${tw`relative rounded-[11px] hidden sm:(block) xl:(w-[50%])`}
`;

export const HeroImageDesktop = styled.img`
    ${tw`min-w-[300px] object-cover`}
`;
export const HeroDescriptionWrapper = styled.div`
    ${tw` relative max-w-[286px] pt-[27px] flex flex-col items-start gap-2.5 sm:max-w-max xl:(w-[50%] max-w-max ) xl:before:(content-["NFTMP"] text-purple-7 absolute top-5 ) `}
`;
export const HeroTitle = styled.h5`
    ${tw`light:text-black dark:text-smokeWhite text-[26px] font-bold  xl:(text-[61px] max-w-[585px]) `}
`;
export const HeroDescription = styled.p`
    ${tw`light:text-black dark:text-smokeWhite`}
`;
export const ButtonsWrapper = styled.div`
    ${tw`light:text-black dark:text-smokeWhite flex items-center gap-2 pl-1`}
`;
export const StyledStarWrapper = styled.div`
    ${tw`absolute hidden xl:block w-full h-full top-0 right-0 left-0 z-10`}
`;
export const StyledStar = styled.span<{
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
}>`
    ${tw`absolute w-6`}
    ${props => props.right && { right: props.right }}
    ${props => props.left && { left: props.left }}
    ${props => props.top && { top: props.top }}
    ${props => props.bottom && { bottom: props.bottom }}
`;
