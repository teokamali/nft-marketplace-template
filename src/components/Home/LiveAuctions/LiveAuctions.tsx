import React from "react";
import LiveAuctionCard from "./LiveAuctionCard/LiveAuctionCard";
import {
    StyledDescription,
    StyledLiveAuctionCardWrapper,
    StyledLiveAuctionSectionWrapper,
    StyledLiveAuctionsWrapper,
    StyledLiveAuctionTitleWrapper,
    StyledTitle,
} from "./StyledLiveAuctions";
const LiveAuctions = () => {
    const liveAuctions = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <StyledLiveAuctionSectionWrapper>
            <StyledLiveAuctionTitleWrapper>
                <StyledTitle>Live Auctions</StyledTitle>
                <StyledDescription>
                    Explore the newly listed remarkable NFTs on NFTLand, choose
                    the best one, and place your bid to purchase it.
                </StyledDescription>
            </StyledLiveAuctionTitleWrapper>
            <StyledLiveAuctionsWrapper>
                {liveAuctions.map((item, index) => (
                    <StyledLiveAuctionCardWrapper key={index}>
                        <LiveAuctionCard />
                    </StyledLiveAuctionCardWrapper>
                ))}
            </StyledLiveAuctionsWrapper>
        </StyledLiveAuctionSectionWrapper>
    );
};

export default LiveAuctions;
