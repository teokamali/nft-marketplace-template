import CollectionBoxIcon from "public/Icon/CollectionBoxIcon";
import OnSaleIcon from "public/Icon/OnSaleIcon";
import UploadNFTIcon from "public/Icon/UploadNFTIcon";
import WalletIcon from "public/Icon/WalletIcon";
import React from "react";
import {
    FeatureBoxDescription,
    FeatureBoxIconWrapper,
    FeatureBoxItemWrapper,
    FeatureBoxTitle,
    FeatureBoxWrapper,
} from "./StyledFeatureBox";

function FeatureBox() {
    return (
        <FeatureBoxWrapper>
            <FeatureBoxItemWrapper>
                <FeatureBoxIconWrapper>
                    <WalletIcon />
                </FeatureBoxIconWrapper>
                <FeatureBoxTitle>Set up your wallet</FeatureBoxTitle>
                <FeatureBoxDescription>
                    Once you’ve set up your wallet of choice, connect it to
                    OpenSea by clicking the wallet icon in the top right corner.
                    Learn about the wallets we support.
                </FeatureBoxDescription>
            </FeatureBoxItemWrapper>
            <FeatureBoxItemWrapper>
                <FeatureBoxIconWrapper>
                    <CollectionBoxIcon />
                </FeatureBoxIconWrapper>
                <FeatureBoxTitle>Create your collection</FeatureBoxTitle>
                <FeatureBoxDescription>
                    Click My Collections and set up your collection. Add social
                    links, a description, profile & banner images, and set a
                    secondary sales fee.
                </FeatureBoxDescription>
            </FeatureBoxItemWrapper>
            <FeatureBoxItemWrapper>
                <FeatureBoxIconWrapper>
                    <UploadNFTIcon />
                </FeatureBoxIconWrapper>
                <FeatureBoxTitle>Add your NFTs</FeatureBoxTitle>
                <FeatureBoxDescription>
                    Upload your work (image, video, audio, or 3D art), add a
                    title and description, and customize your NFTs with
                    properties, stats, and unlockable content.
                </FeatureBoxDescription>
            </FeatureBoxItemWrapper>
            <FeatureBoxItemWrapper>
                <FeatureBoxIconWrapper>
                    <OnSaleIcon />
                </FeatureBoxIconWrapper>
                <FeatureBoxTitle>List them for sale</FeatureBoxTitle>
                <FeatureBoxDescription>
                    Choose between auctions, fixed-price listings, and
                    declining-price listings. You choose how you want to sell
                    your NFTs, and we help you sell
                </FeatureBoxDescription>
            </FeatureBoxItemWrapper>
        </FeatureBoxWrapper>
    );
}

export default FeatureBox;
