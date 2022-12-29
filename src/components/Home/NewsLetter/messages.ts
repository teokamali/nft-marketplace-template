import { defineMessages } from "react-intl";

export const scope = "app.HomePage";

export default defineMessages({
    TITLE: {
        id: `${scope}.TITLE`,
        defaultMessage: "Stay in the loop",
    },
    DESCRIPTION: {
        id: `${scope}.DESCRIPTION`,
        defaultMessage:
            "Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating",
    },
    INPUT_PLACEHOLDER: {
        id: `${scope}.INPUT_PLACEHOLDER`,
        defaultMessage: "Please Enter Your Email...",
    },
    SIGN_UP: {
        id: `${scope}.SIGN_UP`,
        defaultMessage: "Sign Up",
    },
});
