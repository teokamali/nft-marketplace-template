import { defineMessages } from "react-intl";

export const scope = "app.HomePage";

export default defineMessages({
    EXPLORE_COLLECTIONS: {
        id: `${scope}.EXPLORE_COLLECTIONS`,
        defaultMessage: "Explore Collections",
    },
    HEADER_DESC: {
        id: `${scope}.HEADER_DESC`,
        defaultMessage: `Discover unique NFTs (Digital collectibles) list your items to sell, buy 
        other unique items like visual arts, games, video & music.`,
    },
    NUMBER_COLLECTIONS: {
        id: `${scope}.NUMBER_COLLECTIONS`,
        defaultMessage: "{number} Collections",
    },
});
