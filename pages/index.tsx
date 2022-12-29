import React from "react";
import { Container } from "src/components/Common/Layout/LayoutStyles";
import FeatureBox from "src/components/Home/FeatureBox/FeatureBox";
import Hero from "src/components/Home/Hero/Hero";
import NewsLetter from "src/components/Home/NewsLetter/NewsLetter";
import PopularNfts from "src/components/Home/PopularNfts/PopularNfts";

function HomePage() {
    const data = [
        {
            id: 1,
            url: "/images/nft-1.png",
            title: "NFT Mamad",
            description: "Living NFT’s that respond to value of crypto.",
        },
        {
            id: 2,
            url: "/images/nft-2.png",
            title: "NFT Mamad",
            description: "Living NFT’s that respond to value of crypto.",
        },
        {
            id: 3,
            url: "/images/nft-5.png",
            title: "NFT Mamad",
            description: "Living NFT’s that respond to value of crypto.",
        },
        {
            id: 4,
            url: "/images/nft-6.png",
            title: "NFT Mamad",
            description: "Living NFT’s that respond to value of crypto.",
        },
        {
            id: 5,
            url: "/images/nft-2.png",
            title: "NFT Mamad",
            description: "Living NFT’s that respond to value of crypto.",
        },
        {
            id: 6,
            url: "/images/nft-1.png",
            title: "NFT Mamad",
            description: "Living NFT’s that respond to value of crypto.",
        },
        {
            id: 7,
            url: "/images/nft-6.png",
            title: "NFT Mamad",
            description: "Living NFT’s that respond to value of crypto.",
        },
        {
            id: 8,
            url: "/images/nft-5.png",
            title: "NFT Mamad",
            description: "Living NFT’s that respond to value of crypto.",
        },
    ];
    return (
        <div>
            <Container>
                <Hero />
                <PopularNfts data={data} />
                <FeatureBox />
            </Container>
            <NewsLetter />
        </div>
    );
}

export default HomePage;
