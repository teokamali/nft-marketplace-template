import CheckCircleIcon from "public/Icon/CheckCircleIcon";
import React from "react";
import { useIntl } from "react-intl";
import Button from "src/components/Common/Button/Button";
import PumpOrDump from "src/components/Common/PumpOrDump/PumpOrDump";
import abbrNum from "src/utils/abbrNum";
import { Mobile, ExceptMobile } from "src/utils/BreakPoints";
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
    StyledPumpOrDumpWrapper,
} from "./StyledRankingTable";
import messages from "./messages";
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
    const { formatMessage } = useIntl();

    return (
        <StyledRankingTableWrapper>
            <StyledRankingTableTitle>
                {formatMessage({ ...messages.RANKING_TABLE })}
            </StyledRankingTableTitle>
            <StyledRankingTable>
                <StyledRankingTableThead>
                    <tr>
                        <StyledRankingTableTheadTH>#</StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            {formatMessage({ ...messages.COLLECTIONS })}
                        </StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            {formatMessage({ ...messages.VOLUME })}
                        </StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            {formatMessage({ ...messages.LAST_24H })}
                        </StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            {formatMessage({ ...messages.LAST_7D })}
                        </StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            {formatMessage({ ...messages.FLOOR_PRICE })}
                        </StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            {formatMessage({ ...messages.OWNER })}
                        </StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            {formatMessage({ ...messages.ITEMS })}
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
                                            alt={item.name}
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
                                <StyledRankingNormalTd>
                                    <StyledPumpOrDumpWrapper>
                                        <PumpOrDump data={item.last_24h} />
                                    </StyledPumpOrDumpWrapper>
                                </StyledRankingNormalTd>
                                <StyledRankingNormalTd>
                                    <StyledPumpOrDumpWrapper>
                                        <PumpOrDump data={item.last_7D} />
                                    </StyledPumpOrDumpWrapper>
                                </StyledRankingNormalTd>
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
                        {formatMessage({ ...messages.BUTTON })}
                    </Button>
                </Mobile>
                <ExceptMobile>
                    <Button size="md" variant="normal">
                        {formatMessage({ ...messages.BUTTON })}
                    </Button>
                </ExceptMobile>
            </StyledRankingTableButton>
        </StyledRankingTableWrapper>
    );
}

export default RankingTable;
