import { defineMessages } from "react-intl";

export const scope = "app.HomePage";

export default defineMessages({
    LIVE_AUCTIONS: {
        id: `${scope}.LIVE_AUCTIONS`,
        defaultMessage: "Live Auctions",
    },
    LIVE_AUCTIONS_TITLE_DESC: {
        id: `${scope}.LIVE_AUCTIONS_TITLE_DESC`,
        defaultMessage: `Explore the newly listed remarkable NFTs on NFTLand, choose
        the best one, and place your bid to purchase it.`,
    },
    TIME_LEFT: {
        id: `${scope}.TIME_LEFT`,
        defaultMessage: " {timeLeft} minutes left",
    },
    PRICE: {
        id: `${scope}.PRICE`,
        defaultMessage: " Price : {price} ETH",
    },
    PLACE_BID: {
        id: `${scope}.PLACE_BID`,
        defaultMessage: " Place a bid",
    },
});
