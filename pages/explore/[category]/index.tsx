import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ExplorePagesHeader from "src/components/Common/ExplorePagesHeader/ExplorePagesHeader";
import { Container } from "src/components/Common/Layout/LayoutStyles";
import TrendingCard from "src/components/Common/TrendingCard/TrendingCard";
import { Category } from "src/types/types";
import { ExploreCategoryWrapper } from "./StyledExploreCategoryPage";

const Categories: Category[] = [
    { name: "Art", slug: "art" },
    { name: "Photography", slug: "photography" },
    { name: "Music", slug: "music" },
    { name: "Gif", slug: "gif" },
];
const ExploreCategory = () => {
    const items = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ];
    return (
        <Container>
            <ExplorePagesHeader categories={Categories} />
            <ExploreCategoryWrapper>
                {items.map((item, i) => (
                    <TrendingCard
                        key={i}
                        data={{
                            id: 1,
                            url: "/images/nft-7.png",
                            text: "Mortimer Crypto Mystic",
                            checked: true,
                        }}
                    />
                ))}
            </ExploreCategoryWrapper>
        </Container>
    );
};

export default ExploreCategory;
