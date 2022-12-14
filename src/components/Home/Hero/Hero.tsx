import Image from "next/image";
import React from "react";
import Button from "src/components/Common/Button/Button";
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
} from "./HeroStyles";

type Props = {};

const Hero = (props: Props) => {
    return (
        <HeroWrapper>
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
                    <Button variant="normal">Explore</Button>
                    <Button variant="outlined">Create</Button>
                </ButtonsWrapper>
            </HeroDescriptionWrapper>
        </HeroWrapper>
    );
};

export default Hero;
