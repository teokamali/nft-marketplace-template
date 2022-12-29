import { formatMessage } from "@formatjs/intl";
import CollectionBoxIcon from "public/Icon/CollectionBoxIcon";
import OnSaleIcon from "public/Icon/OnSaleIcon";
import UploadNFTIcon from "public/Icon/UploadNFTIcon";
import WalletIcon from "public/Icon/WalletIcon";
import React from "react";
import { useIntl } from "react-intl";
import messages from "./messages";
import {
    FeatureBoxDescription,
    FeatureBoxIconWrapper,
    FeatureBoxItemWrapper,
    FeatureBoxTitle,
    FeatureBoxWrapper,
} from "./StyledFeatureBox";

function FeatureBox() {
    const { formatMessage } = useIntl();
    return (
        <FeatureBoxWrapper>
            <FeatureBoxItemWrapper>
                <FeatureBoxIconWrapper>
                    <WalletIcon />
                </FeatureBoxIconWrapper>
                <FeatureBoxTitle>
                    {formatMessage({ ...messages.SET_UP_YOUR_WALLET })}
                </FeatureBoxTitle>
                <FeatureBoxDescription>
                    {formatMessage({
                        ...messages.SET_UP_YOUR_WALLET_DESCRIPTION,
                    })}
                </FeatureBoxDescription>
            </FeatureBoxItemWrapper>
            <FeatureBoxItemWrapper>
                <FeatureBoxIconWrapper>
                    <CollectionBoxIcon />
                </FeatureBoxIconWrapper>
                <FeatureBoxTitle>
                    {formatMessage({ ...messages.CREATE_YOUR_COLLECTION })}
                </FeatureBoxTitle>
                <FeatureBoxDescription>
                    {formatMessage({
                        ...messages.CREATE_YOUR_COLLECTION_DESCRIPTION,
                    })}
                </FeatureBoxDescription>
            </FeatureBoxItemWrapper>
            <FeatureBoxItemWrapper>
                <FeatureBoxIconWrapper>
                    <UploadNFTIcon />
                </FeatureBoxIconWrapper>
                <FeatureBoxTitle>
                    {formatMessage({ ...messages.ADD_YOUR_NFTS })}
                </FeatureBoxTitle>
                <FeatureBoxDescription>
                    {formatMessage({ ...messages.ADD_YOUR_NFTS_DESCRIPTION })}
                </FeatureBoxDescription>
            </FeatureBoxItemWrapper>
            <FeatureBoxItemWrapper>
                <FeatureBoxIconWrapper>
                    <OnSaleIcon />
                </FeatureBoxIconWrapper>
                <FeatureBoxTitle>
                    {formatMessage({ ...messages.LIST_THEM_FOR_SALE })}
                </FeatureBoxTitle>
                <FeatureBoxDescription>
                    {formatMessage({
                        ...messages.LIST_THEM_FOR_SALE_DESCRIPTION,
                    })}
                </FeatureBoxDescription>
            </FeatureBoxItemWrapper>
        </FeatureBoxWrapper>
    );
}

export default FeatureBox;
