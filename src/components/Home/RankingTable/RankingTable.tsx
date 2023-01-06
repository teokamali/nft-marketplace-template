import CheckCircleIcon from "public/Icon/CheckCircleIcon";
import React from "react";
import abbrNum from "src/utils/abbrNum";
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
                                <td>
                                    {abbrNum({
                                        number: item.volume,
                                        decPlaces: 0,
                                    })}
                                </td>
                                <PumpOrDump data={item.last_24h} />
                                <PumpOrDump data={item.last_7D} />
                                <td>{item.floorPrice} Eth</td>
                                <td>
                                    {abbrNum({
                                        number: item.Owner,
                                        decPlaces: 0,
                                    })}
                                </td>
                                <td>
                                    {abbrNum({
                                        number: item.items,
                                        decPlaces: 0,
                                    })}
                                </td>
                            </StyledRankingTableRow>
                        );
                    })}
                </StyledRankingTableBody>
            </StyledRankingTable>
        </StyledRankingTableWrapper>
    );
}

export default RankingTable;
