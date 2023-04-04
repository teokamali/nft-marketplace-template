import { defineMessages } from "react-intl";

export const scope = "app.HomePage";

export default defineMessages({

    PRICE: {
        id: `${scope}.PRICE`,
        defaultMessage: "Price",
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
