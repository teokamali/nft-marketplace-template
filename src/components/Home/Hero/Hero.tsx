import Image from "next/image";
import React from "react";
import { HeroDescriptionWrapper, HeroImage, HeroWrapper } from "./HeroStyles";

type Props = {};

const Hero = (props: Props) => {
    return (
        <HeroWrapper>
            <HeroImage>
                <Image
                    src={"/images/nft-3.png"}
                    alt="nft-image"
                    fill
                    sizes="inherit"
                    style={{ borderRadius: "inherit" }}
                />
            </HeroImage>
            <HeroDescriptionWrapper>
                <h5>NFT Market Place - Explore , By & Sell Digital Items </h5>
                <p>
                    Discover unique NFTs (Digital collectibles) list your items
                    to sell, buy other unique items like visual arts, games,
                    video & music.
                </p>
                <div>
                    <button>Explore</button>
                    <button>Create</button>
                </div>
            </HeroDescriptionWrapper>
        </HeroWrapper>
    );
};

export default Hero;
