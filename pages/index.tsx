import React from "react";
import { Container } from "src/components/Common/Layout/LayoutStyles";
import FeatureBox from "src/components/Home/FeatureBox/FeatureBox";
import Hero from "src/components/Home/Hero/Hero";
import NewsLetter from "src/components/Home/NewsLetter/NewsLetter";
import PopularNfts from "src/components/Home/PopularNfts/PopularNfts";
import RankingTable from "src/components/Home/RankingTable/RankingTable";
import TradingCategories from "src/components/Home/TradingCategories/TradingCategories";

function HomePage() {
    const TradingCategoriesData = [
        {
            id: 1,
            url: "/images/nft-7.png",
            text: "Mortimer Crypto Mystic",
            checked: true
        },
        {
            id: 2,
            url: "/images/nft-8.png",
            text: "Mortimer Crypto Mystic",
        },
        {
            id: 3,
            url: "/images/nft-9.png",
            text: "Mortimer Crypto Mystic",
        },
        {
            id: 4,
            url: "/images/nft-7.png",
            text: "Mortimer Crypto Mystic",
            checked: true
        },
        {
            id: 5,
            url: "/images/nft-8.png",
            text: "Mortimer Crypto Mystic",
        },
        {
            id: 6,
            url: "/images/nft-9.png",
            text: "Mortimer Crypto Mystic",
        },


    ]
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
    const rankingTableData = [
        {
            avatar: "/images/nft-4.png",
            floorPrice: 22,
            isVerified: true,
            name: "Mortimer Crypto Mystic",
            last_24h: "+12.53",
            items: 5457,
            last_7D: "-52.48",
            Owner: 5545465,
            volume: 103200,
        },
        {
            avatar: "/images/nft-4.png",
            floorPrice: 22,
            isVerified: true,
            name: "Mortimer Crypto Mystic",
            last_24h: "+12.53",
            items: 5457,
            last_7D: "-52.48",
            Owner: 5545465,
            volume: 103200,
        },
        {
            avatar: "/images/nft-4.png",
            floorPrice: 22,
            isVerified: true,
            name: "Mortimer Crypto Mystic",
            last_24h: "+12.53",
            items: 5457,
            last_7D: "-52.48",
            Owner: 5545465,
            volume: 103200,
        },
        {
            avatar: "/images/nft-4.png",
            floorPrice: 22,
            isVerified: true,
            name: "Mortimer Crypto Mystic",
            last_24h: "+12.53",
            items: 5457,
            last_7D: "-52.48",
            Owner: 5545465,
            volume: 103200,
        },
        {
            avatar: "/images/nft-4.png",
            floorPrice: 22,
            isVerified: true,
            name: "Mortimer Crypto Mystic",
            last_24h: "+12.53",
            items: 5457,
            last_7D: "-52.48",
            Owner: 5545465,
            volume: 103200,
        },
    ];

    return (
        <div>
            <Container>
                <Hero />
                <PopularNfts data={data} />
                <RankingTable data={rankingTableData} />
                <TradingCategories TradingCategoriesData={TradingCategoriesData} />
                <FeatureBox />
            </Container>
            <NewsLetter />
        </div>
    );
}

export default HomePage;
