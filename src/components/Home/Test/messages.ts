import { defineMessages } from "react-intl";

export const scope = "app.productPage";

export default defineMessages({
    HELLO_WORLD: {
        id: `${scope}.HELLO_WORLD`,
        defaultMessage: "تست حالت اول",
    },
    TEST: {
        id: `${scope}.TEST`,
        defaultMessage: "تست حالت دوم",
    },

    TESTـWITH_VALUE: {
        id: `${scope}.TESTـWITH_VALUE`,
        defaultMessage: "تست به همراه مقدار داینامیک: {value} تومان",
    },
});
