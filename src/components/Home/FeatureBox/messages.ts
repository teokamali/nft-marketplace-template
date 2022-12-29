import { defineMessages } from "react-intl";

export const scope = "app.HomePage";

export default defineMessages({
    SET_UP_YOUR_WALLET: {
        id: `${scope}.SET_UP_YOUR_WALLET`,
        defaultMessage: "Set up your wallet",
    },
    SET_UP_YOUR_WALLET_DESCRIPTION: {
        id: `${scope}.SET_UP_YOUR_WALLET_DESCRIPTION`,
        defaultMessage:
            "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.",
    },
    CREATE_YOUR_COLLECTION: {
        id: `${scope}.CREATE_YOUR_COLLECTION`,
        defaultMessage: "Create your collection",
    },
    CREATE_YOUR_COLLECTION_DESCRIPTION: {
        id: `${scope}.CREATE_YOUR_COLLECTION_DESCRIPTION`,
        defaultMessage:
            "Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
    },
    ADD_YOUR_NFTS: {
        id: `${scope}.ADD_YOUR_NFTS`,
        defaultMessage: "Add your NFTs",
    },
    ADD_YOUR_NFTS_DESCRIPTION: {
        id: `${scope}.ADD_YOUR_NFTS_DESCRIPTION`,
        defaultMessage:
            "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.",
    },
    LIST_THEM_FOR_SALE: {
        id: `${scope}.LIST_THEM_FOR_SALE`,
        defaultMessage: "List them for sale",
    },
    LIST_THEM_FOR_SALE_DESCRIPTION: {
        id: `${scope}.LIST_THEM_FOR_SALE_DESCRIPTION`,
        defaultMessage:
            "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell.",
    },
});
