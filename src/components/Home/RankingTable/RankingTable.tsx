import CheckCircleIcon from "public/Icon/CheckCircleIcon";
import React from "react";
import abbrNum from "src/utils/abbrNum";
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
                        const volume = abbrNum({
                            number: item.volume,
                            decPlaces: 0,
                        });

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
                                        <span>{item.name}</span>
                                        {item.isVerified && (
                                            <StyledVerifiedIconWrapper>
                                                <CheckCircleIcon />
                                            </StyledVerifiedIconWrapper>
                                        )}
                                    </StyledRankingCollectionWrapper>
                                </StyledRankingTd>
                                <td>{volume}</td>
                                <td>{item.last_24h}%</td>
                                <td>{item.last_7D}%</td>
                                <td>{item.floorPrice}</td>
                                <td>{item.Owner}</td>
                                <td>{item.items}</td>
                            </StyledRankingTableRow>
                        );
                    })}
                </StyledRankingTableBody>
            </StyledRankingTable>
        </StyledRankingTableWrapper>
    );
}

export default RankingTable;
