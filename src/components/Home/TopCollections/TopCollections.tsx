import ChevronDownIcon from "public/Icon/ChevronDownIcon";
import React from "react";
import { useIntl } from "react-intl";
import messages from "./messages";
import {
    StyledTopCollectionContent,
    StyledTopCollectionDropdownWrapper,
    StyledTopCollectionIconWrapper,
    StyledTopCollectionMainSubTitle,
    StyledTopCollectionMainTitle,
    StyledTopCollectionSubTitle,
    StyledTopCollectionsWrapper,
    StyledTopCollectionTitleWrapper,
} from "./StyledTopCollections";
import TopCollectionItem from "./TopCollectionItem/TopCollectionItem";

interface IProps {
    data: {
        avatar: string;
        name: string;
        floor_price: number;
        items: number;
        pump: string;
    }[];
}

const TopCollections = ({ data }: IProps) => {
    const { formatMessage } = useIntl();
    return (
        <StyledTopCollectionsWrapper>
            <StyledTopCollectionTitleWrapper>
                <StyledTopCollectionMainTitle>
                    {formatMessage({ ...messages.TITLE })}
                </StyledTopCollectionMainTitle>
                <StyledTopCollectionDropdownWrapper>
                    <StyledTopCollectionMainSubTitle>
                        last 24 hours
                    </StyledTopCollectionMainSubTitle>
                    <StyledTopCollectionIconWrapper>
                        <ChevronDownIcon />
                    </StyledTopCollectionIconWrapper>
                </StyledTopCollectionDropdownWrapper>
            </StyledTopCollectionTitleWrapper>
            <StyledTopCollectionSubTitle>
                {formatMessage({ ...messages.SUBTITLE })}
            </StyledTopCollectionSubTitle>
            <StyledTopCollectionContent>
                {data.map((item, i) => (
                    <TopCollectionItem key={i} itemData={item} rank={i + 1} />
                ))}
            </StyledTopCollectionContent>
        </StyledTopCollectionsWrapper>
    );
};

export default TopCollections;
