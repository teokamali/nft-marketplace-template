import Link from "next/link";
import EyeIcon from "public/Icon/EyeIcon";
import LikeIcon from "public/Icon/LikeIcon";
import TimerErrorIcon from "public/Icon/TimerErrorIcon";
import React from "react";
import {
    StyledDetailWrapper,
    StyledFooterText,
    StyledIconWrapper,
    StyledImage,
    StyledImageBadge,
    StyledImageBadgeIconWrapper,
    StyledImageBadgeText,
    StyledLink,
    StyledLiveAuctionCardContent,
    StyledLiveAuctionCardFooter,
    StyledLiveAuctionCardTitle,
    StyledLiveAuctionPriceWrapper,
    StyledLiveAuctionsCardImageWrapper,
    StyledLiveAuctionsCardWrapper,
    StyledPrice,
} from "./StyledLiveActionCard";

const LiveAuctionCard = () => {
    return (
        <StyledLiveAuctionsCardWrapper>
            <StyledLiveAuctionsCardImageWrapper>
                <StyledImage src="/images/nft-4.png" alt="" />
                <StyledImageBadge>
                    <StyledImageBadgeIconWrapper>
                        <TimerErrorIcon />
                    </StyledImageBadgeIconWrapper>
                    <StyledImageBadgeText>15 minutes left</StyledImageBadgeText>
                </StyledImageBadge>
            </StyledLiveAuctionsCardImageWrapper>
            <StyledLiveAuctionCardContent>
                <StyledLiveAuctionCardTitle>
                    Mortimer Crypto Mystic
                </StyledLiveAuctionCardTitle>
                <StyledLiveAuctionPriceWrapper>
                    <StyledPrice>Price : 0.2 ETH</StyledPrice>
                    <StyledLink href="#">Place a bid</StyledLink>
                </StyledLiveAuctionPriceWrapper>
            </StyledLiveAuctionCardContent>
            <StyledLiveAuctionCardFooter>
                <StyledDetailWrapper>
                    <StyledIconWrapper>
                        <LikeIcon />
                    </StyledIconWrapper>
                    <StyledFooterText>400</StyledFooterText>
                </StyledDetailWrapper>
                <div>
                    <StyledDetailWrapper>
                        <StyledIconWrapper>
                            <EyeIcon />
                        </StyledIconWrapper>
                        <StyledFooterText>88</StyledFooterText>
                    </StyledDetailWrapper>
                </div>
            </StyledLiveAuctionCardFooter>
        </StyledLiveAuctionsCardWrapper>
    );
};

export default LiveAuctionCard;
