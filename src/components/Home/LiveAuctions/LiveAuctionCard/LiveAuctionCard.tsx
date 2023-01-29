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
import messages from "../messages";
import { useIntl } from "react-intl";


export interface ILiveAuctionCardProps {
    data: ILiveAuctionDataProps
}
export interface ILiveAuctionDataProps {
    imgSrc: string
    timeLeft: number
    name: string
    price: number
    likeCount: number
    seeCount: number
    link: string
}
const LiveAuctionCard = ({ data }: ILiveAuctionCardProps) => {
    const { formatMessage } = useIntl();

    return (
        <StyledLiveAuctionsCardWrapper>
            <StyledLiveAuctionsCardImageWrapper>
                <StyledImage src={data.imgSrc} alt="" />
                <StyledImageBadge>
                    <StyledImageBadgeIconWrapper>
                        <TimerErrorIcon />
                    </StyledImageBadgeIconWrapper>
                    <StyledImageBadgeText>
                        {
                            formatMessage(
                                { ...messages.TIME_LEFT },
                                { timeLeft: data.timeLeft }
                            )
                        }
                    </StyledImageBadgeText>
                </StyledImageBadge>
            </StyledLiveAuctionsCardImageWrapper>
            <StyledLiveAuctionCardContent>
                <StyledLiveAuctionCardTitle>
                    {data.name}
                </StyledLiveAuctionCardTitle>
                <StyledLiveAuctionPriceWrapper>
                    <StyledPrice>
                        {
                            formatMessage(
                                { ...messages.PRICE },
                                { price: data.price }
                            )
                        }
                    </StyledPrice>
                    <StyledLink href={data.link}>
                        {formatMessage({ ...messages.PLACE_BID })}
                    </StyledLink>
                </StyledLiveAuctionPriceWrapper>
            </StyledLiveAuctionCardContent>
            <StyledLiveAuctionCardFooter>
                <StyledDetailWrapper>
                    <StyledIconWrapper>
                        <LikeIcon />
                    </StyledIconWrapper>
                    <StyledFooterText>{data.likeCount}</StyledFooterText>
                </StyledDetailWrapper>
                <div>
                    <StyledDetailWrapper>
                        <StyledIconWrapper>
                            <EyeIcon />
                        </StyledIconWrapper>
                        <StyledFooterText>{data.seeCount}</StyledFooterText>
                    </StyledDetailWrapper>
                </div>
            </StyledLiveAuctionCardFooter>
        </StyledLiveAuctionsCardWrapper>
    );
};

export default LiveAuctionCard;
