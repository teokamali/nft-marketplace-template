import React from "react";
import { useIntl } from "react-intl";
import PumpOrDump from "src/components/Common/PumpOrDump/PumpOrDump";
import messages from "./messages";
import {
    StyledPumpOrDumpWrapper,
    StyledTopCollectionFloorPrice,
    StyledTopCollectionFloorPriceTitle,
    StyledTopCollectionFloorPriceWrapper,
    StyledTopCollectionItemCount,
    StyledTopCollectionItemImage,
    StyledTopCollectionItemInfoWrapper,
    StyledTopCollectionItemPumpAndItemsWrapper,
    StyledTopCollectionItemRank,
    StyledTopCollectionItemWrapper,
    StyledTopCollectionName,
} from "./StyledTopCollection.Item";
interface IProps {
    itemData: {
        avatar: string;
        name: string;
        floor_price: number;
        items: number;
        pump: string;
    };
    rank: number;
}
const TopCollectionItem = ({ itemData, rank }: IProps) => {
    const { formatMessage } = useIntl();
    return (
        <StyledTopCollectionItemWrapper>
            <StyledTopCollectionItemRank>{rank}</StyledTopCollectionItemRank>
            <StyledTopCollectionItemImage
                src={itemData.avatar}
                alt={itemData.name}
            />
            <StyledTopCollectionItemInfoWrapper>
                <StyledTopCollectionName>
                    {itemData.name}
                </StyledTopCollectionName>
                <StyledTopCollectionFloorPriceWrapper>
                    <StyledTopCollectionFloorPriceTitle>
                        {formatMessage({ ...messages.FLOOR_PRICE })}
                    </StyledTopCollectionFloorPriceTitle>
                    <StyledTopCollectionFloorPrice>
                        {itemData.floor_price} Eth
                    </StyledTopCollectionFloorPrice>
                </StyledTopCollectionFloorPriceWrapper>
            </StyledTopCollectionItemInfoWrapper>
            <StyledTopCollectionItemPumpAndItemsWrapper>
                <StyledPumpOrDumpWrapper>
                    <PumpOrDump data={itemData.pump} />
                </StyledPumpOrDumpWrapper>
                <StyledTopCollectionItemCount>
                    {itemData.items}
                </StyledTopCollectionItemCount>
            </StyledTopCollectionItemPumpAndItemsWrapper>
        </StyledTopCollectionItemWrapper>
    );
};

export default TopCollectionItem;
