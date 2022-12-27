import { defineMessages } from "react-intl";

export const scope = "app.HomePage";

export default defineMessages({
    TITLE: {
        id: `${scope}.TITLE`,
        defaultMessage: "NFT Market Place - Explore , By & Sell Digital Items",
    },
    DESCRIPTION: {
        id: `${scope}.DESCRIPTION`,
        defaultMessage:
            " Discover unique NFTs (Digital collectibles) list your items to sell, buy other unique items like visual arts, games, video & music.",
    },
    EXPLORE: {
        id: `${scope}.EXPLORE`,
        defaultMessage: "Explore",
    },
    CREATE: {
        id: `${scope}.CREATE`,
        defaultMessage: "Create",
    },
});
