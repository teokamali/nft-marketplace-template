import { defineMessages } from "react-intl";

export const scope = "app.HomePage";

export default defineMessages({
    NEXT: {
        id: `${scope}.NEXT`,
        defaultMessage: "next",
    },
    Before: {
        id: `${scope}.Before`,
        defaultMessage: "Before",
    },
    ExploreCategory: {
        id: `${scope}.ExploreCategory`,
        defaultMessage: "Explore {category}",
    },
    ExploreCategoryDescription: {
        id: `${scope}.ExploreCategoryDescription`,
        defaultMessage:
            "An online community of makers, developers, and traders is pushing the art world into new territory.",
    },
});
