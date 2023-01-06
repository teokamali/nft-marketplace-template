import CheckCircleIcon from "public/Icon/CheckCircleIcon";
import React from "react";
import Button from "src/components/Common/Button/Button";
import abbrNum from "src/utils/abbrNum";
import { Mobile, ExceptMobile } from "src/utils/BreakPoints";
import PumpOrDump from "./PumpOrDump/PumpOrDump";
import {
    StyledRankingTable,
    StyledRankingTableTitle,
    StyledRankingTableWrapper,
    StyledRankingTableThead,
    StyledRankingTableTheadTH,
    StyledRankingTableBody,
    StyledRankingNumber,
    StyledRankingImage,
    StyledRankingTd,
    StyledRankingTableRow,
    StyledRankingCollectionWrapper,
    StyledVerifiedIconWrapper,
    StyledRankingCollectionName,
    StyledRankingNormalTd,
    StyledRankingTableButton,
} from "./StyledRankingTable";

interface IProps {
    data: {
        avatar: string;
        name: string;
        isVerified: boolean;
        volume: number;
        last_24h: string;
        last_7D: string;
        floorPrice: number;
        Owner: number;
        items: number;
    }[];
}

function RankingTable({ data }: IProps) {
    return (
        <StyledRankingTableWrapper>
            <StyledRankingTableTitle>RankingTable</StyledRankingTableTitle>
            <StyledRankingTable>
                <StyledRankingTableThead>
                    <tr>
                        <StyledRankingTableTheadTH>#</StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            Collections
                        </StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            Volume
                        </StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            24H %
                        </StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            7D %
                        </StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            Floor Price
                        </StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            Owner
                        </StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            Items
                        </StyledRankingTableTheadTH>
                    </tr>
                </StyledRankingTableThead>
                <StyledRankingTableBody>
                    {data.map((item, i) => {
                        return (
                            <StyledRankingTableRow key={i}>
                                <StyledRankingTd>
                                    <StyledRankingNumber>
                                        {i + 1}
                                    </StyledRankingNumber>
                                </StyledRankingTd>
                                <StyledRankingTd>
                                    <StyledRankingCollectionWrapper>
                                        <StyledRankingImage
                                            src={item.avatar}
                                            alt="avatar"
                                        />
                                        <StyledRankingCollectionName>
                                            {item.name}
                                        </StyledRankingCollectionName>
                                        {item.isVerified && (
                                            <StyledVerifiedIconWrapper>
                                                <CheckCircleIcon />
                                            </StyledVerifiedIconWrapper>
                                        )}
                                    </StyledRankingCollectionWrapper>
                                </StyledRankingTd>
                                <StyledRankingNormalTd>
                                    {abbrNum({
                                        number: item.volume,
                                        decPlaces: 0,
                                    })}
                                </StyledRankingNormalTd>
                                <PumpOrDump data={item.last_24h} />
                                <PumpOrDump data={item.last_7D} />
                                <StyledRankingNormalTd>
                                    {item.floorPrice} Eth
                                </StyledRankingNormalTd>
                                <StyledRankingNormalTd>
                                    {abbrNum({
                                        number: item.Owner,
                                        decPlaces: 0,
                                    })}
                                </StyledRankingNormalTd>
                                <StyledRankingNormalTd>
                                    {abbrNum({
                                        number: item.items,
                                        decPlaces: 0,
                                    })}
                                </StyledRankingNormalTd>
                            </StyledRankingTableRow>
                        );
                    })}
                </StyledRankingTableBody>
            </StyledRankingTable>
            <StyledRankingTableButton>
                <Mobile>
                    <Button size="xs" variant="normal">
                        Go to Ranking
                    </Button>
                </Mobile>
                <ExceptMobile>
                    <Button size="md" variant="normal">
                        Go to Ranking
                    </Button>
                </ExceptMobile>
            </StyledRankingTableButton>
        </StyledRankingTableWrapper>
    );
}

export default RankingTable;
