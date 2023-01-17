import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ExplorePagesHeader from "src/components/Common/ExplorePagesHeader/ExplorePagesHeader";
import { Category } from "src/types/types";

const Categories: Category[] = [
    { name: "Art", slug: "art" },
    { name: "Photography", slug: "photography" },
    { name: "Music", slug: "music" },
    { name: "Gif", slug: "Gif" },
];
const ExploreCategory = () => {
    return (
        <div>
            <ExplorePagesHeader categories={Categories} />
            ExploreCategory
        </div>
    );
};

export default ExploreCategory;
