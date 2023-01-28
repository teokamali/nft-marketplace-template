import React from "react";
import { useIntl } from "react-intl";
import LiveAuctionCard, { ILiveAuctionDataProps } from "./LiveAuctionCard/LiveAuctionCard";
import {
    StyledDescription,
    StyledLiveAuctionCardWrapper,
    StyledLiveAuctionSectionWrapper,
    StyledLiveAuctionsWrapper,
    StyledLiveAuctionTitleWrapper,
    StyledTitle,
} from "./StyledLiveAuctions";
import messages from "./messages";

export interface ILiveAuctionProps {
    data: ILiveAuctionDataProps[]
}

const LiveAuctions = ({ data }: ILiveAuctionProps) => {
    const { formatMessage } = useIntl();

    return (
        <StyledLiveAuctionSectionWrapper>
            <StyledLiveAuctionTitleWrapper>
                <StyledTitle>{formatMessage({ ...messages.LIVE_AUCTIONS })}</StyledTitle>
                <StyledDescription>
                    {formatMessage({ ...messages.LIVE_AUCTIONS_TITLE_DESC })}
                </StyledDescription>
            </StyledLiveAuctionTitleWrapper>
            <StyledLiveAuctionsWrapper>
                {data.map((item, index) => (
                    <StyledLiveAuctionCardWrapper key={index}>
                        <LiveAuctionCard data={item} />
                    </StyledLiveAuctionCardWrapper>
                ))}
            </StyledLiveAuctionsWrapper>
        </StyledLiveAuctionSectionWrapper>
    );
};

export default LiveAuctions;
