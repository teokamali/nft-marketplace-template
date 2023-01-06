import { defineMessages } from "react-intl";

export const scope = "app.HomePage";

export default defineMessages({
    RANKING_TABLE: {
        id: `${scope}.RANKING_TABLE`,
        defaultMessage: "Ranking Table",
    },
    COLLECTIONS: {
        id: `${scope}.COLLECTIONS`,
        defaultMessage: "Collections",
    },
    VOLUME: {
        id: `${scope}.VOLUME`,
        defaultMessage: "Volume",
    },
    LAST_24H: {
        id: `${scope}.LAST_24H`,
        defaultMessage: "24H %",
    },
    LAST_7D: {
        id: `${scope}.LAST_7D`,
        defaultMessage: "7D %",
    },
    FLOOR_PRICE: {
        id: `${scope}.FLOOR_PRICE`,
        defaultMessage: "Floor Price",
    },
    OWNER: {
        id: `${scope}.OWNER`,
        defaultMessage: "Owner",
    },
    ITEMS: {
        id: `${scope}.ITEMS`,
        defaultMessage: "Items",
    },
    BUTTON: {
        id: `${scope}.BUTTON`,
        defaultMessage: "Go to Ranking",
    },
});
