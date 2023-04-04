import EyeBlueIcon from "public/Icon/EyeBlueIcon";
import React from "react";
import {
    StyleMoreItemsCardMainCardImage,
    StyleMoreItemsCardMainCardBox,
    StyleMoreItemsCardMainCardSeenBox,
    StyleMoreItemsCardMainCardSpanID,
    StyleMoreItemsCardMainCardSpanItem,
    StyleMoreItemsCardMainCardUpdateBox,
} from "./StyledMoreItemsCard";
import { useIntl } from "react-intl";
import messages from "./messages";

export const MoreItemsCard = () => {
    const { formatMessage } = useIntl();

    return (
        <StyleMoreItemsCardMainCardBox>
            <StyleMoreItemsCardMainCardImage src={"/images/nft-5.png"} />
            <StyleMoreItemsCardMainCardSpanID>
                #1235
            </StyleMoreItemsCardMainCardSpanID>
            <StyleMoreItemsCardMainCardSpanItem>
                Seeing green
            </StyleMoreItemsCardMainCardSpanItem>
            <StyleMoreItemsCardMainCardSpanItem>
                {formatMessage({ ...messages.PRICE_FORMAT }, { price: "0.05" })}
            </StyleMoreItemsCardMainCardSpanItem>
            <StyleMoreItemsCardMainCardUpdateBox>
                <span>
                    {formatMessage({ ...messages.LAST_UPDATE }, { date: 3 })}
                </span>
                <StyleMoreItemsCardMainCardSeenBox>
                    <EyeBlueIcon />
                    <span>88</span>
                </StyleMoreItemsCardMainCardSeenBox>
            </StyleMoreItemsCardMainCardUpdateBox>
        </StyleMoreItemsCardMainCardBox>
    );
};
