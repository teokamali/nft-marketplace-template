import { defineMessages } from "react-intl";

export const scope = "app.HomePage";

export default defineMessages({
    EXPLORE_COLLECTIONS: {
        id: `${scope}.EXPLORE_COLLECTIONS`,
        defaultMessage: "Explore Collections",
    },
    PRICE: {
        id: `${scope}.PRICE`,
        defaultMessage: "Price",
    },
    USD: {
        id: `${scope}.USD`,
        defaultMessage: "USD",
    },
    MIN: {
        id: `${scope}.MIN`,
        defaultMessage: "Min",
    },
    TO: {
        id: `${scope}.TO`,
        defaultMessage: "To",
    },
    PRICE_FORMAT: {
        id: `${scope}.PRICE_FORMAT`,
        defaultMessage: "Price: {price} Eth",
    },
    LAST_UPDATE: {
        id: `${scope}.LAST_UPDATE   `,
        defaultMessage: "Last Update {date} Days Ago",
    },
});
