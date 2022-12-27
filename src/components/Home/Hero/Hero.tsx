import Image from "next/image";
import StarIcon from "public/Icon/StarIcon";
import React from "react";
import { useIntl } from "react-intl";
import Button from "src/components/Common/Button/Button";
import { Mobile, ExceptMobile } from "src/utils/BreakPoints";
import {
    ButtonsWrapper,
    HeroDescription,
    HeroDescriptionWrapper,
    HeroFigureDesktop,
    HeroFigureMobile,
    HeroImageDesktop,
    HeroImageMobile,
    HeroTitle,
    HeroWrapper,
    StyledStar,
    StyledStarWrapper,
} from "./HeroStyles";
import messages from "./messages";

type Props = {};

const Hero = () => {
    const { formatMessage } = useIntl();
    return (
        <HeroWrapper>
            {/* stars */}
            <StyledStarWrapper>
                <StyledStar top="9vh" left="45%">
                    <StarIcon />
                </StyledStar>
            </StyledStarWrapper>
            <StyledStarWrapper>
                <StyledStar bottom="5vh" left="40%">
                    <StarIcon />
                </StyledStar>
            </StyledStarWrapper>
            <StyledStarWrapper>
                <StyledStar bottom="-2vh" left="80%">
                    <StarIcon />
                </StyledStar>
            </StyledStarWrapper>
            {/* Elements */}
            <HeroFigureMobile>
                <HeroImageMobile src={"/images/nft-3.png"} alt="nft-image" />
            </HeroFigureMobile>
            <HeroFigureDesktop>
                <HeroImageDesktop
                    src={"/images/desktop-hero.png"}
                    alt="nft-image"
                />
            </HeroFigureDesktop>
            <HeroDescriptionWrapper>
                <HeroTitle>{formatMessage({ ...messages.TITLE })}</HeroTitle>
                <HeroDescription>
                    {formatMessage({ ...messages.DESCRIPTION })}
                </HeroDescription>
                <ButtonsWrapper>
                    <Mobile>
                        <Button variant="normal" size="xs">
                            {formatMessage({ ...messages.EXPLORE })}
                        </Button>
                        <Button variant="outlined" size="xs">
                            {formatMessage({ ...messages.CREATE })}
                        </Button>
                    </Mobile>
                    <ExceptMobile>
                        <Button variant="normal" size="md">
                            {formatMessage({ ...messages.EXPLORE })}
                        </Button>
                        <Button variant="outlined" size="md">
                            {formatMessage({ ...messages.CREATE })}
                        </Button>
                    </ExceptMobile>
                </ButtonsWrapper>
            </HeroDescriptionWrapper>
        </HeroWrapper>
    );
};

export default Hero;
