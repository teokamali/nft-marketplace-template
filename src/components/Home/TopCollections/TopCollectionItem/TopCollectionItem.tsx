import React from "react";
import PumpOrDump from "src/components/Common/PumpOrDump/PumpOrDump";
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
                        Floor Price:
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
