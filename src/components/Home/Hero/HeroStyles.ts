import styled from "styled-components";
import tw from "twin.macro";

export const HeroWrapper = styled.div`
    ${tw`flex flex-col items-center sm:(w-full px-36) xl:(flex-row-reverse justify-evenly items-center gap-8) `}
`;
export const HeroFigureMobile = styled.figure`
    ${tw`w-[286px] h-[440px] relative rounded-[11px] sm:(hidden invisible)`}
`;
export const HeroImageMobile = styled.img`
    ${tw``}
`;

export const HeroFigureDesktop = styled.figure`
    ${tw`relative rounded-[11px] hidden sm:(block) xl:(w-[50%])`}
    box-shadow: 
        inset 0px 30px 30px -10px #000,
        inset 0px -30px 30px -10px #000;
`;

export const HeroImageDesktop = styled.img`
    ${tw`min-w-[300px] object-cover`}
    box-shadow: 
        inset 0px 30px 30px -10px #000,
        inset 0px -30px 30px -10px #000;
`;
export const HeroDescriptionWrapper = styled.div`
    ${tw`max-w-[286px] pt-[27px] flex flex-col items-start gap-2.5 sm:max-w-max xl:(w-[50%] max-w-max ) xl:before:(content-["NFTMP"] text-purple-7 ) `}
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
