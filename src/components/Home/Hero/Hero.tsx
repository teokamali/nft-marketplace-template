import Image from "next/image";
import StarIcon from "public/Icon/StarIcon";
import React from "react";
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

type Props = {};

const Hero = () => {
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
                <HeroTitle>
                    NFT Market Place - Explore , By & Sell Digital Items
                </HeroTitle>
                <HeroDescription>
                    Discover unique NFTs (Digital collectibles) list your items
                    to sell, buy other unique items like visual arts, games,
                    video & music.
                </HeroDescription>
                <ButtonsWrapper>
                    <Mobile>
                        <Button variant="normal" size="xs">
                            Explore
                        </Button>
                        <Button variant="outlined" size="xs">
                            Create
                        </Button>
                    </Mobile>
                    <ExceptMobile>
                        <Button variant="normal" size="md">
                            Explore
                        </Button>
                        <Button variant="outlined" size="md">
                            Create
                        </Button>
                    </ExceptMobile>
                </ButtonsWrapper>
            </HeroDescriptionWrapper>
        </HeroWrapper>
    );
};

export default Hero;
